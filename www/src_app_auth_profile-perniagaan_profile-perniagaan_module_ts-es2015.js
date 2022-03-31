(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_auth_profile-perniagaan_profile-perniagaan_module_ts"],{

/***/ 58236:
/*!******************************************************************************!*\
  !*** ./src/app/auth/profile-perniagaan/profile-perniagaan-routing.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePerniagaanPageRoutingModule": function() { return /* binding */ ProfilePerniagaanPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_perniagaan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-perniagaan.page */ 41287);




const routes = [
    {
        path: '',
        component: _profile_perniagaan_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePerniagaanPage
    }
];
let ProfilePerniagaanPageRoutingModule = class ProfilePerniagaanPageRoutingModule {
};
ProfilePerniagaanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePerniagaanPageRoutingModule);



/***/ }),

/***/ 84325:
/*!**********************************************************************!*\
  !*** ./src/app/auth/profile-perniagaan/profile-perniagaan.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePerniagaanPageModule": function() { return /* binding */ ProfilePerniagaanPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _profile_perniagaan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-perniagaan-routing.module */ 58236);
/* harmony import */ var _profile_perniagaan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-perniagaan.page */ 41287);







let ProfilePerniagaanPageModule = class ProfilePerniagaanPageModule {
};
ProfilePerniagaanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_perniagaan_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePerniagaanPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_profile_perniagaan_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePerniagaanPage]
    })
], ProfilePerniagaanPageModule);



/***/ }),

/***/ 41287:
/*!********************************************************************!*\
  !*** ./src/app/auth/profile-perniagaan/profile-perniagaan.page.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePerniagaanPage": function() { return /* binding */ ProfilePerniagaanPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_perniagaan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile-perniagaan.page.html */ 96226);
/* harmony import */ var _profile_perniagaan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-perniagaan.page.scss */ 72419);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_perniagaan_perniagaan_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/perniagaan/perniagaan.model */ 96074);
/* harmony import */ var src_app_services_perniagaan_perniagaan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/perniagaan/perniagaan.service */ 24381);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var src_app_services_daerah_daerah_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/daerah/daerah.service */ 42122);
/* harmony import */ var src_app_services_dun_dun_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/dun/dun.service */ 88641);
/* harmony import */ var src_app_services_kampung_kampung_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/kampung/kampung.service */ 92272);
/* harmony import */ var src_app_services_mukim_mukim_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/mukim/mukim.service */ 46175);
/* harmony import */ var src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/negeri/negeri.service */ 64802);
/* harmony import */ var src_app_services_parlimen_parlimen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/parlimen/parlimen.service */ 21450);
/* harmony import */ var src_app_services_seksyen_seksyen_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/seksyen/seksyen.service */ 48203);
/* harmony import */ var src_app_services_produk_produk_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/produk/produk.service */ 16114);
/* harmony import */ var src_app_services_Aliran_aliran_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/Aliran/aliran.service */ 72311);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var src_app_services_kluster_kluster_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/kluster/kluster.service */ 68379);





















