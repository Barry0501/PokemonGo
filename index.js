import {AppRegistry} from 'react-native';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation';

import Screen from './src/component/screen';


export default App = createStackNavigator(Screen,
    {
        initialRouteName: 'Home',
    });


AppRegistry.registerComponent('Pokemon', () => App); 



