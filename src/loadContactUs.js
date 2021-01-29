function loadContactUs() {
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
  img.className = 'contact-img';
  img.src = './img/pidgeon.jpg';

  h1.textContent = 'Contact Us';
  p.textContent = 'You can scream out loud with our name, phone us or send a pidgeon with your order.';

  content.append(main);
  main.append(welcomeClass);
  welcomeClass.append(h1, welcomeContentClass);
  welcomeContentClass.append(p, img);

  return content;
}

module.exports = loadContactUs();
