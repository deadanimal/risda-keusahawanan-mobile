(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["default-src_app_core_modal_tambah-tunai-masuk_tambah-tunai-masuk_page_ts"], {
    /***/
    29309: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TambahTunaiMasukPage": function TambahTunaiMasukPage() {
          return (
            /* binding */
            _TambahTunaiMasukPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tambah_tunai_masuk_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tambah-tunai-masuk.page.html */
      1465);
      /* harmony import */


      var _tambah_tunai_masuk_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tambah-tunai-masuk.page.scss */
      29224);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_app_services_kategoriAliran_kategori_aliran_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/kategoriAliran/kategori-aliran.service */
      92478);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var src_app_services_Aliran_aliran_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/Aliran/aliran.service */
      72311);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__); // import { File } from '@ionic-native/file';


      var _TambahTunaiMasukPage = /*#__PURE__*/function () {
        function TambahTunaiMasukPage(modalController, formBuilder, kategoriAliranService, aliranService, router) {
          _classCallCheck(this, TambahTunaiMasukPage);

          this.modalController = modalController;
          this.formBuilder = formBuilder;
          this.kategoriAliranService = kategoriAliranService;
          this.aliranService = aliranService;
          this.router = router;
          this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
          this.user_id = window.sessionStorage.getItem("user_id");
          this.tunai_masuk = this.formBuilder.group({
            id_pengguna: [''],
            id_kategori_aliran: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            tarikh_aliran: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            keterangan_aliran: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            jumlah_aliran: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            dokumen_lampiran: ['']
          });
        }

        _createClass(TambahTunaiMasukPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getKategoriAliran();
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            // using the injected ModalController this page
            // can "dismiss" itself and optionally pass back data
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }, {
          key: "logForm",
          value: function logForm() {
            var _this = this;

            this.tunai_masuk.value.id_pengguna = this.user_id;
            this.tunai_masuk.value.tarikh_aliran = moment__WEBPACK_IMPORTED_MODULE_4__(this.tunai_masuk.value.tarikh_aliran).format('YYYY-MM-DD');
            console.log(this.tunai_masuk.value);
            this.aliranService.post(this.tunai_masuk.value).subscribe(function (res) {
              console.log("res", res);

              _this.refresh();

              _this.dismiss();
            });
          }
        }, {
          key: "getKategoriAliran",
          value: function getKategoriAliran() {
            var _this2 = this;

            this.kategoriAliranService.getKategoriAliran().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (x) {
              return x.filter(function (i) {
                return i.jenis_aliran == "tunai_masuk";
              });
            })).subscribe(function (res) {
              console.log("kategori aliran", res);
              _this2.kategori_aliran_masuk = res;
              console.log("kategori aliran", _this2.kategori_aliran_masuk);
            });
          }
        }, {
          key: "refresh",
          value: function refresh() {
            window.location.reload();
          }
        }, {
          key: "doSomething",
          value: function doSomething() {
            console.log(this.tunai_masuk.value.tarikh_aliran);
            console.log('date', moment__WEBPACK_IMPORTED_MODULE_4__(this.tunai_masuk.value.tarikh_aliran).format('YYYY-MM-DD')); // 2019-04-22
            // this.tunai_masuk.value.tarikh_aliran = moment(this.tunai_masuk.value.tarikh_aliran).format('YYYY-MM-DD');
          }
        }]);

        return TambahTunaiMasukPage;
      }();

      _TambahTunaiMasukPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }, {
          type: src_app_services_kategoriAliran_kategori_aliran_service__WEBPACK_IMPORTED_MODULE_2__.KategoriAliranService
        }, {
          type: src_app_services_Aliran_aliran_service__WEBPACK_IMPORTED_MODULE_3__.AliranService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }];
      };

      _TambahTunaiMasukPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-tambah-tunai-masuk',
        template: _raw_loader_tambah_tunai_masuk_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tambah_tunai_masuk_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TambahTunaiMasukPage);
      /***/
    },

    /***/
    72311: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AliranService": function AliranService() {
          return (
            /* binding */
            _AliranService
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _AliranService = /*#__PURE__*/function () {
        function AliranService(http) {
          _classCallCheck(this, AliranService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/aliran";
        }

        _createClass(AliranService, [{
          key: "post",
          value: function post(data) {
            return this.http.post("".concat(this.url), data);
          }
        }, {
          key: "get",
          value: function get() {
            return this.http.get("".concat(this.url));
          }
        }, {
          key: "update",
          value: function update(aliran, aliran_id) {
            return this.http.put("".concat(this.url, "/").concat(aliran_id), aliran);
          }
        }, {
          key: "delete",
          value: function _delete(aliran_id) {
            return this.http["delete"]("".concat(this.url, "/").concat(aliran_id));
          }
        }]);

        return AliranService;
      }();

      _AliranService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _AliranService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _AliranService);
      /***/
    },

    /***/
    92478: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KategoriAliranService": function KategoriAliranService() {
          return (
            /* binding */
            _KategoriAliranService
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _KategoriAliranService = /*#__PURE__*/function () {
        function KategoriAliranService(http) {
          _classCallCheck(this, KategoriAliranService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/kategori_aliran";
        }

        _createClass(KategoriAliranService, [{
          key: "getKategoriAliran",
          value: function getKategoriAliran() {
            return this.http.get("".concat(this.url));
          }
        }]);

        return KategoriAliranService;
      }();

      _KategoriAliranService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _KategoriAliranService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _KategoriAliranService);
      /***/
    },

    /***/
    29224: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  padding: 10px;\n  margin-bottom: 50px;\n}\n\n.label {\n  padding: 10px;\n  margin-bottom: 50px;\n}\n\nion-datetime {\n  --background: #f5f5f5;\n  --padding-start: 0.75rem !important;\n  --padding-top: 0.625rem !important;\n  --placeholder-color: #8898aa;\n  --placeholder-font-weight: 400;\n  border: 1px solid #dee2e6 !important;\n  border-radius: 1rem !important;\n  box-shadow: 0 3px 2px rgba(233, 236, 239, 0.05) !important;\n  line-height: 1.5 !important;\n}\n\nion-select {\n  --background: #f5f5f5;\n  --padding-start: 0.75rem !important;\n  --padding-top: 0.625rem !important;\n  --placeholder-color: #8898aa;\n  --placeholder-font-weight: 400;\n  border: 1px solid #dee2e6 !important;\n  border-radius: 1rem !important;\n  box-shadow: 0 3px 2px rgba(233, 236, 239, 0.05) !important;\n  line-height: 1.5 !important;\n}\n\nion-label {\n  --color: #525f7f;\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding-bottom: 20px;\n}\n\n.jumlah {\n  font-size: 30px;\n  color: #00a651;\n}\n\nion-item {\n  --max-height: 16px;\n}\n\n.padding {\n  padding: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhbWJhaC10dW5haS1tYXN1ay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSwwREFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLDBEQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0FBQ0oiLCJmaWxlIjoidGFtYmFoLXR1bmFpLW1hc3VrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ubGFiZWwge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLXRvcDogMC42MjVyZW0gIWltcG9ydGFudDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjODg5OGFhO1xuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDJweCByZ2JhKDIzMywgMjM2LCAyMzksIDAuMDUpICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNSAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VsZWN0e1xuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNzVyZW0gIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctdG9wOiAwLjYyNXJlbSAhaW1wb3J0YW50O1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM4ODk4YWE7XG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMnB4IHJnYmEoMjMzLCAyMzYsIDIzOSwgMC4wNSkgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS41ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gICAgLS1jb2xvcjogIzUyNWY3ZjtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5qdW1sYWgge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogIzAwYTY1MTtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tbWF4LWhlaWdodDogMTZweDtcbn1cblxuLnBhZGRpbmd7XG4gICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi8vIGJ1dHRvbjpkaXNhYmxlZCxcbi8vIGJ1dHRvbltkaXNhYmxlZF0ge1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbi8vICAgICBjb2xvcjogIzY2NjY2Njtcbi8vIH1cbiJdfQ== */";
      /***/
    },

    /***/
    1465: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" (click)=\"dismiss()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"success\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            TUNAI MASUK\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <form [formGroup]=\"tunai_masuk\" (ngSubmit)=\"logForm()\" style=\"margin: 30px;\">\n    <ion-item class=\"form-control\">\n      <ion-label>Todo</ion-label>\n      <ion-input type=\"text\" formControlName=\"title\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Description</ion-label>\n      <ion-textarea formControlName=\"description\"></ion-textarea>\n    </ion-item>\n    <ion-button type=\"submit\" [disabled]=\"!tunai_masuk.valid\">Submit</ion-button>\n  </form> -->\n\n\n  <ion-grid>\n    <form [formGroup]=\"tunai_masuk\" (ngSubmit)=\"logForm()\" enctype=\"multipart/form-data\">\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\">KATEGORI ALIRAN <span style=\"color: red;\">*</span></ion-label>\n            <ion-select formControlName=\"id_kategori_aliran\" >\n              <ion-select-option *ngFor=\"let aliran_masuk of kategori_aliran_masuk\" value=\"{{aliran_masuk.id}}\">\n                {{aliran_masuk.nama_kategori_aliran}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" class=\"form-control\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\">TARIKH <span style=\"color: red;\">*</span></ion-label>\n            <!-- <ion-input type=\"date\" formControlName=\"title\"></ion-input> -->\n            <ion-datetime displayFormat=\"D/M/YYYY\" pickerFormat=\"D/M/YYYY\" formControlName=\"tarikh_aliran\"\n              (ionChange)=\"doSomething()\" style=\"background-color: #f5f5f5;\">\n            </ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" class=\"form-control\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\">KETERANGAN <span style=\"color: red;\">*</span></ion-label>\n            <ion-input type=\"text\" formControlName=\"keterangan_aliran\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-text-center\" style=\"display: flex; justify-content:center\">\n        <!-- <ion-col class=\"ion-text-center\"> -->\n        <p style=\"margin: 0px;\"> JUMLAH <span style=\"color: red;\">*</span></p><br>\n        <!-- </ion-col> -->\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 30px; border-bottom: 0.8px solid; margin-left:5%; margin-right:5%\">\n        <ion-col class=\"jumlah\" [size]=4 style=\"display:flex; justify-content:center; align-items:center\">\n          RM\n        </ion-col>\n        <ion-col [size]=8 class=\"ion-text-center\">\n          <!-- <ion-item class=\" ion-text-center\">\n            <ion-label class=\"jumlah\" style=\"margin-top:50px\">RM </ion-label> -->\n          <ion-input class=\"jumlah\" type=\"number\" placeholder=\"0.00\" formControlName=\"jumlah_aliran\"></ion-input>\n          <!-- </ion-item> -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-label>DOKUMEN LAMPIRAN</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\">\n            <ion-button color=\"success\" expand=\"block\" (click)=\"f.click()\">\n              PILIH DOKUMEN\n            </ion-button>\n            <input class=\"ion-hide\" #f type=\"file\" id=\"file-input\" formControlName=\"dokumen_lampiran\"\n              (change)=\"onFileChange($event)\">\n\n          </ion-item>\n\n          <!-- <label for=\"doc\">\n            <ion-button for=\"doc\" color=\"success\" expand=\"block\" for=\"doc\">PILIH DOKUMEN</ion-button>\n          </label> -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <!-- (click)=\"openmodal()\" -->\n          <ion-button color=\"success\" expand=\"block\" type=\"submit\" [disabled]=\"tunai_masuk.invalid\">TAMBAH TUNAI MASUK\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </ion-grid>\n\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_core_modal_tambah-tunai-masuk_tambah-tunai-masuk_page_ts-es5.js.map