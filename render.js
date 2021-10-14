export function renderMetal(metal) {
    const metalDiv = document.createElement('div');
    metalDiv.classList.add('metal-div');

    const ima = document.createElement('img');
    ima.classList.add('metal-image');
    ima.src = metal.image;

    const nam = document.createElement('h2');
    nam.textContent = metal.name;

    const des = document.createElement('p');
    des.textContent = metal.description;

    const pro = document.createElement('h3');
    pro.textContent = `Atomic Number: ${metal.protons}`;

    const pri = document.createElement('p');
    pri.textContent = `Cost per Kilogram: $${metal.price}`;

    const but = document.createElement('button');
    but.textContent = 'Add to Cart';
    but.classList.add('add-button');
    but.id = metal.id;

    metalDiv.append(nam, ima, des, pro, pri, but);
    return metalDiv;
}