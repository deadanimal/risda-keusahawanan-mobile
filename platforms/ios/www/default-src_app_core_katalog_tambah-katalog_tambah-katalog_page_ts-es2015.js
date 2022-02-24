(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["default-src_app_core_katalog_tambah-katalog_tambah-katalog_page_ts"],{

/***/ 45558:
/*!********************************************************************!*\
  !*** ./src/app/core/katalog/tambah-katalog/tambah-katalog.page.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TambahKatalogPage": function() { return /* binding */ TambahKatalogPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tambah_katalog_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tambah-katalog.page.html */ 88480);
/* harmony import */ var _tambah_katalog_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tambah-katalog.page.scss */ 38628);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/katalog/katalog.service */ 89496);








let TambahKatalogPage = class TambahKatalogPage {
    constructor(modalController, formBuilder, katalogService) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.katalogService = katalogService;
        this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
        this.user_id = window.sessionStorage.getItem("user_id");
        this.url = 'assets/icon/image-not-available.png';
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
        this.form = this.formBuilder.group({
            id_pengguna: ['',],
            nama_produk: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            kandungan_produk: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            harga_produk: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            berat_produk: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            keterangan_produk: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            gambar_url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            baki_stok: ['',],
            unit_production: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            status_katalog: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            // disahkan_oleh: ['', Validators.required],
            modified_by: ['',],
        });
    }
    ngOnInit() {
        this.images = [];
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    logForm() {
        this.form.value.gambar_url = this.images[0].data;
        console.log(this.form.value);
        this.katalogService.post(this.form.value).subscribe((res) => {
            console.log("res", res);
            this.dismiss();
        });
    }
    updateBakiStok() {
        this.form.setValue({
            id_pengguna: this.user_id,
            nama_produk: this.form.value.nama_produk,
            kandungan_produk: this.form.value.kandungan_produk,
            harga_produk: this.form.value.harga_produk,
            berat_produk: this.form.value.berat_produk,
            keterangan_produk: this.form.value.keterangan_produk,
            baki_stok: this.form.value.unit_production,
            unit_production: this.form.value.unit_production,
            status_katalog: this.form.value.status_katalog,
            gambar_url: this.form.value.gambar_url,
            modified_by: this.user_id,
        });
    }
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = (event) => {
                this.url = event.target.result;
            };
            this.fileEvent(event);
        }
    }
    fileEvent(e) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.images = [];
            const files = e.target.files;
            const file = files[0];
            const filePath = files[0].size;
            const base64Data = yield this.readAsBase64(file);
            const fileName = new Date().getTime() + '.jpeg';
            this.images.push({
                name: fileName,
                path: filePath,
                data: `${base64Data}`,
            });
            console.log("AAAA", this.images);
        });
    }
    // https://ionicframework.com/docs/angular/your-first-app/3-saving-photos
    readAsBase64(blob) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // Fetch the photo, read as a blob, then convert to base64 format
            // const response = await fetch(photo.webPath);
            // const blob = await response.blob();
            return (yield this.convertBlobToBase64(blob));
        });
    }
};
TambahKatalogPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_2__.KatalogService }
];
TambahKatalogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tambah-katalog',
        template: _raw_loader_tambah_katalog_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tambah_katalog_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TambahKatalogPage);



/***/ }),

