import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, ScrollView, Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-material-dropdown';
import { TextInput } from 'react-native-paper';

export default class AddClassScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		const params = navigation.state.params || {};
		return {
			title: 'Edit Class',
		};
	};

	state = {
		block: ['Key', 'Class', 'Teacher', 'Room'],
		text: '',
		teacher: '',
		room: '',

	};
	_checkIfClassExists = () => {
		this._updateArray(this.state.block, 0, this.props.navigation.state.params.blockArray[0]);

		if(this.props.navigation.state.params.blockArray[1] != ''){
			this._updateArray(this.state.block, 1, this.props.navigation.state.params.blockArray[1])
		}
		if(this.props.navigation.state.params.blockArray[2] != ''){
			this._updateArray(this.state.block, 2, this.props.navigation.state.params.blockArray[2])
		}
		if(this.props.navigation.state.params.blockArray[3] != ''){
			this._updateArray(this.state.block, 3, this.props.navigation.state.params.blockArray[3])	
		}
		
	}
	_updateArray = (array, arrayIndex, newItem) =>{
		var temp = ['','','',''];
		temp =  array;
		temp[arrayIndex] = newItem;
		this.setState({[this.state.block]: [temp]});
	}
	componentWillMount(){

		this._checkIfClassExists();

	}
	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.textInput}
					label='Class'
					value={this.state.block[1]}
					onChangeText={text => this._updateArray(this.state.block, 1, text)}
				/>
				<TextInput
					style={styles.textInput}
					label='Teacher'
					value={this.state.block[2]}
					onChangeText={text => this._updateArray(this.state.block, 2, text)}
				/>
				<TextInput
					style={styles.textInput}
					label='Room'
					value={this.state.block[3]}
					onChangeText={text => this._updateArray(this.state.block, 3, text)}
				/>
				<Text />

				<Button
					title="Submit"
					onPress={() => {
						// console.log(JSON.parse(JSON.stringify(this.state.block)));
						AsyncStorage.setItem(this.state.block[0], JSON.stringify(this.state.block));
						// AsyncStorage.setItem(this.props.navigation.state.params.block, JSON.stringify(this.state.text));
						// AsyncStorage.setItem(this.props.navigation.state.params.teacherKey, JSON.stringify(this.state.teacher));
						// AsyncStorage.setItem(this.props.navigation.state.params.roomKey, JSON.stringify(this.state.room));
						this.props.navigation.navigate('Classes');
						this.props.navigation.state.params.updateState(this.state.block[0]);
						// this.props.navigation.state.params.updateState(this.props.navigation.state.params.teacherKey);
						// this.props.navigation.state.params.updateState(this.props.navigation.state.params.roomKey);
					}}
				/>
			
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#cecaca',
	},
	textInput:{
		margin: 10,
	}
});
