import { ProductProtocol } from "./product-protocol";

export class TShirt implements ProductProtocol {
    private name = 'Camiseta';
    private price = 50;

    getPrice(): number {
        return this.price;
    }
    getName(): string {
        return this.name;
    }

}