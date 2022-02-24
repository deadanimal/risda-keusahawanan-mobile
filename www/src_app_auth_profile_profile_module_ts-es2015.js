(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_auth_profile_profile_module_ts"],{

/***/ 27771:
/*!********************************************************!*\
  !*** ./src/app/auth/profile/profile-routing.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": function() { return /* binding */ ProfilePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 92855);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 2970:
/*!************************************************!*\
  !*** ./src/app/auth/profile/profile.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": function() { return /* binding */ ProfilePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 27771);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 92855);







// import { TooltipsModule } from 'ionic-tooltips';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            // TooltipsModule.forRoot(),
            // BrowserAnimationsModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 92855:
/*!**********************************************!*\
  !*** ./src/app/auth/profile/profile.page.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": function() { return /* binding */ ProfilePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 32649);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 22403);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login/login.service */ 58762);
/* harmony import */ var src_app_services_login_login_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login/login.model */ 51146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_usahawan_usahawan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usahawan/usahawan.service */ 46643);
/* harmony import */ var src_app_services_usahawan_usahawan_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usahawan/usahawan.model */ 41160);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/negeri/negeri.service */ 64802);
/* harmony import */ var src_app_services_daerah_daerah_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/daerah/daerah.service */ 42122);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var src_app_services_mukim_mukim_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/mukim/mukim.service */ 46175);
/* harmony import */ var src_app_services_parlimen_parlimen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/parlimen/parlimen.service */ 21450);
/* harmony import */ var src_app_services_dun_dun_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/dun/dun.service */ 88641);
/* harmony import */ var src_app_services_kampung_kampung_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/kampung/kampung.service */ 92272);
/* harmony import */ var src_app_services_seksyen_seksyen_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/seksyen/seksyen.service */ 48203);
/* harmony import */ var src_app_services_ketegori_usahawan_kategori_usahawan_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/ketegori-usahawan/kategori-usahawan.service */ 28957);
/* harmony import */ var src_app_services_pusat_tanggungjawab_pusat_tanggungjawab_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/pusat-tanggungjawab/pusat-tanggungjawab.service */ 47076);
/* harmony import */ var src_app_services_Aliran_aliran_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/Aliran/aliran.service */ 72311);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_16__);










// import { LoginModel } from 'src/app/services/login/login.model';















