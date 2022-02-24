(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_buletin_tambah-buletin_tambah-buletin_module_ts-src_app_services_buletin_buletin-0fd5e5"],{

/***/ 56161:
/*!******************************************************************************!*\
  !*** ./src/app/core/buletin/tambah-buletin/tambah-buletin-routing.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TambahBuletinPageRoutingModule": function() { return /* binding */ TambahBuletinPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tambah_buletin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tambah-buletin.page */ 88888);




const routes = [
    {
        path: '',
        component: _tambah_buletin_page__WEBPACK_IMPORTED_MODULE_0__.TambahBuletinPage
    }
];
let TambahBuletinPageRoutingModule = class TambahBuletinPageRoutingModule {
};
TambahBuletinPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TambahBuletinPageRoutingModule);



/***/ }),

/***/ 30112:
/*!**********************************************************************!*\
  !*** ./src/app/core/buletin/tambah-buletin/tambah-buletin.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TambahBuletinPageModule": function() { return /* binding */ TambahBuletinPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _tambah_buletin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tambah-buletin-routing.module */ 56161);
/* harmony import */ var _tambah_buletin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tambah-buletin.page */ 88888);







let TambahBuletinPageModule = class TambahBuletinPageModule {
};
TambahBuletinPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tambah_buletin_routing_module__WEBPACK_IMPORTED_MODULE_0__.TambahBuletinPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_tambah_buletin_page__WEBPACK_IMPORTED_MODULE_1__.TambahBuletinPage]
    })
], TambahBuletinPageModule);



/***/ }),

/***/ 42101:
/*!*****************************************************!*\
  !*** ./src/app/services/buletin/buletin.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuletinService": function() { return /* binding */ BuletinService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let BuletinService = class BuletinService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/buletin";
    }
    post(data) {
        return this.http.post(`${this.url}`, data);
    }
    get(pegawai_id) {
        return this.http.get(`${this.url}` + "/" + pegawai_id);
    }
    getAll() {
        return this.http.get(`${this.url}`);
    }
    update(data, id) {
        return this.http.put(`${this.url}/${id}`, data);
    }
};
BuletinService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
BuletinService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], BuletinService);



/***/ })

}]);
//# sourceMappingURL=src_app_core_buletin_tambah-buletin_tambah-buletin_module_ts-src_app_services_buletin_buletin-0fd5e5-es2015.js.map