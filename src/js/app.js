import Common from "./common/common";

import FooterBGAnimation from "./macros/footerBGAnimation";
import IntroductionBGAnimation from "./macros/IntroductionBGAnimation";
import ChartCB from "./macros/chart";

// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
  // FooterBGAnimation.init();
  IntroductionBGAnimation.init();
  ChartCB.init();

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
