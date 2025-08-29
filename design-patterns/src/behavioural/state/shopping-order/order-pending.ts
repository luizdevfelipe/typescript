import { OrderApproved } from "./order-approved";
import { OrderRejected } from "./order-rejected";
import { ShoppingOrder } from "./shopping-order";
import { ShoppingOrderState } from "./shopping-order-state-interfacel";

export class OrderPending implements  ShoppingOrderState {
    private name = 'OrderPending';

    constructor(private order: ShoppingOrder) {}

    getName(): string {
        return this.name;
    }

    approvePayment(): void {
        this.order.setState(new OrderApproved(this.order));
    }

    rejectPayment(): void {
        this.order.setState(new OrderRejected(this.order));
    }

    // This method is called when the payment is still pending
    // So it won't do anything logical here
    waitPayment(): void {
        console.log("Payment is still pending...");
    }

    shipOrder(): void {
        console.log("Cannot ship the order while payment is pending...");
    }
    
}