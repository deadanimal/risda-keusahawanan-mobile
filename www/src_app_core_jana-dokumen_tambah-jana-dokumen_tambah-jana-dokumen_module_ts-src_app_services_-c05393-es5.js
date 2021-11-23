(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_jana-dokumen_tambah-jana-dokumen_tambah-jana-dokumen_module_ts-src_app_services_-c05393"], {
    /***/
    18095: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TambahJanaDokumenPageRoutingModule": function TambahJanaDokumenPageRoutingModule() {
          return (
            /* binding */
            _TambahJanaDokumenPageRoutingModule
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


      var _tambah_jana_dokumen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tambah-jana-dokumen.page */
      92669);

      var routes = [{
        path: '',
        component: _tambah_jana_dokumen_page__WEBPACK_IMPORTED_MODULE_0__.TambahJanaDokumenPage
      }];

      var _TambahJanaDokumenPageRoutingModule = function TambahJanaDokumenPageRoutingModule() {
        _classCallCheck(this, TambahJanaDokumenPageRoutingModule);
      };

      _TambahJanaDokumenPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TambahJanaDokumenPageRoutingModule);
      /***/
    },

    /***/
    78593: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TambahJanaDokumenPageModule": function TambahJanaDokumenPageModule() {
          return (
            /* binding */
            _TambahJanaDokumenPageModule
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


      var _tambah_jana_dokumen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tambah-jana-dokumen-routing.module */
      18095);
      /* harmony import */


      var _tambah_jana_dokumen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tambah-jana-dokumen.page */
      92669);

      var _TambahJanaDokumenPageModule = function TambahJanaDokumenPageModule() {
        _classCallCheck(this, TambahJanaDokumenPageModule);
      };

      _TambahJanaDokumenPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _tambah_jana_dokumen_routing_module__WEBPACK_IMPORTED_MODULE_0__.TambahJanaDokumenPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_tambah_jana_dokumen_page__WEBPACK_IMPORTED_MODULE_1__.TambahJanaDokumenPage]
      })], _TambahJanaDokumenPageModule);
      /***/
    },

    /***/
    42122: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DaerahService": function DaerahService() {
          return (
            /* binding */
            _DaerahService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);

      var _DaerahService = /*#__PURE__*/function () {
        function DaerahService(http) {
          _classCallCheck(this, DaerahService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/daerah";
        } // post(data: any): Observable<any> {
        //   return this.http.post<any>(`${this.url}`, data);
        // }


        _createClass(DaerahService, [{
          key: "get",
          value: function get() {
            return this.http.get("".concat(this.url));
          }
        }]);

        return DaerahService;
      }();

      _DaerahService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _DaerahService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _DaerahService);
      /***/
    },

    /***/
    89496: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KatalogService": function KatalogService() {
          return (
            /* binding */
            _KatalogService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);

      var _KatalogService = /*#__PURE__*/function () {
        function KatalogService(http) {
          _classCallCheck(this, KatalogService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/katalog";
        }

        _createClass(KatalogService, [{
          key: "post",
          value: function post(data) {
            return this.http.post("".concat(this.url), data);
          }
        }, {
          key: "get",
          value: function get(user_id) {
            return this.http.get("".concat(this.url) + "/" + user_id);
          }
        }, {
          key: "update",
          value: function update(aliran, aliran_id) {
            return this.http.put("".concat(this.url, "/").concat(aliran_id), aliran);
          }
        }, {
          key: "delete",
          value: function _delete(aliran_id) {
            return this.http["delete"]("".concat(this.url, "/").concat(aliran_id));
          }
        }]);

        return KatalogService;
      }();

      _KatalogService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _KatalogService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _KatalogService);
      /***/
    },

    /***/
    64802: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NegeriService": function NegeriService() {
          return (
            /* binding */
            _NegeriService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);

      var _NegeriService = /*#__PURE__*/function () {
        function NegeriService(http) {
          _classCallCheck(this, NegeriService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/negeri";
        } // post(data: any): Observable<any> {
        //   return this.http.post<any>(`${this.url}`, data);
        // }


        _createClass(NegeriService, [{
          key: "get",
          value: function get() {
            return this.http.get("".concat(this.url));
          }
        }]);

        return NegeriService;
      }();

      _NegeriService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _NegeriService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _NegeriService);
      /***/
    },

    /***/
    14744: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PelangganService": function PelangganService() {
          return (
            /* binding */
            _PelangganService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);

      var _PelangganService = /*#__PURE__*/function () {
        function PelangganService(http) {
          _classCallCheck(this, PelangganService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/pelanggan";
        }

        _createClass(PelangganService, [{
          key: "post",
          value: function post(data) {
            return this.http.post("".concat(this.url), data);
          }
        }, {
          key: "get",
          value: function get(id) {
            return this.http.get("".concat(this.url) + '/' + id);
          }
        }, {
          key: "update",
          value: function update(data, id) {
            return this.http.put("".concat(this.url, "/").concat(id), data);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(this.url, "/").concat(id));
          }
        }]);

        return PelangganService;
      }();

      _PelangganService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _PelangganService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _PelangganService);
      /***/
    },

    /***/
    67441: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StokService": function StokService() {
          return (
            /* binding */
            _StokService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);

      var _StokService = /*#__PURE__*/function () {
        function StokService(http) {
          _classCallCheck(this, StokService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/stok";
          this.url2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/deleteStok";
        }

        _createClass(StokService, [{
          key: "post",
          value: function post(data) {
            return this.http.post("".concat(this.url), data);
          }
        }, {
          key: "getStokKatalog",
          value: function getStokKatalog() {
            return this.http.get("".concat(this.url));
          }
        }, {
          key: "get",
          value: function get(id) {
            return this.http.get("".concat(this.url) + '/' + id);
          }
        }, {
          key: "update",
          value: function update(data, id) {
            return this.http.put("".concat(this.url, "/").concat(id), data);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(this.url, "/").concat(id));
          }
        }, {
          key: "deleteMany",
          value: function deleteMany(id_pelanggan) {
            return this.http.get("".concat(this.url2, "/").concat(id_pelanggan));
          }
        }]);

        return StokService;
      }();

      _StokService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _StokService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _StokService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_core_jana-dokumen_tambah-jana-dokumen_tambah-jana-dokumen_module_ts-src_app_services_-c05393-es5.js.map