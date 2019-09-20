import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';

export default class ChuckNorrisJokes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {joke: {value: 'valore'}};
    }

    componentDidMount() {
        this.newJoke();
    }

    newJoke = () => {
        fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
                "x-rapidapi-key": "baf63dccedmsh789c63c1eaaa07ep1e846bjsnf74317cc7bae",
                "accept": "application/json"
            }
        }).then((result) => {
            return result.json();

        }).then((res) => {
            this.setState({joke: res});
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        console.log("props ", this.props);
        return (

            <ScrollView>

                <View style={styles.container}>
                    <Text>Not-so-funny jokes</Text>
                </View>
                <View style={styles.container}>
                    <Image
                        source={require('../images/chuck.jpg')}
                        style={styles.chuckImage}
                    />
                </View>
                <View style={styles.container}>
                    <Text>{this.state.joke.value}</Text>
                </View>
                <View style={styles.container}>
                    <Button
                        style={styles.moreButton}
                        title={"more"}
                        onPress={() => this.newJoke()}
                    />
                </View>
            </ScrollView>
        )
            ;
    }
}

ChuckNorrisJokes.navigationOptions = {
    title: 'ChuckNorrisJokes',
};

const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
    },
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chuckImage: {
        width: 100,
        height: 120,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    moreButton: {
        width: 50,
        marginBottom: 10
    }
});
