(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_dashboard_dashboard_module_ts"],{

/***/ 24182:
/*!************************************************************!*\
  !*** ./src/app/core/dashboard/dashboard-routing.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": function() { return /* binding */ DashboardPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 16699);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    },
    {
        path: 'senarai-katalog',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core_dashboard_senarai-katalog_senarai-katalog_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./senarai-katalog/senarai-katalog.module */ 33322)).then(m => m.SenaraiKatalogPageModule)
    },
    {
        path: 'show-katalog',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core_dashboard_show-katalog_show-katalog_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./show-katalog/show-katalog.module */ 10937)).then(m => m.ShowKatalogPageModule)
    },
    {
        path: 'senarai-buletin',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core_dashboard_senarai-buletin_senarai-buletin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./senarai-buletin/senarai-buletin.module */ 35867)).then(m => m.SenaraiBuletinPageModule)
    },
    {
        path: 'show-buletin',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core_dashboard_show-buletin_show-buletin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./show-buletin/show-buletin.module */ 33951)).then(m => m.ShowBuletinPageModule)
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 91203:
/*!****************************************************!*\
  !*** ./src/app/core/dashboard/dashboard.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": function() { return /* binding */ DashboardPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 24182);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 16699);







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 16699:
/*!**************************************************!*\
  !*** ./src/app/core/dashboard/dashboard.page.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": function() { return /* binding */ DashboardPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.page.html */ 13977);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 92514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var src_app_services_buletin_buletin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/buletin/buletin.service */ 42101);
/* harmony import */ var src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/katalog/katalog.service */ 89496);
/* harmony import */ var _show_buletin_show_buletin_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show-buletin/show-buletin.page */ 87586);
/* harmony import */ var _show_katalog_show_katalog_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-katalog/show-katalog.page */ 72070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_notifikasi_notifikasi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/notifikasi/notifikasi.service */ 29572);












let DashboardPage = class DashboardPage {
    constructor(loadingController, katalogService, buletinService, modalController, router, notiService) {
        this.loadingController = loadingController;
        this.katalogService = katalogService;
        this.buletinService = buletinService;
        this.modalController = modalController;
        this.router = router;
        this.notiService = notiService;
        this.user_id = window.sessionStorage.getItem("user_id");
    }
    ngOnInit() {
        // this.refresh();
        const firstTime = localStorage.getItem('key');
        if (!firstTime) {
            localStorage.setItem('key', 'loaded');
            location.reload();
        }
        else {
            localStorage.removeItem('key');
        }
        this.getKatalog();
        this.getBuletin();
        // this.getnoti()
    }
    getKatalog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: 'Loading ...' });
            loading.present();
            this.katalogService.katalogdashboard().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(x => x.filter(i => i.status_katalog == "publish"))).subscribe((res) => {
                // this.daerahService.get().subscribe((res) => {
                console.log("res", res.slice(0, 5));
                this.katalog = res.slice(0, 5);
                loading.dismiss();
            });
        });
    }
    getBuletin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: 'Loading ...' });
            loading.present();
            this.buletinService.getAll().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(x => x.filter(i => i.status == "aktif"))).subscribe((res) => {
                // this.daerahService.get().subscribe((res) => {
                console.log("res", res);
                this.buletin = res.slice(0, 3);
                loading.dismiss();
            });
        });
    }
    lihatBuletin(buletin) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // console.log("kemaskini Katalog");
            const modal = yield this.modalController.create({
                component: _show_buletin_show_buletin_page__WEBPACK_IMPORTED_MODULE_4__.ShowBuletinPage,
                componentProps: { buletin },
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
    lihatKatalog(katalog) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log("kemaskini Katalog");
            const modal = yield this.modalController.create({
                component: _show_katalog_show_katalog_page__WEBPACK_IMPORTED_MODULE_5__.ShowKatalogPage,
                componentProps: { katalog },
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
    SenaraiKatalog() {
        this.router.navigate(['/dashboard/senarai-katalog']);
    }
    SenaraiBuletin() {
        this.router.navigate(['/dashboard/senarai-buletin']);
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_3__.KatalogService },
    { type: src_app_services_buletin_buletin_service__WEBPACK_IMPORTED_MODULE_2__.BuletinService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_services_notifikasi_notifikasi_service__WEBPACK_IMPORTED_MODULE_6__.NotifikasiService }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardPage);



/***/ }),

/***/ 87586:
/*!******************************************************************!*\
  !*** ./src/app/core/dashboard/show-buletin/show-buletin.page.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowBuletinPage": function() { return /* binding */ ShowBuletinPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_show_buletin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./show-buletin.page.html */ 68576);
