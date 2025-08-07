import { MealBuilderContract } from "../interfaces/meal-builder-contract";
import { MealComposite } from "./composite-meals";
import { Beans, Beverage, Meat, Rice } from "./meals";

export class MainDishBuilder implements MealBuilderContract {
    private _meal: MealComposite = new MealComposite();

    makeMeal(): this {
        const rice = new Rice('Arroz', 5);
        const beans = new Beans('Feijão', 10);
        const meat = new Meat('Carne', 20);
        this._meal.addChild(rice, beans, meat);
        return this;
    }

    makeBeverage(): this {
        const beverage = new Beverage('Refrigerante', 5);
        this._meal.addChild(beverage);
        return this;
    }

    makeDessert(): this {
        const dessert = new Beverage('Pudim', 10);
        this._meal.addChild(dessert);
        return this;
    }

    getMeal(): MealComposite {
        return this._meal;
    }

    getPrice(): number {
        return this._meal.getPrice();
    }

    reset(): this {
        this._meal = new MealComposite();
        return this;
    }

}