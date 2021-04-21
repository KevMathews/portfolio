$(window).on('load', function(){
    $('.loader .inner').fadeOut(800, function(){
        $('.loader').fadeOut(800);
    });
    $('.items').isotope({
        filter: '.apps',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });
})
$(() => {

$('#slides').superslides({ 
    animation: 'fade',
    play: 4700,
    pagination: false,
    animation_easing: 'swing'
})

let typed = new Typed(".typed", {
    strings: ["Full Stack Software Engineer", "Web Developer"],
    typeSpeed: 80,
    loop: true,
    fadeOut: true,
    fadeOutDelay: 1700,
    startDelay: 1000,
    showCursor: false
});

$(".owl-carousel").owlCarousel({
    // loop: true,
    // nav: true,
    // items: 1,
    // autoplay: 500,
    // autoplaySpeed:500,
    // dots: true,




    navigation : true,
    loop: true,
    items: 6,
    autoplay: true,
    
    slideTransition: 'linear',
    autoplaySpeed: 6000,
    smartSpeed: 6000,
    center: true,

    responsive: {
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        938:{
            items:4
        }
    }
});

$('.owl-carousel').trigger('play.owl.autoplay',[2000]);

function setSpeed(){
    $('.owl-carousel').trigger('play.owl.autoplay',[6000]);
}

setTimeout(setSpeed, 1000);
// });


    // $('.animate').scrolla();

    $('.animate').scrolla({
          mobile: true
        });

let skillsTopOffset = $('.skillsSection').offset().top;
let statsTopOffset = $('.contactSection').offset().top;
let countUpFinished = false;
$(window).scroll(function() {
    if(window.pageYOffset > skillsTopOffset - $(window).height() + 250){
        
        $('.chart').easyPieChart({
            easing: 'easeInOut',
            barColor: '#ffffff',
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            size: 152,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    }
    if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 250){
        $('.counter').each(function (){
            let element = $(this);
            let endVal = parseInt(element.text());
            element.countup(endVal);
        })
        countUpFinished = true;
    }
});

$('[data-fancybox]').fancybox();


    $('#filters a').click(function(){
        $('#filters .current').removeClass('current');
        $(this).addClass('current');
        let selector = $(this).attr('data-filter');
        $('.items').isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
// $('#navigation li a').click(function(e) {
//     e.preventDefault();
//     let targetElement = $(this).attr('href');
//     let targetPosition = $(targetElement).offset().top;
//     $('html, body').animate({
//         scrollTop: targetPosition - 70
//     }, 'slow');

// });
$("#navigation li a").click(function(e) {
    let targetElement = $(this).attr("href");

    if(targetElement.indexOf("http") >= 0 || targetElement.indexOf("/") == 0) {
                return;
            }
        e.preventDefault();
    let targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "fast");
});

const nav = $('#navigation');
const navTop = nav.offset().top;
$(window).on('scroll', stickyNavigation);
function stickyNavigation() {
    let body = $('body');
    if($(window).scrollTop() >= navTop) {
        body.css('padding-top', nav.outerHeight() + 'px');
        body.addClass('fixedNav');
    }else {
        body.css("padding-top", 0);
        body.removeClass("fixedNav");
    }
}




});