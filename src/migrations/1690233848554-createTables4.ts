import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables41690233848554 implements MigrationInterface {
    name = 'CreateTables41690233848554'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "adress"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "zipCode" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_eef56fa2f5345a5d0e184615b50" UNIQUE ("zipCode")`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "city" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "street" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "state" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "country" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "country"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "street"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_eef56fa2f5345a5d0e184615b50"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "zipCode"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "adress" text NOT NULL`);
    }

}
