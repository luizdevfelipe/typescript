import { AlcoholicDrink } from "./alcoholic-drink";
import { Cigarette } from "./cigarrete";
import { Food } from "./food";
import { TaxVisitorProtocol } from "./tax-visitor-protocol";

export class USTaxVisitor implements TaxVisitorProtocol {
    calculateFoodTaxes(food: Food): number {
        return food.getPrice() * 1.15; // 15% tax
    }
    calculateCigaretteTaxes(cigarette: Cigarette): number {
        return cigarette.getPrice() * 3; // 200% tax
    }
    calculateAlcoholicDrinkTaxes(alcoholic: AlcoholicDrink): number {
        return alcoholic.getPrice() * 2; // 100% tax
    }
    
}