/* harmony import */ var _show_buletin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-buletin.page.scss */ 83379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 19122);





let ShowBuletinPage = class ShowBuletinPage {
    constructor(modalController, 
    // private katalogService: KatalogService,
    loadingController, alertController) {
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.alertController = alertController;
    }
    ngOnInit() {
        console.log("katalog", this.buletin);
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }
};
ShowBuletinPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController }
];
ShowBuletinPage.propDecorators = {
    buletin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ShowBuletinPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-show-buletin',
        template: _raw_loader_show_buletin_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_show_buletin_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShowBuletinPage);



/***/ }),

/***/ 72070:
/*!******************************************************************!*\
  !*** ./src/app/core/dashboard/show-katalog/show-katalog.page.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowKatalogPage": function() { return /* binding */ ShowKatalogPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_show_katalog_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./show-katalog.page.html */ 87679);
/* harmony import */ var _show_katalog_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-katalog.page.scss */ 33483);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/katalog/katalog.service */ 89496);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);







let ShowKatalogPage = class ShowKatalogPage {
    constructor(modalController, katalogService, loadingController, alertController) {
        this.modalController = modalController;
        this.katalogService = katalogService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.gambar_url = "assets/img/pic1.jpeg";
    }
    ngOnInit() {
        console.log("katalog", this.katalog);
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    pengesahan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: 'Disahkan ...' });
            loading.present();
            this.katalogService.pengesahanPegawai(this.katalog.katalog_id).subscribe((res) => {
                console.log("updated", res);
                loading.dismiss();
                this.presentAlert2();
            });
        });
    }
    presentAlert2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Berjaya Disahkan',
                subHeader: 'Katalog Telah Disahkan',
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
    download(id) {
        console.log(id);
        this.katalogService.katalogPdf(id).subscribe((res) => {
            console.log("res3", res);
            let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'storage/' + res;
            console.log(url);
            window.open(url, "_blank");
            // window.open(url, "_system");
        });
    }
};
ShowKatalogPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_2__.KatalogService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
ShowKatalogPage.propDecorators = {
    katalog: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
ShowKatalogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-show-katalog',
        template: _raw_loader_show_katalog_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_show_katalog_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShowKatalogPage);



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

/***/ 92514:
/*!****************************************************!*\
  !*** ./src/app/core/dashboard/dashboard.page.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gambar_produk {\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-radius: 0px 0px 30px 30px;\n}\n\n.no-padding {\n  padding: 0px !important;\n}\n\n.scrolling-wrapper-flexbox {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\n\n.scrolling-wrapper-flexbox .card {\n  flex: 0 0 auto;\n}\n\n.scrolling-wrapper {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n\n.scrolling-wrapper .card {\n  display: inline-block;\n}\n\n.scrolling-wrapper {\n  -webkit-overflow-scrolling: touch;\n}\n\n.scrolling-wrapper::-webkit-scrollbar {\n  display: none;\n}\n\n.bold {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n\nion-card {\n  margin-top: 0px !important;\n  margin-right: 5px !important;\n  margin-bottom: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtBQUFKOztBQUlBO0VBQ0ksdUJBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0k7RUFDRSxjQUFBO0FBRE47O0FBS0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFJSTtFQUNFLHFCQUFBO0FBRk47O0FBT0U7RUFDRSxpQ0FBQTtBQUpKOztBQVFJO0VBQ0UsYUFBQTtBQUxOOztBQVNFO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtBQU5OOztBQVNFO0VBQ0ksMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBTk4iLCJmaWxlIjoiZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYW1iYXJfcHJvZHVrIHtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAzMHB4IDMwcHg7XG4gICAgXG59XG5cbi5uby1wYWRkaW5ne1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uc2Nyb2xsaW5nLXdyYXBwZXItZmxleGJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICBcbiAgICAuY2FyZCB7XG4gICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB9XG4gIH1cblxuICAuc2Nyb2xsaW5nLXdyYXBwZXIge1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgXG4gICAgLmNhcmQge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgfVxuICBcblxuICAuc2Nyb2xsaW5nLXdyYXBwZXIge1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgfVxuXG4gIC5zY3JvbGxpbmctd3JhcHBlciB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAuYm9sZCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XG4gIH1cblxuICBpb24tY2FyZHtcbiAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICB9Il19 */");

