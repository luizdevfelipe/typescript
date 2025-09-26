import { promises } from "fs";
import { CustomerDataParser } from "./customer-data-parser";
import { CustomerData } from "./cutomer-data";

// Concrete class for parsing customer data from a JSON file
export class CustomerDataParserJson extends CustomerDataParser {

    // Implementing the abstract method to parse data from a JSON file
    protected async parseData(): Promise<CustomerData[]> {
        const rawData = await promises.readFile(this.filePath);

        const data = JSON.parse(rawData.toString());

        const customerData: CustomerData[] = [];

        for (const customer of data) {
            const {name, age, cpf} = customer;
            customerData.push({ name, age, cpf });
        }

        return customerData;
    }

    protected hook(): void {
        console.log('Hook executado em JsonDataParser');
    }
} 