let ProfilePerniagaanPage = class ProfilePerniagaanPage {
    constructor(perniagaanService, router, perniagaan, alertController, loadingController, formBuilder, negeriService, daerahService, mukimService, parlimenService, dunService, kampungService, seksyenService, produkService, aliranService, geolocation, klusterService
    // private geolocation: Geolocation
    ) {
        this.perniagaanService = perniagaanService;
        this.router = router;
        this.perniagaan = perniagaan;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.negeriService = negeriService;
        this.daerahService = daerahService;
        this.mukimService = mukimService;
        this.parlimenService = parlimenService;
        this.dunService = dunService;
        this.kampungService = kampungService;
        this.seksyenService = seksyenService;
        this.produkService = produkService;
        this.aliranService = aliranService;
        this.geolocation = geolocation;
        this.klusterService = klusterService;
        this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
        this.user_id = window.sessionStorage.getItem("user_id");
        this.jenis_perniagaan = [
            { id: "A", name: "PENGELUARAN PRODUK MAKANAN" },
            { id: "B", name: "PENGELUARAN PRODUK BUKAN MAKANAN" },
            { id: "C", name: "PENGELUARAN PRODUK PERTANIAN" },
            { id: "D", name: "PERKHIDMATAN PEMASARAN" },
            { id: "E", name: "PERKHIDMATAN BUKAN PEMASARAN" },
        ];
        this.count = 0;
        this.productLength = 0;
        this.latitude = 0; //latitude
        this.longitude = 0; //longitude
        this.options = {
            timeout: 10000,
            enableHighAccuracy: true,
            maximumAge: 3600
        };
        this.form = this.formBuilder.group({
            jenisperniagaan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            klusterperniagaan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            subkluster: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            alamat1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            alamat2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            alamat3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            bandar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            poskod: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            U_Negeri_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            U_Daerah_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            U_Mukim_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            U_Parlimen_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            U_Dun_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            U_Kampung_ID: ['',],
            U_Seksyen_ID: ['',],
            latitud: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            logitud: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            facebook: ['',],
            instagram: ['',],
            twitter: ['',],
            lamanweb: ['',],
            dropship: ['',],
            ejen: ['',],
            stokis: ['',],
            outlet: ['',],
            domestik: ['',],
            luarnegara: ['',],
            pasaranonline: ['',],
            purata_jualan_bulanan: ['',],
            peratus_kenaikan: ['',],
            hasil_jualan_tahunan: ['',],
            produk: this.formBuilder.array([]),
        });
    }
    addProduk() {
        const produk = this.formBuilder.group({
            id: ['',],
            perniagaanid: ['',],
            jenamaproduk: ['',],
            unitmatrik: ['',],
            hargaperunit: ['',],
            kapasitimaksimum: ['',],
            kapasitisemasa: ['',],
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
    deleteProduk(i, id) {
        console.log(id);
        this.getProdukArray.removeAt(i);
        this.count--;
        this.productLength = this.getProdukArray.length;
        if (id != '') {
            this.produkService.delete(id).subscribe((res) => {
                console.log("deleted produk", res);
            });
        }
    }
    setProdukVAlue() {
        this.produk.forEach(element => {
            const produk = this.formBuilder.group({
                id: element.id,
                perniagaanid: element.perniagaanid,
                jenamaproduk: element.jenamaproduk,
                unitmatrik: element.unitmatrik,
                hargaperunit: element.hargaperunit,
                kapasitimaksimum: element.kapasitimaksimum,
                kapasitisemasa: element.kapasitisemasa,
                modified_by: element.modified_by
            });
            this.getProdukArray.push(produk);
            this.count++;
            this.productLength = this.getProdukArray.length;
            console.log("this.productLength", this.productLength);
            console.log('After Add: ', this.form.value);
        });
    }
    ngOnInit() {
        console.log("usahawan id", this.usahawan_id);
        console.log("user id", this.user_id);
        this.getPerniagaan();
    }
    getPerniagaan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: 'Loading ...' });
            loading.present();
            // console.log(this.form.value);
            this.perniagaanService.show(this.usahawan_id).subscribe((res) => {
                console.log("perniagaan info", res);
                if (Object.keys(res).length === 0) {
                    console.log("failed");
                    loading.dismiss();
                }
                else {
                    this.perniagaan = res;
                    this.produkService.get(res.id).subscribe((produkRes) => {
                        console.log("produk", produkRes);
                        this.produk = produkRes;
                        if (Object.keys(produkRes).length == 0 && this.productLength == 0) {
                            this.addProduk();
                        }
                        this.negeriService.get().subscribe((resNegeri) => {
                            console.log("Negeri", resNegeri);
                            this.negeri = resNegeri;
                            this.daerahService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(x => x.filter(i => i.U_Negeri_ID == this.perniagaan.U_Negeri_ID))).subscribe((resDaerah) => {
                                console.log("resDaerah", resDaerah);
                                this.daerah = resDaerah;
                                this.mukimService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(x => x.filter(i => i.U_Daerah_ID == this.perniagaan.U_Daerah_ID))).subscribe((resMukim) => {
                                    console.log("resMukim", resMukim);
                                    this.mukim = resMukim;
                                    this.parlimenService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(x => x.filter(i => i.U_Negeri_ID == this.perniagaan.U_Negeri_ID))).subscribe((resParlimen) => {
                                        console.log("resParlimen", resParlimen);
                                        this.parlimen = resParlimen;
                                        this.dunService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(x => x.filter(i => i.U_Parlimen_ID == this.perniagaan.U_Parlimen_ID))).subscribe((resDun) => {
                                            console.log("resDun", resDun);
                                            this.dun = resDun;
                                            this.kampungService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(x => x.filter(i => i.U_Mukim_ID == this.perniagaan.U_Mukim_ID))).subscribe((resKampung) => {
                                                console.log("resKampung", resKampung);
                                                this.kampung = resKampung;
                                                let mukimStr = this.perniagaan.U_Mukim_ID;
                                                // let mukimInt = parseInt(mukimStr.toString())
                                                this.seksyenService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(x => x.filter(i => i.U_Mukim_ID == mukimStr))).subscribe((resSeksyen) => {
                                                    console.log("resSeksyen", resSeksyen);
                                                    this.seksyen = resSeksyen;
                                                    this.klusterService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(x => x.filter(i => i.jenis_kluster == this.perniagaan.jenisperniagaan))).subscribe((resKluster) => {
                                                        console.log("kluster", resKluster);
                                                        this.klusterPerniagaan = resKluster;
                                                        this.setFormValues();
                                                        loading.dismiss();
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                }
            });
        });
    }
    setFormValues() {
        this.form.patchValue({
            jenisperniagaan: this.perniagaan.jenisperniagaan,
            klusterperniagaan: this.perniagaan.klusterperniagaan,
            subkluster: this.perniagaan.subkluster,
            alamat1: this.perniagaan.alamat1,
            alamat2: this.perniagaan.alamat2,
            alamat3: this.perniagaan.alamat3,
            bandar: this.perniagaan.bandar,
            poskod: this.perniagaan.poskod,
            U_Negeri_ID: this.perniagaan.U_Negeri_ID,
            U_Daerah_ID: this.perniagaan.U_Daerah_ID,
            U_Mukim_ID: this.perniagaan.U_Mukim_ID,
            U_Parlimen_ID: this.perniagaan.U_Parlimen_ID,
            U_Dun_ID: this.perniagaan.U_Dun_ID,
            U_Kampung_ID: this.perniagaan.U_Kampung_ID,
            U_Seksyen_ID: this.perniagaan.U_Seksyen_ID,
            latitud: this.perniagaan.latitud,
            logitud: this.perniagaan.logitud,
            facebook: this.perniagaan.facebook,
            instagram: this.perniagaan.instagram,
            twitter: this.perniagaan.twitter,
            lamanweb: this.perniagaan.lamanweb,
            dropship: this.perniagaan.dropship,
            ejen: this.perniagaan.ejen,
            stokis: this.perniagaan.stokis,
            outlet: this.perniagaan.outlet,
            domestik: this.perniagaan.domestik,
            luarnegara: this.perniagaan.luarnegara,
            pasaranonline: this.perniagaan.pasaranonline,
            purata_jualan_bulanan: this.perniagaan.purata_jualan_bulanan,
            peratus_kenaikan: this.perniagaan.peratus_kenaikan,
            hasil_jualan_tahunan: this.perniagaan.hasil_jualan_tahunan
        });
        this.setProdukVAlue();
    }
    getKluster() {
        // this.form.value.klusterPerniagaan = null;
        this.klusterService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(x => x.filter(i => i.jenis_kluster == this.form.value.jenisperniagaan))).subscribe((res) => {
            console.log("kluster", res);
            this.klusterPerniagaan = res;
        });
    }
    resetKluster() {
        this.form.patchValue({
            klusterPerniagaan: null
        });
        console.log(this.form.value.klusterPerniagaan);
    }
    getNegeri() {
        this.negeriService.get().subscribe((res) => {
            console.log("negeri", res);
            this.negeri = res;
        });
    }
    getDaerah(event) {
        this.daerahService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(x => x.filter(i => i.U_Negeri_ID == this.form.value.U_Negeri_ID))).subscribe((res) => {
            console.log("Daerah", res);
            this.daerah = res;
            this.getParlimen();
        });
    }
    getMukim(event) {
        this.mukimService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(x => x.filter(i => i.U_Daerah_ID == this.form.value.U_Daerah_ID))).subscribe((res) => {
            console.log("mukim", res);
            this.mukim = res;
        });
    }
    getParlimen() {
        this.parlimenService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(x => x.filter(i => i.U_Negeri_ID == this.form.value.U_Negeri_ID))).subscribe((res) => {
            console.log("parlimen", res);
            this.parlimen = res;
        });
    }
    getDun() {
        this.dunService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(x => x.filter(i => i.U_Parlimen_ID == this.form.value.U_Parlimen_ID))).subscribe((res) => {
            console.log("dun", res);
            this.dun = res;
        });
    }
    getKampung() {
        this.kampungService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(x => x.filter(i => i.U_Mukim_ID == this.form.value.U_Mukim_ID))).subscribe((res) => {
            console.log("kampung", res);
            this.kampung = res;
        });
    }
    getSeksyen() {
        console.log(this.form.value.U_Mukim_ID);
        let mukim = parseInt(this.form.value.U_Mukim_ID);
        this.seksyenService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(x => x.filter(i => i.U_Mukim_ID == mukim))).subscribe((res) => {
            console.log("seksyen", res);
            this.seksyen = res;
        });
    }
    logForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
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
                            console.log("AAAAAAAA", this.produk.length);
                        }
                    },
                    {
                        text: 'Ya',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
                            console.log('Confirm Okay');
                            const loading = yield this.loadingController.create({ message: 'Loading ...' });
                            loading.present();
                            console.log(this.form.value);
                            let prodTemp = this.form.value.produk;
                            let prodTempLength = prodTemp.length;
                            console.log("prodTemp", prodTemp);
                            this.perniagaanService.update(this.form.value, this.usahawan_id).subscribe((res) => {
                                console.log("updated data", res);
                                for (let i = 0; i < prodTempLength; i++) {
                                    console.log(prodTemp[i]);
                                    prodTemp[i].perniagaanid = res.id;
                                    prodTemp[i].modified_by = this.usahawan_id;
                                    if (prodTemp[i].id == '') {
                                        this.produkService.post(prodTemp[i]).subscribe((prodRes) => {
                                            console.log("prodRes", prodRes);
                                        });
                                    }
                                    else {
                                        this.produkService.update(prodTemp[i], prodTemp[i].id).subscribe((prodRes) => {
                                            console.log("prodRes", prodRes);
                                        });
                                    }
                                }
                                loading.dismiss();
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Kemaskini Berjaya',
                subHeader: 'Kemaskini Maklumat Perniagaan Telah Berjaya',
                message: '',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    reset() {
        this.form.patchValue({
            U_Daerah_ID: null,
            U_Mukim_ID: null,
            U_Parlimen_ID: null,
            U_Dun_ID: null,
            U_Kampung_ID: null,
            U_Seksyen_ID: null,
        });
    }
    reset2() {
        this.form.patchValue({
            U_Kampung_ID: null,
            U_Seksyen_ID: null,
        });
    }
    calcMaklumatPendapatan() {
        let purata_tahunan_sebelum_bantuan = this.form.value.purata_jualan_bulanan;
        console.log(purata_tahunan_sebelum_bantuan);
        this.aliranService.getTotalYear(this.user_id).subscribe((res) => {
            console.log("jumlah tahunan", res);
            let jualan_tahunan_semasa = res;
            this.form.patchValue({
                hasil_jualan_tahunan: res,
            });
            let peratus_kenaikan = ((jualan_tahunan_semasa - purata_tahunan_sebelum_bantuan) / purata_tahunan_sebelum_bantuan) * 100;
            this.form.patchValue({
                peratus_kenaikan: peratus_kenaikan.toFixed(2),
            });
        });
    }
    // use geolocation to get user's device coordinates
    getCurrentCoordinates() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            this.form.patchValue({
                latitud: this.latitude,
                logitud: this.longitude
            });
        }).catch((error) => {
            console.log('Error getting location', error);
        });
        console.log(" this.latitude", this.latitude);
        console.log(" this.longitude", this.longitude);
    }
};
ProfilePerniagaanPage.ctorParameters = () => [
    { type: src_app_services_perniagaan_perniagaan_service__WEBPACK_IMPORTED_MODULE_3__.PerniagaanService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router },
    { type: src_app_services_perniagaan_perniagaan_model__WEBPACK_IMPORTED_MODULE_2__.PerniagaanModel },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.LoadingController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder },
    { type: src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_8__.NegeriService },
    { type: src_app_services_daerah_daerah_service__WEBPACK_IMPORTED_MODULE_4__.DaerahService },
    { type: src_app_services_mukim_mukim_service__WEBPACK_IMPORTED_MODULE_7__.MukimService },
    { type: src_app_services_parlimen_parlimen_service__WEBPACK_IMPORTED_MODULE_9__.ParlimenService },
    { type: src_app_services_dun_dun_service__WEBPACK_IMPORTED_MODULE_5__.DunService },
    { type: src_app_services_kampung_kampung_service__WEBPACK_IMPORTED_MODULE_6__.KampungService },
    { type: src_app_services_seksyen_seksyen_service__WEBPACK_IMPORTED_MODULE_10__.SeksyenService },
    { type: src_app_services_produk_produk_service__WEBPACK_IMPORTED_MODULE_11__.ProdukService },
    { type: src_app_services_Aliran_aliran_service__WEBPACK_IMPORTED_MODULE_12__.AliranService },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_13__.Geolocation },
    { type: src_app_services_kluster_kluster_service__WEBPACK_IMPORTED_MODULE_14__.KlusterService }
];
ProfilePerniagaanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
        selector: 'app-profile-perniagaan',
        template: _raw_loader_profile_perniagaan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_perniagaan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePerniagaanPage);



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

