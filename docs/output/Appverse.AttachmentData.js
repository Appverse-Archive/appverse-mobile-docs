Ext.data.JsonP.Appverse_AttachmentData({"tagname":"class","name":"Appverse.AttachmentData","autodetected":{"members":true},"files":[{"filename":"appverse-data.js","href":"appverse-data.html#Appverse-AttachmentData"}],"author":[{"tagname":"author","name":"maps","email":null}],"members":[{"name":"Data","tagname":"property","owner":"Appverse.AttachmentData","id":"property-Data","meta":{}},{"name":"DataSize","tagname":"property","owner":"Appverse.AttachmentData","id":"property-DataSize","meta":{}},{"name":"FileName","tagname":"property","owner":"Appverse.AttachmentData","id":"property-FileName","meta":{}},{"name":"MimeType","tagname":"property","owner":"Appverse.AttachmentData","id":"property-MimeType","meta":{}},{"name":"ReferenceUrl","tagname":"property","owner":"Appverse.AttachmentData","id":"property-ReferenceUrl","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Appverse.AttachmentData","short_doc":"This is a sample class. ...","classIcon":"icon-class","superclasses":[],"subclasses":["Appverse.IO.AttachmentData","Appverse.Messaging.AttachmentData"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Appverse.IO.AttachmentData' rel='Appverse.IO.AttachmentData' class='docClass'>Appverse.IO.AttachmentData</a></div><div class='dependency'><a href='#!/api/Appverse.Messaging.AttachmentData' rel='Appverse.Messaging.AttachmentData' class='docClass'>Appverse.Messaging.AttachmentData</a></div><h4>Files</h4><div class='dependency'><a href='source/appverse-data.html#Appverse-AttachmentData' target='_blank'>appverse-data.js</a></div></pre><div class='doc-contents'><p>This is a sample class.<br/><br/>\nUsed only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>\nAttachment data object to be used as base of other APIs: such as the <a href=\"#!/api/Appverse.Messaging.AttachmentData\" rel=\"Appverse.Messaging.AttachmentData\" class=\"docClass\">Appverse.Messaging.AttachmentData</a> or <a href=\"#!/api/Appverse.IO.AttachmentData\" rel=\"Appverse.IO.AttachmentData\" class=\"docClass\">Appverse.IO.AttachmentData</a>.<br/><br/>\n@version 5.0.12</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-Data' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.AttachmentData'>Appverse.AttachmentData</span><br/><a href='source/appverse-data.html#Appverse-AttachmentData-property-Data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.AttachmentData-property-Data' class='name expandable'>Data</a> : byte[]<span class=\"signature\"></span></div><div class='description'><div class='short'>The raw data for the current file attachment (byte array). ...</div><div class='long'><p>The raw data for the current file attachment (byte array).</p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-DataSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.AttachmentData'>Appverse.AttachmentData</span><br/><a href='source/appverse-data.html#Appverse-AttachmentData-property-DataSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.AttachmentData-property-DataSize' class='name expandable'>DataSize</a> : long<span class=\"signature\"></span></div><div class='description'><div class='short'>The data size (in bytes) of the current file attachment. ...</div><div class='long'><p>The data size (in bytes) of the current file attachment.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-FileName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.AttachmentData'>Appverse.AttachmentData</span><br/><a href='source/appverse-data.html#Appverse-AttachmentData-property-FileName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.AttachmentData-property-FileName' class='name expandable'>FileName</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The name of the current file attachment. ...</div><div class='long'><p>The name of the current file attachment.</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='property-MimeType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.AttachmentData'>Appverse.AttachmentData</span><br/><a href='source/appverse-data.html#Appverse-AttachmentData-property-MimeType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.AttachmentData-property-MimeType' class='name expandable'>MimeType</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The mime type of the current attachment. ...</div><div class='long'><p>The mime type of the current attachment.\n<br/><br/> <img src=\"resources/images/warning.png\"/> &nbsp; When attaching <b>PDF</b> files to an email in <b>iOS</b>, you should take into account that a file with the <b>\"application/pdf\"</b> mime type (the default type for those files) could be attached in some cases as an <b>inline</b> image, rather than an attached file. To avoid those situations and always attach PDF files as attachments you should use the <b>\"text/x-pdf\"</b> mime type.</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='property-ReferenceUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.AttachmentData'>Appverse.AttachmentData</span><br/><a href='source/appverse-data.html#Appverse-AttachmentData-property-ReferenceUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.AttachmentData-property-ReferenceUrl' class='name expandable'>ReferenceUrl</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The relative path - under the application \"Documents\" folder - where the contents for the attachment file could be lo...</div><div class='long'><p>The relative path - under the application \"Documents\" folder - where the contents for the attachment file could be located.<br/><br/>\nThe Messaging API will use this reference url if no contents are provided on the <a href=\"#!/api/Appverse.Messaging.AttachmentData-property-Data\" rel=\"Appverse.Messaging.AttachmentData-property-Data\" class=\"docClass\">Data[]</a><br/><br/>\nThe IOServices API will use this reference url if no contents are provided on the <a href=\"#!/api/Appverse.IO.AttachmentData-property-Data\" rel=\"Appverse.IO.AttachmentData-property-Data\" class=\"docClass\">Data[]</a></p>\n<p>Defaults to: <code>''</code></p></div></div></div></div></div></div></div>","meta":{}});