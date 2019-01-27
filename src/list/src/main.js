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

// SEARCH

function drawSearchResult(name, link) {
  const results = document.getElementById('searchResults');
  results.innerHTML = `<li> ${link} ${name} </a></li>`;
}

function checkName(language) {
  const searchQuery = document.getElementById('searchInput').value;
  const namesAndLinks = Object.entries(names[language]);
  for (let i = 0; i < namesAndLinks.length; i += 1) {
    const nextName = Object.entries(namesAndLinks[i][1]);
    if (nextName[0][0] === searchQuery) {
      const name = nextName[0][0];
      const link = nextName[0][1];
      drawSearchResult(name, link);
    }
  }
}

function checkInput() {
  const currentLang = JSON.parse(localStorage.getItem('Culture-Portal'));
  const languages = Object.entries(names);
  for (let i = 0; i < languages.length; i += 1) {
    if (languages[i][0] === currentLang) {
      checkName(languages[i][0]);
    }
  }
}

function drawAuthor(res, id, name, linkCount) {
  const hrefsObj = Object.entries(data)[0][1];
  const hrefsArr = Object.entries(hrefsObj);
  // console.log(hrefsArr[linkCount][1]);
  const link = hrefsArr[linkCount][1];
  res.insertAdjacentHTML('beforeend', `<li><a href='${link}' id=${id}>${name}</a></li>`);
}

function drawRefresh(lang) {
  const authorNames = Object.entries(data[lang]);
  const resultsWrapper = document.getElementById('searchResults');
  resultsWrapper.innerHTML = '';
  let linkCount = 0;
  for (let i = 2; i < 7; i += 1) {
    const id = authorNames[i][0];
    const name = authorNames[i][1];
    drawAuthor(resultsWrapper, id, name, linkCount);
    linkCount += 1;
  }
}

function refresh() {
  const currentLang = JSON.parse(localStorage.getItem('Culture-Portal'));
  const a = Object.entries(data);
  for (let i = 0; i < a.length; i += 1) {
    if (a[i][0] === currentLang) {
      const lang = a[i][0];
      drawRefresh(lang);
    }
  }
}

function initSearch() {
  const searchButton = document.getElementById('searchLang');
  const refreshButton = document.getElementById('showButton');
  init();
  searchButton.addEventListener('click', checkInput);
  refreshButton.addEventListener('click', refresh);
}

window.onload = () => {
  init();
  initSearch();
};
