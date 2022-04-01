(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_auth_profile-pekebun_profile-pekebun_module_ts"],{

/***/ 2821:
/*!****************************************************************************!*\
  !*** ./src/app/auth/profile-pekebun/lokaliti-tanah/lokaliti-tanah.page.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LokalitiTanahPage": function() { return /* binding */ LokalitiTanahPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_lokaliti_tanah_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lokaliti-tanah.page.html */ 43594);
/* harmony import */ var _lokaliti_tanah_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lokaliti-tanah.page.scss */ 60780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var src_app_services_daerah_daerah_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/daerah/daerah.service */ 42122);
/* harmony import */ var src_app_services_dun_dun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/dun/dun.service */ 88641);
/* harmony import */ var src_app_services_kampung_kampung_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/kampung/kampung.service */ 92272);
/* harmony import */ var src_app_services_mukim_mukim_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/mukim/mukim.service */ 46175);
/* harmony import */ var src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/negeri/negeri.service */ 64802);
/* harmony import */ var src_app_services_parlimen_parlimen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/parlimen/parlimen.service */ 21450);
/* harmony import */ var src_app_services_seksyen_seksyen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/seksyen/seksyen.service */ 48203);














let LokalitiTanahPage = class LokalitiTanahPage {
    constructor(modalController, formBuilder, negeriService, daerahService, mukimService, parlimenService, dunService, kampungService, seksyenService, loadingController, alertController) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.negeriService = negeriService;
        this.daerahService = daerahService;
        this.mukimService = mukimService;
        this.parlimenService = parlimenService;
        this.dunService = dunService;
        this.kampungService = kampungService;
        this.seksyenService = seksyenService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.form = this.formBuilder.group({
            pekebunid: ['',],
            No_Geran: ['',],
            No_Lot: ['',],
            U_Negeri_ID: [''],
            U_Daerah_ID: ['',],
            U_Mukim_ID: [''],
            U_Parlimen_ID: [''],
            U_Dun_ID: [''],
            U_Kampung_ID: [''],
            U_Seksyen_ID: [''],
            Luas_Lot: [''],
            Tanaman: this.formBuilder.array([]),
        });
    }
    /** Tanah */
    tanamans() {
        return this.form.get("Tanaman");
    }
    newTanaman() {
        return this.formBuilder.group({
            tanahid: ['',],
            Jenis_Tanaman: ['',],
        });
    }
    addTanaman() {
        this.tanamans().push(this.newTanaman());
    }
    patchValue2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: 'Loading ...' });
            loading.present();
            this.data.Tanaman.forEach(t => {
                var tanah = this.newTanaman();
                // console.log("patch tanah", tanah.value);
                this.tanamans().push(tanah);
            });
            this.form.patchValue(this.data);
            console.log("form", this.form.value);
            loading.dismiss();
        });
    }
    ngOnInit() {
        console.log("dataLALALAL", this.maklumatTanah);
        this.data = this.maklumatTanah[0].data;
        this.index = this.maklumatTanah[0].index;
        console.log("index", this.index);
        console.log("datakasdkjs", this.data);
        this.getLocaliti();
    }
    dismiss() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    getLocaliti() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: 'Loading ...' });
            loading.present();
            this.negeriService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(x => x.filter(i => i.U_Negeri_ID == this.data.U_Negeri_ID))).subscribe((resNegeri) => {
                console.log("Negeri", resNegeri);
                this.negeri = resNegeri;
                this.daerahService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(x => x.filter(i => i.U_Daerah_ID == this.data.U_Daerah_ID))).subscribe((resDaerah) => {
                    console.log("resDaerah", resDaerah);
                    this.daerah = resDaerah;
                    this.mukimService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(x => x.filter(i => i.U_Mukim_ID == this.data.U_Mukim_ID))).subscribe((resMukim) => {
                        console.log("resMukim", resMukim);
                        this.mukim = resMukim;
                        this.parlimenService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(x => x.filter(i => i.U_Parlimen_ID == this.data.U_Parlimen_ID))).subscribe((resParlimen) => {
                            console.log("resParlimen", resParlimen);
                            this.parlimen = resParlimen;
                            this.dunService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(x => x.filter(i => i.U_Dun_ID == this.data.U_Dun_ID))).subscribe((resDun) => {
                                console.log("resDun", resDun);
                                this.dun = resDun;
                                this.kampungService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(x => x.filter(i => i.U_Kampung_ID == this.data.U_Kampung_ID))).subscribe((resKampung) => {
                                    console.log("resKampung", resKampung);
                                    this.kampung = resKampung;
                                    this.seksyenService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(x => x.filter(i => i.U_Seksyen_ID == this.data.U_Seksyen_ID))).subscribe((resSeksyen) => {
                                        console.log("resSeksyen", resSeksyen);
                                        this.seksyen = resSeksyen;
                                        this.patchValue2();
                                        loading.dismiss();
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }
};
LokalitiTanahPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder },
    { type: src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_6__.NegeriService },
    { type: src_app_services_daerah_daerah_service__WEBPACK_IMPORTED_MODULE_2__.DaerahService },
    { type: src_app_services_mukim_mukim_service__WEBPACK_IMPORTED_MODULE_5__.MukimService },
    { type: src_app_services_parlimen_parlimen_service__WEBPACK_IMPORTED_MODULE_7__.ParlimenService },
    { type: src_app_services_dun_dun_service__WEBPACK_IMPORTED_MODULE_3__.DunService },
    { type: src_app_services_kampung_kampung_service__WEBPACK_IMPORTED_MODULE_4__.KampungService },
    { type: src_app_services_seksyen_seksyen_service__WEBPACK_IMPORTED_MODULE_8__.SeksyenService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController }
];
LokalitiTanahPage.propDecorators = {
    maklumatTanah: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }]
};
LokalitiTanahPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-lokaliti-tanah',
        template: _raw_loader_lokaliti_tanah_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_lokaliti_tanah_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LokalitiTanahPage);



/***/ }),

