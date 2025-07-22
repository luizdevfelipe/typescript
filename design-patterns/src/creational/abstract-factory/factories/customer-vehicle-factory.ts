import { Customer } from "../customer/customer";
import { Vehicle } from "../vehicle/vehicle";

export interface CreateCustomerVehicle {
    createCustomer(customerName: string): Customer;
    createVehicle(name: string, customerName: string): Vehicle;
}