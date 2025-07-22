import { Customer } from "../customer/customer";
import { IndividualCustomer } from "../customer/individual-customer";
import { IndividualCar } from "../vehicle/individual-car";
import { Vehicle } from "../vehicle/vehicle";
import { CreateCustomerVehicle } from "./customer-vehicle-factory";

export class IndividualCustomerVehicleFactory implements CreateCustomerVehicle {
    createCustomer(customerName: string): Customer {
        return new IndividualCustomer(customerName);
    }
    createVehicle(name: string, customerName: string): Vehicle {
        const customer = this.createCustomer(customerName);
        return new IndividualCar(name, customer)
    }
    
}