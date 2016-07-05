System.register(['angular2/core', './services/appdata.service'], function(exports_1, context_1) {
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
    var core_1, appdata_service_1;
    var AppMasthead;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (appdata_service_1_1) {
                appdata_service_1 = appdata_service_1_1;
            }],
        execute: function() {
            AppMasthead = (function () {
                function AppMasthead(appdata) {
                    this.appdata = appdata;
                    this.enabled = true;
                    var data = appdata.get();
                    this.enabled = data.masthead.enabled;
                    this.image = data.masthead.image;
                    this.title = data.masthead.title;
                    this.alt = data.masthead.alt;
                }
                AppMasthead = __decorate([
                    core_1.Component({
                        selector: 'masthead',
                        template: "\n    \t<div class=\"{{!enabled ? 'hide': ''}}\">\n\t\t\t<div id=\"wp-landing-masthead\"><img src=\"{{image}}\" alt=\"{{alt}}\" /></div>\n\t\t</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [appdata_service_1.AppDataService])
                ], AppMasthead);
                return AppMasthead;
            }());
            exports_1("AppMasthead", AppMasthead);
        }
    }
});
//# sourceMappingURL=landing.masthead.js.map