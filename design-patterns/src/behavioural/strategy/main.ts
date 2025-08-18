// npx ts-node --files --transpile-only src/behavioural/strategy/main.ts

import { DefaultDiscountStrategy } from "./shopping-cart/default-discount";
import { ECommerceShoppingCart } from "./shopping-cart/ecommerce-shopping-cart";

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discount = new DefaultDiscountStrategy();
shoppingCart.addProduct({ name: "Product 1", price: 150 });
shoppingCart.addProduct({ name: "Product 2", price: 50 });
shoppingCart.addProduct({ name: "Product 3", price: 200 });

console.log("Products in cart:", shoppingCart.getProducts());
console.log("Total:", shoppingCart.getTotal());
console.log("Total with discount:", shoppingCart.getTotalWithDiscount());
