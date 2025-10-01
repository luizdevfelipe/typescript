import { MyDataStructure } from "./my-data-structure";
import { MyIteratorProtocol } from "./my-iterator-protocol";

export class MyDefaultIterator implements MyIteratorProtocol<string> {
    // Circular Dependency with MyDataStructure
    constructor(private readonly dataStructure: MyDataStructure) {}

    reset(): void {}

    next(): IteratorResult<string> {
        return { value: "", done: true };
    }
}