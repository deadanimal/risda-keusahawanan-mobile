(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_folder_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./folder/folder.module */ 3412)).then(m => m.FolderPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then(m => m.LoginPageModule)
    },
    {
        path: 'forgot-password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_auth_forgot-password_forgot-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/forgot-password/forgot-password.module */ 66377)).then(m => m.ForgotPasswordPageModule)
    },
    {
        path: 'first-time-login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_auth_first-time-login_first-time-login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/first-time-login/first-time-login.module */ 38299)).then(m => m.FirstTimeLoginPageModule)
    },
    {
        path: 'reset-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_reset-password_reset-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/reset-password/reset-password.module */ 29987)).then(m => m.ResetPasswordPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_auth_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/profile/profile.module */ 2970)).then(m => m.ProfilePageModule)
    },
    {
        path: 'profile-syarikat',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_auth_profile-syarikat_profile-syarikat_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/profile-syarikat/profile-syarikat.module */ 40036)).then(m => m.ProfileSyarikatPageModule)
    },
    {
        path: 'profile-perniagaan',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_auth_profile-perniagaan_profile-perniagaan_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/profile-perniagaan/profile-perniagaan.module */ 84325)).then(m => m.ProfilePerniagaanPageModule)
    },
    {
        path: 'profile-pekebun',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_auth_profile-pekebun_profile-pekebun_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/profile-pekebun/profile-pekebun.module */ 33003)).then(m => m.ProfilePekebunPageModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./core/dashboard/dashboard.module */ 91203)).then(m => m.DashboardPageModule)
    },
    {
        path: 'insentif',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core_insentif_insentif_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./core/insentif/insentif.module */ 11750)).then(m => m.InsentifPageModule)
    },
    {
        path: 'aliran-tunai',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_core_modal_kemaskini-tunai-masuk_kemaskini-tunai-masuk_page_ts"), __webpack_require__.e("default-src_app_core_modal_kemaskini-tunai-keluar_kemaskini-tunai-keluar_page_ts"), __webpack_require__.e("default-src_app_core_modal_tambah-tunai-masuk_tambah-tunai-masuk_page_ts"), __webpack_require__.e("default-src_app_core_modal_tambah-tunai-keluar_tambah-tunai-keluar_page_ts"), __webpack_require__.e("src_app_core_aliran-tunai_aliran-tunai_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/aliran-tunai/aliran-tunai.module */ 65807)).then(m => m.AliranTunaiPageModule)
    },
    {
        path: 'tambah-tunai-masuk',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_core_modal_tambah-tunai-masuk_tambah-tunai-masuk_page_ts"), __webpack_require__.e("src_app_core_modal_tambah-tunai-masuk_tambah-tunai-masuk_module_ts-src_app_services_Aliran_al-c7c988")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/modal/tambah-tunai-masuk/tambah-tunai-masuk.module */ 42662)).then(m => m.TambahTunaiMasukPageModule)
    },
    {
        path: 'tambah-tunai-keluar',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_core_modal_tambah-tunai-keluar_tambah-tunai-keluar_page_ts"), __webpack_require__.e("src_app_core_modal_tambah-tunai-keluar_tambah-tunai-keluar_module_ts-src_app_services_Aliran_-8fbc4b")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/modal/tambah-tunai-keluar/tambah-tunai-keluar.module */ 35203)).then(m => m.TambahTunaiKeluarPageModule)
    },
    {
        path: 'kemaskini-tunai-masuk',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_core_modal_kemaskini-tunai-masuk_kemaskini-tunai-masuk_page_ts"), __webpack_require__.e("src_app_core_modal_kemaskini-tunai-masuk_kemaskini-tunai-masuk_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/modal/kemaskini-tunai-masuk/kemaskini-tunai-masuk.module */ 71247)).then(m => m.KemaskiniTunaiMasukPageModule)
    },
    {
        path: 'kemaskini-tunai-keluar',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_core_modal_kemaskini-tunai-keluar_kemaskini-tunai-keluar_page_ts"), __webpack_require__.e("src_app_core_modal_kemaskini-tunai-keluar_kemaskini-tunai-keluar_module_ts-src_app_services_A-689f8e")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/modal/kemaskini-tunai-keluar/kemaskini-tunai-keluar.module */ 7545)).then(m => m.KemaskiniTunaiKeluarPageModule)
    },
    {
        path: 'buku-tunai',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_core_buku-tunai_buku-tunai_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/buku-tunai/buku-tunai.module */ 62967)).then(m => m.BukuTunaiPageModule)
    },
    {
        path: 'ringkasan-lejar',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_core_ringkasan-lejar_ringkasan-lejar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/ringkasan-lejar/ringkasan-lejar.module */ 26932)).then(m => m.RingkasanLejarPageModule)
    },
    {
        path: 'pnl',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_core_pnl_pnl_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/pnl/pnl.module */ 89771)).then(m => m.PnlPageModule)
    },
    {
        path: 'katalog',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_core_katalog_kemaskini-katalog_kemaskini-katalog_page_ts"), __webpack_require__.e("default-src_app_core_katalog_tambah-katalog_tambah-katalog_page_ts"), __webpack_require__.e("src_app_core_katalog_katalog_katalog_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/katalog/katalog/katalog.module */ 96661)).then(m => m.KatalogPageModule)
    },
    {
        path: 'tambah-katalog',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_katalog_tambah-katalog_tambah-katalog_page_ts"), __webpack_require__.e("src_app_core_katalog_tambah-katalog_tambah-katalog_module_ts-src_app_services_katalog_katalog-70b9ad")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/katalog/tambah-katalog/tambah-katalog.module */ 38425)).then(m => m.TambahKatalogPageModule)
    },
    {
        path: 'kemaskini-katalog',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_core_katalog_kemaskini-katalog_kemaskini-katalog_page_ts"), __webpack_require__.e("src_app_core_katalog_kemaskini-katalog_kemaskini-katalog_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/katalog/kemaskini-katalog/kemaskini-katalog.module */ 27131)).then(m => m.KemaskiniKatalogPageModule)
    },
    {
        path: 'katalog-pegawai',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_katalog_maklumat-produk_maklumat-produk_page_ts"), __webpack_require__.e("src_app_core_katalog_katalog-pegawai_katalog-pegawai_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/katalog/katalog-pegawai/katalog-pegawai.module */ 73145)).then(m => m.KatalogPegawaiPageModule)
    },
    {
        path: 'maklumat-produk',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_katalog_maklumat-produk_maklumat-produk_page_ts"), __webpack_require__.e("src_app_core_katalog_maklumat-produk_maklumat-produk_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/katalog/maklumat-produk/maklumat-produk.module */ 37108)).then(m => m.MaklumatProdukPageModule)
    },
    {
        path: 'jana-dokumen',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_jana-dokumen_kemaskini-dokumen_kemaskini-dokumen_page_ts"), __webpack_require__.e("default-src_app_core_jana-dokumen_tambah-jana-dokumen_tambah-jana-dokumen_page_ts"), __webpack_require__.e("src_app_core_jana-dokumen_jana-dokumen_jana-dokumen_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/jana-dokumen/jana-dokumen/jana-dokumen.module */ 12754)).then(m => m.JanaDokumenPageModule)
    },
    {
        path: 'tambah-jana-dokumen',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_jana-dokumen_tambah-jana-dokumen_tambah-jana-dokumen_page_ts"), __webpack_require__.e("src_app_core_jana-dokumen_tambah-jana-dokumen_tambah-jana-dokumen_module_ts-src_app_core_jana-1e5cc9")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/jana-dokumen/tambah-jana-dokumen/tambah-jana-dokumen.module */ 78593)).then(m => m.TambahJanaDokumenPageModule)
    },
    {
        path: 'kemaskini-dokumen',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_jana-dokumen_kemaskini-dokumen_kemaskini-dokumen_page_ts"), __webpack_require__.e("src_app_core_jana-dokumen_kemaskini-dokumen_kemaskini-dokumen_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/jana-dokumen/kemaskini-dokumen/kemaskini-dokumen.module */ 63217)).then(m => m.KemaskiniDokumenPageModule)
    },
    {
        path: 'buletin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_core_buletin_kemaskini-buletin_kemaskini-buletin_page_ts"), __webpack_require__.e("default-src_app_core_buletin_tambah-buletin_tambah-buletin_page_ts"), __webpack_require__.e("src_app_core_buletin_buletin_buletin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/buletin/buletin/buletin.module */ 862)).then(m => m.BuletinPageModule)
    },
    {
        path: 'tambah-buletin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_core_buletin_tambah-buletin_tambah-buletin_page_ts"), __webpack_require__.e("src_app_core_buletin_tambah-buletin_tambah-buletin_module_ts-src_app_services_buletin_buletin-0fd5e5")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/buletin/tambah-buletin/tambah-buletin.module */ 30112)).then(m => m.TambahBuletinPageModule)
    },
    {
        path: 'kemaskini-buletin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_core_buletin_kemaskini-buletin_kemaskini-buletin_page_ts"), __webpack_require__.e("src_app_core_buletin_kemaskini-buletin_kemaskini-buletin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/buletin/kemaskini-buletin/kemaskini-buletin.module */ 56374)).then(m => m.KemaskiniBuletinPageModule)
    },
    {
        path: 'lawatan-pegawai',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_core_lawatan_kemaskini-laporan_kemaskini-laporan_page_ts"), __webpack_require__.e("default-src_app_core_lawatan_pengesahan-tarikh-lawatan-pgw_pengesahan-tarikh-lawatan-pgw_page_ts"), __webpack_require__.e("default-src_app_core_lawatan_tarikh-lawatan-pgw_tarikh-lawatan-pgw_page_ts"), __webpack_require__.e("src_app_core_lawatan_lawatan-pegawai_lawatan-pegawai_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/lawatan/lawatan-pegawai/lawatan-pegawai.module */ 95054)).then(m => m.LawatanPegawaiPageModule)
    },
    {
        path: 'tarikh-lawatan-pgw',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_core_lawatan_tarikh-lawatan-pgw_tarikh-lawatan-pgw_page_ts"), __webpack_require__.e("src_app_core_lawatan_tarikh-lawatan-pgw_tarikh-lawatan-pgw_module_ts-src_app_services_lawatan-c0b462")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/lawatan/tarikh-lawatan-pgw/tarikh-lawatan-pgw.module */ 28532)).then(m => m.TarikhLawatanPgwPageModule)
    },
    {
        path: 'pengesahan-tarikh-lawatan-pgw',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_core_lawatan_pengesahan-tarikh-lawatan-pgw_pengesahan-tarikh-lawatan-pgw_page_ts"), __webpack_require__.e("src_app_core_lawatan_pengesahan-tarikh-lawatan-pgw_pengesahan-tarikh-lawatan-pgw_module_ts-sr-3ea48e")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/lawatan/pengesahan-tarikh-lawatan-pgw/pengesahan-tarikh-lawatan-pgw.module */ 33685)).then(m => m.PengesahanTarikhLawatanPgwPageModule)
    },
    {
        path: 'tambah-laporan',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_core_lawatan_carian-usahawan_carian-usahawan_page_ts"), __webpack_require__.e("default-src_app_core_lawatan_tambah-laporan_tambah-laporan_page_ts"), __webpack_require__.e("src_app_core_lawatan_tambah-laporan_tambah-laporan_module_ts-src_app_services_lawatan_lawatan-6b63f7")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/lawatan/tambah-laporan/tambah-laporan.module */ 36601)).then(m => m.TambahLaporanPageModule)
    },
    {
        path: 'lawatan-usahawan',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_core_lawatan_pengesahan-tarikh-lawatan-pgw_pengesahan-tarikh-lawatan-pgw_page_ts"), __webpack_require__.e("src_app_core_lawatan_lawatan-usahawan_lawatan-usahawan_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/lawatan/lawatan-usahawan/lawatan-usahawan.module */ 8032)).then(m => m.LawatanUsahawanPageModule)
    },
    {
        path: 'notifikasi',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core_notifikasi_notifikasi_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./core/notifikasi/notifikasi.module */ 57458)).then(m => m.NotifikasiPageModule)
    },
    {
        path: 'senarai-laporan-pegawai',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_core_lawatan_kemaskini-laporan_kemaskini-laporan_page_ts"), __webpack_require__.e("default-src_app_core_lawatan_carian-usahawan_carian-usahawan_page_ts"), __webpack_require__.e("default-src_app_core_lawatan_tambah-laporan_tambah-laporan_page_ts"), __webpack_require__.e("src_app_core_lawatan_senarai-laporan-pegawai_senarai-laporan-pegawai_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/lawatan/senarai-laporan-pegawai/senarai-laporan-pegawai.module */ 15406)).then(m => m.SenaraiLaporanPegawaiPageModule)
    },
    {
        path: 'kemaskini-laporan',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_core_lawatan_kemaskini-laporan_kemaskini-laporan_page_ts"), __webpack_require__.e("src_app_core_lawatan_kemaskini-laporan_kemaskini-laporan_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/lawatan/kemaskini-laporan/kemaskini-laporan.module */ 57720)).then(m => m.KemaskiniLaporanPageModule)
    },
    {
        path: 'carian',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core_carian_carian_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./core/carian/carian.module */ 88674)).then(m => m.CarianPageModule)
    },
    {
        path: 'tooltip',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core_jana-dokumen_tooltip_tooltip_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./core/jana-dokumen/tooltip/tooltip.module */ 18384)).then(m => m.TooltipPageModule)
    },
    {
        path: 'carian-usahawan',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_lawatan_carian-usahawan_carian-usahawan_page_ts"), __webpack_require__.e("src_app_core_lawatan_carian-usahawan_carian-usahawan_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/lawatan/carian-usahawan/carian-usahawan.module */ 78838)).then(m => m.CarianUsahawanPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_pegawai_pegawai_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/pegawai/pegawai.service */ 87949);
