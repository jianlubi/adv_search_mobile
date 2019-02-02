import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { FilterContext } from '../FilterContext';
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
            <FilterContext.Consumer>
            {context => (
            <View>
                <Text>Types</Text>
                <View style={styles.typeFilter}>
                    <View style={styles.row1} >
                        {this.props.filterData[0] && this.props.filterData[0].map((filter) => {
                            return (<TouchableHighlight key={filter.id} onPress={() => { context.actions.handleFilters('types', filter.code) }}>
                                <View style={context.filters.types.includes(filter.code)?styles.highlightedBadge:styles.badge}>
                                    <Text>{filter.value}</Text>
                                </View>
                            </TouchableHighlight>);
                        })}

                    </View>
                    <View style={styles.row2}>
                        {this.props.filterData[1] && this.props.filterData[1].map((filter) => {
                            return (<TouchableHighlight key={filter.id} onPress={() => { context.actions.handleFilters('genders', filter.code) }}>
                                <View style={context.filters.genders.includes(filter.code)?styles.highlightedBadge:styles.badge}>
                                    <Text>{filter.value}</Text>
                                </View>
                            </TouchableHighlight>);
                        })}
                    </View>

                </View>

            </View>
            )}
            </FilterContext.Consumer>
        )
    }
}
