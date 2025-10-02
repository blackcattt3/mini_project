import React from 'react'

const WeatherBox = ({weather}) => {

  const iconCode = weather?.weather[0].icon;
  const iconUrl = iconCode? `https://openweathermap.org/img/wn/${iconCode}@2x.png`:"";

  return (
    <div className='box'>
      <h4>{weather?.name}</h4>
      <div>{iconCode && <img src={iconUrl} alt="weather icon" />}</div>
      <h1>{weather?.weather[0].description}</h1>
      <h3>{(weather?.main.temp).toFixed(1)}°C / {(weather?.main.temp *(9/5)+32).toFixed(1)}°F</h3>
    </div>
  )
}

export default WeatherBox
