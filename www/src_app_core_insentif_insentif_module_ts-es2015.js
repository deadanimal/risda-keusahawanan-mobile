(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_insentif_insentif_module_ts"],{

/***/ 42694:
/*!**********************************************************!*\
  !*** ./src/app/core/insentif/insentif-routing.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsentifPageRoutingModule": function() { return /* binding */ InsentifPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _insentif_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insentif.page */ 39520);




const routes = [
    {
        path: '',
        component: _insentif_page__WEBPACK_IMPORTED_MODULE_0__.InsentifPage
    }
];
let InsentifPageRoutingModule = class InsentifPageRoutingModule {
};
InsentifPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InsentifPageRoutingModule);



/***/ }),

/***/ 11750:
/*!**************************************************!*\
  !*** ./src/app/core/insentif/insentif.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsentifPageModule": function() { return /* binding */ InsentifPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _insentif_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insentif-routing.module */ 42694);
/* harmony import */ var _insentif_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insentif.page */ 39520);







let InsentifPageModule = class InsentifPageModule {
};
InsentifPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _insentif_routing_module__WEBPACK_IMPORTED_MODULE_0__.InsentifPageRoutingModule
        ],
        declarations: [_insentif_page__WEBPACK_IMPORTED_MODULE_1__.InsentifPage]
    })
], InsentifPageModule);



/***/ }),

/***/ 39520:
/*!************************************************!*\
  !*** ./src/app/core/insentif/insentif.page.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsentifPage": function() { return /* binding */ InsentifPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_insentif_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./insentif.page.html */ 71604);
/* harmony import */ var _insentif_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insentif.page.scss */ 15525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_insentif_insentif_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/insentif/insentif.service */ 35710);





let InsentifPage = class InsentifPage {
    constructor(insentifService) {
        this.insentifService = insentifService;
        this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
        this.user_id = window.sessionStorage.getItem("user_id");
    }
    ngOnInit() {
        console.log('usahawan_id', this.usahawan_id);
        console.log('user_id', this.user_id);
        this.getInsentif();
    }
    getInsentif() {
        this.insentifService.get(this.usahawan_id).subscribe((res) => {
            console.log("insentif", res);
            this.insentif = res;
        });
    }
};
InsentifPage.ctorParameters = () => [
    { type: src_app_services_insentif_insentif_service__WEBPACK_IMPORTED_MODULE_2__.InsentifService }
];
InsentifPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-insentif',
        template: _raw_loader_insentif_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_insentif_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InsentifPage);



/***/ }),

/***/ 35710:
/*!*******************************************************!*\
  !*** ./src/app/services/insentif/insentif.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsentifService": function() { return /* binding */ InsentifService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let InsentifService = class InsentifService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/insentif";
    }
    // post(data: any): Observable<any> {
    //   return this.http.post<any>(`${this.url}`, data);
    // }
    get(id) {
        return this.http.get(`${this.url}` + '/' + id);
    }
};
InsentifService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
InsentifService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], InsentifService);



/***/ }),

