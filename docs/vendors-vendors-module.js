(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors-vendors-module"],{

/***/ "./src/app/shared/services/vendor.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/vendor.service.ts ***!
  \***************************************************/
/*! exports provided: VendorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorService", function() { return VendorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var VendorService = /** @class */ (function () {
    function VendorService(http, _loadingController) {
        this.http = http;
        this._loadingController = _loadingController;
    }
    VendorService.prototype.getVendors = function (id) {
        var _this = this;
        if (id === void 0) { id = 0; }
        var loader = this.getLoader();
        this.presentLoading(loader);
        return this.http.get("https://cpsm.azurewebsites.net/public/index.php/get/vendor/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            console.log(response);
            _this.dismissLoading(loader);
            return response.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.log(error);
            _this.dismissLoading(loader);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    VendorService.prototype.addVendor = function (vendor) {
        var _this = this;
        var loader = this.getLoader();
        this.presentLoading(loader);
        return this.http.post("https://cpsm.azurewebsites.net/public/index.php/post/vendor", vendor)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            console.log(response);
            _this.dismissLoading(loader);
            return response.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.log(error);
            _this.dismissLoading(loader);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    VendorService.prototype.updateVendors = function (vendor) {
        var _this = this;
        var loader = this.getLoader();
        this.presentLoading(loader);
        return this.http.put("https://cpsm.azurewebsites.net/public/index.php/put/vendor/" + vendor.vendor_id, vendor)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            console.log(response);
            _this.dismissLoading(loader);
            return response.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.log(error);
            _this.dismissLoading(loader);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    VendorService.prototype.getLoader = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._loadingController.create({
                            spinner: 'lines'
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VendorService.prototype.presentLoading = function (loader) {
        loader.then(function (l) {
            l.present();
        });
    };
    VendorService.prototype.dismissLoading = function (loader) {
        loader.then(function (l) {
            l.dismiss();
        });
    };
    VendorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
    ], VendorService);
    return VendorService;
}());



/***/ }),

/***/ "./src/app/vendors/edit-vendor/edit-vendor.component.html":
/*!****************************************************************!*\
  !*** ./src/app/vendors/edit-vendor/edit-vendor.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>{{ vendor ? 'Update Vendor' : 'Add New Vendor' }}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"danger\" shape=\"round\" fill=\"outline\" (click)=\"onCancel()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"vendorForm\">\n    <ion-item>\n      <ion-label>Vendor Name</ion-label>\n      <ion-input placeholder=\"Vendor Name\" formControlName=\"name\" maxlength=\"50\" clearInput>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Phone Number</ion-label>\n      <ion-input appNumberOnlyInputs placeholder=\"Phone Number\" maxlength=\"14\" formControlName=\"contact_no\" clearInput>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Address</ion-label>\n      <ion-textarea placeholder=\"Address\" formControlName=\"address\" maxlength=\"100\" clearInput>\n      </ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Rate ₹</ion-label>\n      <ion-input placeholder=\"Rate\" formControlName=\"rate\" maxlength=\"8\" clearInput>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Fat Deduction</ion-label>\n      <ion-input placeholder=\"Fat Deduction\" formControlName=\"mawa_katoti\" clearInput>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Opening Balance ₹</ion-label>\n      <ion-input placeholder=\"Opening Balance\" formControlName=\"opening_balance\" maxlength=\"8\" clearInput>\n      </ion-input>\n    </ion-item>\n\n  </form>\n</ion-content>\n\n<ion-footer>\n  <ion-button [disabled]=\"!vendorForm.valid\" class=\"ion-float-right\" color=\"success\" shape=\"round\" fill=\"outline\" (click)=\"onSave()\">\n    <ion-icon name=\"save\"></ion-icon>\n    <span>Save</span>\n  </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/vendors/edit-vendor/edit-vendor.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/vendors/edit-vendor/edit-vendor.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvcnMvZWRpdC12ZW5kb3IvZWRpdC12ZW5kb3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/vendors/edit-vendor/edit-vendor.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/vendors/edit-vendor/edit-vendor.component.ts ***!
  \**************************************************************/
/*! exports provided: EditVendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVendorComponent", function() { return EditVendorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_shared_services_vendor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/vendor.service */ "./src/app/shared/services/vendor.service.ts");





var EditVendorComponent = /** @class */ (function () {
    function EditVendorComponent(_fb, _modalController, _vendorService, _toastController) {
        this._fb = _fb;
        this._modalController = _modalController;
        this._vendorService = _vendorService;
        this._toastController = _toastController;
        this.subscriptions = [];
        this.vendorForm = _fb.group({
            vendor_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            contact_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            mawa_katoti: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            opening_balance: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    EditVendorComponent.prototype.ngOnInit = function () {
        console.log(this.vendor);
        if (this.vendor && this.vendor.vendor_id)
            this.getVendors(this.vendor.vendor_id);
    };
    EditVendorComponent.prototype.getVendors = function (vendorId) {
        var _this = this;
        this.subscriptions.push(this._vendorService.getVendors(vendorId).subscribe(function (res) {
            console.log(res);
            _this.vendor = res[0];
            _this.vendorForm.patchValue(_this.vendor);
        }));
    };
    EditVendorComponent.prototype.onSave = function () {
        console.log(this.vendorForm.value);
        if (this.vendor)
            this.updateVendors(this.vendorForm.value);
        else
            this.addVendor(this.vendorForm.value);
    };
    EditVendorComponent.prototype.updateVendors = function (vendor) {
        var _this = this;
        this.subscriptions.push(this._vendorService.updateVendors(vendor).subscribe(function (res) {
            if (res && res.success) {
                _this.onSuccess("Updated");
            }
            else {
                _this.onError("Error");
            }
            _this.onClose();
        }, function (err) {
            _this.onError("Error");
            _this.onClose();
        }));
    };
    EditVendorComponent.prototype.addVendor = function (vendor) {
        var _this = this;
        this.subscriptions.push(this._vendorService.addVendor(vendor).subscribe(function (res) {
            if (res && res.success) {
                _this.onSuccess("Added");
            }
            else {
                _this.onError("Error");
            }
            _this.onClose();
        }, function (err) {
            _this.onError("Error");
            _this.onClose();
        }));
    };
    EditVendorComponent.prototype.onCancel = function () {
        this.onClose();
    };
    EditVendorComponent.prototype.onClose = function () {
        this._modalController.dismiss();
    };
    EditVendorComponent.prototype.onSuccess = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._toastController.create({
                            message: message,
                            duration: 2000,
                            color: 'success',
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditVendorComponent.prototype.onError = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._toastController.create({
                            message: message,
                            duration: 2000,
                            color: 'danger',
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditVendorComponent.prototype, "vendor", void 0);
    EditVendorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-vendor',
            template: __webpack_require__(/*! ./edit-vendor.component.html */ "./src/app/vendors/edit-vendor/edit-vendor.component.html"),
            styles: [__webpack_require__(/*! ./edit-vendor.component.scss */ "./src/app/vendors/edit-vendor/edit-vendor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_shared_services_vendor_service__WEBPACK_IMPORTED_MODULE_4__["VendorService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], EditVendorComponent);
    return EditVendorComponent;
}());



/***/ }),

/***/ "./src/app/vendors/vendors.module.ts":
/*!*******************************************!*\
  !*** ./src/app/vendors/vendors.module.ts ***!
  \*******************************************/
/*! exports provided: VendorsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorsPageModule", function() { return VendorsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vendors_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vendors.page */ "./src/app/vendors/vendors.page.ts");
/* harmony import */ var _edit_vendor_edit_vendor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-vendor/edit-vendor.component */ "./src/app/vendors/edit-vendor/edit-vendor.component.ts");








var routes = [
    {
        path: '',
        component: _vendors_page__WEBPACK_IMPORTED_MODULE_6__["VendorsPage"]
    }
];
var VendorsPageModule = /** @class */ (function () {
    function VendorsPageModule() {
    }
    VendorsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vendors_page__WEBPACK_IMPORTED_MODULE_6__["VendorsPage"], _edit_vendor_edit_vendor_component__WEBPACK_IMPORTED_MODULE_7__["EditVendorComponent"]],
            entryComponents: [_edit_vendor_edit_vendor_component__WEBPACK_IMPORTED_MODULE_7__["EditVendorComponent"]]
        })
    ], VendorsPageModule);
    return VendorsPageModule;
}());