/***/ 63018:
/*!************************************************************************!*\
  !*** ./src/app/auth/profile-pekebun/profile-pekebun-routing.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePekebunPageRoutingModule": function() { return /* binding */ ProfilePekebunPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_pekebun_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-pekebun.page */ 66653);




const routes = [
    {
        path: '',
        component: _profile_pekebun_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePekebunPage
    },
    {
        path: 'lokaliti-tanah',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_profile-pekebun_lokaliti-tanah_lokaliti-tanah_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lokaliti-tanah/lokaliti-tanah.module */ 28687)).then(m => m.LokalitiTanahPageModule)
    }
];
let ProfilePekebunPageRoutingModule = class ProfilePekebunPageRoutingModule {
};
ProfilePekebunPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePekebunPageRoutingModule);



/***/ }),

/***/ 33003:
/*!****************************************************************!*\
  !*** ./src/app/auth/profile-pekebun/profile-pekebun.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePekebunPageModule": function() { return /* binding */ ProfilePekebunPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _profile_pekebun_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-pekebun-routing.module */ 63018);
/* harmony import */ var _profile_pekebun_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-pekebun.page */ 66653);







let ProfilePekebunPageModule = class ProfilePekebunPageModule {
};
ProfilePekebunPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_pekebun_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePekebunPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_profile_pekebun_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePekebunPage]
    })
], ProfilePekebunPageModule);



/***/ }),

/***/ 66653:
/*!**************************************************************!*\
  !*** ./src/app/auth/profile-pekebun/profile-pekebun.page.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePekebunPage": function() { return /* binding */ ProfilePekebunPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_pekebun_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile-pekebun.page.html */ 22884);
