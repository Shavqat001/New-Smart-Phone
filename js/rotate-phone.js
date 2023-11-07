let rotateButton = document.querySelector('.rotate-btn');

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