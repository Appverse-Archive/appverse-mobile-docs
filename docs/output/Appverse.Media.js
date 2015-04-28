Ext.data.JsonP.Appverse_Media({"tagname":"class","name":"Appverse.Media","autodetected":{},"files":[{"filename":"appverse.js","href":"appverse.html#Appverse-Media"}],"singleton":true,"members":[{"name":"serviceName","tagname":"cfg","owner":"Appverse.Media","id":"cfg-serviceName","meta":{}},{"name":"MEDIATSTATE_ERROR","tagname":"property","owner":"Appverse.Media","id":"property-MEDIATSTATE_ERROR","meta":{}},{"name":"MEDIATSTATE_PAUSED","tagname":"property","owner":"Appverse.Media","id":"property-MEDIATSTATE_PAUSED","meta":{}},{"name":"MEDIATSTATE_PLAYING","tagname":"property","owner":"Appverse.Media","id":"property-MEDIATSTATE_PLAYING","meta":{}},{"name":"MEDIATSTATE_RECORDING","tagname":"property","owner":"Appverse.Media","id":"property-MEDIATSTATE_RECORDING","meta":{}},{"name":"MEDIATSTATE_STOPPED","tagname":"property","owner":"Appverse.Media","id":"property-MEDIATSTATE_STOPPED","meta":{}},{"name":"MEDIATYPE_AUDIO","tagname":"property","owner":"Appverse.Media","id":"property-MEDIATYPE_AUDIO","meta":{}},{"name":"MEDIATYPE_NOT_SUPPORTED","tagname":"property","owner":"Appverse.Media","id":"property-MEDIATYPE_NOT_SUPPORTED","meta":{}},{"name":"MEDIATYPE_PHOTO","tagname":"property","owner":"Appverse.Media","id":"property-MEDIATYPE_PHOTO","meta":{}},{"name":"MEDIATYPE_VIDEO","tagname":"property","owner":"Appverse.Media","id":"property-MEDIATYPE_VIDEO","meta":{}},{"name":"constructor","tagname":"method","owner":"Appverse.Media","id":"method-constructor","meta":{}},{"name":"GetCurrentMedia","tagname":"method","owner":"Appverse.Media","id":"method-GetCurrentMedia","meta":{}},{"name":"GetMetadata","tagname":"method","owner":"Appverse.Media","id":"method-GetMetadata","meta":{}},{"name":"GetSnapshot","tagname":"method","owner":"Appverse.Media","id":"method-GetSnapshot","meta":{}},{"name":"GetState","tagname":"method","owner":"Appverse.Media","id":"method-GetState","meta":{}},{"name":"Pause","tagname":"method","owner":"Appverse.Media","id":"method-Pause","meta":{}},{"name":"Play","tagname":"method","owner":"Appverse.Media","id":"method-Play","meta":{}},{"name":"PlayStream","tagname":"method","owner":"Appverse.Media","id":"method-PlayStream","meta":{}},{"name":"SeekPosition","tagname":"method","owner":"Appverse.Media","id":"method-SeekPosition","meta":{}},{"name":"Stop","tagname":"method","owner":"Appverse.Media","id":"method-Stop","meta":{}},{"name":"TakeSnapshot","tagname":"method","owner":"Appverse.Media","id":"method-TakeSnapshot","meta":{}},{"name":"onFinishedPickingImage","tagname":"event","owner":"Appverse.Media","id":"event-onFinishedPickingImage","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Appverse.Media","short_doc":"Singleton class field to access Media interface. ...","classIcon":"icon-singleton","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/appverse.html#Appverse-Media' target='_blank'>appverse.js</a></div></pre><div class='doc-contents'><p>Singleton class field to access Media interface.\n<br>This interface provides access to device's audio/movie player and camera applications.<br>\n<br> @version 1.0</p>\n\n<pre>Usage: <a href=\"#!/api/Appverse.Media\" rel=\"Appverse.Media\" class=\"docClass\">Appverse.Media</a>.&lt;metodName&gt;([params]).<br>Example: <a href=\"#!/api/Appverse.Media-method-Play\" rel=\"Appverse.Media-method-Play\" class=\"docClass\">Appverse.Media.Play</a>(filePath).</pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-serviceName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Media'>Appverse.Media</span><br/><a href='source/appverse.html#Appverse-Media-cfg-serviceName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Media-cfg-serviceName' class='name expandable'>serviceName</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Media service name (as configured on Platform Service Locator). ...</div><div class='long'><p>Media service name (as configured on Platform Service Locator).\n<br> @version 1.0</p>\n<p>Defaults to: <code>&quot;media&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-MEDIATSTATE_ERROR' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Media'>Appverse.Media</span><br/><a href='source/appverse.html#Appverse-Media-property-MEDIATSTATE_ERROR' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Media-property-MEDIATSTATE_ERROR' class='name expandable'>MEDIATSTATE_ERROR</a> : int<span class=\"signature\"></span></div><div class='description'><div class='short'>Error Media State. ...</div><div class='long'><p>Error Media State.\n<br> @version 1.0</p>\n</div></div></div><div id='property-MEDIATSTATE_PAUSED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Media'>Appverse.Media</span><br/><a href='source/appverse.html#Appverse-Media-property-MEDIATSTATE_PAUSED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Media-property-MEDIATSTATE_PAUSED' class='name expandable'>MEDIATSTATE_PAUSED</a> : int<span class=\"signature\"></span></div><div class='description'><div class='short'>Paused Media State. ...</div><div class='long'><p>Paused Media State.\n<br> @version 1.0</p>\n</div></div></div><div id='property-MEDIATSTATE_PLAYING' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Media'>Appverse.Media</span><br/><a href='source/appverse.html#Appverse-Media-property-MEDIATSTATE_PLAYING' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Media-property-MEDIATSTATE_PLAYING' class='name expandable'>MEDIATSTATE_PLAYING</a> : int<span class=\"signature\"></span></div><div class='description'><div class='short'>Playing Media State. ...</div><div class='long'><p>Playing Media State.\n<br> @version 1.0</p>\n</div></div></div><div id='property-MEDIATSTATE_RECORDING' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Media'>Appverse.Media</span><br/><a href='source/appverse.html#Appverse-Media-property-MEDIATSTATE_RECORDING' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Media-property-MEDIATSTATE_RECORDING' class='name expandable'>MEDIATSTATE_RECORDING</a> : int<span class=\"signature\"></span></div><div class='description'><div class='short'>Recording Media State. ...</div><div class='long'><p>Recording Media State.\n<br> @version 1.0</p>\n</div></div></div><div id='property-MEDIATSTATE_STOPPED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Media'>Appverse.Media</span><br/><a href='source/appverse.html#Appverse-Media-property-MEDIATSTATE_STOPPED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Media-property-MEDIATSTATE_STOPPED' class='name expandable'>MEDIATSTATE_STOPPED</a> : int<span class=\"signature\"></span></div><div class='description'><div class='short'>Stopped Media State. ...</div><div class='long'><p>Stopped Media State.\n<br> @version 1.0</p>\n</div></div></div><div id='property-MEDIATYPE_AUDIO' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Media'>Appverse.Media</span><br/><a href='source/appverse.html#Appverse-Media-property-MEDIATYPE_AUDIO' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Media-property-MEDIATYPE_AUDIO' class='name expandable'>MEDIATYPE_AUDIO</a> : int<span class=\"signature\"></span></div><div class='description'><div class='short'>Audio Media Type. ...</div><div class='long'><p>Audio Media Type.\n<br> @version 1.0</p>\n</div></div></div><div id='property-MEDIATYPE_NOT_SUPPORTED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Media'>Appverse.Media</span><br/><a href='source/appverse.html#Appverse-Media-property-MEDIATYPE_NOT_SUPPORTED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Media-property-MEDIATYPE_NOT_SUPPORTED' class='name expandable'>MEDIATYPE_NOT_SUPPORTED</a> : int<span class=\"signature\"></span></div><div class='description'><div class='short'>Not Supported Media Type. ...</div><div class='long'><p>Not Supported Media Type.\n<br> @version 1.0</p>\n</div></div></div><div id='property-MEDIATYPE_PHOTO' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Media'>Appverse.Media</span><br/><a href='source/appverse.html#Appverse-Media-property-MEDIATYPE_PHOTO' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Media-property-MEDIATYPE_PHOTO' class='name expandable'>MEDIATYPE_PHOTO</a> : int<span class=\"signature\"></span></div><div class='description'><div class='short'>Photo Media Type. ...</div><div class='long'><p>Photo Media Type.\n<br> @version 1.0</p>\n</div></div></div><div id='property-MEDIATYPE_VIDEO' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Media'>Appverse.Media</span><br/><a href='source/appverse.html#Appverse-Media-property-MEDIATYPE_VIDEO' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Media-property-MEDIATYPE_VIDEO' class='name expandable'>MEDIATYPE_VIDEO</a> : int<span class=\"signature\"></span></div><div class='description'><div class='short'>Video Media Type. ...</div><div class='long'><p>Video Media Type.\n<br> @version 1.0</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Media'>Appverse.Media</span><br/><a href='source/appverse.html#Appverse-Media-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Appverse.Media-method-constructor' class='name expandable'>Appverse.Media</a>( <span class='pre'></span> ) : <a href=\"#!/api/Appverse.Media\" rel=\"Appverse.Media\" class=\"docClass\">Appverse.Media</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Constructs a new Media interface. ...</div><div class='long'><p>Constructs a new Media interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Appverse.Media\" rel=\"Appverse.Media\" class=\"docClass\">Appverse.Media</a></span><div class='sub-desc'><p>A new Media interface.</p>\n</div></li></ul></div></div></div><div id='method-GetCurrentMedia' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Media'>Appverse.Media</span><br/><a href='source/appverse.html#Appverse-Media-method-GetCurrentMedia' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Media-method-GetCurrentMedia' class='name expandable'>GetCurrentMedia</a>( <span class='pre'>callbackFunctionName, callbackId</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the currently playing media file metadata.For further information see, MediaMetadata. ...</div><div class='long'><p>Gets the currently playing media file metadata.<br/>For further information see, <a href=\"#!/api/Appverse.Media.MediaMetadata\" rel=\"Appverse.Media.MediaMetadata\" class=\"docClass\">MediaMetadata</a>.\n<br> @version 5.0\n<br> It returns a {<a href=\"#!/api/Appverse.Media.MediaMetadata\" rel=\"Appverse.Media.MediaMetadata\" class=\"docClass\">Appverse.Media.MediaMetadata</a>} object with the Current media file metadata.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/information.png\"/> *mock data | windows <img src=\"resources/images/error.png\"/> | emulator <img src=\"resources/images/check.png\"/> *mock data</pre>\n\n</div></li></ul></div></div></div><div id='method-GetMetadata' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Media'>Appverse.Media</span><br/><a href='source/appverse.html#Appverse-Media-method-GetMetadata' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Media-method-GetMetadata' class='name expandable'>GetMetadata</a>( <span class='pre'>filePath, callbackFunctionName, callbackId</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets Media metadata.For further information see, MediaMetadata. ...</div><div class='long'><p>Gets Media metadata.<br/>For further information see, <a href=\"#!/api/Appverse.Media.MediaMetadata\" rel=\"Appverse.Media.MediaMetadata\" class=\"docClass\">MediaMetadata</a>.\n<br> @version 5.0\n<br> It returns a {<a href=\"#!/api/Appverse.Media.MediaMetadata\" rel=\"Appverse.Media.MediaMetadata\" class=\"docClass\">Appverse.Media.MediaMetadata</a>} object with the media file metadata.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filePath</span> : String<div class='sub-desc'><p>The media file path.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/error.png\"/> | windows <img src=\"resources/images/error.png\"/> | emulator <img src=\"resources/images/check.png\"/> *mock data</pre>\n\n</div></li></ul></div></div></div><div id='method-GetSnapshot' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Media'>Appverse.Media</span><br/><a href='source/appverse.html#Appverse-Media-method-GetSnapshot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Media-method-GetSnapshot' class='name expandable'>GetSnapshot</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Opens user interface view to select a picture from the device photos album.For further information see, MediaMetadata. ...</div><div class='long'><p>Opens user interface view to select a picture from the device photos album.<br/>For further information see, <a href=\"#!/api/Appverse.Media.MediaMetadata\" rel=\"Appverse.Media.MediaMetadata\" class=\"docClass\">MediaMetadata</a>.\nData is provided via the proper event handled by the \"<a href=\"#!/api/Appverse.Media-event-onFinishedPickingImage\" rel=\"Appverse.Media-event-onFinishedPickingImage\" class=\"docClass\">Appverse.Media.onFinishedPickingImage</a>\" method; please, override to handle the event.\n<br> @version 5.0</p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/warning.png\"/> * in progess | windows <img src=\"resources/images/error.png\"/> | emulator <img src=\"resources/images/warning.png\"/> *in progress</pre>\n\n</div></div></div><div id='method-GetState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Media'>Appverse.Media</span><br/><a href='source/appverse.html#Appverse-Media-method-GetState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Media-method-GetState' class='name expandable'>GetState</a>( <span class='pre'>callbackFunctionName, callbackId</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets Audio/Movie player state. ...</div><div class='long'><p>Gets Audio/Movie player state.\n<br> @version 5.0</p>\n\n<blockquote><p>br> It returns an {int} with the current player state.\n<br/>Possible values of media states:\n<a href=\"#!/api/Appverse.Media-property-MEDIATSTATE_ERROR\" rel=\"Appverse.Media-property-MEDIATSTATE_ERROR\" class=\"docClass\">MEDIATSTATE_ERROR</a>,\n<a href=\"#!/api/Appverse.Media-property-MEDIATSTATE_PAUSED\" rel=\"Appverse.Media-property-MEDIATSTATE_PAUSED\" class=\"docClass\">MEDIATSTATE_PAUSED</a>,\n<a href=\"#!/api/Appverse.Media-property-MEDIATSTATE_PLAYING\" rel=\"Appverse.Media-property-MEDIATSTATE_PLAYING\" class=\"docClass\">MEDIATSTATE_PLAYING</a>,\n<a href=\"#!/api/Appverse.Media-property-MEDIATSTATE_RECORDING\" rel=\"Appverse.Media-property-MEDIATSTATE_RECORDING\" class=\"docClass\">MEDIATSTATE_RECORDING</a>,\n&amp; <a href=\"#!/api/Appverse.Media-property-MEDIATSTATE_STOPPED\" rel=\"Appverse.Media-property-MEDIATSTATE_STOPPED\" class=\"docClass\">MEDIATSTATE_STOPPED</a></p></blockquote>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> | emulator <img src=\"resources/images/check.png\"/> *mock data</pre>\n\n</div></li></ul></div></div></div><div id='method-Pause' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Media'>Appverse.Media</span><br/><a href='source/appverse.html#Appverse-Media-method-Pause' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Media-method-Pause' class='name expandable'>Pause</a>( <span class='pre'>callbackFunctionName, callbackId</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Pauses the current media playing. ...</div><div class='long'><p>Pauses the current media playing.\n<br> @version 5.0\n<br> It returns a {Boolean} with a value of True if media file could be stopped.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> | emulator <img src=\"resources/images/check.png\"/> *mock data</pre>\n\n</div></li></ul></div></div></div><div id='method-Play' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Media'>Appverse.Media</span><br/><a href='source/appverse.html#Appverse-Media-method-Play' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Media-method-Play' class='name expandable'>Play</a>( <span class='pre'>filePath, callbackFunctionName, callbackId</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Starts playing media. ...</div><div class='long'><p>Starts playing media.\n<br> @version 5.0\n<br> It returns a {Boolean} with a value of True if media file could be started.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filePath</span> : String<div class='sub-desc'><p>The media file path.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> | emulator <img src=\"resources/images/check.png\"/> *mock data</pre>\n\n</div></li></ul></div></div></div><div id='method-PlayStream' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Media'>Appverse.Media</span><br/><a href='source/appverse.html#Appverse-Media-method-PlayStream' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Media-method-PlayStream' class='name expandable'>PlayStream</a>( <span class='pre'>url, callbackFunctionName, callbackId</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Starts playing media. ...</div><div class='long'><p>Starts playing media.\n<br> @version 5.0\n<br> It returns a {Boolean} with a value of True if media file could be started.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The media remote URL.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/warning.png\"/> * bug fixing | windows <img src=\"resources/images/error.png\"/> | emulator <img src=\"resources/images/check.png\"/> *mock data</pre>\n\n</div></li></ul></div></div></div><div id='method-SeekPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Media'>Appverse.Media</span><br/><a href='source/appverse.html#Appverse-Media-method-SeekPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Media-method-SeekPosition' class='name expandable'>SeekPosition</a>( <span class='pre'>position, callbackFunctionName, callbackId</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Moves player to the given position in the media. ...</div><div class='long'><p>Moves player to the given position in the media.\n<br> @version 5.0\n<br> It returns a {Boolean} with a value of True if player position could be moved.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>position</span> : long<div class='sub-desc'><p>Index position.</p>\n</div></li><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> | emulator <img src=\"resources/images/check.png\"/> *mock data</pre>\n\n</div></li></ul></div></div></div><div id='method-Stop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Media'>Appverse.Media</span><br/><a href='source/appverse.html#Appverse-Media-method-Stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Media-method-Stop' class='name expandable'>Stop</a>( <span class='pre'>callbackFunctionName, callbackId</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Stops the current media playing. ...</div><div class='long'><p>Stops the current media playing.\n<br> @version 5.0\n<br> It returns a {Boolean} with a value of True if media file could be stopped.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackFunctionName</span> : String<div class='sub-desc'><p>The name of the callback function to be called when the method response is handled. Arguments of this function are the invocation result object and the invocation callbackId. Defaults to \"callback\".</p>\n</div></li><li><span class='pre'>callbackId</span> : String<div class='sub-desc'><p>The id to uniquely identify different callbacks with the same callback function. Defaults to \"callbackid\".</p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> | emulator <img src=\"resources/images/check.png\"/> *mock data</pre>\n\n</div></li></ul></div></div></div><div id='method-TakeSnapshot' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Media'>Appverse.Media</span><br/><a href='source/appverse.html#Appverse-Media-method-TakeSnapshot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Media-method-TakeSnapshot' class='name expandable'>TakeSnapshot</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Opens user interface view to take a picture using the device camera.For further information see, MediaMetadata. ...</div><div class='long'><p>Opens user interface view to take a picture using the device camera.<br/>For further information see, <a href=\"#!/api/Appverse.Media.MediaMetadata\" rel=\"Appverse.Media.MediaMetadata\" class=\"docClass\">MediaMetadata</a>.\nData is provided via the proper event handled by the \"<a href=\"#!/api/Appverse.Media-event-onFinishedPickingImage\" rel=\"Appverse.Media-event-onFinishedPickingImage\" class=\"docClass\">Appverse.Media.onFinishedPickingImage</a>\" method; please, override to handle the event.\n<br> @version 5.0</p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/warning.png\"/> * in progess | windows <img src=\"resources/images/error.png\"/> | emulator <img src=\"resources/images/warning.png\"/> *in progress</pre>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-onFinishedPickingImage' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Appverse.Media'>Appverse.Media</span><br/><a href='source/appverse.html#Appverse-Media-event-onFinishedPickingImage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Appverse.Media-event-onFinishedPickingImage' class='name expandable'>onFinishedPickingImage</a>( <span class='pre'>mediaMetadata</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when an image have been picked, either from the Photos library (after calling the GetSnapshot),\nor from the Cam...</div><div class='long'>            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/application_listeners'><img src='guides/application_listeners/icon.png' alt=''> Subscribing to Appverse Listeners</a></p>\n            </div>\n<p>Fired when an image have been picked, either from the Photos library (after calling the GetSnapshot),\nor from the Camera (after calling the TakeSnapshot)\n<br>Method to be overrided by JS applications, to handle this event.\n<br> @version 3.1</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mediaMetadata</span> : <a href=\"#!/api/Appverse.Media.MediaMetadata\" rel=\"Appverse.Media.MediaMetadata\" class=\"docClass\">Appverse.Media.MediaMetadata</a><div class='sub-desc'><p>The metadata for the image picked.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"singleton":true}});