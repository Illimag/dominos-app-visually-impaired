(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- app-root -->\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\">\n    <div class=\"menu\">\n        <div class=\"home_div\" [routerLink]=\"'/order-details'\">\n        <img src=\"../assets/images/home_icon-01.png\" class=\"home\">\n        </div>\n    </div>\n    <h3 class=\"top-text\">Pizza</h3>\n    <h3 class=\"top-text-secondary\">Small</h3>\n\n    <h3 class=\"secondary-text\">Hand Tossed</h3>\n    <h3 class=\"secondary-text-one\">Cheese, Robust</h3>\n    <h3 class=\"secondary-text-two\">Inspired</h3>\n    <h3 class=\"secondary-text-three\">Tomato Sauce</h3>\n    <h3 class=\"secondary-text-four\">Quantity: (ONE)</h3>\n\n    <h3 class=\"secondary-text-five\">Food & Beverage:</h3>\n    <h3 class=\"secondary-text-six\">$9.99</h3>\n\n    <h3 class=\"secondary-text-seven\">Taxes:</h3>\n    <h3 class=\"secondary-text-eight\">$0.92</h3>\n\n    <h3 class=\"secondary-text-nine\">Total: $10.91</h3>\n\n    <div class=\"button1\">\n        <h3 class=\"button1-text\">Checkout</h3>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/delivery/delivery.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/delivery/delivery.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\">\n        <div class=\"menu\">\n            <div class=\"home_div\" [routerLink]=\"'/order-screen'\">\n            <img src=\"../assets/images/home_icon-01.png\" class=\"home\">\n            </div>\n            <h3 class=\"text-box\">Delivery</h3>\n            <h3 class=\"text-box1\">Address</h3>\n        </div>\n    \n        <div class=\"button1\" [routerLink]=\"'/order-menu'\">\n            <h3 class=\"button1-text\">Jim</h3>\n            <h3 class=\"button1-text\">(111 Alphabet St)</h3>\n        </div>\n        <div class=\"button2\">\n            <h3 class=\"button2-text\">Use Other Address</h3>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\">\n    <div class=\"menu\">\n        <img src=\"../assets/images/dominos_logo-01.png\" class=\"logo\">\n    </div>\n\n    <div class=\"button1\" [routerLink]=\"'/order-screen'\">\n        <h3 class=\"button1-text\">Create a New Order</h3>\n    </div>\n    <div class=\"button2\" [routerLink]=\"'/your-orders'\">\n        <h3 class=\"button2-text\">Your Orders</h3>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-crusts/order-crusts.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-crusts/order-crusts.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\">\n        <div class=\"menu\">\n            <div class=\"home_div\" [routerLink]=\"'/order-menu'\">\n            <img src=\"../assets/images/home_icon-01.png\" class=\"home\">\n            </div>\n            <h3 class=\"text-box\">Crusts</h3>\n        </div>\n    \n        <div class=\"button1\" [routerLink]=\"'/order-sizes'\">\n            <h3 class=\"button1-text\">Hand Tossed</h3>\n        </div>\n        <div class=\"button2\">\n            <h3 class=\"button2-text\">Handmade Pan</h3>\n        </div>\n        <div class=\"button3\">\n            <h3 class=\"button3-text\">Crunchy Thin Crust</h3>\n        </div>\n        <div class=\"button4\">\n            <h3 class=\"button4-text\">See More</h3>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-details/order-details.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-details/order-details.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\">\n        <div class=\"menu\">\n            <div class=\"home_div\" [routerLink]=\"'/order-sizes'\">\n            <img src=\"../assets/images/home_icon-01.png\" class=\"home\">\n            </div>\n            <h3 class=\"text-box\">Details</h3>\n        </div>\n    \n        <div class=\"button1\" [routerLink]=\"'/checkout'\">\n            <h3 class=\"button1-text\">Set Quantity</h3>\n        </div>\n        <div class=\"button2\">\n            <h3 class=\"button2-text\">See More</h3>\n        </div>\n        <div class=\"button3\">\n            <h3 class=\"button3-text\">Add to Order</h3>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-menu/order-menu.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-menu/order-menu.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\">\n        <div class=\"menu\">\n            <div class=\"home_div\" [routerLink]=\"'/delivery'\">\n            <img src=\"../assets/images/home_icon-01.png\" class=\"home\">\n            </div>\n            <h3 class=\"text-box\">Menu</h3>\n        </div>\n    \n        <div class=\"button1\" [routerLink]=\"'/order-crusts'\">\n            <h3 class=\"button1-text\">Build Your Own Pizza</h3>\n        </div>\n        <div class=\"button2\">\n            <h3 class=\"button2-text\">See More</h3>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-screen/order-screen.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-screen/order-screen.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\">\n        <div class=\"menu\">\n            <div class=\"home_div\" [routerLink]=\"'/home'\">\n                <img src=\"../assets/images/home_icon-01.png\" class=\"home\">\n            </div>\n            <img src=\"../assets/images/dominos_logo-01.png\" class=\"logo\">\n        </div>\n    \n        <div class=\"button1\" [routerLink]=\"'/delivery'\">\n            <h3 class=\"button1-text\">Delivery</h3>\n        </div>\n        <div class=\"button2\">\n            <h3 class=\"button2-text\">Carryout</h3>\n        </div>\n        <div class=\"button3\">\n                <h3 class=\"button2-text\">Domino's Hotspot</h3>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-sizes/order-sizes.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-sizes/order-sizes.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\">\n        <div class=\"menu\">\n            <div class=\"home_div\" [routerLink]=\"'/order-crusts'\">\n            <img src=\"../assets/images/home_icon-01.png\" class=\"home\">\n            </div>\n            <h3 class=\"text-box\">Sizes</h3>\n        </div>\n    \n        <div class=\"button1\" [routerLink]=\"'/order-details'\">\n            <h3 class=\"button1-text\">Small (10 Inch)</h3>\n        </div>\n        <div class=\"button2\">\n            <h3 class=\"button2-text\">Medium (12 Inch)</h3>\n        </div>\n        <div class=\"button3\">\n            <h3 class=\"button3-text\">Large (14 Inch)</h3>\n        </div>\n        <div class=\"button4\">\n            <h3 class=\"button4-text\">See More</h3>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/your-orders/your-orders.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/your-orders/your-orders.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>your-orders works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delivery/delivery.component */ "./src/app/delivery/delivery.component.ts");
/* harmony import */ var _order_screen_order_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-screen/order-screen.component */ "./src/app/order-screen/order-screen.component.ts");
/* harmony import */ var _order_menu_order_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-menu/order-menu.component */ "./src/app/order-menu/order-menu.component.ts");
/* harmony import */ var _order_crusts_order_crusts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-crusts/order-crusts.component */ "./src/app/order-crusts/order-crusts.component.ts");
/* harmony import */ var _order_sizes_order_sizes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order-sizes/order-sizes.component */ "./src/app/order-sizes/order-sizes.component.ts");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-details/order-details.component */ "./src/app/order-details/order-details.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _your_orders_your_orders_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./your-orders/your-orders.component */ "./src/app/your-orders/your-orders.component.ts");












