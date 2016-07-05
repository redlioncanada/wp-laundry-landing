System.register(['angular2/core', './services/logger.service.js'], function(exports_1, context_1) {
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
    var core_1, logger_service_1;
    var VideoPlayerVideo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            VideoPlayerVideo = (function () {
                function VideoPlayerVideo(logger) {
                    this.logger = logger;
                    this.ready = false;
                    this.selected = true;
                    this.ended = false;
                }
                VideoPlayerVideo.prototype.ngAfterViewInit = function () {
                    var self = this;
                    if (this.hasVideo()) {
                        this.player = new YT.Player(this.id, {
                            events: {
                                onReady: function () {
                                    self._onReady(self);
                                },
                                onStateChanged: function (state) {
                                    switch (state) {
                                        case 0:
                                            //ended
                                            self._onEnded(self);
                                            break;
                                        case 1:
                                        //playing
                                        case 2:
                                        //paused
                                        case 3:
                                        //buffering
                                        case 4:
                                    }
                                }
                            }
                        });
                    }
                };
                VideoPlayerVideo.prototype.ngOnChanges = function (changes) {
                    if (this.hasVideo()) {
                        if ("selected" in changes) {
                            if (changes.selected.currentValue) {
                                //if (this.ended) {
                                this.ended = false;
                                this.restart(this);
                            }
                            else {
                                this.pause(this);
                                this.reset(this);
                            }
                        }
                    }
                };
                VideoPlayerVideo.prototype.hasVideo = function () {
                    return this.id && this.id.length;
                };
                VideoPlayerVideo.prototype.hasImage = function () {
                    return this.image && this.image.length;
                };
                VideoPlayerVideo.prototype._onReady = function (self) {
                    //need to pass a ref of `this` since this is a callback on YT.Player
                    self.ready = true;
                };
                VideoPlayerVideo.prototype._onEnded = function (self) {
                    this.ended = true;
                };
                VideoPlayerVideo.prototype.play = function (self) {
                    if (!self)
                        self = this;
                    if (!self.ready || !self.hasVideo())
                        return;
                    self.player.playVideo();
                };
                VideoPlayerVideo.prototype.pause = function (self) {
                    if (!self)
                        self = this;
                    if (!self.ready || !self.hasVideo())
                        return;
                    self.player.pauseVideo();
                };
                VideoPlayerVideo.prototype.restart = function (self) {
                    if (!self)
                        self = this;
                    if (!self.ready || !self.hasVideo())
                        return;
                    self.player.seekTo(0);
                    self.play(self);
                };
                VideoPlayerVideo.prototype.reset = function (self) {
                    if (!self)
                        self = this;
                    if (!self.ready || !self.hasVideo())
                        return;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], VideoPlayerVideo.prototype, "id", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], VideoPlayerVideo.prototype, "image", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], VideoPlayerVideo.prototype, "selected", void 0);
                VideoPlayerVideo = __decorate([
                    core_1.Component({
                        selector: 'videoplayer-video',
                        template: "\n    \t<iframe *ngIf=\"hasVideo()\" id=\"{{id}}\" src=\"http://www.youtube.com/embed/{{id}}?enablejsapi=1&playerapiid={{id}}&rel=0\" width=\"100%\" height=\"425\" allowfullscreen frameborder=\"0\"></iframe>\n\t\t<img *ngIf=\"hasImage()\" src=\"{{image}}\"/>\n    "
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], VideoPlayerVideo);
                return VideoPlayerVideo;
            }());
            exports_1("VideoPlayerVideo", VideoPlayerVideo);
        }
    }
});
//# sourceMappingURL=landing.video-player.video.js.map