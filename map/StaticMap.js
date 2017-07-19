import React from 'react';
import _ from 'lodash';

import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	ScrollView,
} from 'react-native';

import { connect } from 'react-redux';
import { fetchPlaces } from '../store/actions';

import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class _Container extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount(){
		this.props.fetchPlaces();
	}

	componentDidUpdate(prevProps){

	}

	loadMap(){
		return (this.props.places.activePlace.latitude !== undefined)
			? <MapView
				provider={this.props.provider}
				style={styles.map}
				region={this.renderRegion()}
				onRegionChange={this.onRegionChange}
			>
				{this.renderMarker()}
			</MapView>
			: <Text>Loading</Text>;
	}

	renderMarker(){
		let markers = [];

		_.forIn(this.props.places.dict, (place,index,places) => {
			markers.push(<MapView.Marker
				key={index}
				title="This is a title"
				description="This is a description"
				coordinate={place}
			/>)
		});

		return markers
	}

	renderRegion(){
		let { latitude,longitude } = this.props.places.activePlace;
		return {
			latitude: latitude,
			longitude: longitude,
			latitudeDelta: LATITUDE_DELTA,
			longitudeDelta: LONGITUDE_DELTA
		}
	}

	onRegionChange(region){

	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView
					style={StyleSheet.absoluteFill}
					contentContainerStyle={styles.scrollview}
				>
					{this.loadMap()}
				</ScrollView>
			</View>
		);
	}
}

/*{this.renderMarker()}*/

_Container.propTypes = {
	provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	scrollview: {
		alignItems: 'center',
		paddingVertical: 20,
	},
	map: {
		width: width,
		height: (height * .70),
	},
});

const mapStateToProps = state => {
	return {
		places: state.places,
	}
};

const mapDispatchToProps = dispatch => {
	return {
		fetchPlaces: () => {
			dispatch(fetchPlaces())
		}
	}
};

export const StaticMap = connect(
	mapStateToProps,
	mapDispatchToProps
)(_Container);

module.exports = StaticMap;
