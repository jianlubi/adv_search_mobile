import React, { Component } from 'react'
import { StyleSheet, Text, View, CheckBox } from 'react-native';
import { FilterContext } from '../FilterContext';
const styles = StyleSheet.create({
    twocols: {
        flexDirection: 'row'
    },
    col: {
        flex: 1
    }

});
export default class SpecialNeedsEssentials extends Component {
    render() {
        return (
            <FilterContext.Consumer>
                {context => (
                    <>
                        <View>
                            <Text>Special Needs</Text>
                            <View key='392' style={{ flexDirection: 'row' }}>
                                <CheckBox
                                    value={context.filters.specialNeedsDelivery.includes(392)}
                                    onValueChange={() => { context.actions.handleFilters('specialNeedsDelivery', 392) }}
                                /><Text style={{ marginTop: 5 }}>Dedicated special needs schools</Text>
                            </View>
                            <View key='351' style={{ flexDirection: 'row' }}>
                                <CheckBox
                                    value={context.filters.specialNeedsDelivery.includes('[554]4')}
                                    onValueChange={() => { context.actions.handleFilters('specialNeedsDelivery', '[554]4') }}
                                /><Text style={{ marginTop: 5 }}>Schools offering some special needs support</Text>
                            </View>
                        </View>
                        <View>
                            <Text>Gifted learners</Text>
                            <View key='396' style={{ flexDirection: 'row' }}>
                                <CheckBox
                                    value={context.filters.options.includes(396)}
                                    onValueChange={() => { context.actions.handleFilters('options', 396) }}
                                /><Text style={{ marginTop: 5 }}>Dedicated school gifted learners</Text>
                            </View>
                            <View key='361' style={{ flexDirection: 'row' }}>
                                <CheckBox
                                    value={context.filters.options.includes(361)}
                                    onValueChange={() => { context.actions.handleFilters('options', 361) }}
                                /><Text style={{ marginTop: 5 }}>Schools offering support for gifted learners</Text>
                            </View>
                        </View>
                    </>
                )}
            </FilterContext.Consumer>
        )
    }
}
