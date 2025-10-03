import { AlcoholicDrink } from "./alcoholic-drink";
import { Cigarette } from "./cigarrete";
import { Food } from "./food";
import { TaxVisitorProtocol } from "./tax-visitor-protocol";

export class BrazilTaxVisitor implements TaxVisitorProtocol {
    calculateFoodTaxes(food: Food): number {
        return food.getPrice() * 1.05; // 5% tax
    }
    calculateCigaretteTaxes(cigarette: Cigarette): number {
        return cigarette.getPrice() * 2.5; // 150% tax
    }
    calculateAlcoholicDrinkTaxes(alcoholic: AlcoholicDrink): number {
        return alcoholic.getPrice() * 1.5; // 50% tax
    }
    
}