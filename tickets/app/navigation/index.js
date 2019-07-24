import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AppStack from './AppStack';

const RootStack = createSwitchNavigator(
    {
        AppStack,
    },
    {
        initialRouteName: 'AppStack',
    }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