/***/ }),

/***/ 83379:
/*!********************************************************************!*\
  !*** ./src/app/core/dashboard/show-buletin/show-buletin.page.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans:600,800\");\n.bold,\nh1 {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n.nunito {\n  font-family: \"Nunito Sans\";\n}\n.font-15 {\n  font-size: 15px;\n}\n.font-11 {\n  font-size: 13px;\n}\n.no-padding {\n  padding: 0px !important;\n}\n.no-margin {\n  margin: 0px !important;\n}\n.dark-green {\n  color: #15493C;\n}\n.rectangle-280 {\n  background-color: #00a651;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n.bg-white {\n  background-color: white;\n  height: 85%;\n  display: flex;\n  justify-content: center;\n  min-width: 100%;\n  border-radius: 0px 0px 40px 40px;\n  flex-wrap: wrap;\n}\n.gambar_produk {\n  background-image: url(\"/assets/img/pic2.jpeg\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-radius: 0px 0px 30px 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctYnVsZXRpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMEVBQUE7QUFFUjs7RUFFSSxpQkFBQTtFQUNBLDBCQUFBO0FBQUo7QUFHQTtFQUNJLDBCQUFBO0FBQUo7QUFHQTtFQUNJLGVBQUE7QUFBSjtBQUdBO0VBQ0ksZUFBQTtBQUFKO0FBR0E7RUFDSSx1QkFBQTtBQUFKO0FBR0E7RUFDSSxzQkFBQTtBQUFKO0FBR0E7RUFDSSxjQUFBO0FBQUo7QUFHQTtFQUVJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFESjtBQUlBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQURKO0FBT0E7RUFFSSw4Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUVBLGdDQUFBO0FBTkoiLCJmaWxlIjoic2hvdy1idWxldGluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bytTYW5zOjYwMCw4MDBcIik7XG5cbi5ib2xkLFxuaDEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XG59XG5cbi5udW5pdG97XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2Fucyc7XG59XG5cbi5mb250LTE1e1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmZvbnQtMTF7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubm8tcGFkZGluZyB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uby1tYXJnaW4ge1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXJrLWdyZWVue1xuICAgIGNvbG9yOiAjMTU0OTNDO1xufVxuXG4ucmVjdGFuZ2xlLTI4MCB7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTY1MTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4uYmctd2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogODUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNDBweCA0MHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAvLyBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAvLyBwYWRkaW5nOiAyMHB4O1xuICAgIC8vIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5nYW1iYXJfcHJvZHVrIHtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL3BpYzIuanBlZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDMwcHggMzBweDtcbiAgICBcbn1cbiJdfQ== */");

/***/ }),