/***/ 68379:
/*!*****************************************************!*\
  !*** ./src/app/services/kluster/kluster.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KlusterService": function() { return /* binding */ KlusterService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let KlusterService = class KlusterService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/kluster_perniagaan";
    }
    // post(data: any): Observable<any> {
    //   return this.http.post<any>(`${this.url}`, data);
    // }
    get() {
        return this.http.get(`${this.url}`);
    }
};
KlusterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
KlusterService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], KlusterService);



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

/***/ 96074:
/*!*********************************************************!*\
  !*** ./src/app/services/perniagaan/perniagaan.model.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerniagaanModel": function() { return /* binding */ PerniagaanModel; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let PerniagaanModel = class PerniagaanModel {
};
PerniagaanModel = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], PerniagaanModel);



/***/ }),

/***/ 24381:
/*!***********************************************************!*\
  !*** ./src/app/services/perniagaan/perniagaan.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerniagaanService": function() { return /* binding */ PerniagaanService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);




let PerniagaanService = class PerniagaanService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/perniagaan";
        this.models = [];
    }
    // getUser(): Observable<PerniagaanModel[]> {
    //   return this.http.get<PerniagaanModel[]>(`${this.url}`);
    // }
    // check1user( user : PerniagaanModel): Observable<PerniagaanModel>{
    //   return this.http.post<PerniagaanModel>(`${this.url}`,user);
    // }
    show(id) {
        return this.http.get(`${this.url}` + "/" + id);
    }
    update(perniagaan, usahawan_id) {
        return this.http.put(`${this.url}/${usahawan_id}`, perniagaan);
    }
};
PerniagaanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PerniagaanService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PerniagaanService);



