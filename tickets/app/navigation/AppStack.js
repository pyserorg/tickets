import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home/Home';

const AppStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
        }
    },
});

export default AppStack;
