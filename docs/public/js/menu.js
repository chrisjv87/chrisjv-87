


function menuDeploy() {
    console.log('Se abre menu');
    const menu = document.getElementById('headerOptions');
    const isMenuOpen = menu.style.display === 'flex';

    
    menu.style.display = isMenuOpen ? 'none' : 'flex';
    console.log('Deploy o close de menu');
    
    if (!isMenuOpen) {
        // Si el menú se abre, agrega el evento de cierre al hacer clic fuera
        document.addEventListener('click', closeMenuOnClickOutside);
    } else {
        // Si el menú se cierra, elimina el evento
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}

function closeMenuOnClickOutside(event) {
    const menu = document.getElementById('headerOptions');
    const buttonMenu = document.getElementById('headerButton');

    // Verifica si el clic fue fuera del menú y el botón de apertura
    if (!menu.contains(event.target) && !buttonMenu.contains(event.target)) {
        menu.style.display = 'none';
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}

function adjustMenuDisplay() {
    const menu = document.getElementById('headerOptions');
    if (window.innerWidth >= 1440) {
        menu.style.display = (menu.style.display === 'none') ? 'flex' : 'flex';
    } else if (window.innerWidth < 1440) {
        menu.style.display = 'none';
    }
}


window.addEventListener('resize', adjustMenuDisplay);
adjustMenuDisplay();

const buttonMenu = document.getElementById('headerButton');
buttonMenu.addEventListener('click', menuDeploy);