(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_core_lawatan_lawatan-usahawan_lawatan-usahawan_module_ts"],{

/***/ 20138:
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "File": function() { return /* binding */ File; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 60399);




var File = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(File, _super);
    function File() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cordovaFileError = {
            1: 'NOT_FOUND_ERR',
            2: 'SECURITY_ERR',
            3: 'ABORT_ERR',
            4: 'NOT_READABLE_ERR',
            5: 'ENCODING_ERR',
            6: 'NO_MODIFICATION_ALLOWED_ERR',
            7: 'INVALID_STATE_ERR',
            8: 'SYNTAX_ERR',
            9: 'INVALID_MODIFICATION_ERR',
            10: 'QUOTA_EXCEEDED_ERR',
            11: 'TYPE_MISMATCH_ERR',
            12: 'PATH_EXISTS_ERR',
            13: 'WRONG_ENTRY_TYPE',
            14: 'DIR_READ_ERR',
        };
        return _this;
    }
    File.prototype.getFreeDiskSpace = function () {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
                    cordova.exec(resolve, reject, 'File', 'getFreeDiskSpace', []);
                });
            }
        })();
    };
    File.prototype.checkDir = function (path, dir) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(dir)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                var fullPath = path + dir;
                return _this.resolveDirectoryUrl(fullPath).then(function () {
                    return true;
                });
            }
        })();
    };
    File.prototype.createDir = function (path, dirName, replace) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                var options = {
                    create: true,
                };
                if (!replace) {
                    options.exclusive = true;
                }
                return _this.resolveDirectoryUrl(path).then(function (fse) {
                    return _this.getDirectory(fse, dirName, options);
                });
            }
        })();
    };
    File.prototype.removeDir = function (path, dirName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (de) {
                    return _this.remove(de);
                });
            }
        })();
    };
    File.prototype.moveDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                newDirName = newDirName || dirName;
                if (/^\//.test(newDirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (srcde) {
                    return _this.resolveDirectoryUrl(newPath).then(function (destenation) {
                        return _this.move(srcde, destenation, newDirName);
                    });
                });
            }
        })();
    };
    File.prototype.copyDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(newDirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (srcde) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.copy(srcde, deste, newDirName);
                    });
                });
            }
        })();
    };
    File.prototype.listDir = function (path, dirName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, {
                        create: false,
                        exclusive: false,
                    });
                })
                    .then(function (de) {
                    var reader = de.createReader();
                    return _this.readEntries(reader);
                });
            }
        })();
    };
    File.prototype.removeRecursively = function (path, dirName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (de) {
                    return _this.rimraf(de);
                });
            }
        })();
    };
    File.prototype.checkFile = function (path, file) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(file)) {
                    var err = new FileError(5);
                    err.message = 'file cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveLocalFilesystemUrl(path + file).then(function (fse) {
                    if (fse.isFile) {
                        return true;
                    }
                    else {
                        var err = new FileError(13);
                        err.message = 'input is not a file';
                        return Promise.reject(err);
                    }
                });
            }
        })();
    };
    File.prototype.createFile = function (path, fileName, replace) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                var options = {
                    create: true,
                };
                if (!replace) {
                    options.exclusive = true;
                }
                return _this.resolveDirectoryUrl(path).then(function (fse) {
                    return _this.getFile(fse, fileName, options);
                });
            }
        })();
    };
    File.prototype.removeFile = function (path, fileName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (fe) {
                    return _this.remove(fe);
                });
            }
        })();
    };
    File.prototype.writeFile = function (path, fileName, text, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                var getFileOpts = {
                    create: !options.append,
                    exclusive: !options.replace,
                };
                return _this.resolveDirectoryUrl(path)
                    .then(function (directoryEntry) {
                    return _this.getFile(directoryEntry, fileName, getFileOpts);
                })
                    .then(function (fileEntry) {
                    return _this.writeFileEntry(fileEntry, text, options);
                });
            }
        })();
    };
    /**
     * Write content to FileEntry.
     * @hidden
     * Write to an existing file.
     * @param {FileEntry} fe file entry object
     * @param {string | Blob | ArrayBuffer} text text content or blob to write
     * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
     * @returns {Promise<FileEntry>}  Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    File.prototype.writeFileEntry = function (fe, text, options) {
        var _this = this;
        return this.createWriter(fe)
            .then(function (writer) {
            if (options.append) {
                writer.seek(writer.length);
            }
            if (options.truncate) {
                writer.truncate(options.truncate);
            }
            return _this.write(writer, text);
        })
            .then(function () { return fe; });
    };
    File.prototype.writeExistingFile = function (path, fileName, text) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.writeFile(path, fileName, text, { replace: true });
            }
        })();
    };
    File.prototype.readAsText = function (path, file) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.readFile(path, file, 'Text');
            }
        })();
    };
    File.prototype.readAsDataURL = function (path, file) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.readFile(path, file, 'DataURL');
            }
        })();
    };
    File.prototype.readAsBinaryString = function (path, file) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.readFile(path, file, 'BinaryString');
            }
        })();
    };
    File.prototype.readAsArrayBuffer = function (path, file) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.readFile(path, file, 'ArrayBuffer');
            }
        })();
    };
    File.prototype.moveFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                newFileName = newFileName || fileName;
                if (/^\//.test(newFileName)) {
                    var err = new FileError(5);
                    err.message = 'file name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (srcfe) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.move(srcfe, deste, newFileName);
                    });
                });
            }
        })();
    };
    File.prototype.copyFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                newFileName = newFileName || fileName;
                if (/^\//.test(newFileName)) {
                    var err = new FileError(5);
                    err.message = 'file name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (srcfe) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.copy(srcfe, deste, newFileName);
                    });
                });
            }
        })();
    };
    /**
     * @hidden
     */
    File.prototype.fillErrorMessage = function (err) {
        try {
            err.message = this.cordovaFileError[err.code];
        }
        catch (e) { }
    };
    File.prototype.resolveLocalFilesystemUrl = function (fileUrl) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
                    try {
                        window.resolveLocalFileSystemURL(fileUrl, function (entry) {
                            resolve(entry);
                        }, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.resolveDirectoryUrl = function (directoryUrl) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.resolveLocalFilesystemUrl(directoryUrl).then(function (de) {
                    if (de.isDirectory) {
                        return de;
                    }
                    else {
                        var err = new FileError(13);
                        err.message = 'input is not a directory';
                        return Promise.reject(err);
                    }
                });
            }
        })();
    };
    File.prototype.getDirectory = function (directoryEntry, directoryName, flags) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return new Promise(function (resolve, reject) {
                    try {
                        directoryEntry.getDirectory(directoryName, flags, function (de) {
                            resolve(de);
                        }, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.getFile = function (directoryEntry, fileName, flags) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return new Promise(function (resolve, reject) {
                    try {
                        directoryEntry.getFile(fileName, flags, resolve, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.readFile = function (path, file, readAs) {
        var _this = this;
        if (/^\//.test(file)) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (directoryEntry) {
            return _this.getFile(directoryEntry, file, { create: false });
        })
            .then(function (fileEntry) {
            var reader = new FileReader();
            return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
                reader.onloadend = function () {
                    if (reader.result !== undefined || reader.result !== null) {
                        resolve(reader.result);
                    }
                    else if (reader.error !== undefined || reader.error !== null) {
                        reject(reader.error);
                    }
                    else {
                        reject({ code: null, message: 'READER_ONLOADEND_ERR' });
                    }
                };
                fileEntry.file(function (file) {
                    reader["readAs" + readAs].call(reader, file);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.remove = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.remove(function () {
                resolve({ success: true, fileRemoved: fe });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.move = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.moveTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.copy = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.copyTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.readEntries = function (dr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            dr.readEntries(function (entries) {
                resolve(entries);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.rimraf = function (de) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            de.removeRecursively(function () {
                resolve({ success: true, fileRemoved: de });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.createWriter = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.createWriter(function (writer) {
                resolve(writer);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.write = function (writer, gu) {
        if (gu instanceof Blob) {
            return this.writeFileInChunks(writer, gu);
        }
        return new Promise(function (resolve, reject) {
            writer.onwriteend = function (evt) {
                if (writer.error) {
                    reject(writer.error);
                }
                else {
                    resolve(evt);
                }
            };
            writer.write(gu);
        });
    };
    /**
     * @hidden
     */
    File.prototype.writeFileInChunks = function (writer, file) {
        var BLOCK_SIZE = 1024 * 1024;
        var writtenSize = 0;
        function writeNextChunk() {
            var size = Math.min(BLOCK_SIZE, file.size - writtenSize);
            var chunk = file.slice(writtenSize, writtenSize + size);
            writtenSize += size;
            writer.write(chunk);
        }
        return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
            writer.onerror = reject;
            writer.onwrite = function () {
                if (writtenSize < file.size) {
                    writeNextChunk();
                }
                else {
                    resolve();
                }
            };
            writeNextChunk();
        });
    };
    Object.defineProperty(File.prototype, "applicationDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "applicationDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "applicationDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "applicationStorageDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "applicationStorageDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "applicationStorageDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "dataDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "dataDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "dataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "cacheDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "cacheDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "cacheDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalApplicationStorageDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "externalApplicationStorageDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "externalApplicationStorageDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalDataDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "externalDataDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "externalDataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalCacheDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "externalCacheDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "externalCacheDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalRootDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "externalRootDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "externalRootDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "tempDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "tempDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "tempDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "syncedDataDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "syncedDataDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "syncedDataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "documentsDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "documentsDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "documentsDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "sharedDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "sharedDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "sharedDirectory", value); },
        enumerable: false,
        configurable: true
    });
    File.pluginName = "File";
    File.plugin = "cordova-plugin-file";
    File.pluginRef = "cordova.file";
    File.repo = "https://github.com/apache/cordova-plugin-file";
    File.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
File.ɵfac = /*@__PURE__*/ function () { var ɵFile_BaseFactory; return function File_Factory(t) { return (ɵFile_BaseFactory || (ɵFile_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](File)))(t || File); }; }();
File.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: File, factory: function (t) { return File.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](File, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return File;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZmlsZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxnRkFBNEQsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBQzFHO0FBR0MsSUFncUJ5Qix3QkFBaUI7QUFBQztBQUU5QjtBQUVVLFFBMER0QixzQkFBZ0IsR0FBUTtBQUMxQixZQUFJLENBQUMsRUFBRSxlQUFlO0FBQ3RCLFlBQUksQ0FBQyxFQUFFLGNBQWM7QUFDckIsWUFBSSxDQUFDLEVBQUUsV0FBVztBQUNsQixZQUFJLENBQUMsRUFBRSxrQkFBa0I7QUFDekIsWUFBSSxDQUFDLEVBQUUsY0FBYztBQUNyQixZQUFJLENBQUMsRUFBRSw2QkFBNkI7QUFDcEMsWUFBSSxDQUFDLEVBQUUsbUJBQW1CO0FBQzFCLFlBQUksQ0FBQyxFQUFFLFlBQVk7QUFDbkIsWUFBSSxDQUFDLEVBQUUsMEJBQTBCO0FBQ2pDLFlBQUksRUFBRSxFQUFFLG9CQUFvQjtBQUM1QixZQUFJLEVBQUUsRUFBRSxtQkFBbUI7QUFDM0IsWUFBSSxFQUFFLEVBQUUsaUJBQWlCO0FBQ3pCLFlBQUksRUFBRSxFQUFFLGtCQUFrQjtBQUMxQixZQUFJLEVBQUUsRUFBRSxjQUFjO0FBQ3RCLFNBQUcsQ0FBQztBQUNKO0FBRWU7QUFBTSxJQUluQiwrQkFBZ0I7QUFBaUI7QUFDZDtBQUNwQixtREFGcUM7QUFDdEMsZ0JBQUksT0FBTyxVQUFVLENBQU0sVUFBQyxPQUFPLEVBQUUsTUFBTTtBQUFJLG9CQUN6QyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQTZCLEVBQUUsTUFBNEIsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDaEgsZ0JBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxhQUFHO0FB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N0VmLFVBQVU7Ozs7MEJBQ0w7QUFBQyxlQXJxQlA7QUFBRSxFQXFxQndCLGlCQUFpQjtBQUMxQyxTQURZLElBQUk7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmFDaGVjaywgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luLCBnZXRQcm9taXNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJRmlsZSBleHRlbmRzIEJsb2Ige1xuICAvKipcbiAgICogTmFtZSBvZiB0aGUgZmlsZSwgd2l0aG91dCBwYXRoIGluZm9ybWF0aW9uXG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBMYXN0IG1vZGlmaWVkIGRhdGVcbiAgICovXG4gIGxhc3RNb2RpZmllZDogbnVtYmVyO1xuICAvKipcbiAgICogTGFzdCBtb2RpZmllZCBkYXRlXG4gICAqL1xuICBsYXN0TW9kaWZpZWREYXRlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBTaXplIGluIGJ5dGVzXG4gICAqL1xuICBzaXplOiBudW1iZXI7XG4gIC8qKlxuICAgKiBGaWxlIG1pbWUgdHlwZVxuICAgKi9cbiAgdHlwZTogc3RyaW5nO1xuICBsb2NhbFVSTDogc3RyaW5nO1xuICBzdGFydDogbnVtYmVyO1xuICBlbmQ6IG51bWJlcjtcblxuICAvKipcbiAgICogUmV0dXJucyBhIFwic2xpY2VcIiBvZiB0aGUgZmlsZS4gU2luY2UgQ29yZG92YSBGaWxlcyBkb24ndCBjb250YWluIHRoZSBhY3R1YWxcbiAgICogY29udGVudCwgdGhpcyByZWFsbHkgcmV0dXJucyBhIEZpbGUgd2l0aCBhZGp1c3RlZCBzdGFydCBhbmQgZW5kLlxuICAgKiBTbGljZXMgb2Ygc2xpY2VzIGFyZSBzdXBwb3J0ZWQuXG4gICAqIEBwYXJhbSBzdGFydCB7TnVtYmVyfSBUaGUgaW5kZXggYXQgd2hpY2ggdG8gc3RhcnQgdGhlIHNsaWNlIChpbmNsdXNpdmUpLlxuICAgKiBAcGFyYW0gZW5kIHtOdW1iZXJ9IFRoZSBpbmRleCBhdCB3aGljaCB0byBlbmQgdGhlIHNsaWNlIChleGNsdXNpdmUpLlxuICAgKi9cbiAgc2xpY2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBCbG9iO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsRmlsZVN5c3RlbSB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBzdG9yYWdlIHdpdGggbm8gZ3VhcmFudGVlIG9mIHBlcnNpc3RlbmNlLlxuICAgKi9cbiAgVEVNUE9SQVJZOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFVzZWQgZm9yIHN0b3JhZ2UgdGhhdCBzaG91bGQgbm90IGJlIHJlbW92ZWQgYnkgdGhlIHVzZXIgYWdlbnQgd2l0aG91dCBhcHBsaWNhdGlvbiBvciB1c2VyIHBlcm1pc3Npb24uXG4gICAqL1xuICBQRVJTSVNURU5UOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIGEgZmlsZXN5c3RlbSBpbiB3aGljaCB0byBzdG9yZSBhcHBsaWNhdGlvbiBkYXRhLlxuICAgKiBAcGFyYW0gdHlwZSBXaGV0aGVyIHRoZSBmaWxlc3lzdGVtIHJlcXVlc3RlZCBzaG91bGQgYmUgcGVyc2lzdGVudCwgYXMgZGVmaW5lZCBhYm92ZS4gVXNlIG9uZSBvZiBURU1QT1JBUlkgb3JcbiAgICogICBQRVJTSVNURU5ULlxuICAgKiBAcGFyYW0gc2l6ZSBUaGlzIGlzIGFuIGluZGljYXRvciBvZiBob3cgbXVjaCBzdG9yYWdlIHNwYWNlLCBpbiBieXRlcywgdGhlIGFwcGxpY2F0aW9uIGV4cGVjdHMgdG8gbmVlZC5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBUaGUgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgdXNlciBhZ2VudCBwcm92aWRlcyBhIGZpbGVzeXN0ZW0uXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLCBvciB3aGVuIHRoZSByZXF1ZXN0IHRvIG9idGFpbiB0aGUgZmlsZXN5c3RlbSBpc1xuICAgKiAgIGRlbmllZC5cbiAgICovXG4gIHJlcXVlc3RGaWxlU3lzdGVtKFxuICAgIHR5cGU6IG51bWJlcixcbiAgICBzaXplOiBudW1iZXIsXG4gICAgc3VjY2Vzc0NhbGxiYWNrOiBGaWxlU3lzdGVtQ2FsbGJhY2ssXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogQWxsb3dzIHRoZSB1c2VyIHRvIGxvb2sgdXAgdGhlIEVudHJ5IGZvciBhIGZpbGUgb3IgZGlyZWN0b3J5IHJlZmVycmVkIHRvIGJ5IGEgbG9jYWwgVVJMLlxuICAgKiBAcGFyYW0gdXJsIEEgVVJMIHJlZmVycmluZyB0byBhIGxvY2FsIGZpbGUgaW4gYSBmaWxlc3lzdGVtIGFjY2Vzc2FibGUgdmlhIHRoaXMgQVBJLlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgdG8gcmVwb3J0IHRoZSBGaWxlRW50cnkgdG8gd2hpY2ggdGhlIHN1cHBsaWVkIFVSTCByZWZlcnMuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLCBvciB3aGVuIHRoZSByZXF1ZXN0IHRvIG9idGFpbiB0aGUgRW50cnkgaXNcbiAgICogICBkZW5pZWQuXG4gICAqL1xuICByZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKHVybDogc3RyaW5nLCBzdWNjZXNzQ2FsbGJhY2s6IEZpbGVFbnRyeUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIHNlZSByZXF1ZXN0RmlsZVN5c3RlbS5cbiAgICovXG4gIHdlYmtpdFJlcXVlc3RGaWxlU3lzdGVtKFxuICAgIHR5cGU6IG51bWJlcixcbiAgICBzaXplOiBudW1iZXIsXG4gICAgc3VjY2Vzc0NhbGxiYWNrOiBGaWxlU3lzdGVtQ2FsbGJhY2ssXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcbiAgKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YSB7XG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSB0aW1lIGF0IHdoaWNoIHRoZSBmaWxlIG9yIGRpcmVjdG9yeSB3YXMgbGFzdCBtb2RpZmllZC5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBtb2RpZmljYXRpb25UaW1lOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgZmlsZSwgaW4gYnl0ZXMuIFRoaXMgbXVzdCByZXR1cm4gMCBmb3IgZGlyZWN0b3JpZXMuXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZsYWdzIHtcbiAgLyoqXG4gICAqIFVzZWQgdG8gaW5kaWNhdGUgdGhhdCB0aGUgdXNlciB3YW50cyB0byBjcmVhdGUgYSBmaWxlIG9yIGRpcmVjdG9yeSBpZiBpdCB3YXMgbm90IHByZXZpb3VzbHkgdGhlcmUuXG4gICAqL1xuICBjcmVhdGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBCeSBpdHNlbGYsIGV4Y2x1c2l2ZSBtdXN0IGhhdmUgbm8gZWZmZWN0LiBVc2VkIHdpdGggY3JlYXRlLCBpdCBtdXN0IGNhdXNlIGdldEZpbGUgYW5kIGdldERpcmVjdG9yeSB0byBmYWlsIGlmIHRoZVxuICAgKiB0YXJnZXQgcGF0aCBhbHJlYWR5IGV4aXN0cy5cbiAgICovXG4gIGV4Y2x1c2l2ZT86IGJvb2xlYW47XG59XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBmaWxlIHN5c3RlbS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGaWxlU3lzdGVtIHtcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIG5hbWUgb2YgdGhlIGZpbGUgc3lzdGVtLiBUaGUgc3BlY2lmaWNzIG9mIG5hbWluZyBmaWxlc3lzdGVtcyBpcyB1bnNwZWNpZmllZCwgYnV0IGEgbmFtZSBtdXN0IGJlIHVuaXF1ZVxuICAgKiBhY3Jvc3MgdGhlIGxpc3Qgb2YgZXhwb3NlZCBmaWxlIHN5c3RlbXMuXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhlIGZpbGUgc3lzdGVtLlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIHJvb3Q6IERpcmVjdG9yeUVudHJ5O1xuXG4gIHRvSlNPTigpOiBzdHJpbmc7XG5cbiAgZW5jb2RlVVJJUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50cnkge1xuICAvKipcbiAgICogRW50cnkgaXMgYSBmaWxlLlxuICAgKi9cbiAgaXNGaWxlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFbnRyeSBpcyBhIGRpcmVjdG9yeS5cbiAgICovXG4gIGlzRGlyZWN0b3J5OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBMb29rIHVwIG1ldGFkYXRhIGFib3V0IHRoaXMgZW50cnkuXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aXRoIHRoZSB0aW1lIG9mIHRoZSBsYXN0IG1vZGlmaWNhdGlvbi5cbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgRXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICovXG4gIGdldE1ldGFkYXRhKHN1Y2Nlc3NDYWxsYmFjazogTWV0YWRhdGFDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG1ldGFkYXRhIG9mIHRoZSBlbnRyeS5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayB7RnVuY3Rpb259IGlzIGNhbGxlZCB3aXRoIGEgTWV0YWRhdGEgb2JqZWN0XG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIHtGdW5jdGlvbn0gaXMgY2FsbGVkIHdpdGggYSBGaWxlRXJyb3JcbiAgICogQHBhcmFtIG1ldGFkYXRhT2JqZWN0IHtNZXRhZGF0YX0ga2V5cyBhbmQgdmFsdWVzIHRvIHNldFxuICAgKi9cbiAgc2V0TWV0YWRhdGEoc3VjY2Vzc0NhbGxiYWNrOiBNZXRhZGF0YUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrOiBFcnJvckNhbGxiYWNrLCBtZXRhZGF0YU9iamVjdDogTWV0YWRhdGEpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZW50cnksIGV4Y2x1ZGluZyB0aGUgcGF0aCBsZWFkaW5nIHRvIGl0LlxuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGZ1bGwgYWJzb2x1dGUgcGF0aCBmcm9tIHRoZSByb290IHRvIHRoZSBlbnRyeS5cbiAgICovXG4gIGZ1bGxQYXRoOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZmlsZSBzeXN0ZW0gb24gd2hpY2ggdGhlIGVudHJ5IHJlc2lkZXMuXG4gICAqL1xuICBmaWxlc3lzdGVtOiBGaWxlU3lzdGVtO1xuICAvKipcbiAgICogYW4gYWx0ZXJuYXRlIFVSTCB3aGljaCBjYW4gYmUgdXNlZCBieSBuYXRpdmUgd2VidmlldyBjb250cm9scywgZm9yIGV4YW1wbGUgbWVkaWEgcGxheWVycy5cbiAgICovXG4gIG5hdGl2ZVVSTDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBMb29rIHVwIG1ldGFkYXRhIGFib3V0IHRoaXMgZW50cnkuXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aXRoIHRoZSB0aW1lIG9mIHRoZSBsYXN0IG1vZGlmaWNhdGlvbi5cbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgRXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICovXG4gIGdldE1ldGFkYXRhKHN1Y2Nlc3NDYWxsYmFjazogTWV0YWRhdGFDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG1ldGFkYXRhIG9mIHRoZSBlbnRyeS5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayB7RnVuY3Rpb259IGlzIGNhbGxlZCB3aXRoIGEgTWV0YWRhdGEgb2JqZWN0XG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIHtGdW5jdGlvbn0gaXMgY2FsbGVkIHdpdGggYSBGaWxlRXJyb3JcbiAgICogQHBhcmFtIG1ldGFkYXRhT2JqZWN0IHtNZXRhZGF0YX0ga2V5cyBhbmQgdmFsdWVzIHRvIHNldFxuICAgKi9cbiAgc2V0TWV0YWRhdGEoc3VjY2Vzc0NhbGxiYWNrOiBNZXRhZGF0YUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrOiBFcnJvckNhbGxiYWNrLCBtZXRhZGF0YU9iamVjdDogTWV0YWRhdGEpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBNb3ZlIGFuIGVudHJ5IHRvIGEgZGlmZmVyZW50IGxvY2F0aW9uIG9uIHRoZSBmaWxlIHN5c3RlbS4gSXQgaXMgYW4gZXJyb3IgdG8gdHJ5IHRvOlxuICAgKlxuICAgKiA8dWk+XG4gICAqIDxsaT5tb3ZlIGEgZGlyZWN0b3J5IGluc2lkZSBpdHNlbGYgb3IgdG8gYW55IGNoaWxkIGF0IGFueSBkZXB0aDs8L2xpPlxuICAgKiA8bGk+bW92ZSBhbiBlbnRyeSBpbnRvIGl0cyBwYXJlbnQgaWYgYSBuYW1lIGRpZmZlcmVudCBmcm9tIGl0cyBjdXJyZW50IG9uZSBpc24ndCBwcm92aWRlZDs8L2xpPlxuICAgKiA8bGk+bW92ZSBhIGZpbGUgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZGlyZWN0b3J5OzwvbGk+XG4gICAqIDxsaT5tb3ZlIGEgZGlyZWN0b3J5IHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGZpbGU7PC9saT5cbiAgICogPGxpPm1vdmUgYW55IGVsZW1lbnQgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZGlyZWN0b3J5IHdoaWNoIGlzIG5vdCBlbXB0eS48L2xpPlxuICAgKiA8dWw+XG4gICAqXG4gICAqIEEgbW92ZSBvZiBhIGZpbGUgb24gdG9wIG9mIGFuIGV4aXN0aW5nIGZpbGUgbXVzdCBhdHRlbXB0IHRvIGRlbGV0ZSBhbmQgcmVwbGFjZSB0aGF0IGZpbGUuXG4gICAqIEEgbW92ZSBvZiBhIGRpcmVjdG9yeSBvbiB0b3Agb2YgYW4gZXhpc3RpbmcgZW1wdHkgZGlyZWN0b3J5IG11c3QgYXR0ZW1wdCB0byBkZWxldGUgYW5kIHJlcGxhY2UgdGhhdCBkaXJlY3RvcnkuXG4gICAqL1xuICBtb3ZlVG8oXG4gICAgcGFyZW50OiBEaXJlY3RvcnlFbnRyeSxcbiAgICBuZXdOYW1lPzogc3RyaW5nLFxuICAgIHN1Y2Nlc3NDYWxsYmFjaz86IEVudHJ5Q2FsbGJhY2ssXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogQ29weSBhbiBlbnRyeSB0byBhIGRpZmZlcmVudCBsb2NhdGlvbiBvbiB0aGUgZmlsZSBzeXN0ZW0uIEl0IGlzIGFuIGVycm9yIHRvIHRyeSB0bzpcbiAgICpcbiAgICogPHVsPlxuICAgKiA8bGk+IGNvcHkgYSBkaXJlY3RvcnkgaW5zaWRlIGl0c2VsZiBvciB0byBhbnkgY2hpbGQgYXQgYW55IGRlcHRoOzwvbGk+XG4gICAqIDxsaT4gY29weSBhbiBlbnRyeSBpbnRvIGl0cyBwYXJlbnQgaWYgYSBuYW1lIGRpZmZlcmVudCBmcm9tIGl0cyBjdXJyZW50IG9uZSBpc24ndCBwcm92aWRlZDs8L2xpPlxuICAgKiA8bGk+IGNvcHkgYSBmaWxlIHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGRpcmVjdG9yeTs8L2xpPlxuICAgKiA8bGk+IGNvcHkgYSBkaXJlY3RvcnkgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZmlsZTs8L2xpPlxuICAgKiA8bGk+IGNvcHkgYW55IGVsZW1lbnQgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZGlyZWN0b3J5IHdoaWNoIGlzIG5vdCBlbXB0eS48L2xpPlxuICAgKiA8bGk+IEEgY29weSBvZiBhIGZpbGUgb24gdG9wIG9mIGFuIGV4aXN0aW5nIGZpbGUgbXVzdCBhdHRlbXB0IHRvIGRlbGV0ZSBhbmQgcmVwbGFjZSB0aGF0IGZpbGUuPC9saT5cbiAgICogPGxpPiBBIGNvcHkgb2YgYSBkaXJlY3Rvcnkgb24gdG9wIG9mIGFuIGV4aXN0aW5nIGVtcHR5IGRpcmVjdG9yeSBtdXN0IGF0dGVtcHQgdG8gZGVsZXRlIGFuZCByZXBsYWNlIHRoYXRcbiAgICogZGlyZWN0b3J5LjwvbGk+XG4gICAqIDwvdWw+XG4gICAqXG4gICAqIERpcmVjdG9yeSBjb3BpZXMgYXJlIGFsd2F5cyByZWN1cnNpdmUtLXRoYXQgaXMsIHRoZXkgY29weSBhbGwgY29udGVudHMgb2YgdGhlIGRpcmVjdG9yeS5cbiAgICovXG4gIGNvcHlUbyhcbiAgICBwYXJlbnQ6IERpcmVjdG9yeUVudHJ5LFxuICAgIG5ld05hbWU/OiBzdHJpbmcsXG4gICAgc3VjY2Vzc0NhbGxiYWNrPzogRW50cnlDYWxsYmFjayxcbiAgICBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFja1xuICApOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgVVJMIHRoYXQgY2FuIGJlIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBlbnRyeS4gVW5saWtlIHRoZSBVUk4gZGVmaW5lZCBpbiBbRklMRS1BUEktRURdLCBpdCBoYXMgbm8gc3BlY2lmaWNcbiAgICogZXhwaXJhdGlvbjsgYXMgaXQgZGVzY3JpYmVzIGEgbG9jYXRpb24gb24gZGlzaywgaXQgc2hvdWxkIGJlIHZhbGlkIGF0IGxlYXN0IGFzIGxvbmcgYXMgdGhhdCBsb2NhdGlvbiBleGlzdHMuXG4gICAqL1xuICB0b1VSTCgpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIFVSTCB0aGF0IGNhbiBiZSBwYXNzZWQgYWNyb3NzIHRoZSBicmlkZ2UgdG8gaWRlbnRpZnkgdGhpcyBlbnRyeS5cbiAgICogQHJldHVybiBzdHJpbmcgVVJMIHRoYXQgY2FuIGJlIHBhc3NlZCBhY3Jvc3MgdGhlIGJyaWRnZSB0byBpZGVudGlmeSB0aGlzIGVudHJ5XG4gICAqL1xuICB0b0ludGVybmFsVVJMKCk6IHN0cmluZztcblxuICAvKipcbiAgICogRGVsZXRlcyBhIGZpbGUgb3IgZGlyZWN0b3J5LiBJdCBpcyBhbiBlcnJvciB0byBhdHRlbXB0IHRvIGRlbGV0ZSBhIGRpcmVjdG9yeSB0aGF0IGlzIG5vdCBlbXB0eS4gSXQgaXMgYW4gZXJyb3IgdG9cbiAgICogYXR0ZW1wdCB0byBkZWxldGUgdGhlIHJvb3QgZGlyZWN0b3J5IG9mIGEgZmlsZXN5c3RlbS5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIG9uIHN1Y2Nlc3MuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgcmVtb3ZlKHN1Y2Nlc3NDYWxsYmFjazogVm9pZENhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIExvb2sgdXAgdGhlIHBhcmVudCBEaXJlY3RvcnlFbnRyeSBjb250YWluaW5nIHRoaXMgRW50cnkuIElmIHRoaXMgRW50cnkgaXMgdGhlIHJvb3Qgb2YgaXRzIGZpbGVzeXN0ZW0sIGl0cyBwYXJlbnRcbiAgICogaXMgaXRzZWxmLlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgdG8gcmV0dXJuIHRoZSBwYXJlbnQgRW50cnkuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgZ2V0UGFyZW50KHN1Y2Nlc3NDYWxsYmFjazogRGlyZWN0b3J5RW50cnlDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xufVxuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSByZXByZXNlbnRzIGEgZGlyZWN0b3J5IG9uIGEgZmlsZSBzeXN0ZW0uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0b3J5RW50cnkgZXh0ZW5kcyBFbnRyeSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IERpcmVjdG9yeVJlYWRlciB0byByZWFkIEVudHJpZXMgZnJvbSB0aGlzIERpcmVjdG9yeS5cbiAgICovXG4gIGNyZWF0ZVJlYWRlcigpOiBEaXJlY3RvcnlSZWFkZXI7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgb3IgbG9va3MgdXAgYSBmaWxlLlxuICAgKiBAcGFyYW0gcGF0aCBFaXRoZXIgYW4gYWJzb2x1dGUgcGF0aCBvciBhIHJlbGF0aXZlIHBhdGggZnJvbSB0aGlzIERpcmVjdG9yeUVudHJ5IHRvIHRoZSBmaWxlIHRvIGJlIGxvb2tlZCB1cCBvclxuICAgKiAgIGNyZWF0ZWQuIEl0IGlzIGFuIGVycm9yIHRvIGF0dGVtcHQgdG8gY3JlYXRlIGEgZmlsZSB3aG9zZSBpbW1lZGlhdGUgcGFyZW50IGRvZXMgbm90IHlldCBleGlzdC5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogICAgIDx1bD5cbiAgICogICAgIDxsaT5JZiBjcmVhdGUgYW5kIGV4Y2x1c2l2ZSBhcmUgYm90aCB0cnVlLCBhbmQgdGhlIHBhdGggYWxyZWFkeSBleGlzdHMsIGdldEZpbGUgbXVzdCBmYWlsLjwvbGk+XG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIHRydWUsIHRoZSBwYXRoIGRvZXNuJ3QgZXhpc3QsIGFuZCBubyBvdGhlciBlcnJvciBvY2N1cnMsIGdldEZpbGUgbXVzdCBjcmVhdGUgaXQgYXMgYVxuICAgKiAgIHplcm8tbGVuZ3RoIGZpbGUgYW5kIHJldHVybiBhIGNvcnJlc3BvbmRpbmcgRmlsZUVudHJ5LjwvbGk+XG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIG5vdCB0cnVlIGFuZCB0aGUgcGF0aCBkb2Vzbid0IGV4aXN0LCBnZXRGaWxlIG11c3QgZmFpbC48L2xpPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyBub3QgdHJ1ZSBhbmQgdGhlIHBhdGggZXhpc3RzLCBidXQgaXMgYSBkaXJlY3RvcnksIGdldEZpbGUgbXVzdCBmYWlsLjwvbGk+XG4gICAqICAgICA8bGk+T3RoZXJ3aXNlLCBpZiBubyBvdGhlciBlcnJvciBvY2N1cnMsIGdldEZpbGUgbXVzdCByZXR1cm4gYSBGaWxlRW50cnkgY29ycmVzcG9uZGluZyB0byBwYXRoLjwvbGk+XG4gICAqICAgICA8L3VsPlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgdG8gcmV0dXJuIHRoZSBGaWxlIHNlbGVjdGVkIG9yIGNyZWF0ZWQuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgZ2V0RmlsZShwYXRoOiBzdHJpbmcsIG9wdGlvbnM/OiBGbGFncywgc3VjY2Vzc0NhbGxiYWNrPzogRmlsZUVudHJ5Q2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcblxuICAvKipcbiAgICogQ3JlYXRlcyBvciBsb29rcyB1cCBhIGRpcmVjdG9yeS5cbiAgICogQHBhcmFtIHBhdGggRWl0aGVyIGFuIGFic29sdXRlIHBhdGggb3IgYSByZWxhdGl2ZSBwYXRoIGZyb20gdGhpcyBEaXJlY3RvcnlFbnRyeSB0byB0aGUgZGlyZWN0b3J5IHRvIGJlIGxvb2tlZCB1cFxuICAgKiAgIG9yIGNyZWF0ZWQuIEl0IGlzIGFuIGVycm9yIHRvIGF0dGVtcHQgdG8gY3JlYXRlIGEgZGlyZWN0b3J5IHdob3NlIGltbWVkaWF0ZSBwYXJlbnQgZG9lcyBub3QgeWV0IGV4aXN0LlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiAgICAgPHVsPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBhbmQgZXhjbHVzaXZlIGFyZSBib3RoIHRydWUgYW5kIHRoZSBwYXRoIGFscmVhZHkgZXhpc3RzLCBnZXREaXJlY3RvcnkgbXVzdCBmYWlsLjwvbGk+XG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIHRydWUsIHRoZSBwYXRoIGRvZXNuJ3QgZXhpc3QsIGFuZCBubyBvdGhlciBlcnJvciBvY2N1cnMsIGdldERpcmVjdG9yeSBtdXN0IGNyZWF0ZSBhbmQgcmV0dXJuXG4gICAqICAgYSBjb3JyZXNwb25kaW5nIERpcmVjdG9yeUVudHJ5LjwvbGk+XG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIG5vdCB0cnVlIGFuZCB0aGUgcGF0aCBkb2Vzbid0IGV4aXN0LCBnZXREaXJlY3RvcnkgbXVzdCBmYWlsLjwvbGk+XG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIG5vdCB0cnVlIGFuZCB0aGUgcGF0aCBleGlzdHMsIGJ1dCBpcyBhIGZpbGUsIGdldERpcmVjdG9yeSBtdXN0IGZhaWwuPC9saT5cbiAgICogICAgIDxsaT5PdGhlcndpc2UsIGlmIG5vIG90aGVyIGVycm9yIG9jY3VycywgZ2V0RGlyZWN0b3J5IG11c3QgcmV0dXJuIGEgRGlyZWN0b3J5RW50cnkgY29ycmVzcG9uZGluZyB0byBwYXRoLjwvbGk+XG4gICAqICAgICA8L3VsPlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrICAgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB0byByZXR1cm4gdGhlIERpcmVjdG9yeUVudHJ5IHNlbGVjdGVkIG9yIGNyZWF0ZWQuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKlxuICAgKi9cbiAgZ2V0RGlyZWN0b3J5KFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBvcHRpb25zPzogRmxhZ3MsXG4gICAgc3VjY2Vzc0NhbGxiYWNrPzogRGlyZWN0b3J5RW50cnlDYWxsYmFjayxcbiAgICBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFja1xuICApOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgZGlyZWN0b3J5IGFuZCBhbGwgb2YgaXRzIGNvbnRlbnRzLCBpZiBhbnkuIEluIHRoZSBldmVudCBvZiBhbiBlcnJvciBbZS5nLiB0cnlpbmcgdG8gZGVsZXRlIGEgZGlyZWN0b3J5XG4gICAqIHRoYXQgY29udGFpbnMgYSBmaWxlIHRoYXQgY2Fubm90IGJlIHJlbW92ZWRdLCBzb21lIG9mIHRoZSBjb250ZW50cyBvZiB0aGUgZGlyZWN0b3J5IG1heSBiZSBkZWxldGVkLiBJdCBpcyBhbiBlcnJvclxuICAgKiB0byBhdHRlbXB0IHRvIGRlbGV0ZSB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgYSBmaWxlc3lzdGVtLlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgb24gc3VjY2Vzcy5cbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXG4gICAqL1xuICByZW1vdmVSZWN1cnNpdmVseShzdWNjZXNzQ2FsbGJhY2s6IFZvaWRDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xufVxuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBsZXRzIGEgdXNlciBsaXN0IGZpbGVzIGFuZCBkaXJlY3RvcmllcyBpbiBhIGRpcmVjdG9yeS4gSWYgdGhlcmUgYXJlIG5vIGFkZGl0aW9ucyB0byBvclxuICogZGVsZXRpb25zIGZyb20gYSBkaXJlY3RvcnkgYmV0d2VlbiB0aGUgZmlyc3QgYW5kIGxhc3QgY2FsbCB0byByZWFkRW50cmllcywgYW5kIG5vIGVycm9ycyBvY2N1ciwgdGhlbjpcbiAqIDx1bD5cbiAqIDxsaT4gQSBzZXJpZXMgb2YgY2FsbHMgdG8gcmVhZEVudHJpZXMgbXVzdCByZXR1cm4gZWFjaCBlbnRyeSBpbiB0aGUgZGlyZWN0b3J5IGV4YWN0bHkgb25jZS48L2xpPlxuICogPGxpPiBPbmNlIGFsbCBlbnRyaWVzIGhhdmUgYmVlbiByZXR1cm5lZCwgdGhlIG5leHQgY2FsbCB0byByZWFkRW50cmllcyBtdXN0IHByb2R1Y2UgYW4gZW1wdHkgYXJyYXkuPC9saT5cbiAqIDxsaT4gSWYgbm90IGFsbCBlbnRyaWVzIGhhdmUgYmVlbiByZXR1cm5lZCwgdGhlIGFycmF5IHByb2R1Y2VkIGJ5IHJlYWRFbnRyaWVzIG11c3Qgbm90IGJlIGVtcHR5LjwvbGk+XG4gKiA8bGk+IFRoZSBlbnRyaWVzIHByb2R1Y2VkIGJ5IHJlYWRFbnRyaWVzIG11c3Qgbm90IGluY2x1ZGUgdGhlIGRpcmVjdG9yeSBpdHNlbGYgW1wiLlwiXSBvciBpdHMgcGFyZW50IFtcIi4uXCJdLjwvbGk+XG4gKiA8L3VsPlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdG9yeVJlYWRlciB7XG4gIGxvY2FsVVJMOiBzdHJpbmc7XG4gIGhhc1JlYWRFbnRyaWVzOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBSZWFkIHRoZSBuZXh0IGJsb2NrIG9mIGVudHJpZXMgZnJvbSB0aGlzIGRpcmVjdG9yeS5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBDYWxsZWQgb25jZSBwZXIgc3VjY2Vzc2Z1bCBjYWxsIHRvIHJlYWRFbnRyaWVzIHRvIGRlbGl2ZXIgdGhlIG5leHQgcHJldmlvdXNseS11bnJlcG9ydGVkXG4gICAqICAgc2V0IG9mIEVudHJpZXMgaW4gdGhlIGFzc29jaWF0ZWQgRGlyZWN0b3J5LiBJZiBhbGwgRW50cmllcyBoYXZlIGFscmVhZHkgYmVlbiByZXR1cm5lZCBmcm9tIHByZXZpb3VzIGludm9jYXRpb25zXG4gICAqICAgb2YgcmVhZEVudHJpZXMsIHN1Y2Nlc3NDYWxsYmFjayBtdXN0IGJlIGNhbGxlZCB3aXRoIGEgemVyby1sZW5ndGggYXJyYXkgYXMgYW4gYXJndW1lbnQuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgaW5kaWNhdGluZyB0aGF0IHRoZXJlIHdhcyBhbiBlcnJvciByZWFkaW5nIGZyb20gdGhlIERpcmVjdG9yeS5cbiAgICovXG4gIHJlYWRFbnRyaWVzKHN1Y2Nlc3NDYWxsYmFjazogRW50cmllc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG59XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBmaWxlIG9uIGEgZmlsZSBzeXN0ZW0uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZUVudHJ5IGV4dGVuZHMgRW50cnkge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBGaWxlV3JpdGVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgZmlsZSB0aGF0IHRoaXMgRmlsZUVudHJ5IHJlcHJlc2VudHMuXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aXRoIHRoZSBuZXcgRmlsZVdyaXRlci5cbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXG4gICAqL1xuICBjcmVhdGVXcml0ZXIoc3VjY2Vzc0NhbGxiYWNrOiBGaWxlV3JpdGVyQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcblxuICAvKipcbiAgICogUmV0dXJucyBhIEZpbGUgdGhhdCByZXByZXNlbnRzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBmaWxlIHRoYXQgdGhpcyBGaWxlRW50cnkgcmVwcmVzZW50cy5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdpdGggdGhlIEZpbGUuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgZmlsZShzdWNjZXNzQ2FsbGJhY2s6IEZpbGVDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xufVxuXG4vKipcbiAqIFdoZW4gcmVxdWVzdEZpbGVTeXN0ZW0oKSBzdWNjZWVkcywgdGhlIGZvbGxvd2luZyBjYWxsYmFjayBpcyBtYWRlLlxuICovXG5leHBvcnQgdHlwZSBGaWxlU3lzdGVtQ2FsbGJhY2sgPSAoZmlsZXN5c3RlbTogRmlsZVN5c3RlbSkgPT4gdm9pZDtcblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGNhbGxiYWNrIHVzZWQgdG8gbG9vayB1cCBFbnRyeSBvYmplY3RzLlxuICovXG5leHBvcnQgdHlwZSBFbnRyeUNhbGxiYWNrID0gKGVudHJ5OiBFbnRyeSkgPT4gdm9pZDtcblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGNhbGxiYWNrIHVzZWQgdG8gbG9vayB1cCBGaWxlRW50cnkgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IHR5cGUgRmlsZUVudHJ5Q2FsbGJhY2sgPSAoZW50cnk6IEZpbGVFbnRyeSkgPT4gdm9pZDtcblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGNhbGxiYWNrIHVzZWQgdG8gbG9vayB1cCBEaXJlY3RvcnlFbnRyeSBvYmplY3RzLlxuICovXG5leHBvcnQgdHlwZSBEaXJlY3RvcnlFbnRyeUNhbGxiYWNrID0gKGVudHJ5OiBEaXJlY3RvcnlFbnRyeSkgPT4gdm9pZDtcblxuLyoqXG4gKiBXaGVuIHJlYWRFbnRyaWVzKCkgc3VjY2VlZHMsIHRoZSBmb2xsb3dpbmcgY2FsbGJhY2sgaXMgbWFkZS5cbiAqL1xuZXhwb3J0IHR5cGUgRW50cmllc0NhbGxiYWNrID0gKGVudHJpZXM6IEVudHJ5W10pID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGxvb2sgdXAgZmlsZSBhbmQgZGlyZWN0b3J5IG1ldGFkYXRhLlxuICovXG5leHBvcnQgdHlwZSBNZXRhZGF0YUNhbGxiYWNrID0gKG1ldGFkYXRhOiBNZXRhZGF0YSkgPT4gdm9pZDtcblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGNhbGxiYWNrIHVzZWQgdG8gY3JlYXRlIGEgRmlsZVdyaXRlci5cbiAqL1xuZXhwb3J0IHR5cGUgRmlsZVdyaXRlckNhbGxiYWNrID0gKGZpbGVXcml0ZXI6IEZpbGVXcml0ZXIpID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIG9idGFpbiBhIEZpbGUuXG4gKi9cbmV4cG9ydCB0eXBlIEZpbGVDYWxsYmFjayA9IChmaWxlOiBJRmlsZSkgPT4gdm9pZDtcblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGdlbmVyaWMgY2FsbGJhY2sgdXNlZCB0byBpbmRpY2F0ZSBzdWNjZXNzIG9mIGFuIGFzeW5jaHJvbm91cyBtZXRob2QuXG4gKi9cbmV4cG9ydCB0eXBlIFZvaWRDYWxsYmFjayA9ICgpID0+IHZvaWQ7XG5cbi8qKlxuICogV2hlbiBhbiBlcnJvciBvY2N1cnMsIHRoZSBmb2xsb3dpbmcgY2FsbGJhY2sgaXMgbWFkZS5cbiAqL1xuZXhwb3J0IHR5cGUgRXJyb3JDYWxsYmFjayA9IChlcnI6IEZpbGVFcnJvcikgPT4gdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBSZW1vdmVSZXN1bHQge1xuICBzdWNjZXNzOiBib29sZWFuO1xuICBmaWxlUmVtb3ZlZDogRW50cnk7XG59XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGaWxlU2F2ZXIgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG4gIC8qKlxuICAgKiBXaGVuIHRoZSBGaWxlU2F2ZXIgY29uc3RydWN0b3IgaXMgY2FsbGVkLCB0aGUgdXNlciBhZ2VudCBtdXN0IHJldHVybiBhIG5ldyBGaWxlU2F2ZXIgb2JqZWN0IHdpdGggcmVhZHlTdGF0ZSBzZXQgdG9cbiAgICogSU5JVC4gVGhpcyBjb25zdHJ1Y3RvciBtdXN0IGJlIHZpc2libGUgd2hlbiB0aGUgc2NyaXB0J3MgZ2xvYmFsIG9iamVjdCBpcyBlaXRoZXIgYSBXaW5kb3cgb2JqZWN0IG9yIGFuIG9iamVjdFxuICAgKiBpbXBsZW1lbnRpbmcgdGhlIFdvcmtlclV0aWxzIGludGVyZmFjZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGRhdGE6IEJsb2IpO1xuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBhYm9ydCBtZXRob2QgaXMgY2FsbGVkLCB1c2VyIGFnZW50cyBtdXN0IHJ1biB0aGUgc3RlcHMgYmVsb3c6XG4gICAqIDxvbD5cbiAgICogPGxpPiBJZiByZWFkeVN0YXRlID09IERPTkUgb3IgcmVhZHlTdGF0ZSA9PSBJTklULCB0ZXJtaW5hdGUgdGhpcyBvdmVyYWxsIHNlcmllcyBvZiBzdGVwcyB3aXRob3V0IGRvaW5nIGFueXRoaW5nXG4gICAqIGVsc2UuIDwvbGk+XG4gICAqIDxsaT4gU2V0IHJlYWR5U3RhdGUgdG8gRE9ORS4gPC9saT5cbiAgICogPGxpPiBJZiB0aGVyZSBhcmUgYW55IHRhc2tzIGZyb20gdGhlIG9iamVjdCdzIEZpbGVTYXZlciB0YXNrIHNvdXJjZSBpbiBvbmUgb2YgdGhlIHRhc2sgcXVldWVzLCB0aGVuIHJlbW92ZSB0aG9zZVxuICAgKiB0YXNrcy4gPC9saT5cbiAgICogPGxpPiBUZXJtaW5hdGUgdGhlIHdyaXRlIGFsZ29yaXRobSBiZWluZyBwcm9jZXNzZWQuIDwvbGk+XG4gICAqIDxsaT4gU2V0IHRoZSBlcnJvciBhdHRyaWJ1dGUgdG8gYSBET01FcnJvciBvYmplY3Qgb2YgdHlwZSBcIkFib3J0RXJyb3JcIi4gPC9saT5cbiAgICogPGxpPiBGaXJlIGEgcHJvZ3Jlc3MgZXZlbnQgY2FsbGVkIGFib3J0IDwvbGk+XG4gICAqIDxsaT4gRmlyZSBhIHByb2dyZXNzIGV2ZW50IGNhbGxlZCB3cml0ZSBlbmQgPC9saT5cbiAgICogPGxpPiBUZXJtaW5hdGUgdGhpcyBhbGdvcml0aG0uIDwvbGk+XG4gICAqIDwvb2w+XG4gICAqL1xuICBhYm9ydCgpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBUaGUgYmxvYiBpcyBiZWluZyB3cml0dGVuLlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIElOSVQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBvYmplY3QgaGFzIGJlZW4gY29uc3RydWN0ZWQsIGJ1dCB0aGVyZSBpcyBubyBwZW5kaW5nIHdyaXRlLlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIFdSSVRJTkc6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBlbnRpcmUgQmxvYiBoYXMgYmVlbiB3cml0dGVuIHRvIHRoZSBmaWxlLCBhbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgdGhlIHdyaXRlLCBvciB0aGUgd3JpdGUgd2FzIGFib3J0ZWQgdXNpbmdcbiAgICogYWJvcnQoKS4gVGhlIEZpbGVTYXZlciBpcyBubyBsb25nZXIgd3JpdGluZyB0aGUgYmxvYi5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBET05FOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgRmlsZVNhdmVyIG9iamVjdCBjYW4gYmUgaW4gb25lIG9mIDMgc3RhdGVzLiBUaGUgcmVhZHlTdGF0ZSBhdHRyaWJ1dGUsIG9uIGdldHRpbmcsIG11c3QgcmV0dXJuIHRoZSBjdXJyZW50XG4gICAqIHN0YXRlLCB3aGljaCBtdXN0IGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlczpcbiAgICogPHVsPlxuICAgKiA8bGk+SU5JVDwvbGk+XG4gICAqIDxsaT5XUklUSU5HPC9saT5cbiAgICogPGxpPkRPTkU8L2xpPlxuICAgKiA8dWw+XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgcmVhZHlTdGF0ZTogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGxhc3QgZXJyb3IgdGhhdCBvY2N1cnJlZCBvbiB0aGUgRmlsZVNhdmVyLlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGVycm9yOiBFcnJvcjtcbiAgLyoqXG4gICAqIEhhbmRsZXIgZm9yIHdyaXRlIHN0YXJ0IGV2ZW50c1xuICAgKi9cbiAgb253cml0ZXN0YXJ0OiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciBwcm9ncmVzcyBldmVudHMuXG4gICAqL1xuICBvbnByb2dyZXNzOiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciB3cml0ZSBldmVudHMuXG4gICAqL1xuICBvbndyaXRlOiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciBhYm9ydCBldmVudHMuXG4gICAqL1xuICBvbmFib3J0OiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciBlcnJvciBldmVudHMuXG4gICAqL1xuICBvbmVycm9yOiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciB3cml0ZSBlbmQgZXZlbnRzLlxuICAgKi9cbiAgb253cml0ZWVuZDogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBGaWxlU2F2ZXIgY29uc3RydWN0b3IgaXMgY2FsbGVkLCB0aGUgdXNlciBhZ2VudCBtdXN0IHJldHVybiBhIG5ldyBGaWxlU2F2ZXIgb2JqZWN0IHdpdGggcmVhZHlTdGF0ZSBzZXQgdG9cbiAgICogSU5JVC4gVGhpcyBjb25zdHJ1Y3RvciBtdXN0IGJlIHZpc2libGUgd2hlbiB0aGUgc2NyaXB0J3MgZ2xvYmFsIG9iamVjdCBpcyBlaXRoZXIgYSBXaW5kb3cgb2JqZWN0IG9yIGFuIG9iamVjdFxuICAgKiBpbXBsZW1lbnRpbmcgdGhlIFdvcmtlclV0aWxzIGludGVyZmFjZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGRhdGE6IEJsb2IpO1xuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBhYm9ydCBtZXRob2QgaXMgY2FsbGVkLCB1c2VyIGFnZW50cyBtdXN0IHJ1biB0aGUgc3RlcHMgYmVsb3c6XG4gICAqIDxvbD5cbiAgICogPGxpPiBJZiByZWFkeVN0YXRlID09IERPTkUgb3IgcmVhZHlTdGF0ZSA9PSBJTklULCB0ZXJtaW5hdGUgdGhpcyBvdmVyYWxsIHNlcmllcyBvZiBzdGVwcyB3aXRob3V0IGRvaW5nIGFueXRoaW5nXG4gICAqIGVsc2UuIDwvbGk+XG4gICAqIDxsaT4gU2V0IHJlYWR5U3RhdGUgdG8gRE9ORS4gPC9saT5cbiAgICogPGxpPiBJZiB0aGVyZSBhcmUgYW55IHRhc2tzIGZyb20gdGhlIG9iamVjdCdzIEZpbGVTYXZlciB0YXNrIHNvdXJjZSBpbiBvbmUgb2YgdGhlIHRhc2sgcXVldWVzLCB0aGVuIHJlbW92ZSB0aG9zZVxuICAgKiB0YXNrcy4gPC9saT5cbiAgICogPGxpPiBUZXJtaW5hdGUgdGhlIHdyaXRlIGFsZ29yaXRobSBiZWluZyBwcm9jZXNzZWQuIDwvbGk+XG4gICAqIDxsaT4gU2V0IHRoZSBlcnJvciBhdHRyaWJ1dGUgdG8gYSBET01FcnJvciBvYmplY3Qgb2YgdHlwZSBcIkFib3J0RXJyb3JcIi4gPC9saT5cbiAgICogPGxpPiBGaXJlIGEgcHJvZ3Jlc3MgZXZlbnQgY2FsbGVkIGFib3J0IDwvbGk+XG4gICAqIDxsaT4gRmlyZSBhIHByb2dyZXNzIGV2ZW50IGNhbGxlZCB3cml0ZWVuZCA8L2xpPlxuICAgKiA8bGk+IFRlcm1pbmF0ZSB0aGlzIGFsZ29yaXRobS4gPC9saT5cbiAgICogPC9vbD5cbiAgICovXG4gIGFib3J0KCk6IHZvaWQ7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICogVGhpcyBpbnRlcmZhY2UgZXhwYW5kcyBvbiB0aGUgRmlsZVNhdmVyIGludGVyZmFjZSB0byBhbGxvdyBmb3IgbXVsdGlwbGUgd3JpdGUgYWN0aW9ucywgcmF0aGVyIHRoYW4ganVzdCBzYXZpbmcgYVxuICogICBzaW5nbGUgQmxvYi5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmlsZVdyaXRlciBleHRlbmRzIEZpbGVTYXZlciB7XG4gIC8qKlxuICAgKiBUaGUgYnl0ZSBvZmZzZXQgYXQgd2hpY2ggdGhlIG5leHQgd3JpdGUgdG8gdGhlIGZpbGUgd2lsbCBvY2N1ci4gVGhpcyBtdXN0IGJlIG5vIGdyZWF0ZXIgdGhhbiBsZW5ndGguXG4gICAqIEEgbmV3bHktY3JlYXRlZCBGaWxlV3JpdGVyIG11c3QgaGF2ZSBwb3NpdGlvbiBzZXQgdG8gMC5cbiAgICovXG4gIHBvc2l0aW9uOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBsZW5ndGggb2YgdGhlIGZpbGUuIElmIHRoZSB1c2VyIGRvZXMgbm90IGhhdmUgcmVhZCBhY2Nlc3MgdG8gdGhlIGZpbGUsIHRoaXMgbXVzdCBiZSB0aGUgaGlnaGVzdCBieXRlIG9mZnNldCBhdFxuICAgKiB3aGljaCB0aGUgdXNlciBoYXMgd3JpdHRlbi5cbiAgICovXG4gIGxlbmd0aDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBXcml0ZSB0aGUgc3VwcGxpZWQgZGF0YSB0byB0aGUgZmlsZSBhdCBwb3NpdGlvbi5cbiAgICogQHBhcmFtIGRhdGEgVGhlIGJsb2IgdG8gd3JpdGUuXG4gICAqL1xuICB3cml0ZShkYXRhOiBBcnJheUJ1ZmZlciB8IEJsb2IgfCBzdHJpbmcpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBTZWVrIHNldHMgdGhlIGZpbGUgcG9zaXRpb24gYXQgd2hpY2ggdGhlIG5leHQgd3JpdGUgd2lsbCBvY2N1ci5cbiAgICogQHBhcmFtIG9mZnNldCBJZiBub25uZWdhdGl2ZSwgYW4gYWJzb2x1dGUgYnl0ZSBvZmZzZXQgaW50byB0aGUgZmlsZS4gSWYgbmVnYXRpdmUsIGFuIG9mZnNldCBiYWNrIGZyb20gdGhlIGVuZCBvZlxuICAgKiAgIHRoZSBmaWxlLlxuICAgKi9cbiAgc2VlayhvZmZzZXQ6IG51bWJlcik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGxlbmd0aCBvZiB0aGUgZmlsZSB0byB0aGF0IHNwZWNpZmllZC4gSWYgc2hvcnRlbmluZyB0aGUgZmlsZSwgZGF0YSBiZXlvbmQgdGhlIG5ldyBsZW5ndGggbXVzdCBiZVxuICAgKiBkaXNjYXJkZWQuIElmIGV4dGVuZGluZyB0aGUgZmlsZSwgdGhlIGV4aXN0aW5nIGRhdGEgbXVzdCBiZSB6ZXJvLXBhZGRlZCB1cCB0byB0aGUgbmV3IGxlbmd0aC5cbiAgICogQHBhcmFtIHNpemUgVGhlIHNpemUgdG8gd2hpY2ggdGhlIGxlbmd0aCBvZiB0aGUgZmlsZSBpcyB0byBiZSBhZGp1c3RlZCwgbWVhc3VyZWQgaW4gYnl0ZXMuXG4gICAqL1xuICB0cnVuY2F0ZShzaXplOiBudW1iZXIpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElXcml0ZU9wdGlvbnMge1xuICByZXBsYWNlPzogYm9vbGVhbjtcbiAgYXBwZW5kPzogYm9vbGVhbjtcbiAgdHJ1bmNhdGU/OiBudW1iZXI7IC8vIGlmIHByZXNlbnQsIG51bWJlciBvZiBieXRlcyB0byB0cnVuY2F0ZSBmaWxlIHRvIGJlZm9yZSB3cml0aW5nXG59XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGaWxlRXJyb3Ige1xuICBzdGF0aWMgTk9UX0ZPVU5EX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgU0VDVVJJVFlfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBBQk9SVF9FUlI6IG51bWJlcjtcbiAgc3RhdGljIE5PVF9SRUFEQUJMRV9FUlI6IG51bWJlcjtcbiAgc3RhdGljIEVOQ09ESU5HX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBJTlZBTElEX1NUQVRFX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgU1lOVEFYX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgSU5WQUxJRF9NT0RJRklDQVRJT05fRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBRVU9UQV9FWENFRURFRF9FUlI6IG51bWJlcjtcbiAgc3RhdGljIFRZUEVfTUlTTUFUQ0hfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBQQVRIX0VYSVNUU19FUlI6IG51bWJlcjtcbiAgLyoqIEVycm9yIGNvZGUgKi9cbiAgY29kZTogbnVtYmVyO1xuICBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoY29kZTogbnVtYmVyKTtcbn1cblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZpbGVSZWFkZXIge1xuICBzdGF0aWMgRU1QVFk6IG51bWJlcjtcbiAgc3RhdGljIExPQURJTkc6IG51bWJlcjtcbiAgc3RhdGljIERPTkU6IG51bWJlcjtcbiAgc3RhdGljIFJFQURfQ0hVTktfU0laRTogbnVtYmVyO1xuXG4gIHJlYWR5U3RhdGU6IG51bWJlcjsgLy8gc2VlIGNvbnN0YW50cyBpbiB2YXIgZGVjbGFyYXRpb24gYmVsb3dcbiAgZXJyb3I6IEVycm9yO1xuICByZXN1bHQ6IHN0cmluZyB8IEFycmF5QnVmZmVyOyAvLyB0eXBlIGRlcGVuZHMgb24gcmVhZEFzWFhYKCkgY2FsbCB0eXBlXG5cbiAgb25sb2Fkc3RhcnQ6IChldnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIG9ucHJvZ3Jlc3M6IChldnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIG9ubG9hZDogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcbiAgb25lcnJvcjogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcbiAgb25sb2FkZW5kOiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICBvbmFib3J0OiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuXG4gIGFib3J0KCk6IHZvaWQ7XG5cbiAgcmVhZEFzVGV4dChmZTogSUZpbGUsIGVuY29kaW5nPzogc3RyaW5nKTogdm9pZDtcblxuICByZWFkQXNEYXRhVVJMKGZlOiBJRmlsZSk6IHZvaWQ7XG5cbiAgcmVhZEFzQmluYXJ5U3RyaW5nKGZlOiBJRmlsZSk6IHZvaWQ7XG5cbiAgcmVhZEFzQXJyYXlCdWZmZXIoZmU6IElGaWxlKTogdm9pZDtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5pbnRlcmZhY2UgV2luZG93IGV4dGVuZHMgTG9jYWxGaWxlU3lzdGVtIHt9XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiBXaW5kb3c7XG5cbi8qKlxuICogQG5hbWUgRmlsZVxuICogQHByZW1pZXIgZmlsZXN5c3RlbVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBpbXBsZW1lbnRzIGEgRmlsZSBBUEkgYWxsb3dpbmcgcmVhZC93cml0ZSBhY2Nlc3MgdG8gZmlsZXMgcmVzaWRpbmcgb24gdGhlIGRldmljZS5cbiAqXG4gKiBUaGUgRmlsZSBjbGFzcyBpbXBsZW1lbnRzIHN0YXRpYyBjb252ZW5pZW5jZSBmdW5jdGlvbnMgdG8gYWNjZXNzIGZpbGVzIGFuZCBkaXJlY3Rvcmllcy5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgXG4gKiBpbXBvcnQgeyBGaWxlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaWxlOiBGaWxlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmZpbGUuY2hlY2tEaXIodGhpcy5maWxlLmRhdGFEaXJlY3RvcnksICdteWRpcicpLnRoZW4oXyA9PiBjb25zb2xlLmxvZygnRGlyZWN0b3J5IGV4aXN0cycpKS5jYXRjaChlcnIgPT5cbiAqICAgY29uc29sZS5sb2coJ0RpcmVjdG9yeSBkb2Vzbid0IGV4aXN0JykpO1xuICpcbiAqIGBgYFxuICpcbiAqICBUaGlzIHBsdWdpbiBpcyBiYXNlZCBvbiBzZXZlcmFsIHNwZWNzLCBpbmNsdWRpbmcgOiBUaGUgSFRNTDUgRmlsZSBBUEkgaHR0cDogLy93d3cudzMub3JnL1RSL0ZpbGVBUEkvXG4gKiAgVGhlIChub3ctZGVmdW5jdCkgRGlyZWN0b3JpZXMgYW5kIFN5c3RlbSBleHRlbnNpb25zIExhdGVzdDogaHR0cDogLy93d3cudzMub3JnL1RSLzIwMTIvV0QtZmlsZS1zeXN0ZW0tYXBpLTIwMTIwNDE3L1xuICogIEFsdGhvdWdoIG1vc3Qgb2YgdGhlIHBsdWdpbiBjb2RlIHdhcyB3cml0dGVuIHdoZW4gYW4gZWFybGllciBzcGVjIHdhcyBjdXJyZW50OiBodHRwOlxuICogICAvL3d3dy53My5vcmcvVFIvMjAxMS9XRC1maWxlLXN5c3RlbS1hcGktMjAxMTA0MTkvIEl0IGFsc28gaW1wbGVtZW50cyB0aGUgRmlsZVdyaXRlciBzcGVjIDogaHR0cDpcbiAqICAgLy9kZXYudzMub3JnLzIwMDkvZGFwL2ZpbGUtc3lzdGVtL2ZpbGUtd3JpdGVyLmh0bWxcbiAqICBAaW50ZXJmYWNlc1xuICogIElGaWxlXG4gKiAgRW50cnlcbiAqICBEaXJlY3RvcnlFbnRyeVxuICogIERpcmVjdG9yeVJlYWRlclxuICogIEZpbGVTeXN0ZW1cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdGaWxlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlsZScsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEuZmlsZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWZpbGUnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdtYWNPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiAgUmVhZC1vbmx5IGRpcmVjdG9yeSB3aGVyZSB0aGUgYXBwbGljYXRpb24gaXMgaW5zdGFsbGVkLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGFwcGxpY2F0aW9uRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICBSZWFkLW9ubHkgZGlyZWN0b3J5IHdoZXJlIHRoZSBhcHBsaWNhdGlvbiBpcyBpbnN0YWxsZWQuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgYXBwbGljYXRpb25TdG9yYWdlRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXJlIHRvIHB1dCBhcHAtc3BlY2lmaWMgZGF0YSBmaWxlcy5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBkYXRhRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENhY2hlZCBmaWxlcyB0aGF0IHNob3VsZCBzdXJ2aXZlIGFwcCByZXN0YXJ0cy5cbiAgICogQXBwcyBzaG91bGQgbm90IHJlbHkgb24gdGhlIE9TIHRvIGRlbGV0ZSBmaWxlcyBpbiBoZXJlLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGNhY2hlRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFuZHJvaWQ6IHRoZSBhcHBsaWNhdGlvbiBzcGFjZSBvbiBleHRlcm5hbCBzdG9yYWdlLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGV4dGVybmFsQXBwbGljYXRpb25TdG9yYWdlRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICBBbmRyb2lkOiBXaGVyZSB0byBwdXQgYXBwLXNwZWNpZmljIGRhdGEgZmlsZXMgb24gZXh0ZXJuYWwgc3RvcmFnZS5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBleHRlcm5hbERhdGFEaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogQW5kcm9pZDogdGhlIGFwcGxpY2F0aW9uIGNhY2hlIG9uIGV4dGVybmFsIHN0b3JhZ2UuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgZXh0ZXJuYWxDYWNoZURpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbmRyb2lkOiB0aGUgZXh0ZXJuYWwgc3RvcmFnZSAoU0QgY2FyZCkgcm9vdC5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBleHRlcm5hbFJvb3REaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogaU9TOiBUZW1wIGRpcmVjdG9yeSB0aGF0IHRoZSBPUyBjYW4gY2xlYXIgYXQgd2lsbC5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSB0ZW1wRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGlPUzogSG9sZHMgYXBwLXNwZWNpZmljIGZpbGVzIHRoYXQgc2hvdWxkIGJlIHN5bmNlZCAoZS5nLiB0byBpQ2xvdWQpLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIHN5bmNlZERhdGFEaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogaU9TOiBGaWxlcyBwcml2YXRlIHRvIHRoZSBhcHAsIGJ1dCB0aGF0IGFyZSBtZWFuaW5nZnVsIHRvIG90aGVyIGFwcGxpY2F0aW9ucyAoZS5nLiBPZmZpY2UgZmlsZXMpXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgZG9jdW1lbnRzRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEJsYWNrQmVycnkxMDogRmlsZXMgZ2xvYmFsbHkgYXZhaWxhYmxlIHRvIGFsbCBhcHBzXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgc2hhcmVkRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgY29yZG92YUZpbGVFcnJvcjogYW55ID0ge1xuICAgIDE6ICdOT1RfRk9VTkRfRVJSJyxcbiAgICAyOiAnU0VDVVJJVFlfRVJSJyxcbiAgICAzOiAnQUJPUlRfRVJSJyxcbiAgICA0OiAnTk9UX1JFQURBQkxFX0VSUicsXG4gICAgNTogJ0VOQ09ESU5HX0VSUicsXG4gICAgNjogJ05PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUicsXG4gICAgNzogJ0lOVkFMSURfU1RBVEVfRVJSJyxcbiAgICA4OiAnU1lOVEFYX0VSUicsXG4gICAgOTogJ0lOVkFMSURfTU9ESUZJQ0FUSU9OX0VSUicsXG4gICAgMTA6ICdRVU9UQV9FWENFRURFRF9FUlInLFxuICAgIDExOiAnVFlQRV9NSVNNQVRDSF9FUlInLFxuICAgIDEyOiAnUEFUSF9FWElTVFNfRVJSJyxcbiAgICAxMzogJ1dST05HX0VOVFJZX1RZUEUnLFxuICAgIDE0OiAnRElSX1JFQURfRVJSJyxcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGZyZWUgZGlzayBzcGFjZSBpbiBCeXRlc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlbWFpbmluZyBmcmVlIGRpc2sgc3BhY2UgaW4gQnl0ZXNcbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBnZXRGcmVlRGlza1NwYWNlKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb3Jkb3ZhLmV4ZWMocmVzb2x2ZSBhcyAoZGF0YTogYW55KSA9PiBhbnksIHJlamVjdCBhcyAoZGF0YTogYW55KSA9PiBhbnksICdGaWxlJywgJ2dldEZyZWVEaXNrU3BhY2UnLCBbXSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBkaXJlY3RvcnkgZXhpc3RzIGluIGEgY2VydGFpbiBwYXRoLCBkaXJlY3RvcnkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyIE5hbWUgb2YgZGlyZWN0b3J5IHRvIGNoZWNrXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRydWUgaWYgdGhlIGRpcmVjdG9yeSBleGlzdHMgb3IgcmVqZWN0cyB3aXRoIGFuXG4gICAqICAgZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgY2hlY2tEaXIocGF0aDogc3RyaW5nLCBkaXI6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICgvXlxcLy8udGVzdChkaXIpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGggKyBkaXI7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChmdWxsUGF0aCkudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGRpcmVjdG9yeSBpbiB0aGUgc3BlY2lmaWMgcGF0aC5cbiAgICogVGhlIHJlcGxhY2UgYm9vbGVhbiB2YWx1ZSBkZXRlcm1pbmVzIHdoZXRoZXIgdG8gcmVwbGFjZSBhbiBleGlzdGluZyBkaXJlY3Rvcnkgd2l0aCB0aGUgc2FtZSBuYW1lLlxuICAgKiBJZiBhbiBleGlzdGluZyBkaXJlY3RvcnkgZXhpc3RzIGFuZCB0aGUgcmVwbGFjZSB2YWx1ZSBpcyBmYWxzZSwgdGhlIHByb21pc2Ugd2lsbCBmYWlsIGFuZCByZXR1cm4gYW4gZXJyb3IuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoICBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgTmFtZSBvZiBkaXJlY3RvcnkgdG8gY3JlYXRlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVwbGFjZSBJZiB0cnVlLCByZXBsYWNlcyBmaWxlIHdpdGggc2FtZSBuYW1lLiBJZiBmYWxzZSByZXR1cm5zIGVycm9yXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERpcmVjdG9yeUVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgRGlyZWN0b3J5RW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNyZWF0ZURpcihwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZywgcmVwbGFjZTogYm9vbGVhbik6IFByb21pc2U8RGlyZWN0b3J5RW50cnk+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZGlyTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnM6IEZsYWdzID0ge1xuICAgICAgY3JlYXRlOiB0cnVlLFxuICAgIH07XG5cbiAgICBpZiAoIXJlcGxhY2UpIHtcbiAgICAgIG9wdGlvbnMuZXhjbHVzaXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpLnRoZW4oZnNlID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGRpcmVjdG9yeSBhdCBhIGdpdmVuIHBhdGguXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIHRoZSBkaXJlY3RvcnlcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgVGhlIGRpcmVjdG9yeSBuYW1lXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFJlbW92ZVJlc3VsdD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBSZW1vdmVSZXN1bHQgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHJlbW92ZURpcihwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZyk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGRpck5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbihmc2UgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZGUgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmUoZGUpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSBhIGRpcmVjdG9yeSB0byBhIGdpdmVuIHBhdGguXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBzb3VyY2UgcGF0aCB0byB0aGUgZGlyZWN0b3J5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJOYW1lIFRoZSBzb3VyY2UgZGlyZWN0b3J5IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1BhdGggVGhlIGRlc3RpbmF0aW9uIHBhdGggdG8gdGhlIGRpcmVjdG9yeVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3RGlyTmFtZSBUaGUgZGVzdGluYXRpb24gZGlyZWN0b3J5IG5hbWVcbiAgICogQHJldHVybnMge1Byb21pc2U8RGlyZWN0b3J5RW50cnl8RW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBuZXcgRGlyZWN0b3J5RW50cnkgb2JqZWN0IG9yXG4gICAqICAgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIG1vdmVEaXIocGF0aDogc3RyaW5nLCBkaXJOYW1lOiBzdHJpbmcsIG5ld1BhdGg6IHN0cmluZywgbmV3RGlyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxEaXJlY3RvcnlFbnRyeSB8IEVudHJ5PiB7XG4gICAgbmV3RGlyTmFtZSA9IG5ld0Rpck5hbWUgfHwgZGlyTmFtZTtcblxuICAgIGlmICgvXlxcLy8udGVzdChuZXdEaXJOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oZnNlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0b3J5KGZzZSwgZGlyTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKHNyY2RlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChuZXdQYXRoKS50aGVuKGRlc3RlbmF0aW9uID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5tb3ZlKHNyY2RlLCBkZXN0ZW5hdGlvbiwgbmV3RGlyTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29weSBhIGRpcmVjdG9yeSBpbiB2YXJpb3VzIG1ldGhvZHMuIElmIGRlc3RpbmF0aW9uIGRpcmVjdG9yeSBleGlzdHMsIHdpbGwgZmFpbCB0byBjb3B5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW1zIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJOYW1lIE5hbWUgb2YgZGlyZWN0b3J5IHRvIGNvcHlcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1BhdGggQmFzZSBGaWxlU3lzdGVtIG9mIG5ldyBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3RGlyTmFtZSBOZXcgbmFtZSBvZiBkaXJlY3RvcnkgdG8gY29weSB0byAobGVhdmUgYmxhbmsgdG8gcmVtYWluIHRoZSBzYW1lKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxFbnRyeT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIG5ldyBFbnRyeSBvYmplY3Qgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNvcHlEaXIocGF0aDogc3RyaW5nLCBkaXJOYW1lOiBzdHJpbmcsIG5ld1BhdGg6IHN0cmluZywgbmV3RGlyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbnRyeT4ge1xuICAgIGlmICgvXlxcLy8udGVzdChuZXdEaXJOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oZnNlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0b3J5KGZzZSwgZGlyTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKHNyY2RlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChuZXdQYXRoKS50aGVuKGRlc3RlID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb3B5KHNyY2RlLCBkZXN0ZSwgbmV3RGlyTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdCBmaWxlcyBhbmQgZGlyZWN0b3J5IGZyb20gYSBnaXZlbiBwYXRoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW1zIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJOYW1lIE5hbWUgb2YgZGlyZWN0b3J5XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEVudHJ5W10+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGFuIGFycmF5IG9mIEVudHJ5IG9iamVjdHMgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGxpc3REaXIocGF0aDogc3RyaW5nLCBkaXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5W10+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZGlyTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8RW50cnlbXT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbihmc2UgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCB7XG4gICAgICAgICAgY3JlYXRlOiBmYWxzZSxcbiAgICAgICAgICBleGNsdXNpdmU6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbihkZSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IGRlLmNyZWF0ZVJlYWRlcigpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkRW50cmllcyhyZWFkZXIpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgZmlsZXMgYW5kIHRoZSBkaXJlY3RvcnkgZnJvbSBhIGRlc2lyZWQgbG9jYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBOYW1lIG9mIGRpcmVjdG9yeVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZW1vdmVSZXN1bHQ+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBSZW1vdmVSZXN1bHQgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHJlbW92ZVJlY3Vyc2l2ZWx5KHBhdGg6IHN0cmluZywgZGlyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxSZW1vdmVSZXN1bHQ+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZGlyTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8UmVtb3ZlUmVzdWx0PihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKGZzZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbihkZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJpbXJhZihkZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIGZpbGUgZXhpc3RzIGluIGEgY2VydGFpbiBwYXRoLCBkaXJlY3RvcnkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBOYW1lIG9mIGZpbGUgdG8gY2hlY2tcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNoZWNrRmlsZShwYXRoOiBzdHJpbmcsIGZpbGU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICgvXlxcLy8udGVzdChmaWxlKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVMb2NhbEZpbGVzeXN0ZW1VcmwocGF0aCArIGZpbGUpLnRoZW4oZnNlID0+IHtcbiAgICAgIGlmIChmc2UuaXNGaWxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcigxMyk7XG4gICAgICAgIGVyci5tZXNzYWdlID0gJ2lucHV0IGlzIG5vdCBhIGZpbGUnO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8Ym9vbGVhbj4oZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGZpbGUgaW4gdGhlIHNwZWNpZmljIHBhdGguXG4gICAqIFRoZSByZXBsYWNlIGJvb2xlYW4gdmFsdWUgZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHJlcGxhY2UgYW4gZXhpc3RpbmcgZmlsZSB3aXRoIHRoZSBzYW1lIG5hbWUuXG4gICAqIElmIGFuIGV4aXN0aW5nIGZpbGUgZXhpc3RzIGFuZCB0aGUgcmVwbGFjZSB2YWx1ZSBpcyBmYWxzZSwgdGhlIHByb21pc2Ugd2lsbCBmYWlsIGFuZCByZXR1cm4gYW4gZXJyb3IuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoICBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIE5hbWUgb2YgZmlsZSB0byBjcmVhdGVcbiAgICogQHBhcmFtIHtib29sZWFufSByZXBsYWNlIElmIHRydWUsIHJlcGxhY2VzIGZpbGUgd2l0aCBzYW1lIG5hbWUuIElmIGZhbHNlIHJldHVybnMgZXJyb3JcbiAgICogQHJldHVybnMge1Byb21pc2U8RmlsZUVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhIEZpbGVFbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgY3JlYXRlRmlsZShwYXRoOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIHJlcGxhY2U6IGJvb2xlYW4pOiBQcm9taXNlPEZpbGVFbnRyeT4ge1xuICAgIGlmICgvXlxcLy8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlLW5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnM6IEZsYWdzID0ge1xuICAgICAgY3JlYXRlOiB0cnVlLFxuICAgIH07XG5cbiAgICBpZiAoIXJlcGxhY2UpIHtcbiAgICAgIG9wdGlvbnMuZXhjbHVzaXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpLnRoZW4oZnNlID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZnNlLCBmaWxlTmFtZSwgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGZpbGUgZnJvbSBhIGRlc2lyZWQgbG9jYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoICBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIE5hbWUgb2YgZmlsZSB0byByZW1vdmVcbiAgICogQHJldHVybnMge1Byb21pc2U8UmVtb3ZlUmVzdWx0Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhIFJlbW92ZVJlc3VsdCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcmVtb3ZlRmlsZShwYXRoOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPFJlbW92ZVJlc3VsdD4ge1xuICAgIGlmICgvXlxcLy8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlLW5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKGZzZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZnNlLCBmaWxlTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGZlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlKGZlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlIGEgbmV3IGZpbGUgdG8gdGhlIGRlc2lyZWQgbG9jYXRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgcGF0aCByZWxhdGl2ZSB0byBiYXNlIHBhdGhcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBCbG9iIHwgQXJyYXlCdWZmZXJ9IHRleHQgY29udGVudCwgYmxvYiBvciBBcnJheUJ1ZmZlciB0byB3cml0ZVxuICAgKiBAcGFyYW0ge0lXcml0ZU9wdGlvbnN9IHdoZXRoZXIgdG8gcmVwbGFjZS9hcHBlbmQgdG8gYW4gZXhpc3RpbmcgZmlsZS4gU2VlIElXcml0ZU9wdGlvbnMgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdXBkYXRlZCBmaWxlIGVudHJ5IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICB3cml0ZUZpbGUoXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIGZpbGVOYW1lOiBzdHJpbmcsXG4gICAgdGV4dDogc3RyaW5nIHwgQmxvYiB8IEFycmF5QnVmZmVyLFxuICAgIG9wdGlvbnM6IElXcml0ZU9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICgvXlxcLy8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlLW5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRGaWxlT3B0czogRmxhZ3MgPSB7XG4gICAgICBjcmVhdGU6ICFvcHRpb25zLmFwcGVuZCxcbiAgICAgIGV4Y2x1c2l2ZTogIW9wdGlvbnMucmVwbGFjZSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oKGRpcmVjdG9yeUVudHJ5OiBEaXJlY3RvcnlFbnRyeSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGRpcmVjdG9yeUVudHJ5LCBmaWxlTmFtZSwgZ2V0RmlsZU9wdHMpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChmaWxlRW50cnk6IEZpbGVFbnRyeSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy53cml0ZUZpbGVFbnRyeShmaWxlRW50cnksIHRleHQsIG9wdGlvbnMpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogV3JpdGUgY29udGVudCB0byBGaWxlRW50cnkuXG4gICAqIEBoaWRkZW5cbiAgICogV3JpdGUgdG8gYW4gZXhpc3RpbmcgZmlsZS5cbiAgICogQHBhcmFtIHtGaWxlRW50cnl9IGZlIGZpbGUgZW50cnkgb2JqZWN0XG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgQmxvYiB8IEFycmF5QnVmZmVyfSB0ZXh0IHRleHQgY29udGVudCBvciBibG9iIHRvIHdyaXRlXG4gICAqIEBwYXJhbSB7SVdyaXRlT3B0aW9uc30gb3B0aW9ucyByZXBsYWNlIGZpbGUgaWYgc2V0IHRvIHRydWUuIFNlZSBXcml0ZU9wdGlvbnMgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEZpbGVFbnRyeT59ICBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHVwZGF0ZWQgZmlsZSBlbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBwcml2YXRlIHdyaXRlRmlsZUVudHJ5KGZlOiBGaWxlRW50cnksIHRleHQ6IHN0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlciwgb3B0aW9uczogSVdyaXRlT3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVdyaXRlcihmZSlcbiAgICAgIC50aGVuKHdyaXRlciA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLmFwcGVuZCkge1xuICAgICAgICAgIHdyaXRlci5zZWVrKHdyaXRlci5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudHJ1bmNhdGUpIHtcbiAgICAgICAgICB3cml0ZXIudHJ1bmNhdGUob3B0aW9ucy50cnVuY2F0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy53cml0ZSh3cml0ZXIsIHRleHQpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IGZlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZSB0byBhbiBleGlzdGluZyBmaWxlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIHBhdGggcmVsYXRpdmUgdG8gYmFzZSBwYXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgQmxvYn0gdGV4dCBjb250ZW50IG9yIGJsb2IgdG8gd3JpdGVcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHdyaXRlRXhpc3RpbmdGaWxlKHBhdGg6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZywgdGV4dDogc3RyaW5nIHwgQmxvYik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLndyaXRlRmlsZShwYXRoLCBmaWxlTmFtZSwgdGV4dCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgdGhlIGNvbnRlbnRzIG9mIGEgZmlsZSBhcyB0ZXh0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgTmFtZSBvZiBmaWxlLCByZWxhdGl2ZSB0byBwYXRoLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGNvbnRlbnRzIG9mIHRoZSBmaWxlIGFzIHN0cmluZyBvciByZWplY3RzIHdpdGhcbiAgICogICBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZWFkQXNUZXh0KHBhdGg6IHN0cmluZywgZmlsZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5yZWFkRmlsZTxzdHJpbmc+KHBhdGgsIGZpbGUsICdUZXh0Jyk7XG4gIH1cblxuICAvKipcbiAgICogUmVhZCBmaWxlIGFuZCByZXR1cm4gZGF0YSBhcyBhIGJhc2U2NCBlbmNvZGVkIGRhdGEgdXJsLlxuICAgKiBBIGRhdGEgdXJsIGlzIG9mIHRoZSBmb3JtOlxuICAgKiAgICAgIGRhdGE6IFs8bWVkaWF0eXBlPl1bO2Jhc2U2NF0sPGRhdGE+XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBOYW1lIG9mIGZpbGUsIHJlbGF0aXZlIHRvIHBhdGguXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIGZpbGUgYXMgZGF0YSBVUkwgb3IgcmVqZWN0c1xuICAgKiAgIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcmVhZEFzRGF0YVVSTChwYXRoOiBzdHJpbmcsIGZpbGU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMucmVhZEZpbGU8c3RyaW5nPihwYXRoLCBmaWxlLCAnRGF0YVVSTCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgZmlsZSBhbmQgcmV0dXJuIGRhdGEgYXMgYSBiaW5hcnkgZGF0YS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIE5hbWUgb2YgZmlsZSwgcmVsYXRpdmUgdG8gcGF0aC5cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgZmlsZSBhcyBzdHJpbmcgcmVqZWN0cyB3aXRoIGFuXG4gICAqICAgZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcmVhZEFzQmluYXJ5U3RyaW5nKHBhdGg6IHN0cmluZywgZmlsZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5yZWFkRmlsZTxzdHJpbmc+KHBhdGgsIGZpbGUsICdCaW5hcnlTdHJpbmcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIGZpbGUgYW5kIHJldHVybiBkYXRhIGFzIGFuIEFycmF5QnVmZmVyLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgTmFtZSBvZiBmaWxlLCByZWxhdGl2ZSB0byBwYXRoLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheUJ1ZmZlcj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIGZpbGUgYXMgQXJyYXlCdWZmZXIgb3JcbiAgICogICByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcmVhZEFzQXJyYXlCdWZmZXIocGF0aDogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XG4gICAgcmV0dXJuIHRoaXMucmVhZEZpbGU8QXJyYXlCdWZmZXI+KHBhdGgsIGZpbGUsICdBcnJheUJ1ZmZlcicpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgYSBmaWxlIHRvIGEgZ2l2ZW4gcGF0aC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBOYW1lIG9mIGZpbGUgdG8gbW92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3UGF0aCBCYXNlIEZpbGVTeXN0ZW0gb2YgbmV3IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdGaWxlTmFtZSBOZXcgbmFtZSBvZiBmaWxlIHRvIG1vdmUgdG8gKGxlYXZlIGJsYW5rIHRvIHJlbWFpbiB0aGUgc2FtZSlcbiAgICogQHJldHVybnMge1Byb21pc2U8RW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBuZXcgRW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIG1vdmVGaWxlKHBhdGg6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZywgbmV3UGF0aDogc3RyaW5nLCBuZXdGaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbnRyeT4ge1xuICAgIG5ld0ZpbGVOYW1lID0gbmV3RmlsZU5hbWUgfHwgZmlsZU5hbWU7XG5cbiAgICBpZiAoL15cXC8vLnRlc3QobmV3RmlsZU5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZSBuYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbihmc2UgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGZzZSwgZmlsZU5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbihzcmNmZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwobmV3UGF0aCkudGhlbihkZXN0ZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubW92ZShzcmNmZSwgZGVzdGUsIG5ld0ZpbGVOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3B5IGEgZmlsZSBpbiB2YXJpb3VzIG1ldGhvZHMuIElmIGZpbGUgZXhpc3RzLCB3aWxsIGZhaWwgdG8gY29weS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBOYW1lIG9mIGZpbGUgdG8gY29weVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3UGF0aCBCYXNlIEZpbGVTeXN0ZW0gb2YgbmV3IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdGaWxlTmFtZSBOZXcgbmFtZSBvZiBmaWxlIHRvIGNvcHkgdG8gKGxlYXZlIGJsYW5rIHRvIHJlbWFpbiB0aGUgc2FtZSlcbiAgICogQHJldHVybnMge1Byb21pc2U8RW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGFuIEVudHJ5IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBjb3B5RmlsZShwYXRoOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIG5ld1BhdGg6IHN0cmluZywgbmV3RmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8RW50cnk+IHtcbiAgICBuZXdGaWxlTmFtZSA9IG5ld0ZpbGVOYW1lIHx8IGZpbGVOYW1lO1xuXG4gICAgaWYgKC9eXFwvLy50ZXN0KG5ld0ZpbGVOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUgbmFtZSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oZnNlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShmc2UsIGZpbGVOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oc3JjZmUgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKG5ld1BhdGgpLnRoZW4oZGVzdGUgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvcHkoc3JjZmUsIGRlc3RlLCBuZXdGaWxlTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSBmaWxsRXJyb3JNZXNzYWdlKGVycjogRmlsZUVycm9yKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGVyci5tZXNzYWdlID0gdGhpcy5jb3Jkb3ZhRmlsZUVycm9yW2Vyci5jb2RlXTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIGEgbG9jYWwgZmlsZSBzeXN0ZW0gVVJMXG4gICAqIEBwYXJhbSBmaWxlVXJsIHtzdHJpbmd9IGZpbGUgc3lzdGVtIHVybFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxFbnRyeT59XG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcmVzb2x2ZUxvY2FsRmlsZXN5c3RlbVVybChmaWxlVXJsOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8RW50cnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdpbmRvdy5yZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKFxuICAgICAgICAgIGZpbGVVcmwsXG4gICAgICAgICAgKGVudHJ5OiBFbnRyeSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShlbnRyeSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoICh4Yykge1xuICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoeGMpO1xuICAgICAgICByZWplY3QoeGMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIGEgbG9jYWwgZGlyZWN0b3J5IHVybFxuICAgKiBAcGFyYW0gZGlyZWN0b3J5VXJsIHtzdHJpbmd9IGRpcmVjdG9yeSBzeXN0ZW0gdXJsXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERpcmVjdG9yeUVudHJ5Pn1cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZXNvbHZlRGlyZWN0b3J5VXJsKGRpcmVjdG9yeVVybDogc3RyaW5nKTogUHJvbWlzZTxEaXJlY3RvcnlFbnRyeT4ge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVMb2NhbEZpbGVzeXN0ZW1VcmwoZGlyZWN0b3J5VXJsKS50aGVuKGRlID0+IHtcbiAgICAgIGlmIChkZS5pc0RpcmVjdG9yeSkge1xuICAgICAgICByZXR1cm4gZGUgYXMgRGlyZWN0b3J5RW50cnk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDEzKTtcbiAgICAgICAgZXJyLm1lc3NhZ2UgPSAnaW5wdXQgaXMgbm90IGEgZGlyZWN0b3J5JztcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PERpcmVjdG9yeUVudHJ5PihlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGRpcmVjdG9yeVxuICAgKiBAcGFyYW0gZGlyZWN0b3J5RW50cnkge0RpcmVjdG9yeUVudHJ5fSBEaXJlY3RvcnkgZW50cnksIG9idGFpbmVkIGJ5IHJlc29sdmVEaXJlY3RvcnlVcmwgbWV0aG9kXG4gICAqIEBwYXJhbSBkaXJlY3RvcnlOYW1lIHtzdHJpbmd9IERpcmVjdG9yeSBuYW1lXG4gICAqIEBwYXJhbSBmbGFncyB7RmxhZ3N9IE9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8RGlyZWN0b3J5RW50cnk+fVxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGdldERpcmVjdG9yeShkaXJlY3RvcnlFbnRyeTogRGlyZWN0b3J5RW50cnksIGRpcmVjdG9yeU5hbWU6IHN0cmluZywgZmxhZ3M6IEZsYWdzKTogUHJvbWlzZTxEaXJlY3RvcnlFbnRyeT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxEaXJlY3RvcnlFbnRyeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGlyZWN0b3J5RW50cnkuZ2V0RGlyZWN0b3J5KFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWUsXG4gICAgICAgICAgZmxhZ3MsXG4gICAgICAgICAgZGUgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShkZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoICh4Yykge1xuICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoeGMpO1xuICAgICAgICByZWplY3QoeGMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGZpbGVcbiAgICogQHBhcmFtIGRpcmVjdG9yeUVudHJ5IHtEaXJlY3RvcnlFbnRyeX0gRGlyZWN0b3J5IGVudHJ5LCBvYnRhaW5lZCBieSByZXNvbHZlRGlyZWN0b3J5VXJsIG1ldGhvZFxuICAgKiBAcGFyYW0gZmlsZU5hbWUge3N0cmluZ30gRmlsZSBuYW1lXG4gICAqIEBwYXJhbSBmbGFncyB7RmxhZ3N9IE9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8RmlsZUVudHJ5Pn1cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBnZXRGaWxlKGRpcmVjdG9yeUVudHJ5OiBEaXJlY3RvcnlFbnRyeSwgZmlsZU5hbWU6IHN0cmluZywgZmxhZ3M6IEZsYWdzKTogUHJvbWlzZTxGaWxlRW50cnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RmlsZUVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBkaXJlY3RvcnlFbnRyeS5nZXRGaWxlKGZpbGVOYW1lLCBmbGFncywgcmVzb2x2ZSwgZXJyID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoICh4Yykge1xuICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoeGMpO1xuICAgICAgICByZWplY3QoeGMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkRmlsZTxUPihcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgZmlsZTogc3RyaW5nLFxuICAgIHJlYWRBczogJ0FycmF5QnVmZmVyJyB8ICdCaW5hcnlTdHJpbmcnIHwgJ0RhdGFVUkwnIHwgJ1RleHQnXG4gICk6IFByb21pc2U8VD4ge1xuICAgIGlmICgvXlxcLy8udGVzdChmaWxlKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUtbmFtZSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oKGRpcmVjdG9yeUVudHJ5OiBEaXJlY3RvcnlFbnRyeSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGRpcmVjdG9yeUVudHJ5LCBmaWxlLCB7IGNyZWF0ZTogZmFsc2UgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGZpbGVFbnRyeTogRmlsZUVudHJ5KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJldHVybiBnZXRQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlYWRlci5yZXN1bHQgIT09IHVuZGVmaW5lZCB8fCByZWFkZXIucmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCBhcyBhbnkgYXMgVCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlYWRlci5lcnJvciAhPT0gdW5kZWZpbmVkIHx8IHJlYWRlci5lcnJvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdCh7IGNvZGU6IG51bGwsIG1lc3NhZ2U6ICdSRUFERVJfT05MT0FERU5EX0VSUicgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGZpbGVFbnRyeS5maWxlKFxuICAgICAgICAgICAgZmlsZSA9PiB7XG4gICAgICAgICAgICAgIHJlYWRlcltgcmVhZEFzJHtyZWFkQXN9YF0uY2FsbChyZWFkZXIsIGZpbGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgcmVtb3ZlKGZlOiBFbnRyeSk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbW92ZVJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZmUucmVtb3ZlKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh7IHN1Y2Nlc3M6IHRydWUsIGZpbGVSZW1vdmVkOiBmZSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIG1vdmUoc3JjZTogRW50cnksIGRlc3RkaXI6IERpcmVjdG9yeUVudHJ5LCBuZXdOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzcmNlLm1vdmVUbyhcbiAgICAgICAgZGVzdGRpcixcbiAgICAgICAgbmV3TmFtZSxcbiAgICAgICAgZGVzdGUgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGVzdGUpO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgY29weShzcmNlOiBFbnRyeSwgZGVzdGRpcjogRGlyZWN0b3J5RW50cnksIG5ld05hbWU6IHN0cmluZyk6IFByb21pc2U8RW50cnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RW50cnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNyY2UuY29weVRvKFxuICAgICAgICBkZXN0ZGlyLFxuICAgICAgICBuZXdOYW1lLFxuICAgICAgICBkZXN0ZSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkZXN0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSByZWFkRW50cmllcyhkcjogRGlyZWN0b3J5UmVhZGVyKTogUHJvbWlzZTxFbnRyeVtdPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEVudHJ5W10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGRyLnJlYWRFbnRyaWVzKFxuICAgICAgICBlbnRyaWVzID0+IHtcbiAgICAgICAgICByZXNvbHZlKGVudHJpZXMpO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgcmltcmFmKGRlOiBEaXJlY3RvcnlFbnRyeSk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbW92ZVJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZGUucmVtb3ZlUmVjdXJzaXZlbHkoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHsgc3VjY2VzczogdHJ1ZSwgZmlsZVJlbW92ZWQ6IGRlIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgY3JlYXRlV3JpdGVyKGZlOiBGaWxlRW50cnkpOiBQcm9taXNlPEZpbGVXcml0ZXI+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RmlsZVdyaXRlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZmUuY3JlYXRlV3JpdGVyKFxuICAgICAgICB3cml0ZXIgPT4ge1xuICAgICAgICAgIHJlc29sdmUod3JpdGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIHdyaXRlKHdyaXRlcjogRmlsZVdyaXRlciwgZ3U6IHN0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlcik6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKGd1IGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgcmV0dXJuIHRoaXMud3JpdGVGaWxlSW5DaHVua3Mod3JpdGVyLCBndSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3JpdGVyLm9ud3JpdGVlbmQgPSBldnQgPT4ge1xuICAgICAgICBpZiAod3JpdGVyLmVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KHdyaXRlci5lcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShldnQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgd3JpdGVyLndyaXRlKGd1KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIHdyaXRlRmlsZUluQ2h1bmtzKHdyaXRlcjogRmlsZVdyaXRlciwgZmlsZTogQmxvYikge1xuICAgIGNvbnN0IEJMT0NLX1NJWkUgPSAxMDI0ICogMTAyNDtcbiAgICBsZXQgd3JpdHRlblNpemUgPSAwO1xuXG4gICAgZnVuY3Rpb24gd3JpdGVOZXh0Q2h1bmsoKSB7XG4gICAgICBjb25zdCBzaXplID0gTWF0aC5taW4oQkxPQ0tfU0laRSwgZmlsZS5zaXplIC0gd3JpdHRlblNpemUpO1xuICAgICAgY29uc3QgY2h1bmsgPSBmaWxlLnNsaWNlKHdyaXR0ZW5TaXplLCB3cml0dGVuU2l6ZSArIHNpemUpO1xuXG4gICAgICB3cml0dGVuU2l6ZSArPSBzaXplO1xuICAgICAgd3JpdGVyLndyaXRlKGNodW5rKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdyaXRlci5vbmVycm9yID0gcmVqZWN0IGFzIChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcbiAgICAgIHdyaXRlci5vbndyaXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAod3JpdHRlblNpemUgPCBmaWxlLnNpemUpIHtcbiAgICAgICAgICB3cml0ZU5leHRDaHVuaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHdyaXRlTmV4dENodW5rKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ 68589:
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTTP": function() { return /* binding */ HTTP; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 60399);




var HTTP = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(HTTP, _super);
    function HTTP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTTP.prototype.getBasicAuthHeader = function (username, password) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getBasicAuthHeader", { "sync": true }, arguments); };
    HTTP.prototype.useBasicAuth = function (username, password) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "useBasicAuth", { "sync": true }, arguments); };
    HTTP.prototype.getHeaders = function (host) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getHeaders", { "sync": true }, arguments); };
    HTTP.prototype.setHeader = function (host, header, value) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setHeader", { "sync": true }, arguments); };
    HTTP.prototype.getDataSerializer = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getDataSerializer", { "sync": true }, arguments); };
    HTTP.prototype.setDataSerializer = function (serializer) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setDataSerializer", { "sync": true }, arguments); };
    HTTP.prototype.setCookie = function (url, cookie) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setCookie", { "sync": true }, arguments); };
    HTTP.prototype.clearCookies = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "clearCookies", { "sync": true }, arguments); };
    HTTP.prototype.removeCookies = function (url, cb) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "removeCookies", { "sync": true }, arguments); };
    HTTP.prototype.getCookieString = function (url) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getCookieString", { "sync": true }, arguments); };
    HTTP.prototype.getRequestTimeout = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getRequestTimeout", { "sync": true }, arguments); };
    HTTP.prototype.setRequestTimeout = function (timeout) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setRequestTimeout", { "sync": true }, arguments); };
    HTTP.prototype.getFollowRedirect = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getFollowRedirect", { "sync": true }, arguments); };
    HTTP.prototype.setFollowRedirect = function (follow) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setFollowRedirect", { "sync": true }, arguments); };
    HTTP.prototype.setServerTrustMode = function (mode) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setServerTrustMode", {}, arguments); };
    HTTP.prototype.post = function (url, body, headers) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "post", {}, arguments); };
    HTTP.prototype.postSync = function (url, body, headers, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "post", { "methodName": "post", "sync": true }, arguments); };
    HTTP.prototype.get = function (url, parameters, headers) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "get", {}, arguments); };
    HTTP.prototype.getSync = function (url, parameters, headers, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "get", { "methodName": "get", "sync": true }, arguments); };
    HTTP.prototype.put = function (url, body, headers) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "put", {}, arguments); };
    HTTP.prototype.putSync = function (url, body, headers, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "put", { "methodName": "put", "sync": true }, arguments); };
    HTTP.prototype.patch = function (url, body, headers) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "patch", {}, arguments); };
    HTTP.prototype.patchSync = function (url, body, headers, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "patch", { "methodName": "patch", "sync": true }, arguments); };
    HTTP.prototype.delete = function (url, parameters, headers) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "delete", {}, arguments); };
    HTTP.prototype.deleteSync = function (url, parameters, headers, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "delete", { "methodName": "delete", "sync": true }, arguments); };
    HTTP.prototype.head = function (url, parameters, headers) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "head", {}, arguments); };
    HTTP.prototype.headSync = function (url, parameters, headers, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "head", { "methodName": "head", "sync": true }, arguments); };
    HTTP.prototype.options = function (url, parameters, headers) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "options", {}, arguments); };
    HTTP.prototype.optionsSync = function (url, parameters, headers, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "options", { "methodName": "options", "sync": true }, arguments); };
    HTTP.prototype.uploadFile = function (url, body, headers, filePath, name) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "uploadFile", {}, arguments); };
    HTTP.prototype.uploadFileSync = function (url, body, headers, filePath, name, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "uploadFile", { "methodName": "uploadFile", "sync": true }, arguments); };
    HTTP.prototype.downloadFile = function (url, body, headers, filePath) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "downloadFile", {}, arguments); };
    HTTP.prototype.downloadFileSync = function (url, body, headers, filePath, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "downloadFile", { "methodName": "downloadFile", "sync": true }, arguments); };
    HTTP.prototype.sendRequest = function (url, options) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "sendRequest", {}, arguments); };
    HTTP.prototype.sendRequestSync = function (url, options, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "sendRequest", { "methodName": "sendRequest", "sync": true }, arguments); };
    HTTP.prototype.abort = function (requestId) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "abort", {}, arguments); };
    Object.defineProperty(HTTP.prototype, "ErrorCode", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "ErrorCode"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "ErrorCode", value); },
        enumerable: false,
        configurable: true
    });
    HTTP.pluginName = "HTTP";
    HTTP.plugin = "cordova-plugin-advanced-http";
    HTTP.pluginRef = "cordova.plugin.http";
    HTTP.repo = "https://github.com/silkimen/cordova-plugin-advanced-http";
    HTTP.platforms = ["Android", "iOS"];
