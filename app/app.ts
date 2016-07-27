
///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap}    from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http'
import {LoggerService} from './services/logger.service'
import {GoogleApiService} from './services/googleapi.service'
import {AnalyticsService} from './services/analytics.service'
import {BreakpointService} from './services/breakpoint.service'
import {AppDataService} from './services/appdata.service'
import {EnvironmentService} from './services/environment.service'
import {Component} from 'angular2/core';

import {VideoPlayer} from './landing.video-player';
import {AppMasthead} from './landing.masthead';
import {Features} from './landing.feature';
import {ProductSelector} from './product.selector'
import {MoreFeatures} from './landing.morefeatures'
import {Banner} from './landing.banner'
import {Header} from './landing.header'
import {Footer} from './landing.footer'

declare var window

@Component({
    selector: 'rl-wp-laundry-landing',
    template: `
    	<masthead class="{{language}}"></masthead>
		<features class="{{language}}"></features>
		<product-selector class="{{language}}"></product-selector>
		<videoplayer class="{{language}}"></videoplayer>
		<more-features class="{{language}}"></more-features>
		<banner class="{{language}}"></banner>
    `,
    directives: [VideoPlayer, AppMasthead, Features, ProductSelector, Banner, MoreFeatures, Header, Footer]
})
class AppComponent {
	private language: string

    constructor(private appdata: AppDataService,
		private analytics: AnalyticsService,
		private breakpoint: BreakpointService,
		private env: EnvironmentService) {
		this.language = appdata.language

		analytics.setUA('UA-39471211-1')
		analytics.bind('language', function(str) {
			return window.location.href.indexOf('fr_CA/') > -1 ? 'FR' : 'EN'
		})
        analytics.bind('category', function(str) {
            return 'Laundry LP'
        })

        breakpoint.add('mobile', 480)
        breakpoint.add('tablet', 481)
        breakpoint.add('desktop', 820)
    }

    ngAfterViewInit() {
		this.breakpoint.afterViewInit()
		this.env.afterViewInit()
		this.analytics.afterViewInit()

		if (this.env.isDev()) {
			this.analytics.debugMode(true)
			this.breakpoint.debugMode(true)
		}

		window.__RL_DEBUG = { 
            environment: this.env,
            analytics: this.analytics,
            breakpoint: this.breakpoint,
            appdata: this.appdata
        }
    }
 }

bootstrap(AppComponent, [HTTP_PROVIDERS, LoggerService, GoogleApiService, AppDataService, AnalyticsService, BreakpointService, EnvironmentService])