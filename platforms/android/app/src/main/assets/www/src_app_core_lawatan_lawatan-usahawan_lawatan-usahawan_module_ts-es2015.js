(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_lawatan_lawatan-usahawan_lawatan-usahawan_module_ts"],{

/***/ 51942:
/*!**********************************************************************************!*\
  !*** ./src/app/core/lawatan/lawatan-usahawan/lawatan-usahawan-routing.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LawatanUsahawanPageRoutingModule": function() { return /* binding */ LawatanUsahawanPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _lawatan_usahawan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lawatan-usahawan.page */ 95861);




const routes = [
    {
        path: '',
        component: _lawatan_usahawan_page__WEBPACK_IMPORTED_MODULE_0__.LawatanUsahawanPage
    }
];
let LawatanUsahawanPageRoutingModule = class LawatanUsahawanPageRoutingModule {
};
LawatanUsahawanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LawatanUsahawanPageRoutingModule);



/***/ }),

/***/ 8032:
/*!**************************************************************************!*\
  !*** ./src/app/core/lawatan/lawatan-usahawan/lawatan-usahawan.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LawatanUsahawanPageModule": function() { return /* binding */ LawatanUsahawanPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _lawatan_usahawan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lawatan-usahawan-routing.module */ 51942);
/* harmony import */ var _lawatan_usahawan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lawatan-usahawan.page */ 95861);







let LawatanUsahawanPageModule = class LawatanUsahawanPageModule {
};
LawatanUsahawanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _lawatan_usahawan_routing_module__WEBPACK_IMPORTED_MODULE_0__.LawatanUsahawanPageRoutingModule
        ],
        declarations: [_lawatan_usahawan_page__WEBPACK_IMPORTED_MODULE_1__.LawatanUsahawanPage]
    })
], LawatanUsahawanPageModule);



/***/ }),

/***/ 95861:
/*!************************************************************************!*\
  !*** ./src/app/core/lawatan/lawatan-usahawan/lawatan-usahawan.page.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LawatanUsahawanPage": function() { return /* binding */ LawatanUsahawanPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_lawatan_usahawan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lawatan-usahawan.page.html */ 96468);
/* harmony import */ var _lawatan_usahawan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lawatan-usahawan.page.scss */ 72053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let LawatanUsahawanPage = class LawatanUsahawanPage {
    constructor() {
        this.katalog = [
            { nama_produk: "Nama Usahawan", status_katalog: "publish", created_date: "12/12/2021" },
            { nama_produk: "Nama Usahawan", status_katalog: "draft", created_date: "1/2/2020" },
            { nama_produk: "Nama Usahawan", status_katalog: "pending", created_date: "5/10/2021" },
            { nama_produk: "Nama Usahawan", status_katalog: "pending", created_date: "22/6/2020" },
            { nama_produk: "Nama Usahawan", status_katalog: "publish", created_date: "3/2/2020" },
            { nama_produk: "Nama Usahawan", status_katalog: "publish", created_date: "12/12/2021" },
            { nama_produk: "Nama Usahawan", status_katalog: "draft", created_date: "1/2/2020" },
            { nama_produk: "Nama Usahawan", status_katalog: "pending", created_date: "5/10/2021" },
            { nama_produk: "Nama Usahawan", status_katalog: "pending", created_date: "22/6/2020" },
            { nama_produk: "Nama Usahawan", status_katalog: "publish", created_date: "3/2/2020" },
            { nama_produk: "Nama Usahawan", status_katalog: "publish", created_date: "12/12/2021" },
            { nama_produk: "Nama Usahawan", status_katalog: "draft", created_date: "1/2/2020" },
            { nama_produk: "Nama Usahawan", status_katalog: "pending", created_date: "5/10/2021" },
            { nama_produk: "Nama Usahawan", status_katalog: "pending", created_date: "22/6/2020" },
            { nama_produk: "Nama Usahawan", status_katalog: "publish", created_date: "3/2/2020" },
        ];
        this.pelanggan = [
            { nama_pelanggan: "Kamal", status_katalog: "publish", created_date: "12/12/2021" },
            { nama_pelanggan: "amin", status_katalog: "draft", created_date: "1/2/2020" },
            { nama_pelanggan: "zainur", status_katalog: "pending", created_date: "5/10/2021" },
            { nama_pelanggan: "amir", status_katalog: "pending", created_date: "22/6/2020" },
            { nama_pelanggan: "azri", status_katalog: "publish", created_date: "3/2/2020" },
            { nama_pelanggan: "niena", status_katalog: "publish", created_date: "12/12/2021" },
            { nama_pelanggan: "tasha", status_katalog: "draft", created_date: "1/2/2020" },
            { nama_pelanggan: "umie", status_katalog: "pending", created_date: "5/10/2021" },
            { nama_pelanggan: "boi", status_katalog: "pending", created_date: "22/6/2020" },
            { nama_pelanggan: "afiq", status_katalog: "publish", created_date: "3/2/2020" },
            { nama_pelanggan: "Alya", status_katalog: "publish", created_date: "12/12/2021" },
            { nama_pelanggan: "zainoor", status_katalog: "draft", created_date: "1/2/2020" },
            { nama_pelanggan: "hadi", status_katalog: "pending", created_date: "5/10/2021" },
            { nama_pelanggan: "ali", status_katalog: "pending", created_date: "22/6/2020" },
            { nama_pelanggan: "jemah", status_katalog: "publish", created_date: "3/2/2020" },
        ];
    }
    ngOnInit() {
    }
};
LawatanUsahawanPage.ctorParameters = () => [];
LawatanUsahawanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-lawatan-usahawan',
        template: _raw_loader_lawatan_usahawan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_lawatan_usahawan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LawatanUsahawanPage);



