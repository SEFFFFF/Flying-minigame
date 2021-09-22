const ship = document.querySelector('.ship');
const move = 5;

// SETS POSITION OF THE SPACE SHIP AND ALLOWS IT TO MOVE
window.addEventListener('load', () => {
    ship.style.position = 'absolute';
    ship.style.top = 0;
    ship.style.left = 0;
});

// SETS IMPUTS TO MOVE AROUND SHIP
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            ship.style.top = parseInt(ship.style.top) - move + 'px' // UP
            break;
        case 's':
            ship.style.top = parseInt(ship.style.top) + move + 'px'  // DOWN
            break;
        case 'a':
            ship.style.left = parseInt(ship.style.left) - move + 'px' // LEFT
            break;
        case 'd':
            ship.style.left = parseInt(ship.style.left) + move + 'px' // RIGHT
            break;
    }
});
