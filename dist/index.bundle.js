/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --font-size: 10px;\n\n  --clr-gray: #6e6e6e;\n  --clr-ylw-grn: #bcfd4c;\n  --clr-light: #fff;\n  --clr-hover: hsl(283.9, 82.2%, 53.7%);\n}\n\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: var(--font-size);\n  max-inline-size: 100vw;\n}\n\nbody {\n  background-color: var(--clr-ylw-grn);\n  min-block-size: 100vh;\n}\n\nh1 {\n  font-size: clamp(1.5rem, calc(4vw + .5rem), 3rem);\n}\n\nh2 {\n  font-size: clamp(1.7rem, calc(3vw + .5rem), 2.5rem);\n}\n\np {\n  font-size: clamp(1.5rem, calc(2vw + .5rem), 2rem);\n}\n\na {\n  text-decoration: none;\n  color: var(--clr-gray);  \n}\n\na:hover {\n  color: var(--clr-hover);\n  cursor: pointer;\n}\n\n.nav-checkbox {\n  transform: scale(1, 0);\n}\n\n/* utility classes */\n\n.grid {\n  display: grid;\n}\n\n.flex {\n  display: flex;\n}\n\n.hide {\n  display: none;\n}\n\n\n/* wrapper */\n\n.wrapper {\n  grid-template-rows: 80px 5fr 50px;\n}\n\nheader {  \n  grid-area: 1 / 1 / 2 / 1;\n\n  justify-content: space-between;\n  align-items: center;\n  padding-inline: 2rem;\n  color: var(--clr-gray);\n}\n\nheader ul {\n  list-style: none;\n  gap: 4rem;\n  font-size: calc(var(--font-size) * 2);\n}\n\nul li:hover,\nul li:focus {\n  color: var(--clr-hover);\n  cursor: pointer;\n}\n\n/* main */\n\nmain {\n  background-color: var(--clr-light);\n  grid-area: 2 / 1 / 3 / 2;\n  padding-block: 8rem;\n}\n\nmain > article {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 8rem;\n\n  margin-block: 2rem;\n}\n\narticle > section {\n  max-inline-size: clamp(30rem, calc(40vw + 2rem), 55rem);\n  margin-inline: auto;\n  border-radius: 10px; \n}\n\nsection > h2 {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n\n\n/* contact  */\n\n#contact {\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  gap: 5rem;\n\n  padding-block-end: 15rem;\n}\n\n#contact > div {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 3rem;\n}\n\n\n#menu {\n  block-size: auto;\n  grid-gap: 10rem;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));   \n  place-items: center;\n\n  padding-inline: 10rem;\n}\n\n#menu > div {\n  flex-direction: column;\n  padding: 2rem;\n  justify-content: space-between;\n  align-items: center;\n  gap: 2rem;\n  inline-size: clamp(25rem, calc(20vw + 10rem) , 40rem);\n  block-size: 400px;\n  border: 2px solid var(--clr-hover);\n  box-shadow: .5px .5px 2px var(--clr-hover), -.5px -.5px 2px var(--clr-hover);\n  border-radius: 10px;\n}\n\n\n.imageDiv {\n  inline-size: 90%;\n  block-size: 100px;\n\n  border-radius: 15px;\n  justify-self: flex-end;\n} \n\n.imageDiv img {\n  inline-size: 100%;\n  block-size: 100%;\n  object-fit: contain;\n}\n\n\n/* footer  */\n\nfooter {\n  grid-area: 3 / 1 / 4 / 1;\n  place-items: center;\n}\n\n\n@media screen and (max-width: 600px) {\n  \n  header {\n    justify-content: center; \n    gap: 2rem;\n  } \n\n  header ul {\n    transform: scale(1, 0);\n    flex-flow: column nowrap;\n    position: absolute;\n    top: 0;\n    right: 0;\n\n    padding-block-start: 10rem;\n    block-size: 100%;\n    inline-size: 50%;\n\n    padding-left: 2rem;\n    background-color: var(--clr-light); \n\n    transform-origin: top right;\n    transition: transform 250ms ease-in-out;\n    z-index: 99;\n  }   \n\n  .toggle-nav {\n    position: relative;\n    top: 0;\n    right: 0;\n    display: flex;\n    z-index: 100;\n  }\n\n  .toggle-nav > span,\n  .toggle-nav > span::after,\n  .toggle-nav > span::before {\n    display: block;\n    position: relative;\n    inline-size: 3rem;\n    block-size: 2px;\n\n    border-radius: 5px;\n    background-color: var(--clr-gray);\n  }\n\n  .toggle-nav > span::before,\n  .toggle-nav > span::after {\n    position: absolute;\n    content: \"\";\n  }\n\n  .toggle-nav > span::after {\n    bottom: 7px;\n  }\n\n  .toggle-nav > span::before {\n    top: 7px;\n  }\n\n  .nav-checkbox:checked ~ ul {\n    transform: scale(1, 1);\n  }\n\n  .nav-checkbox:checked ~ .toggle-nav > span {\n    background-color: var(--clr-light);\n  }\n\n  .nav-checkbox:checked ~ .toggle-nav > span::before {\n    transform: translateY(-7px) rotate(-135deg);\n  }\n\n  .nav-checkbox:checked ~ .toggle-nav > span::after {\n    transform: translateY(7px) rotate(135deg);\n  }\n\n  #menu {\n    padding-inline: 1rem;\n  }\n} \n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;;EAEjB,mBAAmB;EACnB,sBAAsB;EACtB,iBAAiB;EACjB,qCAAqC;AACvC;;;AAGA;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,oCAAoC;EACpC,qBAAqB;AACvB;;AAEA;EACE,iDAAiD;AACnD;;AAEA;EACE,mDAAmD;AACrD;;AAEA;EACE,iDAAiD;AACnD;;AAEA;EACE,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,sBAAsB;AACxB;;AAEA,oBAAoB;;AAEpB;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;;AAGA,YAAY;;AAEZ;EACE,iCAAiC;AACnC;;AAEA;EACE,wBAAwB;;EAExB,8BAA8B;EAC9B,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,SAAS;EACT,qCAAqC;AACvC;;AAEA;;EAEE,uBAAuB;EACvB,eAAe;AACjB;;AAEA,SAAS;;AAET;EACE,kCAAkC;EAClC,wBAAwB;EACxB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,SAAS;;EAET,kBAAkB;AACpB;;AAEA;EACE,uDAAuD;EACvD,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;;AAGA,aAAa;;AAEb;EACE,wBAAwB;EACxB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;;EAET,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,SAAS;AACX;;;AAGA;EACE,gBAAgB;EAChB,eAAe;EACf,2DAA2D;EAC3D,mBAAmB;;EAEnB,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,SAAS;EACT,qDAAqD;EACrD,iBAAiB;EACjB,kCAAkC;EAClC,4EAA4E;EAC5E,mBAAmB;AACrB;;;AAGA;EACE,gBAAgB;EAChB,iBAAiB;;EAEjB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;AACrB;;;AAGA,YAAY;;AAEZ;EACE,wBAAwB;EACxB,mBAAmB;AACrB;;;AAGA;;EAEE;IACE,uBAAuB;IACvB,SAAS;EACX;;EAEA;IACE,sBAAsB;IACtB,wBAAwB;IACxB,kBAAkB;IAClB,MAAM;IACN,QAAQ;;IAER,0BAA0B;IAC1B,gBAAgB;IAChB,gBAAgB;;IAEhB,kBAAkB;IAClB,kCAAkC;;IAElC,2BAA2B;IAC3B,uCAAuC;IACvC,WAAW;EACb;;EAEA;IACE,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,aAAa;IACb,YAAY;EACd;;EAEA;;;IAGE,cAAc;IACd,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;;IAEf,kBAAkB;IAClB,iCAAiC;EACnC;;EAEA;;IAEE,kBAAkB;IAClB,WAAW;EACb;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,QAAQ;EACV;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,kCAAkC;EACpC;;EAEA;IACE,2CAA2C;EAC7C;;EAEA;IACE,yCAAyC;EAC3C;;EAEA;IACE,oBAAoB;EACtB;AACF","sourcesContent":[":root {\n  --font-size: 10px;\n\n  --clr-gray: #6e6e6e;\n  --clr-ylw-grn: #bcfd4c;\n  --clr-light: #fff;\n  --clr-hover: hsl(283.9, 82.2%, 53.7%);\n}\n\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: var(--font-size);\n  max-inline-size: 100vw;\n}\n\nbody {\n  background-color: var(--clr-ylw-grn);\n  min-block-size: 100vh;\n}\n\nh1 {\n  font-size: clamp(1.5rem, calc(4vw + .5rem), 3rem);\n}\n\nh2 {\n  font-size: clamp(1.7rem, calc(3vw + .5rem), 2.5rem);\n}\n\np {\n  font-size: clamp(1.5rem, calc(2vw + .5rem), 2rem);\n}\n\na {\n  text-decoration: none;\n  color: var(--clr-gray);  \n}\n\na:hover {\n  color: var(--clr-hover);\n  cursor: pointer;\n}\n\n.nav-checkbox {\n  transform: scale(1, 0);\n}\n\n/* utility classes */\n\n.grid {\n  display: grid;\n}\n\n.flex {\n  display: flex;\n}\n\n.hide {\n  display: none;\n}\n\n\n/* wrapper */\n\n.wrapper {\n  grid-template-rows: 80px 5fr 50px;\n}\n\nheader {  \n  grid-area: 1 / 1 / 2 / 1;\n\n  justify-content: space-between;\n  align-items: center;\n  padding-inline: 2rem;\n  color: var(--clr-gray);\n}\n\nheader ul {\n  list-style: none;\n  gap: 4rem;\n  font-size: calc(var(--font-size) * 2);\n}\n\nul li:hover,\nul li:focus {\n  color: var(--clr-hover);\n  cursor: pointer;\n}\n\n/* main */\n\nmain {\n  background-color: var(--clr-light);\n  grid-area: 2 / 1 / 3 / 2;\n  padding-block: 8rem;\n}\n\nmain > article {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 8rem;\n\n  margin-block: 2rem;\n}\n\narticle > section {\n  max-inline-size: clamp(30rem, calc(40vw + 2rem), 55rem);\n  margin-inline: auto;\n  border-radius: 10px; \n}\n\nsection > h2 {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n\n\n/* contact  */\n\n#contact {\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  gap: 5rem;\n\n  padding-block-end: 15rem;\n}\n\n#contact > div {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 3rem;\n}\n\n\n#menu {\n  block-size: auto;\n  grid-gap: 10rem;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));   \n  place-items: center;\n\n  padding-inline: 10rem;\n}\n\n#menu > div {\n  flex-direction: column;\n  padding: 2rem;\n  justify-content: space-between;\n  align-items: center;\n  gap: 2rem;\n  inline-size: clamp(25rem, calc(20vw + 10rem) , 40rem);\n  block-size: 400px;\n  border: 2px solid var(--clr-hover);\n  box-shadow: .5px .5px 2px var(--clr-hover), -.5px -.5px 2px var(--clr-hover);\n  border-radius: 10px;\n}\n\n\n.imageDiv {\n  inline-size: 90%;\n  block-size: 100px;\n\n  border-radius: 15px;\n  justify-self: flex-end;\n} \n\n.imageDiv img {\n  inline-size: 100%;\n  block-size: 100%;\n  object-fit: contain;\n}\n\n\n/* footer  */\n\nfooter {\n  grid-area: 3 / 1 / 4 / 1;\n  place-items: center;\n}\n\n\n@media screen and (max-width: 600px) {\n  \n  header {\n    justify-content: center; \n    gap: 2rem;\n  } \n\n  header ul {\n    transform: scale(1, 0);\n    flex-flow: column nowrap;\n    position: absolute;\n    top: 0;\n    right: 0;\n\n    padding-block-start: 10rem;\n    block-size: 100%;\n    inline-size: 50%;\n\n    padding-left: 2rem;\n    background-color: var(--clr-light); \n\n    transform-origin: top right;\n    transition: transform 250ms ease-in-out;\n    z-index: 99;\n  }   \n\n  .toggle-nav {\n    position: relative;\n    top: 0;\n    right: 0;\n    display: flex;\n    z-index: 100;\n  }\n\n  .toggle-nav > span,\n  .toggle-nav > span::after,\n  .toggle-nav > span::before {\n    display: block;\n    position: relative;\n    inline-size: 3rem;\n    block-size: 2px;\n\n    border-radius: 5px;\n    background-color: var(--clr-gray);\n  }\n\n  .toggle-nav > span::before,\n  .toggle-nav > span::after {\n    position: absolute;\n    content: \"\";\n  }\n\n  .toggle-nav > span::after {\n    bottom: 7px;\n  }\n\n  .toggle-nav > span::before {\n    top: 7px;\n  }\n\n  .nav-checkbox:checked ~ ul {\n    transform: scale(1, 1);\n  }\n\n  .nav-checkbox:checked ~ .toggle-nav > span {\n    background-color: var(--clr-light);\n  }\n\n  .nav-checkbox:checked ~ .toggle-nav > span::before {\n    transform: translateY(-7px) rotate(-135deg);\n  }\n\n  .nav-checkbox:checked ~ .toggle-nav > span::after {\n    transform: translateY(7px) rotate(135deg);\n  }\n\n  #menu {\n    padding-inline: 1rem;\n  }\n} \n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/footer/footer.js":
/*!******************************!*\
  !*** ./src/footer/footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const footerDiv = () => {
  const footer = document.createElement("footer");

  const p = document.createElement("p");
  const a = document.createElement("a");
  a.href = "https://www.linkedin.com/in/pradeepsaini01"
  a.textContent = "Made by Pradeep Saini";
  p.appendChild(a);

  footer.appendChild(p);
  footer.classList.add("grid");
  return footer; 
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerDiv);


/***/ }),

