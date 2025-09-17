const APIKey = `39b5a65a-910f-11f0-9010-0242ac130006-39b5a718-910f-11f0-9010-0242ac130006`;
let lat = 37.5665;      // 기본값 : 서울 위도
let lng = 126.9780;     // 기본값 : 서울 경도

const time = moment().format("A. h:mm");
const today = moment().format("ddd YYYY.MM.DD")

let dateShow = document.querySelector(".date-show");
let timeShow = document.querySelector(".time-show");
let temperatureShow = document.querySelector(".temperature-show");

// 이모지 + 랜덤사진

const getGPS = ()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            lat = position.coords.latitude;
            lng = position.coords.longitude;
            console.log("위도:", lat, "경도:", lng);
            getWeather();
          },
          (error) => {
            console.error("위치 정보 가져오기 실패. 서울로 설정:", error);
            getWeather();
          }
        );
      } else {
        console.log("이 브라우저는 위치 정보 API를 지원하지 않습니다. 위치를 서울로 설정합니다.");
        getWeather();
      }
}

const getWeather = async ()=>{
    const params = 'airTemperature';
    fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
        headers: {
          'Authorization': `${APIKey}`
        }
      }).then((response) => response.json()).then((jsonData) => {
        // Do something with response data.
        console.log(jsonData);
      });
}

const getWeatherDummy = async ()=>{
    const response = await fetch("./data.json");
    const data = await response.json();
    renderTemperature(data.hours);  // 배열로 전달
    weatherTimeRender(data.hours)
}

// 온도 표시
const renderTemperature = (data)=>{
    // console.log(data[0].airTemperature.noaa);
    // console.log(data);
    temperatureShow.innerHTML = `${data[0].airTemperature.noaa}°C`;
}

const weatherTimeRender = (weatherList)=>{
    console.log(weatherList);
    weatherTimeHTML = ''
    weatherTimeHTML = weatherList.slice(0,2).map((item)=>{
        const localTime = moment(item.time).local().format("ddd A. h:mm");
        return `<div class="weather-time-item">
                        <div>${moment(item.time).local().format("YY/MM/DD")}</div>
                        <div>${localTime}</div>
                        <div>날씨사진</div>
                        <div>${item.airTemperature.noaa}°C</div>
                    </div>`
    }).join("")
    document.querySelector(".weather-per-time").innerHTML = weatherTimeHTML;
}

// 날씨별 사진 보여주는 함수(해,비,구름,눈)
const showWeatherImage = ()=>{

}

dateShow.innerHTML = `${today}`
timeShow.innerHTML = `${time}`;
getWeatherDummy();
// getGPS();


// API 요청 한도가 정해져있어서 dummyData를 받아서 처리힘
// 처음에 weatherTime을 정의하고 시간을 띄웠는데 item.time이 UTC 기준이어서 현재 한국시간이 안나옴. localTime을 새로 정의해줌.