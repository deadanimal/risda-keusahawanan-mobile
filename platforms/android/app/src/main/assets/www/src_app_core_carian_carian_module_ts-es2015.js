(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_carian_carian_module_ts"],{

/***/ 33619:
/*!******************************************************!*\
  !*** ./src/app/core/carian/carian-routing.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarianPageRoutingModule": function() { return /* binding */ CarianPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _carian_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carian.page */ 49402);




const routes = [
    {
        path: '',
        component: _carian_page__WEBPACK_IMPORTED_MODULE_0__.CarianPage
    }
];
let CarianPageRoutingModule = class CarianPageRoutingModule {
};
CarianPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CarianPageRoutingModule);



/***/ }),

/***/ 88674:
/*!**********************************************!*\
  !*** ./src/app/core/carian/carian.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarianPageModule": function() { return /* binding */ CarianPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _carian_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carian-routing.module */ 33619);
/* harmony import */ var _carian_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carian.page */ 49402);







let CarianPageModule = class CarianPageModule {
};
CarianPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _carian_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarianPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_carian_page__WEBPACK_IMPORTED_MODULE_1__.CarianPage]
    })
], CarianPageModule);



/***/ }),

/***/ 49402:
/*!********************************************!*\
  !*** ./src/app/core/carian/carian.page.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarianPage": function() { return /* binding */ CarianPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_carian_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./carian.page.html */ 41);
/* harmony import */ var _carian_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carian.page.scss */ 16246);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_carian_carian_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/carian/carian.service */ 75441);
/* harmony import */ var src_app_services_jenis_insentif_jenis_insentif_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/jenis-insentif/jenis-insentif.service */ 3114);
/* harmony import */ var src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/negeri/negeri.service */ 64802);
/* harmony import */ var src_app_services_pusat_tanggungjawab_pusat_tanggungjawab_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/pusat-tanggungjawab/pusat-tanggungjawab.service */ 47076);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 69526);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 19122);













