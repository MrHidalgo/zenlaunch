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

/***/ "./src/js/macros/IntroductionBGAnimation.js":
/*!**************************************************!*\
  !*** ./src/js/macros/IntroductionBGAnimation.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var IntroductionBGAnimation = function () {
  var init = function init() {
    var particlesJSConfig = {
      "particles": {
        "number": {
          "value": 160,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 4,
            "size_min": 0.3,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 600
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 250,
            "size": 0,
            "duration": 2,
            "opacity": 0,
            "speed": 3
          },
          "repulse": {
            "distance": 400,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    };
    var jsonUri = "data:text/plain;base64," + window.btoa(JSON.stringify(particlesJSConfig));
    particlesJS.load('introduction__box-canvas', jsonUri, function () {});
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (IntroductionBGAnimation);

/***/ }),

/***/ "./src/js/macros/chart.js":
/*!********************************!*\
  !*** ./src/js/macros/chart.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var ChartCB = function () {
  var tokenChart = function tokenChart() {
    var tokenChart = document.getElementById('tokenChart').getContext('2d'),
        growingChart1 = document.getElementById('growingChart1').getContext('2d'),
        growingChart2 = document.getElementById('growingChart2').getContext('2d');
    var dataToken = {
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
    var dataGrowingBar = {
      labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
      datasets: [{
        label: 'ICO',
        data: [100, 100, 100, 100, 45, 75, 25],
        borderColor: '#00babb',
        backgroundColor: '#00babb',
        pointStyle: 'circle',
        pointRadius: 7,
        tension: 0.3
      }, {
        label: 'IDO',
        data: [0, 0, 0, 0, 5, 10, 65],
        borderColor: '#04436f',
        backgroundColor: '#04436f',
        pointStyle: 'circle',
        pointRadius: 7,
        tension: 0.3
      }, {
        label: 'IEO',
        data: [0, 0, 0, 0, 50, 15, 10],
        borderColor: '#00f968',
        backgroundColor: '#00f968',
        pointStyle: 'circle',
        pointRadius: 7,
        tension: 0.3
      }]
    };
    var dataGrowingPie = {
      labels: ['ICO', 'IDO', 'IEO'],
      datasets: [{
        label: 'Dataset 1',
        data: ['256439550', '917806990', '43456760'],
        borderColor: ['#00babb', '#04436f', '#00f968'],
        backgroundColor: ['#00babb', '#04436f', '#00f968'],
        pointStyle: 'circle',
        pointRadius: 7,
        tension: 0.3
      }]
    };
    var configToken = {
      type: 'pie',
      data: dataToken,
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
    var configGrowingBar = {
      type: 'bar',
      data: dataGrowingBar,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            align: 'end',
            labels: {
              boxWidth: 20,
              boxHeight: 20,
              color: '#ffffff',
              usePointStyle: true,
              padding: 10,
              font: {
                size: 17,
                weight: 'bold',
                family: "'Raleway', 'sans-serif'"
              }
            }
          },
          title: {
            display: false,
            align: 'start',
            color: 'white',
            font: {
              size: 26,
              weight: 'bold',
              family: "'Raleway', 'sans-serif'"
            },
            padding: {
              top: 0,
              bottom: 10
            },
            text: 'EVOLUTION OF INITIAL OFFERING TYPES'
          }
        },
        scales: {
          x: {
            stacked: true,
            beginAtZero: true,
            ticks: {
              color: 'white',
              font: {
                size: 17,
                weight: 'bold',
                family: "'Raleway', 'sans-serif'"
              },
              padding: 10
            }
          },
          y: {
            stacked: true,
            beginAtZero: true,
            ticks: {
              min: 0,
              max: 100,
              color: 'white',
              font: {
                size: 17,
                weight: 'normal',
                family: "'Raleway', 'sans-serif'"
              },
              padding: 10,
              callback: function callback(value) {
                return (value / this.max * 100).toFixed(0) + '%';
              }
            }
          }
        }
      }
    };
    var configGrowingPie = {
      type: 'pie',
      data: dataGrowingPie,
      showAllTooltips: true,
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
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
            align: 'start',
            color: 'white',
            font: {
              size: 26,
              weight: 'bold',
              family: "'Raleway', 'sans-serif'"
            },
            padding: {
              top: 0,
              bottom: 10
            },
            text: 'TOTAL RAISED IN JAN-NOV 2021'
          }
        }
      }
    };
    new Chart(tokenChart, configToken);
    new Chart(growingChart1, configGrowingBar);
    new Chart(growingChart2, configGrowingPie);
  };

  var init = function init() {
    tokenChart();
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (ChartCB);

/***/ }),

