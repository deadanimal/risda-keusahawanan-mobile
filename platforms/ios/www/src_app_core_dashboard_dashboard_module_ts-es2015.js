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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.page.html */ 13977);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 92514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let DashboardPage = class DashboardPage {
    constructor() {
        this.img_info = [
            { url: "/assets/img/pic1.jpeg", name: "pic 1" },
            { url: "/assets/img/pic2.jpeg", name: "pic 2" },
            { url: "/assets/img/pic3.jpeg", name: "pic 3" },
            { url: "/assets/img/pic4.jpeg", name: "pic 4" },
            { url: "/assets/img/pic5.jpeg", name: "pic 5" },
        ];
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
    }
};
DashboardPage.ctorParameters = () => [];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardPage);



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

/***/ 13977:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/dashboard/dashboard.page.html ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Dashboard</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button href=\"/notifikasi\">\n        <img src=\"assets/icon/NOTIFICATION-BELL.png\" alt=\"\" height=\"40px\">\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"ion-margin-top ion-padding bold\" style=\"width: 100%; padding-bottom:0px !important\">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          Katalog\n        </ion-col>\n        <ion-col style=\"display: flex; justify-content:flex-end\">\n          <img src=\"assets/icon/arrow-down--(greeny)-icon.png\" alt=\"\" height=\"20px\">\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div class=\"scrolling-wrapper\">\n    <div *ngFor=\"let img_info of img_info\" class=\"card\">\n      <ion-card class=\"no-padding\" style=\"width: 200px;\">\n\n        <ion-card-content class=\"no-padding\" style=\"width: 200px;\">\n          <div style=\"background-image: url('{{img_info.url}}');\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: 50% 50%;\n        border-radius: 20px 20px 20px 20px;\n        height:230px;\n        color:black;\n        display:flex;\n        justify-content:flex-end;\n        \">\n\n            <img src=\"/assets/icon/fav--no-fill-icon.png\" alt=\"\" height=\"50px\">\n          </div>\n\n        </ion-card-content>\n      </ion-card>\n\n    </div>\n\n  </div>\n\n  <div class=\"ion-margin-top ion-padding bold\" style=\"width: 100%; padding-bottom:0px !important\">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          Berita Terkini\n        </ion-col>\n        <ion-col style=\"display: flex; justify-content:flex-end\">\n          <img src=\"assets/icon/arrow-down--(greeny)-icon.png\" alt=\"\" height=\"20px\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div class=\"ion-padding\" style=\"margin-right: 30px;\">\n    <ion-card style=\"width: 100%; margin-bottom:20px !important\">\n      <img src=\"/assets/img/pic2.jpeg\" />\n      <ion-card-header>\n        <ion-card-subtitle>Destination</ion-card-subtitle>\n        <ion-card-title>Madison, WI</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the\n        Wisconsin Territory in 1836.\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card style=\"width: 100%;\">\n      <img src=\"/assets/img/bg1.jpg\" />\n      <ion-card-header>\n        <ion-card-subtitle>Destination</ion-card-subtitle>\n        <ion-card-title>Madison, WI</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the\n        Wisconsin Territory in 1836.\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n\n  <!-- <ion-grid>\n    <ion-row class=\"itemrow\">\n      <ion-col>\n        <ion-card style=\"width: 10rem;\">\n          <ion-item>\n            <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n            <ion-label>ion-item in a card, icon left, button right</ion-label>\n            <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n          </ion-item>\n\n          <ion-card-content>\n            This is content, without any paragraph or header tags,\n            within an ion-card-content element.\n          </ion-card-content>\n        </ion-card>\n\n      </ion-col>\n      <ion-col>\n        <ion-card style=\"width: 10rem;\">\n          <ion-item href=\"#\" class=\"ion-activated\">\n            <ion-icon name=\"wifi\" slot=\"start\"></ion-icon>\n            <ion-label>Item 1</ion-label>\n          </ion-item>\n\n          <ion-item href=\"#\">\n            <ion-icon name=\"wine\" slot=\"start\"></ion-icon>\n            <ion-label>Item 2</ion-label>\n          </ion-item>\n\n          <ion-item class=\"ion-activated\">\n            <ion-icon name=\"warning\" slot=\"start\"></ion-icon>\n            <ion-label>Item 3</ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-icon name=\"walk\" slot=\"start\"></ion-icon>\n            <ion-label>Item 4</ion-label>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        ion-col\n      </ion-col>\n      <ion-col>\n        ion-col\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button shape=\"round\" (click)=\"ConnectWallet()\">Connect</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_core_dashboard_dashboard_module_ts-es2015.js.map