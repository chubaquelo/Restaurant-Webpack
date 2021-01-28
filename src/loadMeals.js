export default function loadMeals() {
  const mainDiv = document.querySelector("#content");
  mainDiv.textContent = "";
  const content = document.createElement("div");
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const li4 = document.createElement("li");
  const main = document.createElement("main");
  const welcomeClass = document.createElement("div");
  welcomeClass.className = "welcome";
  const h1 = document.createElement("h1");
  const welcomeContentClass = document.createElement("div");
  welcomeContentClass.className = "welcome-content-second";
  const p = document.createElement("p");
  const img = document.createElement("img");
  img.className = "meals-img";
  img.src = "./img/meals.jpg";
  p.className = "welcome-text";
  const footer = document.createElement("footer");

  li1.textContent = 'Home';
  li2.textContent = "About Us";
  li3.textContent = "Our Meals";
  li4.textContent = "Contact Us";
  h1.textContent = "Our Meals";
  p.textContent = "We have all kind of meals. Pizza, sandwiches, pasta, ice cream, and tomato flowers.";
  footer.textContent = "Copyrighted® Meals and Restaurant 2021 - Do not copy our recipes.";

  content.append(header, main, footer);
  header.append(nav);
  nav.append(ul);
  ul.append(li1, li2, li3, li4);
  main.append(welcomeClass);
  welcomeClass.append(h1, welcomeContentClass);
  welcomeContentClass.append(p, img);
  
  return content;
};
