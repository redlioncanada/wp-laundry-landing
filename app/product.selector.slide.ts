import {bootstrap}    from 'angular2/platform/browser'
import {Component, Input, Inject, ElementRef} from 'angular2/core'
import {LearnMoreButton} from './landing.learn-more.button'


@Component({
    selector: 'product-slide',
    template: `
        <div class="rl-wp-lndng-side" id="{{fridgeId}}">
            <div class="rl-wp-lndng-prodLeft">
            <div class="rl-wp-lndng-fridge"><img class="{{fridge}}" src="{{fridge}}" alt="{{fridgeAlt}}" /></div>
            </div>
           <div class="rl-wp-lndng-prodRight">
           <div class="rl-wp-lndng-fridge-title mobile" [innerHTML]="fridgeTitle"></div>
            <div class="rl-wp-lndng-fridge-title" [innerHTML]="fridgeTitle"></div>
            <div class="rl-wp-lndng-fridge-desc">{{fridgeDescription}}</div>
            <learn-more-button [analytics]="analytics" [link]="fridgeUrl" [text]="ctaText"></learn-more-button>
            </div>
          </div>
    `,
    directives: [LearnMoreButton]
})
export class ProductSlide {
    // This is where the animation code goes for each slide
    @Input() fridge
    @Input() fridgeTitle
    @Input() fridgeDescription
    @Input() fridgeUrl
    @Input() fridgeId
    @Input() selected
    @Input() ctaText
    @Input() fridgeAlt
}