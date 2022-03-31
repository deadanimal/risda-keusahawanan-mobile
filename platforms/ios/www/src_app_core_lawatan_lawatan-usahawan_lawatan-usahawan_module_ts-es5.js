(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_lawatan_lawatan-usahawan_lawatan-usahawan_module_ts"], {
    /***/
    68589: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HTTP": function HTTP() {
          return (
            /* binding */
            _HTTP
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


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/core */
      60399);

      var _HTTP = function (_super) {
        (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(HTTP, _super);

        function HTTP() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        HTTP.prototype.getBasicAuthHeader = function (username, password) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getBasicAuthHeader", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.useBasicAuth = function (username, password) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "useBasicAuth", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.getHeaders = function (host) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getHeaders", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setHeader = function (host, header, value) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setHeader", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.getDataSerializer = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getDataSerializer", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setDataSerializer = function (serializer) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setDataSerializer", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setCookie = function (url, cookie) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setCookie", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.clearCookies = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "clearCookies", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.removeCookies = function (url, cb) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "removeCookies", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.getCookieString = function (url) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getCookieString", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.getRequestTimeout = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getRequestTimeout", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setRequestTimeout = function (timeout) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setRequestTimeout", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.getFollowRedirect = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getFollowRedirect", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setFollowRedirect = function (follow) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setFollowRedirect", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setServerTrustMode = function (mode) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setServerTrustMode", {}, arguments);
        };

        HTTP.prototype.post = function (url, body, headers) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "post", {}, arguments);
        };

        HTTP.prototype.postSync = function (url, body, headers, success, failure) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "post", {
            "methodName": "post",
            "sync": true
          }, arguments);
        };

        HTTP.prototype.get = function (url, parameters, headers) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "get", {}, arguments);
        };

        HTTP.prototype.getSync = function (url, parameters, headers, success, failure) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "get", {
            "methodName": "get",
            "sync": true
          }, arguments);
        };

        HTTP.prototype.put = function (url, body, headers) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "put", {}, arguments);
        };

        HTTP.prototype.putSync = function (url, body, headers, success, failure) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "put", {
            "methodName": "put",
            "sync": true
          }, arguments);
        };

        HTTP.prototype.patch = function (url, body, headers) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "patch", {}, arguments);
        };

        HTTP.prototype.patchSync = function (url, body, headers, success, failure) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "patch", {
            "methodName": "patch",
            "sync": true
          }, arguments);
        };

        HTTP.prototype["delete"] = function (url, parameters, headers) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "delete", {}, arguments);
        };

        HTTP.prototype.deleteSync = function (url, parameters, headers, success, failure) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "delete", {
            "methodName": "delete",
            "sync": true
          }, arguments);
        };

        HTTP.prototype.head = function (url, parameters, headers) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "head", {}, arguments);
        };

        HTTP.prototype.headSync = function (url, parameters, headers, success, failure) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "head", {
            "methodName": "head",
            "sync": true
          }, arguments);
        };

        HTTP.prototype.options = function (url, parameters, headers) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "options", {}, arguments);
        };

        HTTP.prototype.optionsSync = function (url, parameters, headers, success, failure) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "options", {
            "methodName": "options",
            "sync": true
          }, arguments);
        };

        HTTP.prototype.uploadFile = function (url, body, headers, filePath, name) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "uploadFile", {}, arguments);
        };

        HTTP.prototype.uploadFileSync = function (url, body, headers, filePath, name, success, failure) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "uploadFile", {
            "methodName": "uploadFile",
            "sync": true
          }, arguments);
        };

        HTTP.prototype.downloadFile = function (url, body, headers, filePath) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "downloadFile", {}, arguments);
        };

        HTTP.prototype.downloadFileSync = function (url, body, headers, filePath, success, failure) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "downloadFile", {
            "methodName": "downloadFile",
            "sync": true
          }, arguments);
        };

        HTTP.prototype.sendRequest = function (url, options) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "sendRequest", {}, arguments);
        };

        HTTP.prototype.sendRequestSync = function (url, options, success, failure) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "sendRequest", {
            "methodName": "sendRequest",
            "sync": true
          }, arguments);
        };

        HTTP.prototype.abort = function (requestId) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "abort", {}, arguments);
        };

        Object.defineProperty(HTTP.prototype, "ErrorCode", {
          get: function get() {
            return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "ErrorCode");
          },
          set: function set(value) {
            (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "ErrorCode", value);
          },
          enumerable: false,
          configurable: true
        });
        HTTP.pluginName = "HTTP";
        HTTP.plugin = "cordova-plugin-advanced-http";
        HTTP.pluginRef = "cordova.plugin.http";
        HTTP.repo = "https://github.com/silkimen/cordova-plugin-advanced-http";
        HTTP.platforms = ["Android", "iOS"];

        HTTP.ɵfac = /*@__PURE__*/function () {
          var ɵHTTP_BaseFactory;
          return function HTTP_Factory(t) {
            return (ɵHTTP_BaseFactory || (ɵHTTP_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](HTTP)))(t || HTTP);
          };
        }();

        HTTP.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
          token: HTTP,
          factory: function factory(t) {
            return HTTP.ɵfac(t);
          }
        });

        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HTTP, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
          }], null, null);
        })();

        return HTTP;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvaHR0cC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQzs7QUFDekY7QUFHTyxJQXVFbUIsd0JBQWlCO0FBQUM7QUFFOUI7QUFBeUU7QUFBTSxJQXNCM0YsaUNBQWtCLGFBQUMsUUFBZ0IsRUFBRSxRQUFnQjtBQUs3QixJQUt4QiwyQkFBWSxhQUFDLFFBQWdCLEVBQUUsUUFBZ0I7QUFJNUMsSUFJSCx5QkFBVSxhQUFDLElBQVk7QUFLWSxJQU1uQyx3QkFBUyxhQUFDLElBQVksRUFBRSxNQUFjLEVBQUUsS0FBYTtBQUdGLElBSW5ELGdDQUFpQjtBQUtxQyxJQUt0RCxnQ0FBaUIsYUFBQyxVQUFnRTtBQUlqRCxJQUlqQyx3QkFBUyxhQUFDLEdBQVcsRUFBRSxNQUFjO0FBS2hCLElBQ3JCLDJCQUFZO0FBS04sSUFHTiw0QkFBYSxhQUFDLEdBQVcsRUFBRSxFQUFjO0FBSTVCLElBR2IsOEJBQWUsYUFBQyxHQUFXO0FBS2EsSUFJeEMsZ0NBQWlCO0FBTWIsSUFHSixnQ0FBaUIsYUFBQyxPQUFlO0FBSWhDLElBR0QsZ0NBQWlCO0FBS29DLElBSXJELGdDQUFpQixhQUFDLE1BQWU7QUFHMEIsSUFTM0QsaUNBQWtCLGFBQUMsSUFBaUQ7QUFLOUMsSUFPdEIsbUJBQUksYUFBQyxHQUFXLEVBQUUsSUFBUyxFQUFFLE9BQVk7QUFLekMsSUFZQSx1QkFBUSxhQUNOLEdBQVcsRUFDWCxJQUFTLEVBQ1QsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT1AsSUFNeEIsa0JBQUcsYUFBQyxHQUFXLEVBQUUsVUFBZSxFQUFFLE9BQVk7QUFLL0MsSUFZQyxzQkFBTyxhQUNMLEdBQVcsRUFDWCxVQUFlLEVBQ2YsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT1QsSUFNdEIsa0JBQUcsYUFBQyxHQUFXLEVBQUUsSUFBUyxFQUFFLE9BQVk7QUFLekMsSUFZQyxzQkFBTyxhQUNMLEdBQVcsRUFDWCxJQUFTLEVBQ1QsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT1gsSUFNcEIsb0JBQUssYUFBQyxHQUFXLEVBQUUsSUFBUyxFQUFFLE9BQVk7QUFLekMsSUFZRCx3QkFBUyxhQUNQLEdBQVcsRUFDWCxJQUFTLEVBQ1QsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT1IsSUFNdkIscUJBQU0sYUFBQyxHQUFXLEVBQUUsVUFBZSxFQUFFLE9BQVk7QUFLL0MsSUFZRix5QkFBVSxhQUNSLEdBQVcsRUFDWCxVQUFlLEVBQ2YsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT0osSUFNM0IsbUJBQUksYUFBQyxHQUFXLEVBQUUsVUFBZSxFQUFFLE9BQVk7QUFLL0MsSUFZQSx1QkFBUSxhQUNOLEdBQVcsRUFDWCxVQUFlLEVBQ2YsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT1osSUFNbkIsc0JBQU8sYUFBQyxHQUFXLEVBQUUsVUFBZSxFQUFFLE9BQVk7QUFLL0MsSUFZSCwwQkFBVyxhQUNULEdBQVcsRUFDWCxVQUFlLEVBQ2YsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT2tCLElBUWpELHlCQUFVLGFBQUMsR0FBVyxFQUFFLElBQVMsRUFBRSxPQUFZLEVBQUUsUUFBMkIsRUFBRSxJQUF1QjtBQU0zRixJQWFWLDZCQUFjLGFBQ1osR0FBVyxFQUNYLElBQVMsRUFDVCxPQUFZLEVBQ1osUUFBMkIsRUFDM0IsSUFBdUIsRUFDdkIsT0FBOEIsRUFDOUIsT0FBNkI7QUFRaEMsSUFNQywyQkFBWSxhQUFDLEdBQVcsRUFBRSxJQUFTLEVBQUUsT0FBWSxFQUFFLFFBQWdCO0FBTXZELElBWVosK0JBQWdCLGFBQ2QsR0FBVyxFQUNYLElBQVMsRUFDVCxPQUFZLEVBQ1osUUFBZ0IsRUFDaEIsT0FBOEIsRUFDOUIsT0FBNkI7QUFRNUIsSUFjSCwwQkFBVyxhQUNULEdBQVcsRUFDWCxPQVVDO0FBT0osSUFvQkMsOEJBQWUsYUFDYixHQUFXLEVBQ1gsT0FVQyxFQUNELE9BQXVDLEVBQ3ZDLE9BQTZCO0FBTStCLElBRzlELG9CQUFLLGFBQUMsU0FBaUI7QUFJcEIsMEJBdGlCTSwyQkFBUztBQUNwQjtBQUU0QjtBQUkxQjtBQUEyQjtBQUNUO0FBR25CO0FBQ3dCO0FBQWtEO0FBQzVDO0FBRUY7d0NBdEI1QixVQUFVOzs7OzBCQUNMO0FBQUMsZUE1RVA7QUFBRSxFQTRFd0IsaUJBQWlCO0FBQzFDLFNBRFksSUFBSTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBIVFRQUmVzcG9uc2Uge1xuICAvKipcbiAgICogVGhlIEhUVFAgc3RhdHVzIG51bWJlciBvZiB0aGUgcmVzcG9uc2Ugb3IgYSBuZWdhdGl2ZSBpbnRlcm5hbCBlcnJvciBjb2RlLlxuICAgKi9cbiAgc3RhdHVzOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgaGVhZGVycyBvZiB0aGUgcmVzcG9uc2UuXG4gICAqL1xuICBoZWFkZXJzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgICogVGhlIFVSTCBvZiB0aGUgcmVzcG9uc2UuIFRoaXMgcHJvcGVydHkgd2lsbCBiZSB0aGUgZmluYWwgVVJMIG9idGFpbmVkIGFmdGVyIGFueSByZWRpcmVjdHMuXG4gICAqL1xuICB1cmw6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBkYXRhIHRoYXQgaXMgaW4gdGhlIHJlc3BvbnNlLiBUaGlzIHByb3BlcnR5IHVzdWFsbHkgZXhpc3RzIHdoZW4gYSBwcm9taXNlIHJldHVybmVkIGJ5IGEgcmVxdWVzdCBtZXRob2QgcmVzb2x2ZXMuXG4gICAqL1xuICBkYXRhPzogYW55O1xuICAvKipcbiAgICogRXJyb3IgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyLiBUaGlzIHByb3BlcnR5IHVzdWFsbHkgZXhpc3RzIHdoZW4gYSBwcm9taXNlIHJldHVybmVkIGJ5IGEgcmVxdWVzdCBtZXRob2QgcmVqZWN0cy5cbiAgICovXG4gIGVycm9yPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQWJvcnRlZFJlc3BvbnNlIHtcbiAgYWJvcnRlZDogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBIVFRQXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgLyBQaG9uZWdhcCBwbHVnaW4gZm9yIGNvbW11bmljYXRpbmcgd2l0aCBIVFRQIHNlcnZlcnMuIFN1cHBvcnRzIGlPUyBhbmQgQW5kcm9pZC5cbiAqXG4gKiBBZHZhbnRhZ2VzIG92ZXIgSmF2YXNjcmlwdCByZXF1ZXN0czpcbiAqIC0gU1NMIC8gVExTIFBpbm5pbmdcbiAqIC0gQ09SUyByZXN0cmljdGlvbnMgZG8gbm90IGFwcGx5XG4gKiAtIEhhbmRsaW5nIG9mIEhUVFAgY29kZSA0MDEgLSByZWFkIG1vcmUgYXQgW0lzc3VlIENCLTI0MTVdKGh0dHBzOi8vaXNzdWVzLmFwYWNoZS5vcmcvamlyYS9icm93c2UvQ0ItMjQxNSlcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEhUVFAgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2h0dHAvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEhUVFApIHt9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5odHRwLmdldCgnaHR0cDovL2lvbmljLmlvJywge30sIHt9KVxuICogICAudGhlbihkYXRhID0+IHtcbiAqXG4gKiAgICAgY29uc29sZS5sb2coZGF0YS5zdGF0dXMpO1xuICogICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7IC8vIGRhdGEgcmVjZWl2ZWQgYnkgc2VydmVyXG4gKiAgICAgY29uc29sZS5sb2coZGF0YS5oZWFkZXJzKTtcbiAqXG4gKiAgIH0pXG4gKiAgIC5jYXRjaChlcnJvciA9PiB7XG4gKlxuICogICAgIGNvbnNvbGUubG9nKGVycm9yLnN0YXR1cyk7XG4gKiAgICAgY29uc29sZS5sb2coZXJyb3IuZXJyb3IpOyAvLyBlcnJvciBtZXNzYWdlIGFzIHN0cmluZ1xuICogICAgIGNvbnNvbGUubG9nKGVycm9yLmhlYWRlcnMpO1xuICpcbiAqICAgfSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogSFRUUFJlc3BvbnNlXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSFRUUCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFkdmFuY2VkLWh0dHAnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbi5odHRwJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zaWxraW1lbi9jb3Jkb3ZhLXBsdWdpbi1hZHZhbmNlZC1odHRwJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhUVFAgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGVudW0gcmVwcmVzZW50cyB0aGUgaW50ZXJuYWwgZXJyb3IgY29kZXMgd2hpY2ggY2FuIGJlIHJldHVybmVkIGluIGEgSFRUUFJlc3BvbnNlIG9iamVjdC5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgcmVhZG9ubHkgRXJyb3JDb2RlOiB7XG4gICAgR0VORVJJQzogbnVtYmVyO1xuICAgIFNTTF9FWENFUFRJT046IG51bWJlcjtcbiAgICBTRVJWRVJfTk9UX0ZPVU5EOiBudW1iZXI7XG4gICAgVElNRU9VVDogbnVtYmVyO1xuICAgIFVOU1VQUE9SVEVEX1VSTDogbnVtYmVyO1xuICAgIE5PVF9DT05ORUNURUQ6IG51bWJlcjtcbiAgICBQT1NUX1BST0NFU1NJTkdfRkFJTEVEOiBudW1iZXI7XG4gICAgQUJPUlRFRDogbnVtYmVyO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIHJldHVybnMgYW4gb2JqZWN0IHJlcHJlc2VudGluZyBhIGJhc2ljIEhUVFAgQXV0aG9yaXphdGlvbiBoZWFkZXIgb2YgdGhlIGZvcm0uXG4gICAqIEBwYXJhbSB1c2VybmFtZSB7c3RyaW5nfSBVc2VybmFtZVxuICAgKiBAcGFyYW0gcGFzc3dvcmQge3N0cmluZ30gUGFzc3dvcmRcbiAgICogQHJldHVybnMge09iamVjdH0gYW4gb2JqZWN0IHJlcHJlc2VudGluZyBhIGJhc2ljIEhUVFAgQXV0aG9yaXphdGlvbiBoZWFkZXIgb2YgdGhlIGZvcm0geydBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGJhc2U2NEVuY29kZWRVc2VybmFtZUFuZFBhc3N3b3JkJ31cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRCYXNpY0F1dGhIZWFkZXIodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IHsgQXV0aG9yaXphdGlvbjogc3RyaW5nIH0ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHNldHMgdXAgYWxsIGZ1dHVyZSByZXF1ZXN0cyB0byB1c2UgQmFzaWMgSFRUUCBhdXRoZW50aWNhdGlvbiB3aXRoIHRoZSBnaXZlbiB1c2VybmFtZSBhbmQgcGFzc3dvcmQuXG4gICAqIEBwYXJhbSB1c2VybmFtZSB7c3RyaW5nfSBVc2VybmFtZVxuICAgKiBAcGFyYW0gcGFzc3dvcmQge3N0cmluZ30gUGFzc3dvcmRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB1c2VCYXNpY0F1dGgodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogR2V0IGFsbCBoZWFkZXJzIGRlZmluZWQgZm9yIGEgZ2l2ZW4gaG9zdG5hbWUuXG4gICAqIEBwYXJhbSBob3N0IHtzdHJpbmd9IFRoZSBob3N0bmFtZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm4gYWxsIGhlYWRlcnMgZGVmaW5lZCBmb3IgdGhlIGhvc3RuYW1lXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SGVhZGVycyhob3N0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSBoZWFkZXIgZm9yIGFsbCBmdXR1cmUgcmVxdWVzdHMuIFRha2VzIGEgaG9zdG5hbWUsIGEgaGVhZGVyIGFuZCBhIHZhbHVlLlxuICAgKiBAcGFyYW0gaG9zdCB7c3RyaW5nfSBUaGUgaG9zdG5hbWUgdG8gYmUgdXNlZCBmb3Igc2NvcGluZyB0aGlzIGhlYWRlclxuICAgKiBAcGFyYW0gaGVhZGVyIHtzdHJpbmd9IFRoZSBuYW1lIG9mIHRoZSBoZWFkZXJcbiAgICogQHBhcmFtIHZhbHVlIHtzdHJpbmd9IFRoZSB2YWx1ZSBvZiB0aGUgaGVhZGVyXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0SGVhZGVyKGhvc3Q6IHN0cmluZywgaGVhZGVyOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZSBvZiB0aGUgZGF0YSBzZXJpYWxpemVyIHdoaWNoIHdpbGwgYmUgdXNlZCBmb3IgYWxsIGZ1dHVyZSBQT1NUIGFuZCBQVVQgcmVxdWVzdHMuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgdGhlIG5hbWUgb2YgdGhlIGNvbmZpZ3VyZWQgZGF0YSBzZXJpYWxpemVyXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0RGF0YVNlcmlhbGl6ZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkYXRhIHNlcmlhbGl6ZXIgd2hpY2ggd2lsbCBiZSB1c2VkIGZvciBhbGwgZnV0dXJlIFBPU1QsIFBVVCBhbmQgUEFUQ0ggcmVxdWVzdHMuIFRha2VzIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbmFtZSBvZiB0aGUgc2VyaWFsaXplci5cbiAgICogQHBhcmFtIHNlcmlhbGl6ZXIge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIHNlcmlhbGl6ZXIuXG4gICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3NpbGtpbWVuL2NvcmRvdmEtcGx1Z2luLWFkdmFuY2VkLWh0dHAjc2V0ZGF0YXNlcmlhbGl6ZXJcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXREYXRhU2VyaWFsaXplcihzZXJpYWxpemVyOiAndXJsZW5jb2RlZCcgfCAnanNvbicgfCAndXRmOCcgfCAnbXVsdGlwYXJ0JyB8ICdyYXcnKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBBZGQgYSBjdXN0b20gY29va2llLlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFNjb3BlIG9mIHRoZSBjb29raWVcbiAgICogQHBhcmFtIGNvb2tpZSB7c3RyaW5nfSBSRkMgY29tcGxpYW50IGNvb2tpZSBzdHJpbmdcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDb29raWUodXJsOiBzdHJpbmcsIGNvb2tpZTogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgY29va2llcy5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBjbGVhckNvb2tpZXMoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY29va2llcyBmb3IgZ2l2ZW4gVVJMLlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBjYlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlbW92ZUNvb2tpZXModXJsOiBzdHJpbmcsIGNiOiAoKSA9PiB2b2lkKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIGNvb2tpZSBzdHJpbmcgZm9yIGdpdmVuIFVSTC5cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENvb2tpZVN0cmluZyh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBnbG9iYWwgcmVxdWVzdCB0aW1lb3V0IHZhbHVlIGluIHNlY29uZHMuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IHJldHVybnMgdGhlIGdsb2JhbCByZXF1ZXN0IHRpbWVvdXQgdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRSZXF1ZXN0VGltZW91dCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZ2xvYmFsIHJlcXVlc3QgdGltZW91dCB2YWx1ZSBpbiBzZWNvbmRzLlxuICAgKiBAcGFyYW0gdGltZW91dCB7bnVtYmVyfSBUaGUgdGltZW91dCBpbiBzZWNvbmRzLiBEZWZhdWx0IDYwXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0UmVxdWVzdFRpbWVvdXQodGltZW91dDogbnVtYmVyKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIGlmIGl0IHNob3VsZCBmb2xsb3cgcmVkaXJlY3RzIGF1dG9tYXRpY2FsbHkuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSByZXR1cm5zIHRydWUgaWYgaXQgaXMgY29uZmlndXJlZCB0byBmb2xsb3cgcmVkaXJlY3RzIGF1dG9tYXRpY2FsbHlcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRGb2xsb3dSZWRpcmVjdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlIGlmIGl0IHNob3VsZCBmb2xsb3cgcmVkaXJlY3RzIGF1dG9tYXRpY2FsbHkuXG4gICAqIEBwYXJhbSBmb2xsb3cge2Jvb2xlYW59IFNldCB0byBmYWxzZSB0byBkaXNhYmxlIGZvbGxvd2luZyByZWRpcmVjdHMgYXV0b21hdGljYWxseVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEZvbGxvd1JlZGlyZWN0KGZvbGxvdzogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogU2V0IHNlcnZlciB0cnVzdCBtb2RlLCBiZWluZyBvbmUgb2YgdGhlIGZvbGxvd2luZyB2YWx1ZXM6XG4gICAqIGRlZmF1bHQ6IGRlZmF1bHQgU1NMIHRydXN0c2hpcCBhbmQgaG9zdG5hbWUgdmVyaWZpY2F0aW9uIGhhbmRsaW5nIHVzaW5nIHN5c3RlbSdzIENBIGNlcnRzO1xuICAgKiBsZWdhY3k6IHVzZSBsZWdhY3kgZGVmYXVsdCBiZWhhdmlvciAoPCAyLjAuMyksIGV4Y2x1ZGluZyB1c2VyIGluc3RhbGxlZCBDQSBjZXJ0cyAob25seSBmb3IgQW5kcm9pZCk7XG4gICAqIG5vY2hlY2s6IGRpc2FibGUgU1NMIGNlcnRpZmljYXRlIGNoZWNraW5nIGFuZCBob3N0bmFtZSB2ZXJpZmljYXRpb24sIHRydXN0aW5nIGFsbCBjZXJ0cyAobWVhbnQgdG8gYmUgdXNlZCBvbmx5IGZvciB0ZXN0aW5nIHB1cnBvc2VzKTtcbiAgICogcGlubmVkOiB0cnVzdCBvbmx5IHByb3ZpZGVkIGNlcnRpZmljYXRlcztcbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vc2lsa2ltZW4vY29yZG92YS1wbHVnaW4tYWR2YW5jZWQtaHR0cCNzZXRzZXJ2ZXJ0cnVzdG1vZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgc2VydmVyIHRydXN0IG1vZGVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0U2VydmVyVHJ1c3RNb2RlKG1vZGU6ICdkZWZhdWx0JyB8ICdsZWdhY3knIHwgJ25vY2hlY2snIHwgJ3Bpbm5lZCcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIFBPU1QgcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIVFRQUmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcG9zdCh1cmw6IHN0cmluZywgYm9keTogYW55LCBoZWFkZXJzOiBhbnkpOiBQcm9taXNlPEhUVFBSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgc3luYyBQT1NUIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIGJvZHkge09iamVjdH0gVGhlIGJvZHkgb2YgdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHBhcmFtIHN1Y2Nlc3Mge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3Qgc3VjY2VlZFxuICAgKiBAcGFyYW0gZmFpbHVyZSB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBmYWlsZWRcbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIHJlcXVlc3RJZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG1ldGhvZE5hbWU6ICdwb3N0JyxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBwb3N0U3luYyhcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgaGVhZGVyczogYW55LFxuICAgIHN1Y2Nlc3M6IChyZXN1bHQ6IEhUVFBSZXNwb25zZSkgPT4gdm9pZCxcbiAgICBmYWlsdXJlOiAoZXJyb3I6IGFueSkgPT4gdm9pZFxuICApOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgR0VUIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHBhcmFtZXRlcnMge09iamVjdH0gUGFyYW1ldGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldCh1cmw6IHN0cmluZywgcGFyYW1ldGVyczogYW55LCBoZWFkZXJzOiBhbnkpOiBQcm9taXNlPEhUVFBSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgc3luYyBHRVQgcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gcGFyYW1ldGVycyB7T2JqZWN0fSBQYXJhbWV0ZXJzIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcGFyYW0gc3VjY2VzcyB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBzdWNjZWVkXG4gICAqIEBwYXJhbSBmYWlsdXJlIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IGZhaWxlZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVxdWVzdElkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgbWV0aG9kTmFtZTogJ2dldCcsXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgZ2V0U3luYyhcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbWV0ZXJzOiBhbnksXG4gICAgaGVhZGVyczogYW55LFxuICAgIHN1Y2Nlc3M6IChyZXN1bHQ6IEhUVFBSZXNwb25zZSkgPT4gdm9pZCxcbiAgICBmYWlsdXJlOiAoZXJyb3I6IGFueSkgPT4gdm9pZFxuICApOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgUFVUIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIGJvZHkge09iamVjdH0gVGhlIGJvZHkgb2YgdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHB1dCh1cmw6IHN0cmluZywgYm9keTogYW55LCBoZWFkZXJzOiBhbnkpOiBQcm9taXNlPEhUVFBSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgc3luYyBQVVQgcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcGFyYW0gc3VjY2VzcyB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBzdWNjZWVkXG4gICAqIEBwYXJhbSBmYWlsdXJlIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IGZhaWxlZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVxdWVzdElkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgbWV0aG9kTmFtZTogJ3B1dCcsXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgcHV0U3luYyhcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgaGVhZGVyczogYW55LFxuICAgIHN1Y2Nlc3M6IChyZXN1bHQ6IEhUVFBSZXNwb25zZSkgPT4gdm9pZCxcbiAgICBmYWlsdXJlOiAoZXJyb3I6IGFueSkgPT4gdm9pZFxuICApOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgUEFUQ0ggcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIVFRQUmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGF0Y2godXJsOiBzdHJpbmcsIGJvZHk6IGFueSwgaGVhZGVyczogYW55KTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIHN5bmMgUEFUQ0ggcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcGFyYW0gc3VjY2VzcyB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBzdWNjZWVkXG4gICAqIEBwYXJhbSBmYWlsdXJlIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IGZhaWxlZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVxdWVzdElkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgbWV0aG9kTmFtZTogJ3BhdGNoJyxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBwYXRjaFN5bmMoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIGhlYWRlcnM6IGFueSxcbiAgICBzdWNjZXNzOiAocmVzdWx0OiBIVFRQUmVzcG9uc2UpID0+IHZvaWQsXG4gICAgZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIERFTEVURSByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHtPYmplY3R9IFBhcmFtZXRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkZWxldGUodXJsOiBzdHJpbmcsIHBhcmFtZXRlcnM6IGFueSwgaGVhZGVyczogYW55KTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIHN5bmMgREVMRVRFIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHBhcmFtZXRlcnMge09iamVjdH0gUGFyYW1ldGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHBhcmFtIHN1Y2Nlc3Mge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3Qgc3VjY2VlZFxuICAgKiBAcGFyYW0gZmFpbHVyZSB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBmYWlsZWRcbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIHJlcXVlc3RJZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG1ldGhvZE5hbWU6ICdkZWxldGUnLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGRlbGV0ZVN5bmMoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1ldGVyczogYW55LFxuICAgIGhlYWRlcnM6IGFueSxcbiAgICBzdWNjZXNzOiAocmVzdWx0OiBIVFRQUmVzcG9uc2UpID0+IHZvaWQsXG4gICAgZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIEhFQUQgcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gcGFyYW1ldGVycyB7T2JqZWN0fSBQYXJhbWV0ZXJzIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIVFRQUmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGVhZCh1cmw6IHN0cmluZywgcGFyYW1ldGVyczogYW55LCBoZWFkZXJzOiBhbnkpOiBQcm9taXNlPEhUVFBSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgc3luYyBIRUFEIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHBhcmFtZXRlcnMge09iamVjdH0gUGFyYW1ldGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHBhcmFtIHN1Y2Nlc3Mge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3Qgc3VjY2VlZFxuICAgKiBAcGFyYW0gZmFpbHVyZSB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBmYWlsZWRcbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIHJlcXVlc3RJZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG1ldGhvZE5hbWU6ICdoZWFkJyxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBoZWFkU3luYyhcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbWV0ZXJzOiBhbnksXG4gICAgaGVhZGVyczogYW55LFxuICAgIHN1Y2Nlc3M6IChyZXN1bHQ6IEhUVFBSZXNwb25zZSkgPT4gdm9pZCxcbiAgICBmYWlsdXJlOiAoZXJyb3I6IGFueSkgPT4gdm9pZFxuICApOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGFuIE9QVElPTlMgcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gcGFyYW1ldGVycyB7T2JqZWN0fSBQYXJhbWV0ZXJzIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIVFRQUmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb3B0aW9ucyh1cmw6IHN0cmluZywgcGFyYW1ldGVyczogYW55LCBoZWFkZXJzOiBhbnkpOiBQcm9taXNlPEhUVFBSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGFuIHN5bmMgT1BUSU9OUyByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHtPYmplY3R9IFBhcmFtZXRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBzdWNjZXNzIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IHN1Y2NlZWRcbiAgICogQHBhcmFtIGZhaWx1cmUge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3QgZmFpbGVkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSByZXF1ZXN0SWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBtZXRob2ROYW1lOiAnb3B0aW9ucycsXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgb3B0aW9uc1N5bmMoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1ldGVyczogYW55LFxuICAgIGhlYWRlcnM6IGFueSxcbiAgICBzdWNjZXNzOiAocmVzdWx0OiBIVFRQUmVzcG9uc2UpID0+IHZvaWQsXG4gICAgZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIGJvZHkge09iamVjdH0gVGhlIGJvZHkgb2YgdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHBhcmFtIGZpbGVQYXRoIHtzdHJpbmd9IFRoZSBsb2NhbCBwYXRoKHMpIG9mIHRoZSBmaWxlKHMpIHRvIHVwbG9hZFxuICAgKiBAcGFyYW0gbmFtZSB7c3RyaW5nfSBUaGUgbmFtZShzKSBvZiB0aGUgcGFyYW1ldGVyIHRvIHBhc3MgdGhlIGZpbGUocykgYWxvbmcgYXNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIEZpbGVFbnRyeSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1cGxvYWRGaWxlKHVybDogc3RyaW5nLCBib2R5OiBhbnksIGhlYWRlcnM6IGFueSwgZmlsZVBhdGg6IHN0cmluZyB8IHN0cmluZ1tdLCBuYW1lOiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBmaWxlUGF0aCB7c3RyaW5nfSBUaGUgbG9jYWwgcGF0aChzKSBvZiB0aGUgZmlsZShzKSB0byB1cGxvYWRcbiAgICogQHBhcmFtIG5hbWUge3N0cmluZ30gVGhlIG5hbWUocykgb2YgdGhlIHBhcmFtZXRlciB0byBwYXNzIHRoZSBmaWxlKHMpIGFsb25nIGFzXG4gICAqIEBwYXJhbSBzdWNjZXNzIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IHN1Y2NlZWRcbiAgICogQHBhcmFtIGZhaWx1cmUge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3QgZmFpbGVkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSByZXF1ZXN0SWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBtZXRob2ROYW1lOiAndXBsb2FkRmlsZScsXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgdXBsb2FkRmlsZVN5bmMoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIGhlYWRlcnM6IGFueSxcbiAgICBmaWxlUGF0aDogc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgbmFtZTogc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgc3VjY2VzczogKHJlc3VsdDogYW55KSA9PiB2b2lkLFxuICAgIGZhaWx1cmU6IChlcnJvcjogYW55KSA9PiB2b2lkXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBmaWxlUGF0aCB7c3RyaW5nfSBUaGUgcGF0aCB0byBkb3dubG9hZCB0aGUgZmlsZSB0bywgaW5jbHVkaW5nIHRoZSBmaWxlIG5hbWUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBGaWxlRW50cnkgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZG93bmxvYWRGaWxlKHVybDogc3RyaW5nLCBib2R5OiBhbnksIGhlYWRlcnM6IGFueSwgZmlsZVBhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBmaWxlUGF0aCB7c3RyaW5nfSBUaGUgcGF0aCB0byBkb3dubG9hZCB0aGUgZmlsZSB0bywgaW5jbHVkaW5nIHRoZSBmaWxlIG5hbWUuXG4gICAqIEBwYXJhbSBzdWNjZXNzIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IHN1Y2NlZWRcbiAgICogQHBhcmFtIGZhaWx1cmUge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3QgZmFpbGVkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSByZXF1ZXN0SWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBtZXRob2ROYW1lOiAnZG93bmxvYWRGaWxlJyxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBkb3dubG9hZEZpbGVTeW5jKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBoZWFkZXJzOiBhbnksXG4gICAgZmlsZVBhdGg6IHN0cmluZyxcbiAgICBzdWNjZXNzOiAocmVzdWx0OiBhbnkpID0+IHZvaWQsXG4gICAgZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIG9wdGlvbnMge09iamVjdH0gb3B0aW9ucyBmb3IgaW5kaXZpZHVhbCByZXF1ZXN0XG4gICAqIEBwYXJhbSBvcHRpb25zLm1ldGhvZCB7c3RyaW5nfSByZXF1ZXN0IG1ldGhvZFxuICAgKiBAcGFyYW0gb3B0aW9ucy5kYXRhIHtPYmplY3R9IHBheWxvYWQgdG8gYmUgc2VuZCB0byB0aGUgc2VydmVyIChvbmx5IGFwcGxpY2FibGUgb24gcG9zdCwgcHV0IG9yIHBhdGNoIG1ldGhvZHMpXG4gICAqIEBwYXJhbSBvcHRpb25zLnBhcmFtcyB7T2JqZWN0fSBxdWVyeSBwYXJhbXMgdG8gYmUgYXBwZW5kZWQgdG8gdGhlIFVSTCAob25seSBhcHBsaWNhYmxlIG9uIGdldCwgaGVhZCwgZGVsZXRlLCB1cGxvYWQgb3IgZG93bmxvYWQgbWV0aG9kcylcbiAgICogQHBhcmFtIG9wdGlvbnMuc2VyaWFsaXplciB7c3RyaW5nfSBkYXRhIHNlcmlhbGl6ZXIgdG8gYmUgdXNlZCAob25seSBhcHBsaWNhYmxlIG9uIHBvc3QsIHB1dCBvciBwYXRjaCBtZXRob2RzKSwgZGVmYXVsdHMgdG8gZ2xvYmFsIHNlcmlhbGl6ZXIgdmFsdWUsIHNlZSBzZXREYXRhU2VyaWFsaXplciBmb3Igc3VwcG9ydGVkIHZhbHVlc1xuICAgKiBAcGFyYW0gb3B0aW9ucy50aW1lb3V0IHtudW1iZXJ9IHRpbWVvdXQgdmFsdWUgZm9yIHRoZSByZXF1ZXN0IGluIHNlY29uZHMsIGRlZmF1bHRzIHRvIGdsb2JhbCB0aW1lb3V0IHZhbHVlXG4gICAqIEBwYXJhbSBvcHRpb25zLmhlYWRlcnMge09iamVjdH0gaGVhZGVycyBvYmplY3QgKGtleSB2YWx1ZSBwYWlyKSwgd2lsbCBiZSBtZXJnZWQgd2l0aCBnbG9iYWwgdmFsdWVzXG4gICAqIEBwYXJhbSBvcHRpb25zLmZpbGVQYXRoIHtzdHJpbmd9IGZpbGUgcGF0aChzKSB0byBiZSB1c2VkIGR1cmluZyB1cGxvYWQgYW5kIGRvd25sb2FkIHNlZSB1cGxvYWRGaWxlIGFuZCBkb3dubG9hZEZpbGUgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uXG4gICAqIEBwYXJhbSBvcHRpb25zLm5hbWUge3N0cmluZ30gbmFtZShzKSB0byBiZSB1c2VkIGR1cmluZyB1cGxvYWQgc2VlIHVwbG9hZEZpbGUgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uXG4gICAqIEBwYXJhbSBvcHRpb25zLnJlc3BvbnNlVHlwZSB7c3RyaW5nfSByZXNwb25zZSB0eXBlLCBkZWZhdWx0cyB0byB0ZXh0XG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZW5kUmVxdWVzdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBtZXRob2Q6ICdnZXQnIHwgJ3Bvc3QnIHwgJ3B1dCcgfCAncGF0Y2gnIHwgJ2hlYWQnIHwgJ2RlbGV0ZScgfCAnb3B0aW9ucycgfCAndXBsb2FkJyB8ICdkb3dubG9hZCc7XG4gICAgICBkYXRhPzogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9O1xuICAgICAgcGFyYW1zPzogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB9O1xuICAgICAgc2VyaWFsaXplcj86ICdqc29uJyB8ICd1cmxlbmNvZGVkJyB8ICd1dGY4JyB8ICdtdWx0aXBhcnQnIHwgJ3Jhdyc7XG4gICAgICB0aW1lb3V0PzogbnVtYmVyO1xuICAgICAgaGVhZGVycz86IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgIGZpbGVQYXRoPzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICBuYW1lPzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICByZXNwb25zZVR5cGU/OiAndGV4dCcgfCAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nO1xuICAgIH1cbiAgKTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIG9wdGlvbnMge09iamVjdH0gb3B0aW9ucyBmb3IgaW5kaXZpZHVhbCByZXF1ZXN0XG4gICAqIEBwYXJhbSBvcHRpb25zLm1ldGhvZCB7c3RyaW5nfSByZXF1ZXN0IG1ldGhvZFxuICAgKiBAcGFyYW0gb3B0aW9ucy5kYXRhIHtPYmplY3R9IHBheWxvYWQgdG8gYmUgc2VuZCB0byB0aGUgc2VydmVyIChvbmx5IGFwcGxpY2FibGUgb24gcG9zdCwgcHV0IG9yIHBhdGNoIG1ldGhvZHMpXG4gICAqIEBwYXJhbSBvcHRpb25zLnBhcmFtcyB7T2JqZWN0fSBxdWVyeSBwYXJhbXMgdG8gYmUgYXBwZW5kZWQgdG8gdGhlIFVSTCAob25seSBhcHBsaWNhYmxlIG9uIGdldCwgaGVhZCwgZGVsZXRlLCB1cGxvYWQgb3IgZG93bmxvYWQgbWV0aG9kcylcbiAgICogQHBhcmFtIG9wdGlvbnMuc2VyaWFsaXplciB7c3RyaW5nfSBkYXRhIHNlcmlhbGl6ZXIgdG8gYmUgdXNlZCAob25seSBhcHBsaWNhYmxlIG9uIHBvc3QsIHB1dCBvciBwYXRjaCBtZXRob2RzKSwgZGVmYXVsdHMgdG8gZ2xvYmFsIHNlcmlhbGl6ZXIgdmFsdWUsIHNlZSBzZXREYXRhU2VyaWFsaXplciBmb3Igc3VwcG9ydGVkIHZhbHVlc1xuICAgKiBAcGFyYW0gb3B0aW9ucy50aW1lb3V0IHtudW1iZXJ9IHRpbWVvdXQgdmFsdWUgZm9yIHRoZSByZXF1ZXN0IGluIHNlY29uZHMsIGRlZmF1bHRzIHRvIGdsb2JhbCB0aW1lb3V0IHZhbHVlXG4gICAqIEBwYXJhbSBvcHRpb25zLmhlYWRlcnMge09iamVjdH0gaGVhZGVycyBvYmplY3QgKGtleSB2YWx1ZSBwYWlyKSwgd2lsbCBiZSBtZXJnZWQgd2l0aCBnbG9iYWwgdmFsdWVzXG4gICAqIEBwYXJhbSBvcHRpb25zLmZpbGVQYXRoIHtzdHJpbmd9IGZpbGUgcGF0aChzKSB0byBiZSB1c2VkIGR1cmluZyB1cGxvYWQgYW5kIGRvd25sb2FkIHNlZSB1cGxvYWRGaWxlIGFuZCBkb3dubG9hZEZpbGUgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uXG4gICAqIEBwYXJhbSBvcHRpb25zLm5hbWUge3N0cmluZ30gbmFtZShzKSB0byBiZSB1c2VkIGR1cmluZyB1cGxvYWQgc2VlIHVwbG9hZEZpbGUgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uXG4gICAqIEBwYXJhbSBvcHRpb25zLnJlc3BvbnNlVHlwZSB7c3RyaW5nfSByZXNwb25zZSB0eXBlLCBkZWZhdWx0cyB0byB0ZXh0XG4gICAqIEBwYXJhbSBzdWNjZXNzIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IHN1Y2NlZWRcbiAgICogQHBhcmFtIGZhaWx1cmUge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3QgZmFpbGVkXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSByZXF1ZXN0SWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBtZXRob2ROYW1lOiAnc2VuZFJlcXVlc3QnLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNlbmRSZXF1ZXN0U3luYyhcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBtZXRob2Q6ICdnZXQnIHwgJ3Bvc3QnIHwgJ3B1dCcgfCAncGF0Y2gnIHwgJ2hlYWQnIHwgJ2RlbGV0ZScgfCAnb3B0aW9ucycgfCAndXBsb2FkJyB8ICdkb3dubG9hZCc7XG4gICAgICBkYXRhPzogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9O1xuICAgICAgcGFyYW1zPzogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB9O1xuICAgICAgc2VyaWFsaXplcj86ICdqc29uJyB8ICd1cmxlbmNvZGVkJyB8ICd1dGY4JyB8ICdtdWx0aXBhcnQnO1xuICAgICAgdGltZW91dD86IG51bWJlcjtcbiAgICAgIGhlYWRlcnM/OiB7IFtpbmRleDogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICBmaWxlUGF0aD86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgbmFtZT86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ3RleHQnIHwgJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJztcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IChyZXN1bHQ6IEhUVFBSZXNwb25zZSkgPT4gdm9pZCxcbiAgICBmYWlsdXJlOiAoZXJyb3I6IGFueSkgPT4gdm9pZFxuICApOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gcmVxdWVzdElkIHtzdHJpbmd9IFRoZSBSZXF1ZXN0SWQgb2YgdGhlIHJlcXVlc3QgdG8gYWJvcnRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYWJvcnQocmVxdWVzdElkOiBzdHJpbmcpOiBQcm9taXNlPEFib3J0ZWRSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

      /***/

    },

    /***/
    51942: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LawatanUsahawanPageRoutingModule": function LawatanUsahawanPageRoutingModule() {
          return (
            /* binding */
            _LawatanUsahawanPageRoutingModule
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


      var _lawatan_usahawan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lawatan-usahawan.page */
      95861);

      var routes = [{
        path: '',
        component: _lawatan_usahawan_page__WEBPACK_IMPORTED_MODULE_0__.LawatanUsahawanPage
      }];

      var _LawatanUsahawanPageRoutingModule = function LawatanUsahawanPageRoutingModule() {
        _classCallCheck(this, LawatanUsahawanPageRoutingModule);
      };

      _LawatanUsahawanPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LawatanUsahawanPageRoutingModule);
      /***/
    },

    /***/
    8032: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LawatanUsahawanPageModule": function LawatanUsahawanPageModule() {
          return (
            /* binding */
            _LawatanUsahawanPageModule
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


      var _lawatan_usahawan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lawatan-usahawan-routing.module */
      51942);
      /* harmony import */


      var _lawatan_usahawan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lawatan-usahawan.page */
      95861);
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      68589); // import { File } from '@ionic-native/file/ngx';


      var _LawatanUsahawanPageModule = function LawatanUsahawanPageModule() {
        _classCallCheck(this, LawatanUsahawanPageModule);
      };

      _LawatanUsahawanPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _lawatan_usahawan_routing_module__WEBPACK_IMPORTED_MODULE_0__.LawatanUsahawanPageRoutingModule],
        declarations: [_lawatan_usahawan_page__WEBPACK_IMPORTED_MODULE_1__.LawatanUsahawanPage],
        providers: [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__.HTTP // File
        ]
      })], _LawatanUsahawanPageModule);
      /***/
    },

    /***/
    95861: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LawatanUsahawanPage": function LawatanUsahawanPage() {
          return (
            /* binding */
            _LawatanUsahawanPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_lawatan_usahawan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./lawatan-usahawan.page.html */
      96468);
      /* harmony import */


      var _lawatan_usahawan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lawatan-usahawan.page.scss */
      72053);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      19122);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var src_app_services_lawatan_lawatan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/lawatan/lawatan.service */
      89765);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _pengesahan_tarikh_lawatan_pgw_pengesahan_tarikh_lawatan_pgw_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../pengesahan-tarikh-lawatan-pgw/pengesahan-tarikh-lawatan-pgw.page */
      31453);
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      68589);
      /* harmony import */


      var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @awesome-cordova-plugins/in-app-browser/ngx */
      69526);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _LawatanUsahawanPage = /*#__PURE__*/function () {
        function LawatanUsahawanPage(modalController, lawatanService, http, iab, router) {
          _classCallCheck(this, LawatanUsahawanPage);

          this.modalController = modalController;
          this.lawatanService = lawatanService;
          this.http = http;
          this.iab = iab;
          this.router = router;
          this.user_id = window.sessionStorage.getItem("user_id");
        }

        _createClass(LawatanUsahawanPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getLawatan();
          }
        }, {
          key: "pengesahanLawatan",
          value: function pengesahanLawatan(lawatan) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log("pengesahan lawatan");
                      _context.next = 3;
                      return this.modalController.create({
                        component: _pengesahan_tarikh_lawatan_pgw_pengesahan_tarikh_lawatan_pgw_page__WEBPACK_IMPORTED_MODULE_4__.PengesahanTarikhLawatanPgwPage,
                        componentProps: {
                          lawatan: lawatan
                        },
                        cssClass: 'my-custom-class'
                      });

                    case 3:
                      modal = _context.sent;
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getLawatan",
          value: function getLawatan() {
            var _this = this;

            this.lawatanService.getLawatanUsahawan(this.user_id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (x) {
              return x.filter(function (i) {
                return i.status_lawatan != "4";
              });
            })).subscribe(function (res) {
              console.log("res", res);
              _this.lawatan = res; // window.location.reload();
            });
            this.lawatanService.getLawatanUsahawan(this.user_id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (x) {
              return x.filter(function (i) {
                return i.status_lawatan == "4";
              });
            })).subscribe(function (res) {
              console.log("res2", res);
              _this.laporan = res; // window.location.reload();
              // this.lawatan
            });
          } // const fileTransfer: FileTransferObject = this.transfer.create();

        }, {
          key: "download_laporan",
          value: function download_laporan(id) {
            var _this2 = this;

            console.log(id);
            this.lawatanService.janaLaporan(id).subscribe(function (res) {
              console.log("res3", res);
              var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'storage/' + res;
              console.log(url); // window.open(url, "_blank");

              var browser = _this2.iab.create(url, '_system');
            });
          }
        }, {
          key: "dashboard",
          value: function dashboard() {
            this.router.navigate(['/dashboard']);
          }
        }]);

        return LawatanUsahawanPage;
      }();

      _LawatanUsahawanPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
        }, {
          type: src_app_services_lawatan_lawatan_service__WEBPACK_IMPORTED_MODULE_2__.LawatanService
        }, {
          type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__.HTTP
        }, {
          type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__.InAppBrowser
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }];
      };

      _LawatanUsahawanPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-lawatan-usahawan',
        template: _raw_loader_lawatan_usahawan_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_lawatan_usahawan_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LawatanUsahawanPage);
      /***/
    },

    /***/
    89765: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LawatanService": function LawatanService() {
          return (
            /* binding */
            _LawatanService
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

      var _LawatanService = /*#__PURE__*/function () {
        function LawatanService(http) {
          _classCallCheck(this, LawatanService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/lawatan";
          this.url2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/lawatan/usahawan";
          this.url3 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/tindakanLawatan";
          this.url4 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/lawatan/updateLaporan";
          this.url5 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/lawatan/senaraiUsahawan";
        }

        _createClass(LawatanService, [{
          key: "post",
          value: function post(data) {
            return this.http.post("".concat(this.url), data);
          }
        }, {
          key: "get",
          value: function get(pegawai_id) {
            return this.http.get("".concat(this.url) + '/' + pegawai_id);
          }
        }, {
          key: "getLawatanUsahawan",
          value: function getLawatanUsahawan(id_pengguna) {
            return this.http.get("".concat(this.url2) + '/' + id_pengguna);
          }
        }, {
          key: "update",
          value: function update(data, id) {
            return this.http.put("".concat(this.url) + '/' + id, data);
          }
        }, {
          key: "getTindakanLawatan",
          value: function getTindakanLawatan() {
            return this.http.get("".concat(this.url3));
          }
        }, {
          key: "updateLaporan",
          value: function updateLaporan(data, id) {
            return this.http.post("".concat(this.url4) + '/' + id, data);
          }
        }, {
          key: "getsenaraiusahawan",
          value: function getsenaraiusahawan(id_pegawai) {
            return this.http.get("".concat(this.url5) + '/' + id_pegawai);
          }
        }, {
          key: "tambahLaporan",
          value: function tambahLaporan(data) {
            return this.http.post("".concat(this.url) + '/laporanBaru', data);
          }
        }, {
          key: "janaLaporan",
          value: function janaLaporan(id) {
            return this.http.get("".concat(this.url) + '/janaDokumenLawatan/' + id);
          }
        }]);

        return LawatanService;
      }();

      _LawatanService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _LawatanService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _LawatanService);
      /***/
    },

    /***/
    72053: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".no-padding {\n  padding: 0px !important;\n}\n\n.rectangle-280 {\n  background-color: #00a651;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n\n.bg-white {\n  background-color: white;\n  display: flex;\n  height: 90%;\n  justify-content: center;\n  min-width: 100%;\n  border-radius: 0px 0px 25px 25px;\n}\n\n.tab-selected {\n  background-color: #FF6600;\n  border-radius: 30px;\n  color: white;\n}\n\n.tab {\n  margin-top: 10%;\n  border-bottom: none;\n}\n\nion-tab-button {\n  background-color: #f1f1f1;\n  border-radius: 30px;\n}\n\n.rectangle-279 {\n  border-radius: 12px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  margin-left: 7%;\n  margin-right: 7%;\n}\n\n.bold,\nh1 {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n\n.no-padding {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.jumlah {\n  font-family: \"Nunito Sans\";\n}\n\n.tarikh {\n  font-family: \"Nunito Sans\";\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhd2F0YW4tdXNhaGF3YW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUtBO0VBRUksbUJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUE7O0VBRUksaUJBQUE7RUFDQSwwQkFBQTtBQUhKOztBQUtBO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtBQUZKOztBQUlBO0VBQ0ksMEJBQUE7QUFESjs7QUFHQTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtBQUFKIiwiZmlsZSI6Imxhd2F0YW4tdXNhaGF3YW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLXBhZGRpbmcge1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucmVjdGFuZ2xlLTI4MCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTY1MTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4uYmctd2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjVweCAyNXB4O1xufVxuXG4udGFiLXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2NjAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4udGFiIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUYxO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDJyZW07XG59XG5cblxuLnJlY3RhbmdsZS0yNzkge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNFREVERUQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiA3JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDclO1xuICB9XG5cbi5ib2xkLFxuaDEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XG59XG4ubm8tcGFkZGluZyB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cbi5qdW1sYWgge1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XG59XG4udGFyaWtoIHtcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAvLyBjb2xvcjogIzAwYTY1MTtcbn1cblxuXG4iXX0= */";
      /***/
    },

    /***/
    96468: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dashboard()\">\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #986522;\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"warning\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            LAWATAN\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div>\n    <ion-tabs>\n      <ion-tab-bar slot=\"top\" class=\"tab\">\n        <ion-tab-button tab=\"/lawatan\" style=\"height:30px; max-width:40%\">\n          <ion-label style=\"width: 80%; \">\n            <div>\n              LAWATAN\n            </div>\n            <!-- <ion-button round=true>Tunai Masuk</ion-button> -->\n          </ion-label>\n          <!-- <ion-icon name=\"musical-note\"></ion-icon> -->\n        </ion-tab-button>\n        <ion-tab-button tab=\"/laporan\" style=\"height:30px; max-width:40%\">\n          <ion-label>\n            LAPORAN\n          </ion-label>\n          <!-- <ion-icon name=\"game-controller\"></ion-icon> -->\n        </ion-tab-button>\n\n      </ion-tab-bar>\n\n      <ion-tab tab=\"/lawatan\">\n\n        <ion-content>\n\n          <div class=\"bg-white\" style=\"display: flex; flex-wrap:wrap\">\n            <ion-grid style=\"margin:5%; margin-bottom:0px\">\n              <ion-row style=\"margin-bottom: 10px;\">\n                <ion-col>\n                  <h5 class=\"bold\"> Perkara</h5>\n                </ion-col>\n                <ion-col class=\"ion-text-end\">\n                  <h5 class=\"bold\">Status</h5>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <div style=\"height: 70%; width:100%; overflow: scroll; display:flex; justify-content:center\">\n\n              <ion-grid class=\"rectangle-279\">\n                <ion-row *ngFor=\"let lawatan of lawatan\"\n                  style=\"margin-bottom: 10px; background-color: #EDEDED; border-radius: 15px;\"\n                  (click)=\"lawatan.status_lawatan=='1'  ? pengesahanLawatan(lawatan):null;\">\n                  <ion-col>\n                    <div class=\" bold\" style=\"font-family: 'Nunito Sans';\">\n                      <ion-grid style=\"padding: 0%;\">\n                        <ion-row style=\"padding: 0%;\">\n                          <ion-col size=\"8\">\n                            <ion-text>\n                              <h6 class=\"bold no-padding\">\n                                {{lawatan.nama_pegawai}}\n                              </h6>\n                            </ion-text>\n                            <ion-text color=\"medium\">\n                              {{lawatan.tarikh_lawatan | date: 'dd/MM/yyyy'}}\n                            </ion-text>\n                          </ion-col>\n                          <ion-col size=\"4\" style=\"padding: 0%; display:flex; justify-content:flex-end\">\n                            <img *ngIf=\"lawatan.status_lawatan == '2'\" src=\"assets/icon/pending.png\" alt=\"pending\"\n                              height=\"50px\">\n                            <img *ngIf=\"lawatan.status_lawatan == '3'\" src=\"assets/icon/publish-icon.png\"\n                              alt=\"publish\" height=\"50px%\">\n                            <img *ngIf=\"lawatan.status_lawatan == '1'\" src=\"assets/icon/draft-icon.png\" alt=\"draft\"\n                              height=\"50px%\">\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n\n\n            </div>\n            \n          </div>\n\n        </ion-content>\n      </ion-tab>\n\n      <ion-tab tab=\"/laporan\">\n\n        <ion-content>\n\n          <div class=\"bg-white\" style=\"display: flex; flex-wrap:wrap\">\n            <ion-grid style=\"margin:5%; margin-bottom:0px\">\n              <ion-row style=\"margin-bottom: 10px;\">\n                <ion-col>\n                  <h5 class=\"bold\"> Maklumat</h5>\n                </ion-col>\n                <ion-col class=\"ion-text-end\">\n                  <!-- <h5 class=\"bold\">Status</h5> -->\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <div style=\"height: 70%; width:100%; overflow: scroll; display:flex; justify-content:center\">\n\n              <ion-grid class=\"rectangle-279\">\n                <ion-row *ngFor=\"let laporan of laporan\"\n                  style=\"margin-bottom: 10px; background-color: #EDEDED; border-radius: 15px;\"\n                  >\n                  <ion-col>\n                    <div class=\" bold\" style=\"font-family: 'Nunito Sans';\">\n                      <ion-grid style=\"padding: 0%;\">\n                        <ion-row style=\"padding: 0%;\">\n                          <ion-col size=\"8\">\n                            <ion-text>\n                              <h6 class=\"bold no-padding\">\n                                {{laporan.nama_pegawai}}\n                              </h6>\n                            </ion-text>\n                            <ion-text color=\"medium\">\n                              <p class=\"font-13 no-padding\">\n                                {{laporan.tarikh_lawatan | date: 'dd/MM/yyyy'}}\n                              </p>\n                            </ion-text>\n                          </ion-col>\n                          <ion-col size=\"4\"\n                            style=\"padding: 2%; display:flex; justify-content:flex-end; align-items:center\">\n                            <a (click)=\"download_laporan(laporan.lawatan_id)\">\n                              <img src=\"assets/new-iconv2/Download.png\" alt=\"pending\" height=\"25px\" style=\"margin-left: 20px;\">\n                            </a>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n\n\n            </div>\n            \n          </div>\n\n        </ion-content>\n\n      </ion-tab>\n\n\n    </ion-tabs>\n\n  </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_core_lawatan_lawatan-usahawan_lawatan-usahawan_module_ts-es5.js.map