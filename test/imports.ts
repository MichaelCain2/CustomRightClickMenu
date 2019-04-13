import * as webdriver from 'selenium-webdriver';
import { exec } from 'child_process';
import { readFile } from 'fs';
import { join } from 'path';
import { GlobalObject, ContextMenuCreateProperties } from '../app/js/background/sharedTypes';
import { EncodedString } from '../app/elements/elements';

type StringifedFunction<RETVAL> = string & {
	__fn: RETVAL;
}

export declare class TypedWebdriver extends webdriver.WebDriver {
	executeScript<T>(script: StringifedFunction<T>): Promise<T>;
	executeScript<T>(script: string, ...var_args: any[]): Promise<T>;
	executeScript<T>(script: Function, ...var_args: any[]): Promise<T>;
}

export interface ExecutedScript {
	id: number;
	code: string;
}

export interface ContextMenuItem {
	id: number;
	createProperties: ContextMenuCreateProperties;
	currentProperties: ContextMenuCreateProperties;
	children: ContextMenuItem[];
}

export type ContextMenu = ContextMenuItem[];

type ExecutedScripts = ExecutedScript[];

export type DeepPartial<T> = {
	[P in keyof T]?: DeepPartial<T[P]>;
}

export type ActiveTabs = {
	type: 'create'|'update';
	data: any;
	id?: number;
}[];

export interface ChromeLastCall {
	api: string;
	args: any[];
}

export interface TestData {
	_lastSpecialCall: ChromeLastCall;
	_currentContextMenu: ContextMenu;
	_activeTabs: ActiveTabs;
	_executedScripts: ExecutedScripts;
	_activatedBackgroundPages: number[];
	_tabUpdateListeners: ((id: number, updateData: {
		status?: 'loading'|'complete';
		url?: string;
		pinned?: boolean;
		audible?: boolean;
		discarded?: boolean;
		autoDiscardable?: boolean;
		mutedInfo?: any;
		favIconUrl?: string;
		title?: string;
	}, tab: _browser.tabs.Tab) => void)[];
	_clearExecutedScripts: () => void;
	_fakeTabs: {
		[id: number]: {
			id: number;
			title: string;
			url: string;
		};
		[id: string]: {
			id: number;
			title: string;
			url: string;
		};
	};
}

export interface AppChrome extends DeepPartial<Chrome>, TestData {};

export type AsyncStates<T> = {
	state: 'pending';
	result: null
}|{
	state: 'complete';
	result: T;
}|{
	state: 'error';
	result: Error;
}

export interface AppWindow extends Window {
	logs: any[];
	lastError: any|void;
	chrome: AppChrome;
	BrowserAPI: BrowserAPI;
	dummyContainer: HTMLDivElement;
	polymerElementsLoaded: boolean;
	globals: GlobalObject['globals'];

	_log: any[];
	__asyncs: {
		[index: number]: AsyncStates<any>;
	}
}

declare const window: AppWindow;

let driver: TypedWebdriver;
let TIME_MODIFIER: number;

export interface BrowserstackCapabilities {
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
	'browserstack.console'?: string;
	'browserstack.networkLogs'?: boolean;
}

export function wait<T>(time: number, resolveParam: T): Promise<T>;
export function wait<T>(time: number): Promise<any>;
export function wait<T>(time: number, resolveParam?: T): Promise<T> {
	return new Promise((resolve) => {
		setTimeout(() => {
			if (resolveParam) {
				resolve(resolveParam);
			} else {
				resolve(null);
			}
		}, time);
	});
}

export function getGitHash() {
	return new Promise<string>((resolve) => {
		if (process.env.TRAVIS) {
			resolve(process.env.TRAVIS_COMMIT);
		} else {
			exec('git rev-parse HEAD', (err, stdout) => {
				if (err) {
					resolve('?');
				} else {
					resolve(stdout
						.replace(/\n/, '')
						.replace(/\r/, ''));
				}
			});
		}
	});
}

export function tryReadManifest(filePath: string): Promise<_chrome.runtime.Manifest> {
	return new Promise<_chrome.runtime.Manifest>((resolve) => {
		readFile(join(__dirname, '../', filePath), {
			encoding: 'utf8'
		}, (err, data) => {
			if (err) {
				resolve(null);
			} else {
				resolve(JSON.parse(data));
			}
		});
	});
}

