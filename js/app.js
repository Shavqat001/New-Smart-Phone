let onOff = document.querySelector('.power-button');
let screen = document.querySelector('.screen');

onOff.onclick = () => {
    screen.classList.toggle('BG');
}