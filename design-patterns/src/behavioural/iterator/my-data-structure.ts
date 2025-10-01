import { MyDefaultIterator } from "./my-default-iterator";
import { MyIteratorProtocol } from "./my-iterator-protocol";

export class MyDataStructure {
    private _items: string[] = [];
    private iterator: MyIteratorProtocol<string> = new MyDefaultIterator(this);

    addItem(...items: string[]): void {
        items.forEach(item => this.items.push(item));
    }

    get items(): string[] {
        return this._items;
    }

    size(): number {
        return this.items.length;
    }
}