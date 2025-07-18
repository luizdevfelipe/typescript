import { BicycleFactory } from "./factories/bicycle-factory";
import { CarFactory } from "./factories/car-factory";

const carFactory = new CarFactory();
const bicycleFactory = new BicycleFactory();

const fusca = carFactory.getVehicle('Fusca');

fusca.pickUp('Luiz');
fusca.stop();
