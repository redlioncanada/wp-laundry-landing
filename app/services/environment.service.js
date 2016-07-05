System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var EnvironmentService, modes;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EnvironmentService = (function () {
                function EnvironmentService() {
                    this.hosts = ['localhost', '127.0.0.1'];
                }
                EnvironmentService.prototype.afterViewInit = function () {
                    this.window = window;
                    if (this.hosts.indexOf(this.window.location.hostname) > -1) {
                        this._environment = modes.DEVELOPMENT;
                    }
                    else {
                        this._environment = modes.PRODUCTION;
                    }
                };
                EnvironmentService.prototype.setDev = function () { this._environment = modes.DEVELOPMENT; };
                EnvironmentService.prototype.setDevelopment = function () { this.setDev(); };
                EnvironmentService.prototype.isDev = function () { return this._environment == modes.DEVELOPMENT; };
                EnvironmentService.prototype.isDevelopment = function () { return this.isDev(); };
                EnvironmentService.prototype.setProd = function () { this._environment = modes.PRODUCTION; };
                EnvironmentService.prototype.setProduction = function () { this.setProd(); };
                EnvironmentService.prototype.isProd = function () { return this._environment == modes.PRODUCTION; };
                EnvironmentService.prototype.isProduction = function () { return this.isProd(); };
                EnvironmentService.prototype.environment = function () { return this._environment; };
                EnvironmentService.prototype.env = function () { return this.environment(); };
                EnvironmentService.prototype.mode = function () { return this.environment(); };
                EnvironmentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], EnvironmentService);
                return EnvironmentService;
            }());
            exports_1("EnvironmentService", EnvironmentService);
            modes = (function () {
                function modes() {
                }
                Object.defineProperty(modes, "DEVELOPMENT", {
                    get: function () { return "dev"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(modes, "PRODUCTION", {
                    get: function () { return "prod"; },
                    enumerable: true,
                    configurable: true
                });
                return modes;
            }());
        }
    }
});
//# sourceMappingURL=environment.service.js.map