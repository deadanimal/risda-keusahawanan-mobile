(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_katalog_tambah-katalog_tambah-katalog_module_ts-src_app_services_katalog_katalog-70b9ad"], {
    /***/
    53101: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TambahKatalogPageRoutingModule": function TambahKatalogPageRoutingModule() {
          return (
            /* binding */
            _TambahKatalogPageRoutingModule
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


      var _tambah_katalog_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tambah-katalog.page */
      45558);

      var routes = [{
        path: '',
        component: _tambah_katalog_page__WEBPACK_IMPORTED_MODULE_0__.TambahKatalogPage
      }];

      var _TambahKatalogPageRoutingModule = function TambahKatalogPageRoutingModule() {
        _classCallCheck(this, TambahKatalogPageRoutingModule);
      };

      _TambahKatalogPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TambahKatalogPageRoutingModule);
      /***/
    },

    /***/
    38425: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TambahKatalogPageModule": function TambahKatalogPageModule() {
          return (
            /* binding */
            _TambahKatalogPageModule
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


      var _tambah_katalog_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tambah-katalog-routing.module */
      53101);
      /* harmony import */


      var _tambah_katalog_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tambah-katalog.page */
      45558);

      var _TambahKatalogPageModule = function TambahKatalogPageModule() {
        _classCallCheck(this, TambahKatalogPageModule);
      };

      _TambahKatalogPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _tambah_katalog_routing_module__WEBPACK_IMPORTED_MODULE_0__.TambahKatalogPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_tambah_katalog_page__WEBPACK_IMPORTED_MODULE_1__.TambahKatalogPage]
      })], _TambahKatalogPageModule);
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
    }
  }]);
})();
//# sourceMappingURL=src_app_core_katalog_tambah-katalog_tambah-katalog_module_ts-src_app_services_katalog_katalog-70b9ad-es5.js.map