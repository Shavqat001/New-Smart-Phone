let phone = document.querySelector('.phone');
let screen = document.querySelector('.screen');
let onOff = document.querySelector('.power-button');
let passwordBtn = document.querySelectorAll('.password-button');
let passwordBtns = document.querySelector('.password-buttons');
let passwordField = document.querySelector('.screen>input');
let okButton = document.querySelector('.ok-button');
let clearButton = document.querySelector('.clear-button');
let rotateButton = document.querySelector('.rotate-btn');
let mainButton = document.querySelector('.main-button');
let apps = document.querySelector('.apps');

let today = new Date();

let currentTime = document.createElement('p');
currentTime.className = 'time';

let time = today.getHours() + ' : ' + today.getMinutes();

let bool = true;

onOff.onclick = () => {
    for (let i = 0; i <= 9; i++) {
        if (today.getMinutes() == i) {
            time = today.getHours() + ' : ' + '0' + today.getMinutes();
        }
    }
    currentTime.textContent = time;

    if (bool === true) {
        currentTime.style.display = 'block';
        screen.style.background = 'url(./images/dog.jpg) 50% / 120%';

        passwordBtns.style.display = 'grid';
        passwordField.style.display = 'flex';
        bool = false;

    } else {
        currentTime.style.display = 'none';
        screen.style.background = '#000';

        apps.style.display = 'none';
        passwordBtns.style.display = 'none';
        passwordField.style.display = 'none';
        bool = true;

        let blockSound = document.createElement('audio');
        blockSound.src = './sounds/block.mp3';
        blockSound.autoplay = true;
        blockSound.play();
        document.body.append(blockSound);
        setTimeout(() => {
            blockSound.remove();
        }, 500);
    }
    screen.prepend(currentTime);
}

for (let i = 0; i < passwordBtn.length; i++) {
    passwordBtn[i].onclick = () => {
        passwordField.value += passwordBtn[i].textContent;
    }
}
function deleteScreenLockEl() {
    passwordBtns.style.display = 'none';
    passwordField.style.display = 'none';
    currentTime.style.display = 'none';
}

okButton.onclick = () => {
    if (passwordField.value == 2807) {
        deleteScreenLockEl();

        let blockSound = document.createElement('audio');
        blockSound.src = './sounds/block.mp3';
        blockSound.autoplay = true;
        blockSound.play();
        document.body.append(blockSound);
        setTimeout(() => {
            blockSound.remove();
        }, 500);

        screen.style.background = 'url("./images/screen-bg.jpg") 50% / 100%';
        currentTime.style.display = 'flex';
        currentTime.style.marginBottom = '100px';
        apps.style.display = 'grid';

    } else if (passwordField.value == '') {
        alert('Write the password');
    } else {
        alert('Wrong password!');
    }
    passwordField.value = '';
}

clearButton.onclick = () => {
    passwordField.value = '';
}

rotateButton.onclick = () => {
    let rotationSound = document.createElement('audio');
    rotationSound.src = './sounds/fiew.mp3';
    rotationSound.autoplay = true;
    rotationSound.play();
    document.body.append(rotationSound);
    setTimeout(() => {
        rotationSound.remove();
    }, 500);

    phone.classList.toggle('rote');
}