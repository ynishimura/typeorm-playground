import {MigrationInterface, QueryRunner} from "typeorm";

export class user1617028992389 implements MigrationInterface {
    name = 'user1617028992389'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE INDEX "IDX_58e4dbff0e1a32a9bdc861bb29" ON "user" ("firstName") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_58e4dbff0e1a32a9bdc861bb29"`);
    }

}
