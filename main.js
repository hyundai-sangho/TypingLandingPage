// 다이나믹한 문자를 보여줄 id가 dynamic인 p태그 가져오기
let target = document.querySelector('#dynamic');

// ---------------- 함수 호출 ----------------------
// dynamic 함수를 실행하는데 인수로는 
// randomString() 함수의 반환값을 넣어준다.
dynamic(randomString());

// setInterval 함수로 0.5초마다 blink 함수 호출
setInterval(blink, 500)
// ---------------- 함수 호출 ----------------------

// stringArr 배열의 5개의 문자열 중에 
// 랜덤으로 값을 빼와서 반환하는 함수
function randomString() {
  let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to JavaScript", "Learn to Python", "Learn to Ruby"];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");

  return selectStringArr;
}

//  화면에 문자가 타이핑 치듯이 나온 뒤 
//  3초 뒤에 문자 초기화 후 다시 타이핑 시작
function resetTyping() {
  target.textContent = "";

  dynamic(randomString());
}

function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80)
  } else {
    setTimeout(resetTyping, 3000)
  }
}

// 워드에서 글자 입력할 때 커서가 깜박이는 것처럼 보이기 위한 함수
function blink() {
  // 0.5초마다 toggle함수가 active 클래스를 넣었다 뺏다 하면서
  // 시각적으로 커서가 깜박이는 효과를 준다.
  target.classList.toggle('active')
}


