import { addItemToCart } from '../src/add-item.js';

const test = QUnit.test;

test('addItem() should add an item to the local storage cart', (expect) => {
    localStorage.removeItem('CART');
    const expected = [
        {
            id: '2',
            quantity: 7
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
    const cartData = [
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
    const cartDataString = JSON.stringify(cartData);
    localStorage.setItem('CART', cartDataString);
    addItemToCart('2');
    let actual = JSON.parse(localStorage.getItem('CART'));
    expect.deepEqual(actual, expected);
});