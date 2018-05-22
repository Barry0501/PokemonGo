import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  AppRegistry,
  StyleSheet,
  ListView
} from 'react-native';

import Footer from '../widgets/Footer';
import NavComponent from './NavComponent';
import pokedexData from './PokedexData';



var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});

export default class PokedexScreen extends Component{
	
	constructor(props) {
	  super(props);
	
	  this.state = {
	  		dataSource: ds.cloneWithRows(pokedexData),
		  	num: "001",
		    name: "BULBASAUR",		
		    image: require('../images/001.png'),
		    color: '#a529ae',
	  };
	}

	static navigationOptions = {
      header:null,
  	}

	selectPokemon(val){
		// first we make everything false
		for(var x=0;x<pokedexData.length;x++){
			pokedexData[x].selected = false;
			//alert(pokedexData[x])
		}

		// then we set out val
		pokedexData[val.id].selected = true;

		// then we reset list view
		this.setState({
			name: val.name,
			color: val.color,
			num: val.num,
			image: val.image
		})

		this.setState({
			dataSource: ds.cloneWithRows(pokedexData),
		})
		
	}

	balls(x){
		if(!x.selected){
			return(
				<View>
				 	<View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',margin: 10}}>
						<Text style={{marginTop:55,color:'#bbb8b6',marginRight:5}}>#{x.num}</Text>
						<Text style={{marginTop:55, color: '#555', fontWeight: '700'}}>{x.name}</Text>
						
						<View style={{height:80, alignItems: 'center', justifyContent: 'center'}}>
							<View style={{height:50, width:2, backgroundColor: '#bababb'}} />
							<TouchableOpacity onPress = {() => this.selectPokemon(x)}>
								<Image resizeMode='stretch' source={require('../images/pokeOutline.png')} style={{height:50,width:50}} />
							</TouchableOpacity>
						</View>
					</View>
				</View>
			);
		}
		else{
			return(
				<View>
					<View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',margin: 10}}>
						<Text style={{marginTop:55,color:'#bbb8b6',marginRight:5}}>#{x.num}</Text>
						<Text style={{marginTop:55, color: '#555', fontWeight: '700'}}>{x.name}</Text>
						
						<View style={{height:80, alignItems: 'center', justifyContent: 'center'}}>
							<View style={{height:50, width:2, backgroundColor: '#bababb'}} />
							<TouchableOpacity onPress = {() => this.selectPokemon(x)}>
								<Image resizeMode='stretch' source={require('../images/greatfile.png')} style={{height:50,width:50}} />
							</TouchableOpacity>
						</View>
					</View>
				</View>
			);
		}
	}

	render(){
		return(
			<View style={styles.background}>
				<NavComponent name='POKEDEX' 
							  onCLickTrainerImage={() => this.props.navigation.navigate("Trainer")} 
							  onClickPokemon={() => this.props.navigation.navigate("Pokemon")}
							  onCLickPokemart={() => this.props.navigation.navigate("Pokemart")}
				/>
				<View style={styles.header}>
					<TouchableOpacity>
						<Text style={{color:"#de737b"}}>NUMBER</Text>
					</TouchableOpacity>

					<TouchableOpacity>
						<Text>LETTER</Text>
					</TouchableOpacity>

					<TouchableOpacity>
						<Text>REGION</Text>
					</TouchableOpacity>

					<TouchableOpacity>
						<Text>TYPE</Text>
					</TouchableOpacity>
				</View>
				<View style={{height:1,borderColor:'#8080806b',borderWidth:1}} />
				<View style={{flexDirection: 'row',flex:1}}>
					<View style={styles.pokemon}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate("EachPokedex",{name:this.state.name})}>
							<Image resizeMode='contain' source={this.state.image} style={styles.image}/>
						</TouchableOpacity>

						<View style={{backgroundColor:this.state.color, padding:5, borderRadius:5}}>
							<Text style={{color:'white',fontSize:16,fontWeight:"600"}}>{this.state.name}</Text>
						</View>

						<View style={{backgroundColor:"#c3c3c3", padding:5, borderRadius:5, margin:5}}>
							<Text style={{color:'white',fontSize:16,fontWeight:"600"}}>#{this.state.num}</Text>
						</View>
					</View>

					<ListView
						dataSource={this.state.dataSource}
						renderRow={(data)=>this.balls(data)}
						//bounce = {false}
						style={{flex:1,marginBottom:45}}
					/>
				</View>
				<Footer />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	background:{
		backgroundColor: "#e9e9e9",
		flex: 1
	},

	header:{
		flexDirection: 'row',
		height: 50,
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: "#e9e9e9",
	},

	pokemon:{
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},

	image:{
		width: 150,
		height: 150,
	},
})

AppRegistry.registerComponent('Pokemon',()=>Pokedex);
