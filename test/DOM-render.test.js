import { renderCart } from '../cart/render-line-items.js';
import { metals } from '../data/metals.js';
import { cartData } from '../data/cart-data.js';

const test = QUnit.test;

test('renderCart() function should update the DOM and fill the cart', (expect) => {
    const expected = 'g';
    
    const actual = renderCart(cartData, metals).outerHTML;

    expect.equal(actual, expected);
});