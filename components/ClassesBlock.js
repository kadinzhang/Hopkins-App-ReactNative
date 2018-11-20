import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, ScrollView, Text, TextInput, View, Button } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import PropTypes from 'prop-types';



export default function ClassesBlock({
	//make this things revieve a this.state value? 
  block = '',
  teacherKey = '',
  roomKey = '',

  _teacher = '',
  _room = '',
  _class = '',
}) {

	return (
		<Touchable
			style={styles.option}
			background={Touchable.Ripple('#ccc', false)}
			// onPress={() =>
			// 	this.props.navigation.navigate('AddClass', {
			// 		block: block,
			// 		class: this.state.A,
			// 		teacherKey: teacherKey,
			// 		teacher: this.state.teacherA,
			// 		room : this.state.roomA,
			// 		roomKey: roomKey,
			// 		updateState: this._updateState.bind(this),
			// 	})
			// }
		>
			<View style={styles.textLine}>
				<View style={styles.optionIconContainer}>
					<Text style={styles.bigLettersText}>A</Text>
				</View>
				<View style={styles.optionTextContainer}>
					<Text style={styles.optionText}>{_class}</Text>
				</View> 
				<View style={styles.stackedText}> 
					<Text style={styles.teacherText}>{_teacher}</Text>
					<Text style={styles.teacherText}>{_room}</Text>
				</View>
			</View>					
		</Touchable>
	);
}

ClassesBlock.propTypes = {
	_room: PropTypes.string.isRequired,
	_class: PropTypes.string.isRequired,
	_teacher: PropTypes.string.isRequired,
	
	
};

const styles = StyleSheet.create({
	optionIconContainer: {
		marginRight: 0,		
	},
	option: {
		backgroundColor: '#fdfdfd',
		paddingHorizontal: 15,
		paddingVertical: 15,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#EDEDED',

	},
	teacherText: {
		backgroundColor: '#fdfdfd',
		fontSize: 15,
		textAlign: 'center',
		paddingHorizontal: 10,
		paddingVertical: 2,

	},
	optionText: {
		fontSize: 15,
		textAlign: 'center',
		paddingHorizontal: 10,
		paddingVertical: 13,
		marginRight: 100,
	},

	bigLettersText: {
		fontSize: 35,
		color: 'maroon',
		fontWeight: 'bold',
	},
	textLine: {
		flexDirection: 'row', 
		justifyContent:'space-between', 
	},
	stackedText: {
		flexDirection: 'column',
		justifyContent: 'space-between',
	}
});