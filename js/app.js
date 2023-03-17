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
    screen.classList.toggle('BG');
    screen.classList.toggle('unvisible');
}

for (let i = 0; i < passwordBtn.length; i++) {
    passwordBtn[i].onclick = () => {
        passwordField.value += passwordBtn[i].textContent;
    }
}
okButton.onclick = () => {
    if (passwordField.value == 2807) {
        alert('Correct!');
    } else if (passwordField.value == '') {
        alert('Write the password');
    } else {
        alert('Wrong password!');
    }
    passwordField.value = '';
    passwordBtn
}

clearButton.onclick = () => {
    passwordField.value = '';
}


rotateButton.onclick = () => {
    phone.classList.toggle('rote');
}