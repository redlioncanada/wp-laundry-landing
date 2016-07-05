System.register(['angular2/core', './logger.service'], function(exports_1, context_1) {
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
    var core_1, logger_service_1;
    var BreakpointService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            BreakpointService = (function () {
                function BreakpointService(logger) {
                    this.logger = logger;
                    this.breakpoints = {};
                    this.widths = {};
                    this.debug = false;
                    this.init = false;
                    this.event$ = new core_1.EventEmitter();
                }
                BreakpointService.prototype.afterViewInit = function () {
                    var self = this;
                    this.window = window;
                    this.window.onresize = function (e) {
                        self.update.call(self, e);
                    };
                    this.update(undefined);
                };
                BreakpointService.prototype.debugMode = function (b) {
                    this.debug = b;
                    if (b)
                        this.logger.log(this, 'Now in debug mode');
                };
                BreakpointService.prototype.is = function (keyword) {
                    return this.breakpoint && 'name' in this.breakpoint && this.breakpoint.name == keyword;
                };
                BreakpointService.prototype.add = function (keyword, width) {
                    if (!(keyword in this.breakpoints) && (!!width)) {
                        var obj = {
                            width: width
                        };
                        this.widths[width] = keyword;
                        this.breakpoints[keyword] = obj;
                    }
                };
                BreakpointService.prototype.remove = function (keyword) {
                    if (keyword in this.breakpoints) {
                        delete this.breakpoints[keyword];
                    }
                    for (var i in this.widths) {
                        if (this.widths[i].name == keyword)
                            delete this.widths[i];
                    }
                };
                BreakpointService.prototype.emit = function () {
                    this.event$.next(this.breakpoint);
                };
                BreakpointService.prototype.update = function (evt) {
                    var window = this.getWindow();
                    for (var curKey in this.widths) {
                        var widthKeys = Object.keys(this.widths);
                        var curObjectKey = widthKeys.indexOf(curKey);
                        var lastKey = widthKeys[curObjectKey - 1];
                        var nextKey = widthKeys[curObjectKey + 1];
                        var lastName = this.widths[lastKey];
                        var curName = this.widths[curKey];
                        var nextName = this.widths[nextKey];
                        var lastWidth = parseInt(lastKey);
                        var curWidth = parseInt(curKey);
                        var nextWidth = parseInt(nextKey);
                        var breakpoint = this.breakpoints[curName];
                        breakpoint.name = curName;
                        if (this.breakpoint && breakpoint.name == this.breakpoint.name)
                            continue;
                        if (!lastKey) {
                            if (window.width <= curWidth) {
                                doEmit.call(this, breakpoint);
                            }
                        }
                        else if (!nextKey) {
                            if (window.width >= curWidth) {
                                doEmit.call(this, breakpoint);
                            }
                        }
                        else {
                            if (window.width > lastWidth && window.width < nextWidth) {
                                doEmit.call(this, breakpoint);
                            }
                        }
                    }
                    this.init = true;
                    function doEmit(b) {
                        this.breakpoint = b;
                        if (this.init)
                            this.emit(b);
                        if (this.debug)
                            this.logger.log(this, b);
                    }
                };
                BreakpointService.prototype.getWindow = function () {
                    var w = this.window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0];
                    return {
                        width: w.innerWidth || e.clientWidth || g.clientWidth,
                        height: w.innerHeight || e.clientHeight || g.clientHeight
                    };
                };
                BreakpointService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], BreakpointService);
                return BreakpointService;
            }());
            exports_1("BreakpointService", BreakpointService);
        }
    }
});
//# sourceMappingURL=breakpoint.service.js.map