(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_auth_profile-pekebun_profile-pekebun_module_ts"],{

/***/ 63018:
/*!************************************************************************!*\
  !*** ./src/app/auth/profile-pekebun/profile-pekebun-routing.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePekebunPageRoutingModule": function() { return /* binding */ ProfilePekebunPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_pekebun_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-pekebun.page */ 66653);




const routes = [
    {
        path: '',
        component: _profile_pekebun_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePekebunPage
    }
];
let ProfilePekebunPageRoutingModule = class ProfilePekebunPageRoutingModule {
};
ProfilePekebunPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePekebunPageRoutingModule);



/***/ }),

/***/ 33003:
/*!****************************************************************!*\
  !*** ./src/app/auth/profile-pekebun/profile-pekebun.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePekebunPageModule": function() { return /* binding */ ProfilePekebunPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _profile_pekebun_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-pekebun-routing.module */ 63018);
/* harmony import */ var _profile_pekebun_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-pekebun.page */ 66653);







let ProfilePekebunPageModule = class ProfilePekebunPageModule {
};
ProfilePekebunPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_pekebun_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePekebunPageRoutingModule
        ],
        declarations: [_profile_pekebun_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePekebunPage]
    })
], ProfilePekebunPageModule);



/***/ }),

/***/ 66653:
/*!**************************************************************!*\
  !*** ./src/app/auth/profile-pekebun/profile-pekebun.page.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePekebunPage": function() { return /* binding */ ProfilePekebunPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_pekebun_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile-pekebun.page.html */ 22884);
/* harmony import */ var _profile_pekebun_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-pekebun.page.scss */ 72930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_pekebun_pekebun_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/pekebun/pekebun.model */ 16955);
/* harmony import */ var src_app_services_pekebun_pekebun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/pekebun/pekebun.service */ 95855);







let ProfilePekebunPage = class ProfilePekebunPage {
    constructor(pekebunService, router, pekebun) {
        this.pekebunService = pekebunService;
        this.router = router;
        this.pekebun = pekebun;
        this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
        this.user_id = window.sessionStorage.getItem("user_id");
    }
    ngOnInit() {
        console.log("usahawan id", this.usahawan_id);
        console.log("user id", this.user_id);
        this.getPekebun();
    }
    getPekebun() {
        // console.log(this.form.value);
        this.pekebunService.show(this.usahawan_id).subscribe((res) => {
            console.log("pekebun info", res);
            if (Object.keys(res).length === 0) {
                console.log("failed");
            }
            else {
                this.pekebun = res;
                console.log("profile pekebun success");
            }
        });
    }
};
ProfilePekebunPage.ctorParameters = () => [
    { type: src_app_services_pekebun_pekebun_service__WEBPACK_IMPORTED_MODULE_3__.PekebunService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_pekebun_pekebun_model__WEBPACK_IMPORTED_MODULE_2__.PekebunModel }
];
ProfilePekebunPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-profile-pekebun',
        template: _raw_loader_profile_pekebun_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_pekebun_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePekebunPage);



/***/ }),

/***/ 16955:
/*!***************************************************!*\
  !*** ./src/app/services/pekebun/pekebun.model.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PekebunModel": function() { return /* binding */ PekebunModel; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let PekebunModel = class PekebunModel {
};
PekebunModel = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], PekebunModel);



/***/ }),

/***/ 95855:
/*!*****************************************************!*\
  !*** ./src/app/services/pekebun/pekebun.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PekebunService": function() { return /* binding */ PekebunService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);




let PekebunService = class PekebunService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/pekebun";
        this.models = [];
    }
    // getUser(): Observable<PekebunModel[]> {
    //   return this.http.get<PekebunModel[]>(`${this.url}`);
    // }
    // check1user( user : PekebunModel): Observable<PekebunModel>{
    //   return this.http.post<PekebunModel>(`${this.url}`,user);
    // }
    show(id) {
        return this.http.get(`${this.url}` + "/" + id);
    }
};
PekebunService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PekebunService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PekebunService);



/***/ }),

