import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ScheduleScreen from '../screens/ScheduleScreen';
import ClassesScreen from '../screens/ClassesScreen';
import LunchScreen from '../screens/LunchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AddClassScreen from '../screens/AddClassScreen';

const ClassesStack = createStackNavigator({
	Classes: { screen: ClassesScreen },
	AddClass: { screen: AddClassScreen },
});
ClassesStack.navigationOptions = {
	tabBarLabel: 'Classes',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-book'}
		/>
	),
	gesturesEnabled: true,
};

//Lunch Tab
const LunchStack = createStackNavigator({
	Lunch: LunchScreen,
});
LunchStack.navigationOptions = {
	tabBarLabel: 'Lunch',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-pizza'}
		/>
	),
	gesturesEnabled: true,
};

//Schedule Tab
const ScheduleStack = createStackNavigator({
	ScheduleStack: ScheduleScreen,
});
ScheduleStack.navigationOptions = {
	tabBarLabel: 'Schedule',
	tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={'md-list'} />,
	gesturesEnabled: true,
};

//Settings tab
const SettingsStack = createStackNavigator({
	Settings: SettingsScreen,
});
SettingsStack.navigationOptions = {
	tabBarLabel: 'Settings',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
		/>
	),
	gesturesEnabled: true,
};

export default createMaterialTopTabNavigator(
	{
		Schedule: { screen: ScheduleStack },
		Classes: { screen: ClassesStack },
		Lunch: { screen: LunchStack },
		Settings: { screen: SettingsStack },
	},
	{
		initialRouteName: 'Classes',
		activeColor: '#f0edf6',
		inactiveColor: '#3e2465',
		tabBarPosition: 'bottom',
		tabBarOptions: {
			showIcon: true,
			labelStyle: {
				fontSize: 10,
				marginBottom: 3,
				marginTop: 6,
			},
			indicatorStyle: {
				backgroundColor: '#fff',
			},
			style: {
				backgroundColor: '#500000',
			},
		},
	}
);
