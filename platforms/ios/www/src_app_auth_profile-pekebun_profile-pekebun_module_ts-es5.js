(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_auth_profile-pekebun_profile-pekebun_module_ts"], {
    /***/
    2821: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LokalitiTanahPage": function LokalitiTanahPage() {
          return (
            /* binding */
            _LokalitiTanahPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_lokaliti_tanah_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./lokaliti-tanah.page.html */
      43594);
      /* harmony import */


      var _lokaliti_tanah_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lokaliti-tanah.page.scss */
      60780);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      19122);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var src_app_services_daerah_daerah_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/daerah/daerah.service */
      42122);
      /* harmony import */


      var src_app_services_dun_dun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/dun/dun.service */
      88641);
      /* harmony import */


      var src_app_services_kampung_kampung_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/kampung/kampung.service */
      92272);
      /* harmony import */


      var src_app_services_mukim_mukim_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/mukim/mukim.service */
      46175);
      /* harmony import */


      var src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/negeri/negeri.service */
      64802);
      /* harmony import */


      var src_app_services_parlimen_parlimen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/parlimen/parlimen.service */
      21450);
      /* harmony import */


      var src_app_services_seksyen_seksyen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/seksyen/seksyen.service */
      48203);

      var _LokalitiTanahPage = /*#__PURE__*/function () {
        function LokalitiTanahPage(modalController, formBuilder, negeriService, daerahService, mukimService, parlimenService, dunService, kampungService, seksyenService, loadingController, alertController) {
          _classCallCheck(this, LokalitiTanahPage);

          this.modalController = modalController;
          this.formBuilder = formBuilder;
          this.negeriService = negeriService;
          this.daerahService = daerahService;
          this.mukimService = mukimService;
          this.parlimenService = parlimenService;
          this.dunService = dunService;
          this.kampungService = kampungService;
          this.seksyenService = seksyenService;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.form = this.formBuilder.group({
            pekebunid: [''],
            No_Geran: [''],
            No_Lot: [''],
            U_Negeri_ID: [''],
            U_Daerah_ID: [''],
            U_Mukim_ID: [''],
            U_Parlimen_ID: [''],
            U_Dun_ID: [''],
            U_Kampung_ID: [''],
            U_Seksyen_ID: [''],
            Luas_Lot: [''],
            Tanaman: this.formBuilder.array([])
          });
        }
        /** Tanah */


        _createClass(LokalitiTanahPage, [{
          key: "tanamans",
          value: function tanamans() {
            return this.form.get("Tanaman");
          }
        }, {
          key: "newTanaman",
          value: function newTanaman() {
            return this.formBuilder.group({
              tanahid: [''],
              Jenis_Tanaman: ['']
            });
          }
        }, {
          key: "addTanaman",
          value: function addTanaman() {
            this.tanamans().push(this.newTanaman());
          }
        }, {
          key: "patchValue2",
          value: function patchValue2() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

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
                      loading.present();
                      this.data.Tanaman.forEach(function (t) {
                        var tanah = _this.newTanaman(); // console.log("patch tanah", tanah.value);


                        _this.tanamans().push(tanah);
                      });
                      this.form.patchValue(this.data);
                      console.log("form", this.form.value);
                      loading.dismiss();

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("dataLALALAL", this.maklumatTanah);
            this.data = this.maklumatTanah[0].data;
            this.index = this.maklumatTanah[0].index;
            console.log("index", this.index);
            console.log("datakasdkjs", this.data);
            this.getLocaliti();
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }, {
          key: "getLocaliti",
          value: function getLocaliti() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        message: 'Loading ...'
                      });

                    case 2:
                      loading = _context2.sent;
                      loading.present();
                      this.negeriService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(function (x) {
                        return x.filter(function (i) {
                          return i.U_Negeri_ID == _this2.data.U_Negeri_ID;
                        });
                      })).subscribe(function (resNegeri) {
                        console.log("Negeri", resNegeri);
                        _this2.negeri = resNegeri;

                        _this2.daerahService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(function (x) {
                          return x.filter(function (i) {
                            return i.U_Daerah_ID == _this2.data.U_Daerah_ID;
                          });
                        })).subscribe(function (resDaerah) {
                          console.log("resDaerah", resDaerah);
                          _this2.daerah = resDaerah;

                          _this2.mukimService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(function (x) {
                            return x.filter(function (i) {
                              return i.U_Mukim_ID == _this2.data.U_Mukim_ID;
                            });
                          })).subscribe(function (resMukim) {
                            console.log("resMukim", resMukim);
                            _this2.mukim = resMukim;

                            _this2.parlimenService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(function (x) {
                              return x.filter(function (i) {
                                return i.U_Parlimen_ID == _this2.data.U_Parlimen_ID;
                              });
                            })).subscribe(function (resParlimen) {
                              console.log("resParlimen", resParlimen);
                              _this2.parlimen = resParlimen;

                              _this2.dunService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(function (x) {
                                return x.filter(function (i) {
                                  return i.U_Dun_ID == _this2.data.U_Dun_ID;
                                });
                              })).subscribe(function (resDun) {
                                console.log("resDun", resDun);
                                _this2.dun = resDun;

                                _this2.kampungService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(function (x) {
                                  return x.filter(function (i) {
                                    return i.U_Kampung_ID == _this2.data.U_Kampung_ID;
                                  });
                                })).subscribe(function (resKampung) {
                                  console.log("resKampung", resKampung);
                                  _this2.kampung = resKampung;

                                  _this2.seksyenService.get().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(function (x) {
                                    return x.filter(function (i) {
                                      return i.U_Seksyen_ID == _this2.data.U_Seksyen_ID;
                                    });
                                  })).subscribe(function (resSeksyen) {
                                    console.log("resSeksyen", resSeksyen);
                                    _this2.seksyen = resSeksyen;

                                    _this2.patchValue2();

                                    loading.dismiss();
                                  });
                                });
                              });
                            });
                          });
                        });
                      });

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return LokalitiTanahPage;
      }();

      _LokalitiTanahPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder
        }, {
          type: src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_6__.NegeriService
        }, {
          type: src_app_services_daerah_daerah_service__WEBPACK_IMPORTED_MODULE_2__.DaerahService
        }, {
          type: src_app_services_mukim_mukim_service__WEBPACK_IMPORTED_MODULE_5__.MukimService
        }, {
          type: src_app_services_parlimen_parlimen_service__WEBPACK_IMPORTED_MODULE_7__.ParlimenService
        }, {
          type: src_app_services_dun_dun_service__WEBPACK_IMPORTED_MODULE_3__.DunService
        }, {
          type: src_app_services_kampung_kampung_service__WEBPACK_IMPORTED_MODULE_4__.KampungService
        }, {
          type: src_app_services_seksyen_seksyen_service__WEBPACK_IMPORTED_MODULE_8__.SeksyenService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
        }];
      };

      _LokalitiTanahPage.propDecorators = {
        maklumatTanah: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input
        }]
      };
      _LokalitiTanahPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-lokaliti-tanah',
        template: _raw_loader_lokaliti_tanah_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_lokaliti_tanah_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LokalitiTanahPage);
      /***/
    },

    /***/
    63018: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePekebunPageRoutingModule": function ProfilePekebunPageRoutingModule() {
          return (
            /* binding */
            _ProfilePekebunPageRoutingModule
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


      var _profile_pekebun_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile-pekebun.page */
      66653);

      var routes = [{
        path: '',
        component: _profile_pekebun_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePekebunPage
      }, {
        path: 'lokaliti-tanah',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_auth_profile-pekebun_lokaliti-tanah_lokaliti-tanah_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./lokaliti-tanah/lokaliti-tanah.module */
          28687)).then(function (m) {
            return m.LokalitiTanahPageModule;
          });
        }
      }];

      var _ProfilePekebunPageRoutingModule = function ProfilePekebunPageRoutingModule() {
        _classCallCheck(this, ProfilePekebunPageRoutingModule);
      };

      _ProfilePekebunPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ProfilePekebunPageRoutingModule);
      /***/
    },

    /***/
    33003: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePekebunPageModule": function ProfilePekebunPageModule() {
          return (
            /* binding */
            _ProfilePekebunPageModule
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


      var _profile_pekebun_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile-pekebun-routing.module */
      63018);
      /* harmony import */


      var _profile_pekebun_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile-pekebun.page */
      66653);

      var _ProfilePekebunPageModule = function ProfilePekebunPageModule() {
        _classCallCheck(this, ProfilePekebunPageModule);
      };

      _ProfilePekebunPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _profile_pekebun_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePekebunPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_profile_pekebun_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePekebunPage]
      })], _ProfilePekebunPageModule);
      /***/
    },

    /***/
    66653: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePekebunPage": function ProfilePekebunPage() {
          return (
            /* binding */
            _ProfilePekebunPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_profile_pekebun_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./profile-pekebun.page.html */
      22884);
      /* harmony import */


      var _profile_pekebun_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile-pekebun.page.scss */
      72930);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_pekebun_pekebun_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/pekebun/pekebun.model */
      16955);
      /* harmony import */


      var src_app_services_pekebun_pekebun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/pekebun/pekebun.service */
      95855);
      /* harmony import */


      var src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/negeri/negeri.service */
      64802);
      /* harmony import */


      var src_app_services_daerah_daerah_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/daerah/daerah.service */
      42122);
      /* harmony import */


      var src_app_services_mukim_mukim_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/mukim/mukim.service */
      46175);
      /* harmony import */


      var src_app_services_parlimen_parlimen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/parlimen/parlimen.service */
      21450);
      /* harmony import */


      var src_app_services_dun_dun_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/dun/dun.service */
      88641);
      /* harmony import */


      var src_app_services_kampung_kampung_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/kampung/kampung.service */
      92272);
      /* harmony import */


      var src_app_services_seksyen_seksyen_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/seksyen/seksyen.service */
      48203);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic/angular */
      19122);
      /* harmony import */


      var _lokaliti_tanah_lokaliti_tanah_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./lokaliti-tanah/lokaliti-tanah.page */
      2821);

      var _ProfilePekebunPage = /*#__PURE__*/function () {
        function ProfilePekebunPage(pekebunService, router, pekebun, // private pekebunKecilService: PekebunKecilService,
        formBuilder, negeriService, daerahService, mukimService, parlimenService, dunService, kampungService, seksyenService, loadingController, alertController, modalController) {
          _classCallCheck(this, ProfilePekebunPage);

          this.pekebunService = pekebunService;
          this.router = router;
          this.pekebun = pekebun;
          this.formBuilder = formBuilder;
          this.negeriService = negeriService;
          this.daerahService = daerahService;
          this.mukimService = mukimService;
          this.parlimenService = parlimenService;
          this.dunService = dunService;
          this.kampungService = kampungService;
          this.seksyenService = seksyenService;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.modalController = modalController;
          this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
          this.user_id = window.sessionStorage.getItem("user_id");
          this.tanah = [];
          this.tanaman = [];
          this.form = this.formBuilder.group({
            // no_kp: ['',],
            // usahawanid: ['',],
            Nama_PK: [''],
            No_KP: [''],
            noTS: [''],
            Tanah: this.formBuilder.array([])
          });
        }
        /** Tanah */


        _createClass(ProfilePekebunPage, [{
          key: "tanahs",
          value: function tanahs() {
            return this.form.get("Tanah");
          }
        }, {
          key: "newTanah",
          value: function newTanah() {
            return this.formBuilder.group({
              pekebunid: [''],
              No_Geran: [''],
              No_Lot: [''],
              U_Negeri_ID: [''],
              U_Daerah_ID: [''],
              U_Mukim_ID: [''],
              U_Parlimen_ID: [''],
              U_Dun_ID: [''],
              U_Kampung_ID: [''],
              U_Seksyen_ID: [''],
              Luas_Lot: [''],
              Tanaman: this.formBuilder.array([])
            });
          }
        }, {
          key: "addTanah",
          value: function addTanah() {
            this.tanahs().push(this.newTanah());
          }
          /** tanaman */

        }, {
          key: "tanamans",
          value: function tanamans(ti) {
            return this.tanahs().at(ti).get("Tanaman");
          }
        }, {
          key: "newTanaman",
          value: function newTanaman() {
            return this.formBuilder.group({
              tanahid: [''],
              Jenis_Tanaman: ['']
            });
          }
        }, {
          key: "addTanaman",
          value: function addTanaman(ti) {
            this.tanamans(ti).push(this.newTanaman());
          }
        }, {
          key: "removeTanaman",
          value: function removeTanaman(ti, bi) {
            this.tanamans(ti).removeAt(ti);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("usahawan id", this.usahawan_id);
            console.log("user id", this.user_id);
            this.getPekebun();
            this.getLocaliti();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
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
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                              var _this4 = this;

                              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                while (1) {
                                  switch (_context3.prev = _context3.next) {
                                    case 0:
                                      console.log(this.form.value);
                                      this.pekebunService.update(this.form.value, this.pekebun.id).subscribe(function (res) {
                                        console.log("response", res);

                                        _this4.pekebunService.deleteTanah(res.id).subscribe(function (deletedData) {
                                          console.log("deletedData", deletedData);
                                        });

                                        _this4.form.value.Tanah.forEach(function (element) {
                                          console.log("submit tanah", element);

                                          _this4.pekebunService.updateTanah(element, res.id).subscribe(function (res2) {
                                            console.log("updateTanah", res2);

                                            _this4.pekebunService.deleteTanaman(res2).subscribe(function (deletedTanaman) {
                                              console.log("deletedTanaman", deletedTanaman);
                                            });

                                            element.Tanaman.forEach(function (element2) {
                                              console.log("submit tanaman", element2);

                                              _this4.pekebunService.updateTanaman(element2, res2).subscribe(function (updatedTanaman) {
                                                console.log("updatedTanaman", updatedTanaman);
                                              });
                                            });
                                          });
                                        });

                                        _this4.presentAlert();
                                      });

                                    case 2:
                                    case "end":
                                      return _context3.stop();
                                  }
                                }
                              }, _callee3, this);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Kemaskini Berjaya',
                        subHeader: 'Kemaskini Maklumat Pekebun Telah Berjaya',
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
                      _yield$alert$onDidDis = _context5.sent;
                      role = _yield$alert$onDidDis.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "presentAlert2",
          value: function presentAlert2() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var alert, _yield$alert$onDidDis2, role;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Harap Maaf',
                        subHeader: 'Tiada Rekod Pekebun Dijumpai',
                        message: '',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                      _context6.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis2 = _context6.sent;
                      role = _yield$alert$onDidDis2.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "patchValue2",
          value: function patchValue2() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this5 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.loadingController.create({
                        message: 'Loading ...'
                      });

                    case 2:
                      loading = _context7.sent;
                      loading.present();
                      this.pekebunKecil.Tanah.forEach(function (t) {
                        var tanah = _this5.newTanah(); // console.log("patch tanah", tanah.value);


                        _this5.tanahs().push(tanah);

                        t.Tanaman.forEach(function (b) {
                          // console.log(b)
                          var tanaman = _this5.newTanaman();

                          tanah.get("Tanaman").push(tanaman);
                        });
                      });
                      this.form.patchValue(this.pekebunKecil);
                      console.log("form", this.form.value);
                      loading.dismiss();

                    case 8:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "getPekebun",
          value: function getPekebun() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this6 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.loadingController.create({
                        message: 'Loading ...'
                      });

                    case 2:
                      loading = _context8.sent;
                      loading.present();
                      this.pekebunService.show(this.usahawan_id).subscribe(function (res) {
                        console.log("pekebun info", res);

                        if (Object.keys(res).length === 0) {
                          console.log("failed");
                          loading.dismiss();

                          _this6.presentAlert2();
                        } else {
                          if (res.No_KP == null) {
                            loading.dismiss();

                            _this6.presentAlert2();
                          } else {
                            _this6.pekebun = res;

                            _this6.getMaklumatPekebun(res.No_KP);

                            _this6.getNoTS(res.No_KP);

                            loading.dismiss();
                          }
                        }
                      });

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "getMaklumatPekebun",
          value: function getMaklumatPekebun(nokp) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this7 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.loadingController.create({
                        message: 'Loading ...'
                      });

                    case 2:
                      loading = _context9.sent;
                      loading.present();
                      this.pekebunService.getPekebunEpek(nokp).subscribe(function (res) {
                        console.log("pekebun kecil info", res); // let response = parseInt(res);

                        if (res == 400) {
                          console.log("takde data");
                          loading.dismiss();

                          _this7.presentAlert2();
                        } else {
                          _this7.pekebunKecil = res[0];

                          _this7.patchValue2();

                          loading.dismiss();
                        }
                      });

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "getNoTS",
          value: function getNoTS(nokp) {
            var _this8 = this;

            this.pekebunService.getNoTS(nokp).subscribe(function (res) {
              console.log("noTS", res);

              if (res == 400) {} else {
                _this8.form.patchValue({
                  noTS: res[0].noTS
                });
              }
            });
          }
        }, {
          key: "getLocaliti",
          value: function getLocaliti() {
            var _this9 = this;

            this.negeriService.get().subscribe(function (resNegeri) {
              console.log("Negeri", resNegeri);
              _this9.negeri = resNegeri;

              _this9.daerahService.get().subscribe(function (resDaerah) {
                console.log("resDaerah", resDaerah);
                _this9.daerah = resDaerah; // this.mukimService.get().subscribe((resMukim) => {
                //   console.log("resMukim", resMukim)
                //   this.mukim = resMukim;
                //   this.parlimenService.get().subscribe((resParlimen) => {
                //     console.log("resParlimen", resParlimen)
                //     this.parlimen = resParlimen;
                //     this.dunService.get().subscribe((resDun) => {
                //       console.log("resDun", resDun)
                //       this.dun = resDun;
                //       this.kampungService.get().subscribe((resKampung) => {
                //         console.log("resKampung", resKampung)
                //         this.kampung = resKampung;
                //         this.seksyenService.get().subscribe((resSeksyen) => {
                //           console.log("resSeksyen", resSeksyen)
                //           this.seksyen = resSeksyen;
                //         })
                //       })
                //     })
                //   })
                // })
              });
            });
          }
        }, {
          key: "openMyModal",
          value: function openMyModal(tanah, index) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var maklumatTanah, myModal;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      maklumatTanah = [{
                        "data": tanah.value,
                        "index": index
                      }];
                      console.log("maklumatTanah", maklumatTanah);
                      console.log("tanah", tanah.value); // let data = tanah.value

                      _context10.next = 5;
                      return this.modalController.create({
                        component: _lokaliti_tanah_lokaliti_tanah_page__WEBPACK_IMPORTED_MODULE_11__.LokalitiTanahPage,
                        backdropDismiss: true,
                        cssClass: 'options_modal',
                        componentProps: {
                          maklumatTanah: maklumatTanah
                        }
                      });

                    case 5:
                      myModal = _context10.sent;
                      _context10.next = 8;
                      return myModal.present();

                    case 8:
                      return _context10.abrupt("return", _context10.sent);

                    case 9:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }]);

        return ProfilePekebunPage;
      }();

      _ProfilePekebunPage.ctorParameters = function () {
        return [{
          type: src_app_services_pekebun_pekebun_service__WEBPACK_IMPORTED_MODULE_3__.PekebunService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
        }, {
          type: src_app_services_pekebun_pekebun_model__WEBPACK_IMPORTED_MODULE_2__.PekebunModel
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder
        }, {
          type: src_app_services_negeri_negeri_service__WEBPACK_IMPORTED_MODULE_4__.NegeriService
        }, {
          type: src_app_services_daerah_daerah_service__WEBPACK_IMPORTED_MODULE_5__.DaerahService
        }, {
          type: src_app_services_mukim_mukim_service__WEBPACK_IMPORTED_MODULE_6__.MukimService
        }, {
          type: src_app_services_parlimen_parlimen_service__WEBPACK_IMPORTED_MODULE_7__.ParlimenService
        }, {
          type: src_app_services_dun_dun_service__WEBPACK_IMPORTED_MODULE_8__.DunService
        }, {
          type: src_app_services_kampung_kampung_service__WEBPACK_IMPORTED_MODULE_9__.KampungService
        }, {
          type: src_app_services_seksyen_seksyen_service__WEBPACK_IMPORTED_MODULE_10__.SeksyenService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController
        }];
      };

      _ProfilePekebunPage = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-profile-pekebun',
        template: _raw_loader_profile_pekebun_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_pekebun_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProfilePekebunPage);
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
    16955: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PekebunModel": function PekebunModel() {
          return (
            /* binding */
            _PekebunModel
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

      var _PekebunModel = function PekebunModel() {
        _classCallCheck(this, PekebunModel);
      };

      _PekebunModel = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
      })], _PekebunModel);
      /***/
    },

    /***/
    95855: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PekebunService": function PekebunService() {
          return (
            /* binding */
            _PekebunService
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

      var _PekebunService = /*#__PURE__*/function () {
        function PekebunService(http) {
          _classCallCheck(this, PekebunService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/pekebun";
          this.models = [];
          this.url2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/tanah";
          this.url3 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/tanaman";
        }

        _createClass(PekebunService, [{
          key: "show",
          value: function show(id) {
            return this.http.get("".concat(this.url) + "/" + id);
          }
        }, {
          key: "update",
          value: function update(data, id) {
            return this.http.put("".concat(this.url, "/").concat(id), data);
          }
        }, {
          key: "getPekebunEpek",
          value: function getPekebunEpek(nokp) {
            return this.http.get("".concat(this.url) + "/getPekebunEspek/" + nokp);
          }
        }, {
          key: "getNoTS",
          value: function getNoTS(nokp) {
            return this.http.get("".concat(this.url) + "/getNoTS/" + nokp);
          }
        }, {
          key: "updateTanah",
          value: function updateTanah(data, pekebun_id) {
            return this.http.put("".concat(this.url2, "/").concat(pekebun_id), data);
          }
        }, {
          key: "deleteTanah",
          value: function deleteTanah(pekebun_id) {
            return this.http["delete"]("".concat(this.url2, "/").concat(pekebun_id));
          }
        }, {
          key: "updateTanaman",
          value: function updateTanaman(data, tanah_id) {
            return this.http.put("".concat(this.url3, "/").concat(tanah_id), data);
          }
        }, {
          key: "deleteTanaman",
          value: function deleteTanaman(tanah_id) {
            return this.http["delete"]("".concat(this.url3, "/").concat(tanah_id));
          }
        }]);

        return PekebunService;
      }();

      _PekebunService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _PekebunService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _PekebunService);
      /***/
    },

    /***/
    60780: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2thbGl0aS10YW5haC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    72930: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".read-only {\n  background-color: #e2e2e2;\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtcGVrZWJ1bi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJwcm9maWxlLXBla2VidW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlYWQtb25seSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcbiAgICBjb2xvcjojMDAwMDAwXG59XG5cbi8vIGlvbi1zZWxlY3Q6ZGlzYWJsZWR7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcbi8vICAgICBjb2xvcjojMDAwMDAwXG4vLyB9Il19 */";
      /***/
    },

    /***/
    43594: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"display:flex; justify-content:center; align-items:center\">\n\n    \n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <ion-text style=\"display:flex; justify-content:center;\">\n        <h5 style=\"color: #15493C;\">\n          <!-- <strong class=\"ion-text-uppercase\"> -->\n          MAKLUMAT TANAH {{ index }}\n          <!-- </strong> -->\n        </h5>\n      </ion-text>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <form [formGroup]=\"form\" class=\"ion-padding form-control\">\n\n    <ion-row class=\"ion-margin-bottom\" style=\"background-color: #FF6600; color:white\">\n      <ion-col>\n        <strong>Maklumat Tanah {{ index }}</strong>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-label> NO.GERAN</ion-label>\n        <ion-input formControlName=\"No_Geran\" disabled></ion-input>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-label> NEGERI</ion-label>\n        <!-- <ion-input formControlName=\"U_Negeri_ID\" ></ion-input> -->\n        <ion-select formControlName=\"U_Negeri_ID\" disabled>\n          <ion-select-option *ngFor=\"let negeri of negeri\" value=\"{{negeri.U_Negeri_ID}}\">{{negeri.Negeri}}\n          </ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-label> DAERAH</ion-label>\n        <!-- <ion-input formControlName=\"U_Daerah_ID\"></ion-input> -->\n        <ion-select formControlName=\"U_Daerah_ID\" disabled>\n          <ion-select-option *ngFor=\"let daerah of daerah\" value=\"{{daerah.U_Daerah_ID}}\">{{daerah.Daerah}}\n          </ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col>\n        <ion-label> MUKIM</ion-label>\n        <!-- <ion-input formControlName=\"U_Mukim_ID\"></ion-input> -->\n        <ion-select formControlName=\"U_Mukim_ID\" disabled>\n          <ion-select-option *ngFor=\"let mukim of mukim\" value=\"{{mukim.U_Mukim_ID}}\">{{mukim.Mukim}}\n          </ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-label> PARLIMEN</ion-label>\n        <!-- <ion-input formControlName=\"U_Parlimen_ID\"></ion-input> -->\n        <ion-select formControlName=\"U_Parlimen_ID\" disabled>\n          <ion-select-option *ngFor=\"let parlimen of parlimen\" value=\"{{parlimen.U_Parlimen_ID}}\">{{parlimen.Parlimen}}\n          </ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col>\n        <ion-label> DUN</ion-label>\n        <!-- <ion-input formControlName=\"U_Dun_ID\"></ion-input> -->\n\n        <ion-select formControlName=\"U_Dun_ID\" disabled>\n          <ion-select-option *ngFor=\"let dun of dun\" value=\"{{dun.U_Dun_ID}}\">{{dun.Dun}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-label> KAMPUNG</ion-label>\n        <!-- <ion-input formControlName=\"U_Kampung_ID\"></ion-input> -->\n\n        <ion-select formControlName=\"U_Kampung_ID\" disabled>\n          <ion-select-option *ngFor=\"let kampung of kampung\" value=\"{{kampung.U_Kampung_ID}}\">{{kampung.Kampung}}\n          </ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-label> SEKSYEN</ion-label>\n        <!-- <ion-input formControlName=\"U_Seksyen_ID\"></ion-input> -->\n\n        <ion-select formControlName=\"U_Seksyen_ID\" disabled>\n                <ion-select-option *ngFor = \"let seksyen of seksyen\" value=\"{{seksyen.U_Seksyen_ID}}\">{{seksyen.Seksyen}}</ion-select-option>\n              </ion-select>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-label> KELUARAN HEKTAR</ion-label>\n        <ion-input formControlName=\"Luas_Lot\" disabled></ion-input>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row class=\"ion-margin-bottom ion-margin-top\" style=\"background-color: #FF6600; color:white\">\n      <ion-col >\n        <strong>Maklumat Tanaman</strong>\n      </ion-col>\n    </ion-row>\n\n    <div formArrayName=\"Tanaman\">\n\n      <div *ngFor=\"let tanaman of tanamans(ti).controls; let bi=index\">\n\n        <div [formGroupName]=\"bi\">\n\n          <ion-row>\n            <ion-col>\n              <ion-label> JENIS TANAMAN {{bi +1}}</ion-label>\n              <ion-input formControlName=\"Jenis_Tanaman\" disabled></ion-input>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n    <br>\n    <br>\n\n\n    <br>\n\n\n  </form>\n\n</ion-content>";
      /***/
    },

    /***/
    22884: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button href=\"/dashboard\">\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <!-- <ion-back-button defaultHref=\"/dashboard\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-text color=\"warning\">\n      <h1>\n        <strong>\n          PROFIL PEKEBUN\n        </strong>\n      </h1>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- FF6600 -->\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n\n    <ion-fab-button color=\"light\">\n      <ion-icon color=\"warning\" name=\"caret-down-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"bottom\">\n      <!-- <a href=\"/profile\"> -->\n      <ion-fab-button color=\"warning\" href=\"/profile\">\n        <!-- <ion-icon name=\"logo-facebook\"></ion-icon> -->\n        <img src=\"assets/icon/usahawan-icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"warning\"><small> Usahawan</small></ion-text>\n      <!-- </a> -->\n      <!-- <a href=\"/profile-syarikat\" style=\"text-decoration:none;\"> -->\n      <ion-fab-button color=\"warning\" href=\"/profile-syarikat\">\n        <!-- <ion-icon name=\"logo-twitter\"></ion-icon> -->\n        <img src=\"assets/icon/Syarikat--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"warning\"><small> Syarikat</small></ion-text>\n      <!-- </a> -->\n\n      <ion-fab-button color=\"warning\" href=\"/profile-perniagaan\">\n        <!-- <ion-icon name=\"logo-vimeo\"></ion-icon> -->\n        <img src=\"assets/icon/Perniagaan--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"warning\"><small> Perniagaan</small></ion-text>\n\n      <ion-fab-button color=\"warning\" href=\"/profile-pekebun\">\n        <!-- <ion-icon name=\"logo-vimeo\"></ion-icon> -->\n        <img src=\"assets/icon/Pekebun--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"warning\"><small> Pekebun</small></ion-text>\n    </ion-fab-list>\n  </ion-fab>\n\n\n  <ion-grid [fixed]=\"true\">\n\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" class=\"ion-padding form-control\">\n\n      <ion-row style=\"background-color: #FF6600; color:white\">\n        <ion-col>\n          <strong>Maklumat Pekebun Kecil</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>NO. KAD PENGENALAN</ion-label>\n          <ion-input class=\"read-only\" formControlName=\"No_KP\" disabled></ion-input>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>NAMA PEKEBUN KECIL</ion-label>\n          <ion-input class=\"read-only\" formControlName=\"Nama_PK\" disabled></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>NO. TANAM SEMULA/SIC</ion-label>\n          <ion-input class=\"read-only\" formControlName=\"noTS\" disabled></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <br><br><br>\n\n      <br>\n\n      <div formArrayName=\"Tanah\">\n        <div *ngFor=\"let tanah of tanahs().controls; let ti=index\">\n\n          <div [formGroupName]=\"ti\">\n\n            <ion-row class=\"ion-margin-bottom\" style=\"background-color: #FF6600; color:white\">\n              <ion-col>\n                <strong>Maklumat Tanah {{ ti+1 }}</strong>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label> NO.GERAN</ion-label>\n                <ion-input class=\"read-only\" formControlName=\"No_Geran\" disabled></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label> NEGERI</ion-label>\n                <ion-select class=\"read-only\" formControlName=\"U_Negeri_ID\" disabled style=\"background-color: #b1b1b1;\">\n                  <ion-select-option *ngFor=\"let negeri of negeri\" value=\"{{negeri.U_Negeri_ID}}\" disabled>\n                    {{negeri.Negeri}}</ion-select-option>\n                </ion-select>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label> DAERAH</ion-label>\n                <ion-select class=\"read-only\" formControlName=\"U_Daerah_ID\" disabled style=\"background-color: #b1b1b1;\">\n                  <ion-select-option *ngFor=\"let daerah of daerah\" value=\"{{daerah.U_Daerah_ID}}\" disabled>\n                    {{daerah.Daerah}}</ion-select-option>\n                </ion-select>\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n              <ion-col>\n                <ion-label> KELUARAN HEKTAR</ion-label>\n                <ion-input class=\"read-only\" formControlName=\"Luas_Lot\" disabled></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\" style=\"display: flex; justify-content:center\">\n                <ion-button fill=\"outline\" color=\"dark\" (click)=\"openMyModal(tanah, ti+1)\" expand=\"block\" style=\"width: 60%;\">Lokasi Tanah</ion-button>\n\n              </ion-col>\n            </ion-row>\n           \n\n\n\n            <br>\n            <br>\n          </div>\n\n        </div>\n      </div>\n\n      <br>\n\n\n      <br>\n      <ion-row>\n        <ion-col>\n\n          <ion-button expand=\"block\" color=\"dark\" type=\"submit\">SAHKAN</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n\n  </ion-grid>\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_auth_profile-pekebun_profile-pekebun_module_ts-es5.js.map