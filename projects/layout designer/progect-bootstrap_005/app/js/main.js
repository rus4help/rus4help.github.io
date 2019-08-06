jQuery(document).ready(function(){

    var header = $('.header');
    var nav = $('.nav--header');

    window.onscroll = function() {
        if(window.pageYOffset > header.height()) {
            nav.addClass('nav--move');
        } else {
            nav.removeClass('nav--move');
        }
    }

    $('#mc-form').ajaxChimp({
        url: 'https://nalavochke.us11.list-manage.com/subscribe/post?u=0d2e0340c71b3fd0682419b65&amp;id=fdfda2303b'
    });

    $(document).on('click', '.burger', function(){
        $(this).toggleClass('is-active');
        $('.header__nav-wrap').toggleClass('is-active');
    });
});