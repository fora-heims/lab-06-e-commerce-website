import { getCart } from '../src/get-cart.js';

const test = QUnit.test;

test('getCart() should return the parsed object from local storage', (expect) => {
    const expected = [
        {
            id: '2',
            quantity: 6,
        },
        {
            id: '4',
            quantity: 10,
        },
        {
            id: '6',
            quantity: 25,
        }
    ];
    const cartData = [
        {
            id: '2',
            quantity: 6,
        },
        {
            id: '4',
            quantity: 10,
        },
        {
            id: '6',
            quantity: 25,
        }
    ];
    let cartDataString = JSON.stringify(cartData);
    localStorage.setItem('CART', cartDataString);

    const actual = getCart();

    expect.deepEqual(actual, expected);
});