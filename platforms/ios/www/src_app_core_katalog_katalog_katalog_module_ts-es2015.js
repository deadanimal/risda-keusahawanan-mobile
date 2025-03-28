(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_katalog_katalog_katalog_module_ts"],{

/***/ 93794:
/*!****************************************************************!*\
  !*** ./src/app/core/katalog/katalog/katalog-routing.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KatalogPageRoutingModule": function() { return /* binding */ KatalogPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _katalog_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./katalog.page */ 48201);




const routes = [
    {
        path: '',
        component: _katalog_page__WEBPACK_IMPORTED_MODULE_0__.KatalogPage
    }
];
let KatalogPageRoutingModule = class KatalogPageRoutingModule {
};
KatalogPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], KatalogPageRoutingModule);



/***/ }),

/***/ 96661:
/*!********************************************************!*\
  !*** ./src/app/core/katalog/katalog/katalog.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KatalogPageModule": function() { return /* binding */ KatalogPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _katalog_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./katalog-routing.module */ 93794);
/* harmony import */ var _katalog_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./katalog.page */ 48201);







let KatalogPageModule = class KatalogPageModule {
};
KatalogPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _katalog_routing_module__WEBPACK_IMPORTED_MODULE_0__.KatalogPageRoutingModule
        ],
        declarations: [_katalog_page__WEBPACK_IMPORTED_MODULE_1__.KatalogPage]
    })
], KatalogPageModule);



/***/ }),

/***/ 48201:
/*!******************************************************!*\
  !*** ./src/app/core/katalog/katalog/katalog.page.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KatalogPage": function() { return /* binding */ KatalogPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_katalog_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./katalog.page.html */ 59773);
/* harmony import */ var _katalog_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./katalog.page.scss */ 75079);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/katalog/katalog.service */ 89496);
/* harmony import */ var _kemaskini_katalog_kemaskini_katalog_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../kemaskini-katalog/kemaskini-katalog.page */ 43564);
/* harmony import */ var _tambah_katalog_tambah_katalog_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tambah-katalog/tambah-katalog.page */ 45558);









let KatalogPage = class KatalogPage {
    constructor(modalController, katalogService, alertController, loadingController, router) {
        this.modalController = modalController;
        this.katalogService = katalogService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.router = router;
    }
    ngOnInit() {
        this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
        this.user_id = window.sessionStorage.getItem("user_id");
        this.getKatalog();
    }
    tambahKatalog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log("tambah Katalog");
            console.log(this.katalog.length);
            if (this.katalog.length >= 10) {
                console.log("lebih 10");
                this.presentAlert();
            }
            else {
                const modal = yield this.modalController.create({
                    component: _tambah_katalog_tambah_katalog_page__WEBPACK_IMPORTED_MODULE_4__.TambahKatalogPage,
                    cssClass: 'my-custom-class'
                });
                return yield modal.present();
            }
        });
    }
    kemaskiniKatalog(katalog) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log("kemaskini Katalog");
            const modal = yield this.modalController.create({
                component: _kemaskini_katalog_kemaskini_katalog_page__WEBPACK_IMPORTED_MODULE_3__.KemaskiniKatalogPage,
                componentProps: { katalog },
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
    getKatalog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log("this.user_id", this.user_id);
            const loading = yield this.loadingController.create({ message: 'Loading ...' });
            loading.present();
            this.katalogService.get(this.user_id).subscribe((res) => {
                console.log("katalog", res);
                this.katalog = res;
                loading.dismiss();
            });
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Ralat',
                subHeader: 'Jumlah tidak boleh melebihi 10 katalog',
                message: '',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    dashboard() {
        this.router.navigate(['/dashboard']);
    }
};
KatalogPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_2__.KatalogService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
KatalogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-katalog',
        template: _raw_loader_katalog_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_katalog_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], KatalogPage);



/***/ }),

