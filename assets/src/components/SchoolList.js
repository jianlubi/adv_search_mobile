import React from 'react';
import School from './School';
import { StyleSheet, Text, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    schoolList:{
        width:'100%',
       flex:1
    }
});
export default class SchoolList extends React.Component{
    render(){
        return(
            <ScrollView style={styles.schoolList}>
                {this.props.schoolData.map((school) => {
                let distance = school.distance;
                if (distance) {
                    distance = Number(distance);
                    if (distance < 10) {
                        distance = distance.toFixed(1);
                    }
                    else {
                        distance = distance.toFixed();
                    }
                }
                return (
                <School navigation={this.props.navigation} key={school.schoolID}  cookieSids={this.props.cookieSids} distance={distance} schoolName={school.school_name} schoolID={school.schoolID}
								location={`${school.city}, ${school.province}`} grade_from={school.grade_from_str} grade_to={school.grade_to_str} genders={school.genders}
								userReviews="1" minTuition={school.cost_from} maxTuition={school.cost_to} currency="USD" featured={(school.weight === "3") ? 1 : 0}
								showMiniProfile={this.props.showMiniProfile} addToShortlist={this.props.addToShortlist} shortlist={this.props.shortlist}></School>
                );
                })}    
                </ScrollView>
        );
    }
}