(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_lawatan_lawatan-pegawai_lawatan-pegawai_module_ts"],{

/***/ 19419:
/*!********************************************************************************!*\
  !*** ./src/app/core/lawatan/lawatan-pegawai/lawatan-pegawai-routing.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LawatanPegawaiPageRoutingModule": function() { return /* binding */ LawatanPegawaiPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _lawatan_pegawai_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lawatan-pegawai.page */ 2372);




const routes = [
    {
        path: '',
        component: _lawatan_pegawai_page__WEBPACK_IMPORTED_MODULE_0__.LawatanPegawaiPage
    }
];
let LawatanPegawaiPageRoutingModule = class LawatanPegawaiPageRoutingModule {
};
LawatanPegawaiPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LawatanPegawaiPageRoutingModule);



/***/ }),

/***/ 95054:
/*!************************************************************************!*\
  !*** ./src/app/core/lawatan/lawatan-pegawai/lawatan-pegawai.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LawatanPegawaiPageModule": function() { return /* binding */ LawatanPegawaiPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _lawatan_pegawai_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lawatan-pegawai-routing.module */ 19419);
/* harmony import */ var _lawatan_pegawai_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lawatan-pegawai.page */ 2372);







let LawatanPegawaiPageModule = class LawatanPegawaiPageModule {
};
LawatanPegawaiPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _lawatan_pegawai_routing_module__WEBPACK_IMPORTED_MODULE_0__.LawatanPegawaiPageRoutingModule
        ],
        declarations: [_lawatan_pegawai_page__WEBPACK_IMPORTED_MODULE_1__.LawatanPegawaiPage]
    })
], LawatanPegawaiPageModule);



/***/ }),

/***/ 2372:
/*!**********************************************************************!*\
  !*** ./src/app/core/lawatan/lawatan-pegawai/lawatan-pegawai.page.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LawatanPegawaiPage": function() { return /* binding */ LawatanPegawaiPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_lawatan_pegawai_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lawatan-pegawai.page.html */ 17014);
/* harmony import */ var _lawatan_pegawai_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lawatan-pegawai.page.scss */ 28410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var src_app_services_lawatan_lawatan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/lawatan/lawatan.service */ 89765);
/* harmony import */ var _kemaskini_laporan_kemaskini_laporan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../kemaskini-laporan/kemaskini-laporan.page */ 1938);
/* harmony import */ var _pengesahan_tarikh_lawatan_pgw_pengesahan_tarikh_lawatan_pgw_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pengesahan-tarikh-lawatan-pgw/pengesahan-tarikh-lawatan-pgw.page */ 31453);
/* harmony import */ var _tarikh_lawatan_pgw_tarikh_lawatan_pgw_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tarikh-lawatan-pgw/tarikh-lawatan-pgw.page */ 27000);