/***/ 33483:
/*!********************************************************************!*\
  !*** ./src/app/core/dashboard/show-katalog/show-katalog.page.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans:600,800\");\n.bold,\nh1 {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n.nunito {\n  font-family: \"Nunito Sans\";\n}\n.font-15 {\n  font-size: 15px;\n}\n.font-11 {\n  font-size: 13px;\n}\n.no-padding {\n  padding: 0px !important;\n}\n.no-margin {\n  margin: 0px !important;\n}\n.dark-green {\n  color: #15493C;\n}\n.rectangle-280 {\n  background-color: #00a651;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n.bg-white {\n  background-color: white;\n  height: 85%;\n  display: flex;\n  justify-content: center;\n  min-width: 100%;\n  border-radius: 0px 0px 40px 40px;\n  flex-wrap: wrap;\n}\n.gambar_produk {\n  background-image: url(\"/assets/img/pic2.jpeg\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-radius: 0px 0px 30px 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3cta2F0YWxvZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMEVBQUE7QUFFUjs7RUFFSSxpQkFBQTtFQUNBLDBCQUFBO0FBQUo7QUFHQTtFQUNJLDBCQUFBO0FBQUo7QUFHQTtFQUNJLGVBQUE7QUFBSjtBQUdBO0VBQ0ksZUFBQTtBQUFKO0FBR0E7RUFDSSx1QkFBQTtBQUFKO0FBR0E7RUFDSSxzQkFBQTtBQUFKO0FBR0E7RUFDSSxjQUFBO0FBQUo7QUFHQTtFQUVJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFESjtBQUlBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQURKO0FBT0E7RUFFSSw4Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUVBLGdDQUFBO0FBTkoiLCJmaWxlIjoic2hvdy1rYXRhbG9nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bytTYW5zOjYwMCw4MDBcIik7XG5cbi5ib2xkLFxuaDEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XG59XG5cbi5udW5pdG97XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2Fucyc7XG59XG5cbi5mb250LTE1e1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmZvbnQtMTF7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubm8tcGFkZGluZyB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uby1tYXJnaW4ge1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXJrLWdyZWVue1xuICAgIGNvbG9yOiAjMTU0OTNDO1xufVxuXG4ucmVjdGFuZ2xlLTI4MCB7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTY1MTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4uYmctd2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogODUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNDBweCA0MHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAvLyBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAvLyBwYWRkaW5nOiAyMHB4O1xuICAgIC8vIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5nYW1iYXJfcHJvZHVrIHtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL3BpYzIuanBlZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDMwcHggMzBweDtcbiAgICBcbn1cbiJdfQ== */");

/***/ }),

