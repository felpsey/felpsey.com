var flipped = true;

function flipSwitch(){
    if (flipped) {
        document.body.style.backgroundColor = 'white';
        element.style.stroke = 'black';

        flipped = false;
    } else {
        document.body.style.backgroundColor = 'black';
        element.style.stroke = 'white';

        flipped = true;
    }
}

var element = document.getElementById('macintosh');
element.addEventListener('click', flipSwitch);
