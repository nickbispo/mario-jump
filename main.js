const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


const start = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    const colision = 99

    if(pipePosition <= colision && marioPosition <= colision) {
        pipe.style.animation = 'none'
        pipe.style.left = `${colision}px`;


        mario.style.bottom = `${marioPosition}px`
        mario.src = './img/game-over.png'
        mario.style.width = '70px'

        clearInterval(start)
    }

    
}, 70)


document.addEventListener('keydown', (event) => {
    const key = event.key;

    if(key == 'w') {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump')
        },700)
    }
})