let LawatanPegawaiPage = class LawatanPegawaiPage {
    constructor(modalController, lawatanService, router) {
        this.modalController = modalController;
        this.lawatanService = lawatanService;
        this.router = router;
    }
    ngOnInit() {
        this.pegawai_id = window.sessionStorage.getItem("pegawai_id");
        this.user_id = window.sessionStorage.getItem("user_id");
        this.peranan_pegawai = window.sessionStorage.getItem("peranan_pegawai");
        this.getLawatan();
        document.getElementById("1").click();
        console.log("peranan_pegawai", this.peranan_pegawai);
    }
    addLawatan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log("tambah lawatan");
            const modal = yield this.modalController.create({
                component: _tarikh_lawatan_pgw_tarikh_lawatan_pgw_page__WEBPACK_IMPORTED_MODULE_5__.TarikhLawatanPgwPage,
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
    pengesahanLawatan(lawatan) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log("pengesahan lawatan");
            const modal = yield this.modalController.create({
                component: _pengesahan_tarikh_lawatan_pgw_pengesahan_tarikh_lawatan_pgw_page__WEBPACK_IMPORTED_MODULE_4__.PengesahanTarikhLawatanPgwPage,
                componentProps: { lawatan },
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
    tambahLaporan(laporan) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log("pengesahan lawatan");
            const modal = yield this.modalController.create({
                component: _kemaskini_laporan_kemaskini_laporan_page__WEBPACK_IMPORTED_MODULE_3__.KemaskiniLaporanPage,
                componentProps: { laporan },
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
    getLawatan() {
        this.lawatanService.get(this.pegawai_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(x => x.filter(i => i.status_lawatan != "4"))).subscribe((res) => {
            console.log("res", res);
            this.lawatan = res;
            // window.location.reload();
            // this.lawatan
        });
        this.lawatanService.get(this.pegawai_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(x => x.filter(i => i.status_lawatan == "4"))).subscribe((res) => {
            console.log("res2", res);
            this.laporan = res;
            // window.location.reload();
            // this.lawatan
        });
    }
    dashboard() {
        this.router.navigate(['/dashboard']);
    }
};
LawatanPegawaiPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: src_app_services_lawatan_lawatan_service__WEBPACK_IMPORTED_MODULE_2__.LawatanService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router }
];
LawatanPegawaiPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-lawatan-pegawai',
        template: _raw_loader_lawatan_pegawai_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_lawatan_pegawai_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LawatanPegawaiPage);



/***/ }),

/***/ 28410:
/*!************************************************************************!*\
  !*** ./src/app/core/lawatan/lawatan-pegawai/lawatan-pegawai.page.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-padding {\n  padding: 0px !important;\n}\n\n.rectangle-280 {\n  background-color: #00a651;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n\n.bg-white {\n  background-color: white;\n  display: flex;\n  height: 90%;\n  justify-content: center;\n  min-width: 100%;\n  border-radius: 0px 0px 25px 25px;\n}\n\n.tab-selected {\n  background-color: #FF6600;\n  border-radius: 30px;\n  color: white;\n}\n\n.tab {\n  margin-top: 10%;\n  border-bottom: none;\n}\n\nion-tab-button {\n  background-color: #f1f1f1;\n  border-radius: 30px;\n}\n\n.rectangle-279 {\n  border-radius: 12px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  margin-left: 7%;\n  margin-right: 7%;\n}\n\n.bold,\nh1 {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n\n.no-padding {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.jumlah {\n  font-family: \"Nunito Sans\";\n}\n\n.tarikh {\n  font-family: \"Nunito Sans\";\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhd2F0YW4tcGVnYXdhaS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBS0E7RUFFSSxtQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNQTs7RUFFSSxpQkFBQTtFQUNBLDBCQUFBO0FBSEo7O0FBS0E7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0FBRko7O0FBSUE7RUFDSSwwQkFBQTtBQURKOztBQUdBO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0FBQUoiLCJmaWxlIjoibGF3YXRhbi1wZWdhd2FpLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnJlY3RhbmdsZS0yODAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGE2NTE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLmJnLXdoaXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogOTAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDI1cHggMjVweDtcbn1cblxuLnRhYi1zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjYwMDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYiB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0YxRjFGMTtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiAycmVtO1xufVxuXG5cbi5yZWN0YW5nbGUtMjc5IHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFREVEO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogNyU7XG4gICAgbWFyZ2luLXJpZ2h0OiA3JTtcbiAgfVxuXG4uYm9sZCxcbmgxIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiO1xufVxuLm5vLXBhZGRpbmcge1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG4uanVtbGFoIHtcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiO1xufVxuLnRhcmlraCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLy8gY29sb3I6ICMwMGE2NTE7XG59XG5cblxuIl19 */");

/***/ }),

