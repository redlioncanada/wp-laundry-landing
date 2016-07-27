System.register(['angular2/core', './analytics.directive.js'], function(exports_1, context_1) {
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
    var core_1, analytics_directive_1;
    var LearnMoreButton;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (analytics_directive_1_1) {
                analytics_directive_1 = analytics_directive_1_1;
            }],
        execute: function() {
            LearnMoreButton = (function () {
                function LearnMoreButton() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LearnMoreButton.prototype, "link", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LearnMoreButton.prototype, "text", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LearnMoreButton.prototype, "analytics", void 0);
                LearnMoreButton = __decorate([
                    core_1.Component({
                        selector: 'learn-more-button',
                        template: "\n    \t<a href=\"{{link}}\" analyticsOn=\"click\" analyticsCategory=\"{{analytics.category}}\" analyticsAction=\"{{analytics.action}}\" analyticsLabel=\"{{analytics.label}}\" target=\"_blank\"><div class=\"learn-more-button {{arrow ? 'learn-more-arrow': ''}}\">\n\t\t\t<p>{{text}} &gt;</p>\n\t\t</div></a>\n    ",
                        directives: [analytics_directive_1.AnalyticsServiceOn]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LearnMoreButton);
                return LearnMoreButton;
            }());
            exports_1("LearnMoreButton", LearnMoreButton);
        }
    }
});
//# sourceMappingURL=landing.learn-more.button.js.map