HTTP.ɵfac = /*@__PURE__*/ function () { var ɵHTTP_BaseFactory; return function HTTP_Factory(t) { return (ɵHTTP_BaseFactory || (ɵHTTP_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](HTTP)))(t || HTTP); }; }();
HTTP.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HTTP, factory: function (t) { return HTTP.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HTTP, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return HTTP;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvaHR0cC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQzs7QUFDekY7QUFHTyxJQXVFbUIsd0JBQWlCO0FBQUM7QUFFOUI7QUFBeUU7QUFBTSxJQXNCM0YsaUNBQWtCLGFBQUMsUUFBZ0IsRUFBRSxRQUFnQjtBQUs3QixJQUt4QiwyQkFBWSxhQUFDLFFBQWdCLEVBQUUsUUFBZ0I7QUFJNUMsSUFJSCx5QkFBVSxhQUFDLElBQVk7QUFLWSxJQU1uQyx3QkFBUyxhQUFDLElBQVksRUFBRSxNQUFjLEVBQUUsS0FBYTtBQUdGLElBSW5ELGdDQUFpQjtBQUtxQyxJQUt0RCxnQ0FBaUIsYUFBQyxVQUFnRTtBQUlqRCxJQUlqQyx3QkFBUyxhQUFDLEdBQVcsRUFBRSxNQUFjO0FBS2hCLElBQ3JCLDJCQUFZO0FBS04sSUFHTiw0QkFBYSxhQUFDLEdBQVcsRUFBRSxFQUFjO0FBSTVCLElBR2IsOEJBQWUsYUFBQyxHQUFXO0FBS2EsSUFJeEMsZ0NBQWlCO0FBTWIsSUFHSixnQ0FBaUIsYUFBQyxPQUFlO0FBSWhDLElBR0QsZ0NBQWlCO0FBS29DLElBSXJELGdDQUFpQixhQUFDLE1BQWU7QUFHMEIsSUFTM0QsaUNBQWtCLGFBQUMsSUFBaUQ7QUFLOUMsSUFPdEIsbUJBQUksYUFBQyxHQUFXLEVBQUUsSUFBUyxFQUFFLE9BQVk7QUFLekMsSUFZQSx1QkFBUSxhQUNOLEdBQVcsRUFDWCxJQUFTLEVBQ1QsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT1AsSUFNeEIsa0JBQUcsYUFBQyxHQUFXLEVBQUUsVUFBZSxFQUFFLE9BQVk7QUFLL0MsSUFZQyxzQkFBTyxhQUNMLEdBQVcsRUFDWCxVQUFlLEVBQ2YsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT1QsSUFNdEIsa0JBQUcsYUFBQyxHQUFXLEVBQUUsSUFBUyxFQUFFLE9BQVk7QUFLekMsSUFZQyxzQkFBTyxhQUNMLEdBQVcsRUFDWCxJQUFTLEVBQ1QsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT1gsSUFNcEIsb0JBQUssYUFBQyxHQUFXLEVBQUUsSUFBUyxFQUFFLE9BQVk7QUFLekMsSUFZRCx3QkFBUyxhQUNQLEdBQVcsRUFDWCxJQUFTLEVBQ1QsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT1IsSUFNdkIscUJBQU0sYUFBQyxHQUFXLEVBQUUsVUFBZSxFQUFFLE9BQVk7QUFLL0MsSUFZRix5QkFBVSxhQUNSLEdBQVcsRUFDWCxVQUFlLEVBQ2YsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT0osSUFNM0IsbUJBQUksYUFBQyxHQUFXLEVBQUUsVUFBZSxFQUFFLE9BQVk7QUFLL0MsSUFZQSx1QkFBUSxhQUNOLEdBQVcsRUFDWCxVQUFlLEVBQ2YsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT1osSUFNbkIsc0JBQU8sYUFBQyxHQUFXLEVBQUUsVUFBZSxFQUFFLE9BQVk7QUFLL0MsSUFZSCwwQkFBVyxhQUNULEdBQVcsRUFDWCxVQUFlLEVBQ2YsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT2tCLElBUWpELHlCQUFVLGFBQUMsR0FBVyxFQUFFLElBQVMsRUFBRSxPQUFZLEVBQUUsUUFBMkIsRUFBRSxJQUF1QjtBQU0zRixJQWFWLDZCQUFjLGFBQ1osR0FBVyxFQUNYLElBQVMsRUFDVCxPQUFZLEVBQ1osUUFBMkIsRUFDM0IsSUFBdUIsRUFDdkIsT0FBOEIsRUFDOUIsT0FBNkI7QUFRaEMsSUFNQywyQkFBWSxhQUFDLEdBQVcsRUFBRSxJQUFTLEVBQUUsT0FBWSxFQUFFLFFBQWdCO0FBTXZELElBWVosK0JBQWdCLGFBQ2QsR0FBVyxFQUNYLElBQVMsRUFDVCxPQUFZLEVBQ1osUUFBZ0IsRUFDaEIsT0FBOEIsRUFDOUIsT0FBNkI7QUFRNUIsSUFjSCwwQkFBVyxhQUNULEdBQVcsRUFDWCxPQVVDO0FBT0osSUFvQkMsOEJBQWUsYUFDYixHQUFXLEVBQ1gsT0FVQyxFQUNELE9BQXVDLEVBQ3ZDLE9BQTZCO0FBTStCLElBRzlELG9CQUFLLGFBQUMsU0FBaUI7QUFJcEIsMEJBdGlCTSwyQkFBUztBQUNwQjtBQUU0QjtBQUkxQjtBQUEyQjtBQUNUO0FBR25CO0FBQ3dCO0FBQWtEO0FBQzVDO0FBRUY7d0NBdEI1QixVQUFVOzs7OzBCQUNMO0FBQUMsZUE1RVA7QUFBRSxFQTRFd0IsaUJBQWlCO0FBQzFDLFNBRFksSUFBSTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBIVFRQUmVzcG9uc2Uge1xuICAvKipcbiAgICogVGhlIEhUVFAgc3RhdHVzIG51bWJlciBvZiB0aGUgcmVzcG9uc2Ugb3IgYSBuZWdhdGl2ZSBpbnRlcm5hbCBlcnJvciBjb2RlLlxuICAgKi9cbiAgc3RhdHVzOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgaGVhZGVycyBvZiB0aGUgcmVzcG9uc2UuXG4gICAqL1xuICBoZWFkZXJzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgICogVGhlIFVSTCBvZiB0aGUgcmVzcG9uc2UuIFRoaXMgcHJvcGVydHkgd2lsbCBiZSB0aGUgZmluYWwgVVJMIG9idGFpbmVkIGFmdGVyIGFueSByZWRpcmVjdHMuXG4gICAqL1xuICB1cmw6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBkYXRhIHRoYXQgaXMgaW4gdGhlIHJlc3BvbnNlLiBUaGlzIHByb3BlcnR5IHVzdWFsbHkgZXhpc3RzIHdoZW4gYSBwcm9taXNlIHJldHVybmVkIGJ5IGEgcmVxdWVzdCBtZXRob2QgcmVzb2x2ZXMuXG4gICAqL1xuICBkYXRhPzogYW55O1xuICAvKipcbiAgICogRXJyb3IgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyLiBUaGlzIHByb3BlcnR5IHVzdWFsbHkgZXhpc3RzIHdoZW4gYSBwcm9taXNlIHJldHVybmVkIGJ5IGEgcmVxdWVzdCBtZXRob2QgcmVqZWN0cy5cbiAgICovXG4gIGVycm9yPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQWJvcnRlZFJlc3BvbnNlIHtcbiAgYWJvcnRlZDogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBIVFRQXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgLyBQaG9uZWdhcCBwbHVnaW4gZm9yIGNvbW11bmljYXRpbmcgd2l0aCBIVFRQIHNlcnZlcnMuIFN1cHBvcnRzIGlPUyBhbmQgQW5kcm9pZC5cbiAqXG4gKiBBZHZhbnRhZ2VzIG92ZXIgSmF2YXNjcmlwdCByZXF1ZXN0czpcbiAqIC0gU1NMIC8gVExTIFBpbm5pbmdcbiAqIC0gQ09SUyByZXN0cmljdGlvbnMgZG8gbm90IGFwcGx5XG4gKiAtIEhhbmRsaW5nIG9mIEhUVFAgY29kZSA0MDEgLSByZWFkIG1vcmUgYXQgW0lzc3VlIENCLTI0MTVdKGh0dHBzOi8vaXNzdWVzLmFwYWNoZS5vcmcvamlyYS9icm93c2UvQ0ItMjQxNSlcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEhUVFAgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2h0dHAvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEhUVFApIHt9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5odHRwLmdldCgnaHR0cDovL2lvbmljLmlvJywge30sIHt9KVxuICogICAudGhlbihkYXRhID0+IHtcbiAqXG4gKiAgICAgY29uc29sZS5sb2coZGF0YS5zdGF0dXMpO1xuICogICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7IC8vIGRhdGEgcmVjZWl2ZWQgYnkgc2VydmVyXG4gKiAgICAgY29uc29sZS5sb2coZGF0YS5oZWFkZXJzKTtcbiAqXG4gKiAgIH0pXG4gKiAgIC5jYXRjaChlcnJvciA9PiB7XG4gKlxuICogICAgIGNvbnNvbGUubG9nKGVycm9yLnN0YXR1cyk7XG4gKiAgICAgY29uc29sZS5sb2coZXJyb3IuZXJyb3IpOyAvLyBlcnJvciBtZXNzYWdlIGFzIHN0cmluZ1xuICogICAgIGNvbnNvbGUubG9nKGVycm9yLmhlYWRlcnMpO1xuICpcbiAqICAgfSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogSFRUUFJlc3BvbnNlXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSFRUUCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFkdmFuY2VkLWh0dHAnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbi5odHRwJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zaWxraW1lbi9jb3Jkb3ZhLXBsdWdpbi1hZHZhbmNlZC1odHRwJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhUVFAgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGVudW0gcmVwcmVzZW50cyB0aGUgaW50ZXJuYWwgZXJyb3IgY29kZXMgd2hpY2ggY2FuIGJlIHJldHVybmVkIGluIGEgSFRUUFJlc3BvbnNlIG9iamVjdC5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgcmVhZG9ubHkgRXJyb3JDb2RlOiB7XG4gICAgR0VORVJJQzogbnVtYmVyO1xuICAgIFNTTF9FWENFUFRJT046IG51bWJlcjtcbiAgICBTRVJWRVJfTk9UX0ZPVU5EOiBudW1iZXI7XG4gICAgVElNRU9VVDogbnVtYmVyO1xuICAgIFVOU1VQUE9SVEVEX1VSTDogbnVtYmVyO1xuICAgIE5PVF9DT05ORUNURUQ6IG51bWJlcjtcbiAgICBQT1NUX1BST0NFU1NJTkdfRkFJTEVEOiBudW1iZXI7XG4gICAgQUJPUlRFRDogbnVtYmVyO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIHJldHVybnMgYW4gb2JqZWN0IHJlcHJlc2VudGluZyBhIGJhc2ljIEhUVFAgQXV0aG9yaXphdGlvbiBoZWFkZXIgb2YgdGhlIGZvcm0uXG4gICAqIEBwYXJhbSB1c2VybmFtZSB7c3RyaW5nfSBVc2VybmFtZVxuICAgKiBAcGFyYW0gcGFzc3dvcmQge3N0cmluZ30gUGFzc3dvcmRcbiAgICogQHJldHVybnMge09iamVjdH0gYW4gb2JqZWN0IHJlcHJlc2VudGluZyBhIGJhc2ljIEhUVFAgQXV0aG9yaXphdGlvbiBoZWFkZXIgb2YgdGhlIGZvcm0geydBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGJhc2U2NEVuY29kZWRVc2VybmFtZUFuZFBhc3N3b3JkJ31cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRCYXNpY0F1dGhIZWFkZXIodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IHsgQXV0aG9yaXphdGlvbjogc3RyaW5nIH0ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHNldHMgdXAgYWxsIGZ1dHVyZSByZXF1ZXN0cyB0byB1c2UgQmFzaWMgSFRUUCBhdXRoZW50aWNhdGlvbiB3aXRoIHRoZSBnaXZlbiB1c2VybmFtZSBhbmQgcGFzc3dvcmQuXG4gICAqIEBwYXJhbSB1c2VybmFtZSB7c3RyaW5nfSBVc2VybmFtZVxuICAgKiBAcGFyYW0gcGFzc3dvcmQge3N0cmluZ30gUGFzc3dvcmRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB1c2VCYXNpY0F1dGgodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogR2V0IGFsbCBoZWFkZXJzIGRlZmluZWQgZm9yIGEgZ2l2ZW4gaG9zdG5hbWUuXG4gICAqIEBwYXJhbSBob3N0IHtzdHJpbmd9IFRoZSBob3N0bmFtZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm4gYWxsIGhlYWRlcnMgZGVmaW5lZCBmb3IgdGhlIGhvc3RuYW1lXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SGVhZGVycyhob3N0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSBoZWFkZXIgZm9yIGFsbCBmdXR1cmUgcmVxdWVzdHMuIFRha2VzIGEgaG9zdG5hbWUsIGEgaGVhZGVyIGFuZCBhIHZhbHVlLlxuICAgKiBAcGFyYW0gaG9zdCB7c3RyaW5nfSBUaGUgaG9zdG5hbWUgdG8gYmUgdXNlZCBmb3Igc2NvcGluZyB0aGlzIGhlYWRlclxuICAgKiBAcGFyYW0gaGVhZGVyIHtzdHJpbmd9IFRoZSBuYW1lIG9mIHRoZSBoZWFkZXJcbiAgICogQHBhcmFtIHZhbHVlIHtzdHJpbmd9IFRoZSB2YWx1ZSBvZiB0aGUgaGVhZGVyXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0SGVhZGVyKGhvc3Q6IHN0cmluZywgaGVhZGVyOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZSBvZiB0aGUgZGF0YSBzZXJpYWxpemVyIHdoaWNoIHdpbGwgYmUgdXNlZCBmb3IgYWxsIGZ1dHVyZSBQT1NUIGFuZCBQVVQgcmVxdWVzdHMuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgdGhlIG5hbWUgb2YgdGhlIGNvbmZpZ3VyZWQgZGF0YSBzZXJpYWxpemVyXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0RGF0YVNlcmlhbGl6ZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkYXRhIHNlcmlhbGl6ZXIgd2hpY2ggd2lsbCBiZSB1c2VkIGZvciBhbGwgZnV0dXJlIFBPU1QsIFBVVCBhbmQgUEFUQ0ggcmVxdWVzdHMuIFRha2VzIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbmFtZSBvZiB0aGUgc2VyaWFsaXplci5cbiAgICogQHBhcmFtIHNlcmlhbGl6ZXIge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIHNlcmlhbGl6ZXIuXG4gICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3NpbGtpbWVuL2NvcmRvdmEtcGx1Z2luLWFkdmFuY2VkLWh0dHAjc2V0ZGF0YXNlcmlhbGl6ZXJcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXREYXRhU2VyaWFsaXplcihzZXJpYWxpemVyOiAndXJsZW5jb2RlZCcgfCAnanNvbicgfCAndXRmOCcgfCAnbXVsdGlwYXJ0JyB8ICdyYXcnKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBBZGQgYSBjdXN0b20gY29va2llLlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFNjb3BlIG9mIHRoZSBjb29raWVcbiAgICogQHBhcmFtIGNvb2tpZSB7c3RyaW5nfSBSRkMgY29tcGxpYW50IGNvb2tpZSBzdHJpbmdcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDb29raWUodXJsOiBzdHJpbmcsIGNvb2tpZTogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgY29va2llcy5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBjbGVhckNvb2tpZXMoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY29va2llcyBmb3IgZ2l2ZW4gVVJMLlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBjYlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlbW92ZUNvb2tpZXModXJsOiBzdHJpbmcsIGNiOiAoKSA9PiB2b2lkKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIGNvb2tpZSBzdHJpbmcgZm9yIGdpdmVuIFVSTC5cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENvb2tpZVN0cmluZyh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBnbG9iYWwgcmVxdWVzdCB0aW1lb3V0IHZhbHVlIGluIHNlY29uZHMuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IHJldHVybnMgdGhlIGdsb2JhbCByZXF1ZXN0IHRpbWVvdXQgdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRSZXF1ZXN0VGltZW91dCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZ2xvYmFsIHJlcXVlc3QgdGltZW91dCB2YWx1ZSBpbiBzZWNvbmRzLlxuICAgKiBAcGFyYW0gdGltZW91dCB7bnVtYmVyfSBUaGUgdGltZW91dCBpbiBzZWNvbmRzLiBEZWZhdWx0IDYwXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0UmVxdWVzdFRpbWVvdXQodGltZW91dDogbnVtYmVyKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIGlmIGl0IHNob3VsZCBmb2xsb3cgcmVkaXJlY3RzIGF1dG9tYXRpY2FsbHkuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSByZXR1cm5zIHRydWUgaWYgaXQgaXMgY29uZmlndXJlZCB0byBmb2xsb3cgcmVkaXJlY3RzIGF1dG9tYXRpY2FsbHlcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRGb2xsb3dSZWRpcmVjdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlIGlmIGl0IHNob3VsZCBmb2xsb3cgcmVkaXJlY3RzIGF1dG9tYXRpY2FsbHkuXG4gICAqIEBwYXJhbSBmb2xsb3cge2Jvb2xlYW59IFNldCB0byBmYWxzZSB0byBkaXNhYmxlIGZvbGxvd2luZyByZWRpcmVjdHMgYXV0b21hdGljYWxseVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEZvbGxvd1JlZGlyZWN0KGZvbGxvdzogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogU2V0IHNlcnZlciB0cnVzdCBtb2RlLCBiZWluZyBvbmUgb2YgdGhlIGZvbGxvd2luZyB2YWx1ZXM6XG4gICAqIGRlZmF1bHQ6IGRlZmF1bHQgU1NMIHRydXN0c2hpcCBhbmQgaG9zdG5hbWUgdmVyaWZpY2F0aW9uIGhhbmRsaW5nIHVzaW5nIHN5c3RlbSdzIENBIGNlcnRzO1xuICAgKiBsZWdhY3k6IHVzZSBsZWdhY3kgZGVmYXVsdCBiZWhhdmlvciAoPCAyLjAuMyksIGV4Y2x1ZGluZyB1c2VyIGluc3RhbGxlZCBDQSBjZXJ0cyAob25seSBmb3IgQW5kcm9pZCk7XG4gICAqIG5vY2hlY2s6IGRpc2FibGUgU1NMIGNlcnRpZmljYXRlIGNoZWNraW5nIGFuZCBob3N0bmFtZSB2ZXJpZmljYXRpb24sIHRydXN0aW5nIGFsbCBjZXJ0cyAobWVhbnQgdG8gYmUgdXNlZCBvbmx5IGZvciB0ZXN0aW5nIHB1cnBvc2VzKTtcbiAgICogcGlubmVkOiB0cnVzdCBvbmx5IHByb3ZpZGVkIGNlcnRpZmljYXRlcztcbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vc2lsa2ltZW4vY29yZG92YS1wbHVnaW4tYWR2YW5jZWQtaHR0cCNzZXRzZXJ2ZXJ0cnVzdG1vZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgc2VydmVyIHRydXN0IG1vZGVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0U2VydmVyVHJ1c3RNb2RlKG1vZGU6ICdkZWZhdWx0JyB8ICdsZWdhY3knIHwgJ25vY2hlY2snIHwgJ3Bpbm5lZCcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIFBPU1QgcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIVFRQUmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcG9zdCh1cmw6IHN0cmluZywgYm9keTogYW55LCBoZWFkZXJzOiBhbnkpOiBQcm9taXNlPEhUVFBSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgc3luYyBQT1NUIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIGJvZHkge09iamVjdH0gVGhlIGJvZHkgb2YgdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHBhcmFtIHN1Y2Nlc3Mge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3Qgc3VjY2VlZFxuICAgKiBAcGFyYW0gZmFpbHVyZSB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBmYWlsZWRcbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIHJlcXVlc3RJZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG1ldGhvZE5hbWU6ICdwb3N0JyxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBwb3N0U3luYyhcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgaGVhZGVyczogYW55LFxuICAgIHN1Y2Nlc3M6IChyZXN1bHQ6IEhUVFBSZXNwb25zZSkgPT4gdm9pZCxcbiAgICBmYWlsdXJlOiAoZXJyb3I6IGFueSkgPT4gdm9pZFxuICApOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgR0VUIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHBhcmFtZXRlcnMge09iamVjdH0gUGFyYW1ldGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldCh1cmw6IHN0cmluZywgcGFyYW1ldGVyczogYW55LCBoZWFkZXJzOiBhbnkpOiBQcm9taXNlPEhUVFBSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgc3luYyBHRVQgcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gcGFyYW1ldGVycyB7T2JqZWN0fSBQYXJhbWV0ZXJzIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcGFyYW0gc3VjY2VzcyB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBzdWNjZWVkXG4gICAqIEBwYXJhbSBmYWlsdXJlIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IGZhaWxlZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVxdWVzdElkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgbWV0aG9kTmFtZTogJ2dldCcsXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgZ2V0U3luYyhcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbWV0ZXJzOiBhbnksXG4gICAgaGVhZGVyczogYW55LFxuICAgIHN1Y2Nlc3M6IChyZXN1bHQ6IEhUVFBSZXNwb25zZSkgPT4gdm9pZCxcbiAgICBmYWlsdXJlOiAoZXJyb3I6IGFueSkgPT4gdm9pZFxuICApOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgUFVUIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIGJvZHkge09iamVjdH0gVGhlIGJvZHkgb2YgdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHB1dCh1cmw6IHN0cmluZywgYm9keTogYW55LCBoZWFkZXJzOiBhbnkpOiBQcm9taXNlPEhUVFBSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgc3luYyBQVVQgcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcGFyYW0gc3VjY2VzcyB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBzdWNjZWVkXG4gICAqIEBwYXJhbSBmYWlsdXJlIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IGZhaWxlZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVxdWVzdElkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgbWV0aG9kTmFtZTogJ3B1dCcsXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgcHV0U3luYyhcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgaGVhZGVyczogYW55LFxuICAgIHN1Y2Nlc3M6IChyZXN1bHQ6IEhUVFBSZXNwb25zZSkgPT4gdm9pZCxcbiAgICBmYWlsdXJlOiAoZXJyb3I6IGFueSkgPT4gdm9pZFxuICApOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgUEFUQ0ggcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIVFRQUmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGF0Y2godXJsOiBzdHJpbmcsIGJvZHk6IGFueSwgaGVhZGVyczogYW55KTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIHN5bmMgUEFUQ0ggcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcGFyYW0gc3VjY2VzcyB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBzdWNjZWVkXG4gICAqIEBwYXJhbSBmYWlsdXJlIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IGZhaWxlZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVxdWVzdElkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgbWV0aG9kTmFtZTogJ3BhdGNoJyxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBwYXRjaFN5bmMoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIGhlYWRlcnM6IGFueSxcbiAgICBzdWNjZXNzOiAocmVzdWx0OiBIVFRQUmVzcG9uc2UpID0+IHZvaWQsXG4gICAgZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIERFTEVURSByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHtPYmplY3R9IFBhcmFtZXRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkZWxldGUodXJsOiBzdHJpbmcsIHBhcmFtZXRlcnM6IGFueSwgaGVhZGVyczogYW55KTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIHN5bmMgREVMRVRFIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHBhcmFtZXRlcnMge09iamVjdH0gUGFyYW1ldGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHBhcmFtIHN1Y2Nlc3Mge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3Qgc3VjY2VlZFxuICAgKiBAcGFyYW0gZmFpbHVyZSB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBmYWlsZWRcbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIHJlcXVlc3RJZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG1ldGhvZE5hbWU6ICdkZWxldGUnLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGRlbGV0ZVN5bmMoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1ldGVyczogYW55LFxuICAgIGhlYWRlcnM6IGFueSxcbiAgICBzdWNjZXNzOiAocmVzdWx0OiBIVFRQUmVzcG9uc2UpID0+IHZvaWQsXG4gICAgZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIEhFQUQgcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gcGFyYW1ldGVycyB7T2JqZWN0fSBQYXJhbWV0ZXJzIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIVFRQUmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGVhZCh1cmw6IHN0cmluZywgcGFyYW1ldGVyczogYW55LCBoZWFkZXJzOiBhbnkpOiBQcm9taXNlPEhUVFBSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgc3luYyBIRUFEIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHBhcmFtZXRlcnMge09iamVjdH0gUGFyYW1ldGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHBhcmFtIHN1Y2Nlc3Mge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3Qgc3VjY2VlZFxuICAgKiBAcGFyYW0gZmFpbHVyZSB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBmYWlsZWRcbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIHJlcXVlc3RJZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG1ldGhvZE5hbWU6ICdoZWFkJyxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBoZWFkU3luYyhcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbWV0ZXJzOiBhbnksXG4gICAgaGVhZGVyczogYW55LFxuICAgIHN1Y2Nlc3M6IChyZXN1bHQ6IEhUVFBSZXNwb25zZSkgPT4gdm9pZCxcbiAgICBmYWlsdXJlOiAoZXJyb3I6IGFueSkgPT4gdm9pZFxuICApOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGFuIE9QVElPTlMgcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gcGFyYW1ldGVycyB7T2JqZWN0fSBQYXJhbWV0ZXJzIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIVFRQUmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb3B0aW9ucyh1cmw6IHN0cmluZywgcGFyYW1ldGVyczogYW55LCBoZWFkZXJzOiBhbnkpOiBQcm9taXNlPEhUVFBSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGFuIHN5bmMgT1BUSU9OUyByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHtPYmplY3R9IFBhcmFtZXRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBzdWNjZXNzIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IHN1Y2NlZWRcbiAgICogQHBhcmFtIGZhaWx1cmUge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3QgZmFpbGVkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSByZXF1ZXN0SWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBtZXRob2ROYW1lOiAnb3B0aW9ucycsXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgb3B0aW9uc1N5bmMoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1ldGVyczogYW55LFxuICAgIGhlYWRlcnM6IGFueSxcbiAgICBzdWNjZXNzOiAocmVzdWx0OiBIVFRQUmVzcG9uc2UpID0+IHZvaWQsXG4gICAgZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIGJvZHkge09iamVjdH0gVGhlIGJvZHkgb2YgdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHBhcmFtIGZpbGVQYXRoIHtzdHJpbmd9IFRoZSBsb2NhbCBwYXRoKHMpIG9mIHRoZSBmaWxlKHMpIHRvIHVwbG9hZFxuICAgKiBAcGFyYW0gbmFtZSB7c3RyaW5nfSBUaGUgbmFtZShzKSBvZiB0aGUgcGFyYW1ldGVyIHRvIHBhc3MgdGhlIGZpbGUocykgYWxvbmcgYXNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIEZpbGVFbnRyeSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1cGxvYWRGaWxlKHVybDogc3RyaW5nLCBib2R5OiBhbnksIGhlYWRlcnM6IGFueSwgZmlsZVBhdGg6IHN0cmluZyB8IHN0cmluZ1tdLCBuYW1lOiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBmaWxlUGF0aCB7c3RyaW5nfSBUaGUgbG9jYWwgcGF0aChzKSBvZiB0aGUgZmlsZShzKSB0byB1cGxvYWRcbiAgICogQHBhcmFtIG5hbWUge3N0cmluZ30gVGhlIG5hbWUocykgb2YgdGhlIHBhcmFtZXRlciB0byBwYXNzIHRoZSBmaWxlKHMpIGFsb25nIGFzXG4gICAqIEBwYXJhbSBzdWNjZXNzIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IHN1Y2NlZWRcbiAgICogQHBhcmFtIGZhaWx1cmUge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3QgZmFpbGVkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSByZXF1ZXN0SWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBtZXRob2ROYW1lOiAndXBsb2FkRmlsZScsXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgdXBsb2FkRmlsZVN5bmMoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIGhlYWRlcnM6IGFueSxcbiAgICBmaWxlUGF0aDogc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgbmFtZTogc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgc3VjY2VzczogKHJlc3VsdDogYW55KSA9PiB2b2lkLFxuICAgIGZhaWx1cmU6IChlcnJvcjogYW55KSA9PiB2b2lkXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBmaWxlUGF0aCB7c3RyaW5nfSBUaGUgcGF0aCB0byBkb3dubG9hZCB0aGUgZmlsZSB0bywgaW5jbHVkaW5nIHRoZSBmaWxlIG5hbWUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBGaWxlRW50cnkgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZG93bmxvYWRGaWxlKHVybDogc3RyaW5nLCBib2R5OiBhbnksIGhlYWRlcnM6IGFueSwgZmlsZVBhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBmaWxlUGF0aCB7c3RyaW5nfSBUaGUgcGF0aCB0byBkb3dubG9hZCB0aGUgZmlsZSB0bywgaW5jbHVkaW5nIHRoZSBmaWxlIG5hbWUuXG4gICAqIEBwYXJhbSBzdWNjZXNzIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IHN1Y2NlZWRcbiAgICogQHBhcmFtIGZhaWx1cmUge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3QgZmFpbGVkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSByZXF1ZXN0SWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBtZXRob2ROYW1lOiAnZG93bmxvYWRGaWxlJyxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBkb3dubG9hZEZpbGVTeW5jKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBoZWFkZXJzOiBhbnksXG4gICAgZmlsZVBhdGg6IHN0cmluZyxcbiAgICBzdWNjZXNzOiAocmVzdWx0OiBhbnkpID0+IHZvaWQsXG4gICAgZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIG9wdGlvbnMge09iamVjdH0gb3B0aW9ucyBmb3IgaW5kaXZpZHVhbCByZXF1ZXN0XG4gICAqIEBwYXJhbSBvcHRpb25zLm1ldGhvZCB7c3RyaW5nfSByZXF1ZXN0IG1ldGhvZFxuICAgKiBAcGFyYW0gb3B0aW9ucy5kYXRhIHtPYmplY3R9IHBheWxvYWQgdG8gYmUgc2VuZCB0byB0aGUgc2VydmVyIChvbmx5IGFwcGxpY2FibGUgb24gcG9zdCwgcHV0IG9yIHBhdGNoIG1ldGhvZHMpXG4gICAqIEBwYXJhbSBvcHRpb25zLnBhcmFtcyB7T2JqZWN0fSBxdWVyeSBwYXJhbXMgdG8gYmUgYXBwZW5kZWQgdG8gdGhlIFVSTCAob25seSBhcHBsaWNhYmxlIG9uIGdldCwgaGVhZCwgZGVsZXRlLCB1cGxvYWQgb3IgZG93bmxvYWQgbWV0aG9kcylcbiAgICogQHBhcmFtIG9wdGlvbnMuc2VyaWFsaXplciB7c3RyaW5nfSBkYXRhIHNlcmlhbGl6ZXIgdG8gYmUgdXNlZCAob25seSBhcHBsaWNhYmxlIG9uIHBvc3QsIHB1dCBvciBwYXRjaCBtZXRob2RzKSwgZGVmYXVsdHMgdG8gZ2xvYmFsIHNlcmlhbGl6ZXIgdmFsdWUsIHNlZSBzZXREYXRhU2VyaWFsaXplciBmb3Igc3VwcG9ydGVkIHZhbHVlc1xuICAgKiBAcGFyYW0gb3B0aW9ucy50aW1lb3V0IHtudW1iZXJ9IHRpbWVvdXQgdmFsdWUgZm9yIHRoZSByZXF1ZXN0IGluIHNlY29uZHMsIGRlZmF1bHRzIHRvIGdsb2JhbCB0aW1lb3V0IHZhbHVlXG4gICAqIEBwYXJhbSBvcHRpb25zLmhlYWRlcnMge09iamVjdH0gaGVhZGVycyBvYmplY3QgKGtleSB2YWx1ZSBwYWlyKSwgd2lsbCBiZSBtZXJnZWQgd2l0aCBnbG9iYWwgdmFsdWVzXG4gICAqIEBwYXJhbSBvcHRpb25zLmZpbGVQYXRoIHtzdHJpbmd9IGZpbGUgcGF0aChzKSB0byBiZSB1c2VkIGR1cmluZyB1cGxvYWQgYW5kIGRvd25sb2FkIHNlZSB1cGxvYWRGaWxlIGFuZCBkb3dubG9hZEZpbGUgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uXG4gICAqIEBwYXJhbSBvcHRpb25zLm5hbWUge3N0cmluZ30gbmFtZShzKSB0byBiZSB1c2VkIGR1cmluZyB1cGxvYWQgc2VlIHVwbG9hZEZpbGUgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uXG4gICAqIEBwYXJhbSBvcHRpb25zLnJlc3BvbnNlVHlwZSB7c3RyaW5nfSByZXNwb25zZSB0eXBlLCBkZWZhdWx0cyB0byB0ZXh0XG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZW5kUmVxdWVzdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBtZXRob2Q6ICdnZXQnIHwgJ3Bvc3QnIHwgJ3B1dCcgfCAncGF0Y2gnIHwgJ2hlYWQnIHwgJ2RlbGV0ZScgfCAnb3B0aW9ucycgfCAndXBsb2FkJyB8ICdkb3dubG9hZCc7XG4gICAgICBkYXRhPzogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9O1xuICAgICAgcGFyYW1zPzogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB9O1xuICAgICAgc2VyaWFsaXplcj86ICdqc29uJyB8ICd1cmxlbmNvZGVkJyB8ICd1dGY4JyB8ICdtdWx0aXBhcnQnIHwgJ3Jhdyc7XG4gICAgICB0aW1lb3V0PzogbnVtYmVyO1xuICAgICAgaGVhZGVycz86IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgIGZpbGVQYXRoPzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICBuYW1lPzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICByZXNwb25zZVR5cGU/OiAndGV4dCcgfCAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nO1xuICAgIH1cbiAgKTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIG9wdGlvbnMge09iamVjdH0gb3B0aW9ucyBmb3IgaW5kaXZpZHVhbCByZXF1ZXN0XG4gICAqIEBwYXJhbSBvcHRpb25zLm1ldGhvZCB7c3RyaW5nfSByZXF1ZXN0IG1ldGhvZFxuICAgKiBAcGFyYW0gb3B0aW9ucy5kYXRhIHtPYmplY3R9IHBheWxvYWQgdG8gYmUgc2VuZCB0byB0aGUgc2VydmVyIChvbmx5IGFwcGxpY2FibGUgb24gcG9zdCwgcHV0IG9yIHBhdGNoIG1ldGhvZHMpXG4gICAqIEBwYXJhbSBvcHRpb25zLnBhcmFtcyB7T2JqZWN0fSBxdWVyeSBwYXJhbXMgdG8gYmUgYXBwZW5kZWQgdG8gdGhlIFVSTCAob25seSBhcHBsaWNhYmxlIG9uIGdldCwgaGVhZCwgZGVsZXRlLCB1cGxvYWQgb3IgZG93bmxvYWQgbWV0aG9kcylcbiAgICogQHBhcmFtIG9wdGlvbnMuc2VyaWFsaXplciB7c3RyaW5nfSBkYXRhIHNlcmlhbGl6ZXIgdG8gYmUgdXNlZCAob25seSBhcHBsaWNhYmxlIG9uIHBvc3QsIHB1dCBvciBwYXRjaCBtZXRob2RzKSwgZGVmYXVsdHMgdG8gZ2xvYmFsIHNlcmlhbGl6ZXIgdmFsdWUsIHNlZSBzZXREYXRhU2VyaWFsaXplciBmb3Igc3VwcG9ydGVkIHZhbHVlc1xuICAgKiBAcGFyYW0gb3B0aW9ucy50aW1lb3V0IHtudW1iZXJ9IHRpbWVvdXQgdmFsdWUgZm9yIHRoZSByZXF1ZXN0IGluIHNlY29uZHMsIGRlZmF1bHRzIHRvIGdsb2JhbCB0aW1lb3V0IHZhbHVlXG4gICAqIEBwYXJhbSBvcHRpb25zLmhlYWRlcnMge09iamVjdH0gaGVhZGVycyBvYmplY3QgKGtleSB2YWx1ZSBwYWlyKSwgd2lsbCBiZSBtZXJnZWQgd2l0aCBnbG9iYWwgdmFsdWVzXG4gICAqIEBwYXJhbSBvcHRpb25zLmZpbGVQYXRoIHtzdHJpbmd9IGZpbGUgcGF0aChzKSB0byBiZSB1c2VkIGR1cmluZyB1cGxvYWQgYW5kIGRvd25sb2FkIHNlZSB1cGxvYWRGaWxlIGFuZCBkb3dubG9hZEZpbGUgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uXG4gICAqIEBwYXJhbSBvcHRpb25zLm5hbWUge3N0cmluZ30gbmFtZShzKSB0byBiZSB1c2VkIGR1cmluZyB1cGxvYWQgc2VlIHVwbG9hZEZpbGUgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uXG4gICAqIEBwYXJhbSBvcHRpb25zLnJlc3BvbnNlVHlwZSB7c3RyaW5nfSByZXNwb25zZSB0eXBlLCBkZWZhdWx0cyB0byB0ZXh0XG4gICAqIEBwYXJhbSBzdWNjZXNzIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IHN1Y2NlZWRcbiAgICogQHBhcmFtIGZhaWx1cmUge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3QgZmFpbGVkXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSByZXF1ZXN0SWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBtZXRob2ROYW1lOiAnc2VuZFJlcXVlc3QnLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNlbmRSZXF1ZXN0U3luYyhcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBtZXRob2Q6ICdnZXQnIHwgJ3Bvc3QnIHwgJ3B1dCcgfCAncGF0Y2gnIHwgJ2hlYWQnIHwgJ2RlbGV0ZScgfCAnb3B0aW9ucycgfCAndXBsb2FkJyB8ICdkb3dubG9hZCc7XG4gICAgICBkYXRhPzogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9O1xuICAgICAgcGFyYW1zPzogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB9O1xuICAgICAgc2VyaWFsaXplcj86ICdqc29uJyB8ICd1cmxlbmNvZGVkJyB8ICd1dGY4JyB8ICdtdWx0aXBhcnQnO1xuICAgICAgdGltZW91dD86IG51bWJlcjtcbiAgICAgIGhlYWRlcnM/OiB7IFtpbmRleDogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICBmaWxlUGF0aD86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgbmFtZT86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ3RleHQnIHwgJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJztcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IChyZXN1bHQ6IEhUVFBSZXNwb25zZSkgPT4gdm9pZCxcbiAgICBmYWlsdXJlOiAoZXJyb3I6IGFueSkgPT4gdm9pZFxuICApOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gcmVxdWVzdElkIHtzdHJpbmd9IFRoZSBSZXF1ZXN0SWQgb2YgdGhlIHJlcXVlc3QgdG8gYWJvcnRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYWJvcnQocmVxdWVzdElkOiBzdHJpbmcpOiBQcm9taXNlPEFib3J0ZWRSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

/***/ }),

