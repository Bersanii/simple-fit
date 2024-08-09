import "reflect-metadata"
import { DataSource } from "typeorm"
import { Exercicio } from './entity/exercicio'
import { Treino } from './entity/treino'

export const AppDataSource = new DataSource({
    name: 'data-source',
    type: 'sqlite',
    database: "data-base",
    // mode: 'no-encryption',
    entities: ["./src/entity/*.ts"],
    // migrations: migrations, //["../migrations/author/*{.ts,.js}"] pra isso funcionar esbuild.minifyIdentifiers deve estar como false, se não o esbuild vai cagar o nome da classe, e se o nome não estiver correto ele não importa
    subscribers: [],
    logging: [/*'query',*/ 'error','schema'],
    synchronize: false,     // !!!You will lose all data in database if set to `true`
    migrationsRun: false  // Required with capacitor type
})
