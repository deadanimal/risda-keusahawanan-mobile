(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_buletin_buletin_buletin_module_ts"], {
    /***/
    64779: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BuletinPageRoutingModule": function BuletinPageRoutingModule() {
          return (
            /* binding */
            _BuletinPageRoutingModule
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


      var _buletin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./buletin.page */
      30589);

      var routes = [{
        path: '',
        component: _buletin_page__WEBPACK_IMPORTED_MODULE_0__.BuletinPage
      }];

      var _BuletinPageRoutingModule = function BuletinPageRoutingModule() {
        _classCallCheck(this, BuletinPageRoutingModule);
      };

      _BuletinPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _BuletinPageRoutingModule);
      /***/
    },

    /***/
    862: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BuletinPageModule": function BuletinPageModule() {
          return (
            /* binding */
            _BuletinPageModule
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


      var _buletin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./buletin-routing.module */
      64779);
      /* harmony import */


      var _buletin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./buletin.page */
      30589);

      var _BuletinPageModule = function BuletinPageModule() {
        _classCallCheck(this, BuletinPageModule);
      };

      _BuletinPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _buletin_routing_module__WEBPACK_IMPORTED_MODULE_0__.BuletinPageRoutingModule],
        declarations: [_buletin_page__WEBPACK_IMPORTED_MODULE_1__.BuletinPage]
      })], _BuletinPageModule);
      /***/
    },

    /***/
    30589: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BuletinPage": function BuletinPage() {
          return (
            /* binding */
            _BuletinPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_buletin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./buletin.page.html */
      19852);
      /* harmony import */


      var _buletin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./buletin.page.scss */
      71959);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _kemaskini_buletin_kemaskini_buletin_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../kemaskini-buletin/kemaskini-buletin.page */
      21318);
      /* harmony import */


      var _tambah_buletin_tambah_buletin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../tambah-buletin/tambah-buletin.page */
      88888);

      var _BuletinPage = /*#__PURE__*/function () {
        function BuletinPage(modalController) {
          _classCallCheck(this, BuletinPage);

          this.modalController = modalController;
          this.katalog = [{
            nama_produk: "Tajuk Buletin",
            status_katalog: "publish",
            created_date: "12/12/2021"
          }, {
            nama_produk: "Tajuk Buletin",
            status_katalog: "publish",
            created_date: "1/2/2020"
          }, {
            nama_produk: "Tajuk Buletin",
            status_katalog: "pending",
            created_date: "5/10/2021"
          }, {
            nama_produk: "Tajuk Buletin",
            status_katalog: "pending",
            created_date: "22/6/2020"
          }, {
            nama_produk: "Tajuk Buletin",
            status_katalog: "publish",
            created_date: "3/2/2020"
          }, {
            nama_produk: "Tajuk Buletin",
            status_katalog: "publish",
            created_date: "12/12/2021"
          }, {
            nama_produk: "Tajuk Buletin ",
            status_katalog: "publish",
            created_date: "1/2/2020"
          }, {
            nama_produk: "Tajuk Buletin",
            status_katalog: "pending",
            created_date: "5/10/2021"
          }, {
            nama_produk: "Tajuk Buletin",
            status_katalog: "pending",
            created_date: "22/6/2020"
          }, {
            nama_produk: "Tajuk Buletin",
            status_katalog: "publish",
            created_date: "3/2/2020"
          }, {
            nama_produk: "Tajuk Buletin ",
            status_katalog: "publish",
            created_date: "12/12/2021"
          }, {
            nama_produk: "Tajuk Buletin",
            status_katalog: "publish",
            created_date: "1/2/2020"
          }, {
            nama_produk: "Tajuk Buletin",
            status_katalog: "pending",
            created_date: "5/10/2021"
          }, {
            nama_produk: "Tajuk Buletin",
            status_katalog: "pending",
            created_date: "22/6/2020"
          }, {
            nama_produk: "Tajuk Buletin",
            status_katalog: "publish",
            created_date: "3/2/2020"
          }];
        }

        _createClass(BuletinPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "tambahBuletin",
          value: function tambahBuletin() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log("Tambah Dokumen");
                      _context.next = 3;
                      return this.modalController.create({
                        component: _tambah_buletin_tambah_buletin_page__WEBPACK_IMPORTED_MODULE_3__.TambahBuletinPage,
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
          key: "kemaskiniBuletin",
          value: function kemaskiniBuletin() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log("Tambah Dokumen");
                      _context2.next = 3;
                      return this.modalController.create({
                        component: _kemaskini_buletin_kemaskini_buletin_page__WEBPACK_IMPORTED_MODULE_2__.KemaskiniBuletinPage,
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
        }]);

        return BuletinPage;
      }();

      _BuletinPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
        }];
      };

      _BuletinPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-buletin',
        template: _raw_loader_buletin_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_buletin_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _BuletinPage);
      /***/
    },

    /***/
    71959: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".no-padding {\n  padding: 0px !important;\n}\n\n.rectangle-280 {\n  background-color: #00a651;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n\n.bg-white {\n  background-color: white;\n  display: flex;\n  height: 90%;\n  justify-content: center;\n  min-width: 100%;\n  border-radius: 0px 0px 25px 25px;\n}\n\n.bold,\nh1 {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n\n.no-padding {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.rectangle-279 {\n  border-radius: 12px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  margin-left: 7%;\n  margin-right: 7%;\n}\n\n.nunito {\n  font-family: \"Nunito Sans\";\n}\n\n.dot {\n  height: 30px;\n  width: 30px;\n  background-color: #00a651;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 5%;\n}\n\n.dot2 {\n  height: 30px;\n  width: 30px;\n  background-color: #d30f0f;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bGV0aW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBOztFQUVJLGlCQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFDQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7QUFFSjs7QUFBQTtFQUVJLG1CQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksMEJBQUE7QUFHSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFHSiIsImZpbGUiOiJidWxldGluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnJlY3RhbmdsZS0yODAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGE2NTE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLmJnLXdoaXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogOTAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDI1cHggMjVweDtcbn1cblxuLmJvbGQsXG5oMSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcbn1cbi5uby1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuLnJlY3RhbmdsZS0yNzkge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNFREVERUQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiA3JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDclO1xufVxuLm51bml0b3tcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiO1xufVxuXG4uZG90IHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTY1MTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbi5kb3QyIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzMGYwZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG59XG4iXX0= */";
      /***/
    },

    /***/
    19852: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"height: 80px;\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" href=\"/dashboard\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"success\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            BULETIN\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"bg-white\" style=\"display: flex; flex-wrap:wrap\">\n    <ion-grid style=\"margin:5%; margin-bottom:0px\">\n      <ion-row style=\"margin-bottom: 10px;\">\n        <ion-col>\n          <h5 class=\"bold\"> Perkara</h5>\n        </ion-col>\n        <ion-col class=\"ion-text-end\">\n          <h5 class=\"bold\">Status</h5>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div style=\"height: 70%; width:100%; overflow: scroll; display:flex; justify-content:center\">\n\n      <ion-grid class=\"rectangle-279\">\n        <ion-row *ngFor=\"let katalog of katalog\"\n          style=\"margin-bottom: 10px; background-color: #EDEDED; border-radius: 15px;\" (click)=\"kemaskiniBuletin()\">\n          <ion-col>\n            <div class=\" bold\" style=\"font-family: 'Nunito Sans';\">\n              <ion-grid style=\"padding: 0%;\">\n                <ion-row style=\"padding: 0%;\">\n                  <ion-col size=\"8\">\n                    <ion-text>\n                      <h6 class=\"bold no-padding\">\n                        {{katalog.nama_produk}}\n                      </h6>\n                    </ion-text>\n                    <ion-text color=\"success\" class=\"nunito\">\n                      {{katalog.created_date}}\n                    </ion-text>\n                  </ion-col>\n                  <ion-col size=\"4\" style=\"padding: 0%; display:flex; justify-content:flex-end; align-items:center\">\n                    <!-- <img *ngIf=\"katalog.status_katalog == 'pending'\" src=\"assets/icon/pending.png\" alt=\"pending\"\n                      height=\"50px\">\n                    <ion-icon color=\"danger\" name=\"ellipse-outline\"></ion-icon>\n                    <img *ngIf=\"katalog.status_katalog == 'publish'\" src=\"assets/icon/publish-icon.png\" alt=\"publish\"\n                      height=\"50px%\"> -->\n                    <span *ngIf=\"katalog.status_katalog == 'publish'\" class=\"dot\"></span>\n                    <span *ngIf=\"katalog.status_katalog == 'pending'\" class=\"dot2\"></span>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n    </div>\n    <div style=\"width:100%; height:25%; display:flex; justify-content:flex-end;\">\n      <div class=\"ion-padding ion-margin ion-text-center\" (click)=\"tambahBuletin()\">\n        <img src=\"/assets/icon/add-item-icon.png\" alt=\"\" height=\"50\" width=\"50\">\n        <br>\n\n        <ion-text class=\"bold\" color=\"success\">\n          <ion-icon name=\"add\"></ion-icon>\n          <span style=\"font-size: 12px; font-weight: 900;\"><strong> TAMBAH </strong></span>\n        </ion-text>\n      </div>\n\n    </div>\n  </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_core_buletin_buletin_buletin_module_ts-es5.js.map