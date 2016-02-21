/**
 * Created by rancongjie on 16/2/19.
 */
var main = {};

main.init = function () {
  main.resize();
  main.configNavAnimate();
  main.events();
  $('body').height(8500);
};

$(document).ready(main.init);

main.resize = function () {
  $('.scene').height($(window).height());
  $(".scene:not(':first')").css('top', $(window).height());
};

main.configNavAnimate = function () {
  var initAnimate = new TimelineMax();

  initAnimate.to('.menu', 0.7, {opacity: 1});
  initAnimate.to('.menu', 0.7, {left: 22}, '-=0.3');
  initAnimate.to('.nav', 0.5, {opacity: 1});


  initAnimate.to('.scene1_logo', 0.7, {opacity: 1});
  initAnimate.staggerTo('.scene1_1 img', 1.5, {opacity: 1, rotationX: 0, ease: Elastic.easeOut}, 0.2);
  initAnimate.to(".light_left", 0.5, {rotationZ: 0, ease: Cubic.easeOut}, "-=2");
  initAnimate.to(".light_right", 0.5, {rotationZ: 0, ease: Cubic.easeOut}, "-=2");
  initAnimate.to(".scene1 .controls", 0.5, {bottom: 20, opacity: 1}, '-=1');

  initAnimate.to("body", 0, {"overflow-y": "scroll"});
//
};
main.nav = function () {
  var navAnimate = new TimelineMax();
  $('.nav a').bind('mouseenter', function () {
    var w = $(this).width();
    var l = $(this).offset().left;

    navAnimate.clear();
    navAnimate.to('.line', 0.5, {opacity: 1, width: w, left: l});
  });

  $('.nav a').bind('mouseleave', function () {
    navAnimate.clear();
    navAnimate.to('.line', 0.5, {opacity: 0});
  });
  var languageAnimate = new TimelineMax();
  $('.language').bind('mouseenter', function () {
    languageAnimate.clear();
    languageAnimate.to('.dropdown', 0.5, {opacity: 1, 'display': 'block'});
  });
  $('.language').bind('mouseleave', function () {
    languageAnimate.clear();
    languageAnimate.to('.dropdown', 0.5, {opacity: 0, 'display': 'block'});
  })

};
main.button3D = function () {
  var buttonAnimate = new TimelineMax();

};
main.events = function () {
  main.nav();
};