let ProfilePage = class ProfilePage {
    constructor(usahawanService, loginService, router, user, usahawan, formBuilder, loadingController, alertController, negeriService, daerahService, mukimService, parlimenService, dunService, kampungService, seksyenService, kategoriUsahawanService, ptService, aliranService) {
        this.usahawanService = usahawanService;
        this.loginService = loginService;
        this.router = router;
        this.user = user;
        this.usahawan = usahawan;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.negeriService = negeriService;
        this.daerahService = daerahService;
        this.mukimService = mukimService;
        this.parlimenService = parlimenService;
        this.dunService = dunService;
        this.kampungService = kampungService;
        this.seksyenService = seksyenService;
        this.kategoriUsahawanService = kategoriUsahawanService;
        this.ptService = ptService;
        this.aliranService = aliranService;
        this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
        this.user_id = window.sessionStorage.getItem("user_id");
        this.jantina = [
            { name: "Lelaki", id: 1 },
            { name: "Perempuan", id: 2 },
        ];
        this.bangsa = [
            { id: 1, name: "Melayu" },
            { id: 2, name: "Orang Asli Semenanjung" },
            { id: 3, name: "Bumiputera Sabah" },
            { id: 4, name: "Bumiputera Sarawak" },
            { id: 5, name: "Cina" },
            { id: 6, name: "India" },
            { id: 7, name: "Lain-lain" },
        ];
        this.statusperkahwinan = [
            { id: 1, name: "Tidak Pernah Berkahwin" },
            { id: 2, name: "Berkahwin" },
            { id: 3, name: "Balu / Duda" },
            { id: 4, name: "Bercerai" },
            { id: 5, name: "Berpisah" },
            { id: 9, name: "Tiada maklumat" },
        ];
        this.tahapPendidikan = [
            { id: 1, name: "Tidak Bersekolah" },
            { id: 2, name: "Sekolah Rendah / Setara" },
            { id: 3, name: "Sekolah Menengah / Setara" },
            { id: 4, name: "Kolej / Universiti / Setara" },
        ];
        this.taraf_kelulusan_tertinggi = [
            { U_Taraf_Kelulusan_Tertinggi_ID: "1", Jenis_Kelulusan: "UPSR/PSRA/Setaraf" },
            { U_Taraf_Kelulusan_Tertinggi_ID: "2", Jenis_Kelulusan: "PMR/SRP/LCE/Setaraf" },
            { U_Taraf_Kelulusan_Tertinggi_ID: "3", Jenis_Kelulusan: "SPM/MCE/Setaraf" },
            { U_Taraf_Kelulusan_Tertinggi_ID: "4", Jenis_Kelulusan: "STPM/Diploma/Setaraf" },
            { U_Taraf_Kelulusan_Tertinggi_ID: "5", Jenis_Kelulusan: "Ijazah Pertama/Ke Atas" },
            { U_Taraf_Kelulusan_Tertinggi_ID: "6", Jenis_Kelulusan: "Tiada" },
        ];
        this.statusDaftarUsahawan = [
            { id: "KP01", name: "PEKEBUN KECIL" },
            { id: "KP02", name: "PASANGAN PEKEBUN KECIL" },
            { id: "KP03", name: "ANAK PEKEBUN KECIL" },
        ];
        this.etnik = [
            { U_Etnik_ID: "1100", Etnik: "Melayu", U_Bangsa_ID: "1" },
            { U_Etnik_ID: "2111", Etnik: "Negrito - Bateq", U_Bangsa_ID: "2" },
            { U_Etnik_ID: "2112", Etnik: "Negrito - Jahai", U_Bangsa_ID: "2" },
            { U_Etnik_ID: "2113", Etnik: "Negrito - Kensiu", U_Bangsa_ID: "2" },
            { U_Etnik_ID: "2114", Etnik: "Negrito - Kintak", U_Bangsa_ID: "2" },
            { U_Etnik_ID: "2115", Etnik: "Negrito - Ianoh", U_Bangsa_ID: "2" },
            { U_Etnik_ID: "2116", Etnik: "Negrito - Mendriq", U_Bangsa_ID: "2" },
            { U_Etnik_ID: "2121", Etnik: "Senoi - Che Wong", U_Bangsa_ID: "2" },
            { U_Etnik_ID: "2122", Etnik: "Senoi - Jahut", U_Bangsa_ID: "2" },
            { U_Etnik_ID: "2123", Etnik: "Senoi - Mah Meri", U_Bangsa_ID: "2" },
            { U_Etnik_ID: "2124", Etnik: "Senoi - Semai", U_Bangsa_ID: "2" },
            { U_Etnik_ID: "2125", Etnik: "Senoi - Semoq Beri", U_Bangsa_ID: "2" },
            { U_Etnik_ID: "2126", Etnik: "Senoi - Temiar", U_Bangsa_ID: "2" },
            { U_Etnik_ID: "2131", Etnik: "Melayu Asli - Jakun", U_Bangsa_ID: "2" },
            { U_Etnik_ID: "2132", Etnik: "Melayu Asli - Prang Kanaq", U_Bangsa_ID: "2" },
            { U_Etnik_ID: "2133", Etnik: "Melayu Asli - Orang Kuala", U_Bangsa_ID: "2" },
            { U_Etnik_ID: "2134", Etnik: "Melayu Asli - Orang Seletar", U_Bangsa_ID: "2" },
            { U_Etnik_ID: "2135", Etnik: "Melayu Asli - Semalai", U_Bangsa_ID: "2" },
            { U_Etnik_ID: "2136", Etnik: "Melayu Asli - Temuan", U_Bangsa_ID: "2" },
            { U_Etnik_ID: "3110", Etnik: "Bajau", U_Bangsa_ID: "3" },
            { U_Etnik_ID: "3120", Etnik: "Balbak/Molbog", U_Bangsa_ID: "3" },
            { U_Etnik_ID: "3130", Etnik: "Bisaya/Bisayah", U_Bangsa_ID: "3" },
            { U_Etnik_ID: "3140", Etnik: "Bulongan", U_Bangsa_ID: "3" },
            { U_Etnik_ID: "3150", Etnik: "Dusun", U_Bangsa_ID: "3" },
            { U_Etnik_ID: "3160", Etnik: "Idahan/Ida'an", U_Bangsa_ID: "3" },
            { U_Etnik_ID: "3170", Etnik: "Iranun/Ilanun", U_Bangsa_ID: "3" },
            { U_Etnik_ID: "3180", Etnik: "Kadayan/Kedayan", U_Bangsa_ID: "3" },
            { U_Etnik_ID: "3190", Etnik: "Kadazan", U_Bangsa_ID: "3" },
            { U_Etnik_ID: "3200", Etnik: "Lundayuh/Lundayeh", U_Bangsa_ID: "3" },
            { U_Etnik_ID: "3210", Etnik: "Melayu Brunei", U_Bangsa_ID: "3" },
            { U_Etnik_ID: "3220", Etnik: "Murut", U_Bangsa_ID: "3" },
            { U_Etnik_ID: "3230", Etnik: "Orang Sungai/Sungoi", U_Bangsa_ID: "3" },
            { U_Etnik_ID: "3240", Etnik: "Rungus", U_Bangsa_ID: "3" },
            { U_Etnik_ID: "3250", Etnik: "Suluk", U_Bangsa_ID: "3" },
            { U_Etnik_ID: "3260", Etnik: "Tidung", U_Bangsa_ID: "3" },
            { U_Etnik_ID: "3998", Etnik: "Bumiputera Sabah Lain", U_Bangsa_ID: "3" },
            { U_Etnik_ID: "4110", Etnik: "Bidayuh", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4120", Etnik: "Bisayah (Sarawak)", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4130", Etnik: "Bukitan", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4140", Etnik: "Iban", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4150", Etnik: "Kadayan (Sarawak)", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4160", Etnik: "Kajang", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4170", Etnik: "Kanowit", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4180", Etnik: "Kayan", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4190", Etnik: "Kejaman", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4200", Etnik: "Kalabit", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4210", Etnik: "Kenyah", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4220", Etnik: "Iahanan", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4230", Etnik: "Lisum", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4240", Etnik: "Lugat", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4250", Etnik: "Lun Bawang/Murut (Sarawak)", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4260", Etnik: "Melanau", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4270", Etnik: "Penan", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4280", Etnik: "Punan", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4290", Etnik: "Sabup", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4300", Etnik: "Sekapan", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4310", Etnik: "Sian", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4320", Etnik: "Sipeng", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4330", Etnik: "Tabun", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4340", Etnik: "Tagal", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4350", Etnik: "Tanjong", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4360", Etnik: "Ukit", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "4998", Etnik: "Bumiputera Sarawak Lain", U_Bangsa_ID: "4" },
            { U_Etnik_ID: "5110", Etnik: "Foochow", U_Bangsa_ID: "5" },
            { U_Etnik_ID: "5120", Etnik: "Hainan", U_Bangsa_ID: "5" },
            { U_Etnik_ID: "5130", Etnik: "Henghua", U_Bangsa_ID: "5" },
            { U_Etnik_ID: "5140", Etnik: "Hokchia", U_Bangsa_ID: "5" },
            { U_Etnik_ID: "5150", Etnik: "Hokchiu", U_Bangsa_ID: "5" },
            { U_Etnik_ID: "5160", Etnik: "Hookien", U_Bangsa_ID: "5" },
            { U_Etnik_ID: "5170", Etnik: "Kantonis", U_Bangsa_ID: "5" },
            { U_Etnik_ID: "5180", Etnik: "Khek (Hakka)", U_Bangsa_ID: "5" },
            { U_Etnik_ID: "5190", Etnik: "Kwongsai", U_Bangsa_ID: "5" },
            { U_Etnik_ID: "5200", Etnik: "Teochew", U_Bangsa_ID: "5" },
            { U_Etnik_ID: "5998", Etnik: "Orang Cina Lain", U_Bangsa_ID: "5" },
            { U_Etnik_ID: "6110", Etnik: "India Muslim/Malabari", U_Bangsa_ID: "6" },
            { U_Etnik_ID: "6120", Etnik: "Malayali", U_Bangsa_ID: "6" },
            { U_Etnik_ID: "6130", Etnik: "Punjabi (Kecuali Sikh)", U_Bangsa_ID: "6" },
            { U_Etnik_ID: "6140", Etnik: "Sikh", U_Bangsa_ID: "6" },
            { U_Etnik_ID: "6150", Etnik: "Sinhala", U_Bangsa_ID: "6" },
            { U_Etnik_ID: "6160", Etnik: "Tamil India", U_Bangsa_ID: "6" },
            { U_Etnik_ID: "6170", Etnik: "Tamil Sri Lanka", U_Bangsa_ID: "6" },
            { U_Etnik_ID: "6180", Etnik: "Telugu", U_Bangsa_ID: "6" },
            { U_Etnik_ID: "6998", Etnik: "Orang India Lain", U_Bangsa_ID: "6" },
            { U_Etnik_ID: "7000", Etnik: "Lain-Lain", U_Bangsa_ID: "7" },
        ];
        this.etnikTemp = [];
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
        this.form = this.formBuilder.group({
            Kod_PT: ['',],
            namausahawan: ['',],
            nokadpengenalan: ['',],
            tarikhlahir: ['',],
            U_Jantina_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
            U_Bangsa_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
            U_Etnik_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
            statusperkahwinan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
            U_Pendidikan_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
            U_Taraf_Pendidikan_Tertinggi_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
            alamat1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
            alamat2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
            alamat3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
            bandar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
            poskod: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
            U_Negeri_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
            U_Daerah_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
            U_Mukim_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
            U_Parlimen_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
            U_Dun_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
            U_Kampung_ID: ['',],
            U_Seksyen_ID: ['',],
            id_kategori_usahawan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
            gambar_url: ['',],
            notelefon: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
            nohp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
            status_daftar_usahawan: ['',],
            usahawanid: ['',],
            negeri_perniagaan: ['',],
        });
    }
    ngOnInit() {
        // var getsession_id = window.sessionStorage.getItem("user_id");
        console.log("usahawan id", this.usahawan_id);
        console.log("user id", this.user_id);
        this.getUsahawan();
        this.etnikTemp = this.etnik;
        console.log("etnik", this.etnikTemp);
    }
    setFormValues() {
        this.form.patchValue({
            Kod_PT: this.usahawan.Kod_PT,
            namausahawan: this.usahawan.namausahawan,
            nokadpengenalan: this.usahawan.nokadpengenalan,
            // tarikhlahir: this.usahawan.tarikhlahir,
            U_Jantina_ID: this.usahawan.U_Jantina_ID,
            U_Bangsa_ID: this.usahawan.U_Bangsa_ID,
            U_Etnik_ID: this.usahawan.U_Etnik_ID,
            statusperkahwinan: this.usahawan.statusperkahwinan,
            U_Pendidikan_ID: this.usahawan.U_Pendidikan_ID,
            U_Taraf_Pendidikan_Tertinggi_ID: this.usahawan.U_Taraf_Pendidikan_Tertinggi_ID,
            alamat1: this.usahawan.alamat1,
            alamat2: this.usahawan.alamat2,
            alamat3: this.usahawan.alamat3,
            bandar: this.usahawan.bandar,
            poskod: this.usahawan.poskod,
            U_Negeri_ID: this.usahawan.U_Negeri_ID,
            U_Daerah_ID: this.usahawan.U_Daerah_ID,
            U_Mukim_ID: this.usahawan.U_Mukim_ID,
            U_Parlimen_ID: this.usahawan.U_Parlimen_ID,
            U_Dun_ID: this.usahawan.U_Dun_ID,
            U_Kampung_ID: this.usahawan.U_Kampung_ID,
            U_Seksyen_ID: this.usahawan.U_Seksyen_ID,
            id_kategori_usahawan: this.usahawan.id_kategori_usahawan,
            gambar_url: this.usahawan.gambar_url,
            notelefon: this.usahawan.notelefon,
            nohp: this.usahawan.nohp,
            email: this.usahawan.email,
            status_daftar_usahawan: this.usahawan.status_daftar_usahawan,
            usahawanid: this.usahawan.usahawanid,
            negeri_perniagaan: this.usahawan.perniagaan.negeri.Negeri,
        });
    }
    filterEtnik() {
        this.form.patchValue({
            U_Etnik_ID: ""
        });
        this.etnikTemp = [];
        this.etnik.forEach(element => {
            if (element.U_Bangsa_ID == this.form.value.U_Bangsa_ID) {
                this.etnikTemp.push(element);
            }
        });
        console.log("etnik", this.etnikTemp);
    }
    getUsahawan() {
        // console.log(this.form.value);
        this.usahawanService.show(this.usahawan_id).subscribe((res) => {
            console.log("usahawan info", res);
            if (Object.keys(res).length === 0) {
                console.log("failed");
            }
            else {
                this.usahawan = res;
                console.log("profile usahawan success");
                this.getPT();
                // this.calcBirthDate()
                this.getUser();
                this.getKategoriUsahawan();
                this.calcBirthDate();
                this.negeriService.get().subscribe((resNegeri) => {
                    console.log("Negeri", resNegeri);
                    this.negeri = resNegeri;
                    this.daerahService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(x => x.filter(i => i.U_Negeri_ID == this.usahawan.U_Negeri_ID))).subscribe((resDaerah) => {
                        console.log("resDaerah", resDaerah);
                        this.daerah = resDaerah;
                        this.mukimService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(x => x.filter(i => i.U_Daerah_ID == this.usahawan.U_Daerah_ID))).subscribe((resMukim) => {
                            console.log("resMukim", resMukim);
                            this.mukim = resMukim;
                            this.parlimenService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(x => x.filter(i => i.U_Negeri_ID == this.usahawan.U_Negeri_ID))).subscribe((resParlimen) => {
                                console.log("resParlimen", resParlimen);
                                this.parlimen = resParlimen;
                                this.dunService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(x => x.filter(i => i.U_Parlimen_ID == this.usahawan.U_Parlimen_ID))).subscribe((resDun) => {
                                    console.log("resDun", resDun);
                                    this.dun = resDun;
                                    this.kampungService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(x => x.filter(i => i.U_Mukim_ID == this.usahawan.U_Mukim_ID))).subscribe((resKampung) => {
                                        console.log("resKampung", resKampung);
                                        this.kampung = resKampung;
                                        let mukimStr = this.usahawan.U_Mukim_ID;
                                        let mukimInt = parseInt(mukimStr.toString());
                                        // console.log("mukim temp", typeof mukimInt);
                                        // console.log("mukim temp", mukimInt);
                                        this.seksyenService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(x => x.filter(i => i.U_Mukim_ID == mukimInt))).subscribe((resSeksyen) => {
                                            console.log("resSeksyen", resSeksyen);
                                            this.seksyen = resSeksyen;
                                            this.setFormValues();
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            }
        });
    }
    getUser() {
        // console.log(this.form.value);
        this.loginService.show(this.user_id).subscribe((res) => {
            // console.log("user info", res);
            if (Object.keys(res).length === 0) {
                console.log("failed");
            }
            else {
                this.user = res;
                console.log("user info", this.user);
                console.log("profile usahawan success");
            }
            this.getAliranJualan();
        });
    }
    getPT() {
        this.ptService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(x => x.filter(i => i.Kod_PT == this.usahawan.Kod_PT))).subscribe((res) => {
            // console.log("pt", res);
            this.pusatTanggungjawab = res[0].keterangan;
            console.log("pt", this.pusatTanggungjawab);
        });
    }
    getNegeri() {
        this.negeriService.get().subscribe((res) => {
            console.log("negeri", res);
            this.negeri = res;
        });
    }
    getDaerah() {
        this.daerahService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(x => x.filter(i => i.U_Negeri_ID == this.form.value.U_Negeri_ID))).subscribe((res) => {
            console.log("Daerah", res);
            this.daerah = res;
        });
    }
    getMukim() {
        this.mukimService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(x => x.filter(i => i.U_Daerah_ID == this.form.value.U_Daerah_ID))).subscribe((res) => {
            console.log("mukim", res);
            this.mukim = res;
        });
    }
    getParlimen() {
        this.parlimenService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(x => x.filter(i => i.U_Negeri_ID == this.form.value.U_Negeri_ID))).subscribe((res) => {
            console.log("parlimen", res);
            this.parlimen = res;
        });
    }
    getDun() {
        this.dunService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(x => x.filter(i => i.U_Parlimen_ID == this.form.value.U_Parlimen_ID))).subscribe((res) => {
            console.log("dun", res);
            this.dun = res;
        });
    }
    getKampung() {
        this.kampungService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(x => x.filter(i => i.U_Mukim_ID == this.form.value.U_Mukim_ID))).subscribe((res) => {
            console.log("kampung", res);
            this.kampung = res;
        });
    }
    getSeksyen() {
        console.log(this.form.value.U_Mukim_ID);
        let mukim = parseInt(this.form.value.U_Mukim_ID);
        // console.log("mukim temp",typeof this.form.value.U_Mukim_ID);
        this.seksyenService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(x => x.filter(i => i.U_Mukim_ID == mukim))).subscribe((res) => {
            console.log("seksyen", res);
            this.seksyen = res;
        });
    }
    getKategoriUsahawan() {
        this.kategoriUsahawanService.get().subscribe((res) => {
            console.log("kategori usahawan", res);
            this.kategoriUsahawan = res;
        });
    }
    getAliranJualan() {
        this.aliranService.get(this.user_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(x => x.filter(i => i.kategori_aliran == "JUALAN/PEROLEHAN"))).subscribe((res) => {
            console.log("aliran", res);
            let sum = 0;
            res.forEach(element => {
                sum += element.jumlah_aliran;
            });
            if (sum < 60000) {
                //pico
                this.form.patchValue({
                    id_kategori_usahawan: "KU01"
                });
            }
            else if (sum >= 60000 && sum < 150000) {
                // nano
                this.form.patchValue({
                    id_kategori_usahawan: "KU02"
                });
            }
            else if (sum >= 150000 && sum < 300000) {
                //micro
                this.form.patchValue({
                    id_kategori_usahawan: "KU03"
                });
            }
            else if (sum >= 300000 && sum < 15000000) {
                //kecil
                this.form.patchValue({
                    id_kategori_usahawan: "KU04"
                });
            }
            else if (sum >= 300000 && sum < 15000000) {
                // sederhana
                this.form.patchValue({
                    id_kategori_usahawan: "KU05"
                });
            }
            console.log("sum", sum);
        });
    }
    calcBirthDate() {
        let year = this.usahawan.nokadpengenalan.substring(0, 2);
        let month = this.usahawan.nokadpengenalan.substring(2, 4);
        let date = this.usahawan.nokadpengenalan.substring(4, 6);
        if (Number(year) > 40) {
            year = 19 + year;
        }
        else {
            year = 20 + year;
        }
        let birthday = date + '/' + month + '/' + year;
        console.log("birthday", birthday);
        const datepipe = new _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe('en-US');
        this.form.patchValue({
            tarikhlahir: moment__WEBPACK_IMPORTED_MODULE_16__(birthday).format('YYYY-MM-DD')
        });
        this.tarikhlahir = birthday;
    }
    logForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
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
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
                            console.log('Confirm Okay');
                            console.log('Confirm Okay', this.form.value);
                            const loading = yield this.loadingController.create({ message: 'Loading ...' });
                            loading.present();
                            this.form.value.gambar_url = this.usahawan.gambar_url;
                            console.log(this.form.value);
                            this.usahawanService.update(this.usahawan_id, this.form.value).subscribe((res) => {
                                console.log("updated", res);
                                this.getUser();
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Kemaskini Berjaya',
                subHeader: 'Kemaskini Maklumat Usahawan Telah Berjaya',
                message: '',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = (event) => {
                this.url = event.target.result;
                this.usahawan.gambar_url = this.url;
            };
            this.fileEvent(event);
        }
    }
    fileEvent(e) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            // Fetch the photo, read as a blob, then convert to base64 format
            // const response = await fetch(photo.webPath);
            // const blob = await response.blob();
            return (yield this.convertBlobToBase64(blob));
        });
    }
    presentAlertUpdateProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Ralat',
                // subHeader: 'Subtitle',
                message: 'Sila kamaskini profil anda terlebih dahulu',
                buttons: [
                    {
                        text: 'Okay',
                        // id: 'confirm-button',
                        handler: () => {
                            // this.router.navigate(['/dashboard'])
                        }
                    }
                ]
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
    back() {
        if (this.user.profile_status == 0) {
            this.presentAlertUpdateProfile();
        }
        else {
            this.router.navigate(['/dashboard']);
        }
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_services_usahawan_usahawan_service__WEBPACK_IMPORTED_MODULE_4__.UsahawanService },
    { type: src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_21__.Router },
    { type: src_app_services_login_login_model__WEBPACK_IMPORTED_MODULE_3__.LoginModel },
    { type: src_app_services_usahawan_usahawan_model__WEBPACK_IMPORTED_MODULE_5__.UsahawanModel },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.AlertController },
    { type: src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_6__.NegeriService },
    { type: src_app_services_daerah_daerah_service__WEBPACK_IMPORTED_MODULE_7__.DaerahService },
    { type: src_app_services_mukim_mukim_service__WEBPACK_IMPORTED_MODULE_8__.MukimService },
    { type: src_app_services_parlimen_parlimen_service__WEBPACK_IMPORTED_MODULE_9__.ParlimenService },
    { type: src_app_services_dun_dun_service__WEBPACK_IMPORTED_MODULE_10__.DunService },
    { type: src_app_services_kampung_kampung_service__WEBPACK_IMPORTED_MODULE_11__.KampungService },
    { type: src_app_services_seksyen_seksyen_service__WEBPACK_IMPORTED_MODULE_12__.SeksyenService },
    { type: src_app_services_ketegori_usahawan_kategori_usahawan_service__WEBPACK_IMPORTED_MODULE_13__.KategoriUsahawanService },
    { type: src_app_services_pusat_tanggungjawab_pusat_tanggungjawab_service__WEBPACK_IMPORTED_MODULE_14__.PusatTanggungjawabService },
    { type: src_app_services_Aliran_aliran_service__WEBPACK_IMPORTED_MODULE_15__.AliranService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_23__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



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

/***/ 28957:
/*!*************************************************************************!*\
  !*** ./src/app/services/ketegori-usahawan/kategori-usahawan.service.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KategoriUsahawanService": function() { return /* binding */ KategoriUsahawanService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let KategoriUsahawanService = class KategoriUsahawanService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/kategori_usahawan";
    }
    // post(data: any): Observable<any> {
    //   return this.http.post<any>(`${this.url}`, data);
    // }
    get() {
        return this.http.get(`${this.url}`);
    }
};
KategoriUsahawanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
KategoriUsahawanService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], KategoriUsahawanService);