/* harmony import */ var _profile_pekebun_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-pekebun.page.scss */ 72930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_pekebun_pekebun_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/pekebun/pekebun.model */ 16955);
/* harmony import */ var src_app_services_pekebun_pekebun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/pekebun/pekebun.service */ 95855);
/* harmony import */ var src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/negeri/negeri.service */ 64802);
/* harmony import */ var src_app_services_daerah_daerah_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/daerah/daerah.service */ 42122);
/* harmony import */ var src_app_services_mukim_mukim_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/mukim/mukim.service */ 46175);
/* harmony import */ var src_app_services_parlimen_parlimen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/parlimen/parlimen.service */ 21450);
/* harmony import */ var src_app_services_dun_dun_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/dun/dun.service */ 88641);
/* harmony import */ var src_app_services_kampung_kampung_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/kampung/kampung.service */ 92272);
/* harmony import */ var src_app_services_seksyen_seksyen_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/seksyen/seksyen.service */ 48203);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _lokaliti_tanah_lokaliti_tanah_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lokaliti-tanah/lokaliti-tanah.page */ 2821);

















let ProfilePekebunPage = class ProfilePekebunPage {
    constructor(pekebunService, router, pekebun, 
    // private pekebunKecilService: PekebunKecilService,
    formBuilder, negeriService, daerahService, mukimService, parlimenService, dunService, kampungService, seksyenService, loadingController, alertController, modalController) {
        this.pekebunService = pekebunService;
        this.router = router;
        this.pekebun = pekebun;
        this.formBuilder = formBuilder;
        this.negeriService = negeriService;
        this.daerahService = daerahService;
        this.mukimService = mukimService;
        this.parlimenService = parlimenService;
        this.dunService = dunService;
        this.kampungService = kampungService;
        this.seksyenService = seksyenService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.modalController = modalController;
        this.tanah = [];
        this.tanaman = [];
        this.form = this.formBuilder.group({
            // no_kp: ['',],
            // usahawanid: ['',],
            Nama_PK: ['',],
            No_KP: ['',],
            noTS: ['',],
            Tanah: this.formBuilder.array([]),
        });
    }
    /** Tanah */
    tanahs() {
        return this.form.get("Tanah");
    }
    newTanah() {
        return this.formBuilder.group({
            pekebunid: ['',],
            No_Geran: ['',],
            No_Lot: ['',],
            U_Negeri_ID: [''],
            U_Daerah_ID: ['',],
            U_Mukim_ID: [''],
            U_Parlimen_ID: [''],
            U_Dun_ID: [''],
            U_Kampung_ID: [''],
            U_Seksyen_ID: [''],
            Luas_Lot: [''],
            Tanaman: this.formBuilder.array([]),
        });
    }
    addTanah() {
        this.tanahs().push(this.newTanah());
    }
    /** tanaman */
    tanamans(ti) {
        return this.tanahs().at(ti).get("Tanaman");
    }
    newTanaman() {
        return this.formBuilder.group({
            tanahid: ['',],
            Jenis_Tanaman: ['',],
        });
    }
    addTanaman(ti) {
        this.tanamans(ti).push(this.newTanaman());
    }
    removeTanaman(ti, bi) {
        this.tanamans(ti).removeAt(ti);
    }
    ngOnInit() {
        this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
        this.user_id = window.sessionStorage.getItem("user_id");
        console.log("usahawan id", this.usahawan_id);
        console.log("user id", this.user_id);
        this.getPekebun();
        this.getLocaliti();
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
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
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                            console.log(this.form.value);
                            this.pekebunService.update(this.form.value, this.pekebun.id).subscribe((res) => {
                                console.log("response", res);
                                this.pekebunService.deleteTanah(res.id).subscribe((deletedData) => {
                                    console.log("deletedData", deletedData);
                                });
                                this.form.value.Tanah.forEach(element => {
                                    console.log("submit tanah", element);
                                    this.pekebunService.updateTanah(element, res.id).subscribe((res2) => {
                                        console.log("updateTanah", res2);
                                        this.pekebunService.deleteTanaman(res2).subscribe((deletedTanaman) => {
                                            console.log("deletedTanaman", deletedTanaman);
                                        });
                                        element.Tanaman.forEach(element2 => {
                                            console.log("submit tanaman", element2);
                                            this.pekebunService.updateTanaman(element2, res2).subscribe((updatedTanaman) => {
                                                console.log("updatedTanaman", updatedTanaman);
                                            });
                                        });
                                    });
                                });
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Kemaskini Berjaya',
                subHeader: 'Kemaskini Maklumat Pekebun Telah Berjaya',
                message: '',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    presentAlert2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Harap Maaf',
                subHeader: 'Tiada Rekod Pekebun Dijumpai',
                message: '',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    patchValue2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            // console.log("yeayyy", this.pekebunKecil)
            const loading = yield this.loadingController.create({ message: 'Loading ...' });
            loading.present();
            this.pekebunKecil.Tanah.forEach(t => {
                var tanah = this.newTanah();
                // console.log("patch tanah", tanah.value);
                this.tanahs().push(tanah);
                t.Tanaman.forEach(b => {
                    // console.log(b)
                    var tanaman = this.newTanaman();
                    tanah.get("Tanaman").push(tanaman);
                });
            });
            this.form.patchValue(this.pekebunKecil);
            console.log("form", this.form.value);
            loading.dismiss();
        });
    }
    getPekebun() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: 'Loading ...' });
            loading.present();
            this.pekebunService.show(this.usahawan_id).subscribe((res) => {
                console.log("pekebun info", res);
                if (Object.keys(res).length === 0) {
                    console.log("failed");
                    loading.dismiss();
                    this.presentAlert2();
                }
                else {
                    if (res.No_KP == null || res.No_KP == "") {
                        loading.dismiss();
                        this.presentAlert2();
                    }
                    else {
                        this.pekebun = res;
                        this.getMaklumatPekebun(res.No_KP);
                        this.getNoTS(res.No_KP);
                        loading.dismiss();
                    }
                }
            }, (err) => {
                loading.dismiss();
                alert('Something went wrong');
            });
        });
    }
    getMaklumatPekebun(nokp) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: 'Loading ...' });
            loading.present();
            this.pekebunService.getPekebunEpek(nokp).subscribe((res) => {
                console.log("pekebun kecil info", res);
                // let response = parseInt(res);
                if (res == 400) {
                    console.log("takde data");
                    loading.dismiss();
                    this.presentAlert2();
                }
                else {
                    console.log("yeayyy", this.pekebunKecil);
                    this.pekebunKecil = res[0];
                    this.patchValue2();
                    loading.dismiss();
                }
            }, (err) => {
                loading.dismiss();
                alert('Something went wrong');
            });
        });
    }
    getNoTS(nokp) {
        this.pekebunService.getNoTS(nokp).subscribe((res) => {
            console.log("noTS", res);
            // console.log("resaaaaa", res)
            if (res == 400) {
                this.form.patchValue({
                // noTS: null
                });
            }
            else {
                this.form.patchValue({
                    noTS: res[0].noTS
                });
            }
        });
    }
    getLocaliti() {
        this.negeriService.get().subscribe((resNegeri) => {
            console.log("Negeri", resNegeri);
            this.negeri = resNegeri;
            this.daerahService.get().subscribe((resDaerah) => {
                console.log("resDaerah", resDaerah);
                this.daerah = resDaerah;
            });
        });
    }
    openMyModal(tanah, index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let maklumatTanah = [
                {
                    "data": tanah.value,
                    "index": index
                }
            ];
            console.log("maklumatTanah", maklumatTanah);
            console.log("tanah", tanah.value);
            // let data = tanah.value
            const myModal = yield this.modalController.create({
                component: _lokaliti_tanah_lokaliti_tanah_page__WEBPACK_IMPORTED_MODULE_11__.LokalitiTanahPage,
                backdropDismiss: true,
                cssClass: 'options_modal',
                componentProps: { maklumatTanah }
            });
            return yield myModal.present();
        });
    }
};
ProfilePekebunPage.ctorParameters = () => [
    { type: src_app_services_pekebun_pekebun_service__WEBPACK_IMPORTED_MODULE_3__.PekebunService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: src_app_services_pekebun_pekebun_model__WEBPACK_IMPORTED_MODULE_2__.PekebunModel },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder },
    { type: src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_4__.NegeriService },
    { type: src_app_services_daerah_daerah_service__WEBPACK_IMPORTED_MODULE_5__.DaerahService },
    { type: src_app_services_mukim_mukim_service__WEBPACK_IMPORTED_MODULE_6__.MukimService },
    { type: src_app_services_parlimen_parlimen_service__WEBPACK_IMPORTED_MODULE_7__.ParlimenService },
    { type: src_app_services_dun_dun_service__WEBPACK_IMPORTED_MODULE_8__.DunService },
    { type: src_app_services_kampung_kampung_service__WEBPACK_IMPORTED_MODULE_9__.KampungService },
    { type: src_app_services_seksyen_seksyen_service__WEBPACK_IMPORTED_MODULE_10__.SeksyenService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController }
];
ProfilePekebunPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-profile-pekebun',
        template: _raw_loader_profile_pekebun_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_pekebun_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePekebunPage);



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

