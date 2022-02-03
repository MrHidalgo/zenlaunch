const ScrollViewPortAnimation = (function() {
  const init = function() {
    let wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 50,
      mobile: true,
      live: false,
      callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,
      resetAnimation: true,
    });

    wow.init();
  };
  return {
    init: init
  };

})();

export default ScrollViewPortAnimation;
