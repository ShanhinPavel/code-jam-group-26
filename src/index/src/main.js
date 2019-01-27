import data from './data';
import '../../template/index.css';
import arrayOfAuthors from './arrayOfAuthors';
import shortInformation from './shortInformation.json';

console.log('hello, Page1', data.name);
console.log('hello, Page1', data.author);

document.addEventListener('DOMContentLoaded', (event) => {
    addAuthorToPage(arrayOfAuthors, shortInformation);
});

function addAuthorToPage(authorsCollection, data) {
	// Get authors by language
	const sitesLanguage = JSON.parse(localStorage.getItem("Culture-Portal"));
    const authorCollectionByLanguage = data[sitesLanguage];
    // Define current date and get number of a day from 0 to 6
    const date = new Date();
    const day = date.getDay();
	// Get author from array
	if (!authorsCollection[day]) {
		day = Math.floor(Math.random() * 5);
	}
	const author = authorsCollection[day];
	// Get author from json
	const authorData = shortInformation[author];
    // Get dom elements and add information to them
    const authorInformation = document.getElementById('author-information');
    const authorName = authorInformation.firstElementChild;
    const authorInformation = authorName.nextElementSibling;
	// Add information to page
    authorName.textContent = `${authorData['fullName']}(${authorData['alias']}, ${authorData['years']})`;
    authorInformation.textContent = authorData['description'];
}