System.register(['angular2/core', './services/logger.service', './landing.video-player.video'], function(exports_1, context_1) {
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
    var core_1, logger_service_1, landing_video_player_video_1;
    var VideoPlayerPlayer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (landing_video_player_video_1_1) {
                landing_video_player_video_1 = landing_video_player_video_1_1;
            }],
        execute: function() {
            VideoPlayerPlayer = (function () {
                function VideoPlayerPlayer(logger, elementRef) {
                    this.logger = logger;
                    this.elementRef = elementRef;
                    this.aspect = 16 / 9;
                    this.element = elementRef.nativeElement;
                }
                VideoPlayerPlayer.prototype.ngAfterViewInit = function () {
                    this.onResize(undefined, this);
                };
                VideoPlayerPlayer.prototype.onResize = function (evt, self) {
                    if (!self)
                        self = this;
                    //make sure video maintains it's aspect ratio
                    var parent = $(this.element).find('> div');
                    var width = $(parent).width();
                    $(this.element).find('iframe').css('height', width / self.aspect);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VideoPlayerPlayer.prototype, "data", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VideoPlayerPlayer.prototype, "currentId", void 0);
                VideoPlayerPlayer = __decorate([
                    core_1.Component({
                        selector: 'videoplayer-player',
                        template: "\n    \t<div (window:resize)=\"onResize($event,this)\">\n\t\t\t<ul>\n\t\t\t\t<li *ngFor=\"#video of data; #i=index\" class=\"{{currentId !== i ? 'hide' : 'show'}}\">\n\t\t\t\t\t<videoplayer-video [image]=\"video.image\" [id]=\"video.id\" [selected]=\"currentId == i\" [width]=\"video.width\" [height]=\"video.height\"></videoplayer-video>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t    <div class=\"wp-cooking-landing-videoplayer-text\">\n\t\t    \t<h2 class=\"wp-cooking-landing-videoplayer-title\" [innerHTML]=\"data[currentId].title\">\n\t\t    \t</h2>\n\t\t    \t<div class=\"wp-cooking-landing-videoplayer-description\" [innerHTML]=\"!!data[currentId].desc ? data[currentId].desc : ''\">\n\t\t        </div>\n\t\t    </div>\n\t\t</div>\n    ",
                        directives: [landing_video_player_video_1.VideoPlayerVideo]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService, core_1.ElementRef])
                ], VideoPlayerPlayer);
                return VideoPlayerPlayer;
            }());
            exports_1("VideoPlayerPlayer", VideoPlayerPlayer);
        }
    }
});
//# sourceMappingURL=landing.video-player.player.js.map