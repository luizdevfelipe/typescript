import { OrderPending } from "./order-pending";
import { ShoppingOrderState } from "./shopping-order-state-interfacel";

// Class that depends on multiple states
export class ShoppingOrder {
    private state: ShoppingOrderState = new OrderPending(this);

    getState(): ShoppingOrderState {
        return this.state;
    }

    setState(state: ShoppingOrderState): void {
        this.state = state;
        console.log(`Order state changed to: ${this.getStateName()}`);
    }

    // Emphasizes that the ContextClass can have different methods than the State classes
    getStateName(): string {
        return this.state.getName();
    }

    approvePayment(): void {
        this.state.approvePayment();
    }

    rejectPayment(): void {
        this.state.rejectPayment();
    }

    waitPayment(): void {
        this.state.waitPayment();
    }

    shipOrder(): void {
        this.state.shipOrder();
    }
}