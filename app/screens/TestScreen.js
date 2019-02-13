import React, { Component } from 'react';
import { Button, Alert, View, Text, Image, Dimensions } from 'react-native';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';
import RNFetchBlob from 'react-native-fetch-blob';

//import CommonStyle from '../CSS/common';
import InputStyle from '../CSS/input';
import ColorStyle from '../CSS/colors';

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

		//const { width, height } = Dimensions.get("window");
		const width = 1200;
		const height = 1000;

		const page1 = PDFPage
			.create()
			.setMediaBox(width, height)
			//LEFT PART
			.drawRectangle({
				x: 0,
				y: 0,
				width: 580,
				height: height,
				color: '#D9D9D9',
			})
			//RIGHT PART
			.drawRectangle({
				x: 630,
				y: 0,
				width: 580,
				height: height,
				color: '#7F7F7F',
			})
			//LEFT 1st PART
			.drawRectangle({
				x: 10,
				y: 10,
				width: 300,
				height: 980,
				color: '#999999',
			})
			//LEFT 1st PART Content
			.drawRectangle({
				x: 20,
				y: 942,
				width: 280,
				height: 38,
				color: '#4286f4',
			})
			.drawText('LABEL 1', {
				x: 30,
				y: 957,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 20,
				y: 894,
				width: 280,
				height: 38,
				color: '#4286f4',
			})
			.drawText('LABEL 2', {
				x: 30,
				y: 909,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 20,
				y: 846,
				width: 280,
				height: 38,
				color: '#4286f4',
			})
			.drawText('LABEL 2', {
				x: 30,
				y: 861,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 20,
				y: 798,
				width: 280,
				height: 38,
				color: '#4286f4',
			})
			.drawText('LABEL 2', {
				x: 30,
				y: 813,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 20,
				y: 750,
				width: 280,
				height: 38,
				color: '#4286f4',
			})
			.drawText('LABEL 2', {
				x: 30,
				y: 765,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 20,
				y: 702,
				width: 280,
				height: 38,
				color: '#4286f4',
			})
			.drawText('LABEL 2', {
				x: 30,
				y: 717,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 20,
				y: 654,
				width: 280,
				height: 38,
				color: '#4286f4',
			})
			.drawText('LABEL 2', {
				x: 30,
				y: 669,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 20,
				y: 606,
				width: 280,
				height: 38,
				color: '#4286f4',
			})
			.drawText('LABEL 2', {
				x: 30,
				y: 621,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 20,
				y: 558,
				width: 280,
				height: 38,
				color: '#4286f4',
			})
			.drawText('LABEL 2', {
				x: 30,
				y: 573,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 20,
				y: 510,
				width: 280,
				height: 38,
				color: '#4286f4',
			})
			.drawText('LABEL 2', {
				x: 30,
				y: 525,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 20,
				y: 462,
				width: 280,
				height: 38,
				color: '#4286f4',
			})
			.drawText('LABEL 2', {
				x: 30,
				y: 477,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 20,
				y: 414,
				width: 280,
				height: 38,
				color: '#4286f4',
			})
			.drawText('LABEL 2', {
				x: 30,
				y: 429,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 20,
				y: 366,
				width: 280,
				height: 38,
				color: '#4286f4',
			})
			.drawText('LABEL 2', {
				x: 30,
				y: 381,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 20,
				y: 318,
				width: 280,
				height: 38,
				color: '#4286f4',
			})
			.drawText('LABEL 2', {
				x: 30,
				y: 333,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 20,
				y: 270,
				width: 280,
				height: 38,
				color: '#4286f4',
			})
			.drawText('LABEL 2', {
				x: 30,
				y: 285,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 20,
				y: 222,
				width: 280,
				height: 38,
				color: '#4286f4',
			})
			.drawText('LABEL 2', {
				x: 30,
				y: 237,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 20,
				y: 174,
				width: 280,
				height: 38,
				color: '#4286f4',
			})
			.drawText('LABEL 2', {
				x: 30,
				y: 189,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 20,
				y: 126,
				width: 280,
				height: 38,
				color: '#4286f4',
			})
			.drawText('LABEL 2', {
				x: 30,
				y: 141,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 20,
				y: 78,
				width: 280,
				height: 38,
				color: '#4286f4',
			})
			.drawText('LABEL 2', {
				x: 30,
				y: 93,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 20,
				y: 30,
				width: 280,
				height: 38,
				color: '#4286f4',
			})
			.drawText('LABEL 2', {
				x: 30,
				y: 45,
				color: '#FFFFFF',
			})
			//LEFT 2nd PART
			.drawRectangle({
				x: 320,
				y: 10,
				width: 250,
				height: 980,
				color: '#999999',
			})
			//LEFT 2nd PART Content
			.drawRectangle({
				x: 330,
				y: 942,
				width: 240,
				height: 38,
				color: '#4286f4',
			})
			.drawText('VALUE', {
				x: 350,
				y: 957,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 330,
				y: 894,
				width: 240,
				height: 38,
				color: '#4286f4',
			})
			.drawText('VALUE', {
				x: 350,
				y: 909,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 330,
				y: 846,
				width: 240,
				height: 38,
				color: '#4286f4',
			})
			.drawText('VALUE', {
				x: 350,
				y: 861,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 330,
				y: 798,
				width: 240,
				height: 38,
				color: '#4286f4',
			})
			.drawText('VALUE', {
				x: 350,
				y: 813,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 330,
				y: 750,
				width: 240,
				height: 38,
				color: '#4286f4',
			})
			.drawText('VALUE', {
				x: 350,
				y: 765,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 330,
				y: 702,
				width: 240,
				height: 38,
				color: '#4286f4',
			})
			.drawText('VALUE', {
				x: 350,
				y: 717,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 330,
				y: 654,
				width: 240,
				height: 38,
				color: '#4286f4',
			})
			.drawText('VALUE', {
				x: 350,
				y: 669,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 330,
				y: 606,
				width: 240,
				height: 38,
				color: '#4286f4',
			})
			.drawText('VALUE', {
				x: 350,
				y: 621,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 330,
				y: 558,
				width: 240,
				height: 38,
				color: '#4286f4',
			})
			.drawText('VALUE', {
				x: 350,
				y: 573,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 330,
				y: 510,
				width: 240,
				height: 38,
				color: '#4286f4',
			})
			.drawText('VALUE', {
				x: 350,
				y: 525,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 330,
				y: 462,
				width: 240,
				height: 38,
				color: '#4286f4',
			})
			.drawText('VALUE', {
				x: 350,
				y: 477,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 330,
				y: 414,
				width: 240,
				height: 38,
				color: '#4286f4',
			})
			.drawText('VALUE', {
				x: 350,
				y: 429,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 330,
				y: 366,
				width: 240,
				height: 38,
				color: '#4286f4',
			})
			.drawText('VALUE', {
				x: 350,
				y: 381,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 330,
				y: 318,
				width: 240,
				height: 38,
				color: '#4286f4',
			})
			.drawText('VALUE', {
				x: 350,
				y: 333,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 330,
				y: 270,
				width: 240,
				height: 38,
				color: '#4286f4',
			})
			.drawText('VALUE', {
				x: 350,
				y: 285,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 330,
				y: 222,
				width: 240,
				height: 38,
				color: '#4286f4',
			})
			.drawText('VALUE', {
				x: 350,
				y: 237,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 330,
				y: 174,
				width: 240,
				height: 38,
				color: '#4286f4',
			})
			.drawText('VALUE', {
				x: 350,
				y: 189,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 330,
				y: 126,
				width: 240,
				height: 38,
				color: '#4286f4',
			})
			.drawText('VALUE', {
				x: 350,
				y: 141,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 330,
				y: 78,
				width: 240,
				height: 38,
				color: '#4286f4',
			})
			.drawText('VALUE', {
				x: 350,
				y: 93,
				color: '#FFFFFF',
			})
			.drawRectangle({
				x: 330,
				y: 30,
				width: 240,
				height: 38,
				color: '#4286f4',
			})
			.drawText('VALUE', {
				x: 350,
				y: 45,
				color: '#FFFFFF',
			});

		const pdfPath = RNFetchBlob.fs.dirs.DownloadDir + '/illumisoft.pdf';
		PDFDocument.create(pdfPath)
			.addPages(page1)
			.write()
			.then(path => {
				console.log('PDF created at: ' + path);
				//Alert.alert('PDF created at: ' + path);
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