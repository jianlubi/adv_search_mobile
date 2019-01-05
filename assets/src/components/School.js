import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    tableContentSchool:{
        padding: 16,
        margin:8,
        borderRadius:4,
        flexDirection: 'row', 
        shadowColor: '#333',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 1,
        borderLeftWidth:5,
        borderLeftColor: '#ffd500', 
        backgroundColor:'white',  
    },
    schoolName:{
        color:'#be1f24',
        fontSize:20,
        fontWeight:'700',
    }
    
});

export default class School extends React.Component{


    render(){
        const schoolID = this.props.schoolID;
        const schoolName = this.props.schoolName;
        return(
                <TouchableWithoutFeedback  onPress={() => {
                    this.props.navigation.navigate('Details',{
                        schoolID: schoolID,
                        schoolName: schoolName
                    })
                }}>
                    <View style={styles.tableContentSchool}>
                    <View style={{flex:1}}><Text><Text style={{fontSize: 18}}>{this.props.distance}</Text>{"\n"} <Text style={{fontSize: 12}}>km</Text></Text></View>
                    <View style={{flex:5}}><Text ><Text style={styles.schoolName}>{this.props.schoolName}{"\n"}</Text><Text>{`${this.props.grade_from} to ${this.props.grade_to} (${this.props.genders})`}</Text></Text></View>
                    <View style={{flex:1}}><Text><Icon name={this.props.shortlist.has(schoolID)?"heart":"heart-o"} size={20} color="red" onPress={()=>this.props.addToShortlist(schoolID, schoolName)}></Icon></Text></View>
                    </View>
                </TouchableWithoutFeedback>
        );
    }
}