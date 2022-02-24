(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_dashboard_show-katalog_show-katalog_module_ts"],{

/***/ 16578:
/*!****************************************************************************!*\
  !*** ./src/app/core/dashboard/show-katalog/show-katalog-routing.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowKatalogPageRoutingModule": function() { return /* binding */ ShowKatalogPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _show_katalog_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-katalog.page */ 72070);




const routes = [
    {
        path: '',
        component: _show_katalog_page__WEBPACK_IMPORTED_MODULE_0__.ShowKatalogPage
    }
];
let ShowKatalogPageRoutingModule = class ShowKatalogPageRoutingModule {
};
ShowKatalogPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShowKatalogPageRoutingModule);



/***/ }),

/***/ 10937:
/*!********************************************************************!*\
  !*** ./src/app/core/dashboard/show-katalog/show-katalog.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowKatalogPageModule": function() { return /* binding */ ShowKatalogPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _show_katalog_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-katalog-routing.module */ 16578);
/* harmony import */ var _show_katalog_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-katalog.page */ 72070);







let ShowKatalogPageModule = class ShowKatalogPageModule {
};
ShowKatalogPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _show_katalog_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShowKatalogPageRoutingModule
        ],
        declarations: [_show_katalog_page__WEBPACK_IMPORTED_MODULE_1__.ShowKatalogPage]
    })
], ShowKatalogPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_core_dashboard_show-katalog_show-katalog_module_ts-es2015.js.map