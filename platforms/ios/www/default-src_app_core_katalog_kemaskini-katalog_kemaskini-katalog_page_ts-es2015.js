(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["default-src_app_core_katalog_kemaskini-katalog_kemaskini-katalog_page_ts"],{

/***/ 43564:
/*!**************************************************************************!*\
  !*** ./src/app/core/katalog/kemaskini-katalog/kemaskini-katalog.page.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KemaskiniKatalogPage": function() { return /* binding */ KemaskiniKatalogPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_kemaskini_katalog_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./kemaskini-katalog.page.html */ 380);
/* harmony import */ var _kemaskini_katalog_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kemaskini-katalog.page.scss */ 7556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/katalog/katalog.service */ 89496);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_stok_stok_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/stok/stok.service */ 67441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88002);











let KemaskiniKatalogPage = class KemaskiniKatalogPage {
    constructor(modalController, formBuilder, katalogService, loadingController, alertController, stokService) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.katalogService = katalogService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.stokService = stokService;
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
            nama_produk: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            kandungan_produk: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            harga_produk: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            berat_produk: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            keterangan_produk: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            gambar_url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            baki_stok: ['',],
            unit_production: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            status_katalog: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            // disahkan_oleh: ['', Validators.required],
            modified_by: ['',],
        });
    }
    ngOnInit() {
        this.images = [];
        console.log("katalog", this.katalog);
        this.setFormValues();
    }
    dismiss() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    updateBakiStok() {
        this.stokService.getStokKatalog().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(x => x.filter(i => i.id_katalog == this.katalog.id))).subscribe((res) => {
            console.log("stok", res);
            let totalStok = 0;
            res.forEach(element => {
                totalStok += Number(element.stok_dijual);
            });
            console.log("total", totalStok);
            let bakiStok = this.form.value.unit_production - totalStok;
            console.log("baki", bakiStok);
            this.form.patchValue({
                baki_stok: bakiStok
                // unit_production: this.form.value.unit_production,
            });
        });
    }
    setFormValues() {
        this.form.setValue({
            id_pengguna: this.katalog.id_pengguna,
            nama_produk: this.katalog.nama_produk,
            kandungan_produk: this.katalog.kandungan_produk,
            harga_produk: this.katalog.harga_produk,
            berat_produk: this.katalog.berat_produk,
            keterangan_produk: this.katalog.keterangan_produk,
            baki_stok: this.katalog.unit_production,
            unit_production: this.katalog.unit_production,
            status_katalog: this.katalog.status_katalog,
            gambar_url: this.katalog.gambar_url,
            modified_by: this.katalog.modified_by,
        });
        this.form.updateValueAndValidity();
    }
    logForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.form.value.tarikh_aliran = moment__WEBPACK_IMPORTED_MODULE_3__(this.form.value.tarikh_aliran).format('YYYY-MM-DD');
            const loading = yield this.loadingController.create({ message: 'Loading ...' });
            loading.present();
            console.log(this.form.value);
            this.katalogService.update(this.form.value, Number(this.katalog.id)).subscribe((res) => {
                console.log("updated data", res);
                loading.dismiss();
                this.presentAlert();
            });
        });
    }
    onDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: 'Deleting ...' });
            loading.present();
            this.katalogService.delete(this.katalog.id).subscribe((res) => {
                console.log("deleted", res);
                loading.dismiss();
                this.presentAlert2();
            });
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Kemaskini Berjaya',
                subHeader: 'Kemaskini Katalog Telah Berjaya',
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
    presentAlert2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Berjaya Dihapus',
                subHeader: 'Katalog Telah Berjaya Dihapus',
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // Fetch the photo, read as a blob, then convert to base64 format
            // const response = await fetch(photo.webPath);
            // const blob = await response.blob();
            return (yield this.convertBlobToBase64(blob));
        });
    }
};
KemaskiniKatalogPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_2__.KatalogService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: src_app_services_stok_stok_service__WEBPACK_IMPORTED_MODULE_4__.StokService }
];
KemaskiniKatalogPage.propDecorators = {
    katalog: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
KemaskiniKatalogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-kemaskini-katalog',
        template: _raw_loader_kemaskini_katalog_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_kemaskini_katalog_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], KemaskiniKatalogPage);



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
    }
    post(data) {
        return this.http.post(`${this.url}`, data);
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

/***/ 67441:
/*!***********************************************!*\
  !*** ./src/app/services/stok/stok.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StokService": function() { return /* binding */ StokService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let StokService = class StokService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/stok";
        this.url2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/deleteStok";
    }
    post(data) {
        return this.http.post(`${this.url}`, data);
    }
    getStokKatalog() {
        return this.http.get(`${this.url}`);
    }
    get(id) {
        return this.http.get(`${this.url}` + '/' + id);
    }
    update(data, id) {
        return this.http.put(`${this.url}/${id}`, data);
    }
    delete(id) {
        return this.http.delete(`${this.url}/${id}`);
    }
    deleteMany(id_pelanggan) {
        return this.http.get(`${this.url2}/${id_pelanggan}`);
    }
};
StokService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
StokService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], StokService);



