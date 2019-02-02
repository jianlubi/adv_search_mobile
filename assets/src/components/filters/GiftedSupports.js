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
export default class GiftedSupports extends Component {
    render() {
        return (
            <FilterContext.Consumer>
                {context => (
                    <>
                        <View>
                            <CheckBox key="g2741-0"
                                value={context.filters.exclude.includes("g2741-0")}
                                onValueChange={() => { context.actions.handleFilters('exclude', "g2741-0") }}
                            />
                            <Text style={{ marginTop: 5 }}>Exclude special needs schools</Text>
                        </View>
                        <View>
                            <Text>Environment</Text>
                            <View style={styles.twocols}>
                                <View style={styles.col}>
                                    <View key="392" style={{ flexDirection: 'row' }}>
                                        <CheckBox
                                            value={context.filters.options.includes(392)}
                                            onValueChange={() => { context.actions.handleFilters('options', 392) }}
                                        />
                                        <Text style={{ marginTop: 5 }}>Dedicated gifted school</Text>
                                    </View>
                                    <View key="361" style={{ flexDirection: 'row' }}>
                                        <CheckBox
                                            value={context.filters.options.includes(361)}
                                            onValueChange={() => { context.actions.handleFilters('options', 361) }}
                                        />
                                        <Text style={{ marginTop: 5 }}>Dedicated gifted class</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text>Integrated</Text>
                            <View style={styles.twocols}>
                                <View style={styles.col}>
                                    <View key="362" style={{ flexDirection: 'row' }}>
                                        <CheckBox
                                            value={context.filters.giftedIntegrated.includes(362)}
                                            onValueChange={() => { context.actions.handleFilters('giftedIntegrated', 362) }}
                                        />
                                        <Text style={{ marginTop: 5 }}>Regular class with withdrawal program</Text>
                                    </View>
                                    <View key="g3581" style={{ flexDirection: 'row' }}>
                                        <CheckBox
                                            value={context.filters.giftedIntegrated.includes('g3581')}
                                            onValueChange={() => { context.actions.handleFilters('giftedIntegrated', 'g3581') }}
                                        /><Text style={{ marginTop: 5 }}>Dedicated gifted class</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text>Gifted program emphasis</Text>
                            <View style={styles.twocols}>
                                <View style={styles.col}>
                                    {this.props.filterData && this.props.filterData.map((filter) => {
                                        return (
                                            <View key={filter.id} style={{ flexDirection: 'row' }}>
                                                <CheckBox
                                                    value={context.filters.giftedEmphasis.includes(filter.code)}
                                                    onValueChange={() => { context.actions.handleFilters('giftedEmphasis', filter.code) }}
                                                /><Text style={{ marginTop: 5 }}>{filter.item}</Text>
                                            </View>);
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
