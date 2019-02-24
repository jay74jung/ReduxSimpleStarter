import axios from 'axios';

const API_KEY = '1f472c118286af0d630b6b7247e39ec8';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},au`;
	const request = axios.get(url);
	console.log('Request:', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}