(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_pnl_pnl_module_ts"],{

/***/ 6788:
/*!************************************************!*\
  !*** ./src/app/core/pnl/pnl-routing.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PnlPageRoutingModule": function() { return /* binding */ PnlPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pnl_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pnl.page */ 96675);




const routes = [
    {
        path: '',
        component: _pnl_page__WEBPACK_IMPORTED_MODULE_0__.PnlPage
    }
];
let PnlPageRoutingModule = class PnlPageRoutingModule {
};
PnlPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PnlPageRoutingModule);



/***/ }),

/***/ 89771:
/*!****************************************!*\
  !*** ./src/app/core/pnl/pnl.module.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PnlPageModule": function() { return /* binding */ PnlPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _pnl_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pnl-routing.module */ 6788);
/* harmony import */ var _pnl_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pnl.page */ 96675);







let PnlPageModule = class PnlPageModule {
};
PnlPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pnl_routing_module__WEBPACK_IMPORTED_MODULE_0__.PnlPageRoutingModule
        ],
        declarations: [_pnl_page__WEBPACK_IMPORTED_MODULE_1__.PnlPage]
    })
], PnlPageModule);



/***/ }),

/***/ 96675:
/*!**************************************!*\
  !*** ./src/app/core/pnl/pnl.page.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PnlPage": function() { return /* binding */ PnlPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_pnl_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pnl.page.html */ 72327);
/* harmony import */ var _pnl_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pnl.page.scss */ 19251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let PnlPage = class PnlPage {
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
PnlPage.ctorParameters = () => [];
PnlPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pnl',
        template: _raw_loader_pnl_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pnl_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PnlPage);



/***/ }),

/***/ 19251:
/*!****************************************!*\
  !*** ./src/app/core/pnl/pnl.page.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bold,\nh1 {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n\n.no-padding {\n  padding: 0px !important;\n}\n\n.no-margin {\n  margin: 0px !important;\n}\n\n.rectangle-280 {\n  background-color: #00a651;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n\n.bg-white {\n  background-color: white;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  min-width: 100%;\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.rectangle-1 {\n  background-color: #00a651;\n  border-radius: 18px;\n  box-shadow: 0px 4px 4px #00000040;\n  font-family: \"Nunito Sans\";\n  height: auto;\n  height: initial;\n  width: 100%;\n  color: white;\n  padding-left: 5%;\n  padding-right: 5%;\n  padding-top: 2%;\n  margin-bottom: 5%;\n}\n\n.success {\n  color: #00a651;\n}\n\n.card {\n  background-color: #EDEDED;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBubC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksaUJBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUNBO0VBQ0ksdUJBQUE7QUFFSjs7QUFDQTtFQUNJLHNCQUFBO0FBRUo7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFBQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBbUJBO0VBQ0ksY0FBQTtBQWhCSjs7QUFtQkE7RUFDSSx5QkFBQTtBQWhCSiIsImZpbGUiOiJwbmwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvbGQsXG5oMSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcbn1cbi5uby1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLm5vLW1hcmdpbiB7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnJlY3RhbmdsZS0yODAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGE2NTE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLmJnLXdoaXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMHB4IDBweCA0MHB4IDQwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICAvLyBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucmVjdGFuZ2xlLTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGE2NTE7XG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAjMDAwMDAwNDA7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcbiAgICBoZWlnaHQ6IGluaXRpYWw7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgcGFkZGluZy1yaWdodDogNSU7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4vLyBpb24taXRlbSxcbi8vIC50ZXN0IHtcbi8vICAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNzVyZW0gIWltcG9ydGFudDtcbi8vICAgICAtLXBhZGRpbmctdG9wOiAwLjYyNXJlbSAhaW1wb3J0YW50O1xuLy8gICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM4ODk4YWE7XG4vLyAgICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNFREVERUQgIWltcG9ydGFudDtcbi8vICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMXJlbSAhaW1wb3J0YW50O1xuLy8gICAgIGJveC1zaGFkb3c6IDAgM3B4IDJweCByZ2JhKDIzMywgMjM2LCAyMzksIDAuMDUpICFpbXBvcnRhbnQ7XG4vLyAgICAgbGluZS1oZWlnaHQ6IDEuNSAhaW1wb3J0YW50O1xuLy8gICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XG4vLyAgICAgY29sb3I6ICMwMGE2NTE7XG4gICAgXG4vLyB9XG5cbi5zdWNjZXNze1xuICAgIGNvbG9yOiAjMDBhNjUxO1xufVxuXG4uY2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFREVEO1xufVxuXG4iXX0= */");

/***/ }),

/***/ 72327:
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/pnl/pnl.page.html ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"height: 80px;\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" href=\"/dashboard\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <!-- <ion-back-button defaultHref=\"/dashboard\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-text color=\"success\">\n      <h3>\n        <strong class=\"ion-text-uppercase bold\">\n          PENYATA UNTUNG/RUGI\n        </strong>\n      </h3>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <!-- <div class=\"rectangle-280\"></div> -->\n\n  <div class=\"bg-white\">\n\n    <div style=\"width: 100%; height:23%;\">\n\n      <ion-card>\n        <ion-card-content class=\"no-padding test\" >\n          <ion-item>\n            <ion-label class=\"bold success\">Bulan</ion-label>\n            <!-- <ion-input placeholder=\"placeholder\"></ion-input> -->\n            <ion-datetime class=\"success\" display-format=\"MMMM\" picker-format=\"MMMM\" [(ngModel)]=\"month\"></ion-datetime>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-content class=\"no-padding test\">\n          <ion-item>\n            <ion-label class=\"bold success\">Tahun</ion-label>\n            <ion-datetime class=\"success\" display-format=\"YYYY\" picker-format=\"YYYY\" [(ngModel)]=\"year\"></ion-datetime>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n      \n\n    </div>\n\n    <div style=\"width: 100%; height:77%; overflow:scroll\">\n\n      <div class=\"rectangle-1\" *ngFor=\"let bukutunai of buku_tunai\">\n        <h3 class=\"bold\">PENYATA <br> UNTUNG RUGI</h3>\n        <h5 class=\"no-margin\">{{bukutunai.bulan}} 2020</h5>\n\n        <div style=\"width: 100%; height:30%;  display:flex; justify-content:flex-end;\">\n          <img src=\"assets/icon/download-excel-button-white.png\" alt=\"\" height=\"35px\" (click)=\"printExcel()\">\n\n          <img src=\"assets/icon/download-PDF-button-white.png\" alt=\"\" height=\"35px\" (click)=\"printPdf()\">\n\n          <img src=\"assets/icon/SHARE-BUTTON-ICON.png\" alt=\"\" height=\"35px\" (click)=\"share()\">\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_core_pnl_pnl_module_ts-es2015.js.map