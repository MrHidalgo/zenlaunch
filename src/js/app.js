import Common from "./common/common";

import FooterBGAnimation from "./macros/footerBGAnimation";

// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
  FooterBGAnimation.init();

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
