// Animação dos cards
window.addEventListener("load", () => {
  document.querySelectorAll("article").forEach((article) => {
    article.style.animationPlayState = "running";
  });
});
// Animação de entrada nos articles
window.addEventListener("load", () => {
  document.querySelectorAll("article").forEach((article) => {
    article.style.animationPlayState = "running";
  });
 // Dark-mode
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  const toggleBtn = document.getElementById("toggle-theme");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
