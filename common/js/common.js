

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
      e.preventDefault();
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
    spaceBetween: 30,
    speed:1500
  });
});

$(".accordion").on("click", ".accordion-header", function() {
  $(this).toggleClass("active").next().slideToggle();
});

$('ul.tabs li').click(function(){
  var tab_id = $(this).attr('data-tab');

  $('ul.tabs li').removeClass('current');
  $('.tab-content').removeClass('current');

  $(this).addClass('current');
  $("#"+tab_id).addClass('current');
});

var getCurrentScroll = function() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

function fixedAni() {
  var shrinkHeader = 100;
  var innerHeader = $('.inner-header');
  
  $(window).scroll(function(){
     var scroll = getCurrentScroll();   
     if (scroll>=shrinkHeader) {
       innerHeader.addClass('shrink');
     }
     else {
       innerHeader.removeClass('shrink');
     }       
  });
}

function pageTop() {
  var browserWidth = window.innerWidth;
  var topBtn = $('.pagetop');
  
  if (browserWidth <= 768) {
    topBtn.hide();
    $(window).scroll(function(){
      var shrinkHeader = 100;
      var scroll = getCurrentScroll();
      if (scroll>=shrinkHeader) {
          topBtn.fadeIn()
      }else {
          topBtn.fadeOut();
      }
    })
  } 

  topBtn.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });  
}

pageTop();
fixedAni();

$(document).ready(function(){
  headerNav.init();
  featuredPromotions.init();
  scrollTop.init();
  categorySwiper.init();
});