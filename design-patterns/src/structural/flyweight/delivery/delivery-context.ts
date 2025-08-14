import { DeliveryFactory } from "./delivery-factory";

// This function unifies the states (intrinsic and extrinsic)
export const deliveryContext = function (
    factory: DeliveryFactory,
    name: string,
    number: string,
    street: string,
    city: string
): void {
    const location = factory.makeLocation({ street, city }); // Returns the Location with intrinsic state
    location.deliver(name, number); // Dispatches the delivery method with extrinsic state
}