/* harmony import */ var _services_usahawan_usahawan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/usahawan/usahawan.service */ 46643);
/* harmony import */ var _services_notifikasi_notifikasi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/notifikasi/notifikasi.service */ 29572);








let AppComponent = class AppComponent {
    constructor(router, pegawaiService, usahawanService, notiService) {
        this.router = router;
        this.pegawaiService = pegawaiService;
        this.usahawanService = usahawanService;
        this.notiService = notiService;
        this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
        this.pegawai_id = window.sessionStorage.getItem("pegawai_id");
        this.user_id = window.sessionStorage.getItem("user_id");
        this.role = window.sessionStorage.getItem("role");
        this.peranan_pegawai = window.sessionStorage.getItem("peranan_pegawai");
        this.appPages = [
            { title: 'Profil', url: '/profile', icon: 'assets/new-iconv2/Profil.png' },
            { title: 'Insentif', url: '/insentif', icon: 'assets/new-iconv2/Insentif.png' },
            { title: 'Aliran Tunai', url: '/aliran-tunai', icon: 'assets/new-iconv2/Aliran-Tunai.png' },
            { title: 'Buku tunai', url: '/buku-tunai', icon: 'assets/new-iconv2/Buku-Tunai.png' },
            { title: 'Ringkasan lejar', url: '/ringkasan-lejar', icon: 'assets/new-iconv2/Ringkasan-Lejar.png' },
            { title: 'Penyata Untung Rugi', url: '/pnl', icon: 'assets/new-iconv2/Penyata-Untung-Rugi.png' },
            { title: 'Katalog', url: 'katalog', icon: 'assets/new-iconv2/Katalog.png' },
            { title: 'Jana Dokumen', url: '/jana-dokumen', icon: 'assets/new-iconv2/Jana-Dokumen.png' },
            { title: 'Lawatan', url: 'lawatan-usahawan', icon: 'assets/new-iconv2/Lawatan.png' },
            // { title: 'Log Keluar',  url: '#', icon: 'assets/new-icon/log-out-button.png' },
        ];
        this.appPagesPegawai = [
            { title: 'Carian', url: '/carian', icon: 'assets/new-iconv2/Cari.png' },
            { title: 'Lawatan', url: '/lawatan-pegawai', icon: 'assets/new-iconv2/Lawatan.png' },
            { title: 'Katalog', url: '/katalog-pegawai', icon: 'assets/new-iconv2/Katalog.png' },
            // { title: 'Buletin', url: '/buletin', icon: 'assets/new-icon/Buletin.png' },
            // { title: 'Log Keluar', url: '#', icon: 'assets/new-icon/log-out-button.png' },
        ];
    }
    ngOnInit() {
        console.log("role", this.role);
        console.log("usahawan_id", this.usahawan_id);
        console.log("pegawai_id", this.pegawai_id);
        console.log("peranan_pegawai", this.peranan_pegawai);
        console.log("user_id", this.user_id);
        if (this.usahawan_id == null && this.pegawai_id != null) {
            this.getpegawai();
        }
        else {
            this.getusahawan();
        }
        if (this.peranan_pegawai == "7") {
            this.appPagesPegawai[1].url = "/lawatan-pegawai";
            console.log("peranan_pegawai success", this.appPagesPegawai[1]);
        }
        else {
            this.appPagesPegawai[1].url = "/senarai-laporan-pegawai";
            console.log("peranan_pegawai success", this.appPagesPegawai[1]);
        }
        if (this.peranan_pegawai == "1") {
            this.appPagesPegawai.push({ title: 'Buletin', url: '/buletin', icon: 'assets/new-iconv2/Buletin.png' });
        }
    }
    logout() {
        sessionStorage.clear();
        this.router.navigate(['/'])
            .then(() => {
            window.location.reload();
        });
    }
    getpegawai() {
        this.pegawaiService.get(this.pegawai_id).subscribe((res) => {
            console.log("res", res);
            this.pegawai = res.nama;
        });
    }
    getusahawan() {
        this.usahawanService.show(this.usahawan_id).subscribe((res) => {
            // console.log("AAAAAA", res.gambar_url);
            // if (res.gambar_url != "null" || res.gambar_url != null) {
            //   this.gambar_usahawan = res.gambar_url
            // } else {
            //   this.gambar_usahawan = "assets/new-icon/default_profile.png"
            // }
            if (res.gambar_url == "null" || res.gambar_url == null) {
                this.gambar_usahawan = "assets/new-icon/default_profile.png";
            }
            else {
                this.gambar_usahawan = res.gambar_url;
            }
        });
    }
    profil() {
        this.router.navigate(['/profile']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_pegawai_pegawai_service__WEBPACK_IMPORTED_MODULE_2__.PegawaiService },
    { type: _services_usahawan_usahawan_service__WEBPACK_IMPORTED_MODULE_3__.UsahawanService },
    { type: _services_notifikasi_notifikasi_service__WEBPACK_IMPORTED_MODULE_4__.NotifikasiService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/login/login.service */ 58762);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 51524);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 83046);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/storage-angular */ 54925);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 69526);
















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_14__.IonicStorageModule.forRoot(),
            // InAppBrowser
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__.StatusBar,
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__.SplashScreen,
            _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__.InAppBrowser,
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouteReuseStrategy,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy,
            },
            _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation,
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__.NativeGeocoder,
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouteReuseStrategy,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 58762:
/*!*************************************************!*\
  !*** ./src/app/services/login/login.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": function() { return /* binding */ LoginService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);




