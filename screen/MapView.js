import React from 'react';
import {
	Platform,
	View,
	Button,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Text,
	Switch
} from 'react-native';

import StaticMap from '../map/StaticMap';
import { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';

class MapView extends React.Component {

	render() {
		return (
			<View style={styles.body}>
				<StaticMap
					provider={PROVIDER_DEFAULT}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		flex:1,
	},
	body:{
		flex:1,
	},
});

module.exports = MapView;

