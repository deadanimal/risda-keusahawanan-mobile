(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_auth_reset-password_reset-password_module_ts"],{

/***/ 9216:
/*!**********************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPageRoutingModule": () => (/* binding */ ResetPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.page */ 8271);




const routes = [
    {
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordPage
    }
];
let ResetPasswordPageRoutingModule = class ResetPasswordPageRoutingModule {
};
ResetPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResetPasswordPageRoutingModule);



/***/ }),

/***/ 9987:
/*!**************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPageModule": () => (/* binding */ ResetPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password-routing.module */ 9216);
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.page */ 8271);







let ResetPasswordPageModule = class ResetPasswordPageModule {
};
ResetPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordPageRoutingModule
        ],
        declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_1__.ResetPasswordPage]
    })
], ResetPasswordPageModule);



/***/ }),

/***/ 8271:
/*!************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPage": () => (/* binding */ ResetPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./reset-password.page.html */ 7005);
/* harmony import */ var _reset_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.page.scss */ 4567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ResetPasswordPage = class ResetPasswordPage {
    constructor() { }
    ngOnInit() {
    }
};
ResetPasswordPage.ctorParameters = () => [];
ResetPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-reset-password',
        template: _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_reset_password_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ResetPasswordPage);



/***/ }),

/***/ 4567:
/*!**************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans:700,600,800|Lato:400\");\n#overlay {\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.8);\n  /* Black background with opacity */\n  z-index: -1;\n  /* Specify a stack order in case you're using a different order for other elements */\n  cursor: pointer;\n  /* Add a pointer on hover */\n}\n.element-logo {\n  background-image: url(\"/assets/img/risda_logo.png\");\n  background-position: 50% 50%;\n  background-size: cover;\n  height: 94px;\n  width: 97px;\n  z-index: 3;\n  margin: auto;\n}\n.welcome-back {\n  letter-spacing: 0;\n  min-height: 49px;\n  min-width: 278px;\n  text-align: center;\n  color: green;\n}\n@font-face {\n  font-family: \"NATS-Regular\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://fonts.animaapp.com/NATS-Regular\") format(\"truetype\");\n}\n.forget-password {\n  cursor: pointer;\n  letter-spacing: 0;\n  min-height: 16px;\n  min-width: 105px;\n  text-align: end;\n  color: green;\n}\nion-input {\n  height: 60px;\n}\n.my-custom-class .alert-wrapper {\n  background: #e5e5e5;\n}\n.yes-custom {\n  background-color: green;\n}\n.button {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRFEsdUZBQUE7QUFwRFI7RUFDSSxlQUFBO0VBQWlCLG1DQUFBO0VBRWpCLFdBQUE7RUFBYSxzQ0FBQTtFQUNiLFlBQUE7RUFBYyx1Q0FBQTtFQUNkLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwwQ0FBQTtFQUE0QyxrQ0FBQTtFQUM1QyxXQUFBO0VBQWEsb0ZBQUE7RUFDYixlQUFBO0VBQWlCLDJCQUFBO0FBT3JCO0FBSkE7RUFDSSxtREFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBT0o7QUFKQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQU9KO0FBSkE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzRUFBQTtBQU9KO0FBSkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFNSjtBQUhBO0VBQ0ksWUFBQTtBQU1KO0FBQUE7RUFDSSxtQkFBQTtBQUdKO0FBQUE7RUFDSSx1QkFBQTtBQUdKO0FBQ0E7RUFDSSxtQkFBQTtBQUVKIiwiZmlsZSI6InJlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNvdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICAgIC8vIGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICAgIHotaW5kZXg6IC0xOyAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiBBZGQgYSBwb2ludGVyIG9uIGhvdmVyICovXG59XG5cbi5lbGVtZW50LWxvZ28ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3Jpc2RhX2xvZ28ucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDk0cHg7XG4gICAgd2lkdGg6IDk3cHg7XG4gICAgei1pbmRleDogMztcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi53ZWxjb21lLWJhY2sge1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDQ5cHg7XG4gICAgbWluLXdpZHRoOiAyNzhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJOQVRTLVJlZ3VsYXJcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IHVybChcImh0dHBzOi8vZm9udHMuYW5pbWFhcHAuY29tL05BVFMtUmVndWxhclwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuLmZvcmdldC1wYXNzd29yZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDE2cHg7XG4gICAgbWluLXdpZHRoOiAxMDVweDtcbiAgICB0ZXh0LWFsaWduOmVuZDtcbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbmlvbi1pbnB1dHtcbiAgICBoZWlnaHQ6IDYwcHhcbn1cblxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvK1NhbnM6NzAwLDYwMCw4MDB8TGF0bzo0MDBcIik7XG5cblxuLm15LWN1c3RvbS1jbGFzcyAuYWxlcnQtd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbiAgfVxuXG4ueWVzLWN1c3RvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgXG59XG5cbi5idXR0b24ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ 7005:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset-password/reset-password.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>Log Masuk Kali Pertama</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n  <div id=\"overlay\"\n    style=\"background-image:url('/assets/img/bg1.jpg'); background-position: center; background-repeat: no-repeat; background-size: cover; height:100%; position:absolute\">\n\n  </div>\n  <div id=\"overlay\" style=\"position: absolute;\"></div>\n\n\n  <div class=\"\" style=\"z-index: 4; margin: 3%; margin-top:20%; align-items:center\">\n\n    <div class=\"element-logo\"></div>\n    <br><br><br>\n\n    <ion-text style=\"text-align: center;\">\n      <h2>Lupa Kata Laluan</h2>\n    </ion-text>\n\n    <br>\n\n    <form action=\"\" class=\"ion-justify-content-center\">\n\n      <ion-grid>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"12\">\n            <div>\n              <ion-item style=\"border-radius: 50px;\">\n                <ion-input placeholder=\"Kata Laluan Baru\"></ion-input>\n              </ion-item>\n              <br><br>\n\n              <ion-item style=\"border-radius: 50px;\">\n                <ion-input placeholder=\"Ulang Kata Laluan\"></ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n        <br><br>\n        <ion-row class=\"ion-justify-content-center ion-margin-top\">\n          \n          <ion-button class=\"button ion-text-uppercase\" color=\"success\" size=\"small\">Tukar Kata Laluan</ion-button>\n        \n        </ion-row>\n\n      </ion-grid>\n\n     \n    </form>\n    \n  </div>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_reset-password_reset-password_module_ts.js.map