/**
 * Created by rancongjie on 16/2/19.
 */
var main = {};
main.timeScroll = null;
main.currentStep = 'step1';
main.init = function () {
  main.resize();
  main.configNavAnimate();
  main.events();
  main.button3D('.start', '.state1', '.state2', 0.3);
  main.configInitScroll();
};

$(document).ready(main.init);

main.resize = function () {
  $('.scene').height($(window).height());
  $(".scene:not(':first')").css('top', $(window).height());
  main.configInitScroll();
  if ($(window).width() <= 950) {
    $("body").css("height", 8500);
    $("body").removeClass("r780").addClass("r950");
    $(".menu").css("top", 0);
    $(".menu").css("transform", "none");
  } else {
    $("body").removeClass("r780 r950");
    $("body").css("height", 8500);
    $("body").removeClass("r950");
    $(".menu").css("top", 22);
    $(".left_nav").css("left", -300);
  }

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

main.configInitScroll = function () {
  var time = main.timeScroll ? main.timeScroll.time() : 0;
  if (main.timeScroll) main.timeScroll.clear();

  main.timeScroll = new TimelineMax();
  main.timeScroll.add('step1');
  main.timeScroll.to('.scene2', 0.8, {top: 0, ease: Cubic.easeInOut});
  main.timeScroll.add('step2');
  main.timeScroll.to('.scene3', 0.8, {top: 0, ease: Cubic.easeInOut});
  main.timeScroll.add('step3');
  main.timeScroll.to('.scene4', 0.8, {top: 0, ease: Cubic.easeInOut});
  main.timeScroll.add('step4');
  main.timeScroll.to('.scene5', 0.8, {top: 0, ease: Cubic.easeInOut});
  main.timeScroll.add('step5');

  main.timeScroll.stop();
  main.timeScroll.seek(time);

};
main.changeStep = function (value) {
  if (value === 'next') {
    var currentTime = main.timeScroll.getLabelTime(main.currentStep);

    var afterCurrentStep = main.timeScroll.getLabelAfter(currentTime);
    if (!afterCurrentStep) return;

    var totalTime = main.timeScroll.totalDuration();

    var afterTime = main.timeScroll.getLabelTime(afterCurrentStep);

    var maxH = $('body').height() - $(window).height();

    var scrollHeight = afterTime / totalTime * maxH;

    var d = Math.abs(main.timeScroll.time() - afterTime);

    var scrollAnimate = new TimelineMax();

    scrollAnimate.to('body,html', d, {scrollTop: scrollHeight});

    main.timeScroll.tweenTo(afterCurrentStep);
    main.currentStep = afterCurrentStep;
  } else {
    var currentTime = main.timeScroll.getLabelTime(main.currentStep);

    var prevCurrentStep = main.timeScroll.getLabelBefore(currentTime);
    if (!prevCurrentStep) return;

    var totalTime = main.timeScroll.totalDuration();

    var beforeTime = main.timeScroll.getLabelTime(prevCurrentStep);

    var maxH = $('body').height() - $(window).height();

    var scrollHeight = beforeTime / totalTime * maxH;

    var d = Math.abs(main.timeScroll.time() - beforeTime);

    var scrollAnimate = new TimelineMax();

    scrollAnimate.to('body,html', d, {scrollTop: scrollHeight});

    main.timeScroll.tweenTo(prevCurrentStep);
    main.currentStep = prevCurrentStep;

  }
};
main.scrollStatus = function () {
  var times = main.scale() * main.timeScroll.totalDuration();
  main.timeScroll.seek(times);
};
main.scale = function () {
  var scrollT = $(window).scrollTop();
  var maxH = $('body').height() - $(window).height();
  return scrollT / maxH;
};
main.events = function () {
  main.nav();
  $(window).resize(main.resize);

  $(window).bind('scroll', scrollFn);
  function scrollFn() {
    $(window).scrollTop(0);
  };

  $(window).bind('scroll', main.scrollStatus);


  $('.wrapper').bind('mousewheel', function (ev) {
    ev.preventDefault();
  });
  $('.wrapper').one('mousewheel', mousewheelFn);
  var timer = null;

  function mousewheelFn(ev, direction) {
    $(window).unbind('scroll', scrollFn);
    if (direction < 1) { //向下
      main.changeStep('next');
    } else {
      main.changeStep('prev');
    }
    clearTimeout(timer);
    timer = setInterval(function () {
      $('.wrapper').one('mousewheel', mousewheelFn);
    }, 1800);
  }
};