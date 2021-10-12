(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_auth_profile-perniagaan_profile-perniagaan_module_ts"],{

/***/ 8236:
/*!******************************************************************************!*\
  !*** ./src/app/auth/profile-perniagaan/profile-perniagaan-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePerniagaanPageRoutingModule": () => (/* binding */ ProfilePerniagaanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _profile_perniagaan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-perniagaan.page */ 1287);




const routes = [
    {
        path: '',
        component: _profile_perniagaan_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePerniagaanPage
    }
];
let ProfilePerniagaanPageRoutingModule = class ProfilePerniagaanPageRoutingModule {
};
ProfilePerniagaanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePerniagaanPageRoutingModule);



/***/ }),

/***/ 4325:
/*!**********************************************************************!*\
  !*** ./src/app/auth/profile-perniagaan/profile-perniagaan.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePerniagaanPageModule": () => (/* binding */ ProfilePerniagaanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _profile_perniagaan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-perniagaan-routing.module */ 8236);
/* harmony import */ var _profile_perniagaan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-perniagaan.page */ 1287);







let ProfilePerniagaanPageModule = class ProfilePerniagaanPageModule {
};
ProfilePerniagaanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_perniagaan_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePerniagaanPageRoutingModule
        ],
        declarations: [_profile_perniagaan_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePerniagaanPage]
    })
], ProfilePerniagaanPageModule);



/***/ }),

/***/ 1287:
/*!********************************************************************!*\
  !*** ./src/app/auth/profile-perniagaan/profile-perniagaan.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePerniagaanPage": () => (/* binding */ ProfilePerniagaanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_perniagaan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile-perniagaan.page.html */ 6226);
/* harmony import */ var _profile_perniagaan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-perniagaan.page.scss */ 2419);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_perniagaan_perniagaan_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/perniagaan/perniagaan.model */ 6074);
/* harmony import */ var src_app_services_perniagaan_perniagaan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/perniagaan/perniagaan.service */ 4381);







let ProfilePerniagaanPage = class ProfilePerniagaanPage {
    constructor(perniagaanService, router, perniagaan) {
        this.perniagaanService = perniagaanService;
        this.router = router;
        this.perniagaan = perniagaan;
        this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
        this.user_id = window.sessionStorage.getItem("user_id");
        this.groups = [
            {
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
            },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
            }
        ];
    }
    ngOnInit() {
        console.log("usahawan id", this.usahawan_id);
        console.log("user id", this.user_id);
        this.getPerniagaan();
    }
    addGroupItem() {
        this.groups.push({
            title: `Dynamic Group Header - ${this.groups.length + 1}`,
            content: `Dynamic Group Body - ${this.groups.length + 1}`
        });
    }
    removeItem() {
        this.groups = this.groups.slice(0, this.groups.length - 1);
    }
    getPerniagaan() {
        // console.log(this.form.value);
        this.perniagaanService.show(this.usahawan_id).subscribe((res) => {
            console.log("perniagaan info", res);
            if (Object.keys(res).length === 0) {
                console.log("failed");
            }
            else {
                this.perniagaan = res;
                console.log("profile perniagaan success");
            }
        });
    }
};
ProfilePerniagaanPage.ctorParameters = () => [
    { type: src_app_services_perniagaan_perniagaan_service__WEBPACK_IMPORTED_MODULE_3__.PerniagaanService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_perniagaan_perniagaan_model__WEBPACK_IMPORTED_MODULE_2__.PerniagaanModel }
];
ProfilePerniagaanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-profile-perniagaan',
        template: _raw_loader_profile_perniagaan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_perniagaan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePerniagaanPage);



/***/ }),

/***/ 6074:
/*!*********************************************************!*\
  !*** ./src/app/services/perniagaan/perniagaan.model.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerniagaanModel": () => (/* binding */ PerniagaanModel)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let PerniagaanModel = class PerniagaanModel {
};
PerniagaanModel = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], PerniagaanModel);



/***/ }),

/***/ 4381:
/*!***********************************************************!*\
  !*** ./src/app/services/perniagaan/perniagaan.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerniagaanService": () => (/* binding */ PerniagaanService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);




let PerniagaanService = class PerniagaanService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/perniagaan";
        this.models = [];
    }
    // getUser(): Observable<PerniagaanModel[]> {
    //   return this.http.get<PerniagaanModel[]>(`${this.url}`);
    // }
    // check1user( user : PerniagaanModel): Observable<PerniagaanModel>{
    //   return this.http.post<PerniagaanModel>(`${this.url}`,user);
    // }
    show(id) {
        return this.http.get(`${this.url}` + "/" + id);
    }
};
PerniagaanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PerniagaanService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PerniagaanService);



