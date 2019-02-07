import React, { Component } from 'react';
import { Button, Alert, View, Text, Image } from 'react-native';

class SettingsScreen extends React.Component {
	static navigationOptions = {
		title: 'Settings',
	};

	render() {

		const { navigate } = this.props.navigation;
		return (
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text>Settings Screen</Text>
				<Button
					title="View Home"
					onPress={() => navigate('Home')}
					color="green"
				/>
			</View>
		);

	}
}

export default SettingsScreen;