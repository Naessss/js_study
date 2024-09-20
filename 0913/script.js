// js는 산술연산은 안전함
// java나 python의 경우는 잘못연산을 하면 
// 에러를 출력하면서 프로그램이 종료
// 하지만 js는 안그럼
console.log(10 / 0);
console.log(typeof Infinity) // 특수 숫자 값

console.log("asds" / 20);
console.log(typeof(NaN))

let msg = "js";

console.log("hello" + msg)
console.log('hello' + msg)
console.log(`hello ${msg}`)

// java에서 NULL은 참조대상 없음
// js에서 비어있다, 알 수 없음
let a = null; 

// undefined : 할당하지 않음
let b;
console.log(b);


// 알림창 - (모달)
// alert('aaa')
// console.log('alert실행 후')
// console.log("================")
// let bb = prompt('나이를 입력하세요', 20);
// // Number(aa) : 숫자형 변환
// console.log(bb)
// console.log(typeof bb)

// console.log("================")

// let bbb = confirm('예 아니오')
// console.log(bbb)

// 자료형 변환
// String(11) : 문자로 변환
// Number("11") : 숫자로 변환
console.log("11" - "2");
console.log(typeof("11" - "2"));
console.log( Number("asddasd") );
let n;
console.log( Number(n) );
console.log( Number(null) );
console.log( Number(true) );
console.log( Number(false) );

// Boolean(1) : 불린형 변환
console.log(Boolean(" "));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));


console.log("==============")
// 논리연산자 - &&, ||, !
console.log(1 == "1"); // 타입 구분 없이 비교
console.log(1 === "1"); // 타입 구분해서 비교(엄격버전)

console.log(1 != "1");
console.log(1 !== "1");

// 조건문
// if (조건식) {
//   참일때
// } else if(조건식2) {
//   조건식2 참
// } else {
//   모두 거짓
// }

// 프롬프트로 나이를 입력받아서 
// 20이상이면 성인, 아니면 청소년으로 콘솔에 출력
// let age = Number( prompt('나이를 입력하세요') );
// if(isNaN(age)) {
//   console.log("숫자입력하셈")
// } else if(age>=20) {
//   console.log("성인");
// } else {
//   console.log("청소년");
// }

// let result = age >= 20 ? "성인" : "청소년";


// switch~case문 (대신 자료형 일치해야함)
// switch(a) {
//   case 1:

//     break;
//   case 2: 

//     break;
//   default:
// }


// 반복문
// while(조건식) {
//   반복실행할코드
// }

// for(초기값; 조건식; 증감식) {
//   반복실행할코드
// }

for(i=1; i<=10; i++){
  console.log(i);
}
