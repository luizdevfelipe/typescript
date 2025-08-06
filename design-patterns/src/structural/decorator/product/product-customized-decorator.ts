import { ProductDecorator } from "./product-decorator";

export class ProductCustomizedDecorator extends ProductDecorator {
    getName(): string {
        return this.product.getName() + ' customized';
    }

    getPrice(): number {
        return this.product.getPrice() + 20;
    }
}