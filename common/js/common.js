

var swiper = new Swiper('.swiper-container', {
  effect: 'fade',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides : true,
  speed:1500,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


// 停止、開始でfunction書くのが面倒なので1つにまとめます。
var movefun = function( event ){
  event.preventDefault();
}

// スクロール停止の処理
window.addEventListener( 'touchmove' , movefun , { passive: false } );

// スクロール停止することを停止する処理
window.removeEventListener( 'touchmove' , movefun, { passive: false } );



/*============================================================================
  add headerNav by ksk 20190115
==============================================================================*/
var headerNav = {
  init : function(){
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.dropdown-container').toggle();
      // Close one dropdown when selecting another
      $('.dropdown-container').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.dropdown-container').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }
}


/*============================================================================
  add somethings by ksk 20190115
==============================================================================*/
var featuredPromotions = {
  init : function() {
    if ($(window).width() > 768) {
      $('.image-bar__overlay').hover(function(){
        $(this).find('.detail-description').slideDown('100', function(){
          $(this).addClass('reveal-details');
        });
      }, function(){
        $(this).find('.detail-description').removeClass('reveal-details');
        $(this).find('.detail-description').slideUp('100');
      });
    }
  }
};


var scrollTap = {
  init : function() {
    if ($(window).width() <= 768) {
      $(window).bind('scroll', function() {
        var navHeight = $( window ).height() - 70;
          if ($(window).scrollTop() > navHeight) {
            $('category-area').addClass('fixed');
          }
          else {
            $('category-area').removeClass('fixed');
          }
      });
    }
  }  
}


$('.category-swiper').each(function(){
  new Swiper($(this), {
    effect: 'slide',
    slidesPerView: 5,
    spaceBetween: 0,
    speed:1500,
  });
});




$(document).ready(function(){
  headerNav.init();
  featuredPromotions.init();
  scrollTop.init();
  categorySwiper.init();
});