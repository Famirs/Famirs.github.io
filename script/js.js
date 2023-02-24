const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector('.hamburger__menu'),
closer = document.querySelector('.hamburger__menu_close'),
list = document.querySelectorAll('.linked');
hamburger.addEventListener('click', function(){
    menu.classList.add('hamburger__menu-active');
});
closer.addEventListener('click', function(){
    menu.classList.remove('hamburger__menu-active');
});
const procent = document.querySelectorAll('.procent__item_mini-procent'),
divider = document.querySelectorAll('.procent__divider');
procent.forEach(function(item, i) {
    divider[i].style.width = item.innerHTML;
    });
$(document).ready(function(){
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('form').trigger('reset');
        });
        return false;
    });
    $('.linked').click(function(){
        menu.classList.remove('hamburger__menu-active');
    });
    $(window).scroll(function(){
        if ($(this).scrollTop()>800 ) {
            $('.page_up').fadeIn();
        }
        else ($('.page_up').fadeOut());
    });
    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});
var t;
function up() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
if(top > 0) {
	window.scrollBy(0,((top+100)/-10));
	t = setTimeout('up()',20);
} else clearTimeout(t);
return false;
}