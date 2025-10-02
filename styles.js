const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

if (localStorage.getItem("theme")) {
  root.setAttribute("data-theme", localStorage.getItem("theme"));
}

toggleBtn.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  
  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});
