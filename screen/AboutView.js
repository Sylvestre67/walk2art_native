import React from 'react';
import {
	View,
	Image,
	StyleSheet,
	Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

class AboutView extends React.Component {
	render() {
		return (
			<View style={styles.wrapper}>
				<Image
					style={styles.logo}
					source={require('./img/walk2art-logo.png')} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper:{
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		width:width*.25,
		height:15,
	}
});

module.exports = AboutView;