/***/ 16955:
/*!***************************************************!*\
  !*** ./src/app/services/pekebun/pekebun.model.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PekebunModel": function() { return /* binding */ PekebunModel; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let PekebunModel = class PekebunModel {
};
PekebunModel = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], PekebunModel);



/***/ }),

/***/ 95855:
/*!*****************************************************!*\
  !*** ./src/app/services/pekebun/pekebun.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PekebunService": function() { return /* binding */ PekebunService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);




let PekebunService = class PekebunService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/pekebun";
        this.models = [];
        this.url2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/tanah";
        this.url3 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/tanaman";
    }
    show(id) {
        return this.http.get(`${this.url}` + "/" + id);
    }
    update(data, id) {
        return this.http.put(`${this.url}/${id}`, data);
    }
    getPekebunEpek(nokp) {
        return this.http.get(`${this.url}` + "/getPekebunEspek/" + nokp);
    }
    getNoTS(nokp) {
        return this.http.get(`${this.url}` + "/getNoTS/" + nokp);
    }
    updateTanah(data, pekebun_id) {
        return this.http.put(`${this.url2}/${pekebun_id}`, data);
    }
    deleteTanah(pekebun_id) {
        return this.http.delete(`${this.url2}/${pekebun_id}`);
    }
    updateTanaman(data, tanah_id) {
        return this.http.put(`${this.url3}/${tanah_id}`, data);
    }
    deleteTanaman(tanah_id) {
        return this.http.delete(`${this.url3}/${tanah_id}`);
    }
};
PekebunService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PekebunService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PekebunService);



