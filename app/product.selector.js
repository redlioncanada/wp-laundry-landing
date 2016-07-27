System.register(['angular2/core', './product.selector.slides', './product.selector.nav', './services/appdata.service', './models/products.model'], function(exports_1, context_1) {
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
    var core_1, product_selector_slides_1, product_selector_nav_1, appdata_service_1, products_model_1;
    var ProductSelector;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_selector_slides_1_1) {
                product_selector_slides_1 = product_selector_slides_1_1;
            },
            function (product_selector_nav_1_1) {
                product_selector_nav_1 = product_selector_nav_1_1;
            },
            function (appdata_service_1_1) {
                appdata_service_1 = appdata_service_1_1;
            },
            function (products_model_1_1) {
                products_model_1 = products_model_1_1;
            }],
        execute: function() {
            ProductSelector = (function () {
                function ProductSelector(appdata) {
                    this.appdata = appdata;
                    this.enabled = true;
                    var data = appdata.get();
                    this.enabled = data.productselector.enabled;
                    this.title = data.productselector.title;
                    this.selectorProducts = new Array();
                    this.slidesProducts = new Array();
                    for (var i in data.productselector.products) {
                        var product = data.productselector.products[i];
                        this.selectorProducts.push(new products_model_1.ProductModel(product.image, product.thumb, product.title, product.desc, product.link, product.id, product.ctaText, product.alt, product.analytics));
                        this.slidesProducts.push(new products_model_1.ProductModel(product.image, product.thumb, product.title, product.desc, product.link, product.id, product.ctaText, product.alt, {
                            category: product.analytics.category,
                            action: product.analytics.action,
                            label: product.analytics.label + ' ' + product.analytics.learnMore
                        }));
                    }
                    this.selectedProduct = this.slidesProducts[0];
                    this.animating = false;
                }
                ProductSelector.prototype.ngOnChanges = function (changes) {
                    if ("selectedProduct" in changes) {
                        console.log('product selector changed product: ', changes.selectedProduct.currentValue);
                    }
                };
                //@Output on product.selector.nav
                ProductSelector.prototype.productSelected = function (product) {
                    if (!this.animating) {
                        this.selectedProduct = product;
                        console.log('product.selector got new product: ' + product.prodId);
                    }
                };
                //@Output on product.selector.slides
                ProductSelector.prototype.isAnimating = function (animating) {
                    this.animating = animating;
                };
                ProductSelector = __decorate([
                    core_1.Component({
                        selector: 'product-selector',
                        template: "\n        <div class=\"row\" class=\"{{!enabled ? 'hide' : ''}}\">\n            <div>\n                <h2 class=\"title\">{{title}}</h2>\n            </div>\n            <product-slides [products]=\"slidesProducts\" [selectedProduct]=\"selectedProduct\" (isAnimating)=\"isAnimating($event)\"></product-slides>\n            <product-selector-nav [products]=\"selectorProducts\" [selectedProduct]=\"selectedProduct\" (productSelected)=\"productSelected($event)\"></product-selector-nav>\n        </div>\n    ",
                        directives: [product_selector_slides_1.ProductSlides, product_selector_nav_1.ProductSelectorNav],
                    }), 
                    __metadata('design:paramtypes', [appdata_service_1.AppDataService])
                ], ProductSelector);
                return ProductSelector;
            }());
            exports_1("ProductSelector", ProductSelector);
        }
    }
});
//# sourceMappingURL=product.selector.js.map