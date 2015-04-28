Ext.data.JsonP.touchid({"guide":"<h1 id='touchid-section-ios-touch-id-authentication'>iOS Touch ID Authentication</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ul>\n<li>1. <a href='#!/guide/touchid-section-overview'>Overview</a>\n </li>\n<li>2. <a href='#!/guide/touchid-section-ios-requirements'>iOS requirements</a>\n </li>\n<li>3. <a href='#!/guide/touchid-section-local-authentication'>Local Authentication</a>\n <ul>\n<li>3.1. <a href='#!/guide/touchid-section-api-method'>API method</a>\n </li>\n<li>3.2. <a href='#!/guide/touchid-section-authentication-reply-js-listener'>Authentication Reply JS listener</a>\n </li>\n<li>3.3. <a href='#!/guide/touchid-section-touch-id-not-available-js-listener'>Touch ID Not Available JS listener</a>\n </li>\n</ul></li>\n<li>4. <a href='#!/guide/touchid-section-security-keychain-protection'>Security Keychain Protection</a>\n <ul>\n<li>4.1. <a href='#!/guide/touchid-section-how-to-protect-keychain-items'>How to protect keychain items</a>\n </li>\n<li>4.2. <a href='#!/guide/touchid-section-what-does-it-imply%3F'>What does it imply?</a>\n </li>\n</ul></li>\n</ul></div>\n\n<h2 id='touchid-section-overview'>Overview</h2>\n\n<p>Touch ID is Apple's biometric fingerprint authentication technology, which was introduced with the iPhone 5S and iOS 8.</p>\n\n<p>Using this native feature applications can locally authenticate user, at any desired moment.</p>\n\n<p><strong>Appverse Mobile</strong> is including the Touch ID featue since <strong>version 5.0.7</strong> (April 2015), in two different ways:</p>\n\n<ul>\n<li><strong>Local Authentication</strong>: by opening the Biometrics authentication (native overlay) and capturing the \"user feedback\" to block or allow any operation in the app.</li>\n<li><strong>Security Keychain Protection</strong>: by protecting any stored security keychain item access by requesting the user an authentication via the device passcode or Touch fingerprint (this last is preferred if available).</li>\n</ul>\n\n\n<h2 id='touchid-section-ios-requirements'>iOS requirements</h2>\n\n<p>Only <strong>iOS 8</strong> devices are able to use the Touch ID feature for Local Authentication (via API).</p>\n\n<p>Touch ID was introduced in iOS 7 but it is limited to unlocking the device, App Store or iTunes usage, and authenticating in the iCloud keychain.</p>\n\n<p>In addition, even tough the device is running with iOS 8, due to hardware requirements Touch ID is only available on <strong>iPhone 5S and greater</strong> devices.</p>\n\n<h2 id='touchid-section-local-authentication'>Local Authentication</h2>\n\n<h3 id='touchid-section-api-method'>API method</h3>\n\n<p>Appverse mobile apps can launch the Touch ID authentication at any item by using the <strong><a href=\"#!/api/Appverse.Security-method-StartLocalAuthenticationWithTouchID\" rel=\"Appverse.Security-method-StartLocalAuthenticationWithTouchID\" class=\"docClass\">Appverse.Security.StartLocalAuthenticationWithTouchID</a></strong> method.</p>\n\n<p>This method has only 1 argument that is the <strong>reason</strong> text to be included in the Touch ID screen.</p>\n\n<p><img src=\"guides/touchid/touch-id-screen-local-auth.png\" width=\"320\" /></p>\n\n<p>This overlay is native and cannot be customized. Only the reason text could be changed.</p>\n\n<p>The rest of the texts and the action options will be localized by the OS using the current device locale language.</p>\n\n<h3 id='touchid-section-authentication-reply-js-listener'>Authentication Reply JS listener</h3>\n\n<p>Depending on the user feedback, we will have different results back in the <strong><a href=\"#!/api/Appverse.Security-event-onLocalAuthenticationWithTouchIDReply\" rel=\"Appverse.Security-event-onLocalAuthenticationWithTouchIDReply\" class=\"docClass\">Appverse.Security.onLocalAuthenticationWithTouchIDReply</a></strong> listener method.</p>\n\n<p>This listener receives 2 arguments:</p>\n\n<ul>\n<li><strong>status</strong> : enum integer with the following possible values:\n\n<ul>\n<li><strong><a href=\"#!/api/Appverse.Security-property-LA_STATUS_SUCCESS\" rel=\"Appverse.Security-property-LA_STATUS_SUCCESS\" class=\"docClass\">Appverse.Security.LA_STATUS_SUCCESS</a></strong>,</li>\n<li><strong><a href=\"#!/api/Appverse.Security-property-LA_STATUS_RETRY_EXCEEDED\" rel=\"Appverse.Security-property-LA_STATUS_RETRY_EXCEEDED\" class=\"docClass\">Appverse.Security.LA_STATUS_RETRY_EXCEEDED</a></strong>,</li>\n<li><strong><a href=\"#!/api/Appverse.Security-property-LA_STATUS_USER_CANCELED\" rel=\"Appverse.Security-property-LA_STATUS_USER_CANCELED\" class=\"docClass\">Appverse.Security.LA_STATUS_USER_CANCELED</a></strong>,</li>\n<li>and <strong><a href=\"#!/api/Appverse.Security-property-LA_STATUS_USER_FALLBACK\" rel=\"Appverse.Security-property-LA_STATUS_USER_FALLBACK\" class=\"docClass\">Appverse.Security.LA_STATUS_USER_FALLBACK</a></strong></li>\n</ul>\n</li>\n<li><strong>errorDescription</strong>: description of the error received. This text shouldn't be used for displaying it to the user. The app should match the above status integer with appropriate localized messages in the app.</li>\n</ul>\n\n\n<p>The following are the possible user feedbacks:</p>\n\n<ul>\n<li>User <strong>cancels</strong> the authentication (by clicking the Cancel button): status returned will be <strong><a href=\"#!/api/Appverse.Security-property-LA_STATUS_USER_CANCELED\" rel=\"Appverse.Security-property-LA_STATUS_USER_CANCELED\" class=\"docClass\">Appverse.Security.LA_STATUS_USER_CANCELED</a></strong>.</li>\n<li>User selects another authentication mechanism (by clicking the \"Enter Password\" button): status returned will be <strong><a href=\"#!/api/Appverse.Security-property-LA_STATUS_USER_FALLBACK\" rel=\"Appverse.Security-property-LA_STATUS_USER_FALLBACK\" class=\"docClass\">Appverse.Security.LA_STATUS_USER_FALLBACK</a></strong>.\n\n<ul>\n<li>Applications should implement this fallback in the JS code to allow users to skip the Touch ID authentication.</li>\n</ul>\n</li>\n<li>User puts a registered valid fingerprint in the device Home button: status returned will be <strong><a href=\"#!/api/Appverse.Security-property-LA_STATUS_SUCCESS\" rel=\"Appverse.Security-property-LA_STATUS_SUCCESS\" class=\"docClass\">Appverse.Security.LA_STATUS_SUCCESS</a></strong>.</li>\n<li>User puts an invalid or not registered fingerprint in the device Home button: status returned will be <strong><a href=\"#!/api/Appverse.Security-property-LA_STATUS_RETRY_EXCEEDED\" rel=\"Appverse.Security-property-LA_STATUS_RETRY_EXCEEDED\" class=\"docClass\">Appverse.Security.LA_STATUS_RETRY_EXCEEDED</a></strong> after the last possible retry.</li>\n<li>The overlay won't dismiss and get back till the user exceeds the limit of wrong retries, or cancels, or selects the fallback</li>\n</ul>\n\n\n<h3 id='touchid-section-touch-id-not-available-js-listener'>Touch ID Not Available JS listener</h3>\n\n<p>If the Touch ID is not available on the device, the Appverse iOS platfom will send to the app the <strong><a href=\"#!/api/Appverse.Security-event-onTouchIDNotAvailable\" rel=\"Appverse.Security-event-onTouchIDNotAvailable\" class=\"docClass\">Appverse.Security.onTouchIDNotAvailable</a></strong> JS listener when calling the <a href=\"#!/api/Appverse.Security-method-StartLocalAuthenticationWithTouchID\" rel=\"Appverse.Security-method-StartLocalAuthenticationWithTouchID\" class=\"docClass\">Appverse.Security.StartLocalAuthenticationWithTouchID</a> method.</p>\n\n<p>The following are the possible reasons of non availability:</p>\n\n<ul>\n<li>device is under iOS 8</li>\n<li>device is iOS 8 , but hardware doe snot provide this feature</li>\n<li>device is iOS 8, but user has not activated the passcode protection and hasn't registered any fingerprint. This situation is considered by the OS as feature not available.</li>\n</ul>\n\n\n<p>In this case, the <a href=\"#!/api/Appverse.Security-event-onLocalAuthenticationWithTouchIDReply\" rel=\"Appverse.Security-event-onLocalAuthenticationWithTouchIDReply\" class=\"docClass\">Appverse.Security.onLocalAuthenticationWithTouchIDReply</a> listener method won't be called.</p>\n\n<h2 id='touchid-section-security-keychain-protection'>Security Keychain Protection</h2>\n\n<p>We have expanded the <strong><a href=\"#!/api/Appverse.Security\" rel=\"Appverse.Security\" class=\"docClass\">Appverse.Security</a></strong> API by including a protection feature when accessing an stored security keychain item.</p>\n\n<p>This feature is known in iOS as <strong>Access Control Lists</strong> (ACLs).</p>\n\n<p>This feature is not included by default in the Appverse Security API. Developers have to explicitly configure which keychain items the application wants to protect.</p>\n\n<h3 id='touchid-section-how-to-protect-keychain-items'>How to protect keychain items</h3>\n\n<p>The protection is enabled when a key is stored (individually), but the project selects which keys will be protected on build time, using a new configuration file.</p>\n\n<h4 id='touchid-section-%22security-config.xml%22-file'>\"security-config.xml\" file</h4>\n\n<p>The following is an example of the \"security-config.xml\" configuration file that should be located at the <strong>/Web/app/config/</strong> folder (like all Appverse API config files):</p>\n\n<pre><code>&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;\n    &lt;security-config&gt;\n\n    &lt;!--\n    List here the keys of the security keychain items that must be protected by passcode. \n    ONLY FOR iOS devices (available since iOS 8 and for iPhone 5s and above devices) \n\n    This is a expanded feature in the Security Keychain that includes the use of ACLs.\n\n    A device with Touch ID enabled will first request the user to enter the fingerprint \n    in order to get the value of any protected key, or passcode (as a second choice)\n\n    This protection implies:\n        - access to these security keychain items is limited to this device \n        and requires a passcode to be set \n        - and the data is only available if the device is currently unlocked.\n        - if the user removes the passcode on the device, these items are automatically removed.    \n        - if a request to the keychain returns multiple matching items, \n        authentication may be required (if any of hte items are passcode protected)\n    --&gt;\n        &lt;keychain-items-with-passcode-protection&gt;\n\n            &lt;key&gt;mykey1&lt;/key&gt;\n            &lt;key&gt;mykey3&lt;/key&gt;\n\n        &lt;/keychain-items-with-passcode-protection&gt;\n\n&lt;/security-config&gt;\n</code></pre>\n\n<h3 id='touchid-section-what-does-it-imply%3F'>What does it imply?</h3>\n\n<p>Each time a protected key is accessed, by any of the following methods, the user will be prompted for authenticating:</p>\n\n<ul>\n<li>Calling the <strong><a href=\"#!/api/Appverse.Security-method-GetStoredKeyValuePair\" rel=\"Appverse.Security-method-GetStoredKeyValuePair\" class=\"docClass\">Appverse.Security.GetStoredKeyValuePair</a></strong> method that matches a previous protected stored item,\n\n<ul>\n<li>or by calling <strong><a href=\"#!/api/Appverse.Security-method-GetStoredKeyValuePairs\" rel=\"Appverse.Security-method-GetStoredKeyValuePairs\" class=\"docClass\">Appverse.Security.GetStoredKeyValuePairs</a></strong> passing an array of keys to match that contains any previous protected stored item key.</li>\n</ul>\n</li>\n<li>Calling the <strong><a href=\"#!/api/Appverse.Security-method-StoreKeyValuePair\" rel=\"Appverse.Security-method-StoreKeyValuePair\" class=\"docClass\">Appverse.Security.StoreKeyValuePair</a></strong> method that updates any previous protected stored item,\n\n<ul>\n<li>or by calling <strong><a href=\"#!/api/Appverse.Security-method-StoreKeyValuePairs\" rel=\"Appverse.Security-method-StoreKeyValuePairs\" class=\"docClass\">Appverse.Security.StoreKeyValuePairs</a></strong> passing an array of keys to store that contains any previous protected stored item key.</li>\n</ul>\n</li>\n<li>Calling the <strong><a href=\"#!/api/Appverse.Security-method-RemoveStoredKeyValuePair\" rel=\"Appverse.Security-method-RemoveStoredKeyValuePair\" class=\"docClass\">Appverse.Security.RemoveStoredKeyValuePair</a></strong> method that removes any previous protected stored item,\n\n<ul>\n<li>or by calling <strong><a href=\"#!/api/Appverse.Security-method-RemoveStoredKeyValuePairs\" rel=\"Appverse.Security-method-RemoveStoredKeyValuePairs\" class=\"docClass\">Appverse.Security.RemoveStoredKeyValuePairs</a></strong> passing an array of keys to remove that contains any previous protected stored item key.</li>\n</ul>\n</li>\n</ul>\n\n\n<p>Only for iOS >= 8, otherwise the key items won't be protected.</p>\n\n<p>If the device hasn't got available the touch ID (but has a passcode activated), the user will be prompted to enter the passcode directly.</p>\n\n<p>This protection implies that:</p>\n\n<ul>\n<li>the access to these security keychain items is limited to this device and requires a passcode to be set</li>\n<li>the data is only available if the device is currently unlocked</li>\n<li>if the user removes the passcode on the device, <strong>these items are automatically removed</strong> from the application keychain.</li>\n<li>if a request to the keychain returns multiple matching items, authentication may be required (in case any of the items are passcode/touch_id protected)</li>\n</ul>\n\n\n<p>In this case, the authentication screen (native overlay) is slightly different from the other in Local Authentication.</p>\n\n<p><img src=\"guides/touchid/touch-id-screen-keychain-protected.png\" width=\"320\" /></p>\n\n<p>There is no reason text here (projecs cannot customize this screen), and the fallback mechanism is implemented by the Operating System requesting the device passcode.</p>\n\n<p><img src=\"guides/touchid/passcode-auth-screen.png\" width=\"320\" style=\"border: 1px solid;\"/></p>\n\n<p><strong>BEWARE</strong></p>\n\n<ul>\n<li>In order to get an emulation, you must activate the according Custom Result under the Security submenu, as it says, it will work only under an iOS 8 device.</li>\n</ul>\n\n\n<p><img src=\"guides/touchid/touchidemulation.png\" width=\"320\" /></p>\n","title":"iOS Touch ID"});