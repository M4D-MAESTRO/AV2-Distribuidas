import {Column, MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddTypeToUser1605895148853 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users', new TableColumn({
            name: 'type',
            type: 'varchar',
            isNullable: true,            
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'type');
    }

}
