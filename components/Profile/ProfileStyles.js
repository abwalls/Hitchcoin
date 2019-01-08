const React = require('react-native');
const { Dimensions, StyleSheet } = React;

module.exports = StyleSheet.create({
  profile_container: {
    flex: 1,
    backgroundColor: '#42f4b6',
    justifyContent: 'space-between',
  },
  profile_form_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profile_banner_text: {
    width: Dimensions.get('window').width,
    height: 40,
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    letterSpacing: 10,
    textAlign: 'center'
  },
  pickup_input: {
    width: 200,
    height: 30,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'left',
    fontSize: 10
  },
  profile_actions_container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 60
  },
  menu_button: {
    backgroundColor: '#fff',
    color: "black",
    width: 200,
    margin: 100,
    height: 20,
    fontSize: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginBottom: 10
  },
  profile_button: {
    backgroundColor: '#C4DE9F',
    width: Dimensions.get('window').width,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profile_pics: {
    width: Dimensions.get('window').width/1.5,
    height: Dimensions.get('window').height/3.3
  },
  profile_text: {
    color: '#000',
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 10
  },
});
