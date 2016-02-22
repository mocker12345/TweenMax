/**
 * Created by rancongjie on 16/2/19.
 */
var main = {};

main.init = function () {
  main.resize();
  main.configNavAnimate();
  main.events();
  $('body').height(8500);
  main.button3D('.start', '.state1', '.state2', 0.3);
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
    languageAnimate.to('.dropdown', 0.7, {opacity: 1, 'display': 'block'});
  });
  $('.language').bind('mouseleave', function () {
    languageAnimate.clear();
    languageAnimate.to('.dropdown', 0.5, {opacity: 0, 'display': 'block'});
  })

};
main.button3D = function (obj, element1, element2, d) {
  var buttonAnimate = new TimelineMax();
  buttonAnimate.to($(obj).find(element1), 0, {
    rotationX: 0,
    transformPerspective: 600,
    transformOrigin: 'center bottom'
  });
  buttonAnimate.to($(obj).find(element2), 0, {
    rotationX: -90,
    transformPerspective: 600,
    transformOrigin: 'top center'
  });

  $(obj).bind('mouseenter', function () {
    var enterAnimate = new TimelineMax();

    enterAnimate.to($(this).find(element1), d, {rotationX: 90, top: -$(this).find(element1).height()}, 0);
    enterAnimate.to($(this).find(element2), d, {rotationX: 0, top: 0}, 0);

  });
  $(obj).bind('mouseleave', function () {
    var leaveAnimate = new TimelineMax();

    leaveAnimate.to($(this).find(element1), d, {rotationX: 0, top: 0}, 0);
    leaveAnimate.to($(this).find(element2), d, {rotationX: -90, top: $(this).find(element2).height()}, 0);

  });

};
main.events = function () {
  main.nav();
};