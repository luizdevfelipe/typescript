// Class that depends on multiple states
export class ShoppingOrder {
    private state: ShoppingOrderState = new OrderPending(this);
}