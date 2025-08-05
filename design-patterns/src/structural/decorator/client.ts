import { ProductStampedDecorator } from "./product/product-stamped-decorator";
import { TShirt } from "./product/t-shirt";

const tshirt = new TShirt();
const stampedTshirt = new ProductStampedDecorator(tshirt);
const frontAndBackStampedTshirt = new ProductStampedDecorator(stampedTshirt);

console.log(`${tshirt.getName()} R$${tshirt.getPrice()}`);
console.log(`${stampedTshirt.getName()} R$${stampedTshirt.getPrice()}`);
console.log(`${frontAndBackStampedTshirt.getName()} R$${frontAndBackStampedTshirt.getPrice()}`);