/***/ "./src/header/header.js":
/*!******************************!*\
  !*** ./src/header/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/header/nav.js");



const header = () => {
  const head = document.createElement("header");
  head.classList.add("flex");

  const heading = document.createElement("h1");
  heading.textContent = "Hawk Restaurant";
  
  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = "nav-checkbox";
  input.classList.add("nav-checkbox");

  const navigation = (0,_nav__WEBPACK_IMPORTED_MODULE_0__["default"])();

  head.appendChild(heading);
  head.appendChild(input);
  head.appendChild(navigation);

  const label = document.createElement("label");
  label.setAttribute("for", "nav-checkbox");
  label.classList.add("toggle-nav");
  const span = document.createElement("span");
  
  label.appendChild(span);
  head.appendChild(label);
  return head
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);


/***/ }),

/***/ "./src/header/nav.js":
/*!***************************!*\
  !*** ./src/header/nav.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const nav = () => {

  const ul = document.createElement("ul");
  ul.classList.add("flex");

  const navLiOne = document.createElement("li");
  navLiOne.textContent = "Home";

  const navLiTwo = document.createElement("li");
  navLiTwo.textContent = "Menu";

  const navLiThree = document.createElement("li");
  navLiThree.textContent = "Contact";

  [navLiOne, navLiTwo, navLiThree].forEach(item => ul.appendChild(item));

  return ul;
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);


/***/ }),

