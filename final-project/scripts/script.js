//
// Theme Logic
//

// Function to initialize the theme based on localStorage
function initTheme() {
  const themeButton = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark-mode") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = `🔆 Light Mode`;
  } else {
    document.body.classList.remove("dark-mode");
    themeButton.textContent = `🌙 Dark Mode`;
  }
}

// Function to toggle the theme and update localStorage accordingly
function toggleTheme() {
  const themeButton = document.getElementById("theme-toggle");
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = `🔆 Light Mode`;
    localStorage.setItem("theme", "dark-mode");
  } else {
    themeButton.textContent = `🌙 Dark Mode`;
    localStorage.setItem("theme", "light-mode");
  }
}

//
// Hamburger Menu Logic
//

function initHamburgerMenu() {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("main-nav");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      navToggle.classList.toggle("open");
    });
  }
}

//
// Attractions Logic
//

// Function to render a list of featured attractions dynamically
function renderFeaturedAttractions() {
  const attractions = [
    {
      name: "Osaka Castle",
      description:
        "A symbol of Osaka that offers historical insights and panoramic views.",
    },
    {
      name: "Dotonbori",
      description:
        "A bustling district known for its vibrant nightlife and street food.",
    },
    {
      name: "Shitennoji Temple",
      description:
        "One of Japan’s oldest temples, offering a peaceful retreat.",
    },
  ];

  const container = document.getElementById("featured-attractions");
  if (container) {
    // Build the HTML using template literals and array.map()
    container.innerHTML = attractions
      .map((item) => {
        return `<li><strong>${item.name}:</strong> ${item.description}</li>`;
      })
      .join("");
  }
}

//
// Food logic
//
function renderFeaturedFood() {
  const foods = [
    {
      name: "Takoyaki",
      description:
        "Savory octopus-filled dough balls served with takoyaki sauce, bonito flakes, and green onion.",
    },
    {
      name: "Okonomiyaki",
      description:
        "A savory pancake with cabbage, meat, and a delicious tangy sauce, often customized to taste.",
    },
    {
      name: "Kushikatsu",
      description:
        "Deep-fried skewers of meat and vegetables, best enjoyed at traditional Shinsekai eateries.",
    },
    {
      name: "Ramen",
      description:
        "A hearty bowl of noodles served in a rich broth, garnished with pork, green onions, and a soft-boiled egg.",
    },
  ];

  const container = document.getElementById("featured-food");
  if (container) {
    container.innerHTML = foods
      .map((item) => {
        return `<li><strong>${item.name}:</strong> ${item.description}</li>`;
      })
      .join("");
  }
}

//
// DOM Initialization
//

document.addEventListener("DOMContentLoaded", () => {
  // Initialize the theme based on localStorage
  initTheme();

  // Set up the event listener for the theme toggle button
  const themeButton = document.getElementById("theme-toggle");
  if (themeButton) {
    themeButton.addEventListener("click", toggleTheme);
  }

  // Initialize hamburger menu functionality
  initHamburgerMenu();

  // Render featured attractions if the container exists on the page
  renderFeaturedAttractions();
});
