import loadIndex from './loadIndex';
import loadAboutUs from './loadAboutUs';
import loadMeals from './loadMeals';
import loadContactUs from './loadContactUs';
import header from './_header';
import footer from './_footer';
import './style.css';

// Index default load
const body = document.querySelector('body');
const mainDiv = document.querySelector('#content');
body.prepend(header);
mainDiv.appendChild(loadIndex());
body.append(footer);

// Functions for menus
const goToIndex = () => {
  mainDiv.textContent = '';
  mainDiv.appendChild(loadIndex());
};

const goToAbout = () => {
  mainDiv.textContent = '';
  mainDiv.appendChild(loadAboutUs());
};

const goToMeals = () => {
  mainDiv.textContent = '';
  mainDiv.appendChild(loadMeals());
};

const goToContactUs = () => {
  mainDiv.textContent = '';
  mainDiv.appendChild(loadContactUs());
};

// Event listener for header nav
const btnHome = document.querySelector('li:first-of-type');
btnHome.addEventListener('click', goToIndex);

const btnAboutUs = document.querySelector('li:nth-of-type(2)');
btnAboutUs.addEventListener('click', goToAbout);

const btnOurMeals = document.querySelector('li:nth-of-type(3)');
btnOurMeals.addEventListener('click', goToMeals);

const btnContactUs = document.querySelector('li:last-of-type');
btnContactUs.addEventListener('click', goToContactUs);
