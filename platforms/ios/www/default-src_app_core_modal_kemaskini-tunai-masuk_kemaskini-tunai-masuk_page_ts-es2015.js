(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["default-src_app_core_modal_kemaskini-tunai-masuk_kemaskini-tunai-masuk_page_ts"],{

/***/ 89167:
/*!********************************************************************************!*\
  !*** ./src/app/core/modal/kemaskini-tunai-masuk/kemaskini-tunai-masuk.page.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KemaskiniTunaiMasukPage": function() { return /* binding */ KemaskiniTunaiMasukPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_kemaskini_tunai_masuk_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./kemaskini-tunai-masuk.page.html */ 36032);
/* harmony import */ var _kemaskini_tunai_masuk_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kemaskini-tunai-masuk.page.scss */ 1110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_kategoriAliran_kategori_aliran_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/kategoriAliran/kategori-aliran.service */ 92478);
/* harmony import */ var src_app_services_Aliran_aliran_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Aliran/aliran.service */ 72311);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 92340);













let KemaskiniTunaiMasukPage = class KemaskiniTunaiMasukPage {
    constructor(modalController, formBuilder, kategoriAliranService, aliranService, router, alertController, loadingController) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.kategoriAliranService = kategoriAliranService;
        this.aliranService = aliranService;
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        //test var
        this.selectedValue = "";
        this.form = this.formBuilder.group({
            id_pengguna: [''],
            id_kategori_aliran: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            tarikh_aliran: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            keterangan_aliran: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            jumlah_aliran: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            nama_dokumen: [''],
            dokumen_lampiran: [''],
        });
    }
    ngOnInit() {
        this.today = new Date();
        var dd = String(this.today.getDate()).padStart(2, '0');
        var mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = this.today.getFullYear();
        this.today = yyyy + '-' + mm + '-' + dd;
        console.log("today", this.today);
        console.log("tunai masuk", this.tunai_masuk);
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.baseUrl + "storage/" + this.tunai_masuk.dokumen_lampiran;
        console.log("url", this.url);
        // this.data = this.tunai_masuk
        this.getKategoriAliran();
        // this.setFormValues()
    }
    dismiss() {
        this.modalController.dismiss(this.tunai_masuk);
    }
    getKategoriAliran() {
        this.kategoriAliranService.getKategoriAliran().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(x => x.filter(i => i.jenis_aliran == "tunai_masuk" && i.status_kategori_aliran == "aktif"))).subscribe((res) => {
            console.log("kategori aliran", res);
            this.kategori_aliran_masuk = res;
            // console.log("kategori aliran", this.kategori_aliran_masuk);
            this.setFormValues();
        });
    }
    refresh() {
        window.location.reload();
    }
    setFormValues() {
        this.selectedValue = "selected ";
        this.form.setValue({
            id_pengguna: this.tunai_masuk.id_pengguna,
            id_kategori_aliran: this.tunai_masuk.id_kategori_aliran,
            tarikh_aliran: this.tunai_masuk.tarikh_aliran,
            keterangan_aliran: this.tunai_masuk.keterangan_aliran,
            jumlah_aliran: this.tunai_masuk.jumlah_aliran,
            nama_dokumen: this.tunai_masuk.nama_dokumen,
            dokumen_lampiran: this.tunai_masuk.dokumen_lampiran,
        });
        this.form.updateValueAndValidity();
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Kemaskini Berjaya',
                subHeader: 'Kemaskini Aliran Masuk Telah Berjaya',
                message: '',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
            this.dismiss();
        });
    }
    presentAlert2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Berjaya Dihapus',
                subHeader: 'Aliran Telah Berjaya Dihapus',
                message: '',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
            this.dismiss();
        });
    }
    logForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '',
                message: 'Adakah anda setuju untuk menyimpan perubahan ini?',
                buttons: [
                    {
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    },
                    {
                        text: 'Ya',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            console.log('Confirm Okay');
                            this.form.value.tarikh_aliran = moment__WEBPACK_IMPORTED_MODULE_4__(this.form.value.tarikh_aliran).format('YYYY-MM-DD');
                            // this.form.value.nama_dokumen = this.file.name;
                            if (this.file != null) {
                                this.form.value.nama_dokumen = this.file.name;
                            }
                            const loading = yield this.loadingController.create({ message: 'Loading ...' });
                            loading.present();
                            console.log(this.form.value);
                            this.aliranService.update(this.form.value, Number(this.tunai_masuk.id)).subscribe((res) => {
                                console.log("updated data", res);
                                let formdata = new FormData();
                                formdata.append('dokumen_lampiran', this.file);
                                this.aliranService.uploadDoc(formdata, res.id).subscribe((resDoc) => {
                                    console.log("resDoc", resDoc);
                                    loading.dismiss();
                                    this.presentAlert();
                                });
                            });
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    onDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '',
                message: 'Adakah anda setuju untuk memadam maklumat ini?',
                buttons: [
                    {
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    },
                    {
                        text: 'Ya',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            console.log('Confirm Okay');
                            const loading = yield this.loadingController.create({ message: 'Deleting ...' });
                            loading.present();
                            this.aliranService.delete(this.tunai_masuk.id).subscribe((res) => {
                                console.log("deleted", res);
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
    selectedFile(event) {
        this.file = event.target.files[0];
        console.log(this.file);
        this.form.value.dokumen_lampiran = this.file;
        console.log(this.form.value.dokumen_lampiran);
        // document.getElementById("nama_fail").innerHTML(this.file)
        document.getElementById('nama_fail').innerHTML = this.file.name;
    }
};
KemaskiniTunaiMasukPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_kategoriAliran_kategori_aliran_service__WEBPACK_IMPORTED_MODULE_2__.KategoriAliranService },
    { type: src_app_services_Aliran_aliran_service__WEBPACK_IMPORTED_MODULE_3__.AliranService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController }
];
KemaskiniTunaiMasukPage.propDecorators = {
    tunai_masuk: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }]
};
KemaskiniTunaiMasukPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-kemaskini-tunai-masuk',
        template: _raw_loader_kemaskini_tunai_masuk_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_kemaskini_tunai_masuk_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], KemaskiniTunaiMasukPage);



