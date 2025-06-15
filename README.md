# Hitchcoin
Ridesharing application built in the AWS cloud using React Native for Android/iOS support (Work In Progress)

Configuring Application with your AWS cloud resources
Several sections of the code have been removed that are used to configure the application to specific AWS resources such as user pools and DynamoDB. Using the AWS console you can auto generate your own `aws-exports.js` file and link it to the application or you can manually configure sections in the code in the following sections:

To generate the `aws-exports.js` file with the Amplify CLI:
1. Install the CLI with `npm install -g @aws-amplify/cli`.
2. Run `amplify configure` to connect the CLI to your AWS account.
3. From the project root execute `amplify init` and then `amplify push`.
This will create an `aws-exports.js` file in the root of the repository.

  1) In `App.js` fill in your Cognito identity pool ID, user pool ID, web client ID and region starting at line 25.
  2) Each component, except Analytics and Menu, contains placeholders marked `---YOUR AWS RESOURCE INFO HERE---`. Replace these with the IDs for your AppSync API, S3 buckets and other services created in your AWS account.
There may be some issues configuring your specifc AWS resources with the application due to different regions, permissions, and configurations, but overall this code is meant to be a rough example of how to work set up a cross platform mobile application using React Native and AWS resources. Services used include: AppSync, Cognito, dynamoDB, Lambda, GraphQL API, S3, and more so it can be a good starting point for building a similarly stuctured application. The node_modules directory was far to large in size even when compressed to be posted on here but I will add a link to it on another file hosting service shortly for those who are interested otherwise message me for it if you are interested.
  
Installation Guide
The best way to run it is by using the Expo Client Application which can be done by following these steps:

Download the Expo Client Application (Android Marketplace: https://play.google.com/store/apps/details?id=host.exp.exponent,   Apple AppStore: https://itunes.apple.com/us/app/expo-client/id982107779?mt=8 )
You will need a computer on the same Network as the phone with Node.js and Python installed to install the Expo Client which can be done directly in the terminal with the ‘npm install -g expo-cli’ command.
Download the Hitchcoin application from GitHub or other source
In the terminal navigate to the Hitchcoin app directory you have just downloaded. 
Run command ‘expo start’ which will begin building the JavaScript bundle
Once prompted, press ‘e’ to send a link from the terminal to your mobile device
Click the first link provided in message (exp://…) and then choose ‘Open in Expo’ which should establish a connection between the machine hosting the application and the mobile device 
Wait for JavaScript Bundle to Download test out some of the application’s basic features


Using the Application

    Upon opening the application for the first time, you will be greeted with the login screen.  If you do not already have an account registered, select ‘Sign Up’ option below main form.  Choose a username, password (at least 8 characters upper & lower case + numbers required).  For phone number, you must enter ‘+1’ before the area code (for US only), so ‘484-123-4567’ would translate to exactly ‘+14841234567’.  Finally enter a valid email address and click the ‘Register’ button.  This will return you to the login screen where you will have to login using the credentials you just created.  When logging into a new account for the first time, you will be asked for a verification code which you will find in your inbox from AWS.  After entering this you will finally be granted access to the main application menu.  All AWS resources and graphQL API requests are access-restricted requiring the JWT token received from logging in so attempting to bypass login or removing it from the application source code will be pointless. 

    Once logged in, you will be sent to the main menu where you will see a list of options to choose from.  Each option will take you to a new screen where you can test the individual use cases we have finished thus far.  On each of these screens is also a small ‘Back to Menu’ text icon that will return you to the main menu. This application and code is very basic right now but implements most of the cloud-based architecture design.  Using the code 
