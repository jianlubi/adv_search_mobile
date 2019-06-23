import React, { Component } from 'react'
import { StyleSheet, Text, View, CheckBox, TouchableHighlight } from 'react-native'

import Svg, { Path } from 'react-native-svg';
import { FilterContext } from '../FilterContext';


export default class Checkbox extends Component {
    render() {
        return (
            <View >
                <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                    /><Text style={{ marginTop: 5 }}>{this.props.filterData.value}</Text>
                </View>
            </View>

        )
    }
}