/***/ 75079:
/*!********************************************************!*\
  !*** ./src/app/core/katalog/katalog/katalog.page.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-padding {\n  padding: 0px !important;\n}\n\n.rectangle-280 {\n  background-color: #00a651;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n\n.bg-white {\n  background-color: white;\n  display: flex;\n  height: 90%;\n  justify-content: center;\n  min-width: 100%;\n  border-radius: 0px 0px 25px 25px;\n}\n\n.bold,\nh1 {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n\n.no-padding {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.rectangle-279 {\n  border-radius: 12px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  margin-left: 7%;\n  margin-right: 7%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImthdGFsb2cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUdBOztFQUVJLGlCQUFBO0VBQ0EsMEJBQUE7QUFBSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFDQTtFQUVJLG1CQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6ImthdGFsb2cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLXBhZGRpbmcge1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucmVjdGFuZ2xlLTI4MCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTY1MTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4uYmctd2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjVweCAyNXB4O1xufVxuXG5cbi5ib2xkLFxuaDEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XG59XG4ubm8tcGFkZGluZyB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cbi5yZWN0YW5nbGUtMjc5IHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFREVEO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogNyU7XG4gICAgbWFyZ2luLXJpZ2h0OiA3JTtcbiAgfVxuXG4iXX0= */");

/***/ }),

/***/ 59773:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/katalog/katalog/katalog.page.html ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-button  (click)=\"dashboard()\">\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"warning\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            KATALOG\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"bg-white\" style=\"display: flex; flex-wrap:wrap\">\n    <ion-grid style=\"margin:5%; margin-bottom:0px\">\n      <ion-row style=\"margin-bottom: 10px;\">\n        <ion-col>\n          <h5 class=\"bold\"> Maklumat</h5>\n        </ion-col>\n        <ion-col class=\"ion-text-end\">\n          <h5 class=\"bold\">Status</h5>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div style=\"height: 70%; width:100%; overflow: scroll; display:flex; justify-content:center\">\n      <ion-grid class=\"rectangle-279\">\n        <ion-row *ngFor=\"let katalog of katalog\"\n          style=\"margin-bottom: 10px; background-color: #EDEDED; border-radius: 15px;\" (click)=\"kemaskiniKatalog(katalog)\">\n          <ion-col>\n            <div class=\" bold\" style=\"font-family: 'Nunito Sans';\">\n              <ion-grid style=\"padding: 0%;\">\n                <ion-row style=\"padding: 0%;\">\n                  <ion-col size=\"8\">\n                    <ion-text>\n                      <h6 class=\"bold no-padding\" style=\"text-transform: uppercase;\">\n                        {{katalog.nama_produk}}\n                      </h6>\n                    </ion-text>\n                    <ion-text color=\"medium\">\n                      {{katalog.updated_at  | date: 'dd/MM/yyyy'}}\n                    </ion-text>\n                  </ion-col>\n                  <ion-col size=\"4\" style=\"padding: 0%; display:flex; justify-content:flex-end\">\n                    <img *ngIf=\"katalog.status_katalog == 'pending'\" src=\"assets/icon/pending.png\" alt=\"pending\"\n                      height=\"50px\">\n                    <img *ngIf=\"katalog.status_katalog == 'publish'\" src=\"assets/icon/publish-icon.png\" alt=\"publish\"\n                      height=\"50px%\">\n                    <img *ngIf=\"katalog.status_katalog == 'draft'\" src=\"assets/icon/draft-icon.png\" alt=\"draft\"\n                      height=\"50px%\">\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n    </div>\n    <div\n      style=\"width:100%; height:25%; display:flex; justify-content:flex-end;\">\n      <div class=\"ion-padding ion-margin ion-text-center\" (click)=\"tambahKatalog()\">\n        <img src=\"assets/new-iconv2/Tambah.png\" alt=\"\" height=\"50\" width=\"50\">\n        <br>\n\n        <ion-text class=\"bold\" color=\"dark\">\n          <ion-icon name=\"add\"></ion-icon>\n          <span style=\"font-size: 12px; font-weight: 900;\"><strong> TAMBAH </strong></span>\n        </ion-text>\n      </div>\n\n    </div>\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_core_katalog_katalog_katalog_module_ts-es2015.js.map