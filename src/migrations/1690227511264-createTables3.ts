import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables31690227511264 implements MigrationInterface {
    name = 'CreateTables31690227511264'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "password" character varying(120) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "admin" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "admin"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "password"`);
    }

}
