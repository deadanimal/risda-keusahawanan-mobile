(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_auth_profile-syarikat_profile-syarikat_module_ts"], {
    /***/
    14361: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileSyarikatPageRoutingModule": function ProfileSyarikatPageRoutingModule() {
          return (
            /* binding */
            _ProfileSyarikatPageRoutingModule
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


      var _profile_syarikat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile-syarikat.page */
      51117);

      var routes = [{
        path: '',
        component: _profile_syarikat_page__WEBPACK_IMPORTED_MODULE_0__.ProfileSyarikatPage
      }];

      var _ProfileSyarikatPageRoutingModule = function ProfileSyarikatPageRoutingModule() {
        _classCallCheck(this, ProfileSyarikatPageRoutingModule);
      };

      _ProfileSyarikatPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ProfileSyarikatPageRoutingModule);
      /***/
    },

    /***/
    40036: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileSyarikatPageModule": function ProfileSyarikatPageModule() {
          return (
            /* binding */
            _ProfileSyarikatPageModule
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


      var _profile_syarikat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile-syarikat-routing.module */
      14361);
      /* harmony import */


      var _profile_syarikat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile-syarikat.page */
      51117);

      var _ProfileSyarikatPageModule = function ProfileSyarikatPageModule() {
        _classCallCheck(this, ProfileSyarikatPageModule);
      };

      _ProfileSyarikatPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _profile_syarikat_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileSyarikatPageRoutingModule],
        declarations: [_profile_syarikat_page__WEBPACK_IMPORTED_MODULE_1__.ProfileSyarikatPage]
      })], _ProfileSyarikatPageModule);
      /***/
    },

    /***/
    51117: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileSyarikatPage": function ProfileSyarikatPage() {
          return (
            /* binding */
            _ProfileSyarikatPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_profile_syarikat_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./profile-syarikat.page.html */
      84261);
      /* harmony import */


      var _profile_syarikat_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile-syarikat.page.scss */
      72593);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/login/login.service */
      58762);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_syarikat_syarikat_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/syarikat/syarikat.model */
      48398);
      /* harmony import */


      var src_app_services_syarikat_syarikat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/syarikat/syarikat.service */
      96987);

      var _ProfileSyarikatPage = /*#__PURE__*/function () {
        function ProfileSyarikatPage(syarikatService, loginService, router, syarikat) {
          _classCallCheck(this, ProfileSyarikatPage);

          this.syarikatService = syarikatService;
          this.loginService = loginService;
          this.router = router;
          this.syarikat = syarikat;
          this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
          this.user_id = window.sessionStorage.getItem("user_id");
        }

        _createClass(ProfileSyarikatPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("usahawan id", this.usahawan_id);
            console.log("user id", this.user_id);
            this.getSyarikat();
          }
        }, {
          key: "getSyarikat",
          value: function getSyarikat() {
            var _this = this;

            // console.log(this.form.value);
            this.syarikatService.show(this.usahawan_id).subscribe(function (res) {
              console.log("syarikat info", res);

              if (Object.keys(res).length === 0) {
                console.log("failed");
              } else {
                _this.syarikat = res;
                console.log("profile syarikat success");
              }
            });
          }
        }]);

        return ProfileSyarikatPage;
      }();

      _ProfileSyarikatPage.ctorParameters = function () {
        return [{
          type: src_app_services_syarikat_syarikat_service__WEBPACK_IMPORTED_MODULE_4__.SyarikatService
        }, {
          type: src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: src_app_services_syarikat_syarikat_model__WEBPACK_IMPORTED_MODULE_3__.SyarikatModel
        }];
      };

      _ProfileSyarikatPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-profile-syarikat',
        template: _raw_loader_profile_syarikat_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_syarikat_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProfileSyarikatPage);
      /***/
    },

    /***/
    48398: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SyarikatModel": function SyarikatModel() {
          return (
            /* binding */
            _SyarikatModel
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

      var _SyarikatModel = function SyarikatModel() {
        _classCallCheck(this, SyarikatModel);
      };

      _SyarikatModel = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
      })], _SyarikatModel);
      /***/
    },

    /***/
    96987: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SyarikatService": function SyarikatService() {
          return (
            /* binding */
            _SyarikatService
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

      var _SyarikatService = /*#__PURE__*/function () {
        function SyarikatService(http) {
          _classCallCheck(this, SyarikatService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/syarikat";
          this.models = [];
        } // getUser(): Observable<SyarikatModel[]> {
        //   return this.http.get<SyarikatModel[]>(`${this.url}`);
        // }
        // check1user( user : SyarikatModel): Observable<SyarikatModel>{
        //   return this.http.post<SyarikatModel>(`${this.url}`,user);
        // }


        _createClass(SyarikatService, [{
          key: "show",
          value: function show(id) {
            return this.http.get("".concat(this.url) + "/" + id);
          }
        }]);

        return SyarikatService;
      }();

      _SyarikatService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _SyarikatService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _SyarikatService);
      /***/
    },

    /***/
    72593: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLXN5YXJpa2F0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    84261: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"height: 80px;\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" href=\"/dashboard\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <!-- <ion-back-button defaultHref=\"/dashboard\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-text color=\"success\">\n      <h1>\n        <strong>\n           PROFIL\n        </strong>\n      </h1>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n\n    <ion-fab-button color=\"light\">\n      <ion-icon color=\"success\" name=\"caret-down-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"bottom\">\n      <!-- <a href=\"/profile\"> -->\n      <ion-fab-button color=\"success\" href=\"/profile\">\n        <!-- <ion-icon name=\"logo-facebook\"></ion-icon> -->\n        <img src=\"assets/icon/usahawan-icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Usahawan</small></ion-text>\n      <!-- </a> -->\n      <!-- <a href=\"/profile-syarikat\" style=\"text-decoration:none;\"> -->\n      <ion-fab-button color=\"success\" href=\"/profile-syarikat\">\n        <!-- <ion-icon name=\"logo-twitter\"></ion-icon> -->\n        <img src=\"assets/icon/Syarikat--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Syarikat</small></ion-text>\n      <!-- </a> -->\n\n      <ion-fab-button color=\"success\" href=\"/profile-perniagaan\">\n        <!-- <ion-icon name=\"logo-vimeo\"></ion-icon> -->\n        <img src=\"assets/icon/Perniagaan--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Perniagaan</small></ion-text>\n\n      <ion-fab-button color=\"success\" href=\"/profile-pekebun\">\n        <!-- <ion-icon name=\"logo-vimeo\"></ion-icon> -->\n        <img src=\"assets/icon/Pekebun--icon.png\" alt=\"\">\n      </ion-fab-button>\n      <ion-text color=\"success\"><small> Pekebun</small></ion-text>\n    </ion-fab-list>\n  </ion-fab>\n\n\n\n  <!-- <ion-item-divider class=\"ion-padding\" color=\"light\">\n    <ion-text color=\"success\">\n\n      <h1><strong>\n          <ion-icon name=\"chevron-back-outline\"></ion-icon> PROFIL\n        </strong></h1>\n    </ion-text>\n\n  </ion-item-divider> -->\n\n\n  <ion-grid [fixed]=\"true\">\n\n\n    <form action=\"\" class=\"ion-padding form-control\">\n\n      <ion-row>\n        <ion-col>\n          <strong>Maklumat Syarikat</strong>\n        </ion-col>\n      </ion-row>\n      <br>\n\n\n      <ion-row class=\"ion-justify-content-center\" style=\"height: 120px;\">\n        <ion-col></ion-col>\n\n        <ion-col class=\"ion-justify-content-center\">\n          <ion-avatar class=\"ion-justify-content-center\" style=\"padding:3%; height: 100px; width: 100px; border: 3px solid #ABC128;\">\n            <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n          </ion-avatar>\n          <img src=\"assets/icon/cam.png\" alt=\"\" height=\"30%\" style=\"position: absolute; bottom:0px; left:37px\">\n        </ion-col>\n        <ion-col></ion-col>\n\n      </ion-row>\n      <br>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>NAMA SYARIKAT</ion-label>\n          <ion-input value=\"{{syarikat.namasyarikat}}\" ></ion-input>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>JENIS MILIKAN PERNIAGAAN</ion-label>\n          <ion-input value=\"{{syarikat.jenismilikanperniagaan}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NO. DAFTAR SSM</ion-label>\n          <ion-input value=\"{{syarikat.nodaftarssm}}\" ></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> NO. DAFTAR PBT</ion-label>\n          <ion-input value=\"{{syarikat.nodaftarpbt}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n\n          <ion-label>NO. DAFTAR PERSIJILAN</ion-label>\n\n          <ion-input value=\"{{syarikat.nodaftarpersijilanhalal}}\" ></ion-input>\n\n        </ion-col>\n\n        <ion-col>\n          <br>\n          <ion-label>NO. DAFTAR MESTI</ion-label>\n          <ion-input value=\"{{syarikat.nodaftarmesti}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>TARIKH MULA OPERASI</ion-label>\n          <ion-input value=\"{{syarikat.tahunmulaoperasi}}\" ></ion-input>\n        </ion-col>\n        <ion-col>\n          <br>\n          <ion-label>BILANGAN PEKERJA</ion-label>\n          <ion-input value=\"{{syarikat.bilanganpekerja}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> ALAMAT 1 (BARIS 1)</ion-label>\n          <ion-input value=\"{{syarikat.alamat1_ssm}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> ALAMAT 2 (BARIS 2)</ion-label>\n          <ion-input value=\"{{syarikat.alamat2_ssm}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> ALAMAT 3 (BARIS 3)</ion-label>\n          <ion-input value=\"{{syarikat.alamat3_ssm}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> TARIKH MULA MOF</ion-label>\n          <ion-input value=\"{{syarikat.tarikh_mula_mof}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> TARIKH TAMAT MOF</ion-label>\n          <ion-input value=\"{{syarikat.tarikh_tamat_mof}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> STATUS BUMIPUTERA</ion-label>\n          <ion-input value=\"{{syarikat.status_bumiputera}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>PREFIX ID</ion-label>\n          <ion-input value=\"{{syarikat.prefix_id}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> NO. TELEFON</ion-label>\n          <ion-input value=\"{{syarikat.notelefon}}\" ></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label> NO. TELEFON (HP)</ion-label>\n          <ion-input value=\"{{syarikat.no_hp}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label> EMAIL</ion-label>\n          <ion-input value=\"{{syarikat.email}}\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <!-- <ion-label> KATEGORI USAHAWAN</ion-label> -->\n          <ion-button expand=\"block\" color=\"success\">KEMASKINI</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n\n  </ion-grid>\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_auth_profile-syarikat_profile-syarikat_module_ts-es5.js.map