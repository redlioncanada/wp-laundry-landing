import {Component, Input, ElementRef} from 'angular2/core'
import {LoggerService} from './services/logger.service'
import {VideoPlayerVideo} from './landing.video-player.video'

declare var $: JQueryStatic

@Component({
	selector: 'videoplayer-player',
    template: `
    	<div (window:resize)="onResize($event,this)">
			<ul>
				<li *ngFor="#video of data; #i=index" class="{{currentId !== i ? 'hide' : 'show'}}">
					<videoplayer-video [image]="video.image" [id]="video.id" [selected]="currentId == i" [width]="video.width" [height]="video.height" [alt]="video.thumbAlt"></videoplayer-video>
				</li>
			</ul>
		    <div class="wp-cooking-landing-videoplayer-text">
		    	<h2 class="wp-cooking-landing-videoplayer-title" [innerHTML]="data[currentId].title">
		    	</h2>
		    	<div class="wp-cooking-landing-videoplayer-description" [innerHTML]="!!data[currentId].desc ? data[currentId].desc : ''">
		        </div>
		    </div>
		</div>
    `,
	directives: [VideoPlayerVideo]
})
export class VideoPlayerPlayer {
	@Input() data
	@Input() currentId

	private element
	private aspect

	constructor(private logger: LoggerService, private elementRef: ElementRef) {
		this.aspect = 16 / 9
		this.element = elementRef.nativeElement
	}

	ngAfterViewInit() {
		this.onResize(undefined, this)
	}

	onResize(evt, self) {
		if (!self) self = this

		//make sure video maintains it's aspect ratio
		let parent = $(this.element).find('> div')
		let width = $(parent).width()
		$(this.element).find('iframe').css('height', width / self.aspect)
	}
}