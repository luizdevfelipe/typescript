// npx ts-node --files --transpile-only src/behavioural/mediator/main.ts

import { Buyer } from "./buyer";
import { Mediator } from "./mediator";
import { Seller } from "./seller";

const mediator = new Mediator();
const seller1 = new Seller();
const seller2 = new Seller();

seller1.addProduct({ id: '1', name: 'Product 1', price: 100 });
seller1.addProduct({ id: '2', name: 'Product 2', price: 200 });

seller2.addProduct({ id: '3', name: 'Product 3', price: 300 });
seller2.addProduct({ id: '4', name: 'Product 4', price: 400 });

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);

buyer.viewProducts();
buyer.buyProduct('3');
buyer.buyProduct('4');

buyer.viewProducts();