const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'delivery',
        component: _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_4__["DeliveryComponent"]
    },
    {
        path: 'order-screen',
        component: _order_screen_order_screen_component__WEBPACK_IMPORTED_MODULE_5__["OrderScreenComponent"]
    },
    {
        path: 'order-menu',
        component: _order_menu_order_menu_component__WEBPACK_IMPORTED_MODULE_6__["OrderMenuComponent"]
    },
    {
        path: 'order-crusts',
        component: _order_crusts_order_crusts_component__WEBPACK_IMPORTED_MODULE_7__["OrderCrustsComponent"]
    },
    {
        path: 'order-sizes',
        component: _order_sizes_order_sizes_component__WEBPACK_IMPORTED_MODULE_8__["OrderSizesComponent"]
    },
    {
        path: 'order-details',
        component: _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_9__["OrderDetailsComponent"]
    },
    {
        path: 'checkout',
        component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__["CheckoutComponent"]
    },
    {
        path: 'your-orders',
        component: _your_orders_your_orders_component__WEBPACK_IMPORTED_MODULE_11__["YourOrdersComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'prototype';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delivery/delivery.component */ "./src/app/delivery/delivery.component.ts");
/* harmony import */ var _order_screen_order_screen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-screen/order-screen.component */ "./src/app/order-screen/order-screen.component.ts");
/* harmony import */ var _order_menu_order_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order-menu/order-menu.component */ "./src/app/order-menu/order-menu.component.ts");
/* harmony import */ var _order_crusts_order_crusts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-crusts/order-crusts.component */ "./src/app/order-crusts/order-crusts.component.ts");
/* harmony import */ var _order_sizes_order_sizes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order-sizes/order-sizes.component */ "./src/app/order-sizes/order-sizes.component.ts");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order-details/order-details.component */ "./src/app/order-details/order-details.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _your_orders_your_orders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./your-orders/your-orders.component */ "./src/app/your-orders/your-orders.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_6__["DeliveryComponent"],
            _order_screen_order_screen_component__WEBPACK_IMPORTED_MODULE_7__["OrderScreenComponent"],
            _order_menu_order_menu_component__WEBPACK_IMPORTED_MODULE_8__["OrderMenuComponent"],
            _order_crusts_order_crusts_component__WEBPACK_IMPORTED_MODULE_9__["OrderCrustsComponent"],
            _order_sizes_order_sizes_component__WEBPACK_IMPORTED_MODULE_10__["OrderSizesComponent"],
            _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_11__["OrderDetailsComponent"],
            _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__["CheckoutComponent"],
            _your_orders_your_orders_component__WEBPACK_IMPORTED_MODULE_13__["YourOrdersComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #0078ad;\r\n}\r\n\r\n.menu{\r\n    width: 100%;\r\n    height: 150px;\r\n    background-color: #0078ad;\r\n}\r\n\r\n.home_div{\r\n    height: 100%;\r\n    width: 45%;\r\n    background-color: white;\r\n}\r\n\r\n.home{\r\n    position: absolute;\r\n    height: 100px;\r\n    width:100px;\r\n    left: 30px;\r\n    top: 20px;\r\n}\r\n\r\n.top-text{\r\n    margin: 0;\r\n    font-size: 2.5em;\r\n    position: absolute;\r\n    top: 150px;\r\n    right: 35%;\r\n    color: white;\r\n}\r\n\r\n.top-text-secondary{\r\n    margin: 0;\r\n    font-size: 2.5em;\r\n    position: absolute;\r\n    top: 190px;\r\n    right: 35%;\r\n    color: white;\r\n}\r\n\r\n.secondary-text{\r\n    margin: 0;\r\n    font-size: 1.5em;\r\n    position: absolute;\r\n    top: 240px;\r\n    right: 30%;\r\n    color: white;\r\n}\r\n\r\n.secondary-text-one{\r\n    margin: 0;\r\n    font-size: 1.5em;\r\n    position: absolute;\r\n    top: 270px;\r\n    right: 25%;\r\n    color: white;\r\n}\r\n\r\n.secondary-text-two{\r\n    margin: 0;\r\n    font-size: 1.5em;\r\n    position: absolute;\r\n    top: 300px;\r\n    right: 35%;\r\n    color: white;\r\n}\r\n\r\n.secondary-text-three{\r\n    margin: 0;\r\n    font-size: 1.5em;\r\n    position: absolute;\r\n    top: 330px;\r\n    right: 25%;\r\n    color: white;\r\n}\r\n\r\n.secondary-text-four{\r\n    margin: 0;\r\n    font-size: 1.5em;\r\n    position: absolute;\r\n    top: 360px;\r\n    right: 20%;\r\n    color: white;\r\n}\r\n\r\n.secondary-text-five{\r\n    margin: 0;\r\n    font-size: 1.5em;\r\n    position: absolute;\r\n    top: 400px;\r\n    right: 20%;\r\n    color: white;\r\n}\r\n\r\n.secondary-text-six{\r\n    margin: 0;\r\n    font-size: 1.5em;\r\n    position: absolute;\r\n    top: 450px;\r\n    right: 20%;\r\n    color: white;\r\n}\r\n\r\n.secondary-text-seven{\r\n    margin: 0;\r\n    font-size: 1.5em;\r\n    position: absolute;\r\n    top: 490px;\r\n    right: 20%;\r\n    color: white;\r\n}\r\n\r\n.secondary-text-eight{\r\n    margin: 0;\r\n    font-size: 1.5em;\r\n    position: absolute;\r\n    top: 520px;\r\n    right: 20%;\r\n    color: white;\r\n}\r\n\r\n.secondary-text-nine{\r\n    margin: 0;\r\n    font-size: 2.5em;\r\n    position: absolute;\r\n    top: 560px;\r\n    right: 15%;\r\n    color: white;\r\n}\r\n\r\n.button1{\r\n    height: 15%;\r\n    width: 90%;\r\n    background-color: #e31836;\r\n    display: inline-block;\r\n    margin: 520px 19px 19px 19px;\r\n}\r\n\r\n.button1-text{\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5ke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3OGFkO1xyXG59XHJcblxyXG4ubWVudXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc4YWQ7XHJcbn1cclxuXHJcbi5ob21lX2RpdntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhvbWV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gICAgdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udG9wLXRleHR7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNTBweDtcclxuICAgIHJpZ2h0OiAzNSU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50b3AtdGV4dC1zZWNvbmRhcnl7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxOTBweDtcclxuICAgIHJpZ2h0OiAzNSU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnktdGV4dHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI0MHB4O1xyXG4gICAgcmlnaHQ6IDMwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlY29uZGFyeS10ZXh0LW9uZXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI3MHB4O1xyXG4gICAgcmlnaHQ6IDI1JTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlY29uZGFyeS10ZXh0LXR3b3tcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwMHB4O1xyXG4gICAgcmlnaHQ6IDM1JTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlY29uZGFyeS10ZXh0LXRocmVle1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzMwcHg7XHJcbiAgICByaWdodDogMjUlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5LXRleHQtZm91cntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM2MHB4O1xyXG4gICAgcmlnaHQ6IDIwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlY29uZGFyeS10ZXh0LWZpdmV7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MDBweDtcclxuICAgIHJpZ2h0OiAyMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnktdGV4dC1zaXh7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0NTBweDtcclxuICAgIHJpZ2h0OiAyMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnktdGV4dC1zZXZlbntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQ5MHB4O1xyXG4gICAgcmlnaHQ6IDIwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlY29uZGFyeS10ZXh0LWVpZ2h0e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTIwcHg7XHJcbiAgICByaWdodDogMjAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5LXRleHQtbmluZXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU2MHB4O1xyXG4gICAgcmlnaHQ6IDE1JTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ1dHRvbjF7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTMxODM2O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiA1MjBweCAxOXB4IDE5cHggMTlweDtcclxufVxyXG5cclxuLmJ1dHRvbjEtdGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CheckoutComponent = class CheckoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")).default]
    })
], CheckoutComponent);



