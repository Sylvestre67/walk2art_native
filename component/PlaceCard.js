import React from 'react';
import _ from 'lodash';
import MapView from 'react-native-maps';

import {
	View,
	Dimensions,
	Image,
	StyleSheet,
} from 'react-native';

import { connect } from 'react-redux'

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class _Container extends React.Component {

	renderRegion(){
		let { latitude,longitude } = this.props.places.activePlace;
		return {
			latitude: latitude,
			longitude: longitude,
			latitudeDelta: LATITUDE_DELTA,
			longitudeDelta: LONGITUDE_DELTA
		}
	}

	render() {
		return (
			<View style={styles.wrap}>
				<View style={styles.imageWrap}>
				</View>
				<View style={styles.mapWrap}>
					<MapView
						provider={this.props.provider}
						style={styles.map}
						region={this.renderRegion()}
						onRegionChange={this.onRegionChange}>
						<MapView.Marker
							coordinate={this.props.places.activePlace}
							image={require('./pin.png')}
						/>
					</MapView>
				</View>
			</View>
		)
	}
}

/*<Image style={styles.image}
 source={this.props.places.activePlace.images[0].image_url} />*/

const styles = StyleSheet.create({
	wrap:{
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor:'red',
	},
	imageWrap:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image:{
		width:width*.4,
		height:width*.25,
	},
	mapWrap:{
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	map:{
		width:width*.6,
		height:width*.25,
	},
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

const PlaceCard = connect(
	mapStateToProps,
	mapDispatchToProps
)(_Container);

module.exports = PlaceCard;

