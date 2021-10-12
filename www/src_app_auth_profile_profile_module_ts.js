(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_auth_profile_profile_module_ts"],{

/***/ 7771:
/*!********************************************************!*\
  !*** ./src/app/auth/profile/profile-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 2855);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 2970:
/*!************************************************!*\
  !*** ./src/app/auth/profile/profile.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 7771);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 2855);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 2855:
/*!**********************************************!*\
  !*** ./src/app/auth/profile/profile.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 2649);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 2403);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login/login.service */ 8762);
/* harmony import */ var src_app_services_login_login_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login/login.model */ 1146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_usahawan_usahawan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usahawan/usahawan.service */ 6643);
/* harmony import */ var src_app_services_usahawan_usahawan_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usahawan/usahawan.model */ 1160);










// import { LoginModel } from 'src/app/services/login/login.model';
let ProfilePage = class ProfilePage {
    constructor(usahawanService, loginService, router, user, usahawan) {
        this.usahawanService = usahawanService;
        this.loginService = loginService;
        this.router = router;
        this.user = user;
        this.usahawan = usahawan;
        this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
        this.user_id = window.sessionStorage.getItem("user_id");
        this.getUser();
    }
    ngOnInit() {
        // this.form = new FormGroup({
        //   nama_usahawan: new FormControl(null, [Validators.required]),
        //   no_kp: new FormControl(null, [Validators.required]),
        //   tarikh_lahir: new FormControl(null, [Validators.required]),
        //   jantina: new FormControl(null, [Validators.required]),
        //   bangsa: new FormControl(null, [Validators.required]),
        //   status_perkahwinan: new FormControl(null, [Validators.required]),
        //   tahap_pendidikan: new FormControl(null, [Validators.required]),
        //   alamat1: new FormControl(null, [Validators.required]),
        //   alamat2: new FormControl(null, [Validators.required]),
        //   alamat3: new FormControl(null, [Validators.required]),
        //   bandar: new FormControl(null, [Validators.required]),
        //   poskod: new FormControl(null, [Validators.required]),
        //   negeri: new FormControl(null, [Validators.required]),
        //   daerah: new FormControl(null, [Validators.required]),
        //   mukim: new FormControl(null, [Validators.required]),
        //   parlimen: new FormControl(null, [Validators.required]),
        //   dun: new FormControl(null, [Validators.required]),
        //   kampung: new FormControl(null, [Validators.required]),
        //   seksyen: new FormControl(null, [Validators.required]),
        // })
        // var getsession_id = window.sessionStorage.getItem("user_id");
        console.log("usahawan id", this.usahawan_id);
        console.log("user id", this.user_id);
        this.getUsahawan();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            no_kp: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
        });
    }
    getUsahawan() {
        // console.log(this.form.value);
        this.usahawanService.show(this.usahawan_id).subscribe((res) => {
            console.log("usahawan info", res);
            if (Object.keys(res).length === 0) {
                console.log("failed");
            }
            else {
                this.usahawan = res;
                console.log("profile usahawan success");
            }
        });
    }
    getUser() {
        // console.log(this.form.value);
        this.loginService.show(this.user_id).subscribe((res) => {
            // console.log("user info", res);
            if (Object.keys(res).length === 0) {
                console.log("failed");
            }
            else {
                this.user = res;
                console.log("user info", this.user);
                console.log("profile usahawan success");
            }
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_services_usahawan_usahawan_service__WEBPACK_IMPORTED_MODULE_4__.UsahawanService },
    { type: src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_login_login_model__WEBPACK_IMPORTED_MODULE_3__.LoginModel },
    { type: src_app_services_usahawan_usahawan_model__WEBPACK_IMPORTED_MODULE_5__.UsahawanModel }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 1146:
/*!***********************************************!*\
  !*** ./src/app/services/login/login.model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModel": () => (/* binding */ LoginModel)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let LoginModel = class LoginModel {
};
LoginModel = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], LoginModel);



/***/ }),

/***/ 1160:
/*!*****************************************************!*\
  !*** ./src/app/services/usahawan/usahawan.model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsahawanModel": () => (/* binding */ UsahawanModel)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let UsahawanModel = class UsahawanModel {
};
UsahawanModel = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], UsahawanModel);



/***/ }),

/***/ 6643:
/*!*******************************************************!*\
  !*** ./src/app/services/usahawan/usahawan.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsahawanService": () => (/* binding */ UsahawanService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);




let UsahawanService = class UsahawanService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/usahawan";
        this.models = [];
    }
    // getUser(): Observable<UsahawanModel[]> {
    //   return this.http.get<UsahawanModel[]>(`${this.url}`);
    // }
    // check1user( user : UsahawanModel): Observable<UsahawanModel>{
    //   return this.http.post<UsahawanModel>(`${this.url}`,user);
    // }
    show(id) {
        return this.http.get(`${this.url}` + "/" + id);
    }
};
UsahawanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
UsahawanService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UsahawanService);



/***/ }),

