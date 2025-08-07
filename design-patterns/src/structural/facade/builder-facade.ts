import { MainDishBuilder } from "../../creational/builder/classes/main-dish-builder";
import { VeganDishBuilder } from "../../creational/builder/classes/vegan-dish-builder";

export class BuilderFacade {
    // This facade references to /src/creational/builder/index.ts
    private mainDishBuilder = new MainDishBuilder();
    private veganDishBuilder = new VeganDishBuilder();

    makeMeal1(): void {
        this.mainDishBuilder.makeMeal();
        console.log(this.mainDishBuilder.getMeal());
        console.log(this.mainDishBuilder.getPrice());
    }

    makeMeal2(): void {
        this.mainDishBuilder.reset();
        const meal2 = this.mainDishBuilder.makeBeverage().getMeal();
        console.log(meal2);
    }
    
    makeMeal3(): void {
        this.veganDishBuilder.makeMeal();
        console.log(this.veganDishBuilder.getMeal());
        console.log(this.veganDishBuilder.getPrice());
    }

}