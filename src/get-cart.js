// THIS IS AN API
export function getCart(){
    const cartString = localStorage.getItem('CART') || '[]';
    let cartObject = JSON.parse(cartString);
    return cartObject;
}