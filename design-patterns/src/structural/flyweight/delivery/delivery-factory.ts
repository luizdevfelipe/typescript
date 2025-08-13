import { DeliveryFlyweight } from "./delivery-flyweight";
import { DeliveryLocationData, DeliveryLocationDictionary } from "./delivery-types";

export class DeliveryFactory {
    private locations: DeliveryLocationDictionary = {}

    makeLocation(intrinsicState: DeliveryLocationData): DeliveryFlyweight {
        // TODO
    }
}