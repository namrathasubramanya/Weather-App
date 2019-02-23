import React, {Component} from 'react';
import Header from './Header';
import Search from './Search';
import WeatherInfo from "./WeatherInfo";
const API_KEY = '616ca5ea863f8d1d61c676ed9ed65479';

class WeatherApp extends Component {
state = {
			 city: undefined,
			 country:undefined,
			 temperature: undefined,
			 error : undefined,
			 today : undefined,
			 description:undefined,
			 icon:undefined,
			 pressure: undefined,
			 humidity:undefined,
			 minTemp:undefined,
			 maxTemp:undefined
}

getTodaysDate(){
        return new Date();
}

getWeather = async(e) => {
		e.preventDefault();
		const city = e.target.elements[1].value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&units=metric`);
    const data = await response.json();
    console.log(data);
		console.log(data.city.coord.lat);
		if(data.cod === "404"){
        this.setState(()=> ({
            error : 'Data Not Found!'
        }))
		} else {
			this.setState(() => ({
          city : data.city.name,
          country : data.city.country,
					temperature: data.list[0].main.temp,
					error : undefined,
	 			 	today : this.getTodaysDate(),
	 			 	description : data.list[0].weather[0].description,
	 			 	icon : data.list[0].weather[0].icon,
	 			 	humidity : data.list[0].main.humidity,
					pressure : data.list[0].main.pressure,
	 			 	minTemp : data.list[0].main.temp_max,
	 			 	maxTemp : data.list[0].main.temp_min
			}))
			console.log(data.city.id);
			console.log(data.city.name);
			console.log(data.city.country);
			console.log(data.city.population);
			console.log(data.list[0].main.temp);
		}
}

 render(){
	 return (
 		<div>
 			<Header />
 			<Search getWeather={this.getWeather}/>
			<WeatherInfo city={this.state.city}
									 country={this.state.country}
									 temperature={this.state.temperature}
									 today = {this.state.today}
									 description={this.state.description}
									 icon={this.state.icon}
									 pressure= {this.state.pressure}
									 humidity={this.state.humidity}
									 minTemp={this.state.minTemp}
									 maxTemp={this.state.maxTemp}/>
 		</div>
 	)
 }
}
export default WeatherApp;
