Mobile Emulator
====================

Latest Release
---------------------

<font style='color:red;font-weight:bold;font-size:11px;'>(NEW)</font>&nbsp;Latest Release version <b>4.7</b> available <b><a href='http://dl.dropbox.com/u/30557508/emulator/MobileEmulator_4.7.exe'>here</a></b>

### Version 4.7 - Release Notes

<!--img src="resources/images/coming-soon.jpg"/--> 
<embed src="guides/emulator_releases/ReleaseNotes_4_7.pdf" width="850" height="575" style="border: 1px solid;">

Version 4.6
---------------------
<img src="resources/images/icon1.png"/> [Release Notes](guides/emulator_releases/ReleaseNotes_4_6.pdf "Release Notes 4.6")

+ **New Features:**
	+ Added new Network API methods **OpenBrowserWithOptions** and **ShowHtmlWithOptions**.
		- These methods behave exactly as the former ones, with the exception that you are able to pass a set of file extensions that the Operating System will handle by itself
		- Example is for loading a PDF: when a URL request a PDF File, it will pass the URL to the Operating System so he handles the URL.
	+ Added new **build properties**:
		- **CFBundleVersion** - The native region for the bundle. The language (2-letters ISO code) specified by this value is used as the default language if a resource cannot be located for the user's preferred region or language
		- **UIDeviceFamily** - The target iOS device family:
			- Select "universal" - to allow this app bundle to be installed in any device family
			- Select "iphone" - to restrict this app bundle just for iPhone and iPod devices (smartphones)
			- Select "ipad" to restrict this app bundle just for iPad devices (tablets)
	+ **GZIP** for the **I/O services**
		- Now requests/responses could use the GZIP,DEFALTE compression modes
		- Application needs also to send the "Accept-Encoding: gzip,deflate" request header to accept the encoding format.

+ **BugFixing:**
	+ Fixed a bug that was causing the LaunchApplication method to fail when no query parameters were passed

Version 4.5.4 
---------------------
<img src="resources/images/icon1.png"/> [Release Notes](guides/emulator_releases/ReleaseNotes_4_5_4.pdf "Release Notes 4.5.4")

+ **New Features:**
	+ **Contacts**
		- Improved Android Contacts API performance. Now querying contacts should be way faster than before
		- Contact List queries now supporting ONLY AVAILABLE PHONES option,returning only those contacts that have a phone number associated to them
	+ **Camera**
		- Media methods using Camera functionality are now ASYNC by default
	+ **NFC**:
		- New Android NFC API. Used to perform NFC payments against a Point Of Sale device. API
		- The NFC API is available for ANDROID and Mobile Emulator
	+ **iOS Build**
		- Added CFBundleShortVersionString property to the iOS build config. String that specifies the release version number of the bundle, which identifies a released iteration of the app. Required to upload an app to the MobileIron.
	+ **Graphical resources**
		- New Android Icon resolutions supported:
			- XHDPI (96 x 96 px)
			- XXHDPI (144 x 144 px)
			- XXXHDPI (192 x 192 px)
	+ **Messaging**
		- SendMessageSMS method now returns the control back to the application after sent or cancel
	+ **Mobile Emulator** now executes the Event Listeners in the calling browser (internal or external)

+ **BugFixing:**
	+ Fixed a bug that prevented some Android devices to modify the testcase parameters for Showcase APP
	+ Fixed a bug that was causing in Android the app to crash when pressing the back button on an opened browser activity
	+ Fixed a bug that was causing a crash when sending email with attachment in Android
	+ Fixed a bug that was causing some vCards to raise an error while parsing the information
	+ Fixed a bug that caused the SendSMS method to be ignored by some Android Devices (Nexus family)
	+ Fixed a bug that was causing the Showcase app to crash in the Mobile Emulator v4.4
	+ Fixed a bug that was preventing the correct execution of TakeSnapshot, GetSnapshot and DetectQRCode event listeners

Version 4.4 
---------------------
<img src="resources/images/icon1.png"/> [Release Notes](guides/emulator_releases/ReleaseNotes_4_4.pdf "Release Notes 4.4")

+ **New Features:**
	+ **iOS 7.1 compatible**
		- Builds are compiled against the latest XCode version (required to publish apps in App Store)
		- iOS 7 Status Bar customization
		- Status bar customization (light or dark). Default: dark
			- Application (projects) could configure this customization using the Emulator/Build properties.
	+ Android can now open other apps using schema protocol
		- Documentation at: http://builder.gft.com/appstore/unity-docs/index.html#!/guide/launch_applications
		
