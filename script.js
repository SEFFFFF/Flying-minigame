const ship = document.querySelector('.ship');
const move = 5; // NUMBER OF SPACES THE SHIP MOVES

// SETS POSITION OF THE SPACE SHIP AND ALLOWS IT TO MOVE
window.addEventListener('load', () => {
    ship.style.position = 'absolute';
    ship.style.top = 50 + '%';
    ship.style.left = 40 + '%';
});

// SETS IMPUTS TO MOVE AROUND SHIP
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            ship.style.top = parseInt(ship.style.top) - move + 'px' // UP
            ship.style.transform = 'rotate(0deg)';
            break;
        case 's':
            ship.style.top = parseInt(ship.style.top) + move + 'px'  // DOWN
            ship.style.transform = 'rotate(180deg)';
            break;
        case 'a':
            ship.style.left = parseInt(ship.style.left) - move + 'px' // LEFT
            ship.style.transform = 'rotate(270deg)';
            break;
        case 'd':
            ship.style.left = parseInt(ship.style.left) + move + 'px' // RIGHT
            ship.style.transform = 'rotate(90deg)';
            break;
    }
});
