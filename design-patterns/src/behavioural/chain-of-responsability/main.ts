// npx ts-node --files --transpile-only src/behavioural/chain-of-responsability/main.ts

import { CEOBudgetHandler } from "./ceo-budget-handler";
import { CustomerBudget } from "./customer-budget";
import { DirectorBudgetHandler } from "./director-budget-handler";
import { ManagerBudgetHandler } from "./manager-budget-handler";
import { SellerBudgetHandler } from "./seller-budget-hander";

// The cliente code knows and manages the chain of handlers
// But it is possible that the own hierarchy of handlers create the chain

// This Chain of Responsability is exited when one of the handlers treat the request
const customerBudget = new CustomerBudget(10000);

const seller = new SellerBudgetHandler();
seller
    .setNextHandler(new ManagerBudgetHandler())
    .setNextHandler(new DirectorBudgetHandler())
    .setNextHandler(new CEOBudgetHandler());

console.log(customerBudget);
seller.handle(customerBudget);
console.log(customerBudget);
