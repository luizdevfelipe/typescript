// npx ts-node --files --transpile-only src/behavioural/iterator/main.ts

import { MyDataStructure } from "./my-data-structure";

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');

const [a, b] = dataStructure;

console.log(a, b);
console.log();

for (const data of dataStructure) {
    console.log(data);
}