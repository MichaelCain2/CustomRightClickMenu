window.crmAPIDefs = {"!name":"crmAPI","crmAPI":{"stackTraces":{"!type":"bool","!doc":"When true, shows stacktraces on error in the console of the page the script runs on, true by default.","!url":"/html/crmAPIDocs.html#stacktraces"},"errors":{"!type":"bool","!doc":"If true, throws an error when one of your crmAPI calls is incorrect (such as a type mismatch or any other fail). True by default.","!url":"/html/crmAPIDocs.html#errors"},"comm":{"!doc":"The communications API used to communicate with other scripts and other instances","!url":"/html/crmAPIDocs.html#comm","getInstances":{"!type":"fn() -> [instance]","!url":"/html/crmAPIDocs.html#comm-getinstances","!doc":"Returns all instances running in other tabs, these instances can be passed to the .comm.sendMessage function to send a message to them, you can also call instance.sendMessage on them"},"sendMessage":{"!type":"fn(instance: instance, message: ?, callback: function)","!url":"/html/crmAPIDocs.html#comm-sendmessage","!doc":"Sends a message to given instance"},"addListener":{"!type":"fn(listener: function)","!url":"/html/crmAPIDocs.html#comm-addlistener","!doc":"Adds a listener for any comm-messages sent from other instances of this script"},"removeListener":{"!type":"fn(listener: listener)","!url":"/html/crmAPIDocs.html#comm-removelistener","!doc":"Removes a listener currently added by using comm.addListener"}},"storage":{"!doc":"The storage API used to store and retrieve data for this script","!url":"/html/crmAPIDocs.html#storage","get":{"!type":"fn(keyPath?: string|array) -> any","!url":"/html/crmAPIDocs.html#storage-get","!doc":"Gets the value at given key, if no key is given returns the entire storage object"},"set":{"!type":"fn(keyPath: string|array, value: any)","!url":"/html/crmAPIDocs.html#storage-set","!doc":"Sets the data at given key to given value"},"remove":{"!type":"fn(keyPath: string|array)","!url":"/html/crmAPIDocs.html#storage-remove","!doc":"Deletes the data at given key given value"},"onChange":{"!doc":"Functions related to the onChange event of the storage API","!url":"/html/crmAPIDocs.html#storage-onchange","addListener":{"!type":"fn(listener: function, key?: string)","!url":"/html/crmAPIDocs.html#storage-onchange-addlistener","!doc":"Adds an onchange listener for the storage, listens for a key if given"},"removeListener":{"!type":"fn(listener: function, key?: string)","!url":"/html/crmAPIDocs.html#storage-onchange-removelistener","!doc":"Removes ALL listeners with given listener (function) as the listener, if key is given also checks that they have that key"}}},"general":{},"getSelection":{"!type":"fn() -> string","!url":"/html/crmAPIDocs.html#getselection","!doc":"Gets the current text selection"},"getClickInfo":{"!type":"fn() -> ?","!url":"/html/crmAPIDocs.html#getclickinfo","!doc":"Returns any data about the click on the page, check (https://developer.chrome.com/extensions/contextMenus#method-create) for more info of what can be returned."},"getTabInfo":{"!type":"fn() -> ?","!url":"/html/crmAPIDocs.html#gettabinfo","!doc":"Gets any info about the current tab/window"},"getNode":{"!type":"fn() -> ?","!url":"/html/crmAPIDocs.html#getnode","!doc":"Gets the current node"},"crm":{"!doc":"The crm API, used to make changes to the crm, some API calls may require permissions crmGet and crmWrite","!url":"/html/crmAPIDocs.html#crm","getTree":{"!type":"fn(callback: function)","!url":"/html/crmAPIDocs.html#crm-gettree","!doc":"Gets the CRM tree from the tree's root"},"getSubTree":{"!type":"fn(nodeId: number, callback: function)","!url":"/html/crmAPIDocs.html#crm-getsubtree","!doc":"Gets the CRM's tree from either the root or from the node with ID nodeId"},"getNode":{"!type":"fn(callback: crmCallback)","!url":"/html/crmAPIDocs.html#crm-getnode","!doc":"Gets the node with ID nodeId"},"getNodeIdFromPath":{"!type":"fn(path: [number], callback: function)","!url":"/html/crmAPIDocs.html#crm-getnodeidfrompath","!doc":"Gets a node's ID from a path to the node"},"queryCrm":{"!type":"fn(callback: crmCallback, query: ?, callback: crmCallback)","!url":"/html/crmAPIDocs.html#crm-querycrm","!doc":"Queries the CRM for any items matching your query"},"getParentNode":{"!type":"fn(nodeId: number, callback: crmCallback)","!url":"/html/crmAPIDocs.html#crm-getparentnode","!doc":"Gets the parent of the node with ID nodeId"},"getChildren":{"!type":"fn(nodeId: number, callback: function)","!url":"/html/crmAPIDocs.html#crm-getchildren","!doc":"Gets the children of the node with ID nodeId"},"getNodeType":{"!type":"fn(nodeId: number, callback: function)","!url":"/html/crmAPIDocs.html#crm-getnodetype","!doc":"Gets the type of node with ID nodeId"},"getNodeValue":{"!type":"fn(nodeId: number, callback: function)","!url":"/html/crmAPIDocs.html#crm-getnodevalue","!doc":"Gets the value of node with ID nodeId"},"createNode":{"!type":"fn(options: ?, callback: crmCallback)","!url":"/html/crmAPIDocs.html#crm-createnode","!doc":"Creates a node with the given options"},"copyNode":{"!type":"fn(nodeId: number, options: ?, callback: crmCallback)","!url":"/html/crmAPIDocs.html#crm-copynode","!doc":"Copies given node, WARNNG: following properties are not copied: file, storage, id, permissions, nodeInfo Full permissions rights only if both the to be cloned and the script executing this have full rights"},"moveNode":{"!type":"fn(nodeId: number, position?: ?, callback: crmCallback)","!url":"/html/crmAPIDocs.html#crm-movenode","!doc":"Moves given node to position specified in \"position\""},"deleteNode":{"!type":"fn(nodeId: number, callback: function)","!url":"/html/crmAPIDocs.html#crm-deletenode","!doc":"Deletes given node"},"editNode":{"!type":"fn(nodeId: number, options: ?, callback: crmCallback)","!url":"/html/crmAPIDocs.html#crm-editnode","!doc":"Edits given settings of the node"},"getTriggers":{"!type":"fn(nodeId: number, callback: crmCallback)","!url":"/html/crmAPIDocs.html#crm-gettriggers","!doc":"Gets the triggers for given node"},"setTriggers":{"!type":"fn(nodeId: number, triggers: [?], callback: crmCallback)","!url":"/html/crmAPIDocs.html#crm-settriggers","!doc":"Sets the triggers for given node"},"stylesheet":{"!doc":"All functions related specifically to the stylesheet type","!url":"/html/crmAPIDocs.html#crm-stylesheet","getTriggerUsage":{"!type":"fn(nodeId: number, callback: crmCallback)","!url":"/html/crmAPIDocs.html#crm-stylesheet-gettriggerusage","!doc":"Gets the trigger' usage for given node (true - it's being used, or false), only works on link, menu and divider"},"setTriggerUsage":{"!type":"fn(nodeId: number, useTriggers: bool, callback: crmCallback)","!url":"/html/crmAPIDocs.html#crm-stylesheet-settriggerusage","!doc":"Sets the usage of triggers for given node, only works on link, menu and divider"}},"getContentTypes":{"!type":"fn(nodeId: number, callback: crmCallback)","!url":"/html/crmAPIDocs.html#crm-getcontenttypes","!doc":"Gets the content types for given node"},"setContentType":{"!type":"fn(nodeId: number, index: number, value: bool, callback: crmCallback)","!url":"/html/crmAPIDocs.html#crm-setcontenttype","!doc":"Sets the content type at index \"index\" to given value \"value\""},"setContentTypes":{"!type":"fn(nodeId: number, contentTypes: [string], callback: crmCallback)","!url":"/html/crmAPIDocs.html#crm-setcontenttypes","!doc":"Sets the content types to given contentTypes array"},"link":{"!doc":"All functions related specifically to the link type","!url":"/html/crmAPIDocs.html#crm-link","getLinks":{"!type":"fn(nodeId: number, callback: function)","!url":"/html/crmAPIDocs.html#crm-link-getlinks","!doc":"Gets the links of the node with ID nodeId"},"push":{"!type":"fn(nodeId: number, items: [?]|?, callback: functon)","!url":"/html/crmAPIDocs.html#crm-link-push","!doc":"Pushes given items into the array of URLs of node with ID nodeId"},"splice":{"!type":"fn(nodeId: number, start: nunber, amount: nunber, callback: function)","!url":"/html/crmAPIDocs.html#crm-link-splice","!doc":"Splices the array of URLs of node with ID nodeId. Start at \"start\" and splices \"amount\" items (just like array.splice) and returns them as an array in the callback function"}},"script":{"!doc":"All functions related specifically to the script type","!url":"/html/crmAPIDocs.html#crm-script","setLaunchMode":{"!type":"fn(nodeId: number, launchMode: number, callback: crmCallback)","!url":"/html/crmAPIDocs.html#crm-script-setlaunchmode","!doc":"Sets the launch mode of node with ID nodeId to \"launchMode\""},"getLaunchMode":{"!type":"fn(nodeId: number, callback: function)","!url":"/html/crmAPIDocs.html#crm-script-getlaunchmode","!doc":"Gets the launchMode of the node with ID nodeId"},"libraries":{"!doc":"All functions related specifically to the script's libraries","!url":"/html/crmAPIDocs.html#crm-script-libraries","push":{"!type":"fn(nodeId: number, libraries: [?]|?, callback: function)","!url":"/html/crmAPIDocs.html#crm-script-libraries-push","!doc":"Pushes given libraries to the node with ID nodeId's libraries array, make sure to register them first or an error is thrown"},"splice":{"!type":"fn(nodeId: number, start: nunber, amount: nunber, callback: function)","!url":"/html/crmAPIDocs.html#crm-script-libraries-splice","!doc":"Splices the array of libraries of node with ID nodeId. Start at \"start\" and splices \"amount\" items (just like array.splice) and returns them as an array in the callback function"}},"setScript":{"!type":"fn(nodeId: number, value: string, callback: crmCallback)","!url":"/html/crmAPIDocs.html#crm-script-setscript","!doc":"Sets the script of node with ID nodeId to value \"script\""},"getScript":{"!type":"fn(nodeId: number, callback: function)","!url":"/html/crmAPIDocs.html#crm-script-getscript","!doc":"Gets the value of the script"}},"menu":{"!doc":"All functions related specifically to the menu type","!url":"/html/crmAPIDocs.html#crm-menu","getChildren":{"!type":"fn(nodeId: number, callback: crmCallback)","!url":"/html/crmAPIDocs.html#crm-menu-getchildren","!doc":"Gets the children of the node with ID nodeId"},"setChildren":{"!type":"fn(nodeId: number, childrenIds: [number], callback: crmCallback)","!url":"/html/crmAPIDocs.html#crm-menu-setchildren","!doc":"Sets the children of node with ID nodeId to the nodes with IDs childrenIds"},"push":{"!type":"fn(nodeId: number, childrenIds: [number], callback: crmCallback)","!url":"/html/crmAPIDocs.html#crm-menu-push","!doc":"Pushes the nodes with IDs childrenIds to the node with ID nodeId"},"splice":{"!type":"fn(nodeId: number, start: number, amount: number, callback: function)","!url":"/html/crmAPIDocs.html#crm-menu-splice","!doc":"Splices the children of the node with ID nodeId, starting at \"start\" and splicing \"amount\" items, the removed items will be put in the root of the tree instead"}}},"libraries":{"!doc":"The libraries API used to register libraries","!url":"/html/crmAPIDocs.html#libraries","register":{"!type":"fn(name: string, options: ?, callback: function)","!url":"/html/crmAPIDocs.html#libraries-register","!doc":"Registers a library with name \"name\""}},"chrome":{"!type":"fn(api: string) -> ?","!url":"/html/crmAPIDocs.html#chrome","!doc":"Calls the chrome API given in the \"API\" parameter. Due to some issues with the chrome message passing API it is not possible to pass messages and preserve scope. This could be fixed in other ways but unfortunately chrome.tabs.executeScript (what is used to execute scripts on the page) runs in a sandbox and does not allow you to access a lot. As a solution to this there are a few types of functions you can chain-call on the crmAPI.chrome(API) object: a or args or (): uses given arguments as arguments for the API in order specified. When passing a function, it will be converted to a placeholder function that will be called on return with the arguments chrome passed to it. This means the function is never executed on the background page and is always executed here to preserve scope. You can call this function by calling .args or by just using the parentheses as below. r or return: a function that is called with the value that the chrome API returned. This can be used for APIs that don't use callbacks and instead just return values such as chrome.runtime.getURL(). s or send: executes the request Examples: - For a function that uses a callback: crmAPI.chrome('alarms.get')('name', function(alarm) { //Do something with the result here }).send(); - - For a function that returns a value: crmAPI.chrome('runtime.getUrl')(path).return(function(result) { //Do something with the result }).send(); - - For a function that uses neither: crmAPI.chrome('alarms.create')('name', {}).send(); - - A compacter version: crmAPI.chrome('runtime.getUrl')(path).r(function(result) { //Do something with the result }).s(); - Requires permission \"chrome\" and the permission of the the API, so chrome.bookmarks requires permission \"bookmarks\", chrome.alarms requires \"alarms\""},"GM":{"!doc":"The GM API that fills in any APIs that GreaseMonkey uses and points them to their CRM counterparts","!url":"/html/crmAPIDocs.html#gm","GM_info":{"!type":"fn() -> ?","!url":"/html/crmAPIDocs.html#gm-gm_info","!doc":"Returns any info about the script"},"GM_getValue":{"!type":"fn(name: string, defaultValue?: any) -> any","!url":"/html/crmAPIDocs.html#gm-gm_getvalue","!doc":"This method retrieves a value that was set with GM_setValue. See GM_setValue for details on the storage of these values."},"GM_setValue":{"!type":"fn(name: string, value: any)","!url":"/html/crmAPIDocs.html#gm-gm_setvalue","!doc":"This method allows user script authors to persist simple values across page-loads."},"GM_deleteValue":{"!type":"fn(name: string)","!url":"/html/crmAPIDocs.html#gm-gm_deletevalue","!doc":"This method deletes an existing name / value pair from storage."},"GM_listValues":{"!type":"fn() -> [string]","!url":"/html/crmAPIDocs.html#gm-gm_listvalues","!doc":"This method retrieves an array of storage keys that this script has stored."},"GM_getResourceURL":{"!type":"fn(name: string) -> string","!url":"/html/crmAPIDocs.html#gm-gm_getresourceurl","!doc":"Gets the resource URL for given resource name"},"GM_getResourceString":{"!type":"fn(name: string) -> string","!url":"/html/crmAPIDocs.html#gm-gm_getresourcestring","!doc":"Gets the resource string for given resource name"},"GM_addStyle":{"!type":"fn(css: string)","!url":"/html/crmAPIDocs.html#gm-gm_addstyle","!doc":"This method adds a string of CSS to the document. It creates a new <style> element, adds the given CSS to it, and inserts it into the <head>."},"GM_log":{"!type":"fn(any: any)","!url":"/html/crmAPIDocs.html#gm-gm_log","!doc":"Logs to the console"},"GM_openInTab":{"!type":"fn(url: string)","!url":"/html/crmAPIDocs.html#gm-gm_openintab","!doc":"Open specified URL in a new tab, open_in_background is not available here since that not possible in chrome"},"GM_registerMenuCommand":{"!type":"fn(ignoredArguments: any)","!url":"/html/crmAPIDocs.html#gm-gm_registermenucommand","!doc":"This is only here to prevent errors from occuring when calling any of these functions, this function does nothing"},"GM_unregisterMenuCommand":{"!type":"fn(ignoredArguments: any)","!url":"/html/crmAPIDocs.html#gm-gm_unregistermenucommand","!doc":"This is only here to prevent errors from occuring when calling any of these functions, this function does nothing"},"GM_setClipboard":{"!type":"fn(ignoredArguments: any)","!url":"/html/crmAPIDocs.html#gm-gm_setclipboard","!doc":"This is only here to prevent errors from occuring when calling any of these functions, this function does nothing"},"GM_xmlhttpRequest":{"!type":"fn(options: ?)","!url":"/html/crmAPIDocs.html#gm-gm_xmlhttprequest","!doc":"Sends an xmlhttpRequest with given parameters"},"GM_addValueChangeListener":{"!type":"fn(name: string, callback: function) -> number","!url":"/html/crmAPIDocs.html#gm-gm_addvaluechangelistener","!doc":"Adds a change listener to the storage and returns the listener ID. 'name' is the name of the observed variable. The 'remote' argument of the callback function shows whether this value was modified from the instance of another tab (true) or within this script instance (false). Therefore this functionality can be used by scripts of different browser tabs to communicate with each other."},"GM_removeValueChangeListener":{"!type":"fn(listenerId: number)","!url":"/html/crmAPIDocs.html#gm-gm_removevaluechangelistener","!doc":"Removes a change listener by its ID."},"GM_download":{"!type":"fn(detailsOrUrl: string|?, name: string)","!url":"/html/crmAPIDocs.html#gm-gm_download","!doc":"Downloads the file at given URL"},"GM_getTab":{"!type":"fn(callback: function)","!url":"/html/crmAPIDocs.html#gm-gm_gettab","!doc":"Please use the comms API instead of this one"},"GM_getTabs":{"!type":"fn(callback: function)","!url":"/html/crmAPIDocs.html#gm-gm_gettabs","!doc":"Please use the comms API instead of this one"},"GM_saveTab":{"!type":"fn(ignoredArguments: any)","!url":"/html/crmAPIDocs.html#gm-gm_savetab","!doc":"Please use the comms API instead of this one, this one does nothing"},"unsafeWindow":{"!type":"Window","!doc":"The unsafeWindow object provides full access to the pages javascript functions and variables.","!url":"/html/crmAPIDocs.html#gm-unsafewindow"},"GM_notification":{"!type":"fn(text: string, title: string, image: string, onclick: function)","!url":"/html/crmAPIDocs.html#gm-gm_notification","!doc":"Shows a HTML5 Desktop notification and/or highlight the current tab."},"GM_installScript":{"!type":"fn(ignoredArguments: any)","!url":"/html/crmAPIDocs.html#gm-gm_installscript","!doc":"THIS FUNCTION DOES NOT WORK AND IS DEPRECATED"}}},"!define":{"crmNode":{"id":"number","index":"number","name":"string","type":"string","children":"CrmAPIInit~[crmNode]","nodeInfo":"?","nodeInfo.installDate":"string","nodeInfo.isRoot":"bool","nodeInfo.permissions":"[string]","nodeInfo.source":"string|?","nodeInfo.source.url":"string","path":"[number]","onContentTypes":"[bool]","permissions":"[string]","url":"string","triggers":"[?]","triggers.url":"string","triggers.not":"bool","linkVal":"CrmAPIInit~linkVal","scriptVal":"CrmAPIInit~scriptVal","menuVal":"[?]","!url":"/html/crmAPIDocs.html#crmnode"},"linkVal":{"value":"[?]","value.url":"string","value.newTab":"bool","showOnSpecified":"bool","!proto":"crmNode","!url":"/html/crmAPIDocs.html#linkval"},"scriptVal":{"value":"?","value.launchMode":"number","value.script":"string","value.metaTags":"?","libraries":"[?]","libraries.name":"script","!proto":"crmNode","!url":"/html/crmAPIDocs.html#scriptval"},"stylesheetVal":{"value":"?","value.launchMode":"number","value.stylesheet":"string","value.toggle":"bool","value.defaultOn":"bool","!proto":"crmNode","!url":"/html/crmAPIDocs.html#stylesheetval"},"menuVal":{"showOnSpecified":"bool","!proto":"crmNode","!url":"/html/crmAPIDocs.html#menuval"},"dividerVal":{"showOnSpecified":"bool","!proto":"crmNode","!url":"/html/crmAPIDocs.html#dividerval"},"crmCallback":{"node":"CrmAPIInit~crmNode","!url":"/html/crmAPIDocs.html#crmcallback"}}}