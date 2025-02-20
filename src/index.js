import './styles.css';

const dropDownButton = document.querySelector('.btn');
const dropDownMenu = document.querySelector('.drop-down');

function toggleDropDown() {
  dropDownMenu.classList.toggle('show');
}

dropDownButton.addEventListener('click', () => {
  toggleDropDown();
});
