import { EnterpriseCustomerVehicleFactory } from "./factories/enterprise-customer-vehicle-factory"
import { IndividualCustomerVehicleFactory } from "./factories/individual-customer-vehicle-factory";

const enterpriseFactory = new EnterpriseCustomerVehicleFactory();
const individualFactory = new IndividualCustomerVehicleFactory();


const enterpriseCar = enterpriseFactory.createVehicle('Strada', 'João');
const individualCar = individualFactory.createVehicle('Gol', 'João');

enterpriseCar.belongsTo();
individualCar.belongsTo();