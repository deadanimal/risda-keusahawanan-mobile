(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["common"], {
    /***/
    68225: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            createButtonActiveGesture
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      23150);
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      52954);
      /* harmony import */


      var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-34cb2743.js */
      39461);

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          (0, _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          (0, _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return (0, _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            (0, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    77330: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            attachComponent
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            detachComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      52377);

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);
                  _context.next = 10;
                  return new Promise(function (resolve) {
                    return (0, _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve);
                  });

                case 10:
                  return _context.abrupt("return", el);

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    52954: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            hapticSelectionStart
          );
        },

        /* harmony export */
        "b": function b() {
          return (
            /* binding */
            hapticSelectionChanged
          );
        },

        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            hapticSelection
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            hapticImpact
          );
        },

        /* harmony export */
        "h": function h() {
          return (
            /* binding */
            hapticSelectionEnd
          );
        }
        /* harmony export */

      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    60408: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
        'lines-small': {
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
    61269: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            createColorClasses
          );
        },

        /* harmony export */
        "g": function g() {
          return (
            /* binding */
            getClassMap
          );
        },

        /* harmony export */
        "h": function h() {
          return (
            /* binding */
            hostContext
          );
        },

        /* harmony export */
        "o": function o() {
          return (
            /* binding */
            openURL
          );
        }
        /* harmony export */

      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    58278: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KemaskiniTunaiKeluarPage": function KemaskiniTunaiKeluarPage() {
          return (
            /* binding */
            _KemaskiniTunaiKeluarPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_kemaskini_tunai_keluar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./kemaskini-tunai-keluar.page.html */
      30032);
      /* harmony import */


      var _kemaskini_tunai_keluar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./kemaskini-tunai-keluar.page.scss */
      14274);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _KemaskiniTunaiKeluarPage = /*#__PURE__*/function () {
        function KemaskiniTunaiKeluarPage(modalController, formBuilder) {
          _classCallCheck(this, KemaskiniTunaiKeluarPage);

          this.modalController = modalController;
          this.formBuilder = formBuilder;
          this.tunai_keluar = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            description: [''],
            downtime_start: ['']
          });
        }

        _createClass(KemaskiniTunaiKeluarPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
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
            console.log(this.tunai_keluar.value);
          }
        }]);

        return KemaskiniTunaiKeluarPage;
      }();

      _KemaskiniTunaiKeluarPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder
        }];
      };

      _KemaskiniTunaiKeluarPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-kemaskini-tunai-keluar',
        template: _raw_loader_kemaskini_tunai_keluar_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_kemaskini_tunai_keluar_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _KemaskiniTunaiKeluarPage);
      /***/
    },

    /***/
    89167: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KemaskiniTunaiMasukPage": function KemaskiniTunaiMasukPage() {
          return (
            /* binding */
            _KemaskiniTunaiMasukPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_kemaskini_tunai_masuk_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./kemaskini-tunai-masuk.page.html */
      36032);
      /* harmony import */


      var _kemaskini_tunai_masuk_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./kemaskini-tunai-masuk.page.scss */
      1110);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _KemaskiniTunaiMasukPage = /*#__PURE__*/function () {
        function KemaskiniTunaiMasukPage(modalController, formBuilder) {
          _classCallCheck(this, KemaskiniTunaiMasukPage);

          this.modalController = modalController;
          this.formBuilder = formBuilder;
          this.tunai_masuk = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            description: [''],
            downtime_start: ['']
          });
        }

        _createClass(KemaskiniTunaiMasukPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
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
            console.log(this.tunai_masuk.value);
          }
        }]);

        return KemaskiniTunaiMasukPage;
      }();

      _KemaskiniTunaiMasukPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder
        }];
      };

      _KemaskiniTunaiMasukPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-kemaskini-tunai-masuk',
        template: _raw_loader_kemaskini_tunai_masuk_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_kemaskini_tunai_masuk_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _KemaskiniTunaiMasukPage);
      /***/
    },

    /***/
    8690: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TambahTunaiKeluarPage": function TambahTunaiKeluarPage() {
          return (
            /* binding */
            _TambahTunaiKeluarPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tambah_tunai_keluar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tambah-tunai-keluar.page.html */
      22225);
      /* harmony import */


      var _tambah_tunai_keluar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tambah-tunai-keluar.page.scss */
      97922);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _TambahTunaiKeluarPage = /*#__PURE__*/function () {
        function TambahTunaiKeluarPage(modalController, formBuilder) {
          _classCallCheck(this, TambahTunaiKeluarPage);

          this.modalController = modalController;
          this.formBuilder = formBuilder;
          this.tunai_keluar = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            description: [''],
            downtime_start: ['']
          });
        }

        _createClass(TambahTunaiKeluarPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
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
            console.log(this.tunai_keluar.value);
          }
        }]);

        return TambahTunaiKeluarPage;
      }();

      _TambahTunaiKeluarPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder
        }];
      };

      _TambahTunaiKeluarPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tambah-tunai-keluar',
        template: _raw_loader_tambah_tunai_keluar_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tambah_tunai_keluar_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TambahTunaiKeluarPage);
      /***/
    },

    /***/
    14274: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  padding: 10px;\n  margin-bottom: 50px;\n}\n\n.label {\n  padding: 10px;\n  margin-bottom: 50px;\n}\n\nion-datetime {\n  --background: #f5f5f5;\n  --padding-start: 0.75rem !important;\n  --padding-top: 0.625rem !important;\n  --placeholder-color: #8898aa;\n  --placeholder-font-weight: 400;\n  border: 1px solid #dee2e6 !important;\n  border-radius: 1rem !important;\n  box-shadow: 0 3px 2px rgba(233, 236, 239, 0.05) !important;\n  line-height: 1.5 !important;\n}\n\nion-label {\n  --color: #525f7f;\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding-bottom: 20px;\n}\n\n.jumlah {\n  font-size: 30px;\n  color: #00a651;\n}\n\nion-item {\n  --max-height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtlbWFza2luaS10dW5haS1rZWx1YXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsMERBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6ImtlbWFza2luaS10dW5haS1rZWx1YXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5sYWJlbCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNzVyZW0gIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctdG9wOiAwLjYyNXJlbSAhaW1wb3J0YW50O1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM4ODk4YWE7XG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMnB4IHJnYmEoMjMzLCAyMzYsIDIzOSwgMC4wNSkgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS41ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gICAgLS1jb2xvcjogIzUyNWY3ZjtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5qdW1sYWgge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogIzAwYTY1MTtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tbWF4LWhlaWdodDogMTZweDtcbn1cblxuLy8gYnV0dG9uOmRpc2FibGVkLFxuLy8gYnV0dG9uW2Rpc2FibGVkXSB7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTk5OTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuLy8gICAgIGNvbG9yOiAjNjY2NjY2O1xuLy8gfVxuIl19 */";
      /***/
    },

    /***/
    1110: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  padding: 10px;\n  margin-bottom: 50px;\n}\n\n.label {\n  padding: 10px;\n  margin-bottom: 50px;\n}\n\nion-datetime {\n  --background: #f5f5f5;\n  --padding-start: 0.75rem !important;\n  --padding-top: 0.625rem !important;\n  --placeholder-color: #8898aa;\n  --placeholder-font-weight: 400;\n  border: 1px solid #dee2e6 !important;\n  border-radius: 1rem !important;\n  box-shadow: 0 3px 2px rgba(233, 236, 239, 0.05) !important;\n  line-height: 1.5 !important;\n}\n\nion-label {\n  --color: #525f7f;\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding-bottom: 20px;\n}\n\n.jumlah {\n  font-size: 30px;\n  color: #00a651;\n}\n\nion-item {\n  --max-height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtlbWFza2luaS10dW5haS1tYXN1ay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSwwREFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoia2VtYXNraW5pLXR1bmFpLW1hc3VrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ubGFiZWwge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLXRvcDogMC42MjVyZW0gIWltcG9ydGFudDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjODg5OGFhO1xuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDJweCByZ2JhKDIzMywgMjM2LCAyMzksIDAuMDUpICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNSAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICAgIC0tY29sb3I6ICM1MjVmN2Y7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uanVtbGFoIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICMwMGE2NTE7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLW1heC1oZWlnaHQ6IDE2cHg7XG59XG5cbi8vIGJ1dHRvbjpkaXNhYmxlZCxcbi8vIGJ1dHRvbltkaXNhYmxlZF0ge1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbi8vICAgICBjb2xvcjogIzY2NjY2Njtcbi8vIH1cbiJdfQ== */";
      /***/
    },

    /***/
    97922: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  padding: 10px;\n  margin-bottom: 50px;\n}\n\n.label {\n  padding: 10px;\n  margin-bottom: 50px;\n}\n\nion-datetime {\n  --background: #f5f5f5;\n  --padding-start: 0.75rem !important;\n  --padding-top: 0.625rem !important;\n  --placeholder-color: #8898aa;\n  --placeholder-font-weight: 400;\n  border: 1px solid #dee2e6 !important;\n  border-radius: 1rem !important;\n  box-shadow: 0 3px 2px rgba(233, 236, 239, 0.05) !important;\n  line-height: 1.5 !important;\n}\n\nion-label {\n  --color: #525f7f;\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding-bottom: 20px;\n}\n\n.jumlah {\n  font-size: 30px;\n  color: #00a651;\n}\n\nion-item {\n  --max-height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhbWJhaC10dW5haS1rZWx1YXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsMERBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6InRhbWJhaC10dW5haS1rZWx1YXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5sYWJlbCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNzVyZW0gIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctdG9wOiAwLjYyNXJlbSAhaW1wb3J0YW50O1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM4ODk4YWE7XG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMnB4IHJnYmEoMjMzLCAyMzYsIDIzOSwgMC4wNSkgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS41ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gICAgLS1jb2xvcjogIzUyNWY3ZjtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5qdW1sYWgge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogIzAwYTY1MTtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tbWF4LWhlaWdodDogMTZweDtcbn1cblxuLy8gYnV0dG9uOmRpc2FibGVkLFxuLy8gYnV0dG9uW2Rpc2FibGVkXSB7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTk5OTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuLy8gICAgIGNvbG9yOiAjNjY2NjY2O1xuLy8gfVxuIl19 */";
      /***/
    },

    /***/
    30032: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" (click)=\"dismiss()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"success\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            TUNAI KELUAR\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <form [formGroup]=\"tunai_masuk\" (ngSubmit)=\"logForm()\" style=\"margin: 30px;\">\n    <ion-item class=\"form-control\">\n      <ion-label>Todo</ion-label>\n      <ion-input type=\"text\" formControlName=\"title\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Description</ion-label>\n      <ion-textarea formControlName=\"description\"></ion-textarea>\n    </ion-item>\n    <ion-button type=\"submit\" [disabled]=\"!tunai_masuk.valid\">Submit</ion-button>\n  </form> -->\n\n  <ion-grid>\n    <form [formGroup]=\"tunai_keluar\" (ngSubmit)=\"logForm()\" style=\"margin: 30px;\">\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>KATEGORI ALIRAN</ion-label>\n          <ion-input type=\"text\" formControlName=\"title\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>TARIKH</ion-label>\n          <!-- <ion-input type=\"date\" formControlName=\"title\"></ion-input> -->\n          <ion-datetime displayFormat=\"YYYY-MM-DD\" formControlName=\"downtime_start\" style=\"background-color: #f5f5f5;\">\n          </ion-datetime>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>KETERANGAN</ion-label>\n          <ion-input type=\"text\" formControlName=\"title\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-text-center\" style=\"display: flex; justify-content:center\">\n        <!-- <ion-col class=\"ion-text-center\"> -->\n        <p style=\"margin: 0px;\"> JUMLAH <span style=\"color: red;\">*</span></p><br>\n        <!-- </ion-col> -->\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 30px; border-bottom: 1px solid\">\n        <ion-col class=\"jumlah\" [size]=4 style=\"display:flex; justify-content:center; align-items:center\">\n          RM\n        </ion-col>\n        <ion-col [size]=8>\n          <!-- <ion-item class=\" ion-text-center\">\n            <ion-label class=\"jumlah\" style=\"margin-top:50px\">RM </ion-label> -->\n          <ion-input class=\"jumlah\" type=\"number\" placeholder=\"0.00\"></ion-input>\n          <!-- </ion-item> -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-label>DOKUMEN LAMPIRAN</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-button color=\"success\" expand=\"block\">PILIH DOKUMEN</ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-button color=\"success\" expand=\"block\" >KEMASKINI</ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-button color=\"danger\" expand=\"block\" >PADAM</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </ion-grid>\n  \n\n\n\n</ion-content>";
      /***/
    },

    /***/
    36032: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" (click)=\"dismiss()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"success\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            TUNAI MASUK\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <form [formGroup]=\"tunai_masuk\" (ngSubmit)=\"logForm()\" style=\"margin: 30px;\">\n    <ion-item class=\"form-control\">\n      <ion-label>Todo</ion-label>\n      <ion-input type=\"text\" formControlName=\"title\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Description</ion-label>\n      <ion-textarea formControlName=\"description\"></ion-textarea>\n    </ion-item>\n    <ion-button type=\"submit\" [disabled]=\"!tunai_masuk.valid\">Submit</ion-button>\n  </form> -->\n\n  <ion-grid>\n    <form [formGroup]=\"tunai_masuk\" (ngSubmit)=\"logForm()\" style=\"margin: 30px;\">\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>KATEGORI ALIRAN</ion-label>\n          <ion-input type=\"text\" formControlName=\"title\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>TARIKH</ion-label>\n          <!-- <ion-input type=\"date\" formControlName=\"title\"></ion-input> -->\n          <ion-datetime displayFormat=\"YYYY-MM-DD\" formControlName=\"downtime_start\" style=\"background-color: #f5f5f5;\">\n          </ion-datetime>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>KETERANGAN</ion-label>\n          <ion-input type=\"text\" formControlName=\"title\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-text-center\" style=\"display: flex; justify-content:center\">\n        <!-- <ion-col class=\"ion-text-center\"> -->\n        <p style=\"margin: 0px;\"> JUMLAH <span style=\"color: red;\">*</span></p><br>\n        <!-- </ion-col> -->\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 30px; border-bottom: 1px solid\">\n        <ion-col class=\"jumlah\" [size]=4 style=\"display:flex; justify-content:center; align-items:center\">\n          RM\n        </ion-col>\n        <ion-col [size]=8>\n          <!-- <ion-item class=\" ion-text-center\">\n            <ion-label class=\"jumlah\" style=\"margin-top:50px\">RM </ion-label> -->\n          <ion-input class=\"jumlah\" type=\"number\" placeholder=\"0.00\"></ion-input>\n          <!-- </ion-item> -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-label>DOKUMEN LAMPIRAN</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-button color=\"success\" expand=\"block\">PILIH DOKUMEN</ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-button color=\"success\" expand=\"block\" >KEMASKINI</ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-button color=\"danger\" expand=\"block\" >PADAM</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </ion-grid>\n  \n\n\n\n</ion-content>";
      /***/
    },

    /***/
    22225: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" (click)=\"dismiss()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"success\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            TUNAI KELUAR\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <form [formGroup]=\"tunai_masuk\" (ngSubmit)=\"logForm()\" style=\"margin: 30px;\">\n    <ion-item class=\"form-control\">\n      <ion-label>Todo</ion-label>\n      <ion-input type=\"text\" formControlName=\"title\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Description</ion-label>\n      <ion-textarea formControlName=\"description\"></ion-textarea>\n    </ion-item>\n    <ion-button type=\"submit\" [disabled]=\"!tunai_masuk.valid\">Submit</ion-button>\n  </form> -->\n\n  <ion-grid>\n    <form [formGroup]=\"tunai_keluar\" (ngSubmit)=\"logForm()\" style=\"margin: 30px;\">\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>KATEGORI ALIRAN</ion-label>\n          <ion-input type=\"text\" formControlName=\"title\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>TARIKH</ion-label>\n          <!-- <ion-input type=\"date\" formControlName=\"title\"></ion-input> -->\n          <ion-datetime displayFormat=\"YYYY-MM-DD\" formControlName=\"downtime_start\" style=\"background-color: #f5f5f5;\">\n          </ion-datetime>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-label>KETERANGAN</ion-label>\n          <ion-input type=\"text\" formControlName=\"title\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-text-center\" style=\"display: flex; justify-content:center\">\n        <!-- <ion-col class=\"ion-text-center\"> -->\n        <p style=\"margin: 0px;\"> JUMLAH <span style=\"color: red;\">*</span></p><br>\n        <!-- </ion-col> -->\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 30px; border-bottom: 1px solid\">\n        <ion-col class=\"jumlah\" [size]=4 style=\"display:flex; justify-content:center; align-items:center\">\n          RM\n        </ion-col>\n        <ion-col [size]=8>\n          <!-- <ion-item class=\" ion-text-center\">\n            <ion-label class=\"jumlah\" style=\"margin-top:50px\">RM </ion-label> -->\n          <ion-input class=\"jumlah\" type=\"number\" placeholder=\"0.00\"></ion-input>\n          <!-- </ion-item> -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"form-control\">\n          <ion-label>DOKUMEN LAMPIRAN</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-button color=\"success\" expand=\"block\">PILIH DOKUMEN</ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-bottom: 20px;\">\n        <ion-col class=\"form-control\">\n          <ion-button color=\"success\" expand=\"block\" >TAMBAH TUNAI MASUK</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </ion-grid>\n  \n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map