import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createProducts1612226841851 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
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
            name: 'manufacturer',
            type: 'varchar',
          },
          {
            name: 'amount',
            type: 'int',
          },
          {
            name: 'value',
            type: 'float',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
