$(() => {

$('#slides').superslides({ 
    animation: 'fade',
    play: 4000,
    pagination: false,
    animation_easing: 'swing'
})

let typed = new Typed(".typed", {
    strings: ["Full Stack Software Engineer", "Web Developer"],
    typeSpeed: 80,
    loop: true,
    fadeOut: true,
    fadeOutDelay: 1500,
    startDelay: 1000,
    showCursor: false
});

$('.owl-carousel').owlCarousel({
    loop:true,
    items: 4,
    responsive:{
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


let skillsTopOffset = $('.skillsSection').offset().top;
let statsTopOffset = $('.statsSection').offset().top;
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



});