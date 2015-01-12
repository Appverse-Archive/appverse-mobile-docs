Ext.data.JsonP.Appverse_Analytics({"tagname":"class","name":"Appverse.Analytics","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Appverse.Analytics","members":{"cfg":[],"property":[{"name":"serviceName","tagname":"property","owner":"Appverse.Analytics","meta":{},"id":"property-serviceName"}],"method":[{"name":"constructor","tagname":"method","owner":"Appverse.Analytics","meta":{},"id":"method-constructor"},{"name":"StartTracking","tagname":"method","owner":"Appverse.Analytics","meta":{},"id":"method-StartTracking"},{"name":"StopTracking","tagname":"method","owner":"Appverse.Analytics","meta":{},"id":"method-StopTracking"},{"name":"TrackEvent","tagname":"method","owner":"Appverse.Analytics","meta":{},"id":"method-TrackEvent"},{"name":"TrackPageView","tagname":"method","owner":"Appverse.Analytics","meta":{},"id":"method-TrackPageView"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":4836,"files":[{"filename":"appverse.js","href":"appverse.html#Appverse-Analytics"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/appverse.html#Appverse-Analytics' target='_blank'>appverse.js</a></div></pre><div class='doc-contents'><p>Singleton class field to access Analytics interface.</p>\n\n<br>This interface provides features to track application usage and send to Google Analytics.<br>\n\n\n<br> @version 3.0\n\n\n<pre>Usage: <a href=\"#!/api/Appverse.Analytics\" rel=\"Appverse.Analytics\" class=\"docClass\">Appverse.Analytics</a>.&lt;metodName&gt;([params]).<br>Example: <a href=\"#!/api/Appverse.Analytics-method-TrackPageView\" rel=\"Appverse.Analytics-method-TrackPageView\" class=\"docClass\">Appverse.Analytics.TrackPageView</a>('/mypage').</pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-serviceName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Analytics'>Appverse.Analytics</span><br/><a href='source/appverse.html#Appverse-Analytics-property-serviceName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Analytics-property-serviceName' class='name expandable'>serviceName</a><span> : String</span></div><div class='description'><div class='short'>Analytics service name (as configured on Platform Service Locator). ...</div><div class='long'><p>Analytics service name (as configured on Platform Service Locator). <br> @version 3.0</p>\n<p>Defaults to: <code>&quot;analytics&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Analytics'>Appverse.Analytics</span><br/><a href='source/appverse.html#Appverse-Analytics-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Appverse.Analytics-method-constructor' class='name expandable'>Appverse.Analytics</a>( <span class='pre'></span> ) : <a href=\"#!/api/Appverse.Analytics\" rel=\"Appverse.Analytics\" class=\"docClass\">Appverse.Analytics</a></div><div class='description'><div class='short'>Constructs a new Analytics interface. ...</div><div class='long'><p>Constructs a new Analytics interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Appverse.Analytics\" rel=\"Appverse.Analytics\" class=\"docClass\">Appverse.Analytics</a></span><div class='sub-desc'><p>A new Analytics interface.</p>\n</div></li></ul></div></div></div><div id='method-StartTracking' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Analytics'>Appverse.Analytics</span><br/><a href='source/appverse.html#Appverse-Analytics-method-StartTracking' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Analytics-method-StartTracking' class='name expandable'>StartTracking</a>( <span class='pre'>String webPropertyID</span> ) : Boolean</div><div class='description'><div class='short'>Starts the tracker - for the given web property id - from receiving and dispatching data to the server. ...</div><div class='long'><p>Starts the tracker - for the given web property id - from receiving and dispatching data to the server.</p>\n\n<br> @version 3.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> | emulator <img src=\"resources/images/error.png\"/></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>webPropertyID</span> : String<div class='sub-desc'><p>The web property ID with the format UA-99999999-9</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if the tracker was started successfully</p>\n</div></li></ul></div></div></div><div id='method-StopTracking' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Analytics'>Appverse.Analytics</span><br/><a href='source/appverse.html#Appverse-Analytics-method-StopTracking' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Analytics-method-StopTracking' class='name expandable'>StopTracking</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Stops the tracker from receiving and dispatching data to the server\n\n @version 3.0 \n\n\n Available in:  iOS  | android ...</div><div class='long'><p>Stops the tracker from receiving and dispatching data to the server</p>\n\n<br> @version 3.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> | emulator <img src=\"resources/images/error.png\"/></pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if tracker was stopped</p>\n</div></li></ul></div></div></div><div id='method-TrackEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Analytics'>Appverse.Analytics</span><br/><a href='source/appverse.html#Appverse-Analytics-method-TrackEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Analytics-method-TrackEvent' class='name expandable'>TrackEvent</a>( <span class='pre'>String group, String action, String label, Integer value</span> ) : Boolean</div><div class='description'><div class='short'>Sends an event to be tracked by the analytics tracker\n\n @version 3.0 \n\n\n Available in:  iOS  | android  | windows  | ...</div><div class='long'><p>Sends an event to be tracked by the analytics tracker</p>\n\n<br> @version 3.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> | emulator <img src=\"resources/images/error.png\"/></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>group</span> : String<div class='sub-desc'><p>the event group</p>\n</div></li><li><span class='pre'>action</span> : String<div class='sub-desc'><p>the event action</p>\n</div></li><li><span class='pre'>label</span> : String<div class='sub-desc'><p>The event label</p>\n</div></li><li><span class='pre'>value</span> : Integer<div class='sub-desc'><p>The event value</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if the event was successfully tracked</p>\n</div></li></ul></div></div></div><div id='method-TrackPageView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Analytics'>Appverse.Analytics</span><br/><a href='source/appverse.html#Appverse-Analytics-method-TrackPageView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Analytics-method-TrackPageView' class='name expandable'>TrackPageView</a>( <span class='pre'>String relativeUrl</span> ) : Boolean</div><div class='description'><div class='short'>Sends a pageview to be tracked by the analytics tracker\n\n @version 3.0 \n\n\n Available in:  iOS  | android  | windows  ...</div><div class='long'><p>Sends a pageview to be tracked by the analytics tracker</p>\n\n<br> @version 3.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> | emulator <img src=\"resources/images/error.png\"/></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>relativeUrl</span> : String<div class='sub-desc'><p>The relativeUrl to the page i.e. \"/home\"</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if the pageview was successfully tracked</p>\n</div></li></ul></div></div></div></div></div></div></div>"});