import '../../template/index.css';
import shortInformation from './shortInformation.json';
import dataTranslate from './data';

function getAuthor(data) {
  // Get authors by language
  const sitesLanguage = JSON.parse(localStorage.getItem('Culture-Portal'));
  const authorCollectionByLanguage = data[sitesLanguage];
  // Define current date and get number of a day from 0 to 6
  const date = new Date();
  let day = date.getDay();
  // Get author from array
  let author = data.authorsList[day];

  if (!author) {
    day = 4;
  }
  author = data.authorsList[day];
  document.getElementById('day-author').dataset.name = author;
  // Get author from json

  const authorData = authorCollectionByLanguage[author];
  return authorData;
}

function addAuthorToPage(authorData, id) {
  // Get dom elements and add information to them
  const authorInformation = document.getElementById(id);
  const authorName = authorInformation.firstElementChild;
  const authorDescription = authorName.nextElementSibling;
  // Add information to page
  authorName.textContent = `${authorData.fullName}(${authorData.alias}, ${authorData.years})`;
  authorDescription.textContent = authorData.description;
}

function saveLanguage(lang) {
  const serialObj = JSON.stringify(lang);
  localStorage.setItem('Culture-Portal', serialObj);
}

function changeSite(lang) {
  let local;
  Object.keys(dataTranslate).forEach((key) => {
    if (key === lang) {
      local = dataTranslate[key];
    }
  });
  let temp;
  Object.keys(local).forEach((key) => {
    temp = document.getElementById(key);
    temp.innerHTML = local[key];
  });
}

function changeAuthor(lang) {
  const authorData = document.getElementById('day-author').dataset.name;
  const obj = shortInformation[lang][authorData];
  addAuthorToPage(obj, 'day-author');
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
    changeAuthor(lang);
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

function init() {
  const startLang = checkLanguage();
  changeSite(startLang);
  document.getElementsByClassName('main__lang-buttons')[0].addEventListener('click', (event) => {
    event.preventDefault();
    changeLang(event.target.dataset.lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  init();
  const elementId = 'day-author';
  const author = getAuthor(shortInformation);
  addAuthorToPage(author, elementId);
});
