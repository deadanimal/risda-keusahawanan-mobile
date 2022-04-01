(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_auth_profile-syarikat_profile-syarikat_module_ts"],{

/***/ 86649:
/*!*****************************************************************!*\
  !*** ./src/app/auth/profile-syarikat/pop-over/pop-over.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopOverPage": function() { return /* binding */ PopOverPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_pop_over_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pop-over.page.html */ 219);
/* harmony import */ var _pop_over_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pop-over.page.scss */ 42548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let PopOverPage = class PopOverPage {
    constructor() { }
    ngOnInit() {
    }
};
PopOverPage.ctorParameters = () => [];
PopOverPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pop-over',
        template: _raw_loader_pop_over_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pop_over_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PopOverPage);



/***/ }),

/***/ 14361:
/*!**************************************************************************!*\
  !*** ./src/app/auth/profile-syarikat/profile-syarikat-routing.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileSyarikatPageRoutingModule": function() { return /* binding */ ProfileSyarikatPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_syarikat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-syarikat.page */ 51117);




const routes = [
    {
        path: '',
        component: _profile_syarikat_page__WEBPACK_IMPORTED_MODULE_0__.ProfileSyarikatPage
    },
    {
        path: 'pop-over',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_profile-syarikat_pop-over_pop-over_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pop-over/pop-over.module */ 25565)).then(m => m.PopOverPageModule)
    }
];
let ProfileSyarikatPageRoutingModule = class ProfileSyarikatPageRoutingModule {
};
ProfileSyarikatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfileSyarikatPageRoutingModule);



/***/ }),

/***/ 40036:
/*!******************************************************************!*\
  !*** ./src/app/auth/profile-syarikat/profile-syarikat.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileSyarikatPageModule": function() { return /* binding */ ProfileSyarikatPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _profile_syarikat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-syarikat-routing.module */ 14361);
/* harmony import */ var _profile_syarikat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-syarikat.page */ 51117);







let ProfileSyarikatPageModule = class ProfileSyarikatPageModule {
};
ProfileSyarikatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_syarikat_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileSyarikatPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_profile_syarikat_page__WEBPACK_IMPORTED_MODULE_1__.ProfileSyarikatPage]
    })
], ProfileSyarikatPageModule);



/***/ }),

/***/ 51117:
/*!****************************************************************!*\
  !*** ./src/app/auth/profile-syarikat/profile-syarikat.page.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileSyarikatPage": function() { return /* binding */ ProfileSyarikatPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_syarikat_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile-syarikat.page.html */ 84261);
/* harmony import */ var _profile_syarikat_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-syarikat.page.scss */ 72593);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login/login.service */ 58762);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_syarikat_syarikat_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/syarikat/syarikat.model */ 48398);
/* harmony import */ var src_app_services_syarikat_syarikat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/syarikat/syarikat.service */ 96987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pop_over_pop_over_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pop-over/pop-over.page */ 86649);












