function loadIndex() {
  const content = document.createElement("div");
  const main = document.createElement("main");
  const welcomeClass = document.createElement("div");
  welcomeClass.className = "welcome";
  const h1 = document.createElement("h1");
  const welcomeContentClass = document.createElement("div");
  welcomeContentClass.className = 'welcome-content'
  const img = document.createElement("img");
  img.src = "./img/restaurant.jpg";
  const p = document.createElement("p");
  p.className = "welcome-text";

  h1.textContent = "Welcome to Microrestaurant!";
  p.textContent = "Welcome to our restaurant. We are pleased to receive you and we are commited to treat you as our most important friend in here. Our meals will deloit you.";

  content.append(main);
  main.append(welcomeClass);
  welcomeClass.append(h1, welcomeContentClass);
  welcomeContentClass.append(img, p);
  
  return content;
};

module.exports = loadIndex();
