(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




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

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







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
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 6770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 1339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login/login.service */ 8762);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);





// import { AuthService } from '../services/auth.service';



let LoginPage = class LoginPage {
    constructor(loginService, loadingCtrl, router) {
        this.loginService = loginService;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
    }
    ngOnInit() {
        // const loading = await this.loadingCtrl.create({message:'Loading...'});
        // loading.present();
        // this.users$ = this.loginService.getUser().pipe(
        //   tap((users)=>{
        //     // loading.dismiss();
        //     console.log(users);
        //     return users;
        //   })
        // );
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            no_kp: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
    }
    login() {
        // console.log(this.form.value);
        this.loginService.check1user(this.form.value).subscribe((res) => {
            console.log(res);
            if (Object.keys(res).length === 0) {
                console.log("failed");
            }
            else {
                console.log("res id", res.id);
                var setsession_user_id = window.sessionStorage.setItem("user_id", res.id);
                var setsession_usahawan_id = window.sessionStorage.setItem("usahawan_id", res.id);
                // var getsession = window.sessionStorage.getItem("user_id");
                // console.log("user_id",getsession);
                // var getsession = window.sessionStorage.getItem("usahawan_id");
                // console.log("usahawan_id",getsession);
                console.log("login success");
                this.router.navigate(['/profile']);
                // this.router.navigate(['first-time-login']);
                // var setsession = window.sessionStorage.setItem("animals", "cat");
                // var getsession = window.sessionStorage.getItem("animals");
                // console.log(getsession);
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 1339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans:700,600,800|Lato:400\");\n#overlay {\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.8);\n  /* Black background with opacity */\n  z-index: -1;\n  /* Specify a stack order in case you're using a different order for other elements */\n  cursor: pointer;\n  /* Add a pointer on hover */\n}\n.element-logo {\n  background-image: url(\"/assets/img/risda_logo.png\");\n  background-position: 50% 50%;\n  background-size: cover;\n  height: 94px;\n  width: 97px;\n  z-index: 3;\n  margin: auto;\n}\n.welcome-back {\n  letter-spacing: 0;\n  min-height: 49px;\n  min-width: 278px;\n  text-align: center;\n  color: green;\n}\n@font-face {\n  font-family: \"NATS-Regular\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://fonts.animaapp.com/NATS-Regular\") format(\"truetype\");\n}\n.forget-password {\n  cursor: pointer;\n  letter-spacing: 0;\n  min-height: 16px;\n  min-width: 105px;\n  text-align: end;\n  color: green;\n}\nion-input {\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRFEsdUZBQUE7QUFyRFI7RUFDSSxlQUFBO0VBQWlCLG1DQUFBO0VBRWpCLFdBQUE7RUFBYSxzQ0FBQTtFQUNiLFlBQUE7RUFBYyx1Q0FBQTtFQUNkLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwwQ0FBQTtFQUE0QyxrQ0FBQTtFQUM1QyxXQUFBO0VBQWEsb0ZBQUE7RUFDYixlQUFBO0VBQWlCLDJCQUFBO0FBT3JCO0FBSkE7RUFDSSxtREFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBT0o7QUFKQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQU9KO0FBSkE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzRUFBQTtBQU9KO0FBSkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFNSjtBQUhBO0VBQ0ksWUFBQTtBQU1KIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNvdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICAgIC8vIGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICAgIHotaW5kZXg6IC0xOyAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiBBZGQgYSBwb2ludGVyIG9uIGhvdmVyICovXG59XG5cbi5lbGVtZW50LWxvZ28ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3Jpc2RhX2xvZ28ucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDk0cHg7XG4gICAgd2lkdGg6IDk3cHg7XG4gICAgei1pbmRleDogMztcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi53ZWxjb21lLWJhY2sge1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDQ5cHg7XG4gICAgbWluLXdpZHRoOiAyNzhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJOQVRTLVJlZ3VsYXJcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IHVybChcImh0dHBzOi8vZm9udHMuYW5pbWFhcHAuY29tL05BVFMtUmVndWxhclwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuLmZvcmdldC1wYXNzd29yZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDE2cHg7XG4gICAgbWluLXdpZHRoOiAxMDVweDtcbiAgICB0ZXh0LWFsaWduOmVuZDtcbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbmlvbi1pbnB1dHtcbiAgICBoZWlnaHQ6IDYwcHhcbn1cblxuXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG8rU2Fuczo3MDAsNjAwLDgwMHxMYXRvOjQwMFwiKTtcbi8vIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bytTYW5zOjcwMCw2MDAsODAwfExhdG86NDAwXCIpO1xuIl19 */");

/***/ }),

/***/ 6770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n  <div id=\"overlay\"\n    style=\"background-image:url('/assets/img/bg1.jpg'); background-position: center; background-repeat: no-repeat; background-size: cover; height:100%; position:absolute\">\n\n  </div>\n  <div id=\"overlay\" style=\"position: absolute;\"></div>\n\n\n  <div style=\"z-index: 4; margin: 3%; margin-top:20%; align-items:center\">\n\n    <div class=\"element-logo\"></div>\n\n    <!-- <ion-text >\n      <h1 class=\"welcome-back nunitosans-extra-bold-green-haze-36px\">Selamat Datang</h1>\n    </ion-text> -->\n    <ion-text class=\"welcome-back\">\n      <h1 class=\"welcome-back nunitosans-extra-bold-green-haze-36px\">Selamat Datang</h1>\n    </ion-text>\n\n    <ion-text style=\"text-align: center;\">\n      <h2>Log Masuk</h2>\n    </ion-text>\n    <br>\n\n    <!-- <h1 class=\"welcome-backnats-regular-normal-log-cabin-26px ion-text-center\">Log Masuk Kali Pertama</h1> -->\n\n    <form [formGroup]=\"form\">\n      <ion-item style=\"border-radius: 50px;\">\n        <!-- <ion-label position=\"floating\"></ion-label> -->\n        <ion-input placeholder=\"No Kad Pengenalan\" name=\"nric\" formControlName='no_kp'></ion-input>\n      </ion-item>\n      <br>\n\n      <ion-item style=\"border-radius: 50px;\">\n        <!-- <ion-label position=\"floating\">Kata Laluan</ion-label> -->\n        <ion-input type=\"password\" placeholder=\"Kata Laluan\" name=\"password\" formControlName='password'>\n        </ion-input>\n      </ion-item>\n      <br>\n      <a href=\"/forgot-password\" style=\"text-decoration: none;\">\n        <div class=\"forget-password nunitosans-extra-bold-green-haze-12px\">Lupa Kata Laluan?</div>\n      </a>\n      <br>\n\n      <ion-button expand=\"block\" color=\"success\" (click)=\"login()\" [disabled]=\"form.invalid\">Log masuk</ion-button>\n    </form>\n\n\n  </div>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map