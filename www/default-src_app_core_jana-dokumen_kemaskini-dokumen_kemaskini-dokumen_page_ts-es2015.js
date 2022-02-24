(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["default-src_app_core_jana-dokumen_kemaskini-dokumen_kemaskini-dokumen_page_ts"],{

/***/ 6509:
/*!*******************************************************************************!*\
  !*** ./src/app/core/jana-dokumen/kemaskini-dokumen/kemaskini-dokumen.page.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KemaskiniDokumenPage": function() { return /* binding */ KemaskiniDokumenPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_kemaskini_dokumen_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./kemaskini-dokumen.page.html */ 89191);
/* harmony import */ var _kemaskini_dokumen_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kemaskini-dokumen.page.scss */ 88809);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_daerah_daerah_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/daerah/daerah.service */ 42122);
/* harmony import */ var src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/negeri/negeri.service */ 64802);
/* harmony import */ var src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/katalog/katalog.service */ 89496);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var src_app_services_stok_stok_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/stok/stok.service */ 67441);
/* harmony import */ var src_app_services_pelanggan_pelanggan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/pelanggan/pelanggan.service */ 14744);
/* harmony import */ var _tooltip_tooltip_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tooltip/tooltip.page */ 48742);














let KemaskiniDokumenPage = class KemaskiniDokumenPage {
    constructor(modalController, formBuilder, loadingController, alertController, daerahService, negeriService, katalogService, stokService, pelangganService, popoverCtrl) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.daerahService = daerahService;
        this.negeriService = negeriService;
        this.katalogService = katalogService;
        this.stokService = stokService;
        this.pelangganService = pelangganService;
        this.popoverCtrl = popoverCtrl;
        this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
        this.user_id = window.sessionStorage.getItem("user_id");
        this.count = 0;
        this.productLength = 0;
        this.form = this.formBuilder.group({
            tajuk: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            nama_pelanggan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            alamat1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            alamat2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            alamat3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            poskod: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            U_Negeri_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            U_Daerah_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            no_telefon: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            no_fax: ['',],
            diskaun: ['',],
            kos_penghantaran: ['',],
            cukai_sst: ['',],
            produk: this.formBuilder.array([]),
        });
    }
    addProduk() {
        const produk = this.formBuilder.group({
            id: ['',],
            id_katalog: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            id_pelanggan: [''],
            stok_dijual: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            modified_by: [''],
        });
        this.getProdukArray.push(produk);
        this.count++;
        this.productLength = this.getProdukArray.length;
        console.log("this.productLength", this.productLength);
        console.log('After Add: ', this.form.value);
    }
    get getProdukArray() {
        return this.form.get('produk');
    }
    deleteProduk(i, produk) {
        console.log(produk);
        this.getProdukArray.removeAt(i);
        this.count--;
        this.productLength = this.getProdukArray.length;
        console.log("this.productLength", this.productLength);
        console.log('After Add: ', this.form.value);
        if (produk != '') {
            this.stokService.delete(produk).subscribe((res) => {
                console.log("deleted stok", res);
            });
        }
    }
    ngOnInit() {
        console.log(this.pelanggan);
        this.getNegeri();
        this.getKatalog();
        this.getDaerah(this.pelanggan.U_Negeri_ID);
        this.getStok(this.pelanggan.id_pelanggan);
    }
    setFormValues() {
        this.form.patchValue({
            tajuk: this.pelanggan.tajuk,
            nama_pelanggan: this.pelanggan.nama_pelanggan,
            alamat1: this.pelanggan.alamat1,
            alamat2: this.pelanggan.alamat2,
            alamat3: this.pelanggan.alamat3,
            poskod: this.pelanggan.poskod,
            U_Negeri_ID: this.pelanggan.U_Negeri_ID,
            U_Daerah_ID: this.pelanggan.U_Daerah_ID,
            no_telefon: this.pelanggan.no_telefon,
            no_fax: this.pelanggan.no_fax,
            diskaun: this.pelanggan.diskaun,
            kos_penghantaran: this.pelanggan.kos_penghantaran,
            cukai_sst: this.pelanggan.cukai_sst,
        });
        this.form.updateValueAndValidity();
    }
    setProdukVAlue() {
        this.stok.forEach(element => {
            const produk = this.formBuilder.group({
                id: element.id,
                id_katalog: element.id_katalog,
                id_pelanggan: element.id_pelanggan,
                stok_dijual: element.stok_dijual,
                modified_by: element.modified_by,
            });
            this.getProdukArray.push(produk);
            this.count++;
            this.productLength = this.getProdukArray.length;
            console.log("this.productLength", this.productLength);
            console.log('After Add: ', this.form.value);
        });
    }
    dismiss() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    logForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
                    }, {
                        text: 'Ya',
                        handler: () => {
                            console.log('Confirm Okay');
                            console.log(this.form.value);
                            let prodTemp = this.form.value.produk;
                            let prodTempLength = prodTemp.length;
                            console.log("prodTemp", prodTemp[1]);
                            this.pelangganService.update(this.form.value, this.pelanggan.id).subscribe((res) => {
                                console.log("res pelanggan", res);
                                let pelanggan = res;
                                for (let i = 0; i < prodTempLength; i++) {
                                    prodTemp[i].id_pelanggan = pelanggan.id;
                                    prodTemp[i].modified_by = this.user_id;
                                    console.log(prodTemp[i]);
                                    if (prodTemp[i].id == '') {
                                        this.stokService.post(prodTemp[i]).subscribe((res) => {
                                            console.log("res stok", res);
                                        });
                                    }
                                    else {
                                        this.stokService.update(prodTemp[i], prodTemp[i].id).subscribe((res) => {
                                            console.log("res stok", res);
                                        });
                                    }
                                }
                                // this.dismiss();
                                this.presentAlert();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    onDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                            console.log('Confirm Okay');
                            const loading = yield this.loadingController.create({ message: 'Deleting ...' });
                            loading.present();
                            this.pelangganService.delete(this.pelanggan.id_pelanggan).subscribe((res) => {
                                console.log("deleted", res);
                                this.stokService.deleteMany(this.pelanggan.id_pelanggan).subscribe((res) => {
                                    console.log("deleted stok", res);
                                    loading.dismiss();
                                    this.presentAlert2();
                                });
                            });
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    getNegeri() {
        this.negeriService.get().subscribe((res) => {
            console.log("negeri", res);
            this.negeri = res;
        });
    }
    getDaerah(event) {
        // console.log("test")
        // console.log(this.form1.value.U_Negeri_ID)
        this.daerahService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(x => x.filter(i => i.U_Negeri_ID == this.form.value.U_Negeri_ID))).subscribe((res) => {
            // this.daerahService.get().subscribe((res) => {
            console.log("Daerah", res);
            this.daerah = res;
            this.setFormValues();
        });
    }
    getKatalog() {
        console.log("this.user_id", this.user_id);
        this.katalogService.get(this.user_id).subscribe((res) => {
            console.log("katalog", res);
            this.katalog = res;
        });
    }
    getStok(id) {
        this.stokService.get(this.pelanggan.id_pelanggan).subscribe((res) => {
            console.log("stok", res);
            this.stok = res;
            this.setProdukVAlue();
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Berjaya',
                subHeader: 'Maklumat pelanggan telah berjaya dikemaskini',
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Berjaya Dihapus',
                subHeader: 'Maklumat Pelanggan Telah Berjaya Dihapus',
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
    presentAlertConfirmDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Maklumat akan dihapus!',
                message: 'Adakah anda pasti?',
                buttons: [
                    {
                        text: 'Batal',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ya',
                        handler: () => {
                            console.log('Confirm Okay');
                            // console.log(i);
                            this.onDelete();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    refresh() {
        window.location.reload();
    }
    numericOnly(event) {
        let pattern = /^([0-9])$/;
        let result = pattern.test(event.key);
        return result;
    }
    openPopOver(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: _tooltip_tooltip_page__WEBPACK_IMPORTED_MODULE_7__.TooltipPage,
                event: ev,
                cssClass: 'sustom-popover'
            });
            yield popover.present();
        });
    }
};
KemaskiniDokumenPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: src_app_services_daerah_daerah_service__WEBPACK_IMPORTED_MODULE_2__.DaerahService },
    { type: src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_3__.NegeriService },
    { type: src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_4__.KatalogService },
    { type: src_app_services_stok_stok_service__WEBPACK_IMPORTED_MODULE_5__.StokService },
    { type: src_app_services_pelanggan_pelanggan_service__WEBPACK_IMPORTED_MODULE_6__.PelangganService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.PopoverController }
];
KemaskiniDokumenPage.propDecorators = {
    pelanggan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }]
};
KemaskiniDokumenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-kemaskini-dokumen',
        template: _raw_loader_kemaskini_dokumen_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_kemaskini_dokumen_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], KemaskiniDokumenPage);



