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
    var MoreFeaturesFeature;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MoreFeaturesFeature = (function () {
                function MoreFeaturesFeature() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MoreFeaturesFeature.prototype, "image", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MoreFeaturesFeature.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MoreFeaturesFeature.prototype, "link", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MoreFeaturesFeature.prototype, "text", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MoreFeaturesFeature.prototype, "cta", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MoreFeaturesFeature.prototype, "alt", void 0);
                MoreFeaturesFeature = __decorate([
                    core_1.Component({
                        selector: 'more-features-feature',
                        template: "\n    \t<a *ngIf=\"!!link\" href=\"{{link}}\" target=\"_blank\"><div>\n\t\t\t<div>\n\t\t\t\t<div class=\"hover\">\n\t\t\t\t\t<div *ngIf=\"text\" class=\"text-container\">\n\t\t\t\t\t\t<div class=\"text-container-cell\">\n\t\t\t\t\t\t\t<p class=\"text\">{{text}}</p>\n\t\t\t\t\t\t\t<p class=\"cta\" *ngIf=\"cta\">{{cta}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<img src=\"{{image}}\" alt=\"{{alt}}\"/>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p class=\"bottom-text\" [innerHTML]=\"title\"></p>\n\t\t</div></a>\n\t\t<div *ngIf=\"!link\">\n\t\t\t<div>\n\t\t\t\t<div class=\"hover\">\n\t\t\t\t\t<div *ngIf=\"text\" class=\"text-container\">\n\t\t\t\t\t\t<div class=\"text-container-cell\">\n\t\t\t\t\t\t\t<p class=\"text\">{{text}}</p>\n\t\t\t\t\t\t\t<p class=\"cta\" *ngIf=\"cta\">{{cta}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<img src=\"{{image}}\" alt=\"{{alt}}\"/>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p class=\"bottom-text\" [innerHTML]=\"title\"></p>\n\t\t</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MoreFeaturesFeature);
                return MoreFeaturesFeature;
            }());
            exports_1("MoreFeaturesFeature", MoreFeaturesFeature);
        }
    }
});
//# sourceMappingURL=landing.morefeatures.feature.js.map