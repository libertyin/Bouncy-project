'use-strict'
// Load html after js
$(document).ready(function(){

// menu active class
var menuTab = $('.js-nav-item').on('click', function() {
    menuTab.removeClass('active');
    $(this).addClass('active');
});
  
// Smooth scrolling to anchor
$('a[href^="#"]').bind('click.smoothscroll', function (e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);
        
       $('html, body').stop().animate(
        {
        'scrollTop': $target.offset().top
        }, 
        900, 'swing',
        function (){
        window.location.hash = target;
        }); 
});

// btns portfolio active class
var portfolioTab = $('.js-btn').on('click', function(event) {
        event.preventDefault();
        portfolioTab.removeClass('active');
        $(this).addClass('active');
    });

// porfolio sort on click

var $grid = $('.portfolio__grid').isotope({
        itemSelector: '.portfolio__grid-item',
        percentPosition: true,

});

$('.portfolio__btns').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
});
      

// team slider 
$('.js-team-slider-items').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000
});

$('.js-testimonials__slider-items').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000
  });

// map

var uluru = {lat: 50.464072, lng: 30.499838};

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 16,
  center: uluru,
});

var marker = new google.maps.Marker({
        position: uluru,
        map: map
});

});