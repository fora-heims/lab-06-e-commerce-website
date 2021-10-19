import { addProduct } from '../src/add-product.js';

const form = document.getElementById('new-product-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(form);
    let newProduct = {
        id: data.get('id'),
        name: data.get('name'),
        image: data.get('image'),
        description: data.get('description'),
        protons: data.get('protons'),
        price: Number(data.get('price')),
    };
    addProduct(newProduct);
});