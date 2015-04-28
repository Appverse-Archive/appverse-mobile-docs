<!--embed src="guides/graphical_resources/10112012_Resoluciones.pdf" width="1540" height="1020" style="border: 1px solid;"-->

Graphical Resources for Apps
====================

Overview
--------------------
The following are the graphical resources you should provide in your Appverse projects to build the corresponding platform binaries.

The location for those files is:

+ Folder **[root_project]/iOSResources**:  for iOS icons and splashscreens
+ Folder **[root_project]/AndroidResources**:  for Android icons and splashscreens
+ Folder **[root_project]/WPResources**:  for Windows Phone 8.1 icons and splashscreens

Some of the icons are required to be present in order to make a successful build (for the target platform). Please check which one are required.

You should provide the name and the dimensions for each PNG file as specified in the tables below.

You could find the example templates for all resolutions at the <b>Showcase</b> sample project inside our <b>Appverse Mobile Emulator</b>

iOS - Icons
--------------------

### Smartphone

<pre>


Name					Build Required		Dimensions			Description			Devices
------------			---------------		------------		------------		------------
Icon-60@2x.png			[required]			120 x 120 px		App Icon			iPhone Retina 
Icon-60@3x.png			[optional]			180 x 180 px		Home screen			iPhone 6 Plus (iOS 8)
iTunesArtwork@2x.png	[optional]			1024 x 1024 px		Ad Hoc iTunes 		iPhone Retina 

</pre>

(*) The "Icon-60@2x.png" is required by the Appverse platform to be used as the loading icon for the OverTheAir distribution. If not provided by the project, the platform will place its own.

