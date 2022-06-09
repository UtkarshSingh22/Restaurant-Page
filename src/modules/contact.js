function addImage(){
    const div3 = document.createElement('div')
    div3.classList = 'div3'
    const img = document.createElement('img')
    img.classList = 'time';

    img.src = '../dist/imgs/time.jpg'
    div3.appendChild(img)

    return div3;
}

function info(){
    const time = document.createElement('div')
    time.classList = 'info2';

    const h1 = document.createElement('h2')
    const h2 = document.createElement('p')
    const h3 = document.createElement('p')
    const h4 = document.createElement('p')

    h1.classList = 'find';
    h2.classList = 'day'
    h3.classList = 'lunchTime'
    h4.classList = 'address'

    h1.textContent = 'Find Us Here'
    h2.textContent = 'Monday - Sunday'
    h3.textContent = 'Lunch : 9am - 3pm & Dinner : 7pm - 11pm'
    h4.textContent = 'Whitefield, Bangalore'

    time.appendChild(h1)
    time.appendChild(h2)
    time.appendChild(h3)
    time.appendChild(h4)

    return time;
}

function loadContactPage(){

    const leftCon = document.querySelector('.leftCon')
    const rightCon = document.querySelector('.rightCon')

    leftCon.textContent = ''
    rightCon.textContent = ''

    const img = addImage();
    const inf = info();

    leftCon.appendChild(img)
    rightCon.appendChild(inf)

}

export default loadContactPage;