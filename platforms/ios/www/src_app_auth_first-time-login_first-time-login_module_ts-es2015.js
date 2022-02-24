(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_auth_first-time-login_first-time-login_module_ts"],{

/***/ 28359:
/*!**************************************************************************!*\
  !*** ./src/app/auth/first-time-login/first-time-login-routing.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstTimeLoginPageRoutingModule": function() { return /* binding */ FirstTimeLoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _first_time_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./first-time-login.page */ 64995);




const routes = [
    {
        path: '',
        component: _first_time_login_page__WEBPACK_IMPORTED_MODULE_0__.FirstTimeLoginPage
    }
];
let FirstTimeLoginPageRoutingModule = class FirstTimeLoginPageRoutingModule {
};
FirstTimeLoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FirstTimeLoginPageRoutingModule);



/***/ }),

/***/ 38299:
/*!******************************************************************!*\
  !*** ./src/app/auth/first-time-login/first-time-login.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstTimeLoginPageModule": function() { return /* binding */ FirstTimeLoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _first_time_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./first-time-login-routing.module */ 28359);
/* harmony import */ var _first_time_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./first-time-login.page */ 64995);







let FirstTimeLoginPageModule = class FirstTimeLoginPageModule {
};
FirstTimeLoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _first_time_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.FirstTimeLoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_first_time_login_page__WEBPACK_IMPORTED_MODULE_1__.FirstTimeLoginPage]
    })
], FirstTimeLoginPageModule);



/***/ }),

/***/ 64995:
/*!****************************************************************!*\
  !*** ./src/app/auth/first-time-login/first-time-login.page.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstTimeLoginPage": function() { return /* binding */ FirstTimeLoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_first_time_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./first-time-login.page.html */ 17669);
/* harmony import */ var _first_time_login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./first-time-login.page.scss */ 10091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var src_app_services_forgot_password_forgot_password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/forgot-password/forgot-password.service */ 90957);








let FirstTimeLoginPage = class FirstTimeLoginPage {
    constructor(router, formBuilder, forgotPassService, loadingController, alertController) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.forgotPassService = forgotPassService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.user_id = window.sessionStorage.getItem("user_id");
        this.profile_status = window.sessionStorage.getItem("profile_status");
        this.form = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,],
            confirm_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,],
        });
        this.form2 = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,],
            confirm_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,],
        });
    }
    ngOnInit() {
        console.log("profile_status", this.profile_status);
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '',
                message: 'Adakah anda setuju untuk mengemaskini alamat email dan kata laluan?',
                buttons: [
                    {
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ya',
                        cssClass: "yes-custom",
                        handler: () => {
                            console.log('Confirm Okay');
                            // this.presentAlert();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    logForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.form.value);
            if (this.form.value.password == this.form.value.confirm_password) {
                const loading = yield this.loadingController.create({ message: 'Loading ...' });
                loading.present();
                this.forgotPassService.firstTimeLogin(this.form.value, this.user_id).subscribe((res) => {
                    console.log("res", res);
                    if (res == 'email already exist') {
                        loading.dismiss();
                        this.presentAlertEmailFailed();
                    }
                    else {
                        loading.dismiss();
                        this.presentAlertUpdatesucces();
                    }
                });
            }
            else {
                this.presentAlertFailed();
            }
        });
    }
    presentAlertEmailFailed() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Harap Maaf',
                // subHeader: 'Subtitle',
                message: 'Email yang digunakan telah wujud',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    presentAlertFailed() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Tidak Berjaya',
                // subHeader: 'Subtitle',
                message: 'Kata laluan tidak sepandan dengan pengesahan kata laluan',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    presentAlertUpdatesucces() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Kemaskini Berjaya',
                // subHeader: 'Subtitle',
                message: 'Email dan kata laluan berjaya dikemaskini',
                buttons: [
                    {
                        text: 'Okay',
                        // id: 'confirm-button',
                        handler: () => {
                            this.router.navigate(['/dashboard']);
                        }
                    }
                ]
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    logForm2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.form2.value);
            if (this.form2.value.password == this.form2.value.confirm_password) {
                console.log("berjaya");
                const loading = yield this.loadingController.create({ message: 'Loading ...' });
                loading.present();
                this.forgotPassService.updatePassword(this.form2.value, this.user_id).subscribe((res) => {
                    console.log("res", res);
                    loading.dismiss();
                    this.presentAlertUpdatesucces();
                });
            }
            else {
                this.presentAlertFailed();
            }
        });
    }
};
FirstTimeLoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_services_forgot_password_forgot_password_service__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
FirstTimeLoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-first-time-login',
        template: _raw_loader_first_time_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_first_time_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FirstTimeLoginPage);



