// =============================================================
// 
// 	weather_list.jsx
//
// =============================================================

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import Charts from '../components/charts/charts';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
	constructor(props){
		super(props);

		this.renderWeather = this.renderWeather.bind(this);
	}

	renderWeather(weather){
	const weathercurrent = weather;
	// console.log('weather', weather);
	return weather.map((weather) => {
		const lat = weather.latitude;
		const lon = weather.longitude;
		var alerts;
        if (weather.alerts == undefined) {
          alerts = undefined;
        } else {
          alerts = weather.alerts.map(alertData => alertData.description);
        }
		const summary = weather.daily.summary;
        // console.log(alerts);

        const temp = weather.daily.data.map(temps => temps.apparentTemperatureMax);
        // console.log(temp);

        const humi = weather.daily.data.map(humis => humis.humidity);
        // console.log(humi);

        const wind = weather.daily.data.map(winds => winds.windSpeed);
        // console.log(wind);
        
		console.log('Weather fetched! - ', weather);
		return (
			<article className="card animated fadeInDown searchWeather" key={lat}>
						    <div className="card-block">
						        <h4 className="card-title animated fadeInDown">Forecast for ... </h4>
						    </div>
							<section id="geolocateMap">
				            	<div className="mapContainer animated fadeInDown">           
				                	<GoogleMap zoom={12} lon={lon} lat={lat}/>
				            	</div> 
				          	</section> 
				          	<div className="localWeather">
					            <Charts key={lon} summary={summary} temp={temp} humi={humi} wind={wind} alerts={alerts}/>    
					        </div>  
			</article>
		);
	});
	}
	
	render(){
		return(
			<div>
				{this.renderWeather(this.props.searchweather)}
		</div>		

		);
	}

}

 function mapStateToProps({ weather, geocode, searchweather }){

	return { geocode, searchweather };
}

export default connect(mapStateToProps) (WeatherList);