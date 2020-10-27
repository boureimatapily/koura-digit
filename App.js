import React, { Component } from 'react';
// import { Button, View, StyleSheet, Image} from 'react-native';
// import * as WebBrowser from 'expo-web-browser';
// import Constants from 'expo-constants';
import { WebView } from 'react-native-webview';


export default class App extends Component {
  render() {
    return <WebView source={{ uri: 'https://koura-digit.com' }} style={{ marginTop: 20 }} />;
  }

  _handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync('https://koura-digit.com/');
  };
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//   },
//   button: {
//     marginVertical: 10,
//     width:100
//   },
//   image:{
//     height:350,
//     width:300
//   }
// });