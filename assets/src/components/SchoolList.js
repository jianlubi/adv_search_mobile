import React from 'react';
import School from './School';
import { StyleSheet, View, Text, FlatList, List  } from 'react-native';
import LottieView from 'lottie-react-native';
const styles = StyleSheet.create({

});
export default class SchoolList extends React.Component{

    render(){
        
        if(this.props.schoolData.length===0){
            return (<LottieView source={require("../../Plane.json") } autoPlay={true} 
           />)
        }else{
            return (<FlatList data={this.props.schoolData}
                keyExtractor={item=>item.schoolID}
                renderItem={({item}) => (
                    <School navigation={this.props.navigation}  cookieSids={this.props.cookieSids} distance={1} schoolName={item.school_name} schoolID={item.schoolID}
                    location={`${item.city}, ${item.province}`} grade_from={item.grade_from_str} grade_to={item.grade_to_str} genders={item.genders}
                    userReviews="1" minTuition={item.cost_from} maxTuition={item.cost_to} currency="USD" featured={(item.weight === "3") ? 1 : 0}
                    showMiniProfile={this.props.showMiniProfile} addToShortlist={this.props.addToShortlist} shortlist={this.props.shortlist}></School>
                  )  }
                 />) 
        }
     
       

        }
    }
