import { ProductCustomizedDecorator } from "./product/product-customized-decorator";
import { ProductStampedDecorator } from "./product/product-stamped-decorator";
import { TShirt } from "./product/t-shirt";

const tshirt = new TShirt();
const stampedTshirt = new ProductStampedDecorator(tshirt);
const frontAndBackStampedTshirt = new ProductStampedDecorator(stampedTshirt);
const customizedTshirt = new ProductCustomizedDecorator(tshirt);

console.log(`${tshirt.getName()} R$${tshirt.getPrice()}`);
console.log(`${stampedTshirt.getName()} R$${stampedTshirt.getPrice()}`);
console.log(`${frontAndBackStampedTshirt.getName()} R$${frontAndBackStampedTshirt.getPrice()}`);
console.log(`${customizedTshirt.getName()} R$${customizedTshirt.getPrice()}`);