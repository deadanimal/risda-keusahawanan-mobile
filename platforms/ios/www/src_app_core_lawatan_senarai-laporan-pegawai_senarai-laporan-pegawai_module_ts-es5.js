(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_lawatan_senarai-laporan-pegawai_senarai-laporan-pegawai_module_ts"], {
    /***/
    29791: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SenaraiLaporanPegawaiPageRoutingModule": function SenaraiLaporanPegawaiPageRoutingModule() {
          return (
            /* binding */
            _SenaraiLaporanPegawaiPageRoutingModule
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


      var _senarai_laporan_pegawai_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./senarai-laporan-pegawai.page */
      48301);

      var routes = [{
        path: '',
        component: _senarai_laporan_pegawai_page__WEBPACK_IMPORTED_MODULE_0__.SenaraiLaporanPegawaiPage
      }];

      var _SenaraiLaporanPegawaiPageRoutingModule = function SenaraiLaporanPegawaiPageRoutingModule() {
        _classCallCheck(this, SenaraiLaporanPegawaiPageRoutingModule);
      };

      _SenaraiLaporanPegawaiPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SenaraiLaporanPegawaiPageRoutingModule);
      /***/
    },

    /***/
    15406: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SenaraiLaporanPegawaiPageModule": function SenaraiLaporanPegawaiPageModule() {
          return (
            /* binding */
            _SenaraiLaporanPegawaiPageModule
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


      var _senarai_laporan_pegawai_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./senarai-laporan-pegawai-routing.module */
      29791);
      /* harmony import */


      var _senarai_laporan_pegawai_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./senarai-laporan-pegawai.page */
      48301);

      var _SenaraiLaporanPegawaiPageModule = function SenaraiLaporanPegawaiPageModule() {
        _classCallCheck(this, SenaraiLaporanPegawaiPageModule);
      };

      _SenaraiLaporanPegawaiPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _senarai_laporan_pegawai_routing_module__WEBPACK_IMPORTED_MODULE_0__.SenaraiLaporanPegawaiPageRoutingModule],
        declarations: [_senarai_laporan_pegawai_page__WEBPACK_IMPORTED_MODULE_1__.SenaraiLaporanPegawaiPage]
      })], _SenaraiLaporanPegawaiPageModule);
      /***/
    },

    /***/
    48301: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SenaraiLaporanPegawaiPage": function SenaraiLaporanPegawaiPage() {
          return (
            /* binding */
            _SenaraiLaporanPegawaiPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_senarai_laporan_pegawai_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./senarai-laporan-pegawai.page.html */
      42643);
      /* harmony import */


      var _senarai_laporan_pegawai_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./senarai-laporan-pegawai.page.scss */
      76855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      19122);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var src_app_services_lawatan_lawatan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/lawatan/lawatan.service */
      89765);
      /* harmony import */


      var _tambah_laporan_tambah_laporan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../tambah-laporan/tambah-laporan.page */
      18398);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _kemaskini_laporan_kemaskini_laporan_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../kemaskini-laporan/kemaskini-laporan.page */
      1938);

      var _SenaraiLaporanPegawaiPage = /*#__PURE__*/function () {
        function SenaraiLaporanPegawaiPage(modalController, lawatanServicce, router, loadingController) {
          _classCallCheck(this, SenaraiLaporanPegawaiPage);

          this.modalController = modalController;
          this.lawatanServicce = lawatanServicce;
          this.router = router;
          this.loadingController = loadingController;
        }

        _createClass(SenaraiLaporanPegawaiPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.pegawai_id = window.sessionStorage.getItem("pegawai_id");
            this.getLaporan();
          }
        }, {
          key: "tambahLaporan",
          value: function tambahLaporan(laporan) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log("pengesahan lawatan");
                      _context.next = 3;
                      return this.modalController.create({
                        component: _tambah_laporan_tambah_laporan_page__WEBPACK_IMPORTED_MODULE_3__.TambahLaporanPage,
                        componentProps: {
                          laporan: laporan
                        },
                        cssClass: 'my-custom-class'
                      });

                    case 3:
                      modal = _context.sent;
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getLaporan",
          value: function getLaporan() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        message: 'Loading ...'
                      });

                    case 2:
                      loading = _context2.sent;
                      loading.present();
                      this.lawatanServicce.get(this.pegawai_id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (x) {
                        return x.filter(function (i) {
                          return i.status_lawatan == '4';
                        });
                      })).subscribe(function (res) {
                        console.log("laporan", res);
                        _this.laporan = res;
                        loading.dismiss();
                      });

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "kemaskiniLaporan",
          value: function kemaskiniLaporan(laporan) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log("pengesahan lawatan");
                      _context3.next = 3;
                      return this.modalController.create({
                        component: _kemaskini_laporan_kemaskini_laporan_page__WEBPACK_IMPORTED_MODULE_4__.KemaskiniLaporanPage,
                        componentProps: {
                          laporan: laporan
                        },
                        cssClass: 'my-custom-class'
                      });

                    case 3:
                      modal = _context3.sent;
                      _context3.next = 6;
                      return modal.present();

                    case 6:
                      return _context3.abrupt("return", _context3.sent);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "dashboard",
          value: function dashboard() {
            this.router.navigate(['/dashboard']);
          }
        }]);

        return SenaraiLaporanPegawaiPage;
      }();

      _SenaraiLaporanPegawaiPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
        }, {
          type: src_app_services_lawatan_lawatan_service__WEBPACK_IMPORTED_MODULE_2__.LawatanService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
        }];
      };

      _SenaraiLaporanPegawaiPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-senarai-laporan-pegawai',
        template: _raw_loader_senarai_laporan_pegawai_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_senarai_laporan_pegawai_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SenaraiLaporanPegawaiPage);
      /***/
    },

    /***/
    76855: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".no-padding {\n  padding: 0px !important;\n}\n\n.rectangle-280 {\n  background-color: #00a651;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n\n.bg-white {\n  background-color: white;\n  display: flex;\n  height: 90%;\n  justify-content: center;\n  min-width: 100%;\n  border-radius: 0px 0px 25px 25px;\n}\n\n.tab-selected {\n  background-color: #00a651;\n  border-radius: 30px;\n  color: white;\n}\n\n.tab {\n  margin-top: 10%;\n  border-bottom: none;\n}\n\nion-tab-button {\n  background-color: #f1f1f1;\n  border-radius: 30px;\n}\n\n.rectangle-279 {\n  border-radius: 12px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  margin-left: 7%;\n  margin-right: 7%;\n}\n\n.bold,\nh1 {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n\n.no-padding {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.jumlah {\n  font-family: \"Nunito Sans\";\n}\n\n.tarikh {\n  font-family: \"Nunito Sans\";\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbmFyYWktbGFwb3Jhbi1wZWdhd2FpLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFLQTtFQUVJLG1CQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1BOztFQUVJLGlCQUFBO0VBQ0EsMEJBQUE7QUFISjs7QUFLQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7QUFGSjs7QUFJQTtFQUNJLDBCQUFBO0FBREo7O0FBR0E7RUFDSSwwQkFBQTtFQUNBLGVBQUE7QUFBSiIsImZpbGUiOiJzZW5hcmFpLWxhcG9yYW4tcGVnYXdhaS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tcGFkZGluZyB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZWN0YW5nbGUtMjgwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNjUxO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogLTE7XG59XG5cbi5iZy13aGl0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyNXB4IDI1cHg7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGE2NTE7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi50YWIge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRjE7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgLy8gcGFkZGluZy1yaWdodDogMnJlbTtcbn1cblxuXG4ucmVjdGFuZ2xlLTI3OSB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0VERURFRDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDclO1xuICAgIG1hcmdpbi1yaWdodDogNyU7XG4gIH1cblxuLmJvbGQsXG5oMSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcbn1cbi5uby1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuLmp1bWxhaCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcbn1cbi50YXJpa2gge1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIC8vIGNvbG9yOiAjMDBhNjUxO1xufVxuXG5cbiJdfQ== */";
      /***/
    },

    /***/
    42643: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dashboard()\">\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"warning\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            LAPORAN LAWATAN\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n\n  <div class=\"bg-white\" style=\"display: flex; flex-wrap:wrap\">\n    <ion-grid style=\"margin:5%; margin-bottom:0px\">\n      <ion-row style=\"margin-bottom: 10px;\">\n        <ion-col>\n          <h5 class=\"bold\"> Maklumat</h5>\n        </ion-col>\n        <ion-col class=\"ion-text-end\">\n          <!-- <h5 class=\"bold\">Status</h5> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div style=\"height: 70%; width:100%; overflow: scroll; display:flex; justify-content:center\">\n\n      <ion-grid class=\"rectangle-279\">\n        <ion-row *ngFor=\"let laporan of laporan\" (click)=\"kemaskiniLaporan(laporan)\"\n          style=\"margin-bottom: 10px; background-color: #EDEDED; border-radius: 15px;\">\n          <ion-col>\n            <div class=\" bold\" style=\"font-family: 'Nunito Sans';\">\n              <ion-grid style=\"padding: 0%;\">\n                <ion-row style=\"padding: 0%;\">\n                  <ion-col size=\"8\">\n                    <ion-text>\n                      <h6 class=\"bold no-padding\">\n                        {{laporan.namausahawan}}\n                      </h6>\n                    </ion-text>\n                    <ion-text color=\"medium\">\n                      <p class=\"font-13 no-padding\">\n                        {{laporan.tarikh_lawatan | date: 'dd/MM/yyyy'}} \n                      </p>\n                    </ion-text>\n                  </ion-col>\n                  <ion-col size=\"4\" style=\"padding: 0%; display:flex; justify-content:flex-end; align-items:center\">\n                    <!-- <img src=\"assets/icon/DOWNLOAD.png\" alt=\"pending\" height=\"25px\" style=\"margin-left: 20px;\"> -->\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n    </div>\n    <div style=\"width:100%; height:25%; display:flex; justify-content:flex-end;\">\n              <div class=\"ion-padding ion-margin ion-text-center\" (click)=\"tambahLaporan()\">\n                <img src=\"assets/new-iconv2/Tambah.png\" alt=\"\" height=\"50\" width=\"50\">\n                <br>\n\n                <ion-text class=\"bold\" color=\"dark\">\n                  <ion-icon name=\"add\"></ion-icon>\n                  <span style=\"font-size: 12px; font-weight: 900;\"><strong> TAMBAH </strong></span>\n                </ion-text>\n              </div>\n\n            </div>\n  </div>\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_core_lawatan_senarai-laporan-pegawai_senarai-laporan-pegawai_module_ts-es5.js.map