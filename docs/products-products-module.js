(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./src/app/products/edit-product/edit-product.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/products/edit-product/edit-product.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>{{ product ? 'Update Product' : 'Add New Product' }}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"danger\" shape=\"round\" fill=\"outline\" (click)=\"onCancel()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"productForm\">\n\n    <ion-item>\n      <ion-label><b>Name</b></ion-label>\n      <ion-input placeholder=\"Product Name\" formControlName=\"name\" maxlength=\"50\" clearInput>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label><b>Rate ₹</b></ion-label>\n      <ion-input placeholder=\"Rate\" formControlName=\"rate\" maxlength=\"50\" clearInput>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label><b>Unit</b></ion-label>\n      <ion-select placeholder=\"Select One\" formControlName=\"unit\">\n        <ion-select-option value=\"\" disabled>Select Unit</ion-select-option>\n        <ion-select-option value=\"KG\">Kilogram</ion-select-option>\n        <ion-select-option value=\"L\">Litres</ion-select-option>\n        <ion-select-option value=\"PCS\">Pieces</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n  </form>\n</ion-content>\n\n<ion-footer>\n  <ion-button [disabled]=\"!productForm.valid\" class=\"ion-float-right\" color=\"success\" shape=\"round\" fill=\"outline\" (click)=\"onSave()\">\n    <ion-icon name=\"save\"></ion-icon>\n    <span>Save</span>\n  </ion-button> \n</ion-footer>\n"

/***/ }),

/***/ "./src/app/products/edit-product/edit-product.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/products/edit-product/edit-product.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2VkaXQtcHJvZHVjdC9lZGl0LXByb2R1Y3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/products/edit-product/edit-product.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/products/edit-product/edit-product.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");





var EditProductComponent = /** @class */ (function () {
    function EditProductComponent(_fb, _modalController, _productService, _toastController) {
        this._fb = _fb;
        this._modalController = _modalController;
        this._productService = _productService;
        this._toastController = _toastController;
        this.subscriptions = [];
        this.productForm = _fb.group({
            product_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    EditProductComponent.prototype.ngOnInit = function () {
        console.log(this.product);
        if (this.product && this.product.product_id)
            this.getProducts(this.product.product_id);
    };
    EditProductComponent.prototype.getProducts = function (productId) {
        var _this = this;
        this.subscriptions.push(this._productService.getProducts(productId).subscribe(function (res) {
            console.log(res);
            _this.product = res[0];
            _this.productForm.patchValue(_this.product);
        }));
    };
    EditProductComponent.prototype.onSave = function () {
        console.log(this.productForm.value);
        if (this.product)
            this.updateProducts(this.productForm.value);
        else
            this.addProduct(this.productForm.value);
    };
    EditProductComponent.prototype.updateProducts = function (product) {
        var _this = this;
        this.subscriptions.push(this._productService.updateProduct(product).subscribe(function (res) {
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
    EditProductComponent.prototype.addProduct = function (product) {
        var _this = this;
        this.subscriptions.push(this._productService.addProduct(product).subscribe(function (res) {
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
    EditProductComponent.prototype.onCancel = function () {
        this.onClose();
    };
    EditProductComponent.prototype.onClose = function () {
        this._modalController.dismiss();
    };
    EditProductComponent.prototype.onSuccess = function (message) {
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
    EditProductComponent.prototype.onError = function (message) {
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
    ], EditProductComponent.prototype, "product", void 0);
    EditProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__(/*! ./edit-product.component.html */ "./src/app/products/edit-product/edit-product.component.html"),
            styles: [__webpack_require__(/*! ./edit-product.component.scss */ "./src/app/products/edit-product/edit-product.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], EditProductComponent);
    return EditProductComponent;
}());



/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.page */ "./src/app/products/products.page.ts");
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-product/edit-product.component */ "./src/app/products/edit-product/edit-product.component.ts");








var routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]
    }
];
var ProductsPageModule = /** @class */ (function () {
    function ProductsPageModule() {
    }
    ProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"], _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_7__["EditProductComponent"]],
            entryComponents: [_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_7__["EditProductComponent"]]
        })
    ], ProductsPageModule);
    return ProductsPageModule;
}());



/***/ }),

/***/ "./src/app/products/products.page.html":
/*!*********************************************!*\
  !*** ./src/app/products/products.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>Products</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"warning\" shape=\"round\" fill=\"outline\" (click)=\"presentEditProductModal()\">\n        Add Product\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar color=\"warning\" debounce=\"1000\" placeholder=\"Search Products\" [(ngModel)]=\"searchText\"\n    (ionChange)=\"search()\" animated showCancelButton>\n  </ion-searchbar>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col><div><b>Id</b></div></ion-col>\n      <ion-col><div><b>Product</b></div></ion-col>\n      <ion-col><div><b>Rate</b></div></ion-col>\n      <ion-col><div><b>Unit</b></div></ion-col>\n      <ion-col><div><b>Action</b></div></ion-col>\n    </ion-row>\n\n    <ion-row *ngFor=\"let product of products; let i = index;\">\n      <ion-col><div>{{i+1}}</div></ion-col>\n      <ion-col><div>{{product.name}}</div></ion-col>\n      <ion-col><div>{{product.rate}}</div></ion-col>\n      <ion-col><div>{{product.unit}}</div></ion-col>\n      <ion-col>\n        <div>\n          <ion-button color=\"primary\" shape=\"round\" fill=\"outline\" (click)=\"presentEditProductModal(product)\">\n            <ion-icon name=\"create\"></ion-icon>\n          </ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/products/products.page.scss":
/*!*********************************************!*\
  !*** ./src/app/products/products.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/products/products.page.ts":
/*!*******************************************!*\
  !*** ./src/app/products/products.page.ts ***!
  \*******************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-product/edit-product.component */ "./src/app/products/edit-product/edit-product.component.ts");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/product.service */ "./src/app/shared/services/product.service.ts");





