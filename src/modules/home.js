function addImage(){
    const imgDiv = document.createElement('div');
    imgDiv.setAttribute('class', 'restImg');

    const imgOne = document.createElement('img');

    imgOne.setAttribute('class', 'imgOne');
    imgOne.src = '../dist/imgs/rest-img.jpg';

    imgDiv.appendChild(imgOne);

    return imgDiv;
}

function addTag(){

    const rightContent = document.createElement('div');
    rightContent.classList = 'imp'
    
    const exp = document.createElement('div');
    const restTag = document.createElement('div');

    exp.setAttribute('class', 'exp');
    restTag.setAttribute('class', 'restTag');

    exp.textContent = 'Expensive But the Best!';
    restTag.textContent = 'Deliciousness jumping into the mouth...';

    rightContent.appendChild(exp);
    rightContent.appendChild(restTag);

    return rightContent;
}

function addContent(){
    const info = document.createElement('div');

    info.classList = 'info';
    info.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum efficitur maximus. Nulla mollis leo dui, et volutpat nulla ultrices ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum efficitur maximus. Nulla mollis leo dui, et volutpat nulla ultrices ac.';

    return info;
}

function loadHome(){
    const leftCon = document.querySelector('.leftCon')
    const rightCon = document.querySelector('.rightCon')
    const images = addImage();
    const title = addTag();
    const con = addContent();

    leftCon.textContent = '';
    rightCon.textContent = '';

    leftCon.appendChild(images);
    rightCon.appendChild(title);
    rightCon.appendChild(con);
}

export default loadHome;