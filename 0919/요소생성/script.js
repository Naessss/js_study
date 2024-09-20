// div태그 생성
let divTag = document.createElement('div');
let textNode = document.createTextNode('텍스트노드임');

divTag.className = 'alert';
divTag.innerHTML = '<b>강조</b>생성된 div태그임';

// append : 맨뒤에 추가
// prepend : 맨앞에 추가
// before : 이전에 추가
// after : 이후에 추가
document.body.append(divTag);

const ol = document.querySelector('#ol');

ol.before('이전');
ol.after('이후');

const liTag = document.createElement('li');
liTag.innerHTML = 'prepend';
ol.prepend(liTag);

const liTag2 = document.createElement('li');
liTag2.innerHTML = 'append';
ol.append(liTag2);


const div = document.querySelector('#div');

// beforebegin : 해당 태그 앞에
// afterbegin : 해당 태그 첫번째 자식
// beforeend : 해당 태그 마지막 자식
// afterend : 해당 태그 뒤에
div.insertAdjacentHTML('beforebegin', '<p>앞에</p>');
div.insertAdjacentHTML('afterbegin', '<p>해당 태그 첫번째 자식</p>');
div.insertAdjacentHTML('beforeend', '<p>해당 태그 마지막 자식</p>');
div.insertAdjacentHTML('afterend', '<p>해당 태그 뒤에</p>');


// 태그 지우기
setTimeout(() => {
  divTag.remove();
}, 3000);

// 이동
// 태그 삽입 함수들은 기본적으로 기존 태그를 삭제한 후
// 해당 위치로 넣음
second.after(first);

// 태그 복사
// true : 자손들까지 복사가 됨
// false : 해당 태그만 복사가 됨
const ol2 = ol.cloneNode(true);
document.body.append(ol2);

