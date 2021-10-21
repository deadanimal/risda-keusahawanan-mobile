(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_auth_first-time-login_first-time-login_module_ts"], {
    /***/
    28359: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FirstTimeLoginPageRoutingModule": function FirstTimeLoginPageRoutingModule() {
          return (
            /* binding */
            _FirstTimeLoginPageRoutingModule
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


      var _first_time_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./first-time-login.page */
      64995);

      var routes = [{
        path: '',
        component: _first_time_login_page__WEBPACK_IMPORTED_MODULE_0__.FirstTimeLoginPage
      }];

      var _FirstTimeLoginPageRoutingModule = function FirstTimeLoginPageRoutingModule() {
        _classCallCheck(this, FirstTimeLoginPageRoutingModule);
      };

      _FirstTimeLoginPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _FirstTimeLoginPageRoutingModule);
      /***/
    },

    /***/
    38299: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FirstTimeLoginPageModule": function FirstTimeLoginPageModule() {
          return (
            /* binding */
            _FirstTimeLoginPageModule
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


      var _first_time_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./first-time-login-routing.module */
      28359);
      /* harmony import */


      var _first_time_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./first-time-login.page */
      64995);

      var _FirstTimeLoginPageModule = function FirstTimeLoginPageModule() {
        _classCallCheck(this, FirstTimeLoginPageModule);
      };

      _FirstTimeLoginPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _first_time_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.FirstTimeLoginPageRoutingModule],
        declarations: [_first_time_login_page__WEBPACK_IMPORTED_MODULE_1__.FirstTimeLoginPage]
      })], _FirstTimeLoginPageModule);
      /***/
    },

    /***/
    64995: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FirstTimeLoginPage": function FirstTimeLoginPage() {
          return (
            /* binding */
            _FirstTimeLoginPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_first_time_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./first-time-login.page.html */
      17669);
      /* harmony import */


      var _first_time_login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./first-time-login.page.scss */
      10091);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _FirstTimeLoginPage = /*#__PURE__*/function () {
        function FirstTimeLoginPage(alertController) {
          _classCallCheck(this, FirstTimeLoginPage);

          this.alertController = alertController;
        }

        _createClass(FirstTimeLoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '',
                        message: 'Adakah anda setuju untuk mengemaskini alamat email dan kata laluan?',
                        buttons: [{
                          text: 'Tidak',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Ya',
                          cssClass: "yes-custom",
                          handler: function handler() {
                            console.log('Confirm Okay');

                            _this.presentAlert();
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
          key: "presentAlert",
          value: function presentAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Berjaya!',
                        // subHeader: 'Subtitle',
                        message: 'Kemaskini telah berjaya',
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

        return FirstTimeLoginPage;
      }();

      _FirstTimeLoginPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
        }];
      };

      _FirstTimeLoginPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-first-time-login',
        template: _raw_loader_first_time_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_first_time_login_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _FirstTimeLoginPage);
      /***/
    },

    /***/
    10091: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans:700,600,800|Lato:400\");\n#overlay {\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.7);\n  /* Black background with opacity */\n  z-index: -1;\n  /* Specify a stack order in case you're using a different order for other elements */\n  cursor: pointer;\n  /* Add a pointer on hover */\n}\n.element-logo {\n  background-image: url(\"/assets/img/risda_logo.png\");\n  background-position: 50% 50%;\n  background-size: cover;\n  height: 94px;\n  width: 97px;\n  z-index: 3;\n  margin: auto;\n}\n.welcome-back {\n  letter-spacing: 0;\n  min-height: 49px;\n  min-width: 278px;\n  text-align: center;\n  color: green;\n}\n@font-face {\n  font-family: \"NATS-Regular\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://fonts.animaapp.com/NATS-Regular\") format(\"truetype\");\n}\n.forget-password {\n  cursor: pointer;\n  letter-spacing: 0;\n  min-height: 16px;\n  min-width: 105px;\n  text-align: end;\n  color: green;\n}\nion-input {\n  height: 60px;\n}\n.my-custom-class .alert-wrapper {\n  background: #e5e5e5;\n}\n.yes-custom {\n  background-color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0LXRpbWUtbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EUSx1RkFBQTtBQXBEUjtFQUNJLGVBQUE7RUFBaUIsbUNBQUE7RUFFakIsV0FBQTtFQUFhLHNDQUFBO0VBQ2IsWUFBQTtFQUFjLHVDQUFBO0VBQ2QsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDBDQUFBO0VBQTRDLGtDQUFBO0VBQzVDLFdBQUE7RUFBYSxvRkFBQTtFQUNiLGVBQUE7RUFBaUIsMkJBQUE7QUFPckI7QUFKQTtFQUNJLG1EQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFPSjtBQUpBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBT0o7QUFKQTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNFQUFBO0FBT0o7QUFKQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQU1KO0FBSEE7RUFDSSxZQUFBO0FBTUo7QUFBQTtFQUNJLG1CQUFBO0FBR0o7QUFBQTtFQUNJLHVCQUFBO0FBR0oiLCJmaWxlIjoiZmlyc3QtdGltZS1sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgICAvLyBkaXNwbGF5OiBibG9jazsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTsgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cbiAgICB6LWluZGV4OiAtMTsgLyogU3BlY2lmeSBhIHN0YWNrIG9yZGVyIGluIGNhc2UgeW91J3JlIHVzaW5nIGEgZGlmZmVyZW50IG9yZGVyIGZvciBvdGhlciBlbGVtZW50cyAqL1xuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogQWRkIGEgcG9pbnRlciBvbiBob3ZlciAqL1xufVxuXG4uZWxlbWVudC1sb2dvIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9yaXNkYV9sb2dvLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiA5NHB4O1xuICAgIHdpZHRoOiA5N3B4O1xuICAgIHotaW5kZXg6IDM7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4ud2VsY29tZS1iYWNrIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBtaW4taGVpZ2h0OiA0OXB4O1xuICAgIG1pbi13aWR0aDogMjc4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBncmVlbjtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTkFUUy1SZWd1bGFyXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiB1cmwoXCJodHRwczovL2ZvbnRzLmFuaW1hYXBwLmNvbS9OQVRTLVJlZ3VsYXJcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbi5mb3JnZXQtcGFzc3dvcmQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBtaW4taGVpZ2h0OiAxNnB4O1xuICAgIG1pbi13aWR0aDogMTA1cHg7XG4gICAgdGV4dC1hbGlnbjplbmQ7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG5pb24taW5wdXR7XG4gICAgaGVpZ2h0OiA2MHB4XG59XG5cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bytTYW5zOjcwMCw2MDAsODAwfExhdG86NDAwXCIpO1xuXG5cbi5teS1jdXN0b20tY2xhc3MgLmFsZXJ0LXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6ICNlNWU1ZTU7XG4gIH1cblxuLnllcy1jdXN0b20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIFxufSJdfQ== */";
      /***/
    },

    /***/
    17669: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>Log Masuk Kali Pertama</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n  <div id=\"overlay\"\n    style=\"background-image:url('/assets/img/bg1.jpg'); background-position: center; background-repeat: no-repeat; background-size: cover; height:100%; position:absolute\">\n\n  </div>\n  <div id=\"overlay\" style=\"position: absolute;\"></div>\n\n\n  <div style=\"z-index: 4; margin: 3%; margin-top:20%; align-items:center\">\n\n    <div class=\"element-logo\"></div>\n\n    <!-- <ion-text >\n      <h1 class=\"welcome-back nunitosans-extra-bold-green-haze-36px\">Selamat Datang</h1>\n    </ion-text> -->\n    <!-- <ion-text class=\"welcome-back\">\n      <h1>Selamat Datang</h1>\n    </ion-text> -->\n\n    <ion-text style=\"text-align: center;\">\n      <h2>Log Masuk Kali Pertama</h2>\n    </ion-text>\n\n\n    <br><br><br>\n    <!-- <h1 class=\"welcome-backnats-regular-normal-log-cabin-26px ion-text-center\">Log Masuk Kali Pertama</h1> -->\n\n    <form action=\"\">\n      <ion-item style=\"border-radius: 50px;\">\n        <!-- <ion-label position=\"floating\"></ion-label> -->\n        <ion-input placeholder=\"Email\"></ion-input>\n      </ion-item>\n      <br>\n\n      <ion-item style=\"border-radius: 50px;\">\n        <!-- <ion-label position=\"floating\">Kata Laluan</ion-label> -->\n        <ion-input type=\"password\" placeholder=\"Kata Laluan Baru\"></ion-input>\n      </ion-item>\n      <br>\n      <ion-item style=\"border-radius: 50px;\">\n        <!-- <ion-label position=\"floating\">Kata Laluan</ion-label> -->\n        <ion-input type=\"password\" placeholder=\"Ulang Kata Laluan Baru\"></ion-input>\n      </ion-item>\n\n      <br>\n      <!-- <div class=\"forget-password nunitosans-extra-bold-green-haze-12px\">Lupa Kata Laluan?</div> -->\n\n      <br>\n\n      <ion-button type=\"submit\" expand=\"block\" color=\"success\" (click)=\"presentAlertConfirm()\">Log masuk</ion-button>\n    </form>\n    \n  </div>\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_auth_first-time-login_first-time-login_module_ts-es5.js.map