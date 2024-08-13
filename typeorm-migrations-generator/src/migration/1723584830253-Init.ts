import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1723584830253 implements MigrationInterface {
    name = 'Init1723584830253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "treino" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "exercicio" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" text NOT NULL, "series" integer NOT NULL, "repeticoes" integer NOT NULL, "peso" integer NOT NULL, "treinoId" integer, "especificacaoId" integer)`);
        await queryRunner.query(`CREATE TABLE "especificacaoExercicio" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" text NOT NULL, "grupamento" text NOT NULL, "instrucoes" text, "equipamento" text)`);
        await queryRunner.query(`CREATE TABLE "temporary_exercicio" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" text NOT NULL, "series" integer NOT NULL, "repeticoes" integer NOT NULL, "peso" integer NOT NULL, "treinoId" integer, "especificacaoId" integer, CONSTRAINT "FK_b2d64974027e32e485b3def6b21" FOREIGN KEY ("treinoId") REFERENCES "treino" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_5d767b74540166a69019b410616" FOREIGN KEY ("especificacaoId") REFERENCES "especificacaoExercicio" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_exercicio"("id", "nome", "series", "repeticoes", "peso", "treinoId", "especificacaoId") SELECT "id", "nome", "series", "repeticoes", "peso", "treinoId", "especificacaoId" FROM "exercicio"`);
        await queryRunner.query(`DROP TABLE "exercicio"`);
        await queryRunner.query(`ALTER TABLE "temporary_exercicio" RENAME TO "exercicio"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercicio" RENAME TO "temporary_exercicio"`);
        await queryRunner.query(`CREATE TABLE "exercicio" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" text NOT NULL, "series" integer NOT NULL, "repeticoes" integer NOT NULL, "peso" integer NOT NULL, "treinoId" integer, "especificacaoId" integer)`);
        await queryRunner.query(`INSERT INTO "exercicio"("id", "nome", "series", "repeticoes", "peso", "treinoId", "especificacaoId") SELECT "id", "nome", "series", "repeticoes", "peso", "treinoId", "especificacaoId" FROM "temporary_exercicio"`);
        await queryRunner.query(`DROP TABLE "temporary_exercicio"`);
        await queryRunner.query(`DROP TABLE "especificacaoExercicio"`);
        await queryRunner.query(`DROP TABLE "exercicio"`);
        await queryRunner.query(`DROP TABLE "treino"`);
    }

}
