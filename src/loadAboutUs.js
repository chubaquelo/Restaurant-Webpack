import aboutImg from "./img/about-us.jpg";
const loadAboutUs = () => {
  const mainDiv = document.querySelector('#content');
  mainDiv.textContent = '';
  const content = document.createElement('div');
  const main = document.createElement('main');
  const welcomeClass = document.createElement('div');
  welcomeClass.className = 'welcome';
  const h1 = document.createElement('h1');
  const welcomeContentClass = document.createElement('div');
  welcomeContentClass.className = 'welcome-content-second';
  const p = document.createElement('p');
  p.className = 'welcome-text';
  const img = document.createElement('img');
  img.className = 'about-img';
  img.src = aboutImg;

  h1.textContent = 'About Us';
  p.textContent = 'We are the oldest restaurant on earth. We cook from rats to caviar, just ask.';

  content.append(main);
  main.append(welcomeClass);
  welcomeClass.append(h1, welcomeContentClass);
  welcomeContentClass.append(p, img);

  return content;
}

export default loadAboutUs;
