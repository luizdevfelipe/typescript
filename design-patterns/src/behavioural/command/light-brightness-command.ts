import { SmartHouseCommand } from "./smart-house-command";
import { SmartHouseLight } from "./smart-house-light";

export class LightBrightnessCommand implements SmartHouseCommand{
    constructor(private readonly light: SmartHouseLight) { }

    execute(): void {
        const brightness = this.light.increaseBrightness();
        console.log(`${this.light.name} brightness increased to ${brightness}`);
    }
    undo(): void {
        const brightness = this.light.decreaseBrightness();
        console.log(`${this.light.name} brightness decreased to ${brightness}`);
    }
}