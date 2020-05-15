import { MigrationInterface, QueryRunner } from "typeorm";

export class createUsersTable1589567893077 implements MigrationInterface {
  name = "createUsersTable1589567893077";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "name" character varying NOT NULL`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`, undefined);
  }
}
