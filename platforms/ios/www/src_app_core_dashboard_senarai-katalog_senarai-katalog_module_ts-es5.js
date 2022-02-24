(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_dashboard_senarai-katalog_senarai-katalog_module_ts"], {
    /***/
    81574: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SenaraiKatalogPageRoutingModule": function SenaraiKatalogPageRoutingModule() {
          return (
            /* binding */
            _SenaraiKatalogPageRoutingModule
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


      var _senarai_katalog_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./senarai-katalog.page */
      26314);

      var routes = [{
        path: '',
        component: _senarai_katalog_page__WEBPACK_IMPORTED_MODULE_0__.SenaraiKatalogPage
      }];

      var _SenaraiKatalogPageRoutingModule = function SenaraiKatalogPageRoutingModule() {
        _classCallCheck(this, SenaraiKatalogPageRoutingModule);
      };

      _SenaraiKatalogPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SenaraiKatalogPageRoutingModule);
      /***/
    },

    /***/
    33322: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SenaraiKatalogPageModule": function SenaraiKatalogPageModule() {
          return (
            /* binding */
            _SenaraiKatalogPageModule
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


      var _senarai_katalog_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./senarai-katalog-routing.module */
      81574);
      /* harmony import */


      var _senarai_katalog_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./senarai-katalog.page */
      26314);

      var _SenaraiKatalogPageModule = function SenaraiKatalogPageModule() {
        _classCallCheck(this, SenaraiKatalogPageModule);
      };

      _SenaraiKatalogPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _senarai_katalog_routing_module__WEBPACK_IMPORTED_MODULE_0__.SenaraiKatalogPageRoutingModule],
        declarations: [_senarai_katalog_page__WEBPACK_IMPORTED_MODULE_1__.SenaraiKatalogPage]
      })], _SenaraiKatalogPageModule);
      /***/
    },

    /***/
    26314: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SenaraiKatalogPage": function SenaraiKatalogPage() {
          return (
            /* binding */
            _SenaraiKatalogPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_senarai_katalog_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./senarai-katalog.page.html */
      72526);
      /* harmony import */


      var _senarai_katalog_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./senarai-katalog.page.scss */
      35767);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      19122);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/katalog/katalog.service */
      89496);
      /* harmony import */


      var _show_katalog_show_katalog_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../show-katalog/show-katalog.page */
      72070);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _SenaraiKatalogPage = /*#__PURE__*/function () {
        function SenaraiKatalogPage(katalogService, modalController, loadingController, router) {
          _classCallCheck(this, SenaraiKatalogPage);

          this.katalogService = katalogService;
          this.modalController = modalController;
          this.loadingController = loadingController;
          this.router = router;
        }

        _createClass(SenaraiKatalogPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getKatalog();
          }
        }, {
          key: "getKatalog",
          value: function getKatalog() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: 'Loading ...'
                      });

                    case 2:
                      loading = _context.sent;
                      loading.present();
                      this.katalogService.getAll().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (x) {
                        return x.filter(function (i) {
                          return i.status_katalog == "publish";
                        });
                      })).subscribe(function (res) {
                        // this.daerahService.get().subscribe((res) => {
                        console.log("res", res);
                        _this.katalog = res;
                        loading.dismiss();
                      });

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "lihatKatalog",
          value: function lihatKatalog(katalog) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log("kemaskini Katalog");
                      _context2.next = 3;
                      return this.modalController.create({
                        component: _show_katalog_show_katalog_page__WEBPACK_IMPORTED_MODULE_3__.ShowKatalogPage,
                        componentProps: {
                          katalog: katalog
                        },
                        cssClass: 'my-custom-class'
                      });

                    case 3:
                      modal = _context2.sent;
                      _context2.next = 6;
                      return modal.present();

                    case 6:
                      return _context2.abrupt("return", _context2.sent);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "dashboard",
          value: function dashboard() {
            this.router.navigate(['/dashboard']);
          }
        }]);

        return SenaraiKatalogPage;
      }();

      _SenaraiKatalogPage.ctorParameters = function () {
        return [{
          type: src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_2__.KatalogService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }];
      };

      _SenaraiKatalogPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-senarai-katalog',
        template: _raw_loader_senarai_katalog_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_senarai_katalog_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SenaraiKatalogPage);
      /***/
    },

    /***/
    35767: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW5hcmFpLWthdGFsb2cucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    72526: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"height: 80px;\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" (click)=\"dashboard()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"success\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            KATALOG\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let katalog of katalog\" style=\"display: flex;\n        height: 300px;\n        flex-wrap: wrap;\n        align-content: stretch;\">\n\n        <ion-card style=\"width: 100%; margin: 0px 10px 10px 10px !important\" (click)=\"lihatKatalog(katalog)\">\n          <img src=\"{{katalog.gambar_url}}\" />\n          <ion-card-header style=\"padding: 20px 0px 0px 5px !important;\">\n            <ion-card-subtitle>RM {{ katalog.harga_produk }}</ion-card-subtitle>\n            <h5 style=\"margin: 0px !important;\">{{ katalog.nama_produk }}</h5>\n          </ion-card-header>\n          <!-- <ion-card-content style=\"padding: 0px !important;\">\n            {{ katalog.keterangan_produk}}\n          </ion-card-content> -->\n        </ion-card>\n\n      </ion-col>\n      <!-- <ion-col>\n        <div>2 of 2</div>\n      </ion-col> -->\n    </ion-row>\n  </ion-grid>\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_core_dashboard_senarai-katalog_senarai-katalog_module_ts-es5.js.map