let onOff = document.querySelector('.power-button');
var bool = true;
function changeBg() {
    console.log('click');
    if (bool == true) {
        onOff.style.background = 'url(./images/screen-bg.jpg) 50% center / 100% no-repeat';
        bool = false;
    }
    else {
        onOff.style.background = '#000';
        bool = true;
    }
}