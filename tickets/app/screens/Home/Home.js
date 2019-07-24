import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native'

import { screenStyles } from '../../styles/screenStyles';

class Home extends Component {
    state = {
        title: 'Hello world, I am alive',
    }

    render() {
        return (
            <View style={styles.centered}>
                <Image style={logoStyles.logoWrapper} source={require('../../../assets/logo.png')} />
                <Text>{this.state.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create(screenStyles);
const logoStyles = StyleSheet.create({
    logoWrapper: {
        width: '70%',
        resizeMode: 'contain',
    },
});

export default Home;
