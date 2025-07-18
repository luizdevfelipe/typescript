import { Bicycle } from "../vehicle/bicycle";
import { Car } from "../vehicle/car";
import { VehicleFactory } from "./vehicle-factory";

export class BicycleFactory extends VehicleFactory
{
    getVehicle(vehicleName: string): Bicycle 
    {
        return new Bicycle(vehicleName);
    }
}