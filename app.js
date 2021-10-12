// import functions and grab DOM elements
import { metals } from './metals.js';
import { renderMetal } from './render.js';
const metalsList = document.getElementById('metals-list');

// initialize global state
for (let metalObject of metals){
    const metalCard = renderMetal(metalObject);
    metalsList.append(metalCard);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
