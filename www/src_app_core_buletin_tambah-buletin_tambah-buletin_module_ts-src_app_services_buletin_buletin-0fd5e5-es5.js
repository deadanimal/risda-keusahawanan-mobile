(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_buletin_tambah-buletin_tambah-buletin_module_ts-src_app_services_buletin_buletin-0fd5e5"], {
    /***/
    56161: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TambahBuletinPageRoutingModule": function TambahBuletinPageRoutingModule() {
          return (
            /* binding */
            _TambahBuletinPageRoutingModule
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


      var _tambah_buletin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tambah-buletin.page */
      88888);

      var routes = [{
        path: '',
        component: _tambah_buletin_page__WEBPACK_IMPORTED_MODULE_0__.TambahBuletinPage
      }];

      var _TambahBuletinPageRoutingModule = function TambahBuletinPageRoutingModule() {
        _classCallCheck(this, TambahBuletinPageRoutingModule);
      };

      _TambahBuletinPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TambahBuletinPageRoutingModule);
      /***/
    },

    /***/
    30112: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TambahBuletinPageModule": function TambahBuletinPageModule() {
          return (
            /* binding */
            _TambahBuletinPageModule
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


      var _tambah_buletin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tambah-buletin-routing.module */
      56161);
      /* harmony import */


      var _tambah_buletin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tambah-buletin.page */
      88888);

      var _TambahBuletinPageModule = function TambahBuletinPageModule() {
        _classCallCheck(this, TambahBuletinPageModule);
      };

      _TambahBuletinPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _tambah_buletin_routing_module__WEBPACK_IMPORTED_MODULE_0__.TambahBuletinPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_tambah_buletin_page__WEBPACK_IMPORTED_MODULE_1__.TambahBuletinPage]
      })], _TambahBuletinPageModule);
      /***/
    },

    /***/
    42101: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BuletinService": function BuletinService() {
          return (
            /* binding */
            _BuletinService
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

      var _BuletinService = /*#__PURE__*/function () {
        function BuletinService(http) {
          _classCallCheck(this, BuletinService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/buletin";
        }

        _createClass(BuletinService, [{
          key: "post",
          value: function post(data) {
            return this.http.post("".concat(this.url), data);
          }
        }, {
          key: "get",
          value: function get(pegawai_id) {
            return this.http.get("".concat(this.url) + "/" + pegawai_id);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.http.get("".concat(this.url));
          }
        }, {
          key: "update",
          value: function update(data, id) {
            return this.http.put("".concat(this.url, "/").concat(id), data);
          }
        }]);

        return BuletinService;
      }();

      _BuletinService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _BuletinService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _BuletinService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_core_buletin_tambah-buletin_tambah-buletin_module_ts-src_app_services_buletin_buletin-0fd5e5-es5.js.map