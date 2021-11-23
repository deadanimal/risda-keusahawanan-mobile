(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_modal_kemaskini-tunai-keluar_kemaskini-tunai-keluar_module_ts-src_app_services_A-689f8e"],{

/***/ 54380:
/*!********************************************************************************************!*\
  !*** ./src/app/core/modal/kemaskini-tunai-keluar/kemaskini-tunai-keluar-routing.module.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KemaskiniTunaiKeluarPageRoutingModule": function() { return /* binding */ KemaskiniTunaiKeluarPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _kemaskini_tunai_keluar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kemaskini-tunai-keluar.page */ 58278);




const routes = [
    {
        path: '',
        component: _kemaskini_tunai_keluar_page__WEBPACK_IMPORTED_MODULE_0__.KemaskiniTunaiKeluarPage
    }
];
let KemaskiniTunaiKeluarPageRoutingModule = class KemaskiniTunaiKeluarPageRoutingModule {
};
KemaskiniTunaiKeluarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], KemaskiniTunaiKeluarPageRoutingModule);



/***/ }),

/***/ 7545:
/*!************************************************************************************!*\
  !*** ./src/app/core/modal/kemaskini-tunai-keluar/kemaskini-tunai-keluar.module.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KemaskiniTunaiKeluarPageModule": function() { return /* binding */ KemaskiniTunaiKeluarPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _kemaskini_tunai_keluar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kemaskini-tunai-keluar-routing.module */ 54380);
/* harmony import */ var _kemaskini_tunai_keluar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kemaskini-tunai-keluar.page */ 58278);







let KemaskiniTunaiKeluarPageModule = class KemaskiniTunaiKeluarPageModule {
};
KemaskiniTunaiKeluarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _kemaskini_tunai_keluar_routing_module__WEBPACK_IMPORTED_MODULE_0__.KemaskiniTunaiKeluarPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_kemaskini_tunai_keluar_page__WEBPACK_IMPORTED_MODULE_1__.KemaskiniTunaiKeluarPage]
    })
], KemaskiniTunaiKeluarPageModule);



/***/ }),

/***/ 72311:
/*!***************************************************!*\
  !*** ./src/app/services/Aliran/aliran.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AliranService": function() { return /* binding */ AliranService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);




let AliranService = class AliranService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/aliran";
    }
    post(data) {
        return this.http.post(`${this.url}`, data);
    }
    get() {
        return this.http.get(`${this.url}`);
    }
    update(aliran, aliran_id) {
        return this.http.put(`${this.url}/${aliran_id}`, aliran);
    }
    delete(aliran_id) {
        return this.http.delete(`${this.url}/${aliran_id}`);
    }
};
AliranService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
AliranService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AliranService);



/***/ }),

/***/ 92478:
/*!********************************************************************!*\
  !*** ./src/app/services/kategoriAliran/kategori-aliran.service.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KategoriAliranService": function() { return /* binding */ KategoriAliranService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);




let KategoriAliranService = class KategoriAliranService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/kategori_aliran";
    }
    getKategoriAliran() {
        return this.http.get(`${this.url}`);
    }
};
KategoriAliranService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
KategoriAliranService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], KategoriAliranService);



/***/ })

}]);
//# sourceMappingURL=src_app_core_modal_kemaskini-tunai-keluar_kemaskini-tunai-keluar_module_ts-src_app_services_A-689f8e-es2015.js.map