(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_lawatan_pengesahan-tarikh-lawatan-pgw_pengesahan-tarikh-lawatan-pgw_module_ts-sr-3ea48e"],{

/***/ 89867:
/*!************************************************************************************************************!*\
  !*** ./src/app/core/lawatan/pengesahan-tarikh-lawatan-pgw/pengesahan-tarikh-lawatan-pgw-routing.module.ts ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PengesahanTarikhLawatanPgwPageRoutingModule": function() { return /* binding */ PengesahanTarikhLawatanPgwPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pengesahan_tarikh_lawatan_pgw_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pengesahan-tarikh-lawatan-pgw.page */ 31453);




const routes = [
    {
        path: '',
        component: _pengesahan_tarikh_lawatan_pgw_page__WEBPACK_IMPORTED_MODULE_0__.PengesahanTarikhLawatanPgwPage
    }
];
let PengesahanTarikhLawatanPgwPageRoutingModule = class PengesahanTarikhLawatanPgwPageRoutingModule {
};
PengesahanTarikhLawatanPgwPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PengesahanTarikhLawatanPgwPageRoutingModule);



/***/ }),

/***/ 33685:
/*!****************************************************************************************************!*\
  !*** ./src/app/core/lawatan/pengesahan-tarikh-lawatan-pgw/pengesahan-tarikh-lawatan-pgw.module.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PengesahanTarikhLawatanPgwPageModule": function() { return /* binding */ PengesahanTarikhLawatanPgwPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _pengesahan_tarikh_lawatan_pgw_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pengesahan-tarikh-lawatan-pgw-routing.module */ 89867);
/* harmony import */ var _pengesahan_tarikh_lawatan_pgw_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pengesahan-tarikh-lawatan-pgw.page */ 31453);







let PengesahanTarikhLawatanPgwPageModule = class PengesahanTarikhLawatanPgwPageModule {
};
PengesahanTarikhLawatanPgwPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pengesahan_tarikh_lawatan_pgw_routing_module__WEBPACK_IMPORTED_MODULE_0__.PengesahanTarikhLawatanPgwPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_pengesahan_tarikh_lawatan_pgw_page__WEBPACK_IMPORTED_MODULE_1__.PengesahanTarikhLawatanPgwPage]
    })
], PengesahanTarikhLawatanPgwPageModule);



/***/ }),

/***/ 89765:
/*!*****************************************************!*\
  !*** ./src/app/services/lawatan/lawatan.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LawatanService": function() { return /* binding */ LawatanService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let LawatanService = class LawatanService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/lawatan";
        this.url2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/lawatan/usahawan";
        this.url3 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/tindakanLawatan";
        this.url4 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/lawatan/updateLaporan";
        this.url5 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/lawatan/senaraiUsahawan";
    }
    post(data) {
        return this.http.post(`${this.url}`, data);
    }
    get(pegawai_id) {
        return this.http.get(`${this.url}` + '/' + pegawai_id);
    }
    getLawatanUsahawan(id_pengguna) {
        return this.http.get(`${this.url2}` + '/' + id_pengguna);
    }
    update(data, id) {
        return this.http.put(`${this.url}` + '/' + id, data);
    }
    getTindakanLawatan() {
        return this.http.get(`${this.url3}`);
    }
    updateLaporan(data, id) {
        return this.http.post(`${this.url4}` + '/' + id, data);
    }
    getsenaraiusahawan(id_pegawai) {
        return this.http.get(`${this.url5}` + '/' + id_pegawai);
    }
    tambahLaporan(data) {
        return this.http.post(`${this.url}` + '/laporanBaru', data);
    }
    janaLaporan(id) {
        return this.http.get(`${this.url}` + '/janaDokumenLawatan/' + id);
    }
};
LawatanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
LawatanService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], LawatanService);



/***/ })

}]);
//# sourceMappingURL=src_app_core_lawatan_pengesahan-tarikh-lawatan-pgw_pengesahan-tarikh-lawatan-pgw_module_ts-sr-3ea48e-es2015.js.map