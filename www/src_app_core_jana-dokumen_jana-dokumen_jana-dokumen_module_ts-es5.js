(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_jana-dokumen_jana-dokumen_jana-dokumen_module_ts"], {
    /***/
    61939: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JanaDokumenPageRoutingModule": function JanaDokumenPageRoutingModule() {
          return (
            /* binding */
            _JanaDokumenPageRoutingModule
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


      var _jana_dokumen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./jana-dokumen.page */
      66359);

      var routes = [{
        path: '',
        component: _jana_dokumen_page__WEBPACK_IMPORTED_MODULE_0__.JanaDokumenPage
      }];

      var _JanaDokumenPageRoutingModule = function JanaDokumenPageRoutingModule() {
        _classCallCheck(this, JanaDokumenPageRoutingModule);
      };

      _JanaDokumenPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _JanaDokumenPageRoutingModule);
      /***/
    },

    /***/
    12754: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JanaDokumenPageModule": function JanaDokumenPageModule() {
          return (
            /* binding */
            _JanaDokumenPageModule
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


      var _jana_dokumen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./jana-dokumen-routing.module */
      61939);
      /* harmony import */


      var _jana_dokumen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./jana-dokumen.page */
      66359);

      var _JanaDokumenPageModule = function JanaDokumenPageModule() {
        _classCallCheck(this, JanaDokumenPageModule);
      };

      _JanaDokumenPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _jana_dokumen_routing_module__WEBPACK_IMPORTED_MODULE_0__.JanaDokumenPageRoutingModule],
        declarations: [_jana_dokumen_page__WEBPACK_IMPORTED_MODULE_1__.JanaDokumenPage]
      })], _JanaDokumenPageModule);
      /***/
    },

    /***/
    66359: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JanaDokumenPage": function JanaDokumenPage() {
          return (
            /* binding */
            _JanaDokumenPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_jana_dokumen_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./jana-dokumen.page.html */
      70975);
      /* harmony import */


      var _jana_dokumen_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./jana-dokumen.page.scss */
      18313);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      19122);
      /* harmony import */


      var src_app_services_pelanggan_pelanggan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/pelanggan/pelanggan.service */
      14744);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _kemaskini_dokumen_kemaskini_dokumen_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../kemaskini-dokumen/kemaskini-dokumen.page */
      6509);
      /* harmony import */


      var _tambah_jana_dokumen_tambah_jana_dokumen_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../tambah-jana-dokumen/tambah-jana-dokumen.page */
      92669);
      /* harmony import */


      var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @awesome-cordova-plugins/in-app-browser/ngx */
      69526);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _JanaDokumenPage = /*#__PURE__*/function () {
        function JanaDokumenPage(modalController, pelangganService, loadingController, iab, router) {
          _classCallCheck(this, JanaDokumenPage);

          this.modalController = modalController;
          this.pelangganService = pelangganService;
          this.loadingController = loadingController;
          this.iab = iab;
          this.router = router;
          this.hideList = true;
        }

        _createClass(JanaDokumenPage, [{
          key: "displayCountry",
          value: function displayCountry() {
            this.docSelectRef.open();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
            this.user_id = window.sessionStorage.getItem("user_id");
            this.getPelanggan();
          }
        }, {
          key: "tambahDokumen",
          value: function tambahDokumen() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log("Tambah Dokumen");
                      _context.next = 3;
                      return this.modalController.create({
                        component: _tambah_jana_dokumen_tambah_jana_dokumen_page__WEBPACK_IMPORTED_MODULE_5__.TambahJanaDokumenPage,
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
          key: "kemaskiniDokumen",
          value: function kemaskiniDokumen(pelanggan) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log("kemaskini Dokumen");
                      _context2.next = 3;
                      return this.modalController.create({
                        component: _kemaskini_dokumen_kemaskini_dokumen_page__WEBPACK_IMPORTED_MODULE_4__.KemaskiniDokumenPage,
                        componentProps: {
                          pelanggan: pelanggan
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
          key: "getPelanggan",
          value: function getPelanggan() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingController.create({
                        message: 'Loading ...'
                      });

                    case 2:
                      loading = _context3.sent;
                      loading.present();
                      this.pelangganService.get(this.user_id).subscribe(function (res) {
                        console.log("res pelanggan", res);
                        _this.pelanggan = res;
                        loading.dismiss();
                      });

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "jana_Dokumen",
          value: function jana_Dokumen(id_pelanggan) {
            var _this2 = this;

            console.log(id_pelanggan);
            console.log("jenisDokumen", this.jenisDokumen);
            var formdata = new FormData();
            formdata.append('id_pengguna', this.user_id);

            if (this.jenisDokumen == 1) {
              this.pelangganService.janaDokumen(id_pelanggan, formdata).subscribe(function (res) {
                console.log("res3", res);
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'storage/' + res;
                console.log(url); // window.open(url, "_blank");

                var browser = _this2.iab.create(url, '_system');
              });
            } else if (this.jenisDokumen == 2) {
              this.pelangganService.janaQuotation(id_pelanggan, formdata).subscribe(function (res) {
                console.log("res3", res);
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'storage/' + res;
                console.log(url); // window.open(url, "_blank");

                var browser = _this2.iab.create(url, '_system');
              });
            } else if (this.jenisDokumen == 3) {
              this.pelangganService.janaDO(id_pelanggan, formdata).subscribe(function (res) {
                console.log("res3", res);
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'storage/' + res;
                console.log(url); // window.open(url, "_blank");

                var browser = _this2.iab.create(url, '_system');
              });
            } else if (this.jenisDokumen == 4) {
              this.pelangganService.janaInvoice(id_pelanggan, formdata).subscribe(function (res) {
                console.log("res3", res);
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'storage/' + res;
                console.log(url); // window.open(url, "_blank");

                var browser = _this2.iab.create(url, '_system');
              });
            }
          }
        }, {
          key: "dashboard",
          value: function dashboard() {
            this.router.navigate(['/dashboard']);
          }
        }]);

        return JanaDokumenPage;
      }();

      _JanaDokumenPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
        }, {
          type: src_app_services_pelanggan_pelanggan_service__WEBPACK_IMPORTED_MODULE_2__.PelangganService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
        }, {
          type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__.InAppBrowser
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }];
      };

      _JanaDokumenPage.propDecorators = {
        docSelectRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
          args: ['jenisDoc']
        }]
      };
      _JanaDokumenPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-jana-dokumen',
        template: _raw_loader_jana_dokumen_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_jana_dokumen_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _JanaDokumenPage);
      /***/
    },

    /***/
    18313: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".no-padding {\n  padding: 0px !important;\n}\n\n.rectangle-280 {\n  background-color: #00a651;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n\n.bg-white {\n  background-color: white;\n  display: flex;\n  height: 90%;\n  justify-content: center;\n  min-width: 100%;\n  border-radius: 0px 0px 25px 25px;\n}\n\n.bold,\nh1 {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n\n.no-padding {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.rectangle-279 {\n  border-radius: 12px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  margin-left: 7%;\n  margin-right: 7%;\n}\n\n.font-13 {\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphbmEtZG9rdW1lbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7O0VBRUksaUJBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUNBO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtBQUVKOztBQUFBO0VBRUksbUJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0FBRUoiLCJmaWxlIjoiamFuYS1kb2t1bWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnJlY3RhbmdsZS0yODAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGE2NTE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLmJnLXdoaXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogOTAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDI1cHggMjVweDtcbn1cblxuLmJvbGQsXG5oMSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcbn1cbi5uby1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuLnJlY3RhbmdsZS0yNzkge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNFREVERUQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiA3JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDclO1xufVxuXG4uZm9udC0xMyB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuIl19 */";
      /***/
    },

    /***/
    70975: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-button  (click)=\"dashboard()\">\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"warning\">\n        <h2>\n          <strong class=\"ion-text-uppercase\">\n            DOKUMEN PERNIAGAAN\n          </strong>\n        </h2>\n      </ion-text>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"bg-white\" style=\"display: flex; flex-wrap:wrap\">\n    <ion-grid style=\"margin:5%; margin-bottom:0px\">\n      <ion-row style=\"margin-bottom: 10px;\">\n        <ion-col>\n          <h5 class=\"bold\"> Maklumat</h5>\n        </ion-col>\n        <ion-col class=\"ion-text-end\">\n          <!-- <h5 class=\"bold\">Status</h5> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n\n    <div style=\"height: 70%; width:100%; overflow: scroll; display:flex; justify-content:center\">\n\n      <ion-grid class=\"rectangle-279\">\n        <ion-row *ngFor=\"let pelanggan of pelanggan\"\n          style=\"margin-bottom: 10px; background-color: #EDEDED; border-radius: 15px;\">\n          <ion-col>\n            <div class=\" bold\" style=\"font-family: 'Nunito Sans';\">\n              <ion-grid style=\"padding: 0%;\">\n                <ion-row style=\"padding: 0%;\">\n                  <ion-col size=\"8\" (click)=\"kemaskiniDokumen(pelanggan)\">\n                    <ion-text>\n                      <h6 class=\"bold no-padding ion-text-uppercase\">\n                        {{pelanggan.nama_pelanggan}}\n                      </h6>\n                    </ion-text>\n                    <ion-text color=\"medium\">\n                      <p class=\"font-13 no-padding\">\n                        {{pelanggan.updated_at | date: 'dd/MM/yyyy'}}\n                      </p>\n                    </ion-text>\n                  </ion-col>\n                  <ion-col size=\"4\" style=\"padding: 2%; display:flex; justify-content:flex-end; align-items:center\">\n                    <!-- <img (click)=\"jana_Dokumen(pelanggan.id)\" src=\"assets/icon/DOWNLOAD.png\" alt=\"pending\" height=\"25px\"\n                      style=\"margin-left: 20px;\"> -->\n\n                    <img (click)=\"displayCountry()\" src=\"assets/new-iconv2/Download.png\" alt=\"pending\" height=\"25px\"\n                      style=\"margin-left: 20px;\">\n\n\n                    <ion-item [hidden]='hideList'>\n                      <ion-label>Pilih Dokumen</ion-label>\n                      <ion-select placeholder=\"Country\" #jenisDoc (ionChange)='jana_Dokumen(pelanggan.id)' [(ngModel)]=\"jenisDokumen\">\n                        <ion-select-option value=\"1\">Dokumen Penuh</ion-select-option>\n                        <ion-select-option value=\"2\">Quotation</ion-select-option>\n                        <ion-select-option value=\"3\">DO</ion-select-option>\n                        <ion-select-option value=\"4\">Invoice</ion-select-option>\n                      </ion-select>\n                    </ion-item>\n                    <!-- <ion-button ion-button block (click)='displayCountry()'>Pop Out Select</ion-button> -->\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n    </div>\n    <div style=\"width:100%; height:25%; display:flex; justify-content:flex-end;\">\n      <div class=\"ion-padding ion-margin ion-text-center\" (click)=\"tambahDokumen()\">\n        <img src=\"assets/new-iconv2/Tambah.png\" alt=\"\" height=\"50\" width=\"50\">\n        <br>\n\n        <ion-text class=\"bold\" color=\"dark\">\n          <ion-icon name=\"add\"></ion-icon>\n          <span style=\"font-size: 12px; font-weight: 900;\"><strong> TAMBAH </strong></span>\n        </ion-text>\n      </div>\n\n    </div>\n  </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_core_jana-dokumen_jana-dokumen_jana-dokumen_module_ts-es5.js.map