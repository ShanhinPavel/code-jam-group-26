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

function drawSearchResult(name, surname, link) {
  const results = document.getElementById('searchResults');
  const fullLink = `<li>${link}${name} ${surname}</a></li>`;
  results.insertAdjacentHTML('afterbegin', fullLink);
}

function clearResults() {
  const results = document.getElementById('searchResults');
  results.innerHTML = '';
}

function nameSearch(language) {
  clearResults();
  const namesAndLinks = Object.entries(names[language]);
  const searchQuery = document.getElementById('searchInput').value;
  const queryToLowCase = searchQuery.toLowerCase();
  for (let i = 0; i < 5; i += 1) {
    const namesArr = Object.entries(Object.entries(namesAndLinks)[i][1][1]);
    const nameProps = namesArr[0][1];
    const propToLowCase = nameProps.toLowerCase();
    if (propToLowCase === queryToLowCase) {
      const name = namesArr[0][1];
      const surname = namesArr[1][1];
      const link = namesArr[3][1];
      drawSearchResult(name, surname, link);
    }
  }
}

function surnameSearch(language) {
  clearResults();
  const namesAndLinks = Object.entries(names[language]);
  const searchQuery = document.getElementById('searchInput').value;
  const queryToLowCase = searchQuery.toLowerCase();
  for (let i = 0; i < 5; i += 1) {
    const namesArr = Object.entries(Object.entries(namesAndLinks)[i][1][1]);
    const nameProps = namesArr[1][1];
    const propToLowCase = nameProps.toLowerCase();
    if (propToLowCase === queryToLowCase) {
      const name = namesArr[0][1];
      const surname = namesArr[1][1];
      const link = namesArr[3][1];
      drawSearchResult(name, surname, link);
    }
  }
}

function citySearch(language) {
  clearResults();
  const namesAndLinks = Object.entries(names[language]);
  const searchQuery = document.getElementById('searchInput').value;
  const queryToLowCase = searchQuery.toLowerCase();
  for (let i = 0; i < 5; i += 1) {
    const namesArr = Object.entries(Object.entries(namesAndLinks)[i][1][1]);
    const nameProps = namesArr[2][1];
    const propToLowCase = nameProps.toLowerCase();
    if (propToLowCase === queryToLowCase) {
      const name = namesArr[0][1];
      const surname = namesArr[1][1];
      const link = namesArr[3][1];
      drawSearchResult(name, surname, link);
    }
  }
}

function getSearchParam() {
  const nameRadio = document.getElementById('name');
  const surnameRadio = document.getElementById('surname');
  const city = document.getElementById('city');
  if (nameRadio.checked) {
    return ('name');
  } if (surnameRadio.checked) {
    return ('surname');
  } if (city.checked) {
    return ('city');
  }
}

function checkName(language) {
  const currentSearchParam = getSearchParam();
  if (currentSearchParam === 'name') {
    nameSearch(language);
  } else if (currentSearchParam === 'surname') {
    surnameSearch(language);
  } else {
    citySearch(language);
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
