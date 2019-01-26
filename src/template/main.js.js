
const searchButton = document.querySelector('.main__search-button');

  searchButton.addEventListener('click', (event) => {
    const textField = document.querySelector('.main__search [type="text"]');
    const checkedRadio = document.querySelector('.main__search [type="radio"]:checked');

    console.log(textField.value);
    console.log(checkedRadio.value);

    // Do something
  });