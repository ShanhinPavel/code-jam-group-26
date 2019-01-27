import '../../template/index.css';
import shortInformation from './shortInformation.json';

function addAuthorToPage(data) {
  // Get authors by language
  const sitesLanguage = JSON.parse(localStorage.getItem('Culture-Portal'));
  const authorCollectionByLanguage = data[sitesLanguage];
  // Define current date and get number of a day from 0 to 6
  const date = new Date();
  let day = date.getDay();
  // Get author from array
  let author = data.authorsList[day];
  if (!author) {
    day = Math.floor(Math.random() * 5);
  }
  author = data.authorsList[day];
  // Get author from json
  const authorData = authorCollectionByLanguage[author];
  // Get dom elements and add information to them
  const authorInformation = document.getElementById('author-information');
  const authorName = authorInformation.firstElementChild;
  const authorDescription = authorName.nextElementSibling;
  // Add information to page
  authorName.textContent = `${authorData.fullName}(${authorData.alias}, ${authorData.years})`;
  authorDescription.textContent = authorData.description;
}


document.addEventListener('DOMContentLoaded', () => {
  addAuthorToPage(shortInformation);
});
