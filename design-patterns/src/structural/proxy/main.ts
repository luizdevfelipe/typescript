// npx ts-node --files --transpile-only src/structural/proxy/main.ts

import { SystemUserProxy } from "./system-user/system-user-proxy";

async function clientCode(): Promise<void> {
    const user = new SystemUserProxy("Luiz", "luizdevfelipe");

    console.log("Requesting user addresses...");
    console.log(await user.getAddresses());

    console.log("User Addresses CACHE:");
    for (let i = 0; i < 3; i++) {
        console.log(await user.getAddresses());
    }
}

clientCode();