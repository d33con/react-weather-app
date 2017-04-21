import React from 'react';
import PropTypes from 'prop-types';
import Forecast from './Forecast';

function CurrentWeather(props) {
  return (
    <div className='container'>
      <div className='row'>
          <div className='col s12 m10 offset-m1 l8 offset-l2'>
            <div className="card pink">
              <div className='card-content white-text'>
                <h2 className="grey-text text-lighten-2">{props.location}</h2>
                <div className='z-depth-2 pink lighten-2 weather-container'>
                  <div className='weather-temp'>{props.temp}&deg;<div className='divider purple darken-2'></div></div>
                  <div className='weather-condition valign-wrapper'><i className={'weather valign icon-' + props.code}></i><div className='weather-text valign'><span>{props.text}</span></div>
                  </div>
                </div>
                <div className='card-action purple darken-2 z-depth-1'>
                  <div><span className='card-title activator grey-text text-lighten-2'>5 day forecast</span></div>
                </div>
              </div>
              <div className='card-reveal'>
                <p><span className="card-title indigo-text text-darken-2">Forecast for {props.location}<i className='material-icons right'>close</i></span></p>
              <Forecast forecast={props.forecast} />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

CurrentWeather.propTypes = {
  temp: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  forecast: PropTypes.array.isRequired,
}

export default CurrentWeather;
