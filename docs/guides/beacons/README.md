Monitoring Beacon Devices
====================

What is a Beacon?
---------------------

A **Beacon** is a device designed to attact attencion to a specific location emiting a Bluetooth Low Energy (**BLE**) signal.

There are two different approaches due to the platform limitations.

### Android
For Android you could just call:

**BEWARE**: You must have your Bluetooth active for using this API's.

* **Appverse.Beacon.StartMonitoringAllRegions()** or
* **Appverse.Beacon.StartMonitoringRegion(UUID)** with the UUID of the region you want to track, the UUID is a unique identifier for a group of beacons, you can get this data by calling the previous **Appverse.Beacon.StartMonitoringAllRegions()** or just looking for it in your beacon device provider info.

After 5 seconds of calling any of this method, the native system will call **Appverse.Beacon.StopMonitoringBeacons()** and invoke the **Beacon** events listed bellow.

### iOS

* **Appverse.Beacon.StartMonitoringRegion(UUID)** with the UUID of the region you want to track, the UUID is a unique identifier for a group of beacons, you can get this data by calling the previous **Appverse.Beacon.StartMonitoringAllRegions()** or just looking for it in your beacon device provider info.

After 5 seconds of calling any of this method, the native system will call **Appverse.Beacon.StopMonitoringBeacons()** and invoke the **Beacon** events listed bellow.

### Beacons Events
* **Appverse.Beacon.OnEntered**: Lets your app be aware that a previously detected beacon is found again.
* **Appverse.Beacon.OnExited**: Lets your app to be aware that a previously detected beacon is not found.
* **Appverse.Beacon.OnDiscover**: Lets your app to be aware that a new beacon is discovered.
* **Appverse.Beacon.OnUpdateProximity**: Lets your app to be aware that the distance of a known beacon has changed.

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
	
	





