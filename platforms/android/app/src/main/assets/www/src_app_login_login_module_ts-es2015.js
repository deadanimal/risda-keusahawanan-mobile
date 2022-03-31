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
        this.showPassword = false;
        this.isActiveToggleTextPassword = true;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            no_kp: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            // device_name: new FormControl(),
        });
        this.init();
        let rememberMe = localStorage.getItem('loggedIn');
        console.log('rememberMe', rememberMe);
        if (rememberMe == 'true') {
            this.checked = true;
            let nokp = localStorage.getItem('nokp');
            let pass = localStorage.getItem('pass');
            this.form.patchValue({
                no_kp: nokp,
                password: pass
            });
        }
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
                if (this.checked == true) {
                    this.loginService.setLoggedInStatus(true);
                    localStorage.setItem('nokp', this.form.value.no_kp);
                    localStorage.setItem('pass', this.form.value.password);
                }
                else {
                    this.loginService.setLoggedInStatus(false);
                    localStorage.removeItem('nokp');
                    localStorage.removeItem('pass');
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
    toggleTextPassword() {
        this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword == true) ? false : true;
        this.showPassword = !this.showPassword;
    }
    getType() {
        return this.isActiveToggleTextPassword ? 'password' : 'text';
    }
    addValue(e) {
        this.checked = !this.checked;
        console.log(this.checked);
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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans:700,600,800|Lato:400\");\n#overlay {\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.8);\n  /* Black background with opacity */\n  z-index: -1;\n  /* Specify a stack order in case you're using a different order for other elements */\n  cursor: pointer;\n  /* Add a pointer on hover */\n}\n.element-logo {\n  background-image: url(\"/assets/img/reds-logo-no-background.png\");\n  background-position: 50% 50%;\n  background-size: cover;\n  height: 150px;\n  width: 250px;\n  z-index: 3;\n  margin: auto;\n}\n.selamat-datang {\n  font-family: \"Nunito Sans\";\n  font-style: normal;\n  font-weight: 800;\n  font-size: 36px;\n  text-align: center;\n  color: #000000;\n}\n.login-text {\n  font-family: \"Nunito Sans\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 26px;\n  line-height: 35px;\n  text-align: center;\n  color: #ff6600;\n}\nion-item {\n  border: 1px solid rgba(239, 141, 31, 0.1);\n  box-sizing: border-box;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);\n  border-radius: 27px;\n}\n@font-face {\n  font-family: \"NATS-Regular\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://fonts.animaapp.com/NATS-Regular\") format(\"truetype\");\n}\n.forget-password {\n  cursor: pointer;\n  letter-spacing: 0;\n  min-height: 16px;\n  min-width: 105px;\n  text-align: end;\n}\n.lupa {\n  font-family: \"Nunito Sans\";\n  font-style: normal;\n  font-weight: 800;\n  font-size: 14px;\n  line-height: 16px;\n  text-align: center;\n  color: #000000;\n}\nion-input {\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRlEsdUZBQUE7QUFwRlI7RUFDSSxlQUFBO0VBQWlCLG1DQUFBO0VBRWpCLFdBQUE7RUFBYSxzQ0FBQTtFQUNiLFlBQUE7RUFBYyx1Q0FBQTtFQUNkLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwwQ0FBQTtFQUE0QyxrQ0FBQTtFQUM1QyxXQUFBO0VBQWEsb0ZBQUE7RUFDYixlQUFBO0VBQWlCLDJCQUFBO0FBT3JCO0FBSkE7RUFDSSxnRUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBT0o7QUFKQTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxrQkFBQTtFQUVBLGNBQUE7QUFLSjtBQUZBO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FBSUo7QUFEQTtFQUVJLHlDQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0FBR0o7QUFEQTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNFQUFBO0FBSUo7QUFEQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBR0o7QUFDQTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBQUNKO0FBRUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI292ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gICAgLy8gZGlzcGxheTogYmxvY2s7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gICAgei1pbmRleDogLTE7IC8qIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHMgKi9cbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIEFkZCBhIHBvaW50ZXIgb24gaG92ZXIgKi9cbn1cblxuLmVsZW1lbnQtbG9nbyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvcmVkcy1sb2dvLW5vLWJhY2tncm91bmQucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICB6LWluZGV4OiAzO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLnNlbGFtYXQtZGF0YW5nIHtcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAvLyBsaW5lLWhlaWdodDogNDlweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmxvZ2luLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGNvbG9yOiAjZmY2NjAwO1xufVxuXG5pb24taXRlbSB7XG4gICAgLy8gYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzOSwgMTQxLCAzMSwgMC4xKTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiAyN3B4O1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTkFUUy1SZWd1bGFyXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiB1cmwoXCJodHRwczovL2ZvbnRzLmFuaW1hYXBwLmNvbS9OQVRTLVJlZ3VsYXJcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbi5mb3JnZXQtcGFzc3dvcmQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBtaW4taGVpZ2h0OiAxNnB4O1xuICAgIG1pbi13aWR0aDogMTA1cHg7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIC8vIGNvbG9yOiBncmVlbjtcbn1cblxuLmx1cGEge1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuXG5pb24taW5wdXQge1xuICAgIGhlaWdodDogNjBweDtcbn1cblxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvK1NhbnM6NzAwLDYwMCw4MDB8TGF0bzo0MDBcIik7XG4vLyBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG8rU2Fuczo3MDAsNjAwLDgwMHxMYXRvOjQwMFwiKTtcblxuLy8gaW9uLWJ1dHRvbltkaXNhYmxlZF0ge1xuLy8gICAgIC0taW9uLWNvbG9yLWJhc2U6ICM4NTg1ODUgIWltcG9ydGFudDtcbi8vIH1cbiJdfQ== */");

