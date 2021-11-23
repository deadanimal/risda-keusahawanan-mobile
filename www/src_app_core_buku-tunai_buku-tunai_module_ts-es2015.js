(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_buku-tunai_buku-tunai_module_ts"],{

/***/ 37122:
/*!**************************************************************!*\
  !*** ./src/app/core/buku-tunai/buku-tunai-routing.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BukuTunaiPageRoutingModule": function() { return /* binding */ BukuTunaiPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _buku_tunai_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buku-tunai.page */ 51916);




const routes = [
    {
        path: '',
        component: _buku_tunai_page__WEBPACK_IMPORTED_MODULE_0__.BukuTunaiPage
    }
];
let BukuTunaiPageRoutingModule = class BukuTunaiPageRoutingModule {
};
BukuTunaiPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BukuTunaiPageRoutingModule);



/***/ }),

/***/ 62967:
/*!******************************************************!*\
  !*** ./src/app/core/buku-tunai/buku-tunai.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BukuTunaiPageModule": function() { return /* binding */ BukuTunaiPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _buku_tunai_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buku-tunai-routing.module */ 37122);
/* harmony import */ var _buku_tunai_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buku-tunai.page */ 51916);







let BukuTunaiPageModule = class BukuTunaiPageModule {
};
BukuTunaiPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _buku_tunai_routing_module__WEBPACK_IMPORTED_MODULE_0__.BukuTunaiPageRoutingModule
        ],
        declarations: [_buku_tunai_page__WEBPACK_IMPORTED_MODULE_1__.BukuTunaiPage]
    })
], BukuTunaiPageModule);



/***/ }),

/***/ 51916:
/*!****************************************************!*\
  !*** ./src/app/core/buku-tunai/buku-tunai.page.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BukuTunaiPage": function() { return /* binding */ BukuTunaiPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_buku_tunai_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./buku-tunai.page.html */ 95544);
/* harmony import */ var _buku_tunai_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buku-tunai.page.scss */ 71980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let BukuTunaiPage = class BukuTunaiPage {
    constructor() {
        this.month = new Date().toISOString();
        this.year = new Date().toISOString();
        this.buku_tunai = [
            { bulan: "Januari", tahun: "2020" },
            { bulan: "February", tahun: "2020" },
            { bulan: "March", tahun: "2020" },
            { bulan: "April", tahun: "2020" },
            { bulan: "May", tahun: "2020" },
            { bulan: "June", tahun: "2020" },
            { bulan: "July", tahun: "2020" },
        ];
    }
    ngOnInit() {
    }
    printExcel() {
        console.log("print excel");
    }
    printPdf() {
        console.log("print pdf");
    }
    share() {
        console.log("share");
    }
};
BukuTunaiPage.ctorParameters = () => [];
BukuTunaiPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-buku-tunai',
        template: _raw_loader_buku_tunai_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_buku_tunai_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BukuTunaiPage);



/***/ }),

