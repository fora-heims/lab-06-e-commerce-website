import { metals } from '../data/metals.js';

export function getProducts() {
    let productString = localStorage.getItem('PRODUCTS');
    const productObject = JSON.parse(productString);

    if (!productObject) {
        let productString = JSON.stringify(metals);
        localStorage.setItem('PRODUCTS', productString);
    }

    return productObject || metals;
}