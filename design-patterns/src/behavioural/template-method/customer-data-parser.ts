import { CustomerData } from "./cutomer-data";

// Abstract class defining the template method for parsing customer data
export abstract class CustomerDataParser {
    public customerData: CustomerData[] = [];

    constructor(protected filePath: string) { }

    readonly fixCustomerData = async (): Promise<void> => {
        this.customerData = await this.parseData();
        this.customerData = this.fixCpf();
    }

    private fixCpf(): CustomerData[] {
        return this.customerData.map(customer => {
            return { ...customer, cpf: customer.cpf.replace(/\D/g, '') };
        });
    }

    protected abstract async parseData(): Promise<CustomerData[]>;
}