/***/ "./src/main/about.js":
/*!***************************!*\
  !*** ./src/main/about.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contentBox = (h2Title, para) => {
  const section = document.createElement("section");

  const h2 = document.createElement("h2");
  h2.textContent = h2Title;

  const p = document.createElement("p");
  p.textContent = para;

  section.appendChild(h2);
  section.appendChild(p);

  return section;
};


const about = () => {

  const story = "Everything we do is a celebration of food - from how we source our food materials to serving up new ways for you to enjoy it. Since 1968, we are committed to bring a experience you find only here.";
  const storyHeading = "OUR STORY";

  const kitchenItems = "We serve item1, item2, item3, item4, item5; prepared with the best material out there and with the best hands in the trade.";
  const kitchenHeading = "FROM THE KITCHEN";

  const storySection = contentBox(storyHeading, story);
  const kitchenSection = contentBox(kitchenHeading, kitchenItems);

  const articles = document.createElement("article");
  articles.appendChild(storySection);
  articles.appendChild(kitchenSection);
  articles.setAttribute("id", "about");
  return articles;
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);


/***/ }),

/***/ "./src/main/contact.js":
/*!*****************************!*\
  !*** ./src/main/contact.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const makeContact = (street, name, address) => {

  const h2 = document.createElement("h2");
  h2.textContent = "CONTACT US:";

  const streetNum = document.createElement("p");
  const streetName = streetNum.cloneNode(true);
  const locationAdd = streetNum.cloneNode(true);

  streetNum.textContent = street;
  streetName.textContent = name;
  locationAdd.textContent = address;

  const div = document.createElement("div");
  const paraDiv = div.cloneNode(true);

  [streetNum, streetName, locationAdd].forEach(para => paraDiv.appendChild(para));
  [h2, paraDiv].forEach(item => div.appendChild(item));
 
  div.setAttribute("id", "contact");
  div.classList.add("hide");
  div.classList.add("flex");
  return div;
};


const createContact = () => {
  const street = "1902/2,";
  const name = "Brumburg street,";
  const address = "Behind the ancient pond, Mordor.";

  return makeContact(street, name, address);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);


/***/ }),

/***/ "./src/main/main.js":
/*!**************************!*\
  !*** ./src/main/main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ "./src/main/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/main/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/main/menu.js");




const aboutRestaurant = (0,_about__WEBPACK_IMPORTED_MODULE_0__["default"])();

const main = () => { 
  const mainContent = document.createElement("main")
  mainContent.appendChild(aboutRestaurant);
  
  const contact = (0,_contact__WEBPACK_IMPORTED_MODULE_1__["default"])();
  mainContent.appendChild(contact);
  
  const menuContent = (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
  mainContent.appendChild(menuContent);
  mainContent.classList.add("grid");
  mainContent.setAttribute("id", "main");

  return mainContent;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);


/***/ }),

/***/ "./src/main/menu.js":
/*!**************************!*\
  !*** ./src/main/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_white_truffle_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/white-truffle.jpg */ "./src/assets/white-truffle.jpg");
/* harmony import */ var _assets_lemon_sauce_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/lemon-sauce.webp */ "./src/assets/lemon-sauce.webp");
/* harmony import */ var _assets_seafood_sauce_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/seafood-sauce.jpeg */ "./src/assets/seafood-sauce.jpeg");
/* harmony import */ var _assets_pork_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/pork.jpeg */ "./src/assets/pork.jpeg");
/* harmony import */ var _assets_pecan_chicken_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/pecan-chicken.jpeg */ "./src/assets/pecan-chicken.jpeg");
/* harmony import */ var _assets_crab_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/crab.jpeg */ "./src/assets/crab.jpeg");
/* harmony import */ var _assets_gnocchi_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/gnocchi.jpeg */ "./src/assets/gnocchi.jpeg");
/* harmony import */ var _assets_roasted_lamb_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/roasted-lamb.jpeg */ "./src/assets/roasted-lamb.jpeg");









const images = [_assets_white_truffle_jpg__WEBPACK_IMPORTED_MODULE_0__, _assets_lemon_sauce_webp__WEBPACK_IMPORTED_MODULE_1__, _assets_seafood_sauce_jpeg__WEBPACK_IMPORTED_MODULE_2__, _assets_pork_jpeg__WEBPACK_IMPORTED_MODULE_3__, _assets_pecan_chicken_jpeg__WEBPACK_IMPORTED_MODULE_4__, _assets_crab_jpeg__WEBPACK_IMPORTED_MODULE_5__, _assets_gnocchi_jpeg__WEBPACK_IMPORTED_MODULE_6__, _assets_roasted_lamb_jpeg__WEBPACK_IMPORTED_MODULE_7__];

const food = (name, foodDes, price, image, altDes, i) => {
  const div = document.createElement("div");

  const h2 = document.createElement("h2");
  h2.textContent = name;

  const pPrice = document.createElement("p");
  const pDes = document.createElement("p");
  
  pDes.textContent = foodDes;
  pPrice.textContent = "Price: " + price;

  const imageDiv = document.createElement("div");
  imageDiv.classList.add("imageDiv");
  const img = new Image();
  img.src = images[i];
  img.alt = altDes;
  imageDiv.appendChild(img);

  [h2, pDes, pPrice, imageDiv].forEach(item => div.appendChild(item));
  
  div.classList.add("flex");
  return div;
};


const createMenu = () => {
  
  const foodItems = {
    1: {
      name: "White Truffles Egg",
      desc: "Served with scrambled eggs, this exuisite food will sooth your liver and your brain.",
      price: "$200",
      img: "../assets/white-truffle.jpg",
      alt: "",
    },
    2: {
      name: "Lemon Sauce Pullapa",
      desc: "A dish made with lemon sauce. It will send buzzes inside your tongue.",
      price: "$300",
      img: "../assets/lemon-sauce.webp",
      alt: "",
    },
    3: {
      name: "Cajun Seafood Pasta",
      desc: "A hot and delicios recipe. It will slide down your throat and your stomach will crave to taste it.",
      price: "$340",
      img: "../assets/seafood-sauce.jpeg",
      alt: "Cajun Seafood Pasta",
    },
    4: {
      name: "Pork Chops with Raspberry Sauce",
      desc: "Pork raised on open farms, who wandered the mountains and bathed in rivers, is ready to be eaten by YOU.",
      price: "$390",
      img: "../assets/pork.jpeg",
      alt: "Pork Chops with Raspberry Sauce",
    },
    5: {
      name: "Bourban Pecan Chicken",
      desc: "Chicken cooked by the master chef, who cooked for the gods.",
      price: "$440",
      img: "../assets/pecan-chicken.jpeg",
      alt: "",
    },
    6: {
      name: "Crab-Stuffed Lobster Tail",
      desc: "Two friends, a crab and a lobster have travelled the ocean to satisfy your hunger.",
      price: "$500",
      img: "../assets/crab.jpeg",
      alt: "",
    },
    7: {
      name: "Gnocchi with Sage-Butter",
      desc: "Melted butter on gnocchi will fulfil all your desires for the food.",
      price: "$540",
      img: "../assets/gnocchi.jpeg",
      alt: "",
    },
    8: {
      name: "Roasted Rack of Lamb",
      desc: "Lamb raised with the utmost care. Fed the greenest grass. Roamed the greenest pastures under the blue sky. He is ready for you.",
      price: "$600", 
      img: "../assets/roasted-lamb.jpeg",
      alt: "",
    }
  };
  
  const div = document.createElement("div");

  const foodValue = Object.values(foodItems);
  
  let i = 0;
  for (let item of foodValue) {
    const foodItem = food(item.name, item.desc, item.price, item.img, item.alt, i);

    div.appendChild(foodItem);
    i += 1;
  };

  div.classList.add("hide")
  div.setAttribute("id", "menu");
  div.classList.add("grid");
  return div;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);


/***/ }),

/***/ "./src/assets/crab.jpeg":
/*!******************************!*\
  !*** ./src/assets/crab.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "43ad34e534e204fc2f17.jpeg";

/***/ }),

