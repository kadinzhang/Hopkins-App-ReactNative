import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class ModalScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text style={{ fontSize: 30 }}>This is a modal!</Text>
				<Button onPress={() => this.props.navigation.goBack()} title="Dismiss" />
			</View>
		);
	}
}
