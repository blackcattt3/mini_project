// 1~100까지의 숫자중 하나의 난수 발생
// 기회는 총 다섯번
// 결과창에 1)up, down, 1~100까지의 숫자를 입력해주세요
// 리셋버튼
// 배열안에 숫자 저장하면서 만약 배열안에 이미 배열안에 있던 숫자면 "이미 입력한 값입니다" 출력

let answerVal = Math.floor(Math.random()*100 + 1);
let inputVal = document.getElementById("input-value");
let chanceShow = document.getElementById("left-chance");
let submitBtn = document.getElementById("submit-btn");
let resultShow = document.getElementById("result");
let resetBtn = document.getElementById("reset-btn");
let chance = 5;
let items = [];

submitBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);

function play(){
    // let inputVal = document.getElementById("input-value");
    let inputValNum = Number(inputVal.value);

    if(inputValNum < 1 || inputValNum > 100){
        resultShow.innerHTML = "1부터 100까지 숫자를 입력하세요";
        return;
    }

    if(inputValNum>answerVal){
        resultShow.innerHTML = "DOWN!";
        chance -= 1;
        chanceShow.innerHTML = `남은 기회 : ${chance}`;
        inputVal.select();
    } else if(inputValNum<answerVal){
        resultShow.innerHTML = "UP!";
        chance -= 1;
        chanceShow.innerHTML = `남은 기회 : ${chance}`
        inputVal.select();
    } else if(inputValNum == answerVal){
        resultShow.innerHTML = "정답입니다!";
    }

    if(chance==0){
        resultShow.innerHTML = `Game Over.. 정답은 ${answerVal}였습니다!`
    }
}

function reset(){
    chance = 5;
    inputVal.value = "";
    chanceShow.innerHTML = "게임을 시작합니다!";
    resultShow.innerHTML = "결과가 표시됩니다!";
}

function addNum(a){
    if(items.includes(a)){
        resultShow.innerHTML = "이미 입력한 값입니다.";
    } else{
        items.push(a);
    }
}

hello
