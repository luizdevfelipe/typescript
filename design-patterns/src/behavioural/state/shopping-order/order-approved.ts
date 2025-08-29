import { OrderPending } from "./order-pending";
import { OrderRejected } from "./order-rejected";
import { ShoppingOrder } from "./shopping-order";
import { ShoppingOrderState } from "./shopping-order-state-interfacel";

export class OrderApproved implements ShoppingOrderState {
    private name = 'OrderApproved';

    constructor(private order: ShoppingOrder) { }

    getName(): string {
        return this.name;
    }

    // This method is called when the payment will be approved
    // So it won't do anything logical here
    approvePayment(): void {
        console.log("Payment is already approved...");
    }

    rejectPayment(): void {
        this.order.setState(new OrderRejected(this.order));
    }


    waitPayment(): void {
        this.order.setState(new OrderPending(this.order));
    }

    shipOrder(): void {
        console.log("Order has been shipped!");
    }

}