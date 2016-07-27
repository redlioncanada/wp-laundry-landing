System.register(['angular2/platform/browser', 'angular2/http', './services/logger.service', './services/googleapi.service', './services/analytics.service', './services/breakpoint.service', './services/appdata.service', './services/environment.service', 'angular2/core', './landing.video-player', './landing.masthead', './landing.feature', './product.selector', './landing.morefeatures', './landing.banner', './landing.header', './landing.footer'], function(exports_1, context_1) {
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
    var browser_1, http_1, logger_service_1, googleapi_service_1, analytics_service_1, breakpoint_service_1, appdata_service_1, environment_service_1, core_1, landing_video_player_1, landing_masthead_1, landing_feature_1, product_selector_1, landing_morefeatures_1, landing_banner_1, landing_header_1, landing_footer_1;
    var AppComponent;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (googleapi_service_1_1) {
                googleapi_service_1 = googleapi_service_1_1;
            },
            function (analytics_service_1_1) {
                analytics_service_1 = analytics_service_1_1;
            },
            function (breakpoint_service_1_1) {
                breakpoint_service_1 = breakpoint_service_1_1;
            },
            function (appdata_service_1_1) {
                appdata_service_1 = appdata_service_1_1;
            },
            function (environment_service_1_1) {
                environment_service_1 = environment_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (landing_video_player_1_1) {
                landing_video_player_1 = landing_video_player_1_1;
            },
            function (landing_masthead_1_1) {
                landing_masthead_1 = landing_masthead_1_1;
            },
            function (landing_feature_1_1) {
                landing_feature_1 = landing_feature_1_1;
            },
            function (product_selector_1_1) {
                product_selector_1 = product_selector_1_1;
            },
            function (landing_morefeatures_1_1) {
                landing_morefeatures_1 = landing_morefeatures_1_1;
            },
            function (landing_banner_1_1) {
                landing_banner_1 = landing_banner_1_1;
            },
            function (landing_header_1_1) {
                landing_header_1 = landing_header_1_1;
            },
            function (landing_footer_1_1) {
                landing_footer_1 = landing_footer_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(appdata, analytics, breakpoint, env) {
                    this.appdata = appdata;
                    this.analytics = analytics;
                    this.breakpoint = breakpoint;
                    this.env = env;
                    this.language = appdata.language;
                    analytics.setUA('UA-39471211-1');
                    analytics.bind('language', function (str) {
                        return window.location.href.indexOf('fr_CA/') > -1 ? 'FR' : 'EN';
                    });
                    analytics.bind('category', function (str) {
                        return 'Laundry LP';
                    });
                    breakpoint.add('mobile', 480);
                    breakpoint.add('tablet', 481);
                    breakpoint.add('desktop', 820);
                }
                AppComponent.prototype.ngAfterViewInit = function () {
                    this.breakpoint.afterViewInit();
                    this.env.afterViewInit();
                    this.analytics.afterViewInit();
                    if (this.env.isDev()) {
                        this.analytics.debugMode(true);
                        this.breakpoint.debugMode(true);
                    }
                    window.__RL_DEBUG = {
                        environment: this.env,
                        analytics: this.analytics,
                        breakpoint: this.breakpoint,
                        appdata: this.appdata
                    };
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'rl-wp-laundry-landing',
                        template: "\n    \t<masthead class=\"{{language}}\"></masthead>\n\t\t<features class=\"{{language}}\"></features>\n\t\t<product-selector class=\"{{language}}\"></product-selector>\n\t\t<videoplayer class=\"{{language}}\"></videoplayer>\n\t\t<more-features class=\"{{language}}\"></more-features>\n\t\t<banner class=\"{{language}}\"></banner>\n    ",
                        directives: [landing_video_player_1.VideoPlayer, landing_masthead_1.AppMasthead, landing_feature_1.Features, product_selector_1.ProductSelector, landing_banner_1.Banner, landing_morefeatures_1.MoreFeatures, landing_header_1.Header, landing_footer_1.Footer]
                    }), 
                    __metadata('design:paramtypes', [appdata_service_1.AppDataService, analytics_service_1.AnalyticsService, breakpoint_service_1.BreakpointService, environment_service_1.EnvironmentService])
                ], AppComponent);
                return AppComponent;
            }());
            browser_1.bootstrap(AppComponent, [http_1.HTTP_PROVIDERS, logger_service_1.LoggerService, googleapi_service_1.GoogleApiService, appdata_service_1.AppDataService, analytics_service_1.AnalyticsService, breakpoint_service_1.BreakpointService, environment_service_1.EnvironmentService]);
        }
    }
});
//# sourceMappingURL=app.js.map