/***/ }),

/***/ "./src/app/delivery/delivery.component.css":
/*!*************************************************!*\
  !*** ./src/app/delivery/delivery.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: white;\r\n}\r\n\r\n.menu{\r\n    width: 100%;\r\n    height: 150px;\r\n    background-color: #0078ad;\r\n}\r\n\r\n.home_div{\r\n    height: 100%;\r\n    width: 45%;\r\n    background-color: white;\r\n}\r\n\r\n.home{\r\n    position: absolute;\r\n    height: 100px;\r\n    width:100px;\r\n    left: 30px;\r\n    top: 20px;\r\n}\r\n\r\n.text-box{\r\n    position: absolute;\r\n    right: 30px;\r\n    top:10px;\r\n    font-size: 2em;\r\n    color: white;\r\n}\r\n\r\n.text-box1{\r\n    position: absolute;\r\n    right: 30px;\r\n    top:40px;\r\n    font-size: 2em;\r\n    color: white;\r\n}\r\n\r\n.button1{\r\n    height: 37%;\r\n    width: 90%;\r\n    background-color: #e31836;\r\n    display: inline-block;\r\n    margin: 19px 19px 19px 19px;\r\n}\r\n\r\n.button2{\r\n    height: 23%;\r\n    width: 90%;\r\n    background-color: #e31836;\r\n    display: inline-block;\r\n    margin: 0px 19px 19px 19px;\r\n}\r\n\r\n.button1-text{\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 2em;\r\n}\r\n\r\n.button2-text{\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsaXZlcnkvZGVsaXZlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLDJCQUEyQjtBQUMvQjs7QUFHQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9kZWxpdmVyeS9kZWxpdmVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWVudXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc4YWQ7XHJcbn1cclxuXHJcbi5ob21lX2RpdntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhvbWV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gICAgdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udGV4dC1ib3h7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIHRvcDoxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50ZXh0LWJveDF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIHRvcDo0MHB4O1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idXR0b24xe1xyXG4gICAgaGVpZ2h0OiAzNyU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzMTgzNjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMTlweCAxOXB4IDE5cHggMTlweDtcclxufVxyXG5cclxuXHJcbi5idXR0b24ye1xyXG4gICAgaGVpZ2h0OiAyMyU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzMTgzNjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMHB4IDE5cHggMTlweCAxOXB4O1xyXG59XHJcblxyXG4uYnV0dG9uMS10ZXh0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi5idXR0b24yLXRleHR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/delivery/delivery.component.ts":
/*!************************************************!*\
  !*** ./src/app/delivery/delivery.component.ts ***!
  \************************************************/
