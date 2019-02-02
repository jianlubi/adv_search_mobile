import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { filterData } from './FilterData';

import {
	Grades, Types, SpecialNeedsEssentials, Academics, Languages, OpenHouses, CoreFocuses,
	DevelopmentalPriorities, SpecialNeeds, GiftedSupports, ReligiousAffilations, Extracurriculars,
	UniversityPlacement
} from './filters';
import { FilterContext } from './FilterContext';
const styles = StyleSheet.create({
	filters: {
		paddingLeft: 15,
		paddingRight: 15
	},
	footer:{
		position: 'absolute',
		bottom:0,
		left:0,
		right:0,
		alignItems: 'center',
		justifyContent: 'center',
		
	},
	btn:{
		backgroundColor:'#b20000',
		paddingLeft:80,
		paddingRight:80,
		paddingTop:15,
		paddingBottom:15,
		
	},
	btnText:{
		color:'#fff'
	}
});

export default class Filter extends Component {
	render() {
		return (
			<FilterContext.Consumer>
            {context => (
			<View style={{flex: 1}}>
			<ScrollView style={styles.filters}>
				<Grades filterData={filterData.grade} />
				<Types filterData={[filterData.enrollments, filterData.genders]} />
				<SpecialNeedsEssentials />
				<Academics filterData={[filterData.preschool_approach, filterData.curriculum_mainstream,
				filterData.curriculum_alternative, filterData.curriculum_paces,
				filterData.academic_culture, filterData.math_options,
				filterData.reading_options, filterData.computer_technologies]} />
				<Languages filterData={[filterData.primary_language, filterData.secondary_language]} />
				<OpenHouses />
				<CoreFocuses filterData={filterData.curriculum_focus}/>
				<DevelopmentalPriorities filterData={filterData.developmental_priorties}/>
				<SpecialNeeds filterData={filterData.special_needs}/>
				<GiftedSupports filterData={filterData.gifted_emphasis}/>
				<ReligiousAffilations filterData={[filterData.religions, filterData.religious_scope,
													filterData.religious_integration, filterData.religious_approach]}/>
				<Extracurriculars filterData={[filterData.extracrriculars1, filterData.extracrriculars2]}/>
				<UniversityPlacement />
				
			</ScrollView>
			<TouchableOpacity style={styles.footer}><View style={styles.btn}><Text style={styles.btnText}>See {context.schoolData.length} schools</Text></View></TouchableOpacity>
			</View>
			)}
			</FilterContext.Consumer>
		)
	}
}