/***/ }),

/***/ 72053:
/*!**************************************************************************!*\
  !*** ./src/app/core/lawatan/lawatan-usahawan/lawatan-usahawan.page.scss ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-padding {\n  padding: 0px !important;\n}\n\n.rectangle-280 {\n  background-color: #00a651;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n\n.bg-white {\n  background-color: white;\n  display: flex;\n  height: 90%;\n  justify-content: center;\n  min-width: 100%;\n  border-radius: 0px 0px 25px 25px;\n}\n\n.tab-selected {\n  background-color: #00a651;\n  border-radius: 30px;\n  color: white;\n}\n\n.tab {\n  margin-top: 10%;\n  border-bottom: none;\n}\n\nion-tab-button {\n  background-color: #f1f1f1;\n  border-radius: 30px;\n}\n\n.rectangle-279 {\n  border-radius: 12px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  margin-left: 7%;\n  margin-right: 7%;\n}\n\n.bold,\nh1 {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n\n.no-padding {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.jumlah {\n  font-family: \"Nunito Sans\";\n}\n\n.tarikh {\n  font-family: \"Nunito Sans\";\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhd2F0YW4tdXNhaGF3YW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUtBO0VBRUksbUJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUE7O0VBRUksaUJBQUE7RUFDQSwwQkFBQTtBQUhKOztBQUtBO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtBQUZKOztBQUlBO0VBQ0ksMEJBQUE7QUFESjs7QUFHQTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtBQUFKIiwiZmlsZSI6Imxhd2F0YW4tdXNhaGF3YW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLXBhZGRpbmcge1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucmVjdGFuZ2xlLTI4MCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTY1MTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4uYmctd2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjVweCAyNXB4O1xufVxuXG4udGFiLXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNjUxO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4udGFiIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUYxO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDJyZW07XG59XG5cblxuLnJlY3RhbmdsZS0yNzkge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNFREVERUQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiA3JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDclO1xuICB9XG5cbi5ib2xkLFxuaDEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XG59XG4ubm8tcGFkZGluZyB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cbi5qdW1sYWgge1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XG59XG4udGFyaWtoIHtcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAvLyBjb2xvcjogIzAwYTY1MTtcbn1cblxuXG4iXX0= */");

/***/ }),

