// get year
function getYear() {
  const date = new Date();
  return date.getFullYear();
}

// get last modified date
function getLastModified() {
  const date = document.lastModified;
  return date;
}

// get DOM year
const year_element = document.getElementById("year");
year_element.textContent = "© " + getYear();

// get DOM last modified date
const lastmodified_element = document.getElementById("lastmodified");
lastmodified_element.textContent = "Last modification: " + getLastModified();

// hamburger menu
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");
const time = 150;

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
  hamburger.classList.toggle("rotate")

  // animation
  setTimeout(() => {
    hamburger.innerHTML = nav.classList.contains("show") ? "✕" : "☰";
  }, time);
});
