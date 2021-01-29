import mealsImg from './img/meals.jpg';

const loadMeals = () => {
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
  const img = document.createElement('img');
  img.className = 'meals-img';
  img.src = mealsImg;
  p.className = 'welcome-text';

  h1.textContent = 'Our Meals';
  p.textContent = 'We have all kind of meals. Pizza, sandwiches, pasta, ice cream, and tomato flowers.';

  content.append(main);
  main.append(welcomeClass);
  welcomeClass.append(h1, welcomeContentClass);
  welcomeContentClass.append(p, img);

  return content;
};

export default loadMeals;
