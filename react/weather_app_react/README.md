<h2>🌤날씨앱 만들기 프로젝트 (React + OpenWeather API)</h2>
<br>
↓페이지 바로가기↓
<h1>https://mini-weathers.netlify.app</h1>
<br>
<h3>📌프로젝트 소개</h3>
실시간 날씨 앱을 React를 사용하여 만들었습니다.<br>
현재 위치를 기반으로 온도와 날씨정보, 날씨 아이콘을 조회할수있고 주요도시들(Seoul, Tokyo, Iceland, Paris, New york)의 정보도 버튼을 클릭하여 도시별 날씨를 조회 할 수 있습니다.<br>
날씨상태(맑음, 비, 구름, 눈 등)에 따라 배경화면이 동적으로 바뀌며 로딩중에는 화면 중앙에 로딩스피너가 표시됩니다.<br>
<br>
<h3>📂 폴더 구조</h3>
src/<br>
 ┣ 📂components<br>
 ┃ ┣ 📜WeatherBox.jsx<br>
 ┃ ┗ 📜WeatherButton.jsx<br>
 ┣ 📜App.jsx<br>
 ┣ 📜App.css<br>
 ┗ 📜main.jsx<br>
 <br>
<h3>📌주요 기능</h3>
✅ 현재 위치 기반 날씨 조회 (Geolocation API 사용)<br>
✅ 도시 버튼 클릭 시 날씨 조회 (OpenWeather API 호출)<br>
✅ 실시간 날씨 정보 표시<br>
    - 도시명<br>
    - 날씨 아이콘 및 상태 (맑음, 흐림, 비 등)<br>
    - 섭씨/화씨 온도 변환<br>
✅ UX 개선 요소<br>
    - 로딩스피너 표시<br>
    - 선택된 도시 버튼 강조 표시<br>
    - 날씨에 따른 동적 배경화면<br>
<br>
<h3>🛠사용 기술</h3>
✅ Frontend: React (Hooks, useState, useEffect)<br>
✅ UI 라이브러리: React-Bootstrap, CSS<br>
✅ API: OpenWeather API<br>
✅ 기타: React Loading Spinners (로딩 UI)<br>
<br>
<h3>🚀 배포</h3>
✅ Netlify를 통한 자동 배포 (GitHub 연동)<br>
✅ 환경변수(.env) 관리 및 Netlify 환경변수 설정을 통해 API Key 보안 처리<br>
✅ 배포 URL: https://mini-weathers.netlify.app<br>
<br>
<h3>💡개선 가능 포인트</h3>
✅ 에러 처리 (예: "데이터를 불러올 수 없습니다.")<br>
✅ 미디어쿼리를 이용한 반응형 디스플레이 (모바일버전)<br>
<br>
<br>
<h3>✍️ 회고</h3>
✓ React에서 useState, useEffect를 활용한 상태 관리와 fetch를 이용한 비동기 데이터 처리 흐름을 이해할 수 있었다.<br>
✓ .env 환경변수와 Netlify 배포 경험을 통해 실제 서비스 배포를 경험해 볼 수 있었다.<br>