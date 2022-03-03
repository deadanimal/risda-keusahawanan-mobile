(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_lawatan_tarikh-lawatan-pgw_tarikh-lawatan-pgw_module_ts-src_app_services_lawatan-c0b462"], {
    /***/
    75256: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TarikhLawatanPgwPageRoutingModule": function TarikhLawatanPgwPageRoutingModule() {
          return (
            /* binding */
            _TarikhLawatanPgwPageRoutingModule
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


      var _tarikh_lawatan_pgw_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tarikh-lawatan-pgw.page */
      27000);

      var routes = [{
        path: '',
        component: _tarikh_lawatan_pgw_page__WEBPACK_IMPORTED_MODULE_0__.TarikhLawatanPgwPage
      }];

      var _TarikhLawatanPgwPageRoutingModule = function TarikhLawatanPgwPageRoutingModule() {
        _classCallCheck(this, TarikhLawatanPgwPageRoutingModule);
      };

      _TarikhLawatanPgwPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TarikhLawatanPgwPageRoutingModule);
      /***/
    },

    /***/
    28532: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TarikhLawatanPgwPageModule": function TarikhLawatanPgwPageModule() {
          return (
            /* binding */
            _TarikhLawatanPgwPageModule
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
      19122);
      /* harmony import */


      var _tarikh_lawatan_pgw_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tarikh-lawatan-pgw-routing.module */
      75256);
      /* harmony import */


      var _tarikh_lawatan_pgw_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tarikh-lawatan-pgw.page */
      27000);

      var _TarikhLawatanPgwPageModule = function TarikhLawatanPgwPageModule() {
        _classCallCheck(this, TarikhLawatanPgwPageModule);
      };

      _TarikhLawatanPgwPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _tarikh_lawatan_pgw_routing_module__WEBPACK_IMPORTED_MODULE_0__.TarikhLawatanPgwPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_tarikh_lawatan_pgw_page__WEBPACK_IMPORTED_MODULE_1__.TarikhLawatanPgwPage]
      })], _TarikhLawatanPgwPageModule);
      /***/
    },

    /***/
    89765: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LawatanService": function LawatanService() {
          return (
            /* binding */
            _LawatanService
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

      var _LawatanService = /*#__PURE__*/function () {
        function LawatanService(http) {
          _classCallCheck(this, LawatanService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/lawatan";
          this.url2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/lawatan/usahawan";
          this.url3 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/tindakanLawatan";
          this.url4 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/lawatan/updateLaporan";
          this.url5 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/lawatan/senaraiUsahawan";
        }

        _createClass(LawatanService, [{
          key: "post",
          value: function post(data) {
            return this.http.post("".concat(this.url), data);
          }
        }, {
          key: "get",
          value: function get(pegawai_id) {
            return this.http.get("".concat(this.url) + '/' + pegawai_id);
          }
        }, {
          key: "getLawatanUsahawan",
          value: function getLawatanUsahawan(id_pengguna) {
            return this.http.get("".concat(this.url2) + '/' + id_pengguna);
          }
        }, {
          key: "update",
          value: function update(data, id) {
            return this.http.put("".concat(this.url) + '/' + id, data);
          }
        }, {
          key: "getTindakanLawatan",
          value: function getTindakanLawatan() {
            return this.http.get("".concat(this.url3));
          }
        }, {
          key: "updateLaporan",
          value: function updateLaporan(data, id) {
            return this.http.post("".concat(this.url4) + '/' + id, data);
          }
        }, {
          key: "getsenaraiusahawan",
          value: function getsenaraiusahawan(id_pegawai) {
            return this.http.get("".concat(this.url5) + '/' + id_pegawai);
          }
        }, {
          key: "tambahLaporan",
          value: function tambahLaporan(data) {
            return this.http.post("".concat(this.url) + '/laporanBaru', data);
          }
        }, {
          key: "janaLaporan",
          value: function janaLaporan(id) {
            return this.http.get("".concat(this.url) + '/janaDokumenLawatan/' + id);
          }
        }]);

        return LawatanService;
      }();

      _LawatanService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _LawatanService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _LawatanService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_core_lawatan_tarikh-lawatan-pgw_tarikh-lawatan-pgw_module_ts-src_app_services_lawatan-c0b462-es5.js.map