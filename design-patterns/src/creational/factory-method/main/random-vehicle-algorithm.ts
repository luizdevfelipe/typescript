import { BicycleFactory } from "../factories/bicycle-factory";
import { CarFactory } from "../factories/car-factory";
import { randomNumberLength } from "../utils/random-numbers-length";
import { Vehicle } from "../vehicle/vehicle";

export function randomVehicleAlgorithm(): Vehicle
{
    const carFactory = new CarFactory();
    const bicycleFactory = new BicycleFactory();

    const car1 = carFactory.getVehicle('Fusca');
    const car2 = carFactory.getVehicle('Gol');
    const bicycle = bicycleFactory.getVehicle('Bicicleta');

    const cars = [car1, car2, bicycle];
    return cars[randomNumberLength(cars.length)];
}