/*! exports provided: DeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryComponent", function() { return DeliveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DeliveryComponent = class DeliveryComponent {
    constructor() { }
    ngOnInit() {
    }
};
DeliveryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delivery',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delivery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/delivery/delivery.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delivery.component.css */ "./src/app/delivery/delivery.component.css")).default]
    })
], DeliveryComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: white;\r\n}\r\n\r\n.menu{\r\n    width: 100%;\r\n    height: 150px;\r\n    background-color: #0078ad;\r\n}\r\n\r\n.logo{\r\n    position: absolute;\r\n    height: 100px;\r\n    width:100px;\r\n    right: 30px;\r\n    top: 20px;\r\n}\r\n\r\n.button1{\r\n    height: 37%;\r\n    width: 90%;\r\n    background-color: #e31836;\r\n    display: inline-block;\r\n    margin: 19px 19px 19px 19px;\r\n}\r\n\r\n.button2{\r\n    height: 37%;\r\n    width: 90%;\r\n    background-color: #e31836;\r\n    display: inline-block;\r\n    margin: 0px 19px 19px 19px;\r\n}\r\n\r\n.button1-text{\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 2em;\r\n}\r\n\r\n.button2-text{\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQiwyQkFBMkI7QUFDL0I7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tZW51e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzhhZDtcclxufVxyXG5cclxuLmxvZ297XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIHRvcDogMjBweDtcclxufVxyXG5cclxuLmJ1dHRvbjF7XHJcbiAgICBoZWlnaHQ6IDM3JTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTMxODM2O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAxOXB4IDE5cHggMTlweCAxOXB4O1xyXG59XHJcblxyXG5cclxuLmJ1dHRvbjJ7XHJcbiAgICBoZWlnaHQ6IDM3JTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTMxODM2O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwcHggMTlweCAxOXB4IDE5cHg7XHJcbn1cclxuXHJcbi5idXR0b24xLXRleHR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLmJ1dHRvbjItdGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/order-crusts/order-crusts.component.css":
/*!*********************************************************!*\
  !*** ./src/app/order-crusts/order-crusts.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: white;\r\n}\r\n\r\n.menu{\r\n    width: 100%;\r\n    height: 150px;\r\n    background-color: #0078ad;\r\n}\r\n\r\n.home_div{\r\n    height: 100%;\r\n    width: 45%;\r\n    background-color: white;\r\n}\r\n\r\n.home{\r\n    position: absolute;\r\n    height: 100px;\r\n    width:100px;\r\n    left: 30px;\r\n    top: 20px;\r\n}\r\n\r\n.text-box{\r\n    position: absolute;\r\n    right: 30px;\r\n    top:20px;\r\n    font-size: 2em;\r\n    color: white;\r\n}\r\n\r\n.text-box1{\r\n    position: absolute;\r\n    right: 30px;\r\n    top:40px;\r\n    font-size: 2em;\r\n    color: white;\r\n}\r\n\r\n.button1{\r\n    height: 15%;\r\n    width: 90%;\r\n    background-color: #e31836;\r\n    display: inline-block;\r\n    margin: 19px 19px 19px 19px;\r\n}\r\n\r\n.button2{\r\n    height: 15%;\r\n    width: 90%;\r\n    background-color: #e31836;\r\n    display: inline-block;\r\n    margin: 0px 19px 19px 19px;\r\n}\r\n\r\n.button3{\r\n    height: 15%;\r\n    width: 90%;\r\n    background-color: #e31836;\r\n    display: inline-block;\r\n    margin: 0px 19px 19px 19px;\r\n}\r\n\r\n.button4{\r\n    height: 15%;\r\n    width: 90%;\r\n    background-color: #e31836;\r\n    display: inline-block;\r\n    margin: 0px 19px 19px 19px;\r\n}\r\n\r\n.button1-text{\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 2em;\r\n}\r\n\r\n.button2-text{\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 2em;\r\n}\r\n\r\n.button3-text{\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 2em;\r\n}\r\n\r\n.button4-text{\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItY3J1c3RzL29yZGVyLWNydXN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsMkJBQTJCO0FBQy9COztBQUdBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsMEJBQTBCO0FBQzlCOztBQUdBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvb3JkZXItY3J1c3RzL29yZGVyLWNydXN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWVudXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc4YWQ7XHJcbn1cclxuXHJcbi5ob21lX2RpdntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhvbWV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gICAgdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udGV4dC1ib3h7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIHRvcDoyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50ZXh0LWJveDF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIHRvcDo0MHB4O1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idXR0b24xe1xyXG4gICAgaGVpZ2h0OiAxNSU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzMTgzNjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMTlweCAxOXB4IDE5cHggMTlweDtcclxufVxyXG5cclxuXHJcbi5idXR0b24ye1xyXG4gICAgaGVpZ2h0OiAxNSU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzMTgzNjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMHB4IDE5cHggMTlweCAxOXB4O1xyXG59XHJcblxyXG4uYnV0dG9uM3tcclxuICAgIGhlaWdodDogMTUlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMzE4MzY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDBweCAxOXB4IDE5cHggMTlweDtcclxufVxyXG5cclxuLmJ1dHRvbjR7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTMxODM2O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwcHggMTlweCAxOXB4IDE5cHg7XHJcbn1cclxuXHJcblxyXG4uYnV0dG9uMS10ZXh0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi5idXR0b24yLXRleHR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLmJ1dHRvbjMtdGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG4uYnV0dG9uNC10ZXh0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/order-crusts/order-crusts.component.ts":
/*!********************************************************!*\
  !*** ./src/app/order-crusts/order-crusts.component.ts ***!
  \********************************************************/
/*! exports provided: OrderCrustsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCrustsComponent", function() { return OrderCrustsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrderCrustsComponent = class OrderCrustsComponent {
    constructor() { }
    ngOnInit() {
    }
};
OrderCrustsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-crusts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-crusts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-crusts/order-crusts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-crusts.component.css */ "./src/app/order-crusts/order-crusts.component.css")).default]
    })
], OrderCrustsComponent);