/***/ 51942:
/*!**********************************************************************************!*\
  !*** ./src/app/core/lawatan/lawatan-usahawan/lawatan-usahawan-routing.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LawatanUsahawanPageRoutingModule": function() { return /* binding */ LawatanUsahawanPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _lawatan_usahawan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lawatan-usahawan.page */ 95861);




const routes = [
    {
        path: '',
        component: _lawatan_usahawan_page__WEBPACK_IMPORTED_MODULE_0__.LawatanUsahawanPage
    }
];
let LawatanUsahawanPageRoutingModule = class LawatanUsahawanPageRoutingModule {
};
LawatanUsahawanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LawatanUsahawanPageRoutingModule);



/***/ }),

/***/ 8032:
/*!**************************************************************************!*\
  !*** ./src/app/core/lawatan/lawatan-usahawan/lawatan-usahawan.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LawatanUsahawanPageModule": function() { return /* binding */ LawatanUsahawanPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _lawatan_usahawan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lawatan-usahawan-routing.module */ 51942);
/* harmony import */ var _lawatan_usahawan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lawatan-usahawan.page */ 95861);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ 68589);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);









let LawatanUsahawanPageModule = class LawatanUsahawanPageModule {
};
LawatanUsahawanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _lawatan_usahawan_routing_module__WEBPACK_IMPORTED_MODULE_0__.LawatanUsahawanPageRoutingModule,
        ],
        declarations: [_lawatan_usahawan_page__WEBPACK_IMPORTED_MODULE_1__.LawatanUsahawanPage],
        providers: [
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__.HTTP,
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File
        ]
    })
], LawatanUsahawanPageModule);



