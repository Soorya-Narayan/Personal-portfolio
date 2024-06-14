document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
  
    if (currentTheme === "dark") {
      themeToggle.innerHTML = '<i class="ri-moon-line"></i>';
    } else {
      themeToggle.innerHTML = '<i class="ri-sun-line"></i>';
    }
  
    themeToggle.addEventListener("click", () => {
      const theme = document.documentElement.getAttribute("data-theme");
      if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        themeToggle.innerHTML = '<i class="ri-sun-line"></i>';
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        themeToggle.innerHTML = '<i class="ri-moon-line"></i>';
      }
    });
  });
  
