import { DeviceImplamentation } from "../device/device-implementation";

// This is the base class that could be abstract, but for this example it's not necessary
export class RemoteControl {
    constructor (protected device: DeviceImplamentation) {}

    togglePower(): void {
        this.device.setPower(!this.device.getPower());
        console.log(`${this.device.getName()} power status: ${this.device.getPower()}`); // Just to demonstration
    }
}