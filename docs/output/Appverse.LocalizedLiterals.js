Ext.data.JsonP.Appverse_LocalizedLiterals({"tagname":"class","name":"Appverse.LocalizedLiterals","autodetected":{"members":true},"files":[{"filename":"appverse-data-public.js","href":"appverse-data-public.html#Appverse-LocalizedLiterals"}],"author":[{"tagname":"author","name":"maps","email":null}],"members":[{"name":"default","tagname":"property","owner":"Appverse.LocalizedLiterals","id":"property-default","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Appverse.LocalizedLiterals","short_doc":"This class provides information about the app configured localized literals (as configured in the \"i18-config.xml\" fi...","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/appverse-data-public.html#Appverse-LocalizedLiterals' target='_blank'>appverse-data-public.js</a></div></pre><div class='doc-contents'><p>This class provides information about the app configured localized literals (as configured in the \"i18-config.xml\" file).\nIts values are populated ready to be used on app launch time.</p>\n\n<pre style=\"max-width:none;\">Usage: <a href=\"#!/api/Appverse.LocalizedLiterals\" rel=\"Appverse.LocalizedLiterals\" class=\"docClass\">Appverse.LocalizedLiterals</a>.&lt;property&gt;<br>\nThe <a href=\"#!/api/Appverse.LocalizedLiterals\" rel=\"Appverse.LocalizedLiterals\" class=\"docClass\">Appverse.LocalizedLiterals</a> object contains all the literals (pairs of name and value) localized for each \"language\" and \"language-country\" as configured in the \"i18-config.xml\" file.\n<br>Example:\n<br>Given the following  \"i18-config.xml\" file contents:<br><p style=\"color:blue;font-style:italic;\">\n&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;\n    &lt;i18n-config&gt;\n    &lt;default id = \"en-US\" language = \"en\" country = \"US\" /&gt;\n    &lt;supportedLanguages&gt;\n        &lt;supportedLanguage id = \"es-ES\" language = \"es\" country = \"ES\" /&gt;\n        &lt;supportedLanguage id = \"es\"    language = \"es\"                /&gt;\n        &lt;supportedLanguage id = \"en-US\" language = \"en\" country = \"US\" /&gt;\n        &lt;supportedLanguage id = \"en\"    language = \"en\"                /&gt;\n        &lt;supportedLanguage id = \"id-ID\" language = \"id\" country = \"ID\" /&gt;\n        &lt;supportedLanguage id = \"zh-CN\" language = \"zh\" country = \"CN\" /&gt;\n        &lt;supportedLanguage id = \"hu-HU\" language = \"hu\" country = \"HU\" /&gt;\n    &lt;/supportedLanguages&gt;\n&lt;/i18n-config&gt;</p>\nYou will have the following objects populated:\n<br><b><a href=\"#!/api/Appverse.LocalizedLiterals\" rel=\"Appverse.LocalizedLiterals\" class=\"docClass\">Appverse.LocalizedLiterals</a>[\"default\"]</b> containing the string concatenation of the default language and country configured as the default. In the example, you will have the string \"en-US\" value.\n<br><b><a href=\"#!/api/Appverse.LocalizedLiterals\" rel=\"Appverse.LocalizedLiterals\" class=\"docClass\">Appverse.LocalizedLiterals</a>[\"es-ES\"]</b> containing the literals localized in the <b>es-ES.plist</b> file.\n<br><b><a href=\"#!/api/Appverse.LocalizedLiterals\" rel=\"Appverse.LocalizedLiterals\" class=\"docClass\">Appverse.LocalizedLiterals</a>[\"es\"]</b> containing the literals localized in the <b>es.plist</b> file\n<br><b><a href=\"#!/api/Appverse.LocalizedLiterals\" rel=\"Appverse.LocalizedLiterals\" class=\"docClass\">Appverse.LocalizedLiterals</a>[\"en-US\"]</b> containing the literals localized in the <b>en-US.plist</b> file.\n<br><b><a href=\"#!/api/Appverse.LocalizedLiterals\" rel=\"Appverse.LocalizedLiterals\" class=\"docClass\">Appverse.LocalizedLiterals</a>[\"en\"]</b> containing the literals localized in the <b>en.plist</b> file.\n<br><b><a href=\"#!/api/Appverse.LocalizedLiterals\" rel=\"Appverse.LocalizedLiterals\" class=\"docClass\">Appverse.LocalizedLiterals</a>[\"id-ID\"]</b> containing the literals localized in the <b>id-ID.plist</b> file.\n<br><b><a href=\"#!/api/Appverse.LocalizedLiterals\" rel=\"Appverse.LocalizedLiterals\" class=\"docClass\">Appverse.LocalizedLiterals</a>[\"zh-CN\"]</b> containing the literals localized in the <b>zh-CN.plist</b> file.\n<br><b><a href=\"#!/api/Appverse.LocalizedLiterals\" rel=\"Appverse.LocalizedLiterals\" class=\"docClass\">Appverse.LocalizedLiterals</a>[\"hu-HU\"]</b> containing the literals localized in the <b>hu-HU.plist</b> file.\n<br>You could also get the values using the \"simple introspection\":\n<br><a href=\"#!/api/Appverse.LocalizedLiterals-property-default\" rel=\"Appverse.LocalizedLiterals-property-default\" class=\"docClass\">Appverse.LocalizedLiterals.default</a>, Appverse.LocalizedLiterals.es, etc...\n<br>except for the ones composed by the concatenation of language and country. Appverse.LocalizedLiterals.en-US is not accessible and raises a JS exception, please access using the brackets: <a href=\"#!/api/Appverse.LocalizedLiterals\" rel=\"Appverse.LocalizedLiterals\" class=\"docClass\">Appverse.LocalizedLiterals</a>[\"en-US\"]\n</pre>\n\n\n<p>\n@version 5.0</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-default' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.LocalizedLiterals'>Appverse.LocalizedLiterals</span><br/><a href='source/appverse-data-public.html#Appverse-LocalizedLiterals-property-default' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.LocalizedLiterals-property-default' class='name expandable'>default</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The default application locale (language-country) as configured in the \"i18-config.xml\" file. ...</div><div class='long'><p>The default application locale (language-country) as configured in the \"i18-config.xml\" file.</p>\n<p>Defaults to: <code>''</code></p></div></div></div></div></div></div></div>","meta":{}});