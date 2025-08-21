// npx ts-node --files --transpile-only src/behavioural/command/main.ts

import { LightBrightnessCommand } from "./light-brightness-command";
import { LightPowerCommand } from "./light-power-command";
import { SmartHouseApp } from "./smart-house-app";
import { SmartHouseLight } from "./smart-house-light";

// Receiver
const light = new SmartHouseLight("Living Room");
const bathroomLight = new SmartHouseLight("Bathroom");
// Command
const lightPowerCommand = new LightPowerCommand(light);
const lightBrightnessCommand = new LightBrightnessCommand(light);
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);
// Invoker
const smartHouseApp = new SmartHouseApp();

// Adds the command to the invoker
smartHouseApp.addCommand('btn-1', lightPowerCommand);
smartHouseApp.addCommand('btn-1-bright', lightBrightnessCommand);
smartHouseApp.addCommand('btn-2', bathroomLightPowerCommand);

// Executes the command via the invoker
smartHouseApp.executeCommand('btn-1'); 
smartHouseApp.executeCommand('btn-1-bright');
smartHouseApp.executeCommand('btn-2'); 

// Turns the light OFF, accessing the command directly
lightPowerCommand.undo(); 
bathroomLightPowerCommand.undo();