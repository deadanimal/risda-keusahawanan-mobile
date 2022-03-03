(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_lawatan_tambah-laporan_tambah-laporan_module_ts-src_app_services_lawatan_lawatan-6b63f7"],{

/***/ 12646:
/*!******************************************************************************!*\
  !*** ./src/app/core/lawatan/tambah-laporan/tambah-laporan-routing.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TambahLaporanPageRoutingModule": function() { return /* binding */ TambahLaporanPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tambah_laporan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tambah-laporan.page */ 18398);




const routes = [
    {
        path: '',
        component: _tambah_laporan_page__WEBPACK_IMPORTED_MODULE_0__.TambahLaporanPage
    }
];
let TambahLaporanPageRoutingModule = class TambahLaporanPageRoutingModule {
};
TambahLaporanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TambahLaporanPageRoutingModule);



/***/ }),

/***/ 36601:
/*!**********************************************************************!*\
  !*** ./src/app/core/lawatan/tambah-laporan/tambah-laporan.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TambahLaporanPageModule": function() { return /* binding */ TambahLaporanPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _tambah_laporan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tambah-laporan-routing.module */ 12646);
/* harmony import */ var _tambah_laporan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tambah-laporan.page */ 18398);







let TambahLaporanPageModule = class TambahLaporanPageModule {
};
TambahLaporanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tambah_laporan_routing_module__WEBPACK_IMPORTED_MODULE_0__.TambahLaporanPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_tambah_laporan_page__WEBPACK_IMPORTED_MODULE_1__.TambahLaporanPage]
    })
], TambahLaporanPageModule);



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
//# sourceMappingURL=src_app_core_lawatan_tambah-laporan_tambah-laporan_module_ts-src_app_services_lawatan_lawatan-6b63f7-es2015.js.map