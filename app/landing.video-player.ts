import {Component, ElementRef} from 'angular2/core'
import {VideoPlayerSelector} from './landing.video-player.selector'
import {VideoPlayerPlayer} from './landing.video-player.player'
import {LoggerService} from './services/logger.service'
import {AppDataService} from './services/appdata.service'
import {BreakpointService} from './services/breakpoint.service'

declare var $: JQueryStatic;

@Component({
    selector: 'videoplayer',
    template: `
    	<h2 (window:resize)="onResize()" class="{{!enabled ? 'hide': ''}}">{{title}}</h2>
		<videoplayer-player class="{{!enabled ? 'hide': ''}}" [data]="videos" [currentId]="currentId"></videoplayer-player>
		<ul class="{{!enabled ? 'hide': ''}}">
			<li *ngFor="#video of videos; #i=index">
				<videoplayer-selector (selectedVideo)="select($event)" [data]="video" [id]="i" [selected]="currentId == i"></videoplayer-selector>
			</li>
		</ul>
    `,
	directives: [VideoPlayerPlayer, VideoPlayerSelector]
})
export class VideoPlayer {
	public title
	public videos
	public currentId = 0
	private enabled: boolean

	private _lastHeight = -1
	private _resizeInterval

	private breakpointChanged

	constructor(private appdata: AppDataService, private logger: LoggerService, private elementRef: ElementRef) {
		this.enabled = true
		var data = appdata.get()
		this.enabled = data.videoplayer.enabled
		this.title = data.videoplayer.title
		this.videos = data.videoplayer.videos
	}

	select(id) {
		this.currentId = id
	}

	ngAfterViewInit() {
		let self = this
		this._resizeInterval = setInterval(function() { self.onResize.call(self) }, 250)
		this.onResize()
	}

	onResize() {
		//make sure the second image is the same height as the others
		var element = this.elementRef.nativeElement
		var height = $(element).find('videoplayer-selector img').first().height()
		$(element).find('videoplayer-selector img').eq(1).css('height', height)
		if (this._lastHeight == height && height != 0) clearInterval(this._resizeInterval)
		this._lastHeight = height
	}
}