/***/ }),

/***/ 48742:
/*!***********************************************************!*\
  !*** ./src/app/core/jana-dokumen/tooltip/tooltip.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipPage": function() { return /* binding */ TooltipPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tooltip_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tooltip.page.html */ 14346);
/* harmony import */ var _tooltip_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip.page.scss */ 48931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let TooltipPage = class TooltipPage {
    constructor() { }
    ngOnInit() {
    }
};
TooltipPage.ctorParameters = () => [];
TooltipPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tooltip',
        template: _raw_loader_tooltip_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tooltip_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TooltipPage);



/***/ }),

/***/ 42122:
/*!***************************************************!*\
  !*** ./src/app/services/daerah/daerah.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DaerahService": function() { return /* binding */ DaerahService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let DaerahService = class DaerahService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/daerah";
    }
    // post(data: any): Observable<any> {
    //   return this.http.post<any>(`${this.url}`, data);
    // }
    get() {
        return this.http.get(`${this.url}`);
    }
};
DaerahService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
DaerahService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DaerahService);



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

/***/ 64802:
/*!***************************************************!*\
  !*** ./src/app/services/negeri/negeri.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NegeriService": function() { return /* binding */ NegeriService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let NegeriService = class NegeriService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/negeri";
    }
    // post(data: any): Observable<any> {
    //   return this.http.post<any>(`${this.url}`, data);
    // }
    get() {
        return this.http.get(`${this.url}`);
    }
};
NegeriService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
NegeriService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], NegeriService);



