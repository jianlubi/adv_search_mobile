import React from 'react';
import {data} from './assets/src/components/data';
import { StyleSheet, Text, View, AsyncStorage, Image } from 'react-native';
import SchoolList from './assets/src/components/SchoolList';
import { createStackNavigator, createAppContainer } from "react-navigation";
import schoolDetails from './assets/src/components/SchoolDetails';
import Footer from './assets/src/components/Footer';
import schoolMap from './assets/src/components/schoolMap';
import {FilterContext} from './assets/src/components/FilterContext';
export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      shortlist: new Set(), 
    }
  }
  _retrieveData = async () => {
    try {
      const shortlist = await AsyncStorage.getItem('shortlist');
      if (shortlist !== null) {
       this.setState({
         shortlist: shortlist
       });
      }
     } catch (error) {
       // Error retrieving data
     }
  }
  addToShortlist = (schoolID, schoolName) => {
    const shortlist  = this.state.shortlist;
    (shortlist.has(schoolID))?shortlist.delete(schoolID):shortlist.add(schoolID);
    this.setState({
      shortlist:shortlist
    })
  }
  render(){
    return (
      <FilterContext.Provider value={
      {
        schoolData:data, 
        shortlist:this.state.shortlist,
        actions:{
          addToShortlist:this.addToShortlist
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

const AppNavigator = createStackNavigator(
 {
    Home: HomeScreen,
    Details:schoolDetails,
    Map: schoolMap
  },
  {
    initialRouteName: "Home"
  }
);
const AppContainer = createAppContainer(AppNavigator);
