//TODO: uncomment when done with file
// import { LocaleSpec } from '../i18n';

interface I18NMessage {
	message: string;
	description?: string;
	placeholders?: {
		[key: string]: {
			content: string;
			example?: string;
		}
	}
}

type I18NBranch = {
	[key: string]: I18NBranch|I18NLeaf;
}

type I18NLeaf = {
	[key: string]: I18NMessage;
};

// Structure only allows a branch to split into subbranches or
// to contain leafs with messages. Not both at the same time

export const Messages: I18NBranch = {
	generic: {
		app_title: {
			message: 'Custom Right-Click Menu',
			description: 'The name of the extension'
		},
		add: {
			message: 'add',
			description: 'Button that adds a new element'
		},
		dismiss: {
			message: 'DISMISS',
			description: 'Button that dismisses a toast (notification)'
		},
		undo: {
			message: 'UNDO',
			description: 'Button that undoes last action'
		},
		next: {
			message: 'NEXT',
			description: 'Button that switches to the next item in some list'
		},
		previous: {
			message: 'previous',
			description: 'Button that switches to the previous item in some list'
		},
		cancel: {
			message: 'cancel',
			description: 'A button that cancels the current operation or dialog'
		},
		save: {
			message: 'save',
			description: 'A button that saves the current operation'
		},
		discard: {
			message: 'discard',
			description: 'Discards changes the user made'
		},
		no: {
			message: 'no',
			description: 'Word for no'
		},
		yes: {
			message: 'yes',
			description: 'Word for yes'
		},
		close: {
			message: 'close',
			description: 'Closes a dialog of some sort'
		},
		apply: {
			message: 'apply',
			description: 'Applies changes'
		}
	},
	crm: {
		exampleLinkName: {
			message: 'My Link',
			description: 'A default name for a link node'
		},
		exampleStylesheetName: {
			message: 'My Stylesheet',
			description: 'A default name for a stylesheet node'
		},
		exampleScriptName: {
			message: 'My Script',
			description: 'A default name for a script node'
		},
		exampleDividerName: {
			message: 'My Divider',
			description: 'A default name for a divider node'
		},
		exampleMenuName: {
			message: 'My Menu',
			description: 'A default name for a menu node'
		},
		node: {
			message: 'node',
			description: 'Word for a single node/item'
		},
		id: {
			message: 'id',
			description: 'Word for the ID of a node/item. This is used to identify it in the extension itself (the user won\'t see it except in errors)'
		}
	},
	permissions: {
		alarms: {
			message: 'Makes it possible to create, view and remove alarms.',
			description: 'Description for the alarms permission'
		},
		activeTab: {
			message: 'Gives temporary access to the tab on which browserActions or contextmenu items are clicked',
			description: 'Description for the activeTab permission'
		},
		background: {
			message: 'Runs the extension in the background even while chrome is closed.',
			description: 'Description for the background permission'
		},
		bookmarks: {
			message: 'Makes it possible to create, edit, remove and view all your bookmarks.',
			description: 'Description for the bookmarks permission'
		},
		browsingData: {
			message: 'Makes it possible to remove any saved data on your browser at specified time allowing the user to delete any history, saved passwords, cookies, cache and basically anything that is not saved in incognito mode but is in regular mode. This is editable so it is possible to delete ONLY your history and not the rest for example. (https://developer.chrome.com/extensions/bookmarks)',
			description: 'Description for the browsingData permission'
		},
		clipboardRead: {
			message: 'Allows reading of the users\' clipboard',
			description: 'Description for the clipboardRead permission'
		},
		clipboardWrite: {
			message: 'Allows writing data to the users\' clipboard',
			description: 'Description for the clipboardWrite permission'
		},
		cookies: {
			message: 'Allows for the setting, getting and listenting for changes of cookies on any website. (https://developer.chrome.com/extensions/cookies)',
			description: 'Description for the cookies permission'
		},
		contentSettings: {
			message: 'Allows changing or reading your browser settings to allow or deny things like javascript, plugins, popups, notifications or other things you can choose to accept or deny on a per-site basis. (https://developer.chrome.com/extensions/contentSettings)',
			description: 'Description for the contentSettings permission'
		},
		contextMenus: {
			message: 'Allows for the changing of the chrome contextmenu',
			description: 'Description for the contextMenus permission'
		},
		declarativeContent: {
			message: 'Allows for the running of scripts on pages based on their url and CSS contents. (https://developer.chrome.com/extensions/declarativeContent)',
			description: 'Description for the declarativeContent permission'
		},
		desktopCapture: {
			message: 'Makes it possible to capture your screen, current tab or chrome window (https://developer.chrome.com/extensions/desktopCapture)',
			description: 'Description for the desktopCapture permission'
		},
		downloads: {
			message: 'Allows for the creating, pausing, searching and removing of downloads and listening for any downloads happenng. (https://developer.chrome.com/extensions/downloads)',
			description: 'Description for the downloads permission'
		},
		history: {
			message: 'Makes it possible to read your history and remove/add specific urls. This can also be used to search your history and to see howmany times you visited given website. (https://developer.chrome.com/extensions/history)',
			description: 'Description for the history permission'
		},
		identity: {
			message: 'Allows for the API to ask you to provide your (google) identity to the script using oauth2, allowing you to pull data from lots of google APIs: calendar, contacts, custom search, drive, gmail, google maps, google+, url shortener (https://developer.chrome.com/extensions/identity)',
			description: 'Description for the identity permission'
		},
		idle: {
			message: 'Allows a script to detect whether your pc is in a locked, idle or active state. (https://developer.chrome.com/extensions/idle)',
			description: 'Description for the idle permission'
		},
		management: {
			message: 'Allows for a script to uninstall or get information about an extension you installed, this does not however give permission to install other extensions. (https://developer.chrome.com/extensions/management)',
			description: 'Description for the management permission'
		},
		notifications: {
			message: 'Allows for the creating of notifications. (https://developer.chrome.com/extensions/notifications)',
			description: 'Description for the notifications permission'
		},
		pageCapture: {
			message: 'Allows for the saving of any page in MHTML. (https://developer.chrome.com/extensions/pageCapture)',
			description: 'Description for the pageCapture permission'
		},
		power: {
			message: 'Allows for a script to keep either your screen or your system altogether from sleeping. (https://developer.chrome.com/extensions/power)',
			description: 'Description for the power permission'
		},
		privacy: {
			message: 'Allows for a script to query what privacy features are on/off, for exaple autoFill, password saving, the translation feature. (https://developer.chrome.com/extensions/privacy)',
			description: 'Description for the privacy permission'
		},
		printerProvider: {
			message: 'Allows for a script to capture your print jobs\' content and the printer used. (https://developer.chrome.com/extensions/printerProvider)',
			description: 'Description for the printerProvider permission'
		},
		sessions: {
			message: 'Makes it possible for a script to get all recently closed pages and devices connected to sync, also allows it to re-open those closed pages. (https://developer.chrome.com/extensions/sessions)',
			description: 'Description for the sessions permission'
		},
		systemcpu: {
			message: 'Allows a script to get info about the CPU. (https://developer.chrome.com/extensions/system_cpu)',
			description: 'Description for the system.cpu permission'
		},
		systemmemory: {
			message: 'Allows a script to get info about the amount of RAM memory on your computer. (https://developer.chrome.com/extensions/system_memory)',
			description: 'Description for the system.memory permission'
		},
		systemstorage: {
			message: 'Allows a script to get info about the amount of storage on your computer and be notified when external storage is attached or detached. (https://developer.chrome.com/extensions/system_storage)',
			description: 'Description for the system.storage permission'
		},
		topSites: {
			message: 'Allows a script to your top sites, which are the sites on your new tab screen. (https://developer.chrome.com/extensions/topSites)',
			description: 'Description for the topSites permission'
		},
		tabCapture: {
			message: 'Allows the capturing of the CURRENT tab and only the tab. (https://developer.chrome.com/extensions/tabCapture)',
			description: 'Description for the tabCapture permission'
		},
		tabs: {
			message: 'Allows for the opening, closing and getting of tabs',
			description: 'Description for the tabs permission'
		},
		tts: {
			message: 'Allows a script to use chrome\'s text so speach engine. (https://developer.chrome.com/extensions/tts)',
			description: 'Description for the tts permission'
		},
		webNavigation: {
			message: 'Allows a script info about newly created pages and allows it to get info about what website visit at that time.' +
			' (https://developer.chrome.com/extensions/webNavigation)',
			description: 'Description for the webNavigation permission'
		},
		webRequest: {
			message: 'Allows a script info about newly created pages and allows it to get info about what website you are visiting, what resources are downloaded on the side, and can basically track the entire process of opening a new website. (https://developer.chrome.com/extensions/webRequest)',
			description: 'Description for the webRequest permission'
		},
		webRequestBlocking: {
			message: 'Allows a script info about newly created pages and allows it to get info about what website you are visiting, what resources are downloaded on the side, and can basically track the entire process of opening a new website. This also allows the script to block certain requests for example for blocking ads or bad sites. (https://developer.chrome.com/extensions/webRequest)',
			description: 'Description for the webRequestBlocking permission'
		},
		crmGet: {
			message: 'Allows the reading of your Custom Right-Click Menu, including names, contents of all nodes, what they do and some metadata for the nodes',
			description: 'Description for the crmGet permission'
		},
		crmWrite: {
			message: 'Allows the writing of data and nodes to your Custom Right-Click Menu. This includes <b>creating</b>, <b>copying</b> and <b>deleting</b> nodes. Be very careful with this permission as it can be used to just copy nodes until your CRM is full and delete any nodes you had. It also allows changing current values in the CRM such as names, actual scripts in script-nodes etc.',
			description: 'Description for the crmWrite permission'
		},
		crmRun: {
			message: 'Allows the running of arbitrary scripts from the background-page',
			description: 'Description for the crmRun permission'
		},
		crmContextmenu: {
			message: 'Allows the editing of this item\'s name in the contextmenu at runtime',
			description: 'Description for the crmContextmenu permission'
		},
		chrome: {
			message: 'Allows the use of chrome API\'s',
			description: 'Description for the chrome permission'
		},
		browser: {
			message: 'Allows the use of browser API\'s',
			description: 'Description for the browser permission'
		},
		GM_addStyle: {
			message: 'Allows the adding of certain styles to the document through this API',
			description: 'Description for the GM_addStyle permission'
		},
		GM_deleteValue: {
			message: 'Allows the deletion of storage items',
			description: 'Description for the GM_deleteValue permission'
		},
		GM_listValues: {
			message: 'Allows the listing of all storage data',
			description: 'Description for the GM_listValues permission'
		},
		GM_addValueChangeListener: {
			message: 'Allows for the listening of changes to the storage area',
			description: 'Description for the GM_addValueChangeListener permission'
		},
		GM_removeValueChangeListener: {
			message: 'Allows for the removing of listeners',
			description: 'Description for the GM_removeValueChangeListener permission'
		},
		GM_setValue: {
			message: 'Allows for the setting of storage data values',
			description: 'Description for the GM_setValue permission'
		},
		GM_getValue: {
			message: 'Allows the reading of values from the storage',
			description: 'Description for the GM_getValue permission'
		},
		GM_log: {
			message: 'Allows for the logging of values to the console (same as normal console.log)',
			description: 'Description for the GM_log permission'
		},
		GM_getResourceText: {
			message: 'Allows the reading of the content of resources defined in the header',
			description: 'Description for the GM_getResourceText permission'
		},
		GM_getResourceURL: {
			message: 'Allows the reading of the URL of the predeclared resource',
			description: 'Description for the GM_getResourceURL permission'
		},
		GM_registerMenuCommand: {
			message: 'Allows the adding of a button to the extension menu - not implemented',
			description: 'Description for the GM_registerMenuCommand permission'
		},
		GM_unregisterMenuCommand: {
			message: 'Allows the removing of an added button - not implemented',
			description: 'Description for the GM_unregisterMenuCommand permission'
		},
		GM_openInTab: {
			message: 'Allows the opening of a tab with given URL',
			description: 'Description for the GM_openInTab permission'
		},
		GM_xmlhttpRequest: {
			message: 'Allows you to make an XHR to any site you want',
			description: 'Description for the GM_xmlhttpRequest permission'
		},
		GM_download: {
			message: 'Allows the downloading of data to the hard disk',
			description: 'Description for the GM_download permission'
		},
		GM_getTab: {
			message: 'Allows the reading of an object that\'s persistent while the tab is open - not implemented',
			description: 'Description for the GM_getTab permission'
		},
		GM_saveTab: {
			message: 'Allows the saving of the tab object to reopen after a page unload - not implemented',
			description: 'Description for the GM_saveTab permission'
		},
		GM_getTabs: {
			message: 'Allows the reading of all tab object - not implemented',
			description: 'Description for the GM_getTabs permission'
		},
		GM_notification: {
			message: 'Allows sending desktop notifications',
			description: 'Description for the GM_notification permission'
		},
		GM_setClipboard: {
			message: 'Allows copying data to the clipboard - not implemented',
			description: 'Description for the GM_setClipboard permission'
		},
		GM_info: {
			message: 'Allows the reading of some script info',
			description: 'Description for the GM_info permission'
		},
		unsafeWindow: {
			message: 'Allows the running on an unsafe window object - available by default',
			description: 'Description for the unsafeWindow permission'
		}
	},
	langs: {
		languages: {
			en: {
				message: 'English',
				description: 'The english language'
			},
		},
		selector: {
			current: {
				message: 'current',
				description: 'Word to signal this is the currently selected item, example: "english, current"'
			},
			clickToChangeLanguage: {
				message: 'Click here to change your language',
				description: 'Used for a button that will allow you to change your language on click'
			},
			requestLanguage: {
				message: 'Request a language or consider translating into yours',
				description: 'Requesting a new language and/or translating into your native one'
			}
		}
	},
	crmApp: {
		editcrm: {
			editingCrm: {
				message: 'Editing the CRM',
				description: 'Title for edit-crm section'
			}
		},
		ribbons: {
			ts: {
				message: 'TS',
				description: 'The typescript icon'
			},
			tslint: {
				message: 'Run TSLint',
				description: 'Runs the TSLint checker'
			},
			jslint: {
				message: 'Run JSLint',
				description: 'Runs the JSLint checker'
			},
			info: {
				message: 'Info',
				description: 'An info button'
			}
		},
		editor: {
			settings: {
				header: {
					message: 'Editor Settings',
					description: 'Title header for the settings for the CRM editor'
				},
				theme: {
					message: 'Theme',
					description: 'The theme setting\'s name'
				},
				fontsizePercentage: {
					message: 'Font size %',
					description: 'The font size option with a % behind it'
				},
				jslintGlobals: {
					message: 'Comma separated list of JSLint globals',
					description: 'Description of the jslint globals option which requires a comma separated list of global values'
				},
				keybindings: {
					message: 'Key Bindings',
					description: 'The key bindings option'
				}
			}
		},
		header: {
			oldChrome: {
				message: 'You are using a very old version of Chrome ($version$ years old). Some features may perform worse or not at all. Please consider updating your chrome',
				description: 'Description telling the user that their chrome version is $version$ years old and that it might not work that well and they should consider updating.',
				placeholders: {
					version: {
						content: '$1',
						example: '6'
					}
				}
			}
		},
		crmtype: {
			toggle: {
				message: 'Toggle showing items that are visible when right-clicking on $contenttype$',
				description: 'Clicking this button will toggle visibility of given content-type',
				placeholders: {
					contenttype: {
						content: '$1',
						example: 'regular webpages, web links, selected'
					}
				}
			},
			regularWebpages: {
				message: 'regular webpages',
				description: 'A longer description for webpages'
			},
			webpages: {
				message: 'Webpages',
				description: 'A short description for webpages'
			},
			weblinks: {
				message: 'weblinks',
				description: 'A short description for weblinks (HTML anchor elements)'
			},
			selectedText: {
				message: 'selected text',
				description: 'A short description selected text (a selection)'
			},
			selection: {
				message: 'selection',
				description: 'A short description for a block of selected text'
			},
			images: {
				message: 'images',
				description: 'A description for images/pictures'
			},
			videos: {
				message: 'videos',
				description: 'A description for videos'
			},
			audio: {
				message: 'audio',
				description: 'A description for audio elements (music, mp3 etc)'
			}
		},
		options: {
			header: {
				message: 'Options',
				description: 'The options section\'s header'
			},
			catchErrors: {
				message: 'Catch errors in scripts and log them. If off, allows for easier debugging using your browser\'s "pause on exceptions", if on, allows for custom handling.',
				description: 'See message'
			},
			showoptions: {
				message: 'Show options link in right-click menu',
				description: 'The option to show the "options" link to the options page in the right-click menu'
			},
			recoverUnsavedData: {
				message: 'Prompt you with an option to recover your unsaved script after you close a script/stylesheet without hitting the "save" or "exit" button.',
				description: 'See message'
			},
			CRMOnPageDisabled: {
				message: 'Can\'t disable demo contextmenu in demo mode',
				description: 'Reason the CRMOnPage options is disabled'
			},
			CRMOnPageOption: {
				message: 'Use your custom right-click menu on this page as a preview instead of your browser\'s regular one.',
				description: 'See message'
			},
			useStorageSyncDisabledUnavailable: {
				message: 'Syncing is not available in your browser',
				description: 'Reason the useStorageSync option is disabled. Reason is because the browser.storage.sync API is not available in the user\'s browser'
			},
			useStorageSyncDisabledTooBig: {
				message: 'Amount of data is too big to sync',
				description: 'Reason the useStorageSync option is disabled. Reason is because the sync storage is full'
			},
			useStorageSyncOption: {
				message: 'Sync your storage across all browser instances signed in to this account using browser storage sync. Turning this on will limit your total CRM size (including scripts, excluding libraries) to a total of 102,400 bytes. Currently using',
				description: 'See message'
			},
			editCRMInRM: {
				message: 'Edit the custom right-click Menu by clicking on the respective elements when right-clicking on this page',
				description: 'See message'
			},
			bytes: {
				message: 'bytes',
				description: 'The bytes unit. Example: 10000 {bytes}'
			},
			managePermissions: {
				message: 'Manage Permissions',
				description: 'Button for managing permissions'
			}
		},
		defaultLinks: {
			header: {
				message: 'Commonly Used Links',
				description: 'Header for the default/commonly used links section'
			},
			description: {
				message: 'Here are some commonly used links to get you started. ' +
					'Click the "ADD" button to add the link to your custom ' +
					'right-click menu. It will be added at the end of the ' +
					'list but you can always change the order later if you want.',
				description: 'Description for the commonly used links section'
			}
		},
		searchEngines: {
			header: {
				message: 'Search Engines',
				description: 'Header for the search engines section'
			},
			description: {
				message: 'These are some commonly used search-engines.' +
					'Click "ADD" to add the search-engine to your CRM. You can ' +
					'then drag the link anywhere you want it to be. You can ' +
					'also change the name you want it to have below or do it ' +
					'when it\'s already in your CRM. The $REPLACE_VAL$ ' +
					'is replaced with whatever text you\'ve selected (if any).',
				description: 'The description for the search engines section',
				placeholders: {
					replace_val: {
						content: '<code class="codeSynthax">%s</code>',
						example: 'Code above'
					}
				}
			}
		},
		uriScheme: {
			header: {
				message: 'Launching programs instead of links',
				description: 'Header for the URI scheme section'
			},
			description: {
				message: 'You may want to launch programs on your computer as well, ' +
					'instead of only using links.' +
					'This is possible, but requires a bit of extra effort because ' +
					'of browsers\' security restrictions.' +
					'Directly linking to files on your computer to open them is ' +
					'not possible (at least not for executable programs),' +
					'this is why you\'ll need to set up a custom (local only) URI ' +
					'that launches the program you want to launch.' +
					'If you want to read up about it some more check out ' +
					'$CUSTOM_URI_INFO$ page.' +
					'To make this possible you\'ll need to add a key/value ' +
					'pair in your registry. After doing this, ' +
					'instead of http:// use yourscheme:// as a link.<br>' +
					'If you are on a mac you can use' +
					'$CUSTOM_URI_MAC$' +
					'method. If you are on a windows computer you can do this yourself if you' +
					'want to (follow ' +
					'$CUSTOM_URI_WINDOWS$ instructions),' +
					'or you can generate a file you can download that will ' +
					'write the key/value pair for you by hitting the button below.' +
					'The second method is a lot easier and faster but it\'s ' +
					'understandable if you don\'t trust this extension in which case you can do it manually.',
				placeholders: {
					custom_uri_info: {
						content: '<a href="https://msdn.microsoft.com/en-us/library/aa767914(VS.85).aspx" rel="noopener" target="_blank">this</a>'
					},
					custom_uri_mac: {
						content: '<a rel="noopener" href="https://support.shotgunsoftware.com/hc/en-us/community/posts/209485898-Launching-External-Applications-using-Custom-Protocols-under-OSX" target="_blank">this</a>'
					},
					custom_uri_windows: {
						content: '<a href="https://support.microsoft.com/nl-nl/kb/310516" rel="noopener" target="_blank">these</a>'
					}
				}
			},
			filePathLabel: {
				message: 'File path including name',
				description: 'A descriptive label for an input that allows the inputting of file paths'
			},
			invalidScheme: {
				message: 'This is not a valid scheme',
				description: 'Error message saying that given URI scheme is invalid'
			},
			schemeNameLabel: {
				message: 'URI scheme name',
				description: 'A descriptive label for an input that allows the inputting of the URI scheme\'s name'
			},
			example: {
				message: 'myscheme',
				description: 'A name for an example scheme. This will be changed by the user later'
			},
			generate: {
				message: 'GENERATE',
				description: 'A button that can be used to generate the custom URI scheme'
			}
		},
		importing: {
			header: {
				message: 'Importing your settings',
				description: 'Header for the import section'
			},
			description: {
				message: 'Here you can import your settings or CRM nodes from ' +
					'somewhere else. Simply copy the code into the box below ' +
					'and hit "import". Checking "overwrite" will overwrite ' +
					'your current settings and/or CRM with the settings you imported.',
				description: 'Description for the import section'
			},
			error: {
				message: 'Something went wrong processing the data, please check the data',
				description: 'Error that is shown when data importing has failed because processing failed.'
			},
			overwrite: {
				message: 'Overwrite',
				description: 'Label for the "overwrite" option. Checking this overwrites previous settings'
			},
			overwriteTitle: {
				message: 'Check this if you want to overwrite your CRM. If not checked, imported CRM is appended to the current one',
				description: 'Description for the overwrite function'
			},
			legacy: {
				message: 'CRM legacy',
				description: 'Label for the "CRM legacy" option. Checking this assumes the data comes from the (very) old version of the extension'
			},
			legacyTitle: {
				message: 'Check this if you\'re importing from the old version of the extension (pre-2016)',
				description: 'Description for the legacy checkbox'
			},
			import: {
				message: 'Import',
				description: 'Label for the main importing function. Imports data from given string into the extension'
			}
		},
		exporting: {
			header: {
				message: 'Exporting your settings',
				description: 'Header for the export section'
			},
			description: {
				message: 'Here you can export your settings and/or CRM. To export select ' +
					'CRM nodes hit the "select" button below the editor above and ' +
					'hit export. Paste the generated data into a different ' +
					'instance\'s "import" field to import the data.',
				description: 'Description for the export section'
			},
			waiting: {
				message: 'Waiting for textfield... This may take some time',
				description: 'Message that is displayed while waiting for the exporting'
			},
			exportCRM: {
				message: 'Export your Custom Right-Click Menu',
				description: 'Label for checkbox. When checked, exports the CRM itself (not the other settings)'
			},
			exportSettings: {
				message: 'Export your Settings',
				description: 'Label for checkbox. When checked, exports the settings itself (not the CRM)'
			},
			export: {
				message: 'Export',
				description: 'Label for the main exporting function. Exports data from given string into the extension'
			}
		},
		help: {
			header: {
				message: 'Help/Tutorials',
				description: 'Header for the help section'
			},
			description: {
				message: 'If you need help with anything or you would simply like a step by step plan of how to do something, please check' +
					'out the $WIKI_LINK$. ' +
					'If you feel like there\'s a missing tutorial, please' +
					'$CREATE_LINK$.',
				description: 'Description for the help section',
				placeholders: {
					wiki_link: {
						content: '<a rel="noopener" href="https://github.com/SanderRonde/CustomRightClickMenu/wiki" target="_blank">wiki</a>'
					},
					create_link: {
						content: '<a rel="noopener" href="https://github.com/SanderRonde/CustomRightClickMenu/issues/new?title=[wiki]" target="_blank">create an issue</a>'
					}
				}
			}
		},
		contact: {
			header: {
				message: 'Contact',
				description: 'Header for the contact section'
			},
			description: {
				message: 'If you have found any bugs, thought of any suggestions or ' +
					'have any other reason to contact me you can do so at ' +
					'$SEND_EMAIL$. To ' +
					'find out more about me, check out ' +
					'$GITHUB$. You ' +
					'can also check out the github repository over ' +
					'$GITHUB_REPO$ if you ' +
					'want to report an issue, create a pull request, or just want to check out the code.' +
					'I\'m currently looking for beta testers for the extension.' +
					'If you\'d like to help by testing new releases and want to get new features early please' +
					'send me an email using the address above and I\'ll add you to the list.',
				description: 'Description for the contact section',
				placeholders: {
					send_email: {
						content: '<a rel="noopener" href="mailto:awsdfgvhbjn@gmail.com" target="_blank">awsdfgvhbjn@gmail.com</a>'
					},
					github: {
						content: '<a href="https://github.com/SanderRonde/" rel="noopener" target="_blank">my github page</a>'
					},
					github_repo: {
						content: '<a href="https://github.com/SanderRonde/CustomRightClickMenu" rel="noopener" target="_blank">here</a>'
					}
				}
			}
		},
		bugs: {
			header: {
				message: 'Bugs',
				description: 'Header for the bugs section'
			},
			description: {
				message: 'If you would like to report any bugs, you can do so by using the bug reporting tool.' +
					'This is a screen overlay that will be visible when you toggle it. It is overlayed' +
					'on top of every other dialog so you can always use it. To toggle it on/off use' +
					'the button below or hit $CTRL$ 3 times in a row quickly.',
				description: 'Description for the bugs section',
				placeholders: {
					ctrl: {
						content: '<code class="codeSynthax">ctrl</code>'
					}
				}
			},
			toggle: {
				message: 'toggle',
				description: 'Button that toggles the bug reporting tool'
			}
		},
		globalExcludes: {
			header: {
				message: 'Global Excludes',
				description: 'Header for the global excludes section'
			},
			description: {
				message: 'There are some sites on which you don\'t want any ' +
					'script to run on such as paypal and your bank\'s website, ' +
					'below you can enter these sites to make sure that no ' +
					'CRM script is ever ran on that page unless you ' +
					'specifically clicked on it. URLs must be specified ' +
					'as follows ',
				description: 'Description for the global excludes section (followed by a link)'
			},
			patternLabel: {
				message: 'URL match pattern to exclude',
				description: 'Label for a match pattern input'
			},
			patternInvalid: {
				message: 'This is not a valid URL pattern!',
				description: 'Error message that is displayed when the URL pattern is not valid'
			}
		},
		logging: {
			header: {
				message: 'Checking your scripts\' logs',
				description: 'Header for the logging section'
			},
			description: {
				message: 'Clicking on this button will take you to a page where you can monitor your scripts\' logs' +
					'from one central place. Think of it as a dev tools for all your scripts and with' +
					'only your logs. $BR$' +
					'To make your logs show up there, use $CODE$ in your code.',
				description: 'Description for the logging section',
				placeholders: {
					code: {
						content: '<code class="codeSynthax">crmAPI.log</code>'
					},
					br: {
						content: '<br />'
					}
				},
			},
			logging: {
				message: 'Logging',
				description: 'Button that opens the logging page'
			}
		},
		privacyPolicy: {
			header: {
				message: 'Privacy Policy',
				description: 'Header for the privacy policy section'
			},
			description: {
				message: 'This extension does not store any personally identifiable information.' +
					'This extension uses your browser\'s ' +
					'$DOCUMENTATION_LINK$ ' +
					'to sync your data across devices. This data only consists of ' +
					'your custom right-click menu and its settings.' +
					'This means that these settings are stored on your browser manufacturer\'s servers.' +
					'To turn off this feature, disable the "use storage sync" checkbox at the top of this page.',
				description: 'Description for the privacy policy section',
				placeholders: {
					documentation_link: {
						content: '<a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/storage/sync" rel="noopener" target="_blank">browser.storage.sync</a>'
					}
				}
			}
		},
		changelog: {
			changelog: {
				message: 'Changelog',
				description: 'Header for the changelog section'
			}
		},
		toasts: {
			revert: {
				message: 'Revert last action',
				description: 'Toast that would undo the last action done by the user'
			},
			contentType: {
				message: 'You need to select at least one content type to show this node on, otherwise it will never be shown. To hide it change the triggers.',
				description: 'Warning telling the user that they need to have at least one content type selected'
			},
			storageExceeded: {
				message: 'Storage sync has ran out of space, switched to local storage for the moment, remove CRM nodes or code and switch back to sync later',
				description: 'Warning that is show when storage is full'
			},
			noErrors: {
				message: 'No more errors found',
				description: 'Notification that is shown when there are no more errors to step through'
			},
			acceptDownload: {
				message: 'Please accept the permission request to report a bug or suggest a feature',
				description: 'Notificaiton asking the user to accept the permission request in order to continue'
			}
		},
		dialogs: {
			codeSettings: {
				changingOptions: {
					message: 'Changing the options for',
					description: 'Header signaling what node is being edited'
				},
				noOptions: {
					message: 'Looks like there\'s no options. Go to the options tab in the editor to make them.' +
						'Also be sure to check whether no errors show up, if they do this won\'t work.',
					description: 'Description saying there are no options for this node'
				},
				numberInput: {
					message: 'Number input',
					description: 'An input for numbers'
				},
				booleanInput: {
					message: 'True/False value',
					description: 'An input for true/false (boolean) values'
				},
				textInput: {
					message: 'Text input',
					description: 'An input for text'
				},
				colorInput: {
					message: 'Color picker',
					description: 'An input for colors'
				}
			},
			recoverUnsaved: {
				header: {
					message: 'Recovering unsaved code',
					description: 'Title for the recover unsaved code section'
				},
				description: {
					message: 'You closed an editing instance without saving or discarding it, are you sure you wanted to do this?',
					description: 'Question asking the user if they want to discard these changes'
				},
				whatNode: {
					message: 'What node?',
					description: 'Button that shows the user what script has changed'
				},
				oldCode: {
					message: 'Old Code',
					description: 'The header for the old code'
				},
				unsavedCode: {
					message: 'Unsaved code',
					description: 'The header for the unsaved (changed) code'
				},
				keepOld: {
					message: 'Keep Old',
					description: 'Button that keeps the old (unsaved) version'
				}
			},
			addLibrary: {
				header: {
					message: 'Add your own library',
					description: 'Header for the add library dialog'
				},
				noNameError: {
					message: 'please enter a name',
					description: 'Error message shown when no name is entered'
				},
				urlInput: {
					message: 'Input a url',
					description: 'Option to input a URL to a library'
				},
				codeInput: {
					message: 'Input the code',
					description: 'Option to input URL library through code'
				},
				url: {
					message: 'url',
					description: 'Word for URL'
				},
				code: {
					message: 'code',
					description: 'Word for code',
				},
				urlError: {
					message: 'url does not host anything',
					description: 'Error message shown when the URL does not host anything (error 404)'
				},
				usesTypescript: {
					message: 'Check if library uses typescript',
					description: 'Option that should be checked when the library the user inputs uses typescript'
				},
				isThisOkay: {
					message: 'Does this look okay to you?',
					description: 'Question asking the user if the code looks fine'
				},
				added: {
					message: 'Added!',
					description: 'Message telling the user that the library was sucessfully added'
				}
			},
			cssEditorInfo: {
				header: {
					message: 'CSS Editor Info',
					description: 'Header for the CSS editor info section'
				},
				description: {
					message: '- Use $URL_REFERENCE$ to run certain CSS only on specified url for any code following this statement.' +
						'Calling $URL_END$ will stop this from applying to the code below it.' +
						'You can combine multiple $URL$ statements to run on multiple sites, so calling $URL_EXAMPLE_GOOGLE$ runs the code below on both sites.' +
						'If for example you want any page\'s background-color to be black except for one website, you can use $URL$ to give that page a different background color.' +
						'You can use regular expressions as long as you wrap them in brackets.' +
						'$BR$ $BR$' +
						'- Use the dev tools to find the CSS id/class of elements. Press F12 to open the dev tools, click the magnifying glass and click element you want to style.' +
						'If you want only that element to be styled, right-click it in the developer tools and click "copy CSS path" and use that as the selector.' +
						'If you want all elements with some class to be styled, simply use the class on it.',
					description: 'Description of the CSS editor',
					placeholders: {
						url_reference: {
							content: '<pre class="inlineCodePre">@url \'http://example.com\';</pre>'
						},
						url_end: {
							content: '<pre class="inlineCodePre">@urlend;</pre>'
						},
						url: {
							content: '<pre class="inlineCodePre">@url</pre>'
						},
						url_example_google: {
							content: '<pre class="inlineCodePre">@url \'example.com\'; @url \'google.com\';</pre>'
						},
						br: {
							content: '<br />'
						}
					}
				}
			},
			exporting: {
				header: {
					message: 'Exporting selected nodes',
					description: 'Header for the export dialog'
				},
				description: {
					message: 'You can copy the data below and paste it in a different instance\'s "import" section to import those nodes. Enter an author\'s name below to export the nodes under that name. You can also leave it to "anonymous" to stay anonymous.',
					description: 'Description for the export dialog'
				},
				copyToClipboard: {
					message: 'copy to clipboard',
					description: 'Button that copies text to clipboard'
				},
				authorName: {
					message: 'author\'s name',
					description: 'Label for an input containing the author\'s name that the user fill in'
				}
			},
			permissions: {
				description: {
					message: 'Here you can allow or disallow permissions for the current script, marked permissions are asked for in the script and will probably be needed for script execution. You should however be careful not to just turn on everything since that might enable malicious scripts to do bad things. Permissions starting with "GM_" are greasemonkey permissions, these can also be used if you want to also share this script with greasemonkey/tampermonkey users. You don\'t actually need to turn them on to use those APIs in this extension except the GM_download API and the GM_notification API since all the others are fairly harmless. However they will be required as metaTags if you run this script in greasemonkey/tampermonkey.',
					description: 'The description for the permissions dialog'
				},
				usedPermissions: {
					message: 'Used permissions:',
					description: 'A header for a list of permissions that are used by this script'
				}
			},
			requestPermissions: {
				header: {
					message: 'Allow permissions',
					description: 'Header for the allow/request permission dialog'
				},
				description: {
					message: 'A script that you presumably wrote or added has asked to use one or more browser permissions that you have not yet allowed for this extension, please allow these permissions as you see fit.' +
						'Remember that this will only allow YOU to write scripts that acces these permissions and not downloaded and installed scripts.' +
						'Other scripts can only acces these permissons if you give those scripts specifically that permission on installing them.' +
						'You can basically allow any permission, they will only be used if you write them into one of your own scripts (or a downloaded one requests it) so allowing permissions that are not used yet simply saves you the hassle of doing it later during script installation or execution.',
					description: 'Description for the allow permissions dialog'
				},
				required: {
					message: 'Required',
					description: 'Word for a required permission as requested by the extension author'
				},
				others: {
					message: 'Others',
					description: 'Word for other permissions that are not necessarily required.'
				},
				acceptAll: {
					message: 'Accept all required',
					description: 'Button that accepts (enables) all permissions that are required'
				}
			},
			addedPermissions: {
				header: {
					message: 'The script ' +
						'$NODENAME$' +
						'has been updated to version ' +
						'$NODEVERSION$' +
						'and some new permissions have been requested',
					description: 'Header signaling that a script with given name has been updated and it requires new permissions',
					placeholders: {
						nodename: {
							content: '$1',
							example: 'MyScript'
						},
						nodeversion: {
							content: '$2',
							example: '1.2.3'
						}
					}
				}
			}
		},
		code: {
			nodeUpdated: {
				message: 'Node $NAME$ was updated from version $OLD_VERSION to version $NEW_VERSION',
				description: 'A message telling the user a node has been updated',
				placeholders: {
					name: {
						content: '$1',
						example: 'MyNode'
					},
					old_version: {
						content: '$2',
						example: '1.2.3'
					},
					new_version: {
						content: '$3',
						example: '1.2.4'
					}
				}
			},
			extensionUpdated: {
				message: 'Extension has been updated to version $VERSION$',
				description: 'Message telling the user the extension has been updated',
				placeholders: {
					version: {
						content: '$1',
						example: '1.2.3'
					}
				}
			},
			settingsUpdated: {
				message: 'Settings were updated to those on $DATE$',
				description: 'Message telling the user their settings were updated to the ones saved on given date on a different instance',
				placeholders: {
					date: {
						content: '$1',
						example: '1-1-2019'
					}
				}
			},
			hiMessage: {
				message: 'Hey there, if you\'re interested in how this extension works check out the github repository over at https://github.com/SanderRonde/CustomRightClickMenu',
				description: 'Message meant for developers looking to see how this extension works'
			},
			consoleInfo: {
				message: 'To get information about how to edit settings from the console' + 
					' call the window.consoleInfo() function',
				description: 'Info about the console API for developers'
			},
			permissionsNotSupported: {
				message: 'Your browser does not support requesting permissions',
				description: 'Message shown when browser.permissions API is unsupported by the browser'
			},
			downloadNotSupported: {
				message: 'Your browser does not support asking for the download permission',
				description: 'Message shown when browser.download API is unsupported by the browser'
			},
			importSuccess: {
				message: 'Successfully imported your data',
				description: 'Message shown when data importing has completed successfully'
			},
			alreadyEditingNode: {
				message: 'Please close the current dialog first',
				description: 'Message shown when a node is already being edited and another one can\'t be edited before closing the other one'
			},
			wouldExecuteScript: {
				message: 'This would execute a script',
				description: 'Message shown when clicking a script node in the demo mode. Does nothing in this mode except for showing this message'
			},
			wouldExecuteStylesheet: {
				message: 'This would execute a stylesheet',
				description: 'Message shown when clicking a stylesheet node in the demo mode. Does nothing in this mode except for showing this message'
			}
		}
	},
	background: {
		crm: {
			invalid_runat: {
				message: 'Script with id $ID$' +
					'runAt value was changed to default, $RUNAT$' +
					'is not a valid value (use document_start, document_end or document_idle)',
				description: 'runAt value is not valid for script with given id.' + 
					'The runAt value describes when a script should run. At the start or end of' + 
					' a page load or when the page is idle',
				placeholders: {
					id: {
						content: '$1',
						example: '1'
					},
					runat: {
						content: '$2',
						example: 'document_start'
					}
				}
			},
			execution_failed: {
				message: 'Couldn\'t execute on tab with id $TABID$' +
					'for node $NODEID$',
				description: 'Message shown when execution failed for a script',
				placeholders: {
					tabid: {
						content: '$1',
						example: '1'
					},
					nodeid: {
						content: '$2',
						example: '1'
					}
				}
			},
			setup_error: {
				message: 'An error occurred while setting up the script for node $NODEID$',
				description: 'A message shown when an error has occurred in the setup stage',
				placeholders: {
					nodeid: {
						content: '$1',
						example: '1'
					}
				}
			},
			update_download_404: {
				message: 'Tried to update $NODETYPE$ $NODEID$ $NODENAME$' +
					' but could not reach download URL',
				description: 'A message shown when a request to a node\'s download URL (the URL from which it should be updated) failed',
				placeholders: {
					nodeType: {
						content: '$1',
						example: 'script|stylesheet'
					},
					nodeId: {
						content: '$2',
						example: '1'
					},
					nodeName: {
						content: '$3',
						example: 'MyNode'
					}
				}
			},
			option_not_found: {
				message: 'Could not find option $NODENAME$ for stylesheet $NODEID$',
				description: 'A message shown when a key was not found in the supplied settings',
				placeholders: {
					nodeName: {
						content: '$1',
						example: 'MyNode'
					},
					nodeId: {
						content: '$2',
						example: '1'
					}
				}
			},
			css_compile_error: {
				message: 'An error occurred while compiling $TYPE$ CSS for ' + 
				'node $NODEID$',
				description: 'An error shown when compilation failed for given node\'s preprocessor CSS',
				placeholders: {
					type: {
						content: '$1',
						example: 'less|stylus'
					},
					nodeId: {
						content: '$2',
						example: '1'
					}
				}
			},
			contextmenu_error_retry: {
				message: 'An error occurred with your context menu,' + 
					' attempting again with no url matching.',
				description: 'Error shown when something went wrong creating the context menu. It will be retried with the URL matching feature disabled'
			},
			contextmenu_error: {
				message: 'An error occurred with your context menu!',
				description: 'Error shown when something went wrong creating the context menu.'
			},
			user_contextmenu_error: {
				message: 'Error recreating user contextmenu',
				description: 'Error shown when something went wrong creating a user context\'s contextmenu. The difference between the regular version and this version is that the other version is generated based on the CRM and its nodes while this one is created by the user themselves using the CRM API'
			},
			created_background_page: {
				message: 'Creating backgroundpage for node $NODEID$',
				description: 'Message shown when a backgroundpage for given node has started',
				placeholders: {
					nodeId: {
						content: '$1',
						example: '1'
					}
				}
			},
			restarting_background_page: {
				message: 'Restarting background page...',
				description: 'Message shown when restarting a backgroundpage'
			},
			terminated_background_page: {
				message: 'Terminated background page...',
				description: 'Message shown when restarting a backgroundpage'
			}
		},
		globalDeclarations: {
			getID: {
				no_matches: {
					message: 'Unfortunately no matches were found, please try again',
					description: 'Message shown when the getID function finds no results'
				},
				one_match: {
					message: 'One match was found, the id is $MATCHID$' +
						' and the script is',
					description: 'Message shown when the getID function finds one result. This message is followed by the node.',
					placeholders: {
						matchId: {
							content: '$1',
							example: '1'
						}
					}
				},
				multiple_matches: {
					message: 'Found multiple matches, here they are:',
					description: 'Message shown when the getID function finds multiple results'
				}
			},
			tabRestore: {
				success: {
					message: 'Restored tab with id $TABID$',
					description: 'Message shown when a tab that was already open when the extension started is retroactively executed on',
					placeholders: {
						tabId: {
							content: '$1',
							example: '1'
						}
					}
				},
				unknownError: {
					message: 'Failed to restore tab with id $TABID$',
					description: 'Message shown when a tab that was already open when the extension started is retroactively executed on but failed with an unknown error',
					placeholders: {
						tabId: {
							content: '$1',
							example: '1'
						}
					}
				},
				ignored: {
					message: 'Ignoring tab with id $TABID$ (chrome or file url)$',
					description: 'Message shown when a tab that was already open when the extension started is retroactively executed on but it was ignored since the extension can\'t run on that page (for example browser settings pages etc)',
					placeholders: {
						tabId: {
							content: '$1',
							example: '1'
						}
					}
				},
				frozen: {
					message: 'Skipping restoration of tab with id $TABID$' +
						'Tab is frozen, most likely due to user debugging',
					description: 'Message shown when a tab that was already open when the extension started is retroactively executed on but it was frozen since the user is debugging it',
					placeholders: {
						tabId: {
							content: '$1',
							example: '1'
						}
					}
				}
			},
			proxy: {
				redirecting: {
					message: 'Redirecting',
					description: 'Message shown when redirecting a URL to another URL'
				}
			}
		},
		init: {
			logging_explanation: {
				message: 'If you\'re here to check out your background ' +
					'script, get its ID (you can type getID("name") to ' +
					'find the ID), and type filter(id, [optional tabId])' +
					' to show only those messages. You can also visit ' +
					'the logging page for even better logging over at ' +
					'$LOGGINGURL$',
				description: 'Message shown to inform the user of the getID and logging functions',
				placeholders: {
					loggingUrl: {
						content: '$1',
						example: 'chrome-extension://xxxxx/logging.html'
					}
				}
			},
			debug_explanation: {
				message: 'You can also use the debugger for scripts by ' +
					'calling window.debugNextScriptCall(id) ' +
					'and window.debugBackgroundScript(id) for scripts ' +
					'and backgroundscripts respectively. You can get the ' +
					'id by using the getID("name") function.',
				description: 'Message shown to inform the user of the debugging functions'
			},
			registering_permission_listeners: {
				message: 'Registering permission listeners',
				description: 'Info message shown when registers listeners for the browser.permissions API. Keeping track of when some are changed'
			},
			registering_handler: {
				message: 'Setting CRMAPI message handler',
				description: 'Info message shown when setting up message handler for the CRM API. Handling API requests from scripts'
			},
			building_crm: {
				message: 'Building Custom Right-Click Menu',
				description: 'Info message shown when building the contextmenu itself'
			},
			compiling_ts: {
				message: 'Compiling typescript',
				description: 'Info message shown when typescript is being compiled'
			},
			registering_handlers: {
				message: 'Registering global handlers',
				description: 'Info message shown when registering general global change handlers (tabs created/removed etc)'
			},
			updating_resources: {
				message: 'Updating resources',
				description: 'Info message shown when updating resources, which are scripts hosted on other websites'
			},
			updating_nodes: {
				message: 'Updating scripts and stylesheets',
				description: 'Info message shown when updating scripts and stylesheets\'s code'
			},
			debug_info: {
				message: 'For all of these arrays goes, close and re-expand them to "refresh" their contents',
				description: 'Info message telling the user how to refresh arrays in the console'
			},
			invalidated_tabs: {
				message: 'Invalidated tabs:',
				description: 'Label for array that contains invalidated tabs. Invalidated tabs are tabs that can\'t be accessed because they\'re options pages etc.'
			},
			insufficient_permissions: {
				message: 'Insufficient permissions:',
				description: 'Label for an array of scripts that failed because they had insufficient permissions'
			},
			registering_console_interface: {
				message: 'Registering console user interface',
				description: 'Info message shown when registering global functions that allow the user to run functions in the console'
			},
			done: {
				message: 'Done!',
				description: 'Info message shown when setup is done'
			},
			resource_update: {
				message: 'Attempting resource update',
				description: 'Info message shown when updating resources'
			},
			initialization: {
				message: 'Initialization',
				description: 'Message group for initialization messages'
			},
			storage: {
				message: 'Loading storage data',
				description: 'Message group for storage messages'
			},
			resources: {
				message: 'Checking resources',
				description: 'Message group for resource checking'
			},
			previous_open_tabs: {
				message: 'Restoring previous open tabs',
				description: 'Message group for the restoration of already-open tabs'
			},
			backgroundpages: {
				message: 'Creating backgroundpages',
				description: 'Message group for the creation of backgroundpages'
			},
			debugging: {
				message: 'Debugging',
				description: 'Message group for any debuging messages'
			}
		},
		storages: {
			sync_upload_error: {
				message: 'Error on uploading to storage.sync, uploading to storage.local instead',
				description: 'Error shown when uploading user settings to storage.sync fails. This is the synced data'
			},
			local_upload_error: {
				message: 'Error on uploading to browser.storage.local',
				description: 'Error shown when uploading user settings to storage.local fails. This is the non-synced local data'
			},
			upgrading: {
				message: 'Upgrading minor version from $FROM$ to $TO$',
				description: 'Message shown when upgrading version',
				placeholders: {
					from: {
						content: '$1',
						example: '1.2.3'
					},
					to: {
						content: '$2',
						example: '1.2.4'
					}
				}
			},
			setting_global_data: {
				message: 'Setting global data stores',
				description: 'Info message shown when setting up data storage'
			},
			building_crm: {
				message: 'Building CRM representation',
				description: 'Info message shown when building CRM and its in-background tree representation'
			},
			loading_sync: {
				message: 'Loading sync storage data',
				description: 'Info message shown when loading the browser.storage.sync synced data'
			},
			loading_local: {
				message: 'Loading local storage data',
				description: 'Info message shown when loading the browser.storage.local non-synced data'
			},
			checking_first: {
				message: 'Checking if this is the first run',
				description: 'Info message shown when checking if this is the very first run of the extension'
			},
			parsing_data: {
				message: 'Parsing data encoding',
				description: 'Info message shown when parsing the stored data and transforming it into usable structures. The data is stored in a sort of encoded way and this is a basic form of decoding it'
			},
			checking_updates: {
				message: 'Checking for data updates',
				description: 'Info message shown when checking whether any remote updates have happened. For example if the user makes a change on a different computer, this change is synced back to this computer. If something like this happens the user is notified'
			},
			initializing_first: {
				message: 'Initializing for first run',
				description: 'Info message shown when initializing the initial settings if this is the first run of the extension'
			}
		},
		logging: {
			background: {
				message: 'background',
				description: 'Name for a page that runs in the background similar to a browser extension\'s background page'
			},
			background_page: {
				message: 'Background page',
				description: 'Name for a page that runs in the background similar to a browser extension\'s background page'
			}
		}
	}
}

//TODO: window.info

//TODO: logging.ts:143