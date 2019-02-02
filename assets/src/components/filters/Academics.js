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

export default class Academics extends Component {

    render() {
        return (
            <FilterContext.Consumer>
                {context => (
                    <>
                        <TouchableHighlight>
                            <View>
                                <Text>Academics</Text>
                                
                            </View>
                        </TouchableHighlight>
                        <View>
                            <Text>Preschool/Kindergarten curriculum</Text>
                            {this.props.filterData[0] && this.props.filterData[0].map((filter) => {
                                return (
                                    <View key={filter.id} style={{ flexDirection: 'row' }}>
                                        <CheckBox
                                            value={context.filters.preschool.includes(filter.id)}
                                            onValueChange={() => { context.actions.handleFilters('preschool', filter.id) }}
                                        />
                                        <Text style={{ marginTop: 5 }}>{filter.item}</Text>
                                    </View>
                                );
                            })}
                        </View>
                        <View>
                            <Text>Elementary and high school curriculum</Text>
                            <View>
                                <Text>Mainstream</Text>
                                {this.props.filterData[1] && this.props.filterData[1].map((filter) => {
                                    return (
                                        <View key={filter.id} style={{ flexDirection: 'row' }}>
                                            <CheckBox
                                                value={context.filters.elementary.includes(filter.id)}
                                                onValueChange={() => { context.actions.handleFilters('elementary', filter.id) }}

                                            />
                                            <Text style={{ marginTop: 5 }}>{filter.item}</Text>
                                        </View>
                                    );
                                })}
                            </View>
                            <View>
                                <Text>Alternative </Text>
                                {this.props.filterData[2] && this.props.filterData[2].map((filter) => {
                                    return (
                                        <View key={filter.id} style={{ flexDirection: 'row' }}>
                                            <CheckBox
                                                value={context.filters.elementary.includes(filter.id)}
                                                onValueChange={() => { context.actions.handleFilters('elementary', filter.id) }}

                                            />
                                            <Text style={{ marginTop: 5 }}>{filter.item}</Text>
                                        </View>
                                    );
                                })}
                            </View>
                        </View>
                        <View>
                            <Text>Curriculum Pace</Text>
                            {this.props.filterData[3] && this.props.filterData[3].map((filter) => {
                                return (
                                    <View key={filter.id} style={{ flexDirection: 'row' }}>
                                        <CheckBox
                                            value={context.filters.curriculumPaces.includes(filter.id)}
                                            onValueChange={() => { context.actions.handleFilters('curriculumPaces', filter.id) }}

                                        />
                                        <Text style={{ marginTop: 5 }}>{filter.item}</Text>
                                    </View>
                                );
                            })}
                        </View>
                        <View>
                            <Text>Academic Culture</Text>
                            {this.props.filterData[4] && this.props.filterData[4].map((filter) => {
                                return (
                                    <View key={filter.id} style={{ flexDirection: 'row' }}>
                                        <CheckBox
                                            value={context.filters.academicCulture.includes(filter.id)}
                                            onValueChange={() => { context.actions.handleFilters('academicCulture', filter.id) }}

                                        />
                                        <Text style={{ marginTop: 5 }}>{filter.item}</Text>
                                    </View>
                                );
                            })}
                        </View>
                        <View>
                            <Text>Subject pedagogies</Text>
                            <View>
                                <Text>Math </Text>
                                {this.props.filterData[5] && this.props.filterData[5].map((filter) => {
                                    return (
                                        <View key={filter.id} style={{ flexDirection: 'row' }}>
                                            <CheckBox
                                                value={context.filters.math.includes(filter.id)}
                                                onValueChange={() => { context.actions.handleFilters('math', filter.id) }}

                                            />
                                            <Text style={{ marginTop: 5 }}>{filter.item}</Text>
                                        </View>
                                    );
                                })}
                            </View>
                            <View>
                                <Text>Reading </Text>
                                {this.props.filterData[6] && this.props.filterData[6].map((filter) => {
                                    return (
                                        <View key={filter.id} style={{ flexDirection: 'row' }}>
                                            <CheckBox
                                                value={context.filters.reading.includes(filter.id)}
                                                onValueChange={() => { context.actions.handleFilters('reading', filter.id) }}

                                            />
                                            <Text style={{ marginTop: 5 }}>{filter.item}</Text>
                                        </View>
                                    );
                                })}
                            </View>
                            <View>
                                <Text>Computers and technology</Text>
                                {this.props.filterData[7] && this.props.filterData[7].map((filter) => {
                                    return (
                                        <View key={filter.id} style={{ flexDirection: 'row' }}>
                                            <CheckBox
                                                value={context.filters.technology.includes(filter.id)}
                                                onValueChange={() => { context.actions.handleFilters('technology', filter.id) }}
                                            />
                                            <Text style={{ marginTop: 5 }}>{filter.item}</Text>
                                        </View>
                                    );
                                })}
                            </View>
                        </View>
                    </>
                )
                }
            </FilterContext.Consumer>
        )
    }
}
