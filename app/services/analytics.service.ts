import {Injectable} from 'angular2/core'
import {LoggerService} from './logger.service'
import {EnvironmentService} from './environment.service'

declare var ga
declare var window

@Injectable()
export class AnalyticsService {
	public enabled: boolean
	public ua: string
	private debug: boolean
	private bindings

	constructor(private logger: LoggerService, private env: EnvironmentService) {
		this.debug = false
		this.enabled = false
		this.bindings = []
		this.createGAObject()
	}

	public afterViewInit() {
		if (!this.enabled) this.enabled = this.gaObjectExists()
	}

	public sendEvent(props) {
		props = this.fillBindings(props)

		if (this.propsAreEmpty(props)) {
			this.logger.error(this, `ignored a ${props.eventType} event because all of it's properties are empty!`)
			return
		}

		if (this.debug) {
			this.logger.log(this, `got a ${props.eventType} event, c:${props.category}, a:${props.action}, l:${props.label}`)
		} else {
			if (this.enabled) {
				if (!('category' in props && props.category)) {
					this.logger.error(this, `ignored a ${props.eventType} event because category is undefined!`)
				} else if (!('action' in props && props.action)) {
					this.logger.error(this, `ignored a ${props.eventType} event because action is undefined!`)
				} else if (!('label' in props && props.label)) {
					// this.logger.error(this, `ignored a ${props.eventType} event because label is undefined!`)
					ga('send', 'event', props.category, props.action)
				} else {
					ga('send', 'event', props.category, props.action, props.label)
				}
			} else {
				this.logger.error(this, `ignored a ${props.eventType} event with the name ${props.action} because no UA code has been specified!`)
			}
		}
	}

	public setUA(ua:string) {
		this.ua = ua

		if (this.gaObjectExists()) {
			ga('create', this.ua, 'auto')
			this.enabled = true
			this.logger.log(this,`Created an analytics instance with code ${this.ua}`)
		}
	}

	public bind(keyword, fn) {
		if (typeof keyword == 'string') {
			if (typeof fn !== 'function') return
			this.bindings.push({ 'keyword': keyword, 'function': fn })
		} else if (typeof keyword == 'object') {
			for (var k in keyword) {
				this.bind(k, keyword[k])
			}
		}
	}

	public debugMode(val: boolean) {
		if (val) this.logger.log(this, `Now in debug mode`)
		this.debug = val;
	}

	private propsAreEmpty(props) {
		if (Object.keys(props).length == 1) return true
		for (var i in props) {
			if (i == 'eventType') continue
			if (typeof props[i] === 'string' && props[i].length) return false
		}
		return true
	}

	private gaObjectExists() {
		return window && ('ga' in window) && window['ga'] && typeof window['ga'] !== 'undefined'
	}

	private createGAObject() {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga',undefined,undefined);
	}

	private fillBindings(arr) {
		for (var i in arr) {
			arr[i] = this.fillBinding(arr[i])
		}
		return arr
	}

	private fillBinding(str) {
		if (!str || typeof str === 'undefined' || !str.length) return false

		for (var i in this.bindings) {
			if (str.indexOf(`@${this.bindings[i].keyword}`) > -1) {
				//matched keyword
				var replace = this.bindings[i]['function'].call(this, str)
				str = str.replace(`@${this.bindings[i].keyword}`, replace)
				if (!replace) this.logger.log(this, `${this.bindings[i].keyword} bind callback returned an empty string`)
			}
		}

		if (str.indexOf('@') > -1) {
			this.logger.error(this, `unrecognized binding in ${str}, ignoring`)
			return false
		}

		return str
	}
}