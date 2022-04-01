(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["default-src_app_core_jana-dokumen_kemaskini-dokumen_kemaskini-dokumen_page_ts"], {
    /***/
    6509: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KemaskiniDokumenPage": function KemaskiniDokumenPage() {
          return (
            /* binding */
            _KemaskiniDokumenPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_kemaskini_dokumen_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./kemaskini-dokumen.page.html */
      89191);
      /* harmony import */


      var _kemaskini_dokumen_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./kemaskini-dokumen.page.scss */
      88809);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      19122);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_app_services_daerah_daerah_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/daerah/daerah.service */
      42122);
      /* harmony import */


      var src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/negeri/negeri.service */
      64802);
      /* harmony import */


      var src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/katalog/katalog.service */
      89496);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var src_app_services_stok_stok_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/stok/stok.service */
      67441);
      /* harmony import */


      var src_app_services_pelanggan_pelanggan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/pelanggan/pelanggan.service */
      14744);
      /* harmony import */


      var _tooltip_tooltip_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../tooltip/tooltip.page */
      48742);

      var _KemaskiniDokumenPage = /*#__PURE__*/function () {
        function KemaskiniDokumenPage(modalController, formBuilder, loadingController, alertController, daerahService, negeriService, katalogService, stokService, pelangganService, popoverCtrl) {
          _classCallCheck(this, KemaskiniDokumenPage);

          this.modalController = modalController;
          this.formBuilder = formBuilder;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.daerahService = daerahService;
          this.negeriService = negeriService;
          this.katalogService = katalogService;
          this.stokService = stokService;
          this.pelangganService = pelangganService;
          this.popoverCtrl = popoverCtrl;
          this.count = 0;
          this.productLength = 0;
          this.form = this.formBuilder.group({
            tajuk: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            nama_pelanggan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            alamat1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            alamat2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            alamat3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            poskod: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            U_Negeri_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            U_Daerah_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            no_telefon: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            no_fax: [''],
            diskaun: [''],
            kos_penghantaran: [''],
            cukai_sst: [''],
            produk: this.formBuilder.array([])
          });
        }

        _createClass(KemaskiniDokumenPage, [{
          key: "addProduk",
          value: function addProduk() {
            var produk = this.formBuilder.group({
              id: [''],
              id_katalog: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              id_pelanggan: [''],
              stok_dijual: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              modified_by: ['']
            });
            this.getProdukArray.push(produk);
            this.count++;
            this.productLength = this.getProdukArray.length;
            console.log("this.productLength", this.productLength);
            console.log('After Add: ', this.form.value);
          }
        }, {
          key: "getProdukArray",
          get: function get() {
            return this.form.get('produk');
          }
        }, {
          key: "deleteProduk",
          value: function deleteProduk(i, produk) {
            console.log(produk);
            this.getProdukArray.removeAt(i);
            this.count--;
            this.productLength = this.getProdukArray.length;
            console.log("this.productLength", this.productLength);
            console.log('After Add: ', this.form.value);

            if (produk != '') {
              this.stokService["delete"](produk).subscribe(function (res) {
                console.log("deleted stok", res);
              });
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
            this.user_id = window.sessionStorage.getItem("user_id");
            console.log(this.pelanggan);
            this.getNegeri();
            this.getKatalog();
            this.getDaerah(this.pelanggan.U_Negeri_ID);
            this.getStok(this.pelanggan.id_pelanggan);
          }
        }, {
          key: "setFormValues",
          value: function setFormValues() {
            this.form.patchValue({
              tajuk: this.pelanggan.tajuk,
              nama_pelanggan: this.pelanggan.nama_pelanggan,
              alamat1: this.pelanggan.alamat1,
              alamat2: this.pelanggan.alamat2,
              alamat3: this.pelanggan.alamat3,
              poskod: this.pelanggan.poskod,
              U_Negeri_ID: this.pelanggan.U_Negeri_ID,
              U_Daerah_ID: this.pelanggan.U_Daerah_ID,
              no_telefon: this.pelanggan.no_telefon,
              no_fax: this.pelanggan.no_fax,
              diskaun: this.pelanggan.diskaun,
              kos_penghantaran: this.pelanggan.kos_penghantaran,
              cukai_sst: this.pelanggan.cukai_sst
            });
            this.form.updateValueAndValidity();
          }
        }, {
          key: "setProdukVAlue",
          value: function setProdukVAlue() {
            var _this = this;

            this.stok.forEach(function (element) {
              var produk = _this.formBuilder.group({
                id: element.id,
                id_katalog: element.id_katalog,
                id_pelanggan: element.id_pelanggan,
                stok_dijual: element.stok_dijual,
                modified_by: element.modified_by
              });

              _this.getProdukArray.push(produk);

              _this.count++;
              _this.productLength = _this.getProdukArray.length;
              console.log("this.productLength", _this.productLength);
              console.log('After Add: ', _this.form.value);
            });
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }, {
          key: "logForm",
          value: function logForm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '',
                        message: 'Adakah anda setuju untuk menyimpan perubahan ini?',
                        buttons: [{
                          text: 'Tidak',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Ya',
                          handler: function handler() {
                            console.log('Confirm Okay');
                            console.log(_this2.form.value);
                            var prodTemp = _this2.form.value.produk;
                            var prodTempLength = prodTemp.length;
                            console.log("prodTemp", prodTemp[1]);

                            _this2.pelangganService.update(_this2.form.value, _this2.pelanggan.id).subscribe(function (res) {
                              console.log("res pelanggan", res);
                              var pelanggan = res;

                              for (var i = 0; i < prodTempLength; i++) {
                                prodTemp[i].id_pelanggan = pelanggan.id;
                                prodTemp[i].modified_by = _this2.user_id;
                                console.log(prodTemp[i]);

                                if (prodTemp[i].id == '') {
                                  _this2.stokService.post(prodTemp[i]).subscribe(function (res) {
                                    console.log("res stok", res);
                                  });
                                } else {
                                  _this2.stokService.update(prodTemp[i], prodTemp[i].id).subscribe(function (res) {
                                    console.log("res stok", res);
                                  });
                                }
                              } // this.dismiss();


                              // this.dismiss();
                              _this2.presentAlert();
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onDelete",
          value: function onDelete() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '',
                        message: 'Adakah anda setuju untuk memadam maklumat ini?',
                        buttons: [{
                          text: 'Tidak',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Ya',
                          handler: function handler() {
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                              var _this4 = this;

                              var loading;
                              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                while (1) {
                                  switch (_context2.prev = _context2.next) {
                                    case 0:
                                      console.log('Confirm Okay');
                                      _context2.next = 3;
                                      return this.loadingController.create({
                                        message: 'Deleting ...'
                                      });

                                    case 3:
                                      loading = _context2.sent;
                                      loading.present();
                                      this.pelangganService["delete"](this.pelanggan.id_pelanggan).subscribe(function (res) {
                                        console.log("deleted", res);

                                        _this4.stokService.deleteMany(_this4.pelanggan.id_pelanggan).subscribe(function (res) {
                                          console.log("deleted stok", res);
                                          loading.dismiss();

                                          _this4.presentAlert2();
                                        });
                                      });

                                    case 6:
                                    case "end":
                                      return _context2.stop();
                                  }
                                }
                              }, _callee2, this);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getNegeri",
          value: function getNegeri() {
            var _this5 = this;

            this.negeriService.get().subscribe(function (res) {
              console.log("negeri", res);
              _this5.negeri = res;
            });
          }
        }, {
          key: "getDaerah",
          value: function getDaerah(event) {
            var _this6 = this;

            // console.log("test")
            // console.log(this.form1.value.U_Negeri_ID)
            this.daerahService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(function (x) {
              return x.filter(function (i) {
                return i.U_Negeri_ID == _this6.form.value.U_Negeri_ID;
              });
            })).subscribe(function (res) {
              // this.daerahService.get().subscribe((res) => {
              console.log("Daerah", res);
              _this6.daerah = res;

              _this6.setFormValues();
            });
          }
        }, {
          key: "getKatalog",
          value: function getKatalog() {
            var _this7 = this;

            console.log("this.user_id", this.user_id);
            this.katalogService.get(this.user_id).subscribe(function (res) {
              console.log("katalog", res);
              _this7.katalog = res;
            });
          }
        }, {
          key: "getStok",
          value: function getStok(id) {
            var _this8 = this;

            this.stokService.get(this.pelanggan.id_pelanggan).subscribe(function (res) {
              console.log("stok", res);
              _this8.stok = res;

              _this8.setProdukVAlue();
            });
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Berjaya',
                        subHeader: 'Maklumat pelanggan telah berjaya dikemaskini',
                        message: '',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                      _context4.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis = _context4.sent;
                      role = _yield$alert$onDidDis.role;
                      console.log('onDidDismiss resolved with role', role);
                      this.dismiss();
                      this.refresh();

                    case 12:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentAlert2",
          value: function presentAlert2() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var alert, _yield$alert$onDidDis2, role;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Berjaya Dihapus',
                        subHeader: 'Maklumat Pelanggan Telah Berjaya Dihapus',
                        message: '',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                      _context5.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis2 = _context5.sent;
                      role = _yield$alert$onDidDis2.role;
                      console.log('onDidDismiss resolved with role', role);
                      this.dismiss();
                      this.refresh();

                    case 12:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "presentAlertConfirmDelete",
          value: function presentAlertConfirmDelete() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this9 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Maklumat akan dihapus!',
                        message: 'Adakah anda pasti?',
                        buttons: [{
                          text: 'Batal',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Ya',
                          handler: function handler() {
                            console.log('Confirm Okay'); // console.log(i);

                            // console.log(i);
                            _this9.onDelete();
                          }
                        }]
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "refresh",
          value: function refresh() {
            window.location.reload();
          }
        }, {
          key: "numericOnly",
          value: function numericOnly(event) {
            var pattern = /^([0-9])$/;
            var result = pattern.test(event.key);
            return result;
          }
        }, {
          key: "openPopOver",
          value: function openPopOver(ev) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var popover;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.popoverCtrl.create({
                        component: _tooltip_tooltip_page__WEBPACK_IMPORTED_MODULE_7__.TooltipPage,
                        event: ev,
                        cssClass: 'sustom-popover'
                      });

                    case 2:
                      popover = _context7.sent;
                      _context7.next = 5;
                      return popover.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return KemaskiniDokumenPage;
      }();

      _KemaskiniDokumenPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
        }, {
          type: src_app_services_daerah_daerah_service__WEBPACK_IMPORTED_MODULE_2__.DaerahService
        }, {
          type: src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_3__.NegeriService
        }, {
          type: src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_4__.KatalogService
        }, {
          type: src_app_services_stok_stok_service__WEBPACK_IMPORTED_MODULE_5__.StokService
        }, {
          type: src_app_services_pelanggan_pelanggan_service__WEBPACK_IMPORTED_MODULE_6__.PelangganService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.PopoverController
        }];
      };

      _KemaskiniDokumenPage.propDecorators = {
        pelanggan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
        }]
      };
      _KemaskiniDokumenPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-kemaskini-dokumen',
        template: _raw_loader_kemaskini_dokumen_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_kemaskini_dokumen_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _KemaskiniDokumenPage);
      /***/
    },

    /***/
    48742: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TooltipPage": function TooltipPage() {
          return (
            /* binding */
            _TooltipPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tooltip_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tooltip.page.html */
      14346);
      /* harmony import */


      var _tooltip_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tooltip.page.scss */
      48931);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TooltipPage = /*#__PURE__*/function () {
        function TooltipPage() {
          _classCallCheck(this, TooltipPage);
        }

        _createClass(TooltipPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TooltipPage;
      }();

      _TooltipPage.ctorParameters = function () {
        return [];
      };

      _TooltipPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tooltip',
        template: _raw_loader_tooltip_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tooltip_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TooltipPage);
      /***/
    },

    /***/
    42122: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DaerahService": function DaerahService() {
          return (
            /* binding */
            _DaerahService
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

      var _DaerahService = /*#__PURE__*/function () {
        function DaerahService(http) {
          _classCallCheck(this, DaerahService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/daerah";
        } // post(data: any): Observable<any> {
        //   return this.http.post<any>(`${this.url}`, data);
        // }


        _createClass(DaerahService, [{
          key: "get",
          value: function get() {
            return this.http.get("".concat(this.url));
          }
        }]);

        return DaerahService;
      }();

      _DaerahService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _DaerahService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _DaerahService);
      /***/
    },

    /***/
    89496: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KatalogService": function KatalogService() {
          return (
            /* binding */
            _KatalogService
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

      var _KatalogService = /*#__PURE__*/function () {
        function KatalogService(http) {
          _classCallCheck(this, KatalogService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/katalog";
          this.url2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/katalogPegawai";
          this.url3 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/pengesahanPegawai";
          this.url4 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/katalogdashboard";
        }

        _createClass(KatalogService, [{
          key: "post",
          value: function post(data) {
            return this.http.post("".concat(this.url), data);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.http.get("".concat(this.url));
          }
        }, {
          key: "get",
          value: function get(user_id) {
            return this.http.get("".concat(this.url) + "/" + user_id);
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
        }, {
          key: "getKatalogPegawai",
          value: function getKatalogPegawai(id) {
            return this.http.get("".concat(this.url2) + "/" + id);
          }
        }, {
          key: "pengesahanPegawai",
          value: function pengesahanPegawai(id) {
            return this.http.get("".concat(this.url3) + "/" + id);
          }
        }, {
          key: "katalogPdf",
          value: function katalogPdf(id) {
            return this.http.get("".concat(this.url) + '/katalogPdf/' + id);
          }
        }, {
          key: "getMaklumatUsahawan",
          value: function getMaklumatUsahawan(id) {
            return this.http.get("".concat(this.url) + '/showMaklumatUsahawan/' + id);
          }
        }, {
          key: "katalogdashboard",
          value: function katalogdashboard() {
            return this.http.get("".concat(this.url4));
          }
        }]);

        return KatalogService;
      }();

      _KatalogService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _KatalogService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _KatalogService);
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
    14744: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PelangganService": function PelangganService() {
          return (
            /* binding */
            _PelangganService
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

      var _PelangganService = /*#__PURE__*/function () {
        function PelangganService(http) {
          _classCallCheck(this, PelangganService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/pelanggan";
        }

        _createClass(PelangganService, [{
          key: "post",
          value: function post(data) {
            return this.http.post("".concat(this.url), data);
          }
        }, {
          key: "get",
          value: function get(id) {
            return this.http.get("".concat(this.url) + '/' + id);
          }
        }, {
          key: "update",
          value: function update(data, id) {
            return this.http.put("".concat(this.url, "/").concat(id), data);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(this.url, "/").concat(id));
          }
        }, {
          key: "janaDokumen",
          value: function janaDokumen(id_pelanggan, id_pengguna) {
            return this.http.post("".concat(this.url) + '/janaDokumen/' + id_pelanggan, id_pengguna);
          }
        }, {
          key: "janaQuotation",
          value: function janaQuotation(id_pelanggan, id_pengguna) {
            return this.http.post("".concat(this.url) + '/janaQuotation/' + id_pelanggan, id_pengguna);
          }
        }, {
          key: "janaDO",
          value: function janaDO(id_pelanggan, id_pengguna) {
            return this.http.post("".concat(this.url) + '/janaDO/' + id_pelanggan, id_pengguna);
          }
        }, {
          key: "janaInvoice",
          value: function janaInvoice(id_pelanggan, id_pengguna) {
            return this.http.post("".concat(this.url) + '/janaInvoice/' + id_pelanggan, id_pengguna);
          }
        }]);

        return PelangganService;
      }();

      _PelangganService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _PelangganService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _PelangganService);
      /***/
    },

    /***/
    67441: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StokService": function StokService() {
          return (
            /* binding */
            _StokService
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

      var _StokService = /*#__PURE__*/function () {
        function StokService(http) {
          _classCallCheck(this, StokService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/stok";
          this.url2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/deleteStok";
        }

        _createClass(StokService, [{
          key: "post",
          value: function post(data) {
            return this.http.post("".concat(this.url), data);
          }
        }, {
          key: "getStokKatalog",
          value: function getStokKatalog() {
            return this.http.get("".concat(this.url));
          }
        }, {
          key: "get",
          value: function get(id) {
            return this.http.get("".concat(this.url) + '/' + id);
          }
        }, {
          key: "update",
          value: function update(data, id) {
            return this.http.put("".concat(this.url, "/").concat(id), data);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(this.url, "/").concat(id));
          }
        }, {
          key: "deleteMany",
          value: function deleteMany(id_pelanggan) {
            return this.http.get("".concat(this.url2, "/").concat(id_pelanggan));
          }
        }]);

        return StokService;
      }();

      _StokService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _StokService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _StokService);
      /***/
    },

    /***/
    88809: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".form-header {\n  letter-spacing: 0;\n  text-shadow: 0px 4px 4px #00000040;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtlbWFza2luaS1kb2t1bWVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlCQUFBO0VBQ0Esa0NBQUE7QUFBSiIsImZpbGUiOiJrZW1hc2tpbmktZG9rdW1lbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1oZWFkZXIge1xuICAgIC8vIGhlaWdodDogOTVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDRweCA0cHggXG4gICMwMDAwMDA0MDtcbiAgICAvLyB3aWR0aDogMzQzcHg7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    48931: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sdGlwLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    89191: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button  (click)=\"dismiss()\">\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"warning\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            DOKUMEN PERNIAGAAN\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <form [formGroup]=\"form\" (ngSubmit)=\"logForm()\" style=\"margin: 20px;\">\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <h5 class=\"form-header\">Maklumat Pelanggan</h5>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>TAJUK <span style=\"color: red;\">*</span></ion-label>\n          <ion-input type=\"text\" formControlName=\"tajuk\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>NAMA PELANGGAN <span style=\"color: red;\">*</span></ion-label>\n          <ion-input type=\"text\" formControlName=\"nama_pelanggan\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>NO RUMAH/ LOT/ PINTU <span style=\"color: red;\">*</span></ion-label>\n          <ion-input type=\"text\" formControlName=\"alamat1\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>NAMA JALAN <span style=\"color: red;\">*</span></ion-label>\n          <ion-input type=\"text\" formControlName=\"alamat2\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>KAMPUNG/ TAMAN <span style=\"color: red;\">*</span></ion-label>\n          <ion-input type=\"text\" formControlName=\"alamat3\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>NEGERI <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input type=\"text\" formControlName=\"U_Negeri_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Negeri_ID\" (ionChange)=\"getDaerah($event)\">\n            <ion-select-option *ngFor=\"let negeri of negeri\" value=\"{{negeri.U_Negeri_ID}}\">{{negeri.Negeri}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n        <ion-col class=\"form-control\">\n          <ion-label>DAERAH <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input type=\"text\" formControlName=\"U_Daerah_ID\">\n          </ion-input> -->\n          <ion-select formControlName=\"U_Daerah_ID\">\n            <ion-select-option *ngFor=\"let daerah of daerah\" [value]=\"daerah.U_Daerah_ID\" selected=\"daerah.U_Daerah_ID == this.pelanggan.U_Daerah_ID\">{{daerah.Daerah}}\n            </ion-select-option>\n\n          </ion-select>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>POSKOD <span style=\"color: red;\">*</span></ion-label>\n          <ion-input type=\"number\" formControlName=\"poskod\"></ion-input>\n        </ion-col>\n        <ion-col class=\"form-control\">\n          <ion-label>NO. TELEFON <span style=\"color: red;\">*</span></ion-label>\n          <ion-input type=\"number\" formControlName=\"no_telefon\" (keypress)=\"numericOnly($event)\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>NO. FAKS</ion-label>\n          <ion-input type=\"number\" formControlName=\"no_fax\" (keypress)=\"numericOnly($event)\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <h5 class=\"form-header\">Maklumat Pembelian <ion-icon name=\"alert-circle-outline\" style=\"font-size: large; margin-top:2px; color: blue\" (click)=\"openPopOver($event)\"></ion-icon></h5>\n        </ion-col>\n      </ion-row>\n      <div formArrayName=\"produk\">\n        <div *ngFor=\"let produk of getProdukArray.controls; let i=index\" [formGroupName]=\"i\">\n\n          <ion-row style=\"margin-bottom: 10px;\">\n            <ion-col class=\"form-control\">\n              <!-- <ion-item lines=\"none\" style=\"border: none;\"> -->\n              <ion-label position=\"stacked\">NAMA PRODUK <span style=\"color: red;\">*</span></ion-label>\n              <!-- <ion-input formControlName=\"id_katalog\"></ion-input> -->\n              <ion-select formControlName=\"id_katalog\">\n                <ion-select-option *ngFor=\"let katalog of katalog\" [value]=\"katalog.id\" selected=\"katalog.id == this.stok.id_katalog\">{{katalog.nama_produk}}\n                </ion-select-option>\n                <!-- <ion-select-option value=\"draft\">Draft</ion-select-option> -->\n              </ion-select>\n              <!-- </ion-item> -->\n            </ion-col>\n          </ion-row>\n\n          <ion-row style=\"margin-bottom: 20px;\">\n            <ion-col class=\"form-control\">\n              <!-- <ion-item lines=\"none\" style=\"border: none;\"> -->\n              <ion-label position=\"stacked\">KUANTITI <span style=\"color: red;\">*</span></ion-label>\n              <ion-input type=\"number\" formControlName=\"stok_dijual\"></ion-input>\n            </ion-col>\n\n\n          </ion-row>\n\n          <ion-row style=\"margin-bottom: 20px;\">\n            <ion-col class=\"form-control\">\n              <div style=\"width:100%; display:flex; justify-content:flex-end;\">\n\n                <div *ngIf=\"i != 0\" class=\"ion-text-center\" (click)=\"deleteProduk(i, produk.value.id)\">\n                  <img src=\"assets/new-iconv2/hapus.png\" alt=\"\" height=\"30\" width=\"30\">\n                  <br>\n                </div>\n\n                <div *ngIf=\"i == (productLength-1)\" class=\"ion-text-center\" (click)=\"addProduk()\">\n                  <img src=\"assets/new-iconv2/Tambah.png\" alt=\"\" height=\"30\" width=\"30\">\n                  <br>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n\n        </div>\n\n      </div>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>DISKAUN (TOLAK KOS KESELURUHAN)</ion-label>\n          <ion-input type=\"number\" formControlName=\"diskaun\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>KOS PENGHANTARAN (TAMBAH KOS KESELURUHAN)</ion-label>\n          <ion-input type=\"number\" formControlName=\"kos_penghantaran\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>CUKAI/SST/GST/LAIN-LAIN (TAMBAH KOS KESELURUHAN)</ion-label>\n          <ion-input type=\"number\" formControlName=\"cukai_sst\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-button type=\"submit\" color=\"dark\" expand=\"block\" [disabled]=\"form.invalid\">KEMASKINI</ion-button>\n          <!-- <ion-button color=\"danger\" expand=\"block\" (click)=\"onDelete()\">HAPUS</ion-button> -->\n          <ion-button color=\"warning\" expand=\"block\" (click)=\"presentAlertConfirmDelete()\" >HAPUS</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n\n\n\n\n</ion-content>";
      /***/
    },

    /***/
    14346: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content >\n  <div style=\"padding: 30px;\">\n    <small>\n      Sila lakukan penginputan katalog di modul katalog terlebih dahulu\n    </small>\n  </div>\n  \n  \n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_core_jana-dokumen_kemaskini-dokumen_kemaskini-dokumen_page_ts-es5.js.map