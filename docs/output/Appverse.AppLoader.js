Ext.data.JsonP.Appverse_AppLoader({"tagname":"class","name":"Appverse.AppLoader","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Appverse.AppLoader","members":{"cfg":[],"property":[{"name":"serviceName","tagname":"property","owner":"Appverse.AppLoader","meta":{},"id":"property-serviceName"}],"method":[{"name":"constructor","tagname":"method","owner":"Appverse.AppLoader","meta":{},"id":"method-constructor"},{"name":"DeleteModules","tagname":"method","owner":"Appverse.AppLoader","meta":{},"id":"method-DeleteModules"},{"name":"InitializeModuleContext","tagname":"method","owner":"Appverse.AppLoader","meta":{},"id":"method-InitializeModuleContext"},{"name":"ListInstalledModules","tagname":"method","owner":"Appverse.AppLoader","meta":{},"id":"method-ListInstalledModules"},{"name":"LoadModule","tagname":"method","owner":"Appverse.AppLoader","meta":{},"id":"method-LoadModule"},{"name":"UpdateModule","tagname":"method","owner":"Appverse.AppLoader","meta":{},"id":"method-UpdateModule"},{"name":"UpdateModules","tagname":"method","owner":"Appverse.AppLoader","meta":{},"id":"method-UpdateModules"}],"event":[{"name":"onDeleteModulesFinished","tagname":"event","owner":"Appverse.AppLoader","meta":{"aside":[{"type":"guide","name":"application_listeners"}]},"id":"event-onDeleteModulesFinished"},{"name":"onUpdateModulesFinished","tagname":"event","owner":"Appverse.AppLoader","meta":{"aside":[{"type":"guide","name":"application_listeners"}]},"id":"event-onUpdateModulesFinished"}],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":5399,"files":[{"filename":"appverse.js","href":"appverse.html#Appverse-AppLoader"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/appverse.html#Appverse-AppLoader' target='_blank'>appverse.js</a></div></pre><div class='doc-contents'><p>Singleton class field to Load, List, Update and Remove remote application content.</p>\n\n<br>This interface provides features to load, list, update and remove remote application modules, also called sub applications. This content could be loaded into a webview to present it to the user.<br>\n\n\n<br> @version 4.0\n\n\n<pre>Usage: <a href=\"#!/api/Appverse.AppLoader\" rel=\"Appverse.AppLoader\" class=\"docClass\">Appverse.AppLoader</a>.&lt;metodName&gt;([params]).<br>Example: <a href=\"#!/api/Appverse.AppLoader-method-ListInstalledModules\" rel=\"Appverse.AppLoader-method-ListInstalledModules\" class=\"docClass\">Appverse.AppLoader.ListInstalledModules</a>().</pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-serviceName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.AppLoader'>Appverse.AppLoader</span><br/><a href='source/appverse.html#Appverse-AppLoader-property-serviceName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.AppLoader-property-serviceName' class='name expandable'>serviceName</a><span> : String</span></div><div class='description'><div class='short'>AppLoader service name (as configured on Platform Service Locator). ...</div><div class='long'><p>AppLoader service name (as configured on Platform Service Locator). <br> @version 4.0</p>\n<p>Defaults to: <code>&quot;loader&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.AppLoader'>Appverse.AppLoader</span><br/><a href='source/appverse.html#Appverse-AppLoader-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Appverse.AppLoader-method-constructor' class='name expandable'>Appverse.AppLoader</a>( <span class='pre'></span> ) : <a href=\"#!/api/Appverse.AppLoader\" rel=\"Appverse.AppLoader\" class=\"docClass\">Appverse.AppLoader</a></div><div class='description'><div class='short'>Constructs a new AppLoader interface. ...</div><div class='long'><p>Constructs a new AppLoader interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Appverse.AppLoader\" rel=\"Appverse.AppLoader\" class=\"docClass\">Appverse.AppLoader</a></span><div class='sub-desc'><p>A new AppLoader interface.</p>\n</div></li></ul></div></div></div><div id='method-DeleteModules' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.AppLoader'>Appverse.AppLoader</span><br/><a href='source/appverse.html#Appverse-AppLoader-method-DeleteModules' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.AppLoader-method-DeleteModules' class='name expandable'>DeleteModules</a>( <span class='pre'><a href=\"#!/api/Appverse.AppLoader.Module\" rel=\"Appverse.AppLoader.Module\" class=\"docClass\">Appverse.AppLoader.Module</a>[] modules</span> )</div><div class='description'><div class='short'>Deletes a given modules. ...</div><div class='long'><p>Deletes a given modules.</p>\n\n<br> @version 4.0\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>modules</span> : <a href=\"#!/api/Appverse.AppLoader.Module\" rel=\"Appverse.AppLoader.Module\" class=\"docClass\">Appverse.AppLoader.Module</a>[]<div class='sub-desc'><p>The modules to be deleted.</p>\n</div></li></ul></div></div></div><div id='method-InitializeModuleContext' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.AppLoader'>Appverse.AppLoader</span><br/><a href='source/appverse.html#Appverse-AppLoader-method-InitializeModuleContext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.AppLoader-method-InitializeModuleContext' class='name expandable'>InitializeModuleContext</a>( <span class='pre'><a href=\"#!/api/Appverse.AppLoader.ModuleContext\" rel=\"Appverse.AppLoader.ModuleContext\" class=\"docClass\">Appverse.AppLoader.ModuleContext</a> context</span> )</div><div class='description'><div class='short'>Initializes the context of the Application Loader for the next operations. ...</div><div class='long'><p>Initializes the context of the Application Loader for the next operations.</p>\n\n<br> @version 4.0\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>context</span> : <a href=\"#!/api/Appverse.AppLoader.ModuleContext\" rel=\"Appverse.AppLoader.ModuleContext\" class=\"docClass\">Appverse.AppLoader.ModuleContext</a><div class='sub-desc'><p>The current context options for handling modules.</p>\n</div></li></ul></div></div></div><div id='method-ListInstalledModules' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.AppLoader'>Appverse.AppLoader</span><br/><a href='source/appverse.html#Appverse-AppLoader-method-ListInstalledModules' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.AppLoader-method-ListInstalledModules' class='name expandable'>ListInstalledModules</a>( <span class='pre'></span> ) : <a href=\"#!/api/Appverse.AppLoader.Module\" rel=\"Appverse.AppLoader.Module\" class=\"docClass\">Appverse.AppLoader.Module</a>[]</div><div class='description'><div class='short'>Returns a list . ...</div><div class='long'><p>Returns a list .</p>\n\n<br> @version 4.0\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Appverse.AppLoader.Module\" rel=\"Appverse.AppLoader.Module\" class=\"docClass\">Appverse.AppLoader.Module</a>[]</span><div class='sub-desc'><p>List of currently installed modules (locally)</p>\n</div></li></ul></div></div></div><div id='method-LoadModule' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.AppLoader'>Appverse.AppLoader</span><br/><a href='source/appverse.html#Appverse-AppLoader-method-LoadModule' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.AppLoader-method-LoadModule' class='name expandable'>LoadModule</a>( <span class='pre'><a href=\"#!/api/Appverse.AppLoader.Module\" rel=\"Appverse.AppLoader.Module\" class=\"docClass\">Appverse.AppLoader.Module</a> module, <a href=\"#!/api/Appverse.AppLoader.ModuleParam\" rel=\"Appverse.AppLoader.ModuleParam\" class=\"docClass\">Appverse.AppLoader.ModuleParam</a>[] parameters, Boolean autoUpdate</span> )</div><div class='description'><div class='short'>Loads a Module inside the Appverse WebResources Container (WebView). ...</div><div class='long'><p>Loads a Module inside the Appverse WebResources Container (WebView). All modules should include an 'index.html' file as the main HTML file (entry point).</p>\n\n<br> @version 4.0\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>module</span> : <a href=\"#!/api/Appverse.AppLoader.Module\" rel=\"Appverse.AppLoader.Module\" class=\"docClass\">Appverse.AppLoader.Module</a><div class='sub-desc'><p>The module to be loaded.</p>\n</div></li><li><span class='pre'>parameters</span> : <a href=\"#!/api/Appverse.AppLoader.ModuleParam\" rel=\"Appverse.AppLoader.ModuleParam\" class=\"docClass\">Appverse.AppLoader.ModuleParam</a>[]<div class='sub-desc'><p>The parameters to be added to the module main HTML file request; as GET request parameters (optional field, null for not including any parameter).</p>\n</div></li><li><span class='pre'>autoUpdate</span> : Boolean<div class='sub-desc'><p>True to upload the module (using the corresponding LoadUrl and Version) prior to load it. Optional parameter. False is the default value. The update would be \"silent\", no event listener will be called by the platform in this case.</p>\n</div></li></ul></div></div></div><div id='method-UpdateModule' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.AppLoader'>Appverse.AppLoader</span><br/><a href='source/appverse.html#Appverse-AppLoader-method-UpdateModule' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.AppLoader-method-UpdateModule' class='name expandable'>UpdateModule</a>( <span class='pre'><a href=\"#!/api/Appverse.AppLoader.Module\" rel=\"Appverse.AppLoader.Module\" class=\"docClass\">Appverse.AppLoader.Module</a>[] module, String callbackId</span> )</div><div class='description'><div class='short'>Updates a given module (or installs if it was never previously downloaded). ...</div><div class='long'><p>Updates a given module (or installs if it was never previously downloaded).</p>\n\n<br> @version 4.0\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>module</span> : <a href=\"#!/api/Appverse.AppLoader.Module\" rel=\"Appverse.AppLoader.Module\" class=\"docClass\">Appverse.AppLoader.Module</a>[]<div class='sub-desc'><p>The module to be downloaded (the field <b><a href=\"#!/api/Appverse.AppLoader.Module-property-LoadUrl\" rel=\"Appverse.AppLoader.Module-property-LoadUrl\" class=\"docClass\">Appverse.AppLoader.Module.LoadUrl</a></b> is used for downloading each module).</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The callback identifier of this request to be returned on the corresponding event listener (callback). Null value is not needed.</p>\n</div></li></ul></div></div></div><div id='method-UpdateModules' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.AppLoader'>Appverse.AppLoader</span><br/><a href='source/appverse.html#Appverse-AppLoader-method-UpdateModules' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.AppLoader-method-UpdateModules' class='name expandable'>UpdateModules</a>( <span class='pre'><a href=\"#!/api/Appverse.AppLoader.Module\" rel=\"Appverse.AppLoader.Module\" class=\"docClass\">Appverse.AppLoader.Module</a>[] modules, String callbackId</span> )</div><div class='description'><div class='short'>Updates a given module list (or installs if it was never previously downloaded). ...</div><div class='long'><p>Updates a given module list (or installs if it was never previously downloaded).</p>\n\n<br> @version 4.0\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>modules</span> : <a href=\"#!/api/Appverse.AppLoader.Module\" rel=\"Appverse.AppLoader.Module\" class=\"docClass\">Appverse.AppLoader.Module</a>[]<div class='sub-desc'><p>The modules to be downloaded (<a href=\"#!/api/Appverse.AppLoader.Module-property-LoadUrl\" rel=\"Appverse.AppLoader.Module-property-LoadUrl\" class=\"docClass\">Appverse.AppLoader.Module.LoadUrl</a> is used for downloading each module).</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The callback identifier of this request to be returned on the corresponding event listener (callback). Null value is not needed.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-onDeleteModulesFinished' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.AppLoader'>Appverse.AppLoader</span><br/><a href='source/appverse.html#Appverse-AppLoader-event-onDeleteModulesFinished' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.AppLoader-event-onDeleteModulesFinished' class='name expandable'>onDeleteModulesFinished</a>( <span class='pre'><a href=\"#!/api/Appverse.AppLoader.Module\" rel=\"Appverse.AppLoader.Module\" class=\"docClass\">Appverse.AppLoader.Module</a>[] successDeletes, <a href=\"#!/api/Appverse.AppLoader.Module\" rel=\"Appverse.AppLoader.Module\" class=\"docClass\">Appverse.AppLoader.Module</a>[] failedDeletes</span> )</div><div class='description'><div class='short'>Fired when the applications loader has finished to delete modules\n(after calling the DeleteModules method),\n\nMethod t...</div><div class='long'>            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/application_listeners'><img src='guides/application_listeners/icon.png' alt=''> Subscribing to Appverse Listeners</a></p>\n            </div>\n<p>Fired when the applications loader has finished to delete modules\n(after calling the DeleteModules method),</p>\n\n<br>Method to be overrided by JS applications, to handle this event.\n\n\n<br> @version 4.0\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>successDeletes</span> : <a href=\"#!/api/Appverse.AppLoader.Module\" rel=\"Appverse.AppLoader.Module\" class=\"docClass\">Appverse.AppLoader.Module</a>[]<div class='sub-desc'><p>The list of successful deleted modules.</p>\n</div></li><li><span class='pre'>failedDeletes</span> : <a href=\"#!/api/Appverse.AppLoader.Module\" rel=\"Appverse.AppLoader.Module\" class=\"docClass\">Appverse.AppLoader.Module</a>[]<div class='sub-desc'><p>The list of failed deleted modules.</p>\n</div></li></ul></div></div></div><div id='event-onUpdateModulesFinished' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.AppLoader'>Appverse.AppLoader</span><br/><a href='source/appverse.html#Appverse-AppLoader-event-onUpdateModulesFinished' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.AppLoader-event-onUpdateModulesFinished' class='name expandable'>onUpdateModulesFinished</a>( <span class='pre'><a href=\"#!/api/Appverse.AppLoader.Module\" rel=\"Appverse.AppLoader.Module\" class=\"docClass\">Appverse.AppLoader.Module</a>[] successUpdates, <a href=\"#!/api/Appverse.AppLoader.Module\" rel=\"Appverse.AppLoader.Module\" class=\"docClass\">Appverse.AppLoader.Module</a>[] failedUpdates, String callbackId</span> )</div><div class='description'><div class='short'>Fired when the applications loader has finished to download (update) modules\n(after calling either the UpdateModules ...</div><div class='long'>            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/application_listeners'><img src='guides/application_listeners/icon.png' alt=''> Subscribing to Appverse Listeners</a></p>\n            </div>\n<p>Fired when the applications loader has finished to download (update) modules\n(after calling either the UpdateModules method or the UpdateModule method),</p>\n\n<br>Method to be overrided by JS applications, to handle this event.\n\n\n<br> @version 4.0\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>successUpdates</span> : <a href=\"#!/api/Appverse.AppLoader.Module\" rel=\"Appverse.AppLoader.Module\" class=\"docClass\">Appverse.AppLoader.Module</a>[]<div class='sub-desc'><p>The list of successful updated modules.</p>\n</div></li><li><span class='pre'>failedUpdates</span> : <a href=\"#!/api/Appverse.AppLoader.Module\" rel=\"Appverse.AppLoader.Module\" class=\"docClass\">Appverse.AppLoader.Module</a>[]<div class='sub-desc'><p>The list of failed updated modules.</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The callback id (provided by when calling UpdateModule/s method) that identifies this event listener (callback) with the calling request.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});