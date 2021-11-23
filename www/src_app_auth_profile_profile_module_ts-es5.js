(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_auth_profile_profile_module_ts"], {
    /***/
    27771: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePageRoutingModule": function ProfilePageRoutingModule() {
          return (
            /* binding */
            _ProfilePageRoutingModule
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile.page */
      92855);

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
      }];

      var _ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      _ProfilePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ProfilePageRoutingModule);
      /***/
    },

    /***/
    2970: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePageModule": function ProfilePageModule() {
          return (
            /* binding */
            _ProfilePageModule
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile-routing.module */
      27771);
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile.page */
      92855);

      var _ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      _ProfilePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
      })], _ProfilePageModule);
      /***/
    },

    /***/
    92855: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePage": function ProfilePage() {
          return (
            /* binding */
            _ProfilePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./profile.page.html */
      32649);
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile.page.scss */
      22403);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/login/login.service */
      58762);
      /* harmony import */


      var src_app_services_login_login_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/login/login.model */
      51146);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_usahawan_usahawan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usahawan/usahawan.service */
      46643);
      /* harmony import */


      var src_app_services_usahawan_usahawan_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/usahawan/usahawan.model */
      41160);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476); // import { LoginModel } from 'src/app/services/login/login.model';


      var _ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(usahawanService, loginService, router, user, usahawan, formBuilder, loadingController, alertController) {
          _classCallCheck(this, ProfilePage);

          this.usahawanService = usahawanService;
          this.loginService = loginService;
          this.router = router;
          this.user = user;
          this.usahawan = usahawan;
          this.formBuilder = formBuilder;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
          this.user_id = window.sessionStorage.getItem("user_id");
          this.form = this.formBuilder.group({
            Kod_PT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            namausahawan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            nokadpengenalan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            tarikhlahir: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            U_Jantina_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            U_Bangsa_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            statusperkahwinan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            U_Pendidikan_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            alamat1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            alamat2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            alamat3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            bandar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            poskod: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            U_Negeri_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            U_Daerah_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            U_Mukim_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            U_Parlimen_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            U_Dun_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            U_Kampung_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            U_Seksyen_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            id_kategori_usahawan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            // gambar_url:  ['',Validators.required]),
            notelefon: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            nohp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
          });
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // var getsession_id = window.sessionStorage.getItem("user_id");
            console.log("usahawan id", this.usahawan_id);
            console.log("user id", this.user_id);
            this.getUsahawan();
            this.getUser();
          }
        }, {
          key: "setFormValues",
          value: function setFormValues() {
            this.form.setValue({
              Kod_PT: this.usahawan.Kod_PT,
              namausahawan: this.usahawan.namausahawan,
              nokadpengenalan: this.usahawan.nokadpengenalan,
              tarikhlahir: this.usahawan.tarikhlahir,
              U_Jantina_ID: this.usahawan.U_Jantina_ID,
              U_Bangsa_ID: this.usahawan.U_Bangsa_ID,
              statusperkahwinan: this.usahawan.statusperkahwinan,
              U_Pendidikan_ID: this.usahawan.U_Pendidikan_ID,
              alamat1: this.usahawan.alamat1,
              alamat2: this.usahawan.alamat2,
              alamat3: this.usahawan.alamat3,
              bandar: this.usahawan.bandar,
              poskod: this.usahawan.poskod,
              U_Negeri_ID: this.usahawan.U_Negeri_ID,
              U_Daerah_ID: this.usahawan.U_Daerah_ID,
              U_Mukim_ID: this.usahawan.U_Mukim_ID,
              U_Parlimen_ID: this.usahawan.U_Parlimen_ID,
              U_Dun_ID: this.usahawan.U_Dun_ID,
              U_Kampung_ID: this.usahawan.U_Kampung_ID,
              U_Seksyen_ID: this.usahawan.U_Seksyen_ID,
              id_kategori_usahawan: this.usahawan.id_kategori_usahawan,
              // gambar_url:  ['',Validators.required]),
              notelefon: this.usahawan.notelefon,
              nohp: this.usahawan.nohp,
              email: this.usahawan.email
            });
          }
        }, {
          key: "getUsahawan",
          value: function getUsahawan() {
            var _this = this;

            // console.log(this.form.value);
            this.usahawanService.show(this.usahawan_id).subscribe(function (res) {
              console.log("usahawan info", res);

              if (Object.keys(res).length === 0) {
                console.log("failed");
              } else {
                _this.usahawan = res;
                console.log("profile usahawan success");

                _this.setFormValues();
              }
            });
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var _this2 = this;

            // console.log(this.form.value);
            this.loginService.show(this.user_id).subscribe(function (res) {
              // console.log("user info", res);
              if (Object.keys(res).length === 0) {
                console.log("failed");
              } else {
                _this2.user = res;
                console.log("user info", _this2.user);
                console.log("profile usahawan success");
              }
            });
          }
        }, {
          key: "logForm",
          value: function logForm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

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
                      this.usahawanService.update(Number(this.usahawan_id), this.form.value).subscribe(function (res) {
                        console.log(res);
                        loading.dismiss();

                        _this3.presentAlert();
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Kemaskini Berjaya',
                        subHeader: 'Kemaskini Maklumat Usahawan Telah Berjaya',
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

        return ProfilePage;
      }();

      _ProfilePage.ctorParameters = function () {
        return [{
          type: src_app_services_usahawan_usahawan_service__WEBPACK_IMPORTED_MODULE_4__.UsahawanService
        }, {
          type: src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: src_app_services_login_login_model__WEBPACK_IMPORTED_MODULE_3__.LoginModel
        }, {
          type: src_app_services_usahawan_usahawan_model__WEBPACK_IMPORTED_MODULE_5__.UsahawanModel
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
        }];
      };

      _ProfilePage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProfilePage);
      /***/
    },

    /***/
    51146: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginModel": function LoginModel() {
          return (
            /* binding */
            _LoginModel
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

      var _LoginModel = function LoginModel() {
        _classCallCheck(this, LoginModel);
      };

      _LoginModel = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
      })], _LoginModel);
      /***/
    },

    /***/
    41160: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UsahawanModel": function UsahawanModel() {
          return (
            /* binding */
            _UsahawanModel
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

      var _UsahawanModel = function UsahawanModel() {
        _classCallCheck(this, UsahawanModel);
      };

      _UsahawanModel = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
      })], _UsahawanModel);
      /***/
    },

    /***/
    46643: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UsahawanService": function UsahawanService() {
          return (
            /* binding */
            _UsahawanService
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

      var _UsahawanService = /*#__PURE__*/function () {
        function UsahawanService(http) {
          _classCallCheck(this, UsahawanService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/usahawan";
          this.models = [];
        } // getUser(): Observable<UsahawanModel[]> {
        //   return this.http.get<UsahawanModel[]>(`${this.url}`);
        // }
        // check1user( user : UsahawanModel): Observable<UsahawanModel>{
        //   return this.http.post<UsahawanModel>(`${this.url}`,user);
        // }


        _createClass(UsahawanService, [{
          key: "show",
          value: function show(id) {
            return this.http.get("".concat(this.url) + "/" + id);
          } // update()

        }, {
          key: "update",
          value: function update(usahawan_id, usahawan) {
            return this.http.put("".concat(this.url, "/").concat(usahawan_id), usahawan);
          }
        }]);

        return UsahawanService;
      }();

      _UsahawanService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _UsahawanService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _UsahawanService);
      /***/
    },

    /***/
    22403: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    32649: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"height: 80px;\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" href=\"/dashboard\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <!-- <ion-back-button defaultHref=\"/dashboard\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-text color=\"success\">\n      <h1>\n        <strong>\n          PROFIL\n        </strong>\n      </h1>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n\n    <ion-fab-button color=\"light\">\n      <ion-icon color=\"success\" name=\"caret-down-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"bottom\">\n      <!-- <a href=\"/profile\"> -->\n      <ion-fab-button color=\"success\" href=\"/profile\">\n        <!-- <ion-icon name=\"logo-facebook\"></ion-icon> -->\n        <img src=\"assets/icon/usahawan-icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Usahawan</small></ion-text>\n      <!-- </a> -->\n      <!-- <a href=\"/profile-syarikat\" style=\"text-decoration:none;\"> -->\n      <ion-fab-button color=\"success\" href=\"/profile-syarikat\">\n        <!-- <ion-icon name=\"logo-twitter\"></ion-icon> -->\n        <img src=\"assets/icon/Syarikat--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Syarikat</small></ion-text>\n      <!-- </a> -->\n\n      <ion-fab-button color=\"success\" href=\"/profile-perniagaan\">\n        <!-- <ion-icon name=\"logo-vimeo\"></ion-icon> -->\n        <img src=\"assets/icon/Perniagaan--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Perniagaan</small></ion-text>\n\n      <ion-fab-button color=\"success\" href=\"/profile-pekebun\">\n        <!-- <ion-icon name=\"logo-vimeo\"></ion-icon> -->\n        <img src=\"assets/icon/Pekebun--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Pekebun</small></ion-text>\n    </ion-fab-list>\n  </ion-fab>\n\n\n  <!-- <ion-item-divider class=\"ion-padding\" color=\"light\">\n    <ion-text color=\"success\">\n\n      <h1>\n        <strong>\n          <ion-icon name=\"chevron-back-outline\"></ion-icon> PROFIL\n        </strong>\n      </h1>\n    </ion-text>\n\n  </ion-item-divider> -->\n\n\n  <ion-grid [fixed]=\"true\">\n\n\n    <form [formGroup]=\"form\" class=\"ion-padding form-control\" (ngSubmit)=\"logForm()\">\n\n      <ion-row>\n        <ion-col>\n          <strong>Maklumat Peribadi</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n\n      <ion-row class=\"ion-justify-content-center\" style=\"height: 120px;\">\n        <ion-col></ion-col>\n\n        <ion-col class=\"ion-justify-content-center\">\n          <ion-avatar class=\"ion-justify-content-center\" style=\"padding:3%; height: 100px; width: 100px; border: 3px solid #ABC128;\">\n            <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n          </ion-avatar>\n          <img src=\"assets/icon/cam.png\" alt=\"\" height=\"30%\" style=\"position: absolute; bottom:0px; left:37px\">\n        </ion-col>\n        <ion-col></ion-col>\n\n      </ion-row>\n      <br>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>NO. USAHAWAN</ion-label>\n          <ion-input value=\"{{usahawan.Kod_PT}}\" formControlName=\"Kod_PT\"></ion-input>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>NAMA PENUH</ion-label>\n          <ion-input value=\"{{usahawan.namausahawan}}\" formControlName=\"namausahawan\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>NO. MYCARD</ion-label>\n          <ion-input value=\"{{user.no_kp}}\" formControlName=\"nokadpengenalan\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>TARIKH LAHIR</ion-label>\n          <ion-input value=\"{{usahawan.tarikhlahir}}\" formControlName=\"tarikhlahir\"></ion-input>\n        </ion-col>\n\n        <ion-col>\n\n          <ion-label> JANTINA</ion-label>\n          <ion-input value=\"{{usahawan.U_Jantina_ID}}\" formControlName=\"U_Jantina_ID\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <br>\n          <ion-label> BANGSA</ion-label>\n          <ion-input value=\"{{usahawan.U_Bangsa_ID}}\" formControlName=\"U_Bangsa_ID\"></ion-input>\n        </ion-col>\n\n        <ion-col>\n\n\n          <ion-label> STATUS PERKAHWINAN</ion-label>\n          <ion-input value=\"{{usahawan.statusperkahwinan}}\" formControlName=\"statusperkahwinan\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> TAHAP PENDIDIKAN</ion-label>\n          <ion-input value=\"{{usahawan.U_Pendidikan_ID}}\" formControlName=\"U_Pendidikan_ID\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <br><br><br>\n\n      <ion-row>\n        <ion-col>\n          <strong>Maklumat Kediaman</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> ALAMAT (BARIS 1)</ion-label>\n          <ion-input value=\"{{usahawan.alamat1}}\" formControlName=\"alamat1\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> ALAMAT (BARIS 2)</ion-label>\n          <ion-input value=\"{{usahawan.alamat2}}\" formControlName=\"alamat2\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> ALAMAT (BARIS 3)</ion-label>\n          <ion-input value=\"{{usahawan.alamat3}}\" formControlName=\"alamat3\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> BANDAR</ion-label>\n          <ion-input value=\"{{usahawan.bandar}}\" formControlName=\"bandar\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> POSKOD</ion-label>\n          <ion-input value=\"{{usahawan.poskod}}\" formControlName=\"poskod\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NEGERI</ion-label>\n          <ion-input value=\"{{usahawan.U_Negeri_ID}}\" formControlName=\"U_Negeri_ID\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> DAERAH</ion-label>\n          <ion-input value=\"{{usahawan.U_Daerah_ID}}\" formControlName=\"U_Daerah_ID\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> MUKIM</ion-label>\n          <ion-input value=\"{{usahawan.U_Mukim_ID}}\" formControlName=\"U_Mukim_ID\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> PARLIMEN</ion-label>\n          <ion-input value=\"{{usahawan.U_Parlimen_ID}}\" formControlName=\"U_Parlimen_ID\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> DUN</ion-label>\n          <ion-input value=\"{{usahawan.U_Dun_ID}}\" formControlName=\"U_Dun_ID\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> KAMPUNG</ion-label>\n          <ion-input value=\"{{usahawan.U_Kampung_ID}}\" formControlName=\"U_Kampung_ID\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> SEKSYEN</ion-label>\n          <ion-input value=\"{{usahawan.U_Seksyen_ID}}\" formControlName=\"U_Seksyen_ID\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <br><br><br>\n      <ion-row>\n        <ion-col>\n          <strong>Maklumat Lain</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> KATEGORI USAHAWAN</ion-label>\n          <ion-input value=\"{{usahawan.id_kategori_usahawan}}\" formControlName=\"id_kategori_usahawan\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NO. TELEFON</ion-label>\n          <ion-input value=\"{{usahawan.notelefon}}\" formControlName=\"notelefon\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> NO. TELEFON (HP)</ion-label>\n          <ion-input value=\"{{usahawan.nohp}}\" formControlName=\"nohp\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> EMAIL</ion-label>\n          <ion-input value=\"{{usahawan.email}}\" formControlName=\"email\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <!-- <ion-label> KATEGORI USAHAWAN</ion-label> -->\n          <ion-button type=\"submit\" expand=\"block\" color=\"success\">KEMASKINI</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n\n  </ion-grid>\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_auth_profile_profile_module_ts-es5.js.map