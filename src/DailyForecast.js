import React from 'react';
import PropTypes from 'prop-types';

function DailyForecast({ dailyForecast }) {
  return (
    <tr>
      <td>{dailyForecast.day}</td>
      <td><i className={'weather-small icon-' + dailyForecast.code}></i></td>
      <td>{dailyForecast.high + ' / ' + dailyForecast.low}</td>
    </tr>
  );
};

DailyForecast.propTypes = {
  dailyForecast: PropTypes.object.isRequired
};

export default DailyForecast;
