import { addProduct } from '../src/add-product.js';
import { getProducts } from '../src/get-products.js';

const form = document.getElementById('new-product-form');
let currentProducts = getProducts();


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(form);
    let exists = false;
    for (let product of currentProducts) {
        if (product.name === data.get('name')) {
            exists = true;
        }
    }
    if (exists) {
        alert('Product already exists! Not Submitted');
    } else {
        let newProduct = {
            id: `${currentProducts.length + 1}`,
            name: data.get('name'),
            image: data.get('image'),
            description: data.get('description'),
            protons: data.get('protons'),
            price: Number(data.get('price')),
        };
        addProduct(newProduct);
    }
    form.reset();
});