import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
    footer:{
        position:'absolute',
        bottom:30,
        left: 0,
        right: 0,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerButtons:{
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor:'white',
        shadowColor: '#333',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 3,
    },
    left:{
        width:97,
        borderRightWidth:1,
        borderRightColor:'#ddd',
        justifyContent: 'center', 
        alignItems: 'center',
        paddingTop:10,
        paddingBottom:10,
    },
    right:{
        width:97,
        justifyContent: 'center', 
        alignItems: 'center',
        paddingTop:10,
        paddingBottom:10,
    }
});
export default class Footer extends React.Component{
    render(){
        return(
        <View style={styles.footer}>
            <View style={styles.footerButtons}>
                <TouchableWithoutFeedback onPress={() => {
                        this.props.navigation.navigate('Map')
                    }}>
                    <View style={styles.left} >
                        <Text style={{fontSize:16}}>
                            <Icon name="map" style={{fontSize:18}} />  Map
                            </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={styles.right}>
                        <Text style={{fontSize:18}}>
                        <Icon name="filter" style={{fontSize:18}}/> Filter
                    </Text>
                </View>
                </TouchableWithoutFeedback>
            </View>
        </View>);
    }
}