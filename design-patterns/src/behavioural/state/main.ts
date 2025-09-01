// npx ts-node --files --transpile-only src/behavioural/state/main.ts

import { ShoppingOrder } from "./shopping-order/shopping-order";

const order = new ShoppingOrder(); // Pending
order.approvePayment(); // Approved
order.waitPayment(); // Pending
order.shipOrder(); // Shipped

order.rejectPayment(); // Rejected
order.approvePayment(); // Fail
order.shipOrder(); // Fail

