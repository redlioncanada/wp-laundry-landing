import {bootstrap} from 'angular2/platform/browser'
import {Component, Input, Inject, ElementRef} from 'angular2/core'

declare var $: JQueryStatic;

@Component({
    selector: 'more-features-feature',
    template: `
    	<a *ngIf="!!link" href="{{link}}" target="_blank"><div>
			<div>
				<div class="hover">
					<div *ngIf="text" class="text-container">
						<div class="text-container-cell">
							<p class="text">{{text}}</p>
							<p class="cta" *ngIf="cta">{{cta}}</p>
						</div>
					</div>
					<img src="{{image}}" alt="{{alt}}"/>
				</div>
			</div>
			<p class="bottom-text" [innerHTML]="title"></p>
		</div></a>
		<div *ngIf="!link">
			<div>
				<div class="hover">
					<div *ngIf="text" class="text-container">
						<div class="text-container-cell">
							<p class="text">{{text}}</p>
							<p class="cta" *ngIf="cta">{{cta}}</p>
						</div>
					</div>
					<img src="{{image}}" alt="{{alt}}"/>
				</div>
			</div>
			<p class="bottom-text" [innerHTML]="title"></p>
		</div>
    `

})
export class MoreFeaturesFeature {
    @Input() image
    @Input() title
    @Input() link
    @Input() text
    @Input() cta
    @Input() alt
}