import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
	container: {
    flex: 1,
    width:null,
    height:null,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo:{
  	width:200,
    marginLeft: 70
    //resizeMode: 'contain',
  },

  containerInput:{
    width:350
  },

  logIn:{
  	marginTop: -80
  },

  txtRegister:{
    fontStyle: 'italic',
    alignSelf: 'flex-end'
  },

  txtInput:{
    padding: 10,
    fontSize:12,
    backgroundColor: 'rgba(0,0,0,0.3)',
    color: 'white',
    marginTop: 10,
  },

  containerlogInButton:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff000099',
    padding: 10,
    marginTop: 5,
  },

  txtLogInButton:{
    fontSize:12,
    color:'white',
  },

  row:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },

  line:{
    flex: 1,
    height:2,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  txtConnectWith:{
    fontSize:12,
    margin:5,
  },

  rowSocial:{
    flex:1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    margin: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  iconSocial:{
    height:20,
    width:20,
    marginRight: 8
  },

  txtSocial:{
    color:'white',
    fontSize:12
  },

  containerNav:{
  	height:50,
  	flexDirection:'row',
  	backgroundColor:'#df6d75',
  	justifyContent:'space-between',
  	alignItems:'center'
  },

  iconNav:{
  	width:30,
  	height:30
  },

  txtNav:{
  	fontSize:16,
    fontWeight:"600",
    color:'white',
  },

  txtTabNav:{
  	color:'white',
  	fontWeight:"400",
  	fontSize:14,
  },

  headerContainerNav:{
  	flex:3,
  	backgroundColor: '#ef8389',
  	justifyContent: 'space-around',
  	alignItems: 'center',
  	flexDirection:'row',
  },

  boxcurrentParty:{
  	padding:10,
  	margin:10,
  	justifyContent:'center',
  	alignItems:'center',
  	borderWidth:1,
  	borderColor:'gray',
  	borderRadius:5
  },
})

export default styles;