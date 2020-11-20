import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class CreateAllTables1605896115612 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tarefa',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },

                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'aluno_id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        isNullable: true
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
            }),
        );
 
        await queryRunner.createTable(
            new Table({
                name: 'softskill',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },

                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
            }),
        );

        await queryRunner.createTable(
            new Table({
                name: 'grupo',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },

                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'turma_id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        isNullable: true
                    },
                    {
                        name: 'atividadeAvaliativa_id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
            }),
        );

        await queryRunner.createTable(
            new Table({
                name: 'questao_dia',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },

                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'aluno_id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        isNullable: true
                    },
                    {
                        name: 'questao_id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        isNullable: true
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
            }),
        );

        await queryRunner.createTable(
            new Table({
                name: 'questao',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },

                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'user_id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        isNullable: true
                    },
                    {
                        name: 'hardskill_id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        isNullable: true
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
            }),
        );

        await queryRunner.createTable(
            new Table({
                name: 'avaliacao360',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },

                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'grupo_id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        isNullable: true
                    },
                    {
                        name: 'atividadeAvaliativa_id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        isNullable: true
                    },
                    {
                        name: 'aluno_id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        isNullable: true
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
            }),
        );

        await queryRunner.createTable(
            new Table({
                name: 'atividade_avaliativa',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },

                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'turma_id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        isNullable: true
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
            }),
        );

        await queryRunner.createTable(
            new Table({
                name: 'curso',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },

                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
            }),
        );

        await queryRunner.createTable(
            new Table({
                name: 'turma',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },

                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
            }),
        );

        await queryRunner.addColumn('users', new TableColumn({
            name: 'curso_id',
            type: 'uuid',
            isNullable: true
        }));

        await queryRunner.addColumn('disciplines', new TableColumn({
            name: 'turma_id',
            type: 'uuid',
            isNullable: true
        }));


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tarefa');
        await queryRunner.dropTable('softskill');
        await queryRunner.dropTable('grupo');
        await queryRunner.dropTable('questao_dia');
        await queryRunner.dropTable('questao');
        await queryRunner.dropTable('avaliacao360');
        await queryRunner.dropTable('atividade_avaliativa');
        await queryRunner.dropTable('curso');
        await queryRunner.dropTable('turma');

        await queryRunner.dropColumn('users', 'curso_id');
        await queryRunner.dropColumn('disciplines', 'turma_id');
    }

}
