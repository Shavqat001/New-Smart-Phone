let screen = document.querySelector('.screen');
let onOff = document.querySelector('.power-button');
let passwordBtn = document.querySelectorAll('.password-button');
let passwordField = document.querySelector('.screen>input');
let okButton = document.querySelector('.ok-button');
let clearButton = document.querySelector('.clear-button');

onOff.onclick = () => {
    screen.classList.toggle('BG');
    screen.classList.toggle('unvisible');
}

for (let i = 0; i < passwordBtn.length; i++) {
    passwordBtn[i].onclick = () => {
        passwordField.value += passwordBtn[i].textContent;
    }
}
okButton.onclick = () => {
    if(passwordField.value == 2807) {
        
    } else {
        alert('Write the password');
    }
}

clearButton.onclick = () => {
    passwordField.value = '';
}