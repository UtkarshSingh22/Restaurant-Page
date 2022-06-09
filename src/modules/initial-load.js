function makeHeader(){
    const head = document.createElement('div');
    head.setAttribute('class', 'head');
    head.textContent = 'Treat Yourself 🍸';

    return head;
}

function btnBar(){
    const bar = document.createElement('div');
    bar.classList = 'navBar';

    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.classList = 'homeBtn';
    menuBtn.classList = 'menuBtn';
    contactBtn.classList = 'contactBtn';

    homeBtn.textContent = 'Home';
    menuBtn.textContent = 'Menu';
    contactBtn.textContent = 'Contact us';

    bar.appendChild(homeBtn);
    bar.appendChild(menuBtn);
    bar.appendChild(contactBtn);

    return bar;
}

function bottomCont1(){
    const leftCon = document.createElement('div');
    leftCon.classList = 'leftCon';

    return leftCon;
}

function bottomCont2(){
    const rightCon = document.createElement('div')
    rightCon.classList = 'rightCon';

    return rightCon;
}

function pageLoad(){
    const content = document.querySelector('.content');

    const head = makeHeader();
    const navBar = btnBar();
    const leftCon = bottomCont1();
    const rightCon = bottomCont2();
    
    content.appendChild(head);
    content.appendChild(navBar);
    content.appendChild(leftCon);
    content.appendChild(rightCon);
}

export default pageLoad;