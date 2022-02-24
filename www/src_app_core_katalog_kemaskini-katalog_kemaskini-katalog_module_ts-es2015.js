(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_katalog_kemaskini-katalog_kemaskini-katalog_module_ts"],{

/***/ 89636:
/*!************************************************************************************!*\
  !*** ./src/app/core/katalog/kemaskini-katalog/kemaskini-katalog-routing.module.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KemaskiniKatalogPageRoutingModule": function() { return /* binding */ KemaskiniKatalogPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _kemaskini_katalog_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kemaskini-katalog.page */ 43564);




const routes = [
    {
        path: '',
        component: _kemaskini_katalog_page__WEBPACK_IMPORTED_MODULE_0__.KemaskiniKatalogPage
    }
];
let KemaskiniKatalogPageRoutingModule = class KemaskiniKatalogPageRoutingModule {
};
KemaskiniKatalogPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], KemaskiniKatalogPageRoutingModule);



/***/ }),

/***/ 27131:
/*!****************************************************************************!*\
  !*** ./src/app/core/katalog/kemaskini-katalog/kemaskini-katalog.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KemaskiniKatalogPageModule": function() { return /* binding */ KemaskiniKatalogPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _kemaskini_katalog_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kemaskini-katalog-routing.module */ 89636);
/* harmony import */ var _kemaskini_katalog_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kemaskini-katalog.page */ 43564);







let KemaskiniKatalogPageModule = class KemaskiniKatalogPageModule {
};
KemaskiniKatalogPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _kemaskini_katalog_routing_module__WEBPACK_IMPORTED_MODULE_0__.KemaskiniKatalogPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_kemaskini_katalog_page__WEBPACK_IMPORTED_MODULE_1__.KemaskiniKatalogPage]
    })
], KemaskiniKatalogPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_core_katalog_kemaskini-katalog_kemaskini-katalog_module_ts-es2015.js.map