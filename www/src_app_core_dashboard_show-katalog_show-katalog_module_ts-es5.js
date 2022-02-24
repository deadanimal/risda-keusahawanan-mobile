(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_dashboard_show-katalog_show-katalog_module_ts"], {
    /***/
    16578: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShowKatalogPageRoutingModule": function ShowKatalogPageRoutingModule() {
          return (
            /* binding */
            _ShowKatalogPageRoutingModule
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


      var _show_katalog_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./show-katalog.page */
      72070);

      var routes = [{
        path: '',
        component: _show_katalog_page__WEBPACK_IMPORTED_MODULE_0__.ShowKatalogPage
      }];

      var _ShowKatalogPageRoutingModule = function ShowKatalogPageRoutingModule() {
        _classCallCheck(this, ShowKatalogPageRoutingModule);
      };

      _ShowKatalogPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ShowKatalogPageRoutingModule);
      /***/
    },

    /***/
    10937: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShowKatalogPageModule": function ShowKatalogPageModule() {
          return (
            /* binding */
            _ShowKatalogPageModule
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


      var _show_katalog_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./show-katalog-routing.module */
      16578);
      /* harmony import */


      var _show_katalog_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./show-katalog.page */
      72070);

      var _ShowKatalogPageModule = function ShowKatalogPageModule() {
        _classCallCheck(this, ShowKatalogPageModule);
      };

      _ShowKatalogPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _show_katalog_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShowKatalogPageRoutingModule],
        declarations: [_show_katalog_page__WEBPACK_IMPORTED_MODULE_1__.ShowKatalogPage]
      })], _ShowKatalogPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_core_dashboard_show-katalog_show-katalog_module_ts-es5.js.map