/***/ }),

/***/ 10091:
/*!******************************************************************!*\
  !*** ./src/app/auth/first-time-login/first-time-login.page.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans:700,600,800|Lato:400\");\n#overlay {\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.7);\n  /* Black background with opacity */\n  z-index: -1;\n  /* Specify a stack order in case you're using a different order for other elements */\n  cursor: pointer;\n  /* Add a pointer on hover */\n}\n.element-logo {\n  background-image: url(\"/assets/img/risda_logo.png\");\n  background-position: 50% 50%;\n  background-size: cover;\n  height: 94px;\n  width: 97px;\n  z-index: 3;\n  margin: auto;\n}\n.welcome-back {\n  letter-spacing: 0;\n  min-height: 49px;\n  min-width: 278px;\n  text-align: center;\n  color: green;\n}\n@font-face {\n  font-family: \"NATS-Regular\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://fonts.animaapp.com/NATS-Regular\") format(\"truetype\");\n}\n.forget-password {\n  cursor: pointer;\n  letter-spacing: 0;\n  min-height: 16px;\n  min-width: 105px;\n  text-align: end;\n  color: green;\n}\nion-input {\n  height: 60px;\n}\n.my-custom-class .alert-wrapper {\n  background: #e5e5e5;\n}\n.yes-custom {\n  background-color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0LXRpbWUtbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EUSx1RkFBQTtBQXBEUjtFQUNJLGVBQUE7RUFBaUIsbUNBQUE7RUFFakIsV0FBQTtFQUFhLHNDQUFBO0VBQ2IsWUFBQTtFQUFjLHVDQUFBO0VBQ2QsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDBDQUFBO0VBQTRDLGtDQUFBO0VBQzVDLFdBQUE7RUFBYSxvRkFBQTtFQUNiLGVBQUE7RUFBaUIsMkJBQUE7QUFPckI7QUFKQTtFQUNJLG1EQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFPSjtBQUpBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBT0o7QUFKQTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNFQUFBO0FBT0o7QUFKQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQU1KO0FBSEE7RUFDSSxZQUFBO0FBTUo7QUFBQTtFQUNJLG1CQUFBO0FBR0o7QUFBQTtFQUNJLHVCQUFBO0FBR0oiLCJmaWxlIjoiZmlyc3QtdGltZS1sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgICAvLyBkaXNwbGF5OiBibG9jazsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTsgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cbiAgICB6LWluZGV4OiAtMTsgLyogU3BlY2lmeSBhIHN0YWNrIG9yZGVyIGluIGNhc2UgeW91J3JlIHVzaW5nIGEgZGlmZmVyZW50IG9yZGVyIGZvciBvdGhlciBlbGVtZW50cyAqL1xuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogQWRkIGEgcG9pbnRlciBvbiBob3ZlciAqL1xufVxuXG4uZWxlbWVudC1sb2dvIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9yaXNkYV9sb2dvLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiA5NHB4O1xuICAgIHdpZHRoOiA5N3B4O1xuICAgIHotaW5kZXg6IDM7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4ud2VsY29tZS1iYWNrIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBtaW4taGVpZ2h0OiA0OXB4O1xuICAgIG1pbi13aWR0aDogMjc4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBncmVlbjtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTkFUUy1SZWd1bGFyXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiB1cmwoXCJodHRwczovL2ZvbnRzLmFuaW1hYXBwLmNvbS9OQVRTLVJlZ3VsYXJcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbi5mb3JnZXQtcGFzc3dvcmQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBtaW4taGVpZ2h0OiAxNnB4O1xuICAgIG1pbi13aWR0aDogMTA1cHg7XG4gICAgdGV4dC1hbGlnbjplbmQ7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG5pb24taW5wdXR7XG4gICAgaGVpZ2h0OiA2MHB4XG59XG5cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bytTYW5zOjcwMCw2MDAsODAwfExhdG86NDAwXCIpO1xuXG5cbi5teS1jdXN0b20tY2xhc3MgLmFsZXJ0LXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6ICNlNWU1ZTU7XG4gIH1cblxuLnllcy1jdXN0b20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIFxufSJdfQ== */");

/***/ }),

