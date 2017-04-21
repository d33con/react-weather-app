import React from 'react';
import PropTypes from 'prop-types';
import DailyForecast from './DailyForecast';

function Forecast(props) {
  const days = [];
  for (var i = 0; i < 5; i++) {
    days.push(props.forecast[i]);
  }
  return (
    <table className='centered bordered indigo-text text-darken-2"'>
      <tbody>
        {days.map(day =>
          <DailyForecast dailyForecast={day} key={day.date} />
        )}
      </tbody>
    </table>
  );
}

Forecast.propTypes = {
  forecast: PropTypes.array.isRequired
};

export default Forecast;
