import { DiscountStrategy } from "./discount-strategy";
import { ECommerceProductProtocol } from "./ecommerce-product-protocol";

export class ECommerceShoppingCart {
    private products: ECommerceProductProtocol[] = [];
    private _discountStrategy: DiscountStrategy = new DiscountStrategy();

    addProduct(...products: ECommerceProductProtocol[]): void {
        products.forEach((product) => this.products.push(product));
    }

    getProducts(): ECommerceProductProtocol[] {
        return this.products;
    }

    getTotal(): number {
        return this.products.reduce((tot, product) => tot + product.price, 0);
    }

    getTotalWithDiscount(): number {
        return this._discountStrategy.getDiscount(this);
    }

    set discount(discount: DiscountStrategy) {
        this._discountStrategy = discount;
    }

    get discount(): number {
        return this._discountStrategy.getDiscount(this);
    }
}