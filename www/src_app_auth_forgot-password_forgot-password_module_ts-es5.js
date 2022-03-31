(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_auth_forgot-password_forgot-password_module_ts"], {
    /***/
    74450: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotPasswordPageRoutingModule": function ForgotPasswordPageRoutingModule() {
          return (
            /* binding */
            _ForgotPasswordPageRoutingModule
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


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./forgot-password.page */
      77571);

      var routes = [{
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
      }];

      var _ForgotPasswordPageRoutingModule = function ForgotPasswordPageRoutingModule() {
        _classCallCheck(this, ForgotPasswordPageRoutingModule);
      };

      _ForgotPasswordPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ForgotPasswordPageRoutingModule);
      /***/
    },

    /***/
    66377: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotPasswordPageModule": function ForgotPasswordPageModule() {
          return (
            /* binding */
            _ForgotPasswordPageModule
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


      var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./forgot-password-routing.module */
      74450);
      /* harmony import */


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./forgot-password.page */
      77571);

      var _ForgotPasswordPageModule = function ForgotPasswordPageModule() {
        _classCallCheck(this, ForgotPasswordPageModule);
      };

      _ForgotPasswordPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPage]
      })], _ForgotPasswordPageModule);
      /***/
    },

    /***/
    77571: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotPasswordPage": function ForgotPasswordPage() {
          return (
            /* binding */
            _ForgotPasswordPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./forgot-password.page.html */
      54738);
      /* harmony import */


      var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./forgot-password.page.scss */
      2508);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      19122);
      /* harmony import */


      var src_app_services_forgot_password_forgot_password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/forgot-password/forgot-password.service */
      90957);

      var _ForgotPasswordPage = /*#__PURE__*/function () {
        function ForgotPasswordPage(router, formBuilder, forgotPassService, loadingController, alertController) {
          _classCallCheck(this, ForgotPasswordPage);

          this.router = router;
          this.formBuilder = formBuilder;
          this.forgotPassService = forgotPassService;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.form = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
          });
        }

        _createClass(ForgotPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logForm",
          value: function logForm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
                      this.forgotPassService.post(this.form.value).subscribe(function (res) {
                        console.log("res", res);
                        loading.dismiss();
                        console.log("title", res.title);

                        if (res.title == "Berjaya") {
                          _this.presentSuccess(res.message);
                        } else {
                          _this.presentFailed(res.message);
                        }
                      }, function (err) {
                        // loading.dismiss();
                        loading.dismiss();
                        alert('Something went wrong');
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
          key: "presentSuccess",
          value: function presentSuccess(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Berjaya',
                        subHeader: '',
                        message: message,
                        buttons: [{
                          text: 'Okay',
                          // id: 'confirm-button',
                          handler: function handler() {
                            _this2.router.navigate(['/']);
                          }
                        }]
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
        }, {
          key: "presentFailed",
          value: function presentFailed(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert, _yield$alert$onDidDis2, role;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '',
                        subHeader: 'Set Semula Kata Laluan Tidak Berjaya',
                        message: message,
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
                      _yield$alert$onDidDis2 = _context3.sent;
                      role = _yield$alert$onDidDis2.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "forget_password",
          value: function forget_password() {
            this.router.navigate(['/']);
          }
        }]);

        return ForgotPasswordPage;
      }();

      _ForgotPasswordPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
        }, {
          type: src_app_services_forgot_password_forgot_password_service__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
        }];
      };

      _ForgotPasswordPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ForgotPasswordPage);
      /***/
    },

    /***/
    2508: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans:700,600,800|Lato:400\");\n#overlay {\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.8);\n  /* Black background with opacity */\n  z-index: -1;\n  /* Specify a stack order in case you're using a different order for other elements */\n  cursor: pointer;\n  /* Add a pointer on hover */\n}\n.element-logo {\n  background-image: url(\"/assets/img/reds-logo-no-background.png\");\n  background-position: 50% 50%;\n  background-size: cover;\n  height: 150px;\n  width: 250px;\n  z-index: 3;\n  margin: auto;\n}\n.lupa {\n  font-family: \"Nunito Sans\";\n  font-style: normal;\n  font-weight: 800;\n  font-size: 14px;\n  line-height: 16px;\n  text-align: center;\n  color: #000000;\n}\n.welcome-back {\n  letter-spacing: 0;\n  min-height: 49px;\n  min-width: 278px;\n  text-align: center;\n  color: green;\n}\n.login-text {\n  font-family: \"Nunito Sans\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 26px;\n  line-height: 35px;\n  text-align: center;\n  color: #ff6600;\n}\nion-item {\n  border: 1px solid rgba(239, 141, 31, 0.1);\n  box-sizing: border-box;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);\n  border-radius: 27px;\n}\n@font-face {\n  font-family: \"NATS-Regular\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://fonts.animaapp.com/NATS-Regular\") format(\"truetype\");\n}\n.forget-password {\n  cursor: pointer;\n  letter-spacing: 0;\n  min-height: 16px;\n  min-width: 105px;\n  text-align: end;\n  color: green;\n}\nion-input {\n  height: 60px;\n}\n.my-custom-class .alert-wrapper {\n  background: #e5e5e5;\n}\n.yes-custom {\n  background-color: green;\n}\n.button {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0ZRLHVGQUFBO0FBbEZSO0VBQ0ksZUFBQTtFQUFpQixtQ0FBQTtFQUVqQixXQUFBO0VBQWEsc0NBQUE7RUFDYixZQUFBO0VBQWMsdUNBQUE7RUFDZCxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMENBQUE7RUFBNEMsa0NBQUE7RUFDNUMsV0FBQTtFQUFhLG9GQUFBO0VBQ2IsZUFBQTtFQUFpQiwyQkFBQTtBQU9yQjtBQUpBO0VBQ0ksZ0VBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQU9KO0FBSkE7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUFNSjtBQUhBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBTUo7QUFIQTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBQUtKO0FBRkE7RUFFSSx5Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtBQUlKO0FBREE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzRUFBQTtBQUlKO0FBREE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFHSjtBQUFBO0VBQ0ksWUFBQTtBQUdKO0FBR0E7RUFDSSxtQkFBQTtBQUFKO0FBR0E7RUFDSSx1QkFBQTtBQUFKO0FBSUE7RUFDSSxtQkFBQTtBQURKIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgICAvLyBkaXNwbGF5OiBibG9jazsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTsgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cbiAgICB6LWluZGV4OiAtMTsgLyogU3BlY2lmeSBhIHN0YWNrIG9yZGVyIGluIGNhc2UgeW91J3JlIHVzaW5nIGEgZGlmZmVyZW50IG9yZGVyIGZvciBvdGhlciBlbGVtZW50cyAqL1xuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogQWRkIGEgcG9pbnRlciBvbiBob3ZlciAqL1xufVxuXG4uZWxlbWVudC1sb2dvIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9yZWRzLWxvZ28tbm8tYmFja2dyb3VuZC5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIHotaW5kZXg6IDM7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubHVwYSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi53ZWxjb21lLWJhY2sge1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDQ5cHg7XG4gICAgbWluLXdpZHRoOiAyNzhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG4ubG9naW4tdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgY29sb3I6ICNmZjY2MDA7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjM5LCAxNDEsIDMxLCAwLjEpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI3cHg7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIk5BVFMtUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9mb250cy5hbmltYWFwcC5jb20vTkFUUy1SZWd1bGFyXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG4uZm9yZ2V0LXBhc3N3b3JkIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgbWluLWhlaWdodDogMTZweDtcbiAgICBtaW4td2lkdGg6IDEwNXB4O1xuICAgIHRleHQtYWxpZ246ZW5kO1xuICAgIGNvbG9yOiBncmVlbjtcbn1cblxuaW9uLWlucHV0e1xuICAgIGhlaWdodDogNjBweFxufVxuXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG8rU2Fuczo3MDAsNjAwLDgwMHxMYXRvOjQwMFwiKTtcblxuXG4ubXktY3VzdG9tLWNsYXNzIC5hbGVydC13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xuICB9XG5cbi55ZXMtY3VzdG9tIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBcbn1cblxuLmJ1dHRvbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */";
      /***/
    },

    /***/
    54738: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>Log Masuk Kali Pertama</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n  <div id=\"overlay\"\n    style=\"background-image:url('assets/img/login-background.png'); background-position: center; background-repeat: no-repeat; background-size: cover; position:absolute\">\n\n  </div>\n  <!-- <div id=\"overlay\" style=\"position: absolute;\"></div> -->\n\n\n  <div class=\"\" style=\"z-index: 4; margin: 3%; margin-top:20%; align-items:center; \">\n\n    <div class=\"element-logo\"></div>\n    <br><br><br>\n\n    <ion-text style=\"text-align: center;\">\n      <h2 class=\"login-text\">Lupa Kata Laluan</h2>\n    </ion-text>\n\n    <br>\n\n    <form action=\"\" [formGroup]=\"form\" (ngSubmit)=\"logForm()\">\n\n      <ion-grid>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"12\">\n            <div>\n              <ion-item style=\"border-radius: 50px;\">\n                <ion-input type=\"email\" email placeholder=\"Email\" formControlName=\"email\" style=\"text-transform: none !important;\"></ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row >\n          <ion-col size=\"12\" style=\"display: flex; justify-content:flex-end\">\n            <a class=\"forget-password\" (click)=\"forget_password()\" style=\"text-decoration: none; margin-top:10px; margin-right:5px;\">\n              <span class=\"lupa\">Log Masuk</span>\n            </a>\n          </ion-col>\n        </ion-row>\n        <br><br>\n\n        <ion-row class=\"ion-justify-content-center\">\n\n\n          <br>\n\n          <ion-button type=\"submit\" class=\"button\" color=\"dark\" [disabled]=\"form.invalid\" shape=\"round\">HANTAR EMAIL</ion-button>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n    </form>\n\n\n\n  </div>\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_auth_forgot-password_forgot-password_module_ts-es5.js.map