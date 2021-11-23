(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["default-src_app_core_katalog_kemaskini-katalog_kemaskini-katalog_page_ts"], {
    /***/
    43564: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KemaskiniKatalogPage": function KemaskiniKatalogPage() {
          return (
            /* binding */
            _KemaskiniKatalogPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_kemaskini_katalog_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./kemaskini-katalog.page.html */
      380);
      /* harmony import */


      var _kemaskini_katalog_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./kemaskini-katalog.page.scss */
      7556);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/katalog/katalog.service */
      89496);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var src_app_services_stok_stok_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/stok/stok.service */
      67441);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      88002);

      var _KemaskiniKatalogPage = /*#__PURE__*/function () {
        function KemaskiniKatalogPage(modalController, formBuilder, katalogService, loadingController, alertController, stokService) {
          _classCallCheck(this, KemaskiniKatalogPage);

          this.modalController = modalController;
          this.formBuilder = formBuilder;
          this.katalogService = katalogService;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.stokService = stokService;
          this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
          this.user_id = window.sessionStorage.getItem("user_id");
          this.url = 'assets/icon/image-not-available.png';

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
            id_pengguna: [''],
            nama_produk: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            kandungan_produk: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            harga_produk: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            berat_produk: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            keterangan_produk: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            gambar_url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            baki_stok: [''],
            unit_production: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            status_katalog: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            // disahkan_oleh: ['', Validators.required],
            modified_by: ['']
          });
        }

        _createClass(KemaskiniKatalogPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.images = [];
            console.log("katalog", this.katalog);
            this.setFormValues();
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }, {
          key: "updateBakiStok",
          value: function updateBakiStok() {
            var _this = this;

            this.stokService.getStokKatalog().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (x) {
              return x.filter(function (i) {
                return i.id_katalog == _this.katalog.id;
              });
            })).subscribe(function (res) {
              console.log("stok", res);
              var totalStok = 0;
              res.forEach(function (element) {
                totalStok += Number(element.stok_dijual);
              });
              console.log("total", totalStok);
              var bakiStok = _this.form.value.unit_production - totalStok;
              console.log("baki", bakiStok);

              _this.form.patchValue({
                baki_stok: bakiStok // unit_production: this.form.value.unit_production,

              });
            });
          }
        }, {
          key: "setFormValues",
          value: function setFormValues() {
            this.form.setValue({
              id_pengguna: this.katalog.id_pengguna,
              nama_produk: this.katalog.nama_produk,
              kandungan_produk: this.katalog.kandungan_produk,
              harga_produk: this.katalog.harga_produk,
              berat_produk: this.katalog.berat_produk,
              keterangan_produk: this.katalog.keterangan_produk,
              baki_stok: this.katalog.unit_production,
              unit_production: this.katalog.unit_production,
              status_katalog: this.katalog.status_katalog,
              gambar_url: this.katalog.gambar_url,
              modified_by: this.katalog.modified_by
            });
            this.form.updateValueAndValidity();
          }
        }, {
          key: "logForm",
          value: function logForm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.form.value.tarikh_aliran = moment__WEBPACK_IMPORTED_MODULE_3__(this.form.value.tarikh_aliran).format('YYYY-MM-DD');
                      _context.next = 3;
                      return this.loadingController.create({
                        message: 'Loading ...'
                      });

                    case 3:
                      loading = _context.sent;
                      loading.present();
                      console.log(this.form.value);
                      this.katalogService.update(this.form.value, Number(this.katalog.id)).subscribe(function (res) {
                        console.log("updated data", res);
                        loading.dismiss();

                        _this2.presentAlert();
                      });

                    case 7:
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        message: 'Deleting ...'
                      });

                    case 2:
                      loading = _context2.sent;
                      loading.present();
                      this.katalogService["delete"](this.katalog.id).subscribe(function (res) {
                        console.log("deleted", res);
                        loading.dismiss();

                        _this3.presentAlert2();
                      });

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Kemaskini Berjaya',
                        subHeader: 'Kemaskini Katalog Telah Berjaya',
                        message: '',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                      _context3.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis = _context3.sent;
                      role = _yield$alert$onDidDis.role;
                      console.log('onDidDismiss resolved with role', role);
                      this.dismiss();
                      this.refresh();

                    case 12:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentAlert2",
          value: function presentAlert2() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert, _yield$alert$onDidDis2, role;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Berjaya Dihapus',
                        subHeader: 'Katalog Telah Berjaya Dihapus',
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
                      _yield$alert$onDidDis2 = _context4.sent;
                      role = _yield$alert$onDidDis2.role;
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
          key: "refresh",
          value: function refresh() {
            window.location.reload();
          }
        }, {
          key: "onSelectFile",
          value: function onSelectFile(event) {
            var _this4 = this;

            if (event.target.files && event.target.files[0]) {
              var reader = new FileReader();
              reader.readAsDataURL(event.target.files[0]); // read file as data url

              reader.onload = function (event) {
                _this4.url = event.target.result;
              };

              this.fileEvent(event);
            }
          }
        }, {
          key: "fileEvent",
          value: function fileEvent(e) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var files, file, filePath, base64Data, fileName;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.images = [];
                      files = e.target.files;
                      file = files[0];
                      filePath = files[0].size;
                      _context5.next = 6;
                      return this.readAsBase64(file);

                    case 6:
                      base64Data = _context5.sent;
                      fileName = new Date().getTime() + '.jpeg';
                      this.images.push({
                        name: fileName,
                        path: filePath,
                        data: "".concat(base64Data)
                      });
                      console.log("AAAA", this.images);

                    case 10:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } // https://ionicframework.com/docs/angular/your-first-app/3-saving-photos

        }, {
          key: "readAsBase64",
          value: function readAsBase64(blob) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.convertBlobToBase64(blob);

                    case 2:
                      return _context6.abrupt("return", _context6.sent);

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return KemaskiniKatalogPage;
      }();

      _KemaskiniKatalogPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }, {
          type: src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_2__.KatalogService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: src_app_services_stok_stok_service__WEBPACK_IMPORTED_MODULE_4__.StokService
        }];
      };

      _KemaskiniKatalogPage.propDecorators = {
        katalog: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
        }]
      };
      _KemaskiniKatalogPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-kemaskini-katalog',
        template: _raw_loader_kemaskini_katalog_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_kemaskini_katalog_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _KemaskiniKatalogPage);
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
        }

        _createClass(KatalogService, [{
          key: "post",
          value: function post(data) {
            return this.http.post("".concat(this.url), data);
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
    7556: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrZW1hc2tpbmkta2F0YWxvZy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    380: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" (click)=\"dismiss()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"success\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            KEMASKINI KATALOG\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <form [formGroup]=\"form\" (ngSubmit)=\"logForm()\" style=\"margin: 20px;\">\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>NAMA PRODUK</ion-label>\n          <ion-input type=\"text\" formControlName=\"nama_produk\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>KANDUNGAN PRODUK</ion-label>\n          <!-- <ion-input type=\"date\" formControlName=\"title\"></ion-input> -->\n          <ion-input type=\"text\" formControlName=\"kandungan_produk\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>BERAT (kg)</ion-label>\n          <ion-input placeholder=\"0.0\" class=\"ion-text-right\" type=\"number\" formControlName=\"berat_produk\">\n          </ion-input>\n        </ion-col>\n        <ion-col class=\"form-control\">\n          <ion-label>HARGA JUALAN</ion-label>\n          <ion-input type=\"number\" formControlName=\"harga_produk\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>UNIT PRODUCTION</ion-label>\n          <ion-input type=\"text\" formControlName=\"unit_production\" (change)=\"updateBakiStok()\"></ion-input>\n        </ion-col>\n        <ion-col class=\"form-control\">\n          <ion-label>BAKI STOK</ion-label>\n          <ion-input type=\"text\" formControlName=\"baki_stok\" value=\"bakiStok\" readonly></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>KETERANGAN LAIN</ion-label>\n          <!-- <ion-input type=\"text\" formControlName=\"title\"></ion-input> -->\n          <ion-textarea rows=\"5\" formControlName=\"keterangan_produk\"></ion-textarea>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <!-- <ion-item lines=\"none\" style=\"border: none;\"> -->\n          <ion-label position=\"stacked\">STATUS</ion-label>\n          <ion-select formControlName=\"status_katalog\">\n            <ion-select-option value=\"pending\">Publish</ion-select-option>\n            <ion-select-option value=\"draft\">Draft</ion-select-option>\n          </ion-select>\n          <!-- </ion-item> -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <ion-label class=\"ion-text-center\" style=\"padding-bottom: 0px;\">GAMBAR</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\" style=\"display: flex; justify-content:center\">\n          <label>\n            <div >\n              \n              <br>\n              <img [src]=\"katalog.gambar_url\" class=\"border-radius-md\" width=\"80\" height=\"80\"\n                id=\"upload-Preview\" />\n            </div>\n            <ion-input accept=\"image/*\" (change)=\"onSelectFile($event)\" formControlName=\"gambar_url\"  type=\"file\" name=\"gambar_profil\" style=\"display: none\"></ion-input>\n          </label>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-button type=\"submit\" color=\"success\" expand=\"block\">KEMASKINI</ion-button>\n          <ion-button color=\"danger\" expand=\"block\" (click)=\"onDelete()\">HAPUS</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_core_katalog_kemaskini-katalog_kemaskini-katalog_page_ts-es5.js.map