// npx ts-node --files --transpile-only src/behavioural/iterator/main.ts

import { MyDataStructure } from "./my-data-structure";
import { MyReverseIterator } from "./my-reverse-iterator";

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');

const [a, b] = dataStructure;
console.log(a, b);

const [c, ...rest] = dataStructure;
console.log(c, rest);

console.log('...\n');

dataStructure.resetIterator();
for (const data of dataStructure) {
    console.log(data);
}

console.log('...\n');

dataStructure.changeIterator(new MyReverseIterator(dataStructure));

for (const data of dataStructure) {
    console.log(data);
}