/***/ }),

/***/ 95861:
/*!************************************************************************!*\
  !*** ./src/app/core/lawatan/lawatan-usahawan/lawatan-usahawan.page.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LawatanUsahawanPage": function() { return /* binding */ LawatanUsahawanPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_lawatan_usahawan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lawatan-usahawan.page.html */ 96468);
/* harmony import */ var _lawatan_usahawan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lawatan-usahawan.page.scss */ 72053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var src_app_services_lawatan_lawatan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/lawatan/lawatan.service */ 89765);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _pengesahan_tarikh_lawatan_pgw_pengesahan_tarikh_lawatan_pgw_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pengesahan-tarikh-lawatan-pgw/pengesahan-tarikh-lawatan-pgw.page */ 31453);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ 68589);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);









// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
// import { File } from '@awesome-cordova-plugins/file';


// import { url } from 'inspector';
// import { HttpClient } from '@angular/common/http';
let LawatanUsahawanPage = class LawatanUsahawanPage {
    constructor(modalController, lawatanService, http, file) {
        this.modalController = modalController;
        this.lawatanService = lawatanService;
        this.http = http;
        this.file = file;
        this.user_id = window.sessionStorage.getItem("user_id");
    }
    ngOnInit() {
        this.getLawatan();
    }
    pengesahanLawatan(lawatan) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log("pengesahan lawatan");
            const modal = yield this.modalController.create({
                component: _pengesahan_tarikh_lawatan_pgw_pengesahan_tarikh_lawatan_pgw_page__WEBPACK_IMPORTED_MODULE_4__.PengesahanTarikhLawatanPgwPage,
                componentProps: { lawatan },
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
    getLawatan() {
        this.lawatanService.getLawatanUsahawan(this.user_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(x => x.filter(i => i.status_lawatan != "4"))).subscribe((res) => {
            console.log("res", res);
            this.lawatan = res;
            // window.location.reload();
        });
        this.lawatanService.getLawatanUsahawan(this.user_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(x => x.filter(i => i.status_lawatan == "4"))).subscribe((res) => {
            console.log("res2", res);
            this.laporan = res;
            // window.location.reload();
            // this.lawatan
        });
    }
    // const fileTransfer: FileTransferObject = this.transfer.create();
    download_laporan(id) {
        console.log(id);
        this.lawatanService.janaLaporan(id).subscribe((res) => {
            console.log("res3", res);
            let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'storage/' + res;
            console.log(url);
            window.open(url, "_blank");
        });
    }
};
LawatanUsahawanPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_app_services_lawatan_lawatan_service__WEBPACK_IMPORTED_MODULE_2__.LawatanService },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__.HTTP },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__.File }
];
LawatanUsahawanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-lawatan-usahawan',
        template: _raw_loader_lawatan_usahawan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_lawatan_usahawan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LawatanUsahawanPage);



