(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_aliran-tunai_aliran-tunai_module_ts"], {
    /***/
    72190: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AliranTunaiPageRoutingModule": function AliranTunaiPageRoutingModule() {
          return (
            /* binding */
            _AliranTunaiPageRoutingModule
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


      var _aliran_tunai_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./aliran-tunai.page */
      51151);

      var routes = [{
        path: '',
        component: _aliran_tunai_page__WEBPACK_IMPORTED_MODULE_0__.AliranTunaiPage
      }];

      var _AliranTunaiPageRoutingModule = function AliranTunaiPageRoutingModule() {
        _classCallCheck(this, AliranTunaiPageRoutingModule);
      };

      _AliranTunaiPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AliranTunaiPageRoutingModule);
      /***/
    },

    /***/
    65807: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AliranTunaiPageModule": function AliranTunaiPageModule() {
          return (
            /* binding */
            _AliranTunaiPageModule
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


      var _aliran_tunai_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./aliran-tunai-routing.module */
      72190);
      /* harmony import */


      var _aliran_tunai_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./aliran-tunai.page */
      51151);

      var _AliranTunaiPageModule = function AliranTunaiPageModule() {
        _classCallCheck(this, AliranTunaiPageModule);
      };

      _AliranTunaiPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _aliran_tunai_routing_module__WEBPACK_IMPORTED_MODULE_0__.AliranTunaiPageRoutingModule],
        declarations: [_aliran_tunai_page__WEBPACK_IMPORTED_MODULE_1__.AliranTunaiPage]
      })], _AliranTunaiPageModule);
      /***/
    },

    /***/
    51151: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AliranTunaiPage": function AliranTunaiPage() {
          return (
            /* binding */
            _AliranTunaiPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_aliran_tunai_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./aliran-tunai.page.html */
      9559);
      /* harmony import */


      var _aliran_tunai_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./aliran-tunai.page.scss */
      74161);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _modal_kemaskini_tunai_keluar_kemaskini_tunai_keluar_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../modal/kemaskini-tunai-keluar/kemaskini-tunai-keluar.page */
      58278);
      /* harmony import */


      var _modal_kemaskini_tunai_masuk_kemaskini_tunai_masuk_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../modal/kemaskini-tunai-masuk/kemaskini-tunai-masuk.page */
      89167);
      /* harmony import */


      var _modal_tambah_tunai_keluar_tambah_tunai_keluar_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../modal/tambah-tunai-keluar/tambah-tunai-keluar.page */
      8690);
      /* harmony import */


      var _modal_tambah_tunai_masuk_tambah_tunai_masuk_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../modal/tambah-tunai-masuk/tambah-tunai-masuk.page */
      29309);
      /* harmony import */


      var src_app_services_Aliran_aliran_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/Aliran/aliran.service */
      72311); // import { KemaskiniTunaiMasukComponent } from './kemaskini-tunai-masuk/kemaskini-tunai-masuk.component';


      var _AliranTunaiPage = /*#__PURE__*/function () {
        function AliranTunaiPage(modalController, aliranService) {
          _classCallCheck(this, AliranTunaiPage);

          this.modalController = modalController;
          this.aliranService = aliranService;
          this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
          this.user_id = window.sessionStorage.getItem("user_id");
        }

        _createClass(AliranTunaiPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAliran();
          }
        }, {
          key: "tambahTunaiMasuk",
          value: function tambahTunaiMasuk() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log("tambah tunai masuk");
                      _context.next = 3;
                      return this.modalController.create({
                        component: _modal_tambah_tunai_masuk_tambah_tunai_masuk_page__WEBPACK_IMPORTED_MODULE_5__.TambahTunaiMasukPage,
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
          key: "kemaskiniTunaiMasuk",
          value: function kemaskiniTunaiMasuk(tunai_masuk) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log("kemaskini tunai masuk");
                      _context2.next = 3;
                      return this.modalController.create({
                        component: _modal_kemaskini_tunai_masuk_kemaskini_tunai_masuk_page__WEBPACK_IMPORTED_MODULE_3__.KemaskiniTunaiMasukPage,
                        componentProps: {
                          tunai_masuk: tunai_masuk
                        } // cssClass: 'my-custom-class'

                      });

                    case 3:
                      modal = _context2.sent;
                      modal.present(); // return await modal.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "tambahTunaiKeluar",
          value: function tambahTunaiKeluar() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log("tambah tunai keluar");
                      _context3.next = 3;
                      return this.modalController.create({
                        component: _modal_tambah_tunai_keluar_tambah_tunai_keluar_page__WEBPACK_IMPORTED_MODULE_4__.TambahTunaiKeluarPage,
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
          key: "kemaskiniTunaiKeluar",
          value: function kemaskiniTunaiKeluar(tunai_keluar) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.log("kemaskini tunai keluar");
                      _context4.next = 3;
                      return this.modalController.create({
                        component: _modal_kemaskini_tunai_keluar_kemaskini_tunai_keluar_page__WEBPACK_IMPORTED_MODULE_2__.KemaskiniTunaiKeluarPage,
                        componentProps: {
                          tunai_keluar: tunai_keluar
                        } // cssClass: 'my-custom-class'

                      });

                    case 3:
                      modal = _context4.sent;
                      _context4.next = 6;
                      return modal.present();

                    case 6:
                      return _context4.abrupt("return", _context4.sent);

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "getAliran",
          value: function getAliran() {
            var _this = this;

            this.aliranService.get().subscribe(function (res) {
              console.log("aliran", res);
              var temp = [];
              var temp2 = [];
              res.forEach(function (element) {
                // console.log("id",element.id_kategori_aliran);
                if (element.id_kategori_aliran == 1 || element.id_kategori_aliran == 2 || element.id_kategori_aliran == 3 || element.id_kategori_aliran == 4 || element.id_kategori_aliran == 5 || element.id_kategori_aliran == 6 || element.id_kategori_aliran == 7 || element.id_kategori_aliran == 8) {
                  temp.push(element);
                } else {
                  temp2.push(element);
                }
              });
              _this.tunai_masuk = temp;
              _this.tunai_keluar = temp2;
            });
          }
        }]);

        return AliranTunaiPage;
      }();

      _AliranTunaiPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
        }, {
          type: src_app_services_Aliran_aliran_service__WEBPACK_IMPORTED_MODULE_6__.AliranService
        }];
      };

      _AliranTunaiPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-aliran-tunai',
        template: _raw_loader_aliran_tunai_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_aliran_tunai_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AliranTunaiPage);
      /***/
    },

    /***/
    74161: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".no-padding {\n  padding: 0px !important;\n}\n\n.rectangle-280 {\n  background-color: #00a651;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n\n.bg-white {\n  background-color: white;\n  display: flex;\n  height: 90%;\n  justify-content: center;\n  min-width: 100%;\n  border-radius: 0px 0px 25px 25px;\n}\n\n.tab-selected {\n  background-color: #00a651;\n  border-radius: 30px;\n  color: white;\n}\n\n.tab {\n  margin-top: 10%;\n  border-bottom: none;\n}\n\nion-tab-button {\n  background-color: #f1f1f1;\n  border-radius: 30px;\n}\n\n.content-box {\n  padding: 10px;\n  box-shadow: 0px 0px 3px 0px #acacac;\n  border-radius: 10px;\n  width: 100%;\n}\n\n.bold,\nh1 {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n\n.no-padding {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.jumlah {\n  font-family: \"Nunito Sans\";\n}\n\n.tarikh {\n  font-family: \"Nunito Sans\";\n  font-size: 12px;\n}\n\nion-icon {\n  font-size: 12px;\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsaXJhbi10dW5haS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTs7RUFFSSxpQkFBQTtFQUNBLDBCQUFBO0FBREo7O0FBR0E7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBRUE7RUFDSSwwQkFBQTtBQUNKOztBQUNBO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0FBRUo7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJhbGlyYW4tdHVuYWkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLXBhZGRpbmcge1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucmVjdGFuZ2xlLTI4MCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTY1MTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4uYmctd2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjVweCAyNXB4O1xufVxuXG4udGFiLXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNjUxO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4udGFiIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUYxO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDJyZW07XG59XG5cbi5jb250ZW50LWJveCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHggI2FjYWNhYztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYm9sZCxcbmgxIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiO1xufVxuLm5vLXBhZGRpbmcge1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG4uanVtbGFoIHtcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiO1xufVxuLnRhcmlraCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLy8gY29sb3I6ICMwMGE2NTE7XG59XG5cbmlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    9559: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"height: 80px;\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" href=\"/dashboard\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"success\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            ALIRAN TUNAI\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div>\n    <ion-tabs>\n      <ion-tab-bar slot=\"top\" class=\"tab\">\n        <ion-tab-button tab=\"/tunai-masuk\" style=\"height:30px; max-width:40%\">\n          <ion-label style=\"width: 80%; \">\n            <div>\n              Tunai Masuk\n            </div>\n            <!-- <ion-button round=true>Tunai Masuk</ion-button> -->\n          </ion-label>\n          <!-- <ion-icon name=\"musical-note\"></ion-icon> -->\n        </ion-tab-button>\n        <ion-tab-button tab=\"/tunai-keluar\" style=\"height:30px; max-width:40%\">\n          <ion-label>\n            Tunai Keluar\n          </ion-label>\n          <!-- <ion-icon name=\"game-controller\"></ion-icon> -->\n        </ion-tab-button>\n\n      </ion-tab-bar>\n\n      <ion-tab tab=\"/tunai-masuk\">\n        <ion-content fullscreen>\n          <div class=\"rectangle-280\"></div>\n\n          <div class=\"bg-white\" style=\"display: flex; flex-wrap:wrap\">\n            <ion-grid style=\"margin-left:5%; margin-right:5%;\">\n              <ion-row style=\"margin-bottom: 10px;\">\n                <ion-col>\n                  <h5 class=\"bold\"> Maklumat Aliran</h5>\n                </ion-col>\n                <ion-col class=\"ion-text-end\">\n                  <h5 class=\"bold\">Jumlah</h5>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <div style=\"height: 65%; width:100%; overflow: scroll;\">\n              <ion-grid style=\"margin-left:5%; margin-right:5%;\">\n                <ion-row *ngFor=\"let tunai_masuk of tunai_masuk\" style=\"padding-bottom: 10px;\" >\n                  <ion-col>\n                    <div class=\"content-box bold\" style=\"font-family: 'Nunito Sans';\" (click)=\"kemaskiniTunaiMasuk( tunai_masuk )\">\n                      <ion-grid style=\"padding: 0%;\">\n                        <ion-row style=\"padding: 0%;\">\n                          <ion-col size=\"8\">\n                            <ion-text>\n                              <h6 class=\"bold no-padding\">\n                                {{tunai_masuk.kategori_aliran}}\n                              </h6>\n                            </ion-text>\n                            <ion-text color=\"success\">\n                              {{tunai_masuk.keterangan_aliran}}\n                            </ion-text>\n                          </ion-col>\n                          <ion-col size=\"4\" style=\"padding: 0%;\">\n                            <div class=\"content-box\"\n                              style=\"height: 100%; display:flex; align-items:center; background-color:#EDEDED; display:flex; justify-content:center\">\n                              <ion-text color=\"success\" class=\"ion-text-center\">\n                                <p class=\"jumlah no-padding\"> RM {{tunai_masuk.jumlah_aliran}}</p>\n\n                                <p class=\"tarikh no-padding\">{{tunai_masuk.tarikh_aliran}}</p>\n                              </ion-text>\n                            </div>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n            <div\n              style=\"width:100%; height:25%; display:flex; justify-content:flex-end; align-items:flex-end; border-radius: 0px 0px 25px 25px; \">\n              <div class=\"ion-padding ion-margin ion-text-center\" (click)=\"tambahTunaiMasuk()\">\n                <img src=\"/assets/icon/add-item-icon.png\" alt=\"\" height=\"50\" width=\"50\">\n                <br>\n\n                <ion-text class=\"bold\" color=\"success\">\n                  <ion-icon name=\"add\"></ion-icon>\n                  <span style=\"font-size: 12px; font-weight: 900;\"><strong> TAMBAH </strong></span>\n                </ion-text>\n              </div>\n\n            </div>\n          </div>\n\n        </ion-content>\n      </ion-tab>\n\n      <ion-tab tab=\"/tunai-keluar\">\n        <ion-content fullscreen>\n          <div class=\"rectangle-280\"></div>\n\n          <div class=\"bg-white\" style=\"display: flex; flex-wrap:wrap\">\n            <ion-grid style=\"margin-left:5%; margin-right:5%;\">\n              <ion-row style=\"margin-bottom: 10px;\">\n                <ion-col>\n                  <h5 class=\"bold\"> Maklumat Aliran</h5>\n                </ion-col>\n                <ion-col class=\"ion-text-end\">\n                  <h5 class=\"bold\">Jumlah</h5>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <div style=\"height: 65%; width:100%; overflow: scroll;\">\n              <ion-grid style=\"margin-left:5%; margin-right:5%;\">\n                <ion-row *ngFor=\"let tunai_keluar of tunai_keluar\" style=\"padding-bottom: 10px;\">\n                  <ion-col>\n                    <div class=\"content-box bold\" style=\"font-family: 'Nunito Sans';\" (click)=\"kemaskiniTunaiKeluar( tunai_keluar )\">\n                      <ion-grid style=\"padding: 0%;\">\n                        <ion-row style=\"padding: 0%;\">\n                          <ion-col size=\"8\">\n                            <ion-text>\n                              <h6 class=\"bold no-padding ion-text-lowercase\">\n                                {{tunai_keluar.kategori_aliran}}\n                              </h6>\n                            </ion-text>\n                            <ion-text color=\"success\">\n                              {{tunai_keluar.keterangan_aliran}}\n                            </ion-text>\n                          </ion-col>\n                          <ion-col size=\"4\" style=\"padding: 0%;\">\n                            <div class=\"content-box\"\n                              style=\"height: 100%; display:flex; align-items:center; background-color:#EDEDED; display:flex; justify-content:center\">\n                              <ion-text color=\"danger\" class=\"ion-text-center\">\n                                <p class=\"jumlah no-padding\"> RM {{tunai_keluar.jumlah_aliran}}</p>\n\n                                <p class=\"tarikh no-padding\">{{tunai_keluar.tarikh_aliran}}</p>\n                              </ion-text>\n                            </div>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n            <div\n              style=\"width:100%; height:25%; display:flex; justify-content:flex-end; align-items:flex-end; border-radius: 0px 0px 25px 25px; \">\n              <div class=\"ion-padding ion-margin ion-text-center\" (click)=\"tambahTunaiKeluar()\">\n                <img src=\"/assets/icon/add-item-icon.png\" alt=\"\" height=\"50\" width=\"50\">\n                <br>\n\n                <ion-text class=\"bold\" color=\"success\">\n                  <ion-icon name=\"add\"></ion-icon>\n                  <span style=\"font-size: 12px; font-weight: 900;\"><strong> TAMBAH </strong></span>\n                </ion-text>\n              </div>\n\n            </div>\n          </div>\n\n        </ion-content>\n      </ion-tab>\n\n\n\n\n    </ion-tabs>\n\n  </div>\n\n\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_core_aliran-tunai_aliran-tunai_module_ts-es5.js.map