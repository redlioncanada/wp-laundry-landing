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
    var LoggerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoggerService = (function () {
                function LoggerService() {
                }
                LoggerService.prototype.log = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i - 0] = arguments[_i];
                    }
                    if (typeof args[0] === 'object' && 'arguments' in args[0]) {
                        //passed the caller object
                        var name = args[0].arguments.name;
                        args = args.splice(0, 1);
                        console.log(name, args);
                    }
                    else {
                        if (args.length == 1) {
                            console.log(args[0]);
                        }
                        else {
                            console.log(args);
                        }
                    }
                };
                LoggerService.prototype.error = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i - 0] = arguments[_i];
                    }
                    if (typeof args[0] === 'object' && 'arguments' in args[0]) {
                        //passed the caller object
                        var name = args[0].arguments.name;
                        args = args.splice(0, 1);
                        console.error(name, args);
                    }
                    else {
                        if (args.length == 1) {
                            console.error(args[0]);
                        }
                        else {
                            console.error(args);
                        }
                    }
                };
                LoggerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LoggerService);
                return LoggerService;
            }());
            exports_1("LoggerService", LoggerService);
        }
    }
});
//# sourceMappingURL=logger.service.js.map