/***/ }),

/***/ 72311:
/*!***************************************************!*\
  !*** ./src/app/services/Aliran/aliran.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AliranService": function() { return /* binding */ AliranService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);




let AliranService = class AliranService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/aliran";
    }
    post(data) {
        return this.http.post(`${this.url}`, data);
    }
    get(id) {
        return this.http.get(`${this.url}` + '/' + id);
    }
    update(aliran, aliran_id) {
        return this.http.put(`${this.url}/${aliran_id}`, aliran);
    }
    delete(aliran_id) {
        return this.http.delete(`${this.url}/${aliran_id}`);
    }
    uploadDoc(data, id) {
        return this.http.post(`${this.url}` + "/uploadDoc/" + id, data);
    }
    getTotalYear(id) {
        return this.http.get(`${this.url}` + "/getYear/" + id);
    }
    getTotalMonth(id) {
        return this.http.get(`${this.url}` + "/getMonth/" + id);
    }
};
AliranService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
AliranService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AliranService);



/***/ }),

/***/ 92478:
/*!********************************************************************!*\
  !*** ./src/app/services/kategoriAliran/kategori-aliran.service.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KategoriAliranService": function() { return /* binding */ KategoriAliranService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);




let KategoriAliranService = class KategoriAliranService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/kategori_aliran";
    }
    getKategoriAliran() {
        return this.http.get(`${this.url}`);
    }
};
KategoriAliranService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
KategoriAliranService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], KategoriAliranService);



/***/ }),

/***/ 1110:
/*!**********************************************************************************!*\
  !*** ./src/app/core/modal/kemaskini-tunai-masuk/kemaskini-tunai-masuk.page.scss ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  padding: 10px;\n  margin-bottom: 50px;\n}\n\n.label {\n  padding: 10px;\n  margin-bottom: 50px;\n}\n\nion-datetime {\n  --background: #f5f5f5;\n  --padding-start: 0.75rem !important;\n  --padding-top: 0.625rem !important;\n  --placeholder-color: #8898aa;\n  --placeholder-font-weight: 400;\n  border: 1px solid #dee2e6 !important;\n  border-radius: 1rem !important;\n  box-shadow: 0 3px 2px rgba(233, 236, 239, 0.05) !important;\n  line-height: 1.5 !important;\n}\n\nion-label {\n  --color: #525f7f;\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding-bottom: 20px;\n}\n\n.jumlah {\n  font-size: 30px;\n  color: #00a651;\n}\n\nion-item {\n  --max-height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtlbWFza2luaS10dW5haS1tYXN1ay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSwwREFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoia2VtYXNraW5pLXR1bmFpLW1hc3VrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ubGFiZWwge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLXRvcDogMC42MjVyZW0gIWltcG9ydGFudDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjODg5OGFhO1xuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDJweCByZ2JhKDIzMywgMjM2LCAyMzksIDAuMDUpICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNSAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICAgIC0tY29sb3I6ICM1MjVmN2Y7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uanVtbGFoIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICMwMGE2NTE7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLW1heC1oZWlnaHQ6IDE2cHg7XG59XG5cbi8vIGJ1dHRvbjpkaXNhYmxlZCxcbi8vIGJ1dHRvbltkaXNhYmxlZF0ge1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbi8vICAgICBjb2xvcjogIzY2NjY2Njtcbi8vIH1cblxuXG4vLyAuYnV0dG9uX2RvY3tcblxuLy8gfVxuIl19 */");

