Ext.data.JsonP.application_listeners({"guide":"<h1>Subscribing to Appverse Listeners</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/application_listeners-section-1'>What is an Appverse App Listener?</a></li>\n<li><a href='#!/guide/application_listeners-section-2'>How to subscribe to a listener</a></li>\n</ol>\n</div>\n\n<h2 id='application_listeners-section-1'>What is an Appverse App Listener?</h2>\n\n<p>Appverse provides some <strong>javascript listeners</strong> to make you application aware (from the javascript code) that certain system events have happened.</p>\n\n<p>Your application could then implement specific behaviour when that events occur. For example, when the application comes to foreground application could check any local resources if available and react in consequence.</p>\n\n<p>The following are the current Appverse app listeners available on the platform:</p>\n\n<h3>General Application Events</h3>\n\n<ul>\n<li><strong><a href=\"#!/api/Appverse-method-foregroundApplicationListener\" rel=\"Appverse-method-foregroundApplicationListener\" class=\"docClass\">Appverse.foregroundApplicationListener</a></strong>: Lets your javascript code know that your app has moved out of the background state and back into the foreground, but that it is not yet active.</li>\n<li><strong><a href=\"#!/api/Appverse-method-backgroundApplicationListener\" rel=\"Appverse-method-backgroundApplicationListener\" class=\"docClass\">Appverse.backgroundApplicationListener</a></strong>: Lets your javascript code know that your app is now running in the background and may be suspended at any time.</li>\n<li><strong><a href=\"#!/api/Appverse-method-backButtonListener\" rel=\"Appverse-method-backButtonListener\" class=\"docClass\">Appverse.backButtonListener</a></strong> (only available in Android): Lets your app know that the user has pressed the \"physical\" android back button.</li>\n<li><strong><a href=\"#!/api/Appverse-method-OnExternallyLaunched\" rel=\"Appverse-method-OnExternallyLaunched\" class=\"docClass\">Appverse.OnExternallyLaunched</a></strong>: Lets your app know that it has been started from another app or scheme URI (not launched by the OS spring board); with some specific parameters.</li>\n</ul>\n\n\n<h3>Remote Notification Events</h3>\n\n<ul>\n<li><strong><a href=\"#!/api/Appverse-method-OnRegisterForRemoteNotificationsSuccess\" rel=\"Appverse-method-OnRegisterForRemoteNotificationsSuccess\" class=\"docClass\">Appverse.OnRegisterForRemoteNotificationsSuccess</a></strong>: Lets your app get notified when the remote notifications registration process has been completed with success.</li>\n<li><strong><a href=\"#!/api/Appverse-method-OnRegisterForRemoteNotificationsFailure\" rel=\"Appverse-method-OnRegisterForRemoteNotificationsFailure\" class=\"docClass\">Appverse.OnRegisterForRemoteNotificationsFailure</a></strong>: Lets your app get notified when the remote notifications registration process has been failed.</li>\n<li><strong><a href=\"#!/api/Appverse-method-OnRemoteNotificationReceived\" rel=\"Appverse-method-OnRemoteNotificationReceived\" class=\"docClass\">Appverse.OnRemoteNotificationReceived</a></strong>: Lets your app get notified when the a remote notification has arrived (while application is running).</li>\n<li><strong><a href=\"#!/api/Appverse-method-OnUnRegisterForRemoteNotificationsSuccess\" rel=\"Appverse-method-OnUnRegisterForRemoteNotificationsSuccess\" class=\"docClass\">Appverse.OnUnRegisterForRemoteNotificationsSuccess</a></strong>: only available in Android): Lets your app get notified when the unregistration process (for receiving remote notifications) has been completed with success. When application is not running, the remote notification is handled by the system, and when the user clicks on the notification alert, the system wakes up the application and executes this event listener.</li>\n</ul>\n\n\n<h3>Local Notification Events</h3>\n\n<ul>\n<li><strong><a href=\"#!/api/Appverse-method-OnLocalNotificationReceived\" rel=\"Appverse-method-OnLocalNotificationReceived\" class=\"docClass\">Appverse.OnLocalNotificationReceived</a></strong>: Lets your app get notified when the a local notification has arrived (while application is running). When application is not running, the local notification is handled by the system, and when the user clicks on the notification alert, the system wakes up the application and exceutes this event listener.</li>\n</ul>\n\n\n<h3>Security Events</h3>\n\n<ul>\n<li><strong><a href=\"#!/api/Appverse-method-OnKeyValuePairsFound\" rel=\"Appverse-method-OnKeyValuePairsFound\" class=\"docClass\">Appverse.OnKeyValuePairsFound</a></strong>: Lets your app get notified when some credentials have been found on the secured shared storage.</li>\n<li><strong><a href=\"#!/api/Appverse-method-OnKeyValuePairsStoreCompleted\" rel=\"Appverse-method-OnKeyValuePairsStoreCompleted\" class=\"docClass\">Appverse.OnKeyValuePairsStoreCompleted</a></strong>: Lets your app get notified when the process to store some key-value pairs (credentials) has been completed. The listener provides information about the successful and failed stored pairs.</li>\n<li><strong><a href=\"#!/api/Appverse-method-OnKeyValuePairsRemoveCompleted\" rel=\"Appverse-method-OnKeyValuePairsRemoveCompleted\" class=\"docClass\">Appverse.OnKeyValuePairsRemoveCompleted</a></strong>: Lets your app get notified when the process to delete some key-value pairs (credentials) has been completed. The listener provides information about the successful and failed deleted pairs.</li>\n</ul>\n\n\n<h3>Media Events</h3>\n\n<ul>\n<li><strong><a href=\"#!/api/Appverse.Media-event-onFinishedPickingImage\" rel=\"Appverse.Media-event-onFinishedPickingImage\" class=\"docClass\">Appverse.Media.onFinishedPickingImage</a></strong>: Lets your app be aware that the process of picking an image (from the album or using the camera) has finished. This listeners provides information about the just picked picture.</li>\n<li><strong><a href=\"#!/api/Appverse.Media-event-onQRCodeDetected\" rel=\"Appverse.Media-event-onQRCodeDetected\" class=\"docClass\">Appverse.Media.onQRCodeDetected</a></strong>: Lets your app to be aware that a QR Code has been detected and analysed; the code data is returned to the listener to be handled.</li>\n</ul>\n\n\n<h3>Application Modules Loader Events</h3>\n\n<ul>\n<li><strong><a href=\"#!/api/Appverse.AppLoader-event-onUpdateModulesFinished\" rel=\"Appverse.AppLoader-event-onUpdateModulesFinished\" class=\"docClass\">Appverse.AppLoader.onUpdateModulesFinished</a></strong>: Lets your app to know that the requested modules update has been completed. The listener provides information about the successful and failed updated modules.</li>\n<li><strong><a href=\"#!/api/Appverse.AppLoader-event-onDeleteModulesFinished\" rel=\"Appverse.AppLoader-event-onDeleteModulesFinished\" class=\"docClass\">Appverse.AppLoader.onDeleteModulesFinished</a></strong>: Lets your app to know that the requested modules deletion has been completed. The listener provides information about the successful and failed deleted modules.</li>\n</ul>\n\n\n<h3>Beacons Events</h3>\n\n<ul>\n<li><strong><a href=\"#!/api/Appverse.Beacon-event-OnEntered\" rel=\"Appverse.Beacon-event-OnEntered\" class=\"docClass\">Appverse.Beacon.OnEntered</a></strong>: Lets your app be aware that a previously detected beacon is found again.</li>\n<li><strong><a href=\"#!/api/Appverse.Beacon-event-OnExited\" rel=\"Appverse.Beacon-event-OnExited\" class=\"docClass\">Appverse.Beacon.OnExited</a></strong>: Lets your app to be aware that a previously detected beacon is not found.</li>\n<li><strong><a href=\"#!/api/Appverse.Beacon-event-OnDiscover\" rel=\"Appverse.Beacon-event-OnDiscover\" class=\"docClass\">Appverse.Beacon.OnDiscover</a></strong>: Lets your app to be aware that a new beacon is discovered.</li>\n<li><strong><a href=\"#!/api/Appverse.Beacon-event-OnUpdateProximity\" rel=\"Appverse.Beacon-event-OnUpdateProximity\" class=\"docClass\">Appverse.Beacon.OnUpdateProximity</a></strong>: Lets your app to be aware that the distance of a known beacon has changed.</li>\n</ul>\n\n\n<h2 id='application_listeners-section-2'>How to subscribe to a listener</h2>\n\n<p>In order to subscribe your app to a specific listener, you must <strong>override</strong> the corresponding <strong>Appverse listener method function</strong> in your application javascript code.</p>\n\n<p>The following are the rules to be applied when implementing that \"listeners overriding\".</p>\n\n<h3>Overriding Rules</h3>\n\n<ol>\n<li><p>The file that contains the <strong>overridden function</strong> must be located <strong>after</strong> the platform javascript library: <strong>appverse.js</strong>.</p>\n\n<p> Be careful where you place your &lt;script src=\"xxx.js\"&gt;&lt;/script&gt; javascript links.</p>\n\n<p> The javascript imports order inside you main HTML should be:</p>\n\n<pre><code> &lt;script src=\"appverse.js\"&gt;&lt;/script&gt;\n ...\n &lt;script src=\"myscripts-with-overrided-listeners.js\"&gt;&lt;/script&gt;\n</code></pre></li>\n<li><p>The variables used inside that overridden function must be <strong>global</strong>.</p>\n\n<p> The listeners are being executed in a <strong>global scope</strong> from the native side. So, all the variables and methods used inside the overridden listeners should be also global accessed (recursively).</p></li>\n</ol>\n\n\n<h3>Special Rules</h3>\n\n<ol>\n<li><p>Inside the <strong><a href=\"#!/api/Appverse-method-foregroundApplicationListener\" rel=\"Appverse-method-foregroundApplicationListener\" class=\"docClass\">Appverse.foregroundApplicationListener</a></strong> overridden function, you could not invoke immediately any Appverse function (because the app, and so the Appverse internal server, is not yet active).</p>\n\n<p> So, if it is needed to call an Appverse function API inside it, please execute it inside a <strong>javascipt timeout</strong> (just some milliseconds).</p>\n\n<p> See the following example:</p>\n\n<pre><code> <a href=\"#!/api/Appverse-method-foregroundApplicationListener\" rel=\"Appverse-method-foregroundApplicationListener\" class=\"docClass\">Appverse.foregroundApplicationListener</a> = function() {\n     setTimeout(function() {\n         <a href=\"#!/api/Appverse.Notification-method-StopNotifyLoading\" rel=\"Appverse.Notification-method-StopNotifyLoading\" class=\"docClass\">Appverse.Notification.StopNotifyLoading</a>(); // example of Appverse API call\n     }, 500);\n };\n</code></pre></li>\n<li><p>Inside the <strong><a href=\"#!/api/Appverse-method-backgroundApplicationListener\" rel=\"Appverse-method-backgroundApplicationListener\" class=\"docClass\">Appverse.backgroundApplicationListener</a></strong> overridden function, you could <strong>not invoke</strong> any Appverse function; because the app is not active and nobody will attend those calls.</p></li>\n</ol>\n\n","title":"Subscribing to Appverse Listeners"});