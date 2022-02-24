(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["default-src_app_core_lawatan_kemaskini-laporan_kemaskini-laporan_page_ts"],{

/***/ 1938:
/*!**************************************************************************!*\
  !*** ./src/app/core/lawatan/kemaskini-laporan/kemaskini-laporan.page.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KemaskiniLaporanPage": function() { return /* binding */ KemaskiniLaporanPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_kemaskini_laporan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./kemaskini-laporan.page.html */ 39040);
/* harmony import */ var _kemaskini_laporan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kemaskini-laporan.page.scss */ 45831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_lawatan_lawatan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/lawatan/lawatan.service */ 89765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);











let KemaskiniLaporanPage = class KemaskiniLaporanPage {
    constructor(modalController, formBuilder, lawatanService, loadingController, alertController) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.lawatanService = lawatanService;
        this.loadingController = loadingController;
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
            namausahawan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            tarikh_lawatan: [''],
            masa_lawatan: [''],
            id_tindakan_lawatan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            komen: ['',],
            jenis_lawatan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            gambar_lawatan: ['',],
        });
    }
    ngOnInit() {
        console.log("laporan", this.laporan);
        if (this.laporan.gambar_lawatan == null) {
            this.url = 'assets/icon/image-not-available.png';
        }
        else {
            this.url = this.laporan.gambar_lawatan;
        }
        this.getTindakanLawatan();
    }
    setFormValues() {
        let hour = (this.laporan.masa_lawatan.split(':'))[0];
        let min = (this.laporan.masa_lawatan.split(':'))[1];
        let part = hour > 12 ? 'pm' : 'am';
        if (parseInt(hour) == 0)
            hour = 12;
        min = (min + '').length == 1 ? `0${min}` : min;
        hour = hour > 12 ? hour - 12 : hour;
        hour = (hour + '').length == 1 ? `0${hour}` : hour;
        let masa = `${hour}:${min} ${part}`;
        this.form.patchValue({
            namausahawan: this.laporan.namausahawan,
            tarikh_lawatan: moment__WEBPACK_IMPORTED_MODULE_4__(this.laporan.tarikh_lawatan).format('DD/MM/YYYY'),
            masa_lawatan: masa,
            id_tindakan_lawatan: this.laporan.id_tindakan_lawatan,
            komen: this.laporan.komen,
            jenis_lawatan: this.laporan.jenis_lawatan,
            // gambar_lawatan: this.laporan.gambar_lawatan,
        });
        if (this.laporan.jenis_lawatan == null) {
            this.form.patchValue({
                jenis_lawatan: "janji temu"
            });
        }
        this.form.updateValueAndValidity();
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    getTindakanLawatan() {
        this.lawatanService.getTindakanLawatan().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(x => x.filter(i => i.status_tindakan_lawatan == "aktif"))).subscribe((res) => {
            console.log("tindakan lawatan", res);
            this.tindakanLawatan = res;
            this.setFormValues();
        });
    }
    logForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
                            this.setFormValues();
                        }
                    },
                    {
                        text: 'Ya',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                            if (this.images.length > 0) {
                                this.form.value.gambar_lawatan = this.images[0].data;
                            }
                            else {
                                this.form.value.gambar_lawatan = this.laporan.gambar_lawatan;
                            }
                            console.log(this.form.value.gambar_url);
                            this.lawatanService.updateLaporan(this.form.value, this.laporan.lawatan_id).subscribe((res) => {
                                console.log("updated", res);
                                this.dismiss();
                                window.location.reload();
                            });
                        })
                    }
                ]
            });
            yield alert.present();
        });
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
    download_laporan(id) {
        console.log(id);
        this.lawatanService.janaLaporan(id).subscribe((res) => {
            console.log("res3", res);
            let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'storage/' + res;
            console.log(url);
            window.open(url, "_blank");
        });
    }
};
KemaskiniLaporanPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_lawatan_lawatan_service__WEBPACK_IMPORTED_MODULE_2__.LawatanService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController }
];
KemaskiniLaporanPage.propDecorators = {
    laporan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
KemaskiniLaporanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-kemaskini-laporan',
        template: _raw_loader_kemaskini_laporan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_kemaskini_laporan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], KemaskiniLaporanPage);



