function header() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');

  li1.textContent = 'Home';
  li2.textContent = 'About Us';
  li3.textContent = 'Our Meals';
  li4.textContent = 'Contact Us';

  header.append(nav);
  nav.append(ul);
  ul.append(li1, li2, li3, li4);

  return header;
}

module.exports = header();