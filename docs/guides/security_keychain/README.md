Secure Credentials Storage
====================

## Overview

Applications that communicate with other installed applications on the device may need to share information between them.

For example it could be used to implement a Single Sign-On (SSO) authentication system but the functionality is not limited to that use case.

## Security new API methods

### UPDATE: There is a new attribute in the KeyPair Object <a href="http://builder.gft.com/appstore/appverse-docs/index.html#!/api/Appverse.Security.KeyPair-property-Encryption">Encryption</a>: If you send a true in this attribute the platform will encode(for store methods) the value,  and decode (for Get methods) the value.


The functionality to access this storage system is located in the **Security API**.
Below you can find a list of the methods used to access the storage and a brief description of their behaviour.

* **Appverse.Security.StoreKeyValuePair** : The function will store in the storage unit the passed KeyPair object. If the key name being used in the parameter already exists in the storage unit, the latter will be overwritten. When the execution ends the function will calls **Appverse.OnKeyValuePairsStoreCompleted**
* **Appverse.Security.StoreKeyValuePairs** : The function behaves exactly as **StoreKeyValuePair** with the difference that accepts an array of KeyPair objects.
* **Appverse.Security.GetStoredKeyValuePair** : The function will look for the specified keyname and will return the value associated to it. When the execution ends the function will calls **Appverse.OnKeyValuePairsFound**
* **Appverse.Security.GetStoredKeyValuePairs** : The function behaves exactly as **GetStoredKeyValuePair** with the difference that accepts an array of String objects.
* **Appverse.Security.RemoveStoredKeyValuePair** : The function will remove from the storage unit the KeyPair associated to the passed keyname. When the execution ends the function will calls **Appverse.OnKeyValuePairsRemoveCompleted**
* **Appverse.Security.RemoveStoredKeyValuePairs** : The function behaves exactly as **RemoveStoredKeyValuePair** with the difference that accepts an array of String objects.

Below you can find the list of Javascript callbacks used by the mentioned functions:
 
* **Appverse.OnKeyValuePairsStoreCompleted** : Parameters contain an array of KeyPair objects successfully stored and an array of KeyPair objects that could not be stored.
* **Appverse.OnKeyValuePairsFound** : Parameters contain an array of the KeyPair objects found.
* **Appverse.OnKeyValuePairsRemoveCompleted** : Parameters contain an array of KeyPair objects successfully removed and an array of KeyPair objects that could not be removed.

## iOS Concepts

The iOS functionality makes use the OS keychain.
All applications have access to a private keychain and, if correctly configured, additional keychains.

In order for 2 or more applications to access the shared data must meet a set of requirements:

* **Applications must be signed with the same Certificate**
* **Applications must have the same Bundle Seed ID**
* **Applications must be entitled with the "keychain-access-groups" entitlement and, in the entitlement property list file, specify an array of keychain access groups to which the application belongs**

<img src="guides/security_keychain/ios_keychain.png" width="850" />

## Android Concepts
The Android functionality makes use of the Shared Preferences service.
The application that will create the Shared Preferences instance must be installed (but it is not required to be launched) since it will be the owner of the Shared data.
All the applications that want to access the Shared data must specify the component name of the Application that owns the Shared Preferences file.

In order for 2 or more applications to access the shared data must meet a set of requirements:

* **Applications must be signed with the same Certificate**
* **Applications must specify the same android:sharedUserId setting and value in their manifest file**
* **Applications that want to access the shared data must know the Application which keeps the shared preferences file component name**

<img src="guides/security_keychain/android_shared_preferences.png" width="850" />

## Emulator Build Properties

<img src="guides/security_keychain/emulator_properties1.png" width="850" />

<img src="guides/security_keychain/emulator_properties2.png" width="850" />

**For Android**:

