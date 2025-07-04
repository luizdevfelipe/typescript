import { MyDatabaseClassic } from './db/my-database-classic';

const db1 = MyDatabaseClassic.getInstance();
const db2 = MyDatabaseClassic.getInstance();
console.log(db1 === db2);

db1.addUser({name: 'John', age: 30});
db1.addUser({name: 'Jane', age: 25});

db1.removeUser(0);
db1.showUsers();

export { db1, db2 };