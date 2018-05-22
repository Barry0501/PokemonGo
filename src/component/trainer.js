import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ListView
} from 'react-native';

import styles from '../styles/styles';
import Footer from '../widgets/Footer';
import NavComponent from './NavComponent';

imageBadgets = [
    require('../images/badge1A.png'),
    require('../images/badge2A.png'),
    require('../images/badge3A.png'),
    require('../images/badge4A.png'),
    require('../images/badge5A.png'),
    require('../images/badge6A.png'),
    require('../images/badge7A.png'),
    require('../images/badge8A.png'),
];

currentParty = [
  {
    name: "Bulbasaur",
    image: require('../images/001.png'),
    selected: false
  },

  {
    name: "Charmeleon",
    image: require('../images/004.png'),
    selected: false
  },

  {
    name: "Squirtle",
    image: require('../images/007.png'),
    selected: false
  },

];

export default class TrainerScreen extends Component{
  
  constructor(props) {
    super(props);
    
    mystic = require('../images/mystic.png');
    profile = require('../images/profile.png');

    const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2})

    this.state = {
      dataListCurrentParty: ds.cloneWithRows(currentParty),
    };
  }

  static navigationOptions = {
      header:null,
  }

  _renderBadget(){
    views = [];
    let dem = 0;
    for(let image of imageBadgets){
      views.push(<Image key={dem++} source={image} style={{width:40,height:40,margin:5}}/>)
    }
    return views;
  }

  _renderRow(data){
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

  render() {
    return (
      <View style={{flex:1}}>
        <NavComponent name='ACE TRAINER WENDY' 
                      onCLickPokedex={() => this.props.navigation.navigate("Pokedex")}  
                      onClickPokemon={() => this.props.navigation.navigate("Pokemon")}
                      onCLickPokemart={() => this.props.navigation.navigate("Pokemart")}
                      onCLickItems={() => this.props.navigation.navigate("Items")}
        />

        <View style={{flex:1}}>
          <View style={styles.headerContainerNav}>
            <View style={{flexDirection:'column'}}>
              <Image source={mystic} resizeMode={'contain'} style={{width:50,height:50}}/>
              <Text style={{color:'white',fontWeight:'600'}}>MYSTIC</Text>  
            </View>
            
            <Image source={profile} resizeMode={'contain'} style={{width:150,height:150}} />
            
            <View>
              <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:18,marginRight:10}}>LV</Text> 
                <Text style={{color:'white',fontSize:24,fontWeight:'600'}}>24</Text>              
              </View>
              <View style={{height:2,borderWidth:1,borderColor:'white',borderRadius:5}} />
            </View>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            {this._renderBadget()}
          </View>

          <View style={{flex:5}}>
            <View style={styles.boxcurrentParty}>
              <Text>CURRENT PARTY</Text>
            </View>

            <ListView 
              dataSource={this.state.dataListCurrentParty}
              renderRow={this._renderRow.bind(this)}
              contentContainerStyle={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}
            />
          </View>
        </View>
        <Footer />
      </View>
    );
  }
}