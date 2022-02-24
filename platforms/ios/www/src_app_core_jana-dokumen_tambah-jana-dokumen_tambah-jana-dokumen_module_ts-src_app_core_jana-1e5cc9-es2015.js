(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_jana-dokumen_tambah-jana-dokumen_tambah-jana-dokumen_module_ts-src_app_core_jana-1e5cc9"],{

/***/ 18095:
/*!*********************************************************************************************!*\
  !*** ./src/app/core/jana-dokumen/tambah-jana-dokumen/tambah-jana-dokumen-routing.module.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TambahJanaDokumenPageRoutingModule": function() { return /* binding */ TambahJanaDokumenPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tambah_jana_dokumen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tambah-jana-dokumen.page */ 92669);




const routes = [
    {
        path: '',
        component: _tambah_jana_dokumen_page__WEBPACK_IMPORTED_MODULE_0__.TambahJanaDokumenPage
    }
];
let TambahJanaDokumenPageRoutingModule = class TambahJanaDokumenPageRoutingModule {
};
TambahJanaDokumenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TambahJanaDokumenPageRoutingModule);



/***/ }),

/***/ 78593:
/*!*************************************************************************************!*\
  !*** ./src/app/core/jana-dokumen/tambah-jana-dokumen/tambah-jana-dokumen.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TambahJanaDokumenPageModule": function() { return /* binding */ TambahJanaDokumenPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _tambah_jana_dokumen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tambah-jana-dokumen-routing.module */ 18095);
/* harmony import */ var _tambah_jana_dokumen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tambah-jana-dokumen.page */ 92669);







let TambahJanaDokumenPageModule = class TambahJanaDokumenPageModule {
};
TambahJanaDokumenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tambah_jana_dokumen_routing_module__WEBPACK_IMPORTED_MODULE_0__.TambahJanaDokumenPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_tambah_jana_dokumen_page__WEBPACK_IMPORTED_MODULE_1__.TambahJanaDokumenPage]
    })
], TambahJanaDokumenPageModule);



/***/ }),

/***/ 48742:
/*!***********************************************************!*\
  !*** ./src/app/core/jana-dokumen/tooltip/tooltip.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipPage": function() { return /* binding */ TooltipPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tooltip_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tooltip.page.html */ 14346);
/* harmony import */ var _tooltip_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip.page.scss */ 48931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let TooltipPage = class TooltipPage {
    constructor() { }
    ngOnInit() {
    }
};
TooltipPage.ctorParameters = () => [];
TooltipPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tooltip',
        template: _raw_loader_tooltip_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tooltip_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TooltipPage);



/***/ }),

/***/ 42122:
/*!***************************************************!*\
  !*** ./src/app/services/daerah/daerah.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DaerahService": function() { return /* binding */ DaerahService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let DaerahService = class DaerahService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/daerah";
    }
    // post(data: any): Observable<any> {
    //   return this.http.post<any>(`${this.url}`, data);
    // }
    get() {
        return this.http.get(`${this.url}`);
    }
};
DaerahService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
DaerahService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DaerahService);



/***/ }),

/***/ 89496:
/*!*****************************************************!*\
  !*** ./src/app/services/katalog/katalog.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KatalogService": function() { return /* binding */ KatalogService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let KatalogService = class KatalogService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/katalog";
        this.url2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/katalogPegawai";
        this.url3 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/pengesahanPegawai";
        this.url4 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/katalogdashboard";
    }
    post(data) {
        return this.http.post(`${this.url}`, data);
    }
    getAll() {
        return this.http.get(`${this.url}`);
    }
    get(user_id) {
        return this.http.get(`${this.url}` + "/" + user_id);
    }
    update(aliran, aliran_id) {
        return this.http.put(`${this.url}/${aliran_id}`, aliran);
    }
    delete(aliran_id) {
        return this.http.delete(`${this.url}/${aliran_id}`);
    }
    getKatalogPegawai(id) {
        return this.http.get(`${this.url2}` + "/" + id);
    }
    pengesahanPegawai(id) {
        return this.http.get(`${this.url3}` + "/" + id);
    }
    katalogPdf(id) {
        return this.http.get(`${this.url}` + '/katalogPdf/' + id);
    }
    getMaklumatUsahawan(id) {
        return this.http.get(`${this.url}` + '/showMaklumatUsahawan/' + id);
    }
    katalogdashboard() {
        return this.http.get(`${this.url4}`);
    }
};
KatalogService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
KatalogService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], KatalogService);



/***/ }),

/***/ 64802:
/*!***************************************************!*\
  !*** ./src/app/services/negeri/negeri.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NegeriService": function() { return /* binding */ NegeriService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let NegeriService = class NegeriService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/negeri";
    }
    // post(data: any): Observable<any> {
    //   return this.http.post<any>(`${this.url}`, data);
    // }
    get() {
        return this.http.get(`${this.url}`);
    }
};
NegeriService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
NegeriService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], NegeriService);



/***/ }),

/***/ 14744:
/*!*********************************************************!*\
  !*** ./src/app/services/pelanggan/pelanggan.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PelangganService": function() { return /* binding */ PelangganService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let PelangganService = class PelangganService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/pelanggan";
    }
    post(data) {
        return this.http.post(`${this.url}`, data);
    }
    get(id) {
        return this.http.get(`${this.url}` + '/' + id);
    }
    update(data, id) {
        return this.http.put(`${this.url}/${id}`, data);
    }
    delete(id) {
        return this.http.delete(`${this.url}/${id}`);
    }
    janaDokumen(id_pelanggan, id_pengguna) {
        return this.http.post(`${this.url}` + '/janaDokumen/' + id_pelanggan, id_pengguna);
    }
    janaQuotation(id_pelanggan, id_pengguna) {
        return this.http.post(`${this.url}` + '/janaQuotation/' + id_pelanggan, id_pengguna);
    }
    janaDO(id_pelanggan, id_pengguna) {
        return this.http.post(`${this.url}` + '/janaDO/' + id_pelanggan, id_pengguna);
    }
    janaInvoice(id_pelanggan, id_pengguna) {
        return this.http.post(`${this.url}` + '/janaInvoice/' + id_pelanggan, id_pengguna);
    }
};
PelangganService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PelangganService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PelangganService);



/***/ }),

/***/ 67441:
/*!***********************************************!*\
  !*** ./src/app/services/stok/stok.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StokService": function() { return /* binding */ StokService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let StokService = class StokService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/stok";
        this.url2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/deleteStok";
    }
    post(data) {
        return this.http.post(`${this.url}`, data);
    }
    getStokKatalog() {
        return this.http.get(`${this.url}`);
    }
    get(id) {
        return this.http.get(`${this.url}` + '/' + id);
    }
    update(data, id) {
        return this.http.put(`${this.url}/${id}`, data);
    }
    delete(id) {
        return this.http.delete(`${this.url}/${id}`);
    }
    deleteMany(id_pelanggan) {
        return this.http.get(`${this.url2}/${id_pelanggan}`);
    }
};
StokService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
StokService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], StokService);



/***/ }),

/***/ 48931:
/*!*************************************************************!*\
  !*** ./src/app/core/jana-dokumen/tooltip/tooltip.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sdGlwLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 14346:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/jana-dokumen/tooltip/tooltip.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content >\n  <div style=\"padding: 30px;\">\n    <small>\n      Sila lakukan penginputan katalog di modul katalog terlebih dahulu\n    </small>\n  </div>\n  \n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_core_jana-dokumen_tambah-jana-dokumen_tambah-jana-dokumen_module_ts-src_app_core_jana-1e5cc9-es2015.js.map