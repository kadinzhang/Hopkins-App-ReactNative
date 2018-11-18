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
		text: '',
		teacher: '',
		room: '',
		classInputLabel: 'Class',
		roomInputLabel: 'Room',
		teacherInputLabel: 'Teacher',
	};
	_checkIfClassExists = () => {
		if(this.props.navigation.state.params.class != ''){
			this.setState({classInputLabel: this.props.navigation.state.params.class});
			console.log(this.state.classInputLabel);
		}
	}
	componentWillMount(){
		this._checkIfClassExists();
	}
	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.textInput}
					label={this.state.classInputLabel}
					value={this.state.text}
					onChangeText={text =>
						this.setState({
							text,
						})
					}
				/>
				<TextInput
					style={styles.textInput}
					label={this.state.roomInputLabel}
					value={this.state.teacher}
					onChangeText={teacher =>
						this.setState({
							teacher,
						})
					}
				/>
				<TextInput
					style={styles.textInput}
					label={this.state.teacherInputLabel}
					value={this.state.room}
					onChangeText={room =>
						this.setState({
							room,
						})
					}
				/>
				<Text />

				<Button
					title="submit"
					onPress={() => {
						AsyncStorage.setItem(this.props.navigation.state.params.block, JSON.stringify(this.state.text));
						this.props.navigation.navigate('Classes');
						this.props.navigation.state.params.updateState(this.props.navigation.state.params.block);
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
