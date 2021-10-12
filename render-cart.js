export function renderLineItem(cartItem, metalData){
    const tableRow = document.createElement('tr');
        
    const tdName = document.createElement('td');
    tdName.textContent = metalData.name;

    const tdQuantity = document.createElement('td');
    tdQuantity.textContent = `${cartItem.quantity} Kilograms`;

    const tdPrice = document.createElement('td');
    tdPrice.textContent = `$${metalData.price}`;

    const tdTotal = document.createElement('td');
    let total = metalData.price * cartItem.quantity;
    tdTotal.textContent = `$${total}`;

    tableRow.append(tdName, tdQuantity, tdPrice, tdTotal);

    return tableRow;
}