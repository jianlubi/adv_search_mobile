import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Grades from './filters/Grades';
import Types from './filters/Types';
const styles = StyleSheet.create({
    filters:{
        paddingLeft: 15,
        paddingRight:15
    },
});

export default class Filter extends Component {
	render() {
		return (
		 <ScrollView style={styles.filters}>
			<Grades />
			<Types />
		 </ScrollView>
		)
	}
}
