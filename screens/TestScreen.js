import React, { Component } from 'react';
import { Button, Alert, View, Text, Image } from 'react-native';

//import CommonStyle from '../app/CSS/common';
import InputStyle from '../app/CSS/input';
import ColorStyle from '../app/CSS/colors';

class TestScreen extends React.Component {
	static navigationOptions = {
		title: 'Settings',
	};

	getProducts = () => {

		let url = "https://6f360147c06fff465e7d54fe3a3068d3:0abb125da52c20a72320d97a9aa97629@souk-chat.myshopify.com/admin/products.json";
		console.log("url:" + encodeURI(url));
		return fetch(encodeURI(url), {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}).then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {

		const { navigate } = this.props.navigation;



		return (
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Button
					title="Get Products"
					onPress={() => this.getProducts()}
					color="blue"
				/>
				<Text>{"     "}</Text>
				<Button
					title="View Home"
					onPress={() => navigate('Home')}
					color="green"
				/>
			</View>
		);

	}
}

export default TestScreen;