import { Mediator } from "./mediator";
import { SellerProduct } from "./seller-product";

// The Seller class interacts with the Mediator to sell products (Colleague)
export class Seller {
    private products: SellerProduct[] = [];
    private mediator?: Mediator;

    showProducts(): void {
        this.products.forEach(product => {
            console.log(`Product ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`);
        })
    }

    addProduct(...products: SellerProduct[]): void {
        products.forEach(product => {this.products.push(product)});
    }

    setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }

    sell(id: string): SellerProduct | void {
        const productIndex = this.products.findIndex(product => product.id === id);

        if (productIndex === -1) return;

        const product = this.products.splice(productIndex, 1)[0];
        
        return product;
    }
}