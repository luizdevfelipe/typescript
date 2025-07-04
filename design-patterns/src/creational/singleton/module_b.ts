import { MyDatabaseClassic } from './db/my-database-classic';
import { db1 as db1Module } from './module_a';

const db1 = MyDatabaseClassic.getInstance();
db1.addUser({name: 'João', age: 18});
db1.addUser({name: 'Maria', age: 20});
db1.showUsers();

console.log(db1 === db1Module);