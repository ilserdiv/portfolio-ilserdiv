// Theme toggle (existing)
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

// Border alternation based on first heading level (new)
function alternateBorders() {
  const containers = document.querySelectorAll('section, article');
  
  containers.forEach(container => {
    const firstHeading = container.querySelector('h1, h2, h3, h4, h5, h6');
    if (firstHeading) {
      const level = parseInt(firstHeading.tagName.charAt(1));
      const isOdd = level % 2 === 1;
      container.style.borderStyle = isOdd ? 'dashed' : 'solid';
    }
  });
}

// Run on load (and re-run on theme toggle if needed)
document.addEventListener('DOMContentLoaded', alternateBorders);
toggleBtn.addEventListener('click', alternateBorders); // Re-apply if theme affects borders