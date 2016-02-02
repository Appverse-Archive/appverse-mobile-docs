Enabling Appverse Modules
====================

What is an Appverse Module?
---------------------

Appverse 5.0 has excluded - by default - some features from the native platform code.

Those features were excluded for the following reasons:

+ They require external libraries to be included in the final binary (such as the QRCode detection), 
+ or they use any native specific SDK classes that are preferable to be excluded if not used by the app (such as the push notifications)

The applications that want to include and use any of those features have to explicitly enable before building (by using the appropriate Mobile Emulator - Build Properties tab)

An <b>Appverse Module</b> is a Appverse feature that is not included by default in the Appverse javascript interfaces (no third-party libraries needed are included in the binary), but it can be included as per application demand.

Currently we have the following available Appverse modules: 

<img src="guides/appverse_modules/current_available_modules.png" width="850" />

How to enable an Appverse Module?
---------------------

All Appverse Modules are by default deactivated.

In order to enable an Appverse Module:

* Go to the **Compile** &gt;&gt; **Build Properties** emulator menu option.
* In the **Appverse Modules** tab, locate the checkbox that correspond to the Module you want to activate, and check it.
* Click the **save** option to save your change and **reload** your project (by selecting it again from the File >> Open menu, or pressing F5, or pressing the Reload icon at the navigation panel).

<img src="guides/appverse_modules/modules_build_properties_tab.png" width="850" />


Best Practices
---------------------

When a module is not enabled by the project, or it is not available for a specific platform, the Appverse interfaces for that module are not available in the DOM.
Due to that fact, it is necessary to make a previous check before using any module.

This is an example of how to make that checkings:

<img src="guides/appverse_modules/module_checking_code.png" width="850" />


Available Modules
---------------------

The following are the current Appverse Modules available on the platform:

### Analytics Modules

You could activate any of the Analytics module at the Mobile Emulator Appverse Modules tab.

Currently, we have available 5 analytics modules that implement native libraries:

* **Google Analytics** (open source)
	* See more information at the **Appverse.Analytics** API documentation.
* **Webtrekk** (private library - only for Deutsche Bank projects)
	* See more information at the **Appverse.Webtrekk** API documentation.
* **Adform** (open source)
	* See more information at the **Appverse.Adform** API documentation.
* **Facebook Tracking** (open source)
	* See more information at the **Appverse.Facebook** API documentation.
* **AppsFlyer** (open source)
	* See more information at the **Appverse.AppsFlyer** API documentation.

### Push Notifications Module

You could activate the Push Notifications module at the Mobile Emulator Appverse Modules tab.

See more information at the **Appverse.PushNotifications** API documentation.

See more information at the **[Enabling Push Notifications](#!/guide/push_notifications)** guide


### Scanner Module

You could activate the Scanner module at the Mobile Emulator Appverse Modules tab.

Currently, the Scanner module only includes the QRCode detection.

In the future, this module might include other code types detection.

See more information at the **Appverse.Scanner** API documentation.


### Beacons Module

You could activate the Beacon module at the Mobile Emulator Appverse Modules tab.

See more information at the **Appverse.Beacon** API documentation.


### Security Modules

You could activate any of the Security modules at the Mobile Emulator Appverse Modules tab.

* **InfoCert** One-time-passowrd (private library - only for SIA P2P projects)
	* See more information at the **Appverse.InfoCert** API documentation.
* **RSA** Device Print (private library - only for Cariparma P2P project)
	* See more information at the **Appverse.RSA** API documentation.