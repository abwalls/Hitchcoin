import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View } from 'react-native';
import Amplify, { Storage } from 'aws-amplify'
import { S3Image } from 'aws-amplify';
//Auth
import Auth from '@aws-amplify/auth';
import { IDENTITY_POOL_ID, AWS_REGION, USER_POOL_ID, USER_POOL_WEB_CLIENT_ID, BUCKET_ARN } from '@env';
//Amplify.configure('./aws-exports');
Auth.configure({
        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: IDENTITY_POOL_ID,
        // REQUIRED - Amazon Cognito Region
        region: AWS_REGION,
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: USER_POOL_ID,
        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: USER_POOL_WEB_CLIENT_ID,
        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: true,      
});

Storage.configure({
    bucket: BUCKET_ARN, //Your bucket ARN;
    region: AWS_REGION, //Specify the region your bucket was created in;
    identityPoolId: IDENTITY_POOL_ID //Specify your identityPoolId
});

const styles = require('./ProfileStyles');

export default class Profile extends Component {
  render() {
    let pic = { uri: '---Fetch S3 file here ---' };
    let pic2 = { uri: '---Fetch S3 file here---' };
    return (
       <KeyboardAvoidingView
        behaviour = 'padding'
        style = {styles.profile_container}
       >
        <ScrollView
          contentContainerStyle = {styles.profile_container}
          keyboardShouldPersistTaps = 'never'
        >
       <View style = {styles.profile_actions_container}>
          <Image source={ pic } style= {styles.profile_pics}/>
           
        </View>
        <View>
          <Text>Username: awall859   Avg. Rating:3/10</Text>
          <Text>                  </Text>
          <Text>Profile Details:</Text>
          <Text>I Like To Go Fast!</Text>
        </View>
        <View style = {styles.profile_actions_container}>
          <Image source={ pic2 } style= {styles.profile_pics}/>
          <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Menu')}>
              <Text style = {styles.menu_button}>
                BACK TO MENU
              </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}