/***/ "./src/js/macros/footerBGAnimation.js":
/*!********************************************!*\
  !*** ./src/js/macros/footerBGAnimation.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var FooterBGAnimation = function () {
  var init = function init() {
    var particlesJSConfig = {
      "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.75,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "bounce",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "grab"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    };
    var jsonUri = "data:text/plain;base64," + window.btoa(JSON.stringify(particlesJSConfig));
    particlesJS.load('footer__bg-canvas', jsonUri, function () {});
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (FooterBGAnimation);

/***/ }),

/***/ "./src/js/macros/futureBGAnimation.js":
/*!********************************************!*\
  !*** ./src/js/macros/futureBGAnimation.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var FutureBGAnimation = function () {
  var init = function init() {
    var particlesJSConfig = {
      "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.75,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "bounce",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "grab"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    };
    var jsonUri = "data:text/plain;base64," + window.btoa(JSON.stringify(particlesJSConfig));
    particlesJS.load('future__bg-canvas', jsonUri, function () {});
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (FutureBGAnimation);

/***/ }),

/***/ "./src/js/macros/headerFixed.js":
/*!**************************************!*\
  !*** ./src/js/macros/headerFixed.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var HeaderFixed = function () {
  var init = function init() {
    var getCurrentScroll = function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
    };

    var shrinkHeader = 100;
    var scroll = getCurrentScroll();
    var headerEl = document.getElementById('header');
    scroll >= shrinkHeader ? headerEl.classList.add('is-fixed') : headerEl.classList.remove('is-fixed');
    window.addEventListener('scroll', function () {
      var scroll = getCurrentScroll();
      scroll >= shrinkHeader ? headerEl.classList.add('is-fixed') : headerEl.classList.remove('is-fixed');
    });
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (HeaderFixed);

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
/* harmony import */ var _macros_headerFixed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./macros/headerFixed */ "./src/js/macros/headerFixed.js");
/* harmony import */ var _macros_futureBGAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./macros/futureBGAnimation */ "./src/js/macros/futureBGAnimation.js");
/* harmony import */ var _macros_IntroductionBGAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./macros/IntroductionBGAnimation */ "./src/js/macros/IntroductionBGAnimation.js");
/* harmony import */ var _macros_footerBGAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./macros/footerBGAnimation */ "./src/js/macros/footerBGAnimation.js");
/* harmony import */ var _macros_chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./macros/chart */ "./src/js/macros/chart.js");





 // EVENT LISTENER - LOAD
// ========================================

window.addEventListener('load', function (ev) {
  // COMMON
  _common_common__WEBPACK_IMPORTED_MODULE_0__["default"].initLoad(); // MACROS

  _macros_headerFixed__WEBPACK_IMPORTED_MODULE_1__["default"].init(); // FutureBGAnimation.init();
  // IntroductionBGAnimation.init();
  // FooterBGAnimation.init();

  _macros_chart__WEBPACK_IMPORTED_MODULE_5__["default"].init();
}, false); // EVENT LISTENER - SCROLL
// ========================================

window.addEventListener('scroll', function (ev) {}, false);
}();
/******/ })()
;