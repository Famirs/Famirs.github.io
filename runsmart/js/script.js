$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/chevron right solid.png" alt="arrow"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/chevron left solid.png" alt="arrow"></button>',
        responsive: [
            {
                breakpoint: 779,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('ul.katalog_list-wrapper').on('click', 'li:not(.katalog__list-active)', function() {
        $(this)
        .addClass('katalog__list-active').siblings().removeClass('katalog__list-active')
    });

        $('.katalog__container').each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.katalog__container').eq(i).toggleClass('katalog__container-active');
            })
        });
    $('[data-modal=consultation]').on('click', function() {
        $('.modals, #consultations').fadeIn();
    });
    $('.button_price').on('click', function() {
        $('.modals, #button_price').fadeIn();
    });
    $('.modals__close').on('click', function() {
        $('.modals, #button_price, #consultations').fadeOut();
    });
    $('.button_price').each(function(i){
        $(this).on('click', function(){
            $('.modals h3').text($('h3').eq(i).text())
        });
    });
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
    $(window).scroll(function(){
        if ($(this).scrollTop()>1600 ) {
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