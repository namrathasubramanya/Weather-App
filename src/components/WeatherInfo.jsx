import React from 'react';

const WeatherInfo = (props) => {
  return(
    <div className="weather-info-wrapper">
      {props.error && <div className="error-message"> {props.error}</div>}
      {!props.error && props.temperature && <div className="weather_block">

      <div className="weather-info__description">
          <div className="weather_sideblock">
            <div>Country</div>
            <div>{props.country}</div>
          </div>
          <div className="weather-info__temperature">
          <div>{props.temperature} &deg; </div>
        </div>
          <div className="weather_sideblock">
            <div>Description</div>
            <div>{props.description}</div>
          </div>
      </div>
      <div className="weather-info__description">
        <div>
          <div>Pressure</div>
          <div>{props.pressure}</div>
        </div>
        <div>
          <div>Humidity</div>
          <div>{props.humidity}</div>
        </div>
        <div>
          <div>Min Temperature</div>
          <div>{props.minTemp} &deg; </div>
        </div>
        <div>
            <div>Max Temperature</div>
            <div>{props.maxTemp} &deg; </div>
        </div>
        <img className="weather-info__icon" src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="weather_icon" />
      </div>
      </div>}
    </div>
  )
}

export default WeatherInfo;