/***/ }),

/***/ 60780:
/*!******************************************************************************!*\
  !*** ./src/app/auth/profile-pekebun/lokaliti-tanah/lokaliti-tanah.page.scss ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2thbGl0aS10YW5haC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 72930:
/*!****************************************************************!*\
  !*** ./src/app/auth/profile-pekebun/profile-pekebun.page.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".read-only {\n  background-color: #e2e2e2;\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtcGVrZWJ1bi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJwcm9maWxlLXBla2VidW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlYWQtb25seSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcbiAgICBjb2xvcjojMDAwMDAwXG59XG5cbi8vIGlvbi1zZWxlY3Q6ZGlzYWJsZWR7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcbi8vICAgICBjb2xvcjojMDAwMDAwXG4vLyB9Il19 */");

/***/ }),

/***/ 43594:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/profile-pekebun/lokaliti-tanah/lokaliti-tanah.page.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"display:flex; justify-content:center; align-items:center\">\n\n    \n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <ion-text style=\"display:flex; justify-content:center;\">\n        <h5 style=\"color: #15493C;\">\n          <!-- <strong class=\"ion-text-uppercase\"> -->\n          MAKLUMAT TANAH {{ index }}\n          <!-- </strong> -->\n        </h5>\n      </ion-text>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <form [formGroup]=\"form\" class=\"ion-padding form-control\">\n\n    <ion-row class=\"ion-margin-bottom\" style=\"background-color: #FF6600; color:white\">\n      <ion-col>\n        <strong>Maklumat Tanah {{ index }}</strong>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-label> NO.GERAN</ion-label>\n        <ion-input formControlName=\"No_Geran\" disabled></ion-input>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-label> NEGERI</ion-label>\n        <!-- <ion-input formControlName=\"U_Negeri_ID\" ></ion-input> -->\n        <ion-select formControlName=\"U_Negeri_ID\" disabled>\n          <ion-select-option *ngFor=\"let negeri of negeri\" value=\"{{negeri.U_Negeri_ID}}\">{{negeri.Negeri}}\n          </ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-label> DAERAH</ion-label>\n        <!-- <ion-input formControlName=\"U_Daerah_ID\"></ion-input> -->\n        <ion-select formControlName=\"U_Daerah_ID\" disabled>\n          <ion-select-option *ngFor=\"let daerah of daerah\" value=\"{{daerah.U_Daerah_ID}}\">{{daerah.Daerah}}\n          </ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col>\n        <ion-label> MUKIM</ion-label>\n        <!-- <ion-input formControlName=\"U_Mukim_ID\"></ion-input> -->\n        <ion-select formControlName=\"U_Mukim_ID\" disabled>\n          <ion-select-option *ngFor=\"let mukim of mukim\" value=\"{{mukim.U_Mukim_ID}}\">{{mukim.Mukim}}\n          </ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-label> PARLIMEN</ion-label>\n        <!-- <ion-input formControlName=\"U_Parlimen_ID\"></ion-input> -->\n        <ion-select formControlName=\"U_Parlimen_ID\" disabled>\n          <ion-select-option *ngFor=\"let parlimen of parlimen\" value=\"{{parlimen.U_Parlimen_ID}}\">{{parlimen.Parlimen}}\n          </ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col>\n        <ion-label> DUN</ion-label>\n        <!-- <ion-input formControlName=\"U_Dun_ID\"></ion-input> -->\n\n        <ion-select formControlName=\"U_Dun_ID\" disabled>\n          <ion-select-option *ngFor=\"let dun of dun\" value=\"{{dun.U_Dun_ID}}\">{{dun.Dun}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-label> KAMPUNG</ion-label>\n        <!-- <ion-input formControlName=\"U_Kampung_ID\"></ion-input> -->\n\n        <ion-select formControlName=\"U_Kampung_ID\" disabled>\n          <ion-select-option *ngFor=\"let kampung of kampung\" value=\"{{kampung.U_Kampung_ID}}\">{{kampung.Kampung}}\n          </ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-label> SEKSYEN</ion-label>\n        <!-- <ion-input formControlName=\"U_Seksyen_ID\"></ion-input> -->\n\n        <ion-select formControlName=\"U_Seksyen_ID\" disabled>\n                <ion-select-option *ngFor = \"let seksyen of seksyen\" value=\"{{seksyen.U_Seksyen_ID}}\">{{seksyen.Seksyen}}</ion-select-option>\n              </ion-select>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-label> KELUARAN HEKTAR</ion-label>\n        <ion-input formControlName=\"Luas_Lot\" disabled></ion-input>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row class=\"ion-margin-bottom ion-margin-top\" style=\"background-color: #FF6600; color:white\">\n      <ion-col >\n        <strong>Maklumat Tanaman</strong>\n      </ion-col>\n    </ion-row>\n\n    <div formArrayName=\"Tanaman\">\n\n      <div *ngFor=\"let tanaman of tanamans(ti).controls; let bi=index\">\n\n        <div [formGroupName]=\"bi\">\n\n          <ion-row>\n            <ion-col>\n              <ion-label> JENIS TANAMAN {{bi +1}}</ion-label>\n              <ion-input formControlName=\"Jenis_Tanaman\" disabled></ion-input>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n    <br>\n    <br>\n\n\n    <br>\n\n\n  </form>\n\n</ion-content>");

