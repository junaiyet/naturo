

$(".backtotop").click(function(){
  $("html,body").animate({
    scrollTop:0,
  },1000)
  
})
$(window).scroll(function(){
  if($(window).scrollTop() > 1000){
    $(".backtotop").fadeIn()
  }else{
    $(".backtotop").fadeOut()
  }

  
});

$(".banner-img-slider").slick({
  dots: false,
  infinite: true,
  arrows:true, 
  
  prevArrow:'<span><i class="fas fa-arrow-up up"></i></span>',
  nextArrow:'<span class="adn"><i class="fas fa-arrow-down down"></i></span>',

  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        prevArrow:'<span><i class="fas fa-arrow-left up"></i></span>',
        nextArrow:'<span class="adn"><i class="fas fa-arrow-right down"></i></i></span>',
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<span><i class="fas fa-arrow-left up"></i></span>',
        nextArrow:'<span class="adn"><i class="fas fa-arrow-right down"></i></i></span>',
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<span><i class="fas fa-arrow-left up"></i></span>',
        nextArrow:'<span class="adn"><i class="fas fa-arrow-right down"></i></i></span>',
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})
$('.offer_slider').slick({
    dots: false,
    infinite: true,
    arrows:true, 
    prevArrow:'<i class="fas fa-arrow-left left"></i>',
    nextArrow:'<i class="fas fa-arrow-right right"></i>',
    fade:false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          prevArrow:'<span><i class="fas fa-arrow-left up"></i></span>',
          nextArrow:'<span class="adn"><i class="fas fa-arrow-right down"></i></i></span>',
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          prevArrow:'<span><i class="fas fa-arrow-left up"></i></span>',
          nextArrow:'<span class="adn"><i class="fas fa-arrow-right down"></i></i></span>',
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow:'<span><i class="fas fa-arrow-left up"></i></span>',
          nextArrow:'<span class="adn"><i class="fas fa-arrow-right down"></i></i></span>',
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow:'<span><i class="fas fa-arrow-left up"></i></span>',
          nextArrow:'<span class="adn"><i class="fas fa-arrow-right down"></i></i></span>',
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

