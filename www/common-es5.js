(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["common"], {
    /***/
    23694: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "startFocusVisible": function startFocusVisible() {
          return (
            /* binding */
            _startFocusVisible
          );
        }
        /* harmony export */

      });
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */


      var ION_FOCUSED = 'ion-focused';
      var ION_FOCUSABLE = 'ion-focusable';
      var FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];

      var _startFocusVisible = function _startFocusVisible(rootEl) {
        var currentFocus = [];
        var keyboardMode = true;
        var ref = rootEl ? rootEl.shadowRoot : document;
        var root = rootEl ? rootEl : document.body;

        var setFocus = function setFocus(elements) {
          currentFocus.forEach(function (el) {
            return el.classList.remove(ION_FOCUSED);
          });
          elements.forEach(function (el) {
            return el.classList.add(ION_FOCUSED);
          });
          currentFocus = elements;
        };

        var pointerDown = function pointerDown() {
          keyboardMode = false;
          setFocus([]);
        };

        var onKeydown = function onKeydown(ev) {
          keyboardMode = FOCUS_KEYS.includes(ev.key);

          if (!keyboardMode) {
            setFocus([]);
          }
        };

        var onFocusin = function onFocusin(ev) {
          if (keyboardMode && ev.composedPath) {
            var toFocus = ev.composedPath().filter(function (el) {
              if (el.classList) {
                return el.classList.contains(ION_FOCUSABLE);
              }

              return false;
            });
            setFocus(toFocus);
          }
        };

        var onFocusout = function onFocusout() {
          if (ref.activeElement === root) {
            setFocus([]);
          }
        };

        ref.addEventListener('keydown', onKeydown);
        ref.addEventListener('focusin', onFocusin);
        ref.addEventListener('focusout', onFocusout);
        ref.addEventListener('touchstart', pointerDown);
        ref.addEventListener('mousedown', pointerDown);

        var destroy = function destroy() {
          ref.removeEventListener('keydown', onKeydown);
          ref.removeEventListener('focusin', onFocusin);
          ref.removeEventListener('focusout', onFocusout);
          ref.removeEventListener('touchstart', pointerDown);
          ref.removeEventListener('mousedown', pointerDown);
        };

        return {
          destroy: destroy,
          setFocus: setFocus
        };
      };
      /***/

    },

    /***/
    80282: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            chevronBack
          );
        },

        /* harmony export */
        "b": function b() {
          return (
            /* binding */
            chevronForward
          );
        },

        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            chevronForwardOutline
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            chevronDown
          );
        },

        /* harmony export */
        "e": function e() {
          return (
            /* binding */
            ellipsisHorizontal
          );
        },

        /* harmony export */
        "f": function f() {
          return (
            /* binding */
            caretUpSharp
          );
        },

        /* harmony export */
        "g": function g() {
          return (
            /* binding */
            caretDownSharp
          );
        }
        /* harmony export */

      });
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */

      /* Ionicons v6.0.0, ES Modules */


      var caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>";
      var caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>";
      var chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
      var chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
      var chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
      var chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
      var ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
      /***/
    },

    /***/
    92841: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "S": function S() {
          return (
            /* binding */
            SPINNERS
          );
        }
        /* harmony export */

      });
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */


      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 8,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(360 / total * index + (index < total / 2 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 14,
              y2: 26,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 8,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(360 / total * index + (index < total / 2 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-sharp': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-sharp-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    88888: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TambahBuletinPage": function TambahBuletinPage() {
          return (
            /* binding */
            _TambahBuletinPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tambah_buletin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tambah-buletin.page.html */
      19007);
      /* harmony import */


      var _tambah_buletin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tambah-buletin.page.scss */
      98977);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      19122);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_app_services_buletin_buletin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/buletin/buletin.service */
      42101);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);

      var _TambahBuletinPage = /*#__PURE__*/function () {
        function TambahBuletinPage(modalController, formBuilder, buletinService) {
          _classCallCheck(this, TambahBuletinPage);

          this.modalController = modalController;
          this.formBuilder = formBuilder;
          this.buletinService = buletinService;
          this.pegawai_id = window.sessionStorage.getItem("pegawai_id");
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
            id_pegawai: [''],
            tajuk: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            tarikh: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            keterangan_lain: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            gambar_buletin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
          });
        }

        _createClass(TambahBuletinPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.images = [];
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

            this.form.value.id_pegawai = this.pegawai_id;
            this.form.value.gambar_buletin = this.images[0].data;
            this.form.value.tarikh = moment__WEBPACK_IMPORTED_MODULE_3__(this.form.value.tarikh).format('YYYY-MM-DD');
            console.log(this.form.value);
            this.buletinService.post(this.form.value).subscribe(function (res) {
              console.log("res", res);

              _this.dismiss();

              window.location.reload();
            });
          }
        }, {
          key: "onSelectFile",
          value: function onSelectFile(event) {
            var _this2 = this;

            if (event.target.files && event.target.files[0]) {
              var reader = new FileReader();
              reader.readAsDataURL(event.target.files[0]); // read file as data url

              reader.onload = function (event) {
                _this2.url = event.target.result;
              };

              this.fileEvent(event);
            }
          }
        }, {
          key: "fileEvent",
          value: function fileEvent(e) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var files, file, filePath, base64Data, fileName;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.images = [];
                      files = e.target.files;
                      file = files[0];
                      filePath = files[0].size;
                      _context.next = 6;
                      return this.readAsBase64(file);

                    case 6:
                      base64Data = _context.sent;
                      fileName = new Date().getTime() + '.jpeg';
                      this.images.push({
                        name: fileName,
                        path: filePath,
                        data: "".concat(base64Data)
                      });
                      console.log("AAAA", this.images);

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // https://ionicframework.com/docs/angular/your-first-app/3-saving-photos

        }, {
          key: "readAsBase64",
          value: function readAsBase64(blob) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.convertBlobToBase64(blob);

                    case 2:
                      return _context2.abrupt("return", _context2.sent);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return TambahBuletinPage;
      }();

      _TambahBuletinPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }, {
          type: src_app_services_buletin_buletin_service__WEBPACK_IMPORTED_MODULE_2__.BuletinService
        }];
      };

      _TambahBuletinPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tambah-buletin',
        template: _raw_loader_tambah_buletin_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tambah_buletin_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TambahBuletinPage);
      /***/
    },

    /***/
    88641: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DunService": function DunService() {
          return (
            /* binding */
            _DunService
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

      var _DunService = /*#__PURE__*/function () {
        function DunService(http) {
          _classCallCheck(this, DunService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/dun";
        } // post(data: any): Observable<any> {
        //   return this.http.post<any>(`${this.url}`, data);
        // }


        _createClass(DunService, [{
          key: "get",
          value: function get() {
            return this.http.get("".concat(this.url));
          }
        }]);

        return DunService;
      }();

      _DunService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _DunService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _DunService);
      /***/
    },

    /***/
    90957: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotPasswordService": function ForgotPasswordService() {
          return (
            /* binding */
            _ForgotPasswordService
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

      var _ForgotPasswordService = /*#__PURE__*/function () {
        function ForgotPasswordService(http) {
          _classCallCheck(this, ForgotPasswordService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/forgot-password";
          this.url2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/update-email-password/";
          this.url3 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/updatePassword/";
        }

        _createClass(ForgotPasswordService, [{
          key: "post",
          value: function post(data) {
            return this.http.post("".concat(this.url), data);
          }
        }, {
          key: "firstTimeLogin",
          value: function firstTimeLogin(data, id) {
            return this.http.post("".concat(this.url2) + id, data);
          }
        }, {
          key: "updatePassword",
          value: function updatePassword(data, id) {
            return this.http.post("".concat(this.url3) + id, data);
          }
        }]);

        return ForgotPasswordService;
      }();

      _ForgotPasswordService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _ForgotPasswordService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _ForgotPasswordService);
      /***/
    },

    /***/
    92272: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KampungService": function KampungService() {
          return (
            /* binding */
            _KampungService
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

      var _KampungService = /*#__PURE__*/function () {
        function KampungService(http) {
          _classCallCheck(this, KampungService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/kampung";
        } // post(data: any): Observable<any> {
        //   return this.http.post<any>(`${this.url}`, data);
        // }


        _createClass(KampungService, [{
          key: "get",
          value: function get() {
            return this.http.get("".concat(this.url));
          }
        }]);

        return KampungService;
      }();

      _KampungService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _KampungService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _KampungService);
      /***/
    },

    /***/
    46175: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MukimService": function MukimService() {
          return (
            /* binding */
            _MukimService
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

      var _MukimService = /*#__PURE__*/function () {
        function MukimService(http) {
          _classCallCheck(this, MukimService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/mukim";
        } // post(data: any): Observable<any> {
        //   return this.http.post<any>(`${this.url}`, data);
        // }


        _createClass(MukimService, [{
          key: "get",
          value: function get() {
            return this.http.get("".concat(this.url));
          }
        }]);

        return MukimService;
      }();

      _MukimService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _MukimService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _MukimService);
      /***/
    },

    /***/
    21450: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ParlimenService": function ParlimenService() {
          return (
            /* binding */
            _ParlimenService
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

      var _ParlimenService = /*#__PURE__*/function () {
        function ParlimenService(http) {
          _classCallCheck(this, ParlimenService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/parlimen";
        } // post(data: any): Observable<any> {
        //   return this.http.post<any>(`${this.url}`, data);
        // }


        _createClass(ParlimenService, [{
          key: "get",
          value: function get() {
            return this.http.get("".concat(this.url));
          }
        }]);

        return ParlimenService;
      }();

      _ParlimenService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _ParlimenService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _ParlimenService);
      /***/
    },

    /***/
    68135: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PdfExcelService": function PdfExcelService() {
          return (
            /* binding */
            _PdfExcelService
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

      var _PdfExcelService = /*#__PURE__*/function () {
        function PdfExcelService(http) {
          _classCallCheck(this, PdfExcelService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api";
        } //buku tunai


        _createClass(PdfExcelService, [{
          key: "bukuTunaiExcel",
          value: function bukuTunaiExcel(data) {
            return this.http.post("".concat(this.url) + '/bukuTunaiExcel/', data);
          }
        }, {
          key: "bukuTunaiPdf",
          value: function bukuTunaiPdf(data) {
            return this.http.post("".concat(this.url) + '/bukuTunaiPDF/', data);
          } //pnl

        }, {
          key: "pnlExcel",
          value: function pnlExcel(data) {
            return this.http.post("".concat(this.url) + '/pnlExcel/', data);
          }
        }, {
          key: "pnlPdf",
          value: function pnlPdf(data) {
            return this.http.post("".concat(this.url) + '/pnlPdf/', data);
          }
        }, {
          key: "pnlInfo",
          value: function pnlInfo(data) {
            return this.http.post("".concat(this.url) + '/calcPNL', data);
          } //lejar

        }, {
          key: "lejarExcel",
          value: function lejarExcel(data) {
            return this.http.post("".concat(this.url) + '/lejerExcel/', data);
          }
        }, {
          key: "lejarPdf",
          value: function lejarPdf(data) {
            return this.http.post("".concat(this.url) + '/lejerPdf/', data);
          }
        }]);

        return PdfExcelService;
      }();

      _PdfExcelService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _PdfExcelService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _PdfExcelService);
      /***/
    },

    /***/
    48203: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SeksyenService": function SeksyenService() {
          return (
            /* binding */
            _SeksyenService
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

      var _SeksyenService = /*#__PURE__*/function () {
        function SeksyenService(http) {
          _classCallCheck(this, SeksyenService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/seksyen";
        } // post(data: any): Observable<any> {
        //   return this.http.post<any>(`${this.url}`, data);
        // }


        _createClass(SeksyenService, [{
          key: "get",
          value: function get() {
            return this.http.get("".concat(this.url));
          }
        }]);

        return SeksyenService;
      }();

      _SeksyenService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _SeksyenService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _SeksyenService);
      /***/
    },

    /***/
    98977: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-datetime {\n  --background: #f5f5f5;\n  --padding-start: 0.75rem !important;\n  --padding-top: 0.625rem !important;\n  --placeholder-color: #8898aa;\n  --placeholder-font-weight: 400;\n  border: 1px solid #dee2e6 !important;\n  border-radius: 1rem !important;\n  box-shadow: 0 3px 2px rgba(233, 236, 239, 0.05) !important;\n  line-height: 1.5 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhbWJhaC1idWxldGluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsMERBQUE7RUFDQSwyQkFBQTtBQUNKIiwiZmlsZSI6InRhbWJhaC1idWxldGluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1kYXRldGltZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgIC0tcGFkZGluZy1zdGFydDogMC43NXJlbSAhaW1wb3J0YW50O1xuICAgIC0tcGFkZGluZy10b3A6IDAuNjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzg4OThhYTtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDNweCAycHggcmdiYSgyMzMsIDIzNiwgMjM5LCAwLjA1KSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjUgIWltcG9ydGFudDtcbn0iXX0= */";
      /***/
    },

    /***/
    19007: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" (click)=\"dismiss()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"success\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            BULETIN TERKINI\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <form [formGroup]=\"form\" (ngSubmit)=\"logForm()\" style=\"margin: 20px;\">\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>TAJUK</ion-label>\n          <ion-input type=\"text\" formControlName=\"tajuk\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label> TARIKH</ion-label>\n          <!-- <ion-input type=\"date\" formControlName=\"title\"></ion-input> -->\n          <!-- <ion-input type=\"text\" formControlName=\"title\"></ion-input> -->\n          <ion-datetime presentation=\"date\" displayFormat=\"DD/MM/YYYY\" formControlName=\"tarikh\" style=\"background-color: #f5f5f5;\">\n          </ion-datetime>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>KETERANGAN LAIN</ion-label>\n          <ion-textarea rows=\"6\" placeholder=\"\" formControlName=\"keterangan_lain\"></ion-textarea>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>STATUS</ion-label>\n          <ion-select formControlName=\"status\">\n            <ion-select-option value=\"aktif\">AKTIF</ion-select-option>\n            <ion-select-option value=\"tidak_aktif\">TIDAK AKTIF</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n\n      \n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <ion-label class=\"ion-text-center\" style=\"padding-bottom: 0px;\">GAMBAR</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px; \">\n        <ion-col class=\"form-control\" style=\"display: flex; justify-content:center\">\n          <label style=\"display: flex; justify-content:center\">\n            <div style=\"display: flex; justify-content:center\">\n              <img [src]=\"url\" class=\"border-radius-md\" width=\"40%\" \n                id=\"upload-Preview\" style=\"border-radius: 10px;\" />\n            </div>\n            <input id=\"upload-Image\" type=\"file\" formControlName=\"gambar_buletin\" accept=\"image/*\" (change)=\"onSelectFile($event)\" style=\"display: none\">\n          </label>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-button color=\"success\" expand=\"block\" type=\"submit\" [disabled]=\"form.invalid\" >TAMBAH BULETIN</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n\n\n\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map