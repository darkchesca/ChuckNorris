import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import tabNavigator from './MainTabNavigator';

export default createAppContainer(
    createSwitchNavigator({
        // You could add another route here for authentication.
        // Read more at https://reactnavigation.org/docs/en/auth-flow.html
        Main: tabNavigator,
        //Login : loginNavigator
    })
);

//export default createAppContainer(tabNavigator);
