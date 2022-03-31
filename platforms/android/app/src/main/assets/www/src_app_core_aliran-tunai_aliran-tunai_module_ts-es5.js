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
      19122);
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      19122);
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
      72311);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895); // import { W3csService } from 'src/app/services/w3cs/w3cs.service';
      // import { KemaskiniTunaiMasukComponent } from './kemaskini-tunai-masuk/kemaskini-tunai-masuk.component';


      var _AliranTunaiPage = /*#__PURE__*/function () {
        function AliranTunaiPage(modalController, aliranService, router, elementRef, renderer) {
          _classCallCheck(this, AliranTunaiPage);

          this.modalController = modalController;
          this.aliranService = aliranService;
          this.router = router;
          this.elementRef = elementRef;
          this.renderer = renderer;
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
              var modal, _yield$modal$onDidDis, tunaimasuk;

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
                      _context.next = 8;
                      return modal.onDidDismiss();

                    case 8:
                      _yield$modal$onDidDis = _context.sent;
                      tunaimasuk = _yield$modal$onDidDis.data;

                      if (tunaimasuk) {
                        // TODO do something
                        this.getAliran();
                      }

                    case 11:
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
              var modal, _yield$modal$onDidDis2, tunaimasuk;

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
                      _context2.next = 6;
                      return modal.present();

                    case 6:
                      _context2.next = 8;
                      return modal.onDidDismiss();

                    case 8:
                      _yield$modal$onDidDis2 = _context2.sent;
                      tunaimasuk = _yield$modal$onDidDis2.data;

                      if (tunaimasuk) {
                        // TODO do something
                        this.getAliran();
                      }

                    case 11:
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
              var modal, _yield$modal$onDidDis3, updatedTunaiKeluar;

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
                      _context3.next = 8;
                      return modal.onDidDismiss();

                    case 8:
                      _yield$modal$onDidDis3 = _context3.sent;
                      updatedTunaiKeluar = _yield$modal$onDidDis3.data;

                      if (updatedTunaiKeluar) {
                        // TODO do something
                        this.getAliran();
                      }

                    case 11:
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
              var modal, _yield$modal$onDidDis4, updatedTunaiKeluar;

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
                      _context4.next = 8;
                      return modal.onDidDismiss();

                    case 8:
                      _yield$modal$onDidDis4 = _context4.sent;
                      updatedTunaiKeluar = _yield$modal$onDidDis4.data;

                      if (updatedTunaiKeluar) {
                        // TODO do something
                        this.getAliran();
                      }

                    case 11:
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

            this.aliranService.get(this.user_id).subscribe(function (res) {
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
        }, {
          key: "dashboard",
          value: function dashboard() {
            this.router.navigate(['/dashboard']);
          }
        }]);

        return AliranTunaiPage;
      }();

      _AliranTunaiPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
        }, {
          type: src_app_services_Aliran_aliran_service__WEBPACK_IMPORTED_MODULE_6__.AliranService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Renderer2
        }];
      };

      _AliranTunaiPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
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


      __webpack_exports__["default"] = ".no-padding {\n  padding: 0px !important;\n}\n\n.rectangle-280 {\n  background-color: #FF6600;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n\n.bg-white {\n  background-color: white;\n  display: flex;\n  height: 90%;\n  justify-content: center;\n  min-width: 100%;\n  border-radius: 0px 0px 25px 25px;\n}\n\n.lain.tab-selected {\n  background-color: #da0404;\n  border-radius: 30px;\n  color: white;\n}\n\n.tab-selected {\n  background-color: #00a651;\n  border-radius: 30px;\n  color: white;\n}\n\n.tab {\n  margin-top: 10%;\n  border-bottom: none;\n}\n\nion-tab-button {\n  background-color: #f1f1f1;\n  border-radius: 30px;\n}\n\n.content-box {\n  padding: 10px;\n  box-shadow: 0px 0px 3px 0px #acacac;\n  border-radius: 10px;\n  width: 100%;\n}\n\n.bold,\nh1 {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n\n.no-padding {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.jumlah {\n  font-family: \"Nunito Sans\";\n}\n\n.tarikh {\n  font-family: \"Nunito Sans\";\n  font-size: 12px;\n}\n\nion-icon {\n  font-size: 12px;\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsaXJhbi10dW5haS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDUSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNSOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUlBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUtBO0VBQ0ksYUFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRko7O0FBS0E7O0VBRUksaUJBQUE7RUFDQSwwQkFBQTtBQUZKOztBQUlBO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtBQURKOztBQUdBO0VBQ0ksMEJBQUE7QUFBSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQUoiLCJmaWxlIjoiYWxpcmFuLXR1bmFpLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnJlY3RhbmdsZS0yODAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjY2MDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLmJnLXdoaXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogOTAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDI1cHggMjVweDtcbn1cblxuLmxhaW4udGFiLXNlbGVjdGVke1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCA0LCA0KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIFxufVxuXG4udGFiLXNlbGVjdGVkICB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTY1MTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYiB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0YxRjFGMTtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiAycmVtO1xufVxuXG4uY29udGVudC1ib3gge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMHB4ICNhY2FjYWM7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJvbGQsXG5oMSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcbn1cbi5uby1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuLmp1bWxhaCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcbn1cbi50YXJpa2gge1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIC8vIGNvbG9yOiAjMDBhNjUxO1xufVxuXG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG4iXX0= */";
      /***/
    },

    /***/
    9559: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dashboard()\" >\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"warning\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            ALIRAN TUNAI\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div>\n    <ion-tabs>\n      <ion-tab-bar slot=\"top\" class=\"tab\">\n        <ion-tab-button tab=\"/tunai-masuk\"  style=\"height:30px; max-width:40%\">\n          <ion-label style=\"width: 80%; \">\n            <div>\n              Tunai Masuk\n            </div>\n            <!-- <ion-button round=true>Tunai Masuk</ion-button> -->\n          </ion-label>\n          <!-- <ion-icon name=\"musical-note\"></ion-icon> -->\n        </ion-tab-button>\n        <ion-tab-button tab=\"/tunai-keluar\" class=\"lain\" style=\"height:30px; max-width:40%\">\n          <ion-label>\n            Tunai Keluar\n          </ion-label>\n          <!-- <ion-icon name=\"game-controller\"></ion-icon> -->\n        </ion-tab-button>\n\n      </ion-tab-bar>\n\n      <ion-tab tab=\"/tunai-masuk\">\n        <ion-content fullscreen>\n          <div class=\"rectangle-280\"></div>\n\n          <div class=\"bg-white\" style=\"display: flex; flex-wrap:wrap\">\n            <ion-grid style=\"margin-left:5%; margin-right:5%;\">\n              <ion-row style=\"margin-bottom: 10px;\">\n                <ion-col>\n                  <h5 class=\"bold\"> Maklumat Aliran</h5>\n                </ion-col>\n                <ion-col class=\"ion-text-end\">\n                  <h5 class=\"bold\">Jumlah</h5>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <div style=\"height: 65%; width:100%; overflow: scroll;\">\n              <ion-grid style=\"margin-left:5%; margin-right:5%;\">\n                <ion-row *ngFor=\"let tunai_masuk of tunai_masuk\" style=\"padding-bottom: 10px;\" >\n                  <ion-col>\n                    <div class=\"content-box bold\" style=\"font-family: 'Nunito Sans';\" (click)=\"kemaskiniTunaiMasuk( tunai_masuk )\">\n                      <ion-grid style=\"padding: 0%;\">\n                        <ion-row style=\"padding: 0%;\">\n                          <ion-col size=\"7\">\n                            <ion-text>\n                              <h6 class=\"bold no-padding\">\n                                {{tunai_masuk.kategori_aliran}}\n                              </h6>\n                            </ion-text>\n                            <ion-text color=\"warning\">\n                              {{tunai_masuk.keterangan_aliran}}\n                            </ion-text>\n                          </ion-col>\n                          <ion-col size=\"5\" style=\"padding: 0%;\">\n                            <div class=\"content-box\"\n                              style=\"height: 100%; display:flex; align-items:center; background-color:#EDEDED; display:flex; justify-content:center\">\n                              <ion-text color=\"success\" class=\"ion-text-center\">\n                                <p class=\"jumlah no-padding\"> RM {{tunai_masuk.jumlah_aliran | number:'1.2-2':'en-US'}}</p>\n\n                                <p class=\"tarikh no-padding\">{{tunai_masuk.tarikh_aliran  | date:'dd/MM/yyyy'}}</p>\n                              </ion-text>\n                            </div>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n            <div\n              style=\"width:100%; height:25%; display:flex; justify-content:flex-end; align-items:flex-end; border-radius: 0px 0px 25px 25px; \">\n              <div class=\"ion-padding ion-margin ion-text-center\" (click)=\"tambahTunaiMasuk()\">\n                <img src=\"assets/new-iconv2/Tambah.png\" alt=\"\" height=\"50\" width=\"50\">\n                <br>\n\n                <ion-text class=\"bold\" color=\"dark\">\n                  <ion-icon name=\"add\"></ion-icon>\n                  <span style=\"font-size: 12px; font-weight: 900;\"><strong> TAMBAH </strong></span>\n                </ion-text>\n              </div>\n\n            </div>\n          </div>\n\n        </ion-content>\n      </ion-tab>\n\n      <ion-tab tab=\"/tunai-keluar\">\n        <ion-content fullscreen>\n          <div class=\"rectangle-280\"></div>\n\n          <div class=\"bg-white\" style=\"display: flex; flex-wrap:wrap\">\n            <ion-grid style=\"margin-left:5%; margin-right:5%;\">\n              <ion-row style=\"margin-bottom: 10px;\">\n                <ion-col>\n                  <h5 class=\"bold\"> Maklumat Aliran</h5>\n                </ion-col>\n                <ion-col class=\"ion-text-end\">\n                  <h5 class=\"bold\">Jumlah</h5>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <div style=\"height: 65%; width:100%; overflow: scroll;\">\n              <ion-grid style=\"margin-left:5%; margin-right:5%;\">\n                <ion-row *ngFor=\"let tunai_keluar of tunai_keluar\" style=\"padding-bottom: 10px;\">\n                  <ion-col>\n                    <div class=\"content-box bold\" style=\"font-family: 'Nunito Sans';\" (click)=\"kemaskiniTunaiKeluar( tunai_keluar )\">\n                      <ion-grid style=\"padding: 0%;\">\n                        <ion-row style=\"padding: 0%;\">\n                          <ion-col size=\"8\">\n                            <ion-text>\n                              <h6 class=\"bold no-padding ion-text-uppercase\">\n                                {{tunai_keluar.kategori_aliran}}\n                              </h6>\n                            </ion-text>\n                            <ion-text color=\"warning\">\n                              {{tunai_keluar.keterangan_aliran}}\n                            </ion-text>\n                          </ion-col>\n                          <ion-col size=\"4\" style=\"padding: 0%;\">\n                            <div class=\"content-box\"\n                              style=\"height: 100%; display:flex; align-items:center; background-color:#EDEDED; display:flex; justify-content:center\">\n                              <ion-text color=\"danger\" class=\"ion-text-center\">\n                                <p class=\"jumlah no-padding\"> RM {{tunai_keluar.jumlah_aliran | number:'1.2-2':'en-US'}}</p>\n\n                                <p class=\"tarikh no-padding\">{{tunai_keluar.tarikh_aliran | date:'dd/MM/yyyy'}}</p>\n                              </ion-text>\n                            </div>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n            <div\n              style=\"width:100%; height:25%; display:flex; justify-content:flex-end; align-items:flex-end; border-radius: 0px 0px 25px 25px; \">\n              <div class=\"ion-padding ion-margin ion-text-center\" (click)=\"tambahTunaiKeluar()\">\n                <img src=\"assets/new-iconv2/Tambah.png\" alt=\"\" height=\"50\" width=\"50\">\n                <br>\n\n                <ion-text class=\"bold\" color=\"dark\">\n                  <ion-icon name=\"add\"></ion-icon>\n                  <span style=\"font-size: 12px; font-weight: 900;\"><strong> TAMBAH </strong></span>\n                </ion-text>\n              </div>\n\n            </div>\n          </div>\n\n        </ion-content>\n      </ion-tab>\n\n\n\n\n    </ion-tabs>\n\n  </div>\n\n\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_core_aliran-tunai_aliran-tunai_module_ts-es5.js.map