import { combineReducers } from 'redux'

import { RECEIVE_PLACES, REQUEST_PLACES, REFRESH_ACTIVE_PLACES, CHANGE_TAB } from './actions'
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const tabs = [
	{ key: 'map', title: 'Map',
		icon: {
			name:'ios-map-outline',
			type:'ionicon'
		}
	},
	{ key: 'list', title: 'List',
		icon: {
			name:'ios-list-outline',
			type:'ionicon'
		}
	},
	{ key: 'about', title: 'About',
		icon: {
			name:'ios-information-circle-outline',
			type:'ionicon'
		}
	}
];

const initialState = {
	places:{
		isFetchingPlaces:false,
		dict: {},
		activePlace: { // Initial value for Map centering on init.
			latitude: 0,
			longitude: 0,
			id: undefined,
			images: undefined
		},
	},
	tabs: {
		index: 1,
		tabs
	}
};

function places(state = initialState.places, action) {
	switch (action.type) {
		case REQUEST_PLACES:
			return Object.assign({}, state, {
				isFetching: true
			});
		case RECEIVE_PLACES:
			return Object.assign({}, state, {
				dict: action.places.reduce((dict,obj) => {
					obj.latitude  = parseFloat(obj.latitude);
					obj.longitude = parseFloat(obj.longitude);
					dict[obj.id] = obj;
					return dict;
				},{})
			});
		case REFRESH_ACTIVE_PLACES:
			return Object.assign({}, state, {
				activePlace: {
					latitude: parseFloat(action.place.latitude),
					longitude: parseFloat(action.place.longitude),
					id: action.place.id,
					images: action.place.images
				}
			});
		default:
			return state
	}
}

function tabsNav (state = initialState.tabs, action) {

	if (action.index === state.index) return state;

	switch (action.type) {
		case CHANGE_TAB:
			return {
				...state,
				index: action.index
			};
		default:
			return state
	}
}

const streetArtApp = combineReducers({
	places,
	tabsNav
});

export default streetArtApp;
