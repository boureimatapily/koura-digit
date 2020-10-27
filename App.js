import React, { Component } from 'react';
import { Button, View, StyleSheet, Image} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/logo.png')}  style={styles.image}/>
        <Button
          title="Commencer"
          onPress={this._handleOpenWithWebBrowser}
          style={styles.button}
        />
      </View>
    );
  }

  _handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync('https://koura-digit.com/');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  button: {
    marginVertical: 10,
    width:100
  },
  image:{
    height:350,
    width:300
  }
});