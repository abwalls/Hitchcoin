import React from 'react';
import { Linking, Button, StyleSheet, Text, View } from 'react-native';
import Auth from '@aws-amplify/auth';
import { withAuthenticator } from 'aws-amplify-react-native'
import Analytics from '@aws-amplify/analytics';
import Amplify, { API } from "aws-amplify";
import { createSwitchNavigator } from 'react-navigation';
import Profile from './components/Profile/Profile';
import Listings from './components/Listings/Listings';
import CreateListing from './components/CreateListing/CreateListing';
import Menu from './components/Menu/Menu';


//For AppSync
//import { graphql, ApolloProvider, compose } from 'react-apollo';
//import * as AWS from 'aws-sdk';
//import { Rehydrated } from 'aws-appsync-react';
import { AUTH_TYPE } from "aws-appsync/lib/link/auth-link";
import AppSync from './aws-exports.js';

//AWS Config 
import awsconfig from './aws-exports';

Analytics.configure(awsconfig);
Auth.configure({
        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: 'YOUR IDENTITY POOL ID GOES HERE',  
        // REQUIRED - Amazon Cognito Region
        region: 'REGION GOES HERE',
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'YOUR USER POOL ID GOES HERE',
        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: 'YOUR USER POOL WEB CLIENT ID GOES HERE',
        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: true,      
});

const MainNavigator = createSwitchNavigator({
  Menu: {screen: Menu},
  CreateListing: { screen: CreateListing},
  Profile: { screen: Profile },
  Listings: { screen: Listings },
  initialRouteName: 'Menu',
});

class App extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <MainNavigator/>
        </View>
      );
    }
}

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