/***/ 96468:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/lawatan/lawatan-usahawan/lawatan-usahawan.page.html ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"height: 80px;\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" href=\"/dashboard\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"success\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            LAWATAN\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div>\n    <ion-tabs>\n      <ion-tab-bar slot=\"top\" class=\"tab\">\n        <ion-tab-button tab=\"/lawatan\" style=\"height:30px; max-width:40%\">\n          <ion-label style=\"width: 80%; \">\n            <div>\n              LAWATAN\n            </div>\n            <!-- <ion-button round=true>Tunai Masuk</ion-button> -->\n          </ion-label>\n          <!-- <ion-icon name=\"musical-note\"></ion-icon> -->\n        </ion-tab-button>\n        <ion-tab-button tab=\"/laporan\" style=\"height:30px; max-width:40%\">\n          <ion-label>\n            LAPORAN\n          </ion-label>\n          <!-- <ion-icon name=\"game-controller\"></ion-icon> -->\n        </ion-tab-button>\n\n      </ion-tab-bar>\n\n      <ion-tab tab=\"/lawatan\">\n\n        <ion-content>\n\n          <div class=\"bg-white\" style=\"display: flex; flex-wrap:wrap\">\n            <ion-grid style=\"margin:5%; margin-bottom:0px\">\n              <ion-row style=\"margin-bottom: 10px;\">\n                <ion-col>\n                  <h5 class=\"bold\"> Perkara</h5>\n                </ion-col>\n                <ion-col class=\"ion-text-end\">\n                  <h5 class=\"bold\">Status</h5>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <div style=\"height: 70%; width:100%; overflow: scroll; display:flex; justify-content:center\">\n\n              <ion-grid class=\"rectangle-279\">\n                <ion-row *ngFor=\"let katalog of katalog\"\n                  style=\"margin-bottom: 10px; background-color: #EDEDED; border-radius: 15px;\"\n                  (click)=\"pengesahanLawatan()\">\n                  <ion-col>\n                    <div class=\" bold\" style=\"font-family: 'Nunito Sans';\">\n                      <ion-grid style=\"padding: 0%;\">\n                        <ion-row style=\"padding: 0%;\">\n                          <ion-col size=\"8\">\n                            <ion-text>\n                              <h6 class=\"bold no-padding\">\n                                {{katalog.nama_produk}}\n                              </h6>\n                            </ion-text>\n                            <ion-text color=\"success\">\n                              {{katalog.created_date}}\n                            </ion-text>\n                          </ion-col>\n                          <ion-col size=\"4\" style=\"padding: 0%; display:flex; justify-content:flex-end\">\n                            <img *ngIf=\"katalog.status_katalog == 'pending'\" src=\"assets/icon/pending.png\" alt=\"pending\"\n                              height=\"50px\">\n                            <img *ngIf=\"katalog.status_katalog == 'publish'\" src=\"assets/icon/publish-icon.png\"\n                              alt=\"publish\" height=\"50px%\">\n                            <img *ngIf=\"katalog.status_katalog == 'draft'\" src=\"assets/icon/draft-icon.png\" alt=\"draft\"\n                              height=\"50px%\">\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n\n\n            </div>\n            \n          </div>\n\n        </ion-content>\n      </ion-tab>\n\n      <ion-tab tab=\"/laporan\">\n\n        <ion-content>\n\n          <div class=\"bg-white\" style=\"display: flex; flex-wrap:wrap\">\n            <ion-grid style=\"margin:5%; margin-bottom:0px\">\n              <ion-row style=\"margin-bottom: 10px;\">\n                <ion-col>\n                  <h5 class=\"bold\"> Maklumat</h5>\n                </ion-col>\n                <ion-col class=\"ion-text-end\">\n                  <!-- <h5 class=\"bold\">Status</h5> -->\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <div style=\"height: 70%; width:100%; overflow: scroll; display:flex; justify-content:center\">\n\n              <ion-grid class=\"rectangle-279\">\n                <ion-row *ngFor=\"let pelanggan of pelanggan\" (click)=\"kemaskiniDokumen()\"\n                  style=\"margin-bottom: 10px; background-color: #EDEDED; border-radius: 15px;\"\n                  (click)=\"kemaskiniKatalog()\">\n                  <ion-col>\n                    <div class=\" bold\" style=\"font-family: 'Nunito Sans';\">\n                      <ion-grid style=\"padding: 0%;\">\n                        <ion-row style=\"padding: 0%;\">\n                          <ion-col size=\"8\">\n                            <ion-text>\n                              <h6 class=\"bold no-padding\">\n                                {{pelanggan.nama_pelanggan}}\n                              </h6>\n                            </ion-text>\n                            <ion-text color=\"medium\">\n                              <p class=\"font-13 no-padding\">\n                                {{pelanggan.created_date}}\n                              </p>\n                            </ion-text>\n                          </ion-col>\n                          <ion-col size=\"4\"\n                            style=\"padding: 0%; display:flex; justify-content:flex-end; align-items:center\">\n                            <img src=\"assets/icon/DOWNLOAD.png\" alt=\"pending\" height=\"25px\" style=\"margin-left: 20px;\">\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n\n\n            </div>\n            \n          </div>\n\n        </ion-content>\n\n      </ion-tab>\n\n\n    </ion-tabs>\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_core_lawatan_lawatan-usahawan_lawatan-usahawan_module_ts-es2015.js.map