import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  AppRegistry,
  StyleSheet,
  ListView,
  ScrollView,
  ImageBackground
} from 'react-native';

import pokedexData from './PokedexData';
import Footer from '../widgets/Footer';
var nameParam;

export default class EachPokedexScreen extends Component{
	
  constructor(props) {
    super(props);
  
    this.state = {
      image: "",
      number: "",
      name: "",
      type: "",
      seen: "",
      caught: "",
      desc: "",
      imageBackground: "",
    };

   
  }

  static navigationOptions = {
      header:null,
  }

  componentWillMount(){
    
    nameParam = this.props.navigation.getParam('name');
    //alert(nameParam)
    
    for(var x = 0; x < pokedexData.length;x++){
        if(pokedexData[x].name === nameParam){
          this.setState({
            image: pokedexData[x].image,
            number: pokedexData[x].num,
            name: nameParam,
            type: pokedexData[x].type,
            seen: pokedexData[x].seen,
            caught: pokedexData[x].caught,
            desc: pokedexData[x].desc,
            imageBackground: pokedexData[x].imageBackground
          })
          break;
        }
    }
  }
 
  render(){

    
    

    return (
			<ImageBackground source={this.state.imageBackground} style={{flex:1,width:null,height:null}}>
        <View style={{height:55,flexDirection:'row',justifyContent:'space-between',alignItems:'center', backgroundColor:"rgba(0,0,0,0.3)"}}>
          <TouchableOpacity onPress = {() => this.props.navigation.navigate("Pokedex")}>
            <Image resizeMode='contain' source={require('../images/navigate-back.png')} style={{height:40,width:40}} />
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => this.props.navigation.navigate("Trainer")}>
            <Image resizeMode='contain' source={require('../images/trainer.png')} style={{height:40,width:40}} />
          </TouchableOpacity>
        </View>

        <View style={{flex:1}}></View>

        <View style={{flex:4,backgroundColor:'rgba(255,255,255,0.9)'}}>
          <Image resizeMode='contain' source={this.state.image} style={{width:200,height:200,alignSelf:'center',marginTop:-10}} />
        
          <View style={{flexDirection:'row', justifyContent:'center',marginTop:-20}}>
            <Text style={{fontSize:14, color:'#a6a6a6'}}>#{this.state.number}  </Text>
            <Text style={{fontWeight:"600", color:'#777'}}>{this.state.name}</Text>
          </View>

          <View style={styles.rectanglebit}>
            <View style={styles.columnbit}>
              <Text style={styles.title}>Type</Text>
              <Text style={styles.val}>{this.state.type}</Text>
            </View>

             <View style={styles.columnbit}>
              <Text style={styles.title}>Seen</Text>
              <Text style={styles.val}>{this.state.seen}</Text>
            </View>

            <View style={styles.columnbit}>
              <Text style={styles.title}>Caught</Text>
              <Text style={styles.val}>{this.state.caught}</Text>
            </View>
          </View>

          <ScrollView contentContainerStyle={{margin:20, marginTop:5}}>
            <Text style={{color:'#999',lineHeight:22, fontWeight:'500', fontSize:14}}>{this.state.desc}</Text>
          </ScrollView>
        </View> 
        
      </ImageBackground> 
      
		);
	}
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    backgroundColor: "#e9e9e9",
  },
  rectanglebit:{height:56, borderWidth:2, flexDirection:'row', borderColor:'#e3e3e3', margin:20},
  columnbit:{flex:1, alignItems:'center', justifyContent:'space-around'},
  title:{ color:"#666", fontWeight:'600'},
  val:{ color:"#999",fontSize:14},
})

AppRegistry.registerComponent('Pokemon',()=>EachPokedexScreen);