Mobile Emulator
====================

Latest Release
---------------------

<font style='color:red;font-weight:bold;font-size:11px;'>(NEW)</font>&nbsp;Latest Release version <b>5.0.7</b> available <b><a href='http://builder.gft.com/appstore/emulator-betas/MobileEmulator_5.0.7.exe'>here</a></b>

### Version 5.0.7 - Release Notes
---------------------

+ **New Features:**

	+	New Modules available:
		+ Android: NFC
		+ iOS: Touch ID
			+ Guide available in the documentation
	+ Removed Sencha Touch 1.1  and Highchart documentation [Deprecated]
	+	Removed unused assets folder [Deprecated]
	+	New listener to override when the user deny the access to contact in iOS:
		+	Appverse.Pim.onAccessToContactsDenied
	
+ **Bug Fixing:**

	+ Max length path: Unpreventable issue have been addressed using an alert to help the user detect this and move it folder to more usable paths



### Version 5.0.6 - Release Notes
---------------------

+ **Min supported versions:**
	+ iOS: 	7.0 and above
	+ Android: 	4.0 and above

+ **Bug Fixing:**
	+ Removed un-useful "console log" traces when loading Appverse projects into Chrome from Emulator link.

+ **New Features:**
	+ New “Save and Build” button in the Build properties window. You will be able to send compilation to the Builder Server directly after saving the build options.
	+ You could load your project from the original folder, or from a selected Compiled source directory. 
		+ This will be useful for those projects loading UI frameworks that have custom build process (minify, obfuscation) to prepare resources for distribution.
		+ We could load those resources in the emulator instead of the original project.
		+ Go to Settings >> Preferences >> General option, select the checkbox option, and select the sources compiled directory (should be a folder under the original project home path).
		+ You could revert this setting at any moment, project will be reloaded immediately to apply changes.
		+ The project loaded (original or compiled)  will be the one uploaded to the Build.
		+ The other resources (build properties, icons, splash screens, app configuration files, etc)  will be gathered from the original project path. Only the Web Resources will be selected from the ORIGINAL or COMPILED source directory, as chosen.
	+ New Windows Phone properties. ONLY PREVIEW – the Windows Phone Build is not yet available in Appverse 5.0.

+ **Improvements:**
	+ We have removed the Internal Server used in the platform for:
		+ All iOS devices.
		+ Android devices >= 4.2
	+ This change implies a FULL REGRESSION test of your projects using this new version 5.0.6.

+ **Development:**
	+ No need to use the “unity.platform.version” property in the build.properties file. The Builder will compile with the latest version available if project does not supply any release tag number.


### Version 5.0.5 - Release Notes
---------------------

+ **Bug Fixing:**
	+ Fixed iOS Crash using HandleQRCode with TEXT type
	
+ **Improvements:**
	+ Loading Windows Phone Skins with an IE WebBrowser  (the version will be the last available in each developer PC)
	+ Store initial IO Services mapped by name. See documentation at: http://builder.gft.com/appstore/appverse-docs/#!/api/Appverse.IOServices
	+ Dynamic Port Binding for loading resources in iOS (to prevent issues opening Appverse apps from other Appverse apps)


### Version 5.0.4 - Release Notes
---------------------
+ **New Features:**
	+ Windows Phone Emulation with a new Skin (Nokia Lumia)
		+ Now Appverse.is.Windows works!
+ **Improvements:**
	+ Upgraded Xamarin.iOS version to 8.6
	+ Removed the internal service handler where it could be removed to avoid security vulnerabilities (This change does not effect the app development) 


### Version 5.0.3 - Release Notes
---------------------
+ **New Features:**
	+ Added the default configured locale to the Appverse.LocalizedLiterals. Accessible by Appverse.LocalizedLiterals.default or   Appverse.LocalizedLiterals["default"] 
	+ Possibility of enabling/disabling some Appverse API functions per project, via a new feature of *Modules Activation" (new Appverse Modules tab in the Emulator build properties).
		+ Modules are not included by default unless the project explicitly activates each of them.
		+ Modules are activated or deactivated for each build and platform targets. It cannot be activated for one platform and not for another in the same build request (to do that, please execute 2 build requests)
		+ Current available Appverse Modules:
			+ Appverse.Analytics
			+ Appverse.PushNotifications
			+ Appverse.Scanner
			+ Appverse.Webtrekk
		+ See how to enable a module in the [Enabling Appverse Modules](#!/guide/appverse_modules) guide

### Version 5.0.2 - Release Notes
---------------------
+ **New Features:**
	+ New "Access Denied to Contacts" Listener (see Appverse.Pim.onAccessToContactsDenied event) available to be overridden.
+ **Bug Fixing:**
	+ This 5.0.2 Emulator version could be installed and used in addition to other previous installed versions (4.x).
		+ This was required for any user that is developing concurrently 4.x apps and 5.x apps.
	+ Emulator points to a new Builder Service that contains the following improvements:
		+ Executes in parallel the build tasks to decrease build time (aprox 50% decreased)
		+ Includes more build properties in the email send to the developer
	
### Version 5.0.1 - Release Notes
---------------------
+ **New Features:**
	+ Check Connectivity Listener (see Appverse.Net.onConnectivityChange event) available to be overridden.
	+ Change Networsk Status new Mobile Emulator option. You could change the network status (offline, WIFI or 3G) of the "emulated device" in any point of your application runtime workflow. 


### Version 5.0 - Release Notes
---------------------
+ **New Features:**
	+ All APIs are now Asynchronous
	+ Allows HTTPS calls to check against server fingerprint
	+ Removed compatibility with Unity namespace and app.config