+ **BugFixing:**
	+ Fixed token replacement task that was causing some HTML files not being included
	+ Fixed a bug in the emulator that was causing an error when locking the orientation in the portrait orientation with the portrait upsidedown using iPad as device
	+ Fixed a bug that was causing the application to freeze if it was sent to background before loading the HTML components entirely
	+ Fixed a bug in the emulator that prevented PPT files to be opened in a new browser

Version 4.3 
---------------------
<img src="resources/images/icon1.png"/> [Release Notes](guides/emulator_releases/ReleaseNotes_4_3.pdf "Release Notes 4.3")

+ **New Features:**
	+ **Phonegap Integration**
		- Now Appverse Emulator is compatible with a Phonegap Project.
			- To run a Phonegap project use the new [Help] menu in the Appverse Emulator, select Phonegap and follow the instructions.
		- Added HelloWorld Phonegap Project in the Emulator Folder
		- The resulting Phonegap builds will be in 3.3.0-0.18.0 version
	+ **Showcase application** updated to **4.3.1**
		- Updated with Sencha Touch 2.3.1
	+ **Contacts API** reviewed
		- There are two new Contact Object: **Appverse.Pim.ContactLite** and **Appverse.Pim.Contact**
		- And two new functions:
			- **Appverse.Pim.ListContacts**(query contacts)
			- **Appverse.Pim.GetContact** (by id)
+ **BugFixing:**
	- **Android JSON serializer** now support more primitive types
	- Mobile Emulator now support the use of **additional ports** for the Internal Appverse server.
	- Improved the access to **iOS keychain**
	- Launching an application using **Android Explicit Intents** now supports **Action Field**
	- Updated the iOS Skins' **User Agents**
	- Corrected a bug in **Android SendEmail** with attachments

Version 4.2.2 
---------------------
<img src="resources/images/icon1.png"/> [Release Notes](guides/emulator_releases/ReleaseNotes_4_2_2.pdf "Release Notes 4.2.2")

