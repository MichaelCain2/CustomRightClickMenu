interface I18NMessage {
	message: string;
	description?: string;
	placeholders?: {
		[key: string]: {
			key: string;
			example?: string;
			content: string;
		}
	}
}
export type LocaleSpec = {
	"generic": {
		"app_title": I18NMessage,
		"add": I18NMessage,
		"dismiss": I18NMessage,
		"undo": I18NMessage,
		"next": I18NMessage,
		"back": I18NMessage,
		"confirm": I18NMessage,
		"previous": I18NMessage,
		"cancel": I18NMessage,
		"save": I18NMessage,
		"discard": I18NMessage,
		"no": I18NMessage,
		"yes": I18NMessage,
		"close": I18NMessage,
		"apply": I18NMessage,
		"all_capital": I18NMessage,
		"tab": I18NMessage,
		"tabIndex": I18NMessage,
		"url": I18NMessage
	},
	"crm": {
		"link": I18NMessage,
		"script": I18NMessage,
		"stylesheet": I18NMessage,
		"menu": I18NMessage,
		"divider": I18NMessage,
		"exampleLinkName": I18NMessage,
		"exampleStylesheetName": I18NMessage,
		"exampleScriptName": I18NMessage,
		"exampleDividerName": I18NMessage,
		"exampleMenuName": I18NMessage,
		"node": I18NMessage,
		"id": I18NMessage,
		"id_capital": I18NMessage
	},
	"permissions": {
		"alarms": I18NMessage,
		"activeTab": I18NMessage,
		"background": I18NMessage,
		"bookmarks": I18NMessage,
		"browsingData": I18NMessage,
		"clipboardRead": I18NMessage,
		"clipboardWrite": I18NMessage,
		"cookies": I18NMessage,
		"contentSettings": I18NMessage,
		"contextMenus": I18NMessage,
		"declarativeContent": I18NMessage,
		"desktopCapture": I18NMessage,
		"downloads": I18NMessage,
		"history": I18NMessage,
		"identity": I18NMessage,
		"idle": I18NMessage,
		"management": I18NMessage,
		"notifications": I18NMessage,
		"pageCapture": I18NMessage,
		"power": I18NMessage,
		"privacy": I18NMessage,
		"printerProvider": I18NMessage,
		"sessions": I18NMessage,
		"systemcpu": I18NMessage,
		"systemmemory": I18NMessage,
		"systemstorage": I18NMessage,
		"topSites": I18NMessage,
		"tabCapture": I18NMessage,
		"tabs": I18NMessage,
		"tts": I18NMessage,
		"webNavigation": I18NMessage,
		"webRequest": I18NMessage,
		"webRequestBlocking": I18NMessage,
		"crmGet": I18NMessage,
		"crmWrite": I18NMessage,
		"crmRun": I18NMessage,
		"crmContextmenu": I18NMessage,
		"chrome": I18NMessage,
		"browser": I18NMessage,
		"GM_addStyle": I18NMessage,
		"GM_deleteValue": I18NMessage,
		"GM_listValues": I18NMessage,
		"GM_addValueChangeListener": I18NMessage,
		"GM_removeValueChangeListener": I18NMessage,
		"GM_setValue": I18NMessage,
		"GM_getValue": I18NMessage,
		"GM_log": I18NMessage,
		"GM_getResourceText": I18NMessage,
		"GM_getResourceURL": I18NMessage,
		"GM_registerMenuCommand": I18NMessage,
		"GM_unregisterMenuCommand": I18NMessage,
		"GM_openInTab": I18NMessage,
		"GM_xmlhttpRequest": I18NMessage,
		"GM_download": I18NMessage,
		"GM_getTab": I18NMessage,
		"GM_saveTab": I18NMessage,
		"GM_getTabs": I18NMessage,
		"GM_notification": I18NMessage,
		"GM_setClipboard": I18NMessage,
		"GM_info": I18NMessage,
		"unsafeWindow": I18NMessage
	},
	"langs": {
		"languages": {
			"en": I18NMessage
		},
		"selector": {
			"current": I18NMessage,
			"clickToChangeLanguage": I18NMessage,
			"requestLanguage": I18NMessage
		}
	},
	"crmApp": {
		"editcrm": {
			"editingCrm": I18NMessage
		},
		"ribbons": {
			"ts": I18NMessage,
			"tslint": I18NMessage,
			"jslint": I18NMessage,
			"info": I18NMessage
		},
		"editor": {
			"settings": {
				"header": I18NMessage,
				"theme": I18NMessage,
				"fontsizePercentage": I18NMessage,
				"jslintGlobals": I18NMessage,
				"keybindings": I18NMessage
			}
		},
		"header": {
			"oldChrome": I18NMessage
		},
		"crmtype": {
			"toggle": I18NMessage,
			"regularWebpages": I18NMessage,
			"webpages": I18NMessage,
			"weblinks": I18NMessage,
			"selectedText": I18NMessage,
			"selection": I18NMessage,
			"images": I18NMessage,
			"videos": I18NMessage,
			"audio": I18NMessage
		},
		"options": {
			"header": I18NMessage,
			"catchErrors": I18NMessage,
			"showoptions": I18NMessage,
			"recoverUnsavedData": I18NMessage,
			"CRMOnPageDisabled": I18NMessage,
			"CRMOnPageOption": I18NMessage,
			"chromeLow": I18NMessage,
			"notChrome": I18NMessage,
			"useStorageSyncDisabledUnavailable": I18NMessage,
			"useStorageSyncDisabledTooBig": I18NMessage,
			"useStorageSyncOption": I18NMessage,
			"editCRMInRM": I18NMessage,
			"bytes": I18NMessage,
			"managePermissions": I18NMessage
		},
		"defaultLinks": {
			"header": I18NMessage,
			"description": I18NMessage
		},
		"searchEngines": {
			"header": I18NMessage,
			"description": I18NMessage
		},
		"uriScheme": {
			"header": I18NMessage,
			"description": I18NMessage,
			"filePathLabel": I18NMessage,
			"invalidScheme": I18NMessage,
			"schemeNameLabel": I18NMessage,
			"example": I18NMessage,
			"generate": I18NMessage
		},
		"importing": {
			"header": I18NMessage,
			"description": I18NMessage,
			"error": I18NMessage,
			"overwrite": I18NMessage,
			"overwriteTitle": I18NMessage,
			"legacy": I18NMessage,
			"legacyTitle": I18NMessage,
			"import": I18NMessage
		},
		"exporting": {
			"header": I18NMessage,
			"description": I18NMessage,
			"waiting": I18NMessage,
			"exportCRM": I18NMessage,
			"exportSettings": I18NMessage,
			"export": I18NMessage
		},
		"help": {
			"header": I18NMessage,
			"description": I18NMessage
		},
		"contact": {
			"header": I18NMessage,
			"description": I18NMessage
		},
		"bugs": {
			"header": I18NMessage,
			"description": I18NMessage,
			"toggle": I18NMessage
		},
		"globalExcludes": {
			"header": I18NMessage,
			"description": I18NMessage,
			"patternLabel": I18NMessage,
			"patternInvalid": I18NMessage
		},
		"logging": {
			"header": I18NMessage,
			"description": I18NMessage,
			"logging": I18NMessage
		},
		"privacyPolicy": {
			"header": I18NMessage,
			"description": I18NMessage
		},
		"changelog": {
			"changelog": I18NMessage
		},
		"toasts": {
			"revert": I18NMessage,
			"contentType": I18NMessage,
			"storageExceeded": I18NMessage,
			"noErrors": I18NMessage,
			"acceptDownload": I18NMessage
		},
		"dialogs": {
			"codeSettings": {
				"changingOptions": I18NMessage,
				"noOptions": I18NMessage,
				"numberInput": I18NMessage,
				"booleanInput": I18NMessage,
				"textInput": I18NMessage,
				"colorInput": I18NMessage
			},
			"recoverUnsaved": {
				"header": I18NMessage,
				"description": I18NMessage,
				"whatNode": I18NMessage,
				"oldCode": I18NMessage,
				"unsavedCode": I18NMessage,
				"keepOld": I18NMessage
			},
			"addLibrary": {
				"header": I18NMessage,
				"noNameError": I18NMessage,
				"urlInput": I18NMessage,
				"codeInput": I18NMessage,
				"code": I18NMessage,
				"urlError": I18NMessage,
				"usesTypescript": I18NMessage,
				"isThisOkay": I18NMessage,
				"added": I18NMessage
			},
			"cssEditorInfo": {
				"header": I18NMessage,
				"description": I18NMessage
			},
			"exporting": {
				"header": I18NMessage,
				"description": I18NMessage,
				"copyToClipboard": I18NMessage,
				"authorName": I18NMessage
			},
			"permissions": {
				"description": I18NMessage,
				"usedPermissions": I18NMessage
			},
			"requestPermissions": {
				"header": I18NMessage,
				"description": I18NMessage,
				"required": I18NMessage,
				"others": I18NMessage,
				"acceptAll": I18NMessage
			},
			"addedPermissions": {
				"header": I18NMessage
			}
		},
		"code": {
			"nodeUpdated": I18NMessage,
			"extensionUpdated": I18NMessage,
			"settingsUpdated": I18NMessage,
			"hiMessage": I18NMessage,
			"consoleInfo": I18NMessage,
			"permissionsNotSupported": I18NMessage,
			"downloadNotSupported": I18NMessage,
			"importSuccess": I18NMessage,
			"alreadyEditingNode": I18NMessage,
			"wouldExecuteScript": I18NMessage,
			"wouldExecuteStylesheet": I18NMessage
		}
	},
	"background": {
		"crm": {
			"invalid_runat": I18NMessage,
			"execution_failed": I18NMessage,
			"setup_error": I18NMessage,
			"update_download_404": I18NMessage,
			"option_not_found": I18NMessage,
			"css_compile_error": I18NMessage,
			"contextmenu_error_retry": I18NMessage,
			"contextmenu_error": I18NMessage,
			"user_contextmenu_error": I18NMessage,
			"created_background_page": I18NMessage,
			"restarting_background_page": I18NMessage,
			"terminated_background_page": I18NMessage
		},
		"globalDeclarations": {
			"getID": {
				"no_matches": I18NMessage,
				"one_match": I18NMessage,
				"multiple_matches": I18NMessage
			},
			"tabRestore": {
				"success": I18NMessage,
				"unknownError": I18NMessage,
				"ignored": I18NMessage,
				"frozen": I18NMessage
			},
			"proxy": {
				"redirecting": I18NMessage
			}
		},
		"init": {
			"logging_explanation": I18NMessage,
			"debug_explanation": I18NMessage,
			"registering_permission_listeners": I18NMessage,
			"registering_handler": I18NMessage,
			"building_crm": I18NMessage,
			"compiling_ts": I18NMessage,
			"registering_handlers": I18NMessage,
			"updating_resources": I18NMessage,
			"updating_nodes": I18NMessage,
			"debug_info": I18NMessage,
			"invalidated_tabs": I18NMessage,
			"insufficient_permissions": I18NMessage,
			"registering_console_interface": I18NMessage,
			"done": I18NMessage,
			"resource_update": I18NMessage,
			"initialization": I18NMessage,
			"storage": I18NMessage,
			"resources": I18NMessage,
			"previous_open_tabs": I18NMessage,
			"backgroundpages": I18NMessage,
			"debugging": I18NMessage
		},
		"storages": {
			"sync_upload_error": I18NMessage,
			"local_upload_error": I18NMessage,
			"upgrading": I18NMessage,
			"setting_global_data": I18NMessage,
			"building_crm": I18NMessage,
			"loading_sync": I18NMessage,
			"loading_local": I18NMessage,
			"checking_first": I18NMessage,
			"parsing_data": I18NMessage,
			"checking_updates": I18NMessage,
			"initializing_first": I18NMessage
		},
		"logging": {
			"background": I18NMessage,
			"background_page": I18NMessage
		}
	},
	"install": {
		"confirm": {
			"installed": I18NMessage,
			"description": I18NMessage,
			"author": I18NMessage,
			"source": I18NMessage,
			"permissions": I18NMessage,
			"permissionInfo": I18NMessage,
			"allow": I18NMessage,
			"none_required": I18NMessage,
			"none": I18NMessage,
			"toggle_all": I18NMessage,
			"allow_accept": I18NMessage,
			"install": I18NMessage,
			"not_asking": I18NMessage
		},
		"error": {
			"not_found_1": I18NMessage,
			"not_found_2": I18NMessage
		},
		"page": {
			"fetching": I18NMessage,
			"failed_xhr": I18NMessage,
			"installing": I18NMessage
		}
	},
	"logging": {
		"filter": I18NMessage,
		"description": I18NMessage,
		"lines": I18NMessage,
		"running_code_not_possible": I18NMessage,
		"store_as_local": I18NMessage,
		"log_this": I18NMessage,
		"copy_as_json": I18NMessage,
		"copy_path": I18NMessage,
		"clear_console": I18NMessage,
		"tab_closed": I18NMessage,
		"something_went_wrong": I18NMessage,
		"logs": I18NMessage
	},
	"util": {
		"errorReportingTool": {
			"finish": I18NMessage,
			"title": I18NMessage,
			"description": I18NMessage,
			"bugreportInfo": I18NMessage,
			"page_capture": I18NMessage,
			"reporting_bug": I18NMessage,
			"suggesting_feature": I18NMessage,
			"submit": I18NMessage,
			"messagePlaceholder": I18NMessage,
			"titlePlaceholder": I18NMessage
		}
	},
	"options": {
		"nodeEditBehavior": {
			"globPattern": I18NMessage,
			"matchPattern": I18NMessage
		},
		"crmEditPage": {
			"createdBy": I18NMessage,
			"installedFrom": I18NMessage,
			"createdByYou": I18NMessage,
			"hasAllPermissions": I18NMessage,
			"createdOn": I18NMessage,
			"installedOn": I18NMessage
		},
		"defaultLink": {
			"name": I18NMessage
		},
		"editCrm": {
			"empty": I18NMessage,
			"addHere": I18NMessage,
			"addNodeType": I18NMessage,
			"select": I18NMessage,
			"exportSelected": I18NMessage,
			"removeSelected": I18NMessage,
			"menuRemoveWarning": I18NMessage,
			"dragInfo": I18NMessage,
			"typeInfo": I18NMessage,
			"editInfo": I18NMessage,
			"menuInfo": I18NMessage,
			"editItem": I18NMessage,
			"addFail": I18NMessage
		},
		"editCrmItem": {
			"changeType": I18NMessage,
			"dragNode": I18NMessage,
			"clickToShowChildren": I18NMessage,
			"clickToShowXChildren": I18NMessage,
			"clickToShowChild": I18NMessage,
			"rootName": I18NMessage,
			"clickToEditRoot": I18NMessage,
			"nodeHidden": I18NMessage,
			"clickToEdit": I18NMessage
		},
		"tools": {
			"paperGetPageProperties": {
				"selection": I18NMessage,
				"host": I18NMessage,
				"path": I18NMessage,
				"protocol": I18NMessage,
				"width": I18NMessage,
				"height": I18NMessage,
				"scrolled": I18NMessage,
				"title": I18NMessage,
				"clickedElement": I18NMessage
			},
			"paperLibrariesSelector": {
				"libraryInfo": I18NMessage,
				"libraries": I18NMessage,
				"anonymous": I18NMessage,
				"addOwn": I18NMessage,
				"xhrFailedMsg": I18NMessage,
				"xhrFailed": I18NMessage,
				"nameTaken": I18NMessage,
				"nameMissing": I18NMessage,
				"editing": I18NMessage,
				"pleaseUpdate": I18NMessage
			},
			"paperSearchWebsiteDialog": {
				"title": I18NMessage,
				"description": I18NMessage,
				"inputOne": I18NMessage,
				"inputDefault": I18NMessage,
				"chooseDefault": I18NMessage,
				"try": I18NMessage,
				"manualInput": I18NMessage,
				"findingSearchURL": I18NMessage,
				"chooseFromList": I18NMessage,
				"goToWebsite": I18NMessage,
				"clickOmnibar": I18NMessage,
				"pasteHere": I18NMessage,
				"invalidInput": I18NMessage,
				"process": I18NMessage,
				"processedTitle": I18NMessage,
				"choose": I18NMessage,
				"confirmTitle": I18NMessage,
				"searchQuery": I18NMessage,
				"query": I18NMessage,
				"testURL": I18NMessage,
				"howOpenTitle": I18NMessage,
				"newTab": I18NMessage,
				"currentTab": I18NMessage,
				"added": I18NMessage,
				"enterSearchQuery": I18NMessage,
				"selectSomething": I18NMessage
			}
		}
	}
}