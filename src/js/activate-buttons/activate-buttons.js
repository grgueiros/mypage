export const activateButtons = () => {

    let menuButton = document.querySelector('#menu-button');

    menuButton.addEventListener('click', () => {
        let flexButtons = document.querySelector('.flex-buttons');
        menuButton.classList.toggle('menu-clicado');
        flexButtons.classList.toggle('isShown');

        menuButton.className.includes('fa-times')
            ? menuButton.classList.replace('fa-times', 'fa-bars')
            : menuButton.classList.replace('fa-bars','fa-times')
    });


}