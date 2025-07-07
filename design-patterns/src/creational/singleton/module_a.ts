import { MyDatabaseFunction } from './db/my-database-function';
import { MyDatabaseModule } from './db/my-database-module';
import { MyDatabaseClassic } from './db/my-database-classic';

const db1 = MyDatabaseModule;
const db2 = MyDatabaseFunction;
const db3 = MyDatabaseClassic.instance;

export { db1, db2, db3 };