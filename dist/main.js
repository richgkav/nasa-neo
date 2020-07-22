/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#log {\\n\\tfont-family: monospace;\\n\\tfont-size: 1.1em;\\n}\\n\\n#title {\\n\\tfont-family: Arial, Helvetica, sans-serif;\\n\\tfont-size: 1.5em;\\n\\ttext-align: center;\\n}\\n\\n.asteroid {\\n\\tfont-family: Arial, Helvetica, sans-serif;\\n\\tfont-size: 0.9em;\\n\\tdisplay: grid;\\n\\tgrid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\\n}\\n\\n.asteroid-databox {\\n\\tmargin: 5px;\\n\\ttext-align: center;\\n}\\n\\n.asteroid-title {\\n\\tfont-weight: bold;\\n\\tpadding: 4px;\\n}\\n\\n.asteroid-data {\\n\\tfont-size: 0.9em;\\n\\tpadding: 4px;\\n\\n}\\n\\n.cell-colour {\\n\\tbackground-color: rgb(233, 255, 254);\\n}\\n\\n.cell-highlight {\\n\\tbackground-color: rgb(255, 198, 198);\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! exports provided: Asteroid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Asteroid\", function() { return Asteroid; });\n\t// use kilometers\n\t// diameter = {estimatedMin, estimatedMax}\n\t// closeApproach = {dateTime, missDistance, relVelocity (kps)}\n\nfunction Asteroid(\n\t\tname, \n\t\tdiameter, \n\t\tpotentialHazard, \n\t\turlNasa, \n\t\tcloseApproachDateFull,\n\t\tcloseApproachDistance,\n\t\tcloseApproachVelocity\n\t) {\n\tthis.name = name;\n\tthis.diameter = diameter;\n\tthis.potentialHazard = potentialHazard;\n\tthis.urlNasa = urlNasa;\n\tthis.closeApproachDateFull = closeApproachDateFull;\n\tthis.date = new Date(closeApproachDateFull);\n\tthis.closeApproachDistance = closeApproachDistance;\n\tthis.closeApproachVelocity = closeApproachVelocity;\n}\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _asteroid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n// eueuMFXBvagQGzpTAwu5yZr4OHH2TK5q6RECbwu0\n// https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY\n\n// https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY\n\n\n\n\nconst main = function _main() {\n\n\t//log('Running OK');\n\t//log({test1: 'test', test2: 'test2', test3: 'test3'});\n\t//log(createQuery('2020-07-01','2020-07-07'))\n\t\n\tconst dateFrom = '2020-07-13';\n\tconst dateTo = '2020-07-19';\n\n\tdocument.getElementById('title').innerText = `Close Approaches ${dateFrom} to ${dateTo}`;\n\t\n\tconst fetchQuery = createQuery(dateFrom, dateTo);\n\t\n\tfetch(fetchQuery, {\n\t\tmode: 'cors'\n\t})\n\t.then(function(response) {\n\t\treturn response.json();\n\t})\n\t.then(function(response) {\n\t\t\n\t\t//log(response.element_count.toString() + ' asteroids');\n\t\t\n\t\tconst responseObject = response.near_earth_objects;\n\t\tlog(responseObject);\n\t\tconst asteroidsArray = fillAsteroidsArray(responseObject);\n\t\t//sortArray(asteroidsArray, 'date');\n\t\tsortArray(asteroidsArray, 'diameter');\n\t\trenderData(asteroidsArray);\n\t});\n\t\n\tfunction createQuery(start, end) {\n\t\tconst url = 'https://api.nasa.gov/neo/rest/v1/feed?';\n\t\tconst key = 'eueuMFXBvagQGzpTAwu5yZr4OHH2TK5q6RECbwu0';\n\t\treturn url+'start_date='+start+'&end_date='+end+'&api_key='+key;\n\t}\n\t\n\tfunction fillAsteroidsArray(responseObject) {\n\t\t\n\t\tconst asteroids = [];\n\n\t\tfor (const date in responseObject) {\n\n\t\t\tconst dateData = responseObject[date];\n\n\t\t\tfor (const astData in dateData) {\n\n\t\t\t\tconst astDataObj = dateData[astData];\n\t\t\t\tconst asteroid = new _asteroid__WEBPACK_IMPORTED_MODULE_1__[\"Asteroid\"](\n\t\t\t\t\tastDataObj.name,\n\t\t\t\t\tavg(astDataObj.estimated_diameter.meters),\n\t\t\t\t\tastDataObj.is_potentially_hazardous_asteroid,\n\t\t\t\t\tastDataObj.nasa_jpl_url,\n\t\t\t\t\tastDataObj.close_approach_data[0].close_approach_date_full,\n\t\t\t\t\ttwoDecPlaces(astDataObj.close_approach_data[0].miss_distance.kilometers),\n\t\t\t\t\ttwoDecPlaces(astDataObj.close_approach_data[0].relative_velocity.kilometers_per_second)\n\t\t\t\t);\n\t\t\t\tasteroids.push(asteroid);\n\t\t\t\t\n\t\t\t}\n\t\t}\n\t\treturn asteroids;\n\t}\n\t\n\tfunction sortArray(array, property) {\n\t\t\n\t\tarray.sort(function(a,b) {\n\t\t\t//return a.date - b.date;\n\t\t\treturn a[property] - b[property];\n\t\t});\n\n\t}\n\n\tfunction renderData(asteroids) {\n\n\t\tconst content = getContent();\n\n\t\tasteroids.forEach(asteroid => {\n\n\t\t\tconst asteroidDiv = newDiv('asteroid');\n\t\t\tcontent.appendChild(asteroidDiv);\n\n\t\t\tasteroidDiv.appendChild(renderAsteroidDataBox('Name', asteroid.name));\n\t\t\tasteroidDiv.appendChild(renderAsteroidDataBox('Diameter (meters)', asteroid.diameter));\n\t\t\tasteroidDiv.appendChild(renderAsteroidDataBox('Hazard?', asteroid.potentialHazard));\n\t\t\tasteroidDiv.appendChild(renderAsteroidLink('URL', asteroid.urlNasa));\n\t\t\tasteroidDiv.appendChild(renderAsteroidDataBox('Date', asteroid.closeApproachDateFull));\n\t\t\tasteroidDiv.appendChild(renderAsteroidDataBox('Distance (km)', asteroid.closeApproachDistance));\n\t\t\tasteroidDiv.appendChild(renderAsteroidDataBox('Velocity (m/s)', asteroid.closeApproachVelocity));\n\n\t\t});\n\t}\n\t\n\t// ---------------------------------------------------------------------------//\n\t\n\tfunction renderAsteroidDataBox(title, asteroidData) {\n\t\tconst divs = renderDivs(title, asteroidData);\n\t\tdivs.asteroidDataDiv.innerText = asteroidData;\n\n\t\tif (title === \"Hazard?\" && asteroidData === true) {\n\t\t\tdivs.asteroidDataBox.classList.add('cell-highlight');\n\t\t}\n\t\tif (title === \"Distance (km)\" && asteroidData < 384400) {\n\t\t\tdivs.asteroidDataBox.classList.add('cell-highlight');\n\t\t}\n\t\tif (title === \"Diameter (meters)\" && asteroidData > 1000) {\n\t\t\tdivs.asteroidDataBox.classList.add('cell-highlight');\n\t\t}\n\t\tif (title === \"Velocity (m/s)\" && asteroidData > 25) {\n\t\t\tdivs.asteroidDataBox.classList.add('cell-highlight');\n\t\t}\n\n\t\treturn divs.asteroidDataBox;\n\t}\n\t\n\tfunction renderAsteroidLink(title, asteroidData) {\n\t\tconst divs = renderDivs(title, asteroidData);\n\t\tdivs.asteroidDataDiv.innerHTML = addLink(asteroidData, 'nasa url');\n\t\treturn divs.asteroidDataBox;\n\t}\n\t\n\tfunction renderDivs(title, asteroidData) {\n\t\tconst asteroidDataBox = newDiv('asteroid-databox')\n\t\tasteroidDataBox.classList.add('cell-colour');\n\t\tconst asteroidTitleDiv = newDiv('asteroid-title');\n\t\tasteroidTitleDiv.innerText = title;\n\t\tconst asteroidDataDiv = newDiv('asteroid-data');\n\t\tasteroidDataBox.appendChild(asteroidTitleDiv);\n\t\tasteroidDataBox.appendChild(asteroidDataDiv);\n\t\treturn {asteroidDataBox, asteroidTitleDiv, asteroidDataDiv};\n\t}\n// ---------------------------------------------------------------------------//\n\t\n\t// log('average test = ' + avg({ '1':10, '2':20, '3':30 }));\n\n\tfunction avg(object) {\n\n\t\tlet total = 0;\n\t\tlet count = 0;\n\n\t\tfor (const value in object) {\n\t\t\ttotal += object[value];\n\t\t\tcount ++;\n\t\t}\n\t\treturn twoDecPlaces(total/count);\n\t\t//return total / count;\n\t}\n\t\n\tfunction twoDecPlaces(value) {\n\t\treturn (Math.round((value)* 100)/100).toFixed(2);\n\t}\n\n\tfunction newDiv(className) {\n\t\tconst newDiv = document.createElement('div');\n\t\tnewDiv.classList.add(className);\n\t\treturn newDiv;\n\t}\n\n\tfunction addLink(url, title) {\n\t\treturn `<a href=\"${url}\" target=\"_blank\">${title}</a>`;\n\t}\n\t\n\tfunction newLine() {\n\t\treturn `<br>`;\n\t}\n\n\tfunction getContent() {\n\t\treturn getElement('content');\n\t}\n\n\tfunction getLog() {\n\t\treturn getElement('log');\n\t}\n\t\n\tfunction getElement(id) {\n\t\treturn document.getElementById(id);\n\t}\n\t\n\tfunction log(obj) {\n\t\tif (typeof obj === 'string')\n\t\t\tgetLog().innerText += obj + '\\n';\n\t\telse\n\t\t\tconsole.log(obj);\n\t}\n\n}\n\nwindow.onload = main;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });