let card = document.querySelector('.card');

card.addEventListener('click', function() {
    card.classList.toggle('container-flip');
});

let theme = new Audio('images/themesong.mp3');
card.addEventListener('mouseenter', handleMouse);
card.addEventListener('mouseleave', handleMouse);

function handleMouse(event) {
    if (event.type === 'mouseenter') {
        theme.play();  
        console.log('Mouse enter!');
    } else if (event.type === 'mouseleave') {
        theme.pause();
        console.log('Mouse leave!');
    }
}