(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_auth_profile-perniagaan_profile-perniagaan_module_ts"], {
    /***/
    58236: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePerniagaanPageRoutingModule": function ProfilePerniagaanPageRoutingModule() {
          return (
            /* binding */
            _ProfilePerniagaanPageRoutingModule
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


      var _profile_perniagaan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile-perniagaan.page */
      41287);

      var routes = [{
        path: '',
        component: _profile_perniagaan_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePerniagaanPage
      }];

      var _ProfilePerniagaanPageRoutingModule = function ProfilePerniagaanPageRoutingModule() {
        _classCallCheck(this, ProfilePerniagaanPageRoutingModule);
      };

      _ProfilePerniagaanPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ProfilePerniagaanPageRoutingModule);
      /***/
    },

    /***/
    84325: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePerniagaanPageModule": function ProfilePerniagaanPageModule() {
          return (
            /* binding */
            _ProfilePerniagaanPageModule
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


      var _profile_perniagaan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile-perniagaan-routing.module */
      58236);
      /* harmony import */


      var _profile_perniagaan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile-perniagaan.page */
      41287);

      var _ProfilePerniagaanPageModule = function ProfilePerniagaanPageModule() {
        _classCallCheck(this, ProfilePerniagaanPageModule);
      };

      _ProfilePerniagaanPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _profile_perniagaan_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePerniagaanPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_profile_perniagaan_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePerniagaanPage]
      })], _ProfilePerniagaanPageModule);
      /***/
    },

    /***/
    41287: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePerniagaanPage": function ProfilePerniagaanPage() {
          return (
            /* binding */
            _ProfilePerniagaanPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_profile_perniagaan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./profile-perniagaan.page.html */
      96226);
      /* harmony import */


      var _profile_perniagaan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile-perniagaan.page.scss */
      72419);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_perniagaan_perniagaan_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/perniagaan/perniagaan.model */
      96074);
      /* harmony import */


      var src_app_services_perniagaan_perniagaan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/perniagaan/perniagaan.service */
      24381);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic/angular */
      19122);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var src_app_services_daerah_daerah_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/daerah/daerah.service */
      42122);
      /* harmony import */


      var src_app_services_dun_dun_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/dun/dun.service */
      88641);
      /* harmony import */


      var src_app_services_kampung_kampung_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/kampung/kampung.service */
      92272);
      /* harmony import */


      var src_app_services_mukim_mukim_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/mukim/mukim.service */
      46175);
      /* harmony import */


      var src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/negeri/negeri.service */
      64802);
      /* harmony import */


      var src_app_services_parlimen_parlimen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/parlimen/parlimen.service */
      21450);
      /* harmony import */


      var src_app_services_seksyen_seksyen_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/seksyen/seksyen.service */
      48203);
      /* harmony import */


      var src_app_services_produk_produk_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/produk/produk.service */
      16114);
      /* harmony import */


      var src_app_services_Aliran_aliran_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/Aliran/aliran.service */
      72311);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var src_app_services_kluster_kluster_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/services/kluster/kluster.service */
      68379);

      var _ProfilePerniagaanPage = /*#__PURE__*/function () {
        function ProfilePerniagaanPage(perniagaanService, router, perniagaan, alertController, loadingController, formBuilder, negeriService, daerahService, mukimService, parlimenService, dunService, kampungService, seksyenService, produkService, aliranService, geolocation, klusterService // private geolocation: Geolocation
        ) {
          _classCallCheck(this, ProfilePerniagaanPage);

          this.perniagaanService = perniagaanService;
          this.router = router;
          this.perniagaan = perniagaan;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.formBuilder = formBuilder;
          this.negeriService = negeriService;
          this.daerahService = daerahService;
          this.mukimService = mukimService;
          this.parlimenService = parlimenService;
          this.dunService = dunService;
          this.kampungService = kampungService;
          this.seksyenService = seksyenService;
          this.produkService = produkService;
          this.aliranService = aliranService;
          this.geolocation = geolocation;
          this.klusterService = klusterService;
          this.jenis_perniagaan = [{
            id: "A",
            name: "PENGELUARAN PRODUK MAKANAN"
          }, {
            id: "B",
            name: "PENGELUARAN PRODUK BUKAN MAKANAN"
          }, {
            id: "C",
            name: "PENGELUARAN PRODUK PERTANIAN"
          }, {
            id: "D",
            name: "PERKHIDMATAN PEMASARAN"
          }, {
            id: "E",
            name: "PERKHIDMATAN BUKAN PEMASARAN"
          }];
          this.count = 0;
          this.productLength = 0;
          this.latitude = 0; //latitude

          this.longitude = 0; //longitude

          this.options = {
            timeout: 10000,
            enableHighAccuracy: true,
            maximumAge: 3600
          };
          this.form = this.formBuilder.group({
            jenisperniagaan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            klusterperniagaan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            subkluster: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            alamat1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            alamat2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            alamat3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            bandar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            poskod: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            U_Negeri_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            U_Daerah_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            U_Mukim_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            U_Parlimen_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            U_Dun_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            U_Kampung_ID: [''],
            U_Seksyen_ID: [''],
            latitud: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            logitud: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            facebook: [''],
            instagram: [''],
            twitter: [''],
            lamanweb: [''],
            dropship: [''],
            ejen: [''],
            stokis: [''],
            outlet: [''],
            domestik: [''],
            luarnegara: [''],
            pasaranonline: [''],
            purata_jualan_bulanan: [''],
            peratus_kenaikan: [''],
            hasil_jualan_tahunan: [''],
            produk: this.formBuilder.array([])
          });
        }

        _createClass(ProfilePerniagaanPage, [{
          key: "addProduk",
          value: function addProduk() {
            var produk = this.formBuilder.group({
              id: [''],
              perniagaanid: [''],
              jenamaproduk: [''],
              unitmatrik: [''],
              hargaperunit: [''],
              kapasitimaksimum: [''],
              kapasitisemasa: [''],
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
          value: function deleteProduk(i, id) {
            console.log(id);
            this.getProdukArray.removeAt(i);
            this.count--;
            this.productLength = this.getProdukArray.length;

            if (id != '') {
              this.produkService["delete"](id).subscribe(function (res) {
                console.log("deleted produk", res);
              });
            }
          }
        }, {
          key: "setProdukVAlue",
          value: function setProdukVAlue() {
            var _this = this;

            this.produk.forEach(function (element) {
              var produk = _this.formBuilder.group({
                id: element.id,
                perniagaanid: element.perniagaanid,
                jenamaproduk: element.jenamaproduk,
                unitmatrik: element.unitmatrik,
                hargaperunit: element.hargaperunit,
                kapasitimaksimum: element.kapasitimaksimum,
                kapasitisemasa: element.kapasitisemasa,
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
          key: "ngOnInit",
          value: function ngOnInit() {
            this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
            this.user_id = window.sessionStorage.getItem("user_id");
            console.log("usahawan id", this.usahawan_id);
            console.log("user id", this.user_id);
            this.getPerniagaan();
          }
        }, {
          key: "getPerniagaan",
          value: function getPerniagaan() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: 'Loading ...'
                      });

                    case 2:
                      loading = _context.sent;
                      loading.present(); // console.log(this.form.value);

                      this.perniagaanService.show(this.usahawan_id).subscribe(function (res) {
                        console.log("perniagaan info", res);

                        if (Object.keys(res).length === 0) {
                          console.log("failed");
                          loading.dismiss();
                        } else {
                          _this2.perniagaan = res;

                          _this2.produkService.get(res.id).subscribe(function (produkRes) {
                            console.log("produk", produkRes);
                            _this2.produk = produkRes;

                            if (Object.keys(produkRes).length == 0 && _this2.productLength == 0) {
                              _this2.addProduk();
                            }

                            _this2.negeriService.get().subscribe(function (resNegeri) {
                              console.log("Negeri", resNegeri);
                              _this2.negeri = resNegeri;

                              _this2.daerahService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(function (x) {
                                return x.filter(function (i) {
                                  return i.U_Negeri_ID == _this2.perniagaan.U_Negeri_ID;
                                });
                              })).subscribe(function (resDaerah) {
                                console.log("resDaerah", resDaerah);
                                _this2.daerah = resDaerah;

                                _this2.mukimService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(function (x) {
                                  return x.filter(function (i) {
                                    return i.U_Daerah_ID == _this2.perniagaan.U_Daerah_ID;
                                  });
                                })).subscribe(function (resMukim) {
                                  console.log("resMukim", resMukim);
                                  _this2.mukim = resMukim;

                                  _this2.parlimenService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(function (x) {
                                    return x.filter(function (i) {
                                      return i.U_Negeri_ID == _this2.perniagaan.U_Negeri_ID;
                                    });
                                  })).subscribe(function (resParlimen) {
                                    console.log("resParlimen", resParlimen);
                                    _this2.parlimen = resParlimen;

                                    _this2.dunService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(function (x) {
                                      return x.filter(function (i) {
                                        return i.U_Parlimen_ID == _this2.perniagaan.U_Parlimen_ID;
                                      });
                                    })).subscribe(function (resDun) {
                                      console.log("resDun", resDun);
                                      _this2.dun = resDun;

                                      _this2.kampungService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(function (x) {
                                        return x.filter(function (i) {
                                          return i.U_Mukim_ID == _this2.perniagaan.U_Mukim_ID;
                                        });
                                      })).subscribe(function (resKampung) {
                                        console.log("resKampung", resKampung);
                                        _this2.kampung = resKampung;
                                        var mukimStr = _this2.perniagaan.U_Mukim_ID; // let mukimInt = parseInt(mukimStr.toString())

                                        _this2.seksyenService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(function (x) {
                                          return x.filter(function (i) {
                                            return i.U_Mukim_ID == mukimStr;
                                          });
                                        })).subscribe(function (resSeksyen) {
                                          console.log("resSeksyen", resSeksyen);
                                          _this2.seksyen = resSeksyen;

                                          _this2.klusterService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(function (x) {
                                            return x.filter(function (i) {
                                              return i.jenis_kluster == _this2.perniagaan.jenisperniagaan;
                                            });
                                          })).subscribe(function (resKluster) {
                                            console.log("kluster", resKluster);
                                            _this2.klusterPerniagaan = resKluster;

                                            _this2.setFormValues();

                                            loading.dismiss();
                                          });
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        }
                      });

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "setFormValues",
          value: function setFormValues() {
            this.form.patchValue({
              jenisperniagaan: this.perniagaan.jenisperniagaan,
              klusterperniagaan: this.perniagaan.klusterperniagaan,
              subkluster: this.perniagaan.subkluster,
              alamat1: this.perniagaan.alamat1,
              alamat2: this.perniagaan.alamat2,
              alamat3: this.perniagaan.alamat3,
              bandar: this.perniagaan.bandar,
              poskod: this.perniagaan.poskod,
              U_Negeri_ID: this.perniagaan.U_Negeri_ID,
              U_Daerah_ID: this.perniagaan.U_Daerah_ID,
              U_Mukim_ID: this.perniagaan.U_Mukim_ID,
              U_Parlimen_ID: this.perniagaan.U_Parlimen_ID,
              U_Dun_ID: this.perniagaan.U_Dun_ID,
              U_Kampung_ID: this.perniagaan.U_Kampung_ID,
              U_Seksyen_ID: this.perniagaan.U_Seksyen_ID,
              latitud: this.perniagaan.latitud,
              logitud: this.perniagaan.logitud,
              facebook: this.perniagaan.facebook,
              instagram: this.perniagaan.instagram,
              twitter: this.perniagaan.twitter,
              lamanweb: this.perniagaan.lamanweb,
              dropship: this.perniagaan.dropship,
              ejen: this.perniagaan.ejen,
              stokis: this.perniagaan.stokis,
              outlet: this.perniagaan.outlet,
              domestik: this.perniagaan.domestik,
              luarnegara: this.perniagaan.luarnegara,
              pasaranonline: this.perniagaan.pasaranonline,
              purata_jualan_bulanan: this.perniagaan.purata_jualan_bulanan,
              peratus_kenaikan: this.perniagaan.peratus_kenaikan,
              hasil_jualan_tahunan: this.perniagaan.hasil_jualan_tahunan
            });
            this.setProdukVAlue();
          }
        }, {
          key: "getKluster",
          value: function getKluster() {
            var _this3 = this;

            // this.form.value.klusterPerniagaan = null;
            this.klusterService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(function (x) {
              return x.filter(function (i) {
                return i.jenis_kluster == _this3.form.value.jenisperniagaan;
              });
            })).subscribe(function (res) {
              console.log("kluster", res);
              _this3.klusterPerniagaan = res;
            });
          }
        }, {
          key: "resetKluster",
          value: function resetKluster() {
            this.form.patchValue({
              klusterPerniagaan: null
            });
            console.log(this.form.value.klusterPerniagaan);
          }
        }, {
          key: "getNegeri",
          value: function getNegeri() {
            var _this4 = this;

            this.negeriService.get().subscribe(function (res) {
              console.log("negeri", res);
              _this4.negeri = res;
            });
          }
        }, {
          key: "getDaerah",
          value: function getDaerah(event) {
            var _this5 = this;

            this.daerahService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(function (x) {
              return x.filter(function (i) {
                return i.U_Negeri_ID == _this5.form.value.U_Negeri_ID;
              });
            })).subscribe(function (res) {
              console.log("Daerah", res);
              _this5.daerah = res;

              _this5.getParlimen();
            });
          }
        }, {
          key: "getMukim",
          value: function getMukim(event) {
            var _this6 = this;

            this.mukimService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(function (x) {
              return x.filter(function (i) {
                return i.U_Daerah_ID == _this6.form.value.U_Daerah_ID;
              });
            })).subscribe(function (res) {
              console.log("mukim", res);
              _this6.mukim = res;
            });
          }
        }, {
          key: "getParlimen",
          value: function getParlimen() {
            var _this7 = this;

            this.parlimenService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(function (x) {
              return x.filter(function (i) {
                return i.U_Negeri_ID == _this7.form.value.U_Negeri_ID;
              });
            })).subscribe(function (res) {
              console.log("parlimen", res);
              _this7.parlimen = res;
            });
          }
        }, {
          key: "getDun",
          value: function getDun() {
            var _this8 = this;

            this.dunService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(function (x) {
              return x.filter(function (i) {
                return i.U_Parlimen_ID == _this8.form.value.U_Parlimen_ID;
              });
            })).subscribe(function (res) {
              console.log("dun", res);
              _this8.dun = res;
            });
          }
        }, {
          key: "getKampung",
          value: function getKampung() {
            var _this9 = this;

            this.kampungService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(function (x) {
              return x.filter(function (i) {
                return i.U_Mukim_ID == _this9.form.value.U_Mukim_ID;
              });
            })).subscribe(function (res) {
              console.log("kampung", res);
              _this9.kampung = res;
            });
          }
        }, {
          key: "getSeksyen",
          value: function getSeksyen() {
            var _this10 = this;

            console.log(this.form.value.U_Mukim_ID);
            var mukim = parseInt(this.form.value.U_Mukim_ID);
            this.seksyenService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(function (x) {
              return x.filter(function (i) {
                return i.U_Mukim_ID == mukim;
              });
            })).subscribe(function (res) {
              console.log("seksyen", res);
              _this10.seksyen = res;
            });
          }
        }, {
          key: "logForm",
          value: function logForm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this11 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
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

                            _this11.setFormValues();

                            console.log("AAAAAAAA", _this11.produk.length);
                          }
                        }, {
                          text: 'Ya',
                          handler: function handler() {
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                              var _this12 = this;

                              var loading, prodTemp, prodTempLength;
                              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                while (1) {
                                  switch (_context2.prev = _context2.next) {
                                    case 0:
                                      console.log('Confirm Okay');
                                      _context2.next = 3;
                                      return this.loadingController.create({
                                        message: 'Loading ...'
                                      });

                                    case 3:
                                      loading = _context2.sent;
                                      loading.present();
                                      console.log(this.form.value);
                                      prodTemp = this.form.value.produk;
                                      prodTempLength = prodTemp.length;
                                      console.log("prodTemp", prodTemp);
                                      this.perniagaanService.update(this.form.value, this.usahawan_id).subscribe(function (res) {
                                        console.log("updated data", res);

                                        for (var i = 0; i < prodTempLength; i++) {
                                          console.log(prodTemp[i]);
                                          prodTemp[i].perniagaanid = res.id;
                                          prodTemp[i].modified_by = _this12.usahawan_id;

                                          if (prodTemp[i].id == '') {
                                            _this12.produkService.post(prodTemp[i]).subscribe(function (prodRes) {
                                              console.log("prodRes", prodRes);
                                            });
                                          } else {
                                            _this12.produkService.update(prodTemp[i], prodTemp[i].id).subscribe(function (prodRes) {
                                              console.log("prodRes", prodRes);
                                            });
                                          }
                                        }

                                        loading.dismiss();

                                        _this12.presentAlert();
                                      });

                                    case 10:
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
          key: "presentAlert",
          value: function presentAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Kemaskini Berjaya',
                        subHeader: 'Kemaskini Maklumat Perniagaan Telah Berjaya',
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

                    case 10:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "reset",
          value: function reset() {
            this.form.patchValue({
              U_Daerah_ID: null,
              U_Mukim_ID: null,
              U_Parlimen_ID: null,
              U_Dun_ID: null,
              U_Kampung_ID: null,
              U_Seksyen_ID: null
            });
          }
        }, {
          key: "reset2",
          value: function reset2() {
            this.form.patchValue({
              U_Kampung_ID: null,
              U_Seksyen_ID: null
            });
          }
        }, {
          key: "calcMaklumatPendapatan",
          value: function calcMaklumatPendapatan() {
            var _this13 = this;

            var purata_tahunan_sebelum_bantuan = this.form.value.purata_jualan_bulanan;
            console.log(purata_tahunan_sebelum_bantuan);
            this.aliranService.getTotalYear(this.user_id).subscribe(function (res) {
              console.log("jumlah tahunan", res);
              var jualan_tahunan_semasa = res;

              _this13.form.patchValue({
                hasil_jualan_tahunan: res
              });

              var peratus_kenaikan = (jualan_tahunan_semasa - purata_tahunan_sebelum_bantuan) / purata_tahunan_sebelum_bantuan * 100;

              _this13.form.patchValue({
                peratus_kenaikan: peratus_kenaikan.toFixed(2)
              });
            });
          } // use geolocation to get user's device coordinates

        }, {
          key: "getCurrentCoordinates",
          value: function getCurrentCoordinates() {
            var _this14 = this;

            this.geolocation.getCurrentPosition().then(function (resp) {
              _this14.latitude = resp.coords.latitude;
              _this14.longitude = resp.coords.longitude;

              _this14.form.patchValue({
                latitud: _this14.latitude,
                logitud: _this14.longitude
              });
            })["catch"](function (error) {
              console.log('Error getting location', error);
            });
            console.log(" this.latitude", this.latitude);
            console.log(" this.longitude", this.longitude);
          }
        }]);

        return ProfilePerniagaanPage;
      }();

      _ProfilePerniagaanPage.ctorParameters = function () {
        return [{
          type: src_app_services_perniagaan_perniagaan_service__WEBPACK_IMPORTED_MODULE_3__.PerniagaanService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router
        }, {
          type: src_app_services_perniagaan_perniagaan_model__WEBPACK_IMPORTED_MODULE_2__.PerniagaanModel
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.LoadingController
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder
        }, {
          type: src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_8__.NegeriService
        }, {
          type: src_app_services_daerah_daerah_service__WEBPACK_IMPORTED_MODULE_4__.DaerahService
        }, {
          type: src_app_services_mukim_mukim_service__WEBPACK_IMPORTED_MODULE_7__.MukimService
        }, {
          type: src_app_services_parlimen_parlimen_service__WEBPACK_IMPORTED_MODULE_9__.ParlimenService
        }, {
          type: src_app_services_dun_dun_service__WEBPACK_IMPORTED_MODULE_5__.DunService
        }, {
          type: src_app_services_kampung_kampung_service__WEBPACK_IMPORTED_MODULE_6__.KampungService
        }, {
          type: src_app_services_seksyen_seksyen_service__WEBPACK_IMPORTED_MODULE_10__.SeksyenService
        }, {
          type: src_app_services_produk_produk_service__WEBPACK_IMPORTED_MODULE_11__.ProdukService
        }, {
          type: src_app_services_Aliran_aliran_service__WEBPACK_IMPORTED_MODULE_12__.AliranService
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_13__.Geolocation
        }, {
          type: src_app_services_kluster_kluster_service__WEBPACK_IMPORTED_MODULE_14__.KlusterService
        }];
      };

      _ProfilePerniagaanPage = (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
        selector: 'app-profile-perniagaan',
        template: _raw_loader_profile_perniagaan_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_perniagaan_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProfilePerniagaanPage);
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
          value: function get(id) {
            return this.http.get("".concat(this.url) + '/' + id);
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
          key: "uploadDoc",
          value: function uploadDoc(data, id) {
            return this.http.post("".concat(this.url) + "/uploadDoc/" + id, data);
          }
        }, {
          key: "getTotalYear",
          value: function getTotalYear(id) {
            return this.http.get("".concat(this.url) + "/getYear/" + id);
          }
        }, {
          key: "getTotalMonth",
          value: function getTotalMonth(id) {
            return this.http.get("".concat(this.url) + "/getMonth/" + id);
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
    68379: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KlusterService": function KlusterService() {
          return (
            /* binding */
            _KlusterService
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

      var _KlusterService = /*#__PURE__*/function () {
        function KlusterService(http) {
          _classCallCheck(this, KlusterService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/kluster_perniagaan";
        } // post(data: any): Observable<any> {
        //   return this.http.post<any>(`${this.url}`, data);
        // }


        _createClass(KlusterService, [{
          key: "get",
          value: function get() {
            return this.http.get("".concat(this.url));
          }
        }]);

        return KlusterService;
      }();

      _KlusterService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _KlusterService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _KlusterService);
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
    96074: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PerniagaanModel": function PerniagaanModel() {
          return (
            /* binding */
            _PerniagaanModel
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PerniagaanModel = function PerniagaanModel() {
        _classCallCheck(this, PerniagaanModel);
      };

      _PerniagaanModel = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
      })], _PerniagaanModel);
      /***/
    },

    /***/
    24381: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PerniagaanService": function PerniagaanService() {
          return (
            /* binding */
            _PerniagaanService
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

      var _PerniagaanService = /*#__PURE__*/function () {
        function PerniagaanService(http) {
          _classCallCheck(this, PerniagaanService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/perniagaan";
          this.models = [];
        } // getUser(): Observable<PerniagaanModel[]> {
        //   return this.http.get<PerniagaanModel[]>(`${this.url}`);
        // }
        // check1user( user : PerniagaanModel): Observable<PerniagaanModel>{
        //   return this.http.post<PerniagaanModel>(`${this.url}`,user);
        // }


        _createClass(PerniagaanService, [{
          key: "show",
          value: function show(id) {
            return this.http.get("".concat(this.url) + "/" + id);
          }
        }, {
          key: "update",
          value: function update(perniagaan, usahawan_id) {
            return this.http.put("".concat(this.url, "/").concat(usahawan_id), perniagaan);
          }
        }]);

        return PerniagaanService;
      }();

      _PerniagaanService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _PerniagaanService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _PerniagaanService);
      /***/
    },

    /***/
    16114: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProdukService": function ProdukService() {
          return (
            /* binding */
            _ProdukService
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

      var _ProdukService = /*#__PURE__*/function () {
        // public models: PerniagaanModel[] = [];
        // public model: PerniagaanModel;
        function ProdukService(http) {
          _classCallCheck(this, ProdukService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/produk";
        }

        _createClass(ProdukService, [{
          key: "get",
          value: function get(id) {
            return this.http.get("".concat(this.url) + "/" + id);
          }
        }, {
          key: "update",
          value: function update(data, id) {
            return this.http.put("".concat(this.url, "/").concat(id), data);
          }
        }, {
          key: "post",
          value: function post(data) {
            return this.http.post("".concat(this.url), data);
          }
        }, {
          key: "delete",
          value: function _delete(produk_id) {
            return this.http["delete"]("".concat(this.url, "/").concat(produk_id));
          }
        }]);

        return ProdukService;
      }();

      _ProdukService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _ProdukService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _ProdukService);
      /***/
    },

    /***/
    72419: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".read-only {\n  background-color: #e2e2e2;\n  color: #6d6d6d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtcGVybmlhZ2Fhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJwcm9maWxlLXBlcm5pYWdhYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlYWQtb25seSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcbiAgICBjb2xvcjojNmQ2ZDZkXG59XG4iXX0= */";
      /***/
    },

    /***/
    96226: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button href=\"/dashboard\">\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <!-- <ion-back-button defaultHref=\"/dashboard\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-text color=\"warning\">\n      <h1>\n        <strong>\n          PROFIL PERNIAGAAN\n        </strong>\n      </h1>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n\n    <ion-fab-button color=\"light\">\n      <ion-icon color=\"warning\" name=\"caret-down-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"bottom\">\n      <ion-fab-button color=\"warning\" href=\"/profile\">\n        <img src=\"assets/icon/usahawan-icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"warning\"><small> Usahawan</small></ion-text>\n      <ion-fab-button color=\"warning\" href=\"/profile-syarikat\">\n        <img src=\"assets/icon/Syarikat--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"warning\"><small> Syarikat</small></ion-text>\n\n      <ion-fab-button color=\"warning\" href=\"/profile-perniagaan\">\n        <img src=\"assets/icon/Perniagaan--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"warning\"><small> Perniagaan</small></ion-text>\n\n      <ion-fab-button color=\"warning\" href=\"/profile-pekebun\">\n        <img src=\"assets/icon/Pekebun--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"warning\"><small> Pekebun</small></ion-text>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-grid [fixed]=\"true\">\n\n\n    <form [formGroup]=\"form\" class=\"ion-padding form-control\" (ngSubmit)=\"logForm()\">\n\n      <ion-row style=\"background-color: #FF6600; color:white\">\n        <ion-col>\n          <strong>Maklumat Perniagaan</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <br>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>JENIS PERNIAGAAN <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input formControlName=\"jenisperniagaan\"></ion-input> -->\n          <ion-select formControlName=\"jenisperniagaan\" style=\"width:100%,\" (ionChange)=\"getKluster(); resetKluster();\">\n            <ion-select-option *ngFor=\"let jenis_perniagaan of jenis_perniagaan\" value=\"{{jenis_perniagaan.id}}\"\n              style=\"word-wrap:break-word\">{{jenis_perniagaan.name}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>KLUSTER PERNIAGAAN <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input formControlName=\"klusterperniagaan\"></ion-input> -->\n          <ion-select formControlName=\"klusterperniagaan\" style=\"width:100%,\">\n            <ion-select-option *ngFor=\"let klusterPerniagaans of klusterPerniagaan\" value=\"{{klusterPerniagaans.kluster_id}}\" \n              style=\"word-wrap:break-word\">{{klusterPerniagaans.nama_kluster}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>SUB KLUSTER PERNIAGAAN <span style=\"color: red;\">*</span></ion-label>\n          <ion-input formControlName=\"subkluster\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NO RUMAH/LOT/PINTU <span style=\"color: red;\">*</span></ion-label>\n          <ion-input formControlName=\"alamat1\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NAMA JALAN <span style=\"color: red;\">*</span></ion-label>\n          <ion-input formControlName=\"alamat2\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> KAMPUNG/TAMAN <span style=\"color: red;\">*</span></ion-label>\n          <ion-input formControlName=\"alamat3\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> BANDAR <span style=\"color: red;\">*</span></ion-label>\n          <ion-input formControlName=\"bandar\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> POSKOD <span style=\"color: red;\">*</span></ion-label>\n          <ion-input type=\"Number\" formControlName=\"poskod\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NEGERI <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input formControlName=\"U_Negeri_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Negeri_ID\" (ionChange)=\"getDaerah($event); reset()\">\n            <ion-select-option *ngFor=\"let negeri of negeri\" value=\"{{negeri.U_Negeri_ID}}\">\n              {{negeri.Negeri}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> DAERAH <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input value=\"{{usahawan.U_Daerah_ID}}\" formControlName=\"U_Daerah_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Daerah_ID\" (ionChange)=\"getMukim($event)\">\n            <ion-select-option *ngFor=\"let daerah of daerah\" value=\"{{daerah.U_Daerah_ID}}\">{{daerah.Daerah}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n        <ion-col>\n          <ion-label> MUKIM <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input  formControlName=\"U_Mukim_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Mukim_ID\" (ionChange)=\"getKampung($event); getSeksyen(); reset2()\">\n            <ion-select-option *ngFor=\"let mukim of mukim\" value=\"{{mukim.U_Mukim_ID}}\">{{mukim.Mukim}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> PARLIMEN <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input value=\"{{usahawan.U_Parlimen_ID}}\" formControlName=\"U_Parlimen_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Parlimen_ID\" (ionChange)=\"getDun()\">\n            <ion-select-option *ngFor=\"let parlimen of parlimen\" value=\"{{parlimen.U_Parlimen_ID}}\">\n              {{parlimen.Parlimen}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n        <ion-col>\n          <ion-label> DUN <span style=\"color: red;\">*</span></ion-label>\n          <!-- <ion-input value=\"{{usahawan.U_Dun_ID}}\" formControlName=\"U_Dun_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Dun_ID\">\n            <ion-select-option *ngFor=\"let dun of dun\" value=\"{{dun.U_Dun_ID}}\">{{dun.Dun}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> KAMPUNG</ion-label>\n          <!-- <ion-input value=\"{{usahawan.U_Kampung_ID}}\" formControlName=\"U_Kampung_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Kampung_ID\">\n            <ion-select-option *ngFor=\"let kampung of kampung\" [value]=\"kampung.U_Kampung_ID\"\n              selected=\"kampung.U_Kampung_ID == this.usahawan.U_Kampung_ID\">{{kampung.Kampung}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n        <ion-col>\n          <ion-label> SEKSYEN</ion-label>\n          <!-- <ion-input value=\"{{usahawan.U_Seksyen_ID}}\" formControlName=\"U_Seksyen_ID\"></ion-input> -->\n          <ion-select formControlName=\"U_Seksyen_ID\">\n            <ion-select-option *ngFor=\"let seksyen of seksyen\" [value]=\"seksyen.U_Seksyen_ID\"\n              selected=\"seksyen.U_Seksyen_ID == this.usahawan.U_Seksyen_ID\">{{seksyen.Seksyen}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>LATITUD <span style=\"color: red;\">*</span></ion-label>\n          <ion-input formControlName=\"latitud\"></ion-input>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n          <ion-label> LONGITUD <span style=\"color: red;\">*</span></ion-label>\n          <ion-input formControlName=\"logitud\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\" style=\"display: flex; justify-content:center\">\n          <ion-button fill=\"outline\" color=\"dark\" (click)=\"getCurrentCoordinates()\" expand=\"block\" style=\"width: 60%;\">\n            <strong>LOKASI GPS</strong> \n          </ion-button>\n        </ion-col>\n      </ion-row>\n      \n\n      <br><br><br>\n      <ion-row style=\"background-color: #FF6600; color:white\">\n        <ion-col>\n          <strong>Maklumat Media Sosial</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <br>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> FACEBOOK </ion-label>\n          <ion-input formControlName=\"facebook\" style=\"text-transform: none;\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label> INSTAGRAM</ion-label>\n          <ion-input formControlName=\"instagram\" style=\"text-transform: none;\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label> TWITTER</ion-label>\n          <ion-input formControlName=\"twitter\" style=\"text-transform: none;\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label> LAMAN WEB</ion-label>\n          <ion-input formControlName=\"lamanweb\" style=\"text-transform: none;\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <br><br><br>\n      <ion-row style=\"background-color: #FF6600; color:white\">\n        <ion-col>\n          <strong>Maklumat Pemasaran</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <br>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>BILANGAN DROPSHIP</ion-label>\n          <ion-input type=\"Number\" formControlName=\"dropship\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label>BILANGAN EJEN</ion-label>\n          <ion-input type=\"Number\" formControlName=\"ejen\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>BILANGAN STOKIS</ion-label>\n          <ion-input type=\"Number\" formControlName=\"stokis\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label>BILANGAN OUTLET</ion-label>\n          <ion-input type=\"Number\" formControlName=\"outlet\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label> PASARAN DOMESTIK</ion-label>\n          <ion-input formControlName=\"domestik\" placeholder=\"Nyatakan Daerah/Negeri\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label> PASARAN LUAR NEGERA</ion-label>\n          <ion-input formControlName=\"luarnegara\" placeholder=\"Nyatakan Negara\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> PASARAN ONLINE</ion-label>\n          <ion-input formControlName=\"pasaranonline\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n\n\n      <br><br><br>\n      <ion-row style=\"background-color: #FF6600; color:white\">\n        <ion-col>\n          <strong>Maklumat Pendapatan</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <br>\n\n      <ion-row>\n        <ion-col>\n          <ion-label style=\"text-transform: uppercase;\"> Purata jualan tahunan tahun sebelum bantuan</ion-label>\n          <ion-input type=\"Number\" formControlName=\"purata_jualan_bulanan\" (ionChange)=\"calcMaklumatPendapatan()\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label style=\"text-transform: uppercase;\"> Jumlah jualan tahunan bagi tahun semasa</ion-label>\n          <ion-input class=\"read-only\" type=\"Number\" formControlName=\"hasil_jualan_tahunan\" readonly></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label style=\"text-transform: uppercase;\"> Peratus kenaikan </ion-label>\n          <ion-input class=\"read-only\" type=\"Number\" formControlName=\"peratus_kenaikan\" readonly></ion-input>\n        </ion-col>\n      </ion-row>\n\n\n      <br><br><br>\n      <ion-row style=\"background-color: #FF6600; color:white\">\n        <ion-col>\n          <strong>Maklumat Produk</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <br>\n      <div formArrayName=\"produk\">\n        <div *ngFor=\"let produk of getProdukArray.controls; let i=index\" [formGroupName]=\"i\">\n          \n          <ion-row>\n            <ion-col>\n              <ion-label> JENAMA PRODUK </ion-label>\n              <ion-input value=\"\" formControlName=\"jenamaproduk\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-label> UNIT METRIK</ion-label>\n              <ion-input formControlName=\"unitmatrik\" placeholder=\"10KG/ 5 UNIT/1.5L/2 KARTON\"></ion-input>\n            </ion-col>\n            <ion-col>\n              <ion-label> HARGA PER UNIT (RM)</ion-label>\n              <ion-input type=\"number\" formControlName=\"hargaperunit\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-label> KAPASITI MAKSIMUM</ion-label>\n              <ion-input type=\"number\" formControlName=\"kapasitimaksimum\"></ion-input>\n            </ion-col>\n            <ion-col>\n              <ion-label> KAPASITI SEMASA</ion-label>\n              <ion-input type=\"number\" formControlName=\"kapasitisemasa\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row style=\"margin-bottom: 20px;\">\n            <ion-col class=\"form-control\">\n              <div style=\"width:100%; display:flex; justify-content:flex-end;\">\n\n                <div *ngIf=\"i != 0\" class=\"ion-text-center\" (click)=\"deleteProduk(i, produk.value.id)\">\n                  <img src=\"assets/new-iconv2/hapus.png\" alt=\"\" height=\"30\" width=\"30\">\n                  <br>\n                </div>\n\n                <div *ngIf=\"i == (productLength-1)\" class=\"ion-text-center\" (click)=\"addProduk()\">\n                  <img src=\"assets/new-iconv2/Tambah.png\" alt=\"\" height=\"30\" width=\"30\">\n                  <br>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n\n\n\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"submit\" expand=\"block\" color=\"dark\" [disabled]=\"form.invalid\">KEMASKINI</ion-button>\n        </ion-col>\n      </ion-row>\n\n\n    </form>\n\n  </ion-grid>\n\n\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_auth_profile-perniagaan_profile-perniagaan_module_ts-es5.js.map