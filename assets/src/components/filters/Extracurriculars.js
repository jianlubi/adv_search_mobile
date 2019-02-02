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
export default class Extracurriculars extends Component {
    render() {
        return (
            <FilterContext.Consumer>
                {context => (
                    <>
                        <View>
                            <Text>Competitive sports</Text>
                            <View style={styles.twocols}>
                                <View style={styles.col}>
                                    {this.props.filterData[0] && this.props.filterData[0].map((filter) => {
                                        return (
                                            <View key={filter.id} style={{ flexDirection: 'row' }}>
                                                <CheckBox
                                                    value={context.filters.extracurricularsSports.includes(filter.code)}
                                                    onValueChange={() => { context.actions.handleFilters('extracurricularsSports', filter.code) }}
                                                /><Text style={{ marginTop: 5 }}>{filter.item}</Text>
                                            </View>
                                        );
                                    })}
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text>Competitive sports</Text>
                            <View style={styles.twocols}>
                                <View style={styles.col}>
                                    {this.props.filterData[0] && this.props.filterData[1].map((filter) => {
                                        return (
                                            <View key={filter.id} style={{ flexDirection: 'row' }}>
                                                <CheckBox
                                                    value={context.filters.extracurricularsClub.includes(filter.code)}
                                                    onValueChange={() => { context.actions.handleFilters('extracurricularsClub', filter.code) }}
                                                />
                                                <Text style={{ marginTop: 5 }}>{filter.item}</Text>
                                            </View>
                                        );
                                    })}
                                </View>
                            </View>
                        </View>
                    </>
                )}
            </FilterContext.Consumer>
        )
    }
}