/***/ }),

/***/ "./src/app/order-details/order-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/order-details/order-details.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: white;\r\n}\r\n\r\n.menu{\r\n    width: 100%;\r\n    height: 150px;\r\n    background-color: #0078ad;\r\n}\r\n\r\n.home_div{\r\n    height: 100%;\r\n    width: 45%;\r\n    background-color: white;\r\n}\r\n\r\n.home{\r\n    position: absolute;\r\n    height: 100px;\r\n    width:100px;\r\n    left: 30px;\r\n    top: 20px;\r\n}\r\n\r\n.text-box{\r\n    position: absolute;\r\n    right: 30px;\r\n    top:20px;\r\n    font-size: 2em;\r\n    color: white;\r\n}\r\n\r\n.text-box1{\r\n    position: absolute;\r\n    right: 30px;\r\n    top:40px;\r\n    font-size: 2em;\r\n    color: white;\r\n}\r\n\r\n.button1{\r\n    height: 15%;\r\n    width: 90%;\r\n    background-color: #e31836;\r\n    display: inline-block;\r\n    margin: 19px 19px 19px 19px;\r\n}\r\n\r\n.button2{\r\n    height: 15%;\r\n    width: 90%;\r\n    background-color: #e31836;\r\n    display: inline-block;\r\n    margin: 0px 19px 19px 19px;\r\n}\r\n\r\n.button3{\r\n    height: 23%;\r\n    width: 90%;\r\n    background-color: #e31836;\r\n    display: inline-block;\r\n    margin: 0px 19px 19px 19px;\r\n}\r\n\r\n.button1-text{\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 2em;\r\n}\r\n\r\n.button2-text{\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 2em;\r\n}\r\n\r\n.button3-text{\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 2em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQiwyQkFBMkI7QUFDL0I7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWVudXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc4YWQ7XHJcbn1cclxuXHJcbi5ob21lX2RpdntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhvbWV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gICAgdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udGV4dC1ib3h7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIHRvcDoyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50ZXh0LWJveDF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIHRvcDo0MHB4O1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idXR0b24xe1xyXG4gICAgaGVpZ2h0OiAxNSU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzMTgzNjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMTlweCAxOXB4IDE5cHggMTlweDtcclxufVxyXG5cclxuXHJcbi5idXR0b24ye1xyXG4gICAgaGVpZ2h0OiAxNSU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzMTgzNjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMHB4IDE5cHggMTlweCAxOXB4O1xyXG59XHJcblxyXG4uYnV0dG9uM3tcclxuICAgIGhlaWdodDogMjMlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMzE4MzY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDBweCAxOXB4IDE5cHggMTlweDtcclxufVxyXG5cclxuLmJ1dHRvbjEtdGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG4uYnV0dG9uMi10ZXh0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi5idXR0b24zLXRleHR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/order-details/order-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order-details/order-details.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrderDetailsComponent = class OrderDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
};
OrderDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-details/order-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-details.component.css */ "./src/app/order-details/order-details.component.css")).default]
    })
], OrderDetailsComponent);