/***/ }),

/***/ 51146:
/*!***********************************************!*\
  !*** ./src/app/services/login/login.model.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModel": function() { return /* binding */ LoginModel; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let LoginModel = class LoginModel {
};
LoginModel = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], LoginModel);



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

/***/ 47076:
/*!*****************************************************************************!*\
  !*** ./src/app/services/pusat-tanggungjawab/pusat-tanggungjawab.service.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PusatTanggungjawabService": function() { return /* binding */ PusatTanggungjawabService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let PusatTanggungjawabService = class PusatTanggungjawabService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/pusat_tanggungjawab";
    }
    // post(data: any): Observable<any> {
    //   return this.http.post<any>(`${this.url}`, data);
    // }
    get() {
        return this.http.get(`${this.url}`);
    }
    getNegeriPt(id) {
        return this.http.get(`${this.url}` + '/senarai_pt_pun_pud/' + id);
    }
};
PusatTanggungjawabService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PusatTanggungjawabService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PusatTanggungjawabService);



/***/ }),

/***/ 41160:
/*!*****************************************************!*\
  !*** ./src/app/services/usahawan/usahawan.model.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsahawanModel": function() { return /* binding */ UsahawanModel; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let UsahawanModel = class UsahawanModel {
};
UsahawanModel = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], UsahawanModel);



