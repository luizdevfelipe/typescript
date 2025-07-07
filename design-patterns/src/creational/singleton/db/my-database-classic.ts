import { User } from "../interfaces/user";

export class MyDatabaseClassic {
    private static _instance: MyDatabaseClassic | null = null;
    private users: User[] = [];

    private constructor() {}

    public static get instance(): MyDatabaseClassic
    {
        if (MyDatabaseClassic._instance === null) {
            MyDatabaseClassic._instance = new MyDatabaseClassic();
        }

        return MyDatabaseClassic._instance;
    }

    public addUser(user: User):void {
        this.users.push(user);
    }

    public removeUser(index: number): void {
        this.users.splice(index, 1);
    }

    public showUsers(): void {
        console.log(this.users);
    }
}
