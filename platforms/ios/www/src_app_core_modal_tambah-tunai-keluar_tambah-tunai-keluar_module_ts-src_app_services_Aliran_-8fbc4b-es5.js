(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_modal_tambah-tunai-keluar_tambah-tunai-keluar_module_ts-src_app_services_Aliran_-8fbc4b"], {
    /***/
    73051: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TambahTunaiKeluarPageRoutingModule": function TambahTunaiKeluarPageRoutingModule() {
          return (
            /* binding */
            _TambahTunaiKeluarPageRoutingModule
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


      var _tambah_tunai_keluar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tambah-tunai-keluar.page */
      8690);

      var routes = [{
        path: '',
        component: _tambah_tunai_keluar_page__WEBPACK_IMPORTED_MODULE_0__.TambahTunaiKeluarPage
      }];

      var _TambahTunaiKeluarPageRoutingModule = function TambahTunaiKeluarPageRoutingModule() {
        _classCallCheck(this, TambahTunaiKeluarPageRoutingModule);
      };

      _TambahTunaiKeluarPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TambahTunaiKeluarPageRoutingModule);
      /***/
    },

    /***/
    35203: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TambahTunaiKeluarPageModule": function TambahTunaiKeluarPageModule() {
          return (
            /* binding */
            _TambahTunaiKeluarPageModule
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


      var _tambah_tunai_keluar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tambah-tunai-keluar-routing.module */
      73051);
      /* harmony import */


      var _tambah_tunai_keluar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tambah-tunai-keluar.page */
      8690);

      var _TambahTunaiKeluarPageModule = function TambahTunaiKeluarPageModule() {
        _classCallCheck(this, TambahTunaiKeluarPageModule);
      };

      _TambahTunaiKeluarPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _tambah_tunai_keluar_routing_module__WEBPACK_IMPORTED_MODULE_0__.TambahTunaiKeluarPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_tambah_tunai_keluar_page__WEBPACK_IMPORTED_MODULE_1__.TambahTunaiKeluarPage]
      })], _TambahTunaiKeluarPageModule);
      /***/
    },

    /***/
    72311: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AliranService": function AliranService() {
          return (
            /* binding */
            _AliranService
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _AliranService = /*#__PURE__*/function () {
        function AliranService(http) {
          _classCallCheck(this, AliranService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/aliran";
        }

        _createClass(AliranService, [{
          key: "post",
          value: function post(data) {
            return this.http.post("".concat(this.url), data);
          }
        }, {
          key: "get",
          value: function get() {
            return this.http.get("".concat(this.url));
          }
        }]);

        return AliranService;
      }();

      _AliranService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _AliranService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _AliranService);
      /***/
    },

    /***/
    92478: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KategoriAliranService": function KategoriAliranService() {
          return (
            /* binding */
            _KategoriAliranService
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _KategoriAliranService = /*#__PURE__*/function () {
        function KategoriAliranService(http) {
          _classCallCheck(this, KategoriAliranService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/kategori_aliran";
        }

        _createClass(KategoriAliranService, [{
          key: "getKategoriAliran",
          value: function getKategoriAliran() {
            return this.http.get("".concat(this.url));
          }
        }]);

        return KategoriAliranService;
      }();

      _KategoriAliranService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _KategoriAliranService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _KategoriAliranService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_core_modal_tambah-tunai-keluar_tambah-tunai-keluar_module_ts-src_app_services_Aliran_-8fbc4b-es5.js.map