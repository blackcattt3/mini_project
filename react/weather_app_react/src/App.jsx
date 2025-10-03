import { useState } from 'react'
import { useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import WeatherBox from './component/WeatherBox'
import WeatherButton from './component/WeatherButton'
import { ClipLoader } from "react-spinners";


function App() {

  const apiKey = import.meta.env.VITE_API_KEY;;
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [backgroundImageId, setBackgroundImageId] = useState("");
  const [weatherGroup, setWeatherGroup] = useState("");
  const [loading, setLoading] = useState(true);
  const cities=["Seoul","Tokyo", "Iceland", "Paris", "New york"];
  
  useEffect(()=>{
    if(city === "" || city === null){
      getCurrentLocation();
    } else{
      getWeatherByButton(city)
    }
  }, [city, backgroundImageId, weatherGroup]);


  const handleChangeCity = (city)=>{
    if(city === "current"){
      setCity(null)
    } else{
      setCity(city)
    }
  }

  const getCurrentLocation = ()=>{
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        getCurrentLocationWeather(lat, long);
        // console.log("lat",lat, "long", long);
    });
  }

  const getCurrentLocationWeather = async (lat, long)=>{
    let url = new URL(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=kr&appid=${apiKey}`);
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
    setBackgroundImageId(data.weather[0].id);
    setWeatherGroup(classifyWeatherGroup(data.weather[0].id));
    setLoading(false);
    // console.log(data);
    // console.log("bgi", backgroundImageId);
    // console.log(weatherGroup);
  }
  
  const getWeatherByButton = async (city)=>{
    let url = new URL(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=kr&appid=${apiKey}`)
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
    setBackgroundImageId(data.weather[0].id);
    setWeatherGroup(classifyWeatherGroup(data.weather[0].id));
    setLoading(false);
    // console.log(data);
    // console.log("bgi",backgroundImageId);
    // console.log(weatherGroup);
  }

  const classifyWeatherGroup = (backgroundImageId)=>{
    if(backgroundImageId>=200 && backgroundImageId<=299){
      return "Thunderstorm"
    } else if(backgroundImageId>=300 && backgroundImageId<=399){
      return "Drizzle"
    } else if(backgroundImageId>=500 && backgroundImageId<=599){
      return "Rain"
    } else if(backgroundImageId>=600 && backgroundImageId<=699){
      return "Snow"
    } else if(backgroundImageId>=700 && backgroundImageId<=799){
      return "Mist"
    } else if(backgroundImageId == 800){
      return "Clear"
    } else if(backgroundImageId>=801 && backgroundImageId<=899){
      return "Clouds"
    }
  }

  return (
    <div>
      {loading? <div className={`wrapper ${weatherGroup}`}>
      <ClipLoader color='black' loading={loading} size={150}/></div>
      : <div className={`wrapper ${weatherGroup}`}>
      {weather && <WeatherBox weather={weather} backgroundImageId={backgroundImageId}/>}
        <WeatherButton cities={cities} setCity={setCity} selectedCity={city} handleChangeCity={handleChangeCity}/>
      </div>}
    </div>
  
  )
}

export default App

// cities에 따라 버튼 누르면 각각의 날씨 보여주기
// current Location버튼 누르면 현재위치의 날씨 보여주기
// current Location, new York, tokyo, iceland
// 로딩스피너
// 날씨에 따라 배경화면 다르게 보여주기 (해, 비, 구름, 눈)
// weather.id 에 따라서 클래스를 다르게 줘서 각 클래스에 해당하는 이미지 띄우기.