/***/ 71980:
/*!******************************************************!*\
  !*** ./src/app/core/buku-tunai/buku-tunai.page.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bold,\nh1 {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n\n.no-padding {\n  padding: 0px !important;\n}\n\n.no-margin {\n  margin: 0px !important;\n}\n\n.rectangle-280 {\n  background-color: #00a651;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n\n.bg-white {\n  background-color: white;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  min-width: 100%;\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.rectangle-1 {\n  background-color: #00a651;\n  border-radius: 18px;\n  box-shadow: 0px 4px 4px #00000040;\n  font-family: \"Nunito Sans\";\n  height: 125px;\n  width: 100%;\n  color: white;\n  padding-left: 5%;\n  padding-right: 5%;\n  padding-top: 2%;\n  margin-bottom: 5%;\n}\n\n.success {\n  color: #00a651;\n}\n\n.card {\n  background-color: #EDEDED;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1a3UtdHVuYWkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGlCQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFDQTtFQUNJLHVCQUFBO0FBRUo7O0FBQ0E7RUFDSSxzQkFBQTtBQUVKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBbUJBO0VBQ0ksY0FBQTtBQWhCSjs7QUFtQkE7RUFDSSx5QkFBQTtBQWhCSiIsImZpbGUiOiJidWt1LXR1bmFpLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2xkLFxuaDEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XG59XG4ubm8tcGFkZGluZyB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uby1tYXJnaW4ge1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZWN0YW5nbGUtMjgwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNjUxO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogLTE7XG59XG5cbi5iZy13aGl0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNDBweCA0MHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgLy8gb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnJlY3RhbmdsZS0xIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNjUxO1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggIzAwMDAwMDQwO1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XG4gICAgaGVpZ2h0OiAxMjVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi8vIGlvbi1pdGVtLFxuLy8gLnRlc3Qge1xuLy8gICAgIC0tcGFkZGluZy1zdGFydDogMC43NXJlbSAhaW1wb3J0YW50O1xuLy8gICAgIC0tcGFkZGluZy10b3A6IDAuNjI1cmVtICFpbXBvcnRhbnQ7XG4vLyAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzg4OThhYTtcbi8vICAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VERURFRCAhaW1wb3J0YW50O1xuLy8gICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxcmVtICFpbXBvcnRhbnQ7XG4vLyAgICAgYm94LXNoYWRvdzogMCAzcHggMnB4IHJnYmEoMjMzLCAyMzYsIDIzOSwgMC4wNSkgIWltcG9ydGFudDtcbi8vICAgICBsaW5lLWhlaWdodDogMS41ICFpbXBvcnRhbnQ7XG4vLyAgICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcbi8vICAgICBjb2xvcjogIzAwYTY1MTtcbiAgICBcbi8vIH1cblxuLnN1Y2Nlc3N7XG4gICAgY29sb3I6ICMwMGE2NTE7XG59XG5cbi5jYXJke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFREVERUQ7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ 95544:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/buku-tunai/buku-tunai.page.html ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"height: 80px;\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" href=\"/dashboard\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <!-- <ion-back-button defaultHref=\"/dashboard\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-text color=\"success\">\n      <h1>\n        <strong class=\"ion-text-uppercase bold\">\n          BUKU TUNAI\n        </strong>\n      </h1>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <!-- <div class=\"rectangle-280\"></div> -->\n\n  <div class=\"bg-white\">\n\n    <div style=\"width: 100%; height:23%;\">\n\n      <ion-card>\n        <ion-card-content class=\"no-padding test\" >\n          <ion-item>\n            <ion-label class=\"bold success\">Bulan</ion-label>\n            <!-- <ion-input placeholder=\"placeholder\"></ion-input> -->\n            <ion-datetime class=\"success\" display-format=\"MMMM\" picker-format=\"MMMM\" [(ngModel)]=\"month\"></ion-datetime>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-content class=\"no-padding test\">\n          <ion-item>\n            <ion-label class=\"bold success\">Tahun</ion-label>\n            <ion-datetime class=\"success\" display-format=\"YYYY\" picker-format=\"YYYY\" [(ngModel)]=\"year\"></ion-datetime>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n      \n\n    </div>\n\n    <div style=\"width: 100%; height:77%; overflow:scroll\">\n\n      <div class=\"rectangle-1\" *ngFor=\"let bukutunai of buku_tunai\">\n        <h3 class=\"bold\">BUKU TUNAI</h3>\n        <h5 class=\"no-margin\">{{bukutunai.bulan}} 2020</h5>\n\n        <div style=\"width: 100%; height:30%;  display:flex; justify-content:flex-end;\">\n          <img src=\"assets/icon/download-excel-button-white.png\" alt=\"\" height=\"100%\" (click)=\"printExcel()\">\n\n          <img src=\"assets/icon/download-PDF-button-white.png\" alt=\"\" height=\"100%\" (click)=\"printPdf()\">\n\n          <img src=\"assets/icon/SHARE-BUTTON-ICON.png\" alt=\"\" height=\"100%\" (click)=\"share()\">\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_core_buku-tunai_buku-tunai_module_ts-es2015.js.map