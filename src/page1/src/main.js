import data from './data';
import '../../template/author.css';

function saveLanguage(lang) {
  const serialObj = JSON.stringify(lang);
  localStorage.setItem('Culture-Portal', serialObj);
}

function changeSite(lang) {
  let local;
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
  document.getElementsByClassName('main__lang-buttons')[0].addEventListener('click', (event) => {
    event.preventDefault();
    changeLang(event.target.dataset.lang);
  });
}

window.onload = () => {
  init();
};
