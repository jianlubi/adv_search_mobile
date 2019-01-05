import React from 'react';
import { View , Text, Image } from 'react-native';
import { MapView, Marker } from 'expo';
import SchoolList from './SchoolList';
import {FilterContext} from './FilterContext';
class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../../../assets/img/ourkids-red-logo.png')}
        style={{ width: 135,height: 30,  marginRight: 'auto',
        marginLeft: 'auto' }}
      />
    );
  }
}
export default class schoolMap extends React.Component{
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
           {
          context=>(
            <>
          
           
              <MapView
                style={{ flex: 1 }}
                initialRegion={{
                  latitude: 43.59191,
                  longitude: -79.76224250000001,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                {
                  (context.schoolData) && context.schoolData.map(school=>{
                    let lat = parseFloat(school.lat), lng = parseFloat(school.lon);
              return(
                <MapView.Marker key={school.schoolID} 
                                coordinate={{latitude:lat, longitude: lng}}>

                </MapView.Marker>

              )
            })}
            </MapView>
                <SchoolList style={{flex:1}} 
                schoolData = {context.schoolData} 
                addToShortlist={context.actions.addToShortlist} 
                shortlist={context.shortlist}
                navigation={this.props.navigation}
                />
            </>
          )
         
            }
          </FilterContext.Consumer>
         
       
        );
      }
}