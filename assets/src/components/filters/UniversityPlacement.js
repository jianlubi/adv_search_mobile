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
export default class UniversityPlacement extends Component {
  render() {
    return (
      <FilterContext.Consumer>
        {context => (
          <View style={{ flexDirection: 'row' }}>
            <CheckBox
              value={context.filters.UniversityPlacement}
              onValueChange={() => { context.actions.handleFilters('UniversityPlacement', "g2741-0") }}
            /><Text style={{ marginTop: 5 }}>Elite university feeder schools</Text>
          </View>
        )}</FilterContext.Consumer>
    )
  }
}
