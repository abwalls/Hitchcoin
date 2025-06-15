import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View } from 'react-native';

//GraphQL 
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { AUTH_TYPE } from "aws-appsync/lib/link/auth-link";
import { createRides } from '../../src/graphql/mutations';
import { listRides } from '../../src/graphql/queries';
import * as queries from '../../src/graphql/queries';
import * as mutations from '../../src/graphql/mutations';
import gql from 'graphql-tag';
import AppSync from '../../src/aws-exports.js';
import AWSAppSyncClient from "aws-appsync";

//Auth
import Auth from '@aws-amplify/auth';

Auth.configure({
        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: '---YOUR IDENTITY POOL ID GOES HERE---',  
        // REQUIRED - Amazon Cognito Region
        region: '---YOUR AWS REGION GOES HERE---',
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: '---YOUR USER POOL ID GOES HERE---7',
        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: 'USER POOL WEB CLIENT ID GOES HERE',
        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: true,      
});

Amplify.configure({
  API: {
    graphql_endpoint: 'https://kldld5zlbrfyvo2nlibxi2cu3e.appsync-api.us-east-1.amazonaws.com/graphql'
  }
});

//Configure AppSync
const client = new AWSAppSyncClient({
    url: "---YOUR APP SYNC URL GOES HERE---",
    region: "---YOUR APPSYNC REGION GOES HERE---",
    auth: {
         //Cognito User Pools using AWS Amplify
         type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
         jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
    },
});

const styles = require('./CreateListingStyles');

export default class CreateListing extends Component {
constructor(props) {
    super(props);
    this.state = {
      username: '',
      pickup: '',
      dropoff: ''
    };
    this.requestRide = this.requestRide.bind(this);
  }
  
  
  async requestRide(){
    const result = await client.mutate({
      mutation: gql(createRides),
      variables: {
        input: {
         Location: this.state.pickup,
         userID: "Cognito-ID",
         Destination: this.state.dropoff
         /*Location: this.state.pickup,
          userID: this.state.userID,
          Destination: this.state.dropoff*/
        }
      }
    });
  }

  render() {
    return (
       <KeyboardAvoidingView
        behavior = 'padding'
        style = {styles.signup_container}
       >
        <ScrollView
          contentContainerStyle = {styles.signup_container}
          keyboardShouldPersistTaps = 'never'
        >
          <View style = {styles.signup_form_container}>
            <Text style={styles.signup_banner_text}>
              RIDE DETAILS
            </Text>
            <TextInput
              style = {styles.pickup_input}
              onChangeText = {(pickup) => this.setState({pickup})}
              placeholder = "Pickup Location"
              autoCapitalize = "none"
              //onFocus = { () => this.setState({pickup: ""})}
              underlineColorAndroid = "#fff"
              underlineColoriOS = "#fff"
            />
            <TextInput
              style = {styles.pickup_input}
              onChangeText = {(dropoff) => this.setState({dropoff})}
              placeholder = "Dropoff Location"
              autoCapitalize = "none"
              //onFocus = { () => this.setState({dropoff: ""})}
              underlineColorAndroid = "#fff"
              underlineColoriOS = "#fff"
            />
          </View>
          <View style = {styles.signup_actions_container}>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Menu')}>
              <Text style = {styles.login_button}>
                BACK TO MENU
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress = {this.requestRide}
              style = {styles.signup_button}
            >
              <Text style = {styles.signup_text}>
                REQUEST RIDE
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}




