iOS Touch ID Authentication
====================

## Overview

Touch ID is Apple's biometric fingerprint authentication technology, which was introduced with the iPhone 5S and iOS 8. 

Using this native feature applications can locally authenticate user, at any desired moment.

**Appverse Mobile** is including the Touch ID featue since **version 5.0.7** (April 2015), in two different ways:

* **Local Authentication**: by opening the Biometrics authentication (native overlay) and capturing the "user feedback" to block or allow any operation in the app.
* **Security Keychain Protection**: by protecting any stored security keychain item access by requesting the user an authentication via the device passcode or Touch fingerprint (this last is preferred if available).

## iOS requirements

Only **iOS 8** devices are able to use the Touch ID feature for Local Authentication (via API).

Touch ID was introduced in iOS 7 but it is limited to unlocking the device, App Store or iTunes usage, and authenticating in the iCloud keychain.

In addition, even tough the device is running with iOS 8, due to hardware requirements Touch ID is only available on **iPhone 5S and greater** devices.

## Local Authentication

### API method

Appverse mobile apps can launch the Touch ID authentication at any item by using the **Appverse.Security.StartLocalAuthenticationWithTouchID** method.

This method has only 1 argument that is the **reason** text to be included in the Touch ID screen.

<img src="guides/touchid/touch-id-screen-local-auth.png" width="320" />

This overlay is native and cannot be customized. Only the reason text could be changed. 

The rest of the texts and the action options will be localized by the OS using the current device locale language.

### Authentication Reply JS listener

Depending on the user feedback, we will have different results back in the **Appverse.Security.onLocalAuthenticationWithTouchIDReply** listener method.

This listener receives 2 arguments:

* **status** : enum integer with the following possible values: 
	+ **Appverse.Security.LA_STATUS_SUCCESS**, 
	+ **Appverse.Security.LA_STATUS_RETRY_EXCEEDED**, 
	+ **Appverse.Security.LA_STATUS_USER_CANCELED**, 
	+ and **Appverse.Security.LA_STATUS_USER_FALLBACK**
* **errorDescription**: description of the error received. This text shouldn't be used for displaying it to the user. The app should match the above status integer with appropriate localized messages in the app.

The following are the possible user feedbacks:

* User **cancels** the authentication (by clicking the Cancel button): status returned will be **Appverse.Security.LA_STATUS_USER_CANCELED**.
* User selects another authentication mechanism (by clicking the "Enter Password" button): status returned will be **Appverse.Security.LA_STATUS_USER_FALLBACK**.
	+ Applications should implement this fallback in the JS code to allow users to skip the Touch ID authentication.
* User puts a registered valid fingerprint in the device Home button: status returned will be **Appverse.Security.LA_STATUS_SUCCESS**.
* User puts an invalid or not registered fingerprint in the device Home button: status returned will be **Appverse.Security.LA_STATUS_RETRY_EXCEEDED** after the last possible retry. 
* The overlay won't dismiss and get back till the user exceeds the limit of wrong retries, or cancels, or selects the fallback

### Touch ID Not Available JS listener

If the Touch ID is not available on the device, the Appverse iOS platfom will send to the app the **Appverse.Security.onTouchIDNotAvailable** JS listener when calling the Appverse.Security.StartLocalAuthenticationWithTouchID method.

The following are the possible reasons of non availability:

* device is under iOS 8
* device is iOS 8 , but hardware doe snot provide this feature
* device is iOS 8, but user has not activated the passcode protection and hasn't registered any fingerprint. This situation is considered by the OS as feature not available.

In this case, the Appverse.Security.onLocalAuthenticationWithTouchIDReply listener method won't be called.

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