function isThennable(value: any): value is Promise<any> {
	return value && typeof value === "object" && typeof value.then === "function";
}

export function waitFor<T>(condition: () => Promise<false|T>|Promise<false|T>|false|T, interval: number, 
	max: number): Promise<T> {
		return new Promise<T>((resolve, reject) => {
			let totalTime = 0;
			let stop: boolean = false;
			const fn = async () => {
				let conditionResult = condition();
				if (isThennable(conditionResult)) {
					conditionResult = await conditionResult;
				}

				if (conditionResult !== false) {
					resolve(conditionResult as T);
					stop = true;
				} else {
					totalTime += interval;
					if (totalTime >= max) {
						reject(`Condition took longer than ${max}ms`)
						stop = true;
					}
				}
				if (!stop) {
					setTimeout(fn, interval);
				}
			};
			fn();
		});
	}


function es3IfyFunction(str: string): string {
	if (str.indexOf('=>') === -1) {
		return str;
	}
	const [ args, body ] = str.split('=>').map(part => part.trim());
	return `function ${args} ${body}`;
}

export function inlineFn<T extends {
	[key: string]: any;
}, U>(fn: (REPLACE: T) => U|void, args?: T,
	...insertedFunctions: Function[]): StringifedFunction<U> {
		args = args || {} as T;
		let str = `${insertedFunctions.map(inserted => inserted.toString()).join('\n')}
			try { return (${es3IfyFunction(fn.toString())})(arguments) } catch(err) { throw new Error(err.name + '-' + err.stack); }`;
		Object.getOwnPropertyNames(args).forEach((key) => {
			let arg = args[key];
			if (typeof arg === 'object') {
				arg = JSON.stringify(arg);
			}
			if (typeof arg === 'function') {
				str = str.replace(new RegExp(`REPLACE\.${key}`, 'g'),
					`(${arg.toString()})`);
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

type StringifiedCallbackFunction<RETVAL, CALLBACKRES> = string & {
	__fn: RETVAL;
	__cb: CALLBACKRES;
}

export function inlineAsyncFn<T extends {
	[key: string]: any;
}, U>(fn: (resolve: (result: U) => void, reject: (err: any) => void, 
	REPLACE: T) => Promise<U>|void, args?: T,
	...insertedFunctions: Function[]): StringifiedCallbackFunction<number, U> {
		args = args || {} as T;
		let str = `${insertedFunctions.map(inserted => inserted.toString()).join('\n')}
			window.__asyncs = window.__asyncs || {};
			window.__lastAsync = window.__lastAsync || 1;
			var currentAsync = window.__lastAsync++;
			var onDone = function(result) {
				window.__asyncs[currentAsync] = {
					state: 'complete',
					result: result
				}
			}
			var onFail = function(err) {
				window.__asyncs[currentAsync] = {
					state: 'error',
					result: err
				}
			}
			window.__asyncs[currentAsync] = {
				state: 'pending',
				result: null
			}
			try { 
				const res = (${es3IfyFunction(fn.toString())})(onDone, onFail);
				if (typeof res === 'object' && 'then' in res) {
					res.then(function(result) {
						onDone(result);
					}).catch(function(err) {
						onFail(err);
					});
				}
			} catch(err) { 
				onFail(err.name + '-' + err.stack);
			}
			return currentAsync;`;
		Object.getOwnPropertyNames(args).forEach((key) => {
			let arg = args[key];
			if (typeof arg === 'object') {
				arg = JSON.stringify(arg);
			}
			if (typeof arg === 'function') {
				str = str.replace(new RegExp(`REPLACE\.${key}`, 'g'),
					`(${arg.toString()})`);
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
		return str as StringifiedCallbackFunction<number, U>;
	}

export function executeAsyncScript<T>(script: StringifiedCallbackFunction<number, T>): Promise<T> {
	return new Promise<T>(async (resolve, reject) => {
		const asyncIndex = await driver.executeScript(script);
		const descr = await waitFor(async () => {
			const result = await driver.executeScript(inlineFn((REPLACE) => {
				const index = REPLACE.index;
				if (window.__asyncs[index].state !== 'pending') {
					const descr = window.__asyncs[index] as AsyncStates<T>;
					delete window.__asyncs[index];
					return descr;
				}
				return null;
			}, {
				index: asyncIndex
			}));
			if (result) {
				return result;
			}
			return false;
		}, 15, 60000 * TIME_MODIFIER);
		if (descr.state === 'complete') {
			resolve(descr.result);
		} else if (descr.state === 'error') {
			reject(descr.result);
		}
	});
}

export function getCRM<T extends CRM.Node[] = CRM.Tree>(): Promise<T> {
	return new Promise<T>((resolve) => { 
		driver.executeScript(inlineFn(() => {
			return JSON.stringify(window.app.settings.crm);
		})).then((str: EncodedString<T>) => {
			resolve(JSON.parse(str));
		});
	});
}

export async function waitForEditor() {
	await waitFor(() => {
		return driver.executeScript(inlineFn(() => {
			if (!window.app.item) {
				return true;
			}
			if (window.app.item.type === 'script') {
				return window.scriptEdit.editorManager &&
					window.scriptEdit.editorManager.getModel('default') &&
					window.scriptEdit.editorManager.getModel('default').handlers && 
					!!window.scriptEdit.editorManager.getModel('default').handlers[0]
			} else if (window.app.item.type === 'stylesheet') {
				return window.stylesheetEdit.editorManager &&
					window.stylesheetEdit.editorManager.getModel('default') &&
					window.stylesheetEdit.editorManager.getModel('default').handlers && 
					!!window.stylesheetEdit.editorManager.getModel('default').handlers[0]
			} else {
				return true;
			}
		}));
	}, 25, 60000 * TIME_MODIFIER);
}

export function saveDialog(dialog: FoundElement): Promise<void> {
	return new Promise<void>(async (resolve) => {
		await waitForEditor();
		await dialog.findElement(webdriver.By.id('saveButton')).click();
		resolve(null);
	});
}

export type DialogType = 'link'|'script'|'divider'|'menu'|'stylesheet';
export function getDialog(type: DialogType): Promise<FoundElement> {
	return new Promise<FoundElement>(async (resolve) => {
		const el = await findElement(webdriver.By.tagName('crm-app'))
			.findElement(webdriver.By.tagName('crm-edit-page'))
			.findElement(webdriver.By.tagName(`${type}-edit`));
			
		await wait(500);
		resolve(el);
	});
}

export function isPromise(value: any): value is Promise<any> {
	return typeof value === 'object' && 'then' in value;
}

function generatePromiseChain<T>(data: T[],
	fn: (data: T) => PromiseLike<any>,
	index: number,
	resolve: (value: Object) => any) {
		if (index !== data.length) {
			fn(data[index]).then(() => {
				generatePromiseChain(data, fn, index + 1, resolve);
			});
		} else {
			resolve(null);
		}
	}

type IFulfilledCallback<T> = (value: T) => any|PromiseLike<T>;
type IRejectedCallback = (err: any) => any;

export function forEachPromise<T>(data: T[],
	fn: (data: T) => PromiseLike<any>): 
	Promise<any> {
		return new Promise((resolve) => {
			generatePromiseChain(data, fn, 0, resolve);
		});
	}

type Resolver<T> = (onFulfilled: IFulfilledCallback<T>, 
	onRejected: IRejectedCallback) => void;

class PromiseWrapper<T> implements PromiseLike<T> {
	protected _promise: Promise<T>;

	constructor(resolver?: Resolver<T>) {
		this._promise = new Promise(resolver);
	}

	get promise() {
		return this._promise;
	}

	then<TResult1 = T, TResult2 = never>(
		onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, 
		onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): 
			PromiseLike<TResult1 | TResult2> {
				if (onrejected) {
					return this._promise.then(onfulfilled, onrejected) as unknown as PromiseLike<TResult1|TResult2>;
				}
				if (onfulfilled) {
					return this._promise.then(onfulfilled) as unknown as PromiseLike<TResult1|TResult2>;
				}
				return this._promise.then();
			}
}

export class FoundElementsPromise extends PromiseWrapper<FoundElement[]> {
	private _items: FoundElement[];
	private _err: any;
	private _gotItems: {
		index: number;
		resolve: IFulfilledCallback<FoundElement>;
		reject: IRejectedCallback;
	}[];
	private _done: boolean;

	constructor(resolver?: Resolver<FoundElement[]>) {
		//Wait until this is initialized before running the resolver
		let readyResolve: IFulfilledCallback<void> = null;
		const ready = new Promise<void>((resolve) => {
			readyResolve = resolve;
		});
		super((onFulfilled, onRejected) => {
			ready.then(() => {
				resolver(onFulfilled, onRejected);
			});
		});

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

	private _onFulfill(res: FoundElement[]) {
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

		let _resolve: IFulfilledCallback<FoundElement>;
		let _reject: IRejectedCallback;
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
		return new Promise<number>((resolve) => {
			if (this._done) {
				resolve((this._items && this._items.length) || 0);
			} else {
				this.then((items) => {
					resolve((items && items.length) || 0);
				});
			}
		});
	}

	public map<T>(fn: (element: FoundElement) => T): Promise<T[]>;
	public map<T>(fn: (element: FoundElement) => T, 
		isElements?: false): Promise<T[]>;
	public map<T>(fn: (element: FoundElement) => T, 
		isElements?: true): FoundElementsPromise;
	public map<T>(fn: (element: FoundElement) => T, isElements: boolean = false) {
		if (isElements) {
			return new FoundElementsPromise((resolve) => {
				this.then((items) => {
					resolve(items.map(fn) as any[]);
				});	
			});
		}
		return new Promise<T[]>((resolve) => {
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
	public mapWait(fn: (element: FoundElement) => 
		Promise<any>): Promise<void> {
			return new Promise<void>((resolve) => {
				this.map(fn).then((mapped) => {
					Promise.all(mapped).then(() => {
						resolve(null);
					});
				});
			});
		}

	public mapWaitChain(fn: (element: FoundElement, index: number) => 
		PromiseLike<any>, elements?: FoundElement[], index = 0): Promise<void> {
			return new Promise<void>(async (resolve) => {
				if (!elements) {
					elements = await this;
				}
				if (elements.length === 0) {
					resolve(null);
				} else {
					const result = await fn(elements[0], index);
					if (elements[1]) {
						resolve(await this.mapWaitChain(fn, elements.slice(1), index + 1));
					} else {
						resolve(result);
					}
				}
			});
		}

	public waitFor(awaitable: Promise<any>) {
		return new FoundElementsPromise(async (resolve) => {
			const [ elements ] = await Promise.all([
				this._promise,
				awaitable
			]) as [ FoundElement[], any ];
			resolve(elements);
		});
	}

	public wait(ms: number) {
		return new FoundElementsPromise(async (resolve) => {
			await wait(ms);
			const thisResult = await this;
			resolve(thisResult);
		});
	}
}

export class FoundElementPromise extends PromiseWrapper<FoundElement> {
	constructor(resolver: (onFulfilled: IFulfilledCallback<FoundElement>, 
			onRejected: IRejectedCallback)=>void) {
		super(resolver);
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
	sendKeys(...args: (string|Promise<string>|InputKeys)[]) {
		return new Promise<void>((resolve) => {
			this.then((element) => {
				element.sendKeys(...args).then(() => {
					resolve(undefined);
				});
			});
		});
	}
	getAttribute(attr: string): Promise<string> {
		return new Promise<string>((resolve) => {
			this.then((element) => {
				element.getAttribute(attr).then((value) => {
					resolve(value);
				});
			});
		});
	}
	getProperty(prop: string): Promise<any> {
		return new Promise<any>((resolve) => {
			this.then((element) => {
				element.getProperty(prop).then((value) => {
					resolve(value);
				});
			});
		});
	}
	getSize(): Promise<ClientRect> {
		return new Promise<ClientRect>((resolve) => {
			this.then((element) => {
				element.getSize().then((size) => {
					resolve(size);
				});
			});
		});
	}
	waitFor(awaitable: Promise<any>) {
		return new FoundElementPromise(async (resolve) => {
			const [ element ] = await Promise.all([
				this._promise,
				awaitable
			]) as [ FoundElement, any ];
			resolve(element);
		});
	}
	wait(ms: number) {
		return new FoundElementPromise(async (resolve) => {
			await wait(ms);
			const thisResult = await this;
			resolve(thisResult);
		});
	}
	getText(): Promise<string> {
		return new Promise<string>((resolve) => {
			this.then((element) => {
				element.getText().then((text) => {
					resolve(text);
				});
			});
		});
	}
}

export interface FoundElement {
	click(): Promise<void>;
	findElement(by: webdriver.Locator): FoundElementPromise;
	findElements(by: webdriver.Locator): FoundElementsPromise;
	sendKeys(...args: (string|Promise<string>|InputKeys)[]): Promise<void>;
	getAttribute(attr: string): Promise<string>;
	getProperty(prop: string): Promise<any>;
	getSize(): Promise<ClientRect>;
}

export const enum InputKeys {
	CLEAR_ALL = 0,
	BACK_SPACE = 1
}

function findElementOnPage(selector: string): HTMLElement {
	const list = JSON.parse(selector as EncodedString<[string, number][]>);
	let el: Element = document.body;
	for (let i = 0; i < list.length; i++) {
		if (!el) {
			return null;
		}
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

function getValueForType(type: string, value: string) {
	switch (type) {
		case 'className':
			return `.${value}`;
		case 'css selector':
			return value;
		case 'id':
			return `#${value}`;
		case 'linkText':
			return `*[href=${value}]`;
		case 'name':
			return  `*[name="${value}"]`;
		case 'tagName':
			return value;
		default:
		case 'js':
		case 'xpath':
		case 'partialLinkText':
			throw new Error('Not implemented');
	}
}

function locatorToCss(by: webdriver.Locator): string {
	if (by instanceof webdriver.By) {
		const byObj = by as  {
			using: string;
			value: string;
		}
		return getValueForType(byObj.using, byObj.value);
	} else if (typeof by === 'function') {
		throw new Error('Unrecognized locator used');
	} else {
		const keys = Object.getOwnPropertyNames(by);
		const key = keys[0] as keyof typeof by;
		return getValueForType(key, (by as any)[key] as string);
	}
}

function checkIfListContainsElement<T extends HTMLElement|Element>(element: T): string {
	const keys: (Extract<keyof T, string>)[] = Object.getOwnPropertyNames(element) as (Extract<keyof T, string>)[];
	for (let i = 0; i < keys.length; i++) {
		if (keys[i].slice(0, 2) === '__' && element[keys[i]] !== null) {
			return keys[i];
		}
	}
	throw new Error('Could not find element');
}

export function quote<T extends string>(str: T): T {
	return `'${str}'` as T;
}

export class FoundElement implements FoundElement {
	constructor(public selector: string, public index: number,
		public parent: FoundElement = null) { }

	click(): Promise<void> {
		const selectorList = [[this.selector, this.index]];
		let currentElement: FoundElement = this;
		while (currentElement.parent) {
			currentElement = currentElement.parent;
			selectorList.push([currentElement.selector, currentElement.index]);
		}
		return new Promise<void>((resolve) => {
			driver.executeScript(inlineFn(() => {
				findElementOnPage('REPLACE.selector').click();
			}, {
				selector: JSON.stringify(selectorList.reverse())
			}, findElementOnPage)).then(() => {
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
				if (!baseEl) {
					return 'null';
				}
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
					reject(new Error(`Failed to find element with selector ${css}`));
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
				if (!baseEl) {
					return JSON.stringify([] as ('null'|'exists')[]);
				}
				let elList = baseEl.querySelectorAll('REPLACE.css');
				if (baseEl.shadowRoot) {
					const candidate = baseEl.shadowRoot.querySelectorAll('REPLACE.css');
					if (candidate.length > elList.length) {
						elList = candidate;
					}
				}
				return JSON.stringify(Array.prototype.slice.apply(elList)
					.map(function(element: HTMLElement) {
						if (element === null) {
							return 'null';
						}
						return 'exists';
					}) as ('null'|'exists')[]);
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
	sendKeys(...args: (string|Promise<string>|InputKeys)[]):
		Promise<void> {
			return new Promise<void>((resolve) => {
				return Promise.all(args.map((arg) => {
					if (isPromise(arg)) {
						return arg as Promise<string>;
					}
					return new Promise((instantResolve) => {
						instantResolve(arg);
					});
				})).then((keys: (string|InputKeys)[]) => {
					const selectorList = [[this.selector, this.index]];
					let currentElement: FoundElement = this;
					while (currentElement.parent) {
						currentElement = currentElement.parent;
						selectorList.push([currentElement.selector, currentElement.index]);
					}
					return new Promise((sentKeysResolve) => {
						driver.executeScript(inlineFn((REPLACE) => {
							const el = findElementOnPage('REPLACE.selector') as HTMLInputElement;
							const keyPresses = REPLACE.keypresses as (string|InputKeys)[];
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
	getProperty<T>(prop: string): Promise<T> {
		const selectorList = [[this.selector, this.index]];
		let currentElement: FoundElement = this;
		while (currentElement.parent) {
			currentElement = currentElement.parent;
			selectorList.push([currentElement.selector, currentElement.index]);
		}
		return new Promise<T>((resolve) => {
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
	getAttribute(attr: keyof HTMLElement): Promise<string> {
		const selectorList = [[this.selector, this.index]];
		let currentElement: FoundElement = this;
		while (currentElement.parent) {
			currentElement = currentElement.parent;
			selectorList.push([currentElement.selector, currentElement.index]);
		}
		return new Promise<string>((resolve) => {
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
	getSize(): Promise<ClientRect> {
		const selectorList = [[this.selector, this.index]];
		let currentElement: FoundElement = this;
		while (currentElement.parent) {
			currentElement = currentElement.parent;
			selectorList.push([currentElement.selector, currentElement.index]);
		}
		return new Promise<ClientRect>(async (resolve) => {
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
	async waitFor(awaitable: Promise<any>): Promise<this> {
		await awaitable;
		return this;
	}
	getText(): Promise<string> {
		const selectorList = [[this.selector, this.index]];
		let currentElement: FoundElement = this;
		while (currentElement.parent) {
			currentElement = currentElement.parent;
			selectorList.push([currentElement.selector, currentElement.index]);
		}
		return new Promise<string>(async (resolve) => {
			resolve(await driver.executeScript(inlineFn(() => {
				return findElementOnPage('REPLACE.selector').innerText;
			}, {
				selector: JSON.stringify(selectorList.reverse())
			}, findElementOnPage)));
		});
	}
}

export function findElement(by: webdriver.Locator): FoundElementPromise {
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
			reject(new Error(`Failed to find element with selector ${selector}`));
		}
	});
}

export function setDriver(newDriver: TypedWebdriver) {
	driver = newDriver;
}

export function setTimeModifier(modifier: number) {
	TIME_MODIFIER = modifier;
}

export async function waitForCRM(timeRemaining: number) {
	await waitFor(() => {
		return driver.executeScript(inlineFn(() => {
			const crmItem = window.app.editCRM.shadowRoot.querySelectorAll('edit-crm-item:not([root-node])')[0];
			return !!crmItem;
		}));
	}, 250, timeRemaining);
}

export function resetSettings(__this: Mocha.ISuiteCallbackContext|Mocha.IHookCallbackContext, done: (...args: any[]) => void): void;
export function resetSettings(__this?: Mocha.ISuiteCallbackContext|Mocha.IHookCallbackContext): Promise<void>; 
export function resetSettings(__this?: Mocha.ISuiteCallbackContext|Mocha.IHookCallbackContext, 
	done?: (...args: any[]) => void): Promise<any>|void {
		__this && __this.timeout(30000 * TIME_MODIFIER);
		const promise = new Promise<void>(async (resolve) => {
			const result = await executeAsyncScript(inlineAsyncFn((done) => {
				try {
					window.browserAPI.storage.local.clear().then(() => {
						window.browserAPI.storage.sync.clear().then(() => {
							window.app.refreshPage().then(() => {
								done(null);
							});
						});
					});
				} catch(e) {
					done({
						message: e.message,
						stack: e.stack
					});
				};
			}));
			if (result) {
				console.log(result);
				throw result;
			}
			await waitForCRM(5000);
			await wait(1500);
			resolve(null);
		});
		if (done) {
			promise.then(done);
		} else {
			return promise;
		}
	}