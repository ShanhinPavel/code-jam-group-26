import data from './data';
import '../../template/list.css';
import names from './authors';

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

function init() {
  const startLang = checkLanguage();
  changeSite(startLang);
  initAHref();
  document.getElementsByClassName('lang__button')[0].addEventListener('click', (event) => {
    event.preventDefault();
    changeLang(event.target.dataset.lang);
  });
}

window.onload = () => {
  init();
  initSearch();
};

function initSearch() {
  const searchButton = document.getElementById('searchLang');
  searchButton.addEventListener('click', checkInput);
}

function checkInput() {
  const searchQuery = document.getElementById('searchInput').value;
  const currentLang = JSON.parse(localStorage.getItem('Culture-Portal'));
    for (let i = 0; i < names[currentLang].length; i++) {
      if(names[currentLang][i] == searchQuery){
        drawSearchResult(names[currentLang][i]);
      } else {
        drawSearchResult(null);
      }
    }
  }

  function drawSearchResult(result){
    const results = document.getElementById('searchResults');
    if(result != null){
    results.innerHTML='<li>' + result + '</li>';
  }
  }