import { DeviceImplamentation } from "./device-implementation";

export class Radio implements DeviceImplamentation {
    private volume: number = 10;
    private powerStatus: boolean = false
    private name: string = "Radio";

    getName(): string {
        return this.name;
    }
    setPower(powerStatus: boolean): void {
        this.powerStatus = powerStatus;
    }
    getPower(): boolean {
        return this.powerStatus;
    }
    setVolume(volume: number): void {
        if (volume < 0 || volume > 100 && this.powerStatus) { return;}
        this.volume = volume;
    }
    getVolume(): number {
        if (!this.powerStatus) { return 0; } // Return 0 if Radio is off
        return this.volume;
    }

}