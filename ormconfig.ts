import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
    type: 'postgres',
    database: 'nest',
    username: 'postgres',
    password: 'root',
    port: 5432,
    entities: ['dist/src/**/*.entity.{js, ts}'],
    synchronize: true,
    migrations: [
        'dist/src/db/migrations/*.js'
    ],
    // cli: {
    //     migrationsDir: 'src/db/migrations'
    // }
}
export default config;