import React from 'react';

import {
	StyleSheet,
	View,
	Text,
	Image
} from 'react-native';

class Header extends React.Component {

	render() {
		return (
			<View style={styles.header}>
				<Image
					style={styles.logo}
					source={require('./img/walk2art-logo.png')} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header:{
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		width:70,
		height:15,
	}
});

module.exports = Header;
