import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ListView,
  Dimensions
} from 'react-native';

var {height,width} = Dimensions.get('window');

export default class Footer extends Component{
	render(){
		return(
			<View style={{position: 'absolute', bottom: 0, right: 15, height: 25, width: width - 30,margin: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
				<TouchableOpacity>
					<Image resizeMode='contain' source={require('../images/pokeballicon.png')} style={{width:40,height:40,margin:5}}/>				
				</TouchableOpacity>
				<TouchableOpacity>
					<Image resizeMode='contain' source={require('../images/close.png')} style={{width:40,height:40,margin:5}}/>				
				</TouchableOpacity>

			</View>
		);
	}
}