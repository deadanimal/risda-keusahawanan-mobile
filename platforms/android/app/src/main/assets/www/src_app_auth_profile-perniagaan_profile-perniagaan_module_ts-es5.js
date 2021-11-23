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
      80476);
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


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _ProfilePerniagaanPage = /*#__PURE__*/function () {
        function ProfilePerniagaanPage(perniagaanService, router, perniagaan, alertController, loadingController, formBuilder) {
          _classCallCheck(this, ProfilePerniagaanPage);

          this.perniagaanService = perniagaanService;
          this.router = router;
          this.perniagaan = perniagaan;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.formBuilder = formBuilder;
          this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
          this.user_id = window.sessionStorage.getItem("user_id");
          this.groups = [{
            title: 'Dynamic Group Header - 1',
            content: 'Dynamic Group Body - 1'
          }, {
            title: 'Dynamic Group Header - 2',
            content: 'Dynamic Group Body - 2'
          }];
          this.form = this.formBuilder.group({
            jenisperniagaan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            klusterperniagaan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            subkluster: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            alamat1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            alamat2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            alamat3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            bandar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            poskod: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            U_Negeri_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            U_Daerah_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            U_Mukim_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            U_Parlimen_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            U_Dun_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            U_Kampung_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            U_Seksyen_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            latitud: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            logitud: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            facebook: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
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
            // purata_jualan_tahunan:  ['',Validators.required],
            hasil_jualan_tahunan: ['']
          });
        }

        _createClass(ProfilePerniagaanPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("usahawan id", this.usahawan_id);
            console.log("user id", this.user_id);
            this.getPerniagaan();
          }
        }, {
          key: "addGroupItem",
          value: function addGroupItem() {
            this.groups.push({
              title: "Dynamic Group Header - ".concat(this.groups.length + 1),
              content: "Dynamic Group Body - ".concat(this.groups.length + 1)
            });
          }
        }, {
          key: "removeItem",
          value: function removeItem() {
            this.groups = this.groups.slice(0, this.groups.length - 1);
          }
        }, {
          key: "getPerniagaan",
          value: function getPerniagaan() {
            var _this = this;

            // console.log(this.form.value);
            this.perniagaanService.show(this.usahawan_id).subscribe(function (res) {
              console.log("perniagaan info", res);

              if (Object.keys(res).length === 0) {
                console.log("failed");
              } else {
                _this.perniagaan = res;
                console.log("profile perniagaan success");
              }
            });
          }
        }, {
          key: "setFormValues",
          value: function setFormValues() {
            this.form.setValue({
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
              // purata_jualan_tahunan:  ['',Validators.required],
              hasil_jualan_tahunan: this.perniagaan.hasil_jualan_tahunan
            });
          }
        }, {
          key: "logForm",
          value: function logForm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
                      loading.present();
                      console.log(this.form.value);
                      this.perniagaanService.update(this.form.value, Number(this.usahawan_id)).subscribe(function (res) {
                        console.log("updated data", res);
                        loading.dismiss();

                        _this2.presentAlert();
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
          key: "presentAlert",
          value: function presentAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Kemaskini Berjaya',
                        subHeader: 'Kemaskini Maklumat Perniagaan Telah Berjaya',
                        message: '',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                      _context2.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis = _context2.sent;
                      role = _yield$alert$onDidDis.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return ProfilePerniagaanPage;
      }();

      _ProfilePerniagaanPage.ctorParameters = function () {
        return [{
          type: src_app_services_perniagaan_perniagaan_service__WEBPACK_IMPORTED_MODULE_3__.PerniagaanService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: src_app_services_perniagaan_perniagaan_model__WEBPACK_IMPORTED_MODULE_2__.PerniagaanModel
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }];
      };

      _ProfilePerniagaanPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-profile-perniagaan',
        template: _raw_loader_profile_perniagaan_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_perniagaan_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProfilePerniagaanPage);
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
    72419: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLXBlcm5pYWdhYW4ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    96226: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"height: 80px;\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" href=\"/dashboard\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <!-- <ion-back-button defaultHref=\"/dashboard\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-text color=\"success\">\n      <h1>\n        <strong>\n           PROFIL\n        </strong>\n      </h1>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n\n    <ion-fab-button color=\"light\">\n      <ion-icon color=\"success\" name=\"caret-down-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"bottom\">\n      <!-- <a href=\"/profile\"> -->\n      <ion-fab-button color=\"success\" href=\"/profile\">\n        <!-- <ion-icon name=\"logo-facebook\"></ion-icon> -->\n        <img src=\"assets/icon/usahawan-icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Usahawan</small></ion-text>\n      <!-- </a> -->\n      <!-- <a href=\"/profile-syarikat\" style=\"text-decoration:none;\"> -->\n      <ion-fab-button color=\"success\" href=\"/profile-syarikat\">\n        <!-- <ion-icon name=\"logo-twitter\"></ion-icon> -->\n        <img src=\"assets/icon/Syarikat--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Syarikat</small></ion-text>\n      <!-- </a> -->\n\n      <ion-fab-button color=\"success\" href=\"/profile-perniagaan\">\n        <!-- <ion-icon name=\"logo-vimeo\"></ion-icon> -->\n        <img src=\"assets/icon/Perniagaan--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Perniagaan</small></ion-text>\n\n      <ion-fab-button color=\"success\" href=\"/profile-pekebun\">\n        <!-- <ion-icon name=\"logo-vimeo\"></ion-icon> -->\n        <img src=\"assets/icon/Pekebun--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Pekebun</small></ion-text>\n    </ion-fab-list>\n  </ion-fab>\n\n\n\n  <!-- <ion-item-divider class=\"ion-padding\" color=\"light\">\n    <ion-text color=\"success\">\n\n      <h1><strong>\n          <ion-icon name=\"chevron-back-outline\"></ion-icon> PROFIL\n        </strong></h1>\n    </ion-text>\n\n  </ion-item-divider> -->\n\n\n  <ion-grid [fixed]=\"true\">\n\n\n    <form [formGroup]=\"form\" class=\"ion-padding form-control\" (ngSubmit)=\"logForm()\">\n\n      <ion-row>\n        <ion-col>\n          <strong>Maklumat Perniagaan</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <br>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>JENIS PERNIAGAAN</ion-label>\n          <ion-input value=\"{{perniagaan.jenisperniagaan}}\" formControlName=\"jenisperniagaan\"></ion-input>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>KLUSTER PERNIAGAAN</ion-label>\n          <ion-input value=\"{{perniagaan.klusterperniagaan}}\" formControlName=\"klusterperniagaan\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>SUB KLUSTER PERNIAGAAN</ion-label>\n          <ion-input value=\"{{perniagaan.subkluster}}\" formControlName=\"subkluster\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> ALAMAT 1 (BARIS 1)</ion-label>\n          <ion-input value=\"{{perniagaan.alamat1}}\" formControlName=\"alamat1\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> ALAMAT 2 (BARIS 2)</ion-label>\n          <ion-input value=\"{{perniagaan.alamat2}}\" formControlName=\"alamat2\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> ALAMAT 3 (BARIS 3)</ion-label>\n          <ion-input value=\"{{perniagaan.alamat3}}\" formControlName=\"alamat3\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> BANDAR</ion-label>\n          <ion-input value=\"{{perniagaan.bandar}}\" formControlName=\"bandar\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> POSKOD</ion-label>\n          <ion-input value=\"{{perniagaan.poskod}}\" formControlName=\"poskod\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NEGERI</ion-label>\n          <ion-input value=\"{{perniagaan.U_Negeri_ID}}\" formControlName=\"U_Negeri_ID\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> DAERAH</ion-label>\n          <ion-input value=\"{{perniagaan.U_Daerah_ID}}\" formControlName=\"U_Daerah_ID\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> MUKIM</ion-label>\n          <ion-input value=\"{{perniagaan.U_Mukim_ID}}\" formControlName=\"U_Mukim_ID\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> PARLIMEN</ion-label>\n          <ion-input value=\"{{perniagaan.U_Parlimen_ID}}\" formControlName=\"U_Parlimen_ID\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> DUN</ion-label>\n          <ion-input value=\"{{perniagaan.U_Dun_ID}}\" formControlName=\"U_Dun_ID\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> KAMPUNG</ion-label>\n          <ion-input value=\"{{perniagaan.U_Kampung_ID}}\" formControlName=\"U_Kampung_ID\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> SEKSYEN</ion-label>\n          <ion-input value=\"{{perniagaan.U_Seksyen_ID}}\" formControlName=\"U_Seksyen_ID\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>LATITUD</ion-label>\n          <ion-input value=\"{{perniagaan.latitud}}\" formControlName=\"latitud\"></ion-input>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n          <ion-label> LONGITUD</ion-label>\n          <ion-input value=\"{{perniagaan.logitud}}\" formControlName=\"logitud\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <br><br><br>\n      <ion-row>\n        <ion-col>\n          <strong>Maklumat Media Sosial</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <br>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> FACEBOOK </ion-label>\n          <ion-input value=\"{{perniagaan.facebook}}\" formControlName=\"facebook\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label> INSTAGRAM</ion-label>\n          <ion-input value=\"{{perniagaan.instagram}}\" formControlName=\"instagram\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label> TWITTER</ion-label>\n          <ion-input value=\"{{perniagaan.twitter}}\" formControlName=\"twitter\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label> LAMAN WEB</ion-label>\n          <ion-input value=\"{{perniagaan.lamanweb}}\" formControlName=\"lamanweb\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <br><br><br>\n      <ion-row>\n        <ion-col>\n          <strong>Maklumat Pemasaran</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <br>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> DROPSHIP</ion-label>\n          <ion-input value=\"{{perniagaan.dropship}}\" formControlName=\"dropship\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> EJEN</ion-label>\n          <ion-input value=\"{{perniagaan.ejen}}\" formControlName=\"ejen\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> STOKIS</ion-label>\n          <ion-input value=\"{{perniagaan.stokis}}\" formControlName=\"stokis\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> OUTLET</ion-label>\n          <ion-input value=\"{{perniagaan.outlet}}\" formControlName=\"outlet\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label> PASARAN DOMESTIK</ion-label>\n          <ion-input value=\"{{perniagaan.domestik}}\" formControlName=\"domestik\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label> PASARAN LUAR NEGERA</ion-label>\n          <ion-input value=\"{{perniagaan.luarnegara}}\" formControlName=\"luarnegara\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> PASARAN ONLINE</ion-label>\n          <ion-input value=\"{{perniagaan.pasaranonline}}\" formControlName=\"pasaranonline\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n\n\n      <br><br><br>\n      <ion-row>\n        <ion-col>\n          <strong>Maklumat Pendapatan</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <br>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> PURATA JUALAN BULANAN</ion-label>\n          <ion-input value=\"{{perniagaan.purata_jualan_bulanan}}\" formControlName=\"purata_jualan_bulanan\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> PERATUS KENAIKAN</ion-label>\n          <ion-input value=\"{{perniagaan.peratus_kenaikan}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> HASIL JUALAN TAHUNAN</ion-label>\n          <ion-input value=\"{{perniagaan.hasil_jualan_tahunan}}\" formControlName=\"hasil_jualan_tahunan\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <!-- <ion-label> OUTLET</ion-label>\n          <ion-input value=\"{{perniagaan.}}\" ></ion-input> -->\n        </ion-col>\n      </ion-row>\n\n\n      <br><br><br>\n      <ion-row>\n        <ion-col>\n          <strong>Maklumat Produk</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <br>\n      <div *ngFor=\"let group of groups\">\n        <ion-row>\n          <ion-col>\n            <ion-label> JENAMA PRODUK </ion-label>\n            <ion-input value=\"\" ></ion-input>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-label> UNIT MATRIK</ion-label>\n            <ion-input value=\"\" ></ion-input>\n          </ion-col>\n          <ion-col>\n            <ion-label> HARGA PER UNIT</ion-label>\n            <ion-input value=\"\" ></ion-input>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-label> KAPASITI MAKSIMUM</ion-label>\n            <ion-input value=\"\" ></ion-input>\n          </ion-col>\n          <ion-col>\n            <ion-label> KAPASITI SEMASA</ion-label>\n            <ion-input value=\"\" ></ion-input>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-icon name=\"trash-outline\" (click)=\"removeItem()\"></ion-icon>\n          <ion-icon name=\"duplicate-outline\" (click)=\"addGroupItem()\"></ion-icon>\n        </ion-row>\n      </div>\n\n\n      <br><br><br>\n      <ion-row>\n        <ion-col>\n          <strong>LAMPIRAN</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> DOKUMEN LAMPIRAN </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-button expand=\"block\" type=\"file\" value=\"\" >PILIH DOKUMEN</ion-button>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col>\n          <!-- <ion-label> KATEGORI USAHAWAN</ion-label> -->\n          <ion-button type=\"submit\" expand=\"block\" color=\"success\">KEMASKINI</ion-button>\n        </ion-col>\n      </ion-row>\n\n      <!-- <p>\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" >\n          Add Group Item\n        </button>\n\n        <button type=\"button\" class=\"btn btn-primary btn-sm ms-3 ml-3\" >Remove\n          Item\n        </button>\n      </p> -->\n\n      <!-- <accordion>\n        <accordion-group *ngFor=\"let group of groups\" [heading]=\"group.title\">\n          {{ group?.content }}\n        </accordion-group>\n      </accordion> -->\n\n    </form>\n\n  </ion-grid>\n\n\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_auth_profile-perniagaan_profile-perniagaan_module_ts-es5.js.map