import { MealBuilderContract } from "../interfaces/meal-builder-contract";
import { MealComposite } from "./composite-meals";
import { Beans, Rice } from "./meals";

export class VeganDishBuilder implements MealBuilderContract {
    private _meal: MealComposite = new MealComposite();

    makeMeal(): this {
        const rice = new Rice('Arroz Integral', 5);
        const beans = new Beans('Feijão', 10);
        this._meal.addChild(rice, beans);
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