import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableHighlight,
  Platform
} from 'react-native';

import styles from '../styles/styles';
import {TextInputUserName,TextInputPassword} from './renderTextInput';
import { createStackNavigator  } from 'react-navigation';

import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])

export default class Login extends Component{
  
  constructor(props) {
    super(props);
    
    background = require('../images/background.jpg');
    logo = require('../images/logo.png');
    iconFacebook = require('../images/facebook.png');
    iconGoogle = require('../images/googleplus.png');
    iconTwitter = require('../images/twitter.png');

    this.state = {
      Username: "",
      Password: "",
    };
  }

  static navigationOptions = {
      header:null,
  }

  _onPress(){
    this.props.navigation.navigate('Trainer');
  }

  render() {
    return (
      <ImageBackground resizeMode='stretch' source={background} style={styles.container}>
          <View>
            <Image resizeMode='contain' source={logo} style={styles.logo}/>
            <View style={styles.containerInput}>
              <View style={styles.logIn}>
                <Text style={styles.txtRegister}>REGISTER</Text>
                {TextInputUserName(this)}
                {TextInputPassword(this)}
                <TouchableHighlight onPress={this._onPress.bind(this)} style={styles.containerlogInButton}>
                  <Text style={styles.txtLogInButton}>LOGIN</Text>
                </TouchableHighlight>
              </View>

              <View style={styles.row}>
                <View style={styles.line} /><Text style={styles.txtConnectWith}>OR CONNECT WITH</Text><View style={styles.line} />
              </View>

              <View style={styles.row}>
                <View style={styles.rowSocial}>
                  <Image resizeMode='contain' source={iconFacebook} style={styles.iconSocial}/>
                  <Text style={styles.txtSocial}>Facebook</Text>
                </View>

                <View style={styles.rowSocial}>
                  <Image resizeMode='contain' source={iconGoogle} style={styles.iconSocial}/>
                  <Text style={styles.txtSocial}>Google</Text>
                </View>

                <View style={styles.rowSocial}>
                  <Image resizeMode='contain' source={iconTwitter} style={styles.iconSocial}/>
                  <Text style={styles.txtSocial}>Twitter</Text>
                </View>
              </View>

            </View>
          </View>
      </ImageBackground> 
    );
  }
}