/***/ }),

/***/ 16114:
/*!***************************************************!*\
  !*** ./src/app/services/produk/produk.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdukService": function() { return /* binding */ ProdukService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let ProdukService = class ProdukService {
    // public models: PerniagaanModel[] = [];
    // public model: PerniagaanModel;
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/produk";
    }
    get(id) {
        return this.http.get(`${this.url}` + "/" + id);
    }
    update(data, id) {
        return this.http.put(`${this.url}/${id}`, data);
    }
    post(data) {
        return this.http.post(`${this.url}`, data);
    }
    delete(produk_id) {
        return this.http.delete(`${this.url}/${produk_id}`);
    }
};
ProdukService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ProdukService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ProdukService);



/***/ }),

/***/ 72419:
/*!**********************************************************************!*\
  !*** ./src/app/auth/profile-perniagaan/profile-perniagaan.page.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".read-only {\n  background-color: #e2e2e2;\n  color: #6d6d6d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtcGVybmlhZ2Fhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJwcm9maWxlLXBlcm5pYWdhYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlYWQtb25seSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcbiAgICBjb2xvcjojNmQ2ZDZkXG59XG4iXX0= */");

/***/ }),

/***/ 96226:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/profile-perniagaan/profile-perniagaan.page.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button href=\"/dashboard\">\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <!-- <ion-back-button defaultHref=\"/dashboard\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-text color=\"warning\">\n      <h1>\n        <strong>\n          PROFIL PERNIAGAAN\n        </strong>\n      </h1>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n\n    <ion-fab-button color=\"light\">\n      <ion-icon color=\"warning\" name=\"caret-down-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"bottom\">\n      <ion-fab-button color=\"warning\" href=\"/profile\">\n        <img src=\"assets/icon/usahawan-icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"warning\"><small> Usahawan</small></ion-text>\n      <ion-fab-button color=\"warning\" href=\"/profile-syarikat\">\n        <img src=\"assets/icon/Syarikat--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"warning\"><small> Syarikat</small></ion-text>\n\n      <ion-fab-button color=\"warning\" href=\"/profile-perniagaan\">\n        <img src=\"assets/icon/Perniagaan--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"warning\"><small> Perniagaan</small></ion-text>\n\n      <ion-fab-button color=\"warning\" href=\"/profile-pekebun\">\n        <img src=\"assets/icon/Pekebun--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"warning\"><small> Pekebun</small></ion-text>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-grid [fixed]=\"true\">\n\n\n    <form [formGroup]=\"form\" class=\"ion-padding form-control\" (ngSubmit)=\"logForm()\">\n\n      <ion-row style=\"background-color: #FF6600; color:white\">\n        <ion-col>\n          <strong>Maklumat Perniagaan</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <br>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>JENIS PERNIAGAAN <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input formControlName=\"jenisperniagaan\"></ion-input> -->\n          <ion-select formControlName=\"jenisperniagaan\" style=\"width:100%,\" (ionChange)=\"getKluster(); resetKluster();\">\n            <ion-select-option *ngFor=\"let jenis_perniagaan of jenis_perniagaan\" value=\"{{jenis_perniagaan.id}}\"\n              style=\"word-wrap:break-word\">{{jenis_perniagaan.name}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>KLUSTER PERNIAGAAN <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input formControlName=\"klusterperniagaan\"></ion-input> -->\n          <ion-select formControlName=\"klusterperniagaan\" style=\"width:100%,\">\n            <ion-select-option *ngFor=\"let klusterPerniagaans of klusterPerniagaan\" value=\"{{klusterPerniagaans.kluster_id}}\" \n              style=\"word-wrap:break-word\">{{klusterPerniagaans.nama_kluster}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>SUB KLUSTER PERNIAGAAN <span style=\"color: red;\">*</span></ion-label>\n          <ion-input formControlName=\"subkluster\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NO RUMAH/LOT/PINTU <span style=\"color: red;\">*</span></ion-label>\n          <ion-input formControlName=\"alamat1\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NAMA JALAN <span style=\"color: red;\">*</span></ion-label>\n          <ion-input formControlName=\"alamat2\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> KAMPUNG/TAMAN <span style=\"color: red;\">*</span></ion-label>\n          <ion-input formControlName=\"alamat3\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> BANDAR <span style=\"color: red;\">*</span></ion-label>\n          <ion-input formControlName=\"bandar\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> POSKOD <span style=\"color: red;\">*</span></ion-label>\n          <ion-input type=\"Number\" formControlName=\"poskod\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NEGERI <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input formControlName=\"U_Negeri_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Negeri_ID\" (ionChange)=\"getDaerah($event); reset()\">\n            <ion-select-option *ngFor=\"let negeri of negeri\" value=\"{{negeri.U_Negeri_ID}}\">\n              {{negeri.Negeri}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> DAERAH <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input value=\"{{usahawan.U_Daerah_ID}}\" formControlName=\"U_Daerah_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Daerah_ID\" (ionChange)=\"getMukim($event)\">\n            <ion-select-option *ngFor=\"let daerah of daerah\" value=\"{{daerah.U_Daerah_ID}}\">{{daerah.Daerah}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n        <ion-col>\n          <ion-label> MUKIM <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input  formControlName=\"U_Mukim_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Mukim_ID\" (ionChange)=\"getKampung($event); getSeksyen(); reset2()\">\n            <ion-select-option *ngFor=\"let mukim of mukim\" value=\"{{mukim.U_Mukim_ID}}\">{{mukim.Mukim}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> PARLIMEN <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input value=\"{{usahawan.U_Parlimen_ID}}\" formControlName=\"U_Parlimen_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Parlimen_ID\" (ionChange)=\"getDun()\">\n            <ion-select-option *ngFor=\"let parlimen of parlimen\" value=\"{{parlimen.U_Parlimen_ID}}\">\n              {{parlimen.Parlimen}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n        <ion-col>\n          <ion-label> DUN <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input value=\"{{usahawan.U_Dun_ID}}\" formControlName=\"U_Dun_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Dun_ID\">\n            <ion-select-option *ngFor=\"let dun of dun\" value=\"{{dun.U_Dun_ID}}\">{{dun.Dun}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> KAMPUNG</ion-label>\n          <!-- <ion-input value=\"{{usahawan.U_Kampung_ID}}\" formControlName=\"U_Kampung_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Kampung_ID\">\n            <ion-select-option *ngFor=\"let kampung of kampung\" [value]=\"kampung.U_Kampung_ID\"\n              selected=\"kampung.U_Kampung_ID == this.usahawan.U_Kampung_ID\">{{kampung.Kampung}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n        <ion-col>\n          <ion-label> SEKSYEN</ion-label>\n          <!-- <ion-input value=\"{{usahawan.U_Seksyen_ID}}\" formControlName=\"U_Seksyen_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Seksyen_ID\">\n            <ion-select-option *ngFor=\"let seksyen of seksyen\" [value]=\"seksyen.U_Seksyen_ID\"\n              selected=\"seksyen.U_Seksyen_ID == this.usahawan.U_Seksyen_ID\">{{seksyen.Seksyen}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>LATITUD <span style=\"color: red;\">*</span></ion-label>\n          <ion-input formControlName=\"latitud\"></ion-input>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n          <ion-label> LONGITUD <span style=\"color: red;\">*</span></ion-label>\n          <ion-input formControlName=\"logitud\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\" style=\"display: flex; justify-content:center\">\n          <ion-button fill=\"outline\" color=\"dark\" (click)=\"getCurrentCoordinates()\" expand=\"block\" style=\"width: 60%;\">\n            <strong>LOKASI GPS</strong> \n          </ion-button>\n        </ion-col>\n      </ion-row>\n      \n\n      <br><br><br>\n      <ion-row style=\"background-color: #FF6600; color:white\">\n        <ion-col>\n          <strong>Maklumat Media Sosial</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <br>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> FACEBOOK </ion-label>\n          <ion-input formControlName=\"facebook\" style=\"text-transform: none;\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label> INSTAGRAM</ion-label>\n          <ion-input formControlName=\"instagram\" style=\"text-transform: none;\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label> TWITTER</ion-label>\n          <ion-input formControlName=\"twitter\" style=\"text-transform: none;\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label> LAMAN WEB</ion-label>\n          <ion-input formControlName=\"lamanweb\" style=\"text-transform: none;\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <br><br><br>\n      <ion-row style=\"background-color: #FF6600; color:white\">\n        <ion-col>\n          <strong>Maklumat Pemasaran</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <br>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>BILANGAN DROPSHIP</ion-label>\n          <ion-input type=\"Number\" formControlName=\"dropship\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label>BILANGAN EJEN</ion-label>\n          <ion-input type=\"Number\" formControlName=\"ejen\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>BILANGAN STOKIS</ion-label>\n          <ion-input type=\"Number\" formControlName=\"stokis\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label>BILANGAN OUTLET</ion-label>\n          <ion-input type=\"Number\" formControlName=\"outlet\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label> PASARAN DOMESTIK</ion-label>\n          <ion-input formControlName=\"domestik\" placeholder=\"Nyatakan Daerah/Negeri\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label> PASARAN LUAR NEGERA</ion-label>\n          <ion-input formControlName=\"luarnegara\" placeholder=\"Nyatakan Negara\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> PASARAN ONLINE</ion-label>\n          <ion-input formControlName=\"pasaranonline\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n\n\n      <br><br><br>\n      <ion-row style=\"background-color: #FF6600; color:white\">\n        <ion-col>\n          <strong>Maklumat Pendapatan</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <br>\n\n      <ion-row>\n        <ion-col>\n          <ion-label style=\"text-transform: uppercase;\"> Purata jualan tahunan tahun sebelum bantuan</ion-label>\n          <ion-input type=\"Number\" formControlName=\"purata_jualan_bulanan\" (ionChange)=\"calcMaklumatPendapatan()\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label style=\"text-transform: uppercase;\"> Jumlah jualan tahunan bagi tahun semasa</ion-label>\n          <ion-input class=\"read-only\" type=\"Number\" formControlName=\"hasil_jualan_tahunan\" readonly></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label style=\"text-transform: uppercase;\"> Peratus kenaikan </ion-label>\n          <ion-input class=\"read-only\" type=\"Number\" formControlName=\"peratus_kenaikan\" readonly></ion-input>\n        </ion-col>\n      </ion-row>\n\n\n      <br><br><br>\n      <ion-row style=\"background-color: #FF6600; color:white\">\n        <ion-col>\n          <strong>Maklumat Produk</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <br>\n      <div formArrayName=\"produk\">\n        <div *ngFor=\"let produk of getProdukArray.controls; let i=index\" [formGroupName]=\"i\">\n          \n          <ion-row>\n            <ion-col>\n              <ion-label> JENAMA PRODUK </ion-label>\n              <ion-input value=\"\" formControlName=\"jenamaproduk\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-label> UNIT METRIK</ion-label>\n              <ion-input formControlName=\"unitmatrik\" placeholder=\"10KG/ 5 UNIT/1.5L/2 KARTON\"></ion-input>\n            </ion-col>\n            <ion-col>\n              <ion-label> HARGA PER UNIT (RM)</ion-label>\n              <ion-input type=\"number\" formControlName=\"hargaperunit\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-label> KAPASITI MAKSIMUM</ion-label>\n              <ion-input type=\"number\" formControlName=\"kapasitimaksimum\"></ion-input>\n            </ion-col>\n            <ion-col>\n              <ion-label> KAPASITI SEMASA</ion-label>\n              <ion-input type=\"number\" formControlName=\"kapasitisemasa\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row style=\"margin-bottom: 20px;\">\n            <ion-col class=\"form-control\">\n              <div style=\"width:100%; display:flex; justify-content:flex-end;\">\n\n                <div *ngIf=\"i != 0\" class=\"ion-text-center\" (click)=\"deleteProduk(i, produk.value.id)\">\n                  <img src=\"assets/new-iconv2/hapus.png\" alt=\"\" height=\"30\" width=\"30\">\n                  <br>\n                </div>\n\n                <div *ngIf=\"i == (productLength-1)\" class=\"ion-text-center\" (click)=\"addProduk()\">\n                  <img src=\"assets/new-iconv2/Tambah.png\" alt=\"\" height=\"30\" width=\"30\">\n                  <br>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n\n\n\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"submit\" expand=\"block\" color=\"dark\" [disabled]=\"form.invalid\">KEMASKINI</ion-button>\n        </ion-col>\n      </ion-row>\n\n\n    </form>\n\n  </ion-grid>\n\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_profile-perniagaan_profile-perniagaan_module_ts-es2015.js.map