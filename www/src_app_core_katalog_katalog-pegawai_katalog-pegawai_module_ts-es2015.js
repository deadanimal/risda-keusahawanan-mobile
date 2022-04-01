(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_katalog_katalog-pegawai_katalog-pegawai_module_ts"],{

/***/ 31008:
/*!********************************************************************************!*\
  !*** ./src/app/core/katalog/katalog-pegawai/katalog-pegawai-routing.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KatalogPegawaiPageRoutingModule": function() { return /* binding */ KatalogPegawaiPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _katalog_pegawai_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./katalog-pegawai.page */ 53986);




const routes = [
    {
        path: '',
        component: _katalog_pegawai_page__WEBPACK_IMPORTED_MODULE_0__.KatalogPegawaiPage
    }
];
let KatalogPegawaiPageRoutingModule = class KatalogPegawaiPageRoutingModule {
};
KatalogPegawaiPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], KatalogPegawaiPageRoutingModule);



/***/ }),

/***/ 73145:
/*!************************************************************************!*\
  !*** ./src/app/core/katalog/katalog-pegawai/katalog-pegawai.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KatalogPegawaiPageModule": function() { return /* binding */ KatalogPegawaiPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _katalog_pegawai_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./katalog-pegawai-routing.module */ 31008);
/* harmony import */ var _katalog_pegawai_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./katalog-pegawai.page */ 53986);







let KatalogPegawaiPageModule = class KatalogPegawaiPageModule {
};
KatalogPegawaiPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _katalog_pegawai_routing_module__WEBPACK_IMPORTED_MODULE_0__.KatalogPegawaiPageRoutingModule
        ],
        declarations: [_katalog_pegawai_page__WEBPACK_IMPORTED_MODULE_1__.KatalogPegawaiPage]
    })
], KatalogPegawaiPageModule);



/***/ }),

/***/ 53986:
/*!**********************************************************************!*\
  !*** ./src/app/core/katalog/katalog-pegawai/katalog-pegawai.page.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KatalogPegawaiPage": function() { return /* binding */ KatalogPegawaiPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_katalog_pegawai_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./katalog-pegawai.page.html */ 26379);
/* harmony import */ var _katalog_pegawai_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./katalog-pegawai.page.scss */ 80852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/katalog/katalog.service */ 89496);
/* harmony import */ var _maklumat_produk_maklumat_produk_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../maklumat-produk/maklumat-produk.page */ 27010);









let KatalogPegawaiPage = class KatalogPegawaiPage {
    constructor(modalController, katalogService, router, loadingController) {
        this.modalController = modalController;
        this.katalogService = katalogService;
        this.router = router;
        this.loadingController = loadingController;
        this.katalog = [];
    }
    ngOnInit() {
        this.user_id = window.sessionStorage.getItem("user_id");
        this.pegawai_id = window.sessionStorage.getItem("pegawai_id");
        this.getKatalog();
    }
    lihatKatalog(katalog) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log("kemaskini Katalog");
            const modal = yield this.modalController.create({
                component: _maklumat_produk_maklumat_produk_page__WEBPACK_IMPORTED_MODULE_3__.MaklumatProdukPage,
                componentProps: { katalog },
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
    getKatalog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: 'Loading ...' });
            loading.present();
            console.log("this.user_id", this.user_id);
            this.katalogService.getKatalogPegawai(this.pegawai_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(x => x.filter(i => i.status_katalog != "draft"))).subscribe((res) => {
                console.log("katalog", res);
                this.katalog = res;
                loading.dismiss();
            });
        });
    }
    dashboard() {
        this.router.navigate(['/dashboard']);
    }
};
KatalogPegawaiPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_2__.KatalogService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
KatalogPegawaiPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-katalog-pegawai',
        template: _raw_loader_katalog_pegawai_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_katalog_pegawai_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], KatalogPegawaiPage);



/***/ }),