/***/ }),

/***/ 89765:
/*!*****************************************************!*\
  !*** ./src/app/services/lawatan/lawatan.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LawatanService": function() { return /* binding */ LawatanService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let LawatanService = class LawatanService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/lawatan";
        this.url2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/lawatan/usahawan";
        this.url3 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/tindakanLawatan";
        this.url4 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/lawatan/updateLaporan";
        this.url5 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "api/lawatan/senaraiUsahawan";
    }
    post(data) {
        return this.http.post(`${this.url}`, data);
    }
    get(pegawai_id) {
        return this.http.get(`${this.url}` + '/' + pegawai_id);
    }
    getLawatanUsahawan(id_pengguna) {
        return this.http.get(`${this.url2}` + '/' + id_pengguna);
    }
    update(data, id) {
        return this.http.put(`${this.url}` + '/' + id, data);
    }
    getTindakanLawatan() {
        return this.http.get(`${this.url3}`);
    }
    updateLaporan(data, id) {
        return this.http.post(`${this.url4}` + '/' + id, data);
    }
    getsenaraiusahawan(id_pegawai) {
        return this.http.get(`${this.url5}` + '/' + id_pegawai);
    }
    tambahLaporan(data) {
        return this.http.post(`${this.url}` + '/laporanBaru', data);
    }
    janaLaporan(id) {
        return this.http.get(`${this.url}` + '/janaDokumenLawatan/' + id);
    }
};
LawatanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
LawatanService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], LawatanService);



