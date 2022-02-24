(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_lawatan_kemaskini-laporan_kemaskini-laporan_module_ts"],{

/***/ 40796:
/*!************************************************************************************!*\
  !*** ./src/app/core/lawatan/kemaskini-laporan/kemaskini-laporan-routing.module.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KemaskiniLaporanPageRoutingModule": function() { return /* binding */ KemaskiniLaporanPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _kemaskini_laporan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kemaskini-laporan.page */ 1938);




const routes = [
    {
        path: '',
        component: _kemaskini_laporan_page__WEBPACK_IMPORTED_MODULE_0__.KemaskiniLaporanPage
    }
];
let KemaskiniLaporanPageRoutingModule = class KemaskiniLaporanPageRoutingModule {
};
KemaskiniLaporanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], KemaskiniLaporanPageRoutingModule);



/***/ }),

/***/ 57720:
/*!****************************************************************************!*\
  !*** ./src/app/core/lawatan/kemaskini-laporan/kemaskini-laporan.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KemaskiniLaporanPageModule": function() { return /* binding */ KemaskiniLaporanPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _kemaskini_laporan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kemaskini-laporan-routing.module */ 40796);
/* harmony import */ var _kemaskini_laporan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kemaskini-laporan.page */ 1938);







let KemaskiniLaporanPageModule = class KemaskiniLaporanPageModule {
};
KemaskiniLaporanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _kemaskini_laporan_routing_module__WEBPACK_IMPORTED_MODULE_0__.KemaskiniLaporanPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_kemaskini_laporan_page__WEBPACK_IMPORTED_MODULE_1__.KemaskiniLaporanPage]
    })
], KemaskiniLaporanPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_core_lawatan_kemaskini-laporan_kemaskini-laporan_module_ts-es2015.js.map