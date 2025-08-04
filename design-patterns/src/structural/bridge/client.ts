import { Radio } from "./device/radio";
import { Tv } from "./device/tv";
import { RemoteControl } from "./remote-control/remote-control";
import { RemoteControlWithVolume } from "./remote-control/remote-control-with-volume";

export function clientCode(abstraction: RemoteControl | RemoteControlWithVolume): void {
    abstraction.togglePower();

    // Type guard to check if abstraction is RemoteControlWithVolume
    if (!('volumeUp' in abstraction)) { return; }

    abstraction.volumeUp();
    abstraction.volumeUp();
}

const tv = new Tv();
const radio = new Radio();

const radioRemoteControl = new RemoteControl(radio);
const tvRemoteControlVolume = new RemoteControlWithVolume(tv);

clientCode(tvRemoteControlVolume); // Runs the power toggle and volume up for TV
clientCode(radioRemoteControl); // Runs the power toggle for Radio, but no volume control available


