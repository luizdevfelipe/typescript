import { SystemUserAddressProtocol, SystemUserProtocol } from "./system-user-protocol";

export class AdminUser implements SystemUserProtocol {
    public firstName: string;
    public userName: string;

    constructor(firstName: string, userName: string) {
        this.firstName = firstName;
        this.userName = userName;
    }

    async getAddresses(): Promise<SystemUserAddressProtocol[]> {
        return new Promise((resolve, reject) => {
            return setTimeout(() => { 
                return resolve([
                    {street: 'Main St', number: 123},
                    {street: 'Second St', number: 456}
                ])    
            }, 2000);
        });
    }
    
}