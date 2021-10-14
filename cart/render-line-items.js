import { metals } from '../data/metals.js';
import { findById, calcOrderTotal } from '../utils.js';
import { renderLineItem } from '../render-cart.js';
import { cartData } from '../data/cart-data.js';
import { clearCart } from '../src/clear-cart.js';

const tableBody = document.getElementById('table-body');
const cartTotal = document.getElementById('cart-total');
const checkout = document.getElementById('checkout-button');

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

checkout.addEventListener('click', () => {
    clearCart();
    alert(`Your order has been placed for ${total}. Thank you for your business.`);
    window.location.replace('../');
});