/***/ 38628:
/*!**********************************************************************!*\
  !*** ./src/app/core/katalog/tambah-katalog/tambah-katalog.page.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  padding: 10px;\n  margin-bottom: 50px;\n}\n\n.label {\n  padding: 10px;\n  margin-bottom: 50px;\n}\n\nion-datetime {\n  --background: #f5f5f5;\n  --padding-start: 0.75rem !important;\n  --padding-top: 0.625rem !important;\n  --placeholder-color: #8898aa;\n  --placeholder-font-weight: 400;\n  border: 1px solid #dee2e6 !important;\n  border-radius: 1rem !important;\n  box-shadow: 0 3px 2px rgba(233, 236, 239, 0.05) !important;\n  line-height: 1.5 !important;\n}\n\nion-label {\n  --color: #525f7f;\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding-bottom: 20px;\n}\n\n.jumlah {\n  font-size: 30px;\n  color: #00a651;\n}\n\nion-item {\n  --max-height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhbWJhaC1rYXRhbG9nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLDBEQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJ0YW1iYWgta2F0YWxvZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWwge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmxhYmVsIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgIC0tcGFkZGluZy1zdGFydDogMC43NXJlbSAhaW1wb3J0YW50O1xuICAgIC0tcGFkZGluZy10b3A6IDAuNjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzg4OThhYTtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDNweCAycHggcmdiYSgyMzMsIDIzNiwgMjM5LCAwLjA1KSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjUgIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICAtLWNvbG9yOiAjNTI1ZjdmO1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmp1bWxhaCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiAjMDBhNjUxO1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1tYXgtaGVpZ2h0OiAxNnB4O1xufVxuXG4vLyBidXR0b246ZGlzYWJsZWQsXG4vLyBidXR0b25bZGlzYWJsZWRdIHtcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG4vLyAgICAgY29sb3I6ICM2NjY2NjY7XG4vLyB9XG4iXX0= */");

/***/ }),

/***/ 88480:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/katalog/tambah-katalog/tambah-katalog.page.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" (click)=\"dismiss()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"success\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            TAMBAH KATALOG\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <form [formGroup]=\"form\" (ngSubmit)=\"logForm()\" style=\"margin: 20px;\">\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>NAMA PRODUK</ion-label>\n          <ion-input type=\"text\" formControlName=\"nama_produk\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>KANDUNGAN PRODUK</ion-label>\n          <!-- <ion-input type=\"date\" formControlName=\"title\"></ion-input> -->\n          <ion-input type=\"text\" formControlName=\"kandungan_produk\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>BERAT (kg)</ion-label>\n          <ion-input placeholder=\"0.0\" class=\"ion-text-right\" type=\"number\" formControlName=\"berat_produk\">\n          </ion-input>\n        </ion-col>\n        <ion-col class=\"form-control\">\n          <ion-label>HARGA JUALAN</ion-label>\n          <ion-input type=\"number\" formControlName=\"harga_produk\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>UNIT PRODUCTION</ion-label>\n          <ion-input type=\"text\" formControlName=\"unit_production\" (change)=\"updateBakiStok()\"></ion-input>\n        </ion-col>\n        <ion-col class=\"form-control\">\n          <ion-label>BAKI STOK</ion-label>\n          <ion-input type=\"text\" formControlName=\"baki_stok\" value=\"bakiStok\" readonly></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>KETERANGAN LAIN</ion-label>\n          <!-- <ion-input type=\"text\" formControlName=\"title\"></ion-input> -->\n          <ion-textarea rows=\"5\" formControlName=\"keterangan_produk\"></ion-textarea>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <!-- <ion-item lines=\"none\" style=\"border: none;\"> -->\n          <ion-label position=\"stacked\">STATUS</ion-label>\n          <ion-select formControlName=\"status_katalog\">\n            <ion-select-option value=\"pending\">Publish</ion-select-option>\n            <ion-select-option value=\"draft\">Draft</ion-select-option>\n          </ion-select>\n          <!-- </ion-item> -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <ion-label class=\"ion-text-center\" style=\"padding-bottom: 0px;\">GAMBAR</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\" style=\"display: flex; justify-content:center\">\n          <label>\n            <div >\n              \n              <br>\n              <img [src]=\"url\" class=\"border-radius-md\" width=\"80\" height=\"80\"\n                id=\"upload-Preview\" />\n            </div>\n            <ion-input type=\"file\" accept=\"image/*\" (change)=\"onSelectFile($event)\" formControlName=\"gambar_url\"   name=\"gambar_profil\" style=\"display: none\"></ion-input>\n          </label>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <!-- <ion-input type=\"file\" accept=\"image/*\" (change)=\"onSelectFile($event)\" formControlName=\"gambar_url\"   name=\"gambar_profil\" ></ion-input> -->\n\n          <ion-button color=\"success\" expand=\"block\" type=\"submit\" [disabled]=\"form.invalid\">TAMBAH KATALOG</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n\n\n</ion-content>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_katalog_tambah-katalog_tambah-katalog_page_ts-es2015.js.map