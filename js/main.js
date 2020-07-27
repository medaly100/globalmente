$(document).ready(function () {
$nav = $('.nav');
$togglecollapse = $('.toggle-collapse');

    /*Click event on toggle menu*/
    $togglecollapse.click(function () {
        $nav.toggleClass('collapse');


    })
    //owl carousel for historias
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true
    });


})