import { findById } from '../utils.js';
import { getCart } from './get-cart.js';

export function addItem(id){
    let cart = getCart();
    let cartItem = findById(id, cart);
    if (cartItem){
        cartItem.quantity++;
    } else {
        const addObject = { 'id': id, 'quantity': 1 };
        cart.push(addObject);
    }
    return cart;
}