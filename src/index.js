import loadIndex from './loadIndex.js';
import loadAboutUs from "./loadAboutUs.js";
import loadMeals from "./loadMeals";
import loadContactUs from "./loadContactUs";

// Assigning foreign methods to variables.
const indexContent = loadIndex();
const aboutUsContent = loadAboutUs();
const mealsContent = loadMeals();
const contactUsContent = loadContactUs();

// Index default load
const mainDiv = document.querySelector("#content");
mainDiv.appendChild(indexContent);

// Functions for menus
const goToHome = () => {
  mainDiv.textContent = "";
  mainDiv.appendChild(indexContent);
  addMenuListeners();
}

const goToAbout = () => {
  mainDiv.textContent = "";
  mainDiv.appendChild(aboutUsContent);
  addMenuListeners();
}

const goToMeals = () => {
  mainDiv.textContent = "";
  mainDiv.appendChild(mealsContent);
  addMenuListeners();
};

const goToContactUs = () => {
  mainDiv.textContent = "";
  mainDiv.appendChild(contactUsContent);
  addMenuListeners();
}

// Event listener for header nav 
const addMenuListeners = () => {
  const btnHome = document.querySelector("li:first-of-type");
  btnHome.addEventListener("click", goToHome);

  const btnAboutUs = document.querySelector("li:nth-of-type(2)");
  btnAboutUs.addEventListener("click", goToAbout);

  const btnOurMeals = document.querySelector("li:nth-of-type(3)");
  btnOurMeals.addEventListener("click", goToMeals);

  const btnContactUs = document.querySelector("li:last-of-type");
  btnContactUs.addEventListener("click", goToContactUs);
}

addMenuListeners();