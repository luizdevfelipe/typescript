// npx ts-node --files --transpile-only src/behavioural/visitor/main.ts

import { AlcoholicDrink } from "./alcoholic-drink";
import { BrazilTaxVisitor } from "./brazil-tax-visitor";
import { Cigarette } from "./cigarrete";
import { Food } from "./food";
import { USTaxVisitor } from "./us-tax-visitor";

const food = new Food(10);
const cigarette = new Cigarette(5);
const alcoholic = new AlcoholicDrink(5);

const brazilTaxVisitor = new BrazilTaxVisitor();
const usTaxVisitor = new USTaxVisitor();

const cart = [food, cigarette, alcoholic];
const total = cart.reduce((sum, item) => item.getPrice() + sum, 0);
const totalBrazilTaxes = cart.reduce((sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum, 0);
const totalUSTaxes = cart.reduce((sum, item) => item.getPriceWithTaxes(usTaxVisitor) + sum, 0);

console.log("Total:", total);
console.log("Total with Brazil Taxes:", totalBrazilTaxes);
console.log("Total with US Taxes:", totalUSTaxes);