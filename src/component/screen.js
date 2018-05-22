import TrainerScreen from './trainer';
import PokedexScreen from './Pokedex';
import Login from './login';
import PokemonScrren from './Pokemon';
import PokeMartScreen from './Pokemart';
import ItemsScreen from './items';
import EachPokedexScreen from './eachPokedex';

export default Screen = {
    Home: {
        screen: Login,
    },
    Trainer: {
        screen: TrainerScreen,
    },
    Pokedex: {
        screen: PokedexScreen,
    },
    Pokemon: {
    	screen: PokemonScrren,
    },
    Pokemart: {
        screen: PokeMartScreen,
    },
    Items: {
        screen: ItemsScreen,
    },
    EachPokedex: {
        screen: EachPokedexScreen,
    },
}