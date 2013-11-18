Ext.data.JsonP.launch_applications({"guide":"<h1>Launching Applications</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/launch_applications-section-1'>Overview</a></li>\n<li><a href='#!/guide/launch_applications-section-2'>Configure apps to launch</a></li>\n<li><a href='#!/guide/launch_applications-section-3'>Configuration Tips</a></li>\n<li><a href='#!/guide/launch_applications-section-4'>New System API methods</a></li>\n<li><a href='#!/guide/launch_applications-section-5'>Allow other apps to launch your app</a></li>\n<li><a href='#!/guide/launch_applications-section-6'>Receive parameters on launched</a></li>\n</ol>\n</div>\n\n<h2 id='launch_applications-section-1'>Overview</h2>\n\n<p>In some cases, it is required to launch another mobile application directly from an application.</p>\n\n<p>In addition, it could be required to pass some data to the just launched application.</p>\n\n<p>Each mobile platform has each own way to launch other applications:</p>\n\n<ul>\n<li><p><strong>iOS apps</strong> define an <strong>URI scheme</strong> to be called.<br/>And data is passed using a URI <strong>query string</strong>, with the URL standard parameters format: <i>any_desired_path/?param1=value1&amp;param2=value2&amp;....</i></p></li>\n<li><p><strong>Android apps</strong> define <strong>Intents</strong> (Activity) to be launched with some paramaters: action, category, component name, etc.</p></li>\n</ul>\n\n\n<p>As we work with <strong>hybrid applications</strong> - where the logic is in the javascript code - we need to make this feature accessible via the <strong>javascript</strong> code, using <strong>common interfaces</strong> that will behave differently in each platform.</p>\n\n<h2 id='launch_applications-section-2'>Configure apps to launch</h2>\n\n<p>In order to provide the required parameters for launching apps in each platform; but also having the same common javascript interfaces to launch applications, a new <strong>configuration</strong> file is provided by our platform:</p>\n\n<p>Name: <strong>launch-config.xml</strong></p>\n\n<p>Location: <strong>&lt;project_root&gt;/Web/app/config/</strong>  folder</p>\n\n<p>Example:</p>\n\n<pre><code>&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;\n&lt;launch-config&gt;\n\n&lt;apps&gt;\n\n    &lt;!-- The following are examples to call native applications in both platforms iOS and Android --&gt;\n\n    &lt;!--    example: launching Mail native application.\n\n            iOS:\n            mailto:${EMAIL_ADDRESS}?cc=${EMAIL_ADDRESS_CC}&amp;subject=Greetings\n\n            Android: \n            Using an implicit intent with the action SEND and a plain text mime type. In this case, no URI scheme is used.\n            Parameters passed when launching application (using the <a href=\"#!/api/Unity.System-method-LaunchApplication\" rel=\"Unity.System-method-LaunchApplication\" class=\"docClass\">Unity.System.LaunchApplication</a> method) via the query string argument will be parsed and \n            passed to the Intent as extras (name/value string pairs)\n    --&gt;\n    &lt;app name=\"appmail\"&gt;\n        &lt;ios uri-scheme=\"mailto\" uri-remove-double-slash=\"true\"/&gt;\n        &lt;android-implicit-intent action=\"android.intent.action.SEND\" mime-type=\"text/plain\" parse-query-as-intent-extras=\"true\"/&gt;\n    &lt;/app&gt;\n\n    &lt;!--    example: launching telephone native application.\n\n            iOS: tel:${PHONENUMBER}\n\n            Android: \n            Using an implicit intent with the action DIAL and the \"tel:\" URI scheme.\n    --&gt;\n    &lt;app name=\"apptel\"&gt;\n        &lt;ios uri-scheme=\"tel\" uri-remove-double-slash=\"true\"/&gt;\n        &lt;android-implicit-intent action=\"android.intent.action.DIAL\" uri-scheme=\"tel\" uri-remove-double-slash=\"true\" /&gt;\n    &lt;/app&gt;\n\n    &lt;!--    example: launching Maps native application.\n\n            iOS: \n            Specific URL. Example: http://maps.apple.com/?daddr?San+Francisco,+CA&amp;saddr=cupertino\n\n            Android: \n\n            Two options, using explicit intent, or using the action VIEW with a specific \"geo:\" URI scheme\n\n            // example: map point based on address\n            geo:0,0?q=1600+Amphitheatre+Parkway,+Mountain+View,+California\n\n            // Or map point based on latitude/longitude\n            geo:37.422219,-122.08364?z=14\n\n\n    --&gt;\n    &lt;app name=\"appmaps\"&gt;\n        &lt;ios uri-scheme=\"http\" /&gt;\n        &lt;android-explicit-intent component-name=\"com.google.android.apps.maps/com.google.android.maps.MapsActivity\"/&gt;\n    &lt;/app&gt; \n\n    &lt;app name=\"appmaps-google\"&gt;\n        &lt;ios uri-scheme=\"http\" /&gt;\n        &lt;android-implicit-intent action=\"android.intent.action.VIEW\" uri-scheme=\"geo\" uri-remove-double-slash=\"true\" /&gt;\n    &lt;/app&gt;\n\n&lt;/apps&gt;\n\n&lt;/launch-config&gt;\n</code></pre>\n\n<p>This file defines a list of <strong>apps</strong> that could be launched using the <strong><a href=\"#!/api/Unity.System\" rel=\"Unity.System\" class=\"docClass\">Unity.System</a></strong> API.</p>\n\n<p>Each app is identified by its <strong>name</strong> attribute. Names should be unique. If you repeat an app name on this config file, the first application with the matched name will be used.</p>\n\n<p>Inside the <strong>app</strong> node, you could include three kind of nested elements:</p>\n\n<ul>\n<li><p><strong>&lt;ios&gt;</strong> : which contains the parameters needed to launch this application in the iOS platform.</p></li>\n<li><p><strong>&lt;android-implicit-intent&gt;</strong> : which contains the parameters needed to launch this application in the Android platform using an <strong>implicit intent</strong>.</p></li>\n<li><p><strong>&lt;android-explicit-intent&gt;</strong> : which contains the parameters needed to launch this application in the Android platform using an <strong>explicit intent</strong>.</p></li>\n</ul>\n\n\n<p>Those nested application elements are optional, and they are only used in the corresponding platform, and ignored for the rest of platforms.</p>\n\n<p>See more information about Android intents at: <a href=\"http://developer.android.com/guide/components/intents-filters.html#ires\" target=\"_blank\">Android Intent Filters</a></p>\n\n<h2 id='launch_applications-section-3'>Configuration Tips</h2>\n\n<ul>\n<li><p>For iOS applications, use the <strong>&lt;ios /&gt;</strong> node.</p>\n\n<ul>\n<li>Use the <strong>uri-scheme</strong> attribute to define the URL scheme to use to open that url.</li>\n<li>Parameters are passed when launching application (using the <strong><a href=\"#!/api/Unity.System-method-LaunchApplication\" rel=\"Unity.System-method-LaunchApplication\" class=\"docClass\">Unity.System.LaunchApplication</a></strong> method) via a query string.</li>\n</ul>\n</li>\n<li><p>For Android application, there are two options:</p>\n\n<ul>\n<li><p>Launch an explicit intent: <strong>&lt;android-explicit-intent /&gt;</strong></p>\n\n<p>  Explicit Intents have specified a component, which provides the exact class to be run.</p>\n\n<ul>\n<li>Use the <strong>component-name</strong> attribute to define that component name (&lt;package_name&gt;/&lt;fully_qualified_class_name&gt;) on the native application to be launched.</li>\n</ul>\n</li>\n<li><p>Launch an implicit intent: <strong>&lt;android-implicit-intent /&gt;</strong></p>\n\n<p>  Implicit Intents have not specified a component.\n  Instead, they must include enough information for the system to determine which of the available components is best to run for that intent.</p>\n\n<p>  Possible node attributes (all optionals) :</p>\n\n<ul>\n<li><p><strong>action</strong> [string] : The general action to be performed. For example, <strong>android.intent.action.VIEW</strong>. <br/> See other possible values at: <a href=\"http://developer.android.com/reference/android/content/Intent.html\" target=\"_blank\">Android Intent</a></p></li>\n<li><p><strong>category</strong> [string] : Gives additional information about the action to execute. For example, <strong>android.intent.category.LAUNCHER</strong>. <br/> See other possible values at: <a href=\"http://developer.android.com/reference/android/content/Intent.html\" target=\"_blank\">Android Intent</a></p></li>\n<li><p><strong>mime-type</strong> [string] : Specifies an explicit type (a MIME type) of the intent data. <br/> Normally the type is inferred from the data itself. By setting this attribute, you disable that evaluation and force an explicit type.</p></li>\n<li><p><strong>uri-scheme</strong> [string] : Depending on the intent you want to launch, the data might be a Uri. <br/> See more information at:\n  <br/><a href=\"http://developer.android.com/reference/android/net/Uri.html\" target=\"_blank\">http://developer.android.com/reference/android/net/Uri.html</a>\n  <br/><a href=\"http://developer.android.com/training/basics/intents/sending.html\" target=\"_blank\">http://developer.android.com/training/basics/intents/sending.html</a></p></li>\n</ul>\n\n\n<p>  Parameters are passed when launching application (using the <strong><a href=\"#!/api/Unity.System-method-LaunchApplication\" rel=\"Unity.System-method-LaunchApplication\" class=\"docClass\">Unity.System.LaunchApplication</a></strong> method) via a query string.</p>\n\n<ul>\n<li><strong>uri-remove-double-slash</strong> [boolean] : true to remove the double slashes from the URI scheme (default: false)</li>\n</ul>\n</li>\n<li><p>For both implicit and explicit intents:</p>\n\n<ul>\n<li>Use the <strong>parse-query-as-intent-extras</strong> attribute (setting a \"true\" value) for indicating to the platform that the data received as query string on the <strong><a href=\"#!/api/Unity.System-method-LaunchApplication\" rel=\"Unity.System-method-LaunchApplication\" class=\"docClass\">Unity.System.LaunchApplication</a></strong> method should be parsed and included as <strong>intent extras</strong> when launching this intent. Default value is false.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><p>Default URL schemes contain the \"//\" characters in the syntax (example: <i>myapp://mypath?param=value&amp;param=value</i>). <br/> To remove the double slashes set the <strong>uri-remove-double-slash</strong> attribute to true in both <strong>&lt;ios/&gt; or </strong>&lt;android-implicit-intent/&gt; nodes</p></li>\n</ul>\n\n\n<h2 id='launch_applications-section-4'>New System API methods</h2>\n\n<p>Taking this into account, the platform has included some methods on the <strong><a href=\"#!/api/Unity.System\" rel=\"Unity.System\" class=\"docClass\">Unity.System</a></strong> API in order to:</p>\n\n<ul>\n<li>Get all applications configured to be launched using the <strong><a href=\"#!/api/Unity.System-method-GetApplications\" rel=\"Unity.System-method-GetApplications\" class=\"docClass\">Unity.System.GetApplications</a></strong> method.\n\n<ul>\n<li>This method will return an array of <strong><a href=\"#!/api/Unity.System.App\" rel=\"Unity.System.App\" class=\"docClass\">Unity.System.App</a></strong> objects configured at the <strong>/app/config/launch-config.xml</strong> file.</li>\n<li>Only the platform specific nodes will be returned inside that objects: <strong>iOSApp</strong> field for iOS platform, and <strong>AndroidApp</strong> field for Android platform.</li>\n</ul>\n</li>\n<li>Get an application configured to be launched identified by its <strong>name</strong>, using the <strong><a href=\"#!/api/Unity.System-method-GetApplication\" rel=\"Unity.System-method-GetApplication\" class=\"docClass\">Unity.System.GetApplication</a></strong> method.\n\n<ul>\n<li>This method will return an <strong><a href=\"#!/api/Unity.System.App\" rel=\"Unity.System.App\" class=\"docClass\">Unity.System.App</a></strong> object, that matches one of the apps configured at the <strong>/app/config/launch-config.xml</strong> file.</li>\n<li>Only the platform specific nodes will be returned inside that object: <strong>iOSApp</strong> field for iOS platform, and <strong>AndroidApp</strong> field for Android platform.</li>\n</ul>\n</li>\n<li>Using an <strong><a href=\"#!/api/Unity.System.App\" rel=\"Unity.System.App\" class=\"docClass\">Unity.System.App</a></strong> object obtained from the above methods, you could launch that application using the <strong><a href=\"#!/api/Unity.System-method-LaunchApplication\" rel=\"Unity.System-method-LaunchApplication\" class=\"docClass\">Unity.System.LaunchApplication</a></strong> method.\n\n<ul>\n<li>First argument of that method is the application object or the name of that application (platform will find it for you, saving one platform call from the javascript side)</li>\n<li>Second argument is the <strong>query</strong> string to pass application specific parameters when launching that app. In the format of: <i>any_desired_path/?param1=value1&amp;param2=value2&amp;....</i></li>\n</ul>\n</li>\n</ul>\n\n\n<h2 id='launch_applications-section-5'>Allow other apps to launch your app</h2>\n\n<p>Your application could be launched by other third-party applications if we define some <strong>properties</strong>.</p>\n\n<h3>For iOS</h3>\n\n<p>You should define which is the <strong>URL scheme</strong> used for your application.</p>\n\n<ul>\n<li>Think a scheme for your application desired URL scheme. Example: showcase</li>\n</ul>\n\n\n<p>For example, we have introduced the <strong>showcase</strong> scheme.</p>\n\n<p>Applications calling the following scheme: <b><i>showcase://</i></b> will launch our showcase application.</p>\n\n<p>For adding parameters, use the standard URL query string format:  <b><i>showcase://relativepath/?param1=abc&amp;param2=xyz</i></b></p>\n\n<p>Include the following required parameters in its <strong>Info.plist</strong>:</p>\n\n<pre><code>&lt;key&gt;CFBundleURLTypes&lt;/key&gt;\n&lt;array&gt;\n    &lt;dict&gt;\n        &lt;key&gt;CFBundleURLName&lt;/key&gt;\n        &lt;string&gt;com.gft.appverse.showcase&lt;/string&gt;\n        &lt;key&gt;CFBundleURLSchemes&lt;/key&gt;\n        &lt;array&gt;\n            &lt;string&gt;showcase&lt;/string&gt;\n        &lt;/array&gt;\n    &lt;/dict&gt;\n&lt;/array&gt;\n</code></pre>\n\n<p><img src=\"resources/images/information.png\"/> See more information at the <strong>Apple Developer</strong> documentation: <a href=\"https://developer.apple.com/library/ios/DOCUMENTATION/iPhone/Conceptual/iPhoneOSProgrammingGuide/AdvancedAppTricks/AdvancedAppTricks.html#//apple_ref/doc/uid/TP40007072-CH7-SW50\" target=\"_blank\">Implementing Custom URL Schemes</a></p>\n\n<p><img src=\"resources/images/information.png\"/> Check our sample application to see how other applications (in this case an iOS native application) could start our application: <a href=\"https://github.com/Appverse/appverse-mobile/tree/master/appverse-samples\" target=\"_balnk\"><b>iOSNativeTest</b></a></p>\n\n<h3>For Android</h3>\n\n<p>For launching our Android application, the platform has enabled the \"explicit mode\"; so you have to provided the specific component name (&lt;package_name&gt;/&lt;fully_qualified_class_name&gt;).</p>\n\n<p>The value other third-party should use to launch our application is:</p>\n\n<ul>\n<li>The component name available for this application to be launched. Example: com.gft.unity.poc.showcase/org.me.unity4jui_android.MainActivity</li>\n</ul>\n\n\n<p>For example, this application could be called by <strong>starting an android Intent</strong> with the component name:<br/><strong>com.gft.appverse.showcase/org.me.unity4jui_android.MainActivity</strong>.</p>\n\n<pre><code>Intent launchIntent = new Intent();\nString componentName = \"com.gft.unity.poc.showcase/org.me.unity4jui_android.MainActivity\";\nlaunchIntent.setComponent(ComponentName.unflattenFromString(componentName));\n\n// For adding parameters\nlaunchIntent.putExtra(\"param1\", \"value1\");\nlaunchIntent.putExtra(\"param2\", \"value2\");\n\nthis.startActivity(launchIntent);\n</code></pre>\n\n<p><img src=\"resources/images/information.png\"/> See the following link for further details about starting android applications: <a href=\"http://developer.android.com/training/basics/intents/index.html\" target=\"_blank\">http://developer.android.com/training/basics/intents/index.html</a></p>\n\n<p><img src=\"resources/images/information.png\"/> See the following link for further details about starting android applications with parameters: <a href=\"http://developer.android.com/training/sharing/send.html\" target=\"_blank\">http://developer.android.com/training/sharing/send.html</a></p>\n\n<p><img src=\"resources/images/information.png\"/> Check our sample application to see how other applications (in this case an Android native application) could start our application: <a href=\"https://github.com/Appverse/appverse-mobile/tree/master/appverse-samples\" target=\"_balnk\"><b>AndroidNativeTest</b></a></p>\n\n<h2 id='launch_applications-section-6'>Receive parameters on launched</h2>\n\n<p>If our application is launched by another application, it could receive <strong>extra parameters</strong>.</p>\n\n<p>Those parameters could be used to launch the app in a specific menu option, or html view, or simply to activate any action on the application (show a popup information, etc).</p>\n\n<p>Platform will handle those parameters, and will pass them to the javascript hybrid application using the following <strong>listener</strong>:</p>\n\n<ul>\n<li>To we aware about any launched data application should override the <strong><a href=\"#!/api/Unity-method-OnExternallyLaunched\" rel=\"Unity-method-OnExternallyLaunched\" class=\"docClass\">Unity.OnExternallyLaunched</a></strong> listener:\n\n<ul>\n<li>Applications should override/implement this method to be aware of being lanched by a third-party application, and should perform the desired javascript code on this case.</li>\n<li>Argument received is an array of <strong><a href=\"#!/api/Unity.System.LaunchData\" rel=\"Unity.System.LaunchData\" class=\"docClass\">Unity.System.LaunchData</a></strong> objects containing the launched parameters.</li>\n</ul>\n</li>\n</ul>\n\n","title":"Launching Applications"});