+ **New Features:**
	+ **Credential Storage** / **Credential Shared Storage**
		- The **Security API** has the following new functions:
			- Appverse.Security.GetStoredKeyValuePair(s)
			- Appverse.Security.RemoveStoredKeyValuePair(s)
			- Appverse.Security.StoreKeyValuePair(s)
		- These functions will store **KeyValuePair objects** in the device storage unit.
		- The storage unit can be enabled to share the data with other apps (signed with the same certificate)
	- **iOS Credential Storage** / **Credential Shared Storage**
		- In the Mobile Emulator >> Compile >> Edit Settings >> Security Tab fill the **KeyChain Access Shared Group** field.
		- In order for 2 or more applications to share data between them using the keychain, the apps must be signed with the same certificate, thus having the same Bundle Seed ID and have the same Access Shared Group Field.
		- If the mentioned field is left empty or with the word "undefined", the data will not be shared between apps, instead it will be kept in the application private keychain.
	- **Android Credential Storage**/ **Credential Shared Storage**
		- In the Mobile Emulator >> Compile >> Edit Settings >> Security Tab fill the Shared Package Name, Shared Preferences Filename and Shared User Id.
		- In order for 2 or more applications to share data between them using the Shared Preferences:
			- Apps must be signed with the **same certificate**.
			- **Shared Package Name** is the Application's Package Name holding the **Shared Preferences File**.
			- **Shared Preferences Filename** is the name of the "file" where the KeyValuePair objects are stored.
			- **Shared User Id** must be common in all the apps sharing data or else will not be able to reach the data itself.
	- **Launch other Apps**
		- It is now possible to open other apps and let your app to be opened from another one.
	- As both functionalities (**Credential Sharing** and **Launch other apps**) are complex and very sensitive, please read carefully how it works at:
		- [Launch](#!/guide/launch_applications)
		- [Security Storage](#!/guide/security_keychain)

Version 4.2 
---------------------
<img src="resources/images/icon1.png"/> [Release Notes](guides/emulator_releases/ReleaseNotes_4_2.pdf "Release Notes 4.2")

+ **New Features:**
	+ **Compatibility with iOS7**
		- Builder server has been upgraded with iOS7 
		- Emulator has been upgraded to match the Builder server settings 
+ **BugFixing:**
	- **iOS7 Bugfixing**
		- For iPad it is now required to add the 20 pixels on the height dimension for all splashscreens; 40px for @2 resolutions. 
		- The following list shows the splashscreen dimensions: 
			- Default-Portrait.png 768 x 1024 px 
			- Default-Portrait@2x.png 1536 x 2048 px 
			- Default-Landscape.png 1024 x 768 px 
			- Default-Landscape@2x.png 2048 x 1536 px 
			- The Showcase App within the Mobile Emulator Installation folder should be used as reference.

Version 4.1
---------------------
<img src="resources/images/icon1.png"/> [Release Notes](guides/emulator_releases/ReleaseNotes_4_1.pdf "Release Notes 4.1")

+ **New Features:**
	+ **Emulator Logging**
		- The emulator now stores 2 kind of log files: **Build Log** and **Console Log**.
		- The Build Logs contain the **build output** appearing in the build window while connecting to the server. Each Build has its own file.
		- Build Log file name: **NameOfProject_Date_Time.txt**.
		- The Console Log contains the entire **console log** written by the application. There is 1 Console Log file **per day**.
		- Console Log file name: **Date.txt**.
		- The logs are stored under *MyDocuments/MobileEmulator/Log[/Console]*.
	+ **Emulator Settings**
		- A **Settings.xml** file is stored under **MyDocuments/MobileEmulator/Settings**
		- Emulator now remembers **Device**, **Orientation**, **Project** and **Filter Include and Exclude** lists.
		- Each time the emulator is opened it will kept those settings from the last execution.
	+ **Emulator Device and Orientation Menu**
		- A Tick appears next to the currently used Device and Orientation to easily identify those settings
	+ **Emulator Build Properties**
		- Now it is possible to select the iOS and Android **min version supported** by the application
		- Those Settings are found under Compile>Edit Properties>**Deployment** Tab
	+ AppLoader
		- New value **Appverse.MODULES_RESOURCE_URI** created and pointing to http://127.0.0.1:8080/documents/apps/
		- The modules context(used by calling **Appverse.AppLoader.InitializeModuleContext**), module id, module version should be appended to the path by the application
		- Example: var myModulesPath = Appverse.MODULES_RESOURCE_URI + myUserContext + "/" + myModuleId + "/" + myModuleVersion
	+ Deprecated old **appverse.js** pre version 3.0
+ **BugFixing:**
	+ **Android**
		- **Appverse.AppLoader.ListInstalledModules** now correctly returns the different version numbers
		- **Appverse.Notification.StartNotifyLoading** no longer block next calls to Appverse (background JS listener will not be executed after a native Dialog, in specific StartNotifyLoading dialog)
	

Version 4.0.2
---------------------
<img src="resources/images/icon1.png"/> [Release Notes](guides/emulator_releases/ReleaseNotes_4_0_2.pdf "Release Notes 4.0.2")

+ **New Features:**
	+ **Remote Notifications** in **Android** will call the callback **Appverse.OnUnRegisterForRemoteNotificationsSuccess** after successfully unregistering from the service via **Appverse.Notification.UnRegisterForRemoteNotifications** method.
	+ New typed error codes available (just for Android) returned in **Appverse.Notification.RegistrationError** object.
	+ **AppLoader** API now allows **BASIC authentication** (only this authentication method is available for the time being). The **Credentials** must be passed using the **Appverse.AppLoader.InitializeModuleContext** method, via the argument **Appverse.AppLoader.ModuleContext** object.
+ **BugFixing:**
	+ **Android Remote Notifications** feature is able to register successfully with different **Sender Ids**.

Version 4.0
---------------------
<img src="resources/images/icon1.png"/> [Release Notes](guides/emulator_releases/ReleaseNotes_4_0.pdf "Release Notes 4.0")

+ **New Features:**
	+ **New AppLoader API**
		- **Appverse.AppLoader.UpdateModule** / **Appverse.AppLoader.UpdateModules**: get zip modules from remote and unzip/store into filesystem for future loading.
		- **Appverse.AppLoader.DeleteModules**: delete modules previously installed.
		- **Appverse.AppLoader.ListInstalledModules**: returns a list of installed modules.
		- **Appverse.AppLoader.LoadModule**: loads the given module into the current webview.
		- **Appverse.AppLoader.InitializeModuleContext**: sets custom path/context for current user, and localized error or notification messages.
	+ **Improvements on I/O Services**
		- New method **Appverse.IO.InvokeServiceForBinary**: get zip modules from remote just for Octect Binary type with more than 8Mb file size.
		- New InvokeService features to prevent errors with unescaped URLs (used in javascript):
			- Place the following line before performing a call to Appverse:			
					Appverse.unescapeNextRequestData = false; // this setting only applies the next Appverse call (platform will automatically change the setting to true again after performing the service call) 
					Appverse.IO.InvokeService(request, service, null);
	+ **Latest version for Core Resources**
		- Included latest version for **JQueryMobile**: version 1.3.1
	+ **Emulator Improvements**
		- The Emulator **Custom Settings Geolocation section** has been modified with better handling when entering the data.
		- The Emulator **build log window** now has a **Copy to Clipboard** button that will copy the entire build log into the system's clipboard.
+ **BugFixing:**
	+ **Appverse.System.GetDisplayInfo** now returns the correct browser size instead of the screen size when used in the emulator.
	+ Fixed a bug that caused the emulator to retrieve a wrong list of configured **IOServices**.
	
Version 3.9.1
---------------------

+ **New Features:**
	+ **Local Notifications**
		- Emulator now supports Local Notifications under Notification testcases
		- Present, Schedule, Cancel and CancellAll LocalNotifications methods are available.
	+ **QR Codes**
		- **Appverse.Media.DetectQRCode (bool autoHandleQR)** is called to read a QR Code; the parameter is used to execute the QR content automatically. Upon finishing calls **Appverse.Media.onQRCodeDetected** event passing a MediaQRContent object.
		- **Appverse.Media.HandleQRCode(MediaQRContent)** executes the content of the object passed. Returns a QRType enumeration of the passed object as parameter.
		- Currently only Telephone, Mail (starting with mailto protocol) and URL QR Codes can be executed directly by the system.

+ **BugFixing:**
	+ Device rotation is correctly handled when another view is present (openBrowser, videoPlayer, etc).

Version 3.9
---------------------

+ **New Features:**
	+ **Async mode** for **FileSystem** API. 
	+ New **GetNetworkData** API method for **Network** API.
		- Application could now get infromatuion data about the current IP Addresss available (IPv4 or IPv6)
	+ Current project path is now shown on the windows title.
	
	+ **Showcase** app is now the initial project loaded when emulator launches, instead of the previous SenchaUI project.
	+ The wizard under **Settings** >> **Custom Results** has been improved in order to be more "accessible". Tabs were replaced by a tree view, but same behavior is preserved.
	+ Includes the latest platform **Core Resources** for the "appverse.js" 3.9 version.
	+ Includes simulation for the new **Remote Notifications** feature (also known as Push Notifications):
		- Simulates Registration from the app (implementing the **Appverse.Notification.RegisterForRemoteNotifications()** method).
		- Simulates Send Notification to the app (from a new wizard under Simulate >> Send Notification menu option.
	
Version 3.8.5.3
---------------------

+ **New Features:**
	+ **Async mode** for **FileSystem** API. 
	+ New **GetNetworkData** API method for **Network** API.
		- Application could now get infromatuion data about the current IP Addresss available (IPv4 or IPv6)
	+ Current project path is now shown on the windows title.

+ **BugFixing:**
	+ URL encoding for some APIs: OpenBrowser, DownloadFile, and CopyFromRemote
	+ Rotation for native **Video Player** eventhough application blocks its orientation.
	+ Response reading for **OCTET_BINARY** service type in **InvokeService** API.

Version 3.8.5.1
---------------------

+ **BugFixing:**
	+ **URL Handling**. 
		- Fix to properly handling URI strings in some API methods: **OpenBrowser** and **DownloadFile**
	+ **OpenBrowser Crash when loading video/audio files**.
		- Audio and Video files are not supported by the Webkit version inside this Emulator.
		- For non supported mime type files, OpenBrowser will show you an error page to inform you about this situation.
	

Version 3.8.4
---------------------

+ **New Features:**
	+ **I/O Services**. 
		- New IORequest object features: IORequest object now supports additional methods (previously only GET/POST).
		- If needed, each IORequest can override its service configuration by filling the Method(string) field.
		- All remote requests are executed by default with a protocol version of HTTP/1.0 to prevent chunked responses. The IORequest can override this setting via the new ProtocolVersion(enum) field, possible values are HTTP/1.0(default one) and HTTP/1.1
	+ **New ShowCase version**.
		- The ShowCase application has been upgraded with newer code and new testcases.
	+ **New jQuery and jQuery Mobile versions**. 
		- jQuery has been updated to version 1.8.2 and jQuery mobile version to 1.2.0

+ **BugFixing:**
	- **iOS versions 6 and forward**:
		- Fixed a bug that caused the application to crash when the CreateContact function was used and the application didn't have permissions to access contacts. If the app does not have permissions to access contacts a message will be displayed with instructions to change that setting.
		- Fixed a bug that caused the application to crash when the CreateCalendarEntry function was used and the application didn't have permissions to access the calendar. Same solution as CreateContact fix.
	- **Android**:
		- LockOrientation System API has been fixed and now properly blocks the application orientation in Landscape mode.
		- Fixed a bug that prevented CopyFromRemote function to not follow correctly redirects from HTTPS to HTTP or viceversa.
		- CreateCalendarEntry now is taking into account the API SDK level to provide the best usage of Calendar API (Calendar Provider was not available until API level 14).
			- API < 14 : Default intent is used.
			- API >= 14 : Specific intent with Calendar Events.
		
Version 3.8.3
---------------------

+ **New Features:**
	+ **Preferences**. Our Mobile Emulator has now a new Preferences wizard, located at the **Settings** >> **Preferences...** menu. 
		- At this moment, only the **Filters** feature is available. This feature allows the user to enter a list of **included** and **excluded** folders names, that will be applied when a new project is loaded, or when a project is reloaded.
		- It is useful for excluding **big size** folders in your projects that you don't want to be included on the Emulator working folder (such as the Design folders with your huge psd files, or any Documents folder, etc.)
		- It is also useful for including **hidden** folders that are required in your projects on working time (by default Emulator excludes all hidden folders).



Version 3.8.2
---------------------

+ **Change Requests:**
	+ **Sencha 2 Support removed**. Removed the Sencha 2 support inside the Emulator. It won't be possible anymore to create new Sencha 2 projects using the Emulator. Sencha 2 projects should be created and build using the proper Sencha 2 SDK Tools.
+ **Platform BugFixing:**
	+ On iOS platform, fixed a bug when calling the TakeSnaphost in Debug mode (the camera available checking should be performed on main UI Thread).
	+ On Android platform, the internal server is now reusing address on server socket creation. This will prevent some port blockings.


Version 3.8
---------------------

+ **New Features:**
	- **Device List**. Removed oldest Android devices and added newer. Some User Agents have been updated.
	- **Status Bar**. Added a status bar showing the name of the device and the User Agent being used.
	- **Override User Agent**. In the device list there is a new option to override the User Agent being used at the moment. This User Agent will be used until a change of device.
	- **Appverse.System.DismissApplication** should be called by HTML5 applications (only Android devices) when the Back button is pressed on the Home screen.
	- **New Build Security Check:**
		- You can allow/forbid the device OS to take a screenshot of the application when the application is sent to background. This functionality is intended to be used to avoid exposing sensitive data. Mechanics description:
		- On iOS the snapshot taken by the system will show the SplashScreen.
		- On Android 2.X there is no restriction as the system does not take snapshots.
		- On Android 3.X the snapshot (being shown in Recent Apps) will be black and the user is able to take screenshots manually.
		- On Android 4.X the snapshot (being shown in Recent Apps) will be black and the user is UNABLE to take screenshots manually. 
+ **BugFixing:**
	+ Fixed a bug that caused some Android applications to get frozen on the initial Splashscreen.
	+ On Android platform the method **Appverse.Net.GetNetworkTypeReachable** was not returning a value when called from a device set on airplane mode.
	+ Fixed a bug that caused Webtrekk sessions on iOS applications to be stuck for a long period of time after calling the application to foreground.

Version 3.7.5.3
---------------------

+ **Bug Fixing**
	+ The Asynchronous Appverse API Service Calls could now be used from an external debugging tool (Chrome Dev Tools, etc)
	(*) The asynchronous service mode is just "simulated" on the emulator. Calls are send/received synchronously, but the result is send back to the application javascript using the corresponding callback function (as mobile platforms behave)

Version 3.7.5 (+ 3.7.5.1)
---------------------
Version 3.7.1
---------------------
+ **New UNITY.JS v3.8**
	+ This new Appverse Mobile Emulator version comes with a new Appverse.js (v.3.8) supporting Webtrekk Analytics functionalities (not emulated features).
+ **Showcase project updated:**
	+ New "Webtrekk" Platform Testcase added allowing to test the Analytics functions using the Webtrekk integrated module functions.

