# Hitchcoin
Ridesharing application built in the AWS cloud using React Native for Android/iOS support (Work In Progress)

Configuring Application with your AWS cloud resources
Several sections of the code have been removed that are used to configure the application to specific AWS resources such as user pools and dynamoDB.  To use the app properly, you will need to enter in your own identifiers for these values in the configuration files in the following locations within the code:
  1) in the App.js file you will need to enter your identity and user pool id's and well as region starting at line 25
  2)

Installation Guide
The best way to run it is by using the Expo Client Application which can be done by following these steps:

Download the Expo Client Application (Android Marketplace: https://play.google.com/store/apps/details?id=host.exp.exponent,   Apple AppStore: https://itunes.apple.com/us/app/expo-client/id982107779?mt=8 )
You will need a computer on the same Network as the phone with Node.js and Python installed to install the Expo Client which can be done directly in the terminal with the ‘npm install -g expo-cli’ command.
Download the Hitchcoin application from GitHub or other source
In the terminal navigate to the Hitchcoin app directory you have just downloaded. 
Run command ‘expo-start’ which will begin building the JavaScript bundle
Once prompted, press ‘e’ to send a link from the terminal to your mobile device
Click the first link provided in message (exp://…) and then choose ‘Open in Expo’ which should establish a connection between the machine hosting the application and the mobile device 
Wait for JavaScript Bundle to Download test out some of the application’s basic features


Using the Application

    Upon opening the application for the first time, you will be greeted with the login screen.  If you do not already have an account registered, select ‘Sign Up’ option below main form.  Choose a username, password (at least 8 characters upper & lower case + numbers required).  For phone number, you must enter ‘+1’ before the area code (for US only), so ‘484-123-4567’ would translate to exactly ‘+14841234567’.  Finally enter a valid email address and click the ‘Register’ button.  This will return you to the login screen where you will have to login using the credentials you just created.  When logging into a new account for the first time, you will be asked for a verification code which you will find in your inbox from AWS.  After entering this you will finally be granted access to the main application menu.  All AWS resources and graphQL API requests are access-restricted requiring the JWT token received from logging in so attempting to bypass login or removing it from the application source code will be pointless. 

    Once logged in, you will be sent to the main menu where you will see a list of options to choose from.  Each option will take you to a new screen where you can test the individual use cases we have finished thus far.  On each of these screens is also a small ‘Back to Menu’ text icon that will return you to the main menu. This application and code is very basic right now but implements most of the cloud-based architecture design.  Using the code 
