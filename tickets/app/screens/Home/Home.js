import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native'

import { screenStyles } from '../../styles/screenStyles';

class Home extends Component {
    state = {
        title: 'Hello world, I am alive',
    }

    render() {
        return (
            <View style={styles.centered}>
                <Text>{this.state.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create(screenStyles);

export default Home;
