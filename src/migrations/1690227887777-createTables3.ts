import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables31690227887777 implements MigrationInterface {
    name = 'CreateTables31690227887777'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" RENAME COLUMN "telefone" TO "telephone"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "telephone" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "adress" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "adress"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "telefone" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" RENAME COLUMN "telephone" TO "telefone"`);
    }

}
