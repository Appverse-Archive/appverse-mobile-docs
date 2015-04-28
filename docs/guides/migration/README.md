Migration from Appverse 4.x to 5.x
====================

HOW-TO
---------------------
In order to migrate propertly and app you must be aware about several significants changes.

1. All call are **ASYNCHRONOUS**, and accordingly returns void so you will need to encapsulate the appverse return value in a **global callback function** and extract all the code where this previously returned variable was involved. This could result in some major changes due to the posibility of chaining Appverse calls and due to the scope all the vars involved that may you must change the scope from local to global.

2. All Async object has been removed from API root objects, so any apearance of Appverse.IO.**Async** should be replaced for Appverse.IO

3. All the local content is populated inmediately and should be accessed without calling the method to prevent the overhead:
	1. **Appverse.OSInfo** object replaces the previously (not removed) Appverse.System.GetOsInfo
	2. **Appverse.HwInfo** object replaces the previously (not removed) Appverse.System.GetOSHardwareInfo
	3. **Appverse.LocalizedLiterals** object contains all the info registered in the i18n plists and should be managed from here istead calling its old methods
	4. **Appverse.CurrentDeviceLocale** object contains the Appverse.System.GetLocaleCurrent previously returned data
	5. **Appverse.IOServices** array contains the services declared un the io xml and should be accessed this way. 
	
4. Now we expose a new value and listener to make the app aware of the current network connectivity active interface:
	1. **Appverse.Net.NetworkStatus** will have the value of the interface being used to access network, possible values:
		1. **Appverse.Net.NETWORKTYPE_UNKNOWN**
		2. **Appverse.Net.NETWORKTYPE_3G**
		3. **Appverse.Net.NETWORKTYPE_WIFI**
	2. You can override a new listener: **Appverse.Net.onConnectivityChange( NetworkType )** if you want the app reacts to this event.
	3. Before testing the connectivity against a host you may check this value.






Working on...
--------------------------