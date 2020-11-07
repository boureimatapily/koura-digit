import React, { Component } from 'react';
import { Button, View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bnvContainer}>
        <Text  style={styles.bnv}>Bienvenue sur Koura Digit</Text>
        <Text>le Meilleur site de vente</Text>
        </View>
        
        <Image source={require('./assets/logo.png')}  style={styles.image}/>
       
        <TouchableOpacity style={styles.btn}  onPress={this._handleOpenWithWebBrowser}>
          <Text style={styles.btntext}>Commencer</Text>
        </TouchableOpacity>
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
    width:300,
    borderRadius:100
  },
  bnv:{
    fontSize:20,
    fontWeight:"bold"
  },
  btn:{
    backgroundColor:"green",
    height:60,
    width:200,
    borderRadius:20,
    alignItems:"center",
    paddingTop:15,
    marginTop:10
  },
  btntext:{
    fontSize:20,
    color:"white",
    fontWeight:"bold"
  },
  bnvContainer:{
    marginBottom:20,
    alignItems:"center"
  }
});