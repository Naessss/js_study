let user = {
  name: 'hong',
  age : 20
};

user.hello = function() {
  console.log('hello');
};

user.hello();

function hi() {
  console.log('hi');
}

user.hello = hi;
user.hello();

user = {
  name: 'hong',
  msg() {
    console.log(this.name);
  },
  age : 20,
};

let kim = user;
user = null;

kim.msg();



kim = {
  name: 'kim',
  age: 20
}

let park = {
  name: 'park',
  age: 30
}

function himsg() {
  console.log(this.name + "님 안녕하세요");
}

kim.fn = himsg;
park.fn = himsg;

kim.fn();
park.fn();

// new, 생성자
// 함수명 첫글자가 대문자
// 생성할땐 new 키워드로 생성

function createUser(name, age) {
  let user = {
    name,
    age
  }

  return user;
}

function User(name, age) {
  this.name = name;
  this.age = age;

  this.hi = function() {
    console.log(`${this.name} 안녕`);
  }
}

let lee = new User('lee', 40);
console.log(lee)

// DOM
// JS는 HTML의 요소와 속성 추가, 수정, 삭제 가능
// CSS 추가, 수정, 삭제 가능
// 이벤트 추가 수정 삭제


// document.body.style.background = 'red';

