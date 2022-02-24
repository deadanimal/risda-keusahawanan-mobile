(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_jana-dokumen_tooltip_tooltip_module_ts"],{

/***/ 53897:
/*!*********************************************************************!*\
  !*** ./src/app/core/jana-dokumen/tooltip/tooltip-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipPageRoutingModule": function() { return /* binding */ TooltipPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tooltip_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip.page */ 48742);




const routes = [
    {
        path: '',
        component: _tooltip_page__WEBPACK_IMPORTED_MODULE_0__.TooltipPage
    }
];
let TooltipPageRoutingModule = class TooltipPageRoutingModule {
};
TooltipPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TooltipPageRoutingModule);



/***/ }),

/***/ 18384:
/*!*************************************************************!*\
  !*** ./src/app/core/jana-dokumen/tooltip/tooltip.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipPageModule": function() { return /* binding */ TooltipPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _tooltip_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip-routing.module */ 53897);
/* harmony import */ var _tooltip_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip.page */ 48742);







let TooltipPageModule = class TooltipPageModule {
};
TooltipPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tooltip_routing_module__WEBPACK_IMPORTED_MODULE_0__.TooltipPageRoutingModule
        ],
        declarations: [_tooltip_page__WEBPACK_IMPORTED_MODULE_1__.TooltipPage]
    })
], TooltipPageModule);



/***/ }),

/***/ 48742:
/*!***********************************************************!*\
  !*** ./src/app/core/jana-dokumen/tooltip/tooltip.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipPage": function() { return /* binding */ TooltipPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tooltip_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tooltip.page.html */ 14346);
/* harmony import */ var _tooltip_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip.page.scss */ 48931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let TooltipPage = class TooltipPage {
    constructor() { }
    ngOnInit() {
    }
};
TooltipPage.ctorParameters = () => [];
TooltipPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tooltip',
        template: _raw_loader_tooltip_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tooltip_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TooltipPage);



/***/ }),

/***/ 48931:
/*!*************************************************************!*\
  !*** ./src/app/core/jana-dokumen/tooltip/tooltip.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sdGlwLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 14346:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/jana-dokumen/tooltip/tooltip.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content >\n  <div style=\"padding: 30px;\">\n    <small>\n      Sila lakukan penginputan katalog di modul katalog terlebih dahulu\n    </small>\n  </div>\n  \n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_core_jana-dokumen_tooltip_tooltip_module_ts-es2015.js.map