* **Shared package name** : The package of the application that is the 'owner' of the preferences file to be shared. That application must be installed on the device (but it is not required to be launched at all)
* **Shared Preferences Filename** :The name of the file (known by all applications that wants to share it) to be stored and accessed in the SharedPreferences
* **Shared UserId** : The user id that all applications should configure at their Manifest to access the shared preferences (in addition, access is only allowed if applications are signed by the same certificate)

**For iOS**:

* **Shared Keychain Access Group** : the Keychain Access Group value (it will be later added the bundle id prefix at the beginning) to be defined at the bundle Entitlements to configured the Shared Keychain

## Build properties names (for iOS and for Android)

Below you can find a list of the build properties used to configure this functionality (the specified values are used for example purposes):

**For Android**:

* **app.security.shared.packagename**=com.gft.appverse.showcase
* **app.security.shared.userid**=com.gft.appverse
* **app.security.shared.preferences.filename**=AppverseSettings

**For iOS**:

* **app.security.shared.keychain.accessgroup**=com.gft.appverse.shared

## How native applications could access the storage

### In iOS

An application that wants to share data with other applications should have an entitlement like the below one:

	<?xml version="1.0" encoding="UTF-8"?>
	<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
	<plist version="1.0">
	<dict>
		<key>keychain-access-groups</key>
		<array>
			<string>12345.com.app_1</string>
			<string>12345.com.shared</string>
		</array>
	</dict>
	</plist>

The first string **"12345.com.app_1"** points to the private keychain while the second string **"12345.com.shared"** points to the shared keychain.
For this application to read something from the shared keychain it should execute the following:

	/*Create a NSMutableDictionary and set the properties we want (in same order as code)
	 *property to define a GenericPassword type
	 *Property to define the Account field (filled with the KeyPair's Key property), example mykey1
	 *Property to define the keychain-access-group, example 12345.com.shared
	 *Property to define the return value type
	 */
	NSMutableDictionary *searchDictionary = [[NSMutableDictionary alloc] init];
    [searchDictionary setObject:(__bridge id)kSecClassGenericPassword forKey:(__bridge id)kSecClass];
    [searchDictionary setObject:"mykey1" forKey:(__bridge id)kSecAttrAccount];
    [searchDictionary setObject:@"12345.com.shared" forKey:(__bridge id)kSecAttrAccessGroup];
	[searchDictionary setObject:(__bridge id)kCFBooleanTrue forKey:(__bridge id)kSecReturnData];
    
	CFTypeRef result = NULL;
	/*status contains the SecItemCopyMatching function return code
	*pass as parameters the NSMutableDictionary and result (this one will contain the value returned from the found object in the keychain)
	*/
    OSStatus status = SecItemCopyMatching((__bridge CFDictionaryRef)searchDictionary, &result);
    NSData *data = (__bridge NSData *)result;
	
    NSString *keyPairValue = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];

**In order for this code to successfully retrieve an object value all the previously listed requirements must be met**
Example at Appverse Github: <a href="https://github.com/Appverse/appverse-mobile/tree/master/appverse-samples" target="_blank">iOS Native Application Example</a>


## Security Keychain Protection

We have expanded the **Appverse.Security** API by including a protection feature when accessing an stored security keychain item.

This feature is known in iOS as **Access Control Lists** (ACLs).

This feature is not included by default in the Appverse Security API. Developers have to explicitly configure which keychain items the application wants to protect.

### How to protect keychain items

The protection is enabled when a key is stored (individually), but the project selects which keys will be protected on build time, using a new configuration file.

#### "security-config.xml" file