/***/ }),

/***/ 14744:
/*!*********************************************************!*\
  !*** ./src/app/services/pelanggan/pelanggan.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PelangganService": function() { return /* binding */ PelangganService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let PelangganService = class PelangganService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/pelanggan";
    }
    post(data) {
        return this.http.post(`${this.url}`, data);
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
    janaDokumen(id_pelanggan, id_pengguna) {
        return this.http.post(`${this.url}` + '/janaDokumen/' + id_pelanggan, id_pengguna);
    }
    janaQuotation(id_pelanggan, id_pengguna) {
        return this.http.post(`${this.url}` + '/janaQuotation/' + id_pelanggan, id_pengguna);
    }
    janaDO(id_pelanggan, id_pengguna) {
        return this.http.post(`${this.url}` + '/janaDO/' + id_pelanggan, id_pengguna);
    }
    janaInvoice(id_pelanggan, id_pengguna) {
        return this.http.post(`${this.url}` + '/janaInvoice/' + id_pelanggan, id_pengguna);
    }
};
PelangganService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PelangganService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PelangganService);



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

/***/ 88809:
/*!*********************************************************************************!*\
  !*** ./src/app/core/jana-dokumen/kemaskini-dokumen/kemaskini-dokumen.page.scss ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-header {\n  letter-spacing: 0;\n  text-shadow: 0px 4px 4px #00000040;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtlbWFza2luaS1kb2t1bWVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlCQUFBO0VBQ0Esa0NBQUE7QUFBSiIsImZpbGUiOiJrZW1hc2tpbmktZG9rdW1lbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1oZWFkZXIge1xuICAgIC8vIGhlaWdodDogOTVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDRweCA0cHggXG4gICMwMDAwMDA0MDtcbiAgICAvLyB3aWR0aDogMzQzcHg7XG4gIH0iXX0= */");

/***/ }),

