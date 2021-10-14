import { clearCart } from '../src/clear-cart.js';

const test = QUnit.test;

test('removeItem() should', (expect) => {
    const expected = 'test not made yet';
    
    const actual = clearCart();

    expect.equal(actual, expected);
});