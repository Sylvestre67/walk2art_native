import React from 'react';
import {
	Platform,
	View,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Text,
	Switch,
	TabBarIOS,
} from 'react-native';

import { connect } from 'react-redux'
import { changeTab } from './store/actions';

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

import AboutView from './screen/AboutView';
import ListView from './screen/ListView';
import MapView from './screen/MapView';

import { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';
import StaticMap from './map/StaticMap';

class Tabs extends React.Component {

	_renderTabContent (index) {
		switch (index) {
			case 0:
				return <MapView />;
			case 1:
				return <ListView />;
			case 2:
				return <AboutView />;
		}
	}

	render () {
		const tabIndex = this.props.tabs.index;

		return (
			<View style={styles.container}>
				<View style={styles.spacer}>
				</View>
				<View style={styles.header}>
					<Header />
				</View>
				<View style={styles.body}>
					{this._renderTabContent(tabIndex)}
				</View>
				<View style={styles.footer}>
					<Footer />
				</View>
			</View>
		)
	}
}

function mapStateToProps (state) {
	return {
		tabs: state.tabsNav
	}
}

const TabRoot = connect(
	mapStateToProps,
	{
		changeTab: (route) => changeTab(route)
	}
)(Tabs);

const App = () => (
			<Provider store={store}>
				<TabRoot />
			</Provider>
		);

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
		height:30,
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
