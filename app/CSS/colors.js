/*** Colors CSS ***/
import { StyleSheet } from 'react-native';

global.DEFAULT_COLOR = "#FFFFFF";
global.WHITE_COLOR = "#FFFFFF";
global.RED_COLOR = "#BA3737";
global.BLACK_COLOR = "#000000";
global.YELLOW_COLOR = "#EACA33";

export default StyleSheet.create({

	defaultBgColor: {
		backgroundColor: DEFAULT_COLOR,
	},
	defaultFnColor: {
		color: DEFAULT_COLOR,
	},
	defaultTnColor: {
		tintColor: DEFAULT_COLOR,
	},
	whiteBgColor: {
		backgroundColor: WHITE_COLOR,
	},
	whiteFnColor: {
		color: WHITE_COLOR,
	},
	whiteTnColor: {
		tintColor: WHITE_COLOR,
	},
	blackBgColor: {
		backgroundColor: BLACK_COLOR,
	},
	blackFnColor: {
		color: BLACK_COLOR,
	},
	blackTnColor: {
		tintColor: BLACK_COLOR,
	},
	redBgColor: {
		backgroundColor: RED_COLOR,
	},
	redFnColor: {
		color: RED_COLOR,
	},
	redTnColor: {
		tintColor: RED_COLOR,
	},
	yellowBgColor: {
		backgroundColor: YELLOW_COLOR,
	},
	yellowFnColor: {
		color: YELLOW_COLOR,
	},
	yellowTnColor: {
		tintColor: YELLOW_COLOR,
	},
});