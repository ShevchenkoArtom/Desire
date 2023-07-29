// Бургер

const burgerBtnClose = document.querySelector('.burger-iconClose');
const burgerBtnOpen = document.querySelector('.burger-iconOpen');
const burgerMenu = document.querySelector('.header__nav-burger');

burgerBtnOpen.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    burgerBtnOpen.classList.toggle('active');
    burgerBtnClose.classList.toggle('active');
});

burgerBtnClose.addEventListener('click', function () {
    burgerBtnClose.classList.remove('active');
    burgerMenu.classList.remove('active');
    burgerBtnOpen.classList.remove('active');
});


google.maps.event.addDomListener(window, 'load', init);
        
function init() {

    var mapOptions = {
        zoom: 15,

        center: new google.maps.LatLng(37.79910334094562, -122.4110933771502740),

        styles: [{"featureType":"landscape.man_made","elementType":"all","stylers":[{"color":"#faf5ed"},{"lightness":"0"},{"gamma":"1"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#bae5a6"}]},{"featureType":"road","elementType":"all","stylers":[{"weight":"1.00"},{"gamma":"1.8"},{"saturation":"0"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ffb200"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"lightness":"0"},{"gamma":"1"}]},{"featureType":"transit.station.airport","elementType":"all","stylers":[{"hue":"#b000ff"},{"saturation":"23"},{"lightness":"-4"},{"gamma":"0.80"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#a0daf2"}]}]
    };

    var mapElement = document.querySelector('.js-map');

    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(37.79910334094562, -122.4110933771502740, -73.9400),
        map: map,
        title: 'Desire'
    });
}

new Swiper('.examplesOfWorks-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: false,
    },
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    slideToClickedSlide: true,

    // keyBoard: {
    //     enabled: true,
    //     onlyInViewport: true,
    //     pageUpDown: true,
    // }

    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.examplesOfWorks',
    },

    autoHeight: true,
    slidesPerView: 10,
    watchOverflow: true,
    spaceBetween: 18,
    slidesPerGroup: 5,
    // loop: true,
    // freeMod: true,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    speed: 600,

    breakpoints: {
        320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1440: {
           slidesPerView:6, 
        },
        1750: {
            slidesPerView: 8,
        },
    },
});