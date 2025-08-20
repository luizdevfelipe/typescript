import { LightPowerCommand } from "./light-power-command";
import { SmartHouseLight } from "./smart-house-light";

const light = new SmartHouseLight("Living Room");
const lightPowerCommand = new LightPowerCommand(light);
lightPowerCommand.execute(); // Turns the light ON