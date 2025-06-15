import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View } from 'react-native';

//GraphQL 
import Amplify, { API } from "aws-amplify";
import { graphqlOperation } from "aws-amplify";
import { AUTH_TYPE } from "aws-appsync/lib/link/auth-link";
import { listRides } from '../../src/graphql/queries';
import { getRides } from '../../src/graphql/queries';
import * as queries from '../../src/graphql/queries';
import gql from 'graphql-tag';
import AppSync from '../../src/aws-exports.js';
import AWSAppSyncClient from "aws-appsync";
import { Connect } from "aws-amplify-react-native";
import { print as gqlToString } from 'graphql/language';

//Apollo
import { Query } from "react-apollo";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { graphql } from 'react-apollo';

//Auth
import Auth from '@aws-amplify/auth';

Auth.configure({
        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: '---YOUR IDENTITY POOL ID GOES HERE---',  
        // REQUIRED - Amazon Cognito Region
        region: '---YOUR REGION GOES HERE---',
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: '---YOUR USER POOL ID GOES HERE---',
        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: 'USER POOL WEB CLIENT ID',
        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: true,      
});

Amplify.configure({
  API: {
    graphql_endpoint: '---YOUR GRAPHQL ENDPOINT GOES HERE---'
  }
});

//Configure AppSync
const client = new AWSAppSyncClient({
    url: "https://kldld5zlbrfyvo2nlibxi2cu3e.appsync-api.us-east-1.amazonaws.com/graphql",
    region: "us-east-1",
    auth: {
         //Cognito User Pools using AWS Amplify
         type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
         jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
    },
});

const apolloClient = new ApolloClient({
  uri: '---YOUR APOLLO CLIENT URI GOES HERE---'
});


const styles = require('./ListingsStyles');

export default class Listings extends Component {
constructor(props) {
    super(props);
    this.state = {
       requests: [],
    };
    this.listRideReqs = this.listRideReqs.bind(this);
  }
  
  async listRideReqs(){
    try{
       const result = await client.query({query: gql(listRides)});
       this.setState({ requests: result.data.listRides.items });
    }
    catch(err){
       alert(err);
    }
  }

  render() {
      
    
    return (
     <ApolloProvider client = { apolloClient }>
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
              RIDE REQUESTS
            </Text>
          </View>
          <View style = {styles.signup_form_container}>
             <TouchableOpacity onPress = {this.listRideReqs}>
              <Text style = {styles.login_button}>
                SHOW REQUESTS
              </Text>
            </TouchableOpacity>
          <FlatList
            data={this.state.requests}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <Text>{`${item.Location} -> ${item.Destination}`}</Text>
            )}
          />
          </View>
          <View style = {styles.signup_actions_container}>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Menu')}>
              <Text style = {styles.login_button}>
                BACK TO MENU
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
     </ApolloProvider>
    )
  }
}
