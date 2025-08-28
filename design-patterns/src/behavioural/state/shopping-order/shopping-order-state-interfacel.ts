// Interface that standardizes the behavior of different shopping order states
export interface ShoppingOrderState {
    getName(): string;
    approvePayment(): void;
    rejectPayment(): void;
    waitPayment(): void;
    shipOrder(): void;
}