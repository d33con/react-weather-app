import React from 'react';
import DailyForecast from './DailyForecast';

const Forecast = (props) => {
  const days = [];
  for (var i = 0; i < 5; i++) {
    days.push(props.forecast[i]);
  }
  return (
    <table className='centered bordered indigo-text text-darken-2"'>
      <tbody>
        {days.map(day =>
          <DailyForecast day={day} key={day.date} />
        )}
      </tbody>
    </table>
  );
};

export default Forecast;
