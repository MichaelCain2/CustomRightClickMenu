/// <reference path="../tools/definitions/selenium-webdriver.d.ts" />
/// <reference path="../tools/definitions/chrome.d.ts" />
/// <reference path="../tools/definitions/crm.d.ts" />
/// <reference path="../app/js/background.ts" />
/// <reference path="../app/elements/edit-crm-item/edit-crm-item.ts" />

const PORT: number = 1250;
//Set to false to test remotely even when running it locally
const TEST_LOCAL_DEFAULT = true;
const TEST_LOCAL: boolean = process.argv.indexOf('--remote') ? false : TEST_LOCAL_DEFAULT;
const TIME_MODIFIER = 1.2;
const LOCAL_URL = 'http://localhost:9515';

const SKIP_OPTIONS = false;
const SKIP_OPTIONS_PAGE = false;
const SKIP_CRM_DIALOGS = false;
const SKIP_CRM = false;
const SKIP_TYPES_EXCEPT = false as CRM.NodeType|false;

interface ChromeLastCall {
	api: string;
	args: Array<any>;
}

interface ContextMenuItem {
	id: number;
	createProperties: chrome.contextMenus.CreateProperties;
	currentProperties: chrome.contextMenus.CreateProperties;
	children: Array<ContextMenuItem>;
}

type ContextMenu = Array<ContextMenuItem>;

type ActiveTabs = Array<{
	type: 'create'|'update';
	data: any;
	id?: number;
}>;

interface ExecutedScript {
	id: number;
	code: string;
}

type ExecutedScripts = Array<ExecutedScript>;

interface AppChrome extends Chrome {
	_lastCall: ChromeLastCall;
	_currentContextMenu: ContextMenu;
	_activeTabs: ActiveTabs;
	_executedScripts: ExecutedScripts;
	_activatedBackgroundPages: Array<number>;
	_clearExecutedScripts: () => void;
	_fakeTabs: Array<{
		id: number;
		url: string;
	}>;
}

interface AppWindow extends Window {
	logs: Array<any>;
	lastError: any|void;
	chrome: AppChrome;
	dummyContainer: HTMLDivElement;
	polymerElementsLoaded: boolean;

	_log: Array<any>;
}

declare const require: any;
declare const window: AppWindow;
declare const process: any;

import * as chai from 'chai';
import * as webdriver from 'selenium-webdriver';
require('mocha-steps');
const secrets = require('./UI/secrets');
const request = require('request');
const btoa = require('btoa');

global.Promise = webdriver.promise.Promise;
const assert = chai.assert;

declare class TypedWebdriver extends webdriver.WebDriver {
	executeScript<T>(script: StringifedFunction<T>): webdriver.promise.Promise<T>;
	executeScript<T>(script: string, ...var_args: any[]): webdriver.promise.Promise<T>;
	executeScript<T>(script: Function, ...var_args: any[]): webdriver.promise.Promise<T>;
}

let driver: TypedWebdriver;

let capabilities: {
	browserName: string;
	browser_version?: string;
	os: string;
	os_version: string;
	resolution: string;
	'browserstack.user': string;
	'browserstack.key': string;
	'browserstack.local': boolean;
	'browserstack.debug': boolean;
	'browserstack.localIdentifier'?: any;	
} = process.argv.indexOf('--new-chrome') > -1 ? {
	'browserName' : 'Chrome',
	'os' : 'Windows',
	'os_version' : '10',
	'resolution' : '1920x1080',
	'browserstack.user' : secrets.user,
	'browserstack.key' : secrets.key,
	'browserstack.local': true,
	'browserstack.debug': process.env.BROWSERSTACK_LOCAL_IDENTIFIER ? false : true,
	'browserstack.localIdentifier': process.env.BROWSERSTACK_LOCAL_IDENTIFIER
} : {
	'browserName' : 'Chrome',
	'browser_version': '26.0',
	'os' : 'Windows',
	'os_version' : '8',
	'resolution' : '1920x1080',
	'browserstack.user' : secrets.user,
	'browserstack.key' : secrets.key,
	'browserstack.local': true,
	'browserstack.debug': process.env.BROWSERSTACK_LOCAL_IDENTIFIER ? false : true,
	'browserstack.localIdentifier': process.env.BROWSERSTACK_LOCAL_IDENTIFIER
};

before('Driver connect', function(done: any) {
	const url = TEST_LOCAL ?
		LOCAL_URL : 'http://hub-cloud.browserstack.com/wd/hub';

	this.timeout(600000 * TIME_MODIFIER);
	const result = new webdriver.Builder()
		.usingServer(url)
		.withCapabilities(capabilities)
		.build();

	let called = false;
	function callDone() {
		if (!called) {
			called = true;
			done();
		}
	}

	if (SKIP_OPTIONS || SKIP_OPTIONS_PAGE ||
		SKIP_CRM_DIALOGS || SKIP_CRM ||
		SKIP_TYPES_EXCEPT) {
			console.warn('Skipping is enabled, make sure this isn\'t in a production build')
		}
	result.get(`http://localhost:${PORT}/build/html/UITest.html#noClear-test-noBackgroundInfo`).then(() => {
		driver = result;
		let attempts = 0;
		let timer = setInterval(() => {
			attempts += 1;
			driver.executeScript(inlineFn(() => {
				return window.polymerElementsLoaded;
			})).then((loaded) => {
				if (loaded) {
					clearInterval(timer);
					callDone();
				}
			});

			if (attempts >= ((600000 * TIME_MODIFIER) / 2500) - 1) {
				//About to time out
				throw new Error('Failed to get elements loaded message, page load is failing');
			}
		}, 2500);
	});
});

const sentIds: Array<number> = [];
function getRandomId(): number {
	let id;
	do {
		id = ~~(Math.random() * 10000);
	} while (sentIds.indexOf(id) > -1);
	sentIds.push(id);
	return id;
}

const templates = {
	mergeArrays(mainArray: Array<any>, additionArray: Array<any>): Array<any> {
		for (let i = 0; i < additionArray.length; i++) {
			if (mainArray[i] &&
				typeof additionArray[i] === 'object' &&
				mainArray[i] !== undefined &&
				mainArray[i] !== null) {
				if (Array.isArray(additionArray[i])) {
					mainArray[i] = templates.mergeArrays(mainArray[i], additionArray[i]);
				} else {
					mainArray[i] = templates.mergeObjects(mainArray[i], additionArray[i]);
				}
			} else {
				mainArray[i] = additionArray[i];
			}
		}
		return mainArray;
	},
	mergeObjects<T extends U, U>(mainObject: T, additions: U): T {
		for (let key in additions) {
			if (additions.hasOwnProperty(key)) {
				if (typeof additions[key] === 'object' &&
					mainObject[key] !== undefined &&
					mainObject[key] !== null) {
					if (Array.isArray(additions[key])) {
						mainObject[key] = templates.mergeArrays(mainObject[key] as any, additions[key] as any) as any;
					} else {
						mainObject[key] = templates.mergeObjects(mainObject[key], additions[key]);
					}
				} else {
					mainObject[key] = additions[key] as any;
				}
			}
		}
		return mainObject;
	},
	getDefaultNodeInfo(options: CRM.NodeInfo): CRM.NodeInfo {
		const defaultNodeInfo: CRM.NodeInfo = {
			permissions: [],
			source: { }
		};

		return templates.mergeObjects(defaultNodeInfo, options);
	},
	getDefaultLinkNode(options: any): CRM.LinkNode {
		const defaultNode: CRM.LinkNode = {
			name: 'name',
			onContentTypes: [true, true, true, false, false, false],
			type: 'link',
			showOnSpecified: false,
			nodeInfo: templates.getDefaultNodeInfo(options.nodeInfo),
			triggers: [
				{
					url: '*://*.example.com/*',
					not: false
				}
			],
			isLocal: true,
			value: [
				{
					newTab: true,
					url: 'https://www.example.com'
				}
			]
		} as CRM.LinkNode;

		return templates.mergeObjects(defaultNode, options);
	},
	getDefaultStylesheetValue(options: any): CRM.StylesheetVal {
		const value = {
			stylesheet: [].join('\n'),
			launchMode: CRMLaunchModes.RUN_ON_CLICKING,
			options: {},
		} as CRM.StylesheetVal;

		return templates.mergeObjects(value, options);
	},
	getDefaultScriptValue(options: any): CRM.ScriptVal {
		const value: CRM.ScriptVal = {
			launchMode: CRMLaunchModes.RUN_ON_CLICKING,
			backgroundLibraries: [],
			libraries: [],
			script: [].join('\n'),
			backgroundScript: '',
			options: {},
			metaTags: {},
			ts: {
				enabled: false,
				script: {},
				backgroundScript: {}
			}
		};

		return templates.mergeObjects(value, options);
	},
	getDefaultScriptNode(options: any): CRM.ScriptNode {
		const defaultNode: CRM.ScriptNode = {
			name: 'name',
			onContentTypes: [true, true, true, false, false, false],
			type: 'script',
			isLocal: true,
			nodeInfo: templates.getDefaultNodeInfo(options.nodeInfo),
			triggers: [
				{
					url: '*://*.example.com/*',
					not: false
				}
			],
			value: templates.getDefaultScriptValue(options.value)
		} as CRM.ScriptNode;

		return templates.mergeObjects(defaultNode, options);
	},
	getDefaultStylesheetNode(options: CRM.PartialStylesheetNode): CRM.StylesheetNode {
		const defaultNode: Partial<CRM.StylesheetNode> = {
			name: 'name',
			onContentTypes: [true, true, true, false, false, false],
			type: 'stylesheet',
			isLocal: true,
			nodeInfo: templates.getDefaultNodeInfo(options.nodeInfo),
			triggers: [
				{
					url: '*://*.example.com/*',
					not: false
				}
			],
			value: templates.getDefaultStylesheetValue(options.value)
		} as Partial<CRM.StylesheetNode>;

		return templates.mergeObjects(defaultNode, options) as CRM.StylesheetNode;
	},
	getDefaultDividerOrMenuNode(options: any, type: 'divider' | 'menu'):
	CRM.DividerNode | CRM.MenuNode {
		const defaultNode: CRM.DividerNode|CRM.MenuNode = {
			name: 'name',
			type: type,
			nodeInfo: templates.getDefaultNodeInfo(options.nodeInfo),
			onContentTypes: [true, true, true, false, false, false],
			isLocal: true,
			value: {}
		} as CRM.DividerNode|CRM.MenuNode;

		return templates.mergeObjects(defaultNode, options);
	},
	getDefaultDividerNode(options: any): CRM.DividerNode {
		return templates.getDefaultDividerOrMenuNode(options, 'divider') as CRM.DividerNode;
	},
	getDefaultMenuNode(options: any): CRM.MenuNode {
		return templates.getDefaultDividerOrMenuNode(options, 'menu') as CRM.MenuNode;
	}
};

function findElementOnPage(selector: string): HTMLElement {
	const list = JSON.parse(selector as EncodedString<Array<[string, number]>>);
	let el: Element = document.body;
	for (let i = 0; i < list.length; i++) {
		let elList = el.querySelectorAll(list[i][0]);
		if (el.shadowRoot) {
			const candidate = el.shadowRoot.querySelectorAll(list[i][0]);
			if (candidate.length > elList.length) {
				elList = candidate;
			}
		}
		el = elList[list[i][1]];
	}
	return el as HTMLElement;
}

function checkIfListContainsElement<T extends HTMLElement|Element>(element: T): string {
	const keys: Array<keyof T> = Object.getOwnPropertyNames(element) as Array<keyof T>;
	for (let i = 0; i < keys.length; i++) {
		if (keys[i].slice(0, 2) === '__' && element[keys[i]] !== null) {
			return keys[i];
		}
	}
	throw new Error('Could not find element');
}

function quote<T extends string>(str: T): T {
	return `'${str}'` as T;
}

type StringifedFunction<RETVAL> = string & {
	__fn: RETVAL;
}

function es3IfyFunction(str: string): string {
	if (str.indexOf('=>') === -1) {
		return str;
	}
	const [ args, body ] = str.split('=>').map(part => part.trim());
	return `function ${args} ${body}`;
}