/***/ }),

/***/ "./src/app/order-menu/order-menu.component.css":
/*!*****************************************************!*\
  !*** ./src/app/order-menu/order-menu.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: white;\r\n}\r\n\r\n.menu{\r\n    width: 100%;\r\n    height: 150px;\r\n    background-color: #0078ad;\r\n}\r\n\r\n.home_div{\r\n    height: 100%;\r\n    width: 45%;\r\n    background-color: white;\r\n}\r\n\r\n.home{\r\n    position: absolute;\r\n    height: 100px;\r\n    width:100px;\r\n    left: 30px;\r\n    top: 20px;\r\n}\r\n\r\n.text-box{\r\n    position: absolute;\r\n    right: 30px;\r\n    top:20px;\r\n    font-size: 2em;\r\n    color: white;\r\n}\r\n\r\n.text-box1{\r\n    position: absolute;\r\n    right: 30px;\r\n    top:40px;\r\n    font-size: 2em;\r\n    color: white;\r\n}\r\n\r\n.button1{\r\n    height: 37%;\r\n    width: 90%;\r\n    background-color: #e31836;\r\n    display: inline-block;\r\n    margin: 19px 19px 19px 19px;\r\n}\r\n\r\n.button2{\r\n    height: 23%;\r\n    width: 90%;\r\n    background-color: #e31836;\r\n    display: inline-block;\r\n    margin: 0px 19px 19px 19px;\r\n}\r\n\r\n.button1-text{\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 2em;\r\n}\r\n\r\n.button2-text{\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItbWVudS9vcmRlci1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQiwyQkFBMkI7QUFDL0I7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvb3JkZXItbWVudS9vcmRlci1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tZW51e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzhhZDtcclxufVxyXG5cclxuLmhvbWVfZGl2e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaG9tZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDoxMDBweDtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWJveHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgdG9wOjIwcHg7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRleHQtYm94MXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgdG9wOjQwcHg7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ1dHRvbjF7XHJcbiAgICBoZWlnaHQ6IDM3JTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTMxODM2O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAxOXB4IDE5cHggMTlweCAxOXB4O1xyXG59XHJcblxyXG5cclxuLmJ1dHRvbjJ7XHJcbiAgICBoZWlnaHQ6IDIzJTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTMxODM2O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwcHggMTlweCAxOXB4IDE5cHg7XHJcbn1cclxuXHJcbi5idXR0b24xLXRleHR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLmJ1dHRvbjItdGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/order-menu/order-menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/order-menu/order-menu.component.ts ***!
  \****************************************************/
