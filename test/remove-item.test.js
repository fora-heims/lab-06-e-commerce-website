import { clearCart } from '../src/clear-cart.js';

const test = QUnit.test;

test('removeItem() should', (expect) => {
    const expected = '';
    
    const actual = clearCart();

    expect.equal(actual, expected);
});