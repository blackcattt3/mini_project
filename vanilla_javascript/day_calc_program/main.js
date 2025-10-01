var start_btn = document.getElementById("number_btn");
start_btn.addEventListener("click", start);


function start(){
    var now = new Date();
    var first = new Date(prompt("YYYY-MM-DD"));

    var toNow = now.getTime();      // 밀리초로 가져옴
    var toFirst = first.getTime();

    // 만난지 며칠째
    var passedTime = toNow - toFirst;
    var passedDays = Math.round(passedTime / (1000*60*60*24));  // 정수 내림
    document.getElementById("days").innerHTML = `${passedDays}일 째`


    //디데이 계산
    function calc(day){
        var d_day = toFirst + (1000*60*60*24*`${day}`);
        var d_day = new Date(d_day);
        var Year = d_day.getFullYear();
        var Month = d_day.getMonth()+1;     // 주의!
        var Day = d_day.getDate();
        document.getElementById(`d_${day}`).innerHTML = `${Year}-${Month}-${Day}`;
    }
    calc(100);
    calc(200);
    calc(365);
    calc(500);
}



// 버튼을 누른다
// 프롬프트가 뜬다
// 날짜를 입력한다
// 계산이 된다.