(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);







// import { FormsModule, Reacti } from '@angular/forms';
// import { AuthService } from '../services/auth.service';
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 76770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 21339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login/login.service */ 58762);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 61628);





// import { AuthService } from '../services/auth.service';




let LoginPage = class LoginPage {
    constructor(loginService, loadingCtrl, router, storage, alertController) {
        this.loginService = loginService;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.storage = storage;
        this.alertController = alertController;
        this.checked = true;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            no_kp: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            // device_name: new FormControl(),
        });
        this.init();
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // If using, define drivers here: await this.storage.defineDriver(/*...*/);
            const storage = yield this.storage.create();
            this.storage = storage;
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Ralat',
                subHeader: '',
                message: 'No Kad Pengenalan Atau Kata Laluan Tidak Sah',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    presentAlert2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '',
                subHeader: '',
                message: 'Akaun Tidak Aktif. Sila Minta Admin Aktifkan Akaun Anda Untuk Meneruskan ke Aplikasi',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    login() {
        console.log(this.form.value);
        this.loginService.check1user(this.form.value).subscribe((res) => {
            console.log("user", res);
            if (Object.keys(res).length === 0) {
                console.log("failed");
                this.presentAlert();
            }
            else {
                var setsession_user_id = window.sessionStorage.setItem("user_id", res.id);
                var setsession_profile_status = window.sessionStorage.setItem("profile_status", res.profile_status);
                var setsession_role = window.sessionStorage.setItem("role", res.type);
                if (res.type == 1) {
                    // console.log("pegawai")
                    var setsession_pegawai_id = window.sessionStorage.setItem("pegawai_id", res.idpegawai);
                    var setsession_perananpegawai = window.sessionStorage.setItem("peranan_pegawai", res.role);
                    // console.log(window.sessionStorage.getItem("pegawai_id"))
                }
                else if (res.type == 2) {
                    // console.log("usahawan")
                    var setsession_usahawan_id = window.sessionStorage.setItem("usahawan_id", res.usahawanid);
                }
                console.log("login success");
                // this.router.navigate(['/dashboard']);
                if (res.status_pengguna == 0) {
                    this.presentAlert2();
                }
                else {
                    if (res.profile_status == 0 || res.profile_status == 2) {
                        this.router.navigate(['/first-time-login']);
                    }
                    else if (res.profile_status == 1) {
                        this.router.navigate(['/dashboard']);
                    }
                }
            }
        });
        this.loginService.login(this.form.value).subscribe((res) => {
            console.log("token", res);
        });
    }
    numericOnly(event) {
        let pattern = /^([0-9])$/;
        let result = pattern.test(event.key);
        return result;
    }
    forget_password() {
        this.router.navigate(['/forgot-password']);
    }
    addValue(e) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var isChecked = e.currentTarget.checked;
            // console.log(e.currentTarget);//undefined
            console.log(this.checked); //it is working !!!
            // console.log(isChecked);
            if (this.checked) {
                window.sessionStorage.removeItem("username");
            }
            else {
                // this.storage?.set("username", this.form.value.no_kp);
                console.log(this.form.value.no_kp);
                // const username = await this.storage.get('username');
                var username = window.sessionStorage.setItem("username", this.form.value.no_kp);
                var get_username = window.sessionStorage.getItem("username");
                if (get_username != null) {
                    console.log(get_username);
                    this.form.patchValue({
                        no_kp: get_username
                    });
                }
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 21339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans:700,600,800|Lato:400\");\n#overlay {\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.8);\n  /* Black background with opacity */\n  z-index: -1;\n  /* Specify a stack order in case you're using a different order for other elements */\n  cursor: pointer;\n  /* Add a pointer on hover */\n}\n.element-logo {\n  background-image: url(\"/assets/img/risda_logo.png\");\n  background-position: 50% 50%;\n  background-size: cover;\n  height: 94px;\n  width: 97px;\n  z-index: 3;\n  margin: auto;\n}\n.welcome-back {\n  letter-spacing: 0;\n  min-height: 49px;\n  min-width: 278px;\n  text-align: center;\n  color: green;\n}\n@font-face {\n  font-family: \"NATS-Regular\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://fonts.animaapp.com/NATS-Regular\") format(\"truetype\");\n}\n.forget-password {\n  cursor: pointer;\n  letter-spacing: 0;\n  min-height: 16px;\n  min-width: 105px;\n  text-align: end;\n  color: green;\n}\nion-input {\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRFEsdUZBQUE7QUFwRFI7RUFDSSxlQUFBO0VBQWlCLG1DQUFBO0VBRWpCLFdBQUE7RUFBYSxzQ0FBQTtFQUNiLFlBQUE7RUFBYyx1Q0FBQTtFQUNkLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwwQ0FBQTtFQUE0QyxrQ0FBQTtFQUM1QyxXQUFBO0VBQWEsb0ZBQUE7RUFDYixlQUFBO0VBQWlCLDJCQUFBO0FBT3JCO0FBSkE7RUFDSSxtREFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBT0o7QUFKQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQU9KO0FBSkE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzRUFBQTtBQU9KO0FBSkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFNSjtBQUhBO0VBQ0ksWUFBQTtBQU1KIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNvdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICAgIC8vIGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICAgIHotaW5kZXg6IC0xOyAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiBBZGQgYSBwb2ludGVyIG9uIGhvdmVyICovXG59XG5cbi5lbGVtZW50LWxvZ28ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3Jpc2RhX2xvZ28ucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDk0cHg7XG4gICAgd2lkdGg6IDk3cHg7XG4gICAgei1pbmRleDogMztcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi53ZWxjb21lLWJhY2sge1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDQ5cHg7XG4gICAgbWluLXdpZHRoOiAyNzhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJOQVRTLVJlZ3VsYXJcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IHVybChcImh0dHBzOi8vZm9udHMuYW5pbWFhcHAuY29tL05BVFMtUmVndWxhclwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuLmZvcmdldC1wYXNzd29yZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDE2cHg7XG4gICAgbWluLXdpZHRoOiAxMDVweDtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG5pb24taW5wdXQge1xuICAgIGhlaWdodDogNjBweDtcbn1cblxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvK1NhbnM6NzAwLDYwMCw4MDB8TGF0bzo0MDBcIik7XG4vLyBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG8rU2Fuczo3MDAsNjAwLDgwMHxMYXRvOjQwMFwiKTtcblxuLy8gaW9uLWJ1dHRvbltkaXNhYmxlZF0ge1xuLy8gICAgIC0taW9uLWNvbG9yLWJhc2U6ICM4NTg1ODUgIWltcG9ydGFudDtcbi8vIH1cbiJdfQ== */");

