(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_katalog_maklumat-produk_maklumat-produk_module_ts"],{

/***/ 86504:
/*!********************************************************************************!*\
  !*** ./src/app/core/katalog/maklumat-produk/maklumat-produk-routing.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaklumatProdukPageRoutingModule": function() { return /* binding */ MaklumatProdukPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _maklumat_produk_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maklumat-produk.page */ 27010);




const routes = [
    {
        path: '',
        component: _maklumat_produk_page__WEBPACK_IMPORTED_MODULE_0__.MaklumatProdukPage
    }
];
let MaklumatProdukPageRoutingModule = class MaklumatProdukPageRoutingModule {
};
MaklumatProdukPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MaklumatProdukPageRoutingModule);



/***/ }),

/***/ 37108:
/*!************************************************************************!*\
  !*** ./src/app/core/katalog/maklumat-produk/maklumat-produk.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaklumatProdukPageModule": function() { return /* binding */ MaklumatProdukPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _maklumat_produk_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maklumat-produk-routing.module */ 86504);
/* harmony import */ var _maklumat_produk_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maklumat-produk.page */ 27010);







let MaklumatProdukPageModule = class MaklumatProdukPageModule {
};
MaklumatProdukPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _maklumat_produk_routing_module__WEBPACK_IMPORTED_MODULE_0__.MaklumatProdukPageRoutingModule
        ],
        declarations: [_maklumat_produk_page__WEBPACK_IMPORTED_MODULE_1__.MaklumatProdukPage]
    })
], MaklumatProdukPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_core_katalog_maklumat-produk_maklumat-produk_module_ts-es2015.js.map