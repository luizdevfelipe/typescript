import { User } from "../interfaces/user";

const users: User[] = [];

export const MyDatabaseModule = {
    addUser(user: User): void {
        users.push(user);
    },

    removeUser(index: number): void {
        users.splice(index, 1);
    },

    showUsers(): void {
        console.log(users);
    }
}
