function getMenu(){
    const div1 = document.createElement('div')
    div1.classList = 'div1'
    const img = document.createElement('img');
    img.classList = 'menu';
    img.src = '../dist/imgs/menu.jpg';
    div1.appendChild(img)
    return div1;
}

function right(){
    const img = document.createElement('img')
    img.classList = 'burger';
    img.src = '../dist/imgs/food.jpg';

    return img;
}

function info(){
    const caption = document.createElement('div')
    caption.classList = 'caption';
    caption.textContent = 'And the best burger in the town...';

    return caption;
}

function menuLoad(){
    const leftCon = document.querySelector('.leftCon')
    const rightCon = document.querySelector('.rightCon')

    const div2 = document.createElement('div')
    div2.classList = 'div2'

    leftCon.textContent = '';
    rightCon.textContent = '';

    const menu = getMenu();
    const burger = right();
    const inf = info();

    div2.appendChild(burger)
    div2.appendChild(inf)

    leftCon.appendChild(menu)
    rightCon.appendChild(div2)
}

export default menuLoad;