import { Vehicle } from "../vehicle/vehicle";

export abstract class VehicleFactory
{
    // Functional logics...
    pickUp(customerName: string, vehicleName: string): Vehicle
    {
        const car = this.getVehicle(vehicleName);
        car.pickUp(customerName);
        return car;
    }

    // Factory Method
    abstract getVehicle(vehicleName: string): Vehicle;
}