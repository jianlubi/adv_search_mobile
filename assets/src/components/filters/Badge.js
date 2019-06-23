import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    typeFilter: {

    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    row2: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    badge: {
        borderWidth: 1,
        padding: 10,
        width: 100,
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 4,
        borderColor: '#d0d0d0'
    },
    highlightedBadge: {
        borderWidth: 1,
        padding: 10,
        width: 100,
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 4,
        borderColor: '#d0d0d0',
        backgroundColor: '#d0d0d0',
    }
});
export default class Types extends Component {
    render() {
        return (
            <View style={styles.row1} >
                <TouchableHighlight>
                    <View style={this.props.filterData.types ? styles.highlightedBadge : styles.badge}>
                        <Text>{this.props.filterData.value}</Text>
                    </View>
                </TouchableHighlight>

            </View>

        )
    }
}