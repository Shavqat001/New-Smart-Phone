let phone = document.querySelector('.phone');
let screen = document.querySelector('.screen');
let onOff = document.querySelector('.power-button');
let passwordBtn = document.querySelectorAll('.password-button');
let passwordField = document.querySelector('.screen>input');
let okButton = document.querySelector('.ok-button');
let clearButton = document.querySelector('.clear-button');
let rotateButton = document.querySelector('.rotate-btn');

let today = new Date();

let currentTime = document.createElement('p');
currentTime.className = 'time';

onOff.onclick = () => {
    let time = today.getHours() + ' : ' + today.getMinutes();
    for (let i = 0; i <= 9; i++) {
        if (today.getMinutes() == i) {
            time = today.getHours() + ' : ' + today.getMinutes() + '0';
        }
    }
    currentTime.textContent = time;

    screen.prepend(currentTime);
    screen.classList.toggle('change-bg');
    screen.classList.toggle('unvisible');
    screen.classList.toggle('black-bg');
}

for (let i = 0; i < passwordBtn.length; i++) {
    passwordBtn[i].onclick = () => {
        passwordField.value += passwordBtn[i].textContent;
    }
}
okButton.onclick = () => {
    if (passwordField.value == 2807) {
        const screenChildren = document.querySelectorAll('.screen>*');
        for (let i = 0; i < screenChildren.length; i++) {
            screenChildren[i].style.display = 'none';
        }
        screen.classList.toggle('screen-bg');

        let blockSound = document.createElement('audio');
        blockSound.src = './sounds/block.mp3';
        blockSound.autoplay = true;
        blockSound.play();
        document.body.append(blockSound);
        setTimeout(() => {
            blockSound.remove();
        }, 500);
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
    phone.classList.toggle('rote');
    let rotationSound = document.createElement('audio');
    rotationSound.src = './sounds/fiew.mp3';
    rotationSound.autoplay = true;
    rotationSound.play();
    document.body.append(rotationSound);
    setTimeout(() => {
        rotationSound.remove();
    }, 500);
}