/***/ }),

/***/ 22403:
/*!************************************************!*\
  !*** ./src/app/auth/profile/profile.page.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".read-only {\n  background-color: #f5f5f5;\n  color: #868686;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBUEoiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuaW1nIHtcbi8vICAgICBoZWlnaHQ6IDg5cHg7XG4vLyAgICAgd2lkdGg6IDg5cHg7XG4vLyB9XG4vLyBpb24taGVhZGVye1xuLy8gICAgIGhlaWdodDogODBweDtcbi8vIH1cblxuLnJlYWQtb25seSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBjb2xvcjojODY4Njg2XG59XG4iXX0= */");

/***/ }),

/***/ 32649:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/profile/profile.page.html ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"height: 80px;\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" (click)=\"back()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <!-- <ion-back-button defaultHref=\"/dashboard\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-text color=\"success\">\n      <h1>\n        <strong>\n          PROFIL USAHAWAN\n        </strong>\n      </h1>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n\n    <ion-fab-button color=\"light\">\n      <ion-icon color=\"success\" name=\"caret-down-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"bottom\">\n      <!-- <a href=\"/profile\"> -->\n      <ion-fab-button color=\"success\" href=\"/profile\">\n        <!-- <ion-icon name=\"logo-facebook\"></ion-icon> -->\n        <img src=\"assets/icon/usahawan-icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Usahawan</small></ion-text>\n      <!-- </a> -->\n      <!-- <a href=\"/profile-syarikat\" style=\"text-decoration:none;\"> -->\n      <ion-fab-button color=\"success\" href=\"/profile-syarikat\">\n        <!-- <ion-icon name=\"logo-twitter\"></ion-icon> -->\n        <img src=\"assets/icon/Syarikat--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Syarikat</small></ion-text>\n      <!-- </a> -->\n\n      <ion-fab-button color=\"success\" href=\"/profile-perniagaan\">\n        <!-- <ion-icon name=\"logo-vimeo\"></ion-icon> -->\n        <img src=\"assets/icon/Perniagaan--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Perniagaan</small></ion-text>\n\n      <ion-fab-button color=\"success\" href=\"/profile-pekebun\">\n        <!-- <ion-icon name=\"logo-vimeo\"></ion-icon> -->\n        <img src=\"assets/icon/Pekebun--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Pekebun</small></ion-text>\n    </ion-fab-list>\n  </ion-fab>\n\n\n  <!-- <ion-item-divider class=\"ion-padding\" color=\"light\">\n    <ion-text color=\"success\">\n\n      <h1>\n        <strong>\n          <ion-icon name=\"chevron-back-outline\"></ion-icon> PROFIL\n        </strong>\n      </h1>\n    </ion-text>\n\n  </ion-item-divider> -->\n\n\n  <ion-grid [fixed]=\"true\">\n\n\n    <form [formGroup]=\"form\" class=\"ion-padding form-control\" (ngSubmit)=\"logForm()\">\n\n      <ion-row style=\"background-color: #00A651; color:white\">\n        <ion-col>\n          <strong>Maklumat Peribadi</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n\n      <ion-row class=\"ion-justify-content-center\" style=\"height: 120px;\">\n        <ion-col></ion-col>\n\n        <ion-col class=\"ion-justify-content-center\">\n\n          <label>\n            <div>\n              <ion-avatar class=\"ion-justify-content-center\"\n                style=\"padding:3%; height: 100px; width: 100px; border: 3px solid #ABC128;\">\n                <img [src]=\"usahawan.gambar_url\">\n              </ion-avatar>\n              <img src=\"assets/icon/cam.png\" alt=\"\" height=\"30%\" style=\"position: absolute; bottom:0px; left:37px\">\n            </div>\n            <ion-input accept=\"image/*\" (change)=\"onSelectFile($event)\" formControlName=\"gambar_url\" type=\"file\"\n              name=\"gambar_profil\" style=\"display: none\"></ion-input>\n          </label>\n\n        </ion-col>\n\n        <ion-col></ion-col>\n\n      </ion-row>\n      <br>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>NEGERI PREMIS PERNIAGAAN</ion-label>\n          <ion-input class=\"read-only\" type=\"text\" formControlName=\"negeri_perniagaan\"></ion-input>\n          <!-- <ion-select formControlName=\"negeri_perniagaan\" disabled>\n            <ion-select-option *ngFor=\"let negeri of negeri\" value=\"{{negeri.U_Negeri_ID}}\">\n              {{negeri.Negeri}}</ion-select-option>\n          </ion-select> -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>PUSAT TANGGUNGJAWAB</ion-label>\n          <ion-input class=\"read-only\" value={{pusatTanggungjawab}} readonly></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>NO. USAHAWAN</ion-label>\n          <ion-input class=\"read-only\" formControlName=\"usahawanid\" readonly></ion-input>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>NAMA PENUH</ion-label>\n          <ion-input class=\"read-only\" formControlName=\"namausahawan\" readonly></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>NO. KAD PENGENALAN</ion-label>\n          <ion-input class=\"read-only\" formControlName=\"nokadpengenalan\" readonly></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"form-control\">\n         \n          <ion-label class=\"padding\" position=\"stacked\">TARIKH LAHIR </ion-label>\n          <ion-input class=\"read-only\" [(ngModel)]=\"tarikhlahir\" [ngModelOptions]=\"{standalone: true}\" readonly></ion-input>\n         \n        </ion-col>\n\n        <ion-col class=\"form-control\">\n          <ion-label class=\"padding\" position=\"stacked\">JANTINA <span style=\"color: red;\">*</span></ion-label>\n          <ion-select formControlName=\"U_Jantina_ID\">\n            <ion-select-option *ngFor=\"let jantina of jantina\" [value]=\"jantina.id\"\n              selected=\"jantina.id == this.usahawan.U_Jantina_ID\">{{jantina.name}}</ion-select-option>\n          </ion-select>\n          \n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <br>\n          <ion-label> BANGSA <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input formControlName=\"U_Bangsa_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Bangsa_ID\" (ionChange)=\"filterEtnik()\">\n            <ion-select-option *ngFor=\"let bangsa of bangsa\" value=\"{{bangsa.id}}\">{{bangsa.name}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col>\n\n          <br>\n          <ion-label> ETNIK <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input value=\"{{usahawan.statusperkahwinan}}\" formControlName=\"statusperkahwinan\"></ion-input> -->\n          <ion-select formControlName=\"U_Etnik_ID\">\n            <ion-select-option *ngFor=\"let etnik of etnikTemp\" value=\"{{etnik.U_Etnik_ID}}\">\n              {{etnik.Etnik}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n\n\n          <ion-label> STATUS PERKAHWINAN <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input value=\"{{usahawan.statusperkahwinan}}\" formControlName=\"statusperkahwinan\"></ion-input> -->\n          <ion-select formControlName=\"statusperkahwinan\">\n            <ion-select-option *ngFor=\"let statusperkahwinan of statusperkahwinan\" value=\"{{statusperkahwinan.id}}\">\n              {{statusperkahwinan.name}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> TAHAP PENDIDIKAN <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input formControlName=\"U_Pendidikan_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Pendidikan_ID\">\n            <ion-select-option *ngFor=\"let tahapPendidikan of tahapPendidikan\" [value]=\"tahapPendidikan.id\"\n              selected=\"tahapPendidikan.id == this.usahawan.U_Pendidikan_ID\">{{tahapPendidikan.name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> TARAF KELULUSAN TERTINGGI <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input formControlName=\"U_Pendidikan_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Taraf_Pendidikan_Tertinggi_ID\" placeholder=\"SILA PILIH\">\n            <ion-select-option *ngFor=\"let taraf_kelulusan_tertinggi of taraf_kelulusan_tertinggi\" [value]=\"taraf_kelulusan_tertinggi.U_Taraf_Kelulusan_Tertinggi_ID\"\n              selected=\"taraf_kelulusan_tertinggi.U_Taraf_Kelulusan_Tertinggi_ID == this.usahawan.taraf_kelulusan_tertinggi\">{{taraf_kelulusan_tertinggi.Jenis_Kelulusan}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <br><br><br>\n\n      <ion-row style=\"background-color: #00A651; color:white\">\n        <ion-col>\n          <strong>Maklumat Kediaman</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NO RUMAH/LOT/PINTU <span style=\"color: red;\">*</span></ion-label>\n          <ion-input formControlName=\"alamat1\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NAMA JALAN <span style=\"color: red;\">*</span></ion-label>\n          <ion-input formControlName=\"alamat2\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> KAMPUNG/TAMAN <span style=\"color: red;\">*</span></ion-label>\n          <ion-input formControlName=\"alamat3\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> BANDAR <span style=\"color: red;\">*</span></ion-label>\n          <ion-input formControlName=\"bandar\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> POSKOD <span style=\"color: red;\">*</span></ion-label>\n          <ion-input formControlName=\"poskod\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NEGERI <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input formControlName=\"U_Negeri_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Negeri_ID\" (ionChange)=\"getDaerah(); getParlimen(); reset();\" placeholder=\"SILA PILIH\">\n            <ion-select-option *ngFor=\"let negeri of negeri\" value=\"{{negeri.U_Negeri_ID}}\">\n              {{negeri.Negeri}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> DAERAH <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input value=\"{{usahawan.U_Daerah_ID}}\" formControlName=\"U_Daerah_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Daerah_ID\" (ionChange)=\"getMukim()\" placeholder=\"SILA PILIH\">\n            <ion-select-option *ngFor=\"let daerah of daerah\" value=\"{{daerah.U_Daerah_ID}}\">{{daerah.Daerah}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n        <ion-col>\n          <ion-label> MUKIM <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input  formControlName=\"U_Mukim_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Mukim_ID\" (ionChange)=\"getKampung($event); getSeksyen(); reset2()\" placeholder=\"SILA PILIH\">\n            <ion-select-option *ngFor=\"let mukim of mukim\" value=\"{{mukim.U_Mukim_ID}}\">{{mukim.Mukim}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> PARLIMEN <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input value=\"{{usahawan.U_Parlimen_ID}}\" formControlName=\"U_Parlimen_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Parlimen_ID\" (ionChange)=\"getDun()\" placeholder=\"SILA PILIH\">\n            <ion-select-option *ngFor=\"let parlimen of parlimen\" value=\"{{parlimen.U_Parlimen_ID}}\" >\n              {{parlimen.Parlimen}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n        <ion-col>\n          <ion-label> DUN <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input value=\"{{usahawan.U_Dun_ID}}\" formControlName=\"U_Dun_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Dun_ID\" placeholder=\"SILA PILIH\">\n            <ion-select-option *ngFor=\"let dun of dun\" value=\"{{dun.U_Dun_ID}}\">{{dun.Dun}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> KAMPUNG</ion-label>\n          <!-- <ion-input value=\"{{usahawan.U_Kampung_ID}}\" formControlName=\"U_Kampung_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Kampung_ID\" placeholder=\"SILA PILIH\">\n            <ion-select-option *ngFor=\"let kampung of kampung\" [value]=\"kampung.U_Kampung_ID\"\n              selected=\"kampung.U_Kampung_ID == this.usahawan.U_Kampung_ID\">{{kampung.Kampung}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n        <ion-col>\n          <ion-label> SEKSYEN</ion-label>\n          <!-- <ion-input value=\"{{usahawan.U_Seksyen_ID}}\" formControlName=\"U_Seksyen_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Seksyen_ID\" placeholder=\"SILA PILIH\">\n            <ion-select-option *ngFor=\"let seksyen of seksyen\" [value]=\"seksyen.U_Seksyen_ID\" \n              selected=\"seksyen.U_Seksyen_ID == this.usahawan.U_Seksyen_ID\">{{seksyen.Seksyen}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <br><br><br>\n      <ion-row style=\"background-color: #00A651; color:white\">\n        <ion-col>\n          <strong>Maklumat Lain</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>HUBUNGAN USAHAWAN DAN PEKEBUN</ion-label>\n          <ion-select formControlName=\"status_daftar_usahawan\" >\n            <ion-select-option *ngFor=\"let statusDaftarUsahawan of statusDaftarUsahawan\"\n              value=\"{{statusDaftarUsahawan.id}}\"\n              >\n              {{statusDaftarUsahawan.name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> KATEGORI USAHAWAN</ion-label>\n          <!-- <ion-input value=\"{{usahawan.id_kategori_usahawan}}\" formControlName=\"id_kategori_usahawan\"></ion-input> -->\n\n\n          <ion-select formControlName=\"id_kategori_usahawan\" disabled>\n            <ion-select-option *ngFor=\"let kategoriUsahawan of kategoriUsahawan\"\n              [value]=\"kategoriUsahawan.id_kategori_usahawan\"\n              selected=\"kategoriUsahawan.id_kategori_usahawan == this.usahawan.id_kategori_usahawan\">\n              {{kategoriUsahawan.nama_kategori_usahawan}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NO. TELEFON (R) <span style=\"color: red;\">*</span></ion-label>\n          <ion-input type=\"number\" value=\"{{usahawan.notelefon}}\" formControlName=\"notelefon\" placeholder=\"Eg: 0342564022\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> NO. TELEFON (HP) <span style=\"color: red;\">*</span></ion-label>\n          <ion-input type=\"number\" value=\"{{usahawan.nohp}}\" formControlName=\"nohp\" placeholder=\"Eg: 0191234567\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> EMAIL <span style=\"color: red;\">*</span></ion-label>\n          <ion-input email value=\"{{usahawan.email}}\" formControlName=\"email\" style=\"text-transform: none !important;\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n\n\n      <ion-row>\n        <ion-col>\n          <!-- <ion-label> KATEGORI USAHAWAN</ion-label> -->\n          <ion-button type=\"submit\" expand=\"block\" color=\"success\" [disabled]=\"form.invalid\">KEMASKINI</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n\n  </ion-grid>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_profile_profile_module_ts-es2015.js.map