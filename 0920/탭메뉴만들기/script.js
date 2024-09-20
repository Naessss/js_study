// const tabBtns = document.querySelectorAll('.tab-button');
// const tabContents = document.querySelectorAll('.tab-content');

// for(let i=0; i<tabBtns.length; i++) {
//   tabBtns[i].addEventListener('click', () => {
//     for(let i=0; i<tabBtns.length; i++) {
//       tabBtns[i].classList.remove('select');
//       tabContents[i].classList.remove('show');
//     }

//     tabBtns[i].classList.add('select');
//     tabContents[i].classList.add('show');
//   })
// }

// const tabBtns = $('.tab-button');
// const tabContents = $('.tab-content');

// $(tabBtns).on('click', (e) => {
//   $(tabBtns).removeClass('select');
//   $(tabContents).removeClass('show');
  
//   let i = e.target.dataset.num;
//   $(tabBtns).eq(i).addClass('select');
//   $(tabContents).eq(i).addClass('show');
// })


const tabBtns = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const tabBtnBox = document.querySelector('.list');

tabBtnBox.addEventListener('click', (e) => {
  
  let i = e.target.dataset.num;

  removeClass();
  tabBtns[i].classList.add('select');
  tabContents[i].classList.add('show');
})

function removeClass() {
  for(let i=0; i<tabBtns.length; i++) {
    tabBtns[i].classList.remove('select');
    tabContents[i].classList.remove('show');
  }
}