/***/ }),

/***/ "./src/app/vendors/vendors.page.html":
/*!*******************************************!*\
  !*** ./src/app/vendors/vendors.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>Vendors</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"warning\" shape=\"round\" fill=\"outline\" (click)=\"presentEditVendorModal()\">\n        Add Vendor\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar color=\"warning\" debounce=\"1000\" placeholder=\"Search Vendor\" [(ngModel)]=\"searchText\"\n    (ionChange)=\"search()\" animated showCancelButton>\n  </ion-searchbar>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col><div><b>Id</b></div></ion-col>\n      <ion-col><div><b>Name</b></div></ion-col>\n      <ion-col><div><b>Phone No</b></div></ion-col>\n      <ion-col><div><b>Address</b></div></ion-col>\n      <ion-col><div><b>Rate</b></div></ion-col>\n      <ion-col><div><b>Mawa Katoti</b></div></ion-col>\n      <ion-col><div><b>Opening Balance</b></div></ion-col>\n      <ion-col><div><b>Action</b></div></ion-col>\n    </ion-row>\n\n    <ion-row *ngFor=\"let vendor of vendors; let i = index\">\n      <ion-col><div>{{i+1}}</div></ion-col>\n      <ion-col><div>{{vendor.name}}</div></ion-col>\n      <ion-col><div>{{vendor.contact_no}}</div></ion-col>\n      <ion-col><div>{{vendor.address}}</div></ion-col>\n      <ion-col><div>{{vendor.rate}}</div></ion-col>\n      <ion-col><div>{{vendor.mawa_katoti}}</div></ion-col>\n      <ion-col><div>{{vendor.opening_balance}}</div></ion-col>\n      <ion-col>\n        <div>\n          <ion-button color=\"primary\" shape=\"round\" fill=\"outline\" (click)=\"presentEditVendorModal(vendor)\">\n            <ion-icon name=\"create\"></ion-icon>\n          </ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/vendors/vendors.page.scss":
/*!*******************************************!*\
  !*** ./src/app/vendors/vendors.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvcnMvdmVuZG9ycy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/vendors/vendors.page.ts":
/*!*****************************************!*\
  !*** ./src/app/vendors/vendors.page.ts ***!
  \*****************************************/
