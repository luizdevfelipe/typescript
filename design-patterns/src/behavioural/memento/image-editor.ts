import { ConcreteMemento } from "./concrete-memento";
import { Memento } from "./memento";

// Originator
export class ImageEditor {
    constructor(private filePath: string, private fileFormat: string) {}

    convertFormatTo(newFormat: string): void {
        this.fileFormat = newFormat;
        this.filePath = this.filePath.split('.').slice(0, -1).join('');
        this.filePath += `.${newFormat}`;
    }

    save(): Readonly<Memento>  {
        const date = new Date();

        return new ConcreteMemento(
            date.toISOString(),
            date,
            this.filePath,
            this.fileFormat
        );
    }

    restore(memento: Memento): void {
        const concreteMemento = memento as ConcreteMemento;
        this.filePath = concreteMemento.getFilePath();
        this.fileFormat = concreteMemento.getFileFormat();
    }
}
