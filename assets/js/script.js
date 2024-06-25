const mobile_menu = () => {
    const primary_header = document.querySelector('#primary_header');
    const menu_open = primary_header.querySelector('.menu-open')
    const menu_close = primary_header.querySelector('.menu-close')
    const main_menu = primary_header.querySelector('.main-menu')
    
    menu_open.addEventListener('click', (e) => {
        main_menu.classList.add("active")
    })
    
    menu_close.addEventListener('click', (e) => {
        main_menu.classList.remove("active")
    })
}

mobile_menu();