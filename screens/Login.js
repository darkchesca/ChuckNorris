import React from 'react';
import {Button, Text, View} from 'react-native';
//import { FormLabel, FormInput} from 'react-native-elements'

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: ''};
    }


    dispayName = (inputName) => {
        this.setState({name: inputName});

    }
    render() {
        return (
            <View>
                <Text>Tell me your name</Text>
                <Button
                    title="Play"
                    onPress={this.displayName()}
                />
            </View>

        )
    }
}

Login.navigationOptions = {
    header: Login,
};
