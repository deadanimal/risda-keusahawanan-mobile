(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_dashboard_senarai-katalog_senarai-katalog_module_ts"],{

/***/ 81574:
/*!**********************************************************************************!*\
  !*** ./src/app/core/dashboard/senarai-katalog/senarai-katalog-routing.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SenaraiKatalogPageRoutingModule": function() { return /* binding */ SenaraiKatalogPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _senarai_katalog_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./senarai-katalog.page */ 26314);




const routes = [
    {
        path: '',
        component: _senarai_katalog_page__WEBPACK_IMPORTED_MODULE_0__.SenaraiKatalogPage
    }
];
let SenaraiKatalogPageRoutingModule = class SenaraiKatalogPageRoutingModule {
};
SenaraiKatalogPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SenaraiKatalogPageRoutingModule);



/***/ }),

/***/ 33322:
/*!**************************************************************************!*\
  !*** ./src/app/core/dashboard/senarai-katalog/senarai-katalog.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SenaraiKatalogPageModule": function() { return /* binding */ SenaraiKatalogPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _senarai_katalog_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./senarai-katalog-routing.module */ 81574);
/* harmony import */ var _senarai_katalog_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./senarai-katalog.page */ 26314);







let SenaraiKatalogPageModule = class SenaraiKatalogPageModule {
};
SenaraiKatalogPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _senarai_katalog_routing_module__WEBPACK_IMPORTED_MODULE_0__.SenaraiKatalogPageRoutingModule
        ],
        declarations: [_senarai_katalog_page__WEBPACK_IMPORTED_MODULE_1__.SenaraiKatalogPage]
    })
], SenaraiKatalogPageModule);



/***/ }),

/***/ 26314:
/*!************************************************************************!*\
  !*** ./src/app/core/dashboard/senarai-katalog/senarai-katalog.page.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SenaraiKatalogPage": function() { return /* binding */ SenaraiKatalogPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_senarai_katalog_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./senarai-katalog.page.html */ 72526);
/* harmony import */ var _senarai_katalog_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./senarai-katalog.page.scss */ 35767);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/katalog/katalog.service */ 89496);
/* harmony import */ var _show_katalog_show_katalog_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../show-katalog/show-katalog.page */ 72070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);









let SenaraiKatalogPage = class SenaraiKatalogPage {
    constructor(katalogService, modalController, loadingController, router) {
        this.katalogService = katalogService;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.router = router;
    }
    ngOnInit() {
        this.getKatalog();
    }
    getKatalog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: 'Loading ...' });
            loading.present();
            this.katalogService.getAll().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(x => x.filter(i => i.status_katalog == "publish"))).subscribe((res) => {
                // this.daerahService.get().subscribe((res) => {
                console.log("res", res);
                this.katalog = res;
                loading.dismiss();
            });
        });
    }
    lihatKatalog(katalog) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log("kemaskini Katalog");
            const modal = yield this.modalController.create({
                component: _show_katalog_show_katalog_page__WEBPACK_IMPORTED_MODULE_3__.ShowKatalogPage,
                componentProps: { katalog },
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
    dashboard() {
        this.router.navigate(['/dashboard']);
    }
};
SenaraiKatalogPage.ctorParameters = () => [
    { type: src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_2__.KatalogService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
SenaraiKatalogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-senarai-katalog',
        template: _raw_loader_senarai_katalog_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_senarai_katalog_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SenaraiKatalogPage);



/***/ }),

/***/ 35767:
/*!**************************************************************************!*\
  !*** ./src/app/core/dashboard/senarai-katalog/senarai-katalog.page.scss ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW5hcmFpLWthdGFsb2cucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 72526:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/dashboard/senarai-katalog/senarai-katalog.page.html ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dashboard()\">\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"warning\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            KATALOG\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let katalog of katalog\" style=\"display: flex;\n        height: 250px;\n        flex-wrap: wrap;\n        align-content: stretch;\">\n\n        <ion-card style=\"width: 100%; margin: 0px 10px 10px 10px !important\" (click)=\"lihatKatalog(katalog)\">\n          \n          <div style=\"height: 130px; overflow:hidden\">\n            <img src=\"{{katalog.gambar_url}}\" />\n          </div>\n          <ion-card-header style=\"padding: 20px 0px 0px 5px !important;\">\n            <ion-card-subtitle>RM {{ katalog.harga_produk }}</ion-card-subtitle>\n            <h5 style=\"margin: 0px !important;\">{{ katalog.nama_produk }}</h5>\n          </ion-card-header>\n          <!-- <ion-card-content style=\"padding: 0px !important;\">\n           \n           \n          </ion-card-content> -->\n        </ion-card>\n\n      </ion-col>\n      <!-- <ion-col>\n        <div>2 of 2</div>\n      </ion-col> -->\n    </ion-row>\n  </ion-grid>\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_core_dashboard_senarai-katalog_senarai-katalog_module_ts-es2015.js.map