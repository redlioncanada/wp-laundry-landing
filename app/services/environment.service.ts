import {Injectable} from 'angular2/core';

@Injectable()
export class EnvironmentService {
	private _environment
	private window
	private hosts = ['localhost', '127.0.0.1']
	private staging = ['cuat.whirlpool.ca']

	constructor() {}

	public afterViewInit() {
		this.window = window
		if (this.hosts.indexOf(this.window.location.hostname) > -1) {
			this.setDev()
		} else if (this.staging.indexOf(this.window.location.hostname) > -1) {
			this.setStaging()
		} else {
			this.setProd()
		}
	}

	public setDev() { this._environment = modes.DEVELOPMENT }
	public setDevelopment() { this.setDev() }

	public isDev() { return this._environment == modes.DEVELOPMENT }
	public isDevelopment() { return this.isDev() }

	public setProd() { this._environment = modes.PRODUCTION }
	public setProduction() { this.setProd() }

	public isProd() { return this._environment == modes.PRODUCTION }
	public isProduction() { return this.isProd() }

	public setStaging() { this._environment = modes.STAGING }

	public isStaging() { return this._environment == modes.STAGING }

	public environment() { return this._environment }
	public env() { return this.environment() }
	public mode() { return this.environment() }
}

class modes {
	public static get DEVELOPMENT(): string { return "dev" }
	public static get PRODUCTION(): string { return "prod" }
	public static get STAGING(): string { return "staging" }
}