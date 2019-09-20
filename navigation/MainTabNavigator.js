import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'; //DOES what
import {createStackNavigator} from 'react-navigation-stack'; //does what
import Home from '../screens/Home';
import Advises from '../screens/Advises';
import ChuckNorrisJokes from '../screens/ChuckNorrisJokes';


//import TabBarIcon from '../components/TabBarIcon'; //for later


//no idea what this is
const config = Platform.select({
    web: {headerMode: 'screen'},
    default: {},
});

const HomeStack = createStackNavigator(
    {
        Home: Home,
    },
    config
);

//HOME
HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    // tabBarIcon: ({ focused }) => (
    //     <TabBarIcon
    //         focused={focused}
    //         name={
    //             Platform.OS === 'ios'
    //                 ? `ios-information-circle${focused ? '' : '-outline'}`
    //                 : 'md-information-circle'
    //         }
    //     />
    // ),
};

HomeStack.path = '';


//ASTEROIDS
const AdvisesStack = createStackNavigator(
    {
        Advises: Advises,
    },
    config
);

AdvisesStack.navigationOptions = {
    tabBarLabel: 'Asteroids',
    // tabBarIcon: ({ focused }) => (
    //     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-megaphone'} />
    // ),
};

AdvisesStack.path = '';


//CHUCK
const ChuckNorrisJokesStack = createStackNavigator(
    {
        ChuckNorris: ChuckNorrisJokes,
    },
    config
);

ChuckNorrisJokesStack.navigationOptions = {
    tabBarLabel: 'ChuckNorris',
    // tabBarIcon: ({ focused }) => (
    //     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
    // ),
};

ChuckNorrisJokesStack.path = '';


//MainTabNavigator
const tabNavigator = createBottomTabNavigator({
    HomeStack,
    AdvisesStack,
    ChuckNorrisJokesStack,
});

tabNavigator.path = '';

export default tabNavigator;