/***/ }),

/***/ 22884:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/profile-pekebun/profile-pekebun.page.html ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button href=\"/dashboard\">\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <!-- <ion-back-button defaultHref=\"/dashboard\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-text color=\"warning\">\n      <h1>\n        <strong>\n          PROFIL PEKEBUN\n        </strong>\n      </h1>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- FF6600 -->\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n\n    <ion-fab-button color=\"light\">\n      <ion-icon color=\"warning\" name=\"caret-down-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"bottom\">\n      <!-- <a href=\"/profile\"> -->\n      <ion-fab-button color=\"warning\" href=\"/profile\">\n        <!-- <ion-icon name=\"logo-facebook\"></ion-icon> -->\n        <img src=\"assets/icon/usahawan-icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"warning\"><small> Usahawan</small></ion-text>\n      <!-- </a> -->\n      <!-- <a href=\"/profile-syarikat\" style=\"text-decoration:none;\"> -->\n      <ion-fab-button color=\"warning\" href=\"/profile-syarikat\">\n        <!-- <ion-icon name=\"logo-twitter\"></ion-icon> -->\n        <img src=\"assets/icon/Syarikat--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"warning\"><small> Syarikat</small></ion-text>\n      <!-- </a> -->\n\n      <ion-fab-button color=\"warning\" href=\"/profile-perniagaan\">\n        <!-- <ion-icon name=\"logo-vimeo\"></ion-icon> -->\n        <img src=\"assets/icon/Perniagaan--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"warning\"><small> Perniagaan</small></ion-text>\n\n      <ion-fab-button color=\"warning\" href=\"/profile-pekebun\">\n        <!-- <ion-icon name=\"logo-vimeo\"></ion-icon> -->\n        <img src=\"assets/icon/Pekebun--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"warning\"><small> Pekebun</small></ion-text>\n    </ion-fab-list>\n  </ion-fab>\n\n\n  <ion-grid [fixed]=\"true\">\n\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" class=\"ion-padding form-control\">\n\n      <ion-row style=\"background-color: #FF6600; color:white\">\n        <ion-col>\n          <strong>Maklumat Pekebun Kecil</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>NO. KAD PENGENALAN</ion-label>\n          <ion-input class=\"read-only\" formControlName=\"No_KP\" disabled></ion-input>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>NAMA PEKEBUN KECIL</ion-label>\n          <ion-input class=\"read-only\" formControlName=\"Nama_PK\" disabled></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>NO. TANAM SEMULA/SIC</ion-label>\n          <ion-input class=\"read-only\" formControlName=\"noTS\" disabled></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <br><br><br>\n\n      <br>\n\n      <div formArrayName=\"Tanah\">\n        <div *ngFor=\"let tanah of tanahs().controls; let ti=index\">\n\n          <div [formGroupName]=\"ti\">\n\n            <ion-row class=\"ion-margin-bottom\" style=\"background-color: #FF6600; color:white\">\n              <ion-col>\n                <strong>Maklumat Tanah {{ ti+1 }}</strong>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label> NO.GERAN</ion-label>\n                <ion-input class=\"read-only\" formControlName=\"No_Geran\" disabled></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label> NEGERI</ion-label>\n                <ion-select class=\"read-only\" formControlName=\"U_Negeri_ID\" disabled style=\"background-color: #b1b1b1;\">\n                  <ion-select-option *ngFor=\"let negeri of negeri\" value=\"{{negeri.U_Negeri_ID}}\" disabled>\n                    {{negeri.Negeri}}</ion-select-option>\n                </ion-select>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label> DAERAH</ion-label>\n                <ion-select class=\"read-only\" formControlName=\"U_Daerah_ID\" disabled style=\"background-color: #b1b1b1;\">\n                  <ion-select-option *ngFor=\"let daerah of daerah\" value=\"{{daerah.U_Daerah_ID}}\" disabled>\n                    {{daerah.Daerah}}</ion-select-option>\n                </ion-select>\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n              <ion-col>\n                <ion-label> KELUARAN HEKTAR</ion-label>\n                <ion-input class=\"read-only\" formControlName=\"Luas_Lot\" disabled></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\" style=\"display: flex; justify-content:center\">\n                <ion-button fill=\"outline\" color=\"dark\" (click)=\"openMyModal(tanah, ti+1)\" expand=\"block\" style=\"width: 60%;\">Lokasi Tanah</ion-button>\n\n              </ion-col>\n            </ion-row>\n           \n\n\n\n            <br>\n            <br>\n          </div>\n\n        </div>\n      </div>\n\n      <br>\n\n\n      <br>\n      <ion-row>\n        <ion-col>\n\n          <ion-button expand=\"block\" color=\"dark\" type=\"submit\">SAHKAN</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n\n  </ion-grid>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_profile-pekebun_profile-pekebun_module_ts-es2015.js.map