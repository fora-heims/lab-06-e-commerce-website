// import functions and grab DOM elements
import { metals } from './data/metals.js';
import { renderMetal } from './render.js';
import { addItemToCart } from './src/add-item.js';

const metalsList = document.getElementById('metals-list');

// initialize global state
for (let metalObject of metals){
    const metalCard = renderMetal(metalObject);
    metalsList.append(metalCard);
}
// set event listeners 
let addButtons = document.querySelectorAll('.add-button');
for (let button of addButtons){
    button.addEventListener('click', () => {
        addItemToCart(button.id);
    });
}
