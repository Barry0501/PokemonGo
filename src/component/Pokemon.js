import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ListView
} from 'react-native';

import Footer from '../widgets/Footer';
import NavComponent from './NavComponent';
import pokedexData from './PokedexData';

var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2});

export default class PokemonScreen extends Component{
	
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	dataSource: ds.cloneWithRows(pokedexData),
	  };
	}

	static navigationOptions = {
      header:null,
  	}

  	eachRow(data){
  	  let health = Math.floor((Math.random() * 100) + 1);
      let healthColor

      // custom health colors
      if(health < 20){
        healthColor = "#f96062"
      }
      else if(health >= 20 && health < 50){
        healthColor = "#fbd34e"
      }
      else{
        healthColor = "#b7eb9b"
      }

      return(
        <TouchableOpacity>
          <View>
            <Image resizeMode={'contain'} source={data.image} style={{width:120,height:120}} />
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
              <Text>CP</Text>
              <Text>{health}</Text>
            </View>

            <View style={{height:1,borderWidth:1,borderColor:'gray',margin:5}} />
            <View style={{height:12,borderWidth:1,borderColor:'gray',borderRadius:5,margin:5,width:102}}>
              <View style={{height:10,width:health,borderRadius:5,backgroundColor:healthColor}}></View>
            </View>
          </View>
        </TouchableOpacity>
      );
  	}

	render(){
		return(
			<View style={styles.background}>
				<NavComponent name='POKEMON' 
							  onCLickTrainerImage={() => this.props.navigation.navigate("Trainer")}
							  onCLickPokedex={() => this.props.navigation.navigate("Pokedex")} 
							  onCLickPokemart={() => this.props.navigation.navigate("Pokemart")} 
				/>
				
				<View style={styles.header}>
					<TouchableOpacity>
						<Text style={{color:"#de737b"}}>POKEMON</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text>EGGS</Text>
					</TouchableOpacity>
				</View>

				<View style={{height:1,borderWidth:1,borderColor:'#8080806b'}} />

				<ListView 
					dataSource = {this.state.dataSource}
					renderRow = {(rowData) => this.eachRow(rowData)}
					contentContainerStyle={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',flexWrap:'wrap'}}
					style = {{height:350}}
				/>

				<View style={{flexDirection:'row', padding:20, height:10,justifyContent:'space-around', alignItems:'center',margin:20}}>
		          <TouchableOpacity style={{height:30, padding:20, borderRadius:5, borderWidth:1, borderColor:'#80808047',justifyContent:'center',alignItems:'center'}}>
		            <Text style={{fontSize:11, color:'#666', fontWeight:'600'}}>TRANSFER</Text>
		          </TouchableOpacity>

		          
				  <View style={{height:1,borderWidth:1,borderColor:'gray',flex:1}} />

				  <TouchableOpacity style={{height:30, padding:20, borderRadius:5, borderWidth:1, borderColor:'#80808047',justifyContent:'center',alignItems:'center'}}>
		            <Text style={{fontSize:11, color:'#666', fontWeight:'600'}}>EVOLVE</Text>
		          </TouchableOpacity>           
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
		alignItems: 'center'
	},
})