/***/ }),

/***/ 72053:
/*!**************************************************************************!*\
  !*** ./src/app/core/lawatan/lawatan-usahawan/lawatan-usahawan.page.scss ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-padding {\n  padding: 0px !important;\n}\n\n.rectangle-280 {\n  background-color: #00a651;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n\n.bg-white {\n  background-color: white;\n  display: flex;\n  height: 90%;\n  justify-content: center;\n  min-width: 100%;\n  border-radius: 0px 0px 25px 25px;\n}\n\n.tab-selected {\n  background-color: #00a651;\n  border-radius: 30px;\n  color: white;\n}\n\n.tab {\n  margin-top: 10%;\n  border-bottom: none;\n}\n\nion-tab-button {\n  background-color: #f1f1f1;\n  border-radius: 30px;\n}\n\n.rectangle-279 {\n  border-radius: 12px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  margin-left: 7%;\n  margin-right: 7%;\n}\n\n.bold,\nh1 {\n  font-weight: bold;\n  font-family: \"Nunito Sans\";\n}\n\n.no-padding {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.jumlah {\n  font-family: \"Nunito Sans\";\n}\n\n.tarikh {\n  font-family: \"Nunito Sans\";\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhd2F0YW4tdXNhaGF3YW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUtBO0VBRUksbUJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUE7O0VBRUksaUJBQUE7RUFDQSwwQkFBQTtBQUhKOztBQUtBO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtBQUZKOztBQUlBO0VBQ0ksMEJBQUE7QUFESjs7QUFHQTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtBQUFKIiwiZmlsZSI6Imxhd2F0YW4tdXNhaGF3YW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLXBhZGRpbmcge1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucmVjdGFuZ2xlLTI4MCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTY1MTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4uYmctd2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjVweCAyNXB4O1xufVxuXG4udGFiLXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNjUxO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4udGFiIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUYxO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDJyZW07XG59XG5cblxuLnJlY3RhbmdsZS0yNzkge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNFREVERUQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiA3JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDclO1xuICB9XG5cbi5ib2xkLFxuaDEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XG59XG4ubm8tcGFkZGluZyB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cbi5qdW1sYWgge1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XG59XG4udGFyaWtoIHtcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAvLyBjb2xvcjogIzAwYTY1MTtcbn1cblxuXG4iXX0= */");

