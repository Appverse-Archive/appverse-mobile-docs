Ext.data.JsonP.application_listeners({"guide":"<h1 id='application_listeners-section-subscribing-to-appverse-listeners'>Subscribing to Appverse Listeners</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ul>\n<li>1. <a href='#!/guide/application_listeners-section-what-is-an-appverse-app-listener%3F'>What is an Appverse App Listener?</a>\n <ul>\n<li>1.1. <a href='#!/guide/application_listeners-section-general-application-events'>General Application Events</a>\n </li>\n<li>1.2. <a href='#!/guide/application_listeners-section-remote-notification-events-%5Bmodule%5D'>Remote Notification Events [MODULE]</a>\n </li>\n<li>1.3. <a href='#!/guide/application_listeners-section-local-notification-events'>Local Notification Events</a>\n </li>\n<li>1.4. <a href='#!/guide/application_listeners-section-security-events'>Security Events</a>\n </li>\n<li>1.5. <a href='#!/guide/application_listeners-section-media-events'>Media Events</a>\n </li>\n<li>1.6. <a href='#!/guide/application_listeners-section-application-modules-loader-events'>Application Modules Loader Events</a>\n </li>\n<li>1.7. <a href='#!/guide/application_listeners-section-beacon-events-%5Bmodule%5D'>Beacon Events [MODULE]</a>\n </li>\n<li>1.8. <a href='#!/guide/application_listeners-section-pim-events'>PIM Events</a>\n </li>\n<li>1.9. <a href='#!/guide/application_listeners-section-network-events'>Network Events</a>\n </li>\n<li>1.10. <a href='#!/guide/application_listeners-section-permissions-events'>Permissions Events</a>\n </li>\n<li>1.11. <a href='#!/guide/application_listeners-section-scanner-events-%5Bmodule%5D'>Scanner Events [MODULE]</a>\n </li>\n</ul></li>\n<li>2. <a href='#!/guide/application_listeners-section-how-to-subscribe-to-a-listener'>How to subscribe to a listener</a>\n <ul>\n<li>2.1. <a href='#!/guide/application_listeners-section-overriding-rules'>Overriding Rules</a>\n </li>\n<li>2.2. <a href='#!/guide/application_listeners-section-special-rules'>Special Rules</a>\n </li>\n</ul></li>\n</ul></div>\n\n<h2 id='application_listeners-section-what-is-an-appverse-app-listener%3F'>What is an Appverse App Listener?</h2>\n\n<p>Appverse provides some <strong>javascript listeners</strong> to make you application aware (from the javascript code) that certain system events have happened.</p>\n\n<p>Your application could then implement specific behaviour when that events occur. For example, when the application comes to foreground application could check any local resources if available and react in consequence.</p>\n\n<p>The following are the current Appverse app listeners available on the platform:</p>\n\n<h3 id='application_listeners-section-general-application-events'>General Application Events</h3>\n\n<ul>\n<li><strong><a href=\"#!/api/Appverse-method-foregroundApplicationListener\" rel=\"Appverse-method-foregroundApplicationListener\" class=\"docClass\">Appverse.foregroundApplicationListener</a></strong>: Lets your javascript code know that your app has moved out of the background state and back into the foreground, but that it is not yet active.</li>\n<li><strong><a href=\"#!/api/Appverse-method-backgroundApplicationListener\" rel=\"Appverse-method-backgroundApplicationListener\" class=\"docClass\">Appverse.backgroundApplicationListener</a></strong>: Lets your javascript code know that your app is now running in the background and may be suspended at any time.</li>\n<li><strong><a href=\"#!/api/Appverse-method-backButtonListener\" rel=\"Appverse-method-backButtonListener\" class=\"docClass\">Appverse.backButtonListener</a></strong> (only available in Android): Lets your app know that the user has pressed the \"physical\" android back button.</li>\n<li><strong><a href=\"#!/api/Appverse-method-OnExternallyLaunched\" rel=\"Appverse-method-OnExternallyLaunched\" class=\"docClass\">Appverse.OnExternallyLaunched</a></strong>: Lets your app know that it has been started from another app or scheme URI (not launched by the OS spring board); with some specific parameters.</li>\n<li><strong><a href=\"#!/api/Appverse-method-UserDidTakeScreenshot\" rel=\"Appverse-method-UserDidTakeScreenshot\" class=\"docClass\">Appverse.UserDidTakeScreenshot</a></strong>: Lets your app know that the user has taken a screenshot while application is in foreground (maybe the app wants to warns the user for any security reasons).</li>\n</ul>\n\n\n<h3 id='application_listeners-section-remote-notification-events-%5Bmodule%5D'>Remote Notification Events [MODULE]</h3>\n\n<ul>\n<li><strong><a href=\"#!/api/Appverse.PushNotifications-event-OnRegisterForRemoteNotificationsSuccess\" rel=\"Appverse.PushNotifications-event-OnRegisterForRemoteNotificationsSuccess\" class=\"docClass\">Appverse.PushNotifications.OnRegisterForRemoteNotificationsSuccess</a></strong>: Lets your app get notified when the remote notifications registration process has been completed with success.</li>\n<li><strong><a href=\"#!/api/Appverse.PushNotifications-event-OnRegisterForRemoteNotificationsFailure\" rel=\"Appverse.PushNotifications-event-OnRegisterForRemoteNotificationsFailure\" class=\"docClass\">Appverse.PushNotifications.OnRegisterForRemoteNotificationsFailure</a></strong>: Lets your app get notified when the remote notifications registration process has been failed.</li>\n<li><strong><a href=\"#!/api/Appverse.PushNotifications-event-OnRemoteNotificationReceived\" rel=\"Appverse.PushNotifications-event-OnRemoteNotificationReceived\" class=\"docClass\">Appverse.PushNotifications.OnRemoteNotificationReceived</a></strong>: Lets your app get notified when the a remote notification has arrived (while application is running).</li>\n<li><strong><a href=\"#!/api/Appverse.PushNotifications-event-OnUnRegisterForRemoteNotificationsSuccess\" rel=\"Appverse.PushNotifications-event-OnUnRegisterForRemoteNotificationsSuccess\" class=\"docClass\">Appverse.PushNotifications.OnUnRegisterForRemoteNotificationsSuccess</a></strong>: only available in Android): Lets your app get notified when the unregistration process (for receiving remote notifications) has been completed with success. When application is not running, the remote notification is handled by the system, and when the user clicks on the notification alert, the system wakes up the application and executes this event listener.</li>\n</ul>\n\n\n<h3 id='application_listeners-section-local-notification-events'>Local Notification Events</h3>\n\n<ul>\n<li><strong><a href=\"#!/api/Appverse-method-OnLocalNotificationReceived\" rel=\"Appverse-method-OnLocalNotificationReceived\" class=\"docClass\">Appverse.OnLocalNotificationReceived</a></strong>: Lets your app get notified when the a local notification has arrived (while application is running). When application is not running, the local notification is handled by the system, and when the user clicks on the notification alert, the system wakes up the application and exceutes this event listener.</li>\n</ul>\n\n\n<h3 id='application_listeners-section-security-events'>Security Events</h3>\n\n<ul>\n<li><strong><a href=\"#!/api/Appverse.Security-event-OnKeyValuePairsFound\" rel=\"Appverse.Security-event-OnKeyValuePairsFound\" class=\"docClass\">Appverse.Security.OnKeyValuePairsFound</a></strong>: Lets your app get notified when some credentials have been found on the secured shared storage.</li>\n<li><strong><a href=\"#!/api/Appverse.Security-event-OnKeyValuePairsStoreCompleted\" rel=\"Appverse.Security-event-OnKeyValuePairsStoreCompleted\" class=\"docClass\">Appverse.Security.OnKeyValuePairsStoreCompleted</a></strong>: Lets your app get notified when the process to store some key-value pairs (credentials) has been completed. The listener provides information about the successful and failed stored pairs.</li>\n<li><strong><a href=\"#!/api/Appverse.Security-event-OnKeyValuePairsRemoveCompleted\" rel=\"Appverse.Security-event-OnKeyValuePairsRemoveCompleted\" class=\"docClass\">Appverse.Security.OnKeyValuePairsRemoveCompleted</a></strong>: Lets your app get notified when the process to delete some key-value pairs (credentials) has been completed. The listener provides information about the successful and failed deleted pairs.</li>\n</ul>\n\n\n<h3 id='application_listeners-section-media-events'>Media Events</h3>\n\n<ul>\n<li><strong><a href=\"#!/api/Appverse.Media-event-onFinishedPickingImage\" rel=\"Appverse.Media-event-onFinishedPickingImage\" class=\"docClass\">Appverse.Media.onFinishedPickingImage</a></strong>: Lets your app be aware that the process of picking an image (from the album or using the camera) has finished. This listeners provides information about the just picked picture.</li>\n</ul>\n\n\n<h3 id='application_listeners-section-application-modules-loader-events'>Application Modules Loader Events</h3>\n\n<ul>\n<li><strong><a href=\"#!/api/Appverse.AppLoader-event-onUpdateModulesFinished\" rel=\"Appverse.AppLoader-event-onUpdateModulesFinished\" class=\"docClass\">Appverse.AppLoader.onUpdateModulesFinished</a></strong>: Lets your app to know that the requested modules update has been completed. The listener provides information about the successful and failed updated modules.</li>\n<li><strong><a href=\"#!/api/Appverse.AppLoader-event-onDeleteModulesFinished\" rel=\"Appverse.AppLoader-event-onDeleteModulesFinished\" class=\"docClass\">Appverse.AppLoader.onDeleteModulesFinished</a></strong>: Lets your app to know that the requested modules deletion has been completed. The listener provides information about the successful and failed deleted modules.</li>\n</ul>\n\n\n<h3 id='application_listeners-section-beacon-events-%5Bmodule%5D'>Beacon Events [MODULE]</h3>\n\n<ul>\n<li><strong><a href=\"#!/api/Appverse.Beacon-event-OnEntered\" rel=\"Appverse.Beacon-event-OnEntered\" class=\"docClass\">Appverse.Beacon.OnEntered</a></strong>: Lets your app be aware that a previously detected beacon is found again.</li>\n<li><strong><a href=\"#!/api/Appverse.Beacon-event-OnExited\" rel=\"Appverse.Beacon-event-OnExited\" class=\"docClass\">Appverse.Beacon.OnExited</a></strong>: Lets your app to be aware that a previously detected beacon is not found.</li>\n<li><strong><a href=\"#!/api/Appverse.Beacon-event-OnDiscover\" rel=\"Appverse.Beacon-event-OnDiscover\" class=\"docClass\">Appverse.Beacon.OnDiscover</a></strong>: Lets your app to be aware that a new beacon is discovered.</li>\n<li><strong><a href=\"#!/api/Appverse.Beacon-event-OnUpdateProximity\" rel=\"Appverse.Beacon-event-OnUpdateProximity\" class=\"docClass\">Appverse.Beacon.OnUpdateProximity</a></strong>: Lets your app to be aware that the distance of a known beacon has changed.</li>\n<li><strong><a href=\"#!/api/Appverse.Beacon-event-onAccessToLocationDenied\" rel=\"Appverse.Beacon-event-onAccessToLocationDenied\" class=\"docClass\">Appverse.Beacon.onAccessToLocationDenied</a></strong>: Lets your app know the user has denied the location permision</li>\n</ul>\n\n\n<h3 id='application_listeners-section-pim-events'>PIM Events</h3>\n\n<ul>\n<li><strong><a href=\"#!/api/Appverse.Pim-event-onContactFound\" rel=\"Appverse.Pim-event-onContactFound\" class=\"docClass\">Appverse.Pim.onContactFound</a></strong>: Lets your app be aware of a contact detail search result</li>\n<li><strong><a href=\"#!/api/Appverse.Pim-event-onListCalendarEntriesEnd\" rel=\"Appverse.Pim-event-onListCalendarEntriesEnd\" class=\"docClass\">Appverse.Pim.onListCalendarEntriesEnd</a></strong>: Lets your app to be aware of calendar search result</li>\n<li><strong><a href=\"#!/api/Appverse.Pim-event-onListContactsEnd\" rel=\"Appverse.Pim-event-onListContactsEnd\" class=\"docClass\">Appverse.Pim.onListContactsEnd</a></strong>: Lets your app to be aware of a contact list search</li>\n<li><strong><a href=\"#!/api/Appverse.Pim-event-onAccessToContactsDenied\" rel=\"Appverse.Pim-event-onAccessToContactsDenied\" class=\"docClass\">Appverse.Pim.onAccessToContactsDenied</a></strong>: Lets your app to be aware then the user removes access to the contacts for this application</li>\n</ul>\n\n\n<h3 id='application_listeners-section-network-events'>Network Events</h3>\n\n<ul>\n<li><strong><a href=\"#!/api/Appverse.Net-event-onConnectivityChange\" rel=\"Appverse.Net-event-onConnectivityChange\" class=\"docClass\">Appverse.Net.onConnectivityChange</a></strong>: Lets your app be aware of a connectivity changes in the network</li>\n</ul>\n\n\n<h3 id='application_listeners-section-permissions-events'>Permissions Events</h3>\n\n<ul>\n<li><strong><a href=\"#!/api/Appverse.Pim-event-onAccessToCalendarDenied\" rel=\"Appverse.Pim-event-onAccessToCalendarDenied\" class=\"docClass\">Appverse.Pim.onAccessToCalendarDenied</a></strong>: Lets your app know the user denied the access to Calendar</li>\n<li><strong><a href=\"#!/api/Appverse.Pim-event-onAccessToContactsDenied\" rel=\"Appverse.Pim-event-onAccessToContactsDenied\" class=\"docClass\">Appverse.Pim.onAccessToContactsDenied</a></strong>: Lets your app know the user denied the access to Contact</li>\n<li><strong><a href=\"#!/api/Appverse.Media-event-onAccessToCameraDenied\" rel=\"Appverse.Media-event-onAccessToCameraDenied\" class=\"docClass\">Appverse.Media.onAccessToCameraDenied</a></strong>: Lets your app know the user denied the access to Camera</li>\n<li><strong><a href=\"#!/api/Appverse.Media-event-onAccessToExternalStorageDenied\" rel=\"Appverse.Media-event-onAccessToExternalStorageDenied\" class=\"docClass\">Appverse.Media.onAccessToExternalStorageDenied</a></strong>: Lets your app know the user denied the access to External Storage</li>\n<li><strong><a href=\"#!/api/Appverse.Geo-event-onAccessToLocationDenied\" rel=\"Appverse.Geo-event-onAccessToLocationDenied\" class=\"docClass\">Appverse.Geo.onAccessToLocationDenied</a></strong>: Lets your app know the user denied the access to Location</li>\n<li><strong><a href=\"#!/api/Appverse.Telephony-event-onAccessToPhoneDenied\" rel=\"Appverse.Telephony-event-onAccessToPhoneDenied\" class=\"docClass\">Appverse.Telephony.onAccessToPhoneDenied</a></strong>: Lets your app know the user denied the access to Phone</li>\n<li><strong><a href=\"#!/api/Appverse.Messaging-event-onAccessToSMSDenied\" rel=\"Appverse.Messaging-event-onAccessToSMSDenied\" class=\"docClass\">Appverse.Messaging.onAccessToSMSDenied</a></strong>: Lets your app know the user denied the access to SMS</li>\n<li><strong><a href=\"#!/api/Appverse.Messaging-event-onAccessToExternalStorageDenied\" rel=\"Appverse.Messaging-event-onAccessToExternalStorageDenied\" class=\"docClass\">Appverse.Messaging.onAccessToExternalStorageDenied</a></strong>: Lets your app know the user denied the access to External Storage</li>\n</ul>\n\n\n<h3 id='application_listeners-section-scanner-events-%5Bmodule%5D'>Scanner Events [MODULE]</h3>\n\n<ul>\n<li><strong><a href=\"#!/api/Appverse.Scanner-event-onAccessToCameraDenied\" rel=\"Appverse.Scanner-event-onAccessToCameraDenied\" class=\"docClass\">Appverse.Scanner.onAccessToCameraDenied</a></strong>: Lets your app know the user has denied the camera permision (available in just in Android)</li>\n<li><strong><a href=\"#!/api/Appverse.Scanner-event-onGeneratedQR\" rel=\"Appverse.Scanner-event-onGeneratedQR\" class=\"docClass\">Appverse.Scanner.onGeneratedQR</a></strong> [MODULE]: Lets your app to be aware that a QR Code has been generated; the code data is returned to the listener to be handled.</li>\n<li><strong><a href=\"#!/api/Appverse.Scanner-event-onQRCodeDetected\" rel=\"Appverse.Scanner-event-onQRCodeDetected\" class=\"docClass\">Appverse.Scanner.onQRCodeDetected</a></strong> [MODULE]: Lets your app to be aware that a QR Code has been detected and analysed; the code data is returned to the listener to be handled.</li>\n</ul>\n\n\n<h2 id='application_listeners-section-how-to-subscribe-to-a-listener'>How to subscribe to a listener</h2>\n\n<p>In order to subscribe your app to a specific listener, you must <strong>override</strong> the corresponding <strong>Appverse listener method function</strong> in your application javascript code.</p>\n\n<p>The following are the rules to be applied when implementing that \"listeners overriding\".</p>\n\n<h3 id='application_listeners-section-overriding-rules'>Overriding Rules</h3>\n\n<ol>\n<li><p>The file that contains the <strong>overridden function</strong> must be located <strong>after</strong> the platform javascript library: <strong>appverse.js</strong>.</p>\n\n<p> Be careful where you place your &lt;script src=\"xxx.js\"&gt;&lt;/script&gt; javascript links.</p>\n\n<p> The javascript imports order inside you main HTML should be:</p>\n\n<pre><code> &lt;script src=\"appverse.js\"&gt;&lt;/script&gt;\n ...\n &lt;script src=\"myscripts-with-overrided-listeners.js\"&gt;&lt;/script&gt;\n</code></pre></li>\n<li><p>The variables used inside that overridden function must be <strong>global</strong>.</p>\n\n<p> The listeners are being executed in a <strong>global scope</strong> from the native side. So, all the variables and methods used inside the overridden listeners should be also global accessed (recursively).</p></li>\n</ol>\n\n\n<h3 id='application_listeners-section-special-rules'>Special Rules</h3>\n\n<ol>\n<li><p>Inside the <strong><a href=\"#!/api/Appverse-method-foregroundApplicationListener\" rel=\"Appverse-method-foregroundApplicationListener\" class=\"docClass\">Appverse.foregroundApplicationListener</a></strong> overridden function, you could not invoke immediately any Appverse function (because the app, and so the Appverse internal server, is not yet active).</p>\n\n<p> So, if it is needed to call an Appverse function API inside it, please execute it inside a <strong>javascipt timeout</strong> (just some milliseconds).</p>\n\n<p> See the following example:</p>\n\n<pre><code> <a href=\"#!/api/Appverse-method-foregroundApplicationListener\" rel=\"Appverse-method-foregroundApplicationListener\" class=\"docClass\">Appverse.foregroundApplicationListener</a> = function() {\n     setTimeout(function() {\n         <a href=\"#!/api/Appverse.Notification-method-StopNotifyLoading\" rel=\"Appverse.Notification-method-StopNotifyLoading\" class=\"docClass\">Appverse.Notification.StopNotifyLoading</a>(); // example of Appverse API call\n     }, 500);\n };\n</code></pre></li>\n<li><p>Inside the <strong><a href=\"#!/api/Appverse-method-backgroundApplicationListener\" rel=\"Appverse-method-backgroundApplicationListener\" class=\"docClass\">Appverse.backgroundApplicationListener</a></strong> overridden function, you could <strong>not invoke</strong> any Appverse function; because the app is not active and nobody will attend those calls.</p></li>\n</ol>\n\n","title":"Subscribing to Appverse Listeners"});