/*! exports provided: OrderMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderMenuComponent", function() { return OrderMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrderMenuComponent = class OrderMenuComponent {
    constructor() { }
    ngOnInit() {
    }
};
OrderMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-menu/order-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-menu.component.css */ "./src/app/order-menu/order-menu.component.css")).default]
    })
], OrderMenuComponent);



/***/ }),

/***/ "./src/app/order-screen/order-screen.component.css":
/*!*********************************************************!*\
  !*** ./src/app/order-screen/order-screen.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: white;\r\n}\r\n\r\n.menu{\r\n    width: 100%;\r\n    height: 150px;\r\n    background-color: #0078ad;\r\n}\r\n\r\n.home_div{\r\n    height: 100%;\r\n    width: 45%;\r\n    background-color: white;\r\n}\r\n\r\n.home{\r\n    position: absolute;\r\n    height: 100px;\r\n    width:100px;\r\n    left: 30px;\r\n    top: 20px;\r\n}\r\n\r\n.logo{\r\n    position: absolute;\r\n    height: 100px;\r\n    width:100px;\r\n    right: 30px;\r\n    top: 20px;\r\n}\r\n\r\n.button1{\r\n    height: 23%;\r\n    width: 90%;\r\n    background-color: #e31836;\r\n    display: inline-block;\r\n    margin: 19px 19px 19px 19px;\r\n}\r\n\r\n.button2{\r\n    height: 23%;\r\n    width: 90%;\r\n    background-color: #e31836;\r\n    display: inline-block;\r\n    margin: 0px 19px 19px 19px;\r\n}\r\n\r\n.button3{\r\n    height: 23%;\r\n    width: 90%;\r\n    background-color: #e31836;\r\n    display: inline-block;\r\n    margin: 0px 19px 19px 19px;\r\n}\r\n\r\n.button1-text{\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 2em;\r\n}\r\n\r\n.button2-text{\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 2em;\r\n}\r\n\r\n.button3-text{\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItc2NyZWVuL29yZGVyLXNjcmVlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsMkJBQTJCO0FBQy9COztBQUdBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9vcmRlci1zY3JlZW4vb3JkZXItc2NyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tZW51e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzhhZDtcclxufVxyXG5cclxuLmhvbWVfZGl2e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaG9tZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDoxMDBweDtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4ubG9nb3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDoxMDBweDtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uMXtcclxuICAgIGhlaWdodDogMjMlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMzE4MzY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDE5cHggMTlweCAxOXB4IDE5cHg7XHJcbn1cclxuXHJcblxyXG4uYnV0dG9uMntcclxuICAgIGhlaWdodDogMjMlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMzE4MzY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDBweCAxOXB4IDE5cHggMTlweDtcclxufVxyXG5cclxuLmJ1dHRvbjN7XHJcbiAgICBoZWlnaHQ6IDIzJTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTMxODM2O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwcHggMTlweCAxOXB4IDE5cHg7XHJcbn1cclxuXHJcbi5idXR0b24xLXRleHR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLmJ1dHRvbjItdGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG4uYnV0dG9uMy10ZXh0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/order-screen/order-screen.component.ts":
/*!********************************************************!*\
  !*** ./src/app/order-screen/order-screen.component.ts ***!
  \********************************************************/
/*! exports provided: OrderScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderScreenComponent", function() { return OrderScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrderScreenComponent = class OrderScreenComponent {
    constructor() { }
    ngOnInit() {
    }
};
OrderScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-screen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-screen/order-screen.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-screen.component.css */ "./src/app/order-screen/order-screen.component.css")).default]
    })
], OrderScreenComponent);



/***/ }),

