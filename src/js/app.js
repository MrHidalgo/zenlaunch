import Common from "./common/common";

import headerFixed from "./macros/headerFixed";
import FutureBGAnimation from "./macros/futureBGAnimation";
import IntroductionBGAnimation from "./macros/IntroductionBGAnimation";
import FooterBGAnimation from "./macros/footerBGAnimation";
import ChartCB from "./macros/chart";
import ScrollViewPortAnimation from "./macros/scrollViewPortAnimation";

// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
  headerFixed.init();
  FutureBGAnimation.init();
  IntroductionBGAnimation.init();
  FooterBGAnimation.init();
  ChartCB.init();
  ScrollViewPortAnimation.init();

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
