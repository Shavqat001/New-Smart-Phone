import passwordField from 'app.js';

let okButton = document.querySelector('.ok-button');
let apps = document.querySelector('.apps');

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
        currentTime.style.color = '#fff';
        currentTime.style.textShadow = 'none';
        apps.style.display = 'grid';

    } else if (passwordField.value == '') {
        alert('Write the password');
    } else {
        alert('Wrong password!');
    }
    passwordField.value = '';
}

