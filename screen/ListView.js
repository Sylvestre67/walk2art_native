import React from 'react';
import _ from 'lodash';

import {
	Platform,
	View,
	Button,
	StyleSheet,
	TouchableOpacity,
	TouchableWithoutFeedback,
	ScrollView,
	Text,
	Image,
	Switch,
	Dimensions
} from 'react-native';

import { connect } from 'react-redux'
import { fetchPlaces, refreshActivePlace } from '../store/actions';

import PlaceCard from '../component/PlaceCard';

const { width, height } = Dimensions.get('window');
class _Container extends React.Component {

	componentDidMount(){
		this.props.fetchPlaces();
	}

	_renderPlacesImages(props){
		return _.values(this.props.places.dict).map((place,index,places) => {
			return <TouchableWithoutFeedback
					key={place.id}
					onPress={() => {this.props.refreshActivePlace(place)}}>
						<View key={place.id} style={styles.imageWrap}>
							<Image source={{uri: place.images[0].image_url}} style={styles.image} />
						</View>
					</TouchableWithoutFeedback>
		},this)
	}

	render() {
		return (
			<ScrollView>
				<View style={styles.scroll}>
					{this._renderPlacesImages(this.props)}
				</View>
			</ScrollView>
		);
	}
}

/*<View style={styles.card}>
 <PlaceCard />
 </View>*/


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
		width: width*.25,
		//height: 2 * height,
		height:width*.25,
	},
	card:{
		height:height*.25,
		bottom:0,
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
		},
		refreshActivePlace: (place) => {
			dispatch(refreshActivePlace(place))
		}
	}
};

const ListView = connect(
	mapStateToProps,
	mapDispatchToProps
)(_Container);

module.exports = ListView;

