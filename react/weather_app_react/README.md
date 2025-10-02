<h2>🌤날씨앱 만들기 프로젝트 (React + OpenWeather API)</h2>

<h3>📌프로젝트 소개</h3>
실시간 날씨 앱을 React를 사용하여 만들었습니다.<br>
현재 위치를 기반으로 온도와 날씨정보, 날씨 아이콘을 조회할수있고 주요도시들(Seoul, Tokyo, Paris, Iceland, Paris, New york)의 정보도 버튼을 클릭하여 도시별 날씨를 조회 할 수 있습니다.<br>
날씨상태(맑음, 비, 구름, 눈 등)에 따라 배경화면이 동적으로 바뀌며 로딩중에는 화면 중앙에 로딩스피너가 표시됩니다.<br>
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
✅ 기타: React Spinners (로딩 UI)<br>

<br>
<h3>💡개선 가능 포인트</h3>
✅에러 처리 (예: "도시를 찾을 수 없습니다")<br>
✅반응형 디스플레이 (모바일버전)<br>