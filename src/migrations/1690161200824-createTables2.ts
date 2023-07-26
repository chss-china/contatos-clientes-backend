import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables21690161200824 implements MigrationInterface {
    name = 'CreateTables21690161200824'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "password" character varying(120) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "password"`);
    }

}