/***/ 2403:
/*!************************************************!*\
  !*** ./src/app/auth/profile/profile.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 2649:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/profile/profile.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar style=\"height: 80px;\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" href=\"/dashboard\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <!-- <ion-back-button defaultHref=\"/dashboard\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-text color=\"success\">\n      <h1>\n        <strong>\n          PROFIL\n        </strong>\n      </h1>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n\n    <ion-fab-button color=\"light\">\n      <ion-icon color=\"success\" name=\"caret-down-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"bottom\">\n      <!-- <a href=\"/profile\"> -->\n      <ion-fab-button color=\"success\" href=\"/profile\">\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Usahawan</small></ion-text>\n      <!-- </a> -->\n      <!-- <a href=\"/profile-syarikat\" style=\"text-decoration:none;\"> -->\n      <ion-fab-button color=\"success\" href=\"/profile-syarikat\">\n        <ion-icon name=\"logo-twitter\"></ion-icon>\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Syarikat</small></ion-text>\n      <!-- </a> -->\n\n      <ion-fab-button color=\"success\" href=\"/profile-perniagaan\">\n        <ion-icon name=\"logo-vimeo\"></ion-icon>\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Perniagaan</small></ion-text>\n\n      <ion-fab-button color=\"success\" href=\"/profile-pekebun\">\n        <ion-icon name=\"logo-vimeo\"></ion-icon>\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Pekebun</small></ion-text>\n    </ion-fab-list>\n  </ion-fab>\n\n\n  <!-- <ion-item-divider class=\"ion-padding\" color=\"light\">\n    <ion-text color=\"success\">\n\n      <h1>\n        <strong>\n          <ion-icon name=\"chevron-back-outline\"></ion-icon> PROFIL\n        </strong>\n      </h1>\n    </ion-text>\n\n  </ion-item-divider> -->\n\n\n  <ion-grid [fixed]=\"true\">\n\n\n    <form action=\"\" class=\"ion-padding form-control\">\n\n      <ion-row>\n        <ion-col>\n          <strong>Maklumat Peribadi</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n\n      <ion-row class=\"ion-justify-content-center\" style=\"height: 120px;\">\n        <ion-col></ion-col>\n\n        <ion-col class=\"ion-justify-content-center\">\n          <ion-avatar class=\"ion-justify-content-center\" style=\"height: 100px; width: 100px;\">\n            <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n          </ion-avatar>\n        </ion-col>\n        <ion-col></ion-col>\n\n      </ion-row>\n      <br>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>NO. USAHAWAN</ion-label>\n          <ion-input value=\"{{usahawan.id}}\" ></ion-input>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>NAMA PENUH</ion-label>\n          <ion-input value=\"{{usahawan.namausahawan}}\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>NO. MYCARD</ion-label>\n          <ion-input value=\"{{user.no_kp}}\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>TARIKH LAHIR</ion-label>\n          <ion-input value=\"{{usahawan.tarikhlahir}}\"></ion-input>\n        </ion-col>\n\n        <ion-col>\n\n          <ion-label> JANTINA</ion-label>\n          <ion-input value=\"{{usahawan.U_Jantina_ID}}\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <br>\n          <ion-label> BANGSA</ion-label>\n          <ion-input value=\"{{usahawan.U_Bangsa_ID}}\"></ion-input>\n        </ion-col>\n\n        <ion-col>\n\n\n          <ion-label> STATUS PERKAHWINAN</ion-label>\n          <ion-input value=\"{{usahawan.statusperkahwinan}}\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> TAHAP PENDIDIKAN</ion-label>\n          <ion-input value=\"{{usahawan.U_Pendidikan_ID}}\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <br><br><br>\n\n      <ion-row>\n        <ion-col>\n          <strong>Maklumat Kediaman</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> ALAMAT (BARIS 1)</ion-label>\n          <ion-input value=\"{{usahawan.alamat1}}\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> ALAMAT (BARIS 2)</ion-label>\n          <ion-input value=\"{{usahawan.alamat2}}\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> ALAMAT (BARIS 3)</ion-label>\n          <ion-input value=\"{{usahawan.alamat3}}\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> BANDAR</ion-label>\n          <ion-input value=\"{{usahawan.bandar}}\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> POSKOD</ion-label>\n          <ion-input value=\"{{usahawan.poskod}}\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NEGERI</ion-label>\n          <ion-input value=\"{{usahawan.U_Negeri_ID}}\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> DAERAH</ion-label>\n          <ion-input value=\"{{usahawan.U_Daerah_ID}}\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> MUKIM</ion-label>\n          <ion-input value=\"{{usahawan.U_Mukim_ID}}\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> PARLIMEN</ion-label>\n          <ion-input value=\"{{usahawan.U_Parlimen_ID}}\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> DUN</ion-label>\n          <ion-input value=\"{{usahawan.U_Dun_ID}}\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> KAMPUNG</ion-label>\n          <ion-input value=\"{{usahawan.U_Kampung_ID}}\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> SEKSYEN</ion-label>\n          <ion-input value=\"{{usahawan.U_Seksyen_ID}}\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <br><br><br>\n      <ion-row>\n        <ion-col>\n          <strong>Maklumat Lain</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> KATEGORI USAHAWAN</ion-label>\n          <ion-input value=\"{{usahawan.id_kategori_usahawan}}\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NO. TELEFON</ion-label>\n          <ion-input value=\"{{usahawan.notelefon}}\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> NO. TELEFON (HP)</ion-label>\n          <ion-input value=\"{{usahawan.nohp}}\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> EMAIL</ion-label>\n          <ion-input value=\"{{usahawan.email}}\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <!-- <ion-label> KATEGORI USAHAWAN</ion-label> -->\n          <ion-button expand=\"block\" color=\"success\">KEMASKINI</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n\n  </ion-grid>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_profile_profile_module_ts.js.map