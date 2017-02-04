// =============================================================
// 
// 	actions/fetchweather.js
//
// =============================================================

// includes our axios API
import axios from 'axios';

// new API call for darksky weather API
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
// https://api.darksky.net/forecast/476d4cacd325216ea0fa53dc3b4fe5db/53.5444389,-113.4909267

import jQuery from 'jquery';

import $ from 'jquery';

const API_KEY = '476d4cacd325216ea0fa53dc3b4fe5db';

const ROOT_URL =`https://api.darksky.net/forecast/${API_KEY}`;

export const FETCH_WEATHER_SSL ='FETCH_WEATHER_SSL';

export function fetchWeatherSSL(lat, lon){

		var latitude = lat;
		var longitude = lon;
		const url = `${ROOT_URL}/${latitude},${longitude}/`;

		// calls the ajax request with axios
		// this returns a promise
		const request = $.ajax({
		  url: url,
		  dataType: "jsonp"
		});

		console.log('Request - fetchweather_ssl: ', request);

		return {
			
			type: FETCH_WEATHER_SSL,
			payload: request
		};

}
