import React from 'react';
import {data} from './assets/src/components/data';
import { StyleSheet, Text, View, AsyncStorage, Image } from 'react-native';
import SchoolList from './assets/src/components/SchoolList';
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from "react-navigation";
import SchoolDetails from './assets/src/components/SchoolDetails';
import Footer from './assets/src/components/Footer';
import schoolMap from './assets/src/components/schoolMap';
import {FilterContext} from './assets/src/components/FilterContext';
import Filter from './assets/src/components/Filter';
import Tuition from './assets/src/components/schooldetails/Tuition';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      shortlist: [],
      filters:{
        grades:[],
        types:[],
        genders:[],
      } 
    }
  }
  
  retrieveShortlist = async () => {
    try {
      const shortlist = await AsyncStorage.getItem('shortlist');
      const shortlistArr = shortlist.split(",");
      console.log(shortlist);
      if (shortlist !== null) {
       this.setState({
         shortlist: shortlistArr
       });
      }
      
     } catch (error) {
       // Error retrieving shortlist
     }
  }
  storeData = async (shortlist) => {
    try {
      await AsyncStorage.setItem('shortlist', shortlist,()=>{
        this.retrieveShortlist();
      });
      console.log("saving...");
    } catch (error) {
      // Error saving data
    }
  }
  addToShortlist = (schoolID, schoolName) => {
    const shortlist  = this.state.shortlist;
    if(shortlist.includes(schoolID)){
      shortlist = shortlist.filter(item => item !== schoolID)
    }else{
      shortlist.push(schoolID);
    }
    const shortlistStr = shortlist.join(",");
    this.storeData(shortlistStr);
    console.log(shortlist)
    this.setState({
      shortlist:shortlist
    })
  }
  handleFilters = (filterName, checkboxValue) =>{
      let filterArr =  this.state.filters;
      if(filterArr[filterName].includes(checkboxValue)){
        filterArr[filterName] = filterArr[filterName].filter(item => item !== checkboxValue)
      }else{
        filterArr[filterName].push(checkboxValue);
      }
      this.setState({
        filters: filterArr
      })
  }
  updateSchoolList = () =>{
    
  }
  componentDidMount(){
    this.retrieveShortlist();
  }
  render(){
    return (
      <FilterContext.Provider value={
      {
        schoolData:data, 
        shortlist:this.state.shortlist,
        filters:this.state.filters,
        actions:{
          addToShortlist:this.addToShortlist,
          handleFilters:this.handleFilters
        }
      }}>
        <AppContainer />
      </FilterContext.Provider>
    )

  }
}
class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./assets/img/ourkids-red-logo.png')}
        style={{ width: 135,height: 30,  marginRight: 'auto',
        marginLeft: 'auto' }}
      />
    );
  }
}
class HomeScreen extends React.Component {
 
 
  static navigationOptions = {
    headerTitle:<LogoTitle/>,
   
    headerStyle: {
     
      backgroundColor: '#be1f24',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
 
  render() {
    
    return (
      <FilterContext.Consumer>
        {context=>(
          <View style={styles.container} >
            <SchoolList navigation={this.props.navigation} 
            schoolData = {context.schoolData} 
            addToShortlist={context.actions.addToShortlist} 
            shortlist={context.shortlist}></SchoolList>
            <Footer navigation={this.props.navigation}/>
          </View>
        )
        }
      </FilterContext.Consumer>
      
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
  },
});

const ProfileNavigator = createMaterialTopTabNavigator(
  {
    ProfileHome: SchoolDetails,
    ProfileTuition: Tuition
  },
  {
     defaultNavigationOptions: {
     title: 'Home',
         headerTintColor: '#fff',
         headerStyle: {
           backgroundColor: '#000',
         },
       },
    tabBarPosition: 'bottom',
    tabBarOptions:{
      activeTintColor:'white',
      inactiveTintColor:'white',
      style:{
        backgroundColor:'#b20000',
      },
      indicatorStyle:{
        height: 0
      }
    },

    initialRouteName: "ProfileHome"
  }
)
ProfileNavigator.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('schoolName', "school"),
  }
}
const AppNavigator = createStackNavigator(
 {
    Home: HomeScreen,
    Details:ProfileNavigator,
    Map: schoolMap,
    Filter: Filter
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);
