// npx ts-node --files --transpile-only src/behavioural/template-method/main.ts

import { resolve } from "path";
import { CustomerDataParserTxt } from "./customer-data-parser-txt";
import { CustomerDataParserJson } from "./customer-data-parser-json";

async function run() {
    const filePathTXT = resolve(__dirname, 'files', 'customer.txt');
    const customerDataParserTXT = new CustomerDataParserTxt(filePathTXT);
    await customerDataParserTXT.fixCustomerData();
    console.log(customerDataParserTXT.customerData);

    console.log();

    const filepathJson = resolve(__dirname, 'files', 'customer.json');
    const customerDataParserJson = new CustomerDataParserJson(filepathJson);
    await customerDataParserJson.fixCustomerData();
    console.log(customerDataParserJson.customerData);
}

run();