Ext.data.JsonP.Appverse_Beacon({"tagname":"class","name":"Appverse.Beacon","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Appverse.Beacon","members":{"cfg":[],"property":[{"name":"FAR","tagname":"property","owner":"Appverse.Beacon","meta":{},"id":"property-FAR"},{"name":"IMMEDIATE","tagname":"property","owner":"Appverse.Beacon","meta":{},"id":"property-IMMEDIATE"},{"name":"NEAR","tagname":"property","owner":"Appverse.Beacon","meta":{},"id":"property-NEAR"},{"name":"UNKNOWN","tagname":"property","owner":"Appverse.Beacon","meta":{},"id":"property-UNKNOWN"}],"method":[{"name":"constructor","tagname":"method","owner":"Appverse.Beacon","meta":{},"id":"method-constructor"},{"name":"StartMonitoringAllRegions","tagname":"method","owner":"Appverse.Beacon","meta":{},"id":"method-StartMonitoringAllRegions"},{"name":"StartMonitoringRegion","tagname":"method","owner":"Appverse.Beacon","meta":{},"id":"method-StartMonitoringRegion"},{"name":"StopMonitoringBeacons","tagname":"method","owner":"Appverse.Beacon","meta":{},"id":"method-StopMonitoringBeacons"}],"event":[{"name":"Beacon","tagname":"event","owner":"Appverse.Beacon","meta":{},"id":"event-Beacon"},{"name":"OnDiscover","tagname":"event","owner":"Appverse.Beacon","meta":{"aside":[{"type":"guide","name":"application_listeners"}]},"id":"event-OnDiscover"},{"name":"OnEntered","tagname":"event","owner":"Appverse.Beacon","meta":{"aside":[{"type":"guide","name":"application_listeners"}]},"id":"event-OnEntered"},{"name":"OnExited","tagname":"event","owner":"Appverse.Beacon","meta":{"aside":[{"type":"guide","name":"application_listeners"}]},"id":"event-OnExited"},{"name":"OnUpdateProximity","tagname":"event","owner":"Appverse.Beacon","meta":{"aside":[{"type":"guide","name":"application_listeners"}]},"id":"event-OnUpdateProximity"}],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":5426,"files":[{"filename":"appverse.js","href":"appverse.html#Appverse-Beacon"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/appverse.html#Appverse-Beacon' target='_blank'>appverse.js</a></div></pre><div class='doc-contents'><p>Singleton class field to listen Beacon events.</p>\n\n<br>This interface provides features for beacons handling. JUST AVAILABLE FOR ANDROID DEVICES.<br>\n\n\n<br> @version 4.7\n\n\n<pre>Usage: <a href=\"#!/api/Appverse.Beacon\" rel=\"Appverse.Beacon\" class=\"docClass\">Appverse.Beacon</a>.&lt;metodName&gt;([params]).<br>Example: <a href=\"#!/api/Appverse.Beacon-method-StartMonitoringRegion\" rel=\"Appverse.Beacon-method-StartMonitoringRegion\" class=\"docClass\">Appverse.Beacon.StartMonitoringRegion</a>('xxx-xxxx-xxxx').</pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-FAR' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Beacon'>Appverse.Beacon</span><br/><a href='source/appverse.html#Appverse-Beacon-property-FAR' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Beacon-property-FAR' class='name expandable'>FAR</a><span> : int</span></div><div class='description'><div class='short'>Distance Type as Far. ...</div><div class='long'><p>Distance Type as Far.</p>\n\n<br> @version 4.7\n\n</div></div></div><div id='property-IMMEDIATE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Beacon'>Appverse.Beacon</span><br/><a href='source/appverse.html#Appverse-Beacon-property-IMMEDIATE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Beacon-property-IMMEDIATE' class='name expandable'>IMMEDIATE</a><span> : int</span></div><div class='description'><div class='short'>Distance Type as Immediate. ...</div><div class='long'><p>Distance Type as Immediate.</p>\n\n<br> @version 4.7\n\n</div></div></div><div id='property-NEAR' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Beacon'>Appverse.Beacon</span><br/><a href='source/appverse.html#Appverse-Beacon-property-NEAR' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Beacon-property-NEAR' class='name expandable'>NEAR</a><span> : int</span></div><div class='description'><div class='short'>Distance Type as Near. ...</div><div class='long'><p>Distance Type as Near.</p>\n\n<br> @version 4.7\n\n</div></div></div><div id='property-UNKNOWN' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Beacon'>Appverse.Beacon</span><br/><a href='source/appverse.html#Appverse-Beacon-property-UNKNOWN' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Beacon-property-UNKNOWN' class='name expandable'>UNKNOWN</a><span> : int</span></div><div class='description'><div class='short'>Distance Type as Unknown. ...</div><div class='long'><p>Distance Type as Unknown.</p>\n\n<br> @version 4.7\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Beacon'>Appverse.Beacon</span><br/><a href='source/appverse.html#Appverse-Beacon-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Appverse.Beacon-method-constructor' class='name expandable'>Appverse.Beacon</a>( <span class='pre'></span> ) : <a href=\"#!/api/Appverse.Beacon\" rel=\"Appverse.Beacon\" class=\"docClass\">Appverse.Beacon</a></div><div class='description'><div class='short'>Constructs a new Beacon interface. ...</div><div class='long'><p>Constructs a new Beacon interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Appverse.Beacon\" rel=\"Appverse.Beacon\" class=\"docClass\">Appverse.Beacon</a></span><div class='sub-desc'><p>A new Beacon interface.</p>\n</div></li></ul></div></div></div><div id='method-StartMonitoringAllRegions' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Beacon'>Appverse.Beacon</span><br/><a href='source/appverse.html#Appverse-Beacon-method-StartMonitoringAllRegions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Beacon-method-StartMonitoringAllRegions' class='name expandable'>StartMonitoringAllRegions</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Start monitoring looking for all the beacons\n\n @version 4.7 \n\n\n Available in:  iOS  | android  | windows  | emulator ...</div><div class='long'><p>Start monitoring looking for all the beacons</p>\n\n<br> @version 4.7 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/error.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> | emulator <img src=\"resources/images/error.png\"/></pre>\n\n</div></div></div><div id='method-StartMonitoringRegion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Beacon'>Appverse.Beacon</span><br/><a href='source/appverse.html#Appverse-Beacon-method-StartMonitoringRegion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Beacon-method-StartMonitoringRegion' class='name expandable'>StartMonitoringRegion</a>( <span class='pre'>String id</span> )</div><div class='description'><div class='short'>Start monitoring a region looking for beacons with an UUID\n\n @version 4.7 \n\n\n Available in:  iOS  | android  | window...</div><div class='long'><p>Start monitoring a region looking for beacons with an UUID</p>\n\n<br> @version 4.7 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/error.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> | emulator <img src=\"resources/images/error.png\"/></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>of the region</p>\n</div></li></ul></div></div></div><div id='method-StopMonitoringBeacons' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Beacon'>Appverse.Beacon</span><br/><a href='source/appverse.html#Appverse-Beacon-method-StopMonitoringBeacons' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Beacon-method-StopMonitoringBeacons' class='name expandable'>StopMonitoringBeacons</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Stop monitoring for beacons\n\n @version 4.7 \n\n\n Available in:  iOS  | android  | windows  | emulator ...</div><div class='long'><p>Stop monitoring for beacons</p>\n\n<br> @version 4.7 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/error.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> | emulator <img src=\"resources/images/error.png\"/></pre>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-Beacon' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Beacon'>Appverse.Beacon</span><br/><a href='source/appverse.html#Appverse-Beacon-event-Beacon' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Beacon-event-Beacon' class='name expandable'>Beacon</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>service name (as configured on Platform Service Locator). ...</div><div class='long'><p>service name (as configured on Platform Service Locator).</p>\n\n<br>Method to be overrided by JS applications, to handle this event. <br> @version 4.7\n\n</div></div></div><div id='event-OnDiscover' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Beacon'>Appverse.Beacon</span><br/><a href='source/appverse.html#Appverse-Beacon-event-OnDiscover' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Beacon-event-OnDiscover' class='name expandable'>OnDiscover</a>( <span class='pre'><a href=\"#!/api/Appverse.Beacon.Beacon\" rel=\"Appverse.Beacon.Beacon\" class=\"docClass\">Appverse.Beacon.Beacon</a>[] beacons</span> )</div><div class='description'><div class='short'>Event called when a new beacon is found. ...</div><div class='long'>            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/application_listeners'><img src='guides/application_listeners/icon.png' alt=''> Subscribing to Appverse Listeners</a></p>\n            </div>\n<p>Event called when a new beacon is found.</p>\n\n<br>Method to be overrided by JS applications, to handle this event.\n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/error.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> | emulator <img src=\"resources/images/error.png\"/></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>beacons</span> : <a href=\"#!/api/Appverse.Beacon.Beacon\" rel=\"Appverse.Beacon.Beacon\" class=\"docClass\">Appverse.Beacon.Beacon</a>[]<div class='sub-desc'><br> @version 4.7\n\n</div></li></ul></div></div></div><div id='event-OnEntered' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Beacon'>Appverse.Beacon</span><br/><a href='source/appverse.html#Appverse-Beacon-event-OnEntered' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Beacon-event-OnEntered' class='name expandable'>OnEntered</a>( <span class='pre'><a href=\"#!/api/Appverse.Beacon.Beacon\" rel=\"Appverse.Beacon.Beacon\" class=\"docClass\">Appverse.Beacon.Beacon</a>[] beacons</span> )</div><div class='description'><div class='short'>Event when called when a previously detected beacon is found again. ...</div><div class='long'>            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/application_listeners'><img src='guides/application_listeners/icon.png' alt=''> Subscribing to Appverse Listeners</a></p>\n            </div>\n<p>Event when called when a previously detected beacon is found again.</p>\n\n<br>Method to be overrided by JS applications, to handle this event.\n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/error.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> | emulator <img src=\"resources/images/error.png\"/></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>beacons</span> : <a href=\"#!/api/Appverse.Beacon.Beacon\" rel=\"Appverse.Beacon.Beacon\" class=\"docClass\">Appverse.Beacon.Beacon</a>[]<div class='sub-desc'><br> @version 4.7\n\n</div></li></ul></div></div></div><div id='event-OnExited' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Beacon'>Appverse.Beacon</span><br/><a href='source/appverse.html#Appverse-Beacon-event-OnExited' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Beacon-event-OnExited' class='name expandable'>OnExited</a>( <span class='pre'><a href=\"#!/api/Appverse.Beacon.Beacon\" rel=\"Appverse.Beacon.Beacon\" class=\"docClass\">Appverse.Beacon.Beacon</a>[] beacons</span> )</div><div class='description'><div class='short'>Event when called when a previously detected beacon is not found. ...</div><div class='long'>            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/application_listeners'><img src='guides/application_listeners/icon.png' alt=''> Subscribing to Appverse Listeners</a></p>\n            </div>\n<p>Event when called when a previously detected beacon is not found.</p>\n\n<br>Method to be overrided by JS applications, to handle this event.\n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/error.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> | emulator <img src=\"resources/images/error.png\"/></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>beacons</span> : <a href=\"#!/api/Appverse.Beacon.Beacon\" rel=\"Appverse.Beacon.Beacon\" class=\"docClass\">Appverse.Beacon.Beacon</a>[]<div class='sub-desc'><br> @version 4.7\n\n</div></li></ul></div></div></div><div id='event-OnUpdateProximity' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Beacon'>Appverse.Beacon</span><br/><a href='source/appverse.html#Appverse-Beacon-event-OnUpdateProximity' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Beacon-event-OnUpdateProximity' class='name expandable'>OnUpdateProximity</a>( <span class='pre'><a href=\"#!/api/Appverse.Beacon.Beacon\" rel=\"Appverse.Beacon.Beacon\" class=\"docClass\">Appverse.Beacon.Beacon</a> beacon, double from, double to</span> )</div><div class='description'><div class='short'>Event called when the distance to the known beacon changed. ...</div><div class='long'>            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/application_listeners'><img src='guides/application_listeners/icon.png' alt=''> Subscribing to Appverse Listeners</a></p>\n            </div>\n<p>Event called when the distance to the known beacon changed.</p>\n\n<br>Method to be overrided by JS applications, to handle this event.\n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/error.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> | emulator <img src=\"resources/images/error.png\"/></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>beacon</span> : <a href=\"#!/api/Appverse.Beacon.Beacon\" rel=\"Appverse.Beacon.Beacon\" class=\"docClass\">Appverse.Beacon.Beacon</a><div class='sub-desc'>\n</div></li><li><span class='pre'>from</span> : double<div class='sub-desc'>\n</div></li><li><span class='pre'>to</span> : double<div class='sub-desc'><br> @version 4.7\n\n</div></li></ul></div></div></div></div></div></div></div>"});