/***/ }),

/***/ 76770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<!-- /Users/ismailibrahim/Desktop/Risda/myApp/src/app/login -->\n<ion-content>\n\n  <div id=\"overlay\"\n    style=\"background-image:url('/assets/img/bg1.jpg'); background-position: center; background-repeat: no-repeat; background-size: cover; height:100%; position:absolute\">\n\n  </div>\n  <div id=\"overlay\" style=\"position: absolute;\"></div>\n\n\n  <div style=\"z-index: 4; margin: 3%; margin-top:20%; align-items:center\">\n\n    <div class=\"element-logo\"></div>\n\n    <!-- <ion-text >\n      <h1 class=\"welcome-back nunitosans-extra-bold-green-haze-36px\">Selamat Datang</h1>\n    </ion-text> -->\n    <ion-text class=\"welcome-back\">\n      <h1 class=\"welcome-back nunitosans-extra-bold-green-haze-36px\">Selamat Datang</h1>\n    </ion-text>\n\n    <ion-text style=\"text-align: center;\">\n      <h2>Log Masuk</h2>\n    </ion-text>\n    <br>\n\n    <!-- <h1 class=\"welcome-backnats-regular-normal-log-cabin-26px ion-text-center\">Log Masuk Kali Pertama</h1> -->\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"login()\">\n      <ion-item style=\"border-radius: 50px;\">\n        <!-- <ion-label position=\"floating\"></ion-label> -->\n        <ion-input type=\"text\" inputmode=\"numeric\" placeholder=\"No Kad Pengenalan\" name=\"nric\" formControlName='no_kp' \n          style=\"text-transform: none !important;\" (keypress)=\"numericOnly($event)\"></ion-input>\n      </ion-item>\n      <br>\n\n      <ion-item style=\"border-radius: 50px;\">\n        <!-- <ion-label position=\"floating\">Kata Laluan</ion-label> -->\n        <ion-input type=\"password\" placeholder=\"Kata Laluan\" name=\"password\" formControlName='password'\n          style=\"text-transform: none !important;\">\n        </ion-input>\n      </ion-item>\n      <br>\n\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"6\">\n            <div>\n              <a class=\"forget-password nunitosans-extra-bold-green-haze-12px\">\n\n                \n                  \n                  <!-- <ion-checkbox color=\"success\" (click)=\"addValue($event)\" [checked]=\"checked\" [(ngModel)]=\"checked\" [ngModelOptions]=\"{standalone: true}\"></ion-checkbox>\n                  <ion-label>  Ingat saya</ion-label>\n                -->\n              </a>\n            </div>\n          </ion-col>\n          <ion-col size=\"6\">\n            <div style=\"display: flex; justify-content:flex-end\">\n              <a class=\"forget-password nunitosans-extra-bold-green-haze-12px\" (click)=\"forget_password()\"\n                style=\"text-decoration: none;\">\n                Lupa Kata Laluan?\n              </a>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n      <br>\n\n      <ion-button expand=\"block\" color=\"success\" type=\"submit\" [disabled]=\"form.invalid\">Log masuk</ion-button>\n    </form>\n\n\n  </div>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts-es2015.js.map