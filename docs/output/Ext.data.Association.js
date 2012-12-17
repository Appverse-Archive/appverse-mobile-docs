Ext.data.JsonP.Ext_data_Association({"tagname":"class","name":"Ext.data.Association","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{"author":["Ed Spencer"]},"private":null,"id":"class-Ext.data.Association","members":{"cfg":[{"name":"associatedModel","tagname":"cfg","owner":"Ext.data.Association","meta":{},"id":"cfg-associatedModel"},{"name":"ownerModel","tagname":"cfg","owner":"Ext.data.Association","meta":{},"id":"cfg-ownerModel"},{"name":"primaryKey","tagname":"cfg","owner":"Ext.data.Association","meta":{},"id":"cfg-primaryKey"}],"property":[{"name":"associatedName","tagname":"property","owner":"Ext.data.Association","meta":{},"id":"property-associatedName"},{"name":"ownerName","tagname":"property","owner":"Ext.data.Association","meta":{},"id":"property-ownerName"}],"method":[{"name":"constructor","tagname":"method","owner":"Ext.data.Association","meta":{},"id":"method-constructor"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":7939,"files":[{"filename":"sencha-touch-debug-w-comments.js","href":"sencha-touch-debug-w-comments.html#Ext-data-Association"}],"html_meta":{"author":null},"component":false,"superclasses":[],"subclasses":["Ext.data.HasManyAssociation","Ext.data.BelongsToAssociation"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.data.BelongsToAssociation' rel='Ext.data.BelongsToAssociation' class='docClass'>Ext.data.BelongsToAssociation</a></div><div class='dependency'><a href='#!/api/Ext.data.HasManyAssociation' rel='Ext.data.HasManyAssociation' class='docClass'>Ext.data.HasManyAssociation</a></div><h4>Files</h4><div class='dependency'><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Association' target='_blank'>sencha-touch-debug-w-comments.js</a></div></pre><div class='doc-contents'><p>Associations enable you to express relationships between different <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Models</a>. Let's say we're\nwriting an ecommerce system where Users can make Orders - there's a relationship between these Models that we can\nexpress like this:</p>\n\n\n\n\n<pre><code><a href=\"#!/api/Ext-method-regModel\" rel=\"Ext-method-regModel\" class=\"docClass\">Ext.regModel</a>('User', {\n    fields: ['id', 'name', 'email'],\n\n    hasMany: {model: 'Order', name: 'orders'}\n});\n\n<a href=\"#!/api/Ext-method-regModel\" rel=\"Ext-method-regModel\" class=\"docClass\">Ext.regModel</a>('Order', {\n    fields: ['id', 'user_id', 'status', 'price'],\n\n    belongsTo: 'User'\n});\n</code></pre>\n\n\n\n\n<p>We've set up two models - User and Order - and told them about each other. You can set up as many associations on\neach Model as you need using the two default types - <a href=\"#!/api/Ext.data.HasManyAssociation\" rel=\"Ext.data.HasManyAssociation\" class=\"docClass\">hasMany</a> and \n<a href=\"#!/api/Ext.data.BelongsToAssociation\" rel=\"Ext.data.BelongsToAssociation\" class=\"docClass\">belongsTo</a>. There's much more detail on the usage of each of those inside their\ndocumentation pages. If you're not familiar with Models already, <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">there is plenty on those too</a>.</p>\n\n\n\n\n<p><u>Further Reading</u></p>\n\n\n\n\n<ul style=\"list-style-type: disc; padding-left: 20px;\">\n  <li><a href=\"#!/api/Ext.data.HasManyAssociation\" rel=\"Ext.data.HasManyAssociation\" class=\"docClass\">hasMany associations</a>\n  <li><a href=\"#!/api/Ext.data.BelongsToAssociation\" rel=\"Ext.data.BelongsToAssociation\" class=\"docClass\">belongsTo associations</a>\n  <li><a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">using Models</a>\n</ul>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-associatedModel' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Association'>Ext.data.Association</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Association-cfg-associatedModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Association-cfg-associatedModel' class='name expandable'>associatedModel</a><span> : String</span></div><div class='description'><div class='short'>The string name of the model that is being associated with. ...</div><div class='long'><p>The string name of the model that is being associated with. Required</p>\n</div></div></div><div id='cfg-ownerModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Association'>Ext.data.Association</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Association-cfg-ownerModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Association-cfg-ownerModel' class='name expandable'>ownerModel</a><span> : String</span></div><div class='description'><div class='short'>The string name of the model that owns the association. ...</div><div class='long'><p>The string name of the model that owns the association. Required</p>\n</div></div></div><div id='cfg-primaryKey' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Association'>Ext.data.Association</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Association-cfg-primaryKey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Association-cfg-primaryKey' class='name expandable'>primaryKey</a><span> : String</span></div><div class='description'><div class='short'>The name of the primary key on the associated model. ...</div><div class='long'><p>The name of the primary key on the associated model. Defaults to 'id'</p>\n<p>Defaults to: <code>'id'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-associatedName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Association'>Ext.data.Association</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Association-property-associatedName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Association-property-associatedName' class='name expandable'>associatedName</a><span> : String</span></div><div class='description'><div class='short'>The name of the model is on the other end of the association (e.g. ...</div><div class='long'><p>The name of the model is on the other end of the association (e.g. if a User model hasMany Orders, this is 'Order')</p>\n</div></div></div><div id='property-ownerName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Association'>Ext.data.Association</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Association-property-ownerName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Association-property-ownerName' class='name not-expandable'>ownerName</a><span> : String</span></div><div class='description'><div class='short'><p>The name of the model that 'owns' the association</p>\n</div><div class='long'><p>The name of the model that 'owns' the association</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Association'>Ext.data.Association</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Association-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.data.Association-method-constructor' class='name expandable'>Ext.data.Association</a>( <span class='pre'>Object config</span> ) : Object</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>Optional config object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});