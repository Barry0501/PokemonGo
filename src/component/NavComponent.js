import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/styles';

export default class NavComponent extends Component {
	 constructor(props) {
    super(props);
    
    nav = require('../images/ic_clear_all.png');
    trainer = require('../images/trainer.png');

    this.state = {
      isShowing: false,
    };
  }

	//onPress={this.props.onCLickPokedex}
  


  _showTabNav(){
    if(this.state.isShowing){
      return(
        <View style={{flexDirection:'row',justifyContent:'space-around',height:30,backgroundColor:'#df6d75',alignItems:'center'}}>
          <TouchableOpacity onPress={this.props.onCLickPokedex}>
            <Text style={styles.txtTabNav}>POKEDEX</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.props.onClickPokemon}>
            <Text style={styles.txtTabNav}>POKEMON</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.props.onCLickPokemart}>
            <Text style={styles.txtTabNav}>POKEMART</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.props.onCLickItems}>
            <Text style={styles.txtTabNav}>ITEMS</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  _onPress(){
    this.setState({isShowing: !this.state.isShowing});
  }

	render() {
		return(
			<View>
				<View style={styles.containerNav}>
		            <TouchableOpacity onPress={this._onPress.bind(this)}>
		              <Image resizeMode={'contain'} source={nav} style={styles.iconNav} />
		            </TouchableOpacity>
		          
		            <Text style={styles.txtNav}>{this.props.name}</Text>
		            <TouchableOpacity onPress={this.props.onCLickTrainerImage}>
		              <Image resizeMode={'contain'} source={trainer} style={styles.iconNav}/>	 
		            </TouchableOpacity>		                     
		        </View>
		        {this._showTabNav()}
	        </View>     
		);
          
         
	}
}