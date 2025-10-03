import { Product } from "./product";
import { TaxVisitorProtocol } from "./tax-visitor-protocol";

export class AlcoholicDrink extends Product {
    constructor(protected price: number) {
        super("Alcoholic Drink", price);
    }

    getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
        return visitor.calculateAlcoholicDrinkTaxes(this);
    }
}