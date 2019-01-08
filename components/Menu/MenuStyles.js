const React = require('react-native');
const { Dimensions, StyleSheet } = React;

module.exports = StyleSheet.create({
  button_container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  button_form_container: {
    flex: 1,
    backgroundColor: '#cc2816',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button_banner_text: {
    width: Dimensions.get('window').width,
    height: 33,
    fontSize: 33,
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
  button_actions_container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  login_button: {
    backgroundColor: '#fff',
    color: "lightgrey",
    width: 200,
    margin: 10,
    height: 20,
    fontSize: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginBottom: 10
  },
  request_button: {
    backgroundColor: '#fca037',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profile_button: {
    backgroundColor: '#f9fc37',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  messages_button: {
    backgroundColor: '#69fc4b',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listings_button: {
    backgroundColor: '#4286f4',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button_text: {
    color: '#000',
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 10
  },
});
