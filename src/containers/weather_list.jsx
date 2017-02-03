// =============================================================
// 
// 	weather_list.js
//
// =============================================================

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeatherSSL } from '../actions/action_fetchweather_ssl';
import ChartLines from '../components/chart_lines';
import ChartBars from '../components/chart_bars';
import ChartSpots from '../components/chart_spots';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	fetchCoords(coords){
		const lat = coords.map(coordData => coordData.geometry.location.lat);
		const lon = coords.map(coordData => coordData.geometry.location.lng);
		console.log("Success! fetched - lat :", lat[0]);
		console.log("Success! fetched - lat :", lon[0]);
	}
	renderWeather(cityData){
		
		// this assigns a var to our cityData
		const cityName = cityData.city.name;

		// for our sparklines charts to work, we basically just need an array of numbers, which is what is passed into the temps const
		// after mapping the correct data
		// 
		// this basically grabs the cityData.list object, then maps out every child array with a function
		const temps = cityData.list.map(weatherTemps => 
			// this then grabs all the VALUES of the temp array, which contains the city's temperature for the next 5 days
			weatherTemps.main.temp);
		console.log(temps);

		// sets up the variable to map each pressure array and generate our chart 
		const pressures = cityData.list.map(weatherPress => weatherPress.main.pressure);
		console.log(pressures);

		// sets up the variable to map each humidity array and generate our chart 
		const humidities = cityData.list.map(weatherHumi => weatherHumi.main.humidity);
		console.log(humidities);

		/* this is the ES5 way of grabbing the data
		// sets up the variable to grab the .lon array from cityData
		const lon = cityData.city.coord.lon;

		// sets up the variable to grab the .lat array from cityData
		const lat = cityData.city.coord.lat;
		*/
	
		// this is the ES6 way of grabbing the lon / lat data
		const { lon, lat } = cityData.city.coord;

		return(
			<article className="card animated fadeInDown" key={cityName}>
				    <div className="card-block">
				        <h4 className="card-title animated fadeInDown">Forecast for {cityName}</h4>
				    </div>
				    <section className="animated fadeInUp mapContainer">
				    	<GoogleMap zoom={12} lon={lon} lat={lat} />
				    </section>
					<section className="charts">
						<div className="chartContainer first animated fadeInUp">
							<ChartLines chartData={temps} color="#FF5200" units="Kelvin"/>
						</div>
						<div className="chartContainer second animated fadeInUp">
							<ChartBars chartData={humidities} color="#00FF6A" units="%"/>
						</div>
						<div className="chartContainer third animated fadeInUp">
							<ChartSpots chartData={pressures} color="#FF6E00" units="%"/>
						</div>
					</section>		
			</article>
		);
	}
	
	render(){
		return(
			<div>
				{this.props.weather.map(this.renderWeather)}
				<div>{this.fetchCoords(this.props.geocode)}</div>
		</div>
			

		);
	}

}

// we can also write it with EMC6 syntax
 function mapStateToProps({ weather, geocode }){

 	// this is how the function now looks
 	/*
	return { weather: weather }; */

	//this can be further condensed with ES6 like so:
	// because both the key and the value object have the same identifier
	return { weather, geocode };
}

// creates the function to join the action creator with the BookList component, to update the app's state
// anything returned on this function, will end up as .props on the BookList container
function mapDispatchToProps(dispatch) {

	return bindActionCreators({ fetchWeatherSSL}, dispatch);

}
export default connect(mapStateToProps, mapDispatchToProps) (WeatherList);