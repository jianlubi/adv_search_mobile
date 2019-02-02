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
export default class DevelopmentalPriorities extends Component {
    render() {
        return (
            <FilterContext.Consumer>
                {context => (
                    <View>
                        <Text>Developmental priorities</Text>
                        <View style={styles.twocols}>
                            <View style={styles.col}>
                                {this.props.filterData && this.props.filterData.map((filter) => {
                                    return (
                                        <View key={filter.id} style={{ flexDirection: 'row' }}>
                                            <CheckBox
                                                value={context.filters.development.includes(filter.code)}
                                                onValueChange={() => { context.actions.handleFilters('development', filter.code) }}
                                            />
                                            <Text style={{ marginTop: 5 }}>{filter.item}</Text>
                                        </View>
                                    );
                                })}

                            </View>
                        </View>
                    </View>
                )}
            </FilterContext.Consumer>
        )
    }
}
