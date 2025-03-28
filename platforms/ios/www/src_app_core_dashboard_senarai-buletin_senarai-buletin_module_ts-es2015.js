(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_dashboard_senarai-buletin_senarai-buletin_module_ts"],{

/***/ 8251:
/*!**********************************************************************************!*\
  !*** ./src/app/core/dashboard/senarai-buletin/senarai-buletin-routing.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SenaraiBuletinPageRoutingModule": function() { return /* binding */ SenaraiBuletinPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _senarai_buletin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./senarai-buletin.page */ 85606);




const routes = [
    {
        path: '',
        component: _senarai_buletin_page__WEBPACK_IMPORTED_MODULE_0__.SenaraiBuletinPage
    }
];
let SenaraiBuletinPageRoutingModule = class SenaraiBuletinPageRoutingModule {
};
SenaraiBuletinPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SenaraiBuletinPageRoutingModule);



/***/ }),

/***/ 35867:
/*!**************************************************************************!*\
  !*** ./src/app/core/dashboard/senarai-buletin/senarai-buletin.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SenaraiBuletinPageModule": function() { return /* binding */ SenaraiBuletinPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _senarai_buletin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./senarai-buletin-routing.module */ 8251);
/* harmony import */ var _senarai_buletin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./senarai-buletin.page */ 85606);







let SenaraiBuletinPageModule = class SenaraiBuletinPageModule {
};
SenaraiBuletinPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _senarai_buletin_routing_module__WEBPACK_IMPORTED_MODULE_0__.SenaraiBuletinPageRoutingModule
        ],
        declarations: [_senarai_buletin_page__WEBPACK_IMPORTED_MODULE_1__.SenaraiBuletinPage]
    })
], SenaraiBuletinPageModule);



/***/ }),

/***/ 85606:
/*!************************************************************************!*\
  !*** ./src/app/core/dashboard/senarai-buletin/senarai-buletin.page.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SenaraiBuletinPage": function() { return /* binding */ SenaraiBuletinPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_senarai_buletin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./senarai-buletin.page.html */ 18936);
/* harmony import */ var _senarai_buletin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./senarai-buletin.page.scss */ 54643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var src_app_services_buletin_buletin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/buletin/buletin.service */ 42101);
/* harmony import */ var _show_buletin_show_buletin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../show-buletin/show-buletin.page */ 87586);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);









let SenaraiBuletinPage = class SenaraiBuletinPage {
    constructor(buletinService, modalController, router, loadingController) {
        this.buletinService = buletinService;
        this.modalController = modalController;
        this.router = router;
        this.loadingController = loadingController;
    }
    ngOnInit() {
        this.getBuletin();
    }
    getBuletin() {
        this.buletinService.getAll().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(x => x.filter(i => i.status == "aktif"))).subscribe((res) => {
            // this.daerahService.get().subscribe((res) => {
            console.log("res", res);
            this.buletin = res;
        });
    }
    lihatBuletin(buletin) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // console.log("kemaskini Katalog");
            const modal = yield this.modalController.create({
                component: _show_buletin_show_buletin_page__WEBPACK_IMPORTED_MODULE_3__.ShowBuletinPage,
                componentProps: { buletin },
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
    dashboard() {
        this.router.navigate(['/dashboard']);
    }
};
SenaraiBuletinPage.ctorParameters = () => [
    { type: src_app_services_buletin_buletin_service__WEBPACK_IMPORTED_MODULE_2__.BuletinService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
SenaraiBuletinPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-senarai-buletin',
        template: _raw_loader_senarai_buletin_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_senarai_buletin_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SenaraiBuletinPage);



/***/ }),

/***/ 54643:
/*!**************************************************************************!*\
  !*** ./src/app/core/dashboard/senarai-buletin/senarai-buletin.page.scss ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW5hcmFpLWJ1bGV0aW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 18936:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/dashboard/senarai-buletin/senarai-buletin.page.html ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dashboard()\">\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"warning\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            BULETIN\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor=\"let buletin of buletin\" style=\"width: 90%;\" (click)=\"lihatBuletin(buletin)\">\n    <div style=\"height: 150px; overflow:hidden\">\n      <img src=\"{{buletin.gambar_buletin}}\"/>\n    </div>\n    \n    <ion-card-header style=\"padding: 20px 10px 10px 10px !important; \">\n      \n      <ion-card-subtitle>{{ buletin.tarikh | date: 'dd/MM/YYYY' }}</ion-card-subtitle>\n      <h5 style=\"margin: 0px !important;\">{{ buletin.tajuk }}</h5>\n      \n    </ion-card-header>\n    <!-- <ion-card-content style=\"padding: 0px !important;\">\n      <ion-card-subtitle>{{ buletin.tarikh }}</ion-card-subtitle>\n      <h5 style=\"margin: 0px !important;\">{{ buletin.tajuk }}</h5>\n    </ion-card-content> -->\n  </ion-card>\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_core_dashboard_senarai-buletin_senarai-buletin_module_ts-es2015.js.map