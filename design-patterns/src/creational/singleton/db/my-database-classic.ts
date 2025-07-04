import { User } from "../interfaces/user";

export class MyDatabaseClassic {
    private static instance: MyDatabaseClassic | null = null;
    private users: User[] = [];

    private constructor() {}

    public static getInstance(): MyDatabaseClassic
    {
        if (MyDatabaseClassic.instance === null) {
            MyDatabaseClassic.instance = new MyDatabaseClassic();
        }

        return MyDatabaseClassic.instance;
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
