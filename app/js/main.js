$(document).ready(function(){
  $('.gallery__list').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    arrows: true,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next')
  });
});
