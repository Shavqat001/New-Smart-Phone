import { passwordBtns, passwordField } from './app.js';

let onOff = document.querySelector('.power-button');
let today = new Date();
let bool = true;
let time = today.getHours() + ' : ' + today.getMinutes();

onOff.onclick = () => {
    for (let i = 0; i <= 9; i++) {
        if (today.getMinutes() == i) {
            time = today.getHours() + ' : ' + '0' + today.getMinutes();
        }
    }

    currentTime.textContent = time;

    if (bool) {
        currentTime.style.display = 'block';
        currentTime.style.marginBottom = '20px';
        currentTime.style.color = '#333';

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