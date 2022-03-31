(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["default-src_app_core_lawatan_carian-usahawan_carian-usahawan_page_ts"], {
    /***/
    39542: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CarianUsahawanPage": function CarianUsahawanPage() {
          return (
            /* binding */
            _CarianUsahawanPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_carian_usahawan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./carian-usahawan.page.html */
      24959);
      /* harmony import */


      var _carian_usahawan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./carian-usahawan.page.scss */
      80662);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      19122);

      var _CarianUsahawanPage = /*#__PURE__*/function () {
        function CarianUsahawanPage(modalController) {
          _classCallCheck(this, CarianUsahawanPage);

          this.modalController = modalController;
          this.usahawans = [{
            "id": 1,
            "name": "RUZLAN BIN ABDUL RAHMAN",
            "email": "iszmael97@gmail.com",
            "email_verified_at": null,
            "usahawanid": null,
            "idpegawai": 1,
            "status_pengguna": 1,
            "no_kp": "123456789015",
            "role": "1",
            "type": "1",
            "profile_status": 1,
            "created_at": "2022-03-24T06:52:30.000000Z",
            "updated_at": "2022-03-24T06:55:31.000000Z",
            "peranan": {
              "peranan_id": "1",
              "kod_peranan": "Super Admin",
              "nama_peranan": "Super Admin"
            }
          }, {
            "id": 2,
            "name": "ABD ZAHID BIN HAJI AHMAD",
            "email": "abdzahid@risda.gov.my",
            "email_verified_at": null,
            "usahawanid": null,
            "idpegawai": 2,
            "status_pengguna": 1,
            "no_kp": "670210000000",
            "role": "1",
            "type": "1",
            "profile_status": 0,
            "created_at": "2022-03-24T06:52:30.000000Z",
            "updated_at": "2022-03-24T06:52:30.000000Z",
            "peranan": {
              "peranan_id": "1",
              "kod_peranan": "Super Admin",
              "nama_peranan": "Super Admin"
            }
          }, {
            "id": 3,
            "name": "ABDUL HALIM BIN ABU HASSAN",
            "email": "a.halim@risda.gov.my",
            "email_verified_at": null,
            "usahawanid": null,
            "idpegawai": 3,
            "status_pengguna": 1,
            "no_kp": "700510000001",
            "role": "1",
            "type": "1",
            "profile_status": 0,
            "created_at": "2022-03-24T06:52:31.000000Z",
            "updated_at": "2022-03-24T06:52:31.000000Z",
            "peranan": {
              "peranan_id": "1",
              "kod_peranan": "Super Admin",
              "nama_peranan": "Super Admin"
            }
          }, {
            "id": 4,
            "name": "MAHANUM BT MAT RIPING",
            "email": "mahanum@risda.gov.my",
            "email_verified_at": null,
            "usahawanid": null,
            "idpegawai": 4,
            "status_pengguna": 1,
            "no_kp": "700510000000",
            "role": "1",
            "type": "1",
            "profile_status": 0,
            "created_at": "2022-03-24T06:52:31.000000Z",
            "updated_at": "2022-03-24T06:52:31.000000Z",
            "peranan": {
              "peranan_id": "1",
              "kod_peranan": "Super Admin",
              "nama_peranan": "Super Admin"
            }
          }, {
            "id": 5,
            "name": "AB GHAFFAR B AB WAHAB",
            "email": "abgaffarenterprise@gmail.com",
            "email_verified_at": null,
            "usahawanid": "J00001",
            "idpegawai": null,
            "status_pengguna": 0,
            "no_kp": "690707015611",
            "role": null,
            "type": "2",
            "profile_status": 0,
            "created_at": null,
            "updated_at": null,
            "peranan": null
          }, {
            "id": 6,
            "name": "ABD WAHAB BIN JANTAN",
            "email": "",
            "email_verified_at": null,
            "usahawanid": "J00002",
            "idpegawai": null,
            "status_pengguna": 0,
            "no_kp": "610602015217",
            "role": null,
            "type": "2",
            "profile_status": 0,
            "created_at": null,
            "updated_at": null,
            "peranan": null
          }, {
            "id": 7,
            "name": "ABDUL HADI BIN MASIRON ",
            "email": "adieahm24@gmail.com",
            "email_verified_at": null,
            "usahawanid": "J00003",
            "idpegawai": null,
            "status_pengguna": 0,
            "no_kp": "840924017163",
            "role": null,
            "type": "2",
            "profile_status": 0,
            "created_at": null,
            "updated_at": null,
            "peranan": null
          }, {
            "id": 8,
            "name": "ABDUL MUEIZ BIN KAMSER",
            "email": "abdulmueizkamser@gmail.com",
            "email_verified_at": null,
            "usahawanid": "J00004",
            "idpegawai": null,
            "status_pengguna": 0,
            "no_kp": "860222235447",
            "role": null,
            "type": "2",
            "profile_status": 0,
            "created_at": null,
            "updated_at": null,
            "peranan": null
          }, {
            "id": 9,
            "name": "ABDUL RAHIM BIN TAIB",
            "email": "aimniaga2587@gmail.com",
            "email_verified_at": null,
            "usahawanid": "J00005",
            "idpegawai": null,
            "status_pengguna": 0,
            "no_kp": "740130016005",
            "role": null,
            "type": "2",
            "profile_status": 0,
            "created_at": null,
            "updated_at": null,
            "peranan": null
          }, {
            "id": 10,
            "name": "ABDUL RAHMAN BIN MOHD LAZIM",
            "email": "",
            "email_verified_at": null,
            "usahawanid": "J00006",
            "idpegawai": null,
            "status_pengguna": 0,
            "no_kp": "870302235219",
            "role": null,
            "type": "2",
            "profile_status": 0,
            "created_at": null,
            "updated_at": null,
            "peranan": null
          }, {
            "id": 11,
            "name": "ABDUL RAZAK BIN HARU",
            "email": "",
            "email_verified_at": null,
            "usahawanid": "J00007",
            "idpegawai": null,
            "status_pengguna": 0,
            "no_kp": "620522015849",
            "role": null,
            "type": "2",
            "profile_status": 0,
            "created_at": null,
            "updated_at": null,
            "peranan": null
          }, {
            "id": 12,
            "name": "ABDUL SAMAD BIN WAGIMAN",
            "email": "asdila7172@gmail.com",
            "email_verified_at": null,
            "usahawanid": "J00008",
            "idpegawai": null,
            "status_pengguna": 0,
            "no_kp": "720107015313",
            "role": null,
            "type": "2",
            "profile_status": 0,
            "created_at": null,
            "updated_at": null,
            "peranan": null
          }, {
            "id": 13,
            "name": "ABDULLAH BIN SALEHODDIN",
            "email": "paklahfoodindustry@yahoo.com",
            "email_verified_at": null,
            "usahawanid": "J00009",
            "idpegawai": null,
            "status_pengguna": 0,
            "no_kp": "750619016755",
            "role": null,
            "type": "2",
            "profile_status": 0,
            "created_at": null,
            "updated_at": null,
            "peranan": null
          }, {
            "id": 14,
            "name": "ABU BAKAR BIN ABD SAMAD",
            "email": "adonabubakar@gmail.com",
            "email_verified_at": null,
            "usahawanid": "J00010",
            "idpegawai": null,
            "status_pengguna": 0,
            "no_kp": "580517015875",
            "role": null,
            "type": "2",
            "profile_status": 0,
            "created_at": null,
            "updated_at": null,
            "peranan": null
          }, {
            "id": 14,
            "name": "ABU BAKAR BIN ABD SAMAD",
            "email": "adonabubakar@gmail.com",
            "email_verified_at": null,
            "usahawanid": "J00010",
            "idpegawai": null,
            "status_pengguna": 0,
            "no_kp": "580517015875",
            "role": null,
            "type": "2",
            "profile_status": 0,
            "created_at": null,
            "updated_at": null,
            "peranan": null
          }, {
            "id": 14,
            "name": "ABU BAKAR BIN ABD SAMAD",
            "email": "adonabubakar@gmail.com",
            "email_verified_at": null,
            "usahawanid": "J00010",
            "idpegawai": null,
            "status_pengguna": 0,
            "no_kp": "580517015875",
            "role": null,
            "type": "2",
            "profile_status": 0,
            "created_at": null,
            "updated_at": null,
            "peranan": null
          }, {
            "id": 14,
            "name": "ABU BAKAR BIN ABD SAMAD",
            "email": "adonabubakar@gmail.com",
            "email_verified_at": null,
            "usahawanid": "J00010",
            "idpegawai": null,
            "status_pengguna": 0,
            "no_kp": "580517015875",
            "role": null,
            "type": "2",
            "profile_status": 0,
            "created_at": null,
            "updated_at": null,
            "peranan": null
          }];
        }

        _createClass(CarianUsahawanPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }, {
          key: "selectDismiss",
          value: function selectDismiss(usahawan) {
            console.log("usahawan", usahawan); // this.modalController.dismiss({
            //   'dismissed': true
            // });
          }
        }]);

        return CarianUsahawanPage;
      }();

      _CarianUsahawanPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
        }];
      };

      _CarianUsahawanPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-carian-usahawan',
        template: _raw_loader_carian_usahawan_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_carian_usahawan_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CarianUsahawanPage);
      /***/
    },

    /***/
    80662: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".list {\n  height: 80%;\n  background-color: aqua;\n  overflow: scroll;\n  margin-bottom: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmlhbi11c2FoYXdhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoiY2FyaWFuLXVzYWhhd2FuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0e1xuICAgIGhlaWdodDogODAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbn0iXX0= */";
      /***/
    },

    /***/
    24959: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Senarai Usahawan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-searchbar placeholder=\"Carian Usahawan\" [(ngModel)]=\"searchTerm\" showCancelButton=\"focus\"></ion-searchbar>\n\n  <div class=\"list\">\n    <ion-list>\n\n      <ion-radio-group>\n\n        <ion-item *ngFor=\"let usahawan of usahawans | filter:searchTerm\">\n          <ion-label>{{ usahawan.name }}</ion-label>\n          <ion-radio slot=\"start\" value=\"{{ usahawan.name }}\" (onChange)=\"selectDismiss(usahawan)\"></ion-radio>\n        </ion-item>\n\n      </ion-radio-group>\n    </ion-list>\n  </div>\n\n\n\n\n  <ion-button color=\"warning\" (click)=\"dismiss()\" expand=\"block\">\n    <ion-text color=\"dark\">\n      Batal\n    </ion-text>\n\n  </ion-button>\n  <ion-button color=\"dark\" (click)=\"dismiss()\" expand=\"block\">\n      Pilih\n  </ion-button>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_core_lawatan_carian-usahawan_carian-usahawan_page_ts-es5.js.map