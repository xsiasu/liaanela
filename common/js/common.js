








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
};


// var categorySlider = {
//   init :  function() {
//     $('.main-carousel').each(function(index,value){
//       var cate = $(this);
//       cate.flickity({
//         // options
//         cellAlign: 'left',
//         contain: true
//       });
//     })    
//   }
// };

var bigSlider = {
  init :  function() {
  
  }
};

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
};


$("#user-nav-tabs li").on('click', function(e) {
  var targetLink = $(e.currentTarget.children[0]).attr("href").slice(1);
  var content_map = {
      c1  : "#content1",
      c2  : "#content2",
      c3  : "#content3",
      c4  : "#content4",
      c5  : "#content5",
      c6  : "#content6",
      c7  : "#content7"                        
  }
  $(e.currentTarget).siblings().removeClass("active");
  $.each(content_map, function(hash, elid) {
      if (hash == targetLink) {
          $(elid).show();
          $(e.currentTarget).addClass("active");
      } else {
          $(elid).hide();
      }
  });
});

var getCurrentScroll = function() {
  return window.pageYOffset || document.documentElement.scrollTop;
};

function fixedAni() {
  var shrinkHeader = 100;
  var innerHeader = $('.inner-header');
  
  $(window).scroll(function(){
     var scroll = getCurrentScroll();   
     var logo = $('.logo','.logo-area');
     if (scroll>=shrinkHeader) {
       innerHeader.addClass('shrink');
       logo.attr('src','images/logo-white.png');
     }
     else {
       innerHeader.removeClass('shrink');
       logo.attr('src','images/logo.png');
     }       
  });
};

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
};



$(document).ready(function(){  
  pageTop();
fixedAni();
  // categorySlider.init();
  headerNav.init();
  featuredPromotions.init();
  // bigSlider.init();


    $('.main-carousel-1').flickity({
      // options
      cellAlign: 'left',
      contain: true     
    }); 
    $('.main-carousel-2').flickity({
      // options
      cellAlign: 'left',
      contain: true     
      });  
    $('.main-carousel-3').flickity({
      // options
      cellAlign: 'left',
      contain: true     
      });  
    $('.main-carousel-4').flickity({
      // options
      cellAlign: 'left',
      contain: true     
      });  
    $('.main-carousel-5').flickity({
      // options
      cellAlign: 'left',
      contain: true     
      }); 
      $('.main-carousel-6').flickity({
        // options
        cellAlign: 'left',
        contain: true     
        });    
        $('.main-carousel-7').flickity({
          // options
          cellAlign: 'left',
          contain: true     
          });                                              
    $('.big-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true     
    });
 
});