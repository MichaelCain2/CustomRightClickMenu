export namespace I18NKeys {
	export const enum generic {
		"app_title" = 'generic_app_title',
		"add" = 'generic_add',
		"dismiss" = 'generic_dismiss',
		"undo" = 'generic_undo',
		"next" = 'generic_next',
		"previous" = 'generic_previous',
		"cancel" = 'generic_cancel',
		"save" = 'generic_save',
		"discard" = 'generic_discard',
		"no" = 'generic_no',
		"yes" = 'generic_yes',
		"close" = 'generic_close',
		"apply" = 'generic_apply',
		"all_capital" = 'generic_all_capital',
		"tab" = 'generic_tab',
		"tabIndex" = 'generic_tabIndex',
	}
	export const enum crm {
		"link" = 'crm_link',
		"script" = 'crm_script',
		"stylesheet" = 'crm_stylesheet',
		"menu" = 'crm_menu',
		"divider" = 'crm_divider',
		"exampleLinkName" = 'crm_exampleLinkName',
		"exampleStylesheetName" = 'crm_exampleStylesheetName',
		"exampleScriptName" = 'crm_exampleScriptName',
		"exampleDividerName" = 'crm_exampleDividerName',
		"exampleMenuName" = 'crm_exampleMenuName',
		"node" = 'crm_node',
		"id" = 'crm_id',
		"id_capital" = 'crm_id_capital',
	}
	export const enum permissions {
		"alarms" = 'permissions_alarms',
		"activeTab" = 'permissions_activeTab',
		"background" = 'permissions_background',
		"bookmarks" = 'permissions_bookmarks',
		"browsingData" = 'permissions_browsingData',
		"clipboardRead" = 'permissions_clipboardRead',
		"clipboardWrite" = 'permissions_clipboardWrite',
		"cookies" = 'permissions_cookies',
		"contentSettings" = 'permissions_contentSettings',
		"contextMenus" = 'permissions_contextMenus',
		"declarativeContent" = 'permissions_declarativeContent',
		"desktopCapture" = 'permissions_desktopCapture',
		"downloads" = 'permissions_downloads',
		"history" = 'permissions_history',
		"identity" = 'permissions_identity',
		"idle" = 'permissions_idle',
		"management" = 'permissions_management',
		"notifications" = 'permissions_notifications',
		"pageCapture" = 'permissions_pageCapture',
		"power" = 'permissions_power',
		"privacy" = 'permissions_privacy',
		"printerProvider" = 'permissions_printerProvider',
		"sessions" = 'permissions_sessions',
		"systemcpu" = 'permissions_systemcpu',
		"systemmemory" = 'permissions_systemmemory',
		"systemstorage" = 'permissions_systemstorage',
		"topSites" = 'permissions_topSites',
		"tabCapture" = 'permissions_tabCapture',
		"tabs" = 'permissions_tabs',
		"tts" = 'permissions_tts',
		"webNavigation" = 'permissions_webNavigation',
		"webRequest" = 'permissions_webRequest',
		"webRequestBlocking" = 'permissions_webRequestBlocking',
		"crmGet" = 'permissions_crmGet',
		"crmWrite" = 'permissions_crmWrite',
		"crmRun" = 'permissions_crmRun',
		"crmContextmenu" = 'permissions_crmContextmenu',
		"chrome" = 'permissions_chrome',
		"browser" = 'permissions_browser',
		"GM_addStyle" = 'permissions_GM_addStyle',
		"GM_deleteValue" = 'permissions_GM_deleteValue',
		"GM_listValues" = 'permissions_GM_listValues',
		"GM_addValueChangeListener" = 'permissions_GM_addValueChangeListener',
		"GM_removeValueChangeListener" = 'permissions_GM_removeValueChangeListener',
		"GM_setValue" = 'permissions_GM_setValue',
		"GM_getValue" = 'permissions_GM_getValue',
		"GM_log" = 'permissions_GM_log',
		"GM_getResourceText" = 'permissions_GM_getResourceText',
		"GM_getResourceURL" = 'permissions_GM_getResourceURL',
		"GM_registerMenuCommand" = 'permissions_GM_registerMenuCommand',
		"GM_unregisterMenuCommand" = 'permissions_GM_unregisterMenuCommand',
		"GM_openInTab" = 'permissions_GM_openInTab',
		"GM_xmlhttpRequest" = 'permissions_GM_xmlhttpRequest',
		"GM_download" = 'permissions_GM_download',
		"GM_getTab" = 'permissions_GM_getTab',
		"GM_saveTab" = 'permissions_GM_saveTab',
		"GM_getTabs" = 'permissions_GM_getTabs',
		"GM_notification" = 'permissions_GM_notification',
		"GM_setClipboard" = 'permissions_GM_setClipboard',
		"GM_info" = 'permissions_GM_info',
		"unsafeWindow" = 'permissions_unsafeWindow',
	}
	export namespace langs {
		export const enum languages {
			"en" = 'langs_languages_en',
		}
		export const enum selector {
			"current" = 'langs_selector_current',
			"clickToChangeLanguage" = 'langs_selector_clickToChangeLanguage',
			"requestLanguage" = 'langs_selector_requestLanguage',
		}
	}
	export namespace crmApp {
		export const enum editcrm {
			"editingCrm" = 'crmApp_editcrm_editingCrm',
		}
		export const enum ribbons {
			"ts" = 'crmApp_ribbons_ts',
			"tslint" = 'crmApp_ribbons_tslint',
			"jslint" = 'crmApp_ribbons_jslint',
			"info" = 'crmApp_ribbons_info',
		}
		export namespace editor {
			export const enum settings {
				"header" = 'crmApp_editor_settings_header',
				"theme" = 'crmApp_editor_settings_theme',
				"fontsizePercentage" = 'crmApp_editor_settings_fontsizePercentage',
				"jslintGlobals" = 'crmApp_editor_settings_jslintGlobals',
				"keybindings" = 'crmApp_editor_settings_keybindings',
			}
		}
		export const enum header {
			"oldChrome" = 'crmApp_header_oldChrome',
		}
		export const enum crmtype {
			"toggle" = 'crmApp_crmtype_toggle',
			"regularWebpages" = 'crmApp_crmtype_regularWebpages',
			"webpages" = 'crmApp_crmtype_webpages',
			"weblinks" = 'crmApp_crmtype_weblinks',
			"selectedText" = 'crmApp_crmtype_selectedText',
			"selection" = 'crmApp_crmtype_selection',
			"images" = 'crmApp_crmtype_images',
			"videos" = 'crmApp_crmtype_videos',
			"audio" = 'crmApp_crmtype_audio',
		}
		export const enum options {
			"header" = 'crmApp_options_header',
			"catchErrors" = 'crmApp_options_catchErrors',
			"showoptions" = 'crmApp_options_showoptions',
			"recoverUnsavedData" = 'crmApp_options_recoverUnsavedData',
			"CRMOnPageDisabled" = 'crmApp_options_CRMOnPageDisabled',
			"CRMOnPageOption" = 'crmApp_options_CRMOnPageOption',
			"chromeLow" = 'crmApp_options_chromeLow',
			"notChrome" = 'crmApp_options_notChrome',
			"useStorageSyncDisabledUnavailable" = 'crmApp_options_useStorageSyncDisabledUnavailable',
			"useStorageSyncDisabledTooBig" = 'crmApp_options_useStorageSyncDisabledTooBig',
			"useStorageSyncOption" = 'crmApp_options_useStorageSyncOption',
			"editCRMInRM" = 'crmApp_options_editCRMInRM',
			"bytes" = 'crmApp_options_bytes',
			"managePermissions" = 'crmApp_options_managePermissions',
		}
		export const enum defaultLinks {
			"header" = 'crmApp_defaultLinks_header',
			"description" = 'crmApp_defaultLinks_description',
		}
		export const enum searchEngines {
			"header" = 'crmApp_searchEngines_header',
			"description" = 'crmApp_searchEngines_description',
		}
		export const enum uriScheme {
			"header" = 'crmApp_uriScheme_header',
			"description" = 'crmApp_uriScheme_description',
			"filePathLabel" = 'crmApp_uriScheme_filePathLabel',
			"invalidScheme" = 'crmApp_uriScheme_invalidScheme',
			"schemeNameLabel" = 'crmApp_uriScheme_schemeNameLabel',
			"example" = 'crmApp_uriScheme_example',
			"generate" = 'crmApp_uriScheme_generate',
		}
		export const enum importing {
			"header" = 'crmApp_importing_header',
			"description" = 'crmApp_importing_description',
			"error" = 'crmApp_importing_error',
			"overwrite" = 'crmApp_importing_overwrite',
			"overwriteTitle" = 'crmApp_importing_overwriteTitle',
			"legacy" = 'crmApp_importing_legacy',
			"legacyTitle" = 'crmApp_importing_legacyTitle',
			"import" = 'crmApp_importing_import',
		}
		export const enum exporting {
			"header" = 'crmApp_exporting_header',
			"description" = 'crmApp_exporting_description',
			"waiting" = 'crmApp_exporting_waiting',
			"exportCRM" = 'crmApp_exporting_exportCRM',
			"exportSettings" = 'crmApp_exporting_exportSettings',
			"export" = 'crmApp_exporting_export',
		}
		export const enum help {
			"header" = 'crmApp_help_header',
			"description" = 'crmApp_help_description',
		}
		export const enum contact {
			"header" = 'crmApp_contact_header',
			"description" = 'crmApp_contact_description',
		}
		export const enum bugs {
			"header" = 'crmApp_bugs_header',
			"description" = 'crmApp_bugs_description',
			"toggle" = 'crmApp_bugs_toggle',
		}
		export const enum globalExcludes {
			"header" = 'crmApp_globalExcludes_header',
			"description" = 'crmApp_globalExcludes_description',
			"patternLabel" = 'crmApp_globalExcludes_patternLabel',
			"patternInvalid" = 'crmApp_globalExcludes_patternInvalid',
		}
		export const enum logging {
			"header" = 'crmApp_logging_header',
			"description" = 'crmApp_logging_description',
			"logging" = 'crmApp_logging_logging',
		}
		export const enum privacyPolicy {
			"header" = 'crmApp_privacyPolicy_header',
			"description" = 'crmApp_privacyPolicy_description',
		}
		export const enum changelog {
			"changelog" = 'crmApp_changelog_changelog',
		}
		export const enum toasts {
			"revert" = 'crmApp_toasts_revert',
			"contentType" = 'crmApp_toasts_contentType',
			"storageExceeded" = 'crmApp_toasts_storageExceeded',
			"noErrors" = 'crmApp_toasts_noErrors',
			"acceptDownload" = 'crmApp_toasts_acceptDownload',
		}
		export namespace dialogs {
			export const enum codeSettings {
				"changingOptions" = 'crmApp_dialogs_codeSettings_changingOptions',
				"noOptions" = 'crmApp_dialogs_codeSettings_noOptions',
				"numberInput" = 'crmApp_dialogs_codeSettings_numberInput',
				"booleanInput" = 'crmApp_dialogs_codeSettings_booleanInput',
				"textInput" = 'crmApp_dialogs_codeSettings_textInput',
				"colorInput" = 'crmApp_dialogs_codeSettings_colorInput',
			}
			export const enum recoverUnsaved {
				"header" = 'crmApp_dialogs_recoverUnsaved_header',
				"description" = 'crmApp_dialogs_recoverUnsaved_description',
				"whatNode" = 'crmApp_dialogs_recoverUnsaved_whatNode',
				"oldCode" = 'crmApp_dialogs_recoverUnsaved_oldCode',
				"unsavedCode" = 'crmApp_dialogs_recoverUnsaved_unsavedCode',
				"keepOld" = 'crmApp_dialogs_recoverUnsaved_keepOld',
			}
			export const enum addLibrary {
				"header" = 'crmApp_dialogs_addLibrary_header',
				"noNameError" = 'crmApp_dialogs_addLibrary_noNameError',
				"urlInput" = 'crmApp_dialogs_addLibrary_urlInput',
				"codeInput" = 'crmApp_dialogs_addLibrary_codeInput',
				"url" = 'crmApp_dialogs_addLibrary_url',
				"code" = 'crmApp_dialogs_addLibrary_code',
				"urlError" = 'crmApp_dialogs_addLibrary_urlError',
				"usesTypescript" = 'crmApp_dialogs_addLibrary_usesTypescript',
				"isThisOkay" = 'crmApp_dialogs_addLibrary_isThisOkay',
				"added" = 'crmApp_dialogs_addLibrary_added',
			}
			export const enum cssEditorInfo {
				"header" = 'crmApp_dialogs_cssEditorInfo_header',
				"description" = 'crmApp_dialogs_cssEditorInfo_description',
			}
			export const enum exporting {
				"header" = 'crmApp_dialogs_exporting_header',
				"description" = 'crmApp_dialogs_exporting_description',
				"copyToClipboard" = 'crmApp_dialogs_exporting_copyToClipboard',
				"authorName" = 'crmApp_dialogs_exporting_authorName',
			}
			export const enum permissions {
				"description" = 'crmApp_dialogs_permissions_description',
				"usedPermissions" = 'crmApp_dialogs_permissions_usedPermissions',
			}
			export const enum requestPermissions {
				"header" = 'crmApp_dialogs_requestPermissions_header',
				"description" = 'crmApp_dialogs_requestPermissions_description',
				"required" = 'crmApp_dialogs_requestPermissions_required',
				"others" = 'crmApp_dialogs_requestPermissions_others',
				"acceptAll" = 'crmApp_dialogs_requestPermissions_acceptAll',
			}
			export const enum addedPermissions {
				"header" = 'crmApp_dialogs_addedPermissions_header',
			}
		}
		export const enum code {
			"nodeUpdated" = 'crmApp_code_nodeUpdated',
			"extensionUpdated" = 'crmApp_code_extensionUpdated',
			"settingsUpdated" = 'crmApp_code_settingsUpdated',
			"hiMessage" = 'crmApp_code_hiMessage',
			"consoleInfo" = 'crmApp_code_consoleInfo',
			"permissionsNotSupported" = 'crmApp_code_permissionsNotSupported',
			"downloadNotSupported" = 'crmApp_code_downloadNotSupported',
			"importSuccess" = 'crmApp_code_importSuccess',
			"alreadyEditingNode" = 'crmApp_code_alreadyEditingNode',
			"wouldExecuteScript" = 'crmApp_code_wouldExecuteScript',
			"wouldExecuteStylesheet" = 'crmApp_code_wouldExecuteStylesheet',
		}
	}
	export namespace background {
		export const enum crm {
			"invalid_runat" = 'background_crm_invalid_runat',
			"execution_failed" = 'background_crm_execution_failed',
			"setup_error" = 'background_crm_setup_error',
			"update_download_404" = 'background_crm_update_download_404',
			"option_not_found" = 'background_crm_option_not_found',
			"css_compile_error" = 'background_crm_css_compile_error',
			"contextmenu_error_retry" = 'background_crm_contextmenu_error_retry',
			"contextmenu_error" = 'background_crm_contextmenu_error',
			"user_contextmenu_error" = 'background_crm_user_contextmenu_error',
			"created_background_page" = 'background_crm_created_background_page',
			"restarting_background_page" = 'background_crm_restarting_background_page',
			"terminated_background_page" = 'background_crm_terminated_background_page',
		}
		export namespace globalDeclarations {
			export const enum getID {
				"no_matches" = 'background_globalDeclarations_getID_no_matches',
				"one_match" = 'background_globalDeclarations_getID_one_match',
				"multiple_matches" = 'background_globalDeclarations_getID_multiple_matches',
			}
			export const enum tabRestore {
				"success" = 'background_globalDeclarations_tabRestore_success',
				"unknownError" = 'background_globalDeclarations_tabRestore_unknownError',
				"ignored" = 'background_globalDeclarations_tabRestore_ignored',
				"frozen" = 'background_globalDeclarations_tabRestore_frozen',
			}
			export const enum proxy {
				"redirecting" = 'background_globalDeclarations_proxy_redirecting',
			}
		}
		export const enum init {
			"logging_explanation" = 'background_init_logging_explanation',
			"debug_explanation" = 'background_init_debug_explanation',
			"registering_permission_listeners" = 'background_init_registering_permission_listeners',
			"registering_handler" = 'background_init_registering_handler',
			"building_crm" = 'background_init_building_crm',
			"compiling_ts" = 'background_init_compiling_ts',
			"registering_handlers" = 'background_init_registering_handlers',
			"updating_resources" = 'background_init_updating_resources',
			"updating_nodes" = 'background_init_updating_nodes',
			"debug_info" = 'background_init_debug_info',
			"invalidated_tabs" = 'background_init_invalidated_tabs',
			"insufficient_permissions" = 'background_init_insufficient_permissions',
			"registering_console_interface" = 'background_init_registering_console_interface',
			"done" = 'background_init_done',
			"resource_update" = 'background_init_resource_update',
			"initialization" = 'background_init_initialization',
			"storage" = 'background_init_storage',
			"resources" = 'background_init_resources',
			"previous_open_tabs" = 'background_init_previous_open_tabs',
			"backgroundpages" = 'background_init_backgroundpages',
			"debugging" = 'background_init_debugging',
		}
		export const enum storages {
			"sync_upload_error" = 'background_storages_sync_upload_error',
			"local_upload_error" = 'background_storages_local_upload_error',
			"upgrading" = 'background_storages_upgrading',
			"setting_global_data" = 'background_storages_setting_global_data',
			"building_crm" = 'background_storages_building_crm',
			"loading_sync" = 'background_storages_loading_sync',
			"loading_local" = 'background_storages_loading_local',
			"checking_first" = 'background_storages_checking_first',
			"parsing_data" = 'background_storages_parsing_data',
			"checking_updates" = 'background_storages_checking_updates',
			"initializing_first" = 'background_storages_initializing_first',
		}
		export const enum logging {
			"background" = 'background_logging_background',
			"background_page" = 'background_logging_background_page',
		}
	}
	export namespace install {
		export const enum confirm {
			"installed" = 'install_confirm_installed',
			"description" = 'install_confirm_description',
			"author" = 'install_confirm_author',
			"source" = 'install_confirm_source',
			"permissions" = 'install_confirm_permissions',
			"permissionInfo" = 'install_confirm_permissionInfo',
			"allow" = 'install_confirm_allow',
			"none_required" = 'install_confirm_none_required',
			"none" = 'install_confirm_none',
			"toggle_all" = 'install_confirm_toggle_all',
			"allow_accept" = 'install_confirm_allow_accept',
			"install" = 'install_confirm_install',
			"not_asking" = 'install_confirm_not_asking',
		}
		export const enum error {
			"not_found_1" = 'install_error_not_found_1',
			"not_found_2" = 'install_error_not_found_2',
		}
		export const enum page {
			"fetching" = 'install_page_fetching',
			"failed_xhr" = 'install_page_failed_xhr',
			"installing" = 'install_page_installing',
		}
	}
	export const enum logging {
		"filter" = 'logging_filter',
		"description" = 'logging_description',
		"lines" = 'logging_lines',
		"running_code_not_possible" = 'logging_running_code_not_possible',
		"store_as_local" = 'logging_store_as_local',
		"log_this" = 'logging_log_this',
		"copy_as_json" = 'logging_copy_as_json',
		"copy_path" = 'logging_copy_path',
		"clear_console" = 'logging_clear_console',
		"tab_closed" = 'logging_tab_closed',
		"something_went_wrong" = 'logging_something_went_wrong',
		"logs" = 'logging_logs',
	}
	export namespace util {
		export const enum errorReportingTool {
			"finish" = 'util_errorReportingTool_finish',
			"title" = 'util_errorReportingTool_title',
			"description" = 'util_errorReportingTool_description',
			"bugreportInfo" = 'util_errorReportingTool_bugreportInfo',
			"page_capture" = 'util_errorReportingTool_page_capture',
			"reporting_bug" = 'util_errorReportingTool_reporting_bug',
			"suggesting_feature" = 'util_errorReportingTool_suggesting_feature',
			"submit" = 'util_errorReportingTool_submit',
			"messagePlaceholder" = 'util_errorReportingTool_messagePlaceholder',
			"titlePlaceholder" = 'util_errorReportingTool_titlePlaceholder',
		}
	}
	export namespace options {
		export const enum nodeEditBehavior {
			"globPattern" = 'options_nodeEditBehavior_globPattern',
			"matchPattern" = 'options_nodeEditBehavior_matchPattern',
		}
		export const enum crmEditPage {
			"createdBy" = 'options_crmEditPage_createdBy',
			"installedFrom" = 'options_crmEditPage_installedFrom',
			"createdByYou" = 'options_crmEditPage_createdByYou',
			"hasAllPermissions" = 'options_crmEditPage_hasAllPermissions',
			"createdOn" = 'options_crmEditPage_createdOn',
			"installedOn" = 'options_crmEditPage_installedOn',
		}
		export const enum defaultLink {
			"name" = 'options_defaultLink_name',
		}
		export const enum editCrm {
			"empty" = 'options_editCrm_empty',
			"addHere" = 'options_editCrm_addHere',
			"addNodeType" = 'options_editCrm_addNodeType',
		}
		}
}