'use strict'

let fruits = ['Banana', 'Apple', 'Orange', 'Lemon'];
let div = document.getElementById('list');
let ol = document.createElement('ol');
div.appendChild(ol);

fruits.forEach(function(item) {
  let li = document.createElement('li');
  if (item == 'Apple') {
    li.innerHTML = `<span class="text-primary">Only</span> ${item}`;
  } else {
    li.innerHTML = item;
  }
  ol.appendChild(li);
});