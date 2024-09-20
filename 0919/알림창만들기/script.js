const ab = document.getElementById('ab');

function showHide(value) {
  ab.style.display = value;
}

function showBox(msg) {
  // js문법
  // document.querySelectorAll('.alert-box')[1].style.display = 'block';
  // document.querySelectorAll('.alert-box')[1].innerHTML = msg;

  // jQuery 문법
  $('.alert-box').eq(1).css('display', 'block');
  $('.alert-box').eq(1).html(msg);
  
  // 두개 문법 조합은 불가능함
  // $('.alert-box').eq(1).innerHTML = msg;
}

function closeBox() {
  document.querySelectorAll('.alert-box')[1].style.display = 'none';
}