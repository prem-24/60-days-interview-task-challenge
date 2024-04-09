
let menu = document.querySelector('.menu-cont')
let menuIcon = document.querySelector('.menu-items');

menuIcon.addEventListener('click', toggleMenu);

function toggleMenu(event) {
    event.preventDefault();

   
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';

        console.log("hi");
   
}