/***/ 80852:
/*!************************************************************************!*\
  !*** ./src/app/core/katalog/katalog-pegawai/katalog-pegawai.page.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-padding {\n  padding: 0px !important;\n}\n\n.rectangle-280 {\n  background-color: #00a651;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n\n.bg-white {\n  background-color: white;\n  display: flex;\n  height: 90%;\n  justify-content: center;\n  min-width: 100%;\n  border-radius: 0px 0px 25px 25px;\n}\n\n.bold,\nh1 {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n\n.nunito {\n  font-family: \"Nunito Sans\";\n}\n\n.no-padding {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.rectangle-279 {\n  border-radius: 12px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  margin-left: 7%;\n  margin-right: 7%;\n}\n\n.dot {\n  height: 30px;\n  width: 30px;\n  background-color: #00a651;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 5%;\n}\n\n.dot2 {\n  height: 30px;\n  width: 30px;\n  background-color: #d30f0f;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImthdGFsb2ctcGVnYXdhaS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7O0VBRUksaUJBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7QUFDSjs7QUFDQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7QUFFSjs7QUFBQTtFQUVJLG1CQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUVKIiwiZmlsZSI6ImthdGFsb2ctcGVnYXdhaS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tcGFkZGluZyB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZWN0YW5nbGUtMjgwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNjUxO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogLTE7XG59XG5cbi5iZy13aGl0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyNXB4IDI1cHg7XG59XG5cbi5ib2xkLFxuaDEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XG59XG5cbi5udW5pdG97XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcbn1cbi5uby1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuLnJlY3RhbmdsZS0yNzkge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNFREVERUQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiA3JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDclO1xufVxuXG4uZG90IHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTY1MTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbi5kb3QyIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzMGYwZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG59XG4iXX0= */");

/***/ }),

/***/ 26379:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/katalog/katalog-pegawai/katalog-pegawai.page.html ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dashboard()\">\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"warning\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            KATALOG\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"bg-white\" style=\"display: flex; flex-wrap:wrap\">\n    <ion-grid style=\"margin:5%; margin-bottom:0px\">\n      <ion-row style=\"margin-bottom: 10px;\">\n        <ion-col>\n          <h5 class=\"bold\"> Maklumat</h5>\n        </ion-col>\n        <ion-col class=\"ion-text-end\">\n          <h5 class=\"bold\">Status</h5>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div style=\"height: 90%; width:100%; overflow: scroll; display:flex; justify-content:center\">\n\n      <ion-grid class=\"rectangle-279\">\n        <ion-row *ngFor=\"let katalog of katalog\"\n          style=\"margin-bottom: 10px; background-color: #EDEDED; border-radius: 15px;\" (click)=\"lihatKatalog(katalog)\">\n          <ion-col>\n            <div class=\" bold\" style=\"font-family: 'Nunito Sans';\">\n              <ion-grid style=\"padding: 0%;\">\n                <ion-row style=\"padding: 0%;\">\n                  <ion-col size=\"8\">\n                    <ion-text>\n                      <h6 class=\"bold no-padding\" style=\"text-transform: uppercase;\">\n                        {{katalog.nama_produk}}\n                      </h6>\n                    </ion-text>\n                    <ion-text color=\"medium\">\n                      {{katalog.updated_at | date: 'dd/MM/yyyy'}}\n                    </ion-text>\n                  </ion-col>\n                  <ion-col size=\"4\" style=\"padding: 0%; display:flex; justify-content:flex-end; align-items:center\">\n                    <!-- <img *ngIf=\"katalog.status_katalog == 'pending'\" src=\"assets/icon/pending.png\" alt=\"pending\"\n                      height=\"50px\">\n                    <ion-icon color=\"danger\" name=\"ellipse-outline\"></ion-icon>\n                    <img *ngIf=\"katalog.status_katalog == 'publish'\" src=\"assets/icon/publish-icon.png\" alt=\"publish\"\n                      height=\"50px%\"> -->\n                      <span *ngIf=\"katalog.status_katalog == 'publish'\" class=\"dot\"></span>\n                      <span *ngIf=\"katalog.status_katalog == 'pending'\" class=\"dot2\"></span>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n    </div>\n    <!-- <div style=\"width:100%; height:25%; display:flex; justify-content:flex-end;\">\n      <div class=\"ion-padding ion-margin ion-text-center\" (click)=\"tambahKatalog()\">\n        <img src=\"/assets/icon/add-item-icon.png\" alt=\"\" height=\"50\" width=\"50\">\n        <br>\n\n        <ion-text class=\"bold\" color=\"success\">\n          <ion-icon name=\"add\"></ion-icon>\n          <span style=\"font-size: 12px; font-weight: 900;\"><strong> TAMBAH </strong></span>\n        </ion-text>\n      </div>\n\n    </div> -->\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_core_katalog_katalog-pegawai_katalog-pegawai_module_ts-es2015.js.map