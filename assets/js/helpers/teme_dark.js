// const d = document;

// export default function darkTheme(btn, classDark) {
//     const $themeBTn = d.querySelector(btn),
//         $selectors = d.querySelectorAll('[data-dark]');

//         console.log($selectors);

//     let moon = 'bx moon',
//         sun = 'bx sun';

//     d.addEventListener('click', e =>{
//         if (e.target.matches(btn)){
//             console.log($themeBTn.textContent);
//             if($themeBTn.textContent === moon){
//                 $selectors.forEach(el => el.classList.add(classDark));
//                 $themeBTn.textContent = sun;
//             } else {
//                 $selectors.forEach(el => el.classList.remove(classDark));
//                 $themeBTn.textContent = moon;
//             }
//         }
//     })
// }

export default function darkTheme(btn, classDark) {
    const themeBTn = document.querySelector(btn),
          selectors = document.querySelectorAll('[data-dark]');

    if (!themeBTn || !selectors.length) {
        console.error('Elementos no encontrados.');
        return;
    }

    let moon = 'bx moon',
        sun = 'bx sun';

    themeBTn.addEventListener('click', () => {
        selectors.forEach(el => el.classList.toggle(classDark));
        themeBTn.textContent = (themeBTn.textContent === moon) ? sun : moon;
        localStorage.setItem('darkModeEnable', 'true')
    });

}