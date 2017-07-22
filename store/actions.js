import axios from 'axios';

/*
 * action types
 */
export const REFRESH_ACTIVE_PLACES = 'REFRESH_ACTIVE_PLACES';
export const REQUEST_PLACES = 'REQUEST_PLACES';
export const RECEIVE_PLACES = 'RECEIVE_PLACES';

export const CHANGE_TAB = 'CHANGE_TAB';

/*
 * other constants
 */
// TODO: add .env support.
const API_HOST='https://streetart-walk.herokuapp.com/';
const REST_API_KEY= 'c024c5434a9aefb39efcd1ccf18dab2766d248b5';

/*
 * action creators
 */
export function refreshActivePlace(place){
	return { type: REFRESH_ACTIVE_PLACES, place }
}

function requestPlaces() {
	return {
		type: REQUEST_PLACES,
	}
}

export function receivePlaces(array) {
	return {
		type: RECEIVE_PLACES,
		places: array,
		receivedAt: Date.now()
	}
}

export function fetchPlaces() {

	return function (dispatch) {

		dispatch(requestPlaces());

		let fetching = axios.create({
			headers: {'Authorization': 'Token ' + REST_API_KEY}
		});

		return fetching.get(API_HOST + 'api/v1/places/').then(
				(response) => {
					return response.data.results
				},
				(error) => {
					console.log('An error occured.', error)
				}
			)
			.then((array) =>
				{
				    dispatch(receivePlaces(array));
					return array[0];
				}
			).then((place) => {
				dispatch(refreshActivePlace(place));
			})
	}
}

export function changeTab (index) {
	return {
		type: CHANGE_TAB,
		index
	}
}