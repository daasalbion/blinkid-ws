webpackJsonp([1,4],{

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    name: 'production',
    microblinkApiEndpoint: 'https://api.microblink.com',
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4____ = __webpack_require__(352);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppContainersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppContainersModule = (function () {
    function AppContainersModule() {
    }
    AppContainersModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4____["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4____["b" /* DemoComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppContainersModule);
    return AppContainersModule;
}());
//# sourceMappingURL=app-containers.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__(554);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_demo_component__ = __webpack_require__(553);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__demo_demo_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(229);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MicroBlinkService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ENDPOINT = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].microblinkApiEndpoint;
var AUTHORIZATION = 'Bearer YzQyMjMyYTNlYWZjNDUyODk3NzZjNDI2YjBhOTU2YTI1YmZlNDU1My1jODE0LTRkYWMtYWI4YS0yMjdlYzM0OWNhOWU=';
var HEADERS = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
HEADERS.append('Authorization', AUTHORIZATION);
HEADERS.append('Content-Type', 'application/json');
var MicroBlinkService = (function () {
    function MicroBlinkService(http) {
        this.http = http;
    }
    /**
     * Validate File object this is recommended to use before calling any API endpoint to expose better UX on UI
     * @param file is File object taken from user's input
     * @return flag about file validity
     */
    MicroBlinkService.prototype.isInputFileValid = function (inputFile) {
        if (inputFile.type === 'image/jpeg' || inputFile.type === 'image/png') {
            return true;
        }
        return false;
    };
    /**
     * Execute API for specified recognizerType
     * @param recognizerType is MicroBlink recognizer type
     * @param imageBase64 is base64 encoded image
     */
    MicroBlinkService.prototype.execute = function (recognizerType, imageBase64) {
        var body = {
            recognizerType: recognizerType,
            imageBase64: imageBase64
        };
        var options = {
            headers: HEADERS
        };
        return this.http.post(ENDPOINT + '/api/execute', body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    MicroBlinkService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], MicroBlinkService);
    return MicroBlinkService;
    var _a;
}());
//# sourceMappingURL=microblink.service.js.map

/***/ }),

/***/ 436:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 436;


/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(229);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ui_router_ng2__ = __webpack_require__(900);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_app_containers_module__ = __webpack_require__(351);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// States
var homeState = {
    name: 'home',
    url: '/',
    component: __WEBPACK_IMPORTED_MODULE_2__containers__["a" /* HomeComponent */]
};
var demoState = {
    name: 'demo',
    url: '/demo',
    component: __WEBPACK_IMPORTED_MODULE_2__containers__["b" /* DemoComponent */]
};
// END - States
var routes = {
    states: [
        homeState,
        demoState
    ],
    useHash: false,
    otherwise: {
        state: homeState.name
    }
};
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__containers_app_containers_module__["a" /* AppContainersModule */],
                __WEBPACK_IMPORTED_MODULE_1_ui_router_ng2__["UIRouterModule"].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1_ui_router_ng2__["UIRouterModule"]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_logger_ng2_logger__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(229);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent() {
        this.logger = __WEBPACK_IMPORTED_MODULE_1_ng2_logger_ng2_logger__["a" /* Log */].create('AppComponent');
        if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
            __WEBPACK_IMPORTED_MODULE_1_ng2_logger_ng2_logger__["a" /* Log */].setProductionMode();
            __WEBPACK_IMPORTED_MODULE_1_ng2_logger_ng2_logger__["a" /* Log */].onlyLevel(__WEBPACK_IMPORTED_MODULE_1_ng2_logger_ng2_logger__["b" /* Level */].ERROR, __WEBPACK_IMPORTED_MODULE_1_ng2_logger_ng2_logger__["b" /* Level */].WARN);
        }
        this.logger.i('environment=' + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].name);
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(617),
            styles: [__webpack_require__(610)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_app_services_module__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_app_containers_module__ = __webpack_require__(351);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__containers_app_containers_module__["a" /* AppContainersModule */],
                __WEBPACK_IMPORTED_MODULE_6__services_app_services_module__["a" /* AppServicesModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_logger_ng2_logger__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_helpers__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_microblink_microblink_service__ = __webpack_require__(353);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DemoComponent = (function () {
    function DemoComponent(microblinkService) {
        var _this = this;
        this.microblinkService = microblinkService;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({});
        this.hasBaseDropZoneOver = false;
        /**
         * When file is added to uploader.queue
         */
        this.onAfterAddingFile = function (fileItem) {
            // 1. extract File object
            var inputFile = fileItem._file;
            // 2. before execution inspect is file valid
            _this.isInputFileValid = _this.microblinkService.isInputFileValid(inputFile);
            // 3. abort execution if file is not valid
            if (!_this.isInputFileValid) {
                _this.logger.er('invalidInputFile', inputFile);
                _this.logger.i('abort microblink.execute');
                return;
            }
            // 4. reset input field
            _this.selectedFiles.nativeElement.value = '';
            // 5. start execution
            _this.isExecutionInProgress = true;
            // 6. convert file (image) to base64
            __WEBPACK_IMPORTED_MODULE_3__helpers_helpers__["a" /* Helpers */].fileToBase64(inputFile).subscribe(function (imageBase64) {
                // 7. remove file from queue
                _this.uploader.clearQueue();
                // 8. set recognizer type
                var recognizerType = 'MRTD';
                // 9. execute MicroBlink API
                _this.microblinkService.execute(recognizerType, imageBase64).subscribe(function (microblinkResult) {
                    // 10. extract results
                    _this.logger.i('microblinkResult', microblinkResult);
                    _this.microblinkResult = microblinkResult;
                    _this.isExecutionInProgress = false;
                });
            });
        };
        this.logger = __WEBPACK_IMPORTED_MODULE_2_ng2_logger_ng2_logger__["a" /* Log */].create('DemoComponent');
        this.uploader.onAfterAddingFile = this.onAfterAddingFile;
    }
    DemoComponent.prototype.ngOnInit = function () {
    };
    /**
     * File over drop base detector
     * @param e is true when file is over base box
     */
    DemoComponent.prototype.fileOverDropBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('selectedFiles'), 
        __metadata('design:type', Object)
    ], DemoComponent.prototype, "selectedFiles", void 0);
    DemoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-demo',
            template: __webpack_require__(618),
            styles: [__webpack_require__(611)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_microblink_microblink_service__["a" /* MicroBlinkService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_microblink_microblink_service__["a" /* MicroBlinkService */]) === 'function' && _a) || Object])
    ], DemoComponent);
    return DemoComponent;
    var _a;
}());
//# sourceMappingURL=demo.component.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(619),
            styles: [__webpack_require__(612)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helpers; });

