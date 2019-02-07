/*** Input CSS ***/
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

	defaultFont: {
		fontFamily: "opensans"
	},

	h1: {
		fontSize: 28,
		lineHeight: 32,
	},
	h2: {
		fontSize: 24,
		lineHeight: 28,
	},
	h3: {
		fontSize: 20,
		lineHeight: 22,
	},
	h4: {
		fontSize: 18,
		lineHeight: 22,
	},
	h5: {
		fontSize: 16,
		lineHeight: 22,
	},
	bodyFont: {
		fontSize: 14,
		lineHeight: 18,
	},

	textBold: {
		fontWeight: "bold"
	},
	textItalic: {
		fontStyle: "italic"
	},
	textLeft: {
		textAlign: "left"
	},
	textCenter: {
		textAlign: "center"
	},
	textRight: {
		textAlign: "right"
	},

	/*** Button ***/

	btnHeight: {
		height: 40
	},
	btnSmHeight: {
		height: 30
	},
	btnMdHeight: {
		height: 50
	},
	btnLgHeight: {
		height: 60
	},

	/*** Icon ***/

	iconSize: {
		width: 22,
		height: 22,
	},
	iconSmSize: {
		width: 20,
		height: 20,
	},
	iconMdSize: {
		width: 24,
		height: 24,
	},
	iconLgSize: {
		width: 30,
		height: 30,
	}

});