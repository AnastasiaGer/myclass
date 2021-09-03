'use strict';

const btns = Array.from(document.querySelectorAll('.theme-button'));
const carsViewBts = Array.from(document.querySelectorAll('.card-view-button'));
const courses = document.querySelector('.cards');

const buttonThemeHandler = (e) => {
  let theme = e.target.closest('.theme-button').dataset['theme']
  document.documentElement.dataset['themeName'] = theme;
};

const buttonViewHandler = (e) => {
  let view = e.target.closest('.card-view-button').dataset['value']
  carsViewBts.forEach(e => e.classList.remove('active'))
  e.target.closest('.card-view-button').classList.add('active')
  courses.className = "";
  courses.classList.add('cards')
  courses.classList.add(view)
};

const init = () => {
  btns.forEach(btn => btn.addEventListener('click', buttonThemeHandler))
  carsViewBts.forEach(el => el.addEventListener('click', buttonViewHandler))
};

init();