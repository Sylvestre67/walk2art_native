import React from 'react';
import { Icon } from 'react-native-elements'

import {
	StyleSheet,
	View,
	Text,
	TouchableWithoutFeedback,
	Image
} from 'react-native';

import { connect } from 'react-redux'
import { changeTab } from '../store/actions';

class _Container extends React.Component {

	_changeTab (i) {
		const { changeTab } = this.props;
		changeTab(i)
	}

	render() {
		const tabs = this.props.tabs.tabs.map((tab,index,tabs) => {
			return <View
					key={index}>
						<TouchableWithoutFeedback
							onPress={() => {this._changeTab(index)}}>
							<Icon
								name={tab.icon.name}
								type={tab.icon.type} />
						</TouchableWithoutFeedback>
					</View>
		});

		return (
			<View style={styles.footer}>
				{tabs}
			</View>
		);
	}
}


//////////////////////////////////////////////////////
const mapStateToProps = (state) => {
	return {
		tabs: state.tabsNav
	}
};

const Footer = connect(
	mapStateToProps,
	{
		changeTab: (route) => changeTab(route)
	}
)(_Container);

const styles = StyleSheet.create({
	footer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	}
});

module.exports = Footer;

