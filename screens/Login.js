import React from 'react';
import {Button, Text, View} from 'react-native';
//import { FormLabel, FormInput} from 'react-native-elements'

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Name'
        };
    }


    // dispayName = (inputName) => {
    //     this.setState({name: inputName});
    //
    // }
    render() {
        return (
            <View>
                <Text>Tell me your name</Text>
                <Button
                    title="Play"
                />
                {this.state.name ? <Text>Ciao {this.state.name}</Text> : null}
            </View>

        )
    }
}

Login.navigationOptions = {
    header: Login,
};
