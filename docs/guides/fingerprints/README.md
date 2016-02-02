Certificate	SSL Pinning
====================
<br>
## Overview
Appverse offers severals grades of security, you can check (enable) the ones you want for you app, they are not exclusive.<br>
**The more you use, the more secure your app will be.**

<br><br><br><br><img src="guides/fingerprints/properties.png" width="850" /><br><br>


Let see what every one does:

## VALIDATE REMOTE CERTIFICATES
 This is a minimum security.<br> 
If you use this check, you have to do nothing else and the platform will check the following:<br>
1. Certificate URL domain matches the current SSL connection URL<br>
2. Certificate is not expired<br>
3. Certificate is not a self-signed certificate, this means that it has to be issued by a trusted CA<br><br>


## VALIDATE CERTIFICATES PUBLIC KEY SIGNATURE
Checking this the platform will check the public key from the certificate against a list of allowed public key provided, below I will explain how to get that public key and how to add it in the **io-services-config.xml** file.<br>
The list of allowed fingerprints provides the flexibility to advance an app release for any later server certificate change.
During that period, the released app is compatible with the current certificate, and also it will be compatible with the future certificate once activated in the server.

## VALIDATE CERTIFICATES SIGNATURE (SHA1 FINGERPRINT)
Check the certificate SHA1 fingerprint (also named thumbprint) against a list of allowed fingerprints.<br>
The list of allowed fingerprints provides the flexibility to advance an app release for any later server certificate change.
During that period, the released app is compatible with the current certificate, and also it will be compatible with the future certificate once activated in the server.

**This is our recommended option, as it is the most secure way to identify uniquely the certificate in a SSL connection.
Previous penetration tests results validated this approach.**


<br>

### HOWTO

I'll show how you can get the server fingerprint and public key, showing an example from github:

1. Use a browser (e.g.: Chrome) to navigate to your url, make sure the connection is secure (pictured by a padlock)
	<br><br>
	<img src="guides/fingerprints/secureurl.png" width="450" />
	<br><br>
2. Click in the padlock and navigate to the tab displayed:
	<br><br>
	<img src="guides/fingerprints/certificatedata.png" width="450" />
	<br><br>
3. [SHA1 FINGERPRINT] Click in the **certificate data link** and go to the **Details** tab, using the **Show** select field, navigate to **All** and search for **Thumbprint**
	<br><br>
	<img src="guides/fingerprints/fingerprint.png" width="450" />
	<br><br>
4. Now you got the fingerprint info, we are going to set it in our app. Go to the **io-services-config.xml** and edit your service like this sample using a new attribute (fingerprint) in the end-point node:
	<br><br>
	<img src="guides/fingerprints/definition.png" height="100" />
	<br><br>
5. [PUBLIC KEY] Click in the **certificate data link** and go to the **Details** tab, using the **Show** select field, navigate to **All** and search for **Public Key**
	<br><br>
	<img src="guides/fingerprints/pubkey.png" width="450"  />
	<br><br>
6. Now you got the public key info, we are going to set it in our app. Go to the **io-services-config.xml** and edit your service like this sample using a new attribute (public-key) in the end-point node:
	<br><br>
	<img src="guides/fingerprints/definitionpubkey.png" height="150"/>
	<br><br>
7. And that's all you need in order to make your InvokeService be fully secure.