/***/ }),

/***/ 96468:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/lawatan/lawatan-usahawan/lawatan-usahawan.page.html ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"height: 80px;\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\" href=\"/dashboard\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-text color=\"success\">\n        <h1>\n          <strong class=\"ion-text-uppercase\">\n            LAWATAN\n          </strong>\n        </h1>\n      </ion-text>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div>\n    <ion-tabs>\n      <ion-tab-bar slot=\"top\" class=\"tab\">\n        <ion-tab-button tab=\"/lawatan\" style=\"height:30px; max-width:40%\">\n          <ion-label style=\"width: 80%; \">\n            <div>\n              LAWATAN\n            </div>\n            <!-- <ion-button round=true>Tunai Masuk</ion-button> -->\n          </ion-label>\n          <!-- <ion-icon name=\"musical-note\"></ion-icon> -->\n        </ion-tab-button>\n        <ion-tab-button tab=\"/laporan\" style=\"height:30px; max-width:40%\">\n          <ion-label>\n            LAPORAN\n          </ion-label>\n          <!-- <ion-icon name=\"game-controller\"></ion-icon> -->\n        </ion-tab-button>\n\n      </ion-tab-bar>\n\n      <ion-tab tab=\"/lawatan\">\n\n        <ion-content>\n\n          <div class=\"bg-white\" style=\"display: flex; flex-wrap:wrap\">\n            <ion-grid style=\"margin:5%; margin-bottom:0px\">\n              <ion-row style=\"margin-bottom: 10px;\">\n                <ion-col>\n                  <h5 class=\"bold\"> Perkara</h5>\n                </ion-col>\n                <ion-col class=\"ion-text-end\">\n                  <h5 class=\"bold\">Status</h5>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <div style=\"height: 70%; width:100%; overflow: scroll; display:flex; justify-content:center\">\n\n              <ion-grid class=\"rectangle-279\">\n                <ion-row *ngFor=\"let lawatan of lawatan\"\n                  style=\"margin-bottom: 10px; background-color: #EDEDED; border-radius: 15px;\"\n                  (click)=\"lawatan.status_lawatan=='1'  ? pengesahanLawatan(lawatan):null;\">\n                  <ion-col>\n                    <div class=\" bold\" style=\"font-family: 'Nunito Sans';\">\n                      <ion-grid style=\"padding: 0%;\">\n                        <ion-row style=\"padding: 0%;\">\n                          <ion-col size=\"8\">\n                            <ion-text>\n                              <h6 class=\"bold no-padding\">\n                                {{lawatan.nama_pegawai}}\n                              </h6>\n                            </ion-text>\n                            <ion-text color=\"success\">\n                              {{lawatan.tarikh_lawatan | date: 'dd/MM/yyyy'}}\n                            </ion-text>\n                          </ion-col>\n                          <ion-col size=\"4\" style=\"padding: 0%; display:flex; justify-content:flex-end\">\n                            <img *ngIf=\"lawatan.status_lawatan == '2'\" src=\"assets/icon/pending.png\" alt=\"pending\"\n                              height=\"50px\">\n                            <img *ngIf=\"lawatan.status_lawatan == '3'\" src=\"assets/icon/publish-icon.png\"\n                              alt=\"publish\" height=\"50px%\">\n                            <img *ngIf=\"lawatan.status_lawatan == '1'\" src=\"assets/icon/draft-icon.png\" alt=\"draft\"\n                              height=\"50px%\">\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n\n\n            </div>\n            \n          </div>\n\n        </ion-content>\n      </ion-tab>\n\n      <ion-tab tab=\"/laporan\">\n\n        <ion-content>\n\n          <div class=\"bg-white\" style=\"display: flex; flex-wrap:wrap\">\n            <ion-grid style=\"margin:5%; margin-bottom:0px\">\n              <ion-row style=\"margin-bottom: 10px;\">\n                <ion-col>\n                  <h5 class=\"bold\"> Maklumat</h5>\n                </ion-col>\n                <ion-col class=\"ion-text-end\">\n                  <!-- <h5 class=\"bold\">Status</h5> -->\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <div style=\"height: 70%; width:100%; overflow: scroll; display:flex; justify-content:center\">\n\n              <ion-grid class=\"rectangle-279\">\n                <ion-row *ngFor=\"let laporan of laporan\"\n                  style=\"margin-bottom: 10px; background-color: #EDEDED; border-radius: 15px;\"\n                  >\n                  <ion-col>\n                    <div class=\" bold\" style=\"font-family: 'Nunito Sans';\">\n                      <ion-grid style=\"padding: 0%;\">\n                        <ion-row style=\"padding: 0%;\">\n                          <ion-col size=\"8\">\n                            <ion-text>\n                              <h6 class=\"bold no-padding\">\n                                {{laporan.nama_pegawai}}\n                              </h6>\n                            </ion-text>\n                            <ion-text color=\"medium\">\n                              <p class=\"font-13 no-padding\">\n                                {{laporan.tarikh_lawatan | date: 'dd/MM/yyyy'}}\n                              </p>\n                            </ion-text>\n                          </ion-col>\n                          <ion-col size=\"4\"\n                            style=\"padding: 0%; display:flex; justify-content:flex-end; align-items:center\">\n                            <a (click)=\"download_laporan(laporan.lawatan_id)\">\n                              <img src=\"assets/icon/DOWNLOAD.png\" alt=\"pending\" height=\"25px\" style=\"margin-left: 20px;\">\n                            </a>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n\n\n            </div>\n            \n          </div>\n\n        </ion-content>\n\n      </ion-tab>\n\n\n    </ion-tabs>\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_core_lawatan_lawatan-usahawan_lawatan-usahawan_module_ts-es2015.js.map