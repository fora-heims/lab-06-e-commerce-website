import { getProducts } from '../src/get-products.js';

export function addProduct(newProduct) {
    let products = getProducts();
    products.push(newProduct);
    let string = JSON.stringify(products);
    localStorage.setItem('PRODUCTS', string);
}