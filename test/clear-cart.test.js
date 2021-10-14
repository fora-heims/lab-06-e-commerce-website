import { clearCart } from '../src/clear-cart.js';
import { getCart } from '../src/get-cart.js';

const test = QUnit.test;

test('removeItem() should make the cart on local storage empty', (expect) => {
    const expected = [];

    let cart = [
        {
            id: '2',
            quantity: 6
        },
        {
            id: '4',
            quantity: 10
        },
        {
            id: '6',
            quantity: 25
        }
    ];

    localStorage.setItem(JSON.stringify(cart));
    
    clearCart();

    const actual = getCart();

    expect.deepEqual(actual, expected);
});