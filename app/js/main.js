$(function(){

  $('.header__inner-btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
    $('.user-nav').toggleClass('user-nav--active')
  })

  $('.product-related__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
  });

  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault;
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });


  $('.shop-content__filter-btn').on('click', function(){
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function(){
    $('.product-top__items-item').addClass('product-top__items-item--list');
  });

  $('.button-grid').on('click', function(){
    $('.product-top__items-item').removeClass('product-top__items-item--list');
  });

  $('.select-style').styler();
  $('.product-content__form-num').styler();

  $('.star').rateYo({
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    starWidth: "10px",
    readOnly: true,
  })

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    step: 0.01,
    onStart: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
  },
  });

    $('.slider-top__items').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true
    });
    
    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
    var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
})