import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables21690703597104 implements MigrationInterface {
    name = 'CreateTables21690703597104'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "admin" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "admin" SET DEFAULT false`);
    }

}
