import { BicycleFactory } from "./factories/bicycle-factory";
import { CarFactory } from "./factories/car-factory";
import { randomVehicleAlgorithm } from "./main/random-vehicle-algorithm";
import { randomNumberLength } from "./utils/random-numbers-length";

const carFactory = new CarFactory();
const bicycleFactory = new BicycleFactory();

const fusca = carFactory.getVehicle('Fusca');

fusca.pickUp('Luiz');
fusca.stop();

const customerNames = ['Luiz', 'Felipe'];
console.log(customerNames.length);

for (let i = 0; i < 10; i++) {
    const vehicle = randomVehicleAlgorithm();
    const name = customerNames[randomNumberLength(customerNames.length-1)];

    vehicle.pickUp(name);
    vehicle.stop();
}
