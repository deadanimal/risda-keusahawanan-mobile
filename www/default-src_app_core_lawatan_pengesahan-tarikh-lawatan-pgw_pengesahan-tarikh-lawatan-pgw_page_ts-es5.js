(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["default-src_app_core_lawatan_pengesahan-tarikh-lawatan-pgw_pengesahan-tarikh-lawatan-pgw_page_ts"], {
    /***/
    31453: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PengesahanTarikhLawatanPgwPage": function PengesahanTarikhLawatanPgwPage() {
          return (
            /* binding */
            _PengesahanTarikhLawatanPgwPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_pengesahan_tarikh_lawatan_pgw_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./pengesahan-tarikh-lawatan-pgw.page.html */
      59940);
      /* harmony import */


      var _pengesahan_tarikh_lawatan_pgw_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pengesahan-tarikh-lawatan-pgw.page.scss */
      69406);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      19122);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_lawatan_lawatan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/lawatan/lawatan.service */
      89765);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);

      var _PengesahanTarikhLawatanPgwPage = /*#__PURE__*/function () {
        function PengesahanTarikhLawatanPgwPage(modalController, formBuilder, loadingController, alertController, router, lawatanService) {
          _classCallCheck(this, PengesahanTarikhLawatanPgwPage);

          this.modalController = modalController;
          this.formBuilder = formBuilder;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.router = router;
          this.lawatanService = lawatanService;
          this.pegawai_id = window.sessionStorage.getItem("pegawai_id");
          this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
          this.user_id = window.sessionStorage.getItem("user_id");
          this.form = this.formBuilder.group({
            namausahawan: [''],
            nama_pegawai: [''],
            tarikh_lawatan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            masa_lawatan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            status_lawatan: [''],
            role: [''],
            id_pegawai: [''],
            id_pengguna: ['']
          });
        }

        _createClass(PengesahanTarikhLawatanPgwPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.lawatan);
            this.setFormValues();
          }
        }, {
          key: "setFormValues",
          value: function setFormValues() {
            this.form.patchValue({
              namausahawan: this.lawatan.namausahawan,
              nama_pegawai: this.lawatan.nama_pegawai,
              tarikh_lawatan: this.lawatan.tarikh_lawatan,
              masa_lawatan: this.lawatan.masa_lawatan,
              status_lawatan: this.lawatan.status_lawatan
            });
            this.form.updateValueAndValidity();
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var tempDate, alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // if (this.pegawai_id == null) {
                      //   //usahawan
                      //   this.form.value.status_lawatan = "2"
                      // } else {
                      //   //pegawai
                      //   this.form.value.status_lawatan = "1"
                      // }
                      this.form.value.tarikh_lawatan = moment__WEBPACK_IMPORTED_MODULE_3__(this.form.value.tarikh_lawatan).format('YYYY-MM-DD'); // this.form.value.masa_lawatan = moment(this.form.value.masa_lawatan).format('hh:mm:ss[.nnnnnnn]');

                      if (this.usahawan_id != null) {
                        this.form.patchValue({
                          role: "usahawan",
                          id_pengguna: this.lawatan.id_pengguna,
                          id_pegawai: this.lawatan.id_pegawai,
                          status_lawatan: 2
                        });
                      } else {
                        this.form.patchValue({
                          role: "pegawai",
                          id_pengguna: this.lawatan.id_pengguna,
                          id_pegawai: this.lawatan.id_pegawai,
                          status_lawatan: 1
                        });
                      }

                      console.log(this.form.value);
                      tempDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.form.value.tarikh_lawatan).format('DD/MM/YYYY');
                      _context.next = 6;
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

                            _this.lawatanService.update(_this.form.value, _this.lawatan.lawatan_id).subscribe(function (res) {
                              console.log("res", res);

                              _this.dismiss();

                              window.location.reload();
                            });
                          }
                        }]
                      });

                    case 6:
                      alert = _context.sent;
                      _context.next = 9;
                      return alert.present();

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "sahkan",
          value: function sahkan() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var tempDate, alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      // this.form.value.status_lawatan = "3"
                      if (this.usahawan_id != null) {
                        this.form.patchValue({
                          role: "usahawan",
                          id_pengguna: this.lawatan.id_pengguna,
                          id_pegawai: this.lawatan.id_pegawai,
                          status_lawatan: 3
                        });
                      } else {
                        this.form.patchValue({
                          role: "pegawai",
                          id_pengguna: this.lawatan.id_pengguna,
                          id_pegawai: this.lawatan.id_pegawai,
                          status_lawatan: 3
                        });
                      }

                      console.log(this.form.value);
                      tempDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.lawatan.tarikh_lawatan).format('DD/MM/YYYY');
                      _context2.next = 5;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '',
                        message: 'Adakah anda pasti untuk mengesahkan tarikh ' + tempDate + ' untuk sesi lawatan?',
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

                            _this2.lawatanService.update(_this2.form.value, _this2.lawatan.lawatan_id).subscribe(function (res) {
                              console.log("res", res);

                              _this2.dismiss();

                              window.location.reload();
                            });
                          }
                        }]
                      });

                    case 5:
                      alert = _context2.sent;
                      _context2.next = 8;
                      return alert.present();

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return PengesahanTarikhLawatanPgwPage;
      }();

      _PengesahanTarikhLawatanPgwPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: src_app_services_lawatan_lawatan_service__WEBPACK_IMPORTED_MODULE_2__.LawatanService
        }];
      };

      _PengesahanTarikhLawatanPgwPage.propDecorators = {
        lawatan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
        }]
      };
      _PengesahanTarikhLawatanPgwPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-pengesahan-tarikh-lawatan-pgw',
        template: _raw_loader_pengesahan_tarikh_lawatan_pgw_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pengesahan_tarikh_lawatan_pgw_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PengesahanTarikhLawatanPgwPage);
      /***/
    },

    /***/
    69406: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  padding: 10px;\n  margin-bottom: 50px;\n}\n\n.label {\n  padding: 10px;\n  margin-bottom: 50px;\n}\n\nion-datetime {\n  --background: #f5f5f5;\n  --padding-start: 0.75rem !important;\n  --padding-top: 0.625rem !important;\n  --placeholder-color: #8898aa;\n  --placeholder-font-weight: 400;\n  border: 1px solid #dee2e6 !important;\n  border-radius: 1rem !important;\n  box-shadow: 0 3px 2px rgba(233, 236, 239, 0.05) !important;\n  line-height: 1.5 !important;\n}\n\nion-select {\n  --background: #f5f5f5;\n  --padding-start: 0.75rem !important;\n  --padding-top: 0.625rem !important;\n  --placeholder-color: #8898aa;\n  --placeholder-font-weight: 400;\n  border: 1px solid #dee2e6 !important;\n  border-radius: 1rem !important;\n  box-shadow: 0 3px 2px rgba(233, 236, 239, 0.05) !important;\n  line-height: 1.5 !important;\n}\n\nion-label {\n  --color: #525f7f;\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding-bottom: 20px;\n}\n\n.jumlah {\n  font-size: 30px;\n  color: #00a651;\n}\n\nion-item {\n  --max-height: 16px;\n}\n\n.padding {\n  padding: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlbmdlc2FoYW4tdGFyaWtoLWxhd2F0YW4tcGd3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLDBEQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsMERBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7QUFDSiIsImZpbGUiOiJwZW5nZXNhaGFuLXRhcmlraC1sYXdhdGFuLXBndy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWwge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmxhYmVsIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgIC0tcGFkZGluZy1zdGFydDogMC43NXJlbSAhaW1wb3J0YW50O1xuICAgIC0tcGFkZGluZy10b3A6IDAuNjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzg4OThhYTtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDNweCAycHggcmdiYSgyMzMsIDIzNiwgMjM5LCAwLjA1KSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjUgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlbGVjdHtcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLXRvcDogMC42MjVyZW0gIWltcG9ydGFudDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjODg5OGFhO1xuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDJweCByZ2JhKDIzMywgMjM2LCAyMzksIDAuMDUpICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNSAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICAgIC0tY29sb3I6ICM1MjVmN2Y7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uanVtbGFoIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICMwMGE2NTE7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLW1heC1oZWlnaHQ6IDE2cHg7XG59XG5cbi5wYWRkaW5ne1xuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xufVxuXG4vLyBidXR0b246ZGlzYWJsZWQsXG4vLyBidXR0b25bZGlzYWJsZWRdIHtcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG4vLyAgICAgY29sb3I6ICM2NjY2NjY7XG4vLyB9XG4iXX0= */";
      /***/
    },

    /***/
    59940: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" (click)=\"dismiss()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"success\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            TARIKH LAWATAN\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  \n\n  <ion-grid>\n    <form [formGroup]=\"form\" (ngSubmit)=\"logForm()\" enctype=\"multipart/form-data\">\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-item *ngIf = \"pegawai_id != null\" lines=\"none\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\">NAMA USAHAWAN </ion-label>\n            <ion-input formControlName=\"namausahawan\" readonly></ion-input>\n           \n          </ion-item>\n\n          <ion-item *ngIf = \"pegawai_id == null\" lines=\"none\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\">NAMA PEGAWAI </ion-label>\n            <ion-input formControlName=\"nama_pegawai\" readonly></ion-input>\n            \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 15%;\"> \n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" class=\"form-control\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\">TARIKH</ion-label>\n            <!-- <ion-input type=\"date\" formControlName=\"title\"></ion-input> -->\n            <ion-datetime  displayFormat=\"DD-MM-YYYY\" presentation=\"date\"  formControlName=\"tarikh_lawatan\" style=\"background-color: #f5f5f5;\">\n            </ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" class=\"form-control\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\">MASA </ion-label>\n            <!-- <ion-input type=\"date\" formControlName=\"title\"></ion-input> -->\n            <ion-datetime displayFormat=\"HH:mm\" presentation=\"time\" formControlName=\"masa_lawatan\" style=\"background-color: #f5f5f5;\">\n            </ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin:20px;\">\n        <ion-col class=\"form-control\" style=\"display: flex; justify-content:space-between\">\n          <!-- (click)=\"openmodal()\" -->\n          <ion-button color=\"danger\" type=\"submit\"  >Tarikh Baru</ion-button>\n          <ion-button color=\"success\" (click)=\"sahkan()\"  >Sahkan</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </ion-grid>\n\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_core_lawatan_pengesahan-tarikh-lawatan-pgw_pengesahan-tarikh-lawatan-pgw_page_ts-es5.js.map