import {Component} from 'angular2/core'
import {ProductSlides} from './product.selector.slides'
import {ProductSelectorNav} from './product.selector.nav'
import {AppDataService} from './services/appdata.service'
import {ProductModel} from './models/products.model'

@Component({
    selector: 'product-selector',
    template: `
        <div class="row" class="{{!enabled ? 'hide' : ''}}">
            <div>
                <h2 class="title">{{title}}</h2>
            </div>
            <product-slides [products]="slidesProducts" [selectedProduct]="selectedProduct" (isAnimating)="isAnimating($event)"></product-slides>
            <product-selector-nav [products]="selectorProducts" [selectedProduct]="selectedProduct" (productSelected)="productSelected($event)"></product-selector-nav>
        </div>
    `,
    directives: [ProductSlides, ProductSelectorNav],
})
export class ProductSelector {
    public selectorProducts: Array<ProductModel>
    public slidesProducts: Array<ProductModel>
    public selectedProduct: ProductModel;
    public animating: Boolean;
    private title: string;
    private enabled: boolean

    constructor(private appdata:AppDataService) {
        this.enabled = true
        var data = appdata.get()

        this.enabled = data.productselector.enabled
        this.title = data.productselector.title
        this.selectorProducts = new Array<ProductModel>()
        this.slidesProducts = new Array<ProductModel>()
        for (var i in data.productselector.products) {
            var product = data.productselector.products[i]

            this.selectorProducts.push(
                new ProductModel(
                    product.image,
                    product.thumb,
                    product.title,
                    product.desc,
                    product.link,
                    product.id,
                    product.ctaText,
                    product.alt,
                    product.analytics
                )
            )

            this.slidesProducts.push(
                new ProductModel(
                    product.image,
                    product.thumb,
                    product.title,
                    product.desc,
                    product.link,
                    product.id,
                    product.ctaText,
                    product.alt,
                    {
                        category: product.analytics.category,
                        action: product.analytics.action,
                        label: product.analytics.label + ' ' + product.analytics.learnMore
                    }
                )
            )
        }

        this.selectedProduct = this.slidesProducts[0];
        this.animating = false;
    }

    ngOnChanges(changes) {
        if ("selectedProduct" in changes) {
            console.log('product selector changed product: ',changes.selectedProduct.currentValue)
        }
    }

    //@Output on product.selector.nav
    productSelected(product) {
        if (!this.animating) {
            this.selectedProduct = product;
            console.log('product.selector got new product: ' + product.prodId)
        }
    }

    //@Output on product.selector.slides
    isAnimating(animating) {
        this.animating = animating;
    }
}