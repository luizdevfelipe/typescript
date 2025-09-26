// npx tsc src/behavioural/observer/observer.ts -w

interface Observable  {
    subscribe(...observers: Observer[]): void;
    unsubscribe(observer: Observer): void;
    notify(): void;
}

interface Observer {
    update(...args: unknown[]): void;
}

class InputObservable implements Observable {
    private observers: Observer[] = [];

    constructor(public input: HTMLInputElement) { }

    subscribe(...observers: Observer[]): void {
        observers.forEach(observer => {
            if (!this.observers.includes(observer)) {
                this.observers.push(observer)
            }
        });
    }

    unsubscribe(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex !== -1) this.observers.splice(observerIndex, 1);
    }
    
    notify(): void {
        this.observers.forEach(observer => observer.update(this));
    }
}