/***/ "./src/assets/gnocchi.jpeg":
/*!*********************************!*\
  !*** ./src/assets/gnocchi.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9c2c977b5d75eec61ae.jpeg";

/***/ }),

/***/ "./src/assets/lemon-sauce.webp":
/*!*************************************!*\
  !*** ./src/assets/lemon-sauce.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a4ef9082d95a732cc40.webp";

/***/ }),

/***/ "./src/assets/pecan-chicken.jpeg":
/*!***************************************!*\
  !*** ./src/assets/pecan-chicken.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50839178a3da6b54517a.jpeg";

/***/ }),

/***/ "./src/assets/pork.jpeg":
/*!******************************!*\
  !*** ./src/assets/pork.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab8722bd094d56a2af98.jpeg";

/***/ }),

/***/ "./src/assets/roasted-lamb.jpeg":
/*!**************************************!*\
  !*** ./src/assets/roasted-lamb.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa8061bf56ca9f6231e1.jpeg";

/***/ }),

/***/ "./src/assets/seafood-sauce.jpeg":
/*!***************************************!*\
  !*** ./src/assets/seafood-sauce.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4b5289131ee9717ffe3.jpeg";

/***/ }),

/***/ "./src/assets/white-truffle.jpg":
/*!**************************************!*\
  !*** ./src/assets/white-truffle.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c72c7440ec1489900c2.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header */ "./src/header/header.js");
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main */ "./src/main/main.js");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer */ "./src/footer/footer.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







function show(e) {
  const main = document.querySelector("main");
  const target = e.target;
  const menuItem = target.textContent;
  
  ["about", "contact", "menu"].forEach((id) => document.getElementById(id).classList.add("hide"));

  if (menuItem === "Home") main.children[0].classList.toggle("hide");

  if (menuItem === "Contact") main.children[1].classList.toggle("hide");

  if (menuItem === "Menu") main.children[2].classList.toggle("hide"); 
};


