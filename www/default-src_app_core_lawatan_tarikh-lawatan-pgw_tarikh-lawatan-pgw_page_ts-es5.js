(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["default-src_app_core_lawatan_tarikh-lawatan-pgw_tarikh-lawatan-pgw_page_ts"], {
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


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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
        }

        _createClass(CarianUsahawanPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.peranan = window.sessionStorage.getItem("peranan_pegawai");
            console.log("senarai", this.usahawans);
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }, {
          key: "selectDismiss",
          value: function selectDismiss() {
            console.log("usahawan", this.pilihUsahawan); // this.modalController.dismiss({
            //   'dismissed': true
            // });

            this.modalController.dismiss(this.pilihUsahawan);
          }
        }]);

        return CarianUsahawanPage;
      }();

      _CarianUsahawanPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
        }];
      };

      _CarianUsahawanPage.propDecorators = {
        usahawans: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _CarianUsahawanPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-carian-usahawan',
        template: _raw_loader_carian_usahawan_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_carian_usahawan_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CarianUsahawanPage);
      /***/
    },

    /***/
    27000: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TarikhLawatanPgwPage": function TarikhLawatanPgwPage() {
          return (
            /* binding */
            _TarikhLawatanPgwPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tarikh_lawatan_pgw_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tarikh-lawatan-pgw.page.html */
      38406);
      /* harmony import */


      var _tarikh_lawatan_pgw_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tarikh-lawatan-pgw.page.scss */
      33221);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      19122);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_services_lawatan_lawatan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/lawatan/lawatan.service */
      89765);
      /* harmony import */


      var _carian_usahawan_carian_usahawan_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../carian-usahawan/carian-usahawan.page */
      39542);

      var _TarikhLawatanPgwPage = /*#__PURE__*/function () {
        function TarikhLawatanPgwPage(modalController, formBuilder, router, lawatanService, alertController) {
          _classCallCheck(this, TarikhLawatanPgwPage);

          this.modalController = modalController;
          this.formBuilder = formBuilder;
          this.router = router;
          this.lawatanService = lawatanService;
          this.alertController = alertController;
          this.tempID = null;
          this.form = this.formBuilder.group({
            id_pengguna: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            id_pegawai: [''],
            tarikh_lawatan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            masa_lawatan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
          });
        }

        _createClass(TarikhLawatanPgwPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
            this.pegawai_id = window.sessionStorage.getItem("pegawai_id");
            this.user_id = window.sessionStorage.getItem("user_id");
            this.getSenaraiUsahawan();
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var tempDate, alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.form.value.tarikh_lawatan = moment__WEBPACK_IMPORTED_MODULE_2__(this.form.value.tarikh_lawatan).format('YYYY-MM-DD');
                      this.form.value.masa_lawatan = moment__WEBPACK_IMPORTED_MODULE_2__(this.form.value.masa_lawatan).format('HH:mm');
                      this.form.value.id_pegawai = this.pegawai_id;
                      console.log(this.form.value);
                      tempDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.form.value.tarikh_lawatan).format('DD/MM/YYYY');
                      _context.next = 7;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '',
                        message: 'Adakah anda pasti untuk mencadangkan tarikh ' + tempDate + ' untuk sesi lawatan?',
                        buttons: [{
                          text: 'Tidak',
                          role: 'cancel',
                          cssClass: 'secondary',
                          id: 'cancel-button',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Ya',
                          id: 'confirm-button',
                          handler: function handler() {
                            console.log('Confirm Okay');

                            _this.lawatanService.post(_this.form.value).subscribe(function (res) {
                              console.log("res", res);

                              _this.dismiss();

                              window.location.reload();
                            });
                          }
                        }]
                      });

                    case 7:
                      alert = _context.sent;
                      _context.next = 10;
                      return alert.present();

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getSenaraiUsahawan",
          value: function getSenaraiUsahawan() {
            var _this2 = this;

            this.lawatanService.getsenaraiusahawan(this.pegawai_id).subscribe(function (res) {
              console.log("usahawan", res);
              _this2.usahawan = res;
            });
          }
        }, {
          key: "openSenaraiUsahawan",
          value: function openSenaraiUsahawan() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var usahawans, modal, _yield$modal$onDidDis, usahawan;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log("AAAAAA", this.usahawan);
                      usahawans = this.usahawan;
                      _context2.next = 4;
                      return this.modalController.create({
                        component: _carian_usahawan_carian_usahawan_page__WEBPACK_IMPORTED_MODULE_4__.CarianUsahawanPage,
                        cssClass: 'my-custom-class',
                        componentProps: {
                          usahawans: usahawans
                        }
                      });

                    case 4:
                      modal = _context2.sent;
                      _context2.next = 7;
                      return modal.present();

                    case 7:
                      _context2.next = 9;
                      return modal.onDidDismiss();

                    case 9:
                      _yield$modal$onDidDis = _context2.sent;
                      usahawan = _yield$modal$onDidDis.data;

                      if (usahawan > 0) {
                        console.log("yeayyy", usahawan);
                        this.tempID = usahawan;
                        console.log("AAAAAA", this.tempID);
                        this.form.patchValue({
                          id_pengguna: usahawan
                        });
                      } else {
                        console.log("AAAAAA", this.tempID);
                        this.tempID == null;
                      }

                    case 12:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return TarikhLawatanPgwPage;
      }();

      _TarikhLawatanPgwPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: src_app_services_lawatan_lawatan_service__WEBPACK_IMPORTED_MODULE_3__.LawatanService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
        }];
      };

      _TarikhLawatanPgwPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-tarikh-lawatan-pgw',
        template: _raw_loader_tarikh_lawatan_pgw_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tarikh_lawatan_pgw_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TarikhLawatanPgwPage);
      /***/
    },

    /***/
    80662: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".list {\n  height: 80%;\n  overflow: scroll;\n  margin-bottom: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmlhbi11c2FoYXdhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBRUEsZ0JBQUE7RUFDQSxpQkFBQTtBQUFKIiwiZmlsZSI6ImNhcmlhbi11c2FoYXdhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdHtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG59Il19 */";
      /***/
    },

    /***/
    33221: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  padding: 10px;\n  margin-bottom: 50px;\n}\n\n.label {\n  padding: 10px;\n  margin-bottom: 50px;\n}\n\nion-datetime {\n  --background: #f5f5f5;\n  --padding-start: 0.75rem !important;\n  --padding-top: 0.625rem !important;\n  --placeholder-color: #8898aa;\n  --placeholder-font-weight: 400;\n  border: 1px solid #dee2e6 !important;\n  border-radius: 1rem !important;\n  box-shadow: 0 3px 2px rgba(233, 236, 239, 0.05) !important;\n  line-height: 1.5 !important;\n}\n\nion-select {\n  --background: #f5f5f5;\n  --padding-start: 0.75rem !important;\n  --padding-top: 0.625rem !important;\n  --placeholder-color: #8898aa;\n  --placeholder-font-weight: 400;\n  border: 1px solid #dee2e6 !important;\n  border-radius: 1rem !important;\n  box-shadow: 0 3px 2px rgba(233, 236, 239, 0.05) !important;\n  line-height: 1.5 !important;\n}\n\nion-label {\n  --color: #525f7f;\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding-bottom: 20px;\n}\n\n.jumlah {\n  font-size: 30px;\n  color: #00a651;\n}\n\nion-item {\n  --max-height: 16px;\n}\n\n.padding {\n  padding: 5px !important;\n}\n\nion-select {\n  width: 100%;\n}\n\nion-datetime {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhcmlraC1sYXdhdGFuLXBndy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSwwREFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLDBEQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoidGFyaWtoLWxhd2F0YW4tcGd3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ubGFiZWwge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLXRvcDogMC42MjVyZW0gIWltcG9ydGFudDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjODg5OGFhO1xuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDJweCByZ2JhKDIzMywgMjM2LCAyMzksIDAuMDUpICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNSAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VsZWN0e1xuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNzVyZW0gIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctdG9wOiAwLjYyNXJlbSAhaW1wb3J0YW50O1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM4ODk4YWE7XG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMnB4IHJnYmEoMjMzLCAyMzYsIDIzOSwgMC4wNSkgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS41ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gICAgLS1jb2xvcjogIzUyNWY3ZjtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5qdW1sYWgge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogIzAwYTY1MTtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tbWF4LWhlaWdodDogMTZweDtcbn1cblxuLnBhZGRpbmd7XG4gICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3R7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1kYXRldGltZXtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLy8gYnV0dG9uOmRpc2FibGVkLFxuLy8gYnV0dG9uW2Rpc2FibGVkXSB7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTk5OTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuLy8gICAgIGNvbG9yOiAjNjY2NjY2O1xuLy8gfVxuIl19 */";
      /***/
    },

    /***/
    24959: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Senarai Usahawan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"peranan != 7\" class=\"ion-padding\">\n\n  <ion-searchbar placeholder=\"Carian Usahawan\" [(ngModel)]=\"searchTerm\" showCancelButton=\"focus\"></ion-searchbar>\n\n\n  <!-- {{ usahawans }} -->\n  <div class=\"list\">\n    <ion-list>\n\n      <ion-radio-group [(ngModel)]=\"pilihUsahawan\">\n\n        <ion-item *ngFor=\"let usahawan of usahawans | filter:searchTerm\">\n          <!-- {{usahawan}} -->\n          <ion-label>{{usahawan.namausahawan}}</ion-label>\n          <ion-radio slot=\"start\" value=\"{{usahawan.id_pengguna}}\"></ion-radio>\n        </ion-item>\n\n      </ion-radio-group>\n    </ion-list>\n  </div>\n\n\n\n  <ion-button color=\"dark\" (click)=\"selectDismiss()\" expand=\"block\">\n    Pilih\n  </ion-button>\n  <ion-button color=\"warning\" (click)=\"dismiss()\" expand=\"block\">\n    <ion-text color=\"dark\">\n      Batal\n    </ion-text>\n  </ion-button>\n\n</ion-content>\n\n\n<ion-content *ngIf=\"peranan == 7\" class=\"ion-padding\">\n\n  <ion-searchbar placeholder=\"Carian Usahawan\" [(ngModel)]=\"searchTerm\" showCancelButton=\"focus\"></ion-searchbar>\n\n\n  <!-- {{ usahawans }} -->\n  <div class=\"list\">\n    <ion-list>\n\n      <ion-radio-group [(ngModel)]=\"pilihUsahawan\">\n\n        <ion-item *ngFor=\"let usahawan of usahawans | filter:searchTerm\">\n          <!-- {{usahawan}} -->\n          <ion-label>{{usahawan.name}}</ion-label>\n          <ion-radio slot=\"start\" value=\"{{usahawan.id_pengguna}}\"></ion-radio>\n        </ion-item>\n\n      </ion-radio-group>\n    </ion-list>\n  </div>\n\n\n\n  <ion-button color=\"dark\" (click)=\"selectDismiss()\" expand=\"block\">\n    Pilih\n  </ion-button>\n  <ion-button color=\"warning\" (click)=\"dismiss()\" expand=\"block\">\n    <ion-text color=\"dark\">\n      Batal\n    </ion-text>\n  </ion-button>\n\n</ion-content>";
      /***/
    },

    /***/
    38406: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"warning\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            TARIKH LAWATAN\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n  \n\n  <ion-grid>\n    <form [formGroup]=\"form\" (ngSubmit)=\"logForm()\" enctype=\"multipart/form-data\">\n      <!-- <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\"  mode=\"ios\">NAMA USAHAWAN</ion-label>\n            <ion-select formControlName=\"id_pengguna\">\n              <ion-select-option *ngFor=\"let usahawan of usahawan\" value=\"{{usahawan.id_pengguna}}\">\n                {{usahawan.name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row> -->\n\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" style=\"border: none;\" (click)=\"openSenaraiUsahawan()\">\n            <ion-label class=\"padding\" position=\"stacked\" mode=\"ios\">NAMA USAHAWAN <span style=\"color: red;\">*</span>\n            </ion-label>\n\n            <div *ngIf=\"tempID == null\" style=\"width: 100%;\">\n              <ion-input type=\"text\" placeholder=\"Pilih Usahawan\" style=\"width: 100%\"></ion-input>\n            </div>\n            <div *ngFor=\"let usahawan of usahawan\" style=\"width: 100%;\">\n\n              <div *ngIf=\"usahawan.id_pengguna == tempID; then content else other_content\" style=\"width: 100%;\">\n              </div>\n              <ng-template #content style=\"width: 100%;\">\n                <ion-input type=\"text\" formControlName=\"id_pengguna\" placeholder=\"Pilih Usahawan\" hidden></ion-input>\n                <ion-input readonly type=\"text\" value=\"{{usahawan.name}}\" placeholder=\"Pilih Usahawan\" style=\"width: 100%;\"></ion-input>\n              </ng-template>\n            </div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 15%;\"> \n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" class=\"form-control\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\"  mode=\"ios\">TARIKH </ion-label>\n            <!-- <ion-input type=\"date\" formControlName=\"title\"></ion-input> -->\n            <ion-datetime presentation=\"date\" displayFormat=\"YYYY-MM-DD\" formControlName=\"tarikh_lawatan\" style=\"background-color: #f5f5f5; width:100%\">\n            </ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" class=\"form-control\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\"  mode=\"ios\">MASA </ion-label>\n            <!-- <ion-input type=\"date\" formControlName=\"title\"></ion-input> -->\n            <ion-datetime displayFormat=\"HH:mm\" presentation=\"time\" formControlName=\"masa_lawatan\" style=\"background-color: #f5f5f5;\">\n            </ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <!-- (click)=\"openmodal()\" -->\n          <ion-button color=\"success\" expand=\"block\" type=\"submit\" [disabled]=\"form.invalid\" >TETAP TARIKH LAWATAN</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </ion-grid>\n\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_core_lawatan_tarikh-lawatan-pgw_tarikh-lawatan-pgw_page_ts-es5.js.map