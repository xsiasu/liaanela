// JavaScript Document
 
var imgSize = 250; // サムネイルのサイズ指定 ※pxなど単位はつけないこと！
  
var j = jQuery.noConflict();
j( document ).ready(function(){
  j( 'div#risFil img[src$="fitin=128:128"]' ).each(function(){
    var thumImg = j(this);
    var replaceSrc = thumImg.attr( 'src' ).replace( '?fitin=128:128' , '?fitin=' + imgSize + ':' + imgSize );
    thumImg.attr( 'src' , replaceSrc );
  });
 
var styleTag = '';
styleTag += '<style type="text/css">';
styleTag += '#risFil .categoryWindowImg{width:' + imgSize + 'px; height: ' + imgSize + 'px;}';
styleTag += '</style>';
j('head').append(styleTag);
});