/***/ "./src/app/order-sizes/order-sizes.component.css":
/*!*******************************************************!*\
  !*** ./src/app/order-sizes/order-sizes.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: white;\r\n}\r\n\r\n.menu{\r\n    width: 100%;\r\n    height: 150px;\r\n    background-color: #0078ad;\r\n}\r\n\r\n.home_div{\r\n    height: 100%;\r\n    width: 45%;\r\n    background-color: white;\r\n}\r\n\r\n.home{\r\n    position: absolute;\r\n    height: 100px;\r\n    width:100px;\r\n    left: 30px;\r\n    top: 20px;\r\n}\r\n\r\n.text-box{\r\n    position: absolute;\r\n    right: 30px;\r\n    top:20px;\r\n    font-size: 2em;\r\n    color: white;\r\n}\r\n\r\n.text-box1{\r\n    position: absolute;\r\n    right: 30px;\r\n    top:40px;\r\n    font-size: 2em;\r\n    color: white;\r\n}\r\n\r\n.button1{\r\n    height: 15%;\r\n    width: 90%;\r\n    background-color: #e31836;\r\n    display: inline-block;\r\n    margin: 19px 19px 19px 19px;\r\n}\r\n\r\n.button2{\r\n    height: 15%;\r\n    width: 90%;\r\n    background-color: #e31836;\r\n    display: inline-block;\r\n    margin: 0px 19px 19px 19px;\r\n}\r\n\r\n.button3{\r\n    height: 15%;\r\n    width: 90%;\r\n    background-color: #e31836;\r\n    display: inline-block;\r\n    margin: 0px 19px 19px 19px;\r\n}\r\n\r\n.button4{\r\n    height: 15%;\r\n    width: 90%;\r\n    background-color: #e31836;\r\n    display: inline-block;\r\n    margin: 0px 19px 19px 19px;\r\n}\r\n\r\n.button1-text{\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 2em;\r\n}\r\n\r\n.button2-text{\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 2em;\r\n}\r\n\r\n.button3-text{\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 2em;\r\n}\r\n\r\n.button4-text{\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItc2l6ZXMvb3JkZXItc2l6ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLDJCQUEyQjtBQUMvQjs7QUFHQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLDBCQUEwQjtBQUM5Qjs7QUFHQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLXNpemVzL29yZGVyLXNpemVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tZW51e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzhhZDtcclxufVxyXG5cclxuLmhvbWVfZGl2e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaG9tZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDoxMDBweDtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWJveHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgdG9wOjIwcHg7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRleHQtYm94MXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgdG9wOjQwcHg7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ1dHRvbjF7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTMxODM2O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAxOXB4IDE5cHggMTlweCAxOXB4O1xyXG59XHJcblxyXG5cclxuLmJ1dHRvbjJ7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTMxODM2O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwcHggMTlweCAxOXB4IDE5cHg7XHJcbn1cclxuXHJcbi5idXR0b24ze1xyXG4gICAgaGVpZ2h0OiAxNSU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzMTgzNjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMHB4IDE5cHggMTlweCAxOXB4O1xyXG59XHJcblxyXG4uYnV0dG9uNHtcclxuICAgIGhlaWdodDogMTUlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMzE4MzY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDBweCAxOXB4IDE5cHggMTlweDtcclxufVxyXG5cclxuXHJcbi5idXR0b24xLXRleHR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLmJ1dHRvbjItdGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG4uYnV0dG9uMy10ZXh0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi5idXR0b240LXRleHR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/order-sizes/order-sizes.component.ts":
/*!******************************************************!*\
  !*** ./src/app/order-sizes/order-sizes.component.ts ***!
  \******************************************************/
/*! exports provided: OrderSizesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSizesComponent", function() { return OrderSizesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrderSizesComponent = class OrderSizesComponent {
    constructor() { }
    ngOnInit() {
    }
};
OrderSizesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-sizes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-sizes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-sizes/order-sizes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-sizes.component.css */ "./src/app/order-sizes/order-sizes.component.css")).default]
    })
], OrderSizesComponent);



/***/ }),

/***/ "./src/app/your-orders/your-orders.component.css":
/*!*******************************************************!*\
  !*** ./src/app/your-orders/your-orders.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3lvdXItb3JkZXJzL3lvdXItb3JkZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/your-orders/your-orders.component.ts":
/*!******************************************************!*\
  !*** ./src/app/your-orders/your-orders.component.ts ***!
  \******************************************************/
/*! exports provided: YourOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourOrdersComponent", function() { return YourOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let YourOrdersComponent = class YourOrdersComponent {
    constructor() { }
    ngOnInit() {
    }
};
YourOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-your-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./your-orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/your-orders/your-orders.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./your-orders.component.css */ "./src/app/your-orders/your-orders.component.css")).default]
    })
], YourOrdersComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/thinkpad_user/Desktop/N_DRIVE/git/github/dominos_app_visually_impaired/source_code/prototype/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map