import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';

export default class ScheduleScreen extends React.Component {
	static navigationOptions = {
		title: 'Schedule',
	};

	render() {
		return (
		  <View>
			
	
			<Touchable
			  style={styles.option}
			  background={Touchable.Ripple('#ccc', false)}
			  onPress={this._handlePressDocs}>
			  <View style={{ flexDirection: 'row' }}>
				<View style={styles.optionIconContainer}>
				  <Image
					source={require('../assets/images/robot-dev.png')}
					resizeMode="contain"
					fadeDuration={0}
					style={{ width: 20, height: 20, marginTop: 1 }}
				  />
				</View>
				<View style={styles.optionTextContainer}>
				  <Text style={styles.optionText}>
					Read the Expo documentation
				  </Text>
				</View>
			  </View>
			</Touchable>
	
			<Touchable
			  background={Touchable.Ripple('#ccc', false)}
			  style={styles.option}
			  onPress={this._handlePressSlack}>
			  <View style={{ flexDirection: 'row' }}>
				<View style={styles.optionIconContainer}>
				  <Image
					source={require('../assets/images/robot-dev.png')}
					fadeDuration={0}
					style={{ width: 20, height: 20 }}
				  />
				</View>
				<View style={styles.optionTextContainer}>
				  <Text style={styles.optionText}>
					Join us on Slack
				  </Text>
				</View>
			  </View>
			</Touchable>
	
			<Touchable
			  style={styles.option}
			  background={Touchable.Ripple('#ccc', false)}
			  onPress={this._handlePressForums}>
			  <View style={{ flexDirection: 'row' }}>
				<View style={styles.optionIconContainer}>
				  <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
				</View>
				<View style={styles.optionTextContainer}>
				  <Text style={styles.optionText}>
					Ask a question on the Expo forums
				  </Text>
				</View>
			  </View>
			</Touchable>
		  </View>
		);
	}
	_handlePressSlack = () => {
	WebBrowser.openBrowserAsync('https://slack.expo.io');
	};

	_handlePressDocs = () => {
	WebBrowser.openBrowserAsync('http://docs.expo.io');
	};

	_handlePressForums = () => {
	WebBrowser.openBrowserAsync('http://forums.expo.io');
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: '#cecaca',
	},
	optionsTitleText: {
		fontSize: 16,
		marginLeft: 15,
		marginTop: 9,
		marginBottom: 12,
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
		marginTop: 1,
	  },
});
