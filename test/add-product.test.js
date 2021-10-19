import { metals } from '../data/metals.js';
import { addProduct } from '../src/add-product.js';
import { getProducts } from '../src/get-products.js';

const test = QUnit.test;

test('addProduct function should add a product to the localStorage array', (expect) => {
    localStorage.removeItem('PRODUCTS');
    let products = metals;
    let string = JSON.stringify(products);
    localStorage.setItem('PRODUCTS', string);
    const newProduct = {
        id: '7',
        name: 'Hydrogen',
        image: './assets/aluminium.jpg',
        description: 'yada, yada',
        protons: '1',
        price: 1,
    };
    addProduct(newProduct);
    products = getProducts();
    expect.equal(products.length, 7);
});