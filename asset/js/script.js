window.addEventListener('load', () => {
    bannerCarousel();

});

function navbarToggler() {
    $('.navbar-toggler').click(function () {
        $('#nav-icon').toggleClass('close');

    });
}

navbarToggler();

function bannerCarousel() {
    $(".banner__carousel").owlCarousel({
        loop: true,
        freeDrag: true,
        merge: true,
        lazyLoad: true,
        lazyLoadEager: 1,
        fluidSpeed: true,
        margin: 0,
        autoplay: true,
        autoHeight: true,
        autoplayTimeout: 2000,
        smartSpeed: 800,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
}




function reviewOwlCarousel() {
    $(".review-carousel").owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoHeight: true,
        autoplayTimeout: 2000,
        smartSpeed: 800,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
}

reviewOwlCarousel();


function partnerCarousel() {
    $(".partner__carousel").owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoHeight: true,
        autoplayTimeout: 2000,
        smartSpeed: 800,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
}

partnerCarousel();


// for nice scrolling
function bodyscroll() {
    $("body").niceScroll({
        cursorwidth: 8,
        cursorcolor: 'rgba(246, 111, 5, 1)',
        // cursorcolor:'rgb(20, 20, 20)',
        cursorborder: 'none',
        scrollspeed: "125",
        cursorborderradius: "25px"


    });
}
bodyscroll();


$(document).ready(function () {
    wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: true,
        live: true
    });
    wow.init();


    $('.grid').isotope({
        itemSelector: '.grid-item',
    });

    // filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({
            filter: filterValue
        });
        $('.filter-button-group button').removeClass('active');
        $(this).addClass('active');
    });



    $('.js--section-features').waypoint(function (direction) {
        if(direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });

});