/***/ 72930:
/*!****************************************************************!*\
  !*** ./src/app/auth/profile-pekebun/profile-pekebun.page.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLXBla2VidW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 22884:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/profile-pekebun/profile-pekebun.page.html ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"height: 80px;\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" href=\"/dashboard\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <!-- <ion-back-button defaultHref=\"/dashboard\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-text color=\"success\">\n      <h1>\n        <strong>\n           PROFIL\n        </strong>\n      </h1>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- 00A651 -->\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n\n    <ion-fab-button color=\"light\">\n      <ion-icon color=\"success\" name=\"caret-down-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"bottom\">\n      <!-- <a href=\"/profile\"> -->\n      <ion-fab-button color=\"success\" href=\"/profile\">\n        <!-- <ion-icon name=\"logo-facebook\"></ion-icon> -->\n        <img src=\"assets/icon/usahawan-icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Usahawan</small></ion-text>\n      <!-- </a> -->\n      <!-- <a href=\"/profile-syarikat\" style=\"text-decoration:none;\"> -->\n      <ion-fab-button color=\"success\" href=\"/profile-syarikat\">\n        <!-- <ion-icon name=\"logo-twitter\"></ion-icon> -->\n        <img src=\"assets/icon/Syarikat--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Syarikat</small></ion-text>\n      <!-- </a> -->\n\n      <ion-fab-button color=\"success\" href=\"/profile-perniagaan\">\n        <!-- <ion-icon name=\"logo-vimeo\"></ion-icon> -->\n        <img src=\"assets/icon/Perniagaan--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Perniagaan</small></ion-text>\n\n      <ion-fab-button color=\"success\" href=\"/profile-pekebun\">\n        <!-- <ion-icon name=\"logo-vimeo\"></ion-icon> -->\n        <img src=\"assets/icon/Pekebun--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Pekebun</small></ion-text>\n    </ion-fab-list>\n  </ion-fab>\n\n  <!-- <ion-item-divider>\n    <ion-label>\n      Basic Item Divider\n    </ion-label>\n  </ion-item-divider> -->\n\n  <!-- <ion-item-divider class=\"ion-padding\" color=\"light\">\n    <ion-text color=\"success\">\n\n      <h1><strong>\n          <ion-icon name=\"chevron-back-outline\"></ion-icon> PROFIL\n        </strong></h1>\n    </ion-text>\n\n  </ion-item-divider> -->\n\n\n  <ion-grid [fixed]=\"true\">\n\n\n    <form action=\"\" class=\"ion-padding form-control\">\n\n      <ion-row>\n        <ion-col>\n          <strong>Maklumat Pekebun Kecil</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>NO. MYKAD</ion-label>\n          <ion-input value = {{pekebun.No_KP}} ></ion-input>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>NAMA PEKEBUN KECIL</ion-label>\n          <ion-input value = {{pekebun.Nama_PK}} ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>NO. TANAM SEMULA/SIC</ion-label>\n          <ion-input value = {{pekebun.Tsmohon_No}} ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>STATUS DAFTAR USAHAWAN</ion-label>\n          <ion-input value = {{pekebun.status_daftar_usahawan}} ></ion-input>\n        </ion-col>\n      </ion-row>\n\n\n      <br><br><br>\n\n      <ion-row>\n        <ion-col>\n          <strong>Maklumat Tanah</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NO.GERAN</ion-label>\n          <ion-input value = {{pekebun.No_Geran}} ></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> POSKOD</ion-label>\n          <ion-input  ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NEGERI</ion-label>\n          <ion-input value = {{pekebun.U_Negeri_ID}} ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> DAERAH</ion-label>\n          <ion-input value = {{pekebun.U_Daerah_ID}} ></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> MUKIM</ion-label>\n          <ion-input value = {{pekebun.U_Mukim_ID}} ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> PARLIMEN</ion-label>\n          <ion-input value = {{pekebun.U_Parlimen_ID}} ></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> DUN</ion-label>\n          <ion-input value = {{pekebun.U_Dun_ID}} ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> KAMPUNG</ion-label>\n          <ion-input value = {{pekebun.U_Kampung_ID}} ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> SEKSYEN</ion-label>\n          <ion-input value = {{pekebun.U_Seksyen_ID}} ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> KELUARAN HEKTAR</ion-label>\n          <ion-input value = {{pekebun.keluasan_hektar}} ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> JENIS TANAMAN PEKEBUN</ion-label>\n          <ion-input value = {{pekebun.jenis_tanaman_kebun}} ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <br><br><br>\n      <ion-row>\n        <ion-col>\n          <!-- <ion-label> KATEGORI USAHAWAN</ion-label> -->\n          <ion-button expand=\"block\" color=\"success\">KEMASKINI</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n\n  </ion-grid>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_profile-pekebun_profile-pekebun_module_ts-es2015.js.map