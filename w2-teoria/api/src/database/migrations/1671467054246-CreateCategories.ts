import { identity } from "rxjs";
import {MigrationInterface, QueryRunner, Table, UpdateQueryBuilder} from "typeorm";

export class CreateCategories1671467054246 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"categories",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary: true,
                    },
                    {
                        name:"name",
                        type:"varchar"
                    },
                    {
                        name:"description",
                        type:"varchar"
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default: "now()"
                    },                    
                ], 
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories");
    }

}