let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/user";
        this.url2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/sanctum/token";
        this.models = [];
    }
    setLoggedInStatus(value) {
        this.loggedInStatus = value;
        localStorage.setItem('loggedIn', value);
    }
    get iusLoggedIn() {
        return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
    }
    getUser() {
        return this.http.get(`${this.url}`);
    }
    check1user(user) {
        return this.http.post(`${this.url}`, user);
    }
    show(id) {
        return this.http.get(`${this.url}` + "/" + id);
    }
    login(user) {
        return this.http.post(`${this.url2}`, user);
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ 29572:
/*!***********************************************************!*\
  !*** ./src/app/services/notifikasi/notifikasi.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotifikasiService": function() { return /* binding */ NotifikasiService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let NotifikasiService = class NotifikasiService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/notifikasi";
    }
    get(id) {
        return this.http.get(`${this.url}` + '/' + id);
    }
    updateStatus(id) {
        return this.http.get(`${this.url}` + '/updateStatus/' + id);
    }
};
NotifikasiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
NotifikasiService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], NotifikasiService);



/***/ }),

/***/ 87949:
/*!*****************************************************!*\
  !*** ./src/app/services/pegawai/pegawai.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PegawaiService": function() { return /* binding */ PegawaiService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let PegawaiService = class PegawaiService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/pegawai";
    }
    // post(data: any): Observable<any> {
    //   return this.http.post<any>(`${this.url}`, data);
    // }
    get(id) {
        return this.http.get(`${this.url}` + '/' + id);
    }
};
PegawaiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PegawaiService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PegawaiService);



