import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

const styles = StyleSheet.create({
    typeFilter:{
        
    },
    row1:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    row2:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    badge:{
        borderWidth:1,
        padding: 10,
        width:100,
        alignItems:'center',
        marginTop:10,
        borderRadius:4,
        borderColor: '#d0d0d0'
    }
});
export default class Types extends Component {
  render() {
    return (
        <View>
            <Text>Types</Text>
            <View style={styles.typeFilter}>
                <View style={styles.row1} >
                    <TouchableHighlight><View style={styles.badge}><Text>Day</Text></View></TouchableHighlight>
                    <TouchableHighlight><View style={styles.badge}><Text>Boarding</Text></View></TouchableHighlight>
                    <TouchableHighlight><View style={styles.badge}><Text>Homestay</Text></View></TouchableHighlight>
                </View>
                <View style={styles.row2}>
                    <TouchableHighlight><View style={styles.badge}><Text>All girls</Text></View></TouchableHighlight>
                    <TouchableHighlight><View style={styles.badge}><Text>All boys</Text></View></TouchableHighlight>
                    <TouchableHighlight><View style={styles.badge}><Text>Coed</Text></View></TouchableHighlight>
                </View>
        
            </View>
            
        </View>
    )
  }
}
