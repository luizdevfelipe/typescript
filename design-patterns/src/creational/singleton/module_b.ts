import { MyDatabaseModule } from './db/my-database-module';
import { MyDatabaseFunction } from './db/my-database-function';
import { MyDatabaseClassic } from './db/my-database-classic';
import { db1 as db1Module, db2 as db2Function, db3 as db3Classic } from './module_a';

const db1 = MyDatabaseModule;
db1.addUser({name: 'João', age: 18});
db1.addUser({name: 'Maria', age: 20});
db1.showUsers();

const db2 = MyDatabaseFunction;
db2.addUser({name: 'Pedro', age: 22});  
db2.addUser({name: 'Ana', age: 25});
db2.showUsers();

const db3 = MyDatabaseClassic.instance;
db3.addUser({name: 'Carlos', age: 30});
db3.addUser({name: 'Luiza', age: 28});
db3.showUsers();

console.log(db1 === db1Module && db2 === db2Function && db3 === db3Classic);