let ProfileSyarikatPage = class ProfileSyarikatPage {
    constructor(syarikatService, loginService, router, syarikat, alertController, loadingController, formBuilder, popoverCtrl) {
        this.syarikatService = syarikatService;
        this.loginService = loginService;
        this.router = router;
        this.syarikat = syarikat;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.popoverCtrl = popoverCtrl;
        this.jenis_milikan = [
            { id: "JPP01", name: "PEMILIKAN TUNGGAL" },
            { id: "JPP02", name: "PERKONGSIAN" },
            { id: "JPP03", name: "SYARIKAT SDN BHD" },
            { id: "JPP04", name: "PERKONGSIAN LIABILITI TERHAD" },
        ];
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
        this.form = this.formBuilder.group({
            id: ['',],
            usahawanid: ['',],
            Kod_PT: ['',],
            logo_syarikat: ['',],
            namasyarikat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            jenismilikanperniagaan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            nodaftarssm: ['',],
            nodaftarpbt: ['',],
            nodaftarpersijilanhalal: ['',],
            nodaftarmesti: ['',],
            tahunmulaoperasi: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            bilanganpekerja: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            alamat1_ssm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            alamat2_ssm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            alamat3_ssm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            tarikh_mula_mof: ['',],
            tarikh_tamat_mof: ['',],
            status_bumiputera: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            prefix_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            notelefon: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            nama_akaun_bank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            no_akaun_bank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            no_hp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        });
    }
    ngOnInit() {
        this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
        this.user_id = window.sessionStorage.getItem("user_id");
        console.log("usahawan id", this.usahawan_id);
        console.log("user id", this.user_id);
        this.getSyarikat();
    }
    getSyarikat() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: 'Loading ...' });
            loading.present();
            // console.log(this.form.value);
            this.syarikatService.show(this.usahawan_id).subscribe((res) => {
                console.log("syarikat info", res);
                if (Object.keys(res).length === 0) {
                    console.log("failed");
                    loading.dismiss();
                }
                else {
                    this.syarikat = res;
                    console.log("profile syarikat success");
                    this.setFormValues();
                    loading.dismiss();
                }
            });
        });
    }
    setFormValues() {
        this.form.setValue({
            id: this.syarikat.syarikat_id,
            usahawanid: this.syarikat.usahawanid,
            Kod_PT: this.syarikat.Kod_PT,
            logo_syarikat: this.syarikat.logo_syarikat,
            namasyarikat: this.syarikat.namasyarikat,
            jenismilikanperniagaan: this.syarikat.jenismilikanperniagaan,
            nodaftarssm: this.syarikat.nodaftarssm,
            nodaftarpbt: this.syarikat.nodaftarpbt,
            nodaftarpersijilanhalal: this.syarikat.nodaftarpersijilanhalal,
            nodaftarmesti: this.syarikat.nodaftarmesti,
            tahunmulaoperasi: this.syarikat.tahunmulaoperasi,
            bilanganpekerja: this.syarikat.bilanganpekerja,
            alamat1_ssm: this.syarikat.alamat1_ssm,
            alamat2_ssm: this.syarikat.alamat2_ssm,
            alamat3_ssm: this.syarikat.alamat3_ssm,
            tarikh_mula_mof: this.syarikat.tarikh_mula_mof,
            tarikh_tamat_mof: this.syarikat.tarikh_tamat_mof,
            status_bumiputera: this.syarikat.status_bumiputera,
            prefix_id: this.syarikat.prefix_id,
            nama_akaun_bank: this.syarikat.nama_akaun_bank,
            no_akaun_bank: this.syarikat.no_akaun_bank,
            notelefon: this.syarikat.notelefon,
            no_hp: this.syarikat.no_hp,
            email: this.syarikat.email,
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
                            this.setFormValues();
                        }
                    },
                    {
                        text: 'Ya',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            console.log('Confirm Okay');
                            const loading = yield this.loadingController.create({ message: 'Loading ...' });
                            loading.present();
                            this.form.value.logo_syarikat = this.syarikat.logo_syarikat;
                            // this.form.value.tahunmulaoperasi = moment(this.form.value.tahunmulaoperasi).format('YYYY');
                            this.form.value.tarikh_mula_mof = moment__WEBPACK_IMPORTED_MODULE_5__(this.form.value.tarikh_mula_mof).format('YYYY-MM-DD');
                            this.form.value.tarikh_tamat_mof = moment__WEBPACK_IMPORTED_MODULE_5__(this.form.value.tarikh_tamat_mof).format('YYYY-MM-DD');
                            console.log(this.form.value);
                            // console.log(this.form.value)
                            this.syarikatService.update(this.form.value, this.usahawan_id).subscribe((res) => {
                                console.log("updated data", res);
                                loading.dismiss();
                                this.getSyarikat();
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Kemaskini Berjaya',
                subHeader: 'Kemaskini Maklumat Syarikat Telah Berjaya',
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
                this.syarikat.logo_syarikat = this.url;
            };
            this.fileEvent(event);
        }
    }
    fileEvent(e) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // Fetch the photo, read as a blob, then convert to base64 format
            // const response = await fetch(photo.webPath);
            // const blob = await response.blob();
            return (yield this.convertBlobToBase64(blob));
        });
    }
    openPopOver(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: _pop_over_pop_over_page__WEBPACK_IMPORTED_MODULE_6__.PopOverPage,
                event: ev,
                cssClass: 'sustom-popover'
            });
            yield popover.present();
        });
    }
};
ProfileSyarikatPage.ctorParameters = () => [
    { type: src_app_services_syarikat_syarikat_service__WEBPACK_IMPORTED_MODULE_4__.SyarikatService },
    { type: src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_syarikat_syarikat_model__WEBPACK_IMPORTED_MODULE_3__.SyarikatModel },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.PopoverController }
];
ProfileSyarikatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-profile-syarikat',
        template: _raw_loader_profile_syarikat_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_syarikat_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfileSyarikatPage);