/***/ }),

/***/ 89765:
/*!*****************************************************!*\
  !*** ./src/app/services/lawatan/lawatan.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LawatanService": function() { return /* binding */ LawatanService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let LawatanService = class LawatanService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/lawatan";
        this.url2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/lawatan/usahawan";
        this.url3 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/tindakanLawatan";
        this.url4 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/lawatan/updateLaporan";
        this.url5 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/lawatan/senaraiUsahawan";
    }
    post(data) {
        return this.http.post(`${this.url}`, data);
    }
    get(pegawai_id) {
        return this.http.get(`${this.url}` + '/' + pegawai_id);
    }
    getLawatanUsahawan(id_pengguna) {
        return this.http.get(`${this.url2}` + '/' + id_pengguna);
    }
    update(data, id) {
        return this.http.put(`${this.url}` + '/' + id, data);
    }
    getTindakanLawatan() {
        return this.http.get(`${this.url3}`);
    }
    updateLaporan(data, id) {
        return this.http.post(`${this.url4}` + '/' + id, data);
    }
    getsenaraiusahawan(id_pegawai) {
        return this.http.get(`${this.url5}` + '/' + id_pegawai);
    }
    tambahLaporan(data) {
        return this.http.post(`${this.url}` + '/laporanBaru', data);
    }
    janaLaporan(id) {
        return this.http.get(`${this.url}` + '/janaDokumenLawatan/' + id);
    }
};
LawatanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
LawatanService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], LawatanService);



/***/ }),

/***/ 45831:
/*!****************************************************************************!*\
  !*** ./src/app/core/lawatan/kemaskini-laporan/kemaskini-laporan.page.scss ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  padding: 10px;\n  margin-bottom: 50px;\n}\n\n.label {\n  padding: 10px;\n  margin-bottom: 50px;\n}\n\nion-datetime {\n  --background: #f5f5f5;\n  --padding-start: 0.75rem !important;\n  --padding-top: 0.625rem !important;\n  --placeholder-color: #8898aa;\n  --placeholder-font-weight: 400;\n  border: 1px solid #dee2e6 !important;\n  border-radius: 1rem !important;\n  box-shadow: 0 3px 2px rgba(233, 236, 239, 0.05) !important;\n  line-height: 1.5 !important;\n}\n\nion-select {\n  --background: #f5f5f5;\n  --padding-start: 0.75rem !important;\n  --padding-top: 0.625rem !important;\n  --placeholder-color: #8898aa;\n  --placeholder-font-weight: 400;\n  border: 1px solid #dee2e6 !important;\n  border-radius: 1rem !important;\n  box-shadow: 0 3px 2px rgba(233, 236, 239, 0.05) !important;\n  line-height: 1.5 !important;\n}\n\nion-label {\n  --color: #525f7f;\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding-bottom: 20px;\n}\n\n.jumlah {\n  font-size: 30px;\n  color: #00a651;\n}\n\nion-item {\n  --max-height: 16px;\n}\n\n.padding {\n  padding: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtlbWFza2luaS1sYXBvcmFuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLDBEQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsMERBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7QUFDSiIsImZpbGUiOiJrZW1hc2tpbmktbGFwb3Jhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWwge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmxhYmVsIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgIC0tcGFkZGluZy1zdGFydDogMC43NXJlbSAhaW1wb3J0YW50O1xuICAgIC0tcGFkZGluZy10b3A6IDAuNjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzg4OThhYTtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDNweCAycHggcmdiYSgyMzMsIDIzNiwgMjM5LCAwLjA1KSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjUgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlbGVjdHtcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLXRvcDogMC42MjVyZW0gIWltcG9ydGFudDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjODg5OGFhO1xuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDJweCByZ2JhKDIzMywgMjM2LCAyMzksIDAuMDUpICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNSAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICAgIC0tY29sb3I6ICM1MjVmN2Y7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uanVtbGFoIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICMwMGE2NTE7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLW1heC1oZWlnaHQ6IDE2cHg7XG59XG5cbi5wYWRkaW5ne1xuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xufVxuXG5cblxuLy8gYnV0dG9uOmRpc2FibGVkLFxuLy8gYnV0dG9uW2Rpc2FibGVkXSB7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTk5OTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuLy8gICAgIGNvbG9yOiAjNjY2NjY2O1xuLy8gfVxuXG4iXX0= */");

