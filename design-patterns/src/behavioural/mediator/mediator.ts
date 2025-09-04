import { Seller } from "./seller";
import { SellerProduct } from "./seller-product";

// This is the Mediator class that facilitates communication between Buyers and Sellers
export class Mediator {
    private sellers: Seller[] = [];

    addSeller(...sellers: Seller[]): void {
        sellers.forEach(seller => {
            this.sellers.push(seller);
            seller.setMediator(this);
        });
    }
 
    buy(id: string): SellerProduct | void {
        let product;

        for (let i = 0; i < this.sellers.length; i++) {
            product = this.sellers[i].sell(id);
            if (product) {
                console.log(`Product: "${product.name}" bought for Price: ${product.price}.`);
                return;
            }
        }

        console.log('Product was not found');
    }

    showProducts(): void {
        this.sellers.forEach(seller => seller.showProducts());
    }
}