import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertDictionaries1729540978508 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO example_type (id, name) VALUES
            (1, 'chest'),
            (2, 'back'),
            (3, 'press'),
            (4, 'legs'),
            (5, 'shoulders'),
            (6, 'biceps'),
            (7, 'triceps'),
            (8, 'kardio')`,
        )
        await queryRunner.query(
            `INSERT INTO example (id, name, example_type_id, equipment) VALUES
            (1, 'bench press', 1, 'barbell'),
            (2, 'dumbbell bench press', 1, 'dumbbells'),
            (3, 'dips', 7, 'horizontal bar'),
            (4, 'extension of arms in the upper block', 7, 'simulator'),
            (5, 'bent over arm extension with dumbbell', 7, 'dumbbells'),
            (6, 'elliptical trainer', 8, 'kardio'),
            (7, 'pull-ups', 2, 'horizontal bar'),
            (8, 'upper block thrust', 2, 'simulator'),
            (9, 'lower block thrust', 2, 'simulator'),
            (10, 'extension', 2, 'horizontal bar'),
            (11, 'barbell curl', 6, 'barbell'),
            (12, 'seated dumbbell raise with emphasis on the thigh', 6, 'dumbbells'),
            (13, 'pullover', 1, 'barbell'),
            (14, 'seated barbell press', 5, 'barbell'),
            (15, 'bent-over dumbbell raises', 5, 'dumbbells'),
            (16, 'seated dumbbell press', 5, 'dumbbells'),
            (17, 'wide grip barbell row', 5, 'barbell')`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `TRUNCATE TABLE "example_type"`,
        )
        await queryRunner.query(
            `TRUNCATE TABLE "example"`,
        )
    }

}
