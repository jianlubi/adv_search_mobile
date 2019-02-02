import React, { Component } from 'react'
import { StyleSheet, Text, View, CheckBox } from 'react-native'
import { FilterContext } from '../FilterContext';
const styles = StyleSheet.create({
    twocols: {
        flexDirection: 'row'
    },
    col: {
        flex: 1
    }

});
export default class OpenHouses extends Component {
    render() {
        return (
            <FilterContext.Consumer>
                {context => (
                    <View>
                        <Text>Open House</Text>
                        <View style={styles.twocols}>
                            <View style={styles.col}>
                                <View style={{ flexDirection: 'row' }}>
                                    <CheckBox
                                        value={context.filters.openhouse}
                                        onValueChange={() => { context.actions.handleFilters('openhouse', 1) }}
                                    />
                                    <Text style={{ marginTop: 5 }}>Open House</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
            </FilterContext.Consumer>
        )
    }
}
