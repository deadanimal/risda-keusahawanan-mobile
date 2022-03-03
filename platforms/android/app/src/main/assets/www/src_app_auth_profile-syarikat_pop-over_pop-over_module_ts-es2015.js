(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_auth_profile-syarikat_pop-over_pop-over_module_ts"],{

/***/ 85193:
/*!***************************************************************************!*\
  !*** ./src/app/auth/profile-syarikat/pop-over/pop-over-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopOverPageRoutingModule": function() { return /* binding */ PopOverPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pop_over_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop-over.page */ 86649);




const routes = [
    {
        path: '',
        component: _pop_over_page__WEBPACK_IMPORTED_MODULE_0__.PopOverPage
    }
];
let PopOverPageRoutingModule = class PopOverPageRoutingModule {
};
PopOverPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PopOverPageRoutingModule);



/***/ }),

/***/ 25565:
/*!*******************************************************************!*\
  !*** ./src/app/auth/profile-syarikat/pop-over/pop-over.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopOverPageModule": function() { return /* binding */ PopOverPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _pop_over_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop-over-routing.module */ 85193);
/* harmony import */ var _pop_over_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pop-over.page */ 86649);







let PopOverPageModule = class PopOverPageModule {
};
PopOverPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pop_over_routing_module__WEBPACK_IMPORTED_MODULE_0__.PopOverPageRoutingModule
        ],
        declarations: [_pop_over_page__WEBPACK_IMPORTED_MODULE_1__.PopOverPage]
    })
], PopOverPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_auth_profile-syarikat_pop-over_pop-over_module_ts-es2015.js.map