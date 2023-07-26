import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables21690210792275 implements MigrationInterface {
    name = 'CreateTables21690210792275'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "admin" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "admin"`);
    }

}
