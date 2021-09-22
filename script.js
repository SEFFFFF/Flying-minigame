
let square = document.querySelector('.ship');
let moveBy = 5;
window.addEventListener('load', () => {
    square.style.position = 'absolute';
    square.style.top = 0;
    square.style.left = 0;
  
});
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            square.style.top = parseInt(square.style.top) - moveBy + 'px'
            break;
        case 'ArrowDown':
            square.style.top = parseInt(square.style.top) + moveBy + 'px'
            break;
        case 'ArrowLeft':
            square.style.left = parseInt(square.style.left) - moveBy + 'px'
            break;
        case 'ArrowRight':
            square.style.left = parseInt(square.style.left) + moveBy + 'px'
            break;
      
    }
});
