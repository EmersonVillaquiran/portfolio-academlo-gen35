export default function darkTheme(btn, classDark) {
    const themeBtn = document.querySelector(btn),
          selectors = document.querySelectorAll('[data-dark]');

    if (!themeBtn || !selectors.length) {
        console.error('Elementos no encontrados.');
        return;
    }

    let moon = 'bx moon',
        sun = 'bx sun';

    // Esta función activará el modo oscuro y guardará su estado en localStorage
    function enableDarkMode() {
        selectors.forEach(el => el.classList.add(classDark));
        themeBtn.textContent = sun;
        localStorage.setItem('darkModeEnabled', 'true');
    }

    // Esta función desactivará el modo oscuro y eliminará su estado de localStorage
    function disableDarkMode() {
        selectors.forEach(el => el.classList.remove(classDark));
        themeBtn.textContent = moon;
        localStorage.removeItem('darkModeEnabled');
    }

    // Esta función verificará si el modo oscuro está habilitado en localStorage al cargar la página
    function checkDarkModeOnLoad() {
        if (localStorage.getItem('darkModeEnabled') === 'true') {
            enableDarkMode();
        }
    }

    // Agrega un event listener para el evento 'DOMContentLoaded' para verificar si el modo oscuro está habilitado al cargar la página
    document.addEventListener('DOMContentLoaded', checkDarkModeOnLoad);

    themeBtn.addEventListener('click', () => {
        if (localStorage.getItem('darkModeEnabled') === 'true') {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
}