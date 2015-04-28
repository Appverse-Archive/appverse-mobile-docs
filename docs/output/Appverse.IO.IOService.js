Ext.data.JsonP.Appverse_IO_IOService({"tagname":"class","name":"Appverse.IO.IOService","autodetected":{"members":true},"files":[{"filename":"appverse-data-public.js","href":"appverse-data-public.html#Appverse-IO-IOService"}],"extends":null,"author":[{"tagname":"author","name":"maps","email":null}],"members":[{"name":"Endpoint","tagname":"property","owner":"Appverse.IO.IOService","id":"property-Endpoint","meta":{}},{"name":"Name","tagname":"property","owner":"Appverse.IO.IOService","id":"property-Name","meta":{}},{"name":"RequestMethod","tagname":"property","owner":"Appverse.IO.IOService","id":"property-RequestMethod","meta":{}},{"name":"Type","tagname":"property","owner":"Appverse.IO.IOService","id":"property-Type","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Appverse.IO.IOService","short_doc":"@namespace Appverse.IO\nThis is a sample class. ...","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/appverse-data-public.html#Appverse-IO-IOService' target='_blank'>appverse-data-public.js</a></div></pre><div class='doc-contents'><p>@namespace <a href=\"#!/api/Appverse.IO\" rel=\"Appverse.IO\" class=\"docClass\">Appverse.IO</a>\nThis is a sample class.<br/><br/>\nUsed only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>\nDefines a remote invocation service (end-point path, host, port, exchanged data, etc..).\n@version 1.0</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-Endpoint' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.IO.IOService'>Appverse.IO.IOService</span><br/><a href='source/appverse-data-public.html#Appverse-IO-IOService-property-Endpoint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.IO.IOService-property-Endpoint' class='name expandable'>Endpoint</a> : <a href=\"#!/api/Appverse.IO.IOServiceEndpoint\" rel=\"Appverse.IO.IOServiceEndpoint\" class=\"docClass\">Appverse.IO.IOServiceEndpoint</a><span class=\"signature\"></span></div><div class='description'><div class='short'>The data for the service end-point. ...</div><div class='long'><p>The data for the service end-point. <br/><br/>For further information see, <a href=\"#!/api/Appverse.IO.IOServiceEndpoint\" rel=\"Appverse.IO.IOServiceEndpoint\" class=\"docClass\">IOServiceEndpoint</a>.</p>\n</div></div></div><div id='property-Name' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.IO.IOService'>Appverse.IO.IOService</span><br/><a href='source/appverse-data-public.html#Appverse-IO-IOService-property-Name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.IO.IOService-property-Name' class='name expandable'>Name</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The name of the service (not unique, to uniquely define a service, use Name and Type). ...</div><div class='long'><p>The name of the service (not unique, to uniquely define a service, use Name and Type).</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='property-RequestMethod' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.IO.IOService'>Appverse.IO.IOService</span><br/><a href='source/appverse-data-public.html#Appverse-IO-IOService-property-RequestMethod' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.IO.IOService-property-RequestMethod' class='name expandable'>RequestMethod</a> : int<span class=\"signature\"></span></div><div class='description'><div class='short'>The method used to request the service. ...</div><div class='long'><p>The method used to request the service.\n<br/>Possible values: 0 (POST), 1 (GET)</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-Type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.IO.IOService'>Appverse.IO.IOService</span><br/><a href='source/appverse-data-public.html#Appverse-IO-IOService-property-Type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.IO.IOService-property-Type' class='name expandable'>Type</a> : int<span class=\"signature\"></span></div><div class='description'><div class='short'>The type of the service. ...</div><div class='long'><p>The type of the service.\n<br/>Possible values:\n<a href=\"#!/api/Appverse.IO-property-SERVICETYPE_AMF_SERIALIZATION\" rel=\"Appverse.IO-property-SERVICETYPE_AMF_SERIALIZATION\" class=\"docClass\">SERVICETYPE_AMF_SERIALIZATION</a>,\n<a href=\"#!/api/Appverse.IO-property-SERVICETYPE_GWT_RPC\" rel=\"Appverse.IO-property-SERVICETYPE_GWT_RPC\" class=\"docClass\">SERVICETYPE_GWT_RPC</a>,\n<a href=\"#!/api/Appverse.IO-property-SERVICETYPE_OCTET_BINARY\" rel=\"Appverse.IO-property-SERVICETYPE_OCTET_BINARY\" class=\"docClass\">SERVICETYPE_OCTET_BINARY</a>,\n<a href=\"#!/api/Appverse.IO-property-SERVICETYPE_REMOTING_SERIALIZATION\" rel=\"Appverse.IO-property-SERVICETYPE_REMOTING_SERIALIZATION\" class=\"docClass\">SERVICETYPE_REMOTING_SERIALIZATION</a>,\n<a href=\"#!/api/Appverse.IO-property-SERVICETYPE_REST_JSON\" rel=\"Appverse.IO-property-SERVICETYPE_REST_JSON\" class=\"docClass\">SERVICETYPE_REST_JSON</a>\n<a href=\"#!/api/Appverse.IO-property-SERVICETYPE_REST_XML\" rel=\"Appverse.IO-property-SERVICETYPE_REST_XML\" class=\"docClass\">SERVICETYPE_REST_XML</a>\n<a href=\"#!/api/Appverse.IO-property-SERVICETYPE_SOAP_JSON\" rel=\"Appverse.IO-property-SERVICETYPE_SOAP_JSON\" class=\"docClass\">SERVICETYPE_SOAP_JSON</a>\n<a href=\"#!/api/Appverse.IO-property-SERVICETYPE_SOAP_XML\" rel=\"Appverse.IO-property-SERVICETYPE_SOAP_XML\" class=\"docClass\">SERVICETYPE_SOAP_XML</a>\n<a href=\"#!/api/Appverse.IO-property-SERVICETYPE_XMLRPC_JSON\" rel=\"Appverse.IO-property-SERVICETYPE_XMLRPC_JSON\" class=\"docClass\">SERVICETYPE_XMLRPC_JSON</a>\n&amp; <a href=\"#!/api/Appverse.IO-property-SERVICETYPE_XMLRPC_XML\" rel=\"Appverse.IO-property-SERVICETYPE_XMLRPC_XML\" class=\"docClass\">SERVICETYPE_XMLRPC_XML</a></p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div></div></div>","meta":{}});