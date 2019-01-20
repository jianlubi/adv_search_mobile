import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CheckBox } from 'react-native-elements';
import {FilterContext} from '../FilterContext';
const styles = StyleSheet.create({
	twocols:{
		flexDirection: 'row'
	},
	col:{
		flex:1
	}

});
export default class Grades extends Component {

  getCheckboxTitle = (gradeID) =>{
    if(gradeID === 0){
        return "Nursery/Toddler (<2.5)"
    }else if(gradeID === 1){
        return "Preschool"
    }else if(gradeID === 2){
        return "JK"
    }else if(gradeID === 3){
        return "SK"
    }else if(gradeID === 4){
        return "K"
    }else{
        return "Gr. "+(gradeID+5);
    }
  }
  render() {
    return (
        <FilterContext.Consumer>
            {context=>(
                <View>
                <Text>Grades</Text>
                <View style={styles.twocols}>
                    <View style={styles.col}>
                        <CheckBox key="0"  
                            checked={context.filters.grades[0] === 0 || context.filters.grades[1] ===0}
                            onPress={()=>{context.actions.handleFilters('grades',0)}}
                            title="Nursery/Toddler (<2.5)"
                        />
                        <CheckBox key="1"
                            checked={context.filters.grades[0] === 1 || context.filters.grades[1] ===1}
                            onPress={()=>{context.actions.handleFilters('grades',1)}}
                            title="Preschool"
                        />
                        <CheckBox key="2"
                            checked={context.filters.grades[0] === 2 || context.filters.grades[1] ===2}
                            onPress={()=>{context.actions.handleFilters('grades',2)}}
                            title="JK"
                        />
                        <CheckBox key="3"
                            checked={context.filters.grades[0] === 3 || context.filters.grades[1] ===3}
                            title="SK"
                        /> 
                        <CheckBox key="4"
                            checked={context.filters.grades[0] === 4 || context.filters.grades[1] ===4}
                            title="K"
                        />
                        <CheckBox key="5"
                            checked={context.filters.grades[0] === 5 || context.filters.grades[1] ===5}
                            title="Gr.1"
                        />
                        <CheckBox key="6"
                            checked={context.filters.grades[0] === 6 || context.filters.grades[1] ===6}
                            title="Gr.2"
                        />
                        <CheckBox key="7"
                            checked={context.filters.grades[0] === 7 || context.filters.grades[1] ===7}
                            title="Gr.3"
                        />
                        <CheckBox key="8"
                            checked={context.filters.grades[0] === 8 || context.filters.grades[1] ===8}
                            title="Gr.4"
                        />
                    </View>
                    <View style={styles.col}>
                        <CheckBox key="9"
                            checked={context.filters.grades[0] === 9 || context.filters.grades[1] ===9}
                            title="Gr.5"
                        />
                        <CheckBox key="10"
                            checked={context.filters.grades[0] === 10 || context.filters.grades[1] ===10}
                            title="Gr.6"
                        />
                        <CheckBox key="11"
                            checked={context.filters.grades[0] === 11 || context.filters.grades[1] ===11}
                            title="Gr.7"
                        />
                        <CheckBox key="12"
                            checked={context.filters.grades[0] === 12 || context.filters.grades[1] ===12}
                            title="Gr.8"
                        />
                        <CheckBox key="13"
                            checked={context.filters.grades[0] === 13 || context.filters.grades[1] ===13}
                            title="Gr.9"
                        />
                        <CheckBox key="14"
                            checked={context.filters.grades[0] === 14 || context.filters.grades[1] ===14}
                            title="Gr.10"
                        />
                        <CheckBox key="15"
                            checked={context.filters.grades[0] === 15 || context.filters.grades[1] ===15}
                            title="Gr.11"
                        />
                        <CheckBox key="16"
                            checked={context.filters.grades[0] === 16 || context.filters.grades[1] ===16}
                            title="Gr.12"
                        />
                    </View>
                </View>
            </View>
            )   
        }
        </FilterContext.Consumer>
    )
  }
}
