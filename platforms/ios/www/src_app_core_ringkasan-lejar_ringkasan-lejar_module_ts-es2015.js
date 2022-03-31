(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_ringkasan-lejar_ringkasan-lejar_module_ts"],{

/***/ 28692:
/*!************************************************************************!*\
  !*** ./src/app/core/ringkasan-lejar/ringkasan-lejar-routing.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RingkasanLejarPageRoutingModule": function() { return /* binding */ RingkasanLejarPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ringkasan_lejar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ringkasan-lejar.page */ 37925);




const routes = [
    {
        path: '',
        component: _ringkasan_lejar_page__WEBPACK_IMPORTED_MODULE_0__.RingkasanLejarPage
    }
];
let RingkasanLejarPageRoutingModule = class RingkasanLejarPageRoutingModule {
};
RingkasanLejarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RingkasanLejarPageRoutingModule);



/***/ }),

/***/ 26932:
/*!****************************************************************!*\
  !*** ./src/app/core/ringkasan-lejar/ringkasan-lejar.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RingkasanLejarPageModule": function() { return /* binding */ RingkasanLejarPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _ringkasan_lejar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ringkasan-lejar-routing.module */ 28692);
/* harmony import */ var _ringkasan_lejar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ringkasan-lejar.page */ 37925);







let RingkasanLejarPageModule = class RingkasanLejarPageModule {
};
RingkasanLejarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ringkasan_lejar_routing_module__WEBPACK_IMPORTED_MODULE_0__.RingkasanLejarPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_ringkasan_lejar_page__WEBPACK_IMPORTED_MODULE_1__.RingkasanLejarPage]
    })
], RingkasanLejarPageModule);



/***/ }),

/***/ 37925:
/*!**************************************************************!*\
  !*** ./src/app/core/ringkasan-lejar/ringkasan-lejar.page.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RingkasanLejarPage": function() { return /* binding */ RingkasanLejarPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ringkasan_lejar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ringkasan-lejar.page.html */ 82451);
/* harmony import */ var _ringkasan_lejar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ringkasan-lejar.page.scss */ 55545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_pdfExcel_pdf_excel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/pdfExcel/pdf-excel.service */ 68135);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 69526);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);









let RingkasanLejarPage = class RingkasanLejarPage {
    // bulan = new Date()
    constructor(formBuilder, pdfExcelService, iab, router) {
        this.formBuilder = formBuilder;
        this.pdfExcelService = pdfExcelService;
        this.iab = iab;
        this.router = router;
        this.date = new Date();
        this.user_id = window.sessionStorage.getItem("user_id");
        this.listYear = [];
        this.listMonth = [
            { value: "1", name: "January" },
            { value: "2", name: "February" },
            { value: "3", name: "March" },
            { value: "4", name: "April" },
            { value: "5", name: "May" },
            { value: "6", name: "June" },
            { value: "7", name: "July" },
            { value: "8", name: "August" },
            { value: "9", name: "September" },
            { value: "10", name: "October" },
            { value: "11", name: "November" },
            { value: "12", name: "December" },
        ];
        this.form = this.formBuilder.group({
            id: ['',],
            bulan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            tahun: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        });
    }
    ngOnInit() {
        // console.log("AAAAA", this.date.getMonth() + 1);
        // console.log("BBB", this.date.getFullYear());
        this.month = this.date.getMonth() + 1;
        this.year = Number(this.date.getFullYear());
        for (let i = 0; i <= 30; i++) {
            this.listYear.push(this.year);
            this.year = this.year - 1;
        }
    }
    logForm() {
        console.log(this.form.value);
    }
    printExcelCustom() {
        this.form.value.id = this.user_id;
        console.log(this.form.value);
        this.pdfExcelService.lejarExcel(this.form.value).subscribe((res) => {
            console.log("res", res);
            let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'storage/' + res;
            console.log(url);
            // window.open(url, "_blank");
            const browser = this.iab.create(url, '_system');
        });
    }
    printPdfCustom() {
        this.form.value.id = this.user_id;
        console.log(this.form.value);
        this.pdfExcelService.lejarPdf(this.form.value).subscribe((res) => {
            console.log("res", res);
            let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'storage/' + res;
            console.log(url);
            // window.open(url, "_blank");
            const browser = this.iab.create(url, '_system');
        });
    }
    printExcel(bulan) {
        this.form.value.id = this.user_id;
        this.form.value.bulan = bulan;
        this.form.value.tahun = this.date.getFullYear();
        console.log(this.form.value);
        this.pdfExcelService.lejarExcel(this.form.value).subscribe((res) => {
            console.log("res", res);
            let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'storage/' + res;
            console.log(url);
            // window.open(url, "_blank");
            const browser = this.iab.create(url, '_system');
        });
    }
    printPdf(bulan) {
        this.form.value.id = this.user_id;
        this.form.value.bulan = bulan;
        this.form.value.tahun = this.date.getFullYear();
        console.log(this.form.value);
        this.pdfExcelService.lejarPdf(this.form.value).subscribe((res) => {
            console.log("res", res);
            let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'storage/' + res;
            console.log(url);
            // window.open(url, "_blank");
            const browser = this.iab.create(url, '_system');
        });
    }
    share() {
        console.log("share");
    }
    dashboard() {
        this.router.navigate(['/dashboard']);
    }
};
RingkasanLejarPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_pdfExcel_pdf_excel_service__WEBPACK_IMPORTED_MODULE_2__.PdfExcelService },
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppBrowser },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
RingkasanLejarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-ringkasan-lejar',
        template: _raw_loader_ringkasan_lejar_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ringkasan_lejar_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RingkasanLejarPage);



