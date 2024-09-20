let list = localStorage.getItem('name');
list = JSON.parse(list);

list.forEach((data) => {
  $('.list').append(`<div>${data.name} : ${data.cnt}</div>`);
});