/***/ }),

/***/ 2419:
/*!**********************************************************************!*\
  !*** ./src/app/auth/profile-perniagaan/profile-perniagaan.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLXBlcm5pYWdhYW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 6226:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/profile-perniagaan/profile-perniagaan.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar style=\"height: 80px;\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" href=\"/dashboard\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <!-- <ion-back-button defaultHref=\"/dashboard\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-text color=\"success\">\n      <h1>\n        <strong>\n           PROFIL\n        </strong>\n      </h1>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n\n    <ion-fab-button color=\"light\">\n      <ion-icon color=\"success\" name=\"caret-down-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"bottom\">\n      <!-- <a href=\"/profile\"> -->\n      <ion-fab-button color=\"success\" href=\"/profile\">\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Usahawan</small></ion-text>\n      <!-- </a> -->\n      <!-- <a href=\"/profile-syarikat\" style=\"text-decoration:none;\"> -->\n        <ion-fab-button color=\"success\" href=\"/profile-syarikat\">\n          <ion-icon name=\"logo-twitter\"></ion-icon>\n        </ion-fab-button>\n        <ion-text color=\"success\"><small> Syarikat</small></ion-text>\n      <!-- </a> -->\n\n      <ion-fab-button color=\"success\"  href=\"/profile-perniagaan\">\n        <ion-icon name=\"logo-vimeo\"></ion-icon>\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Perniagaan</small></ion-text>\n\n      <ion-fab-button color=\"success\" href=\"/profile-pekebun\">\n        <ion-icon name=\"logo-vimeo\"></ion-icon>\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Pekebun</small></ion-text>\n    </ion-fab-list>\n  </ion-fab>\n\n\n\n  <!-- <ion-item-divider class=\"ion-padding\" color=\"light\">\n    <ion-text color=\"success\">\n\n      <h1><strong>\n          <ion-icon name=\"chevron-back-outline\"></ion-icon> PROFIL\n        </strong></h1>\n    </ion-text>\n\n  </ion-item-divider> -->\n\n\n  <ion-grid [fixed]=\"true\">\n\n\n    <form action=\"\" class=\"ion-padding form-control\">\n\n      <ion-row>\n        <ion-col>\n          <strong>Maklumat Perniagaan</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <br>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>JENIS MILIKAN</ion-label>\n          <ion-input value=\"{{perniagaan.jenisperniagaan}}\" ></ion-input>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>KLUSTER PERNIAGAAN</ion-label>\n          <ion-input value=\"{{perniagaan.klusterperniagaan}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>SUB KLUSTER PERNIAGAAN</ion-label>\n          <ion-input value=\"{{perniagaan.subkluster}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> ALAMAT 1 (BARIS 1)</ion-label>\n          <ion-input value=\"{{perniagaan.alamat1}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> ALAMAT 2 (BARIS 2)</ion-label>\n          <ion-input value=\"{{perniagaan.alamat2}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> ALAMAT 3 (BARIS 3)</ion-label>\n          <ion-input value=\"{{perniagaan.alamat3}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> BANDAR</ion-label>\n          <ion-input value=\"{{perniagaan.bandar}}\" ></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> POSKOD</ion-label>\n          <ion-input value=\"{{perniagaan.poskod}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NEGERI</ion-label>\n          <ion-input value=\"{{perniagaan.U_Negeri_ID}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> DAERAH</ion-label>\n          <ion-input value=\"{{perniagaan.U_Daerah_ID}}\" ></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> MUKIM</ion-label>\n          <ion-input value=\"{{perniagaan.U_Mukim_ID}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> PARLIMEN</ion-label>\n          <ion-input value=\"{{perniagaan.U_Parlimen_ID}}\" ></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> DUN</ion-label>\n          <ion-input value=\"{{perniagaan.U_Dun_ID}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> KAMPUNG</ion-label>\n          <ion-input value=\"{{perniagaan.U_Kampung_ID}}\" ></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> SEKSYEN</ion-label>\n          <ion-input value=\"{{perniagaan.U_Seksyen_ID}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>LATITUD</ion-label>\n          <ion-input value=\"{{perniagaan.latitud}}\" ></ion-input>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n          <ion-label> LONGITUD</ion-label>\n          <ion-input value=\"{{perniagaan.logitud}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <br><br><br>\n      <ion-row>\n        <ion-col>\n          <strong>Maklumat Media Sosial</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <br>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> FACEBOOK </ion-label>\n          <ion-input value=\"{{perniagaan.facebook}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label> INSTAGRAM</ion-label>\n          <ion-input value=\"{{perniagaan.instagram}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label> TWITTER</ion-label>\n          <ion-input value=\"{{perniagaan.twitter}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label> LAMAN WEB</ion-label>\n          <ion-input value=\"{{perniagaan.lamanweb}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <br><br><br>\n      <ion-row>\n        <ion-col>\n          <strong>Maklumat Pemasaran</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <br>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> DROPSHIP</ion-label>\n          <ion-input value=\"{{perniagaan.dropship}}\" ></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> EJEN</ion-label>\n          <ion-input value=\"{{perniagaan.ejen}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> STOKIS</ion-label>\n          <ion-input value=\"{{perniagaan.stokis}}\" ></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> OUTLET</ion-label>\n          <ion-input value=\"{{perniagaan.outlet}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label> PASARAN DOMESTIK</ion-label>\n          <ion-input value=\"{{perniagaan.domestik}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label> PASARAN LUAR NEGERA</ion-label>\n          <ion-input value=\"{{perniagaan.luarnegara}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> PASARAN ONLINE</ion-label>\n          <ion-input value=\"{{perniagaan.pasaranonline}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n\n\n      <br><br><br>\n      <ion-row>\n        <ion-col>\n          <strong>Maklumat Pendapatan</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <br>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> PURATA JUALAN TERAKHIR</ion-label>\n          <ion-input value=\"{{perniagaan.purata_jualan_bulanan}}\" ></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> PURATA JUALAN TAHUNAN</ion-label>\n          <ion-input value=\"{{perniagaan.hasil_jualan_tahunan}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> STOKIS</ion-label>\n          <ion-input value=\"{{perniagaan.stokis}}\" ></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> OUTLET</ion-label>\n          <ion-input value=\"{{perniagaan.outlet}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> HASIL JUALAN TAHUNAN</ion-label>\n          <ion-input value=\"{{perniagaan.outlet}}\" ></ion-input>\n        </ion-col>\n        <ion-col>\n          <!-- <ion-label> OUTLET</ion-label>\n          <ion-input value=\"{{perniagaan.}}\" ></ion-input> -->\n        </ion-col>\n      </ion-row>\n\n\n      <br><br><br>\n      <ion-row>\n        <ion-col>\n          <strong>Maklumat Produk</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <br>\n      <div *ngFor=\"let group of groups\">\n        <ion-row>\n          <ion-col>\n            <ion-label> JENAMA PRODUK </ion-label>\n            <ion-input value=\"\" ></ion-input>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-label> UNIT MATRIK</ion-label>\n            <ion-input value=\"\" ></ion-input>\n          </ion-col>\n          <ion-col>\n            <ion-label> HARGA PER UNIT</ion-label>\n            <ion-input value=\"\" ></ion-input>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-label> KAPASITI MAKSIMUM</ion-label>\n            <ion-input value=\"\" ></ion-input>\n          </ion-col>\n          <ion-col>\n            <ion-label> KAPASITI SEMASA</ion-label>\n            <ion-input value=\"\" ></ion-input>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-icon name=\"trash-outline\" (click)=\"removeItem()\"></ion-icon>\n          <ion-icon name=\"duplicate-outline\" (click)=\"addGroupItem()\"></ion-icon>\n        </ion-row>\n      </div>\n\n\n      <br><br><br>\n      <ion-row>\n        <ion-col>\n          <strong>LAMPIRAN</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> DOKUMEN LAMPIRAN </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-button expand=\"block\" type=\"file\" value=\"\" >PILIH DOKUMEN</ion-button>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col>\n          <!-- <ion-label> KATEGORI USAHAWAN</ion-label> -->\n          <ion-button expand=\"block\" color=\"success\">KEMASKINI</ion-button>\n        </ion-col>\n      </ion-row>\n\n      <!-- <p>\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" >\n          Add Group Item\n        </button>\n\n        <button type=\"button\" class=\"btn btn-primary btn-sm ms-3 ml-3\" >Remove\n          Item\n        </button>\n      </p> -->\n\n      <!-- <accordion>\n        <accordion-group *ngFor=\"let group of groups\" [heading]=\"group.title\">\n          {{ group?.content }}\n        </accordion-group>\n      </accordion> -->\n\n    </form>\n\n  </ion-grid>\n\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_profile-perniagaan_profile-perniagaan_module_ts.js.map