/***/ }),

/***/ 36032:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/modal/kemaskini-tunai-masuk/kemaskini-tunai-masuk.page.html ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button  (click)=\"dismiss()\">\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"success\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            TUNAI MASUK\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <form [formGroup]=\"form\" (ngSubmit)=\"logForm()\" style=\"margin: 30px;\">\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>KATEGORI ALIRAN</ion-label>\n          <ion-select formControlName=\"id_kategori_aliran\" >\n            <ion-select-option *ngFor=\"let aliran_masuk of kategori_aliran_masuk\" [value]=\"aliran_masuk.id\" selected=\"aliran_masuk.id == this.tunai_masuk.id_kategori_aliran\">\n              {{aliran_masuk.nama_kategori_aliran}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>TARIKH</ion-label>\n          <!-- <ion-input type=\"date\" formControlName=\"title\"></ion-input> -->\n          <ion-datetime presentation=\"date\" [max]=\"today\" formControlName=\"tarikh_aliran\" value=\"{{tunai_masuk.tarikh_aliran}}\" style=\"background-color: #f5f5f5;\">\n          </ion-datetime>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>KETERANGAN</ion-label>\n          <ion-input type=\"text\" formControlName=\"keterangan_aliran\" style=\"text-transform: none !important;\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-text-center\" style=\"display: flex; justify-content:center\">\n        <!-- <ion-col class=\"ion-text-center\"> -->\n        <p style=\"margin: 0px; font-weight:bold\"> JUMLAH <span style=\"color: red;\">*</span></p><br>\n        <!-- </ion-col> -->\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 30px; border-bottom: 1px solid\">\n        <ion-col class=\"jumlah\" [size]=4 style=\"display:flex; justify-content:center; align-items:center\">\n          RM\n        </ion-col>\n        <ion-col [size]=8>\n          <!-- <ion-item class=\" ion-text-center\">\n            <ion-label class=\"jumlah\" style=\"margin-top:50px\">RM </ion-label> -->\n            <ion-input class=\"jumlah\" type=\"number\" formControlName=\"jumlah_aliran\"></ion-input>\n          <!-- </ion-item> -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-label>DOKUMEN LAMPIRAN</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n\n        <ion-col class=\"form-control ion-margin\">\n\n          <label>\n            <div class=\"ion-text-center\"\n              style=\"background-color: #919091; color:white; display:flex; justify-content:center; padding:10px; border-radius:10px\">\n              PILIH DOKUMEN\n            </div>\n\n            <ion-input class=\"ion-hide\" type=\"file\" name=\"dokumen\" id=\"dokumen\" [(ngModel)]=\"file\"\n              [ngModelOptions]=\"{standalone: true}\" (change)=\"selectedFile($event)\"></ion-input>\n\n          </label>\n          <!-- <label for=\"doc\">\n            <ion-button for=\"doc\" color=\"success\" expand=\"block\" for=\"doc\">PILIH DOKUMEN</ion-button>\n          </label> -->\n        </ion-col>\n        <ion-col class=\"form-control ion-margin-top\">\n          <a [href]=\"url\" id=\"nama_fail\" target=\"_blank\" download style=\"color: black;\">{{tunai_masuk.nama_dokumen}}</a>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-button color=\"dark\" expand=\"block\" type=\"submit\">KEMASKINI</ion-button>\n          <ion-button color=\"warning\" expand=\"block\" (click)=\"onDelete()\">PADAM</ion-button>\n        </ion-col>\n      </ion-row>\n      \n    </form>\n  </ion-grid>\n  \n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_modal_kemaskini-tunai-masuk_kemaskini-tunai-masuk_page_ts-es2015.js.map