/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/common/common.js":
/*!*********************************!*\
  !*** ./src/js/common/common.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var Common = function () {
  var pressESC = function pressESC() {
    document.addEventListener('keyup', function (ev) {
      if (ev.keyCode === 27) {}
    });
  };

  var clickBody = function clickBody() {
    document.body.addEventListener('click', function (ev) {
      var className = "body";

      if (!ev.target.closest(className).length) {}
    });
  };

  var preventBehavior = function preventBehavior() {
    var link = document.querySelectorAll("a");
    link.forEach(function (val, idx) {
      val.addEventListener("click", function (ev) {
        if (val.getAttribute("href") === "#") {
          ev.preventDefault();
        }
      });
    });
  };

  var initLoad = function initLoad() {
    pressESC();
    clickBody();
    preventBehavior();
  };

  return {
    initLoad: initLoad
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Common);

/***/ }),

/***/ "./src/js/macros/chart.js":
/*!********************************!*\
  !*** ./src/js/macros/chart.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var ChartCB = function () {
  var tokenChart = function tokenChart() {
    var tokenChart = document.getElementById('tokenChart').getContext('2d');
    var data = {
      labels: ['Team', 'Advisors', 'Token Sale', 'Marketing', 'Product Development', 'Liquidity Pool', 'Reserve Pool'],
      datasets: [{
        label: 'Dataset 1',
        data: [12, 3, 20, 15, 10, 15, 25],
        borderColor: ['#00d992', '#00f968', '#009e42', '#007208', '#00babb', '#04436f', '#003357'],
        backgroundColor: ['#00d992', '#00f968', '#009e42', '#007208', '#00babb', '#04436f', '#003357'],
        pointStyle: 'circle',
        pointRadius: 7,
        tension: 0.3
      }]
    };
    var config = {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'right',
            labels: {
              boxWidth: 20,
              boxHeight: 20,
              color: '#ffffff',
              usePointStyle: true,
              padding: 25,
              font: {
                size: 17,
                weight: 'bold',
                family: "'Raleway', 'sans-serif'"
              }
            }
          },
          title: {
            display: false,
            text: ''
          }
        }
      }
    };
    new Chart(tokenChart, config);
  };

  var init = function init() {
    tokenChart();
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (ChartCB);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/common */ "./src/js/common/common.js");
/* harmony import */ var _macros_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./macros/chart */ "./src/js/macros/chart.js");
 // import FooterBGAnimation from "./macros/footerBGAnimation";

 // EVENT LISTENER - LOAD
// ========================================

window.addEventListener('load', function (ev) {
  // COMMON
  _common_common__WEBPACK_IMPORTED_MODULE_0__["default"].initLoad(); // MACROS
  // FooterBGAnimation.init();

  _macros_chart__WEBPACK_IMPORTED_MODULE_1__["default"].init();
}, false); // EVENT LISTENER - SCROLL
// ========================================

window.addEventListener('scroll', function (ev) {}, false);
}();
/******/ })()
;