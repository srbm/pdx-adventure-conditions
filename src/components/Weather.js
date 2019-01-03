import React from 'react';

const Weather = props => {
  console.log(props);
  let weather = props.data;

  return (
    <div className="weather">
      <h3>Temperature: </h3><p>{weather}</p>
      <h3>Outlook: </h3><p></p>
      <h3>Wind Speed: </h3><p></p>
    </div>
  );
}

export default Weather;
