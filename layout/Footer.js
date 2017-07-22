import React from 'react';
import { Icon } from 'react-native-elements'

import {
	StyleSheet,
	View,
	Text,
	TouchableWithoutFeedback,
	Image,
	Dimensions
} from 'react-native';

import { connect } from 'react-redux'
import { changeTab } from '../store/actions';

const { width, height } = Dimensions.get('window');

class _Container extends React.Component {

	_changeTab (i) {
		const { changeTab } = this.props;
		changeTab(i)
	}

	render() {
		const active = this.props.tabs.index;
		const tabs = this.props.tabs.tabs.map((tab,index,tabs) => {
			return <TouchableWithoutFeedback
				key={index}
				onPress={() => {this._changeTab(index)}}>
				<View
					style={(this.props.tabs.index === index) ? styles.active : styles.inactive}>
					<Icon
						name={tab.icon.name}
						type={tab.icon.type} />
					</View>
			</TouchableWithoutFeedback>

		},{active: 0});

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
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	active: {
		flex:1,
		height:40,
		alignItems: 'center',
		justifyContent: 'center',
		width: width/3,
		backgroundColor:'#eeeeee'
	},
	inactive: {
		flex:1,
		height:40,
		alignItems: 'center',
		justifyContent: 'center',
		width: width/3,
	}

});

module.exports = Footer;

