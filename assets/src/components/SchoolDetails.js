import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Image , Dimensions } from 'react-native';

const styles = StyleSheet.create({
    detailsSection:{
        flexDirection: 'row', 
       
    },
    left:{
        flex:0.4,
        fontWeight: '700',
       
    },
    right:{
        flex:0.6,
      
    },
    details:{
       
       
    },
    miniContent: {
        paddingLeft:16,
        paddingRight:16,
    }  
});
export default class schoolDetails extends React.Component{
    static navigationOptions = ({ navigation})=>{
        return{
            title:navigation.getParam('schoolName', "school"),
            headerStyle: {
                backgroundColor: '#be1f24',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }, 
              
        }     
    }
    constructor(){
        super();
        this.state = {
            school:[],
            imgWidth: 0,
            imgHeight: 0,
        }
    }
    componentDidMount(){
        const sid = "id="+this.props.navigation.getParam('schoolID', 0);
        fetch(`http://ourkids.dyndns.org:8080/school/json_adv_search_mini_profile.php`, {  
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            credentials: "same-origin",
            body: sid
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    school: data,
                });    
            });    
    }

    componentWillUnmount(){
        this.setState({
            school:[],
            imgWidth: 0,
            imgHeight: 0,
        }) 
        this.isCancelled = true;
    }
    render(){
        const school = this.state.school;
        if(school && school.length!==0){
            Image.getSize(`https://res.cloudinary.com/ourkids/image/upload/v${school.profilev}/school/profile/${school.sid}_school_profile.jpg`, (width, height) => {
                // calculate image width and height 
                const screenWidth = Dimensions.get('window').width;
                const scaleFactor = width / screenWidth;
                const imageHeight = height / scaleFactor;
                !this.isCancelled && this.setState({imgWidth: screenWidth, imgHeight: imageHeight})
            })
        }
        let enrollment;
        if (school && school.grades_genders) {
            enrollment = <View>{Object.values(school.grades_genders).map((element, i) => {
                return (<View key={i}><Text><Text>{element.type_name}:</Text> <Text>{element.num_enroll?element.num_enroll:""}</Text></Text>
                    <Text>({element.grade_from} - {element.grade_to}: {element.gender_name})</Text></View>);

            })}</View>;
        } else {
            enrollment = <View></View>;
        }
        const profleImage = <Image style={{width: Dimensions.get('window').width, height: this.state.imgHeight}} source={{uri:`https://res.cloudinary.com/ourkids/image/upload/v${school.profilev}/school/profile/${school.sid}_school_profile.jpg`}}/>
        return(
            <>
            {profleImage}
            <View style={styles.miniContent}>
              
            <View >
             
            <Text style={{fontSize:24,fontWeight:'700'}}>{school.school_name}</Text> 
            <Text style={{textTransform:'uppercase'}}>{school.school_city}, {school.school_province}</Text>
            <Text style={{fontSize:12,fontWeight:'300'}}>{school.school_address}, {school.school_city} ,{school.school_province}, {school.school_postal} </Text>
            </View>
            <View style={styles.details}>
            <View style={styles.detailsSection}>
                <View style={styles.left}><Text>Enrollment</Text></View>
                <View style={styles.right}>{enrollment}</View>
            </View>
            <View style={styles.detailsSection}>
                <View style={styles.left}><Text>{school.school_type_text}</Text></View>
                <View style={styles.right}><Text>{school.school_type}</Text></View>
            </View>
            <View style={styles.detailsSection}>
                <View style={styles.left}><Text>Tuition</Text></View>
                <View style={styles.right}><Text>{school.cost}</Text></View>
            </View>
            <View style={styles.detailsSection}>
                <View style={styles.left}><Text>Special Needs</Text></View>
                <View style={styles.right}><Text>{school.special_needs_level}</Text></View>
            </View>
            </View>
            </View>
            </>
            );
    }
}