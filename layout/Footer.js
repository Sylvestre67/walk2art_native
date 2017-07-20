import React from 'react';

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
				<Text>Footer</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	footer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	}
});

module.exports = Footer;

