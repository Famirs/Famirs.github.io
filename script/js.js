const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector('.hamburger__menu'),
closer = document.querySelector('.hamburger__menu_close');
hamburger.addEventListener('click', function(){
    menu.classList.add('hamburger__menu-active');
});
closer.addEventListener('click', function(){
    menu.classList.remove('hamburger__menu-active');
});
