import { type MigrationInterface, type QueryRunner } from "typeorm";

export class Initial1723127824634 implements MigrationInterface {
    name: 'Initial1723127824634'
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "exercicio"(id INTEGER PRIMARY KEY, name TEXT NOT NULL) `,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE "exercicio"`,
        ) // reverts things made in "up" method
    }

}