let CarianPage = class CarianPage {
    constructor(ptService, jenisInsentifService, carianService, formBuilder, negeriService, iab, router, loadingController) {
        this.ptService = ptService;
        this.jenisInsentifService = jenisInsentifService;
        this.carianService = carianService;
        this.formBuilder = formBuilder;
        this.negeriService = negeriService;
        this.iab = iab;
        this.router = router;
        this.loadingController = loadingController;
        this.date = new Date();
        this.listYear = [];
        this.kod_pt = null;
        this.insentif = null;
        this.tahun_terima = null;
        this.next_page_url = null;
        this.previous_page_url = null;
        this.form = this.formBuilder.group({
            nama: ['',],
            noKP: ['',],
            negeri: ['',],
            PT: ['',],
        });
    }
    ngOnInit() {
        this.getNegeri();
        this.getPT();
        this.getJenisInsentif();
        this.year = Number(this.date.getFullYear());
        for (let i = 0; i <= 30; i++) {
            this.listYear.push(this.year);
            this.year = this.year - 1;
        }
    }
    getPT() {
        this.ptService.get().subscribe((res) => {
            console.log("res", res);
            this.pusat_tanggungjawab = res;
        });
    }
    getJenisInsentif() {
        this.jenisInsentifService.get().subscribe((res) => {
            console.log("res", res);
            this.jenis_insentif = res;
        });
    }
    getUsahawan() {
        this.carianService.get(this.input_carian).subscribe((res) => {
            console.log("maklumat usahawan", res);
            this.usahawan = res;
            this.usahawanTemp = res;
        });
    }
    tapisan() {
        let tempData = [];
        if (this.kod_pt == null && this.insentif == null && this.tahun_terima != null) {
            this.usahawan.forEach(element => {
                let insentif = element.insentif;
                for (let i = 0; i < insentif.length; i++) {
                    // const element = array[index];
                    if (insentif[i].tahun_terima_insentif == this.tahun_terima) {
                        console.log("tahun terima insentif", insentif);
                        tempData.push(element);
                        break;
                    }
                }
            });
        }
        else if (this.kod_pt == null && this.insentif != null && this.tahun_terima == null) {
            this.usahawan.forEach(element => {
                let insentif = element.insentif;
                for (let i = 0; i < insentif.length; i++) {
                    // const element = array[index];
                    if (insentif[i].id_jenis_insentif == this.insentif) {
                        console.log("jenis insentif", insentif);
                        tempData.push(element);
                        break;
                    }
                }
            });
        }
        else if (this.kod_pt == null && this.insentif != null && this.tahun_terima != null) {
            this.usahawan.forEach(element => {
                let insentif = element.insentif;
                for (let i = 0; i < insentif.length; i++) {
                    // const element = array[index];
                    if (insentif[i].id_jenis_insentif == this.insentif && insentif[i].tahun_terima_insentif == this.tahun_terima) {
                        console.log("jenis insentif", insentif);
                        tempData.push(element);
                        break;
                    }
                }
            });
        }
        else if (this.kod_pt != null && this.insentif == null && this.tahun_terima == null) {
            this.usahawan.forEach(element => {
                if (element.Kod_PT == this.kod_pt) {
                    console.log("kod pt", element);
                    tempData.push(element);
                }
            });
        }
        else if (this.kod_pt != null && this.insentif == null && this.tahun_terima != null) {
            this.usahawan.forEach(element => {
                let insentif = element.insentif;
                for (let i = 0; i < insentif.length; i++) {
                    // const element = array[index];
                    if (insentif[i].tahun_terima_insentif == this.tahun_terima && element.Kod_PT == this.kod_pt) {
                        console.log("filtered", insentif);
                        tempData.push(element);
                        break;
                    }
                }
            });
        }
        else if (this.kod_pt != null && this.insentif != null && this.tahun_terima == null) {
            this.usahawan.forEach(element => {
                let insentif = element.insentif;
                for (let i = 0; i < insentif.length; i++) {
                    // const element = array[index];
                    if (insentif[i].id_jenis_insentif == this.insentif && element.Kod_PT == this.kod_pt) {
                        console.log("filtered", insentif);
                        tempData.push(element);
                        break;
                    }
                }
            });
        }
        else if (this.kod_pt != null && this.insentif != null && this.tahun_terima != null) {
            this.usahawan.forEach(element => {
                let insentif = element.insentif;
                for (let i = 0; i < insentif.length; i++) {
                    // const element = array[index];
                    if (insentif[i].id_jenis_insentif == this.insentif && insentif[i].tahun_terima_insentif == this.tahun_terima && element.Kod_PT == this.kod_pt) {
                        console.log("filtered", insentif);
                        tempData.push(element);
                        break;
                    }
                }
            });
        }
        this.usahawanTemp = tempData;
    }
    reset() {
        this.form.reset();
    }
    downloadFile(usahawanid) {
        console.log(usahawanid);
        this.carianService.downloadFile(usahawanid).subscribe((res) => {
            console.log("res3", res);
            let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.baseUrl + 'storage/' + res;
            console.log(url);
            const browser = this.iab.create(url, '_system');
            // window.open(url, "_blank");
        });
    }
    logform() {
        console.log(this.form.value);
        this.carianService.cariUsahawan(this.form.value).subscribe((res) => {
            console.log("res3", res);
            this.usahawanTemp = res.data;
            this.next_page_url = res.next_page_url;
            this.previous_page_url = res.prev_page_url;
            // let url = environment.baseUrl + 'storage/' + res;
            // console.log(url);
            // window.open(url, "_blank");
        });
    }
    next_page() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // const loading = await this.loadingController.create({ message: 'Loading ...' });
            // loading.present();
            this.carianService.page(this.next_page_url, this.form.value).subscribe((res) => {
                console.log("res3", res);
                this.usahawanTemp = res.data;
                this.next_page_url = res.next_page_url;
                this.previous_page_url = res.prev_page_url;
                // loading.dismiss();
            }, (err) => {
                // loading.dismiss();
                alert('Something went wrong');
            });
        });
    }
    previous_page() {
        this.carianService.page(this.previous_page_url, this.form.value).subscribe((res) => {
            console.log("res3", res);
            this.usahawanTemp = res.data;
            this.next_page_url = res.next_page_url;
            this.previous_page_url = res.prev_page_url;
        }, (err) => {
            alert(err);
        });
    }
    getNegeri() {
        this.negeriService.get().subscribe((res) => {
            console.log("resnegeri", res);
            this.negeri = res;
        });
    }
    dashboard() {
        this.router.navigate(['/dashboard']);
    }
};
CarianPage.ctorParameters = () => [
    { type: src_app_services_pusat_tanggungjawab_pusat_tanggungjawab_service__WEBPACK_IMPORTED_MODULE_5__.PusatTanggungjawabService },
    { type: src_app_services_jenis_insentif_jenis_insentif_service__WEBPACK_IMPORTED_MODULE_3__.JenisInsentifService },
    { type: src_app_services_carian_carian_service__WEBPACK_IMPORTED_MODULE_2__.CarianService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_4__.NegeriService },
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__.InAppBrowser },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController }
];
CarianPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-carian',
        template: _raw_loader_carian_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_carian_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CarianPage);



/***/ }),

