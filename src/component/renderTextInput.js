import React, { Component } from 'react';
import {
  TextInput,
  Platform
} from 'react-native';
import styles from '../styles/styles';

export  function TextInputUserName(This){
	if(Platform.OS === 'android'){
      return <TextInput onChangeText={(value)=>This.setState({Username:value})} underlineColorAndroid={'transparent'} placeholder="USERNAME" style={styles.txtInput} placeholderTextColor='white' />
    }
}

export  function TextInputPassword(This){
	if(Platform.OS === 'android'){
      return <TextInput onChangeText={(value)=>This.setState({Password:value})} underlineColorAndroid={'transparent'} placeholder="PASSWORD" style={styles.txtInput} placeholderTextColor='white' secureTextEntry={true}/>
    }
}