import { renderLineItem } from '../render-cart.js';
import { metals } from '../data/metals.js';
import { cartData } from '../data/cart-data.js';

const test = QUnit.test;

test('renderLineItem() function should return a tr HTML element with 4 td children', (expect) => {
    const expected = '<tr><td>Aluminium</td><td>25 Kilograms</td><td>$15</td><td>$375</td></tr>';
    
    const actual = renderLineItem(cartData[2], metals[5]).outerHTML;

    expect.equal(actual, expected);
});