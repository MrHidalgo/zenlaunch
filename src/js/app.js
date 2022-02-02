import Common from "./common/common";

// import FooterBGAnimation from "./macros/footerBGAnimation";
import ChartCB from "./macros/chart";

// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
  // FooterBGAnimation.init();
  ChartCB.init();

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
