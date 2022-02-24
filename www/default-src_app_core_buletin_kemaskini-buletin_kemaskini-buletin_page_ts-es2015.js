(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["default-src_app_core_buletin_kemaskini-buletin_kemaskini-buletin_page_ts"],{

/***/ 21318:
/*!**************************************************************************!*\
  !*** ./src/app/core/buletin/kemaskini-buletin/kemaskini-buletin.page.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KemaskiniBuletinPage": function() { return /* binding */ KemaskiniBuletinPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_kemaskini_buletin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./kemaskini-buletin.page.html */ 98142);
/* harmony import */ var _kemaskini_buletin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kemaskini-buletin.page.scss */ 32030);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_buletin_buletin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/buletin/buletin.service */ 42101);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);









let KemaskiniBuletinPage = class KemaskiniBuletinPage {
    constructor(modalController, formBuilder, buletinService, alertController) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.buletinService = buletinService;
        this.alertController = alertController;
        // Convert the base64 to blob data
        // and create  formData with it
        this.images = [];
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
        this.form = this.formBuilder.group({
            tajuk: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            tarikh: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            keterangan_lain: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            gambar_buletin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
    }
    ngOnInit() {
        console.log("buletin", this.buletin);
        this.setFormValues();
    }
    setFormValues() {
        let date = moment__WEBPACK_IMPORTED_MODULE_3__(this.buletin.tarikh).format('YYYY-MM-DD');
        this.form.patchValue({
            tajuk: this.buletin.tajuk,
            tarikh: date,
            keterangan_lain: this.buletin.keterangan_lain,
            status: this.buletin.status,
            gambar_buletin: this.buletin.gambar_buletin,
        });
        this.url = this.buletin.gambar_buletin;
        this.form.updateValueAndValidity();
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    logForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                            console.log('Confirm Okay');
                            if (this.images.length > 0) {
                                this.form.value.gambar_buletin = this.images[0].data;
                            }
                            else {
                                this.form.value.gambar_buletin = this.buletin.gambar_buletin;
                            }
                            this.form.value.tarikh = moment__WEBPACK_IMPORTED_MODULE_3__(this.form.value.tarikh).format('YYYY-MM-DD');
                            console.log(this.form.value);
                            this.buletinService.update(this.form.value, this.buletin.id).subscribe((res) => {
                                console.log("updated data", res);
                                // this.dismiss();
                                this.presentAlert();
                            });
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Kemaskini Berjaya',
                subHeader: 'Kemaskini Buletin Telah Berjaya',
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
    //image
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // Fetch the photo, read as a blob, then convert to base64 format
            // const response = await fetch(photo.webPath);
            // const blob = await response.blob();
            return (yield this.convertBlobToBase64(blob));
        });
    }
};
KemaskiniBuletinPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_buletin_buletin_service__WEBPACK_IMPORTED_MODULE_2__.BuletinService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
KemaskiniBuletinPage.propDecorators = {
    buletin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
KemaskiniBuletinPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-kemaskini-buletin',
        template: _raw_loader_kemaskini_buletin_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_kemaskini_buletin_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], KemaskiniBuletinPage);



/***/ }),

/***/ 42101:
/*!*****************************************************!*\
  !*** ./src/app/services/buletin/buletin.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuletinService": function() { return /* binding */ BuletinService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let BuletinService = class BuletinService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/buletin";
    }
    post(data) {
        return this.http.post(`${this.url}`, data);
    }
    get(pegawai_id) {
        return this.http.get(`${this.url}` + "/" + pegawai_id);
    }
    getAll() {
        return this.http.get(`${this.url}`);
    }
    update(data, id) {
        return this.http.put(`${this.url}/${id}`, data);
    }
};
BuletinService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
BuletinService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], BuletinService);



/***/ }),

/***/ 32030:
/*!****************************************************************************!*\
  !*** ./src/app/core/buletin/kemaskini-buletin/kemaskini-buletin.page.scss ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-datetime {\n  --background: #f5f5f5;\n  --padding-start: 0.75rem !important;\n  --padding-top: 0.625rem !important;\n  --placeholder-color: #8898aa;\n  --placeholder-font-weight: 400;\n  border: 1px solid #dee2e6 !important;\n  border-radius: 1rem !important;\n  box-shadow: 0 3px 2px rgba(233, 236, 239, 0.05) !important;\n  line-height: 1.5 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtlbWFza2luaS1idWxldGluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsMERBQUE7RUFDQSwyQkFBQTtBQUNKIiwiZmlsZSI6ImtlbWFza2luaS1idWxldGluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1kYXRldGltZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgIC0tcGFkZGluZy1zdGFydDogMC43NXJlbSAhaW1wb3J0YW50O1xuICAgIC0tcGFkZGluZy10b3A6IDAuNjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzg4OThhYTtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDNweCAycHggcmdiYSgyMzMsIDIzNiwgMjM5LCAwLjA1KSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ 98142:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/buletin/kemaskini-buletin/kemaskini-buletin.page.html ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" (click)=\"dismiss()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"success\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            KEMASKINI BULETIN\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <form [formGroup]=\"form\" (ngSubmit)=\"logForm()\" style=\"margin: 20px;\">\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>TAJUK</ion-label>\n          <ion-input type=\"text\" formControlName=\"tajuk\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label> TARIKH</ion-label>\n          <!-- <ion-input type=\"date\" formControlName=\"title\"></ion-input> -->\n          <!-- <ion-input type=\"text\" formControlName=\"title\"></ion-input> -->\n          <ion-datetime presentation=\"date\" displayFormat=\"DD/MM/YYYY\" formControlName=\"tarikh\" style=\"background-color: #f5f5f5;\">\n          </ion-datetime>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>KETERANGAN LAIN</ion-label>\n          <ion-textarea rows=\"6\" placeholder=\"\" formControlName=\"keterangan_lain\"></ion-textarea>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>STATUS</ion-label>\n          <ion-select formControlName=\"status\">\n            <ion-select-option value=\"aktif\">AKTIF</ion-select-option>\n            <ion-select-option value=\"tidak_aktif\">TIDAK AKTIF</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      \n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <ion-label class=\"ion-text-center\" style=\"padding-bottom: 0px;\">GAMBAR</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px; \">\n        <ion-col class=\"form-control\" style=\"display: flex; justify-content:center\">\n          <label style=\"display: flex; justify-content:center\">\n            <div style=\"display: flex; justify-content:center\">\n              <img [src]=\"this.url\" class=\"border-radius-md\" width=\"40%\" \n                id=\"upload-Preview\" style=\"border-radius: 10px;\" />\n            </div>\n            <input id=\"upload-Image\" type=\"file\" formControlName=\"gambar_buletin\" accept=\"image/*\" (change)=\"onSelectFile($event)\" style=\"display: none\">\n          </label>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-button color=\"success\" expand=\"block\" type=\"submit\" [disabled]=\"form.invalid\" >KEMASKINI BULETIN</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n\n\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_buletin_kemaskini-buletin_kemaskini-buletin_page_ts-es2015.js.map