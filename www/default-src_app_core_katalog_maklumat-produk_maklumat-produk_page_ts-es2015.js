(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["default-src_app_core_katalog_maklumat-produk_maklumat-produk_page_ts"],{

/***/ 27010:
/*!**********************************************************************!*\
  !*** ./src/app/core/katalog/maklumat-produk/maklumat-produk.page.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaklumatProdukPage": function() { return /* binding */ MaklumatProdukPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_maklumat_produk_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./maklumat-produk.page.html */ 59749);
/* harmony import */ var _maklumat_produk_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maklumat-produk.page.scss */ 89862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/katalog/katalog.service */ 89496);






let MaklumatProdukPage = class MaklumatProdukPage {
    constructor(modalController, katalogService, loadingController, alertController) {
        this.modalController = modalController;
        this.katalogService = katalogService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.usahawan = {
            name: "",
            namasyarikat: ""
        };
        this.gambar_url = "assets/img/pic1.jpeg";
    }
    ngOnInit() {
        console.log("katalog", this.katalog);
        this.getMaklumatUsahawan();
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    getMaklumatUsahawan() {
        this.katalogService.getMaklumatUsahawan(this.katalog.id_pengguna).subscribe((res) => {
            console.log("usahawan", res);
            this.usahawan = res;
        });
    }
    pengesahan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '',
                message: 'Adakah anda pasti mahu mengesahkan katalog?',
                buttons: [
                    {
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'secondary',
                        id: 'cancel-button',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    },
                    {
                        text: 'Ya',
                        id: 'confirm-button',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                            console.log('Confirm Okay');
                            const loading = yield this.loadingController.create({ message: 'Disahkan ...' });
                            loading.present();
                            this.katalogService.pengesahanPegawai(this.katalog.katalog_id).subscribe((res) => {
                                console.log("updated", res);
                                loading.dismiss();
                                this.presentAlert2();
                            });
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlert2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Berjaya Disahkan',
                subHeader: 'Katalog Telah Disahkan',
                message: '',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
            this.dismiss();
            this.refresh();
        });
    }
    refresh() {
        window.location.reload();
    }
};
MaklumatProdukPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_2__.KatalogService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
MaklumatProdukPage.propDecorators = {
    katalog: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
MaklumatProdukPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-maklumat-produk',
        template: _raw_loader_maklumat_produk_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_maklumat_produk_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MaklumatProdukPage);



/***/ }),

/***/ 89496:
/*!*****************************************************!*\
  !*** ./src/app/services/katalog/katalog.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KatalogService": function() { return /* binding */ KatalogService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let KatalogService = class KatalogService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/katalog";
        this.url2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/katalogPegawai";
        this.url3 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/pengesahanPegawai";
        this.url4 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/katalogdashboard";
    }
    post(data) {
        return this.http.post(`${this.url}`, data);
    }
    getAll() {
        return this.http.get(`${this.url}`);
    }
    get(user_id) {
        return this.http.get(`${this.url}` + "/" + user_id);
    }
    update(aliran, aliran_id) {
        return this.http.put(`${this.url}/${aliran_id}`, aliran);
    }
    delete(aliran_id) {
        return this.http.delete(`${this.url}/${aliran_id}`);
    }
    getKatalogPegawai(id) {
        return this.http.get(`${this.url2}` + "/" + id);
    }
    pengesahanPegawai(id) {
        return this.http.get(`${this.url3}` + "/" + id);
    }
    katalogPdf(id) {
        return this.http.get(`${this.url}` + '/katalogPdf/' + id);
    }
    getMaklumatUsahawan(id) {
        return this.http.get(`${this.url}` + '/showMaklumatUsahawan/' + id);
    }
    katalogdashboard() {
        return this.http.get(`${this.url4}`);
    }
};
KatalogService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
KatalogService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], KatalogService);



/***/ }),

/***/ 89862:
/*!************************************************************************!*\
  !*** ./src/app/core/katalog/maklumat-produk/maklumat-produk.page.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans:600,800\");\n.bold,\nh1 {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n.nunito {\n  font-family: \"Nunito Sans\";\n}\n.font-15 {\n  font-size: 15px;\n}\n.font-11 {\n  font-size: 13px;\n}\n.no-padding {\n  padding: 0px !important;\n}\n.no-margin {\n  margin: 0px !important;\n}\n.dark-green {\n  color: #15493C;\n}\n.rectangle-280 {\n  background-color: #FF6600;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n.bg-white {\n  background-color: white;\n  height: 85%;\n  display: flex;\n  justify-content: center;\n  min-width: 100%;\n  border-radius: 0px 0px 40px 40px;\n  flex-wrap: wrap;\n}\n.gambar_produk {\n  background-image: url(\"/assets/img/pic2.jpeg\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-radius: 0px 0px 30px 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ha2x1bWF0LXByb2R1ay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMEVBQUE7QUFFUjs7RUFFSSxpQkFBQTtFQUNBLDBCQUFBO0FBQUo7QUFHQTtFQUNJLDBCQUFBO0FBQUo7QUFHQTtFQUNJLGVBQUE7QUFBSjtBQUdBO0VBQ0ksZUFBQTtBQUFKO0FBR0E7RUFDSSx1QkFBQTtBQUFKO0FBR0E7RUFDSSxzQkFBQTtBQUFKO0FBR0E7RUFDSSxjQUFBO0FBQUo7QUFHQTtFQUVJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFESjtBQUlBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQURKO0FBT0E7RUFFSSw4Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUVBLGdDQUFBO0FBTkoiLCJmaWxlIjoibWFrbHVtYXQtcHJvZHVrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bytTYW5zOjYwMCw4MDBcIik7XG5cbi5ib2xkLFxuaDEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XG59XG5cbi5udW5pdG97XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2Fucyc7XG59XG5cbi5mb250LTE1e1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmZvbnQtMTF7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubm8tcGFkZGluZyB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uby1tYXJnaW4ge1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXJrLWdyZWVue1xuICAgIGNvbG9yOiAjMTU0OTNDO1xufVxuXG4ucmVjdGFuZ2xlLTI4MCB7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjYwMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4uYmctd2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogODUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNDBweCA0MHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAvLyBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAvLyBwYWRkaW5nOiAyMHB4O1xuICAgIC8vIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5nYW1iYXJfcHJvZHVrIHtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL3BpYzIuanBlZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDMwcHggMzBweDtcbiAgICBcbn1cbiJdfQ== */");

