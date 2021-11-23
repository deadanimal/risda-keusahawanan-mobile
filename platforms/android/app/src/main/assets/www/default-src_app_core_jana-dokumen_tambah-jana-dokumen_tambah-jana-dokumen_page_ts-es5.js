(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["default-src_app_core_jana-dokumen_tambah-jana-dokumen_tambah-jana-dokumen_page_ts"], {
    /***/
    92669: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TambahJanaDokumenPage": function TambahJanaDokumenPage() {
          return (
            /* binding */
            _TambahJanaDokumenPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tambah_jana_dokumen_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tambah-jana-dokumen.page.html */
      57894);
      /* harmony import */


      var _tambah_jana_dokumen_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tambah-jana-dokumen.page.scss */
      24426);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_app_services_pelanggan_pelanggan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/pelanggan/pelanggan.service */
      14744);
      /* harmony import */


      var src_app_services_stok_stok_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/stok/stok.service */
      67441);
      /* harmony import */


      var src_app_services_daerah_daerah_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/daerah/daerah.service */
      42122);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/negeri/negeri.service */
      64802);
      /* harmony import */


      var src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/katalog/katalog.service */
      89496);

      var _TambahJanaDokumenPage = /*#__PURE__*/function () {
        function TambahJanaDokumenPage(modalController, formBuilder, pelangganService, alertController, stokService, daerahService, negeriService, katalogService) {
          _classCallCheck(this, TambahJanaDokumenPage);

          this.modalController = modalController;
          this.formBuilder = formBuilder;
          this.pelangganService = pelangganService;
          this.alertController = alertController;
          this.stokService = stokService;
          this.daerahService = daerahService;
          this.negeriService = negeriService;
          this.katalogService = katalogService;
          this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
          this.user_id = window.sessionStorage.getItem("user_id");
          this.count = 0;
          this.productLength = 0;
          this.form1 = this.formBuilder.group({
            nama_pelanggan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            alamat1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            alamat2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            alamat3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            poskod: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            U_Negeri_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            U_Daerah_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            no_telefon: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            no_fax: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            produk: this.formBuilder.array([]) //maklumat produk
            // id_katalog: ['',],
            // id_pelanggan: [''],
            // stok_dijual: ['',],
            // modified_by: [''],

          });
        }

        _createClass(TambahJanaDokumenPage, [{
          key: "addProduk",
          value: function addProduk() {
            var produk = this.formBuilder.group({
              id_katalog: [''],
              id_pelanggan: [''],
              stok_dijual: [''],
              modified_by: ['']
            });
            this.getProdukArray.push(produk);
            this.count++;
            this.productLength = this.getProdukArray.length;
            console.log("this.productLength", this.productLength);
            console.log('After Add: ', this.form1.value);
          }
        }, {
          key: "getProdukArray",
          get: function get() {
            return this.form1.get('produk');
          }
        }, {
          key: "deleteProduk",
          value: function deleteProduk(i) {
            this.getProdukArray.removeAt(i);
            this.count--;
            this.productLength = this.getProdukArray.length;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getNegeri(); // this.getDaerah();

            this.getKatalog();
            this.addProduk();
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

            console.log(this.form1.value);
            var prodTemp = this.form1.value.produk;
            var prodTempLength = prodTemp.length;
            console.log("prodTemp", prodTemp[1]);
            this.pelangganService.post(this.form1.value).subscribe(function (res) {
              console.log("res pelanggan", res);
              var pelanggan = res;

              for (var i = 0; i < prodTempLength; i++) {
                prodTemp[i].id_pelanggan = pelanggan.id;
                prodTemp[i].modified_by = _this.user_id;

                _this.stokService.post(prodTemp[i]).subscribe(function (res) {
                  console.log("res stok", res);
                });
              }

              _this.dismiss();

              _this.presentAlert();
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
          key: "getDaerah",
          value: function getDaerah(event) {
            var _this3 = this;

            // console.log("test")
            // console.log(this.form1.value.U_Negeri_ID)
            this.daerahService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (x) {
              return x.filter(function (i) {
                return i.U_Negeri_ID == _this3.form1.value.U_Negeri_ID;
              });
            })).subscribe(function (res) {
              // this.daerahService.get().subscribe((res) => {
              console.log("Daerah", res);
              _this3.daerah = res;
            });
          }
        }, {
          key: "getKatalog",
          value: function getKatalog() {
            var _this4 = this;

            console.log("this.user_id", this.user_id);
            this.katalogService.get(this.user_id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (x) {
              return x.filter(function (i) {
                return i.status_katalog == "publish";
              });
            })).subscribe(function (res) {
              console.log("katalog", res);
              _this4.katalog = res;
            });
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Berjaya',
                        subHeader: 'Maklumat pelanggan telah berjaya disimpan',
                        message: '',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                      _context.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis = _context.sent;
                      role = _yield$alert$onDidDis.role;
                      console.log('onDidDismiss resolved with role', role);
                      this.dismiss();
                      this.refresh();

                    case 12:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "refresh",
          value: function refresh() {
            window.location.reload();
          }
        }]);

        return TambahJanaDokumenPage;
      }();

      _TambahJanaDokumenPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
        }, {
          type: src_app_services_pelanggan_pelanggan_service__WEBPACK_IMPORTED_MODULE_2__.PelangganService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
        }, {
          type: src_app_services_stok_stok_service__WEBPACK_IMPORTED_MODULE_3__.StokService
        }, {
          type: src_app_services_daerah_daerah_service__WEBPACK_IMPORTED_MODULE_4__.DaerahService
        }, {
          type: src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_5__.NegeriService
        }, {
          type: src_app_services_katalog_katalog_service__WEBPACK_IMPORTED_MODULE_6__.KatalogService
        }];
      };

      _TambahJanaDokumenPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-tambah-jana-dokumen',
        template: _raw_loader_tambah_jana_dokumen_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tambah_jana_dokumen_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TambahJanaDokumenPage);
      /***/
    },

    /***/
    24426: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".form-header {\n  letter-spacing: 0;\n  text-shadow: 0px 4px 4px #00000040;\n}\n\nion-input[type=number] {\n  -moz-appearance: textfield;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhbWJhaC1qYW5hLWRva3VtZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsaUJBQUE7RUFDQSxrQ0FBQTtBQUFGOztBQUlBO0VBQ0UsMEJBQUE7QUFERiIsImZpbGUiOiJ0YW1iYWgtamFuYS1kb2t1bWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWhlYWRlciB7XG4gIC8vIGhlaWdodDogOTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIHRleHQtc2hhZG93OiAwcHggNHB4IDRweCAjMDAwMDAwNDA7XG4gIC8vIHdpZHRoOiAzNDNweDtcbn1cblxuaW9uLWlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    57894: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" (click)=\"dismiss()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"success\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            DOKUMEN PERNIAGAAN\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <form [formGroup]=\"form1\" (ngSubmit)=\"logForm()\" style=\"margin: 20px;\">\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <h5 class=\"form-header\">Maklumat Pelanggan</h5>\n\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>NAMA PELANGGAN</ion-label>\n          <ion-input type=\"text\" formControlName=\"nama_pelanggan\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>ALAMAT 1</ion-label>\n          <ion-input type=\"text\" formControlName=\"alamat1\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>ALAMAT 2</ion-label>\n          <ion-input type=\"text\" formControlName=\"alamat2\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>ALAMAT 3</ion-label>\n          <ion-input type=\"text\" formControlName=\"alamat3\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>NEGERI</ion-label>\n          <!-- <ion-input type=\"text\" formControlName=\"U_Negeri_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Negeri_ID\" (ionChange)=\"getDaerah($event)\">\n            <ion-select-option *ngFor=\"let negeri of negeri\" value=\"{{negeri.U_Negeri_ID}}\">{{negeri.Negeri}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n        <ion-col class=\"form-control\">\n          <ion-label>DAERAH</ion-label>\n          <!-- <ion-input type=\"text\" formControlName=\"U_Daerah_ID\">\n          </ion-input> -->\n          <ion-select formControlName=\"U_Daerah_ID\">\n            <ion-select-option *ngFor=\"let daerah of daerah\" value=\"{{daerah.U_Daerah_ID}}\">{{daerah.Daerah}}\n            </ion-select-option>\n\n          </ion-select>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>POSKOD</ion-label>\n          <ion-input type=\"number\" formControlName=\"poskod\"></ion-input>\n        </ion-col>\n        <ion-col class=\"form-control\">\n          <ion-label>NO. TELEFON</ion-label>\n          <ion-input type=\"number\" formControlName=\"no_telefon\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>NO. FAKS</ion-label>\n          <ion-input type=\"number\" formControlName=\"no_fax\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <h5 class=\"form-header\">Maklumat Pembelian</h5>\n        </ion-col>\n      </ion-row>\n      <div formArrayName=\"produk\">\n        <div *ngFor=\"let produk of getProdukArray.controls; let i=index\" [formGroupName]=\"i\">\n\n          <ion-row style=\"margin-bottom: 10px;\">\n            <ion-col class=\"form-control\">\n              <!-- <ion-item lines=\"none\" style=\"border: none;\"> -->\n              <ion-label position=\"stacked\">NAMA PRODUK</ion-label>\n              <!-- <ion-input formControlName=\"id_katalog\"></ion-input> -->\n              <ion-select formControlName=\"id_katalog\">\n                <ion-select-option *ngFor=\"let katalog of katalog\" value=\"{{katalog.id}}\">{{katalog.nama_produk}}\n                </ion-select-option>\n                <!-- <ion-select-option value=\"draft\">Draft</ion-select-option> -->\n              </ion-select>\n              <!-- </ion-item> -->\n            </ion-col>\n          </ion-row>\n\n          <ion-row style=\"margin-bottom: 20px;\">\n            <ion-col class=\"form-control\">\n              <!-- <ion-item lines=\"none\" style=\"border: none;\"> -->\n              <ion-label position=\"stacked\">KUANTITI</ion-label>\n              <ion-input type=\"number\" formControlName=\"stok_dijual\"></ion-input>\n            </ion-col>\n\n\n          </ion-row>\n\n          <ion-row style=\"margin-bottom: 20px;\">\n            <ion-col class=\"form-control\">\n              <div style=\"width:100%; display:flex; justify-content:flex-end;\">\n\n                <div class=\"ion-text-center\" (click)=\"deleteProduk(i)\">\n                  <img src=\"/assets/icon/trash-icon.png\" alt=\"\" height=\"30\" width=\"30\">\n                  <br>\n                </div>\n\n                <div *ngIf=\"i == (productLength-1)\" class=\"ion-text-center\" (click)=\"addProduk()\">\n                  <img src=\"/assets/icon/add-item-icon.png\" alt=\"\" height=\"30\" width=\"30\">\n                  <br>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n\n\n        </div>\n\n      </div>\n\n      <!-- <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <div style=\"width:100%; display:flex; justify-content:flex-end;\">\n\n            <div class=\"ion-text-center\" (click)=\"addProduk()\">\n              <img src=\"/assets/icon/add-item-icon.png\" alt=\"\" height=\"40\" width=\"40\">\n              <br>\n            </div>\n\n          </div>\n        </ion-col>\n      </ion-row> -->\n\n\n\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-button color=\"success\" expand=\"block\" type=\"submit\">TAMBAH</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_core_jana-dokumen_tambah-jana-dokumen_tambah-jana-dokumen_page_ts-es5.js.map