(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_pnl_pnl_module_ts"], {
    /***/
    6788: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PnlPageRoutingModule": function PnlPageRoutingModule() {
          return (
            /* binding */
            _PnlPageRoutingModule
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


      var _pnl_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pnl.page */
      96675);

      var routes = [{
        path: '',
        component: _pnl_page__WEBPACK_IMPORTED_MODULE_0__.PnlPage
      }];

      var _PnlPageRoutingModule = function PnlPageRoutingModule() {
        _classCallCheck(this, PnlPageRoutingModule);
      };

      _PnlPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PnlPageRoutingModule);
      /***/
    },

    /***/
    89771: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PnlPageModule": function PnlPageModule() {
          return (
            /* binding */
            _PnlPageModule
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


      var _pnl_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pnl-routing.module */
      6788);
      /* harmony import */


      var _pnl_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pnl.page */
      96675);

      var _PnlPageModule = function PnlPageModule() {
        _classCallCheck(this, PnlPageModule);
      };

      _PnlPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _pnl_routing_module__WEBPACK_IMPORTED_MODULE_0__.PnlPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_pnl_page__WEBPACK_IMPORTED_MODULE_1__.PnlPage]
      })], _PnlPageModule);
      /***/
    },

    /***/
    96675: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PnlPage": function PnlPage() {
          return (
            /* binding */
            _PnlPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_pnl_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./pnl.page.html */
      72327);
      /* harmony import */


      var _pnl_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pnl.page.scss */
      19251);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_app_services_pdfExcel_pdf_excel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/pdfExcel/pdf-excel.service */
      68135);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @awesome-cordova-plugins/in-app-browser/ngx */
      69526);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _PnlPage = /*#__PURE__*/function () {
        // bulan = new Date()
        function PnlPage(formBuilder, pdfExcelService, iab, router) {
          _classCallCheck(this, PnlPage);

          this.formBuilder = formBuilder;
          this.pdfExcelService = pdfExcelService;
          this.iab = iab;
          this.router = router;
          this.date = new Date();
          this.user_id = window.sessionStorage.getItem("user_id");
          this.listYear = [];
          this.listMonth = [{
            value: "1",
            name: "January"
          }, {
            value: "2",
            name: "February"
          }, {
            value: "3",
            name: "March"
          }, {
            value: "4",
            name: "April"
          }, {
            value: "5",
            name: "May"
          }, {
            value: "6",
            name: "June"
          }, {
            value: "7",
            name: "July"
          }, {
            value: "8",
            name: "August"
          }, {
            value: "9",
            name: "September"
          }, {
            value: "10",
            name: "October"
          }, {
            value: "11",
            name: "November"
          }, {
            value: "12",
            name: "December"
          }];
          this.pnl = [];
          this.form = this.formBuilder.group({
            id: [''],
            bulan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            tahun: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
          });
        }

        _createClass(PnlPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // console.log("AAAAA", this.date.getMonth() + 1);
            // console.log("BBB", this.date.getFullYear());
            this.month = this.date.getMonth() + 1;
            this.year = Number(this.date.getFullYear());

            for (var i = 0; i <= 30; i++) {
              this.listYear.push(this.year);
              this.year = this.year - 1;
            }
          }
        }, {
          key: "logform",
          value: function logform() {
            var _this = this;

            console.log(this.form.value);
            this.form.value.id = this.user_id;
            console.log(this.form.value);
            this.pnl = [];
            this.pdfExcelService.pnlInfo(this.form.value).subscribe(function (res) {
              console.log("res", res); // this.pnl = res;

              _this.pnl.push(res);

              console.log("pnl", _this.pnl);
            });
          }
        }, {
          key: "printExcelCustom",
          value: function printExcelCustom() {
            var _this2 = this;

            this.form.value.id = this.user_id;
            console.log(this.form.value);
            this.pdfExcelService.pnlExcel(this.form.value).subscribe(function (res) {
              console.log("res", res);
              var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'storage/' + res;
              console.log(url); // window.open(url, "_blank");

              var browser = _this2.iab.create(url, '_system');
            });
          }
        }, {
          key: "printPdfCustom",
          value: function printPdfCustom() {
            var _this3 = this;

            this.form.value.id = this.user_id;
            console.log(this.form.value);
            this.pdfExcelService.pnlPdf(this.form.value).subscribe(function (res) {
              console.log("res", res);
              var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'storage/' + res;
              console.log(url); // window.open(url, "_blank");

              var browser = _this3.iab.create(url, '_system');
            });
          }
        }, {
          key: "printExcel",
          value: function printExcel(bulan) {
            var _this4 = this;

            this.form.value.id = this.user_id;
            this.form.value.bulan = bulan;
            this.form.value.tahun = this.date.getFullYear();
            console.log(this.form.value);
            this.pdfExcelService.pnlExcel(this.form.value).subscribe(function (res) {
              console.log("res", res);
              var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'storage/' + res;
              console.log(url); // window.open(url, "_blank");

              var browser = _this4.iab.create(url, '_system');
            });
          }
        }, {
          key: "printPdf",
          value: function printPdf(bulan) {
            var _this5 = this;

            this.form.value.id = this.user_id;
            this.form.value.bulan = bulan;
            this.form.value.tahun = this.date.getFullYear();
            console.log(this.form.value);
            this.pdfExcelService.pnlPdf(this.form.value).subscribe(function (res) {
              console.log("res", res);
              var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'storage/' + res;
              console.log(url); // window.open(url, "_blank");

              var browser = _this5.iab.create(url, '_system');
            });
          }
        }, {
          key: "share",
          value: function share() {
            console.log("share");
          }
        }, {
          key: "dashboard",
          value: function dashboard() {
            this.router.navigate(['/dashboard']);
          }
        }]);

        return PnlPage;
      }();

      _PnlPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }, {
          type: src_app_services_pdfExcel_pdf_excel_service__WEBPACK_IMPORTED_MODULE_2__.PdfExcelService
        }, {
          type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppBrowser
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }];
      };

      _PnlPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-pnl',
        template: _raw_loader_pnl_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pnl_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PnlPage);
      /***/
    },

    /***/
    19251: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bold,\nh1 {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n\n.no-padding {\n  padding: 0px !important;\n}\n\n.no-margin {\n  margin: 0px !important;\n}\n\n.rectangle-280 {\n  background-color: #00a651;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n\n.bg-white {\n  background-color: white;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  min-width: 100%;\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.rectangle-1 {\n  background-color: #FF6600;\n  border-radius: 18px;\n  box-shadow: 0px 4px 4px #00000040;\n  font-family: \"Nunito Sans\";\n  height: auto;\n  height: initial;\n  width: 100%;\n  color: white;\n  padding-left: 5%;\n  padding-right: 5%;\n  padding-top: 2%;\n  margin-bottom: 5%;\n}\n\n.success {\n  color: #00a651;\n}\n\n.card {\n  background-color: #EDEDED;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBubC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksaUJBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUNBO0VBQ0ksdUJBQUE7QUFFSjs7QUFDQTtFQUNJLHNCQUFBO0FBRUo7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFBQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBbUJBO0VBQ0ksY0FBQTtBQWhCSjs7QUFtQkE7RUFDSSx5QkFBQTtBQWhCSiIsImZpbGUiOiJwbmwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvbGQsXG5oMSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcbn1cbi5uby1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLm5vLW1hcmdpbiB7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnJlY3RhbmdsZS0yODAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGE2NTE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLmJnLXdoaXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMHB4IDBweCA0MHB4IDQwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICAvLyBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucmVjdGFuZ2xlLTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjY2MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAjMDAwMDAwNDA7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcbiAgICBoZWlnaHQ6IGluaXRpYWw7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgcGFkZGluZy1yaWdodDogNSU7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4vLyBpb24taXRlbSxcbi8vIC50ZXN0IHtcbi8vICAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNzVyZW0gIWltcG9ydGFudDtcbi8vICAgICAtLXBhZGRpbmctdG9wOiAwLjYyNXJlbSAhaW1wb3J0YW50O1xuLy8gICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM4ODk4YWE7XG4vLyAgICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNFREVERUQgIWltcG9ydGFudDtcbi8vICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMXJlbSAhaW1wb3J0YW50O1xuLy8gICAgIGJveC1zaGFkb3c6IDAgM3B4IDJweCByZ2JhKDIzMywgMjM2LCAyMzksIDAuMDUpICFpbXBvcnRhbnQ7XG4vLyAgICAgbGluZS1oZWlnaHQ6IDEuNSAhaW1wb3J0YW50O1xuLy8gICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XG4vLyAgICAgY29sb3I6ICMwMGE2NTE7XG4gICAgXG4vLyB9XG5cbi5zdWNjZXNze1xuICAgIGNvbG9yOiAjMDBhNjUxO1xufVxuXG4uY2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFREVEO1xufVxuXG4iXX0= */";
      /***/
    },

    /***/
    72327: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dashboard()\" >\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <!-- <ion-back-button defaultHref=\"/dashboard\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-text color=\"warning\">\n      <h3>\n        <strong class=\"ion-text-uppercase bold\">\n          PENYATA UNTUNG/RUGI\n        </strong>\n      </h3>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <!-- <div class=\"rectangle-280\"></div> -->\n\n  <div class=\"bg-white\">\n\n    <div style=\"width: 100%; height:23%;\">\n\n      <form [formGroup]=\"form\" action=\"\" (ngSubmit)=\"logform()\">\n\n        <ion-card>\n          <ion-card-content class=\"no-padding test\">\n\n            <ion-item>\n              <ion-label>Bulan</ion-label>\n              <ion-select formControlName=\"bulan\" >\n                <ion-select-option value=\"1\">Januari</ion-select-option>\n                <ion-select-option value=\"2\">Februari</ion-select-option>\n                <ion-select-option value=\"3\">Mac</ion-select-option>\n                <ion-select-option value=\"4\">April</ion-select-option>\n                <ion-select-option value=\"5\">Mei</ion-select-option>\n                <ion-select-option value=\"6\">Jun</ion-select-option>\n                <ion-select-option value=\"7\">Julai</ion-select-option>\n                <ion-select-option value=\"8\">Ogos</ion-select-option>\n                <ion-select-option value=\"9\">September</ion-select-option>\n                <ion-select-option value=\"10\">Oktober</ion-select-option>\n                <ion-select-option value=\"11\">November</ion-select-option>\n                <ion-select-option value=\"12\">Disember</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n          <ion-card-content class=\"no-padding test\">\n          \n            <ion-item>\n              <ion-label>Tahun</ion-label>\n              <ion-select formControlName=\"tahun\" >\n                <ion-select-option *ngFor=\"let year of listYear\" value=\"{{year}}\">{{year}}</ion-select-option>\n\n              </ion-select>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n\n        <div style=\"width: 100%; display:flex; justify-content:flex-end\">\n   \n          <ion-button size=\"small\" color=\"warning\" [disabled]=\"form.invalid\" type=\"submit\">Cari\n          </ion-button>\n        </div>\n\n\n\n      </form>\n\n\n    </div>\n\n    <div style=\"width: 100%; height:77%; overflow:scroll; margin-top:25px\">\n\n\n      <div *ngFor=\"let p of pnl\">\n\n        <ion-grid fixed>\n          <ion-row>\n            <ion-col size=\"6\">\n              <div  class=\"rectangle-1\" style=\"height: 100px;\">\n                \n                <div style=\"height: 50%;\">\n                  <h6 class=\"bold\">HASIL JUALAN</h6>\n                </div>\n                <div style=\"height: 30%;\">\n                  <span class=\"no-margin\">RM {{p.hasil_jualan | number:'1.2-2':'en-US'}}</span>\n                </div>\n                \n              </div>\n            </ion-col>\n            <ion-col size=\"6\">\n              <div  class=\"rectangle-1\" style=\"height: 100px;\">\n\n                <div style=\"height: 50%;\">\n                  <h6 class=\"bold\">KOS JUALAN (COGS)</h6>\n                </div>\n                <div style=\"height: 30%;\">\n                  <span class=\"no-margin\">RM  {{p.kos_jualan | number:'1.2-2':'en-US'}}</span>\n                </div>\n                \n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"6\">\n              <div  class=\"rectangle-1\" style=\"height: 100px;\">\n                \n                <div style=\"height: 50%;\">\n                  <h6 class=\"bold\">OPEX</h6>\n                </div>\n                <div style=\"height: 30%;\">\n                  <span class=\"no-margin\">RM {{p.opex | number:'1.2-2':'en-US'}}</span>\n                </div>\n              </div>\n            </ion-col>\n            <ion-col size=\"6\">\n              <div  class=\"rectangle-1\" style=\"height: 100px;\">\n                \n                \n                <div style=\"height: 50%;\">\n                  <h6 class=\"bold\">UNTUNG/RUGI KASAR</h6>\n                </div>\n                <div style=\"height: 30%;\">\n                  <span class=\"no-margin\">RM {{p.untung_rugi_kasar | number:'1.2-2':'en-US'}} </span>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div style=\"width: 100%; display:flex; justify-content:flex-end\">\n                <ion-button size=\"small\" color=\"warning\"  (click)=\"printPdfCustom()\">PDF</ion-button>\n                <ion-button size=\"small\" color=\"warning\" (click)=\"printExcelCustom()\">Excel\n                </ion-button>\n              </div>\n            </ion-col>\n           \n          </ion-row>\n        </ion-grid>\n       \n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_core_pnl_pnl_module_ts-es5.js.map