/***/ 15525:
/*!**************************************************!*\
  !*** ./src/app/core/insentif/insentif.page.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans:600,800\");\n.maklumat {\n  align-items: flex-start;\n  display: flex;\n  height: 31px;\n  min-width: 292px;\n}\n.x2000 {\n  letter-spacing: 0;\n  line-height: 14px;\n  margin-left: 134px;\n  min-height: 31px;\n  min-width: 72px;\n  text-align: right;\n}\n.kmi {\n  letter-spacing: 0;\n  line-height: 14px;\n  min-height: 31px;\n  min-width: 86px;\n  font-family: n;\n}\n.bold, h1 {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n.no-padding {\n  padding: 0px !important;\n}\n.rectangle-280 {\n  background-color: #00a651;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n.bg-white {\n  background-color: white;\n  display: flex;\n  height: 90%;\n  justify-content: center;\n  min-width: 100%;\n  border-radius: 0px 0px 40px 40px;\n  padding: 20px;\n}\n.rectangle-41 {\n  height: 575px;\n  margin-bottom: -8px;\n  width: 383px;\n}\n.content-box {\n  padding: 10px;\n  box-shadow: 0px 0px 3px 0px #acacac;\n  border-radius: 10px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc2VudGlmLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQlEsMEVBQUE7QUFoQlI7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFRjtBQUdBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBRjtBQUdBO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtBQUFGO0FBRUE7RUFDRSx1QkFBQTtBQUNGO0FBRUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7QUFDRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFBRiIsImZpbGUiOiJpbnNlbnRpZi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFrbHVtYXQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAzMXB4O1xuICBtaW4td2lkdGg6IDI5MnB4O1xufVxuXG4ueDIwMDAge1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMzRweDtcbiAgbWluLWhlaWdodDogMzFweDtcbiAgbWluLXdpZHRoOiA3MnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvK1NhbnM6NjAwLDgwMFwiKTtcblxuLmttaSB7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgbWluLWhlaWdodDogMzFweDtcbiAgbWluLXdpZHRoOiA4NnB4O1xuICBmb250LWZhbWlseTogbjtcbn1cblxuLmJvbGQsIGgxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnO1xufVxuLm5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnJlY3RhbmdsZS0yODAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNjUxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA5MCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNDBweCA0MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICAvLyBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4ucmVjdGFuZ2xlLTQxIHtcbiAgaGVpZ2h0OiA1NzVweDtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgd2lkdGg6IDM4M3B4O1xufVxuXG4uY29udGVudC1ib3gge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHggI2FjYWNhYztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ 71604:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/insentif/insentif.page.html ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"height: 80px;\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" href=\"/dashboard\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <!-- <ion-back-button defaultHref=\"/dashboard\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-text color=\"success\">\n      <h1>\n        <strong class=\"ion-text-uppercase\">\n          Insentif\n        </strong>\n      </h1>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <div class=\"rectangle-280\"></div>\n\n  <div class=\"bg-white\">\n\n    <ion-grid style=\"margin-top: 1%; margin-left:5%; margin-right:5%\">\n      <ion-row style=\"margin-bottom: 10px;\">\n        <ion-col>\n          <h5 class=\"bold\"> Maklumat<br />Insentif</h5>\n        </ion-col>\n        <ion-col class=\"ion-text-end\">\n          <h5 class=\"bold\">Jumlah<br />Bantuan</h5>\n        </ion-col>\n      </ion-row>\n      <ion-grid style=\"max-height: 70%; overflow: scroll;\">\n        <ion-row *ngFor=\"let insentif of insentif\" style=\"padding-bottom: 10px;\">\n          <ion-col>\n            <div class=\"content-box bold\" style=\"font-family: 'Nunito Sans';\">\n              <ion-grid style=\"padding: 0%;\">\n                <ion-row style=\"padding: 0%;\">\n                  <ion-col size=\"8\">\n                    <ion-text>\n                      {{insentif.nama_insentif}}\n                    </ion-text>\n                    <br>\n                    <ion-text color=\"success\">\n                      Tahun Terima: {{insentif.tahun_terima_insentif}}\n                    </ion-text>\n                  </ion-col>\n                  <ion-col size=\"4\" style=\"padding: 0%;\">\n                    <div class=\"content-box\"\n                      style=\"height: 100%; display:flex; align-items:center; background-color:#EDEDED\">\n                      <ion-text color=\"success\">\n                        RM {{insentif.nilai_insentif}}\n                      </ion-text>\n\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-grid>\n\n  </div>\n\n  <!-- <div class=\"kmi nunitosans-extra-bold-te-papa-green-18px\">Maklumat<br />Insentif</div>\n\n  <div class=\"body\">\n    <div class=\"maklumatnunitosans-extra-bold-te-papa-green-18px\">\n      <div class=\"kmi\">Maklumat<br />Insentif</div>\n      <div class=\"x2000\">Jumlah<br />Bantuan</div>\n    </div>\n\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_core_insentif_insentif_module_ts-es2015.js.map