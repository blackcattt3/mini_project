let numberBtn = document.querySelectorAll(".number-btn");
let symbolBtn = document.querySelectorAll(".symbol-btn");
let resultBtn = document.querySelector(".result-btn");
let cBtn = document.querySelector(".c-btn");
let number = '';
let symbol = ''
let firstNum = 0;
let secondNum = 0;
let resultNum = 0;
let NumList = []
let accumulateList = [];

// 숫자 누른것들 문자열->숫자로 바꾸기
const makeNumber = (num)=>{
    number += num;
    number = Number(number);
    pushNumberToList(number);
}

// 누른 순서대로 숫자만들고, 기호포함 리스트에 다 담기
const pushNumberToList = (num) =>{
    NumList.push(num);
    console.log(NumList);
    // console.log(NumList[NumList.length-1]);      // 마지막 원소
    if(num == '+' || num == '-' || num == 'X' || num == '/'){
        number = ''
    }
}

// 기호 인덱스, firstNum, SecondNum 구하기
const decideNumber = ()=>{
    index = NumList.findIndex((item)=>{return item=="+" || item=="-" || item=="X" || item=="/"})
    // console.log(index);
    firstNum = NumList[index-1];
    secondNum = NumList[NumList.length-1];
    // console.log("f", firstNum, "s",secondNum);
}

// 계산
const calculate = ()=>{
    
    symbol = NumList[index]     // +,-,X,/
    if(symbol == '+'){
        resultNum = firstNum + secondNum;
    }
    else if(symbol == '-'){
        resultNum = firstNum - secondNum;
    } else if(symbol == 'X'){
        resultNum = firstNum * secondNum;
    } else if(symbol == '/'){
        resultNum = firstNum / secondNum;
    }
    // console.log('result', resultNum);

    NumList = [];
    NumList.push(resultNum);
    console.log(resultNum);
    // 누적해서 계산하기 위해 배열 초기화
    // NumList = [];
}

// 이미 NumList에 symbol을 가지고 있을 경우 실행하기
const symbolClickCalculate = ()=>{
    // index = NumList.findIndex((item)=>{return item=="+" || item=="-" || item=="X" || item=="/"})
    // firstNum = NumList[index-1];
    // // console.log('first', firstNum);
    // accumulateList.push(firstNum);
    
    // console.log(accumulateList);
    // NumList = [];
    if(NumList.includes('+')){
        decideNumber()
        console.log('firstNum', 'secondNum', firstNum, secondNum);
    }

}


// C버튼 눌렀을때 상태 초기화
const allReset = ()=>{
    NumList = [];
    number = '';
    console.log("f,s",firstNum,secondNum,NumList);
}

numberBtn.forEach((btn)=>btn.addEventListener("click", (btn)=>makeNumber(btn.target.textContent)));
symbolBtn.forEach((btn)=>btn.addEventListener("click", (btn)=>pushNumberToList(btn.target.textContent)));
// symbolBtn.forEach((btn)=>btn.addEventListener("click", symbolClickCalculate));
resultBtn.addEventListener("click", ()=>{decideNumber();calculate()});
cBtn.addEventListener("click", allReset);

// 덧셈
// 뺄셈
// 곱셈
// 니눗셈


// 덧셈기호 눌리면 firstNum = firstNumList.pop()
// firstNum 초기화, makeNumber 함수 실행
// secondNum = firstNumList.pop()
//  = 눌리면 fistNum + secondNum


// 배열에 다 담기 [1,12,123,+,4,45,456]
// 이때 symbol이 클릭되면 num = ''로 초기화,
// for문으로 돌다가 i == '+' || i == '-',,,
// firstNum = item[i-1], secondNum = item[item.length-1]
// = 누르면 if (i == '+'){resultNum = firstNum + secondNum      return resultNum};
// 이때 num = '', NumList = [], NumList[0] = resultNum, index = ''

// symbolBtn을 누르면  [1, '+'] firstNum + secondNum(0)
// firstNum = NumList[index-1;
// NumList = [], NumList.push(firstNum);

