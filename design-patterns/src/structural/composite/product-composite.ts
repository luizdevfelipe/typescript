export abstract class ProductComponent {
    abstract getPrice(): number;
    // empty methods for composite classes, but also inherited in leaf classes
    add(product: ProductComponent): void { }
    remove(product: ProductComponent): void { }
}

export class ProductLeaf extends ProductComponent {
    constructor(public name: string, public price: number) {
        super();
    }

    getPrice(): number {
        return this.price;
    }
}

export class ProductComposite extends ProductComponent {
    private children: ProductComponent[] = [];

    getPrice(): number {
        return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
    }

    add(...products: ProductComponent[]): void {
        products.forEach((product) => this.children.push(product));
    }

    remove(product: ProductComponent): void {
        const productIndex = this.children.indexOf(product);
        if (productIndex !== -1) this.children.splice(productIndex, 1);
    }
}

// Client Code
const camiseta = new ProductLeaf('Camiseta', 40);
const carro = new ProductLeaf('Carro', 40_000);
const casa = new ProductLeaf('Casa', 400_000);
const celular = new ProductLeaf('Celular', 2000);
const controle = new ProductLeaf('Controle', 350);
const recentPurchases = new ProductComposite();
const cardBox = new ProductComposite();

cardBox.add(celular, controle);

recentPurchases.add(camiseta, carro, casa);
recentPurchases.add(cardBox);

console.log(recentPurchases);
console.log(recentPurchases.getPrice());

