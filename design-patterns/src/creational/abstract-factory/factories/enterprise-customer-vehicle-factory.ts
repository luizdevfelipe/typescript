import { Customer } from "../customer/customer";
import { EnterpriseCustomer } from "../customer/enterprise-customer";
import { EnterpriseCar } from "../vehicle/enterprise-car";
import { Vehicle } from "../vehicle/vehicle";
import { CreateCustomerVehicle } from "./customer-vehicle-factory";

export class EnterpriseCustomerVehicleFactory implements CreateCustomerVehicle {
    createCustomer(customerName: string): Customer {
        return new EnterpriseCustomer(customerName);
    }
    createVehicle(name: string, customerName: string): Vehicle {
        const customer = this.createCustomer(customerName);
        return new EnterpriseCar(name, customer)
    }
    
}