import { MealCompositeContract } from "../interfaces/meal-composite-contract";

export abstract class AbstractMeal implements MealCompositeContract {

    public constructor (private name: string, private price: number) {}

    public getPrice(): number {
        return this.price;
    }
}