/*! exports provided: VendorsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorsPage", function() { return VendorsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_vendor_edit_vendor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-vendor/edit-vendor.component */ "./src/app/vendors/edit-vendor/edit-vendor.component.ts");
/* harmony import */ var _shared_services_vendor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/vendor.service */ "./src/app/shared/services/vendor.service.ts");





var VendorsPage = /** @class */ (function () {
    function VendorsPage(_modalController, _vendorService) {
        this._modalController = _modalController;
        this._vendorService = _vendorService;
        this.subscriptions = [];
        this.searchText = '';
        this.vendors = [];
    }
    VendorsPage.prototype.ngOnInit = function () {
        this.getVendors();
    };
    VendorsPage.prototype.getVendors = function () {
        var _this = this;
        this.subscriptions.push(this._vendorService.getVendors().subscribe(function (res) {
            console.log(res);
            _this.vendors = res;
        }));
    };
    VendorsPage.prototype.presentEditVendorModal = function (vendor) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modalController.create({
                            component: _edit_vendor_edit_vendor_component__WEBPACK_IMPORTED_MODULE_3__["EditVendorComponent"],
                            componentProps: { vendor: vendor },
                            backdropDismiss: false
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            _this.getVendors();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VendorsPage.prototype.search = function () {
        console.log(this.searchText);
    };
    VendorsPage.prototype.ngOnDestroy = function () {
    };
    VendorsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendors',
            template: __webpack_require__(/*! ./vendors.page.html */ "./src/app/vendors/vendors.page.html"),
            styles: [__webpack_require__(/*! ./vendors.page.scss */ "./src/app/vendors/vendors.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _shared_services_vendor_service__WEBPACK_IMPORTED_MODULE_4__["VendorService"]])
    ], VendorsPage);
    return VendorsPage;
}());



/***/ })

}]);
//# sourceMappingURL=vendors-vendors-module.js.map