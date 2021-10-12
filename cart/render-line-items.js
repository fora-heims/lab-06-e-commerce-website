import { metals } from '../data/metals.js';
import { findById, calcOrderTotal } from '../utils.js';
import { renderLineItem } from '../render-cart.js';
import { cartData } from '../data/cart-data.js';

const tableBody = document.getElementById('table-body');
const cartTotal = document.getElementById('cart-total');

let total = `$${calcOrderTotal(cartData, metals)}`;

function renderCart(anyCartData){
    for (let item of anyCartData){
        const itemObject = findById(item.id, metals);

        const tr = renderLineItem(item, itemObject);

        tableBody.appendChild(tr);
    }
}
renderCart(cartData);
cartTotal.textContent = total;