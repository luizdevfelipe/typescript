import { MainDishBuilder } from "./classes/main-dish-builder";
import { VeganDishBuilder } from "./classes/vegan-dish-builder";

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();
const meal = mainDishBuilder.makeDessert().getMeal();
console.log(meal);

const veganDishBuilder = new VeganDishBuilder();
console.log(veganDishBuilder.makeMeal().getMeal());