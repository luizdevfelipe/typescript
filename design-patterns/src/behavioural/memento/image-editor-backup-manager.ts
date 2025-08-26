import { ImageEditor } from "./image-editor";
import { Memento } from "./memento";

export class ImageEditorBackupManager implements Memento {
    private mementos: Memento[] = []; // Backup pile

    constructor(private readonly originator: ImageEditor) { }

    getName(): string {
        throw new Error("Method not implemented.");
    }
    getDate(): Date {
        throw new Error("Method not implemented.");
    }

    backup(): void {
        console.log(`Backup: salvando o estado de ImageEditor`)
        this.mementos.push(this.originator.save());
    }

    undo(): void {
        const memento = this.mementos.pop();
        if (!memento) {
            console.log('Backup: nenhum memento encontrado');
            return;
        }

        this.originator.restore(memento);
        console.log(`Backup: restaurado para ${memento.getName()}`);
    }
    
    showMementos(): void {
        for (const memento of this.mementos) {
            console.log(`${memento.getName()} - ${memento.getDate()}`);
        }
    }
}