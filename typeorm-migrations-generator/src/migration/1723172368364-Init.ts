import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1723172368364 implements MigrationInterface {
    name = 'Init1723172368364'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "exercicio" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "treino" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "treino_exercicios_exercicio" ("treinoId" integer NOT NULL, "exercicioId" integer NOT NULL, PRIMARY KEY ("treinoId", "exercicioId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a4c62ebfd65e3567206af30ed3" ON "treino_exercicios_exercicio" ("treinoId") `);
        await queryRunner.query(`CREATE INDEX "IDX_8788139ad232e3ba899c92d1d3" ON "treino_exercicios_exercicio" ("exercicioId") `);
        await queryRunner.query(`DROP INDEX "IDX_a4c62ebfd65e3567206af30ed3"`);
        await queryRunner.query(`DROP INDEX "IDX_8788139ad232e3ba899c92d1d3"`);
        await queryRunner.query(`CREATE TABLE "temporary_treino_exercicios_exercicio" ("treinoId" integer NOT NULL, "exercicioId" integer NOT NULL, CONSTRAINT "FK_a4c62ebfd65e3567206af30ed36" FOREIGN KEY ("treinoId") REFERENCES "treino" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_8788139ad232e3ba899c92d1d31" FOREIGN KEY ("exercicioId") REFERENCES "exercicio" ("id") ON DELETE CASCADE ON UPDATE CASCADE, PRIMARY KEY ("treinoId", "exercicioId"))`);
        await queryRunner.query(`INSERT INTO "temporary_treino_exercicios_exercicio"("treinoId", "exercicioId") SELECT "treinoId", "exercicioId" FROM "treino_exercicios_exercicio"`);
        await queryRunner.query(`DROP TABLE "treino_exercicios_exercicio"`);
        await queryRunner.query(`ALTER TABLE "temporary_treino_exercicios_exercicio" RENAME TO "treino_exercicios_exercicio"`);
        await queryRunner.query(`CREATE INDEX "IDX_a4c62ebfd65e3567206af30ed3" ON "treino_exercicios_exercicio" ("treinoId") `);
        await queryRunner.query(`CREATE INDEX "IDX_8788139ad232e3ba899c92d1d3" ON "treino_exercicios_exercicio" ("exercicioId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_8788139ad232e3ba899c92d1d3"`);
        await queryRunner.query(`DROP INDEX "IDX_a4c62ebfd65e3567206af30ed3"`);
        await queryRunner.query(`ALTER TABLE "treino_exercicios_exercicio" RENAME TO "temporary_treino_exercicios_exercicio"`);
        await queryRunner.query(`CREATE TABLE "treino_exercicios_exercicio" ("treinoId" integer NOT NULL, "exercicioId" integer NOT NULL, PRIMARY KEY ("treinoId", "exercicioId"))`);
        await queryRunner.query(`INSERT INTO "treino_exercicios_exercicio"("treinoId", "exercicioId") SELECT "treinoId", "exercicioId" FROM "temporary_treino_exercicios_exercicio"`);
        await queryRunner.query(`DROP TABLE "temporary_treino_exercicios_exercicio"`);
        await queryRunner.query(`CREATE INDEX "IDX_8788139ad232e3ba899c92d1d3" ON "treino_exercicios_exercicio" ("exercicioId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a4c62ebfd65e3567206af30ed3" ON "treino_exercicios_exercicio" ("treinoId") `);
        await queryRunner.query(`DROP INDEX "IDX_8788139ad232e3ba899c92d1d3"`);
        await queryRunner.query(`DROP INDEX "IDX_a4c62ebfd65e3567206af30ed3"`);
        await queryRunner.query(`DROP TABLE "treino_exercicios_exercicio"`);
        await queryRunner.query(`DROP TABLE "treino"`);
        await queryRunner.query(`DROP TABLE "exercicio"`);
    }

}