/***/ }),

/***/ 39040:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/lawatan/kemaskini-laporan/kemaskini-laporan.page.html ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" (click)=\"dismiss()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"success\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            LAPORAN LAWATAN\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <form [formGroup]=\"tunai_masuk\" (ngSubmit)=\"logForm()\" style=\"margin: 30px;\">\n    <ion-item class=\"form-control\">\n      <ion-label>Todo</ion-label>\n      <ion-input type=\"text\" formControlName=\"title\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Description</ion-label>\n      <ion-textarea formControlName=\"description\"></ion-textarea>\n    </ion-item>\n    <ion-button type=\"submit\" [disabled]=\"!tunai_masuk.valid\">Submit</ion-button>\n  </form> -->\n  \n\n  <ion-grid>\n    <form [formGroup]=\"form\" (ngSubmit)=\"logForm()\" enctype=\"multipart/form-data\">\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\">NAMA USAHAWAN </ion-label>\n            <ion-input formControlName=\"namausahawan\" readonly></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row> \n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" class=\"form-control\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\">TARIKH </ion-label>\n            <ion-input type=\"text\" formControlName=\"tarikh_lawatan\" readonly></ion-input>\n            <!-- <ion-datetime presentation=\"date\" displayFormat=\"DD/MM/YYYY\" formControlName=\"tarikh_lawatan\" readonly style=\"background-color: #f5f5f5;\"> -->\n            <!-- </ion-datetime> -->\n          </ion-item>\n        </ion-col>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" class=\"form-control\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\">MASA </ion-label>\n            <ion-input type=\"text\" formControlName=\"masa_lawatan\" readonly></ion-input>\n            <!-- <ion-datetime presentation=\"time\" displayFormat=\"HHmm\" formControlName=\"masa_lawatan\" readonly style=\"background-color: #f5f5f5;\"> -->\n            <!-- </ion-datetime> -->\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\">JENIS LAWATAN </ion-label>\n            <ion-select formControlName=\"jenis_lawatan\">\n              <ion-select-option value=\"janji temu\">JANJI TEMU</ion-select-option>\n              <ion-select-option value=\"datang terus\">DATANG TERUS</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\">TINDAKAN USAHAWAN </ion-label>\n            <ion-select formControlName=\"id_tindakan_lawatan\">\n              <ion-select-option *ngFor=\"let tindakanLawatan of tindakanLawatan\" [value]=\"tindakanLawatan.id\" selected=\"tindakanLawatan.id == this.laporan.id_tindakan_lawatan\">\n                {{tindakanLawatan.nama_tindakan_lawatan}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\">KOMEN KESELURUHAN </ion-label>\n            <ion-textarea rows=\"4\" formControlName=\"komen\" ></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <ion-label class=\"ion-text-center\" style=\"padding-bottom: 0px;\">GAMBAR</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px; \">\n        <ion-col class=\"form-control\" style=\"display: flex; justify-content:center\">\n          <label style=\"display: flex; justify-content:center\">\n            <div style=\"display: flex; justify-content:center\">\n              <img [src]=\"url\" class=\"border-radius-md\" width=\"40%\" \n                id=\"upload-Preview\" style=\"border-radius: 10px;\" />\n            </div>\n            <input id=\"upload-Image\" accept=\"image/*\" (change)=\"onSelectFile($event)\" formControlName=\"gambar_lawatan\" type=\"file\"  style=\"display: none\">\n          </label>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin:20px;\">\n        <ion-col class=\"form-control\">\n          \n          <ion-button color=\"success\" expand=\"block\" [disabled]=\"form.invalid\" type=\"submit\">KEMASKINI LAPORAN</ion-button>\n          <ion-button color=\"success\" expand=\"block\" (click)=\"download_laporan(laporan.lawatan_id)\">CETAK LAPORAN</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </ion-grid>\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_lawatan_kemaskini-laporan_kemaskini-laporan_page_ts-es2015.js.map