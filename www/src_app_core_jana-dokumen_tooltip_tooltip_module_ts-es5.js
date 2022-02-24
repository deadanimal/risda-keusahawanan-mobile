(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_jana-dokumen_tooltip_tooltip_module_ts"], {
    /***/
    53897: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TooltipPageRoutingModule": function TooltipPageRoutingModule() {
          return (
            /* binding */
            _TooltipPageRoutingModule
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


      var _tooltip_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tooltip.page */
      48742);

      var routes = [{
        path: '',
        component: _tooltip_page__WEBPACK_IMPORTED_MODULE_0__.TooltipPage
      }];

      var _TooltipPageRoutingModule = function TooltipPageRoutingModule() {
        _classCallCheck(this, TooltipPageRoutingModule);
      };

      _TooltipPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TooltipPageRoutingModule);
      /***/
    },

    /***/
    18384: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TooltipPageModule": function TooltipPageModule() {
          return (
            /* binding */
            _TooltipPageModule
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


      var _tooltip_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tooltip-routing.module */
      53897);
      /* harmony import */


      var _tooltip_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tooltip.page */
      48742);

      var _TooltipPageModule = function TooltipPageModule() {
        _classCallCheck(this, TooltipPageModule);
      };

      _TooltipPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _tooltip_routing_module__WEBPACK_IMPORTED_MODULE_0__.TooltipPageRoutingModule],
        declarations: [_tooltip_page__WEBPACK_IMPORTED_MODULE_1__.TooltipPage]
      })], _TooltipPageModule);
      /***/
    },

    /***/
    48742: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TooltipPage": function TooltipPage() {
          return (
            /* binding */
            _TooltipPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tooltip_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tooltip.page.html */
      14346);
      /* harmony import */


      var _tooltip_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tooltip.page.scss */
      48931);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TooltipPage = /*#__PURE__*/function () {
        function TooltipPage() {
          _classCallCheck(this, TooltipPage);
        }

        _createClass(TooltipPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TooltipPage;
      }();

      _TooltipPage.ctorParameters = function () {
        return [];
      };

      _TooltipPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tooltip',
        template: _raw_loader_tooltip_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tooltip_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TooltipPage);
      /***/
    },

    /***/
    48931: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sdGlwLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    14346: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content >\n  <div style=\"padding: 30px;\">\n    <small>\n      Sila lakukan penginputan katalog di modul katalog terlebih dahulu\n    </small>\n  </div>\n  \n  \n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_core_jana-dokumen_tooltip_tooltip_module_ts-es5.js.map