/***/ 48931:
/*!*************************************************************!*\
  !*** ./src/app/core/jana-dokumen/tooltip/tooltip.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sdGlwLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 89191:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/jana-dokumen/kemaskini-dokumen/kemaskini-dokumen.page.html ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" (click)=\"dismiss()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"success\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            DOKUMEN PERNIAGAAN\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <form [formGroup]=\"form\" (ngSubmit)=\"logForm()\" style=\"margin: 20px;\">\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <h5 class=\"form-header\">Maklumat Pelanggan</h5>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>TAJUK <span style=\"color: red;\">*</span></ion-label>\n          <ion-input type=\"text\" formControlName=\"tajuk\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>NAMA PELANGGAN <span style=\"color: red;\">*</span></ion-label>\n          <ion-input type=\"text\" formControlName=\"nama_pelanggan\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>NO RUMAH/ LOT/ PINTU <span style=\"color: red;\">*</span></ion-label>\n          <ion-input type=\"text\" formControlName=\"alamat1\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>NAMA JALAN <span style=\"color: red;\">*</span></ion-label>\n          <ion-input type=\"text\" formControlName=\"alamat2\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>KAMPUNG/ TAMAN <span style=\"color: red;\">*</span></ion-label>\n          <ion-input type=\"text\" formControlName=\"alamat3\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>NEGERI <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input type=\"text\" formControlName=\"U_Negeri_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Negeri_ID\" (ionChange)=\"getDaerah($event)\">\n            <ion-select-option *ngFor=\"let negeri of negeri\" value=\"{{negeri.U_Negeri_ID}}\">{{negeri.Negeri}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n        <ion-col class=\"form-control\">\n          <ion-label>DAERAH <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input type=\"text\" formControlName=\"U_Daerah_ID\">\n          </ion-input> -->\n          <ion-select formControlName=\"U_Daerah_ID\">\n            <ion-select-option *ngFor=\"let daerah of daerah\" [value]=\"daerah.U_Daerah_ID\" selected=\"daerah.U_Daerah_ID == this.pelanggan.U_Daerah_ID\">{{daerah.Daerah}}\n            </ion-select-option>\n\n          </ion-select>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>POSKOD <span style=\"color: red;\">*</span></ion-label>\n          <ion-input type=\"number\" formControlName=\"poskod\"></ion-input>\n        </ion-col>\n        <ion-col class=\"form-control\">\n          <ion-label>NO. TELEFON <span style=\"color: red;\">*</span></ion-label>\n          <ion-input type=\"number\" formControlName=\"no_telefon\" (keypress)=\"numericOnly($event)\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>NO. FAKS</ion-label>\n          <ion-input type=\"number\" formControlName=\"no_fax\" (keypress)=\"numericOnly($event)\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <h5 class=\"form-header\">Maklumat Pembelian <ion-icon name=\"alert-circle-outline\" style=\"font-size: large; margin-top:2px; color: blue\" (click)=\"openPopOver($event)\"></ion-icon></h5>\n        </ion-col>\n      </ion-row>\n      <div formArrayName=\"produk\">\n        <div *ngFor=\"let produk of getProdukArray.controls; let i=index\" [formGroupName]=\"i\">\n\n          <ion-row style=\"margin-bottom: 10px;\">\n            <ion-col class=\"form-control\">\n              <!-- <ion-item lines=\"none\" style=\"border: none;\"> -->\n              <ion-label position=\"stacked\">NAMA PRODUK <span style=\"color: red;\">*</span></ion-label>\n              <!-- <ion-input formControlName=\"id_katalog\"></ion-input> -->\n              <ion-select formControlName=\"id_katalog\">\n                <ion-select-option *ngFor=\"let katalog of katalog\" [value]=\"katalog.id\" selected=\"katalog.id == this.stok.id_katalog\">{{katalog.nama_produk}}\n                </ion-select-option>\n                <!-- <ion-select-option value=\"draft\">Draft</ion-select-option> -->\n              </ion-select>\n              <!-- </ion-item> -->\n            </ion-col>\n          </ion-row>\n\n          <ion-row style=\"margin-bottom: 20px;\">\n            <ion-col class=\"form-control\">\n              <!-- <ion-item lines=\"none\" style=\"border: none;\"> -->\n              <ion-label position=\"stacked\">KUANTITI <span style=\"color: red;\">*</span></ion-label>\n              <ion-input type=\"number\" formControlName=\"stok_dijual\"></ion-input>\n            </ion-col>\n\n\n          </ion-row>\n\n          <ion-row style=\"margin-bottom: 20px;\">\n            <ion-col class=\"form-control\">\n              <div style=\"width:100%; display:flex; justify-content:flex-end;\">\n\n                <div *ngIf=\"i != 0\" class=\"ion-text-center\" (click)=\"deleteProduk(i, produk.value.id)\">\n                  <img src=\"/assets/icon/trash-icon.png\" alt=\"\" height=\"30\" width=\"30\">\n                  <br>\n                </div>\n\n                <div *ngIf=\"i == (productLength-1)\" class=\"ion-text-center\" (click)=\"addProduk()\">\n                  <img src=\"/assets/icon/add-item-icon.png\" alt=\"\" height=\"30\" width=\"30\">\n                  <br>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n\n        </div>\n\n      </div>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>DISKAUN (TOLAK KOS KESELURUHAN)</ion-label>\n          <ion-input type=\"number\" formControlName=\"diskaun\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>KOS PENGHANTARAN (TAMBAH KOS KESELURUHAN)</ion-label>\n          <ion-input type=\"number\" formControlName=\"kos_penghantaran\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>CUKAI/SST/GST/LAIN-LAIN (TAMBAH KOS KESELURUHAN)</ion-label>\n          <ion-input type=\"number\" formControlName=\"cukai_sst\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-button type=\"submit\" color=\"success\" expand=\"block\" [disabled]=\"form.invalid\">KEMASKINI</ion-button>\n          <!-- <ion-button color=\"danger\" expand=\"block\" (click)=\"onDelete()\">HAPUS</ion-button> -->\n          <ion-button color=\"danger\" expand=\"block\" (click)=\"presentAlertConfirmDelete()\" >HAPUS</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n\n\n\n\n</ion-content>");

/***/ }),

/***/ 14346:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/jana-dokumen/tooltip/tooltip.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content >\n  <div style=\"padding: 30px;\">\n    <small>\n      Sila lakukan penginputan katalog di modul katalog terlebih dahulu\n    </small>\n  </div>\n  \n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_jana-dokumen_kemaskini-dokumen_kemaskini-dokumen_page_ts-es2015.js.map