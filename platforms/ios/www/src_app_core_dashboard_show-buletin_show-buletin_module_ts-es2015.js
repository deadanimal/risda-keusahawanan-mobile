(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_dashboard_show-buletin_show-buletin_module_ts"],{

/***/ 13952:
/*!****************************************************************************!*\
  !*** ./src/app/core/dashboard/show-buletin/show-buletin-routing.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowBuletinPageRoutingModule": function() { return /* binding */ ShowBuletinPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _show_buletin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-buletin.page */ 87586);




const routes = [
    {
        path: '',
        component: _show_buletin_page__WEBPACK_IMPORTED_MODULE_0__.ShowBuletinPage
    }
];
let ShowBuletinPageRoutingModule = class ShowBuletinPageRoutingModule {
};
ShowBuletinPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShowBuletinPageRoutingModule);



/***/ }),

/***/ 33951:
/*!********************************************************************!*\
  !*** ./src/app/core/dashboard/show-buletin/show-buletin.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowBuletinPageModule": function() { return /* binding */ ShowBuletinPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _show_buletin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-buletin-routing.module */ 13952);
/* harmony import */ var _show_buletin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-buletin.page */ 87586);







let ShowBuletinPageModule = class ShowBuletinPageModule {
};
ShowBuletinPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _show_buletin_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShowBuletinPageRoutingModule
        ],
        declarations: [_show_buletin_page__WEBPACK_IMPORTED_MODULE_1__.ShowBuletinPage]
    })
], ShowBuletinPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_core_dashboard_show-buletin_show-buletin_module_ts-es2015.js.map