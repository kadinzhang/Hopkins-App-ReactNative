import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-material-dropdown';
import { TextInput } from 'react-native-paper';

export default class AddClassScreen extends React.Component {
	state = {
		text: '',
	};

	render() {
		return (
			<View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
				<TextInput
					label="Class"
					value={this.state.text}
					onChangeText={text =>
						this.setState({
							text,
						})
					}
				/>
				<Text />
				<Button
					title="submit"
					onPress={() => this.props.navigation.state.params.updateClass(this.state.text)}
				/>
			</View>
		);
	}
}
