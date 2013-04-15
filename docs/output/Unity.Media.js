Ext.data.JsonP.Unity_Media({"tagname":"class","name":"Unity.Media","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Unity.Media","members":{"cfg":[],"property":[{"name":"MEDIATSTATE_ERROR","tagname":"property","owner":"Unity.Media","meta":{},"id":"property-MEDIATSTATE_ERROR"},{"name":"MEDIATSTATE_PAUSED","tagname":"property","owner":"Unity.Media","meta":{},"id":"property-MEDIATSTATE_PAUSED"},{"name":"MEDIATSTATE_PLAYING","tagname":"property","owner":"Unity.Media","meta":{},"id":"property-MEDIATSTATE_PLAYING"},{"name":"MEDIATSTATE_RECORDING","tagname":"property","owner":"Unity.Media","meta":{},"id":"property-MEDIATSTATE_RECORDING"},{"name":"MEDIATSTATE_STOPPED","tagname":"property","owner":"Unity.Media","meta":{},"id":"property-MEDIATSTATE_STOPPED"},{"name":"MEDIATYPE_AUDIO","tagname":"property","owner":"Unity.Media","meta":{},"id":"property-MEDIATYPE_AUDIO"},{"name":"MEDIATYPE_NOT_SUPPORTED","tagname":"property","owner":"Unity.Media","meta":{},"id":"property-MEDIATYPE_NOT_SUPPORTED"},{"name":"MEDIATYPE_PHOTO","tagname":"property","owner":"Unity.Media","meta":{},"id":"property-MEDIATYPE_PHOTO"},{"name":"MEDIATYPE_VIDEO","tagname":"property","owner":"Unity.Media","meta":{},"id":"property-MEDIATYPE_VIDEO"},{"name":"serviceName","tagname":"property","owner":"Unity.Media","meta":{},"id":"property-serviceName"}],"method":[{"name":"constructor","tagname":"method","owner":"Unity.Media","meta":{},"id":"method-constructor"},{"name":"GetCurrentMedia","tagname":"method","owner":"Unity.Media","meta":{},"id":"method-GetCurrentMedia"},{"name":"GetMetadata","tagname":"method","owner":"Unity.Media","meta":{},"id":"method-GetMetadata"},{"name":"GetSnapshot","tagname":"method","owner":"Unity.Media","meta":{},"id":"method-GetSnapshot"},{"name":"GetState","tagname":"method","owner":"Unity.Media","meta":{},"id":"method-GetState"},{"name":"Pause","tagname":"method","owner":"Unity.Media","meta":{},"id":"method-Pause"},{"name":"Play","tagname":"method","owner":"Unity.Media","meta":{},"id":"method-Play"},{"name":"PlayStream","tagname":"method","owner":"Unity.Media","meta":{},"id":"method-PlayStream"},{"name":"SeekPosition","tagname":"method","owner":"Unity.Media","meta":{},"id":"method-SeekPosition"},{"name":"Stop","tagname":"method","owner":"Unity.Media","meta":{},"id":"method-Stop"},{"name":"TakeSnapshot","tagname":"method","owner":"Unity.Media","meta":{},"id":"method-TakeSnapshot"}],"event":[{"name":"onFinishedPickingImage","tagname":"event","owner":"Unity.Media","meta":{},"id":"event-onFinishedPickingImage"}],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":3026,"files":[{"filename":"unity.js","href":"unity.html#Unity-Media"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/unity.html#Unity-Media' target='_blank'>unity.js</a></div></pre><div class='doc-contents'><p>Singleton class field to access Media interface.</p>\n\n<br>This interface provides access to device's audio/movie player and camera applications.<br>\n\n\n<br> @version 1.0\n\n\n<pre>Usage: <a href=\"#!/api/Unity.Media\" rel=\"Unity.Media\" class=\"docClass\">Unity.Media</a>.&lt;metodName&gt;([params]).<br>Example: <a href=\"#!/api/Unity.Media-method-Play\" rel=\"Unity.Media-method-Play\" class=\"docClass\">Unity.Media.Play</a>(filePath).</pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-MEDIATSTATE_ERROR' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media'>Unity.Media</span><br/><a href='source/unity.html#Unity-Media-property-MEDIATSTATE_ERROR' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media-property-MEDIATSTATE_ERROR' class='name expandable'>MEDIATSTATE_ERROR</a><span> : int</span></div><div class='description'><div class='short'>Error Media State. ...</div><div class='long'><p>Error Media State.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-MEDIATSTATE_PAUSED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media'>Unity.Media</span><br/><a href='source/unity.html#Unity-Media-property-MEDIATSTATE_PAUSED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media-property-MEDIATSTATE_PAUSED' class='name expandable'>MEDIATSTATE_PAUSED</a><span> : int</span></div><div class='description'><div class='short'>Paused Media State. ...</div><div class='long'><p>Paused Media State.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-MEDIATSTATE_PLAYING' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media'>Unity.Media</span><br/><a href='source/unity.html#Unity-Media-property-MEDIATSTATE_PLAYING' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media-property-MEDIATSTATE_PLAYING' class='name expandable'>MEDIATSTATE_PLAYING</a><span> : int</span></div><div class='description'><div class='short'>Playing Media State. ...</div><div class='long'><p>Playing Media State.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-MEDIATSTATE_RECORDING' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media'>Unity.Media</span><br/><a href='source/unity.html#Unity-Media-property-MEDIATSTATE_RECORDING' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media-property-MEDIATSTATE_RECORDING' class='name expandable'>MEDIATSTATE_RECORDING</a><span> : int</span></div><div class='description'><div class='short'>Recording Media State. ...</div><div class='long'><p>Recording Media State.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-MEDIATSTATE_STOPPED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media'>Unity.Media</span><br/><a href='source/unity.html#Unity-Media-property-MEDIATSTATE_STOPPED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media-property-MEDIATSTATE_STOPPED' class='name expandable'>MEDIATSTATE_STOPPED</a><span> : int</span></div><div class='description'><div class='short'>Stopped Media State. ...</div><div class='long'><p>Stopped Media State.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-MEDIATYPE_AUDIO' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media'>Unity.Media</span><br/><a href='source/unity.html#Unity-Media-property-MEDIATYPE_AUDIO' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media-property-MEDIATYPE_AUDIO' class='name expandable'>MEDIATYPE_AUDIO</a><span> : int</span></div><div class='description'><div class='short'>Audio Media Type. ...</div><div class='long'><p>Audio Media Type.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-MEDIATYPE_NOT_SUPPORTED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media'>Unity.Media</span><br/><a href='source/unity.html#Unity-Media-property-MEDIATYPE_NOT_SUPPORTED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media-property-MEDIATYPE_NOT_SUPPORTED' class='name expandable'>MEDIATYPE_NOT_SUPPORTED</a><span> : int</span></div><div class='description'><div class='short'>Not Supported Media Type. ...</div><div class='long'><p>Not Supported Media Type.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-MEDIATYPE_PHOTO' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media'>Unity.Media</span><br/><a href='source/unity.html#Unity-Media-property-MEDIATYPE_PHOTO' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media-property-MEDIATYPE_PHOTO' class='name expandable'>MEDIATYPE_PHOTO</a><span> : int</span></div><div class='description'><div class='short'>Photo Media Type. ...</div><div class='long'><p>Photo Media Type.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-MEDIATYPE_VIDEO' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media'>Unity.Media</span><br/><a href='source/unity.html#Unity-Media-property-MEDIATYPE_VIDEO' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media-property-MEDIATYPE_VIDEO' class='name expandable'>MEDIATYPE_VIDEO</a><span> : int</span></div><div class='description'><div class='short'>Video Media Type. ...</div><div class='long'><p>Video Media Type.</p>\n\n<br> @version 1.0\n\n</div></div></div><div id='property-serviceName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media'>Unity.Media</span><br/><a href='source/unity.html#Unity-Media-property-serviceName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media-property-serviceName' class='name expandable'>serviceName</a><span> : String</span></div><div class='description'><div class='short'>Media service name (as configured on Platform Service Locator). ...</div><div class='long'><p>Media service name (as configured on Platform Service Locator).</p>\n\n<br> @version 1.0\n\n<p>Defaults to: <code>&quot;media&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media'>Unity.Media</span><br/><a href='source/unity.html#Unity-Media-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Unity.Media-method-constructor' class='name expandable'>Unity.Media</a>( <span class='pre'></span> ) : <a href=\"#!/api/Unity.Media\" rel=\"Unity.Media\" class=\"docClass\">Unity.Media</a></div><div class='description'><div class='short'>Constructs a new Media interface. ...</div><div class='long'><p>Constructs a new Media interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Unity.Media\" rel=\"Unity.Media\" class=\"docClass\">Unity.Media</a></span><div class='sub-desc'><p>A new Media interface.</p>\n</div></li></ul></div></div></div><div id='method-GetCurrentMedia' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media'>Unity.Media</span><br/><a href='source/unity.html#Unity-Media-method-GetCurrentMedia' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media-method-GetCurrentMedia' class='name expandable'>GetCurrentMedia</a>( <span class='pre'></span> ) : <a href=\"#!/api/Unity.Media.MediaMetadata\" rel=\"Unity.Media.MediaMetadata\" class=\"docClass\">Unity.Media.MediaMetadata</a></div><div class='description'><div class='short'>Gets the currently playing media file metadata.For further information see, MediaMetadata. ...</div><div class='long'><p>Gets the currently playing media file metadata.<br/>For further information see, <a href=\"#!/api/Unity.Media.MediaMetadata\" rel=\"Unity.Media.MediaMetadata\" class=\"docClass\">MediaMetadata</a>.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/information.png\"/> *mock data | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Unity.Media.MediaMetadata\" rel=\"Unity.Media.MediaMetadata\" class=\"docClass\">Unity.Media.MediaMetadata</a></span><div class='sub-desc'><p>Current media file metadata.</p>\n</div></li></ul></div></div></div><div id='method-GetMetadata' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media'>Unity.Media</span><br/><a href='source/unity.html#Unity-Media-method-GetMetadata' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media-method-GetMetadata' class='name expandable'>GetMetadata</a>( <span class='pre'>String filePath</span> ) : <a href=\"#!/api/Unity.Media.MediaMetadata\" rel=\"Unity.Media.MediaMetadata\" class=\"docClass\">Unity.Media.MediaMetadata</a></div><div class='description'><div class='short'>Gets Media metadata.For further information see, MediaMetadata. ...</div><div class='long'><p>Gets Media metadata.<br/>For further information see, <a href=\"#!/api/Unity.Media.MediaMetadata\" rel=\"Unity.Media.MediaMetadata\" class=\"docClass\">MediaMetadata</a>.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/error.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filePath</span> : String<div class='sub-desc'><p>The media file path.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Unity.Media.MediaMetadata\" rel=\"Unity.Media.MediaMetadata\" class=\"docClass\">Unity.Media.MediaMetadata</a></span><div class='sub-desc'><p>Media file metadata.</p>\n</div></li></ul></div></div></div><div id='method-GetSnapshot' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media'>Unity.Media</span><br/><a href='source/unity.html#Unity-Media-method-GetSnapshot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media-method-GetSnapshot' class='name expandable'>GetSnapshot</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Opens user interface view to select a picture from the device photos album.For further information see, MediaMetadata. ...</div><div class='long'><p>Opens user interface view to select a picture from the device photos album.<br/>For further information see, <a href=\"#!/api/Unity.Media.MediaMetadata\" rel=\"Unity.Media.MediaMetadata\" class=\"docClass\">MediaMetadata</a>.\nData is provided via the proper event handled by the \"<a href=\"#!/api/Unity.Media-event-onFinishedPickingImage\" rel=\"Unity.Media-event-onFinishedPickingImage\" class=\"docClass\">Unity.Media.onFinishedPickingImage</a>\" method; please, override to handle the event.\nReturned value is \"null\" on synchronous call.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/warning.png\"/> * in progess | windows <img src=\"resources/images/error.png\"/></pre>\n\n</div></div></div><div id='method-GetState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media'>Unity.Media</span><br/><a href='source/unity.html#Unity-Media-method-GetState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media-method-GetState' class='name expandable'>GetState</a>( <span class='pre'></span> ) : int</div><div class='description'><div class='short'>Gets Audio/Movie player state. ...</div><div class='long'><p>Gets Audio/Movie player state.</p>\n\n<br> @version 1.0\n\n\n<br/>Possible values of media states: \n\n\n<p><a href=\"#!/api/Unity.Media-property-MEDIATSTATE_ERROR\" rel=\"Unity.Media-property-MEDIATSTATE_ERROR\" class=\"docClass\">MEDIATSTATE_ERROR</a>,\n<a href=\"#!/api/Unity.Media-property-MEDIATSTATE_PAUSED\" rel=\"Unity.Media-property-MEDIATSTATE_PAUSED\" class=\"docClass\">MEDIATSTATE_PAUSED</a>,\n<a href=\"#!/api/Unity.Media-property-MEDIATSTATE_PLAYING\" rel=\"Unity.Media-property-MEDIATSTATE_PLAYING\" class=\"docClass\">MEDIATSTATE_PLAYING</a>,\n<a href=\"#!/api/Unity.Media-property-MEDIATSTATE_RECORDING\" rel=\"Unity.Media-property-MEDIATSTATE_RECORDING\" class=\"docClass\">MEDIATSTATE_RECORDING</a>,\n&amp; <a href=\"#!/api/Unity.Media-property-MEDIATSTATE_STOPPED\" rel=\"Unity.Media-property-MEDIATSTATE_STOPPED\" class=\"docClass\">MEDIATSTATE_STOPPED</a></p>\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>int</span><div class='sub-desc'><p>Current player state.</p>\n</div></li></ul></div></div></div><div id='method-Pause' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media'>Unity.Media</span><br/><a href='source/unity.html#Unity-Media-method-Pause' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media-method-Pause' class='name expandable'>Pause</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Pauses the current media playing. ...</div><div class='long'><p>Pauses the current media playing.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if media file could be stopped.</p>\n</div></li></ul></div></div></div><div id='method-Play' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media'>Unity.Media</span><br/><a href='source/unity.html#Unity-Media-method-Play' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media-method-Play' class='name expandable'>Play</a>( <span class='pre'>String filePath</span> ) : Boolean</div><div class='description'><div class='short'>Starts playing media. ...</div><div class='long'><p>Starts playing media.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filePath</span> : String<div class='sub-desc'><p>The media file path.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if media file could be started.</p>\n</div></li></ul></div></div></div><div id='method-PlayStream' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media'>Unity.Media</span><br/><a href='source/unity.html#Unity-Media-method-PlayStream' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media-method-PlayStream' class='name expandable'>PlayStream</a>( <span class='pre'>String url</span> ) : Boolean</div><div class='description'><div class='short'>Starts playing media. ...</div><div class='long'><p>Starts playing media.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/warning.png\"/> * bug fixing | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The media remote URL.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if media file could be started.</p>\n</div></li></ul></div></div></div><div id='method-SeekPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media'>Unity.Media</span><br/><a href='source/unity.html#Unity-Media-method-SeekPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media-method-SeekPosition' class='name expandable'>SeekPosition</a>( <span class='pre'>long position</span> ) : Boolean</div><div class='description'><div class='short'>Moves player to the given position in the media. ...</div><div class='long'><p>Moves player to the given position in the media.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>position</span> : long<div class='sub-desc'><p>Index position.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if player position could be moved.</p>\n</div></li></ul></div></div></div><div id='method-Stop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media'>Unity.Media</span><br/><a href='source/unity.html#Unity-Media-method-Stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media-method-Stop' class='name expandable'>Stop</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Stops the current media playing. ...</div><div class='long'><p>Stops the current media playing.</p>\n\n<br> @version 1.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/check.png\"/> | windows <img src=\"resources/images/error.png\"/> *mock data</pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if media file could be stopped.</p>\n</div></li></ul></div></div></div><div id='method-TakeSnapshot' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media'>Unity.Media</span><br/><a href='source/unity.html#Unity-Media-method-TakeSnapshot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media-method-TakeSnapshot' class='name expandable'>TakeSnapshot</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Opens user interface view to take a picture using the device camera.For further information see, MediaMetadata. ...</div><div class='long'><p>Opens user interface view to take a picture using the device camera.<br/>For further information see, <a href=\"#!/api/Unity.Media.MediaMetadata\" rel=\"Unity.Media.MediaMetadata\" class=\"docClass\">MediaMetadata</a>.\nData is provided via the proper event handled by the \"<a href=\"#!/api/Unity.Media-event-onFinishedPickingImage\" rel=\"Unity.Media-event-onFinishedPickingImage\" class=\"docClass\">Unity.Media.onFinishedPickingImage</a>\" method; please, override to handle the event.\nReturned value is \"null\" on synchronous call.</p>\n\n<br> @version 2.0 \n\n\n<pre> Available in: <br> iOS <img src=\"resources/images/check.png\"/> | android <img src=\"resources/images/warning.png\"/> * in progess | windows <img src=\"resources/images/error.png\"/></pre>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-onFinishedPickingImage' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Unity.Media'>Unity.Media</span><br/><a href='source/unity.html#Unity-Media-event-onFinishedPickingImage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Unity.Media-event-onFinishedPickingImage' class='name expandable'>onFinishedPickingImage</a>( <span class='pre'><a href=\"#!/api/Unity.Media.MediaMetadata\" rel=\"Unity.Media.MediaMetadata\" class=\"docClass\">Unity.Media.MediaMetadata</a> mediaMetadata</span> )</div><div class='description'><div class='short'>Fired when an image have been picked, either from the Photos library (after calling the GetSnapshot),\nor from the Cam...</div><div class='long'><p>Fired when an image have been picked, either from the Photos library (after calling the GetSnapshot),\nor from the Camera (after calling the TakeSnapshot)</p>\n\n<br>Method to be overrided by JS applications, to handle this event.\n\n\n<br> @version 3.1\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mediaMetadata</span> : <a href=\"#!/api/Unity.Media.MediaMetadata\" rel=\"Unity.Media.MediaMetadata\" class=\"docClass\">Unity.Media.MediaMetadata</a><div class='sub-desc'><p>The metadata for the image picked.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});