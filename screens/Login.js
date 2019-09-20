import React from 'react';
import {Button, Text, View} from 'react-native';
//import { FormLabel, FormInput} from 'react-native-elements'

export default class Login extends React.Component {
    render() {
        return (
            <View>
                <Text>Tell me your name</Text>
                <Button
                    title="Play"

                />
            </View>

        )
    }
}

Login.navigationOptions = {
    header: Login,
};
