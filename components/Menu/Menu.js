import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  View } from 'react-native';

const styles = require('./MenuStyles');

export default class Menu extends Component {
  render() {
    return(
       <KeyboardAvoidingView
        behavior = 'padding'
        style = {styles.button_container}
       >
        <ScrollView
          contentContainerStyle = {styles.button_container}
          keyboardShouldPersistTaps = 'never'
        >
          <View style = {styles.button_form_container}>
            <Text style={styles.button_banner_text}>
              Menu
            </Text>
            
          </View>
          <View style = {styles.button_actions_container}>
            <TouchableOpacity
              onPress = {()=> this.props.navigation.navigate('CreateListing')}
              style = {styles.request_button}
            >
              <Text style = {styles.button_text}>
                REQUEST RIDE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress = {()=> this.props.navigation.navigate('Profile')}
              style = {styles.profile_button}
            >
              <Text style = {styles.button_text}>
                PROFILE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress = {()=> this.props.navigation.navigate('Messages')}
              style = {styles.messages_button}
            >
              <Text style = {styles.button_text}>
                MESSAGES
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress = {()=> this.props.navigation.navigate('Listings')}
              style = {styles.listings_button}
            >
              <Text style = {styles.button_text}>
                VIEW LISTINGS
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}
