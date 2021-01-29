function footer() {
  const footer = document.createElement("footer");
  footer.textContent = "Copyrighted® Meals and Restaurant 2021 - Do not copy our recipes.";
  content.append(footer);
  return footer;
};

module.exports = footer();
