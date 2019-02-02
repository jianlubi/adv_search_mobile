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
export default class ReligiousAffilations extends Component {
    render() {
        return (
            <FilterContext.Consumer>
                {context => (
                    <>
                        <CheckBox key="655"
                            value={context.filters.options.includes(655)}
                            onValueChange={() => { context.actions.handleFilters('options', 655) }}
                        /><Text>Exclude faith-based schools</Text>
                        <View>
                            <Text>Faith</Text>
                            <View style={styles.twocols}>
                                <View style={styles.col}>
                                    {this.props.filterData[0] && this.props.filterData[0].map((filter) => {
                                        return (
                                            <View key={filter.id} style={{ flexDirection: 'row' }}>
                                                <CheckBox
                                                    value={context.filters.religiousFaith.includes(filter.code)}
                                                    onValueChange={() => { context.actions.handleFilters('religiousFaith', filter.code) }}
                                                /><Text style={{ marginTop: 5 }}>{filter.item}</Text>
                                            </View>);
                                    })}
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text>Scope of religion courses within curriculum</Text>
                            <View style={styles.twocols}>
                                <View style={styles.col}>
                                    {this.props.filterData[1] && this.props.filterData[1].map((filter) => {
                                        return (
                                            <View key={filter.id} style={{ flexDirection: 'row' }}>
                                                <CheckBox
                                                    value={context.filters.religiousScope.includes(filter.code)}
                                                    onValueChange={() => { context.actions.handleFilters('religiousScope', filter.code) }}
                                                /><Text style={{ marginTop: 5 }}>{filter.item}</Text>
                                            </View>
                                        );
                                    })}
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text>Integration of religious and secular curricula</Text>
                            <View style={styles.twocols}>
                                <View style={styles.col}>
                                    {this.props.filterData[2] && this.props.filterData[2].map((filter) => {
                                        return (
                                            <View key={filter.id} style={{ flexDirection: 'row' }}>
                                                <CheckBox
                                                    value={context.filters.religiousIntegration.includes(filter.code)}
                                                    onValueChange={() => { context.actions.handleFilters('religiousIntegration', filter.code) }}
                                                /><Text style={{ marginTop: 5 }}>{filter.item}</Text>
                                            </View>
                                        );
                                    })}
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text>Perspective taught on scripture</Text>
                            <View style={styles.twocols}>
                                <View style={styles.col}>
                                    {this.props.filterData[3] && this.props.filterData[3].map((filter) => {
                                        return (
                                            <View key={filter.id} style={{ flexDirection: 'row' }}>
                                                <CheckBox
                                                    value={context.filters.religiousPerspective.includes(filter.code)}
                                                    onValueChange={() => { context.actions.handleFilters('religiousPerspective', filter.code) }}
                                                /><Text style={{ marginTop: 5 }}>{filter.item}</Text>
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
