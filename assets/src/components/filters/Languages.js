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
export default class Languages extends Component {
    render() {
        return (
            <FilterContext.Consumer>
                {context => (
                    <>
                        <View>
                            <Text>Primary languages of instruction:</Text>
                            <View style={styles.twocols}>
                                <View style={styles.col}>
                                    {this.props.filterData[0] && this.props.filterData[0].map((filter) => {
                                        return (
                                            <View key={filter.code} style={{ flexDirection: 'row' }}>
                                                <CheckBox
                                                    value={context.filters.primaryLanguage.includes(filter.code)}
                                                    onValueChange={() => { context.actions.handleFilters('primaryLanguage', filter.code) }}
                                                />
                                                <Text style={{ marginTop: 5 }}>{filter.value}</Text>
                                            </View>);
                                    })}

                                </View>
                            </View>
                        </View>
                        <View>
                            <Text>Second-language courses offered:</Text>
                            <View style={styles.twocols}>
                                <View style={styles.col}>
                                    {this.props.filterData[1] && this.props.filterData[1].map((filter) => {
                                        return (
                                            <View key={filter.id} style={{ flexDirection: 'row' }}>
                                                <CheckBox
                                                    value={context.filters.secondaryLanguage.includes(filter.id)}
                                                    onValueChange={() => { context.actions.handleFilters('secondaryLanguage', filter.id) }}
                                                />
                                                <Text style={{ marginTop: 5 }}>{filter.item}</Text>
                                            </View>
                                        );
                                    })}

                                </View>
                            </View>
                        </View>
                    </>
                )
                }
            </FilterContext.Consumer>
        )
    }
}
