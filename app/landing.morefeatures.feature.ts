import {bootstrap} from 'angular2/platform/browser'
import {Component, Input, Inject, ElementRef} from 'angular2/core'
import {AnalyticsServiceOn} from './analytics.directive'

declare var $: JQueryStatic;

@Component({
    selector: 'more-features-feature',
    template: `
    	<a *ngIf="!!link" href="{{link}}" target="_blank" analyticsOn="click" analyticsCategory="{{analytics.category}}" analyticsAction="{{analytics.action}}" analyticsLabel="{{analytics.label}}"><div>
			<div>
				<div class="hover">
					<div *ngIf="text" class="text-container">
						<div class="text-container-cell">
							<p class="text" [innerHTML]="text"></p>
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
				<div class="hover" analyticsOn="mouseover" analyticsCategory="{{analytics.category}}" analyticsAction="{{analytics.action}}" analyticsLabel="{{analytics.label}}">
					<div *ngIf="text" class="text-container">
						<div class="text-container-cell">
							<p class="text" [innerHTML]="text"></p>
							<p class="cta" *ngIf="cta">{{cta}}</p>
						</div>
					</div>
					<img src="{{image}}" alt="{{alt}}"/>
				</div>
			</div>
			<p class="bottom-text" [innerHTML]="title"></p>
		</div>
    `,
    directives: [AnalyticsServiceOn]
})
export class MoreFeaturesFeature {
    @Input() image
    @Input() title
    @Input() link
    @Input() text
    @Input() cta
    @Input() alt
    @Input() analytics
}