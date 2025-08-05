import { ProductDecorator } from "./product-decorator";

export class ProductStampedDecorator extends ProductDecorator {
    getPrice(): number {
        return this.product.getPrice() + 5; // Adds a stamp fee
    }
    getName(): string {
        return this.product.getName() + ' com estampa';
    }
}