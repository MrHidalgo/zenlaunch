const HeaderFixed = (function() {
  const init = function() {
    const getCurrentScroll = () => window.pageYOffset || document.documentElement.scrollTop;
    const shrinkHeader = 100;

    let scroll = getCurrentScroll();

    const headerEl = document.getElementById('header');

    (scroll >= shrinkHeader) ? headerEl.classList.add('is-fixed') : headerEl.classList.remove('is-fixed');

    window.addEventListener('scroll', () => {
      let scroll = getCurrentScroll();

      (scroll >= shrinkHeader) ? headerEl.classList.add('is-fixed') : headerEl.classList.remove('is-fixed');
    });
  };
  return {
    init: init
  };

})();

export default HeaderFixed;
