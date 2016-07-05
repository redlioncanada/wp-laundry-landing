System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ProductModel;
    return {
        setters:[],
        execute: function() {
            ProductModel = (function () {
                function ProductModel(prodImage, prodThumb, prodName, prodDescription, prodUrl, prodId, ctaText, prodAlt) {
                    if (prodImage === void 0) { prodImage = ""; }
                    if (prodThumb === void 0) { prodThumb = ""; }
                    if (prodName === void 0) { prodName = ""; }
                    if (prodDescription === void 0) { prodDescription = ""; }
                    if (prodUrl === void 0) { prodUrl = ""; }
                    if (prodId === void 0) { prodId = ""; }
                    if (ctaText === void 0) { ctaText = ""; }
                    if (prodAlt === void 0) { prodAlt = ""; }
                    this.prodImage = prodImage;
                    this.prodThumb = prodThumb;
                    this.prodName = prodName;
                    this.prodDescription = prodDescription;
                    this.prodUrl = prodUrl;
                    this.prodId = prodId;
                    this.ctaText = ctaText;
                    this.prodAlt = prodAlt;
                }
                return ProductModel;
            }());
            exports_1("ProductModel", ProductModel);
        }
    }
});
//# sourceMappingURL=products.model.js.map