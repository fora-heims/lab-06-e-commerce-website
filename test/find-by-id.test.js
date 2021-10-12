import { findById } from '../utils.js';
import { metals } from '../data/metals.js';

const test = QUnit.test;

test('findById() should return the object of the corresponding actual id', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = { id: '2',
        name: 'Silver',
        image: './assets/silver.jpg',
        description: 'Highest electrical conductivity, thermal conductivity, and reflectivity  of any metal',
        protons: 47,
        price: 60 };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById('2', metals);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
