import React from 'react';
import { Icon } from 'react-native-elements'

import {
	StyleSheet,
	View,
	Text,
	Image
} from 'react-native';

class Footer extends React.Component {

	render() {
		return (
			<View style={styles.footer}>
				<View>
					<Icon
						name='ios-navigate-outline'
						type='ionicon' />

				</View>

				<View>
					<Icon
						name='ios-map-outline'
						type='ionicon' />
				</View>

				<View>
					<Icon
						name='ios-list-outline'
						type='ionicon' />
				</View>

				<View>
					<Icon
						name='ios-information-circle-outline'
						type='ionicon' />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	footer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	}
});

module.exports = Footer;

