Certificate Fingerprint
====================

What is a Certificate Fingerprint?
---------------------
A public key fingerprint is a short sequence of bytes used to authenticate or look up a longer public key. Fingerprints are created by applying a cryptographic hash function to a public key. Since fingerprints are shorter than the keys they refer to, they can be used to simplify certain key management tasks. they could be refered as "thumbprint" instead of "fingerprint."

### HOWTO

I'll show how you can get the server fingerprint, showing an example from github:

1. Use a browser (e.g.: Chrome) to navigate to your url, make sure the connection is secure (pictured by a padlock)
	<br><br>
	<img src="guides/fingerprints/secureurl.png" width="450" />
	<br><br>
2. Click in the padlock and navigate to the tab displayed:
	<br><br>
	<img src="guides/fingerprints/certificatedata.png" width="450" />
	<br><br>
3. Click in the **certificate data link** and go to the **Details** tab, using the **Show** select field, navigate to **Properties Only**
	<br><br>
	<img src="guides/fingerprints/fingerprint.png" width="450" />
	<br><br>
4. Now you got the fingerprint info, we are going to set it in our app. Go to the **io-services-config.xml** and edit your service:
	<br><br>
	<img src="guides/fingerprints/definition.png" width="450" />
	<br><br>
5. Once there, you must enable it in the properties of your project. In order to do so open your project in the emulator and goes to **Compile -> Edit Properties** and go to the **Security** tab and check the according checkbox for **Validate Certificates Signature (SHA1 fingerprint)**
	<br><br><img src="guides/fingerprints/properties.png" width="850" /><br><br>
6. And that's all you need in order to make your InvokeService be fully secure.

