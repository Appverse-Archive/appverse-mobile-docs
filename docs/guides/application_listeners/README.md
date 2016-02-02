Subscribing to Appverse Listeners
====================

What is an Appverse App Listener?
---------------------

Appverse provides some **javascript listeners** to make you application aware (from the javascript code) that certain system events have happened.

Your application could then implement specific behaviour when that events occur. For example, when the application comes to foreground application could check any local resources if available and react in consequence.

The following are the current Appverse app listeners available on the platform:

### General Application Events
* **Appverse.foregroundApplicationListener**: Lets your javascript code know that your app has moved out of the background state and back into the foreground, but that it is not yet active.
* **Appverse.backgroundApplicationListener**: Lets your javascript code know that your app is now running in the background and may be suspended at any time.
* **Appverse.backButtonListener** (only available in Android): Lets your app know that the user has pressed the "physical" android back button.
* **Appverse.OnExternallyLaunched**: Lets your app know that it has been started from another app or scheme URI (not launched by the OS spring board); with some specific parameters.
* **Appverse.UserDidTakeScreenshot**: Lets your app know that the user has taken a screenshot while application is in foreground (maybe the app wants to warns the user for any security reasons).



### Remote Notification Events [MODULE]
* **Appverse.PushNotifications.OnRegisterForRemoteNotificationsSuccess**: Lets your app get notified when the remote notifications registration process has been completed with success.
* **Appverse.PushNotifications.OnRegisterForRemoteNotificationsFailure**: Lets your app get notified when the remote notifications registration process has been failed.
* **Appverse.PushNotifications.OnRemoteNotificationReceived**: Lets your app get notified when the a remote notification has arrived (while application is running).
* **Appverse.PushNotifications.OnUnRegisterForRemoteNotificationsSuccess**: only available in Android): Lets your app get notified when the unregistration process (for receiving remote notifications) has been completed with success. When application is not running, the remote notification is handled by the system, and when the user clicks on the notification alert, the system wakes up the application and executes this event listener.

### Local Notification Events
* **Appverse.OnLocalNotificationReceived**: Lets your app get notified when the a local notification has arrived (while application is running). When application is not running, the local notification is handled by the system, and when the user clicks on the notification alert, the system wakes up the application and exceutes this event listener.

### Security Events
* **Appverse.Security.OnKeyValuePairsFound**: Lets your app get notified when some credentials have been found on the secured shared storage.
* **Appverse.Security.OnKeyValuePairsStoreCompleted**: Lets your app get notified when the process to store some key-value pairs (credentials) has been completed. The listener provides information about the successful and failed stored pairs.
* **Appverse.Security.OnKeyValuePairsRemoveCompleted**: Lets your app get notified when the process to delete some key-value pairs (credentials) has been completed. The listener provides information about the successful and failed deleted pairs.

### Media Events
* **Appverse.Media.onFinishedPickingImage**: Lets your app be aware that the process of picking an image (from the album or using the camera) has finished. This listeners provides information about the just picked picture.


### Application Modules Loader Events
* **Appverse.AppLoader.onUpdateModulesFinished**: Lets your app to know that the requested modules update has been completed. The listener provides information about the successful and failed updated modules.
* **Appverse.AppLoader.onDeleteModulesFinished**: Lets your app to know that the requested modules deletion has been completed. The listener provides information about the successful and failed deleted modules.

### Beacon Events [MODULE]
* **Appverse.Beacon.OnEntered**: Lets your app be aware that a previously detected beacon is found again.
* **Appverse.Beacon.OnExited**: Lets your app to be aware that a previously detected beacon is not found.
* **Appverse.Beacon.OnDiscover**: Lets your app to be aware that a new beacon is discovered.
* **Appverse.Beacon.OnUpdateProximity**: Lets your app to be aware that the distance of a known beacon has changed.
* **Appverse.Beacon.onAccessToLocationDenied**: Lets your app know the user has denied the location permision

### PIM Events
* **Appverse.Pim.onContactFound**: Lets your app be aware of a contact detail search result
* **Appverse.Pim.onListCalendarEntriesEnd**: Lets your app to be aware of calendar search result
* **Appverse.Pim.onListContactsEnd**: Lets your app to be aware of a contact list search
* **Appverse.Pim.onAccessToContactsDenied**: Lets your app to be aware then the user removes access to the contacts for this application

### Network Events
* **Appverse.Net.onConnectivityChange**: Lets your app be aware of a connectivity changes in the network

### Permissions Events
* **Appverse.Pim.onAccessToCalendarDenied**: Lets your app know the user denied the access to Calendar
* **Appverse.Pim.onAccessToContactsDenied**: Lets your app know the user denied the access to Contact
* **Appverse.Media.onAccessToCameraDenied**: Lets your app know the user denied the access to Camera
* **Appverse.Media.onAccessToExternalStorageDenied**: Lets your app know the user denied the access to External Storage
* **Appverse.Geo.onAccessToLocationDenied**: Lets your app know the user denied the access to Location
* **Appverse.Telephony.onAccessToPhoneDenied**: Lets your app know the user denied the access to Phone
* **Appverse.Messaging.onAccessToSMSDenied**: Lets your app know the user denied the access to SMS
* **Appverse.Messaging.onAccessToExternalStorageDenied**: Lets your app know the user denied the access to External Storage

### Scanner Events [MODULE]
* **Appverse.Scanner.onAccessToCameraDenied**: Lets your app know the user has denied the camera permision (available in just in Android)
* **Appverse.Scanner.onGeneratedQR** [MODULE]: Lets your app to be aware that a QR Code has been generated; the code data is returned to the listener to be handled.
* **Appverse.Scanner.onQRCodeDetected** [MODULE]: Lets your app to be aware that a QR Code has been detected and analysed; the code data is returned to the listener to be handled.


How to subscribe to a listener
---------------------

In order to subscribe your app to a specific listener, you must **override** the corresponding **Appverse listener method function** in your application javascript code.

The following are the rules to be applied when implementing that "listeners overriding".

### Overriding Rules

1. The file that contains the **overridden function** must be located **after** the platform javascript library: **appverse.js**.

	Be careful where you place your &lt;script src="xxx.js"&gt;&lt;/script&gt; javascript links.

	The javascript imports order inside you main HTML should be:

		<script src="appverse.js"></script>
		...
		<script src="myscripts-with-overrided-listeners.js"></script>

2. The variables used inside that overridden function must be **global**.

	The listeners are being executed in a **global scope** from the native side. So, all the variables and methods used inside the overridden listeners should be also global accessed (recursively).


### Special Rules

1. Inside the **Appverse.foregroundApplicationListener** overridden function, you could not invoke immediately any Appverse function (because the app, and so the Appverse internal server, is not yet active).

	So, if it is needed to call an Appverse function API inside it, please execute it inside a **javascipt timeout** (just some milliseconds).

	See the following example:

		Appverse.foregroundApplicationListener = function() {
			setTimeout(function() {
				Appverse.Notification.StopNotifyLoading(); // example of Appverse API call
			}, 500);
		};

2. Inside the **Appverse.backgroundApplicationListener** overridden function, you could **not invoke** any Appverse function; because the app is not active and nobody will attend those calls.
