import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native'; //import required stuff

export default class Main extends Component {
    render () {
        return(
            <View style={styles.wrapper}> 
                <Text>
                'Components go in here'
                </Text>
            </View> // end main view
        );
    }
}

// styles stored in object
const styles = {
    wrapper: {
        flex: 1,
        //make things cleaner by storing styles in object
        // pass the styles like styles.wrapper
    }
}