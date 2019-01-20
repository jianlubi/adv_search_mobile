import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Image, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import SchoolProfile from './schooldetails/SchoolProfile';

const styles = StyleSheet.create({
    detailsSection: {
        flexDirection: 'row',

    },
    left: {
        flex: 0.4,
        fontWeight: '700',

    },
    right: {
        flex: 0.6,

    },
    details: {


    },
    miniContent: {
        paddingLeft: 16,
        paddingRight: 16,
    }
});

export default class SchoolDetails extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Home',
            headerStyle: {
                backgroundColor: '#be1f24',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },

        }
    }
   
   state={
       sid: this.props.navigation.getParam('schoolID', 0)
   }
    render() {
        return(
            <SchoolProfile sid = {this.state.sid} />
        )
    
    }
}
