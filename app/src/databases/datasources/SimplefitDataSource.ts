//https://github.com/capacitor-community/sqlite/blob/master/docs/TypeORM-Usage-From-5.6.0.md
import { DataSource , type DataSourceOptions} from 'typeorm';
import sqliteParams from '../sqliteParams';
// import * as entities from '../entities';
// import * as migrations from '../migrations';

const dbName = "DB_SIMPLEFIT";

const dataSourceConfig: DataSourceOptions = {
  name: 'simplefitConnection',
  type: 'capacitor',
  driver: sqliteParams.connection,
  database: dbName,
  mode: 'no-encryption',
  entities: ['../entities/*.ts'],
  // migrations: migrations, //["../migrations/author/*{.ts,.js}"] pra isso funcionar esbuild.minifyIdentifiers deve estar como false, se não o esbuild vai cagar o nome da classe, e se o nome não estiver correto ele não importa
  migrations: ['../migrations/*.ts'],
  subscribers: [],
  logging: [/*'query',*/ 'error','schema'],
  synchronize: false,     // !!!You will lose all data in database if set to `true`
  migrationsRun: false  // Required with capacitor type
};
const dataSourceSimpleFit = new DataSource(dataSourceConfig);
// const simplefitDataSource = {
//   dataSource: dataSourceSimpleFit,
//   dbName: dbName
// };

export default dataSourceSimpleFit;