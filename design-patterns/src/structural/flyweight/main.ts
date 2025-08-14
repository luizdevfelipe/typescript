// npx ts-node --files --transpile-only src/structural/flyweight/main.ts

import { deliveryContext } from "./delivery/delivery-context";
import { DeliveryFactory } from "./delivery/delivery-factory";

const factory = new DeliveryFactory();

deliveryContext(factory, "Luiz", "99", "Main St", "City");
deliveryContext(factory, "Felipe", "88", "Main St", "City");
deliveryContext(factory, "John", "77", "Second St", "City");
deliveryContext(factory, "Doe", "66", "Second St", "City");

deliveryContext(factory, "Luiz", "99", "Main St", "City");
deliveryContext(factory, "Felipe", "88", "Main St", "City");
deliveryContext(factory, "John", "77", "Second St", "City");
deliveryContext(factory, "Doe", "66", "Second St", "City");


console.log(factory.getLocations());