/***/ }),

/***/ 76770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<!-- /Users/ismailibrahim/Desktop/Risda/myApp/src/app/login -->\n<ion-content>\n\n  <div id=\"overlay\"\n    style=\"background-image:url('assets/img/login-background.png'); background-position: center; background-repeat: no-repeat; background-size: cover; height:100%; position:absolute\">\n\n  </div>\n  <!-- <div id=\"overlay\" style=\"position: absolute;\"></div> -->\n\n\n  <div style=\"z-index: 4; margin: 3%; margin-top:20%; align-items:center\">\n\n    <div class=\"element-logo\"></div>\n\n\n    <ion-text class=\"selamat-datang\">\n      <h1 class=\"selamat-datang nunitosans-extra-bold-green-haze-36px\">Selamat Datang</h1>\n    </ion-text>\n\n    <ion-text style=\"text-align: center;\">\n      <h2 class=\"login-text\">Log Masuk</h2>\n    </ion-text>\n    <br>\n\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"login()\">\n      <ion-item style=\"border-radius: 50px;\">\n        <ion-input type=\"text\" inputmode=\"numeric\" placeholder=\"No Kad Pengenalan\" name=\"nric\" formControlName='no_kp'\n          style=\"text-transform: none !important;\" (keypress)=\"numericOnly($event)\"></ion-input>\n      </ion-item>\n      <br>\n\n      <ion-item style=\"border-radius: 50px;\">\n        <ion-input type=\"password\" [type]=\"getType()\" placeholder=\"Kata Laluan\" name=\"password\"\n          formControlName='password' style=\"text-transform: none !important;\">\n        </ion-input>\n\n        <a class=\"type-toggle\" (click)=\"toggleTextPassword()\">\n          <ion-icon class=\"show-option\" color=\"dark\" [hidden]=\"showPassword\" name=\"eye-off-outline\" style=\"zoom:1.5;\">\n          </ion-icon>\n          <ion-icon class=\"hide-option\" color=\"dark\" [hidden]=\"!showPassword\" name=\"eye-outline\" style=\"zoom:1.5;\">\n          </ion-icon>\n        </a>\n      </ion-item>\n\n     \n      <br>\n\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"6\">\n            <div style=\"display: flex; align-items:center\">\n              <!-- <a class=\"forget-password nunitosans-extra-bold-green-haze-12px\"> -->\n\n              <ion-checkbox color=\"dark\" (ionChange)=\"addValue($event)\" [checked]=\"checked\"></ion-checkbox>\n              <ion-label style=\"margin-left: 10px;\">\n                <span class=\"lupa\">\n                  Ingat saya\n                </span>\n              </ion-label>\n\n              <!-- </a> -->\n            </div>\n          </ion-col>\n          <ion-col size=\"6\">\n            <div style=\"display: flex; justify-content:flex-end;  align-items:center\">\n              <a class=\"forget-password nunitosans-extra-bold-green-haze-12px\" (click)=\"forget_password()\"\n                style=\"text-decoration: none;\">\n                <span class=\"lupa\"> Lupa Kata Laluan?</span>\n              </a>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n      <br>\n\n      <div style=\"display: flex; justify-content:center\">\n        <ion-button expand=\"block\" color=\"dark\" type=\"submit\" shape=\"round\" [disabled]=\"form.invalid\" style=\"width:60%\">Log masuk\n        </ion-button>\n      </div>\n    </form>\n\n\n  </div>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts-es2015.js.map