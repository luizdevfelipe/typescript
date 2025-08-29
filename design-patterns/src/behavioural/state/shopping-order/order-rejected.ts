import { OrderApproved } from "./order-approved";
import { OrderPending } from "./order-pending";
import { ShoppingOrder } from "./shopping-order";
import { ShoppingOrderState } from "./shopping-order-state-interfacel";

export class OrderRejected implements ShoppingOrderState {
    private name = 'OrderRejected';

    constructor(private order: ShoppingOrder) { }

    getName(): string {
        return this.name;
    }

    approvePayment(): void {
        console.log("Cannot approve a rejected payment. Please customer, contact support to retry...");
    }

    // This method is called when the payment will be rejected
    // So it won't do anything logical here
    rejectPayment(): void {
        console.log("Payment is already rejected...");
    }

    waitPayment(): void {
        console.log("Cannot wait for a rejected payment. Please customer, contact support to retry...");
    }

    shipOrder(): void {
        console.log("Cannot ship a rejected order. Please customer, contact support to retry...");
    }

}