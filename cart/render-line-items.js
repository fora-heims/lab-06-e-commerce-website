import { metals } from '../data/metals.js';
import { findById } from '../utils.js';
import { cartData } from '../data/cart-data.js';
const tableBody = document.getElementById('table-body');
const cartTotal = document.getElementById('cart-total');

function renderCart(anyCartData){
    let cartTotalCalc = 0;
    for (let item of anyCartData){
        const itemObject = findById(item.id, metals);

        const tableRow = document.createElement('tr');
        
        const tdName = document.createElement('td');
        tdName.textContent = itemObject.name;
        const tdQuantity = document.createElement('td');
        tdQuantity.textContent = `${item.quantity} Kilograms`;
        const tdPrice = document.createElement('td');
        tdPrice.textContent = `$${itemObject.price}`;
        const tdTotal = document.createElement('td');
        let total = itemObject.price * item.quantity;
        tdTotal.textContent = `$${total}`;

        cartTotalCalc += total;

        tableRow.append(tdName, tdQuantity, tdPrice, tdTotal);
        tableBody.append(tableRow);
    }
    cartTotal.textContent = `$${cartTotalCalc}`;
}
renderCart(cartData);