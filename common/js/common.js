var swiper = new Swiper ('.swiper-container', {
  loop: true,
  slidesPerView: 1.584,
  spaceBetween: 0,
  centeredSlides : true,
  autoplay:true,
  speed:500,
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});

var swiper = new Swiper ('.sp_swiper-container', {
  loop: true,
  spaceBetween: 0,
  centeredSlides : true,
  autoplay:true,
  speed:500,
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
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


var header = {
  init : function() {

    let navItem = $('nav-item');
    navItem.on('mouseenter', function(){
      if(!$(this).hasClass("active_link")) {
        $('.dropdown_container').hide();
        $('.active_link').removeClass('.active_link')
      }
    });

    navItem.on('mouseleave', function(){
        $('.dropdown_container').hide();
        $('.active_link').removeClass('.active_link')
    })

  }
}


window.onload(function(){
  header.init();
})