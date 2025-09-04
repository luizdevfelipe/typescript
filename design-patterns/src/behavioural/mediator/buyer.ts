import { Mediator } from "./mediator";

// The Buyer class interacts with the Mediator to view and buy products (Colleague)
export class Buyer {
    constructor(private mediator: Mediator) {}

    viewProducts(): void {
        this.mediator.showProducts();
    }

    buyProduct  (id: string): void {
        this.mediator.buy(id);
    }                                   
}