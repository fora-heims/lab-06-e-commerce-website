export function findById(id, array){
    for (let object of array){
        if (id === object.id){
            return object;
        }
    }
}

export function calcOrderTotal(cartArray, productArray){
    let cartTotalCalc = 0;
    for (let item of cartArray){
        const itemObject = findById(item.id, productArray);
        let total = itemObject.price * item.quantity;
        cartTotalCalc += total;
    }
    return cartTotalCalc;
}