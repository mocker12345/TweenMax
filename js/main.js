/**
 * Created by rancongjie on 16/2/19.
 */
var main = {};

main.init = function (){
  main.resize();
  main.configNavAnimate();
};

$(document).ready(main.init);

main.resize = function () {
  $('.scene').height($(window).height());
  $(".scene:not(':first')").css('top',$(window).height());
};

main.configNavAnimate = function () {
  var initAnimate = new TimelineMax();

  initAnimate.to('.menu',0.7,{opacity:1});
  initAnimate.to('.menu',0.7,{left:22},'-=0.3');
  initAnimate.to('.nav',0.5,{opacity:1});


  initAnimate.to('.scene1_logo',0.7,{opacity:1});
  initAnimate.staggerTo('.scene1_1 img',1.5,{opacity:1,rotationX:0,ease:Elastic.easeOut},0.2);
  initAnimate.to(".light_left",0.5,{rotationZ:0,ease:Cubic.easeOut},"-=2");
  initAnimate.to(".light_right",0.5,{rotationZ:0,ease:Cubic.easeOut},"-=2");
  initAnimate.to(".scene1 .controls",0.5,{bottom:20,opacity:1},'-=1');
//
};