var Helpers = (function () {
    function Helpers() {
    }
    Helpers.fileToBase64 = function (file) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].create(function (observer) {
            var reader = new FileReader();
            reader.onload = function () {
                observer.next(reader.result);
                observer.complete();
            };
            reader.readAsDataURL(file);
        });
    };
    return Helpers;
}());
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__microblink_microblink_service__ = __webpack_require__(353);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppServicesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppServicesModule = (function () {
    function AppServicesModule() {
    }
    AppServicesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_2__microblink_microblink_service__["a" /* MicroBlinkService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppServicesModule);
    return AppServicesModule;
}());
//# sourceMappingURL=app-services.module.js.map

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(103)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(103)();
// imports


// module
exports.push([module.i, "div.base-drop-zone {\n  border: dotted 3px lightgray;\n  text-align: center; }\n\ndiv.nv-file-over {\n  border: dotted 3px red; }\n\ninput[type=\"file\"] {\n  display: none !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(103)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-static-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\"\n                href=\"\">BlinkID WS</a>\n        </div>\n    </div>\n    <!-- /.container-fluid -->\n</nav>\n\n<div class=\"container\">\n    <ui-view></ui-view>\n</div>"

/***/ }),

/***/ 618:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n    <div class=\"col-lg-6 col-lg-offset-3\">\n        <h3>DEMO: ID card with MRTD</h3>\n\n        <div ng2FileDrop\n            [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n            (fileOver)=\"fileOverDropBase($event)\"\n            [uploader]=\"uploader\"\n            class=\"well base-drop-zone\">\n            <p>DRAG &amp; DROP</p>\n            <p>OR</p>\n\n            <button type=\"button\"\n                (click)=\"selectedFiles.click()\"\n                class=\"btn btn-default\">SELECT FILE</button>\n\n            <input type=\"file\"\n                #selectedFiles\n                ng2FileSelect\n                accept=\"image/jpeg,image/png\"\n                [uploader]=\"uploader\" />\n\n        </div>\n    </div>\n\n</div>\n\n<div class=\"row\">\n\n    <div class=\"col-xs-12\">\n\n        <div class=\"well\"\n            [hidden]=\"!isExecutionInProgress\">\n            MicroBlink API is processing your request, please wait for few seconds...\n        </div>\n\n        <div class=\"well\"\n            [hidden]=\"isInputFileValid !== false\">\n            Selected file is not valid, allowed MIME types are image/jpeg and image/png!\n        </div>\n\n        <pre *ngIf=\"!isExecutionInProgress && isInputFileValid && microblinkResult\">{{microblinkResult | json}}</pre>\n\n    </div>\n\n</div>"

/***/ }),

/***/ 619:
/***/ (function(module, exports) {

module.exports = "<p>\n    Welcome to MicroBlink API!\n</p>"

/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(437);


/***/ })

},[910]);
//# sourceMappingURL=main.bundle.js.map