/***/ 75441:
/*!***************************************************!*\
  !*** ./src/app/services/carian/carian.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarianService": function() { return /* binding */ CarianService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let CarianService = class CarianService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/carian";
        this.url2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/downloadCarian";
        this.url3 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/cari";
    }
    get(input) {
        return this.http.get(`${this.url}` + '/' + input);
    }
    downloadFile(id) {
        return this.http.get(`${this.url2}` + '/' + id);
    }
    cariUsahawan(data) {
        return this.http.post(`${this.url3}`, data);
    }
    page(url, data) {
        return this.http.post(url, data);
    }
};
CarianService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
CarianService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CarianService);



/***/ }),

/***/ 3114:
/*!*******************************************************************!*\
  !*** ./src/app/services/jenis-insentif/jenis-insentif.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JenisInsentifService": function() { return /* binding */ JenisInsentifService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let JenisInsentifService = class JenisInsentifService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/jenis_insentif";
    }
    // post(data: any): Observable<any> {
    //   return this.http.post<any>(`${this.url}`, data);
    // }
    get() {
        return this.http.get(`${this.url}`);
    }
};
JenisInsentifService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
JenisInsentifService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], JenisInsentifService);



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

/***/ 16246:
/*!**********************************************!*\
  !*** ./src/app/core/carian/carian.page.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans:600,800\");\n.maklumat {\n  align-items: flex-start;\n  display: flex;\n  height: 31px;\n  min-width: 292px;\n}\n.x2000 {\n  letter-spacing: 0;\n  line-height: 14px;\n  margin-left: 134px;\n  min-height: 31px;\n  min-width: 72px;\n  text-align: right;\n}\n.kmi {\n  letter-spacing: 0;\n  line-height: 14px;\n  min-height: 31px;\n  min-width: 86px;\n  font-family: n;\n}\n.bold, h1 {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n.no-padding {\n  padding: 0px !important;\n}\n.rectangle-280 {\n  background-color: #00a651;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n.bg-white {\n  background-color: white;\n  display: flex;\n  height: 90%;\n  justify-content: center;\n  min-width: 100%;\n  border-radius: 0px 0px 40px 40px;\n  padding: 20px;\n}\n.rectangle-41 {\n  height: 575px;\n  margin-bottom: -8px;\n  width: 383px;\n}\n.content-box {\n  padding: 10px;\n  box-shadow: 0px 0px 3px 0px #acacac;\n  border-radius: 10px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmlhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JVLDBFQUFBO0FBaEJWO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRUo7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRUo7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQUo7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsMEJBQUE7QUFBSjtBQUVFO0VBQ0UsdUJBQUE7QUFDSjtBQUVFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNKO0FBRUU7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0FBQ0o7QUFHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFBSjtBQUdFO0VBQ0UsYUFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQUoiLCJmaWxlIjoiY2FyaWFuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWtsdW1hdCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDMxcHg7XG4gICAgbWluLXdpZHRoOiAyOTJweDtcbiAgfVxuICBcbiAgLngyMDAwIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBtYXJnaW4tbGVmdDogMTM0cHg7XG4gICAgbWluLWhlaWdodDogMzFweDtcbiAgICBtaW4td2lkdGg6IDcycHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgXG4gIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bytTYW5zOjYwMCw4MDBcIik7XG4gIFxuICAua21pIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBtaW4taGVpZ2h0OiAzMXB4O1xuICAgIG1pbi13aWR0aDogODZweDtcbiAgICBmb250LWZhbWlseTogbjtcbiAgfVxuICBcbiAgLmJvbGQsIGgxIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogJ051bml0byBTYW5zJztcbiAgfVxuICAubm8tcGFkZGluZyB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5yZWN0YW5nbGUtMjgwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNjUxO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogLTE7XG4gIH1cbiAgXG4gIC5iZy13aGl0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA0MHB4IDQwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICAvLyBvdmVyZmxvdzogc2Nyb2xsO1xuICB9XG4gIFxuICAucmVjdGFuZ2xlLTQxIHtcbiAgICBoZWlnaHQ6IDU3NXB4O1xuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XG4gICAgd2lkdGg6IDM4M3B4O1xuICB9XG4gIFxuICAuY29udGVudC1ib3gge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMHB4ICNhY2FjYWM7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAiXX0= */");

/***/ }),

