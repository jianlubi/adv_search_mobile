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
export default class Grades extends Component {


    render() {
        return (
            <FilterContext.Consumer>
                {context => (
                    <View>
                        <Text>Grades</Text>
                        <View style={styles.twocols}>
                            <View style={styles.col}>
                                {this.props.filterData.map((filter) => {
                                    return (
                                        <View key={filter.id} style={{ flexDirection: 'row' }}>
                                            <CheckBox
                                                value={context.filters.grades.includes(filter.code)}
                                                onValueChange={() => { context.actions.handleFilters('grades', filter.code) }}
                                            /><Text style={{ marginTop: 5 }}>{filter.value}</Text>
                                        </View>);
                                })}

                            </View>
                        </View>
                    </View>
                )
                }
            </FilterContext.Consumer>
        )
    }
}