const makeHeader = (wrapper) => {
  const pageHeader = (0,_header_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
  
  pageHeader.children[2].children[0].addEventListener("click", show);
  pageHeader.children[2].children[1].addEventListener("click", show);
  pageHeader.children[2].children[2].addEventListener("click", show);

  wrapper.appendChild(pageHeader);
};


const makeMain = (body) => {
  const mainContent = (0,_main_main__WEBPACK_IMPORTED_MODULE_1__["default"])();
  body.appendChild(mainContent);
}


const makeFooter = (body) => {
  const footerContent = (0,_footer_footer__WEBPACK_IMPORTED_MODULE_2__["default"])();
  body.appendChild(footerContent);
}

(() => {
  const body = document.querySelector("body");
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  wrapper.classList.add("grid");
  makeHeader(wrapper);
  makeMain(wrapper);
  makeFooter(wrapper); 
  body.appendChild(wrapper);
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVmOzs7QUFHckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0EscUJBQXFCLDBEQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0Esc0JBQXNCLHNEQUFJO0FBQzFCO0FBQ0E7OztBQUdBO0FBQ0Esd0JBQXdCLDBEQUFNO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaGVhZGVyL25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWFpbi9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWFpbi9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tYWluL21haW4uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21haW4vbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1mb250LXNpemU6IDEwcHg7XFxuXFxuICAtLWNsci1ncmF5OiAjNmU2ZTZlO1xcbiAgLS1jbHIteWx3LWdybjogI2JjZmQ0YztcXG4gIC0tY2xyLWxpZ2h0OiAjZmZmO1xcbiAgLS1jbHItaG92ZXI6IGhzbCgyODMuOSwgODIuMiUsIDUzLjclKTtcXG59XFxuXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbiAgbWF4LWlubGluZS1zaXplOiAxMDB2dztcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHIteWx3LWdybik7XFxuICBtaW4tYmxvY2stc2l6ZTogMTAwdmg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCBjYWxjKDR2dyArIC41cmVtKSwgM3JlbSk7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS43cmVtLCBjYWxjKDN2dyArIC41cmVtKSwgMi41cmVtKTtcXG59XFxuXFxucCB7XFxuICBmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgY2FsYygydncgKyAuNXJlbSksIDJyZW0pO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItZ3JheSk7ICBcXG59XFxuXFxuYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWhvdmVyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdi1jaGVja2JveCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDApO1xcbn1cXG5cXG4vKiB1dGlsaXR5IGNsYXNzZXMgKi9cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG4vKiB3cmFwcGVyICovXFxuXFxuLndyYXBwZXIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IDVmciA1MHB4O1xcbn1cXG5cXG5oZWFkZXIgeyAgXFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDE7XFxuXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1pbmxpbmU6IDJyZW07XFxuICBjb2xvcjogdmFyKC0tY2xyLWdyYXkpO1xcbn1cXG5cXG5oZWFkZXIgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGdhcDogNHJlbTtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1mb250LXNpemUpICogMik7XFxufVxcblxcbnVsIGxpOmhvdmVyLFxcbnVsIGxpOmZvY3VzIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItaG92ZXIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBtYWluICovXFxuXFxubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgcGFkZGluZy1ibG9jazogOHJlbTtcXG59XFxuXFxubWFpbiA+IGFydGljbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIGdhcDogOHJlbTtcXG5cXG4gIG1hcmdpbi1ibG9jazogMnJlbTtcXG59XFxuXFxuYXJ0aWNsZSA+IHNlY3Rpb24ge1xcbiAgbWF4LWlubGluZS1zaXplOiBjbGFtcCgzMHJlbSwgY2FsYyg0MHZ3ICsgMnJlbSksIDU1cmVtKTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxMHB4OyBcXG59XFxuXFxuc2VjdGlvbiA+IGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcblxcbi8qIGNvbnRhY3QgICovXFxuXFxuI2NvbnRhY3Qge1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cmVtO1xcblxcbiAgcGFkZGluZy1ibG9jay1lbmQ6IDE1cmVtO1xcbn1cXG5cXG4jY29udGFjdCA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5cXG5cXG4jbWVudSB7XFxuICBibG9jay1zaXplOiBhdXRvO1xcbiAgZ3JpZC1nYXA6IDEwcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7ICAgXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcblxcbiAgcGFkZGluZy1pbmxpbmU6IDEwcmVtO1xcbn1cXG5cXG4jbWVudSA+IGRpdiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICBpbmxpbmUtc2l6ZTogY2xhbXAoMjVyZW0sIGNhbGMoMjB2dyArIDEwcmVtKSAsIDQwcmVtKTtcXG4gIGJsb2NrLXNpemU6IDQwMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2xyLWhvdmVyKTtcXG4gIGJveC1zaGFkb3c6IC41cHggLjVweCAycHggdmFyKC0tY2xyLWhvdmVyKSwgLS41cHggLS41cHggMnB4IHZhcigtLWNsci1ob3Zlcik7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5cXG4uaW1hZ2VEaXYge1xcbiAgaW5saW5lLXNpemU6IDkwJTtcXG4gIGJsb2NrLXNpemU6IDEwMHB4O1xcblxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxufSBcXG5cXG4uaW1hZ2VEaXYgaW1nIHtcXG4gIGlubGluZS1zaXplOiAxMDAlO1xcbiAgYmxvY2stc2l6ZTogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcblxcbi8qIGZvb3RlciAgKi9cXG5cXG5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAxO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIFxcbiAgaGVhZGVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxcbiAgICBnYXA6IDJyZW07XFxuICB9IFxcblxcbiAgaGVhZGVyIHVsIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAwKTtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuXFxuICAgIHBhZGRpbmctYmxvY2stc3RhcnQ6IDEwcmVtO1xcbiAgICBibG9jay1zaXplOiAxMDAlO1xcbiAgICBpbmxpbmUtc2l6ZTogNTAlO1xcblxcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1saWdodCk7IFxcblxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcXG4gICAgei1pbmRleDogOTk7XFxuICB9ICAgXFxuXFxuICAudG9nZ2xlLW5hdiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgfVxcblxcbiAgLnRvZ2dsZS1uYXYgPiBzcGFuLFxcbiAgLnRvZ2dsZS1uYXYgPiBzcGFuOjphZnRlcixcXG4gIC50b2dnbGUtbmF2ID4gc3Bhbjo6YmVmb3JlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaW5saW5lLXNpemU6IDNyZW07XFxuICAgIGJsb2NrLXNpemU6IDJweDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZ3JheSk7XFxuICB9XFxuXFxuICAudG9nZ2xlLW5hdiA+IHNwYW46OmJlZm9yZSxcXG4gIC50b2dnbGUtbmF2ID4gc3Bhbjo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgfVxcblxcbiAgLnRvZ2dsZS1uYXYgPiBzcGFuOjphZnRlciB7XFxuICAgIGJvdHRvbTogN3B4O1xcbiAgfVxcblxcbiAgLnRvZ2dsZS1uYXYgPiBzcGFuOjpiZWZvcmUge1xcbiAgICB0b3A6IDdweDtcXG4gIH1cXG5cXG4gIC5uYXYtY2hlY2tib3g6Y2hlY2tlZCB+IHVsIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gIH1cXG5cXG4gIC5uYXYtY2hlY2tib3g6Y2hlY2tlZCB+IC50b2dnbGUtbmF2ID4gc3BhbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxuICB9XFxuXFxuICAubmF2LWNoZWNrYm94OmNoZWNrZWQgfiAudG9nZ2xlLW5hdiA+IHNwYW46OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtN3B4KSByb3RhdGUoLTEzNWRlZyk7XFxuICB9XFxuXFxuICAubmF2LWNoZWNrYm94OmNoZWNrZWQgfiAudG9nZ2xlLW5hdiA+IHNwYW46OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDdweCkgcm90YXRlKDEzNWRlZyk7XFxuICB9XFxuXFxuICAjbWVudSB7XFxuICAgIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbiAgfVxcbn0gXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjs7RUFFakIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIscUNBQXFDO0FBQ3ZDOzs7QUFHQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOzs7QUFHQSxZQUFZOztBQUVaO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usd0JBQXdCOztFQUV4Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULHFDQUFxQztBQUN2Qzs7QUFFQTs7RUFFRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQSxTQUFTOztBQUVUO0VBQ0Usa0NBQWtDO0VBQ2xDLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLFNBQVM7O0VBRVQsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdURBQXVEO0VBQ3ZELG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOzs7QUFHQSxhQUFhOztBQUViO0VBQ0Usd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUzs7RUFFVCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLFNBQVM7QUFDWDs7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDJEQUEyRDtFQUMzRCxtQkFBbUI7O0VBRW5CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QscURBQXFEO0VBQ3JELGlCQUFpQjtFQUNqQixrQ0FBa0M7RUFDbEMsNEVBQTRFO0VBQzVFLG1CQUFtQjtBQUNyQjs7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCOztFQUVqQixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7OztBQUdBLFlBQVk7O0FBRVo7RUFDRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOzs7QUFHQTs7RUFFRTtJQUNFLHVCQUF1QjtJQUN2QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTs7SUFFUiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7SUFFaEIsa0JBQWtCO0lBQ2xCLGtDQUFrQzs7SUFFbEMsMkJBQTJCO0lBQzNCLHVDQUF1QztJQUN2QyxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixhQUFhO0lBQ2IsWUFBWTtFQUNkOztFQUVBOzs7SUFHRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlOztJQUVmLGtCQUFrQjtJQUNsQixpQ0FBaUM7RUFDbkM7O0VBRUE7O0lBRUUsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGtDQUFrQztFQUNwQzs7RUFFQTtJQUNFLDJDQUEyQztFQUM3Qzs7RUFFQTtJQUNFLHlDQUF5QztFQUMzQzs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tZm9udC1zaXplOiAxMHB4O1xcblxcbiAgLS1jbHItZ3JheTogIzZlNmU2ZTtcXG4gIC0tY2xyLXlsdy1ncm46ICNiY2ZkNGM7XFxuICAtLWNsci1saWdodDogI2ZmZjtcXG4gIC0tY2xyLWhvdmVyOiBoc2woMjgzLjksIDgyLjIlLCA1My43JSk7XFxufVxcblxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gIG1heC1pbmxpbmUtc2l6ZTogMTAwdnc7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXlsdy1ncm4pO1xcbiAgbWluLWJsb2NrLXNpemU6IDEwMHZoO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgY2FsYyg0dncgKyAuNXJlbSksIDNyZW0pO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IGNsYW1wKDEuN3JlbSwgY2FsYygzdncgKyAuNXJlbSksIDIuNXJlbSk7XFxufVxcblxcbnAge1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIGNhbGMoMnZ3ICsgLjVyZW0pLCAycmVtKTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tY2xyLWdyYXkpOyAgXFxufVxcblxcbmE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNsci1ob3Zlcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYXYtY2hlY2tib3gge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAwKTtcXG59XFxuXFxuLyogdXRpbGl0eSBjbGFzc2VzICovXFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuLyogd3JhcHBlciAqL1xcblxcbi53cmFwcGVyIHtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCA1ZnIgNTBweDtcXG59XFxuXFxuaGVhZGVyIHsgIFxcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAxO1xcblxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctaW5saW5lOiAycmVtO1xcbiAgY29sb3I6IHZhcigtLWNsci1ncmF5KTtcXG59XFxuXFxuaGVhZGVyIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBnYXA6IDRyZW07XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tZm9udC1zaXplKSAqIDIpO1xcbn1cXG5cXG51bCBsaTpob3ZlcixcXG51bCBsaTpmb2N1cyB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWhvdmVyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogbWFpbiAqL1xcblxcbm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gIHBhZGRpbmctYmxvY2s6IDhyZW07XFxufVxcblxcbm1haW4gPiBhcnRpY2xlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICBnYXA6IDhyZW07XFxuXFxuICBtYXJnaW4tYmxvY2s6IDJyZW07XFxufVxcblxcbmFydGljbGUgPiBzZWN0aW9uIHtcXG4gIG1heC1pbmxpbmUtc2l6ZTogY2xhbXAoMzByZW0sIGNhbGMoNDB2dyArIDJyZW0pLCA1NXJlbSk7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgXFxufVxcblxcbnNlY3Rpb24gPiBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG5cXG4vKiBjb250YWN0ICAqL1xcblxcbiNjb250YWN0IHtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNXJlbTtcXG5cXG4gIHBhZGRpbmctYmxvY2stZW5kOiAxNXJlbTtcXG59XFxuXFxuI2NvbnRhY3QgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIGdhcDogM3JlbTtcXG59XFxuXFxuXFxuI21lbnUge1xcbiAgYmxvY2stc2l6ZTogYXV0bztcXG4gIGdyaWQtZ2FwOiAxMHJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpOyAgIFxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG5cXG4gIHBhZGRpbmctaW5saW5lOiAxMHJlbTtcXG59XFxuXFxuI21lbnUgPiBkaXYge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgaW5saW5lLXNpemU6IGNsYW1wKDI1cmVtLCBjYWxjKDIwdncgKyAxMHJlbSkgLCA0MHJlbSk7XFxuICBibG9jay1zaXplOiA0MDBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNsci1ob3Zlcik7XFxuICBib3gtc2hhZG93OiAuNXB4IC41cHggMnB4IHZhcigtLWNsci1ob3ZlciksIC0uNXB4IC0uNXB4IDJweCB2YXIoLS1jbHItaG92ZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuXFxuLmltYWdlRGl2IHtcXG4gIGlubGluZS1zaXplOiA5MCU7XFxuICBibG9jay1zaXplOiAxMDBweDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbn0gXFxuXFxuLmltYWdlRGl2IGltZyB7XFxuICBpbmxpbmUtc2l6ZTogMTAwJTtcXG4gIGJsb2NrLXNpemU6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG5cXG4vKiBmb290ZXIgICovXFxuXFxuZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBcXG4gIGhlYWRlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcXG4gICAgZ2FwOiAycmVtO1xcbiAgfSBcXG5cXG4gIGhlYWRlciB1bCB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcblxcbiAgICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAxMHJlbTtcXG4gICAgYmxvY2stc2l6ZTogMTAwJTtcXG4gICAgaW5saW5lLXNpemU6IDUwJTtcXG5cXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbGlnaHQpOyBcXG5cXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHotaW5kZXg6IDk5O1xcbiAgfSAgIFxcblxcbiAgLnRvZ2dsZS1uYXYge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gIH1cXG5cXG4gIC50b2dnbGUtbmF2ID4gc3BhbixcXG4gIC50b2dnbGUtbmF2ID4gc3Bhbjo6YWZ0ZXIsXFxuICAudG9nZ2xlLW5hdiA+IHNwYW46OmJlZm9yZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGlubGluZS1zaXplOiAzcmVtO1xcbiAgICBibG9jay1zaXplOiAycHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWdyYXkpO1xcbiAgfVxcblxcbiAgLnRvZ2dsZS1uYXYgPiBzcGFuOjpiZWZvcmUsXFxuICAudG9nZ2xlLW5hdiA+IHNwYW46OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIH1cXG5cXG4gIC50b2dnbGUtbmF2ID4gc3Bhbjo6YWZ0ZXIge1xcbiAgICBib3R0b206IDdweDtcXG4gIH1cXG5cXG4gIC50b2dnbGUtbmF2ID4gc3Bhbjo6YmVmb3JlIHtcXG4gICAgdG9wOiA3cHg7XFxuICB9XFxuXFxuICAubmF2LWNoZWNrYm94OmNoZWNrZWQgfiB1bCB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxuICB9XFxuXFxuICAubmF2LWNoZWNrYm94OmNoZWNrZWQgfiAudG9nZ2xlLW5hdiA+IHNwYW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcbiAgfVxcblxcbiAgLm5hdi1jaGVja2JveDpjaGVja2VkIH4gLnRvZ2dsZS1uYXYgPiBzcGFuOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTdweCkgcm90YXRlKC0xMzVkZWcpO1xcbiAgfVxcblxcbiAgLm5hdi1jaGVja2JveDpjaGVja2VkIH4gLnRvZ2dsZS1uYXYgPiBzcGFuOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3cHgpIHJvdGF0ZSgxMzVkZWcpO1xcbiAgfVxcblxcbiAgI21lbnUge1xcbiAgICBwYWRkaW5nLWlubGluZTogMXJlbTtcXG4gIH1cXG59IFxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZm9vdGVyRGl2ID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBhLmhyZWYgPSBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9wcmFkZWVwc2FpbmkwMVwiXG4gIGEudGV4dENvbnRlbnQgPSBcIk1hZGUgYnkgUHJhZGVlcCBTYWluaVwiO1xuICBwLmFwcGVuZENoaWxkKGEpO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChwKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuICByZXR1cm4gZm9vdGVyOyBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmb290ZXJEaXY7XG4iLCJpbXBvcnQgbmF2IGZyb20gXCIuL25hdlwiO1xuXG5cbmNvbnN0IGhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGhlYWQuY2xhc3NMaXN0LmFkZChcImZsZXhcIik7XG5cbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiSGF3ayBSZXN0YXVyYW50XCI7XG4gIFxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgaW5wdXQuaWQgPSBcIm5hdi1jaGVja2JveFwiO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwibmF2LWNoZWNrYm94XCIpO1xuXG4gIGNvbnN0IG5hdmlnYXRpb24gPSBuYXYoKTtcblxuICBoZWFkLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBoZWFkLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgaGVhZC5hcHBlbmRDaGlsZChuYXZpZ2F0aW9uKTtcblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmF2LWNoZWNrYm94XCIpO1xuICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlLW5hdlwiKTtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBcbiAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIGhlYWQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICByZXR1cm4gaGVhZFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXI7XG4iLCJjb25zdCBuYXYgPSAoKSA9PiB7XG5cbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHVsLmNsYXNzTGlzdC5hZGQoXCJmbGV4XCIpO1xuXG4gIGNvbnN0IG5hdkxpT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBuYXZMaU9uZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuXG4gIGNvbnN0IG5hdkxpVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBuYXZMaVR3by50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG4gIGNvbnN0IG5hdkxpVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIG5hdkxpVGhyZWUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICBbbmF2TGlPbmUsIG5hdkxpVHdvLCBuYXZMaVRocmVlXS5mb3JFYWNoKGl0ZW0gPT4gdWwuYXBwZW5kQ2hpbGQoaXRlbSkpO1xuXG4gIHJldHVybiB1bDtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgbmF2O1xuIiwiY29uc3QgY29udGVudEJveCA9IChoMlRpdGxlLCBwYXJhKSA9PiB7XG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblxuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaDIudGV4dENvbnRlbnQgPSBoMlRpdGxlO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcC50ZXh0Q29udGVudCA9IHBhcmE7XG5cbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChoMik7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQocCk7XG5cbiAgcmV0dXJuIHNlY3Rpb247XG59O1xuXG5cbmNvbnN0IGFib3V0ID0gKCkgPT4ge1xuXG4gIGNvbnN0IHN0b3J5ID0gXCJFdmVyeXRoaW5nIHdlIGRvIGlzIGEgY2VsZWJyYXRpb24gb2YgZm9vZCAtIGZyb20gaG93IHdlIHNvdXJjZSBvdXIgZm9vZCBtYXRlcmlhbHMgdG8gc2VydmluZyB1cCBuZXcgd2F5cyBmb3IgeW91IHRvIGVuam95IGl0LiBTaW5jZSAxOTY4LCB3ZSBhcmUgY29tbWl0dGVkIHRvIGJyaW5nIGEgZXhwZXJpZW5jZSB5b3UgZmluZCBvbmx5IGhlcmUuXCI7XG4gIGNvbnN0IHN0b3J5SGVhZGluZyA9IFwiT1VSIFNUT1JZXCI7XG5cbiAgY29uc3Qga2l0Y2hlbkl0ZW1zID0gXCJXZSBzZXJ2ZSBpdGVtMSwgaXRlbTIsIGl0ZW0zLCBpdGVtNCwgaXRlbTU7IHByZXBhcmVkIHdpdGggdGhlIGJlc3QgbWF0ZXJpYWwgb3V0IHRoZXJlIGFuZCB3aXRoIHRoZSBiZXN0IGhhbmRzIGluIHRoZSB0cmFkZS5cIjtcbiAgY29uc3Qga2l0Y2hlbkhlYWRpbmcgPSBcIkZST00gVEhFIEtJVENIRU5cIjtcblxuICBjb25zdCBzdG9yeVNlY3Rpb24gPSBjb250ZW50Qm94KHN0b3J5SGVhZGluZywgc3RvcnkpO1xuICBjb25zdCBraXRjaGVuU2VjdGlvbiA9IGNvbnRlbnRCb3goa2l0Y2hlbkhlYWRpbmcsIGtpdGNoZW5JdGVtcyk7XG5cbiAgY29uc3QgYXJ0aWNsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgYXJ0aWNsZXMuYXBwZW5kQ2hpbGQoc3RvcnlTZWN0aW9uKTtcbiAgYXJ0aWNsZXMuYXBwZW5kQ2hpbGQoa2l0Y2hlblNlY3Rpb24pO1xuICBhcnRpY2xlcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0XCIpO1xuICByZXR1cm4gYXJ0aWNsZXM7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0O1xuIiwiY29uc3QgbWFrZUNvbnRhY3QgPSAoc3RyZWV0LCBuYW1lLCBhZGRyZXNzKSA9PiB7XG5cbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGgyLnRleHRDb250ZW50ID0gXCJDT05UQUNUIFVTOlwiO1xuXG4gIGNvbnN0IHN0cmVldE51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBzdHJlZXROYW1lID0gc3RyZWV0TnVtLmNsb25lTm9kZSh0cnVlKTtcbiAgY29uc3QgbG9jYXRpb25BZGQgPSBzdHJlZXROdW0uY2xvbmVOb2RlKHRydWUpO1xuXG4gIHN0cmVldE51bS50ZXh0Q29udGVudCA9IHN0cmVldDtcbiAgc3RyZWV0TmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIGxvY2F0aW9uQWRkLnRleHRDb250ZW50ID0gYWRkcmVzcztcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwYXJhRGl2ID0gZGl2LmNsb25lTm9kZSh0cnVlKTtcblxuICBbc3RyZWV0TnVtLCBzdHJlZXROYW1lLCBsb2NhdGlvbkFkZF0uZm9yRWFjaChwYXJhID0+IHBhcmFEaXYuYXBwZW5kQ2hpbGQocGFyYSkpO1xuICBbaDIsIHBhcmFEaXZdLmZvckVhY2goaXRlbSA9PiBkaXYuYXBwZW5kQ2hpbGQoaXRlbSkpO1xuIFxuICBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwiZmxleFwiKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cblxuY29uc3QgY3JlYXRlQ29udGFjdCA9ICgpID0+IHtcbiAgY29uc3Qgc3RyZWV0ID0gXCIxOTAyLzIsXCI7XG4gIGNvbnN0IG5hbWUgPSBcIkJydW1idXJnIHN0cmVldCxcIjtcbiAgY29uc3QgYWRkcmVzcyA9IFwiQmVoaW5kIHRoZSBhbmNpZW50IHBvbmQsIE1vcmRvci5cIjtcblxuICByZXR1cm4gbWFrZUNvbnRhY3Qoc3RyZWV0LCBuYW1lLCBhZGRyZXNzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdDtcbiIsImltcG9ydCBhYm91dCBmcm9tIFwiLi9hYm91dFwiO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbWVudVwiO1xuXG5jb25zdCBhYm91dFJlc3RhdXJhbnQgPSBhYm91dCgpO1xuXG5jb25zdCBtYWluID0gKCkgPT4geyBcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKVxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChhYm91dFJlc3RhdXJhbnQpO1xuICBcbiAgY29uc3QgY29udGFjdCA9IGNyZWF0ZUNvbnRhY3QoKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gIFxuICBjb25zdCBtZW51Q29udGVudCA9IG1lbnUoKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQpO1xuICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgbWFpbkNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluXCIpO1xuXG4gIHJldHVybiBtYWluQ29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1haW47XG4iLCJpbXBvcnQgd2hpdGVUcnVmZmxlIGZyb20gXCIuLi9hc3NldHMvd2hpdGUtdHJ1ZmZsZS5qcGdcIjtcbmltcG9ydCBsZW1vblNhdWNlIGZyb20gXCIuLi9hc3NldHMvbGVtb24tc2F1Y2Uud2VicFwiO1xuaW1wb3J0IGNhanVuU2VhZm9vZCBmcm9tIFwiLi4vYXNzZXRzL3NlYWZvb2Qtc2F1Y2UuanBlZ1wiO1xuaW1wb3J0IHBvcmsgZnJvbSBcIi4uL2Fzc2V0cy9wb3JrLmpwZWdcIjtcbmltcG9ydCBwZWNhbkNoaWNrZW4gZnJvbSBcIi4uL2Fzc2V0cy9wZWNhbi1jaGlja2VuLmpwZWdcIjtcbmltcG9ydCBjcmFiTG9ic3RlciBmcm9tIFwiLi4vYXNzZXRzL2NyYWIuanBlZ1wiO1xuaW1wb3J0IGdub2NjaGkgZnJvbSBcIi4uL2Fzc2V0cy9nbm9jY2hpLmpwZWdcIjtcbmltcG9ydCByb2FzdGVkTGFtYiBmcm9tIFwiLi4vYXNzZXRzL3JvYXN0ZWQtbGFtYi5qcGVnXCI7XG5cbmNvbnN0IGltYWdlcyA9IFt3aGl0ZVRydWZmbGUsIGxlbW9uU2F1Y2UsIGNhanVuU2VhZm9vZCwgcG9yaywgcGVjYW5DaGlja2VuLCBjcmFiTG9ic3RlciwgZ25vY2NoaSwgcm9hc3RlZExhbWJdO1xuXG5jb25zdCBmb29kID0gKG5hbWUsIGZvb2REZXMsIHByaWNlLCBpbWFnZSwgYWx0RGVzLCBpKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGgyLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBjb25zdCBwUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgcERlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBcbiAgcERlcy50ZXh0Q29udGVudCA9IGZvb2REZXM7XG4gIHBQcmljZS50ZXh0Q29udGVudCA9IFwiUHJpY2U6IFwiICsgcHJpY2U7XG5cbiAgY29uc3QgaW1hZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbWFnZURpdi5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VEaXZcIik7XG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICBpbWcuc3JjID0gaW1hZ2VzW2ldO1xuICBpbWcuYWx0ID0gYWx0RGVzO1xuICBpbWFnZURpdi5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIFtoMiwgcERlcywgcFByaWNlLCBpbWFnZURpdl0uZm9yRWFjaChpdGVtID0+IGRpdi5hcHBlbmRDaGlsZChpdGVtKSk7XG4gIFxuICBkaXYuY2xhc3NMaXN0LmFkZChcImZsZXhcIik7XG4gIHJldHVybiBkaXY7XG59O1xuXG5cbmNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XG4gIFxuICBjb25zdCBmb29kSXRlbXMgPSB7XG4gICAgMToge1xuICAgICAgbmFtZTogXCJXaGl0ZSBUcnVmZmxlcyBFZ2dcIixcbiAgICAgIGRlc2M6IFwiU2VydmVkIHdpdGggc2NyYW1ibGVkIGVnZ3MsIHRoaXMgZXh1aXNpdGUgZm9vZCB3aWxsIHNvb3RoIHlvdXIgbGl2ZXIgYW5kIHlvdXIgYnJhaW4uXCIsXG4gICAgICBwcmljZTogXCIkMjAwXCIsXG4gICAgICBpbWc6IFwiLi4vYXNzZXRzL3doaXRlLXRydWZmbGUuanBnXCIsXG4gICAgICBhbHQ6IFwiXCIsXG4gICAgfSxcbiAgICAyOiB7XG4gICAgICBuYW1lOiBcIkxlbW9uIFNhdWNlIFB1bGxhcGFcIixcbiAgICAgIGRlc2M6IFwiQSBkaXNoIG1hZGUgd2l0aCBsZW1vbiBzYXVjZS4gSXQgd2lsbCBzZW5kIGJ1enplcyBpbnNpZGUgeW91ciB0b25ndWUuXCIsXG4gICAgICBwcmljZTogXCIkMzAwXCIsXG4gICAgICBpbWc6IFwiLi4vYXNzZXRzL2xlbW9uLXNhdWNlLndlYnBcIixcbiAgICAgIGFsdDogXCJcIixcbiAgICB9LFxuICAgIDM6IHtcbiAgICAgIG5hbWU6IFwiQ2FqdW4gU2VhZm9vZCBQYXN0YVwiLFxuICAgICAgZGVzYzogXCJBIGhvdCBhbmQgZGVsaWNpb3MgcmVjaXBlLiBJdCB3aWxsIHNsaWRlIGRvd24geW91ciB0aHJvYXQgYW5kIHlvdXIgc3RvbWFjaCB3aWxsIGNyYXZlIHRvIHRhc3RlIGl0LlwiLFxuICAgICAgcHJpY2U6IFwiJDM0MFwiLFxuICAgICAgaW1nOiBcIi4uL2Fzc2V0cy9zZWFmb29kLXNhdWNlLmpwZWdcIixcbiAgICAgIGFsdDogXCJDYWp1biBTZWFmb29kIFBhc3RhXCIsXG4gICAgfSxcbiAgICA0OiB7XG4gICAgICBuYW1lOiBcIlBvcmsgQ2hvcHMgd2l0aCBSYXNwYmVycnkgU2F1Y2VcIixcbiAgICAgIGRlc2M6IFwiUG9yayByYWlzZWQgb24gb3BlbiBmYXJtcywgd2hvIHdhbmRlcmVkIHRoZSBtb3VudGFpbnMgYW5kIGJhdGhlZCBpbiByaXZlcnMsIGlzIHJlYWR5IHRvIGJlIGVhdGVuIGJ5IFlPVS5cIixcbiAgICAgIHByaWNlOiBcIiQzOTBcIixcbiAgICAgIGltZzogXCIuLi9hc3NldHMvcG9yay5qcGVnXCIsXG4gICAgICBhbHQ6IFwiUG9yayBDaG9wcyB3aXRoIFJhc3BiZXJyeSBTYXVjZVwiLFxuICAgIH0sXG4gICAgNToge1xuICAgICAgbmFtZTogXCJCb3VyYmFuIFBlY2FuIENoaWNrZW5cIixcbiAgICAgIGRlc2M6IFwiQ2hpY2tlbiBjb29rZWQgYnkgdGhlIG1hc3RlciBjaGVmLCB3aG8gY29va2VkIGZvciB0aGUgZ29kcy5cIixcbiAgICAgIHByaWNlOiBcIiQ0NDBcIixcbiAgICAgIGltZzogXCIuLi9hc3NldHMvcGVjYW4tY2hpY2tlbi5qcGVnXCIsXG4gICAgICBhbHQ6IFwiXCIsXG4gICAgfSxcbiAgICA2OiB7XG4gICAgICBuYW1lOiBcIkNyYWItU3R1ZmZlZCBMb2JzdGVyIFRhaWxcIixcbiAgICAgIGRlc2M6IFwiVHdvIGZyaWVuZHMsIGEgY3JhYiBhbmQgYSBsb2JzdGVyIGhhdmUgdHJhdmVsbGVkIHRoZSBvY2VhbiB0byBzYXRpc2Z5IHlvdXIgaHVuZ2VyLlwiLFxuICAgICAgcHJpY2U6IFwiJDUwMFwiLFxuICAgICAgaW1nOiBcIi4uL2Fzc2V0cy9jcmFiLmpwZWdcIixcbiAgICAgIGFsdDogXCJcIixcbiAgICB9LFxuICAgIDc6IHtcbiAgICAgIG5hbWU6IFwiR25vY2NoaSB3aXRoIFNhZ2UtQnV0dGVyXCIsXG4gICAgICBkZXNjOiBcIk1lbHRlZCBidXR0ZXIgb24gZ25vY2NoaSB3aWxsIGZ1bGZpbCBhbGwgeW91ciBkZXNpcmVzIGZvciB0aGUgZm9vZC5cIixcbiAgICAgIHByaWNlOiBcIiQ1NDBcIixcbiAgICAgIGltZzogXCIuLi9hc3NldHMvZ25vY2NoaS5qcGVnXCIsXG4gICAgICBhbHQ6IFwiXCIsXG4gICAgfSxcbiAgICA4OiB7XG4gICAgICBuYW1lOiBcIlJvYXN0ZWQgUmFjayBvZiBMYW1iXCIsXG4gICAgICBkZXNjOiBcIkxhbWIgcmFpc2VkIHdpdGggdGhlIHV0bW9zdCBjYXJlLiBGZWQgdGhlIGdyZWVuZXN0IGdyYXNzLiBSb2FtZWQgdGhlIGdyZWVuZXN0IHBhc3R1cmVzIHVuZGVyIHRoZSBibHVlIHNreS4gSGUgaXMgcmVhZHkgZm9yIHlvdS5cIixcbiAgICAgIHByaWNlOiBcIiQ2MDBcIiwgXG4gICAgICBpbWc6IFwiLi4vYXNzZXRzL3JvYXN0ZWQtbGFtYi5qcGVnXCIsXG4gICAgICBhbHQ6IFwiXCIsXG4gICAgfVxuICB9O1xuICBcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBmb29kVmFsdWUgPSBPYmplY3QudmFsdWVzKGZvb2RJdGVtcyk7XG4gIFxuICBsZXQgaSA9IDA7XG4gIGZvciAobGV0IGl0ZW0gb2YgZm9vZFZhbHVlKSB7XG4gICAgY29uc3QgZm9vZEl0ZW0gPSBmb29kKGl0ZW0ubmFtZSwgaXRlbS5kZXNjLCBpdGVtLnByaWNlLCBpdGVtLmltZywgaXRlbS5hbHQsIGkpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGZvb2RJdGVtKTtcbiAgICBpICs9IDE7XG4gIH07XG5cbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGhlYWRlciBmcm9tIFwiLi9oZWFkZXIvaGVhZGVyXCI7XG5pbXBvcnQgbWFpbiBmcm9tIFwiLi9tYWluL21haW5cIjtcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vZm9vdGVyL2Zvb3RlclwiXG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5cbmZ1bmN0aW9uIHNob3coZSkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICBjb25zdCBtZW51SXRlbSA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgXG4gIFtcImFib3V0XCIsIFwiY29udGFjdFwiLCBcIm1lbnVcIl0uZm9yRWFjaCgoaWQpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKSk7XG5cbiAgaWYgKG1lbnVJdGVtID09PSBcIkhvbWVcIikgbWFpbi5jaGlsZHJlblswXS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcblxuICBpZiAobWVudUl0ZW0gPT09IFwiQ29udGFjdFwiKSBtYWluLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuXG4gIGlmIChtZW51SXRlbSA9PT0gXCJNZW51XCIpIG1haW4uY2hpbGRyZW5bMl0uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7IFxufTtcblxuXG5jb25zdCBtYWtlSGVhZGVyID0gKHdyYXBwZXIpID0+IHtcbiAgY29uc3QgcGFnZUhlYWRlciA9IGhlYWRlcigpO1xuICBcbiAgcGFnZUhlYWRlci5jaGlsZHJlblsyXS5jaGlsZHJlblswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvdyk7XG4gIHBhZ2VIZWFkZXIuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3cpO1xuICBwYWdlSGVhZGVyLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzJdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93KTtcblxuICB3cmFwcGVyLmFwcGVuZENoaWxkKHBhZ2VIZWFkZXIpO1xufTtcblxuXG5jb25zdCBtYWtlTWFpbiA9IChib2R5KSA9PiB7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gbWFpbigpO1xuICBib2R5LmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcbn1cblxuXG5jb25zdCBtYWtlRm9vdGVyID0gKGJvZHkpID0+IHtcbiAgY29uc3QgZm9vdGVyQ29udGVudCA9IGZvb3RlcigpO1xuICBib2R5LmFwcGVuZENoaWxkKGZvb3RlckNvbnRlbnQpO1xufVxuXG4oKCkgPT4ge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyXCIpO1xuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuICBtYWtlSGVhZGVyKHdyYXBwZXIpO1xuICBtYWtlTWFpbih3cmFwcGVyKTtcbiAgbWFrZUZvb3Rlcih3cmFwcGVyKTsgXG4gIGJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9