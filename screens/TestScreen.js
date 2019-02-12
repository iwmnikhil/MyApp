import React, { Component } from 'react';
import { Button, Alert, View, Text, Image } from 'react-native';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';
import RNFetchBlob from 'react-native-fetch-blob';

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

	generatePDF = () => {
		const page1 = PDFPage
			.create()
			.setMediaBox(200, 200)
			.drawText('You can add text and rectangles to the PDF!', {
				x: 5,
				y: 235,
				color: '#007386',
			})
			.drawRectangle({
				x: 25,
				y: 25,
				width: 150,
				height: 150,
				color: '#FF99CC',
			})
			.drawRectangle({
				x: 75,
				y: 75,
				width: 50,
				height: 50,
				color: '#99FFCC',
			});

		//const docsDir = await PDFLib.getDocumentsDirectory();
		//const pdfPath = `${docsDir}/sample.pdf`;

		const pdfPath = RNFetchBlob.fs.dirs.DownloadDir + '/illumisoft.pdf';
		PDFDocument.create(pdfPath)
			.addPages(page1)
			.write()
			.then(path => {
				console.log('PDF created at: ' + path);
				Alert.alert('PDF created at: ' + path);
			});
	}

	render() {

		const { navigate } = this.props.navigation;

		return (
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Button
					title="Generate PDF"
					onPress={() => this.generatePDF()}
					color="#919191"
				/>
				<Text>{"     "}</Text>
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