/***/ }),

/***/ 48398:
/*!*****************************************************!*\
  !*** ./src/app/services/syarikat/syarikat.model.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyarikatModel": function() { return /* binding */ SyarikatModel; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let SyarikatModel = class SyarikatModel {
};
SyarikatModel = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], SyarikatModel);



/***/ }),

/***/ 96987:
/*!*******************************************************!*\
  !*** ./src/app/services/syarikat/syarikat.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyarikatService": function() { return /* binding */ SyarikatService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);




let SyarikatService = class SyarikatService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/syarikat";
        this.models = [];
    }
    // getUser(): Observable<SyarikatModel[]> {
    //   return this.http.get<SyarikatModel[]>(`${this.url}`);
    // }
    // check1user( user : SyarikatModel): Observable<SyarikatModel>{
    //   return this.http.post<SyarikatModel>(`${this.url}`,user);
    // }
    show(id) {
        return this.http.get(`${this.url}` + "/" + id);
    }
    update(syarikat, usahawan_id) {
        return this.http.put(`${this.url}/${usahawan_id}`, syarikat);
    }
};
SyarikatService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
SyarikatService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], SyarikatService);



/***/ }),

/***/ 42548:
/*!*******************************************************************!*\
  !*** ./src/app/auth/profile-syarikat/pop-over/pop-over.page.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3Atb3Zlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 72593:
/*!******************************************************************!*\
  !*** ./src/app/auth/profile-syarikat/profile-syarikat.page.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLXN5YXJpa2F0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 219:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/profile-syarikat/pop-over/pop-over.page.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>popOver</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content >\n  <div style=\"padding: 30px;\">\n    <small>\n      Untuk kegunaan penjanaan DO/Invoice dan Quotation\n    </small>\n  </div>\n  \n  \n</ion-content>\n");

/***/ }),