/***/ 13977:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/dashboard/dashboard.page.html ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Dashboard</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button href=\"/notifikasi\">\n        <img src=\"assets/icon/NOTIFICATION-BELL.png\" alt=\"\" height=\"40px\">\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"ion-margin-top ion-padding bold\" style=\"width: 100%; padding-bottom:0px !important\">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          Katalog\n        </ion-col>\n        <ion-col style=\"display: flex; justify-content:flex-end\">\n          <a (click)=\"SenaraiKatalog()\">\n            <img src=\"assets/icon/arrow-down--(greeny)-icon.png\" alt=\"\" height=\"20px\">\n          </a>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div class=\"scrolling-wrapper\">\n    <div *ngFor=\"let katalog of katalog\" class=\"card\" (click)=\"lihatKatalog(katalog)\">\n      <ion-card class=\"no-padding\" style=\"width: 200px;\">\n\n        <ion-card-content class=\"no-padding\" style=\"width: 200px;\">\n          <div style=\"background-image: url('{{katalog.gambar_url}}');\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: 50% 50%;\n        border-radius: 20px 20px 20px 20px;\n        height:230px;\n        color:black;\n        display:flex;\n        justify-content:flex-end;\n        \">\n\n            <!-- <img src=\"/assets/icon/fav--no-fill-icon.png\" alt=\"\" height=\"50px\"> -->\n          </div>\n\n        </ion-card-content>\n      </ion-card>\n\n    </div>\n\n  </div>\n  <!-- {{ '1234567.897766867' | number:'1.2-2':'en-US' }} -->\n\n  <div class=\"ion-margin-top ion-padding bold\" style=\"width: 100%; padding-bottom:0px !important\">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          Berita Terkini\n        </ion-col>\n        <ion-col style=\"display: flex; justify-content:flex-end\">\n          <a (click)=\"SenaraiBuletin()\">\n            <img src=\"assets/icon/arrow-down--(greeny)-icon.png\" alt=\"\" height=\"20px\">\n          </a>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div class=\"ion-padding\" style=\"margin-right: 30px;\">\n    <ion-card *ngFor=\"let buletin of buletin\" style=\"width: 100%; margin-bottom:20px !important\">\n      <img src=\"{{buletin.gambar_buletin}}\" />\n      <ion-card-header>\n        <!-- <ion-card-subtitle>Destination</ion-card-subtitle> -->\n      \n        <ion-card-title>{{ buletin.tajuk }}</ion-card-title>\n\n       \n      </ion-card-header>\n      <ion-card-content style=\"display:flex; justify-content: flex-end;\">\n        <!-- {{ buletin.keterangan_lain}} -->\n        <ion-button size=\"small\" (click)=\"lihatBuletin(buletin)\">\n          Selanjutnya\n        </ion-button>\n        \n      </ion-card-content>\n    </ion-card>\n\n   \n  </div>\n\n\n  <!-- <ion-grid>\n    <ion-row class=\"itemrow\">\n      <ion-col>\n        <ion-card style=\"width: 10rem;\">\n          <ion-item>\n            <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n            <ion-label>ion-item in a card, icon left, button right</ion-label>\n            <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n          </ion-item>\n\n          <ion-card-content>\n            This is content, without any paragraph or header tags,\n            within an ion-card-content element.\n          </ion-card-content>\n        </ion-card>\n\n      </ion-col>\n      <ion-col>\n        <ion-card style=\"width: 10rem;\">\n          <ion-item href=\"#\" class=\"ion-activated\">\n            <ion-icon name=\"wifi\" slot=\"start\"></ion-icon>\n            <ion-label>Item 1</ion-label>\n          </ion-item>\n\n          <ion-item href=\"#\">\n            <ion-icon name=\"wine\" slot=\"start\"></ion-icon>\n            <ion-label>Item 2</ion-label>\n          </ion-item>\n\n          <ion-item class=\"ion-activated\">\n            <ion-icon name=\"warning\" slot=\"start\"></ion-icon>\n            <ion-label>Item 3</ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-icon name=\"walk\" slot=\"start\"></ion-icon>\n            <ion-label>Item 4</ion-label>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        ion-col\n      </ion-col>\n      <ion-col>\n        ion-col\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button shape=\"round\" (click)=\"ConnectWallet()\">Connect</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n\n\n\n</ion-content>");

/***/ }),

/***/ 68576:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/dashboard/show-buletin/show-buletin.page.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"height: 80px; display:flex; justify-content:center; align-items:center\">\n\n    <ion-text style=\"display:flex; justify-content:center;\">\n      <h5 style=\"color: #15493C;\">\n        <!-- <strong class=\"ion-text-uppercase\"> -->\n        BULETIN\n        <!-- </strong> -->\n      </h5>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <div class=\"rectangle-280\"></div>\n\n  <div class=\"bg-white\">\n\n    <div class=\"gambar_produk\" style=\"height: 30%; width:100%; background-image: url('{{buletin.gambar_buletin}}');\">\n      <!-- <img src=\"assets/img/pic1.jpeg\" alt=\"\" > -->\n    </div>\n\n\n    <div style=\"display: flex; align-items:flex-start; width:100%; height:60%; overflow:scroll; margin:5%\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"8\">\n            <h4 class=\"bold no-margin dark-green\">\n              {{buletin.tajuk}}\n            </h4>\n\n            <ion-text color=\"medium\" class=\"no-margin\">\n              <p class=\"nunito font-15\" style=\" text-align: justify; text-justify: inter-word;\">\n                {{buletin.tarikh | date: 'dd/MM/YYYY'}}\n              </p>\n            </ion-text>\n          </ion-col>\n          \n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-text class=\"bold no-margin\">\n              <h6>Keterangan</h6>\n            </ion-text>\n            <ion-text color=\"medium\" class=\"no-margin\">\n              <p class=\"nunito font-15\" style=\" text-align: justify; text-justify: inter-word;\">\n                {{buletin.keterangan_lain}}\n              </p>\n            </ion-text>\n\n          </ion-col>\n        </ion-row>\n        \n      </ion-grid>\n    </div>\n\n  </div>\n  <div style=\"height:15%; display: flex; align-items:center; justify-content:space-around\">\n    <ion-button (click)=\"dismiss()\" fill=\"default\" class=\"ion-text-uppercase bold font-11\" >Kembali</ion-button>\n    <!-- <ion-button (click)=\"pengesahan()\" fill=\"default\" class=\"ion-text-uppercase bold font-11\" style=\"color: #00A651;\">Sahkan</ion-button> -->\n  </div>\n\n  <!-- <div class=\"kmi nunitosans-extra-bold-te-papa-green-18px\">Maklumat<br />Insentif</div>\n\n  <div class=\"body\">\n    <div class=\"maklumatnunitosans-extra-bold-te-papa-green-18px\">\n      <div class=\"kmi\">Maklumat<br />Insentif</div>\n      <div class=\"x2000\">Jumlah<br />Bantuan</div>\n    </div>\n\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n\n\n\n\n</ion-content>");

