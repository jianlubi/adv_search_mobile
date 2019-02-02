import React from 'react';
import { data } from './assets/src/components/data';
import { StyleSheet, Text, View, AsyncStorage, Image, Platform } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import SchoolList from './assets/src/components/SchoolList';
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from "react-navigation";
import SchoolDetails from './assets/src/components/SchoolDetails';
import Footer from './assets/src/components/Footer';
import schoolMap from './assets/src/components/schoolMap';
import { FilterContext } from './assets/src/components/FilterContext';
import Filter from './assets/src/components/Filter';
import Tuition from './assets/src/components/schooldetails/Tuition';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            shortlist: [],
            schoolData: [],
            lat:'',
            lng:'',
            filters: {
                grades: [],
                types: [],
                genders: [],
                academicCulture: [],
                curriculumPaces: [],
                development: [],
                extracurricularsSports: [],
                extracurricularsClub: [],
                exclude: [],
                elementary: [],
                giftedEmphasis: [],
                giftedIntegrated: [],
                openhouse: false,
                primaryLanguage: [],
                preschool: [],
                math: [],
                reading: [],
                religiousFaith: [],
                religiousScope: [],
                religiousIntegration: [],
                religiousPerspective: [],
                schoolFocus: [],
                secondaryLanguage: [],
                specialNeedsADHD: [],
                specialNeedsDelivery: [],
                specialNeedsIntegrated: [],
                specialNeedsLearningDisablities: [],
                specialNeedsDevelopmental: [],
                specialNeedsBehavioral: [],
                specialNeedsPhysical: [],
                specialNeedsAdditional: [],
                UniversityPlacement: false,
                technology: [],
                options: [],
                distanceRange: [0, 150],
                tuitionRange: [0, 100],
                acceptanceRange: [0, 100],
            },
        }
        this.queryString = {};
    }

    // retrieve shortlist from local storage.
    retrieveShortlist = async () => {
        try {
            let shortlist = await AsyncStorage.getItem('shortlist');
            if (shortlist.length > 1) {
                shortlist = shortlist.split(",");
            } else {
                shortlist = shortlist[0]
            }

            if (shortlist !== null) {
                this.setState({
                    shortlist: shortlist
                });
            }

        } catch (error) {
            console.log(error);
        }
    }

    getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
    
        let location = await Location.getCurrentPositionAsync({});
        this.setState({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        }, ()=>{
            this.updateSchoolList();
        })
      };

    // store the new shortlist to local storage.
    storeData = async (shortlist) => {
        try {
            await AsyncStorage.setItem('shortlist', shortlist);

        } catch (error) {
            console.log(error);
        }
    }

    // add a school to shortlist or remove a school from shortlist 
    addToShortlist = (schoolID, schoolName) => {
        let shortlist = this.state.shortlist;
        if (shortlist.includes(schoolID)) {
            shortlist = shortlist.filter(item => item !== schoolID)
        } else {
            shortlist.push(schoolID);
        }
        this.setState({
            shortlist: shortlist
        })
        const shortlistStr = shortlist.join(",");
        this.storeData(shortlistStr);

    }
    handleFilters = (filterName, checkboxValue) => {
        console.log("here")
        // filterName means small section name
        // In one large section, different small sections are using different fields from the database. For example, under "Academics",
        // preschool uses sf.curriculum and elementary uses curriculum_primary; In "Language" section, primary_language uses sf.languages,
        // while secondary_language uses sf.curriculum. In "Special Needs" section, ADHD, specialNeedsEnvironment, specialNeedsAdditional,
        // specialNeedsDelivery are using sf.curriculum, sf.environment_spn, sf.curriculum_spn, sf.spn_level respectively. So it's better
        // to keep states stored in small section level.

        // 1. update states
        let filterArr = this.state.filters;
        if (filterArr[filterName].includes(checkboxValue)) {
            filterArr[filterName] = filterArr[filterName].filter(item => item !== checkboxValue)
            console.log(filterArr[filterName])
        } else {
            filterArr[filterName].push(checkboxValue);
        }
        this.setState({
            filters: filterArr
        },() => {
            console.log(this.state.filters.preschool)
        })

        // 2. generate query string using states.
        const queryString = this.queryString;
        //If filterName does not exist in queryString, initialize it with empty string so that  queryString[filterName] won't throw errors
        if (!(queryString.hasOwnProperty(filterName))) {
            queryString[filterName] = "";
        }
        //If at least 1 checkbox was checked off in this filter
        if (filterArr[filterName]) {
            this.queryString[filterName] = filterArr[filterName].reduce((prev, curr) => {
                const paramName = (filterName === "enrollment") ? "db" : filterName;
                return prev + paramName + "[]=" + curr + "&";
            }, "")
        } else {
            this.queryString[filterName] = "";
        }

        this.updateSchoolList();
    }
    // next step: send AJAX request to the server to fetch the updated school list using this.queryString
    updateSchoolList = () => {
        let formBody = "";
        // Grade filter 
        let gradeQuery = "";
        //let genderQuery = "";
        if (this.state.filters.grades.length != 0) {
            let gradeFrom = this.state.filters.grades[0];
            let gradeTo = this.state.filters.grades[1] ? this.state.filters.grades[1] : -1;
            if (!(gradeFrom === -1 && gradeTo === -1)) {
                let params = {
                    'gradeFrom': gradeFrom,
                    'gradeTo': gradeTo
                }
                gradeQuery = Object.keys(params).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])).join('&') + "&";
                formBody += gradeQuery
            }
        }
        
        for (const key of Object.keys(this.queryString)) {
            formBody += this.queryString[key];
        }
        formBody = formBody + "lat=" + this.state.lat + "&lon=" + this.state.lng;
        console.log(formBody)
        fetch(`https://ourkids.net/school/adv-search/json_adv_search_output.php`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            credentials: "same-origin",
            body: formBody
        }).then(response => response.json())
            .then(data => {

                // then filter by sliders, maps
                this.setState({
                    schoolData: data
                });
            }).catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                 // ADD THIS THROW error
                  throw error;
                });

    }
    // After the component mounted, try to retrieve shortlist from local storage.
    componentDidMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
              errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
          } else {
            this.getLocationAsync();
          }

        fetch(`https://ourkids.net/school/adv-search/json_adv_search_output.php`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            credentials: "same-origin",
        }).then(response => response.json())
            .then(data => {

                // then filter by sliders, maps
                this.setState({
                    schoolData: data
                });

            })
        this.retrieveShortlist();
    }
    render() {
        return (
            <FilterContext.Provider value={
                {
                    schoolData: this.state.schoolData,
                    shortlist: this.state.shortlist,
                    filters: this.state.filters,
                    actions: {
                        addToShortlist: this.addToShortlist,
                        handleFilters: this.handleFilters
                    }
                }}>
                <AppContainer />
            </FilterContext.Provider>
        )

    }
}
// Logo for heading section
class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('./assets/img/ourkids-red-logo.png')}
                style={{
                    width: 135, height: 30, marginRight: 'auto',
                    marginLeft: 'auto'
                }}
            />
        );
    }
}

// Home screen
class HomeScreen extends React.Component {

    // navigation options for home screen
    static navigationOptions = {
        headerTitle: <LogoTitle />,
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
                {context => (
                    <View style={styles.container} >
                        <SchoolList navigation={this.props.navigation}
                            schoolData={context.schoolData}
                            addToShortlist={context.actions.addToShortlist}
                            shortlist={context.shortlist}></SchoolList>
                        <Footer navigation={this.props.navigation} />
                    </View>
                )
                }
            </FilterContext.Consumer>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
});

// bottom navigation on profile page.
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
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'white',
            style: {
                backgroundColor: '#b20000',
            },
            indicatorStyle: {
                height: 0
            }
        },

        initialRouteName: "ProfileHome"
    }
)
// navigation options for profile navigator
ProfileNavigator.navigationOptions = ({ navigation }) => {
    return {
        title: navigation.getParam('schoolName', "school"),
    }
}

// Main app navigator
const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Details: ProfileNavigator,
        Map: schoolMap,
        Filter: Filter
    },
    {
        initialRouteName: "Home"
    }
);

const AppContainer = createAppContainer(AppNavigator);
