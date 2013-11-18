Ext.data.JsonP.Unity_IO_IOHeaders({"tagname":"class","name":"Unity.IO.IOHeaders","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{"author":["maps"]},"private":null,"id":"class-Unity.IO.IOHeaders","members":{"cfg":[],"property":[{"name":"Content","tagname":"property","owner":"Unity.IO.IOHeaders","meta":{},"id":"property-Content"},{"name":"ContentType","tagname":"property","owner":"Unity.IO.IOHeaders","meta":{},"id":"property-ContentType"},{"name":"GetContentLength","tagname":"property","owner":"Unity.IO.IOHeaders","meta":{},"id":"property-GetContentLength"},{"name":"GetRawContent","tagname":"property","owner":"Unity.IO.IOHeaders","meta":{},"id":"property-GetRawContent"},{"name":"Headers","tagname":"property","owner":"Unity.IO.IOHeaders","meta":{},"id":"property-Headers"},{"name":"Session","tagname":"property","owner":"Unity.IO.IOHeaders","meta":{},"id":"property-Session"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":741,"files":[{"filename":"appverse-data.js","href":"appverse-data.html#Unity-IO-IOHeaders"}],"html_meta":{"author":null},"component":false,"superclasses":[],"subclasses":["Unity.IO.IORequest","Unity.IO.IOResponse"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Unity.IO.IORequest' rel='Unity.IO.IORequest' class='docClass'>Unity.IO.IORequest</a></div><div class='dependency'><a href='#!/api/Unity.IO.IOResponse' rel='Unity.IO.IOResponse' class='docClass'>Unity.IO.IOResponse</a></div><h4>Files</h4><div class='dependency'><a href='source/appverse-data.html#Unity-IO-IOHeaders' target='_blank'>appverse-data.js</a></div></pre><div class='doc-contents'><p>@namespace <a href=\"#!/api/Unity.IO\" rel=\"Unity.IO\" class=\"docClass\">Unity.IO</a> This is a sample class.<br/><br/>\nUsed only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>\nDefines the Request/Response common data for a remote invocation service.\n@version 1.0</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-Content' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.IO.IOHeaders'>Unity.IO.IOHeaders</span><br/><a href='source/appverse-data.html#Unity-IO-IOHeaders-property-Content' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.IO.IOHeaders-property-Content' class='name expandable'>Content</a><span> : String</span></div><div class='description'><div class='short'>Request/Response data content (plain text). ...</div><div class='long'><p>Request/Response data content (plain text).</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='property-ContentType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.IO.IOHeaders'>Unity.IO.IOHeaders</span><br/><a href='source/appverse-data.html#Unity-IO-IOHeaders-property-ContentType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.IO.IOHeaders-property-ContentType' class='name expandable'>ContentType</a><span> : String</span></div><div class='description'><div class='short'>The request/response content type. ...</div><div class='long'><p>The request/response content type. MIME TYPE.\nIn case this content type attribute is specified on the IORequest object,\nits value would override the mime type mapped for the service (service type configuration) for that request.</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='property-GetContentLength' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.IO.IOHeaders'>Unity.IO.IOHeaders</span><br/><a href='source/appverse-data.html#Unity-IO-IOHeaders-property-GetContentLength' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.IO.IOHeaders-property-GetContentLength' class='name expandable'>GetContentLength</a><span> : int</span></div><div class='description'><div class='short'>The length in bytes for the Content field. ...</div><div class='long'><p>The length in bytes for the <a href=\"#!/api/Unity.IO.IOHeaders-property-Content\" rel=\"Unity.IO.IOHeaders-property-Content\" class=\"docClass\">Content</a> field.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-GetRawContent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.IO.IOHeaders'>Unity.IO.IOHeaders</span><br/><a href='source/appverse-data.html#Unity-IO-IOHeaders-property-GetRawContent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.IO.IOHeaders-property-GetRawContent' class='name expandable'>GetRawContent</a><span> : byte[]</span></div><div class='description'><div class='short'>The byte[] representing the Content field. ...</div><div class='long'><p>The byte[] representing the <a href=\"#!/api/Unity.IO.IOHeaders-property-Content\" rel=\"Unity.IO.IOHeaders-property-Content\" class=\"docClass\">Content</a> field.</p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-Headers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.IO.IOHeaders'>Unity.IO.IOHeaders</span><br/><a href='source/appverse-data.html#Unity-IO-IOHeaders-property-Headers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.IO.IOHeaders-property-Headers' class='name expandable'>Headers</a><span> : <a href=\"#!/api/Unity.IO.IOHeader\" rel=\"Unity.IO.IOHeader\" class=\"docClass\">Unity.IO.IOHeader</a>[]</span></div><div class='description'><div class='short'>The headers array (name,value pairs) to be included on the I/O service request. ...</div><div class='long'><p>The headers array (name,value pairs) to be included on the I/O service request. <br/><br/>For further information see, <a href=\"#!/api/Unity.IO.IOHeader\" rel=\"Unity.IO.IOHeader\" class=\"docClass\">IOHeader</a>.</p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-Session' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.IO.IOHeaders'>Unity.IO.IOHeaders</span><br/><a href='source/appverse-data.html#Unity-IO-IOHeaders-property-Session' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.IO.IOHeaders-property-Session' class='name expandable'>Session</a><span> : <a href=\"#!/api/Unity.IO.IOSessionContext\" rel=\"Unity.IO.IOSessionContext\" class=\"docClass\">Unity.IO.IOSessionContext</a></span></div><div class='description'><div class='short'>The session context for the Request/Response. ...</div><div class='long'><p>The session context for the Request/Response. <br/><br/>For further information see, <a href=\"#!/api/Unity.IO.IOSessionContext\" rel=\"Unity.IO.IOSessionContext\" class=\"docClass\">IOSessionContext</a>.</p>\n</div></div></div></div></div></div></div>"});