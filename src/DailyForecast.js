import React from 'react';

const DailyForecast = ({day}, key) => {
  return (
    <tr>
      <td>{day.day}</td>
      <td><i className={'weather-small icon-' + day.code}></i></td>
      <td>{day.high + ' / ' + day.low}</td>
    </tr>
  );
};

export default DailyForecast;
