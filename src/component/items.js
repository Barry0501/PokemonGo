import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ListView,
  ScrollView
} from 'react-native';

import Footer from '../widgets/Footer';
import NavComponent from './NavComponent';
import items from './PokemartData';

var pokeball = require('../images/pokeball.png');
var greatball = require('../images/greatball.png');
var loveball = require('../images/loveball.png');
var ultraball = require('../images/ultraball.png');
var timerball = require('../images/timerball.png');
var diveball = require('../images/diveball.png');
var sportball = require('../images/sportball.png');
var safariball = require('../images/safariball.png');
var quickball = require('../images/quickball.png');


var currency = require('../images/currency.png');
var pack = require('../images/backpack.png');

var trainer = {
	credits:950,
	items:{
		pokeballs:10,
		greatballs:5,
		ultraballs:0
	}		  		  
}

var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2})

export default class ItemsScreen extends Component{

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	dataSource: ds.cloneWithRows(items)
	  };
	}

	static navigationOptions = {
      header:null,
  	}

  	eachItem(val){
  		return (
  			<TouchableOpacity>
  				<View style={{flexDirection:'row',borderBottomWidth:1, borderColor:'#d3d3d3'}}>
  					<View style={{justifyContent:'center',alignItems:'center',margin:10}}>
  						<Image source={val.image} resizeMode='contain' style={{width:40,height:40}}/>
  						<View style={{flexDirection:'row', alignItems: 'center',margin:10}}>
  							<Image source={currency} resizeMode='contain' style={{width:25,height:25}}/>
  							<Text style={{marginLeft:5}}>{val.cost}</Text>
  						</View>
  					</View>

  					<View style={{justifyContent:'center', width:280, margin:10}}>
  						<Text style={{fontSize:16,fontWeight:"600",alignSelf:'flex-start'}}>{val.name}</Text>
  						<Text style={{lineHeight:20,fontSize:14, fontWeight:'500',}}>{val.desc}</Text>
  					</View>
  				</View>
  			</TouchableOpacity>
  		);
  	}

	render(){
		return(
			<View style={{flex:1}}>
				<NavComponent name="ITEMS"
					onCLickTrainerImage={() => this.props.navigation.navigate("Trainer")}
					onCLickPokedex={() => this.props.navigation.navigate("Pokedex")} 
					onClickPokemon={() => this.props.navigation.navigate("Pokemon")} 
					onCLickPokemart={() => this.props.navigation.navigate("Pokemart")}
				/>

				<View style={styles.header}>
					<TouchableOpacity>
						<Text style={{color:"#de737b"}}>POKE BALLS</Text>
					</TouchableOpacity>

					<TouchableOpacity>
						<Text>CONSUMABLE</Text>
					</TouchableOpacity>

					<TouchableOpacity>
						<Text>EQUIPMENT</Text>
					</TouchableOpacity>
				</View>

				<View style={{height:1,borderWidth:1,borderColor:'#8080806b'}} />

				<ScrollView style={{marginBottom:30}}>
					<View style={{alignItems:'center', justifyContent:'center', borderColor:'#d3d3d3', borderBottomWidth:1,}}>
                		<Image source ={require('../images/backpack.png')} resizeMode="contain" style={{height:140, width:140}} />
					</View>

					<ListView 
			            //style={{flex:13,}} 
			            scrollEnabled={false}
			            //contentContainerStyle ={{marginBottom:80}}

			            dataSource = {this.state.dataSource}
			            renderRow = {(rowData) => this.eachItem(rowData)}
			        />
				</ScrollView>
				<Footer />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header:{
		flexDirection: 'row',
		height: 50,
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: "#e9e9e9",
	},
})