<table cellpadding="0" cellspacing="0">
<tr>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-60@2x.png" title="iPhone Retina App Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-60@2x.png<br>[120 x 120 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
	<figure>
  		<img src="resources/images/Icon-60@3x.png" title="iPhone Retina App Icon" style="border: 5px dashed grey; padding:2px;">
	  	<figcaption style="color:grey;text-align:center;">Icon-60@3x.png<br>[180 x 180 px]</figcaption>
	</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
	<figure>
  		<img src="resources/images/iTunesArtwork@2x.png" title="iPhone Retina App Icon" style="border: 5px dashed grey; padding:2px;">
	  	<figcaption style="color:grey;text-align:center;">iTunesArtwork@2x.png<br>[1024 x 1024 px]</figcaption>
	</figure>
</td>
</tr>
</table>

### Tablet

<pre>

Name					Build Required		Dimensions			Description			Devices
------------			---------------		------------		------------		------------
Icon-76.png				[required]			 76 x  76 px		App Icon			iPad 
Icon-76@2x.png			[optional]			152 x 152 px		App Icon			iPad Retina 

</pre>

<table cellpadding="0" cellspacing="0">
<tr>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-76.png" title="iPad App Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-76.png<br>[76 x 76 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-76@2x.png" title="iPad Retina App Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-76@2x.png<br>[152 x 152 px]</figcaption>
</figure>
</td>
</tr>
</table>

### Smartphones and Tablets

<pre>

Name					Build Required		Dimensions			Description			Devices
------------			---------------		------------		------------		------------
Icon-Small.png			[optional]		 	 29 x 29 px			Settings Icon		iPad 2 and iPad mini 
Icon-Small@2x.png		[optional]			 58 x 58 px			Settings Icon		All retina devices  
Icon-Small@3x.png		[optional]		 	 87 x 87 px			Settings Icon		iPhone 6 Plus
Icon-Small-40.png		[optional]			 40 x 40 px			Spotlight Icon		iPad 2 and iPad mini 
Icon-Small-40@2x.png	[optional]			 80 x 80 px			Spotlight Icon		All retina devices  

</pre>

<table cellpadding="0" cellspacing="0">
<tr>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-Small.png" title="iPhone Settings Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-Small.png<br>[29 x 29 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-Small@2x.png" title="iPhone Retina Settings Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-Small@2x.png<br>[58 x 58 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-Small@3x.png" title="iPhone Retina Settings Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-Small@3x.png<br>[87 x 87 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-Small-40.png" title="iPhone Settings Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-Small-40.png<br>[40 x 40 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-Small-40@2x.png" title="iPhone Retina Settings Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-Small-40@2x.png<br>[80 x 80 px]</figcaption>
</figure>
</td>
</tr>
</table>


iOS - Splash Screens
--------------------

### Smartphone

<pre>

Name					Build Required		Dimensions			Description					Devices
------------			---------------		------------		------------				------------
Default@2x.png			[optional]			640 x  960 px		Launch Image - Portrait		iPhone Retina 3.5-inch*
Default-568h@2x.png		[optional]			640 x 1136 px		Launch Image - Portrait		iPhone Retina 4-inch (iPhone 5)*
Default-667h@2x.png		[optional]			750 × 1334 px		Launch Image - Portrait		iPhone Retina 4.7-inch (iPhone 6)
Default-736h@3x.png		[optional]			1242 × 2208 px		Launch Image - Portrait		iPhone Retina 5.5-inch (iPhone 6 Plus)
Default-375h@2x.png		[optional]			1334 × 750 px		Launch Image - Landscape		iPhone Retina 4.7-inch (iPhone 6)
Default-414h@3x.png		[optional]			1242 × 2208 px		Launch Image - Landscape		iPhone Retina 5.5-inch (iPhone 6 Plus)

</pre>

(*) Landscape launch images are not used in these iPhones (smartphone) as there is no possible to launch an app in landscape mode in those devices.
 
<table cellpadding="0" cellspacing="0">
<tr>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Default@2x.png" title="iPhone Retina 3.5-inch Launch Image - Portrait" style="border: 5px dashed grey; padding:2px;" width="320px" height="480px">
  <figcaption style="color:grey;text-align:center;">Default@2x.png<br>[640 x 960 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Default-568h@2x.png" title="iPhone Retina 4-inch Launch Image - Portrait" style="border: 5px dashed grey; padding:2px;"  width="320px" height="568px">
  <figcaption style="color:grey;text-align:center;">Default-568h@2x.png<br>[640 x 1136 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Default-667h@2x.png" title="iPhone Retina 4.7-inch Launch Image - Portrait" style="border: 5px dashed grey; padding:2px;"  width="320px" height="568px">
  <figcaption style="color:grey;text-align:center;">Default-667h@2x.png<br>[750 × 1334 px]</figcaption>
</figure>
</td>
</tr>

<tr>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Default-736h@3x.png" title="iPhone Retina 5.5-inch Launch Image - Portrait" style="border: 5px dashed grey; padding:2px;"  width="320px" height="568px">
  <figcaption style="color:grey;text-align:center;">Default-736h@3x.png<br>[1242 × 2208 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Default-375h@2x.png" title="iPhone Retina 4.7-inch Launch Image - Landscape" style="border: 5px dashed grey; padding:2px;"  width="568px" height="320px">
  <figcaption style="color:grey;text-align:center;">Default-375h@2x.png<br>[1334 × 750 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Default-414h@3x.png" title="iPhone Retina 5.5-inch Launch Image - Landscape" style="border: 5px dashed grey; padding:2px;"  width="568px" height="320px">
  <figcaption style="color:grey;text-align:center;">Default-414h@3x.png<br>[2208 × 1242 px]</figcaption>
</figure>
</td>
</tr>
</table>

(*) Images displayed reduced (real dimension on download)
 
### Tablet

The new iOS 7 does not require anymore to reserve space for the status bar (20px or 40px previously removed from total height)

<pre>

Name						Build Required		Dimensions			Description					Devices
------------				---------------		------------		------------				------------
Default-Portrait.png		[optional]			 768 x 1024 px		Launch Image - Portrait		iPad
Default-Portrait@2x.png		[optional]			1536 x 2048 px		Launch Image - Portrait		iPad Retina
Default-Landscape.png		[optional]			1024 x  768 px		Launch Image - Landscape	iPad
Default-Landscape@2x.png	[optional]			2048 x 1536 px		Launch Image - Landscape	iPad Retina

</pre>

<table cellpadding="0" cellspacing="0">
<tr>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Default-Portrait.png" title="iPad Launch Image - Portrait" style="border: 5px dashed grey; padding:2px;" width="192px" height="256px">
  <figcaption style="color:grey;text-align:center;">Default-Portrait.png<br>[768 x 1024 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Default-Portrait@2x.png" title="iPad Retina Launch Image - Portrait" style="border: 5px dashed grey; padding:2px;" width="384px" height="512px">
  <figcaption style="color:grey;text-align:center;">Default-Portrait@2x.png<br>[1536 x 2048 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Default-Landscape.png" title="iPhone Launch Image - Landscape" style="border: 5px dashed grey; padding:2px;"  width="256px" height="192px">
  <figcaption style="color:grey;text-align:center;">Default-Landscape.png<br>[1024 x 768 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Default-Landscape@2x.png" title="iPhone Launch Image - Landscape" style="border: 5px dashed grey; padding:2px;"  width="512px" height="384px">
  <figcaption style="color:grey;text-align:center;">Default-Landscape@2x.png<br>[2048 x 1536 px]</figcaption>
</figure>
</td>
</tr>
</table>

(*) Images displayed reduced (real dimension on download)

Android - Icons
--------------------

### Smartphone and Tablets

<pre>

Name					Build Required		Dimensions			Description			Devices (screebn density)
------------			---------------		------------		------------		------------
Icon-36.png				[optional]			 36 x  36 px		App Icon			LDPI
Icon-48.png				[optional]			 48 x  48 px		App Icon			MDPI
Icon-72.png				[optional]			 72 x  72 px		App Icon			HDPI
Icon-96.png				[optional]			 96 x  96 px		App Icon			XHDPI
Icon-144.png			[optional]			144 x 144 px		App Icon			XXHDPI
Icon-192.png			[optional]			192 x 192 px		App Icon			XXXHDPI  (not yet supported)

</pre>

<table cellpadding="0" cellspacing="0">
<tr>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-36.png" title="LDPI App Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-36.png<br>[36 x 36 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-48.png" title="MDPI App Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-48.png<br>[48 x 48 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-72.png" title="HDPI App Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-72.png<br>[72 x 72 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-96.png" title="XHDPI App Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-96.png<br>[96 x 96 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-144.png" title="XHDPI App Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-144.png<br>[144 x 144 px]</figcaption>
</figure>
</td>
</tr>
</table>

Android - Splash Screens
--------------------

### Smartphone and Tablets

<pre>

Name						Build Required		Dimensions			Description					Devices
------------				---------------		------------		------------				------------
launch_portrait.png			[optional]			 640 x  960 px		Launch Image - Portrait		Smartphone
launch_portrait_tablet.png	[optional]			 800 x 1232 px		Launch Image - Portrait		Tablet
launch_landscape.png		[optional]			1024 x  748 px		Launch Image - Landscape	Smartphone
launch_landscape_tablet.png	[optional]			1280 x  752 px		Launch Image - Landscape	Tablet

</pre>

<table cellpadding="0" cellspacing="0">
<tr>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/launch_portrait.png" title="Smartphone Launch Image - Portrait" style="border: 5px dashed grey; padding:2px;" width="160px" height="240px">
  <figcaption style="color:grey;text-align:center;">launch_portrait.png<br>[640 x 960 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/launch_portrait_tablet.png" title="Tablet Launch Image - Portrait" style="border: 5px dashed grey; padding:2px;" width="200px" height="308px">
  <figcaption style="color:grey;text-align:center;">launch_portrait_tablet.png<br>[800 x 1232 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/launch_landscape.png" title="Smartphone Launch Image - Landscape" style="border: 5px dashed grey; padding:2px;"  width="256px" height="192px">
  <figcaption style="color:grey;text-align:center;">launch_landscape.png<br>[1024 x 768 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/launch_landscape_tablet.png" title="Tablet Launch Image - Landscape" style="border: 5px dashed grey; padding:2px;"  width="320px" height="188px">
  <figcaption style="color:grey;text-align:center;">launch_landscape_tablet.png<br>[1280 x 752 px]</figcaption>
</figure>
</td>
</tr>
</table>

(*) Images displayed reduced (real dimension on download)

Windows Phone 8.1 - Icons
--------------------

### Smartphone

<pre>


Name						Build Required			Dimensions			Description
------------				---------------			------------		------------
Logo.scale-100.png				[required]			150 x 150 px		App Icon (100% scale) - Displayed in Spring Board
Logo.scale-140.png				[required]			210 x 210 px		App Icon (140% scale) - Displayed in Spring Board
Logo.scale-240.png				[required]			360 x 360 px		App Icon (240% scale) - Displayed in Spring Board
SmallLogo.scale-100.png			[required]			44 x 44 px			Small App Icon (100% scale) - Displayed in Application List
SmallLogo.scale-140.png			[required]			62 x 62 px			Small App Icon (140% scale) - Displayed in Application List
SmallLogo.scale-240.png			[required]			106 x 106 px		Small App Icon (240% scale) - Displayed in Application List
Square71x71Logo.scale-100.png	[required]			71 x 71 px			Small App Icon (100% scale) - Displayed in Spring Board
Square71x71Logo.scale-140.png	[required]			99 x 99 px			Small App Icon (140% scale) - Displayed in Spring Board
Square71x71Logo.scale-240.png	[required]			170 x 170 px		Small App Icon (240% scale) - Displayed in Spring Board
WideLogo.scale-100.png			[required]			310 x 150 px		Wide App Icon (100% scale) - Displayed in Spring Board
WideLogo.scale-140.png			[required]			434 x 210 px		Wide App Icon (140% scale) - Displayed in Spring Board
WideLogo.scale-240.png			[required]			744 x 360 px		Wide App Icon (240% scale) - Displayed in Spring Board
StoreLogo.scale-100.png			[required]			50 x 50 px			Store App Icon (100% scale) - Displayed in Windows Phone Store
StoreLogo.scale-140.png			[required]			70 x 70 px			Store App Icon (140% scale) - Displayed in Windows Phone Store
StoreLogo.scale-240.png			[required]			120 x 120 px		Store App Icon (240% scale) - Displayed in Windows Phone Store
BadgeLogo.scale-100.png			[optional]			24 x 24 px			Badge App Icon (100% scale) - Displayed in Notifications Center
BadgeLogo.scale-140.png			[optional]			33 x 33 px			Badge App Icon (140% scale) - Displayed in Notifications Center
BadgeLogo.scale-240.png			[optional]			58 x 58 px			Badge App Icon (240% scale) - Displayed in Notifications Center

</pre>

<table cellpadding="0" cellspacing="0">
<tr>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Logo.scale-100.png" title="App Icon (100% scale)" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Logo.scale-100.png<br>[150 x 150 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Logo.scale-140.png" title="App Icon (140% scale)" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Logo.scale-140.png<br>[210 x 210 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Logo.scale-240.png" title="App Icon (240% scale)" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Logo.scale-240.png<br>[360 x 360 px]</figcaption>
</figure>
</td>
</tr>
<tr>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/SmallLogo.scale-100.png" title="Small App Icon (100% scale)" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">SmallLogo.scale-100.png<br>[44 x 44 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/SmallLogo.scale-140.png" title="Small App Icon (140% scale)" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">SmallLogo.scale-140.png<br>[62 x 62 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/SmallLogo.scale-240.png" title="Small App Icon (240% scale)" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">SmallLogo.scale-240.png<br>[106 x 106 px]</figcaption>
</figure>
</td>
</tr>
<tr>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Square71x71Logo.scale-100.png" title="Small App Icon (100% scale) - Spring Board" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Square71x71Logo.scale-100.png<br>[71 x 71 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Square71x71Logo.scale-140.png" title="Small App Icon (140% scale) - Spring Board" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Square71x71Logo.scale-140.png<br>[99 x 99 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Square71x71Logo.scale-240.png" title="Small App Icon (240% scale) - Spring Board" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Square71x71Logo.scale-240.png<br>[170 x 170 px]</figcaption>
</figure>
</td>
</tr>
<tr>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/WideLogo.scale-100.png" title="Wide App Icon (100% scale) - Spring Board" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">WideLogo.scale-100.png<br>[310 x 150 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/WideLogo.scale-140.png" title="Wide App Icon (140% scale) - Spring Board" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">WideLogo.scale-140.png<br>[434 x 210 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/WideLogo.scale-240.png" title="Wide App Icon (240% scale) - Spring Board" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">WideLogo.scale-240.png<br>[744 x 360 px]</figcaption>
</figure>
</td>
</tr>
<tr>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/StoreLogo.scale-100.png" title="Store App Icon (100% scale)" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">StoreLogo.scale-100.png<br>[50 x 50 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/StoreLogo.scale-140.png" title="Store App Icon (140% scale)" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">StoreLogo.scale-140.png<br>[70 x 70 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/StoreLogo.scale-240.png" title="Store App Icon (240% scale)" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">StoreLogo.scale-240.png<br>[120 x 120 px]</figcaption>
</figure>
</td>
</tr>
<tr>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/BadgeLogo.scale-100.png" title="Badge App Icon (100% scale) - Notifications" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">BadgeLogo.scale-100.png<br>[24 x 24 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/BadgeLogo.scale-140.png" title="Badge App Icon (140% scale) - Notifications" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">BadgeLogo.scale-140.png<br>[33 x 33 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/BadgeLogo.scale-240.png" title="Badge App Icon (240% scale) - Notifications" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">BadgeLogo.scale-240.png<br>[58 x 58 px]</figcaption>
</figure>
</td>
</tr>
</table>

Windows Phone 8.1 - Splash Screens
--------------------

### Smartphone

<pre>


Name						Build Required		Dimensions			Description
------------				---------------		------------		------------
SplashScreen.scale-100.png	[required]			480 x 800 px		Launch Image (100% scale)
SplashScreen.scale-140.png	[required]			672 x 1120 px		Launch Image (140% scale)
SplashScreen.scale-240.png	[required]			1152 x 1920 px		Launch Image (240% scale)

</pre>

<table cellpadding="0" cellspacing="0">
<tr>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/SplashScreen.scale-100.png" title="Smartphone Launch Image (100% scaled)" style="border: 5px dashed grey; padding:2px;" width="240px" height="400px">
  <figcaption style="color:grey;text-align:center;">SplashScreen.scale-100.png<br>[480 x 800 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/SplashScreen.scale-140.png" title="Smartphone Launch Image (140% scaled)" style="border: 5px dashed grey; padding:2px;" width="336px" height="560px">
  <figcaption style="color:grey;text-align:center;">SplashScreen.scale-140.png<br>[672 x 1120 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/SplashScreen.scale-240.png" title="Smartphone Launch Image (240% scaled)" style="border: 5px dashed grey; padding:2px;"  width="256px" height="192px">
  <figcaption style="color:grey;text-align:center;">SplashScreen.scale-240.png<br>[1152 x 1920 px]</figcaption>
</figure>
</td>
</tr>
</table>

(*) Images displayed reduced (real dimension on download)
