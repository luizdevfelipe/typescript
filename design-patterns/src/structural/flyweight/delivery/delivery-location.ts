import { DeliveryFlyweight } from "./delivery-flyweight";
import { DeliveryLocationData } from "./delivery-types";

export class DeliveryLocation implements DeliveryFlyweight {

    constructor(private readonly intrinsicState: DeliveryLocationData) {} // Intrinsic state, must be read-only because it is shared among multiple objects

    // Receive extrinsic state and unify with intrinsic state
    deliver(name: string, number: string): void {
        console.log('Entrega para %s', name);
        console.log('Em', this.intrinsicState.street, this.intrinsicState.city);
        console.log('Número:', number);
        console.log('--------------------------------');
    }

}