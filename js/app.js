export function app() {
    let passwordBtns = document.querySelector('.password-buttons');
    let passwordField = document.querySelector('.screen>input');
    let clearButton = document.querySelector('.clear-button');
    let mainButton = document.querySelector('.main-button');

    let currentTime = document.createElement('p');
    currentTime.className = 'time';

    passwordBtns.onclick = (evt) => {
        passwordField.value += evt.target.textContent;
    }

    function deleteScreenLockEl() {
        passwordBtns.style.display = 'none';
        passwordField.style.display = 'none';
        currentTime.style.display = 'none';
    }

    clearButton.onclick = () => {
        passwordField.value = '';
    }
}