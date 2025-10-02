import React from 'react'
import Button from 'react-bootstrap/Button';

const WeatherButton = ({cities, setCity, selectedCity, handleChangeCity}) => {
  return (
    <div>
      <Button className={selectedCity===null?"active-button":""} onClick={()=>{handleChangeCity("current"), console.log("hi")}} variant="warning">Current Location</Button>
      {cities.map((item)=>(
        <Button className={selectedCity===item?"active-button":""} onClick={()=>{
            // console.log(item)
            setCity(item);
            console.log("sc",item)
            console.log("sc2",selectedCity)
        }} variant="warning" key={item}>{item}</Button>
      ))}
    </div>
  )
}

export default WeatherButton


// 1. map 쓸때 꼭 return 신경쓰기
// className={selectedCity === "item"?"active-button":""}