Ext.data.JsonP.Appverse_Database_Async({"tagname":"class","name":"Appverse.Database.Async","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Appverse.Database.Async","members":{"cfg":[],"property":[],"method":[{"name":"CreateDatabase","tagname":"method","owner":"Appverse.Database.Async","meta":{},"id":"method-CreateDatabase"},{"name":"CreateTable","tagname":"method","owner":"Appverse.Database.Async","meta":{},"id":"method-CreateTable"},{"name":"DeleteDatabase","tagname":"method","owner":"Appverse.Database.Async","meta":{},"id":"method-DeleteDatabase"},{"name":"DeleteTable","tagname":"method","owner":"Appverse.Database.Async","meta":{},"id":"method-DeleteTable"},{"name":"ExecuteSQLQuery","tagname":"method","owner":"Appverse.Database.Async","meta":{},"id":"method-ExecuteSQLQuery"},{"name":"ExecuteSQLStatement","tagname":"method","owner":"Appverse.Database.Async","meta":{},"id":"method-ExecuteSQLStatement"},{"name":"ExecuteSQLTransaction","tagname":"method","owner":"Appverse.Database.Async","meta":{},"id":"method-ExecuteSQLTransaction"},{"name":"Exists","tagname":"method","owner":"Appverse.Database.Async","meta":{},"id":"method-Exists"},{"name":"ExistsDatabase","tagname":"method","owner":"Appverse.Database.Async","meta":{},"id":"method-ExistsDatabase"},{"name":"GetDatabase","tagname":"method","owner":"Appverse.Database.Async","meta":{},"id":"method-GetDatabase"},{"name":"GetDatabaseList","tagname":"method","owner":"Appverse.Database.Async","meta":{},"id":"method-GetDatabaseList"},{"name":"GetTableNames","tagname":"method","owner":"Appverse.Database.Async","meta":{},"id":"method-GetTableNames"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":1579,"files":[{"filename":"appverse.js","href":"appverse.html#Appverse-Database-Async"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/appverse.html#Appverse-Database-Async' target='_blank'>appverse.js</a></div></pre><div class='doc-contents'><p>Invokes all Database API methods asynchronously.</p>\n\n<br>\n\n\n<p>Callback function name and callback identifier are passed to the methods (last arguments) to handle the result object when it is received from appverse runtime.</p>\n\n<pre>Usage:\n<br> var myCallbackFn = function(result, id){ <br>  ...//code here your custom functionality to handle the result... <br>}\n<br><a href=\"#!/api/Appverse.Database\" rel=\"Appverse.Database\" class=\"docClass\">Appverse.Database</a>.<b>Async</b>.GetDatabaseList('myCallbackFn', 'myId').\n<br>or\n<br><a href=\"#!/api/Appverse.Database\" rel=\"Appverse.Database\" class=\"docClass\">Appverse.Database</a>.<b>Async</b>.GetDatabase('databaseName', 'myCallbackFn', 'myId').\n</pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-CreateDatabase' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Database.Async'>Appverse.Database.Async</span><br/><a href='source/appverse.html#Appverse-Database-Async-method-CreateDatabase' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Database.Async-method-CreateDatabase' class='name expandable'>CreateDatabase</a>( <span class='pre'>String dbName, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Creates database on default path, in ASYNC mode. ...</div><div class='long'><p>Creates database on default path, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dbName</span> : String<div class='sub-desc'><p>The database file name (please include .db extension).</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-CreateTable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Database.Async'>Appverse.Database.Async</span><br/><a href='source/appverse.html#Appverse-Database-Async-method-CreateTable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Database.Async-method-CreateTable' class='name expandable'>CreateTable</a>( <span class='pre'><a href=\"#!/api/Appverse.Database.Database\" rel=\"Appverse.Database.Database\" class=\"docClass\">Appverse.Database.Database</a> db, String tableName, String[] columnsDefs, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Creates a table inside the given database, in ASYNC mode. ...</div><div class='long'><p>Creates a table inside the given database, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>db</span> : <a href=\"#!/api/Appverse.Database.Database\" rel=\"Appverse.Database.Database\" class=\"docClass\">Appverse.Database.Database</a><div class='sub-desc'><p>The database object reference (as provided by <a href=\"#!/api/Appverse.Database.Async-method-GetDatabase\" rel=\"Appverse.Database.Async-method-GetDatabase\" class=\"docClass\">GetDatabase</a> ).</p>\n</div></li><li><span class='pre'>tableName</span> : String<div class='sub-desc'><p>The table name to be inserted.</p>\n</div></li><li><span class='pre'>columnsDefs</span> : String[]<div class='sub-desc'><p>The column definitions array (SQLITE syntax).</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-DeleteDatabase' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Database.Async'>Appverse.Database.Async</span><br/><a href='source/appverse.html#Appverse-Database-Async-method-DeleteDatabase' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Database.Async-method-DeleteDatabase' class='name expandable'>DeleteDatabase</a>( <span class='pre'><a href=\"#!/api/Appverse.Database.Database\" rel=\"Appverse.Database.Database\" class=\"docClass\">Appverse.Database.Database</a> db, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Deletes database on default path, in ASYNC mode. ...</div><div class='long'><p>Deletes database on default path, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>db</span> : <a href=\"#!/api/Appverse.Database.Database\" rel=\"Appverse.Database.Database\" class=\"docClass\">Appverse.Database.Database</a><div class='sub-desc'><p>The database object reference (as provided by <a href=\"#!/api/Appverse.Database.Async-method-GetDatabase\" rel=\"Appverse.Database.Async-method-GetDatabase\" class=\"docClass\">GetDatabase</a>) to be deleted.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-DeleteTable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Database.Async'>Appverse.Database.Async</span><br/><a href='source/appverse.html#Appverse-Database-Async-method-DeleteTable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Database.Async-method-DeleteTable' class='name expandable'>DeleteTable</a>( <span class='pre'><a href=\"#!/api/Appverse.Database.Database\" rel=\"Appverse.Database.Database\" class=\"docClass\">Appverse.Database.Database</a> db, String tableName, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Deletes table from the given database, in ASYNC mode. ...</div><div class='long'><p>Deletes table from the given database, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>db</span> : <a href=\"#!/api/Appverse.Database.Database\" rel=\"Appverse.Database.Database\" class=\"docClass\">Appverse.Database.Database</a><div class='sub-desc'><p>The database object reference (as provided by <a href=\"#!/api/Appverse.Database.Async-method-GetDatabase\" rel=\"Appverse.Database.Async-method-GetDatabase\" class=\"docClass\">GetDatabase</a> ).</p>\n</div></li><li><span class='pre'>tableName</span> : String<div class='sub-desc'><p>The table name to be deleted.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-ExecuteSQLQuery' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Database.Async'>Appverse.Database.Async</span><br/><a href='source/appverse.html#Appverse-Database-Async-method-ExecuteSQLQuery' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Database.Async-method-ExecuteSQLQuery' class='name expandable'>ExecuteSQLQuery</a>( <span class='pre'><a href=\"#!/api/Appverse.Database.Database\" rel=\"Appverse.Database.Database\" class=\"docClass\">Appverse.Database.Database</a> db, String query, String[] replacements, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Executes SQL query against given database, in ASYNC mode. ...</div><div class='long'><p>Executes SQL query against given database, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>db</span> : <a href=\"#!/api/Appverse.Database.Database\" rel=\"Appverse.Database.Database\" class=\"docClass\">Appverse.Database.Database</a><div class='sub-desc'><p>The database object reference (as provided by <a href=\"#!/api/Appverse.Database.Async-method-GetDatabase\" rel=\"Appverse.Database.Async-method-GetDatabase\" class=\"docClass\">GetDatabase</a>).</p>\n</div></li><li><span class='pre'>query</span> : String<div class='sub-desc'><p>The SQL query to execute.</p>\n</div></li><li><span class='pre'>replacements</span> : String[]<div class='sub-desc'><p>The replacement arguments for a preformatted SQL query. Optional parameter.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-ExecuteSQLStatement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Database.Async'>Appverse.Database.Async</span><br/><a href='source/appverse.html#Appverse-Database-Async-method-ExecuteSQLStatement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Database.Async-method-ExecuteSQLStatement' class='name expandable'>ExecuteSQLStatement</a>( <span class='pre'><a href=\"#!/api/Appverse.Database.Database\" rel=\"Appverse.Database.Database\" class=\"docClass\">Appverse.Database.Database</a> db, String statement, String[] replacements, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Executes SQL statement into the given database, in ASYNC mode. ...</div><div class='long'><p>Executes SQL statement into the given database, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>db</span> : <a href=\"#!/api/Appverse.Database.Database\" rel=\"Appverse.Database.Database\" class=\"docClass\">Appverse.Database.Database</a><div class='sub-desc'><p>The database object reference (as provided by <a href=\"#!/api/Appverse.Database.Async-method-GetDatabase\" rel=\"Appverse.Database.Async-method-GetDatabase\" class=\"docClass\">GetDatabase</a>).</p>\n</div></li><li><span class='pre'>statement</span> : String<div class='sub-desc'><p>The SQL statement to execute.</p>\n</div></li><li><span class='pre'>replacements</span> : String[]<div class='sub-desc'><p>The replacement arguments for a preformatted SQL statement. Optional parameter.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-ExecuteSQLTransaction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Database.Async'>Appverse.Database.Async</span><br/><a href='source/appverse.html#Appverse-Database-Async-method-ExecuteSQLTransaction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Database.Async-method-ExecuteSQLTransaction' class='name expandable'>ExecuteSQLTransaction</a>( <span class='pre'><a href=\"#!/api/Appverse.Database.Database\" rel=\"Appverse.Database.Database\" class=\"docClass\">Appverse.Database.Database</a> db, String[] statements, Boolean rollbackFlag, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Executes SQL transaction (some statements chain) inside given database, in ASYNC mode. ...</div><div class='long'><p>Executes SQL transaction (some statements chain) inside given database, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>db</span> : <a href=\"#!/api/Appverse.Database.Database\" rel=\"Appverse.Database.Database\" class=\"docClass\">Appverse.Database.Database</a><div class='sub-desc'><p>The database object reference (as provided by <a href=\"#!/api/Appverse.Database.Async-method-GetDatabase\" rel=\"Appverse.Database.Async-method-GetDatabase\" class=\"docClass\">GetDatabase</a>).</p>\n</div></li><li><span class='pre'>statements</span> : String[]<div class='sub-desc'><p>The statements to be executed during transaction (sqlite syntax language)..</p>\n</div></li><li><span class='pre'>rollbackFlag</span> : Boolean<div class='sub-desc'><p>Indicates if rollback should be performed when any statement execution fails.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-Exists' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Database.Async'>Appverse.Database.Async</span><br/><a href='source/appverse.html#Appverse-Database-Async-method-Exists' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Database.Async-method-Exists' class='name expandable'>Exists</a>( <span class='pre'><a href=\"#!/api/Appverse.Database.Database\" rel=\"Appverse.Database.Database\" class=\"docClass\">Appverse.Database.Database</a> db, String tableName, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Checks if database exists by database bean reference, if 'tableName' is not provided, in ASYNC mode. ...</div><div class='long'><p>Checks if database exists by database bean reference, if 'tableName' is not provided, in ASYNC mode.\nChecks if database table exists by database bean reference and table name, if 'tableName' is provided.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>db</span> : <a href=\"#!/api/Appverse.Database.Database\" rel=\"Appverse.Database.Database\" class=\"docClass\">Appverse.Database.Database</a><div class='sub-desc'><p>The database object reference (as provided by <a href=\"#!/api/Appverse.Database.Async-method-GetDatabase\" rel=\"Appverse.Database.Async-method-GetDatabase\" class=\"docClass\">GetDatabase</a>).</p>\n</div></li><li><span class='pre'>tableName</span> : String<div class='sub-desc'><p>The table name  to check for existence. Optional parameter.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-ExistsDatabase' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Database.Async'>Appverse.Database.Async</span><br/><a href='source/appverse.html#Appverse-Database-Async-method-ExistsDatabase' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Database.Async-method-ExistsDatabase' class='name expandable'>ExistsDatabase</a>( <span class='pre'>String dbName, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Checks if database exists by given database name (including .db extension), in ASYNC mode. ...</div><div class='long'><p>Checks if database exists by given database name (including .db extension), in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dbName</span> : String<div class='sub-desc'><p>The database name to check for existence.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-GetDatabase' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Database.Async'>Appverse.Database.Async</span><br/><a href='source/appverse.html#Appverse-Database-Async-method-GetDatabase' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Database.Async-method-GetDatabase' class='name expandable'>GetDatabase</a>( <span class='pre'>String dbName, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Gets database reference object by given name, in ASYNC mode. ...</div><div class='long'><p>Gets database reference object by given name, in ASYNC mode.</p>\n\n<br>Databases are located on the default database path: /<PersonalFolder>/sqlite/\n\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dbName</span> : String<div class='sub-desc'><p>The database file name (including .db extension).</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-GetDatabaseList' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Database.Async'>Appverse.Database.Async</span><br/><a href='source/appverse.html#Appverse-Database-Async-method-GetDatabaseList' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Database.Async-method-GetDatabaseList' class='name expandable'>GetDatabaseList</a>( <span class='pre'>String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Gets stored databases, in ASYNC mode. ...</div><div class='long'><p>Gets stored databases, in ASYNC mode.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div><div id='method-GetTableNames' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Database.Async'>Appverse.Database.Async</span><br/><a href='source/appverse.html#Appverse-Database-Async-method-GetTableNames' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Database.Async-method-GetTableNames' class='name expandable'>GetTableNames</a>( <span class='pre'><a href=\"#!/api/Appverse.Database.Database\" rel=\"Appverse.Database.Database\" class=\"docClass\">Appverse.Database.Database</a> db, String callbackFunctionName, String callbackId</span> )</div><div class='description'><div class='short'>Gets table names from the given database, in ASYNC mode. ...</div><div class='long'><p>Gets table names from the given database, in ASYNC mode.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/check.png\"/> </pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>db</span> : <a href=\"#!/api/Appverse.Database.Database\" rel=\"Appverse.Database.Database\" class=\"docClass\">Appverse.Database.Database</a><div class='sub-desc'><p>The database object reference (as provided by <a href=\"#!/api/Appverse.Database.Async-method-GetDatabase\" rel=\"Appverse.Database.Async-method-GetDatabase\" class=\"docClass\">GetDatabase</a>) to check for table names.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n</div></li></ul></div></div></div></div></div></div></div>"});