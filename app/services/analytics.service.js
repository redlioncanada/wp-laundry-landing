System.register(['angular2/core', './logger.service', './environment.service'], function(exports_1, context_1) {
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
    var core_1, logger_service_1, environment_service_1;
    var AnalyticsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (environment_service_1_1) {
                environment_service_1 = environment_service_1_1;
            }],
        execute: function() {
            AnalyticsService = (function () {
                function AnalyticsService(logger, env) {
                    this.logger = logger;
                    this.env = env;
                    this.debug = false;
                    this.enabled = false;
                    this.bindings = [];
                    this.createGAObject();
                }
                AnalyticsService.prototype.afterViewInit = function () {
                    if (!this.enabled)
                        this.enabled = this.gaObjectExists();
                };
                AnalyticsService.prototype.sendEvent = function (props) {
                    props = this.fillBindings(props);
                    if (this.propsAreEmpty(props)) {
                        this.logger.error(this, "ignored a " + props.eventType + " event because all of it's properties are empty!");
                        return;
                    }
                    if (this.debug) {
                        this.logger.log(this, "got a " + props.eventType + " event, c:" + props.category + ", a:" + props.action + ", l:" + props.label);
                    }
                    else {
                        if (this.enabled) {
                            if (!('category' in props && props.category)) {
                                this.logger.error(this, "ignored a " + props.eventType + " event because category is undefined!");
                            }
                            else if (!('action' in props && props.action)) {
                                this.logger.error(this, "ignored a " + props.eventType + " event because action is undefined!");
                            }
                            else if (!('label' in props && props.label)) {
                                // this.logger.error(this, `ignored a ${props.eventType} event because label is undefined!`)
                                ga('send', 'event', props.category, props.action);
                            }
                            else {
                                ga('send', 'event', props.category, props.action, props.label);
                            }
                        }
                        else {
                            this.logger.error(this, "ignored a " + props.eventType + " event with the name " + props.action + " because no UA code has been specified!");
                        }
                    }
                };
                AnalyticsService.prototype.setUA = function (ua) {
                    this.ua = ua;
                    if (this.gaObjectExists()) {
                        ga('create', this.ua, 'auto');
                        this.enabled = true;
                        this.logger.log(this, "Created an analytics instance with code " + this.ua);
                    }
                };
                AnalyticsService.prototype.bind = function (keyword, fn) {
                    if (typeof keyword == 'string') {
                        if (typeof fn !== 'function')
                            return;
                        this.bindings.push({ 'keyword': keyword, 'function': fn });
                    }
                    else if (typeof keyword == 'object') {
                        for (var k in keyword) {
                            this.bind(k, keyword[k]);
                        }
                    }
                };
                AnalyticsService.prototype.debugMode = function (val) {
                    if (val)
                        this.logger.log(this, "Now in debug mode");
                    this.debug = val;
                };
                AnalyticsService.prototype.propsAreEmpty = function (props) {
                    if (Object.keys(props).length == 1)
                        return true;
                    for (var i in props) {
                        if (i == 'eventType')
                            continue;
                        if (typeof props[i] === 'string' && props[i].length)
                            return false;
                    }
                    return true;
                };
                AnalyticsService.prototype.gaObjectExists = function () {
                    return window && ('ga' in window) && window['ga'] && typeof window['ga'] !== 'undefined';
                };
                AnalyticsService.prototype.createGAObject = function () {
                    (function (i, s, o, g, r, a, m) {
                        i['GoogleAnalyticsObject'] = r;
                        i[r] = i[r] || function () {
                            (i[r].q = i[r].q || []).push(arguments);
                        }, i[r].l = 1 * new Date();
                        a = s.createElement(o),
                            m = s.getElementsByTagName(o)[0];
                        a.async = 1;
                        a.src = g;
                        m.parentNode.insertBefore(a, m);
                    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga', undefined, undefined);
                };
                AnalyticsService.prototype.fillBindings = function (arr) {
                    for (var i in arr) {
                        arr[i] = this.fillBinding(arr[i]);
                    }
                    return arr;
                };
                AnalyticsService.prototype.fillBinding = function (str) {
                    if (!str || typeof str === 'undefined' || !str.length)
                        return false;
                    for (var i in this.bindings) {
                        if (str.indexOf("@" + this.bindings[i].keyword) > -1) {
                            //matched keyword
                            var replace = this.bindings[i]['function'].call(this, str);
                            str = str.replace("@" + this.bindings[i].keyword, replace);
                            if (!replace)
                                this.logger.log(this, this.bindings[i].keyword + " bind callback returned an empty string");
                        }
                    }
                    if (str.indexOf('@') > -1) {
                        this.logger.error(this, "unrecognized binding in " + str + ", ignoring");
                        return false;
                    }
                    return str;
                };
                AnalyticsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService, environment_service_1.EnvironmentService])
                ], AnalyticsService);
                return AnalyticsService;
            }());
            exports_1("AnalyticsService", AnalyticsService);
        }
    }
});
//# sourceMappingURL=analytics.service.js.map