var ProductsPage = /** @class */ (function () {
    function ProductsPage(_modalController, _productService) {
        this._modalController = _modalController;
        this._productService = _productService;
        this.subscriptions = [];
        this.searchText = '';
        this.products = [];
    }
    ProductsPage.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsPage.prototype.getProducts = function () {
        var _this = this;
        this.subscriptions.push(this._productService.getProducts().subscribe(function (res) {
            console.log(res);
            _this.products = res;
        }));
    };
    ProductsPage.prototype.presentEditProductModal = function (product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modalController.create({
                            component: _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_3__["EditProductComponent"],
                            componentProps: { product: product },
                            backdropDismiss: false
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            _this.getProducts();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductsPage.prototype.search = function () {
        console.log(this.searchText);
    };
    ProductsPage.prototype.ngOnDestroy = function () {
    };
    ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.page.html */ "./src/app/products/products.page.html"),
            styles: [__webpack_require__(/*! ./products.page.scss */ "./src/app/products/products.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
    ], ProductsPage);
    return ProductsPage;
}());



/***/ }),

/***/ "./src/app/shared/services/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var ProductService = /** @class */ (function () {
    function ProductService(http, _loadingController) {
        this.http = http;
        this._loadingController = _loadingController;
    }
    ProductService.prototype.getProducts = function (id) {
        var _this = this;
        if (id === void 0) { id = 0; }
        var loader = this.getLoader();
        this.presentLoading(loader);
        return this.http.get("https://cpsm.azurewebsites.net/public/index.php/get/product/" + id)
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
    ProductService.prototype.addProduct = function (product) {
        var _this = this;
        var loader = this.getLoader();
        this.presentLoading(loader);
        return this.http.post("https://cpsm.azurewebsites.net/public/index.php/post/product", product)
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
    ProductService.prototype.updateProduct = function (product) {
        var _this = this;
        var loader = this.getLoader();
        this.presentLoading(loader);
        return this.http.put("https://cpsm.azurewebsites.net/public/index.php/put/product/" + product.product_id, product)
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
    ProductService.prototype.getLoader = function () {
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
    ProductService.prototype.presentLoading = function (loader) {
        loader.then(function (l) {
            l.present();
        });
    };
    ProductService.prototype.dismissLoading = function (loader) {
        loader.then(function (l) {
            l.dismiss();
        });
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
    ], ProductService);
    return ProductService;
}());



/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map