/***/ 17014:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/lawatan/lawatan-pegawai/lawatan-pegawai.page.html ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dashboard()\">\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"warning\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            LAWATAN\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div>\n    <ion-tabs>\n      <ion-tab-bar slot=\"top\" class=\"tab\">\n        <ion-tab-button tab=\"/lawatan\" style=\"height:30px; max-width:40%\">\n          <ion-label style=\"width: 80%; \">\n            <div>\n              LAWATAN\n            </div>\n            <!-- <ion-button round=true>Tunai Masuk</ion-button> -->\n          </ion-label>\n          <!-- <ion-icon name=\"musical-note\"></ion-icon> -->\n        </ion-tab-button>\n        <ion-tab-button id=\"1\" tab=\"/laporan\" style=\"height:30px; max-width:40%\">\n          <ion-label>\n            LAPORAN\n          </ion-label>\n          <!-- <ion-icon name=\"game-controller\"></ion-icon> -->\n        </ion-tab-button>\n\n      </ion-tab-bar>\n\n      <ion-tab tab=\"/lawatan\">\n\n        <ion-content>\n\n          <div class=\"bg-white\" style=\"display: flex; flex-wrap:wrap\">\n            <ion-grid style=\"margin:5%; margin-bottom:0px\">\n              <ion-row style=\"margin-bottom: 10px;\">\n                <ion-col>\n                  <h5 class=\"bold\"> Perkara</h5>\n                </ion-col>\n                <ion-col class=\"ion-text-end\">\n                  <h5 class=\"bold\">Status</h5>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <div style=\"height: 70%; width:100%; overflow: scroll; display:flex; justify-content:center\">\n\n              <ion-grid class=\"rectangle-279\">\n                <ion-row *ngFor=\"let lawatan of lawatan\"\n                  style=\"margin-bottom: 10px; background-color: #EDEDED; border-radius: 15px;\"\n                  (click)=\"lawatan.status_lawatan=='2'  ? pengesahanLawatan(lawatan):null;\">\n                  <ion-col>\n                    <div class=\" bold\" style=\"font-family: 'Nunito Sans';\">\n                      <ion-grid style=\"padding: 0%;\">\n                        <ion-row style=\"padding: 0%;\">\n                          <ion-col size=\"8\">\n                            <ion-text>\n                              <h6 class=\"bold no-padding\">\n                                {{lawatan.namausahawan}}\n                              </h6>\n                            </ion-text>\n                            <ion-text color=\"medium\">\n                              {{lawatan.tarikh_lawatan | date: 'dd/MM/yyyy'}}\n                            </ion-text>\n                          </ion-col>\n                          <ion-col size=\"4\" style=\"padding: 0%; display:flex; justify-content:flex-end\">\n                            <img *ngIf=\"lawatan.status_lawatan == '1'\" src=\"assets/icon/pending.png\" alt=\"pending_usahawan\"\n                              height=\"50px\">\n                            <img *ngIf=\"lawatan.status_lawatan == '3'\" src=\"assets/icon/publish-icon.png\"\n                              alt=\"publish\" height=\"50px%\">\n                            <img *ngIf=\"lawatan.status_lawatan == '2'\" src=\"assets/icon/draft-icon.png\" alt=\"pending_pegawai\"\n                              height=\"50px%\">\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n\n\n            </div>\n            <div *ngIf = \"peranan_pegawai == 7\" style=\"width:100%; height:25%; display:flex; justify-content:flex-end;\">\n              <div class=\"ion-padding ion-margin ion-text-center\" (click)=\"addLawatan()\">\n                <img src=\"assets/new-iconv2/Tambah.png\" alt=\"\" height=\"50\" width=\"50\">\n                <br>\n\n                <ion-text class=\"bold\" color=\"dark\">\n                  <ion-icon name=\"add\"></ion-icon>\n                  <span style=\"font-size: 12px; font-weight: 900;\"><strong> TAMBAH </strong></span>\n                </ion-text>\n              </div>\n\n            </div>\n          </div>\n\n        </ion-content>\n      </ion-tab>\n\n      <ion-tab tab=\"/laporan\">\n\n        <ion-content>\n\n          <div class=\"bg-white\" style=\"display: flex; flex-wrap:wrap\">\n            <ion-grid style=\"margin:5%; margin-bottom:0px\">\n              <ion-row style=\"margin-bottom: 10px;\">\n                <ion-col>\n                  <h5 class=\"bold\"> Maklumat</h5>\n                </ion-col>\n                <ion-col class=\"ion-text-end\">\n                  <!-- <h5 class=\"bold\">Status</h5> -->\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <div style=\"height: 70%; width:100%; overflow: scroll; display:flex; justify-content:center\">\n\n              <ion-grid class=\"rectangle-279\">\n                <ion-row *ngFor=\"let laporan of laporan\" (click)=\"tambahLaporan(laporan)\"\n                  style=\"margin-bottom: 10px; background-color: #EDEDED; border-radius: 15px;\"\n                  >\n                  <ion-col>\n                    <div class=\" bold\" style=\"font-family: 'Nunito Sans';\">\n                      <ion-grid style=\"padding: 0%;\">\n                        <ion-row style=\"padding: 0%;\">\n                          <ion-col size=\"8\">\n                            <ion-text>\n                              <h6 class=\"bold no-padding\">\n                                {{laporan.namausahawan}}\n                              </h6>\n                            </ion-text>\n                            <ion-text color=\"medium\">\n                              <p class=\"font-13 no-padding\">\n                                {{laporan.updated_at | date: 'dd/MM/yyyy'}}\n                              </p>\n                            </ion-text>\n                          </ion-col>\n                          <ion-col size=\"4\"\n                            style=\"padding: 0%; display:flex; justify-content:flex-end; align-items:center\">\n                            <!-- <img src=\"assets/icon/DOWNLOAD.png\" alt=\"pending\" height=\"25px\" style=\"margin-left: 20px;\"> -->\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n\n\n            </div>\n          \n          </div>\n\n        </ion-content>\n\n      </ion-tab>\n\n\n    </ion-tabs>\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_core_lawatan_lawatan-pegawai_lawatan-pegawai_module_ts-es2015.js.map