/***/ 17669:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/first-time-login/first-time-login.page.html ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>Log Masuk Kali Pertama</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n  <div id=\"overlay\"\n    style=\"background-image:url('/assets/img/bg1.jpg'); background-position: center; background-repeat: no-repeat; background-size: cover; height:100%; position:absolute\">\n\n  </div>\n  <div id=\"overlay\" style=\"position: absolute;\"></div>\n\n\n  <div *ngIf=\"profile_status == 0\" style=\"z-index: 4; margin: 3%; margin-top:20%; align-items:center\">\n\n    <div class=\"element-logo\"></div>\n\n\n    <ion-text style=\"text-align: center;\">\n      <h2>Log Masuk Kali Pertama</h2>\n    </ion-text>\n\n\n    <br><br><br>\n\n    <form action=\"\" [formGroup]=\"form\" (ngSubmit)=\"logForm()\">\n      <ion-item style=\"border-radius: 50px;\">\n        <ion-input type=\"text\" email placeholder=\"Email\" formControlName=\"email\" style=\"text-transform: none !important;\"></ion-input>\n      </ion-item>\n      <br>\n\n      <ion-item style=\"border-radius: 50px;\">\n        <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Kata Laluan Baru\" style=\"text-transform: none !important;\"></ion-input>\n      </ion-item>\n      <br>\n      <ion-item style=\"border-radius: 50px;\">\n        <ion-input type=\"password\" formControlName=\"confirm_password\" placeholder=\"Ulang Kata Laluan Baru\" style=\"text-transform: none !important;\"></ion-input>\n      </ion-item>\n\n      <br>\n\n      <br>\n\n      <ion-button type=\"submit\" expand=\"block\" color=\"success\" [disabled]=\"form.invalid\">Log masuk</ion-button>\n    </form>\n    \n  </div>\n\n\n  <div *ngIf=\"profile_status == 2\" style=\"z-index: 4; margin: 3%; margin-top:20%; align-items:center\">\n\n    <div class=\"element-logo\"></div>\n\n\n    <ion-text style=\"text-align: center;\">\n      <h2>Reset Kata Laluan</h2>\n    </ion-text>\n\n\n    <br><br><br>\n\n    <form action=\"\" [formGroup]=\"form2\" (ngSubmit)=\"logForm2()\">\n      <ion-item style=\"border-radius: 50px;\">\n        <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Kata Laluan Baru\" style=\"text-transform: none !important;\"></ion-input>\n      </ion-item>\n      <br>\n      <ion-item style=\"border-radius: 50px;\">\n        <ion-input type=\"password\" formControlName=\"confirm_password\" placeholder=\"Ulang Kata Laluan Baru\" style=\"text-transform: none !important;\"></ion-input>\n      </ion-item>\n\n      <br>\n\n      <br>\n\n      <ion-button type=\"submit\" expand=\"block\" color=\"success\" [disabled]=\"form2.invalid\">Log masuk</ion-button>\n    </form>\n    \n  </div>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_first-time-login_first-time-login_module_ts-es2015.js.map