import React from 'react';
import _ from 'lodash';

import {
	Platform,
	View,
	Button,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Text,
	Image,
	Switch,
	Dimensions
} from 'react-native';

import { connect } from 'react-redux'
import { fetchPlaces } from '../store/actions';

const { width, height } = Dimensions.get('window');
class _Container extends React.Component {


	componentDidMount(){
		this.props.fetchPlaces();
	}

	_renderPlacesImages(){
		return _.values(this.props.places.dict).map((place,index,places) => {
			return <View key={place.id} style={styles.imageWrap}>
				<Image source={{uri: place.images[0].image_url}} style={styles.image} />
			</View>
		})
	}
	render() {
		return (
			<ScrollView>
				<View style={styles.scroll}>
					{this._renderPlacesImages()}
				</View>
			</ScrollView>
		);
	}
}


const styles = StyleSheet.create({
	scroll:{
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		flexWrap:'wrap'
	},
	imageWrap:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image:{
		width:width*.25,
		height:width*.25,
	}
});


function mapStateToProps (state) {
	return {
		places: state.places
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchPlaces: () => {
			dispatch(fetchPlaces())
		}
	}
};

const ListView = connect(
	mapStateToProps,
	mapDispatchToProps
)(_Container);

module.exports = ListView;

