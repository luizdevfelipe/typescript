import { promises } from "fs";
import { CustomerDataParser } from "./customer-data-parser";
import { CustomerData } from "./cutomer-data";

// Concrete class for parsing customer data from a TXT file
export class CustomerDataParserTxt extends CustomerDataParser {

    // Implementing the abstract method to parse data from a TXT file
    protected async parseData(): Promise<CustomerData[]> {
        const rawData = await promises.readFile(this.filePath);

        const data = rawData.toString();
        const lines = data.split('\n');

        const customerData: CustomerData[] = [];

        for (const line of lines) {
            const [name, age, cpf] = line.split('\t');
            customerData.push({ name, age, cpf });
        }

        return customerData;
    }
} 