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

import Header from './layout/Header';
import Footer from './layout/Footer';

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
					<View style={styles.spacer}>
					</View>
					<View style={styles.header}>
						<Header />
					</View>
					<View style={styles.body}>
						<StaticMap
							provider={PROVIDER_DEFAULT}
						/>
					</View>
					<View style={styles.footer}>
						<Footer />
					</View>
				</View>
			</Provider>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		flex:1,
	},
	spacer:{
		height:20,
		backgroundColor:'rgb(255, 255, 255)',
	},
	header:{
		height:20,
		backgroundColor:'rgb(255, 255, 255)',
	},
	body:{
		flex:1,
	},
	footer:{
		height:40,
		backgroundColor:'rgb(255, 255, 255)',
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
