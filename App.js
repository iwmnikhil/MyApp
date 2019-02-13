import React, { Component } from 'react'
import { AppRegistry, Button, Alert, View, Text, Image, StyleSheet, Modal, TouchableHighlight, Easing, Animated } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
//import Icon from 'react-native-vector-icons/MaterialIcons'
import ProfileScreen from './app/screens/ProfileScreen';
import SettingsScreen from './app/screens/SettingsScreen';
import TestScreen from './app/screens/TestScreen';

class LogoTitle extends React.Component {
	render() {
		return (
			<Image
				source={require('./app/images/user.png')}
				style={{ width: 30, height: 30 }}
			/>
		);
	}
}

// Home
class HomeScreen extends React.Component {

	state = {
		modalVisible: false,
	};

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

	static navigationOptions = ({ navigation }) => {
		const params = navigation.state.params || {};

		return {
			headerTitle: <LogoTitle />,
			headerLeft: (
				<Button
					onPress={() => navigation.navigate('MyModal')}
					title="<<"
					color="#666"
				/>
			),
			headerRight: (
				<Button
					onPress={() => navigation.navigate('Profile')}
					title=">>"
					color="black"
				/>
			)
		};
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

				<Button
					title="Test Screen"
					onPress={() => navigate('Test')}
					color="blue"
				/>

				<Modal
					animationType="slide"
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {
						this.setModalVisible(!this.state.modalVisible);
					}}>
					<View style={{ marginTop: 22 }}>
						<View>
							<Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center" }}>Hello World!</Text>
							<TouchableHighlight
								onPress={() => {
									this.setModalVisible(!this.state.modalVisible);
								}}>
								<Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>X</Text>
							</TouchableHighlight>
						</View>
					</View>
				</Modal>

				<TouchableHighlight
					onPress={() => {
						this.setModalVisible(true);
					}}>
					<Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>Show Modal</Text>
				</TouchableHighlight>

				<Text style={{ fontSize: 20, color: "black" }}>Open Modal</Text>

				<Text style={{ fontSize: 40, color: "blue" }}>Home <Icon name="rocket" size={30} color="#900" /></Text>

				<Text style={{ fontSize: 20, color: "black" }}>Go to Profile</Text>
				<Button
					title="View Profile"
					onPress={() => navigate('Profile', {
						itemId: 86,
						itemName: 'Test Product',
					})}
					color="red"
				/>

				<Text style={{ fontSize: 20, color: "black" }}>Go to Settings</Text>
				<Button
					title="View Settings"
					onPress={() => navigate('Settings')}
					color="green"
				/>

				<Text style={{ fontSize: 20, color: "black" }}>Open Modal</Text>
				<Button
					title="Open Modal"
					onPress={() => navigate('MyModal')}
					color="blue"
				/>
			</View>
		);
	}

}

// Modal
class ModalScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text style={{ fontSize: 30 }}>This is a modal!</Text>
				<Button
					onPress={() => this.props.navigation.goBack()}
					title="X"
					color="red"
				/>
			</View>
		);
	}
}

const AppNavigator = createStackNavigator(
	{
		Home: { screen: HomeScreen },
		Profile: { screen: ProfileScreen },
		Settings: { screen: SettingsScreen },
		Test: { screen: TestScreen },
	}, {
		initialRouteName: 'Test',
		headerMode: 'none',
		mode: 'modal',
		defaultNavigationOptions: {
			gesturesEnabled: false,
		},
		transitionConfig: () => ({
			transitionSpec: {
				duration: 500,
				easing: Easing.out(Easing.poly(4)),
				timing: Animated.timing,
			},
			screenInterpolator: sceneProps => {
				const { layout, position, scene } = sceneProps;
				const { index } = scene;

				const height = layout.initHeight;
				const translateY = position.interpolate({
					inputRange: [index - 1, index, index + 1],
					outputRange: [height, 0, 0],
				});

				const opacity = position.interpolate({
					inputRange: [index - 1, index - 0.99, index],
					outputRange: [0, 1, 1],
				});

				return { opacity, transform: [{ translateY }] };
			},
		}),
	}
);

const RootStack = createStackNavigator(
	{
		Main: { screen: AppNavigator },
		MyModal: { screen: ModalScreen },
	},
	{
		mode: 'modal',
		headerMode: 'none'
	}
);

const TabNavigator = createBottomTabNavigator({
	Home: RootStack,
	FirstTab: ProfileScreen,
	SecondTab: SettingsScreen,
});

const style = StyleSheet.create({
	tabStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		fontWeight: "bold",
		color: "#999",
		backgroundColor: 'powderblue'
	}
});

//export default createAppContainer(AppNavigator);
//export default createAppContainer(RootStack);
export default createAppContainer(TabNavigator);