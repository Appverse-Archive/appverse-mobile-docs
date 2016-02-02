Appverse Widget
====================

What is a Widget?
---------------------
 
A **Widget** is an Android application addon used to enhance the user experience by allowing some fast actions without opening the app and navigating through it.
 
Following this guide will allow you to use some of the API used in Appverse and releasing you from the complication of dealing with the pain of replicating its behaviour.

 

### Considerations
* This is available just for Android.
* By the time of this guide we have integrated the most common shared API used as communication between app and widget, **Security**, but for sure we will integrate other API if needed.  


Creating a Widget
---------------------

In order to create a Widget we recommend to <a href="http://builder.gft.com/appstore/widget/AppverseAndroidWidget.zip">download our sample</a> and start working from there. In our sample you will find the minimun base for reusing our APIs.

Let me <del>entertain you</del> explain myself:

It all start, as every widget, with a **WidgetProvider** class. There we start a service (**ActionDispacherService**) which is the key-part of our widget.

		Intent service = new Intent(ctx, ActionDispacherService.class);
		service.putExtra(Constants.ACTION_ID, Constants.LOAD_START_SCREEN);
		ctx.startService(service);

Doing that we end in the **actionDispacher**, where all the magic happens. In the first case we initialize our views using a **RemoteView** and assigning the actions using **PendingIntent** with the new ID of the action,  nothing new in the Android world. 

### Calling Appverse API

Once there we will start with our new methods to invoke Appverse APIs, for every action we can create an **Intent** that will be processed by Appverse Runtime and will return the value to the widget. 

How we do this? Calling **createTestCase** and passing the methods and parameters.

		private Intent createTestCase(int action, String service, String method, String params){
			Intent intent = new Intent(ctx.getPackageName() + ".APPVERSE_SERVICE");
			intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
			intent.putExtra(SERVICE_KEY, this.getClass().getName());
	
			intent.putExtra(Constants.ACTION_ID, action);
			intent.putExtra(APPVERSE_SERVICE_KEY, service);
			intent.putExtra(APPVERSE_METHOD_KEY, method);
			intent.putExtra(APPVERSE_PARAMS_KEY, params);

		
			return intent;
		}

Sample:

		intent = createTestCase( Constants.APPVERSE_RESULT, "security", "GetStoredKeyValuePair", "{'param1':{'Key':'mykey1','Encryption':true}}");

		WidgetProvider.getAppContext().startActivity(intent);

I think this should be self-explanatory, if not do not hesitate <a href="mailto:frmi@gft.com">contacting me</a>. After this, Appverse should send the response to the service with the action 

**Constants.APPVERSE_RESULT**

 and the response in an extra called 

**appverse_result**

 so you should create a case to process that one. 
At this point your widget will have to do its own logic, but what is the sample doing here? We call **processResult** and there we take the called method and act accordingly 

		String method = extras.getString(APPVERSE_METHOD_KEY);
		if(method.equals("GetStoredKeyValuePair")){
			

			WidgetUtils.log(Log.DEBUG, "Method GetStoredKeyValuePair");
			Object[] found = (Object[]) fromJSONtoKeyPair(result);
			if(found != null && found[0] != null){
				KeyPair[] success = (KeyPair[]) found[0];
				for(KeyPair kp : success){
					result = "KeyPair "+kp.getValue();
					WidgetUtils.log(Log.DEBUG, result);
				}
			}
			views.setTextViewText(labelId, result);
			
		}
				

### Merging with your appverse application

Once your widget is ready to be tested you should run the build.bat select the output folder and move it to your app folder at the following path: **[APP ROOT PATH]/Web/app/plugins/[GENERATED WIDGET FOLDER]** (this folder should be the one with the application.xml file in it)

Now you can build the app as usual and test your widget in the device.