/***/ }),

/***/ 46643:
/*!*******************************************************!*\
  !*** ./src/app/services/usahawan/usahawan.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsahawanService": function() { return /* binding */ UsahawanService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);




let UsahawanService = class UsahawanService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/usahawan";
        this.models = [];
    }
    get() {
        return this.http.get(`${this.url}`);
    }
    // check1user( user : UsahawanModel): Observable<UsahawanModel>{
    //   return this.http.post<UsahawanModel>(`${this.url}`,user);
    // }
    show(id) {
        return this.http.get(`${this.url}` + "/" + id);
    }
    // update()
    update(usahawan_id, usahawan) {
        return this.http.put(`${this.url}/${usahawan_id}`, usahawan);
    }
};
UsahawanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
UsahawanService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UsahawanService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // baseUrl : 'http://127.0.0.1:8000/'
    // baseUrl: 'https://risda-keusahawanan.prototype.com.my/'
    baseUrl: "http://reds.risda.gov.my/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-accordion_2.entry.js": [
		38359,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		47321,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		44355,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		86030,
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		1349,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		37915,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid #d7d8da;\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.custom_menu {\n  --width: 120px;\n}\n\nion-menu ion-content {\n  --ion-background-color:#FF6600 ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFBQSwyREFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFFRSxzREFBQTtBQUpGOztBQU9BO0VBQ0UsK0JBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7QUFKRjs7QUFPQTtFQUNFLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxzQkFBQTtBQUpGOztBQU9BO0VBQ0UsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UsK0JBQUE7QUFKRjs7QUFPQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtBQUpGOztBQU9BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUxGOztBQVFBO0VBQ0UsaUNBQUE7QUFMRjs7QUFTQTtFQUNFLGNBQUE7QUFORjs7QUFXRTtFQUNJLCtCQUFBO0FBUk4iLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAvLyAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4vL2N1c3RvbVxuLmN1c3RvbV9tZW51IHtcbiAgLS13aWR0aDogMTIwcHg7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICd0cmFuc3BhcmVudCc7XG59XG5cbmlvbi1tZW51e1xuICBpb24tY29udGVudHtcbiAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I0ZGNjYwMFxuICB9XG59XG5cblxuXG5cbiJdfQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu class=\"custom_menu\" contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <div>\n          <ion-list id=\"inbox-list\">\n            <ion-list-header style=\"height: 90px; display:flex; align-items:flex-start\">\n              <!-- <ion-col class=\"ion-justify-content-center\"> -->\n              <a *ngIf=\"role == '2'\">\n                <ion-avatar href=\"\" class=\"ion-justify-content-center\"\n                  style=\"padding:1%; height: 80px; width: 80px; border: 3px solid #000000;\">\n                  <img [src]=\"gambar_usahawan\">\n                </ion-avatar>\n              </a>\n\n              <a *ngIf=\"role == '1'\">\n                <!-- <ion-avatar href=\"\" class=\"ion-justify-content-center\"\n                  style=\"padding:1%; height: 90px; width: 90px; border: 3px solid #000000;\"> -->\n                  <img src=\"assets/img/reds-logo.png\" alt=\"\" height=\"100%\">\n\n                <!-- </ion-avatar> -->\n\n              </a>\n\n\n              <!-- </ion-col> -->\n            </ion-list-header>\n            <ion-text color=\"success\"><small\n                style=\"display: flex; justify-content:center; text-align:center\">{{pegawai}}</small> </ion-text>\n            <!-- <ion-note>hi@ionicframework.com</ion-note> -->\n\n            <div *ngIf=\"role == '2'\">\n\n              <ion-menu-toggle auto-hide=\"false\">\n                <ion-item *ngFor=\"let p of appPages; let i = index\" routerDirection=\"root\" [routerLink]=\"[p.url]\"\n                  lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n\n                  <div class=\"item-content\">\n                    <img src=\"{{ p.icon }}\" alt=\"\">\n                  </div>\n                </ion-item>\n\n                <ion-item routerDirection=\"root\" lines=\"none\" detail=\"false\" (click)=\"logout()\">\n                  <!-- <ion-icon  slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon> -->\n                  <img src=\"assets/new-iconv2/Log-Keluar.png\" alt=\"\">\n                  <!-- <ion-label position=\"stacked\">{{ p.title }}</ion-label> -->\n                </ion-item>\n              </ion-menu-toggle>\n            </div>\n\n            <div *ngIf=\"role == '1'\">\n              <ion-menu-toggle auto-hide=\"false\">\n                <ion-item *ngFor=\"let p of appPagesPegawai; let i = index\" routerDirection=\"root\" [routerLink]=\"[p.url]\"\n                  lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n                  <!-- <ion-icon  slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon> -->\n                  <img src=\"{{ p.icon }}\" alt=\"\">\n                  <!-- <ion-label position=\"stacked\">{{ p.title }}</ion-label> -->\n                </ion-item>\n\n                <ion-item routerDirection=\"root\" lines=\"none\" detail=\"false\" (click)=\"logout()\">\n                  <!-- <ion-icon  slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon> -->\n                  <img src=\"assets/new-iconv2/Log-Keluar.png\" alt=\"\">\n                  <!-- <ion-label position=\"stacked\">{{ p.title }}</ion-label> -->\n                </ion-item>\n              </ion-menu-toggle>\n            </div>\n          </ion-list>\n        </div>\n\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map