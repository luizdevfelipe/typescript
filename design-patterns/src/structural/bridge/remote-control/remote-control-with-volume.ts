import { RemoteControl } from "./remote-control";

export class RemoteControlWithVolume extends RemoteControl {
    volumeUp(): void {
        const oldVolume = this.device.getVolume();
        this.device.setVolume(oldVolume + 10);

        console.log(`${this.device.getName()} had the volume ${oldVolume}, but now has the volume ${this.device.getVolume()}`); // Just to demonstration
    }

     volumeDown(): void {
        const oldVolume = this.device.getVolume();
        this.device.setVolume(oldVolume - 10);

        console.log(`${this.device.getName()} had the volume ${oldVolume}, but now has the volume ${this.device.getVolume()}`); // Just to demonstration
    }
}