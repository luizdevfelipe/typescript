import { AlcoholicDrink } from "./alcoholic-drink";
import { Cigarette } from "./cigarrete";
import { Food } from "./food";

export interface TaxVisitorProtocol {
    calculateFoodTaxes(food: Food): number;
    calculateCigaretteTaxes(cigarette: Cigarette): number;
    calculateAlcoholicDrinkTaxes(alcoholic: AlcoholicDrink): number;
}