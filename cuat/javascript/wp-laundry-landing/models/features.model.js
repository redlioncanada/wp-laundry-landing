System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FeatureModel;
    return {
        setters:[],
        execute: function() {
            FeatureModel = (function () {
                function FeatureModel(btnIcon, btnTitle, btnRollOverCopy, btnRollOverCTA, btnLink, btnType, btnAlt, analytics) {
                    if (btnIcon === void 0) { btnIcon = ""; }
                    if (btnTitle === void 0) { btnTitle = ""; }
                    if (btnRollOverCopy === void 0) { btnRollOverCopy = ""; }
                    if (btnRollOverCTA === void 0) { btnRollOverCTA = ""; }
                    if (btnLink === void 0) { btnLink = ""; }
                    if (btnType === void 0) { btnType = ""; }
                    if (btnAlt === void 0) { btnAlt = ""; }
                    if (analytics === void 0) { analytics = {}; }
                    this.btnIcon = btnIcon;
                    this.btnTitle = btnTitle;
                    this.btnRollOverCopy = btnRollOverCopy;
                    this.btnRollOverCTA = btnRollOverCTA;
                    this.btnLink = btnLink;
                    this.btnType = btnType;
                    this.btnAlt = btnAlt;
                    this.analytics = analytics;
                }
                return FeatureModel;
            }());
            exports_1("FeatureModel", FeatureModel);
        }
    }
});
//# sourceMappingURL=features.model.js.map