/***/ 84261:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/profile-syarikat/profile-syarikat.page.html ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button href=\"/dashboard\">\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <!-- <ion-back-button defaultHref=\"/dashboard\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-text color=\"warning\">\n      <h1>\n        <strong>\n          PROFIL SYARIKAT\n        </strong>\n      </h1>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n\n    <ion-fab-button color=\"light\">\n      <ion-icon color=\"warning\" name=\"caret-down-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"bottom\">\n      <!-- <a href=\"/profile\"> -->\n      <ion-fab-button color=\"warning\" href=\"/profile\">\n        <!-- <ion-icon name=\"logo-facebook\"></ion-icon> -->\n        <img src=\"assets/icon/usahawan-icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"warning\"><small> Usahawan</small></ion-text>\n      <!-- </a> -->\n      <!-- <a href=\"/profile-syarikat\" style=\"text-decoration:none;\"> -->\n      <ion-fab-button color=\"warning\" href=\"/profile-syarikat\">\n        <!-- <ion-icon name=\"logo-twitter\"></ion-icon> -->\n        <img src=\"assets/icon/Syarikat--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"warning\"><small> Syarikat</small></ion-text>\n      <!-- </a> -->\n\n      <ion-fab-button color=\"warning\" href=\"/profile-perniagaan\">\n        <!-- <ion-icon name=\"logo-vimeo\"></ion-icon> -->\n        <img src=\"assets/icon/Perniagaan--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"warning\"><small> Perniagaan</small></ion-text>\n\n      <ion-fab-button color=\"warning\" href=\"/profile-pekebun\">\n        <!-- <ion-icon name=\"logo-vimeo\"></ion-icon> -->\n        <img src=\"assets/icon/Pekebun--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"warning\"><small> Pekebun</small></ion-text>\n    </ion-fab-list>\n  </ion-fab>\n\n  <!-- <ion-button (click)=\"openPopOver($event)\">open popover</ion-button> -->\n\n\n  <ion-grid [fixed]=\"true\">\n\n\n    <form action=\"\" [formGroup]=\"form\" class=\"ion-padding form-control\" (ngSubmit)=\"logForm()\">\n\n      <ion-row style=\"background-color: #FF6600; color:white\">\n        <ion-col>\n          <strong>Maklumat Syarikat</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n\n      <ion-row class=\"ion-justify-content-center\" style=\"height: 120px;\">\n        <ion-col></ion-col>\n\n        <ion-col class=\"ion-justify-content-center\">\n\n          <label>\n            <div>\n              <ion-avatar class=\"ion-justify-content-center\"\n                style=\"padding:3%; height: 100px; width: 100px; border: 3px solid black;\">\n                <img [src]=\"syarikat.logo_syarikat\">\n              </ion-avatar>\n              <!-- <img src=\"assets/icon/cam.png\" alt=\"\" height=\"30%\" style=\"position: absolute; bottom:0px; left:37px\"> -->\n              <!-- <img src=\"assets/new-iconv2/camera.png\" alt=\"\"  style=\"position: absolute; bottom:5px; left:43px\"> -->\n              <img src=\"assets/new-iconv2/camera.png\" alt=\"\"  style=\"position: absolute; bottom:-3px; left:35px\" height=\"35%\">\n\n            </div>\n            <ion-input accept=\"image/*\" (change)=\"onSelectFile($event)\" formControlName=\"logo_syarikat\" type=\"file\"\n              name=\"gambar_profil\" style=\"display: none\"></ion-input>\n          </label>\n\n        </ion-col>\n\n        <ion-col></ion-col>\n\n      </ion-row>\n      <br>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>NAMA SYARIKAT <span style=\"color: red;\">*</span></ion-label>\n          <ion-input value=\"{{syarikat.namasyarikat}}\" formControlName=\"namasyarikat\"></ion-input>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>JENIS MILIKAN PERNIAGAAN <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input value=\"{{syarikat.jenismilikanperniagaan}}\" formControlName=\"jenismilikanperniagaan\"></ion-input> -->\n          <ion-select formControlName=\"jenismilikanperniagaan\">\n            <ion-select-option *ngFor=\"let jenis_milikan of jenis_milikan\" value=\"{{jenis_milikan.id}}\">\n              {{jenis_milikan.name}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NO. DAFTAR SSM </ion-label>\n          <ion-input value=\"{{syarikat.nodaftarssm}}\" formControlName=\"nodaftarssm\"></ion-input>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label> NO. DAFTAR PBT </ion-label>\n          <ion-input value=\"{{syarikat.nodaftarpbt}}\" formControlName=\"nodaftarpbt\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>NO. DAFTAR PERSIJILAN HALAL </ion-label>\n          <ion-input value=\"{{syarikat.nodaftarpersijilanhalal}}\" formControlName=\"nodaftarpersijilanhalal\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>NO. DAFTAR MESTI </ion-label>\n          <ion-input value=\"{{syarikat.nodaftarmesti}}\" formControlName=\"nodaftarmesti\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>TAHUN MULA OPERASI <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input value=\"{{syarikat.tahunmulaoperasi}}\" formControlName=\"tahunmulaoperasi\"></ion-input> -->\n          <ion-input type=\"number\" displayFormat=\"YYYY\" formControlName=\"tahunmulaoperasi\"\n            style=\"background-color: #f5f5f5;\"></ion-input>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label>BILANGAN PEKERJA <span style=\"color: red;\">*</span></ion-label>\n          <ion-input type=\"text\" inputmode=\"numeric\" value=\"{{syarikat.bilanganpekerja}}\"\n            formControlName=\"bilanganpekerja\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NO RUMAH/LOT/PINTU <span style=\"color: red;\">*</span></ion-label>\n          <ion-input value=\"{{syarikat.alamat1_ssm}}\" formControlName=\"alamat1_ssm\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NAMA JALAN <span style=\"color: red;\">*</span></ion-label>\n          <ion-input value=\"{{syarikat.alamat2_ssm}}\" formControlName=\"alamat2_ssm\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> KAMPUNG/TAMAN <span style=\"color: red;\">*</span></ion-label>\n          <ion-input value=\"{{syarikat.alamat3_ssm}}\" formControlName=\"alamat3_ssm\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> TARIKH MULA MOF </ion-label>\n          <!-- <ion-input value=\"{{syarikat.tarikh_mula_mof}}\" formControlName=\"tarikh_mula_mof\"></ion-input> -->\n          <ion-datetime presentation=\"date\" displayFormat=\"DD/MM/YYYY\" formControlName=\"tarikh_mula_mof\"\n            style=\"background-color: #f5f5f5;\"></ion-datetime>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> TARIKH TAMAT MOF </ion-label>\n          <!-- <ion-input value=\"{{syarikat.tarikh_tamat_mof}}\" formControlName=\"tarikh_tamat_mof\"></ion-input> -->\n          <ion-datetime presentation=\"date\" displayFormat=\"DD/MM/YYYY\" formControlName=\"tarikh_tamat_mof\"\n            style=\"background-color: #f5f5f5;\"></ion-datetime>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label position=\"stacked\">STATUS BUMIPUTERA <span style=\"color: red;\">*</span></ion-label>\n          <ion-select formControlName=\"status_bumiputera\" placeholder=\"SILA PILIH\">\n            <ion-select-option value=\"ya\">YA</ion-select-option>\n            <ion-select-option value=\"tidak\">TIDAK</ion-select-option>\n          </ion-select>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label (click)=\"openPopOver($event)\">PREFIX ID <span style=\"color: red;\">*</span>\n            <ion-icon name=\"alert-circle-outline\" style=\"font-size: large; margin-top:2px; color: blue\"></ion-icon>\n          </ion-label>\n          <ion-input value=\"{{syarikat.prefix_id}}\" formControlName=\"prefix_id\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>NAMA AKAUN BANK <span style=\"color: red;\">*</span></ion-label>\n          <ion-input formControlName=\"nama_akaun_bank\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>NO. AKAUN BANK <span style=\"color: red;\">*</span></ion-label>\n          <ion-input type=\"number\" formControlName=\"no_akaun_bank\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NO. TELEFON (R) <span style=\"color: red;\">*</span></ion-label>\n          <ion-input type=\"text\" inputmode=\"numeric\" value=\"{{syarikat.notelefon}}\" formControlName=\"notelefon\"\n            placeholder=\"Eg: 0342564022\">\n          </ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> NO. TELEFON (HP) <span style=\"color: red;\">*</span></ion-label>\n          <ion-input type=\"text\" inputmode=\"numeric\" value=\"{{syarikat.no_hp}}\" formControlName=\"no_hp\"\n            placeholder=\"Eg: 0191234567\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> EMAIL <span style=\"color: red;\">*</span></ion-label>\n          <ion-input value=\"{{syarikat.email}}\" formControlName=\"email\" style=\"text-transform: none !important;\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <!-- <ion-label> KATEGORI USAHAWAN</ion-label> -->\n          <ion-button type=\"submit\" expand=\"block\" color=\"dark\" [disabled]=\"form.invalid\">KEMASKINI</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n\n  </ion-grid>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_profile-syarikat_profile-syarikat_module_ts-es2015.js.map