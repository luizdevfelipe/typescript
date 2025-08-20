export class SmartHouseLight {
    private isOn: boolean = false;
    private brightness: number = 50;

    constructor (public name: string) {}

    getPowerStatus(): string {
        return this.isOn ? 'ON' : 'OFF';
    }

    on(): boolean {
        this.isOn = true;
        console.log(`${this.name} is now ${this.getPowerStatus()}`);
        return this.isOn;
    }

    off(): boolean {
        this.isOn = false;
        console.log(`${this.name} is now ${this.getPowerStatus()}`);
        return this.isOn;
    }

    increaseBrightness(): number {
        if (this.brightness < 100) {
            this.brightness += 1;
        }
        return this.brightness;        
    }

    decreaseBrightness(): number {
        if (this.brightness > 0) {
            this.brightness -= 1;
        }
        return this.brightness;        
    }
}