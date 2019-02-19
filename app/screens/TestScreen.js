import React, { Component } from 'react';
import { Button, Alert, View, Text, Image, Dimensions } from 'react-native';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';
import RNFetchBlob from 'react-native-fetch-blob';

//import { ApolloClient } from 'apollo-client';
//import { ApolloProvider } from 'react-apollo';

//import CommonStyle from '../CSS/common';
import InputStyle from '../CSS/input';
import ColorStyle from '../CSS/colors';

class TestScreen extends React.Component {
	static navigationOptions = {
		title: 'Test',
	};

	getProducts = () => {
		let username = encodeURIComponent("6f360147c06fff465e7d54fe3a3068d3");
		let password = encodeURIComponent("0abb125da52c20a72320d97a9aa97629");
		let domain = encodeURIComponent("souk-chat.myshopify.com");

		let url = "https://" + username + ":" + password + "@" + domain + "/admin/products.json";
		//let url = "http://beta-webserver.net/tech/betaapp/instakoin/api/login?email=admin@gmail.com&password=admin@12345";
		console.log("url:" + encodeURI(url));
		return fetch(encodeURI(url), {
			method: 'POST',
			headers: {
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

		//const client = new ApolloClient();

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
			// <ApolloProvider client={client}>
			// 	<MyRootComponent />
			// </ApolloProvider>
		);

	}
}

export default TestScreen;