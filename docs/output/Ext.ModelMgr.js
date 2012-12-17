Ext.data.JsonP.Ext_ModelMgr({"tagname":"class","name":"Ext.ModelMgr","extends":"Ext.AbstractManager","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{"author":["Ed Spencer"]},"private":null,"id":"class-Ext.ModelMgr","members":{"cfg":[],"property":[{"name":"associationStack","tagname":"property","owner":"Ext.ModelMgr","meta":{},"id":"property-associationStack"},{"name":"defaultProxyType","tagname":"property","owner":"Ext.ModelMgr","meta":{},"id":"property-defaultProxyType"}],"method":[{"name":"addAssociation","tagname":"method","owner":"Ext.ModelMgr","meta":{"private":true},"id":"method-addAssociation"},{"name":"create","tagname":"method","owner":"Ext.ModelMgr","meta":{},"id":"method-create"},{"name":"createAssociations","tagname":"method","owner":"Ext.ModelMgr","meta":{"private":true},"id":"method-createAssociations"},{"name":"createFields","tagname":"method","owner":"Ext.ModelMgr","meta":{"private":true},"id":"method-createFields"},{"name":"getModel","tagname":"method","owner":"Ext.ModelMgr","meta":{},"id":"method-getModel"},{"name":"onModelDefined","tagname":"method","owner":"Ext.ModelMgr","meta":{"private":true},"id":"method-onModelDefined"},{"name":"registerType","tagname":"method","owner":"Ext.ModelMgr","meta":{},"id":"method-registerType"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":9265,"files":[{"filename":"sencha-touch-debug-w-comments.js","href":"sencha-touch-debug-w-comments.html#Ext-ModelMgr"}],"html_meta":{"author":null},"component":false,"superclasses":["Ext.AbstractManager"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.AbstractManager<div class='subclass '><strong>Ext.ModelMgr</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/sencha-touch-debug-w-comments.html#Ext-ModelMgr' target='_blank'>sencha-touch-debug-w-comments.js</a></div></pre><div class='doc-contents'><p>Creates and manages the current set of models</p>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-associationStack' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ModelMgr'>Ext.ModelMgr</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-ModelMgr-property-associationStack' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ModelMgr-property-associationStack' class='name expandable'>associationStack</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span></div><div class='description'><div class='short'>Private stack of associations that must be created once their associated model has been defined ...</div><div class='long'><p>Private stack of associations that must be created once their associated model has been defined</p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-defaultProxyType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ModelMgr'>Ext.ModelMgr</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-ModelMgr-property-defaultProxyType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ModelMgr-property-defaultProxyType' class='name expandable'>defaultProxyType</a><span> : String</span></div><div class='description'><div class='short'>The string type of the default Model Proxy. ...</div><div class='long'><p>The string type of the default Model Proxy. Defaults to 'ajax'</p>\n<p>Defaults to: <code>'ajax'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addAssociation' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ModelMgr'>Ext.ModelMgr</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-ModelMgr-method-addAssociation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ModelMgr-method-addAssociation' class='name expandable'>addAssociation</a>( <span class='pre'>Object association, Object associationsMC</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Creates an Association based on config and the supplied MixedCollection. ...</div><div class='long'><p>Creates an Association based on config and the supplied MixedCollection. TODO: this will\nprobably need to be refactored into a more elegant solution - it was initially pulled out\nto support deferred Association creation when the associated model has not been defined yet.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>association</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>associationsMC</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-create' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ModelMgr'>Ext.ModelMgr</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-ModelMgr-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ModelMgr-method-create' class='name expandable'>create</a>( <span class='pre'>Object data, String name, Number id</span> )</div><div class='description'><div class='short'>Creates a new instance of a Model using the given data. ...</div><div class='long'><p>Creates a new instance of a Model using the given data.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Data to initialize the Model's fields with</p>\n</div></li><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The name of the model to create</p>\n</div></li><li><span class='pre'>id</span> : Number<div class='sub-desc'><p>Optional unique id of the Model instance (see <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>)</p>\n</div></li></ul></div></div></div><div id='method-createAssociations' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ModelMgr'>Ext.ModelMgr</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-ModelMgr-method-createAssociations' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ModelMgr-method-createAssociations' class='name expandable'>createAssociations</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> associations, String name</span> ) : <a href=\"#!/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Creates and returns a MixedCollection representing the associations on a model ...</div><div class='long'><p>Creates and returns a MixedCollection representing the associations on a model</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>associations</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The array of Association configs</p>\n</div></li><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The string name of the owner model</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a></span><div class='sub-desc'><p>The Mixed Collection</p>\n</div></li></ul></div></div></div><div id='method-createFields' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ModelMgr'>Ext.ModelMgr</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-ModelMgr-method-createFields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ModelMgr-method-createFields' class='name expandable'>createFields</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> fields</span> ) : <a href=\"#!/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Creates and returns a MixedCollection representing the fields in a model ...</div><div class='long'><p>Creates and returns a MixedCollection representing the fields in a model</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fields</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The array of field configurations</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a></span><div class='sub-desc'><p>The Mixed Collection</p>\n</div></li></ul></div></div></div><div id='method-getModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ModelMgr'>Ext.ModelMgr</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-ModelMgr-method-getModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ModelMgr-method-getModel' class='name expandable'>getModel</a>( <span class='pre'>String/Object id</span> )</div><div class='description'><div class='short'>Returns the Ext.data.Model for a given model name ...</div><div class='long'><p>Returns the <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> for a given model name</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String/Object<div class='sub-desc'><p>The id of the model or the model instance.</p>\n</div></li></ul></div></div></div><div id='method-onModelDefined' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ModelMgr'>Ext.ModelMgr</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-ModelMgr-method-onModelDefined' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ModelMgr-method-onModelDefined' class='name expandable'>onModelDefined</a>( <span class='pre'>Function model</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Private callback called whenever a model has just been defined. ...</div><div class='long'><p>Private callback called whenever a model has just been defined. This sets up any associations\nthat were waiting for the given model to be defined</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : Function<div class='sub-desc'><p>The model that was just created</p>\n</div></li></ul></div></div></div><div id='method-registerType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ModelMgr'>Ext.ModelMgr</span><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-ModelMgr-method-registerType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ModelMgr-method-registerType' class='name expandable'>registerType</a>( <span class='pre'>Object name, Object config</span> )</div><div class='description'><div class='short'>Registers a model definition. ...</div><div class='long'><p>Registers a model definition. All model plugins marked with isDefault: true are bootstrapped\nimmediately, as are any addition plugins defined in the model config.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});