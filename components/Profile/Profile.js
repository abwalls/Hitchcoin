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
//Amplify.configure('./aws-exports');
Auth.configure({
        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: '---YOUR IDENTITY POOL ID GOES HERE---',  
        // REQUIRED - Amazon Cognito Region
        region: '---YOUR REGION GOES HERE---',
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: '---YOUR USER POOL ID GOES HERE---',
        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '---YOUR USER POOL WEB CLIENT ID GOES HERE---',
        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: true,      
});

Storage.configure({
    bucket: '---YOUR BUCKET ARN GOES HERE---',//Your bucket ARN;
    region: '---YOUR REGION GOES HERE---',//Specify the region your bucket was created in;
    identityPoolId: '---YOUR IDENTITY POOL ID GOES HERE---'//Specify your identityPoolId
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
