(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_buku-tunai_buku-tunai_module_ts"], {
    /***/
    37122: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BukuTunaiPageRoutingModule": function BukuTunaiPageRoutingModule() {
          return (
            /* binding */
            _BukuTunaiPageRoutingModule
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


      var _buku_tunai_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./buku-tunai.page */
      51916);

      var routes = [{
        path: '',
        component: _buku_tunai_page__WEBPACK_IMPORTED_MODULE_0__.BukuTunaiPage
      }];

      var _BukuTunaiPageRoutingModule = function BukuTunaiPageRoutingModule() {
        _classCallCheck(this, BukuTunaiPageRoutingModule);
      };

      _BukuTunaiPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _BukuTunaiPageRoutingModule);
      /***/
    },

    /***/
    62967: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BukuTunaiPageModule": function BukuTunaiPageModule() {
          return (
            /* binding */
            _BukuTunaiPageModule
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


      var _buku_tunai_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./buku-tunai-routing.module */
      37122);
      /* harmony import */


      var _buku_tunai_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./buku-tunai.page */
      51916);

      var _BukuTunaiPageModule = function BukuTunaiPageModule() {
        _classCallCheck(this, BukuTunaiPageModule);
      };

      _BukuTunaiPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _buku_tunai_routing_module__WEBPACK_IMPORTED_MODULE_0__.BukuTunaiPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_buku_tunai_page__WEBPACK_IMPORTED_MODULE_1__.BukuTunaiPage]
      })], _BukuTunaiPageModule);
      /***/
    },

    /***/
    51916: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BukuTunaiPage": function BukuTunaiPage() {
          return (
            /* binding */
            _BukuTunaiPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_buku_tunai_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./buku-tunai.page.html */
      95544);
      /* harmony import */


      var _buku_tunai_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./buku-tunai.page.scss */
      71980);
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

      var _BukuTunaiPage = /*#__PURE__*/function () {
        // bulan = new Date()
        function BukuTunaiPage(formBuilder, pdfExcelService, iab, router) {
          _classCallCheck(this, BukuTunaiPage);

          this.formBuilder = formBuilder;
          this.pdfExcelService = pdfExcelService;
          this.iab = iab;
          this.router = router;
          this.date = new Date();
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
          this.form = this.formBuilder.group({
            id: [''],
            bulan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            tahun: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
          });
        }

        _createClass(BukuTunaiPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.user_id = window.sessionStorage.getItem("user_id"); // console.log("AAAAA", this.date.getMonth() + 1);
            // console.log("BBB", this.date.getFullYear());

            this.month = this.date.getMonth() + 1;
            this.year = Number(this.date.getFullYear());

            for (var i = 0; i <= 30; i++) {
              this.listYear.push(this.year);
              this.year = this.year - 1;
            }
          }
        }, {
          key: "logForm",
          value: function logForm() {
            console.log(this.form.value);
          }
        }, {
          key: "printExcelCustom",
          value: function printExcelCustom() {
            var _this = this;

            this.form.value.id = this.user_id;
            console.log(this.form.value);
            this.pdfExcelService.bukuTunaiExcel(this.form.value).subscribe(function (res) {
              console.log("res", res);
              var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'storage/' + res;
              console.log(url); // window.open(url, "_blank");

              var browser = _this.iab.create(url, '_system');
            });
          }
        }, {
          key: "printPdfCustom",
          value: function printPdfCustom() {
            var _this2 = this;

            this.form.value.id = this.user_id;
            console.log(this.form.value);
            this.pdfExcelService.bukuTunaiPdf(this.form.value).subscribe(function (res) {
              console.log("res", res);
              var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'storage/' + res;
              console.log(url); // window.open(url, "_blank");

              var browser = _this2.iab.create(url, '_system');
            });
          }
        }, {
          key: "printExcel",
          value: function printExcel(bulan) {
            var _this3 = this;

            this.form.value.id = this.user_id;
            this.form.value.bulan = bulan;
            this.form.value.tahun = this.date.getFullYear();
            console.log(this.form.value);
            this.pdfExcelService.bukuTunaiExcel(this.form.value).subscribe(function (res) {
              console.log("res", res);
              var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'storage/' + res;
              console.log(url); // window.open(url, "_blank");

              var browser = _this3.iab.create(url, '_system');
            });
          }
        }, {
          key: "printPdf",
          value: function printPdf(bulan) {
            var _this4 = this;

            this.form.value.id = this.user_id;
            this.form.value.bulan = bulan;
            this.form.value.tahun = this.date.getFullYear();
            console.log(this.form.value);
            this.pdfExcelService.bukuTunaiPdf(this.form.value).subscribe(function (res) {
              console.log("res", res);
              var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'storage/' + res;
              console.log(url); // window.open(url, "_blank");

              var browser = _this4.iab.create(url, '_system');
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

        return BukuTunaiPage;
      }();

      _BukuTunaiPage.ctorParameters = function () {
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

      _BukuTunaiPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-buku-tunai',
        template: _raw_loader_buku_tunai_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_buku_tunai_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _BukuTunaiPage);
      /***/
    },

    /***/
    71980: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bold,\nh1 {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n\n.no-padding {\n  padding: 0px !important;\n}\n\n.no-margin {\n  margin: 0px !important;\n}\n\n.rectangle-280 {\n  background-color: #00a651;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n\n.bg-white {\n  background-color: white;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  min-width: 100%;\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.rectangle-1 {\n  background-color: #FF6600;\n  border-radius: 18px;\n  box-shadow: 0px 4px 4px #00000040;\n  font-family: \"Nunito Sans\";\n  height: 125px;\n  width: 100%;\n  padding-left: 5%;\n  padding-right: 5%;\n  padding-top: 2%;\n  margin-bottom: 5%;\n}\n\n.success {\n  color: #00a651;\n}\n\n.card {\n  background-color: #EDEDED;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1a3UtdHVuYWkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGlCQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFDQTtFQUNJLHVCQUFBO0FBRUo7O0FBQ0E7RUFDSSxzQkFBQTtBQUVKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUVBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFvQkE7RUFDSSxjQUFBO0FBakJKOztBQW9CQTtFQUNJLHlCQUFBO0FBakJKIiwiZmlsZSI6ImJ1a3UtdHVuYWkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvbGQsXG5oMSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcbn1cbi5uby1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLm5vLW1hcmdpbiB7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnJlY3RhbmdsZS0yODAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGE2NTE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLmJnLXdoaXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMHB4IDBweCA0MHB4IDQwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICAvLyBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucmVjdGFuZ2xlLTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjY2MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAjMDAwMDAwNDA7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcbiAgICBoZWlnaHQ6IDEyNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgIHBhZGRpbmctdG9wOiAyJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLy8gaW9uLWl0ZW0sXG4vLyAudGVzdCB7XG4vLyAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjc1cmVtICFpbXBvcnRhbnQ7XG4vLyAgICAgLS1wYWRkaW5nLXRvcDogMC42MjVyZW0gIWltcG9ydGFudDtcbi8vICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjODg5OGFhO1xuLy8gICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFREVEICFpbXBvcnRhbnQ7XG4vLyAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gIWltcG9ydGFudDtcbi8vICAgICBib3gtc2hhZG93OiAwIDNweCAycHggcmdiYSgyMzMsIDIzNiwgMjM5LCAwLjA1KSAhaW1wb3J0YW50O1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAxLjUgIWltcG9ydGFudDtcbi8vICAgICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiO1xuLy8gICAgIGNvbG9yOiAjMDBhNjUxO1xuICAgIFxuLy8gfVxuXG4uc3VjY2Vzc3tcbiAgICBjb2xvcjogIzAwYTY1MTtcbn1cblxuLmNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VERURFRDtcbn1cblxuIl19 */";
      /***/
    },

    /***/
    95544: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dashboard()\" >\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <!-- <ion-back-button defaultHref=\"/dashboard\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-text color=\"warning\">\n      <h1>\n        <strong class=\"ion-text-uppercase bold\">\n          BUKU TUNAI\n        </strong>\n      </h1>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <!-- <div class=\"rectangle-280\"></div> -->\n\n  <div class=\"bg-white\">\n\n    <div style=\"width: 100%; height:23%; background-color:azure\">\n\n      <form [formGroup]=\"form\" action=\"\">\n\n        <ion-card>\n          <ion-card-content class=\"no-padding test\">\n\n            <!-- <ion-item (click)=\"showPicker = !showPicker\">\n            <ion-label class=\"bold success\">Bulan</ion-label> \n            <ion-text slot=\"end\">\n              {{ bulan }}\n            </ion-text>\n            <ion-datetime presentation=\"month\" class=\"success\" display-format=\"MMMM\" picker-format=\"MMMM\" [(ngModel)]=\"month\"></ion-datetime>\n           </ion-item> -->\n\n            <ion-item>\n              <ion-label>Bulan</ion-label>\n              <ion-select formControlName=\"bulan\">\n                <ion-select-option value=\"1\">Januari</ion-select-option>\n                <ion-select-option value=\"2\">Februari</ion-select-option>\n                <ion-select-option value=\"3\">Mac</ion-select-option>\n                <ion-select-option value=\"4\">April</ion-select-option>\n                <ion-select-option value=\"5\">Mei</ion-select-option>\n                <ion-select-option value=\"6\">Jun</ion-select-option>\n                <ion-select-option value=\"7\">Julai</ion-select-option>\n                <ion-select-option value=\"8\">Ogos</ion-select-option>\n                <ion-select-option value=\"9\">September</ion-select-option>\n                <ion-select-option value=\"10\">Oktober</ion-select-option>\n                <ion-select-option value=\"11\">November</ion-select-option>\n                <ion-select-option value=\"12\">Disember</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n          <ion-card-content class=\"no-padding test\">\n            <!-- <ion-item>\n            <ion-label class=\"bold success\">Tahun</ion-label> -->\n            <!-- <ion-datetime presentation=\"\" class=\"success\" display-format=\"YYYY\" picker-format=\"YYYY\" [(ngModel)]=\"year\"></ion-datetime> -->\n            <!-- </ion-item> -->\n\n            <ion-item>\n              <ion-label>Tahun</ion-label>\n              <ion-select formControlName=\"tahun\">\n                <ion-select-option *ngFor=\"let year of listYear\" value=\"{{year}}\">{{year}}</ion-select-option>\n\n              </ion-select>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n\n        <div style=\"width: 100%; display:flex; justify-content:flex-end\">\n          <ion-button size=\"small\" color=\"warning\" [disabled]=\"form.invalid\" (click)=\"printPdfCustom()\">PDF</ion-button>\n          <ion-button size=\"small\" color=\"warning\" [disabled]=\"form.invalid\" (click)=\"printExcelCustom()\">Excel\n          </ion-button>\n        </div>\n\n\n\n      </form>\n\n\n    </div>\n\n    <div style=\"width: 100%; height:77%; overflow:scroll; margin-top:40px\">\n\n\n      <div *ngFor=\"let listMonth of listMonth; index as i; \">\n        <div class=\"rectangle-1\" *ngIf=\"i < month\">\n\n          <ion-text color=\"light\">\n            <h3 class=\"bold\">BUKU TUNAI</h3>\n          </ion-text>\n          <h5 class=\"no-margin\">{{listMonth.name}} {{date.getFullYear()}}</h5>\n\n          <!-- <ion-button size=\"small\" color=\"success\" type=\"submit\">PDF</ion-button> -->\n          <div style=\"width: 100%; height:30%;  display:flex; justify-content:flex-end;\">\n            <img src=\"assets/icon/download-excel-button-white.png\" alt=\"\" height=\"100%\" (click)=\"printExcel(listMonth.value)\">\n\n            <img src=\"assets/icon/download-PDF-button-white.png\" alt=\"\" height=\"100%\" (click)=\"printPdf(listMonth.value)\">\n\n            <!-- <img src=\"assets/icon/SHARE-BUTTON-ICON.png\" alt=\"\" height=\"100%\" (click)=\"share()\"> -->\n\n          </div>\n\n\n\n        </div>\n      </div>\n\n\n    </div>\n\n  </div>\n\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_core_buku-tunai_buku-tunai_module_ts-es5.js.map