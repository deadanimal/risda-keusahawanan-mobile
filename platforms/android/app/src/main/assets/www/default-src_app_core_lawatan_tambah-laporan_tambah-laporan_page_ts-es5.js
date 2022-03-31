(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["default-src_app_core_lawatan_tambah-laporan_tambah-laporan_page_ts"], {
    /***/
    18398: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TambahLaporanPage": function TambahLaporanPage() {
          return (
            /* binding */
            _TambahLaporanPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tambah_laporan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tambah-laporan.page.html */
      79389);
      /* harmony import */


      var _tambah_laporan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tambah-laporan.page.scss */
      79165);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      19122);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_app_services_lawatan_lawatan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/lawatan/lawatan.service */
      89765);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/negeri/negeri.service */
      64802);
      /* harmony import */


      var src_app_services_pusat_tanggungjawab_pusat_tanggungjawab_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/pusat-tanggungjawab/pusat-tanggungjawab.service */
      47076);
      /* harmony import */


      var src_app_services_usahawan_usahawan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/usahawan/usahawan.service */
      46643);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

      var _TambahLaporanPage = /*#__PURE__*/function () {
        function TambahLaporanPage(modalController, formBuilder, lawatanService, negeriService, ptService, usahawanService, loadingController) {
          _classCallCheck(this, TambahLaporanPage);

          this.modalController = modalController;
          this.formBuilder = formBuilder;
          this.lawatanService = lawatanService;
          this.negeriService = negeriService;
          this.ptService = ptService;
          this.usahawanService = usahawanService;
          this.loadingController = loadingController;
          this.pegawai_id = window.sessionStorage.getItem("pegawai_id");
          this.peranan_pegawai = window.sessionStorage.getItem("peranan_pegawai");
          this.url = "assets/icon/image-not-available.png";
          this.negeriValue = null;
          this.ptValue = null; // Convert the base64 to blob data
          // and create  formData with it

          this.images = [];

          this.convertBlobToBase64 = function (blob) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.onerror = reject;

              reader.onload = function () {
                resolve(reader.result);
              };

              reader.readAsDataURL(blob);
            });
          };

          this.form = this.formBuilder.group({
            // negeri: ['', Validators.required],
            // pt: ['', Validators.required],
            id_pegawai: [''],
            id_pengguna: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            tarikh_lawatan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            masa_lawatan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            id_tindakan_lawatan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            komen: [''],
            jenis_lawatan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            gambar_lawatan: ['']
          });
        }

        _createClass(TambahLaporanPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("peranan", this.peranan_pegawai);
            console.log("laporan", this.laporan);

            if (this.peranan_pegawai == "1" || this.peranan_pegawai == "2") {
              this.getNegeri();
              this.getPT();
              this.getTindakanLawatan();
              this.form.patchValue({
                jenis_lawatan: "datang terus"
              });
            } else {
              this.getNegeriPt();
              this.getTindakanLawatan();
              this.form.patchValue({
                jenis_lawatan: "janji temu"
              });
            }
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
          key: "getTindakanLawatan",
          value: function getTindakanLawatan() {
            var _this = this;

            this.lawatanService.getTindakanLawatan().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (x) {
              return x.filter(function (i) {
                return i.status_tindakan_lawatan == "aktif";
              });
            })).subscribe(function (res) {
              console.log("tindakan lawatan", res);
              _this.tindakanLawatan = res;
            });
          }
        }, {
          key: "getNegeri",
          value: function getNegeri() {
            var _this2 = this;

            this.negeriService.get().subscribe(function (res) {
              console.log("negeri", res);
              _this2.negeri = res;
            });
          }
        }, {
          key: "getPT",
          value: function getPT() {
            var _this3 = this;

            this.ptService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (x) {
              return x.filter(function (i) {
                return i.Negeri_Rkod == _this3.negeriValue;
              });
            })).subscribe(function (res) {
              console.log("pt", res);
              _this3.pt = res;
            });
          }
        }, {
          key: "getNegeriPt",
          value: function getNegeriPt() {
            var _this4 = this;

            this.ptService.getNegeriPt(this.pegawai_id).subscribe(function (res) {
              console.log("pt", res);
              _this4.pt = res;
            });
          }
        }, {
          key: "getUsahawan",
          value: function getUsahawan() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log("ptValue", this.ptValue);
                      _context.next = 3;
                      return this.loadingController.create({
                        message: 'Loading ...'
                      });

                    case 3:
                      loading = _context.sent;
                      loading.present();
                      this.usahawanService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (x) {
                        return x.filter(function (i) {
                          return i.Kod_PT == _this5.ptValue;
                        });
                      })).subscribe(function (res) {
                        console.log("usahawan", res);
                        _this5.usahawan = res;
                        loading.dismiss();
                      });

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "logForm",
          value: function logForm() {
            var _this6 = this;

            if (this.images.length > 0) {
              this.form.value.gambar_lawatan = this.images[0].data;
            } else {
              this.form.value.gambar_lawatan = this.laporan.gambar_lawatan;
            }

            this.form.value.id_pegawai = this.pegawai_id;
            this.form.value.tarikh_lawatan = moment__WEBPACK_IMPORTED_MODULE_6__(this.form.value.tarikh_lawatan).format('YYYY-MM-DD');
            this.form.value.masa_lawatan = moment__WEBPACK_IMPORTED_MODULE_6__(this.form.value.masa_lawatan).format('HH:mm');
            console.log(this.form.value);
            this.lawatanService.tambahLaporan(this.form.value).subscribe(function (res) {
              console.log("laporan baru", res);

              _this6.dismiss();

              window.location.reload();
            });
          } //image

        }, {
          key: "onSelectFile",
          value: function onSelectFile(event) {
            var _this7 = this;

            if (event.target.files && event.target.files[0]) {
              var reader = new FileReader();
              reader.readAsDataURL(event.target.files[0]); // read file as data url

              reader.onload = function (event) {
                _this7.url = event.target.result;
              };

              this.fileEvent(event);
            }
          }
        }, {
          key: "fileEvent",
          value: function fileEvent(e) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var files, file, filePath, base64Data, fileName;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.images = [];
                      files = e.target.files;
                      file = files[0];
                      filePath = files[0].size;
                      _context2.next = 6;
                      return this.readAsBase64(file);

                    case 6:
                      base64Data = _context2.sent;
                      fileName = new Date().getTime() + '.jpeg';
                      this.images.push({
                        name: fileName,
                        path: filePath,
                        data: "".concat(base64Data)
                      });
                      console.log("AAAA", this.images);

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // https://ionicframework.com/docs/angular/your-first-app/3-saving-photos

        }, {
          key: "readAsBase64",
          value: function readAsBase64(blob) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.convertBlobToBase64(blob);

                    case 2:
                      return _context3.abrupt("return", _context3.sent);

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return TambahLaporanPage;
      }();

      _TambahLaporanPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
        }, {
          type: src_app_services_lawatan_lawatan_service__WEBPACK_IMPORTED_MODULE_2__.LawatanService
        }, {
          type: src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_3__.NegeriService
        }, {
          type: src_app_services_pusat_tanggungjawab_pusat_tanggungjawab_service__WEBPACK_IMPORTED_MODULE_4__.PusatTanggungjawabService
        }, {
          type: src_app_services_usahawan_usahawan_service__WEBPACK_IMPORTED_MODULE_5__.UsahawanService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
        }];
      };

      _TambahLaporanPage.propDecorators = {
        laporan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
        }]
      };
      _TambahLaporanPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-tambah-laporan',
        template: _raw_loader_tambah_laporan_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tambah_laporan_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TambahLaporanPage);
      /***/
    },

    /***/
    64802: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NegeriService": function NegeriService() {
          return (
            /* binding */
            _NegeriService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);

      var _NegeriService = /*#__PURE__*/function () {
        function NegeriService(http) {
          _classCallCheck(this, NegeriService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/negeri";
        } // post(data: any): Observable<any> {
        //   return this.http.post<any>(`${this.url}`, data);
        // }


        _createClass(NegeriService, [{
          key: "get",
          value: function get() {
            return this.http.get("".concat(this.url));
          }
        }]);

        return NegeriService;
      }();

      _NegeriService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _NegeriService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _NegeriService);
      /***/
    },

    /***/
    47076: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PusatTanggungjawabService": function PusatTanggungjawabService() {
          return (
            /* binding */
            _PusatTanggungjawabService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);

      var _PusatTanggungjawabService = /*#__PURE__*/function () {
        function PusatTanggungjawabService(http) {
          _classCallCheck(this, PusatTanggungjawabService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/pusat_tanggungjawab";
        } // post(data: any): Observable<any> {
        //   return this.http.post<any>(`${this.url}`, data);
        // }


        _createClass(PusatTanggungjawabService, [{
          key: "get",
          value: function get() {
            return this.http.get("".concat(this.url));
          }
        }, {
          key: "getNegeriPt",
          value: function getNegeriPt(id) {
            return this.http.get("".concat(this.url) + '/senarai_pt_pun_pud/' + id);
          }
        }]);

        return PusatTanggungjawabService;
      }();

      _PusatTanggungjawabService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _PusatTanggungjawabService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _PusatTanggungjawabService);
      /***/
    },

    /***/
    79165: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  padding: 10px;\n  margin-bottom: 50px;\n}\n\n.label {\n  padding: 10px;\n  margin-bottom: 50px;\n}\n\nion-datetime {\n  --background: #f5f5f5;\n  --padding-start: 0.75rem !important;\n  --padding-top: 0.625rem !important;\n  --placeholder-color: #8898aa;\n  --placeholder-font-weight: 400;\n  border: 1px solid #dee2e6 !important;\n  border-radius: 1rem !important;\n  box-shadow: 0 3px 2px rgba(233, 236, 239, 0.05) !important;\n  line-height: 1.5 !important;\n}\n\nion-select {\n  --background: #f5f5f5;\n  --padding-start: 0.75rem !important;\n  --padding-top: 0.625rem !important;\n  --placeholder-color: #8898aa;\n  --placeholder-font-weight: 400;\n  border: 1px solid #dee2e6 !important;\n  border-radius: 1rem !important;\n  box-shadow: 0 3px 2px rgba(233, 236, 239, 0.05) !important;\n  line-height: 1.5 !important;\n}\n\nion-label {\n  --color: #525f7f;\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding-bottom: 20px;\n}\n\n.jumlah {\n  font-size: 30px;\n  color: #00a651;\n}\n\nion-item {\n  --max-height: 16px;\n}\n\n.padding {\n  padding: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhbWJhaC1sYXBvcmFuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLDBEQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsMERBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7QUFDSiIsImZpbGUiOiJ0YW1iYWgtbGFwb3Jhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWwge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmxhYmVsIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgIC0tcGFkZGluZy1zdGFydDogMC43NXJlbSAhaW1wb3J0YW50O1xuICAgIC0tcGFkZGluZy10b3A6IDAuNjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzg4OThhYTtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDNweCAycHggcmdiYSgyMzMsIDIzNiwgMjM5LCAwLjA1KSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjUgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlbGVjdHtcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLXRvcDogMC42MjVyZW0gIWltcG9ydGFudDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjODg5OGFhO1xuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDJweCByZ2JhKDIzMywgMjM2LCAyMzksIDAuMDUpICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNSAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICAgIC0tY29sb3I6ICM1MjVmN2Y7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uanVtbGFoIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICMwMGE2NTE7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLW1heC1oZWlnaHQ6IDE2cHg7XG59XG5cbi5wYWRkaW5ne1xuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xufVxuXG5cblxuLy8gYnV0dG9uOmRpc2FibGVkLFxuLy8gYnV0dG9uW2Rpc2FibGVkXSB7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTk5OTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuLy8gICAgIGNvbG9yOiAjNjY2NjY2O1xuLy8gfVxuIl19 */";
      /***/
    },

    /***/
    79389: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button  (click)=\"dismiss()\">\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"warning\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            LAPORAN LAWATAN\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- BPU AND SUPER ADMIN -->\n<ion-content *ngIf=\"peranan_pegawai == 1 || peranan_pegawai == 2\">\n  <ion-grid>\n    <form [formGroup]=\"form\" (ngSubmit)=\"logForm()\" enctype=\"multipart/form-data\">\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\" mode=\"ios\">NEGERI </ion-label>\n            <ion-select [(ngModel)]=\"negeriValue\" [ngModelOptions]=\"{standalone: true}\" (ionChange)=\"getPT()\">\n              <ion-select-option *ngFor=\"let negeri of negeri\" value=\"{{negeri.Negeri_Rkod}}\">{{negeri.Negeri}}\n              </ion-select-option>\n              \n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\" mode=\"ios\">PUSAT TANGGUNGJAWAB </ion-label>\n            <ion-select [disabled]=\"negeriValue == null\" [(ngModel)]=\"ptValue\" [ngModelOptions]=\"{standalone: true}\"\n              (ionChange)=\"getUsahawan()\">\n              <ion-select-option *ngFor=\"let pt of pt\" value=\"{{pt.Kod_PT}}\">{{pt.keterangan}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\" mode=\"ios\">NAMA USAHAWAN <span style=\"color: red;\">*</span></ion-label>\n            <!-- <ion-input formControlName=\"namausahawan\" readonly></ion-input> -->\n            <ion-select [disabled]=\"ptValue == null\" formControlName=\"id_pengguna\">\n              <ion-select-option *ngFor=\"let usahawan of usahawan\" value=\"{{usahawan.id_pengguna}}\">\n                {{usahawan.namausahawan}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" class=\"form-control\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\" mode=\"ios\">TARIKH <span style=\"color: red;\">*</span></ion-label>\n            <ion-datetime presentation=\"date\" displayFormat=\"DD/MM/YYYY\" formControlName=\"tarikh_lawatan\"\n              style=\"background-color: #f5f5f5;\">\n            </ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" class=\"form-control\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\" mode=\"ios\">MASA <span style=\"color: red;\">*</span> </ion-label>\n            <ion-datetime presentation=\"time\" displayFormat=\"HHmm\" formControlName=\"masa_lawatan\"\n              style=\"background-color: #f5f5f5;\">\n            </ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\" mode=\"ios\">JENIS LAWATAN <span style=\"color: red;\">*</span></ion-label>\n            <ion-select formControlName=\"jenis_lawatan\">\n              <ion-select-option value=\"janji temu\" disabled>JANJI TEMU</ion-select-option>\n              <ion-select-option value=\"datang terus\">DATANG TERUS</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\" mode=\"ios\">TINDAKAN USAHAWAN <span style=\"color: red;\">*</span></ion-label>\n            <ion-select formControlName=\"id_tindakan_lawatan\">\n              <ion-select-option class=\"laporan\" *ngFor=\"let tindakanLawatan of tindakanLawatan\" [value]=\"tindakanLawatan.id\"\n                selected=\"tindakanLawatan.id == this.laporan.id_tindakan_lawatan\">\n                {{tindakanLawatan.nama_tindakan_lawatan}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\" mode=\"ios\">KOMEN KESELURUHAN </ion-label>\n            <ion-textarea rows=\"4\" formControlName=\"komen\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <ion-label class=\"ion-text-center\" style=\"padding-bottom: 0px;\" mode=\"ios\">GAMBAR  <span style=\"color: red;\">*</span></ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px; \">\n        <ion-col class=\"form-control\" style=\"display: flex; justify-content:center\">\n          <label style=\"display: flex; justify-content:center\">\n            <div style=\"display: flex; justify-content:center\">\n              <img [src]=\"url\" class=\"border-radius-md\" width=\"40%\" id=\"upload-Preview\" style=\"border-radius: 10px;\" />\n            </div>\n            <input id=\"upload-Image\" accept=\"image/*\" (change)=\"onSelectFile($event)\" formControlName=\"gambar_lawatan\"\n              type=\"file\" style=\"display: none\">\n          </label>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin:20px;\">\n        <ion-col class=\"form-control\">\n\n          <ion-button color=\"success\" expand=\"block\" [disabled]=\"form.invalid\" type=\"submit\">TAMBAH LAPORAN\n          </ion-button>\n          <!-- <ion-button color=\"success\" expand=\"block\">CETAK LAPORAN</ion-button> -->\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </ion-grid>\n</ion-content>\n\n\n<!-- PUN AND PUD -->\n<ion-content *ngIf=\"peranan_pegawai == 3 || peranan_pegawai == 4\">\n  <ion-grid>\n    <form [formGroup]=\"form\" (ngSubmit)=\"logForm()\" enctype=\"multipart/form-data\">\n      \n\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\" mode=\"ios\">PUSAT TANGGUNGJAWAB </ion-label>\n            <ion-select [(ngModel)]=\"ptValue\" [ngModelOptions]=\"{standalone: true}\"\n              (ionChange)=\"getUsahawan()\">\n              <ion-select-option *ngFor=\"let pt of pt\" value=\"{{pt.Kod_PT}}\">{{pt.keterangan}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\" mode=\"ios\">NAMA USAHAWAN <span style=\"color: red;\">*</span></ion-label>\n            <!-- <ion-input formControlName=\"namausahawan\" readonly></ion-input> -->\n            <ion-select [disabled]=\"ptValue == null\" formControlName=\"id_pengguna\">\n              <ion-select-option *ngFor=\"let usahawan of usahawan\" value=\"{{usahawan.id_pengguna}}\">\n                {{usahawan.namausahawan}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" class=\"form-control\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\" mode=\"ios\">TARIKH <span style=\"color: red;\">*</span></ion-label>\n            <ion-datetime presentation=\"date\" displayFormat=\"DD/MM/YYYY\" formControlName=\"tarikh_lawatan\"\n              style=\"background-color: #f5f5f5;\">\n            </ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" class=\"form-control\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\" mode=\"ios\">MASA <span style=\"color: red;\">*</span></ion-label>\n            <ion-datetime presentation=\"time\" displayFormat=\"HHmm\" formControlName=\"masa_lawatan\"\n              style=\"background-color: #f5f5f5;\">\n            </ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\">JENIS LAWATAN <span style=\"color: red;\">*</span></ion-label>\n            <ion-select formControlName=\"jenis_lawatan\">\n              <ion-select-option value=\"janji temu\" mode=\"ios\">JANJI TEMU</ion-select-option>\n              <ion-select-option value=\"datang terus\" selected>DATANG TERUS</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\" mode=\"ios\">TINDAKAN USAHAWAN <span style=\"color: red;\">*</span></ion-label>\n            <ion-select formControlName=\"id_tindakan_lawatan\">\n              <ion-select-option *ngFor=\"let tindakanLawatan of tindakanLawatan\" [value]=\"tindakanLawatan.id\"\n                selected=\"tindakanLawatan.id == this.laporan.id_tindakan_lawatan\">\n                {{tindakanLawatan.nama_tindakan_lawatan}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-item lines=\"none\" style=\"border: none;\">\n            <ion-label class=\"padding\" position=\"stacked\" mode=\"ios\">KOMEN KESELURUHAN </ion-label>\n            <ion-textarea rows=\"4\" formControlName=\"komen\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <ion-label class=\"ion-text-center\" style=\"padding-bottom: 0px;\" mode=\"ios\">GAMBAR <span style=\"color: red;\">*</span></ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px; \">\n        <ion-col class=\"form-control\" style=\"display: flex; justify-content:center\">\n          <label style=\"display: flex; justify-content:center\">\n            <div style=\"display: flex; justify-content:center\">\n              <img [src]=\"url\" class=\"border-radius-md\" width=\"40%\" id=\"upload-Preview\" style=\"border-radius: 10px;\" />\n            </div>\n            <input id=\"upload-Image\" accept=\"image/*\" (change)=\"onSelectFile($event)\" formControlName=\"gambar_lawatan\"\n              type=\"file\" style=\"display: none\">\n          </label>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin:20px;\">\n        <ion-col class=\"form-control\">\n\n          <ion-button color=\"success\" expand=\"block\" [disabled]=\"form.invalid\" type=\"submit\">SIMPAN LAPORAN\n          </ion-button>\n          <!-- <ion-button color=\"success\" expand=\"block\">CETAK LAPORAN</ion-button> -->\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </ion-grid>\n\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_core_lawatan_tambah-laporan_tambah-laporan_page_ts-es5.js.map