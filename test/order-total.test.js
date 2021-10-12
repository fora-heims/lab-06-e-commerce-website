import { calcOrderTotal } from '../utils.js';
import { metals } from '../data/metals.js';
import { cartData } from '../data/cart-data.js';

const test = QUnit.test;

test('calcOrderTotal() should calculate the total price of the items in the cart', (expect) => {

    const expected = 985;
    
    const actual = calcOrderTotal(cartData, metals);

    expect.equal(actual, expected);
});