/***/ }),

/***/ 87679:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/dashboard/show-katalog/show-katalog.page.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"height: 80px; display:flex; justify-content:center; align-items:center\">\n\n    <ion-text style=\"display:flex; justify-content:center;\">\n      <h5 style=\"color: #15493C;\">\n        <!-- <strong class=\"ion-text-uppercase\"> -->\n        Maklumat Produk\n        <!-- </strong> -->\n      </h5>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <div class=\"rectangle-280\"></div>\n\n  <div class=\"bg-white\">\n\n    <div class=\"gambar_produk\" style=\"height: 30%; width:100%; background-image: url('{{katalog.gambar_url}}');\">\n      <!-- <img src=\"assets/img/pic1.jpeg\" alt=\"\" > -->\n    </div>\n\n\n    <div style=\"display: flex; align-items:flex-start; width:100%; height:60%; overflow:scroll; margin:5%\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"8\">\n            <h4 class=\"bold no-margin dark-green\" style=\"text-transform: uppercase;\">\n              {{katalog.nama_produk}}\n            </h4>\n\n            <ion-text color=\"success\" class=\"bold no-margin\">\n              {{katalog.baki_stok}}\n            </ion-text>\n            <br>\n            <ion-text color=\"medium\" class=\"bold no-margin\">\n              <small>\n                Berat: {{katalog.berat_produk}}KG\n              </small>\n            </ion-text>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-text color=\"success\" class=\"bold no-margin\">\n              <h5 class=\"bold no-margin\">\n                RM {{katalog.harga_produk}}\n              </h5>\n            </ion-text>\n\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-text class=\"bold no-margin\">\n              <h6>Keterangan</h6>\n            </ion-text>\n            <ion-text color=\"medium\" class=\"no-margin\">\n              <p class=\"nunito font-15\" style=\" text-align: justify; text-justify: inter-word;\">\n                {{katalog.keterangan_produk}}\n              </p>\n            </ion-text>\n\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-text class=\"bold no-margin\">\n              <h6>Kandungan Produk</h6>\n            </ion-text>\n            <ion-text color=\"medium\" class=\"no-margin\">\n              <p class=\"nunito font-15\" style=\" text-align: justify; text-justify: inter-word;\">\n                {{katalog.kandungan_produk}}\n              </p>\n            </ion-text>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n  </div>\n  <div style=\"height:15%; display: flex; align-items:center; justify-content:space-around\">\n    <ion-button (click)=\"dismiss()\" fill=\"default\" class=\"ion-text-uppercase bold font-11\" >Kembali</ion-button>\n    <ion-button (click)=\"download(katalog.id)\" fill=\"default\" class=\"ion-text-uppercase bold font-11\" style=\"color: #00A651;\">Muat Turun</ion-button>\n  </div>\n\n  <!-- <div class=\"kmi nunitosans-extra-bold-te-papa-green-18px\">Maklumat<br />Insentif</div>\n\n  <div class=\"body\">\n    <div class=\"maklumatnunitosans-extra-bold-te-papa-green-18px\">\n      <div class=\"kmi\">Maklumat<br />Insentif</div>\n      <div class=\"x2000\">Jumlah<br />Bantuan</div>\n    </div>\n\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_core_dashboard_dashboard_module_ts-es2015.js.map