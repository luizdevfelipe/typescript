import { MealCompositeContract } from "../interfaces/meal-composite-contract";

export class MealComposite implements MealCompositeContract {
    private readonly _children: MealCompositeContract[] = [];

    public getPrice(): number {
        return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
    }

    public addChild(...meal: MealCompositeContract[]): void {
       meal.forEach((item) =>  this._children.push(item));
    }
}