The following is an example of the "security-config.xml" configuration file that should be located at the **/Web/app/config/** folder (like all Appverse API config files):
	
	<?xml version="1.0" encoding="UTF-8"?>
		<security-config>

		<!--
		List here the keys of the security keychain items that must be protected by passcode. 
		ONLY FOR iOS devices (available since iOS 8 and for iPhone 5s and above devices) 
		
		This is a expanded feature in the Security Keychain that includes the use of ACLs.
		
		A device with Touch ID enabled will first request the user to enter the fingerprint 
		in order to get the value of any protected key, or passcode (as a second choice)
		
		This protection implies:
			- access to these security keychain items is limited to this device 
			and requires a passcode to be set 
			- and the data is only available if the device is currently unlocked.
			- if the user removes the passcode on the device, these items are automatically removed.	
			- if a request to the keychain returns multiple matching items, 
			authentication may be required (if any of hte items are passcode protected)
		-->
			<keychain-items-with-passcode-protection>
		
				<key>mykey1</key>
				<key>mykey3</key>
		
			</keychain-items-with-passcode-protection>

	</security-config>


### What does it imply?

Each time a protected key is accessed, by any of the following methods, the user will be prompted for authenticating:

* Calling the **Appverse.Security.GetStoredKeyValuePair** method that matches a previous protected stored item, 
	+ or by calling **Appverse.Security.GetStoredKeyValuePairs** passing an array of keys to match that contains any previous protected stored item key.
* Calling the **Appverse.Security.StoreKeyValuePair** method that updates any previous protected stored item, 
	+ or by calling **Appverse.Security.StoreKeyValuePairs** passing an array of keys to store that contains any previous protected stored item key.
* Calling the **Appverse.Security.RemoveStoredKeyValuePair** method that removes any previous protected stored item, 
	+ or by calling **Appverse.Security.RemoveStoredKeyValuePairs** passing an array of keys to remove that contains any previous protected stored item key.

Only for iOS >= 8, otherwise the key items won't be protected.

If the device hasn't got available the touch ID (but has a passcode activated), the user will be prompted to enter the passcode directly.

This protection implies that:

* the access to these security keychain items is limited to this device and requires a passcode to be set 
* the data is only available if the device is currently unlocked
* if the user removes the passcode on the device, **these items are automatically removed** from the application keychain.	
* if a request to the keychain returns multiple matching items, authentication may be required (in case any of the items are passcode/touch_id protected)

In this case, the authentication screen (native overlay) is slightly different from the other in Local Authentication.

<img src="guides/touchid/touch-id-screen-keychain-protected.png" width="320" />

There is no reason text here (projecs cannot customize this screen), and the fallback mechanism is implemented by the Operating System requesting the device passcode.

<img src="guides/touchid/passcode-auth-screen.png" width="320" style="border: 1px solid;"/>


**BEWARE**

+ In order to get an emulation, you must activate the according Custom Result under the Security submenu, as it says, it will work only under an iOS 8 device. 

<img src="guides/touchid/touchidemulation.png" width="320" />


### In Android

An application that wants to access the shared data by other application should define in the manifest the sharedUserId property:

	<?xml version="1.0" encoding="utf-8"?>
	<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.app_2"
    android:versionCode="1"
    android:versionName="1.0" 
    android:sharedUserId="com.shared">
	
With the above settings, if both application have been signed with the same certificate, in order for the app to access the shared data it must execute the following:

	try {
		SharedPreferences settings = null; 
	
		//Get the Application that owns the Shared Preferences context, example com.app_2/org.me.unity4jui_android/MainActivity
		Context otherAppCtx = AndroidServiceLocator.getContext().createPackageContext("com.app_2/org.me.unity4jui_android/MainActivity", Context.CONTEXT_IGNORE_SECURITY);
		
		//Get the Shared Preferences target file the data is kept, example AppverseSettings
		settings = otherAppCtx.getSharedPreferences("AppverseSettings", Context.MODE_MULTI_PROCESS + Context.MODE_PRIVATE);
		
		//Interrogate settings object to return the value associated to the key
		String keyPairValue = settings.getString("mykey1", null);
		
	} catch (Exception e) {
		//LOG ERROR
	}

Example at Appverse Github: <a href="https://github.com/Appverse/appverse-mobile/tree/master/appverse-samples" target="_blank">Android Native Application Example</a>