/***/ }),

/***/ 55545:
/*!****************************************************************!*\
  !*** ./src/app/core/ringkasan-lejar/ringkasan-lejar.page.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bold,\nh1 {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n\n.no-padding {\n  padding: 0px !important;\n}\n\n.no-margin {\n  margin: 0px !important;\n}\n\n.rectangle-280 {\n  background-color: #00a651;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n\n.bg-white {\n  background-color: white;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  min-width: 100%;\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.rectangle-1 {\n  background-color: #FF6600;\n  border-radius: 18px;\n  box-shadow: 0px 4px 4px #00000040;\n  font-family: \"Nunito Sans\";\n  height: 125px;\n  width: 100%;\n  padding-left: 5%;\n  padding-right: 5%;\n  padding-top: 2%;\n  margin-bottom: 5%;\n}\n\n.success {\n  color: #00a651;\n}\n\n.card {\n  background-color: #EDEDED;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJpbmdrYXNhbi1sZWphci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksaUJBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUNBO0VBQ0ksdUJBQUE7QUFFSjs7QUFDQTtFQUNJLHNCQUFBO0FBRUo7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBRUEsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQURKOztBQW9CQTtFQUNJLGNBQUE7QUFqQko7O0FBb0JBO0VBQ0kseUJBQUE7QUFqQkoiLCJmaWxlIjoicmluZ2thc2FuLWxlamFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2xkLFxuaDEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XG59XG4ubm8tcGFkZGluZyB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uby1tYXJnaW4ge1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZWN0YW5nbGUtMjgwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNjUxO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogLTE7XG59XG5cbi5iZy13aGl0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNDBweCA0MHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgLy8gb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnJlY3RhbmdsZS0xIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2NjAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggIzAwMDAwMDQwO1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XG4gICAgaGVpZ2h0OiAxMjVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi8vIGlvbi1pdGVtLFxuLy8gLnRlc3Qge1xuLy8gICAgIC0tcGFkZGluZy1zdGFydDogMC43NXJlbSAhaW1wb3J0YW50O1xuLy8gICAgIC0tcGFkZGluZy10b3A6IDAuNjI1cmVtICFpbXBvcnRhbnQ7XG4vLyAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzg4OThhYTtcbi8vICAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VERURFRCAhaW1wb3J0YW50O1xuLy8gICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxcmVtICFpbXBvcnRhbnQ7XG4vLyAgICAgYm94LXNoYWRvdzogMCAzcHggMnB4IHJnYmEoMjMzLCAyMzYsIDIzOSwgMC4wNSkgIWltcG9ydGFudDtcbi8vICAgICBsaW5lLWhlaWdodDogMS41ICFpbXBvcnRhbnQ7XG4vLyAgICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcbi8vICAgICBjb2xvcjogIzAwYTY1MTtcbiAgICBcbi8vIH1cblxuLnN1Y2Nlc3N7XG4gICAgY29sb3I6ICMwMGE2NTE7XG59XG5cbi5jYXJke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFREVERUQ7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ 82451:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/ringkasan-lejar/ringkasan-lejar.page.html ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dashboard()\" >\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <!-- <ion-back-button defaultHref=\"/dashboard\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-text color=\"warning\">\n      <h3>\n        <strong class=\"ion-text-uppercase bold\">\n          RINGKASAN LEJAR\n        </strong>\n      </h3>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <!-- <div class=\"rectangle-280\"></div> -->\n\n  <div class=\"bg-white\">\n\n    <div style=\"width: 100%; height:23%;\">\n\n      <form [formGroup]=\"form\" action=\"\">\n\n        <ion-card>\n          <ion-card-content class=\"no-padding test\">\n\n            <!-- <ion-item (click)=\"showPicker = !showPicker\">\n            <ion-label class=\"bold success\">Bulan</ion-label> \n            <ion-text slot=\"end\">\n              {{ bulan }}\n            </ion-text>\n            <ion-datetime presentation=\"month\" class=\"success\" display-format=\"MMMM\" picker-format=\"MMMM\" [(ngModel)]=\"month\"></ion-datetime>\n           </ion-item> -->\n\n            <ion-item>\n              <ion-label>Bulan</ion-label>\n              <ion-select formControlName=\"bulan\">\n                <ion-select-option value=\"1\">Januari</ion-select-option>\n                <ion-select-option value=\"2\">Februari</ion-select-option>\n                <ion-select-option value=\"3\">Mac</ion-select-option>\n                <ion-select-option value=\"4\">April</ion-select-option>\n                <ion-select-option value=\"5\">Mei</ion-select-option>\n                <ion-select-option value=\"6\">Jun</ion-select-option>\n                <ion-select-option value=\"7\">Julai</ion-select-option>\n                <ion-select-option value=\"8\">Ogos</ion-select-option>\n                <ion-select-option value=\"9\">September</ion-select-option>\n                <ion-select-option value=\"10\">Oktober</ion-select-option>\n                <ion-select-option value=\"11\">November</ion-select-option>\n                <ion-select-option value=\"12\">Disember</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n          <ion-card-content class=\"no-padding test\">\n            <!-- <ion-item>\n            <ion-label class=\"bold success\">Tahun</ion-label> -->\n            <!-- <ion-datetime presentation=\"\" class=\"success\" display-format=\"YYYY\" picker-format=\"YYYY\" [(ngModel)]=\"year\"></ion-datetime> -->\n            <!-- </ion-item> -->\n\n            <ion-item>\n              <ion-label>Tahun</ion-label>\n              <ion-select formControlName=\"tahun\">\n                <ion-select-option *ngFor=\"let year of listYear\" value=\"{{year}}\">{{year}}</ion-select-option>\n\n              </ion-select>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n\n        <div style=\"width: 100%; display:flex; justify-content:flex-end\">\n          <ion-button size=\"small\" color=\"warning\" [disabled]=\"form.invalid\" (click)=\"printPdfCustom()\">PDF</ion-button>\n          <ion-button size=\"small\" color=\"warning\" [disabled]=\"form.invalid\" (click)=\"printExcelCustom()\">Excel\n          </ion-button>\n        </div>\n\n\n\n      </form>\n\n\n    </div>\n\n    <div style=\"width: 100%; height:77%; overflow:scroll;  margin-top:40px\">\n\n      <div *ngFor=\"let listMonth of listMonth; index as i; \">\n\n        <div class=\"rectangle-1\" *ngIf=\"i < month\">\n          <ion-text color=\"light\">\n            <h3 class=\"bold\">RINGKASAN LEJAR</h3>\n          </ion-text>\n\n          <h5 class=\"no-margin\">{{listMonth.name}} {{date.getFullYear()}}</h5>\n\n          <div style=\"width: 100%; height:30%;  display:flex; justify-content:flex-end;\">\n            <img src=\"assets/icon/download-excel-button-white.png\" alt=\"\" height=\"100%\"\n              (click)=\"printExcel(listMonth.value)\">\n\n            <img src=\"assets/icon/download-PDF-button-white.png\" alt=\"\" height=\"100%\"\n              (click)=\"printPdf(listMonth.value)\">\n\n            <!-- <img src=\"assets/icon/SHARE-BUTTON-ICON.png\" alt=\"\" height=\"100%\" (click)=\"share()\"> -->\n\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_core_ringkasan-lejar_ringkasan-lejar_module_ts-es2015.js.map