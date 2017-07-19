import React from 'react';
import {
	Platform,
	View,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Text,
	Switch,
} from 'react-native';

/**************
 * REDUX
 ***************/
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import streetArtApp from './store/reducers';

let store = createStore(
	streetArtApp,
	applyMiddleware(thunkMiddleware,logger),
);

import { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';
import StaticMap from './map/StaticMap';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<StaticMap
						provider={PROVIDER_DEFAULT}
					/>
					<Text style={styles.message}>
						Walk2.art
					</Text>
				</View>
			</Provider>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	scrollview: {
		alignItems: 'center',
		paddingVertical: 40,
	},
	message: {
		alignItems: 'center',
		paddingVertical: 10,
	}
});

module.exports = App;