/***/ }),

/***/ 7556:
/*!****************************************************************************!*\
  !*** ./src/app/core/katalog/kemaskini-katalog/kemaskini-katalog.page.scss ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrZW1hc2tpbmkta2F0YWxvZy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 380:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/katalog/kemaskini-katalog/kemaskini-katalog.page.html ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" (click)=\"dismiss()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"success\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            KEMASKINI KATALOG\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <form [formGroup]=\"form\" (ngSubmit)=\"logForm()\" style=\"margin: 20px;\">\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>NAMA PRODUK</ion-label>\n          <ion-input type=\"text\" formControlName=\"nama_produk\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>KANDUNGAN PRODUK</ion-label>\n          <!-- <ion-input type=\"date\" formControlName=\"title\"></ion-input> -->\n          <ion-input type=\"text\" formControlName=\"kandungan_produk\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>BERAT (kg)</ion-label>\n          <ion-input placeholder=\"0.0\" class=\"ion-text-right\" type=\"number\" formControlName=\"berat_produk\">\n          </ion-input>\n        </ion-col>\n        <ion-col class=\"form-control\">\n          <ion-label>HARGA JUALAN</ion-label>\n          <ion-input type=\"number\" formControlName=\"harga_produk\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>UNIT PRODUCTION</ion-label>\n          <ion-input type=\"text\" formControlName=\"unit_production\" (change)=\"updateBakiStok()\"></ion-input>\n        </ion-col>\n        <ion-col class=\"form-control\">\n          <ion-label>BAKI STOK</ion-label>\n          <ion-input type=\"text\" formControlName=\"baki_stok\" value=\"bakiStok\" readonly></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>KETERANGAN LAIN</ion-label>\n          <!-- <ion-input type=\"text\" formControlName=\"title\"></ion-input> -->\n          <ion-textarea rows=\"5\" formControlName=\"keterangan_produk\"></ion-textarea>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <!-- <ion-item lines=\"none\" style=\"border: none;\"> -->\n          <ion-label position=\"stacked\">STATUS</ion-label>\n          <ion-select formControlName=\"status_katalog\">\n            <ion-select-option value=\"pending\">Publish</ion-select-option>\n            <ion-select-option value=\"draft\">Draft</ion-select-option>\n          </ion-select>\n          <!-- </ion-item> -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <ion-label class=\"ion-text-center\" style=\"padding-bottom: 0px;\">GAMBAR</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\" style=\"display: flex; justify-content:center\">\n          <label>\n            <div >\n              \n              <br>\n              <img [src]=\"katalog.gambar_url\" class=\"border-radius-md\" width=\"80\" height=\"80\"\n                id=\"upload-Preview\" />\n            </div>\n            <ion-input accept=\"image/*\" (change)=\"onSelectFile($event)\" formControlName=\"gambar_url\"  type=\"file\" name=\"gambar_profil\" style=\"display: none\"></ion-input>\n          </label>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-button type=\"submit\" color=\"success\" expand=\"block\">KEMASKINI</ion-button>\n          <ion-button color=\"danger\" expand=\"block\" (click)=\"onDelete()\">HAPUS</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_katalog_kemaskini-katalog_kemaskini-katalog_page_ts-es2015.js.map