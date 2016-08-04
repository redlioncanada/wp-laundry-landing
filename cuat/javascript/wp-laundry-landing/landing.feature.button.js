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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, analytics_directive_1;
    var FeatureButton;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (analytics_directive_1_1) {
                analytics_directive_1 = analytics_directive_1_1;
            }],
        execute: function() {
            FeatureButton = (function () {
                function FeatureButton(elementRef) {
                    this.elementRef = elementRef;
                    this.rootElement = $(this.elementRef.nativeElement);
                }
                FeatureButton.prototype.playAnimations = function (bType) {
                    switch (bType) {
                        case "cart":
                            TweenMax.to(this.target, 2, { delay: 1, css: { transform: "scale(1)" }, ease: Elastic.easeOut });
                            break;
                        case "star":
                            TweenMax.to(this.target, 2, { delay: 1.3, css: { transform: "scale(1)" }, ease: Elastic.easeOut });
                            break;
                        case "magnifier":
                            TweenMax.to(this.target, 2, { delay: 1.6, css: { transform: "scale(1)" }, ease: Elastic.easeOut });
                            break;
                    }
                };
                FeatureButton.prototype.resetAnimations = function () {
                    switch (this.btnType) {
                        case "cart":
                            TweenMax.to(this.target, 0, { delay: 0, opacity: 1, css: { transform: "scale(0.01)" }, ease: Power3.easeOut });
                            break;
                        case "star":
                            TweenMax.to(this.target, 0, { delay: 0, opacity: 1, css: { transform: "scale(0.01)" }, ease: Power3.easeOut });
                            break;
                        case "magnifier":
                            TweenMax.to(this.target, 0, { delay: 0, opacity: 1, css: { transform: "scale(0.01)" }, ease: Power3.easeOut });
                            break;
                    }
                    this.playAnimations(this.btnType);
                };
                FeatureButton.prototype.ngAfterViewInit = function () {
                    this.target = $(this.rootElement).find('img');
                    this.targetWidth = $(this.rootElement).find('img').parent().width();
                    this.targetHeight = $(this.rootElement).find('img').parent().height();
                    this.resetAnimations();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FeatureButton.prototype, "btnIcon", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FeatureButton.prototype, "btnTitle", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FeatureButton.prototype, "btnRollOverCopy", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FeatureButton.prototype, "btnRollOverCTA", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FeatureButton.prototype, "btnLink", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FeatureButton.prototype, "btnType", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FeatureButton.prototype, "btnAlt", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FeatureButton.prototype, "analytics", void 0);
                FeatureButton = __decorate([
                    core_1.Component({
                        selector: 'feature-button',
                        template: "\n        <a href=\"{{btnLink}}\" analyticsOn=\"click\" analyticsCategory=\"{{analytics.category}}\" analyticsAction=\"{{analytics.action}}\" analyticsLabel=\"{{analytics.label}}\">\n            <div class=\"wp-landing-feature-button\" >\n                <div class=\"wp-landing-feature-button-up\">\n                    <div class=\"wp-landing-feature-icon wp-landing-innerBtn\"><img class=\"{{btnType}}\" src={{btnIcon}} alt=\"{{btnAlt}}\" /></div>\n                    <div class=\"wp-landing-feature-title wp-landing-innerBtn\">{{btnTitle}}</div>\n                    <div class=\"wp-landing-feature-rule wp-landing-innerBtn\"></div>\n                    <p class=\"wp-landing-over-copy\">{{btnRollOverCopy}}</p>\n                    <p class=\"wp-landing-over-cta\">{{btnRollOverCTA}}</p>\n                </div>\n            </div>\n        </a>\n    ",
                        directives: [analytics_directive_1.AnalyticsServiceOn]
                    }),
                    __param(0, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], FeatureButton);
                return FeatureButton;
            }());
            exports_1("FeatureButton", FeatureButton);
        }
    }
});
//# sourceMappingURL=landing.feature.button.js.map