/***/ 41:
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/carian/carian.page.html ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" (click)=\"dashboard()\">\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"warning\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            CARIAN\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]=\"form\" (ngSubmit)=\"logform()\" class=\"form-control\" action=\"\">\n    <ion-grid fixed>\n     \n\n      <ion-row>\n        <ion-col size=\"12\">\n\n          <ion-accordion-group>\n            <ion-accordion value=\"colors\">\n              <ion-item slot=\"header\">\n                <ion-label>Carian</ion-label>\n              </ion-item>\n\n              <ion-list slot=\"content\">\n                <ion-item lines=\"none\">\n                  <ion-label position=\"stacked\" style=\"margin-bottom: 10px;\">Nama Usahawan\n                  </ion-label>\n                  <ion-input formControlName=\"nama\" type=\"text\" placeholder=\"\"></ion-input>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <ion-label position=\"stacked\" style=\"margin-bottom: 10px;\">No. Kad Penganalan</ion-label>\n                  <ion-input formControlName=\"noKP\" type=\"text\" inputmode=\"numeric\" placeholder=\"\"></ion-input>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <ion-label position=\"stacked\" style=\"margin-bottom: 10px;\">Negeri Usahawan</ion-label>\n                  <ion-select placeholder=\"Pilih Negeri\" formControlName=\"negeri\">\n                    <ion-select-option *ngFor=\"let Negeri of negeri\" value=\"{{Negeri.U_Negeri_ID}}\">{{ Negeri.Negeri }}\n                    </ion-select-option>\n                  </ion-select>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-label position=\"stacked\" style=\"margin-bottom: 10px;\">Pusat Tanggungjawab</ion-label>\n                  <!-- <ion-input formControlName=\"PT\" type=\"text\" placeholder=\"\"></ion-input> -->\n                  <ion-select placeholder=\"Pilih Pusat Tanggungjawab\" formControlName=\"PT\">\n                    <ion-select-option *ngFor=\"let pt of pusat_tanggungjawab\" value=\"{{pt.Kod_PT}}\">{{ pt.keterangan }}\n                    </ion-select-option>\n                  </ion-select>\n                </ion-item>\n\n                <div class=\"ion-padding\" style=\"display: flex; justify-content:flex-end\">\n                  <ion-button color=\"danger\" size=\"small\" (click)=\"reset()\">\n                    Set Semula\n                  </ion-button>\n                  <ion-button type=\"submit\" color=\"success\" size=\"small\">\n                    Carian Data\n                  </ion-button>\n                </div>\n\n              </ion-list>\n            </ion-accordion>\n\n          </ion-accordion-group>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </form>\n\n  <div class=\"bg-white\">\n\n    <ion-grid style=\"margin-left:5%; margin-right:5%\">\n      <ion-row style=\"margin-bottom: 10px;\">\n        <ion-col>\n          <h5 class=\"bold\"> Senarai Usahawan</h5>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n\n        <!-- <ion-button (click)=\"test()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          Click me\n        </ion-button> -->\n\n        <ion-col size=\"12\">\n          <div style=\"display: flex; flex-wrap:nowrap; justify-content: space-between;\">\n\n            <div *ngIf=\"previous_page_url != null\">\n              <ion-button (click)=\"previous_page()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n                <ion-icon name=\"arrow-back-circle-outline\" style=\"zoom: 1.5; color:black\"></ion-icon>\n              </ion-button>\n             \n            </div>\n            <br>\n            <div *ngIf=\"next_page_url != null\">\n            \n              <ion-button (click)=\"next_page()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n                <!-- <ion-icon name=\"arrow-back-circle-outline\" style=\"zoom: 1.5; color:black\"></ion-icon> -->\n                <ion-icon name=\"arrow-forward-circle-outline\" style=\"zoom: 1.5; color:black\"></ion-icon>\n\n              </ion-button>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-grid style=\"max-height: 70%; overflow: scroll;\">\n        <ion-row *ngFor=\"let usahawan of usahawanTemp\" style=\"padding-bottom: 10px;\">\n          <ion-col>\n            <div class=\"content-box bold\" style=\"font-family: 'Nunito Sans';\">\n              <ion-grid style=\"padding: 0%;\">\n                <ion-row style=\"padding: 0%;\">\n                  <ion-col size=\"8\">\n                    <ion-text>\n                      {{usahawan.namausahawan}}\n                    </ion-text>\n                    <br>\n                    <ion-text color=\"warning\">\n                      {{usahawan.nokadpengenalan}}\n                    </ion-text>\n                    <br>\n                    <ion-text color=\"warning\">\n                      {{usahawan.usahawanid}}\n                    </ion-text>\n                  </ion-col>\n                  <ion-col size=\"4\" style=\"padding: 0%; display:flex; justify-content:flex-end; align-items:center\">\n                    <img (click)=\"downloadFile(usahawan.usahawanid)\" src=\"assets/new-iconv2/Download.png\" alt=\"pending\"\n                      height=\"25px\" style=\"margin-left: 20px;\">\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-grid>\n\n\n\n\n\n\n  </div>\n\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_core_carian_carian_module_ts-es2015.js.map