/***/ }),

/***/ 59749:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/katalog/maklumat-produk/maklumat-produk.page.html ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"height: 80px; display:flex; justify-content:center; align-items:center\">\n\n    <ion-text style=\"display:flex; justify-content:center;\">\n      <h5 style=\"color: #15493C;\">\n        <!-- <strong class=\"ion-text-uppercase\"> -->\n        Maklumat Produk\n        <!-- </strong> -->\n      </h5>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <div class=\"rectangle-280\"></div>\n\n  <div class=\"bg-white\">\n\n    <div class=\"gambar_produk\" style=\"height: 30%; width:100%; background-image: url('{{katalog.gambar_url}}');\">\n      <!-- <img src=\"assets/img/pic1.jpeg\" alt=\"\" > -->\n    </div>\n\n\n    <div style=\"display: flex; align-items:flex-start; width:100%; height:60%; overflow:scroll; margin:5%\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"8\">\n            <h4 class=\"bold no-margin dark-green\" style=\"text-transform: uppercase;\">\n              {{katalog.nama_produk}}\n            </h4>\n\n            <ion-text color=\"warning\" class=\"bold no-margin\">\n              {{katalog.baki_stok}}\n            </ion-text>\n            <br>\n            <ion-text color=\"medium\" class=\"bold no-margin\">\n              <small>\n                Berat: {{katalog.berat_produk}}KG\n              </small>\n            </ion-text>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-text color=\"warning\" class=\"bold no-margin\">\n              <h5 class=\"bold no-margin\">\n                RM {{katalog.harga_produk}}\n              </h5>\n            </ion-text>\n\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-text class=\"bold no-margin\">\n              <h6>Nama Usahawan</h6>\n            </ion-text>\n            <ion-text color=\"medium\" class=\"no-margin\">\n              <p class=\"nunito font-15\" style=\" text-align: justify; text-justify: inter-word;\">\n                {{usahawan.name}}\n              </p>\n            </ion-text>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-text class=\"bold no-margin\">\n              <h6>Nama Syarikat</h6>\n            </ion-text>\n            <ion-text color=\"medium\" class=\"no-margin\">\n              <p class=\"nunito font-15\" style=\" text-align: justify; text-justify: inter-word;\">\n                {{usahawan.namasyarikat}}\n              </p>\n            </ion-text>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n          <ion-col>\n            <ion-text class=\"bold no-margin\">\n              <h6>Keterangan</h6>\n            </ion-text>\n            <ion-text color=\"medium\" class=\"no-margin\">\n              <p class=\"nunito font-15\" style=\" text-align: justify; text-justify: inter-word;\">\n                {{katalog.keterangan_produk}}\n              </p>\n            </ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-text class=\"bold no-margin\">\n              <h6>Kandungan Produk</h6>\n            </ion-text>\n            <ion-text color=\"medium\" class=\"no-margin\">\n              <p class=\"nunito font-15\" style=\" text-align: justify; text-justify: inter-word;\">\n                {{katalog.kandungan_produk}}\n              </p>\n            </ion-text>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n  </div>\n  <div style=\"height:15%; display: flex; align-items:center; justify-content:space-around\">\n    <ion-button (click)=\"dismiss()\" fill=\"default\" class=\"ion-text-uppercase bold font-11\" style=\"color: #D30F0F;\">Batal</ion-button>\n    <ion-button (click)=\"pengesahan()\" color=\"dark\"  class=\"ion-text-uppercase bold font-11\" >Sahkan</ion-button>\n  </div>\n\n  <!-- <div class=\"kmi nunitosans-extra-bold-te-papa-green-18px\">Maklumat<br />Insentif</div>\n\n  <div class=\"body\">\n    <div class=\"maklumatnunitosans-extra-bold-te-papa-green-18px\">\n      <div class=\"kmi\">Maklumat<br />Insentif</div>\n      <div class=\"x2000\">Jumlah<br />Bantuan</div>\n    </div>\n\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_katalog_maklumat-produk_maklumat-produk_page_ts-es2015.js.map