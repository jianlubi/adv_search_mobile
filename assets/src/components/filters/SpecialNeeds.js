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
export default class SpecialNeeds extends Component {
    render() {
        return (
            <FilterContext.Consumer>
                {context => (
                    <>
                        <View style={{ flexDirection: 'row' }}>
                            <CheckBox key="g2741-0"
                                value={context.filters.exclude.includes("g2741-0")}
                                onValueChange={() => { context.actions.handleFilters('exclude', "g2741-0") }}
                            /><Text style={{ marginTop: 5 }}>Exclude special needs schools</Text>
                        </View>
                        <View>
                            <Text>Environment</Text>
                            <View style={styles.twocols}>
                                <View style={styles.col}>
                                    <View key="392" style={{ flexDirection: 'row' }}>
                                        <CheckBox
                                            value={context.filters.specialNeedsDelivery.includes(392)}
                                            onValueChange={() => { context.actions.handleFilters('specialNeedsDelivery', 392) }}
                                        /><Text style={{ marginTop: 5 }}>Dedicated special needs school</Text>
                                    </View>
                                    <View key="[554]5" style={{ flexDirection: 'row' }}>
                                        <CheckBox
                                            value={context.filters.specialNeedsDelivery.includes("[554]5")}
                                            onValueChange={() => { context.actions.handleFilters('specialNeedsDelivery', "[554]5") }}
                                        /><Text style={{ marginTop: 5 }}>Full-time special needs class</Text>
                                    </View>
                                    <View key="[554]4" style={{ flexDirection: 'row' }}>
                                        <CheckBox
                                            value={context.filters.specialNeedsDelivery.includes("[554]4")}
                                            onValueChange={() => { context.actions.handleFilters('specialNeedsDelivery', "[554]4") }}
                                        /><Text style={{ marginTop: 5 }}>Special needs class with partial integration</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text>Integrated</Text>
                            <View style={styles.twocols}>
                                <View style={styles.col}>
                                    <View key="[554]3" style={{ flexDirection: 'row' }}>
                                        <CheckBox
                                            value={context.filters.specialNeedsIntegrated.includes("[554]3")}
                                            onValueChange={() => { context.actions.handleFilters('specialNeedsIntegrated', "[554]3") }}
                                        /><Text style={{ marginTop: 5 }}>Regular class with withdrawal assistance</Text>
                                    </View>
                                    <View key="[554]2" style={{ flexDirection: 'row' }}>
                                        <CheckBox
                                            value={context.filters.specialNeedsIntegrated.includes("[554]2")}
                                            onValueChange={() => { context.actions.handleFilters('specialNeedsIntegrated', "[554]2") }}
                                        /><Text style={{ marginTop: 5 }}>Regular class with withdrawal assistance</Text>
                                    </View>
                                    <View key="[554]1" style={{ flexDirection: 'row' }}>
                                        <CheckBox
                                            value={context.filters.specialNeedsIntegrated.includes("[554]1")}
                                            onValueChange={() => { context.actions.handleFilters('specialNeedsIntegrated', "[554]1") }}
                                        /><Text style={{ marginTop: 5 }}>Regular class with indirect support</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text>Conditions</Text>
                            <View style={styles.twocols}>
                                <View style={styles.col}>
                                    <View key="g2722" style={{ flexDirection: 'row' }}>
                                        <CheckBox
                                            value={context.filters.specialNeedsADHD.includes("g2722")}
                                            onValueChange={() => { context.actions.handleFilters('specialNeedsADHD', "g2722") }}
                                        /><Text style={{ marginTop: 5 }}>Mild ADD/ADHD</Text>
                                    </View>
                                    <View key="554" style={{ flexDirection: 'row' }}>
                                        <CheckBox
                                            value={context.filters.specialNeedsADHD.includes("554")}
                                            onValueChange={() => { context.actions.handleFilters('specialNeedsADHD', "554") }}
                                        /><Text style={{ marginTop: 5 }}>Regular class with indirect support</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text>Learning disablities</Text>
                            <View style={styles.twocols}>
                                <View style={styles.col}>
                                    {this.props.filterData && this.props.filterData.learning_disabilities.map((filter) => {
                                        return (
                                            <View key={filter.id} style={{ flexDirection: 'row' }}>
                                                <CheckBox
                                                    value={context.filters.specialNeedsLearningDisablities.includes(filter.code)}
                                                    onValueChange={() => { context.actions.handleFilters('specialNeedsLearningDisablities', filter.code) }}
                                                /><Text style={{ marginTop: 5 }}>{filter.item}</Text>
                                            </View>
                                        );
                                    })}

                                </View>
                            </View>
                        </View>
                        <View>
                            <Text>Developmental</Text>
                            <View style={styles.twocols}>
                                <View style={styles.col}>
                                    {this.props.filterData && this.props.filterData.developmental.map((filter) => {
                                        return (
                                            <View key={filter.id} style={{ flexDirection: 'row' }}>
                                                <CheckBox
                                                    value={context.filters.specialNeedsDevelopmental.includes(filter.code)}
                                                    onValueChange={() => { context.actions.handleFilters('specialNeedsDevelopmental', filter.code) }}
                                                /><Text style={{ marginTop: 5 }}>{filter.item}</Text>
                                            </View>
                                        );
                                    })}

                                </View>
                            </View>
                        </View>
                        <View>
                            <Text>Behavioral and Emotional</Text>
                            <View style={styles.twocols}>
                                <View style={styles.col}>
                                    {this.props.filterData && this.props.filterData.behavioral_and_Emotional.map((filter) => {
                                        return (
                                            <View key={filter.id} style={{ flexDirection: 'row' }}>
                                                <CheckBox
                                                    value={context.filters.specialNeedsBehavioral.includes(filter.code)}
                                                    onValueChange={() => { context.actions.handleFilters('specialNeedsBehavioral', filter.code) }}
                                                /><Text style={{ marginTop: 5 }}>{filter.item}</Text>
                                            </View>
                                        );
                                    })}

                                </View>
                            </View>
                        </View>
                        <View>
                            <Text>Physical</Text>
                            <View style={styles.twocols}>
                                <View style={styles.col}>
                                    {this.props.filterData && this.props.filterData.physical.map((filter) => {
                                        return (
                                            <View key={filter.id} style={{ flexDirection: 'row' }}>
                                                <CheckBox
                                                    value={context.filters.specialNeedsPhysical.includes(filter.code)}
                                                    onValueChange={() => { context.actions.handleFilters('specialNeedsPhysical', filter.code) }}
                                                /><Text style={{ marginTop: 5 }}>{filter.item}</Text>
                                            </View>
                                        );
                                    })}

                                </View>
                            </View>
                        </View>
                        <View>
                            <Text>Additional support</Text>
                            <View style={styles.twocols}>
                                <View style={styles.col}>
                                    {this.props.filterData && this.props.filterData.additional_support.map((filter) => {
                                        return (
                                            <View key={filter.id} style={{ flexDirection: 'row' }}>
                                                <CheckBox
                                                    value={context.filters.specialNeedsAdditional.includes(filter.code)}
                                                    onValueChange={() => { context.actions.handleFilters('specialNeedsAdditional', filter.code) }}
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
