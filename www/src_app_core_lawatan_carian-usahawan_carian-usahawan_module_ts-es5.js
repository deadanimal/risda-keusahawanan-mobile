(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_lawatan_carian-usahawan_carian-usahawan_module_ts"], {
    /***/
    44981: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Ng2SearchPipeModule": function Ng2SearchPipeModule() {
          return (
            /* binding */
            _Ng2SearchPipeModule
          );
        },

        /* harmony export */
        "Ng2SearchPipe": function Ng2SearchPipe() {
          return (
            /* binding */
            _Ng2SearchPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _Ng2SearchPipe = /*#__PURE__*/function () {
        function _Ng2SearchPipe() {
          _classCallCheck(this, _Ng2SearchPipe);
        }

        _createClass(_Ng2SearchPipe, [{
          key: "transform",
          value:
          /**
           * @param {?} items object from array
           * @param {?} term term's search
           * @return {?}
           */
          function transform(items, term) {
            if (!term || !items) return items;
            return _Ng2SearchPipe.filter(items, term);
          }
          /**
           *
           * @param {?} items List of items to filter
           * @param {?} term  a string term to compare with every property of the list
           *
           * @return {?}
           */

        }], [{
          key: "filter",
          value: function filter(items, term) {
            var
            /** @type {?} */
            toCompare = term.toLowerCase();
            /**
             * @param {?} item
             * @param {?} term
             * @return {?}
             */

            function checkInside(item, term) {
              for (var
              /** @type {?} */
              property in item) {
                if (item[property] === null || item[property] == undefined) {
                  continue;
                }

                if (typeof item[property] === 'object') {
                  if (checkInside(item[property], term)) {
                    return true;
                  }
                }

                if (item[property].toString().toLowerCase().includes(toCompare)) {
                  return true;
                }
              }

              return false;
            }

            return items.filter(function (item) {
              return checkInside(item, term);
            });
          }
        }]);

        return _Ng2SearchPipe;
      }();

      _Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) {
        return new (t || _Ng2SearchPipe)();
      };

      _Ng2SearchPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "filter",
        type: _Ng2SearchPipe,
        pure: false
      });
      _Ng2SearchPipe.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _Ng2SearchPipe,
        factory: _Ng2SearchPipe.ɵfac
      });
      /**
       * @nocollapse
       */

      _Ng2SearchPipe.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_Ng2SearchPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
          args: [{
            name: 'filter',
            pure: false
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
        }], null, null);
      })();

      var _Ng2SearchPipeModule = function _Ng2SearchPipeModule() {
        _classCallCheck(this, _Ng2SearchPipeModule);
      };

      _Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) {
        return new (t || _Ng2SearchPipeModule)();
      };

      _Ng2SearchPipeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _Ng2SearchPipeModule
      });
      _Ng2SearchPipeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
      /**
       * @nocollapse
       */

      _Ng2SearchPipeModule.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_Ng2SearchPipeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: [_Ng2SearchPipe],
            exports: [_Ng2SearchPipe]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_Ng2SearchPipeModule, {
          declarations: [_Ng2SearchPipe],
          exports: [_Ng2SearchPipe]
        });
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng2-search-filter.js.map

      /***/

    },

    /***/
    90618: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CarianUsahawanPageRoutingModule": function CarianUsahawanPageRoutingModule() {
          return (
            /* binding */
            _CarianUsahawanPageRoutingModule
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


      var _carian_usahawan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./carian-usahawan.page */
      39542);

      var routes = [{
        path: '',
        component: _carian_usahawan_page__WEBPACK_IMPORTED_MODULE_0__.CarianUsahawanPage
      }];

      var _CarianUsahawanPageRoutingModule = function CarianUsahawanPageRoutingModule() {
        _classCallCheck(this, CarianUsahawanPageRoutingModule);
      };

      _CarianUsahawanPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CarianUsahawanPageRoutingModule);
      /***/
    },

    /***/
    78838: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CarianUsahawanPageModule": function CarianUsahawanPageModule() {
          return (
            /* binding */
            _CarianUsahawanPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      19122);
      /* harmony import */


      var _carian_usahawan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./carian-usahawan-routing.module */
      90618);
      /* harmony import */


      var _carian_usahawan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./carian-usahawan.page */
      39542);
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-search-filter */
      44981);

      var _CarianUsahawanPageModule = function CarianUsahawanPageModule() {
        _classCallCheck(this, CarianUsahawanPageModule);
      };

      _CarianUsahawanPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _carian_usahawan_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarianUsahawanPageRoutingModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule],
        declarations: [_carian_usahawan_page__WEBPACK_IMPORTED_MODULE_1__.CarianUsahawanPage]
      })], _CarianUsahawanPageModule);
      /***/
    },

    /***/
    39542: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CarianUsahawanPage": function CarianUsahawanPage() {
          return (
            /* binding */
            _CarianUsahawanPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_carian_usahawan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./carian-usahawan.page.html */
      24959);
      /* harmony import */


      var _carian_usahawan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./carian-usahawan.page.scss */
      80662);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      19122);

      var _CarianUsahawanPage = /*#__PURE__*/function () {
        function CarianUsahawanPage(modalController) {
          _classCallCheck(this, CarianUsahawanPage);

          this.modalController = modalController;
        }

        _createClass(CarianUsahawanPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.peranan = window.sessionStorage.getItem("peranan_pegawai");
            console.log("senarai", this.usahawans);
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }, {
          key: "selectDismiss",
          value: function selectDismiss() {
            console.log("usahawan", this.pilihUsahawan); // this.modalController.dismiss({
            //   'dismissed': true
            // });

            this.modalController.dismiss(this.pilihUsahawan);
          }
        }]);

        return CarianUsahawanPage;
      }();

      _CarianUsahawanPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
        }];
      };

      _CarianUsahawanPage.propDecorators = {
        usahawans: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _CarianUsahawanPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-carian-usahawan',
        template: _raw_loader_carian_usahawan_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_carian_usahawan_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CarianUsahawanPage);
      /***/
    },

    /***/
    80662: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".list {\n  height: 80%;\n  overflow: scroll;\n  margin-bottom: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmlhbi11c2FoYXdhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBRUEsZ0JBQUE7RUFDQSxpQkFBQTtBQUFKIiwiZmlsZSI6ImNhcmlhbi11c2FoYXdhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdHtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG59Il19 */";
      /***/
    },

    /***/
    24959: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Senarai Usahawan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"peranan != 7\" class=\"ion-padding\">\n\n  <ion-searchbar placeholder=\"Carian Usahawan\" [(ngModel)]=\"searchTerm\" showCancelButton=\"focus\"></ion-searchbar>\n\n\n  <!-- {{ usahawans }} -->\n  <div class=\"list\">\n    <ion-list>\n\n      <ion-radio-group [(ngModel)]=\"pilihUsahawan\">\n\n        <ion-item *ngFor=\"let usahawan of usahawans | filter:searchTerm\">\n          <!-- {{usahawan}} -->\n          <ion-label>{{usahawan.namausahawan}}</ion-label>\n          <ion-radio slot=\"start\" value=\"{{usahawan.id_pengguna}}\"></ion-radio>\n        </ion-item>\n\n      </ion-radio-group>\n    </ion-list>\n  </div>\n\n\n\n  <ion-button color=\"dark\" (click)=\"selectDismiss()\" expand=\"block\">\n    Pilih\n  </ion-button>\n  <ion-button color=\"warning\" (click)=\"dismiss()\" expand=\"block\">\n    <ion-text color=\"dark\">\n      Batal\n    </ion-text>\n  </ion-button>\n\n</ion-content>\n\n\n<ion-content *ngIf=\"peranan == 7\" class=\"ion-padding\">\n\n  <ion-searchbar placeholder=\"Carian Usahawan\" [(ngModel)]=\"searchTerm\" showCancelButton=\"focus\"></ion-searchbar>\n\n\n  <!-- {{ usahawans }} -->\n  <div class=\"list\">\n    <ion-list>\n\n      <ion-radio-group [(ngModel)]=\"pilihUsahawan\">\n\n        <ion-item *ngFor=\"let usahawan of usahawans | filter:searchTerm\">\n          <!-- {{usahawan}} -->\n          <ion-label>{{usahawan.name}}</ion-label>\n          <ion-radio slot=\"start\" value=\"{{usahawan.id_pengguna}}\"></ion-radio>\n        </ion-item>\n\n      </ion-radio-group>\n    </ion-list>\n  </div>\n\n\n\n  <ion-button color=\"dark\" (click)=\"selectDismiss()\" expand=\"block\">\n    Pilih\n  </ion-button>\n  <ion-button color=\"warning\" (click)=\"dismiss()\" expand=\"block\">\n    <ion-text color=\"dark\">\n      Batal\n    </ion-text>\n  </ion-button>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_core_lawatan_carian-usahawan_carian-usahawan_module_ts-es5.js.map