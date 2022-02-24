(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_buletin_kemaskini-buletin_kemaskini-buletin_module_ts"],{

/***/ 42597:
/*!************************************************************************************!*\
  !*** ./src/app/core/buletin/kemaskini-buletin/kemaskini-buletin-routing.module.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KemaskiniBuletinPageRoutingModule": function() { return /* binding */ KemaskiniBuletinPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _kemaskini_buletin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kemaskini-buletin.page */ 21318);




const routes = [
    {
        path: '',
        component: _kemaskini_buletin_page__WEBPACK_IMPORTED_MODULE_0__.KemaskiniBuletinPage
    }
];
let KemaskiniBuletinPageRoutingModule = class KemaskiniBuletinPageRoutingModule {
};
KemaskiniBuletinPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], KemaskiniBuletinPageRoutingModule);



/***/ }),

/***/ 56374:
/*!****************************************************************************!*\
  !*** ./src/app/core/buletin/kemaskini-buletin/kemaskini-buletin.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KemaskiniBuletinPageModule": function() { return /* binding */ KemaskiniBuletinPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _kemaskini_buletin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kemaskini-buletin-routing.module */ 42597);
/* harmony import */ var _kemaskini_buletin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kemaskini-buletin.page */ 21318);







let KemaskiniBuletinPageModule = class KemaskiniBuletinPageModule {
};
KemaskiniBuletinPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _kemaskini_buletin_routing_module__WEBPACK_IMPORTED_MODULE_0__.KemaskiniBuletinPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_kemaskini_buletin_page__WEBPACK_IMPORTED_MODULE_1__.KemaskiniBuletinPage]
    })
], KemaskiniBuletinPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_core_buletin_kemaskini-buletin_kemaskini-buletin_module_ts-es2015.js.map