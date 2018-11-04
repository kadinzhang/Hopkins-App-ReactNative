import React from 'react';
import { StyleSheet,ScrollView, Image, Text, View } from 'react-native';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';


export default class ScheduleScreen extends React.Component {
	static navigationOptions = {
		title: 'Classes',
	};

	render() {
		return (
		  <ScrollView style ={styles.container}>

			<Touchable
			  style={styles.option}
			  background={Touchable.Ripple('#ccc', false)}
			  onPress={this._handlePressClassesA}>
			  <View style={{ flexDirection: 'row' }}>
				<View style={styles.optionIconContainer}>;
				  
					<Text style={styles.bigLettersText}>
					A
				  </Text>
				</View>
				<View style={styles.optionTextContainer}>
				  <Text style={styles.optionText}>
					Lorum ipsum teloris something
				  </Text>
				</View>
			  </View>
			</Touchable>
		  
			<Touchable
			  style={styles.option}
			  background={Touchable.Ripple('#ccc', false)}
			  onPress={this._handlePressClassesB}>
			  <View style={{ flexDirection: 'row' }}>
				<View style={styles.optionIconContainer}>;
				  
					<Text style={styles.bigLettersText}>
					B
				  </Text>
				</View>
				<View style={styles.optionTextContainer}>
				  <Text style={styles.optionText}>
					Lorum ipsum teloris something
				  </Text>
				</View>
			  </View>
			</Touchable>
		  
			<Touchable
			  style={styles.option}
			  background={Touchable.Ripple('#ccc', false)}
			  onPress={this._handlePressClassesC}>
			  <View style={{ flexDirection: 'row' }}>
				<View style={styles.optionIconContainer}>;
				  
					<Text style={styles.bigLettersText}>
					C
				  </Text>
				</View>
				<View style={styles.optionTextContainer}>
				  <Text style={styles.optionText}>
					Lorum ipsum teloris something
				  </Text>
				</View>
			  </View>
			</Touchable>
		  
			<Touchable
			  style={styles.option}
			  background={Touchable.Ripple('#ccc', false)}
			  onPress={this._handlePressClassesD}>
			  <View style={{ flexDirection: 'row' }}>
				<View style={styles.optionIconContainer}>;
				  
					<Text style={styles.bigLettersText}>
					D
				  </Text>
				</View>
				<View style={styles.optionTextContainer}>
				  <Text style={styles.optionText}>
					Lorum ipsum teloris something
				  </Text>
				</View>
			  </View>
			</Touchable>
		  
			<Touchable
			  style={styles.option}
			  background={Touchable.Ripple('#ccc', false)}
			  onPress={this._handlePressClassesE}>
			  <View style={{ flexDirection: 'row' }}>
				<View style={styles.optionIconContainer}>;
				  
					<Text style={styles.bigLettersText}>
					E
				  </Text>
				</View>
				<View style={styles.optionTextContainer}>
				  <Text style={styles.optionText}>
					Lorum ipsum teloris something
				  </Text>
				</View>
			  </View>
			</Touchable>
		  
			<Touchable
			  style={styles.option}
			  background={Touchable.Ripple('#ccc', false)}
			  onPress={this._handlePressClassesF}>
			  <View style={{ flexDirection: 'row' }}>
				<View style={styles.optionIconContainer}>;
				  
					<Text style={styles.bigLettersText}>
					F
				  </Text>
				</View>
				<View style={styles.optionTextContainer}>
				  <Text style={styles.optionText}>
					Lorum ipsum teloris something
				  </Text>
				</View>
			  </View>
			</Touchable>
		  
			<Touchable
			  style={styles.option}
			  background={Touchable.Ripple('#ccc', false)}
			  onPress={this._handlePressClassesG}>
			  <View style={{ flexDirection: 'row' }}>
				<View style={styles.optionIconContainer}>;
				  
					<Text style={styles.bigLettersText}>
					G
				  </Text>
				</View>
				<View style={styles.optionTextContainer}>
				  <Text style={styles.optionText}>
					Lorum ipsum teloris something
				  </Text>
				</View>
			  </View>
			</Touchable>
		  
			<Touchable
			  style={styles.option}
			  background={Touchable.Ripple('#ccc', false)}
			  onPress={this._handlePressClassesH}>
			  <View style={{ flexDirection: 'row' }}>
				<View style={styles.optionIconContainer}>;
				  
					<Text style={styles.bigLettersText}>
					H
				  </Text>
				</View>
				<View style={styles.optionTextContainer}>
				  <Text style={styles.optionText}>
					Lorum ipsum teloris something
				  </Text>
				</View>
			  </View>
			</Touchable>
		  
		  </ScrollView>
		);
	}

	_handlePressClassesA = () => {
		console.log("A");
	};
	_handlePressClassesB = () => {
		console.log("B");
	};
	_handlePressClassesC = () => {
		console.log("C");
	};
	_handlePressClassesD = () => {
		console.log("D");
	};
	_handlePressClassesE = () => {
		console.log("E");
	};
	_handlePressClassesF = () => {
		console.log("F");
	};
	_handlePressClassesG = () => {
		console.log("G");
	};
	_handlePressClassesH = () => {
		console.log("H");
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 0,
		backgroundColor: '#cecaca',
	},
	  optionIconContainer: {
		marginRight: 9,
	  },
	  option: {
		backgroundColor: '#fdfdfd',
		paddingHorizontal: 15,
		paddingVertical: 15,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#EDEDED',
	  },
	  optionText: {
		fontSize: 15,
		paddingVertical: 10,

		},
		bigLettersText:{
			fontSize: 35,
			color: 'maroon',
			fontWeight: 'bold',

		}
});
