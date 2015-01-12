Ext.data.JsonP.Appverse_IO_Async({"tagname":"class","name":"Appverse.IO.Async","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Appverse.IO.Async","members":{"cfg":[],"property":[],"method":[{"name":"GetService","tagname":"method","owner":"Appverse.IO.Async","meta":{},"id":"method-GetService"},{"name":"GetServices","tagname":"method","owner":"Appverse.IO.Async","meta":{},"id":"method-GetServices"},{"name":"InvokeService","tagname":"method","owner":"Appverse.IO.Async","meta":{},"id":"method-InvokeService"},{"name":"InvokeServiceForBinary","tagname":"method","owner":"Appverse.IO.Async","meta":{},"id":"method-InvokeServiceForBinary"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":3202,"files":[{"filename":"appverse.js","href":"appverse.html#Appverse-IO-Async"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/appverse.html#Appverse-IO-Async' target='_blank'>appverse.js</a></div></pre><div class='doc-contents'><p>Invokes all IO API methods asynchronously.</p>\n\n<br>\n\n\n<p>Callback function name and callback identifier are passed to the methods (last arguments) to handle the result object when it is received from appverse runtime.</p>\n\n<pre>Usage:\n<br> var myCallbackFn = function(result, id){ <br>  ...//code here your custom functionality to handle the result... <br>}\n<br><a href=\"#!/api/Appverse.IO\" rel=\"Appverse.IO\" class=\"docClass\">Appverse.IO</a>.<b>Async</b>.GetServices('myCallbackFn', 'myId').\n<br>or\n<br><a href=\"#!/api/Appverse.IO\" rel=\"Appverse.IO\" class=\"docClass\">Appverse.IO</a>.<b>Async</b>.InvokeService(requestObjt, 'serviceName', 4, 'myCallbackFn', 'myId')\n<br>or\n<br><a href=\"#!/api/Appverse.IO\" rel=\"Appverse.IO\" class=\"docClass\">Appverse.IO</a>.<b>Async</b>.InvokeService(requestObjt, serviceObjt, 'myCallbackFn', 'myId')\n</pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-GetService' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.IO.Async'>Appverse.IO.Async</span><br/><a href='source/appverse.html#Appverse-IO-Async-method-GetService' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.IO.Async-method-GetService' class='name expandable'>GetService</a>( <span class='pre'>String serviceName, int serviceType, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Gets ASYNC the I/O Service that matches the given name, and type (if provided). ...</div><div class='long'><p>Gets ASYNC the I/O Service that matches the given name, and type (if provided). It is possible to define two services with the same name, but different type.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> | emulator <img src=\"resources/images/check.png\"/></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>serviceName</span> : String<div class='sub-desc'><p>The service name to look for.</p>\n</div></li><li><span class='pre'>serviceType</span> : int<div class='sub-desc'><p>The service type to look for. Optional parameter.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-GetServices' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.IO.Async'>Appverse.IO.Async</span><br/><a href='source/appverse.html#Appverse-IO-Async-method-GetServices' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.IO.Async-method-GetServices' class='name expandable'>GetServices</a>( <span class='pre'>String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Gets ASYNC the configured I/O services (the ones configured on the '/app/config/io-services-config.xml' file). ...</div><div class='long'><p>Gets ASYNC the configured I/O services (the ones configured on the '/app/config/io-services-config.xml' file).</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> | emulator <img src=\"resources/images/check.png\"/></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-InvokeService' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.IO.Async'>Appverse.IO.Async</span><br/><a href='source/appverse.html#Appverse-IO-Async-method-InvokeService' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.IO.Async-method-InvokeService' class='name expandable'>InvokeService</a>( <span class='pre'><a href=\"#!/api/Appverse.IO.IORequest\" rel=\"Appverse.IO.IORequest\" class=\"docClass\">Appverse.IO.IORequest</a> requestObjt, String/<a href=\"#!/api/Appverse.IO.IOService\" rel=\"Appverse.IO.IOService\" class=\"docClass\">Appverse.IO.IOService</a> service, int serviceType, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Invokes ASYNC the I/O Service that matches the given service name (or service object reference), and type (if provided). ...</div><div class='long'><p>Invokes ASYNC the I/O Service that matches the given service name (or service object reference), and type (if provided).</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> | emulator <img src=\"resources/images/check.png\"/></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>requestObjt</span> : <a href=\"#!/api/Appverse.IO.IORequest\" rel=\"Appverse.IO.IORequest\" class=\"docClass\">Appverse.IO.IORequest</a><div class='sub-desc'><p>The request object with the needed invocation parameters. Example:</p>\n\n<pre>{\"Session\":null,\"Content\":\"{method:authenticationService.login,id:1,params:['username','password']}\"}</pre>\n\n</div></li><li><span class='pre'>service</span> : String/<a href=\"#!/api/Appverse.IO.IOService\" rel=\"Appverse.IO.IOService\" class=\"docClass\">Appverse.IO.IOService</a><div class='sub-desc'><p>This param could be a IOService object (as provided by <a href=\"#!/api/Appverse.IO.Async-method-GetService\" rel=\"Appverse.IO.Async-method-GetService\" class=\"docClass\">GetService</a>), or only the service name. First service match would be invoked. ATTENTION: when using the 'object', the third argument (type) shouldn't be informed.</p>\n</div></li><li><span class='pre'>serviceType</span> : int<div class='sub-desc'><p>The service type to look for. Optional parameter. Just inform this when you pass the service name in the second argument.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-InvokeServiceForBinary' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.IO.Async'>Appverse.IO.Async</span><br/><a href='source/appverse.html#Appverse-IO-Async-method-InvokeServiceForBinary' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.IO.Async-method-InvokeServiceForBinary' class='name expandable'>InvokeServiceForBinary</a>( <span class='pre'><a href=\"#!/api/Appverse.IO.IORequest\" rel=\"Appverse.IO.IORequest\" class=\"docClass\">Appverse.IO.IORequest</a> requestObjt, <a href=\"#!/api/Appverse.IO.IOService\" rel=\"Appverse.IO.IOService\" class=\"docClass\">Appverse.IO.IOService</a> service, String storePath, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Invokes ASYNC the I/O Service (that matches the given service object reference) for retreiving a file (specially big ...</div><div class='long'><p>Invokes ASYNC the I/O Service (that matches the given service object reference) for retreiving a file (specially big ones) and stores it locally (under given store path)\nOnly <a href=\"#!/api/Appverse.IO-property-SERVICETYPE_OCTET_BINARY\" rel=\"Appverse.IO-property-SERVICETYPE_OCTET_BINARY\" class=\"docClass\">SERVICETYPE_OCTET_BINARY</a> types are allowed in this method.</p>\n\n<br/>For further information see, <a href=\"#!/api/Appverse.IO.IOService\" rel=\"Appverse.IO.IOService\" class=\"docClass\">IOService</a> and <a href=\"#!/api/Appverse.IO.IORequest\" rel=\"Appverse.IO.IORequest\" class=\"docClass\">IORequest</a>.\n\n\n<br> @version 4.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> | emulator <img src=\"resources/images/check.png\"/></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>requestObjt</span> : <a href=\"#!/api/Appverse.IO.IORequest\" rel=\"Appverse.IO.IORequest\" class=\"docClass\">Appverse.IO.IORequest</a><div class='sub-desc'><p>The request object with the needed invocation parameters. Example:</p>\n\n<pre>{\"Session\":null,\"Content\":\"{method:authenticationService.login,id:1,params:['username','password']}\"}</pre>\n\n</div></li><li><span class='pre'>service</span> : <a href=\"#!/api/Appverse.IO.IOService\" rel=\"Appverse.IO.IOService\" class=\"docClass\">Appverse.IO.IOService</a><div class='sub-desc'><p>This param could be a IOService object (as provided by <a href=\"#!/api/Appverse.IO.Async-method-GetService\" rel=\"Appverse.IO.Async-method-GetService\" class=\"docClass\">GetService</a>), or only the service name. First service match would be invoked. ATTENTION: when using the 'object', the third argument (type) shouldn't be informed.</p>\n</div></li><li><span class='pre'>storePath</span> : String<div class='sub-desc'><p>The relative path (under application documents root direectory) to store the contents received from this service invocation.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div></div></div></div></div>"});