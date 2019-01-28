import data1 from '../page1/src/data.json';
import data2 from '../page2/src/data.json';
import data3 from '../page3/src/data.json';
import data4 from '../page4/src/data.json';
import data5 from '../page5/src/data.json';
import './author.css';

function route(index) {
  const mass = [];
  mass.push(data1);
  mass.push(data2);
  mass.push(data3);
  mass.push(data4);
  mass.push(data5);

  return mass[index];
}

function saveLanguage(lang) {
  const serialObj = JSON.stringify(lang);
  localStorage.setItem('Culture-Portal', serialObj);
}

function changeSite(lang) {
  let local;
  const str = window.location.href;
  const numb = str.search('page');
  const index = str[numb + 4];

  const data = route(index - 1);

  Object.keys(data).forEach((key) => {
    if (key === lang) {
      local = data[key];
    }
  });
  let temp;
  Object.keys(local).forEach((key) => {
    temp = document.getElementById(key);
    temp.innerHTML = local[key];
  });
}

function changeLang(lang) {
  if (lang !== 'ru' && lang !== 'en' && lang !== 'by') {
    saveLanguage('ru');
    return;
  }
  const languageSite = JSON.parse(localStorage.getItem('Culture-Portal'));
  if (languageSite !== lang) {
    saveLanguage(lang);
    changeSite(lang);
  }
}

function checkLanguage() {
  let languageSite = JSON.parse(localStorage.getItem('Culture-Portal'));
  if (languageSite === null) {
    saveLanguage('ru');
    languageSite = 'ru';
  }
  return languageSite;
}

function initAHref() {
  let link;
  const str = window.location.href;
  const numb = str.search('page');
  const index = str[numb + 4];
  const data = route(index - 1);

  Object.keys(data).forEach((key) => {
    if (key === 'a-href') {
      link = data[key];
    }
  });

  let temp;
  Object.keys(link).forEach((key) => {
    temp = document.getElementById(key);
    temp.href = link[key];
  });
}

function initSrc() {
  let link;
  const str = window.location.href;
  const numb = str.search('page');
  const index = str[numb + 4];
  const data = route(index - 1);

  Object.keys(data).forEach((key) => {
    if (key === 'src') {
      link = data[key];
    }
  });

  let temp;
  Object.keys(link).forEach((key) => {
    temp = document.getElementById(key);
    temp.src = link[key];
  });
}

function init() {
  const startLang = checkLanguage();
  changeSite(startLang);
  initAHref();
  initSrc();
  route();

  document.getElementsByClassName('main__lang-buttons')[0].addEventListener('click', (event) => {
    event.preventDefault();
    changeLang(event.target.dataset.lang);
  });
}

window.onload = () => {
  init();
};
