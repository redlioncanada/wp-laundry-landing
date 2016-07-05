System.register(['angular2/core', './landing.video-player.selector', './landing.video-player.player', './services/logger.service', './services/appdata.service'], function(exports_1, context_1) {
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
    var core_1, landing_video_player_selector_1, landing_video_player_player_1, logger_service_1, appdata_service_1;
    var VideoPlayer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (landing_video_player_selector_1_1) {
                landing_video_player_selector_1 = landing_video_player_selector_1_1;
            },
            function (landing_video_player_player_1_1) {
                landing_video_player_player_1 = landing_video_player_player_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (appdata_service_1_1) {
                appdata_service_1 = appdata_service_1_1;
            }],
        execute: function() {
            VideoPlayer = (function () {
                function VideoPlayer(appdata, logger, elementRef) {
                    this.appdata = appdata;
                    this.logger = logger;
                    this.elementRef = elementRef;
                    this.currentId = 0;
                    this._lastHeight = -1;
                    this.enabled = true;
                    var data = appdata.get();
                    this.enabled = data.videoplayer.enabled;
                    this.title = data.videoplayer.title;
                    this.videos = data.videoplayer.videos;
                }
                VideoPlayer.prototype.select = function (id) {
                    this.currentId = id;
                };
                VideoPlayer.prototype.ngAfterViewInit = function () {
                    var self = this;
                    this._resizeInterval = setInterval(function () { self.onResize.call(self); }, 250);
                    this.onResize();
                };
                VideoPlayer.prototype.onResize = function () {
                    //make sure the second image is the same height as the others
                    var element = this.elementRef.nativeElement;
                    var height = $(element).find('videoplayer-selector img').first().height();
                    $(element).find('videoplayer-selector img').eq(1).css('height', height);
                    if (this._lastHeight == height && height != 0)
                        clearInterval(this._resizeInterval);
                    this._lastHeight = height;
                };
                VideoPlayer = __decorate([
                    core_1.Component({
                        selector: 'videoplayer',
                        template: "\n    \t<h2 (window:resize)=\"onResize()\" class=\"{{!enabled ? 'hide': ''}}\">{{title}}</h2>\n\t\t<videoplayer-player class=\"{{!enabled ? 'hide': ''}}\" [data]=\"videos\" [currentId]=\"currentId\"></videoplayer-player>\n\t\t<ul class=\"{{!enabled ? 'hide': ''}}\">\n\t\t\t<li *ngFor=\"#video of videos; #i=index\">\n\t\t\t\t<videoplayer-selector (selectedVideo)=\"select($event)\" [data]=\"video\" [id]=\"i\" [selected]=\"currentId == i\"></videoplayer-selector>\n\t\t\t</li>\n\t\t</ul>\n    ",
                        directives: [landing_video_player_player_1.VideoPlayerPlayer, landing_video_player_selector_1.VideoPlayerSelector]
                    }), 
                    __metadata('design:paramtypes', [appdata_service_1.AppDataService, logger_service_1.LoggerService, core_1.ElementRef])
                ], VideoPlayer);
                return VideoPlayer;
            }());
            exports_1("VideoPlayer", VideoPlayer);
        }
    }
});
//# sourceMappingURL=landing.video-player.js.map