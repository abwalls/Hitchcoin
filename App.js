import React from 'react';
import { Linking, Button, StyleSheet, Text, View } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native'
import Analytics from '@aws-amplify/analytics';
import { Auth } from './awsConfig';
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

const MainNavigator = createSwitchNavigator(
  {
    Menu: { screen: Menu },
    CreateListing: { screen: CreateListing },
    Profile: { screen: Profile },
    Listings: { screen: Listings }
  },
  {
    initialRouteName: 'Menu'
  }
);

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

