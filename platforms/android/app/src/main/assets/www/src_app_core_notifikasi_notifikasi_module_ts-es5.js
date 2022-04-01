(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_notifikasi_notifikasi_module_ts"], {
    /***/
    47824: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotifikasiPageRoutingModule": function NotifikasiPageRoutingModule() {
          return (
            /* binding */
            _NotifikasiPageRoutingModule
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


      var _notifikasi_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./notifikasi.page */
      85522);

      var routes = [{
        path: '',
        component: _notifikasi_page__WEBPACK_IMPORTED_MODULE_0__.NotifikasiPage
      }];

      var _NotifikasiPageRoutingModule = function NotifikasiPageRoutingModule() {
        _classCallCheck(this, NotifikasiPageRoutingModule);
      };

      _NotifikasiPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NotifikasiPageRoutingModule);
      /***/
    },

    /***/
    57458: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotifikasiPageModule": function NotifikasiPageModule() {
          return (
            /* binding */
            _NotifikasiPageModule
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


      var _notifikasi_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./notifikasi-routing.module */
      47824);
      /* harmony import */


      var _notifikasi_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./notifikasi.page */
      85522);

      var _NotifikasiPageModule = function NotifikasiPageModule() {
        _classCallCheck(this, NotifikasiPageModule);
      };

      _NotifikasiPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _notifikasi_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotifikasiPageRoutingModule],
        declarations: [_notifikasi_page__WEBPACK_IMPORTED_MODULE_1__.NotifikasiPage]
      })], _NotifikasiPageModule);
      /***/
    },

    /***/
    85522: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotifikasiPage": function NotifikasiPage() {
          return (
            /* binding */
            _NotifikasiPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_notifikasi_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./notifikasi.page.html */
      44785);
      /* harmony import */


      var _notifikasi_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./notifikasi.page.scss */
      20690);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_notifikasi_notifikasi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/notifikasi/notifikasi.service */
      29572);

      var _NotifikasiPage = /*#__PURE__*/function () {
        function NotifikasiPage(notiService, router) {
          _classCallCheck(this, NotifikasiPage);

          this.notiService = notiService;
          this.router = router;
        }

        _createClass(NotifikasiPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
            this.pegawai_id = window.sessionStorage.getItem("pegawai_id");
            this.user_id = window.sessionStorage.getItem("user_id");
            this.role = window.sessionStorage.getItem("role");
            this.peranan_pegawai = window.sessionStorage.getItem("peranan_pegawai");
            console.log("user_id", this.user_id);
            this.getNoti();
          }
        }, {
          key: "getNoti",
          value: function getNoti() {
            var _this = this;

            this.notiService.get(this.user_id).subscribe(function (res) {
              console.log("notification", res);
              _this.notifikasi = res;
            });
          }
        }, {
          key: "routing",
          value: function routing(notifikasi) {
            var _this2 = this;

            console.log(notifikasi);
            this.notiService.updateStatus(notifikasi.id).subscribe(function (res) {
              console.log("updated status", res);

              if (_this2.usahawan_id != null) {
                if (notifikasi.modul == "katalog") {
                  _this2.router.navigate(['/katalog']);
                } else if (notifikasi.modul == "lawatan") {
                  _this2.router.navigate(['/lawatan-usahawan']);
                }
              } else if (_this2.usahawan_id == null) {
                console.log("pegi katalog");

                if (notifikasi.modul == "katalog") {
                  _this2.router.navigate(['/katalog-pegawai']);
                } else if (notifikasi.modul == "lawatan") {
                  _this2.router.navigate(['/lawatan-pegawai']);
                }
              }
            });
          }
        }, {
          key: "dashboard",
          value: function dashboard() {
            this.router.navigate(['/dashboard']);
          }
        }]);

        return NotifikasiPage;
      }();

      _NotifikasiPage.ctorParameters = function () {
        return [{
          type: src_app_services_notifikasi_notifikasi_service__WEBPACK_IMPORTED_MODULE_2__.NotifikasiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }];
      };

      _NotifikasiPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-notifikasi',
        template: _raw_loader_notifikasi_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_notifikasi_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _NotifikasiPage);
      /***/
    },

    /***/
    20690: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".rectangle-280 {\n  background-color: #00a651;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n\n.bg-white {\n  background-color: white;\n  display: flex;\n  height: 90%;\n  justify-content: center;\n  min-width: 100%;\n  border-radius: 0px 0px 25px 25px;\n}\n\n.content-box {\n  padding: 10px;\n  box-shadow: 0px 5px 10px 1px #D3D3D3;\n  border-radius: 10px;\n  width: 100%;\n}\n\n.bold,\nh1 {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n\n.no-padding {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.tarikh {\n  font-family: \"Nunito Sans\";\n  font-size: 12px;\n}\n\nion-icon {\n  font-size: 14px;\n  font-weight: bold;\n  color: #986522;\n}\n\n.dot {\n  height: 10px;\n  width: 10px;\n  background-color: red;\n  border-radius: 50%;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWthc2kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTs7RUFFSSxpQkFBQTtFQUNBLDBCQUFBO0FBREo7O0FBR0E7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0E7RUFDSSwwQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBREoiLCJmaWxlIjoibm90aWZpa2FzaS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLnJlY3RhbmdsZS0yODAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGE2NTE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLmJnLXdoaXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogOTAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDI1cHggMjVweDtcbn1cblxuLmNvbnRlbnQtYm94IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAxcHggI0QzRDNEMztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYm9sZCxcbmgxIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiO1xufVxuLm5vLXBhZGRpbmcge1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50YXJpa2gge1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIC8vIGNvbG9yOiAjMDBhNjUxO1xufVxuXG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjOTg2NTIyO1xufVxuXG4uZG90IHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    44785: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\" class=\"ion-align-items-center\">\n      <ion-button color=\"success\" (click)=\"dashboard()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"warning\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            NOTIFIKASI\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"bg-white\" style=\"display: flex; flex-wrap:wrap\">\n\n    <div style=\"height: 100%; width:100%; overflow: scroll;\">\n      <ion-grid style=\"margin-left:5%; margin-right:5%;\">\n        <ion-row *ngFor=\"let notifikasi of notifikasi\" style=\"padding-bottom: 10px;\">\n          <ion-col>\n\n            <div class=\"content-box bold\" style=\"font-family: 'Nunito Sans';\" (click)=\"routing(notifikasi)\">\n              <span *ngIf=\"notifikasi.readstatus == 0\" class=\"dot\"></span>\n              <ion-grid style=\"padding: 0%;\">\n                <ion-row style=\"padding: 0%;\">\n                  <ion-col size=\"10\">\n                    <ion-text color=success>\n                      <h6 class=\"bold no-padding\">\n                        {{notifikasi.tajuk}}\n                      </h6>\n                    </ion-text>\n                    <ion-text color=\"medium\">\n                      {{notifikasi.keterangan}}\n                    </ion-text>\n                    \n                    \n                  </ion-col>\n                  <ion-col size=\"2\" style=\"padding: 0%;\">\n\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col size=\"12\" style=\"text-align:right\">\n                    <ion-text color=\"medium\" >\n                      <span style=\"font-size: small; \">\n                        {{notifikasi.created_at | date:'d/M/yy, h:mm a'}}\n                      </span>\n                    </ion-text>\n                  </ion-col>\n                </ion-row>\n\n\n              </ion-grid>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_core_notifikasi_notifikasi_module_ts-es5.js.map