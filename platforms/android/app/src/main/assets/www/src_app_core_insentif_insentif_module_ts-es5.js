(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_insentif_insentif_module_ts"], {
    /***/
    42694: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InsentifPageRoutingModule": function InsentifPageRoutingModule() {
          return (
            /* binding */
            _InsentifPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _insentif_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./insentif.page */
      39520);

      var routes = [{
        path: '',
        component: _insentif_page__WEBPACK_IMPORTED_MODULE_0__.InsentifPage
      }];

      var _InsentifPageRoutingModule = function InsentifPageRoutingModule() {
        _classCallCheck(this, InsentifPageRoutingModule);
      };

      _InsentifPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _InsentifPageRoutingModule);
      /***/
    },

    /***/
    11750: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InsentifPageModule": function InsentifPageModule() {
          return (
            /* binding */
            _InsentifPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _insentif_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./insentif-routing.module */
      42694);
      /* harmony import */


      var _insentif_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./insentif.page */
      39520);

      var _InsentifPageModule = function InsentifPageModule() {
        _classCallCheck(this, InsentifPageModule);
      };

      _InsentifPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _insentif_routing_module__WEBPACK_IMPORTED_MODULE_0__.InsentifPageRoutingModule],
        declarations: [_insentif_page__WEBPACK_IMPORTED_MODULE_1__.InsentifPage]
      })], _InsentifPageModule);
      /***/
    },

    /***/
    39520: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InsentifPage": function InsentifPage() {
          return (
            /* binding */
            _InsentifPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_insentif_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./insentif.page.html */
      71604);
      /* harmony import */


      var _insentif_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./insentif.page.scss */
      15525);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _InsentifPage = /*#__PURE__*/function () {
        function InsentifPage() {
          _classCallCheck(this, InsentifPage);

          this.insentif = [{
            tahun: 2017,
            jumlah: 10000
          }, {
            tahun: 2018,
            jumlah: 20000
          }, {
            tahun: 2019,
            jumlah: 30000
          }, {
            tahun: 2020,
            jumlah: 20000
          }, {
            tahun: 2021,
            jumlah: 25000
          }, {
            tahun: 2022,
            jumlah: 25000
          }, {
            tahun: 2023,
            jumlah: 25000
          }, {
            tahun: 2024,
            jumlah: 25000
          }, {
            tahun: 2025,
            jumlah: 25000
          }, {
            tahun: 2026,
            jumlah: 25000
          }];
        }

        _createClass(InsentifPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InsentifPage;
      }();

      _InsentifPage.ctorParameters = function () {
        return [];
      };

      _InsentifPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-insentif',
        template: _raw_loader_insentif_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_insentif_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _InsentifPage);
      /***/
    },

    /***/
    15525: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans:600,800\");\n.maklumat {\n  align-items: flex-start;\n  display: flex;\n  height: 31px;\n  min-width: 292px;\n}\n.x2000 {\n  letter-spacing: 0;\n  line-height: 14px;\n  margin-left: 134px;\n  min-height: 31px;\n  min-width: 72px;\n  text-align: right;\n}\n.kmi {\n  letter-spacing: 0;\n  line-height: 14px;\n  min-height: 31px;\n  min-width: 86px;\n  font-family: n;\n}\n.bold, h1 {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n.no-padding {\n  padding: 0px !important;\n}\n.rectangle-280 {\n  background-color: #00a651;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n.bg-white {\n  background-color: white;\n  display: flex;\n  height: 90%;\n  justify-content: center;\n  min-width: 100%;\n  border-radius: 0px 0px 40px 40px;\n  padding: 20px;\n}\n.rectangle-41 {\n  height: 575px;\n  margin-bottom: -8px;\n  width: 383px;\n}\n.content-box {\n  padding: 10px;\n  box-shadow: 0px 0px 3px 0px #acacac;\n  border-radius: 10px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc2VudGlmLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQlEsMEVBQUE7QUFoQlI7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFRjtBQUdBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBRjtBQUdBO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtBQUFGO0FBRUE7RUFDRSx1QkFBQTtBQUNGO0FBRUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7QUFDRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFBRiIsImZpbGUiOiJpbnNlbnRpZi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFrbHVtYXQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAzMXB4O1xuICBtaW4td2lkdGg6IDI5MnB4O1xufVxuXG4ueDIwMDAge1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMzRweDtcbiAgbWluLWhlaWdodDogMzFweDtcbiAgbWluLXdpZHRoOiA3MnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvK1NhbnM6NjAwLDgwMFwiKTtcblxuLmttaSB7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgbWluLWhlaWdodDogMzFweDtcbiAgbWluLXdpZHRoOiA4NnB4O1xuICBmb250LWZhbWlseTogbjtcbn1cblxuLmJvbGQsIGgxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnO1xufVxuLm5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnJlY3RhbmdsZS0yODAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNjUxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA5MCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNDBweCA0MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICAvLyBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4ucmVjdGFuZ2xlLTQxIHtcbiAgaGVpZ2h0OiA1NzVweDtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgd2lkdGg6IDM4M3B4O1xufVxuXG4uY29udGVudC1ib3gge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHggI2FjYWNhYztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */";
      /***/
    },

    /***/
    71604: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"height: 80px;\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" href=\"/dashboard\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <!-- <ion-back-button defaultHref=\"/dashboard\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-text color=\"success\">\n      <h1>\n        <strong class=\"ion-text-uppercase\">\n          Insentif\n        </strong>\n      </h1>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <div class=\"rectangle-280\"></div>\n\n  <div class=\"bg-white\">\n\n    <ion-grid style=\"margin-top: 1%; margin-left:5%; margin-right:5%\">\n      <ion-row style=\"margin-bottom: 10px;\">\n        <ion-col>\n          <h5 class=\"bold\"> Maklumat<br />Insentif</h5>\n        </ion-col>\n        <ion-col class=\"ion-text-end\">\n          <h5 class=\"bold\">Jumlah<br />Bantuan</h5>\n        </ion-col>\n      </ion-row>\n      <ion-grid style=\"max-height: 70%; overflow: scroll;\">\n        <ion-row *ngFor=\"let insentif of insentif\" style=\"padding-bottom: 10px;\">\n          <ion-col>\n            <div class=\"content-box bold\" style=\"font-family: 'Nunito Sans';\">\n              <ion-grid style=\"padding: 0%;\">\n                <ion-row style=\"padding: 0%;\">\n                  <ion-col size=\"8\">\n                    <ion-text>\n                      JENIS INSENTIF\n                    </ion-text>\n                    <br>\n                    <ion-text color=\"success\">\n                      Tahun Terima: {{insentif.tahun}}\n                    </ion-text>\n                  </ion-col>\n                  <ion-col size=\"4\" style=\"padding: 0%;\">\n                    <div class=\"content-box\"\n                      style=\"height: 100%; display:flex; align-items:center; background-color:#EDEDED\">\n                      <ion-text color=\"success\">\n                        RM {{insentif.jumlah}}\n                      </ion-text>\n\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-grid>\n\n  </div>\n\n  <!-- <div class=\"kmi nunitosans-extra-bold-te-papa-green-18px\">Maklumat<br />Insentif</div>\n\n  <div class=\"body\">\n    <div class=\"maklumatnunitosans-extra-bold-te-papa-green-18px\">\n      <div class=\"kmi\">Maklumat<br />Insentif</div>\n      <div class=\"x2000\">Jumlah<br />Bantuan</div>\n    </div>\n\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_core_insentif_insentif_module_ts-es5.js.map