function inlineFn<T extends {
	[key: string]: any;
}, U>(fn: (REPLACE: T) => U|void, args?: T,
	...insertedFunctions: Array<Function>): StringifedFunction<U> {
		args = args || {} as T;
		let str = `${insertedFunctions.map(inserted => inserted.toString()).join('\n')}
			try { return (${es3IfyFunction(fn.toString())})(arguments) } catch(err) { throw new Error(err.name + '-' + err.stack); }`;
		Object.getOwnPropertyNames(args).forEach((key) => {
			let arg = args[key];
			if (typeof arg === 'object' || typeof arg === 'function') {
				arg = JSON.stringify(arg);
			}

			if (typeof arg === 'string' && arg.split('\n').length > 1) {
				str = str.replace(new RegExp(`REPLACE\.${key}`, 'g'), 
					`' + ${JSON.stringify(arg.split('\n'))}.join('\\n') + '`);
			} else {
				str = str.replace(new RegExp(`REPLACE\.${key}`, 'g'), arg !== undefined &&
					arg !== null && typeof arg === 'string' ?
						arg.replace(/\\\"/g, `\\\\\"`) : arg);
			}
		});
		return str as StringifedFunction<U>;
	}

function getSyncSettings(): webdriver.promise.Promise<CRM.SettingsStorage> {
	return new webdriver.promise.Promise<CRM.SettingsStorage>((resolve) => { 
		driver.executeScript(inlineFn(() => {
			return JSON.stringify(window.app.settings);
		})).then((str) => {
			resolve(JSON.parse(str) as CRM.SettingsStorage);
		});
	}); 
}

function getCRM<T extends Array<CRM.Node> = CRM.Tree>(): webdriver.promise.Promise<T> {
	return new webdriver.promise.Promise<T>((resolve) => { 
		driver.executeScript(inlineFn(() => {
			return JSON.stringify(window.app.settings.crm);
		})).then((str: EncodedString<T>) => {
			resolve(JSON.parse(str));
		});
	});
}

function getContextMenu(): webdriver.promise.Promise<ContextMenu> {
	return new webdriver.promise.Promise<ContextMenu>((resolve) => {
		driver.executeScript(inlineFn(() => {
			return JSON.stringify(window.chrome._currentContextMenu[0].children);
		})).then((str) => {
			resolve(JSON.parse(str));
		});
	});
}

function saveDialog(dialog: FoundElement): webdriver.promise.Promise<void> {
	return new webdriver.promise.Promise<void>((resolve) => {
		dialog
			.findElement(webdriver.By.id('saveButton'))
			.click().then(() => {
				resolve(null);
			})
	});
}

function cancelDialog(dialog: FoundElement): webdriver.promise.Promise<void> {
	return new webdriver.promise.Promise<void>((resolve) => {
		dialog
			.findElement(webdriver.By.id('cancelButton'))
			.click().then(() => {
				resolve(null);
			});
	});
}

type DialogType = 'link'|'script'|'divider'|'menu'|'stylesheet';
function getDialog(type: DialogType): webdriver.promise.Promise<FoundElement> {
	return new webdriver.promise.Promise<FoundElement>(async (resolve) => {
		const el = await findElement(webdriver.By.tagName('crm-app'))
			.findElement(webdriver.By.tagName('crm-edit-page'))
			.findElement(webdriver.By.tagName(`${type}-edit`));
			
		await wait(500);
		resolve(el);
	});
}

function generatePromiseChain<T>(data: Array<T>,
	fn: (data: T) => webdriver.promise.Promise<any>,
	index: number,
	resolve: webdriver.promise.IFulfilledCallback<{}>) {
		if (index !== data.length) {
			fn(data[index]).then(() => {
				generatePromiseChain(data, fn, index + 1, resolve);
			});
		} else {
			resolve(null);
		}
	}

function forEachPromise<T>(data: Array<T>,
	fn: (data: T) => webdriver.promise.Promise<any>): 
	webdriver.promise.Promise<any> {
		return new webdriver.promise.Promise((resolve) => {
			generatePromiseChain(data, fn, 0, resolve);
		});
	}

function getRandomString(length: number): string {
	return new Array(length).join(' ').split(' ').map(() => {
		const randomNum = ~~(Math.random() * 62);
		if (randomNum <= 10) {
			return String(randomNum);
		} else if (randomNum < 36) {
			return String.fromCharCode(randomNum + 87);
		} else {
			return String.fromCharCode(randomNum + 29);
		}
	}).join('');
}

function resetSettings(__this: Mocha.ISuiteCallbackContext|Mocha.IHookCallbackContext, done: (...args: Array<any>) => void): void;
function resetSettings(__this: Mocha.ISuiteCallbackContext|Mocha.IHookCallbackContext): webdriver.promise.Promise<void>; 
function resetSettings(__this: Mocha.ISuiteCallbackContext|Mocha.IHookCallbackContext, done?: (...args: Array<any>) => void): webdriver.promise.Promise<any>|void {
	__this.timeout(30000 * TIME_MODIFIER);
	const promise = new webdriver.promise.Promise<void>((resolve) => {
		driver.executeScript(inlineFn(() => {
			try {
				window.chrome.storage.local.clear();
				window.chrome.storage.sync.clear();
				window.app.refreshPage();
				return null;
			} catch(e) {
				return {
					message: e.message,
					stack: e.stack
				};
			}
		})).then((e) => {
			if (e) {
				console.log(e);
				throw e;
			}
			return wait(1500);
		}).then(() => {
			resolve(null);
		});
	});
	if (done) {
		promise.then(done);
	} else {
		return promise;
	}
}

function reloadPage(__this: Mocha.ISuiteCallbackContext|Mocha.IHookCallbackContext, done: (...args: Array<any>) => void): void;
function reloadPage(__this: Mocha.ISuiteCallbackContext|Mocha.IHookCallbackContext): webdriver.promise.Promise<void>; 
function reloadPage(__this: Mocha.ISuiteCallbackContext|Mocha.IHookCallbackContext, done?: (...args: Array<any>) => void): webdriver.promise.Promise<any>|void {
	__this.timeout(60000 * TIME_MODIFIER);
	const promise = new webdriver.promise.Promise<void>((resolve) => {
		wait(500).then(() => {
			driver.executeScript(inlineFn(() => {
				try {
					window.app.refreshPage();
					return null;
				} catch(e) {
					return {
						message: e.message,
						stack: e.stack
					};
				}
			})).then((e) => {
				if (e) {
					console.log(e);
					throw e;
				}
				return wait(1000);
			}).then(() => {
				resolve(null);
			});
		});
	});
	if (done) {
		promise.then(done);
	} else {
		return promise;
	}
}

function waitForCRM(timeRemaining: number): webdriver.promise.Promise<void> {
	return new webdriver.promise.Promise<void>((resolve, reject) => {
		if (timeRemaining <= 0) {
			reject(null);
			return;
		}

		driver.executeScript(inlineFn(() => {
			const crmItem = window.app.editCRM.shadowRoot.querySelectorAll('edit-crm-item:not([root-node])').item(0);
			return !!crmItem;
		})).then((result) => {
			if (result) {
			resolve(null);
			} else {
				setTimeout(() => {
					waitForCRM(timeRemaining - 250).then(resolve, reject);
				}, 250);
			}
		})
	});
}

async function switchToTypeAndOpen(type: CRM.NodeType) {
	try {
		await waitForCRM(4000);
	} catch (e) {
		//Timeout, element not found
		throw new Error('edit-crm-item element could not be found');
	}
	await driver.executeScript(inlineFn(() => {
		const crmItem = window.app.editCRM
			.shadowRoot.querySelectorAll('edit-crm-item:not([root-node])').item(0) as EditCrmItem;
		crmItem.$$('type-switcher').changeType('REPLACE.type' as CRM.NodeType);	
	}, {
		type: type
	}));
	await wait(100);
	await driver.executeScript(inlineFn(() => {
		((window.app.editCRM.shadowRoot
			.querySelectorAll('edit-crm-item:not([root-node])') as NodeListOf<EditCrmItem>).item(0)).openEditPage();
	}));
	await wait(500);
}

function openDialog(type: CRM.NodeType) {
	return new webdriver.promise.Promise(async (resolve) => {
		if (type === 'link') {
			await driver.executeScript(inlineFn(() => {
				((window.app.editCRM.shadowRoot
					.querySelectorAll('edit-crm-item:not([root-node])') as NodeListOf<EditCrmItem>).item(0)).openEditPage();
			}));
			await wait(1000);
		} else {
			await switchToTypeAndOpen(type);
		}
		resolve(null);
	});
}
 
function wait<T>(time: number, resolveParam: T): webdriver.promise.Promise<T>;
function wait<T>(time: number): webdriver.promise.Promise<any>;
function wait<T>(time: number, resolveParam?: T): webdriver.promise.Promise<T> {
	return new webdriver.promise.Promise((resolve) => {
		setTimeout(() => {
			if (resolveParam) {
				resolve(resolveParam);
			} else {
				resolve(null);
			}
		}, time);
	});
}

interface FoundElement {
	click(): webdriver.promise.Promise<void>;
	findElement(by: webdriver.Locator): FoundElementPromise;
	findElements(by: webdriver.Locator): FoundElementsPromise;
	sendKeys(...args: Array<string|webdriver.promise.Promise<string>|InputKeys>
			): webdriver.promise.Promise<void>;
	getAttribute(attr: string): webdriver.promise.Promise<string>;
	getProperty(prop: string): webdriver.promise.Promise<any>;
	getSize(): webdriver.promise.Promise<ClientRect>;
}

const enum InputKeys {
	CLEAR_ALL = 0,
	BACK_SPACE = 1
}

type Resolver<T> = (onFulfilled: webdriver.promise.IFulfilledCallback<T>, 
	onRejected: webdriver.promise.IRejectedCallback) => void;

class PromiseContainer<T> implements webdriver.promise.IThenable<T> {
	_promise: webdriver.promise.Promise<T>;

	constructor(resolver?: Resolver<T>, opt_flow?: webdriver.promise.ControlFlow) {
		this._promise = new webdriver.promise.Promise<T>(resolver, opt_flow);
	}

	cancel(opt_reason?: string) {
		this._promise.cancel(opt_reason);
	}

	isPending() {
		return this._promise.isPending();
	}

	then<R>(opt_callback?: (value: T) => Promise<R>, opt_errback?: (error: any) => any): webdriver.promise.Promise<R>;
	then<R>(opt_callback?: (value: T) => R, opt_errback?: (error: any) => any): webdriver.promise.Promise<R>;
	then<R>(opt_callback?: (value: T) => Promise<R>|R, opt_errback?: (error: any) => any): webdriver.promise.Promise<R> {
		return this._promise.then(opt_callback, opt_errback) as any;
	}

	thenCatch<R>(errback: (error: any) => any): webdriver.promise.Promise<R> {
		return this._promise.thenCatch(errback);
	}

	thenFinally<R>(callback: () => any): webdriver.promise.Promise<R> {
		return this._promise.thenFinally(callback);
	}
}

class FoundElementsPromise extends PromiseContainer<Array<FoundElement>> {
	private _items: Array<FoundElement>;
	private _err: any;
	private _gotItems: Array<{
		index: number;
		resolve: webdriver.promise.IFulfilledCallback<FoundElement>;
		reject: webdriver.promise.IRejectedCallback;
	}>;
	private _done: boolean;

	constructor(resolver?: Resolver<Array<FoundElement>>, opt_flow?: webdriver.promise.ControlFlow) {
		//Wait until this is initialized before running the resolver
		let readyResolve: webdriver.promise.IFulfilledCallback<void> = null;
		const ready = new webdriver.promise.Promise<void>((resolve) => {
			readyResolve = resolve;
		});
		super((onFulfilled, onRejected) => {
			ready.then(() => {
				resolver(onFulfilled, onRejected);
			});
		}, opt_flow);

		this._init();
		readyResolve(null);
	}

	private _init() {
		this.then((result) => {
			this._onFulfill(result);
		}, (err) => {
			this._onReject(err);
		});

		this._gotItems = [];
		this._done = false;
		this._err = null;
	}

	private _onFulfill(res: Array<FoundElement>) {
		this._done = true;
		this._items = res;
		this._handlePreviousRequests();
	}

	private _onReject(err: Error) {
		this._done = true;
		this._err = err;
		this._handlePreviousRequests();
	}

	private _handlePreviousRequests() {
		this._gotItems.forEach(({index, resolve, reject}) => {
			resolve(this._handleGetRequest(index, reject));
		});
	}

	private _handleGetRequest(index: number, reject: (err: Error) => void) {
		if (this._err !== null) {
			//Error was thrown
			reject(this._err);
			return null;
		}
		if (!this._items) {
			//Item doesn't exist at that index
			reject(new Error('Error finding elements'));
			return null;
		}
		if (!this._items[index]) {
			//Item doesn't exist at that index
			reject(new Error('Item at index does not exist'));
			return null;
		}
		return this._items[index];
	}

	public get(index: number): FoundElementPromise {
		if (this._done) {
			const result = this._handleGetRequest(index, (err) => {
				throw err;
			});
			return new FoundElementPromise((resolve) => {
				resolve(result);
			});
		}

		let _resolve: webdriver.promise.IFulfilledCallback<FoundElement>;
		let _reject: webdriver.promise.IRejectedCallback;
		const prom = new FoundElementPromise((resolve, reject) => {
			_resolve = resolve;
			_reject = reject;
		});

		this._gotItems.push({
			index,
			resolve: _resolve,
			reject: _reject
		});

		return prom;
	}

	public get length() {
		return new webdriver.promise.Promise<number>((resolve) => {
			if (this._done) {
				resolve((this._items && this._items.length) || 0);
			} else {
				this.then((items) => {
					resolve((items && items.length) || 0);
				});
			}
		});
	}

	public map<T>(fn: (element: FoundElement) => T): webdriver.promise.Promise<Array<T>>;
	public map<T>(fn: (element: FoundElement) => T, isElements?: false): webdriver.promise.Promise<Array<T>>;
	public map<T>(fn: (element: FoundElement) => T, isElements?: true): FoundElementsPromise;
	public map<T>(fn: (element: FoundElement) => T, isElements: boolean = false) {
		if (isElements) {
			return new FoundElementsPromise((resolve) => {
				this.then((items) => {
					resolve(items.map(fn) as Array<any>);
				});	
			});
		}
		return new webdriver.promise.Promise<Array<T>>((resolve) => {
			this.then((items) => {
				resolve(items.map(fn));
			});
		});
	}

	public forEach(fn: (element: FoundElement) => void) {
		this.then((items) => {
			items.forEach(fn);
		});
		return this;
	}

	/**
	 * Combines promise.all and map
	 */
	public mapWait(fn: (element: FoundElement) => webdriver.promise.Promise<any>): webdriver.promise.Promise<void> {
		return new webdriver.promise.Promise<void>((resolve) => {
			this.map(fn).then((mapped) => {
				webdriver.promise.all(mapped).then(() => {
					resolve(null);
				});
			});
		});
	}
}

class FoundElementPromise extends PromiseContainer<FoundElement> {
	constructor(resolver: (onFulfilled: webdriver.promise.IFulfilledCallback<FoundElement>, 
			onRejected: webdriver.promise.IRejectedCallback)=>void,
			opt_flow?: webdriver.promise.ControlFlow) {
		super(resolver, opt_flow);
	}

	click() {
		return new FoundElementPromise((resolve) => {
			this.then((element) => {
				element.click().then(() => {
					resolve(element);
				});
			});
		});
	}
	findElement(by: webdriver.Locator) {
		return new FoundElementPromise((resolve) => {
			this.then((element) => {
				element.findElement(by).then((element) => {
					resolve(element);
				});
			});
		});
	}
	findElements(by: webdriver.Locator) {
		return new FoundElementsPromise((resolve) => {
			this.then((element) => {
				element.findElements(by).then((element) => {
					resolve(element);
				});
			});
		});
	}
	sendKeys(...args: Array<string|webdriver.promise.Promise<string>|InputKeys>) {
		return new webdriver.promise.Promise<void>((resolve) => {
			this.then((element) => {
				element.sendKeys(...args).then(() => {
					resolve(undefined);
				});
			});
		});
	}
	getAttribute(attr: string): webdriver.promise.Promise<string> {
		return new webdriver.promise.Promise<string>((resolve) => {
			this.then((element) => {
				element.getAttribute(attr).then((value) => {
					resolve(value);
				});
			});
		});
	}
	getProperty(prop: string): webdriver.promise.Promise<any> {
		return new webdriver.promise.Promise<any>((resolve) => {
			this.then((element) => {
				element.getProperty(prop).then((value) => {
					resolve(value);
				});
			});
		});
	}
	getSize(): webdriver.promise.Promise<ClientRect> {
		return new webdriver.promise.Promise<ClientRect>((resolve) => {
			this.then((element) => {
				element.getSize().then((size) => {
					resolve(size);
				});
			});
		});
	}

	static all(promises: Array<FoundElementPromise>): webdriver.promise.Promise<Array<FoundElement>> {
		return new webdriver.promise.Promise<Array<FoundElement>>((resolve) => {
			const states: Array<{
				promise: FoundElementPromise;
				done: boolean;
				result?: FoundElement;
			}> = promises.map((promise, index) => {
				promise.then((result) => {
					states[index].done = true;
					states[index].result = result;
					if (states.filter((state) => {
						return !state.done;
					}).length === 0) {
						resolve(states.map((state) => {
							return state.result;
						}));
					}
				});
				return {
					promise: promise,
					done: false
				};
			});
		});
	}
}

class FoundElement implements FoundElement {
	constructor(public selector: string, public index: number,
		public parent: FoundElement = null) { }

	click(): webdriver.promise.Promise<void> {
		const selectorList = [[this.selector, this.index]];
		let currentElement: FoundElement = this;
		while (currentElement.parent) {
			currentElement = currentElement.parent;
			selectorList.push([currentElement.selector, currentElement.index]);
		}
		return new webdriver.promise.Promise<void>((resolve) => {
			driver.executeScript(inlineFn(() => {
				findElementOnPage('REPLACE.selector').click();
			}, {
				selector: JSON.stringify(selectorList.reverse())
			}, findElementOnPage)).then((e) => {
				e && console.log(e);
				resolve(undefined);
			});
		});
	}
	findElement(by: webdriver.Locator): FoundElementPromise {
		const css = locatorToCss(by);
		const selectorList = [[this.selector, this.index]];
		let currentElement: FoundElement = this;
		while (currentElement.parent) {
			currentElement = currentElement.parent;
			selectorList.push([currentElement.selector, currentElement.index]);
		}
		return new FoundElementPromise((resolve, reject) => {
			driver.executeScript(inlineFn(() => {
				const baseEl = findElementOnPage('REPLACE.selector') as Element;
				const el = baseEl.querySelector('REPLACE.css') ||
					baseEl.shadowRoot.querySelector('REPLACE.css');

				if (el === null) {
					return 'null';
				}
				return 'exists';
			}, {
				css: css,
				selector: JSON.stringify(selectorList.reverse())
			}, findElementOnPage)).then((index) => {
				if (index === 'null') {
					reject(new Error('Failed to find element'));
				} else {
					resolve(new FoundElement(css, 0, this));
				}
			});
		});
	}
	findElements(by: webdriver.Locator): FoundElementsPromise {
		const css = locatorToCss(by);
		const selectorList = [[this.selector, this.index]];
		let currentElement: FoundElement = this;
		while (currentElement.parent) {
			currentElement = currentElement.parent;
			selectorList.push([currentElement.selector, currentElement.index]);
		}
		const __this = this;
		return new FoundElementsPromise((resolve) => {
			driver.executeScript(inlineFn(() => {
				const baseEl = findElementOnPage('REPLACE.selector') as Element;
				let elList = baseEl.querySelectorAll('REPLACE.css');
				if (baseEl.shadowRoot) {
					const candidate = baseEl.shadowRoot.querySelectorAll('REPLACE.css');
					if (candidate.length > elList.length) {
						elList = candidate;
					}
				}
				return JSON.stringify(Array.prototype.slice.apply(elList).map(function(element: HTMLElement) {
					if (element === null) {
						return 'null';
					}
					return 'exists';
				}) as Array<'null'|'exists'>);
			}, {
				css: css,
				selector: JSON.stringify(selectorList.reverse())
			}, findElementOnPage, checkIfListContainsElement)).then((indexes) => {
				resolve((JSON.parse(indexes)).map((found, index) => {
					if (found === 'exists') {
						return new FoundElement(css, index, __this);
					}
					return null;
				}).filter(item => item !== null));
			});
		});
	}
	sendKeys(...args: Array<string|webdriver.promise.Promise<string>|InputKeys>): webdriver.promise.Promise<void> {
		return new webdriver.promise.Promise<void>((resolve) => {
			return webdriver.promise.all(args.map((arg) => {
				if (webdriver.promise.isPromise(arg)) {
					return arg as webdriver.promise.Promise<string>;
				}
				return new webdriver.promise.Promise((instantResolve) => {
					instantResolve(arg);
				});
			})).then((keys: Array<string|InputKeys>) => {
				const selectorList = [[this.selector, this.index]];
				let currentElement: FoundElement = this;
				while (currentElement.parent) {
					currentElement = currentElement.parent;
					selectorList.push([currentElement.selector, currentElement.index]);
				}
				return new webdriver.promise.Promise((sentKeysResolve) => {
					driver.executeScript(inlineFn((REPLACE) => {
						const el = findElementOnPage('REPLACE.selector') as HTMLInputElement;
						const keyPresses = REPLACE.keypresses as Array<string|InputKeys>;
						let currentValue = el.value || '';
						for (let i = 0; i < keyPresses.length; i++) {
							switch (keyPresses[i]) {
								case InputKeys.CLEAR_ALL:
									currentValue = '';
									break;
								case InputKeys.BACK_SPACE:
									currentValue = currentValue.slice(0, -1);
									break;
								default:
									currentValue += keyPresses[i];
									break;
							}
						}
						el.value = currentValue;
					}, {
						selector: JSON.stringify(selectorList.reverse()),
						keypresses: keys
					}, findElementOnPage)).then(() => {
						sentKeysResolve(undefined);
					});
				});
			}).then(() => {
				resolve(undefined);
			});
		});
	}
	getProperty<T>(prop: string): webdriver.promise.Promise<T> {
		const selectorList = [[this.selector, this.index]];
		let currentElement: FoundElement = this;
		while (currentElement.parent) {
			currentElement = currentElement.parent;
			selectorList.push([currentElement.selector, currentElement.index]);
		}
		return new webdriver.promise.Promise<T>((resolve) => {
			driver.executeScript(inlineFn(() => {
				const el = findElementOnPage('REPLACE.selector');
				const val = el['REPLACE.prop' as keyof HTMLElement];
				return JSON.stringify(val as any);
			}, {
				selector: JSON.stringify(selectorList.reverse()),
				prop: prop
			}, findElementOnPage)).then((value: EncodedString<T>) => {
				resolve(JSON.parse(value));
			});
		});
	}
	getAttribute(attr: keyof HTMLElement): webdriver.promise.Promise<string> {
		const selectorList = [[this.selector, this.index]];
		let currentElement: FoundElement = this;
		while (currentElement.parent) {
			currentElement = currentElement.parent;
			selectorList.push([currentElement.selector, currentElement.index]);
		}
		return new webdriver.promise.Promise<string>((resolve) => {
			driver.executeScript(inlineFn((REPLACE) => {
				const el = findElementOnPage('REPLACE.selector');
				const attr = el.getAttribute(REPLACE.attr);
				return attr === undefined || attr === null ?
					el[REPLACE.attr] : attr;
			}, {
				selector: selectorList.reverse(),
				attr: quote(attr)
			}, findElementOnPage)).then((value: string) => {
				resolve(value);
			});
		});
	}
	getSize(): webdriver.promise.Promise<ClientRect> {
		const selectorList = [[this.selector, this.index]];
		let currentElement: FoundElement = this;
		while (currentElement.parent) {
			currentElement = currentElement.parent;
			selectorList.push([currentElement.selector, currentElement.index]);
		}
		return new webdriver.promise.Promise<ClientRect>(async (resolve) => {
			resolve(JSON.parse(await driver.executeScript(inlineFn(() => {
				const bcr = findElementOnPage('REPLACE.selector').getBoundingClientRect();
				return JSON.stringify({
					bottom: bcr.bottom,
					height: bcr.height,
					left: bcr.left,
					right: bcr.right,
					top: bcr.top,
					width: bcr.width	
				});
			}, {
				selector: JSON.stringify(selectorList.reverse())
			}, findElementOnPage))));
		});
	}
}

function locatorToCss(by: webdriver.Locator): string {
	switch (by.using) {
		case 'className':
			return `.${by.value}`;
		case 'css selector':
			return by.value;
		case 'id':
			return `#${by.value}`;
		case 'linkText':
			return `*[href=${by.value}]`;
		case 'name':
			return  `*[name="${by.value}"]`;
		case 'tagName':
			return by.value;
		default:
		case 'js':
		case 'xpath':
		case 'partialLinkText':
			throw new Error('Not implemented');
	}
}

function findElement(by: webdriver.Locator): FoundElementPromise {
	const selector = locatorToCss(by);
	return new FoundElementPromise(async (resolve, reject) => {
		const found = await driver.executeScript(inlineFn(() => {
			const elContainer = document.querySelector('REPLACE.css');
			if (elContainer === null) {
				return 'null';
			}
			return 'exists';
		}, {
			css: selector
		}));
		if (found === 'exists') {
			resolve(new FoundElement(selector, 0));
		} else {
			reject(new Error('Failed to find element'));
		}
	});
}

function getTypeName(index: number): string {
	switch (index) {
		case 1:
			return 'link';
		case 2:
			return 'selection';
		case 3:
			return 'image';
		case 4:
			return 'video';
		case 5:
			return 'audio';
		default:
		case 0:
			return 'page';
	}
}

function prepareTrigger(url: string): string {
	if (url === '<all_urls>') {
		return url;
	}
	if (url.replace(/\s/g, '') === '') {
		return null;
	}
	let newTrigger: string;
	if (url.split('//')[1].indexOf('/') === -1) {
		newTrigger = url + '/';
	} else {
		newTrigger = url;
	}
	return newTrigger;
}

function sanitizeUrl(url: string): string {
	if (url.indexOf('://') === -1) {
		url = `http://${url}`;
	}
	return url;
}

function subtractStrings(biggest: string, smallest: string): string {
	return biggest.slice(smallest.length);
}

function getEditorValue(type: DialogType): webdriver.promise.Promise<string> {
	return driver.executeScript(inlineFn((REPLACE) => {
		return window[(REPLACE.editor) as 'scriptEdit'|'stylesheetEdit'].editorManager.editor.getValue();
	}, {
		editor: quote(type === 'script' ? 'scriptEdit' : 'stylesheetEdit'),
	}));
}

interface NameCheckingCRM {
	name: string;
	children?: Array<NameCheckingCRM>;
}

function getCRMNames(crm: CRM.Tree): Array<NameCheckingCRM> {
	return crm.map((node) => {
		return {
			name: node.name,
			children: (node.children && node.children.length > 0) ? 
				getCRMNames(node.children) : undefined
		};
	});
}

function getContextMenuNames(contextMenu: ContextMenu): Array<NameCheckingCRM> {
	return contextMenu.map((item) => {
		return {
			name: item.currentProperties.title,
			children: (item.children && item.children.length > 0) ? 
				getContextMenuNames(item.children) : undefined
		};
	});
}

function assertContextMenuEquality(contextMenu: ContextMenu, CRMNodes: CRM.Tree) {
	try {
		assert.deepEqual(getContextMenuNames(contextMenu), getCRMNames(CRMNodes),
			'structures match');
	} catch(e) {
		assert.deepEqual(getContextMenuNames(contextMenu), getCRMNames(CRMNodes).concat([{
			children: undefined,
			name: undefined
		}, {
			children: undefined,
			name: 'Options'
		}]),
			'structures match');
	}
}

// function getLog(): webdriver.promise.Promise<string> {
// 	return new webdriver.promise.Promise<string>((resolve) => {
// 		driver.executeScript(inlineFn(() => {
// 			const log = JSON.stringify(window.app._log);
// 			window.app._log = [];
// 			return log;
// 		})).then((str) => {
// 			console.log(str);
// 			resolve(str);
// 		});
// 	});
// }

function enterEditorFullscreen(__this: Mocha.ISuiteCallbackContext, type: DialogType): webdriver.promise.Promise<FoundElement> {
	return new webdriver.promise.Promise<FoundElement>((resolve) => {
		resetSettings(__this).then(() => {
			return openDialog(type);
		}).then(() => {
			return getDialog(type);
		}).then((dialog) => {
			return wait(500, dialog);
		}).then((dialog) => {
			return dialog
				.findElement(webdriver.By.id('editorFullScreen'))
				.click()
				.then(() => {
					return wait(500);
				}).then(() => {
					resolve(dialog);
				});
		});
	});
}


describe('Options Page', function() {
	if (SKIP_OPTIONS) {
		return;
	}
	describe('Loading', function() {
		this.timeout(60000 * TIME_MODIFIER);
		this.slow(60000);

		it('should happen without errors', function(done)  {
			driver.executeScript(inlineFn(() => {
				return window.lastError ? window.lastError : 'noError';
			})).then((result) => {
				assert.ifError(result !== 'noError' ? result : false,
					'no errors should be thrown when loading');
				done();
			});
		});
	});
	describe('CheckboxOptions', function() {
		if (SKIP_OPTIONS_PAGE) {
			return;
		}
		this.timeout(5000 * TIME_MODIFIER);
		this.slow(4000);
		const checkboxDefaults = {
			catchErrors: true,
			showOptions: true,
			recoverUnsavedData: false,
			useStorageSync: true
		};
		Object.getOwnPropertyNames(checkboxDefaults).forEach((checkboxId, index) => {
			it(`${checkboxId} should be clickable`, async () => {
				await reloadPage(this);
				await findElement(webdriver.By.tagName('crm-app'))
					.findElement(webdriver.By.id(checkboxId))
					.findElement(webdriver.By.tagName('paper-checkbox'))
					.click();
				
				const { checked, match } = JSON.parse(await driver.executeScript(inlineFn((REPLACE) => {
					return JSON.stringify({
						match: window.app.storageLocal['REPLACE.checkboxId' as keyof CRM.StorageLocal] === REPLACE.expected,
						checked: (window.app.$ as any)['REPLACE.checkboxId'].shadowRoot.querySelector('paper-checkbox').checked
					});
				}, {
					checkboxId: checkboxId,
					expected: !checkboxDefaults[checkboxId as keyof typeof checkboxDefaults]
				})));

				assert.strictEqual(checked, !checkboxDefaults[checkboxId as keyof typeof checkboxDefaults],
					'checkbox checked status matches expected');
				assert.strictEqual(match, true, 
					`checkbox ${checkboxId} value reflects settings value`);
			});
			it(`${checkboxId} should be saved`, async function() {
				await reloadPage(this);
				const { checked, match } = JSON.parse(await driver.executeScript(inlineFn((REPLACE) => {
					return JSON.stringify({
						match: window.app.storageLocal['REPLACE.checkboxId' as keyof CRM.StorageLocal] === REPLACE.expected,
						checked: (window.app.$ as any)['REPLACE.checkboxId'].shadowRoot.querySelector('paper-checkbox').checked
					});
				}, {
					checkboxId: checkboxId,
					expected: !checkboxDefaults[checkboxId as keyof typeof checkboxDefaults]
				})));

				assert.strictEqual(checked, !checkboxDefaults[checkboxId as keyof typeof checkboxDefaults],
					'checkbox checked status has been saved');
				assert.strictEqual(match, true, 
					`checkbox ${checkboxId} value has been saved`);
			});
		});
	});
	describe('Commonly used links', function() {
		if (SKIP_OPTIONS_PAGE) {
			return;
		}
		this.timeout(15000 * TIME_MODIFIER);
		this.slow(10000);
		let searchEngineLink = '';
		let defaultLinkName = '';

		before('Reset settings', function() {
			return resetSettings(this);
		});
		it('should be addable', async function()  {
			const firstElement = await findElement(webdriver.By.tagName('crm-app'))
				.findElements(webdriver.By.tagName('default-link')).get(0);
			await firstElement.findElement(webdriver.By.tagName('paper-button')).click();
			const name = await firstElement.findElement(webdriver.By.tagName('paper-input')).getProperty('value');
			const link = await firstElement.findElement(webdriver.By.tagName('a')).getAttribute('href');
			const crm = await getCRM<Array<CRM.LinkNode>>();

			searchEngineLink = link;
			defaultLinkName = name;

			const element = crm[crm.length - 1];

			assert.strictEqual(name, element.name, 
				'name is the same as expected');
			assert.strictEqual(element.type, 'link',
				'type of element is link');
			assert.isArray(element.value, 'element value is array');
			assert.lengthOf(element.value, 1, 'element has one child');
			assert.isDefined(element.value[0], 'first element is defined');
			assert.isObject(element.value[0], 'first element is an object');
			assert.strictEqual(element.value[0].url, link, 
				'value url is the same as expected');
			assert.isTrue(element.value[0].newTab, 'newTab is true');
		});
		it('should be renamable', async function() {
			const renameName = 'SomeName';
			const firstElement = await findElement(webdriver.By.tagName('crm-app'))
				.findElements(webdriver.By.tagName('default-link')).get(0);
			await firstElement.findElement(webdriver.By.tagName('paper-input'))
				.findElement(webdriver.By.tagName('input'))
				.sendKeys(InputKeys.CLEAR_ALL, renameName);
			await firstElement.findElement(webdriver.By.tagName('paper-button')).click();
			const link = await firstElement.findElement(webdriver.By.tagName('a')).getAttribute('href');
			const crm = await getCRM<Array<CRM.LinkNode>>();
			const element = crm[crm.length - 1];

			assert.strictEqual(element.name, renameName,
				'name is the same as expected');
			assert.strictEqual(element.type, 'link',
				'type of element is link');
			assert.isArray(element.value, 'element value is array');
			assert.lengthOf(element.value, 1, 'element has one child');
			assert.isDefined(element.value[0], 'first element is defined');
			assert.isObject(element.value[0], 'first element is an object');
			assert.strictEqual(element.value[0].url, link, 
				'value url is the same as expected');
			assert.isTrue(element.value[0].newTab, 'newTab is true');
		});
		it('should be saved', async function() {
			await reloadPage(this);
			const crm = await getCRM<Array<CRM.LinkNode>>();

			const element = crm[crm.length - 2];

			assert.isDefined(element, 'element is defined');
			assert.strictEqual(element.name, defaultLinkName, 
				'name is the same as expected');
			assert.strictEqual(element.type, 'link',
				'type of element is link');
			assert.isArray(element.value, 'element value is array');
			assert.lengthOf(element.value, 1, 'element has one child');
			assert.isDefined(element.value[0], 'first element is defined');
			assert.isObject(element.value[0], 'first element is an object');
			assert.strictEqual(element.value[0].url, searchEngineLink, 
				'value url is the same as expected');
			assert.isTrue(element.value[0].newTab, 'newTab is true');

			const element2 = crm[crm.length - 1];
			assert.isDefined(element2, 'element is defined');
			assert.strictEqual(element2.name, 'SomeName', 
				'name is the same as expected');
			assert.strictEqual(element2.type, 'link',
				'type of element is link');
			assert.isArray(element2.value, 'element value is array');
			assert.lengthOf(element2.value, 1, 'element has one child');
			assert.isDefined(element2.value[0], 'first element is defined');
			assert.isObject(element2.value[0], 'first element is an object');
			assert.strictEqual(element2.value[0].url, searchEngineLink, 
				'value url is the same as expected');
			assert.isTrue(element2.value[0].newTab, 'newTab is true');
		});
	});
	describe('SearchEngines', function() {
		if (SKIP_OPTIONS_PAGE) {
			return;
		}
		this.timeout(150000 * TIME_MODIFIER);
		this.slow(10000);
		let searchEngineLink = '';
		let searchEngineName = '';

		before('Reset settings', function() {
			return resetSettings(this);
		});

		it('should be addable', async function()  {
			const elements = await findElement(webdriver.By.tagName('crm-app'))
				.findElements(webdriver.By.tagName('default-link'));
			const index = elements.length - 1;
			await elements[index].findElement(webdriver.By.tagName('paper-button')).click();
			const name = await elements[index].findElement(webdriver.By.tagName('paper-input')).getProperty('value');
			const link = await elements[index].findElement(webdriver.By.tagName('a')).getAttribute('href');
			const crm = await getCRM<Array<CRM.ScriptNode>>();
			const element = crm[crm.length - 1];

			searchEngineLink = link;
			searchEngineName = name;
			
			assert.strictEqual(element.name, name, 
				'name is the same as expected');
			assert.strictEqual(element.type, 'script',
				'type of element is script');
			assert.isObject(element.value, 'element value is object');
			assert.property(element.value, 'script', 'value has script property');
			assert.isString(element.value.script, 'script is a string');
			assert.strictEqual(element.value.script, '' +
				'var query;\n' +
				'var url = "' + link + '";\n' +
				'if (crmAPI.getSelection()) {\n' +
				'	query = crmAPI.getSelection();\n' +
				'} else {\n' +
				'	query = window.prompt(\'Please enter a search query\');\n' +
				'}\n' +
				'if (query) {\n' +
				'	window.open(url.replace(/%s/g,query), \'_blank\');\n' +
				'}',
				'script1 value matches expected');
		});
		it('should be renamable', async function() {
			const renameName = 'SomeName';
			const elements = await findElement(webdriver.By.tagName('crm-app'))
				.findElements(webdriver.By.tagName('default-link'));
			const index = elements.length - 1;
			await elements[index].findElement(webdriver.By.tagName('paper-input'))
				.findElement(webdriver.By.tagName('input'))
				.sendKeys(InputKeys.CLEAR_ALL, renameName);
			await elements[index].findElement(webdriver.By.tagName('paper-button')).click();
			const link = await elements[index].findElement(webdriver.By.tagName('a')).getAttribute('href');
			const crm = await getCRM<Array<CRM.ScriptNode>>();
			const element = crm[crm.length - 1];
			
			assert.strictEqual(renameName, element.name, 
				'name is the same as expected');
			assert.strictEqual(element.type, 'script',
				'type of element is script');
			assert.isObject(element.value, 'element value is object');
			assert.property(element.value, 'script', 'value has script property');
			assert.isString(element.value.script, 'script is a string');
			assert.strictEqual(element.value.script, '' +
				'var query;\n' +
				'var url = "' + link + '";\n' +
				'if (crmAPI.getSelection()) {\n' +
				'	query = crmAPI.getSelection();\n' +
				'} else {\n' +
				'	query = window.prompt(\'Please enter a search query\');\n' +
				'}\n' +
				'if (query) {\n' +
				'	window.open(url.replace(/%s/g,query), \'_blank\');\n' +
				'}',
				'script value matches expected');
		});
		it('should be saved', async function() {
			await reloadPage(this);
			const crm = await getCRM<Array<CRM.ScriptNode>>();
			await (async () => {
				const element = crm[crm.length - 2];

				assert.isDefined(element, 'element is defined');
				assert.strictEqual(element.name, searchEngineName, 
					'name is the same as expected');
				assert.strictEqual(element.type, 'script',
					'type of element is script');
				assert.isObject(element.value, 'element value is object');
				assert.property(element.value, 'script', 'value has script property');
				assert.isString(element.value.script, 'script is a string');
				assert.strictEqual(element.value.script, '' +
					'var query;\n' +
					'var url = "' + searchEngineLink + '";\n' +
					'if (crmAPI.getSelection()) {\n' +
					'	query = crmAPI.getSelection();\n' +
					'} else {\n' +
					'	query = window.prompt(\'Please enter a search query\');\n' +
					'}\n' +
					'if (query) {\n' +
					'	window.open(url.replace(/%s/g,query), \'_blank\');\n' +
					'}',
					'script value matches expected');
			})();
			await (async () => {
				const element2 = crm[crm.length - 1];	
				assert.strictEqual(element2.name, 'SomeName', 
					'name is the same as expected');
				assert.strictEqual(element2.type, 'script',
					'type of element is script');
				assert.isObject(element2.value, 'element value is object');
				assert.property(element2.value, 'script', 'value has script property');
				assert.isString(element2.value.script, 'script is a string');
				assert.strictEqual(element2.value.script, '' +
					'var query;\n' +
					'var url = "' + searchEngineLink + '";\n' +
					'if (crmAPI.getSelection()) {\n' +
					'	query = crmAPI.getSelection();\n' +
					'} else {\n' +
					'	query = window.prompt(\'Please enter a search query\');\n' +
					'}\n' +
					'if (query) {\n' +
					'	window.open(url.replace(/%s/g,query), \'_blank\');\n' +
					'}',
					'script2 value matches expected');
			});
		});
	});
	describe('URIScheme', function() {
		if (SKIP_OPTIONS_PAGE) {
			return;
		}
		before('Reset settings', function() {
			return resetSettings(this);
		});
		this.slow(5000);
		this.timeout(7500 * TIME_MODIFIER);

		async function testURIScheme(toExecutePath: string, schemeName: string) {
			await findElement(webdriver.By.tagName('crm-app'))
				.findElement(webdriver.By.className('URISchemeGenerator'))
				.findElement(webdriver.By.tagName('paper-button'))
				.click()
				
			const lastCall = JSON.parse(await driver.executeScript(inlineFn(() => {
				return JSON.stringify(window.chrome._lastCall);
			})));
			assert.isDefined(lastCall, 'a call to the chrome API was made');
			assert.strictEqual(lastCall.api, 'downloads.download',
				'chrome downloads API was called');
			assert.isArray(lastCall.args, 'api args are present');
			assert.lengthOf(lastCall.args, 1, 'api has only one arg');
			assert.strictEqual(lastCall.args[0].url, 
				'data:text/plain;charset=utf-8;base64,' + btoa([
				'Windows Registry Editor Version 5.00',
				'',
				'[HKEY_CLASSES_ROOT\\' + schemeName + ']',
				'@="URL:' + schemeName +' Protocol"',
				'"URL Protocol"=""',
				'',
				'[HKEY_CLASSES_ROOT\\' + schemeName + '\\shell]',
				'',
				'[HKEY_CLASSES_ROOT\\' + schemeName + '\\shell\\open]',
				'',
				'[HKEY_CLASSES_ROOT\\' + schemeName + '\\shell\\open\\command]',
				'@="\\"' + toExecutePath.replace(/\\/g, '\\\\') + '\\""'
			].join('\n')),
				'file content matches expected');
			assert.strictEqual(lastCall.args[0].filename, 
				schemeName + '.reg', 'filename matches expected');
		}

		afterEach('Reset page settings', function() {
			return resetSettings(this);
		});

		const defaultToExecutePath = 'C:\\files\\my_file.exe';
		const defaultSchemeName = 'myscheme';
		it('should be able to download the default file', async function()  {
			const toExecutePath = defaultToExecutePath;
			const schemeName = defaultSchemeName;
			await testURIScheme(toExecutePath, schemeName);
		});
		it('should be able to download when a different file path was entered', async function()  {
			const toExecutePath = 'somefile.a.b.c';
			const schemeName = defaultSchemeName;
			await findElement(webdriver.By.tagName('crm-app'))
				.findElement(webdriver.By.id('URISchemeFilePath'))
				.findElement(webdriver.By.tagName('input'))
				.sendKeys(InputKeys.CLEAR_ALL, toExecutePath);
			await testURIScheme(toExecutePath, schemeName);
		});
		it('should be able to download when a different scheme name was entered', async function()  {
			const toExecutePath = defaultToExecutePath;
			const schemeName = getRandomString(25);
			await findElement(webdriver.By.tagName('crm-app'))
				.findElement(webdriver.By.id('URISchemeSchemeName'))
				.findElement(webdriver.By.tagName('input'))
				.sendKeys(InputKeys.CLEAR_ALL, schemeName);
			await findElement(webdriver.By.tagName('crm-app'))
				.findElement(webdriver.By.id('URISchemeFilePath'))
				.findElement(webdriver.By.tagName('input'))
				.sendKeys(InputKeys.CLEAR_ALL, toExecutePath);
			await testURIScheme(toExecutePath, schemeName);
		});
		it('should be able to download when a different scheme name and a different file path are entered', 
			async () => {
				const toExecutePath = 'somefile.x.y.z';
				const schemeName = getRandomString(25);
				await findElement(webdriver.By.tagName('crm-app'))
					.findElement(webdriver.By.id('URISchemeFilePath'))
					.findElement(webdriver.By.tagName('input'))
					.sendKeys(InputKeys.CLEAR_ALL, toExecutePath);
				await findElement(webdriver.By.tagName('crm-app'))
					.findElement(webdriver.By.id('URISchemeSchemeName'))
					.findElement(webdriver.By.tagName('input'))
					.sendKeys(InputKeys.CLEAR_ALL, schemeName);
				await testURIScheme(toExecutePath, schemeName);
			});
	});

	function testNameInput(type: CRM.NodeType) {
		const defaultName = 'name';
		describe('Name Input', function() {
			this.timeout(10000 * TIME_MODIFIER);
			this.slow(10000);

			it('should not change when not saved', async function() {
				before('Reset settings', function() {
					return resetSettings(this);
				});

				const name = getRandomString(25);
				await resetSettings(this);
				await openDialog(type);
				const dialog = await getDialog(type);
				await dialog.findElement(webdriver.By.id('nameInput'))
					.sendKeys(InputKeys.CLEAR_ALL, name)
				await cancelDialog(dialog);

				const crm = await getCRM();
				assert.strictEqual(crm[0].type, type, 
					`type is ${type}`);
				assert.strictEqual(crm[0].name, defaultName, 
					'name has not been saved');
			});
			const name = getRandomString(25);
			it('should be editable when saved', async function()  {
				before('Reset settings', function() {
					return resetSettings(this);
				});

				await resetSettings(this);
				await openDialog(type);
				const dialog = await getDialog(type);
				dialog.findElement(webdriver.By.id('nameInput'))
					.sendKeys(InputKeys.CLEAR_ALL, name);
				await wait(300);
				await saveDialog(dialog);
				await wait(300);

				const crm = await getCRM();
				assert.strictEqual(crm[0].type, type, 
					'type is link');
				assert.strictEqual(crm[0].name, name, 
					'name has been properly saved');
			});
			it('should be saved when changed', async function() {
				await reloadPage(this)
				const crm = await getCRM();
				assert.strictEqual(crm[0].type, type, 
					`type is ${type}`);
				assert.strictEqual(crm[0].name, name, 
					'name has been properly saved');
			});
		});
	}

	function testVisibilityTriggers(type: CRM.NodeType) {
		describe('Triggers', function() {
			this.timeout(15000 * TIME_MODIFIER);
			this.slow(12000);

			it('should not change when not saved', async function()  {
				await resetSettings(this);
				await openDialog(type);
				const dialog = await getDialog(type);
				await dialog.findElement(webdriver.By.id('showOnSpecified')).click()
				await dialog.findElement(webdriver.By.id('addTrigger'))
					.click()
					.click();

				await wait(500);
				const triggers = await dialog.findElements(webdriver.By.className('executionTrigger'))
				await triggers[0].findElement(webdriver.By.tagName('paper-checkbox')).click();
				await triggers[0].sendKeys(InputKeys.CLEAR_ALL, 'www.google.com');
				await triggers[1].sendKeys(InputKeys.CLEAR_ALL, 'www.google.com');
				await cancelDialog(dialog);
				const crm = await getCRM();
				assert.lengthOf(crm[0].triggers, 1, 
					'no triggers have been added');
				assert.isFalse(crm[0].triggers[0].not, 
					'first trigger NOT status did not change');
				assert.strictEqual(crm[0].triggers[0].url, 
					'*://*.example.com/*',
					'first trigger url stays the same');
			});
			it('should be addable/editable when saved', async () => {
				await resetSettings(this);
				await openDialog(type);
				const dialog = await getDialog(type);
				await dialog.findElement(webdriver.By.id('showOnSpecified')).click();
				await dialog.findElement(webdriver.By.id('addTrigger'))
					.click()
					.click();
				await wait(500);
				const triggers = await dialog.findElements(webdriver.By.className('executionTrigger'));
				await triggers[0].findElement(webdriver.By.tagName('paper-checkbox')).click();
				await triggers[1].findElement(webdriver.By.tagName('paper-input'))
					.sendKeys(InputKeys.CLEAR_ALL, 'http://www.google.com');
				await saveDialog(dialog);

				const crm = await getCRM();
				assert.lengthOf(crm[0].triggers, 3, 'trigger has been added');
				assert.isTrue(crm[0].triggers[0].not, 'first trigger is NOT');
				assert.isFalse(crm[0].triggers[1].not, 'second trigger is not NOT');
				assert.strictEqual(crm[0].triggers[0].url, '*://*.example.com/*',
					'first trigger url stays the same');
				assert.strictEqual(crm[0].triggers[1].url, 'http://www.google.com',
					'second trigger url changed');
			});
			it('should be preserved on page reload', async function() {
				await reloadPage(this);
				await wait(500);
				const crm = await getCRM();

				assert.lengthOf(crm[0].triggers, 3, 
					'trigger has been added');
				assert.isTrue(crm[0].triggers[0].not, 
					'first trigger is NOT');
				assert.isFalse(crm[0].triggers[1].not,
					'second trigger is not NOT');
				assert.strictEqual(crm[0].triggers[0].url, 
					'*://*.example.com/*',
					'first trigger url stays the same');
				assert.strictEqual(crm[0].triggers[1].url,
					'http://www.google.com',
					'second trigger url changed');
			});
		});
	}

	function testContentTypes(type: CRM.NodeType) {
		describe('Content Types', function() {
			this.timeout(30000 * TIME_MODIFIER);
			this.slow(15000);
			const defaultContentTypes = [true, true, true, false, false, false];

			it('should be editable through clicking on the checkboxes', async function()  {
				await resetSettings(this);
				await openDialog('link');
				const dialog = await getDialog('link');
				await dialog.findElements(webdriver.By.className('showOnContentItemCont')).mapWait((element) => {
					return element.findElement(webdriver.By.tagName('paper-checkbox')).click().then(() => {
						return wait(25);
					});
				});
				await saveDialog(dialog);
				const crm = await getCRM();

				assert.isFalse(crm[0].onContentTypes[0], 
					'content types that were on were switched off');
				assert.isTrue(crm[0].onContentTypes[4],
					'content types that were off were switched on');
				let newContentTypes = defaultContentTypes.map(contentType => !contentType);
				//CRM prevents you from turning off all content types and 2 is the one that stays on
				newContentTypes[2] = true;
				newContentTypes = crm[0].onContentTypes;
				assert.deepEqual(crm[0].onContentTypes,
					newContentTypes,
					'all content types were toggled');
			});
			it('should be editable through clicking on the icons', async function()  {
				await resetSettings(this);
				await openDialog('link');
				const dialog = await getDialog('link');
				await dialog.findElements(webdriver.By.className('showOnContentItemCont')).mapWait((element) => {
					return element.findElement(webdriver.By.className('showOnContentItemIcon')).click().then(() => {
						return wait(25);
					});
				});
				await saveDialog(dialog);
				const crm = await getCRM();

				assert.isFalse(crm[0].onContentTypes[0], 
					'content types that were on were switched off');
				assert.isTrue(crm[0].onContentTypes[4],
					'content types that were off were switched on');
				const newContentTypes = defaultContentTypes.map(contentType => !contentType);
				//CRM prevents you from turning off all content types and 4 is the one that stays on
				newContentTypes[2] = true;
				assert.deepEqual(crm[0].onContentTypes,
					newContentTypes,
					'all content types were toggled');
			});
			it('should be editable through clicking on the names', async function()  {
				await resetSettings(this);
				await openDialog('link');
				const dialog = await getDialog('link');
				await dialog.findElements(webdriver.By.className('showOnContentItemCont')).mapWait((element) => {
					return element.findElement(webdriver.By.className('showOnContentItemIcon')).click().then(() => {
						return wait(25);
					});
				});
				await saveDialog(dialog);
				const crm = await getCRM();

				assert.isFalse(crm[0].onContentTypes[0], 
					'content types that were on were switched off');
				assert.isTrue(crm[0].onContentTypes[4],
					'content types that were off were switched on');
				const newContentTypes = defaultContentTypes.map(contentType => !contentType);
				//CRM prevents you from turning off all content types and 4 is the one that stays on
				newContentTypes[2] = true;
				assert.deepEqual(crm[0].onContentTypes,
					newContentTypes,
					'all content types were toggled');
			});
			it('should be preserved on page reload', async function() {
				await reloadPage(this);
				const crm = await getCRM();

				assert.isFalse(crm[0].onContentTypes[0], 
					'content types that were on were switched off');
				assert.isTrue(crm[0].onContentTypes[4],
					'content types that were off were switched on');
				const newContentTypes = defaultContentTypes.map(contentType => !contentType);
				//CRM prevents you from turning off all content types and 4 is the one that stays on
				newContentTypes[2] = true;
				assert.deepEqual(crm[0].onContentTypes,
					newContentTypes,
					'all content types were toggled');
			});
			it('should not change when not saved', async function()  {
				await resetSettings(this);
				await openDialog('link');
				const dialog = await getDialog('link');
				await dialog.findElements(webdriver.By.className('showOnContentItemCont')).mapWait((element) => {
					return element.findElement(webdriver.By.className('showOnContentItemIcon')).click().then(() => {
						return wait(25);
					});
				});
				await cancelDialog(dialog);
				const crm = await getCRM();

				assert.isTrue(crm[0].onContentTypes[0], 
					'content types that were on did not change');
				assert.isFalse(crm[0].onContentTypes[4],
					'content types that were off did not change');
				assert.deepEqual(crm[0].onContentTypes,
					defaultContentTypes,
					'all content types were not toggled');
			});
		});
	}

	function testClickTriggers(type: CRM.NodeType) {
		describe('Click Triggers', function() {
			this.timeout(30000 * TIME_MODIFIER);
			this.slow(25000);
			[0, 1, 2, 3, 4].forEach((triggerOptionIndex) => {
				describe(`Trigger option ${triggerOptionIndex}`, function() {
					it(`should be possible to select trigger option number ${triggerOptionIndex}`, async function() {
						await resetSettings(this);
						await openDialog(type);
						const dialog = await getDialog(type);
						await wait(500, dialog);
						await dialog.findElement(webdriver.By.id('dropdownMenu')).click();
						await wait(500);
						await dialog.findElements(webdriver.By.css('.stylesheetLaunchOption, .scriptLaunchOption'))
							.get(triggerOptionIndex)
							.click();
						await wait(5000);
						await saveDialog(dialog);
						const crm = await getCRM<Array<CRM.StylesheetNode|CRM.ScriptNode>>();

						assert.strictEqual(crm[0].value.launchMode, triggerOptionIndex,
							'launchmode is the same as expected');
					});
					it('should be saved on page reload', async function() {
						await reloadPage(this);
						const crm = await getCRM<Array<CRM.StylesheetNode|CRM.ScriptNode>>();

						assert.strictEqual(crm[0].value.launchMode, triggerOptionIndex,
							'launchmode is the same as expected');
					});
					it('should not be saved when cancelled', async function() {
						await resetSettings(this);
						await openDialog(type);
						const dialog = await getDialog(type);
						await wait(500, dialog);
						await dialog.findElement(webdriver.By.id('dropdownMenu')).click();
						await wait(500);
						await dialog.findElements(webdriver.By.css('.stylesheetLaunchOption, .scriptLaunchOption'))
							.get(triggerOptionIndex)
							.click();
						await wait(1500);
						await cancelDialog(dialog);
						const crm = await getCRM<Array<CRM.StylesheetNode|CRM.ScriptNode>>();

						assert.strictEqual(crm[0].value.launchMode, 0,
							'launchmode is the same as before');
					});
				});
			});
			[2, 3].forEach((triggerOptionIndex) => {
				describe(`Trigger Option ${triggerOptionIndex} with URLs`, function() {
					it('should be editable', async () => {
						await resetSettings(this);
						await openDialog(type);
						const dialog = await getDialog(type);
						await wait(500);
						await dialog.findElement(webdriver.By.id('dropdownMenu')).click();
						await wait(1000);
						await dialog.findElements(
							webdriver.By.css('.stylesheetLaunchOption, .scriptLaunchOption'))
							.get(triggerOptionIndex)
							.click();
						await wait(1000);
						await dialog.findElement(webdriver.By.id('addTrigger'))
							.click()
							.click();
						await wait(500);
						const triggers = await dialog.findElements(webdriver.By.className('executionTrigger'));
						await triggers[0].findElement(webdriver.By.tagName('paper-checkbox')).click()
						await triggers[1].findElement(webdriver.By.tagName('input'))
							.sendKeys(InputKeys.CLEAR_ALL, 'www.google.com');
						await saveDialog(dialog);
						const crm = await getCRM();

						assert.lengthOf(crm[0].triggers, 3, 
							'trigger has been added');
						assert.isTrue(crm[0].triggers[0].not, 
							'first trigger is NOT');
						assert.isFalse(crm[0].triggers[1].not,
							'second trigger is not NOT');
						assert.strictEqual(crm[0].triggers[0].url, 
							'*://*.example.com/*',
							'first trigger url stays the same');
						assert.strictEqual(crm[0].triggers[1].url,
							'www.google.com',
							'second trigger url changed');
					});
					it('should be saved on page reload', async () => {
						const crm = await getCRM<Array<CRM.StylesheetNode|CRM.ScriptNode>>();
						assert.lengthOf(crm[0].triggers, 3, 
							'trigger has been added');
						assert.isTrue(crm[0].triggers[0].not, 
							'first trigger is NOT');
						assert.isFalse(crm[0].triggers[1].not,
							'second trigger is not NOT');
						assert.strictEqual(crm[0].triggers[0].url, 
							'*://*.example.com/*',
							'first trigger url stays the same');
						assert.strictEqual(crm[0].triggers[1].url,
							'www.google.com',
							'second trigger url changed');
					});
					it('should not be saved when cancelled', async () => {
						await resetSettings(this);
						await openDialog(type);
						const dialog = await getDialog(type);
						await wait(500);
						await dialog.findElement(webdriver.By.id('dropdownMenu')).click();
						await wait(1000);
						await dialog.findElements(
							webdriver.By.css('.stylesheetLaunchOption, .scriptLaunchOption'))
							.get(triggerOptionIndex)
							.click();
						await wait(1000);
						await dialog.findElement(webdriver.By.id('addTrigger'))
							.click()
							.click();
						await wait(500);
						const triggers = await dialog.findElements(webdriver.By.className('executionTrigger'));
						await triggers[0].findElement(webdriver.By.tagName('paper-checkbox')).click()
						await triggers[1].findElement(webdriver.By.tagName('input'))
							.sendKeys(InputKeys.CLEAR_ALL, 'www.google.com');
						await cancelDialog(dialog);
						const crm = await getCRM();
						assert.lengthOf(crm[0].triggers, 1, 
							'no triggers have been added');
						assert.isFalse(crm[0].triggers[0].not, 
							'first trigger NOT status did not change');
						assert.strictEqual(crm[0].triggers[0].url, 
							'*://*.example.com/*',
							'first trigger url stays the same');
					});
				});
			});
		});
	}

	function testEditorSettings(type: CRM.NodeType) {
		describe('Theme', function() {
			this.slow(8000);
			this.timeout(10000 * TIME_MODIFIER);
			it('is changable', async function() {
				await resetSettings(this);
				await openDialog(type);
				const dialog = await getDialog(type);
				await wait(500, dialog);
				await dialog.findElement(webdriver.By.id('editorSettings')).click();
				await wait(500);
				await dialog.findElement(webdriver.By.id('editorThemeSettingWhite')).click();
				const settings = await getSyncSettings();

				assert.strictEqual(settings.editor.theme, 'white',
					'theme has been switched to white');
			});
			it('is preserved on page reload', async function() {
				await reloadPage(this);
				const settings = await getSyncSettings();

				assert.strictEqual(settings.editor.theme, 'white',
					'theme has been switched to white');
			});
		});
		describe('Zoom', function() {
			this.slow(30000);
			this.timeout(40000 * TIME_MODIFIER);

			const newZoom = '135';
			it('is changable', async function() {
				await resetSettings(this);
				await openDialog(type);
				const dialog = await getDialog(type);
				await wait(500, dialog);
				await dialog.findElement(webdriver.By.id('editorSettings')).click();
				await wait(500);
				await dialog.findElement(webdriver.By.id('editorThemeFontSizeInput'))
					.findElement(webdriver.By.tagName('input'))
					.sendKeys(InputKeys.BACK_SPACE,
						InputKeys.BACK_SPACE,
						InputKeys.BACK_SPACE,
						newZoom);
				await wait(10000, dialog);
				const settings = await getSyncSettings();

				assert.strictEqual(settings.editor.zoom, newZoom,
					'zoom has changed to the correct number');
			});
			it('is preserved on page reload', async function() {
				await reloadPage(this);
				const settings = await getSyncSettings();

				assert.strictEqual(settings.editor.zoom, newZoom,
					'zoom has changed to the correct number');
			});
		});
	}

	describe('CRM Editing', function() {
		if (SKIP_CRM_DIALOGS) {
			return;
		}
		before('Reset settings', function() {
			return resetSettings(this);
		});
		this.timeout(60000 * TIME_MODIFIER);

		describe('Type Switching', function() {
			if (SKIP_TYPES_EXCEPT) {
				return;
			}
			async function testTypeSwitch(type: string) {
				await driver.executeScript(inlineFn(() => {
					const crmItem = (window.app.editCRM.shadowRoot.querySelectorAll('edit-crm-item:not([root-node])') as NodeListOf<EditCrmItem>).item(0);
					crmItem.typeIndicatorMouseOver();
				}));
				await wait(300);
				await driver.executeScript(inlineFn(() => {
					const crmItem = window.app.editCRM.shadowRoot.querySelectorAll('edit-crm-item:not([root-node])').item(0);
					const typeSwitcher = crmItem.shadowRoot.querySelector('type-switcher');
					typeSwitcher.openTypeSwitchContainer();
				}));
				await wait(300);
				const typesMatch = await driver.executeScript(inlineFn(() => {
					const crmItem = (window.app.editCRM.shadowRoot.querySelectorAll('edit-crm-item:not([root-node])') as NodeListOf<EditCrmItem>).item(0);
					const typeSwitcher = crmItem.shadowRoot.querySelector('type-switcher');
					(typeSwitcher.shadowRoot.querySelector('.typeSwitchChoice[type="REPLACE.type"]') as HTMLElement)
						.click();
					crmItem.typeIndicatorMouseLeave();
					return window.app.settings.crm[0].type === 'REPLACE.type' as CRM.NodeType;
				}, {
					type: type
				}));

				assert.isTrue(typesMatch, 'new type matches expected');
			}
			this.timeout(10000 * TIME_MODIFIER);
			this.slow(5000);
			
			it('should be able to switch to a script', async function()  {
				await resetSettings(this);
				await testTypeSwitch('script');
			});
			it('should be preserved', async function() {
				await reloadPage(this);
				const crm = await getCRM();
				
				assert.strictEqual(crm[0].type, 'script', 'type has stayed the same');
			});
			it('should be able to switch to a menu', async function()  {
				await resetSettings(this);
				await testTypeSwitch('menu');
			});
			it('should be preserved', async function() {
				await reloadPage(this);
				const crm = await getCRM();
				
				assert.strictEqual(crm[0].type, 'menu', 'type has stayed the same');
			});
			it('should be able to switch to a divider', async function()  {
				await resetSettings(this);
				await testTypeSwitch('divider');
			});
			it('should be preserved', async function() {
				await reloadPage(this);
				const crm = await getCRM();
				
				assert.strictEqual(crm[0].type, 'divider', 'type has stayed the same');
			});
			it('should be able to switch to a stylesheet', async function()  {
				await resetSettings(this);
				await testTypeSwitch('stylesheet');
			});
			it('should be preserved', async function() {
				await reloadPage(this);
				const crm = await getCRM();
				
				assert.strictEqual(crm[0].type, 'stylesheet', 'type has stayed the same');
			});
		});
		describe('Link Dialog', function() {
			const type: CRM.NodeType = 'link';
			if (SKIP_TYPES_EXCEPT && SKIP_TYPES_EXCEPT !== type) {
				return;
			}

			this.timeout(30000 * TIME_MODIFIER);

			before('Reset settings', function() {
				return resetSettings(this);
			});

			testNameInput(type);
			testVisibilityTriggers(type);
			testContentTypes(type);

			describe('Links', function() {
				this.slow(20000);
				this.timeout(25000 * TIME_MODIFIER);

				after('Reset settings', function() {
					return resetSettings(this);
				});

				it('open in new tab property should be editable', async function()  {
					await resetSettings(this);
					await openDialog('link');
					const dialog = await getDialog('link');
					await dialog.findElement(webdriver.By.className('linkChangeCont'))
						.findElement(webdriver.By.tagName('paper-checkbox'))
						.click();
					await saveDialog(dialog);
					const crm = await getCRM<Array<CRM.LinkNode>>();

					assert.lengthOf(crm[0].value, 1, 'node has only 1 link');
					assert.isFalse(crm[0].value[0].newTab, 'newTab has been switched off');
				});
				it('url property should be editable', async function()  {
					const newUrl = 'www.google.com';
					await resetSettings(this);
					await openDialog('link');
					const dialog = await getDialog('link');
					await dialog.findElement(webdriver.By.className('linkChangeCont'))
						.findElement(webdriver.By.tagName('paper-input'))
						.sendKeys(InputKeys.CLEAR_ALL, newUrl);
					await saveDialog(dialog);
					const crm = await getCRM<Array<CRM.LinkNode>>();

					assert.lengthOf(crm[0].value, 1, 'node has only 1 link');
					assert.strictEqual(crm[0].value[0].url, newUrl,
						'url has been changed');
				});
				it('should be addable', async function()  {
					const defaultLink = {
						newTab: true,
						url: 'https://www.example.com'
					};
					await resetSettings(this);
					await openDialog('link');
					const dialog = await getDialog('link');
					await dialog
						.findElement(webdriver.By.id('changeLink'))
						.findElement(webdriver.By.tagName('paper-button'))
						.click()
						.click()
						.click()
					await saveDialog(dialog);
					const crm = await getCRM<Array<CRM.LinkNode>>();

					assert.lengthOf(crm[0].value, 4, 'node has 4 links now');
					assert.deepEqual(crm[0].value,
						Array.apply(null, Array(4)).map(() => defaultLink),
						'new links match default link value');
				});
				it('should be editable when newly added', async function()  {
					const newUrl = 'www.google.com';
					const newValue = {
						newTab: true,
						url: newUrl
					};
					await resetSettings(this);
					await openDialog('link');
					const dialog = await getDialog('link');
					await dialog
						.findElement(webdriver.By.id('changeLink'))
						.findElement(webdriver.By.tagName('paper-button'))
						.click()
						.click()
						.click()
					await wait(500);
					await forEachPromise(await dialog.findElements(webdriver.By.className('linkChangeCont')), (element) => {
						return new webdriver.promise.Promise(async (resolve) => {
							await wait(250);
							await element
								.findElement(webdriver.By.tagName('paper-checkbox'))
								.click();
							await element
								.findElement(webdriver.By.tagName('paper-input'))
								.sendKeys(InputKeys.CLEAR_ALL, newUrl);
							resolve(null);
						});
					});
					await wait(500);
					await saveDialog(dialog);
					const crm = await getCRM<Array<CRM.LinkNode>>();

					assert.lengthOf(crm[0].value, 4, 'node has 4 links now');

					//Only one newTab can be false at a time
					const newLinks = Array.apply(null, Array(4))
						.map(() => JSON.parse(JSON.stringify(newValue)));
					newLinks[3].newTab = false;

					assert.deepEqual(crm[0].value, newLinks,
						'new links match changed link value');
				});
				it('should be preserved on page reload', async function() {
					const newUrl = 'www.google.com';
					const newValue = {
						newTab: true,
						url: newUrl
					};

					await reloadPage(this);
					const crm = await getCRM<Array<CRM.LinkNode>>();

					assert.lengthOf(crm[0].value as Array<CRM.LinkNodeLink>, 4, 'node has 4 links now');

					//Only one newTab can be false at a time
					const newLinks = Array.apply(null, Array(4))
						.map(() => JSON.parse(JSON.stringify(newValue)));
					newLinks[3].newTab = false;

					assert.deepEqual(crm[0].value, newLinks,
						'new links match changed link value');
				});
				it('should not change when not saved', async function()  {
					const newUrl = 'www.google.com';
					const defaultLink = {
						newTab: true,
						url: 'https://www.example.com'
					};
					await resetSettings(this);
					await openDialog('link');
					const dialog = await getDialog('link');
					await dialog
						.findElement(webdriver.By.id('changeLink'))
						.findElement(webdriver.By.tagName('paper-button'))
						.click()
						.click()
						.click()
					await forEachPromise(await dialog.findElements(webdriver.By.className('linkChangeCont')), (element) => {
						return element
							.findElement(webdriver.By.tagName('paper-checkbox'))
							.click()
							.then(() => {
								return element
									.sendKeys(InputKeys.CLEAR_ALL, newUrl);
							});
					});
					await cancelDialog(dialog);
					const crm = await getCRM<Array<CRM.LinkNode>>();

					assert.lengthOf(crm[0].value, 1, 'node still has 1 link');
					assert.deepEqual(crm[0].value, [defaultLink],
						'link value has stayed the same');
				});
			});
		});
		describe('Divider Dialog', function() {
			const type: CRM.NodeType = 'divider';
			if (SKIP_TYPES_EXCEPT && SKIP_TYPES_EXCEPT !== type) {
				return;
			}

			this.timeout(60000 * TIME_MODIFIER);
			before('Reset settings', function() {
				return resetSettings(this);
			});

			testNameInput(type);
			testVisibilityTriggers(type);
			testContentTypes(type);
		});
		describe('Menu Dialog', function() {
			const type: CRM.NodeType = 'menu';
			if (SKIP_TYPES_EXCEPT && SKIP_TYPES_EXCEPT !== type) {
				return;
			}

			this.timeout(60000 * TIME_MODIFIER);
			before('Reset settings', function() {
				return resetSettings(this);
			});

			testNameInput(type);
			testVisibilityTriggers(type);
			testContentTypes(type);
		});
		describe('Stylesheet Dialog', function() {
			const type: CRM.NodeType = 'stylesheet';
			if (SKIP_TYPES_EXCEPT && SKIP_TYPES_EXCEPT !== type) {
				return;
			}

			before('Reset settings', function() {
				return resetSettings(this);
			});

			testNameInput(type);
			testContentTypes(type);
			testClickTriggers(type);

			describe('Toggling', function() {
				this.timeout(15000 * TIME_MODIFIER);
				this.slow(7500);
				it('should be possible to toggle on', async () => {
					await resetSettings(this);
					await openDialog(type);
					const dialog = await getDialog(type);
					await dialog.findElement(webdriver.By.id('isTogglableButton'))
						.click();
					await saveDialog(dialog);
					const crm = await getCRM<Array<CRM.StylesheetNode>>();

					assert.isTrue(crm[0].value.toggle, 'toggle option is set to on');
				});
				it('should be saved on page reload', async function() {
					await reloadPage(this);
					const crm = await getCRM<Array<CRM.StylesheetNode>>();

					assert.isTrue(crm[0].value.toggle, 'toggle option is set to on');
				});
				it('should be possible to toggle on-off', async () => {
					await resetSettings(this);
					await openDialog(type);
					const dialog = await getDialog(type);
					await dialog.findElement(webdriver.By.id('isTogglableButton'))
						.click()
						.click()
					await saveDialog(dialog);
					const crm = await getCRM<Array<CRM.StylesheetNode>>();

					assert.isFalse(crm[0].value.toggle, 'toggle option is set to off');
				});
				it('should not be saved on cancel', async () => {
					await resetSettings(this);
					await openDialog(type);
					const dialog = await getDialog(type);
					await dialog.findElement(webdriver.By.id('isTogglableButton'))
						.click();
					await cancelDialog(dialog);
					const crm = await getCRM<Array<CRM.StylesheetNode>>();

					assert.isNotTrue(crm[0].value.toggle, 'toggle option is unchanged');
				});
			});
			describe('Default State', function() {
				this.slow(7500);
				this.timeout(10000 * TIME_MODIFIER);
				it('should be togglable to true', async () => {
					await resetSettings(this);
					await openDialog(type);
					const dialog = await getDialog(type);
					await dialog.findElement(webdriver.By.id('isTogglableButton'))
						.click();
					await dialog.findElement(webdriver.By.id('isDefaultOnButton'))
						.click();
					await saveDialog(dialog);
					const crm = await getCRM<Array<CRM.StylesheetNode>>();

					assert.isTrue(crm[0].value.toggle, 'toggle option is set to true');
					assert.isTrue(crm[0].value.defaultOn, 'defaultOn is set to true');
				});
				it('should be saved on page reset', async function() {
					await reloadPage(this);
					const crm = await getCRM<Array<CRM.StylesheetNode>>();

					assert.isTrue(crm[0].value.toggle, 'toggle option is set to true');
					assert.isTrue(crm[0].value.defaultOn, 'defaultOn is set to false');
				});
				it('should be togglable to false', async () => {
					await resetSettings(this);
					await openDialog(type);
					const dialog = await getDialog(type);
					await dialog.findElement(webdriver.By.id('isTogglableButton'))
						.click();
					await dialog.findElement(webdriver.By.id('isDefaultOnButton'))
						.click()
						.click();
					await saveDialog(dialog);
					const crm = await getCRM<Array<CRM.StylesheetNode>>();

					assert.isTrue(crm[0].value.toggle, 'toggle option is set to true');
					assert.isFalse(crm[0].value.defaultOn, 'defaultOn is set to false');
				});
				it('should not be saved when cancelled', async () => {
					await resetSettings(this);
					await openDialog(type);
					const dialog = await getDialog(type);
					await dialog.findElement(webdriver.By.id('isTogglableButton'))
						.click();
					await dialog.findElement(webdriver.By.id('isDefaultOnButton'))
						.click();
					await cancelDialog(dialog);
					const crm = await getCRM<Array<CRM.StylesheetNode>>();

					assert.isNotTrue(crm[0].value.toggle, 'toggle option is set to false');
					assert.isNotTrue(crm[0].value.defaultOn, 'defaultOn is set to false');
				});
			});
			describe('Editor', function() {
				describe('Settings', function() {
					testEditorSettings(type);
				});
			});
		});
		describe('Script Dialog', function() {
			const type: CRM.NodeType = 'script';
			if (SKIP_TYPES_EXCEPT && SKIP_TYPES_EXCEPT !== type) {
				return;
			}

			before('Reset settings', function() {
				return resetSettings(this);
			});

			testNameInput(type);
			testContentTypes(type);
			testClickTriggers(type);

			describe('Editor', function() {
				describe('Settings', function() {
					testEditorSettings(type);
				});
				describe('Fullscreen Tools', function() {
					this.slow(70000);
					this.timeout(100000 * TIME_MODIFIER);
					describe('Libraries', function() {
						afterEach('Close dialog', async () => {
							await driver.executeScript(inlineFn(() => {
								window.doc.addLibraryDialog.close();
							}));
						});

						it('should be possible to add your own library through a URL', async () => {
							const tabId = getRandomId();
							const libName = getRandomString(25);
							const libUrl = 'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js';

							const dialog = await enterEditorFullscreen(this, type);
							const crmApp = await findElement(webdriver.By.tagName('crm-app'));
							await crmApp.findElement(webdriver.By.id('paperLibrariesSelector'))
								.findElement(webdriver.By.id('dropdownSelectedCont'))
								.click();
							await wait(1000);
							await crmApp.findElement(webdriver.By.id('addLibrary'))
								.click();
							await wait(1000);
							await crmApp.findElement(webdriver.By.id('addLibraryUrlInput'))
								.findElement(webdriver.By.tagName('input'))
								.sendKeys(InputKeys.CLEAR_ALL, libUrl);
							await wait(1000);
							await crmApp.findElement(webdriver.By.id('addLibraryButton'))
								.click();
							await wait(1000);
							const [isInvalid, libSizes] = await webdriver.promise.all([
								crmApp.findElement(webdriver.By.id('addedLibraryName'))
									.getProperty('invalid'),
									crmApp.findElement(webdriver.By.id('addLibraryProcessContainer'))
									.getSize()
							]) as [boolean, ClientRect];

							assert.isTrue(isInvalid, 'Name should be marked as invalid');
							assert.isTrue(Array.prototype.slice.apply(Object.getOwnPropertyNames(libSizes)).filter((key: keyof typeof libSizes) => {
								return libSizes[key] !== 0;
							}).length !== 0, 'Current dialog should be visible');

							await crmApp.findElement(webdriver.By.id('addedLibraryName'))
								.findElement(webdriver.By.tagName('input'))
								.sendKeys(InputKeys.CLEAR_ALL, libName);
							await wait(3000);
							await crmApp.findElement(webdriver.By.id('addLibraryButton'))
								.click();
							await wait(1000);
							await crmApp.findElement(webdriver.By.id('addLibraryConfirmAddition'))
								.click();
							await wait(1000);
							await driver.executeScript(inlineFn(() => {
								((window.app.$ as any).fullscreenEditorToggle as HTMLElement).click();
							}));
							await wait(2000);
							await saveDialog(dialog);
							await wait(2000);
							const crm = await getCRM<[CRM.ScriptNode]>();

							assert.include(crm[0].value.libraries, {
								name: libName,
								url: libUrl
							}, 'Library was added');

							await wait(200);
							//Get the code that is stored at given test URL
							const jqCode = await new webdriver.promise.Promise<string>((resolve) => {
								request(libUrl, (err: Error|void, res: XMLHttpRequest & {
									statusCode: number;
								}, body: string) => {
									assert.ifError(err, 'Should not fail the GET request');

									if (res.statusCode === 200) {
										resolve(body);
									} else {
										assert.ifError(new Error('err'), 'Should get 200 statuscode when doing GET request');
									}
								}).end();
							});
							const contextMenu = await getContextMenu();
							await driver.executeScript(inlineFn((REPLACE) => {
								window.chrome._clearExecutedScripts();
								return window.chrome._currentContextMenu[0]
									.children[0]
									.currentProperties.onclick(
										REPLACE.page, REPLACE.tab
									);
							}, {
								page: {
									menuItemId: contextMenu[0].id,
									editable: false,
									pageUrl: 'www.google.com'
								},
								tab: {
									id: tabId,
									index: 1,
									windowId: getRandomId(),
									highlighted: false,
									active: true,
									pinned: false,
									selected: false,
									url: 'http://www.google.com',
									title: 'Google',
									incognito: false
								}
							}));
							const activatedScripts = JSON.parse(await driver.executeScript(inlineFn(() => {
								const str = JSON.stringify(window.chrome._executedScripts);
								window.chrome._clearExecutedScripts();
								return str;
							})));

							assert.include(activatedScripts, {
								id: tabId,
								code: jqCode
							}, 'library was properly executed');
						});
						it('should not add a library through url when not saved', async () => {
							const libName = getRandomString(25);
							const libUrl = 'https://ajax.googleapis.com/ajax/libs/angular_material/1.1.1/angular-material.min.js';

							const dialog = await enterEditorFullscreen(this, type);
							const crmApp = await findElement(webdriver.By.tagName('crm-app'));
							await crmApp.findElement(webdriver.By.id('paperLibrariesSelector'))
								.findElement(webdriver.By.id('dropdownSelectedCont'))
								.click();
							await wait(1000);
							await crmApp.findElement(webdriver.By.className('addLibrary'))
								.click()
							await wait(1000);
							await crmApp.findElement(webdriver.By.id('addLibraryUrlInput'))
								.findElement(webdriver.By.tagName('input'))
								.sendKeys(InputKeys.CLEAR_ALL, libUrl);
							await wait(1000);
							await crmApp.findElement(webdriver.By.id('addLibraryButton'))
								.click();
							await wait(5000);
							const [isInvalid, libSizes] = await webdriver.promise.all([
								crmApp.findElement(webdriver.By.id('addedLibraryName'))
									.getProperty('invalid'),
								crmApp.findElement(webdriver.By.id('addLibraryProcessContainer'))
									.getSize()
							]) as [boolean, ClientRect];

							assert.isTrue(isInvalid, 'Name should be marked as invalid');
							assert.isTrue(Array.prototype.slice.apply(Object.getOwnPropertyNames(libSizes)).filter((key: keyof typeof libSizes) => {
								return libSizes[key] !== 0;
							}).length !== 0, 'Current dialog should be visible');

							await crmApp.findElement(webdriver.By.id('addedLibraryName'))
								.findElement(webdriver.By.tagName('input'))
								.sendKeys(InputKeys.CLEAR_ALL, libName);
							await wait(5000);
							await crmApp.findElement(webdriver.By.id('addLibraryButton'))
								.click();
							await wait(1000);
							await crmApp.findElement(webdriver.By.id('addLibraryConfirmAddition'))
								.click();
							await wait(1000);
							await driver.executeScript(inlineFn(() => {
								(window.app.$ as any).editorFullScreen.click();
							}));
							await wait(2000);
							await cancelDialog(dialog);
							await wait(2000);
							const crm = await getCRM<[CRM.ScriptNode]>();

							assert.notInclude(crm[0].value.libraries, {
								name: libName,
								url: libUrl
							}, 'Library was added');
						});
						it('should be possible to add your own library through code', async () => {
							const libName = getRandomString(25);
							const testCode = getRandomString(100);
							const tabId = getRandomId();

							const dialog = await enterEditorFullscreen(this, type);
							const crmApp = await findElement(webdriver.By.tagName('crm-app'));
							await crmApp.findElement(webdriver.By.id('paperLibrariesSelector'))
								.findElement(webdriver.By.id('dropdownSelectedCont'))
								.click();
							await wait(1000);
							await crmApp.findElement(webdriver.By.className('addLibrary'))
								.click();
									await wait(1000);
							await crmApp.findElement(webdriver.By.id('addLibraryManualOption'))
								.click();
							await crmApp.findElement(webdriver.By.id('addLibraryManualInput'))
								.findElement(webdriver.By.tagName('textarea'))
								.sendKeys(InputKeys.CLEAR_ALL, testCode);
							await crmApp.findElement(webdriver.By.id('addLibraryButton'))
								.click();
							const [isInvalid, libSizes] = await webdriver.promise.all([
								crmApp.findElement(webdriver.By.id('addedLibraryName'))
									.getProperty('invalid'),
								crmApp.findElement(webdriver.By.id('addLibraryProcessContainer'))
									.getSize()
							]) as [boolean, ClientRect];
							
							assert.isTrue(isInvalid, 'Name should be marked as invalid');
							assert.isTrue(Array.prototype.slice.apply(Object.getOwnPropertyNames(libSizes)).filter((key: keyof typeof libSizes) => {
								return libSizes[key] !== 0;
							}).length !== 0, 'Current dialog should be visible');

							await crmApp.findElement(webdriver.By.id('addedLibraryName'))
								.findElement(webdriver.By.tagName('input'))
								.sendKeys(InputKeys.CLEAR_ALL, libName);
							await crmApp.findElement(webdriver.By.id('addLibraryButton'))
								.click();
							await wait(15000);
							await crmApp.findElement(webdriver.By.id('addLibraryConfirmAddition'))
								.click();
							await wait(1000);
							await crmApp.findElement(webdriver.By.id('editorFullScreen'))
								.click();
							await wait(1000);
							await saveDialog(dialog);
							const crm = await getCRM<[CRM.ScriptNode]>();

							assert.include(crm[0].value.libraries, {
								name: libName,
								url: null
							}, 'Library was added');

							const contextMenu = await getContextMenu();
							await driver.executeScript(inlineFn((REPLACE) => {
								window.chrome._clearExecutedScripts();
								return window.chrome._currentContextMenu[0]
									.children[0]
									.currentProperties.onclick(
										REPLACE.page, REPLACE.tab
									);
							}, {
								page: {
									menuItemId: contextMenu[0].id,
									editable: false,
									pageUrl: 'www.google.com'
								},
								tab: {
									id: tabId,
									index: 1,
									windowId: getRandomId(),
									highlighted: false,
									active: true,
									pinned: false,
									selected: false,
									url: 'http://www.google.com',
									title: 'Google',
									incognito: false
								}
							}));
							const activatedScripts = JSON.parse(await driver.executeScript(inlineFn(() => {
								return JSON.stringify(window.chrome._executedScripts);
							})));

							assert.include(activatedScripts, {
								id: tabId,
								code: testCode
							}, 'library was properly executed');
						});
						it('should not add canceled library that was added through code', async () => {
							const libName = getRandomString(25);
							const testCode = getRandomString(100);

							const crmApp = await findElement(webdriver.By.tagName('crm-app'));
							const dialog = await enterEditorFullscreen(this, type);
							await crmApp.findElement(webdriver.By.id('paperLibrariesSelector'))
								.findElement(webdriver.By.id('dropdownSelectedCont'))
								.click();
							await wait(1000);
							await crmApp.findElement(webdriver.By.className('addLibrary'))
								.click();
							await wait(1000);
							await crmApp.findElement(webdriver.By.id('addLibraryManualOption'))
								.click();
							await crmApp.findElement(webdriver.By.id('addLibraryManualInput'))
								.findElement(webdriver.By.tagName('textarea'))
								.sendKeys(InputKeys.CLEAR_ALL, testCode);
							await crmApp.findElement(webdriver.By.id('addLibraryButton'))
								.click();
							const [isInvalid, libSizes] = await webdriver.promise.all([
								crmApp.findElement(webdriver.By.id('addedLibraryName'))
									.getProperty('invalid'),
									crmApp.findElement(webdriver.By.id('addLibraryProcessContainer'))
									.getSize()
							]) as [boolean, ClientRect];

							assert.isTrue(isInvalid, 'Name should be marked as invalid');
							assert.isTrue(Array.prototype.slice.apply(Object.getOwnPropertyNames(libSizes)).filter((key: keyof typeof libSizes) => {
								return libSizes[key] !== 0;
							}).length !== 0, 'Current dialog should be visible');

							await crmApp.findElement(webdriver.By.id('addedLibraryName'))
								.findElement(webdriver.By.tagName('input'))
								.sendKeys(InputKeys.CLEAR_ALL, libName);
							await crmApp.findElement(webdriver.By.id('addLibraryButton'))
								.click();
							await wait(15000);
							await crmApp.findElement(webdriver.By.id('addLibraryConfirmAddition'))
								.click();
							await wait(1000);
							await crmApp.findElement(webdriver.By.id('editorFullScreen'))
								.click();
							await wait(1000);
							await cancelDialog(dialog);
							const crm = await getCRM<[CRM.ScriptNode]>();
							assert.notInclude(crm[0].value.libraries, {
								name: libName,
								url: testCode
							}, 'Library was not added');
						});
					});
					describe('GetPageProperties', function() {
						const pagePropertyPairs = {
							paperGetPropertySelection: 'crmAPI.getSelection();\n',
							paperGetPropertyUrl: 'window.location.href;\n',
							paperGetPropertyHost: 'window.location.host;\n',
							paperGetPropertyPath: 'window.location.path;\n',
							paperGetPropertyProtocol: 'window.location.protocol;\n',
							paperGetPropertyWidth: 'window.innerWidth;\n',
							paperGetPropertyHeight: 'window.innerHeight;\n',
							paperGetPropertyPixels: 'window.scrollY;\n',
							paperGetPropertyTitle: 'document.title;\n'
						};
						Object.getOwnPropertyNames(pagePropertyPairs).forEach((prop: keyof typeof pagePropertyPairs) => {
							it(`should be able to insert the ${prop} property`, async () => {
								const dialog = await enterEditorFullscreen(this, type);
								const crmApp = await findElement(webdriver.By.tagName('crm-app'));
								const prevCode = await getEditorValue(type);
								crmApp.findElement(webdriver.By.id('paperGetPageProperties'))
									.click();
								await wait(500);
								crmApp.findElement(webdriver.By.id(prop))
									.click();
								await wait(500);
								const newCode = await getEditorValue(type);
								
								assert.strictEqual(subtractStrings(newCode, prevCode),
									pagePropertyPairs[prop], 
									'Added text should match expected');
								await crmApp.findElement(webdriver.By.id('editorFullScreen'))
									.click();
								await wait(500);
								await cancelDialog(dialog);
							});
						});
					});
					describe('Search Website', function() {
						afterEach('Close dialog', async () => {
							await driver.executeScript(inlineFn(() => {
								window.doc.paperSearchWebsiteDialog.opened() &&
								window.doc.paperSearchWebsiteDialog.hide();
							}));
						});

						describe('Default SearchEngines', function(){
							it('should correctly add a search engine script (new tab)', async () => {
								await enterEditorFullscreen(this, type);
								const crmApp = await findElement(webdriver.By.tagName('crm-app'));
								const prevCode = await getEditorValue(type);
								crmApp.findElement(webdriver.By.id('paperSearchWebsitesToolTrigger'))
									.click();
								await wait(500);
								await crmApp.findElement(webdriver.By.id('paperSearchWebsiteDialog'))
									.findElement(webdriver.By.id('initialWindow'))
									.findElement(webdriver.By.className('buttons'))
									.findElement(webdriver.By.css('paper-button:nth-child(2)'))
									.click();
								await wait(500);
								await crmApp.findElement(webdriver.By.id('chooseDefaultSearchWindow'))
									.findElement(webdriver.By.className('buttons'))
									.findElements(webdriver.By.tagName('paper-button'))
									.get(1)
									.click();
								await wait(500);
								await crmApp.findElement(webdriver.By.id('confirmationWindow'))
									.findElement(webdriver.By.className('buttons'))
									.findElements(webdriver.By.tagName('paper-button'))
									.get(1)
									.click();
								await wait(500);
								await crmApp.findElement(webdriver.By.id('howToOpenWindow'))
									.findElement(webdriver.By.className('buttons'))
									.findElements(webdriver.By.tagName('paper-button'))
									.get(1)
									.click();
								await wait(500);
								const newCode = await getEditorValue(type);
								
								assert.strictEqual(subtractStrings(newCode, prevCode), [
									'var search = crmAPI.getSelection() || prompt(\'Please enter a search query\');',
									'var url = \'https://www.google.com/search?q=%s\';',
									'var toOpen = url.replace(/%s/g,search);',
									'window.open(toOpen, \'_blank\');'
								].join('\n'), 'Added code matches expected');
							});
							it('should correctly add a search engine script (current tab)', async () => {
								await enterEditorFullscreen(this, type);
								const crmApp = findElement(webdriver.By.tagName('crm-app'));
								const prevCode = await getEditorValue(type);
								await crmApp.findElement(webdriver.By.id('paperSearchWebsitesToolTrigger'))
									.click();
								await wait(500);
								await crmApp.findElement(webdriver.By.id('paperSearchWebsiteDialog'))
									.findElement(webdriver.By.id('initialWindow'))
									.findElement(webdriver.By.className('buttons'))
									.findElement(webdriver.By.css('paper-button:nth-child(2)'))
									.click();
								await crmApp.findElement(webdriver.By.id('chooseDefaultSearchWindow'))
									.findElement(webdriver.By.className('buttons'))
									.findElements(webdriver.By.tagName('paper-button'))
									.get(1)
									.click();
								await wait(500);
								await crmApp.findElement(webdriver.By.id('confirmationWindow'))
									.findElement(webdriver.By.className('buttons'))
									.findElements(webdriver.By.tagName('paper-button'))
									.get(1)
									.click();
								await wait(500);
								await crmApp.findElement(webdriver.By.id('howToOpenLink'))
									.findElements(webdriver.By.tagName('paper-radio-button'))
									.get(1)
									.click();
								await wait(500);
								await crmApp.findElement(webdriver.By.id('howToOpenWindow'))
									.findElement(webdriver.By.className('buttons'))
									.findElements(webdriver.By.tagName('paper-button'))
									.get(1)
									.click();
								await wait(500);
								const newCode = await getEditorValue(type);
								assert.strictEqual(subtractStrings(newCode, prevCode), [
									'var search = crmAPI.getSelection() || prompt(\'Please enter a search query\');',
									'var url = \'https://www.google.com/search?q=%s\';',
									'var toOpen = url.replace(/%s/g,search);',
									'location.href = toOpen;'
								].join('\n'), 'Added code matches expected');
							});
						});
						describe('Custom Input', function() {
							it('should be able to add one from a search URL', async () => {
								const exampleSearchURL = 
									`http://www.${getRandomString(10)}/?${getRandomString(10)}=customRightClickMenu}`;

								await enterEditorFullscreen(this, type);
								const crmApp = findElement(webdriver.By.tagName('crm-app'));
								const prevCode = await getEditorValue(type);
								await crmApp.findElement(webdriver.By.id('paperSearchWebsitesToolTrigger'))
										.click();
								await crmApp.findElement(webdriver.By.id('initialWindowChoicesCont'))
									.findElement(webdriver.By.css('paper-radio-button:nth-child(2)'))
									.click();
								await wait(500);
								await crmApp.findElement(webdriver.By.id('manuallyInputSearchWebsiteWindow'))
									.findElement(webdriver.By.id('manualInputURLInput'))
									.findElement(webdriver.By.tagName('input'))
									.sendKeys(InputKeys.CLEAR_ALL, exampleSearchURL);
								await crmApp.findElement(webdriver.By.id('manuallyInputSearchWebsiteWindow'))
									.findElement(webdriver.By.className('buttons'))
									.findElements(webdriver.By.tagName('paper-button'))
									.get(1)
									.click();
								await wait(500);
								await crmApp.findElement(webdriver.By.id('confirmationWindow'))
									.findElement(webdriver.By.className('buttons'))
									.findElements(webdriver.By.tagName('paper-button'))
									.get(1)
									.click();
								await wait(500);
								await crmApp.findElement(webdriver.By.id('howToOpenWindow'))
									.findElement(webdriver.By.className('buttons'))
									.findElements(webdriver.By.tagName('paper-button'))
									.get(1)
									.click();
								await wait(500);
								const newCode = await getEditorValue(type);
								assert.strictEqual(subtractStrings(newCode, prevCode), [
									'var search = crmAPI.getSelection() || prompt(\'Please enter a search query\');',
									`var url = '${exampleSearchURL.replace('customRightClickMenu', '%s')}';`,
									'var toOpen = url.replace(/%s/g,search);',
									'location.href = toOpen;'
								].join('\n'), 'Script should match expected value');
							});
							it('should be able to add one from your visited websites', async () => {
								const exampleVisitedWebsites: Array<{
									name: string;
									url: string;
									searchUrl: string;
								}> = [{
									name: getRandomString(20),
									url: `http://www.${getRandomString(20)}.com`,
									searchUrl: `${getRandomString(20)}%s${getRandomString(10)}`
								}];

								await enterEditorFullscreen(this, type);
								const crmApp = findElement(webdriver.By.tagName('crm-app'));
								const oldValue = await getEditorValue(type);
								await crmApp.findElement(webdriver.By.id('paperSearchWebsitesToolTrigger'))
									.click();
								await wait(500);
								await crmApp.findElement(webdriver.By.id('initialWindowChoicesCont'))
									.findElement(webdriver.By.css('paper-radio-button:nth-child(2)'))
									.click();
								await wait(500);
								await crmApp.findElement(webdriver.By.id('manulInputSavedChoice'))
									.click();
								await wait(500);
								await driver.executeScript(inlineFn(() => {
	                        		(window.app.$ as any).paperSearchWebsiteDialog
										.shadowRoot.querySelector('#manualInputListChoiceInput')
										.querySelector('textarea').value = 'REPLACE.websites';
								}, {
									websites: JSON.stringify(exampleVisitedWebsites)
								}));
								await wait(500);
								await crmApp.findElement(webdriver.By.id('manuallyInputSearchWebsiteWindow'))
									.findElement(webdriver.By.className('buttons'))
									.findElements(webdriver.By.tagName('paper-button'))
									.get(1)
									.click();
								await wait(500);
								await crmApp.findElement(webdriver.By.id('processedListWindow'))
									.findElement(webdriver.By.className('searchOptionCheckbox'))
									.click();
								await crmApp.findElement(webdriver.By.id('processedListWindow'))
									.findElement(webdriver.By.className('buttons'))
									.findElements(webdriver.By.tagName('paper-button'))
									.get(1)
									.click();
								await wait(500);
								await crmApp.findElement(webdriver.By.id('confirmationWindow'))
									.findElement(webdriver.By.className('buttons'))
									.findElements(webdriver.By.tagName('paper-button'))
									.get(1)
									.click();
								await wait(500);
								await crmApp.findElement(webdriver.By.id('howToOpenWindow'))
									.findElement(webdriver.By.className('buttons'))
									.findElements(webdriver.By.tagName('paper-button'))
									.get(1)
									.click();
								await wait(500);
								const newValue = await getEditorValue(type);
								assert.strictEqual(subtractStrings(newValue, oldValue), [
									'var search = crmAPI.getSelection() || prompt(\'Please enter a search query\');',
									`var url = '${exampleVisitedWebsites[0].searchUrl}';`,
									'var toOpen = url.replace(/%s/g,search);',
									'location.href = toOpen;'
								].join('\n'), 'Added script should match expected');
							});
						});
					});
				});
			});
		});
	});
	describe('Errors', function() {
		this.timeout(60000 * TIME_MODIFIER);
		this.slow(100);

		it('should not have been thrown', async () => {
			const result = await driver.executeScript(inlineFn(() => {
				return window.lastError ? {
					message: window.lastError.message,
					stack: window.lastError.stack
					} : 'noError';
			})) as 'noError'|{
				message: string;
				stack: string;
			};
			if (result !== 'noError' && 
				result.message.indexOf('Object [object global] has no method') !== -1) {
				console.log(result);
				assert.ifError(result, 'no errors should be thrown during testing');
			} else {
				assert.ifError(false, 'no errors should be thrown during testing');
			}
		});
	});
});


describe('On-Page CRM', function() {
	if (SKIP_CRM) {
		return;
	}
	describe('Redraws on new CRM', function() {
		this.slow(250);
		this.timeout(1500 * TIME_MODIFIER);

		const CRM1 = [
			templates.getDefaultLinkNode({
				name: getRandomString(25),
				id: getRandomId()
			}),
			templates.getDefaultLinkNode({
				name: getRandomString(25),
				id: getRandomId()
			}),
			templates.getDefaultLinkNode({
				name: getRandomString(25),
				id: getRandomId()
			})
		
		];
		const CRM2 = [
			templates.getDefaultLinkNode({
				name: getRandomString(25),
				id: getRandomId()
			}),
			templates.getDefaultLinkNode({
				name: getRandomString(25),
				id: getRandomId()
			}),
			templates.getDefaultLinkNode({
				name: getRandomString(25),
				id: getRandomId()
			})
		];

		it('should not throw when setting up the CRM', function(done) {
			this.slow(4000);
			this.timeout(5000 * TIME_MODIFIER);
			assert.doesNotThrow(async () => {
				await resetSettings(this);
				await driver.executeScript(inlineFn((REPLACE) => {
					window.app.settings.crm = REPLACE.crm;
					window.app.upload();
				}, {
					crm: CRM1
				}));
			}, 'setting up the CRM does not throw');
		});
		it('should be using the first CRM', async function() {
			this.timeout(60000 * TIME_MODIFIER);
			const contextMenu = await getContextMenu();
			assertContextMenuEquality(contextMenu, CRM1);
		});
		it('should be able to switch to a new CRM', function(done) {
			assert.doesNotThrow(async () => {
				await driver.executeScript(inlineFn((REPLACE) => {
					window.app.settings.crm = REPLACE.crm;
					window.app.upload();
					return true;
				}, {
					crm: CRM2
				}));
			}, 'settings CRM does not throw');
		});
		it('should be using the new CRM', async function() {
			const contextMenu = await getContextMenu();
			assertContextMenuEquality(contextMenu, CRM2);
		});
	});
	describe('Links', function() {
		this.slow(150);
		this.timeout(1500 * TIME_MODIFIER);
		const CRMNodes = [
			templates.getDefaultLinkNode({
				name: getRandomString(25),
				id: getRandomId(),
				showOnSpecified: false,
				triggers: [{
					url: 'http://www.somewebsite.com',
					not: false
				}]
			}),
			templates.getDefaultLinkNode({
				name: getRandomString(25),
				id: getRandomId(),
				showOnSpecified: true,
				triggers: [{
					url: 'http://www.somewebsite.com',
					not: false
				}]
			}),
			templates.getDefaultLinkNode({
				name: getRandomString(25),
				id: getRandomId(),
				showOnSpecified: true,
				triggers: [{
					url: 'http://www.somewebsite.com',
					not: true
				}]
			}),
			templates.getDefaultLinkNode({
				name: getRandomString(25),
				id: getRandomId(),
				showOnSpecified: true,
				triggers: [{
					url: 'http://www.somewebsite.com',
					not: false
				}],
				onContentTypes: [true, false, false, false, false, false]
			}),
			templates.getDefaultLinkNode({
				name: getRandomString(25),
				id: getRandomId(),
				showOnSpecified: true,
				triggers: [{
					url: 'http://www.somewebsite.com',
					not: false
				}],
				onContentTypes: [false, false, false, false, false, true]
			}),
			templates.getDefaultLinkNode({
				name: getRandomString(25),
				id: getRandomId(),
				showOnSpecified: true,
				triggers: [{
					url: 'http://www.somewebsite.com',
					not: false
				}],
				value: [{
					url: 'www.a.com',
					newTab: true
				}, {
					url: 'www.b.com',
					newTab: false
				}, {
					url: 'www.c.com',
					newTab: true
				}]
			}),
		];

		const enum LinkOnPageTest {
			NO_TRIGGERS = 0,
			TRIGGERS = 1,
			DEFAULT_LINKS = 4,
			PRESET_LINKS = 5
		}

		it('should not throw when setting up the CRM', function(done) {
			this.slow(4000);
			this.timeout(5000 * TIME_MODIFIER);
			assert.doesNotThrow(async () => {
				await resetSettings(this);
				await driver.executeScript(inlineFn((REPLACE) => {
					window.app.settings.crm = REPLACE.crm;
					window.app.upload();
					return true;
				}, {
					crm: CRMNodes
				}));
			}, 'setting up the CRM does not throw');
		});
		it('should match the given names and types', async () => {
			const contextMenu = await getContextMenu();
			for (let i = 0; i < CRMNodes.length; i++) {
				assert.isDefined(contextMenu[i], `node ${i} is defined`);
				assert.strictEqual(contextMenu[i].currentProperties.title, 
					CRMNodes[i].name, `names for ${i} match`);
				assert.strictEqual(contextMenu[i].currentProperties.type,
					'normal', `type for ${i} is normal`);
			}				
		});
		it('should match the given triggers', async () => {
			const contextMenu = await getContextMenu();
			assert.lengthOf(
				contextMenu[LinkOnPageTest.NO_TRIGGERS].createProperties.documentUrlPatterns,
				0, 'triggers are turned off');
			assert.deepEqual(contextMenu[LinkOnPageTest.TRIGGERS].createProperties.documentUrlPatterns,
				CRMNodes[LinkOnPageTest.TRIGGERS].triggers.map((trigger) => {
					return prepareTrigger(trigger.url);
				}), 'triggers are turned on');
		});
		it('should match the given content types', async () => {
			const contextMenu = await getContextMenu();
			for (let i = 0; i < CRMNodes.length; i++) {
				assert.includeMembers(contextMenu[i].currentProperties.contexts,
					CRMNodes[i].onContentTypes.map((enabled, index) => {
						if (enabled) {
							return getTypeName(index);
						} else {
							return null;
						}
					}).filter(item => item !== null), `content types for ${i} match`);
			}
		});
		it('should open the correct links when clicked for the default link', async function() {
			this.timeout(2000 * TIME_MODIFIER);
			const tabId = ~~(Math.random() * 100);
			const windowId = ~~(Math.random() * 100);
			const contextMenu = await getContextMenu();
			await driver.executeScript(inlineFn((REPLACE) => {
				window.chrome._currentContextMenu[0].children[LinkOnPageTest.DEFAULT_LINKS]
					.currentProperties.onclick(
						REPLACE.page, REPLACE.tab
					);
				return true;
			}, {
				page: {
					menuItemId: contextMenu[LinkOnPageTest.DEFAULT_LINKS].id,
					editable: false,
					pageUrl: 'www.google.com'
				},
				tab: {
					id: tabId,
					index: 1,
					windowId: windowId,
					highlighted: false,
					active: true,
					pinned: false,
					selected: false,
					url: 'http://www.google.com',
					title: 'Google',
					incognito: false
				}
			}));
			const activeTabs = JSON.parse(await driver.executeScript(inlineFn(() => {
				return JSON.stringify(window.chrome._activeTabs);
			})));
			const expectedTabs = CRMNodes[LinkOnPageTest.DEFAULT_LINKS].value.map((link) => {
				if (!link.newTab) {
					return {
						id:	tabId,
						data: {
							url: sanitizeUrl(link.url)
						},
						type: 'update'
					};
				} else {
					return {
						type: 'create',
						data: {
							windowId: windowId,
							url: sanitizeUrl(link.url),
							openerTabId: tabId
						}
					};
				}
			}) as ActiveTabs;

			assert.sameDeepMembers(activeTabs, expectedTabs,
				'opened tabs match expected');
		});
		it('should open the correct links when clicked for multiple links', async () => {
			this.timeout(2000 * TIME_MODIFIER);
			const tabId = ~~(Math.random() * 100);
			const windowId = ~~(Math.random() * 100);
			const contextMenu = await getContextMenu();
			await driver.executeScript(inlineFn((REPLACE) => {
				//Clear it without removing object-array-magic-address-linking
				while (window.chrome._activeTabs.length > 0) {
					window.chrome._activeTabs.pop();
				}
				return window.chrome._currentContextMenu[0].children[LinkOnPageTest.PRESET_LINKS]
					.currentProperties.onclick(
						REPLACE.page, REPLACE.tab
					);
			}, {
				page: {
					menuItemId: contextMenu[LinkOnPageTest.PRESET_LINKS].id,
					editable: false,
					pageUrl: 'www.google.com'
				},
				tab: {
					id: tabId,
					index: 1,
					windowId: windowId,
					highlighted: false,
					active: true,
					pinned: false,
					selected: false,
					url: 'http://www.google.com',
					title: 'Google',
					incognito: false
				}
			}));
			const activeTabs = JSON.parse(await driver.executeScript(inlineFn(() => {
				return JSON.stringify(window.chrome._activeTabs);
			})));
			const expectedTabs = CRMNodes[LinkOnPageTest.PRESET_LINKS].value.map((link) => {
				if (!link.newTab) {
					return {
						id:	tabId,
						data: {
							url: sanitizeUrl(link.url)
						},
						type: 'update'
					};
				} else {
					return {
						type: 'create',
						data: {
							windowId: windowId,
							url: sanitizeUrl(link.url),
							openerTabId: tabId
						}
					};
				}
			}) as ActiveTabs;

			assert.sameDeepMembers(activeTabs, expectedTabs,
				'opened tabs match expected');
		});
	});
	describe('Menu & Divider', function() {
		const CRMNodes = [
			templates.getDefaultLinkNode({
				name: getRandomString(25),
				id: getRandomId()
			}),
			templates.getDefaultDividerNode({
				name: getRandomString(25),
				id: getRandomId()
			}),
			templates.getDefaultDividerNode({
				name: getRandomString(25),
				id: getRandomId()
			}),
			templates.getDefaultMenuNode({
				name: getRandomString(25),
				id: getRandomId(),
				children: [
					templates.getDefaultLinkNode({
						name: getRandomString(25),
						id: getRandomId()
					}),
					templates.getDefaultDividerNode({
						name: getRandomString(25),
						id: getRandomId()
					}),
					templates.getDefaultLinkNode({
						name: getRandomString(25),
						id: getRandomId()
					}),
					templates.getDefaultDividerNode({
						name: getRandomString(25),
						id: getRandomId()
					}),
					templates.getDefaultMenuNode({
						name: getRandomString(25),
						id: getRandomId(),
						children: [
							templates.getDefaultMenuNode({
								name: getRandomString(25),
								id: getRandomId(),
								children: [
									templates.getDefaultMenuNode({
										name: getRandomString(25),
										id: getRandomId(),
										children: [
											templates.getDefaultLinkNode({
												name: getRandomString(25),
												id: getRandomId()
											}),
											templates.getDefaultLinkNode({
												name: getRandomString(25),
												id: getRandomId()
											}),
											templates.getDefaultLinkNode({
												name: getRandomString(25),
												id: getRandomId()
											}),
											templates.getDefaultLinkNode({
												name: getRandomString(25),
												id: getRandomId()
											}),
										]
									}),
									templates.getDefaultLinkNode({
										name: getRandomString(25),
										id: getRandomId(),
										children: []
									})
								]
							})
						]
					})
				]
			})
		];

		it('should not throw when setting up the CRM', function(done) {
			this.timeout(5000 * TIME_MODIFIER);
			this.slow(4000);
			assert.doesNotThrow(async () => {
				await resetSettings(this);
				await driver.executeScript(inlineFn((REPLACE) => {
					window.app.settings.crm = REPLACE.crm;
					window.app.upload();
					return true;
				}, {
					crm: CRMNodes
				}));
				done();
			}, 'setting up the CRM does not throw');
		});
		it('should have the correct structure', async function() {
			this.slow(400);
			this.timeout(1400 * TIME_MODIFIER);
			const contextMenu = await getContextMenu();
			assertContextMenuEquality(contextMenu, CRMNodes);
		});
	});
	describe('Scripts', function() {
		this.slow(900);
		this.timeout(2000 * TIME_MODIFIER);

		const CRMNodes = [
			templates.getDefaultScriptNode({
				name: getRandomString(25),
				id: getRandomId(),
				value: {
					launchMode: CRMLaunchModes.ALWAYS_RUN,
					script: 'console.log(\'executed script\');'
				}
			}), 
			templates.getDefaultScriptNode({
				name: getRandomString(25),
				id: getRandomId(),
				value: {
					launchMode: CRMLaunchModes.RUN_ON_CLICKING,
					script: 'console.log(\'executed script\');'
				}
			}),
			templates.getDefaultScriptNode({
				name: getRandomString(25),
				id: getRandomId(),
				triggers: [
					{
						url: 'http://www.example.com',
						not: false
					}
				],
				value: {
					launchMode: CRMLaunchModes.RUN_ON_SPECIFIED,
					script: 'console.log(\'executed script\');'
				}
			}),
			templates.getDefaultScriptNode({
				name: getRandomString(25),
				id: getRandomId(),
				triggers: [
					{
						url: 'http://www.example2.com',
						not: false
					}
				],
				value: {
					launchMode: CRMLaunchModes.SHOW_ON_SPECIFIED,
					script: 'console.log(\'executed script\');'
				}
			}),
			templates.getDefaultScriptNode({
				name: getRandomString(25),
				id: getRandomId(),
				triggers: [
					{
						url: 'http://www.example3.com',
						not: false
					}
				],
				value: {
					launchMode: CRMLaunchModes.RUN_ON_CLICKING,
					backgroundScript: 'console.log(\'executed backgroundscript\')'
				}
			}),
			templates.getDefaultScriptNode({
				name: getRandomString(25),
				id: getRandomId(),
				value: {
					launchMode: CRMLaunchModes.DISABLED,
					script: 'console.log(\'executed script\');'
				}
			})
		];

		const enum ScriptOnPageTests {
			ALWAYS_RUN = 0,
			RUN_ON_CLICKING = 1,
			RUN_ON_SPECIFIED = 2,
			SHOW_ON_SPECIFIED = 3,
			BACKGROUNDSCRIPT = 4,
			DISABLED = 5
		}

		it('should not throw when setting up the CRM', function(done) {
			this.timeout(5000 * TIME_MODIFIER);
			this.slow(4000);
			assert.doesNotThrow(async () => {
				await resetSettings(this);
				await driver.executeScript(inlineFn((REPLACE) => {
					window.app.settings.crm = REPLACE.crm;
					window.app.upload();
					return true;
				}, {
					crm: CRMNodes
				}));
				done();
			}, 'setting up the CRM does not throw');
		});
		it('should always run when launchMode is set to ALWAYS_RUN', async () => {
			const fakeTabId = getRandomId();
			await driver.executeScript(inlineFn((REPLACE) => {
				window.chrome._clearExecutedScripts();
				window.chrome._fakeTabs[REPLACE.fakeTabId] = {
					id: REPLACE.fakeTabId,
					url: 'http://www.notexample.com'
				};
				window.chrome.runtime.sendMessage({
					type: 'newTabCreated'
				}, {
					tab: {
						id: REPLACE.fakeTabId
					}
				} as any, function() { });
			}, {
				fakeTabId: fakeTabId
			}));
			await wait(50);
			const activatedScripts = JSON.parse(await driver.executeScript(inlineFn(() => {
				return JSON.stringify(window.chrome._executedScripts);
			})));

			assert.lengthOf(activatedScripts, 1, 'one script activated');
			assert.strictEqual(activatedScripts[0].id, fakeTabId, 
				'script was executed on right tab');
		});
		it('should run on clicking when launchMode is set to RUN_ON_CLICKING', async () => {
			const fakeTabId = getRandomId();
			const contextMenu = await getContextMenu();
			await driver.executeScript(inlineFn((REPLACE) => {
				window.chrome._clearExecutedScripts();
				return window.chrome._currentContextMenu[0]
					.children[ScriptOnPageTests.RUN_ON_CLICKING]
					.currentProperties.onclick(
						REPLACE.page, REPLACE.tab
					);
			}, {
				page: {
					menuItemId: contextMenu[0].id,
					editable: false,
					pageUrl: 'www.google.com'
				},
				tab: {
					id: fakeTabId,
					index: 1,
					windowId: getRandomId(),
					highlighted: false,
					active: true,
					pinned: false,
					selected: false,
					url: 'http://www.google.com',
					title: 'Google',
					incognito: false
				}
			}));
			const activatedScripts = JSON.parse(await driver.executeScript(inlineFn(() => {
				return JSON.stringify(window.chrome._executedScripts);
			})));

			assert.lengthOf(activatedScripts, 1, 'one script was activated');
			assert.strictEqual(activatedScripts[0].id, fakeTabId,
				'script was executed on the right tab');
		});
		it('should run on specified URL when launchMode is set to RUN_ON_SPECIFIED', async () => {
			const fakeTabId = getRandomId();
			await driver.executeScript(inlineFn((REPLACE) => {
				window.chrome._clearExecutedScripts();
				window.chrome._fakeTabs[REPLACE.fakeTabId] = {
					id: REPLACE.fakeTabId,
					url: 'http://www.example.com'
				};
				window.chrome.runtime.sendMessage({
					type: 'newTabCreated'
				}, {
					tab: {
						id: REPLACE.fakeTabId
					}
				} as any, function () { });
			}, {
				fakeTabId: fakeTabId
			}));
			await wait(50);
			const activatedScripts = JSON.parse(await driver.executeScript(inlineFn(() => {
				return JSON.stringify(window.chrome._executedScripts);
			})));

			//First one is the ALWAYS_RUN script, ignore that
			assert.lengthOf(activatedScripts, 2, 'two scripts activated');
			assert.strictEqual(activatedScripts[1].id, fakeTabId, 
				'new script was executed on right tab');
		});
		it('should show on specified URL when launchMode is set to SHOW_ON_SPECIFIED', async () => {
			const fakeTabId = getRandomId();
			await driver.executeScript(inlineFn((REPLACE) => {
				window.chrome._clearExecutedScripts();
				window.chrome._fakeTabs[REPLACE.fakeTabId] = {
					id: REPLACE.fakeTabId,
					url: 'http://www.example2.com'
				};
				window.chrome.runtime.sendMessage({
					type: 'newTabCreated'
				}, {
					tab: {
						id: REPLACE.fakeTabId
					}
				} as any, function () { });
			}, {
				fakeTabId: fakeTabId
			}));
			const contextMenu = await getContextMenu();

			assert.isAbove(contextMenu.length, 2, 'contextmenu contains at least two items');

			await driver.executeScript(inlineFn((REPLACE) => {
				window.chrome._clearExecutedScripts();
				return window.chrome._currentContextMenu[0]
					.children[1]
					.currentProperties.onclick(
					REPLACE.page, REPLACE.tab
				);
			}, {
				page: {
					menuItemId: contextMenu[0].id,
					editable: false,
					pageUrl: 'www.google.com'
				},
				tab: {
					id: fakeTabId,
					index: 1,
					windowId: getRandomId(),
					highlighted: false,
					active: true,
					pinned: false,
					selected: false,
					url: 'http://www.google.com',
					title: 'Google',
					incognito: false
				}
			}));
			const activatedScripts = JSON.parse(await driver.executeScript(inlineFn(() => {
				return JSON.stringify(window.chrome._executedScripts);
			})));

			assert.lengthOf(activatedScripts, 1, 'one script was activated');
			assert.strictEqual(activatedScripts[0].id, fakeTabId,
				'script was executed on the right tab');
		});
		it('should run the backgroundscript when one is specified', function(done) {
			const fakeTabId = getRandomId();
			getContextMenu().then((contextMenu) => {
				assert.isAbove(contextMenu.length, 1, 'contextmenu contains at least 1 items');

				assert.doesNotThrow(async () => {
					await driver.executeScript(inlineFn((REPLACE) => {
						return window.chrome._currentContextMenu[0]
							.children[2]
							.currentProperties.onclick(
								REPLACE.page, REPLACE.tab
							);
					}, {
						page: {
							menuItemId: contextMenu[0].id,
							editable: false,
							pageUrl: 'www.google.com'
						},
						tab: {
							id: fakeTabId,
							index: 1,
							windowId: getRandomId(),
							highlighted: false,
							active: true,
							pinned: false,
							selected: false,
							url: 'http://www.google.com',
							title: 'Google',
							incognito: false
						}
					}));
					const activatedBackgroundScripts = JSON.parse(await driver
						.executeScript(inlineFn(() => {
							return JSON.stringify(window.chrome._activatedBackgroundPages);
						})));
					assert.lengthOf(activatedBackgroundScripts, 1,
						'one backgroundscript was activated');
					assert.strictEqual(activatedBackgroundScripts[0], 
						CRMNodes[ScriptOnPageTests.BACKGROUNDSCRIPT].id,
						'correct backgroundscript was executed');
					done();
				}, 'clicking the node does not throw');
			});
		});
		it('should not show the disabled node', async () => {
			const contextMenu = await getContextMenu();
			assert.notInclude(contextMenu.map((item) => {
				return item.id;
			}), CRMNodes[ScriptOnPageTests.DISABLED].id,
				'disabled node is not in the right-click menu');
		});
		it('should run the correct code when clicked', async () => {
			const fakeTabId = getRandomId();
			const contextMenu = await getContextMenu();
			await driver.executeScript(inlineFn((REPLACE) => {
				window.chrome._clearExecutedScripts();
				return window.chrome._currentContextMenu[0]
					.children[ScriptOnPageTests.RUN_ON_CLICKING]
					.currentProperties.onclick(
						REPLACE.page, REPLACE.tab
					);
			}, {
				page: {
					menuItemId: contextMenu[0].id,
					editable: false,
					pageUrl: 'www.google.com'
				},
				tab: {
					id: fakeTabId,
					index: 1,
					windowId: getRandomId(),
					highlighted: false,
					active: true,
					pinned: false,
					selected: false,
					url: 'http://www.google.com',
					title: 'Google',
					incognito: false
				}
			}));
			const activatedScripts = JSON.parse(await driver
				.executeScript(inlineFn(() => {
					return JSON.stringify(window.chrome._executedScripts);
				})));
			assert.lengthOf(activatedScripts, 1, 'one script was activated');
			assert.strictEqual(activatedScripts[0].id, fakeTabId,
				'script was executed on the right tab');
			assert.include(activatedScripts[0].code,
				CRMNodes[ScriptOnPageTests.RUN_ON_CLICKING].value.script,
				'executed code is the same as set code');
		});
	});
	describe('Stylesheets', function() {
		this.slow(900);
		this.timeout(2000 * TIME_MODIFIER);

		const CRMNodes = [
			templates.getDefaultStylesheetNode({
				name: getRandomString(25),
				id: getRandomId(),
				value: {
					toggle: true,
					defaultOn: false,
					launchMode: CRMLaunchModes.RUN_ON_CLICKING,
					stylesheet: '#stylesheetTestDummy1 { width: 50px; height :50px; }'
				}
			}),
			templates.getDefaultStylesheetNode({
				name: getRandomString(25),
				id: getRandomId(),
				value: {
					toggle: true,
					defaultOn: true,
					launchMode: CRMLaunchModes.RUN_ON_CLICKING,
					stylesheet: '#stylesheetTestDummy2 { width: 50px; height :50px; }'
				}
			}),
			templates.getDefaultStylesheetNode({
				name: getRandomString(25),
				id: getRandomId(),
				value: {
					launchMode: CRMLaunchModes.ALWAYS_RUN,
					stylesheet: '#stylesheetTestDummy { width: 50px; height :50px; }'
				}
			}), 
			templates.getDefaultStylesheetNode({
				name: getRandomString(25),
				id: getRandomId(),
				value: {
					launchMode: CRMLaunchModes.RUN_ON_CLICKING,
					stylesheet: '#stylesheetTestDummy { width: 50px; height :50px; }'
				}
			}),
			templates.getDefaultStylesheetNode({
				name: getRandomString(25),
				id: getRandomId(),
				triggers: [
					{
						url: 'http://www.example.com',
						not: false
					}
				],
				value: {
					launchMode: CRMLaunchModes.RUN_ON_SPECIFIED,
					stylesheet: '#stylesheetTestDummy { width: 50px; height :50px; }'
				}
			}),
			templates.getDefaultStylesheetNode({
				name: getRandomString(25),
				id: getRandomId(),
				triggers: [
					{
						url: 'http://www.example2.com',
						not: false
					}
				],
				value: {
					launchMode: CRMLaunchModes.SHOW_ON_SPECIFIED,
					stylesheet: '#stylesheetTestDummy { width: 50px; height :50px; }'
				}
			}),
			templates.getDefaultStylesheetNode({
				name: getRandomString(25),
				id: getRandomId(),
				value: {
					launchMode: CRMLaunchModes.DISABLED,
					stylesheet: '#stylesheetTestDummy { width: 50px; height :50px; }'
				}
			}),
			templates.getDefaultStylesheetNode({
				name: getRandomString(25),
				id: getRandomId(),
				value: {
					stylesheet: `
					/*if false then*/
					a
					/*endif*/
					/*if true then*/
					b
					/*endif*/
					/*if 1 < 0 then*/
					c
					/*endif*/
					/*if -1 < 0 then*/
					d
					/*endif*/
					/*if 'a' === 'b' then*/
					e
					/*endif*/
					/*if true && true then*/
					f
					/*endif*/
					/*if false || false then*/
					g
					/*endif*/
					`
				}
			}),
			templates.getDefaultStylesheetNode({
				name: getRandomString(25),
				id: getRandomId(),
				value: {
					options: {
						a: {
							type: 'number',
							value: 5
						},
						b: {
							type: 'string',
							value: 'str'
						},
						c: {
							type: 'boolean',
							value: true
						},
						d: {
							type: 'choice',
							values: [1,2,3,4],
							selected: 2
						},
						e: {
							type: 'choice',
							values: ['a', 'b', 'c', 'd'],
							selected: 2
						}
					},
					stylesheet: `
					/*if a === 5 then*/
					a
					/*endif*/
					/*if a === 3 then*/
					b
					/*endif*/
					/*if b === 'str' then*/
					c
					/*endif*/
					/*if c then*/
					d
					/*endif*/
					/*if d === 3 then*/
					e
					/*endif*/
					/*if e === 'c' then*/
					f
					/*endif*/
					`
				}
			}),
			templates.getDefaultStylesheetNode({
				name: getRandomString(25),
				id: getRandomId(),
				value: {
					stylesheet: `
					/*if true then*/
					a
					/*else*/
					b
					/*endif*/
					/*if false then*/
					c
					/*else*/
					d
					/*endif*/
					`
				}
			}),
			templates.getDefaultStylesheetNode({
				name: getRandomString(25),
				id: getRandomId(),
				value: {
					stylesheet: `
					/*if true then*/
						/*if true then*/
							/*if true then*/
								/*if false then*/
									/*if true then*/
									a
									/*endif*/
									b
								/*endif*/
								c
							/*endif*/
							d
						/*endif*/
						e
					/*endif*/
					`
				}
			}),
			templates.getDefaultStylesheetNode({
				name: getRandomString(25),
				id: getRandomId(),
				value: {
					stylesheet: `
					/*if true then*/
						/*if true then*/
							/*if false then*/
								a
							/*else*/
								/*if true then*/
									b
								/*else*/
									c
								/*endif*/
								d
							/*endif*/						
						/*else*/
							e
						/*endif*/	
						f
					/*else*/
						/*if true then*/
							g
						/*else*/
							h
						/*endif*/
					/*endif*/
					`
				}
			}),
			templates.getDefaultStylesheetNode({
				name: getRandomString(25),
				id: getRandomId(),
				value: {
					options: {
						margin: {
							type: 'number',
							value: 50
						}
					},
					stylesheet: `
					body {
						/*margin-top: {{margin}}px;*/
					}
					`
				}
			})
		];

		const enum StylesheetOnPageTests {
			TOGGLE_DEFAULT_OFF = 0,
			TOGGLE_DEFAULT_ON = 1,
			ALWAYS_RUN = 2,
			RUN_ON_CLICKING = 3,
			RUN_ON_SPECIFIED = 4,
			SHOW_ON_SPECIFIED = 5,
			DISABLED = 6,
			IF_NO_VARS = 7,
			IF_VARS = 8,
			IF_ELSE = 9,
			IF_NESTED = 10,
			IF_ELSE_NESTED = 11,
			OPTIONS_BLOCKS = 12
		}

		async function runStylesheet(index: StylesheetOnPageTests, expectedReg: RegExp, done: () => void) {
			const fakeTabId = getRandomId();
			const contextMenu = await getContextMenu();
			await driver.executeScript(inlineFn((REPLACE) => {
				window.chrome._clearExecutedScripts();
				return window.chrome._currentContextMenu[0]
					.children[REPLACE.index - 3]
					.currentProperties.onclick(
						REPLACE.page, REPLACE.tab
					);
			}, {
				index: index,
				page: {
					menuItemId: contextMenu[0].id,
					editable: false,
					pageUrl: 'www.google.com'
				},
				tab: {
					id: fakeTabId,
					index: 1,
					windowId: getRandomId(),
					highlighted: false,
					active: true,
					pinned: false,
					selected: false,
					url: 'http://www.google.com',
					title: 'Google',
					incognito: false
				}
			}))
			const executedScripts = JSON.parse(await driver
				.executeScript(inlineFn(() => {
					return JSON.stringify(window.chrome._executedScripts);
				})));
			assert.lengthOf(executedScripts, 1, 'one stylesheet was activated');
			assert.strictEqual(executedScripts[0].id, fakeTabId,
				'stylesheet was executed on the right tab');
			assert.isTrue(!!expectedReg.exec(executedScripts[0].code), 'executed code is the same as expected code');
		}

		function genContainsRegex(...contains: Array<string>): RegExp {
			const whitespace = '(\\\\t|\\\\s|\\\\n)*';
			return new RegExp(`.*\\("${whitespace + contains.join(whitespace) + whitespace}"\\).*`);
		}

		it('should not throw when setting up the CRM', function(done) {
			this.timeout(5000 * TIME_MODIFIER);
			this.slow(4000);
			assert.doesNotThrow(async () => {
				await resetSettings(this);
				await driver.executeScript(inlineFn((REPLACE) => {
					window.app.settings.crm = REPLACE.crm;
					window.app.upload();
					return true;
				}, {
					crm: CRMNodes
				}));
				done();
			}, 'setting up the CRM does not throw');
		});
		it('should always run when launchMode is set to ALWAYS_RUN', async () => {
			const fakeTabId = getRandomId();
			await driver.executeScript(inlineFn((REPLACE) => {
				window.chrome._clearExecutedScripts();
				window.chrome._fakeTabs[REPLACE.fakeTabId] = {
					id: REPLACE.fakeTabId,
					url: 'http://www.notexample.com'
				};
				
				window.chrome.runtime.sendMessage({
					type: 'newTabCreated'
				}, {
					tab: {
						id: REPLACE.fakeTabId
					}
				} as any, function () { });
			}, {
				fakeTabId: fakeTabId
			}));
			await wait(50);
			const activatedScripts = JSON.parse(await driver
				.executeScript(inlineFn(() => {
					return JSON.stringify(window.chrome._executedScripts);
				})));

			//First one is the default on stylesheet, ignore that
			assert.lengthOf(activatedScripts, 2, 'two stylesheets activated');
			assert.strictEqual(activatedScripts[1].id, fakeTabId, 
				'stylesheet was executed on right tab');
		});
		it('should run on clicking when launchMode is set to RUN_ON_CLICKING', async () => {
			const fakeTabId = getRandomId();
			const contextMenu = await getContextMenu();
			await driver.executeScript(inlineFn((REPLACE) => {
				window.chrome._clearExecutedScripts();
				return window.chrome._currentContextMenu[0]
					.children[2]
					.currentProperties.onclick(
						REPLACE.page, REPLACE.tab
					);
			}, {
				page: {
					menuItemId: contextMenu[0].id,
					editable: false,
					pageUrl: 'www.google.com'
				},
				tab: {
					id: fakeTabId,
					index: 1,
					windowId: getRandomId(),
					highlighted: false,
					active: true,
					pinned: false,
					selected: false,
					url: 'http://www.google.com',
					title: 'Google',
					incognito: false
				}
			}));
			const activatedScripts = JSON.parse(await driver
				.executeScript(inlineFn(() => {
					return JSON.stringify(window.chrome._executedScripts);
				})));

			assert.lengthOf(activatedScripts, 1, 'one stylesheet was activated');
			assert.strictEqual(activatedScripts[0].id, fakeTabId,
				'stylesheet was executed on the right tab');
		});
		it('should run on specified URL when launchMode is set to RUN_ON_SPECIFIED', async () => {
			const fakeTabId = getRandomId();
			await driver.executeScript(inlineFn((REPLACE) => {
				window.chrome._clearExecutedScripts();
				window.chrome._fakeTabs[REPLACE.fakeTabId] = {
					id: REPLACE.fakeTabId,
					url: 'http://www.example.com'
				};
				window.chrome.runtime.sendMessage({
					type: 'newTabCreated'
				}, {
					tab: {
						id: REPLACE.fakeTabId
					}
				} as any, function () { });
			}, {
				fakeTabId: fakeTabId
			}));
			await wait(50);
			const activatedScripts = JSON.parse(await driver
				.executeScript(inlineFn(() => {
					return JSON.stringify(window.chrome._executedScripts);
				})));

			//First one is the ALWAYS_RUN stylesheet, second one is the default on one ignore that
			assert.lengthOf(activatedScripts, 3, 'three stylesheets activated');
			assert.strictEqual(activatedScripts[2].id, fakeTabId, 
				'new stylesheet was executed on right tab');
		});
		it('should show on specified URL when launchMode is set to SHOW_ON_SPECIFIED', async function() {
			const fakeTabId = getRandomId();
			await driver.executeScript(inlineFn((REPLACE) => {
				window.chrome._clearExecutedScripts();
				window.chrome._fakeTabs[REPLACE.fakeTabId] = {
					id: REPLACE.fakeTabId,
					url: 'http://www.example2.com'
				};
				window.chrome.runtime.sendMessage({
					type: 'newTabCreated'
				}, {
					tab: {
						id: REPLACE.fakeTabId
					}
				} as any, function () { });
			}, {
				fakeTabId: fakeTabId
			}));
			const contextMenu = await getContextMenu();
			assert.isAbove(contextMenu.length, 2, 'contextmenu contains at least two items');

			await driver.executeScript(inlineFn((REPLACE) => {
				window.chrome._clearExecutedScripts();
				return window.chrome._currentContextMenu[0]
					.children[3]
					.currentProperties.onclick(
					REPLACE.page, REPLACE.tab
				);
			}, {
				page: {
					menuItemId: contextMenu[0].id,
					editable: false,
					pageUrl: 'www.google.com'
				},
				tab: {
					id: fakeTabId,
					index: 1,
					windowId: getRandomId(),
					highlighted: false,
					active: true,
					pinned: false,
					selected: false,
					url: 'http://www.google.com',
					title: 'Google',
					incognito: false
				}
			}));
			const activatedScripts = JSON.parse(await driver
				.executeScript(inlineFn(() => {
					return JSON.stringify(window.chrome._executedScripts);
				})));
			assert.lengthOf(activatedScripts, 1, 'one script was activated');
			assert.strictEqual(activatedScripts[0].id, fakeTabId,
				'script was executed on the right tab');
		});
		it('should not show the disabled node', async () => {
			const contextMenu = await getContextMenu();
			assert.notInclude(contextMenu.map((item) => {
				return item.id;
			}), CRMNodes[StylesheetOnPageTests.DISABLED].id,
				'disabled node is not in the right-click menu');
		});
		it('should run the correct code when clicked', async function() {
			const fakeTabId = getRandomId();
			const contextMenu = await getContextMenu();
			await driver.executeScript(inlineFn((REPLACE) => {
				window.chrome._clearExecutedScripts();
				return window.chrome._currentContextMenu[0]
					.children[2]
					.currentProperties.onclick(
						REPLACE.page, REPLACE.tab
					);
			}, {
				page: {
					menuItemId: contextMenu[0].id,
					editable: false,
					pageUrl: 'www.google.com'
				},
				tab: {
					id: fakeTabId,
					index: 1,
					windowId: getRandomId(),
					highlighted: false,
					active: true,
					pinned: false,
					selected: false,
					url: 'http://www.google.com',
					title: 'Google',
					incognito: false
				}
			}));
			const executedScripts = JSON.parse(await driver
				.executeScript(inlineFn(() => {
					return JSON.stringify(window.chrome._executedScripts);
				})));
			assert.lengthOf(executedScripts, 1, 'one script was activated');
			assert.strictEqual(executedScripts[0].id, fakeTabId,
				'script was executed on the right tab');
			assert.include(executedScripts[0].code,
				CRMNodes[StylesheetOnPageTests.RUN_ON_CLICKING].value.stylesheet.replace(/(\t|\s|\n)/g, ''),
				'executed code is the same as set code');
		});
		it('should actually be applied to the page', async function() {
			await driver.executeScript(inlineFn((args) => {
				const dummyEl = document.createElement('div');
				dummyEl.id = 'stylesheetTestDummy';

				window.dummyContainer.appendChild(dummyEl);
			}));
			await wait(100);
			const dummy = await findElement(webdriver.By.id('stylesheetTestDummy'));
			const dimensions = await dummy.getSize();

			assert.strictEqual(dimensions.width, 50, 'dummy element is 50px wide');
			assert.strictEqual(dimensions.height, 50, 'dummy element is 50px high');
		});
		it('should work with an if-then statement with no variables', function(done) {
			runStylesheet(StylesheetOnPageTests.IF_NO_VARS, genContainsRegex('b', 'd', 'f'), done);
		});
		it('should work with an if-then statement with variables', function(done) {
			runStylesheet(StylesheetOnPageTests.IF_VARS, genContainsRegex('a', 'c', 'd', 'e', 'f'), done);
		});
		it('should work with an if-then-else statement', function(done) {
			runStylesheet(StylesheetOnPageTests.IF_ELSE, genContainsRegex('a', 'd'), done);
		});
		it('should work with multiple nested if statements', function(done) {
			this.timeout(5000 * TIME_MODIFIER);
			runStylesheet(StylesheetOnPageTests.IF_NESTED, genContainsRegex('c', 'd', 'e'), done);
		});
		it('should work with multiple nested if-else statements', function(done) {
			runStylesheet(StylesheetOnPageTests.IF_ELSE_NESTED, genContainsRegex('b', 'd', 'f'), done);
		});
		it('should work with statements in blocks', function(done) {
			runStylesheet(StylesheetOnPageTests.OPTIONS_BLOCKS, 
				genContainsRegex('body', '{', 'margin-top:', '50px;', '}'), done);
		});
		describe('Toggling', function() {
			let dummy1: FoundElement;
			let dummy2: FoundElement;

			before('Setting up dummy elements', async function() {
				await driver.executeScript(inlineFn(() => {
					const dummy1 = document.createElement('div');
					dummy1.id = 'stylesheetTestDummy1';
					
					const dummy2 = document.createElement('div');
					dummy2.id = 'stylesheetTestDummy2';

					window.dummyContainer.appendChild(dummy1);
					window.dummyContainer.appendChild(dummy2); 
				}));
				await wait(50);
				const results = await FoundElementPromise.all([
					findElement(webdriver.By.id('stylesheetTestDummy1')),
					findElement(webdriver.By.id('stylesheetTestDummy2'))
				]);
				await wait(150);
				dummy1 = results[0];
				dummy2 = results[1];
			});
			describe('Default off', function() {
				const tabId = getRandomId();
				this.slow(600);
				this.timeout(1600 * TIME_MODIFIER);
				it('should be off by default', async () => {
					await wait(150);
					const dimensions = await dummy1.getSize();
					assert.notStrictEqual(dimensions.width, 50,
						'dummy element is not 50px wide');
				});
				it('should be on when clicked', async () => {
					const contextMenu = await getContextMenu();
					await driver.executeScript(inlineFn((REPLACE) => {
						return window.chrome._currentContextMenu[0]
							.children[StylesheetOnPageTests.TOGGLE_DEFAULT_OFF]
							.currentProperties.onclick(
								REPLACE.page, REPLACE.tab
							);
					}, {
						page: {
							menuItemId: contextMenu[0].id,
							editable: false,
							pageUrl: 'www.google.com',
							wasChecked: false
						},
						tab: {
							id: tabId,
							index: 1,
							windowId: getRandomId(),
							highlighted: false,
							active: true,
							pinned: false,
							selected: false,
							url: 'http://www.google.com',
							title: 'Google',
							incognito: false
						}
					}));
					await wait(100);
					const dimensions = await dummy1.getSize();
					assert.strictEqual(dimensions.width, 50,
						'dummy element is 50px wide');
				});
				it('should be off when clicked again', async () => {
					const contextMenu = await getContextMenu();
					await driver.executeScript(inlineFn((REPLACE) => {
						return window.chrome._currentContextMenu[0]
							.children[StylesheetOnPageTests.TOGGLE_DEFAULT_OFF]
							.currentProperties.onclick(
								REPLACE.page, REPLACE.tab
							);
					}, {
						page: {
							menuItemId: contextMenu[0].id,
							editable: false,
							pageUrl: 'www.google.com',
							wasChecked: true
						},
						tab: {
							id: tabId,
							index: 1,
							windowId: getRandomId(),
							highlighted: false,
							active: true,
							pinned: false,
							selected: false,
							url: 'http://www.google.com',
							title: 'Google',
							incognito: false
						}
					}));
					await wait(100);
					const dimensions = await dummy1.getSize();
					assert.notStrictEqual(dimensions.width, 50,
						'dummy element is not 50px wide');
				});
			});
			describe('Default on', function() {
				this.slow(300);
				this.timeout(1500 * TIME_MODIFIER);
				it('should be on by default', async () => {
					const dimensions = await dummy2.getSize();
					assert.strictEqual(dimensions.width, 50,
						'dummy element is 50px wide');
				});
			});
		});
	});
	describe('Errors', function() {
		this.timeout(60000 * TIME_MODIFIER);
		this.slow(100);

		it('should not have been thrown', async () => {
			const result = await driver.executeScript(inlineFn(() => {
				return window.lastError ? {
					message: window.lastError.message,
					stack: window.lastError.stack
					} : 'noError';
			})) as 'noError'|{
				message: string;
				stack: string;
			};
			if (result !== 'noError' && 
				result.message.indexOf('Object [object global] has no method') !== -1) {
				console.log(result);
				assert.ifError(result, 'no errors should be thrown during testing');
			} else {
				assert.ifError(false, 'no errors should be thrown during testing');
			}
		});
	});
});

after('quit driver', function() {
	this.timeout(210000);
	return new webdriver.promise.Promise<void>((resolve) => {
		//Resolve after 20 seconds regardless of quitting result
		setTimeout(() => {
			console.log('Resolving automatically');
			resolve(null);
		}, 15000);
		
		driver.quit().then(() => {
			resolve(null);
		});
	});
});