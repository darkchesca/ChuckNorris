// import React from 'react';
// import {Image, ScrollView, StyleSheet, Text, View, Button} from 'react-native';
// import Home from "./Home";
//
// export default class Asteroids extends React.Component {
//     render() {
//         return(
//             <View>
//                 <Text>Asteroids</Text>
//             </View>
//         )
//     }
// }
//
// Asteroids.navigationOptions = {
//     header: 'Asteroids',
// };


import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';


// function AdvisesBox (advise) {
//     if (advise === {value : 'valore'}){
//         console.log("advise ", advise)
//     return (
//         <View style={styles.containerText}>
//             <Text>1- {/*this.state.advise[1]*/}</Text>
//             {/*add these after pressing button 2 and 3*/}
//             <Text>2- {/*this.state.advise[2]*/}</Text>
//             <Text>3- {/*this.state.advise[3]*/}</Text>
//         </View>
//     );
//     } else {
//     return null
//     }
// }


// function AdvisesBox (advise) {
//     if (advise === {value : 'valore'}){
//         console.log("advise ", advise)
//     return (
//         <View style={styles.containerText}>
//             <Text>1- {/*this.state.advise[1]*/}</Text>
//             {/*add these after pressing button 2 and 3*/}
//             <Text>2- {/*this.state.advise[2]*/}</Text>
//             <Text>3- {/*this.state.advise[3]*/}</Text>
//         </View>
//     );
//     } else {
//     return null
//     }
// }

export default class Advises extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            advise: null,
        };
    }


    newAdvise = (number) => {
        fetch("https://hargrimm-wikihow-v1.p.rapidapi.com/steps?count=3", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "hargrimm-wikihow-v1.p.rapidapi.com",
                "x-rapidapi-key": "baf63dccedmsh789c63c1eaaa07ep1e846bjsnf74317cc7bae"
            }
        }).then((result) => {
            return result.json();

        }).then((res) => {
            console.log("RES ", res);
            this.setState({advise: res});

        }).catch(err => {
            console.log(err);
        });
    }


    adView = (advise) => {

        return (
            <View style={styles.containerText}>
                <Text>1- {advise[1]}</Text>
                {/*add these after pressing button 2 and 3*/}
                <Text>2- {advise[2]}</Text>
                <Text>3- {advise[3]}</Text>
            </View>
        );

    }

    render() {
        return (

            <ScrollView>

                <View style={styles.container}>
                    <Text>Ciao INSERT NAME</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Let me give you three pieces of advise"
                            onPress={() => this.newAdvise(1)}
                        />
                        {/*add button to afer press*/}
                    </View>
                </View>
                {this.state.advise !== null ? this.adView(this.state.advise) : null}
            </ScrollView>
        )
            ;
    }
}

Advises.navigationOptions = {
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
    containerText: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
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
    },
    buttonContainer: {
        flex: 1,
    }
});
