document.addEventListener("DOMContentLoaded", function () {
  // Product array
  const products = [
    { name: "Product A" },
    { name: "Product B" },
    { name: "Product C" },
    { name: "Product D" },
  ];

  // Populate select element
  const selectElement = document.getElementById("product-name");
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    selectElement.appendChild(option);
  });

  // Theme toggle functionality
  const toggleSwitch = document.getElementById("theme-toggle");
  const body = document.body;
  const theme = document.getElementById("theme");
  const form = document.querySelector("form")

  // Check for saved theme preference
  if (localStorage.getItem("dark-mode") === "true") {
    body.classList.add("dark-mode");
    toggleSwitch.checked = true;
  }

  // Toggle theme on switch change
  toggleSwitch.addEventListener("change", function () {
    body.classList.toggle("dark-mode");
    if (body.classList[0] === "dark-mode") {
        theme.textContent = "Light Mode";
        form.style.border = "2px solid white";
    } else {
      theme.textContent = "Dark Mode";
      form.style.border = "2px solid black";
    }

    // Save preference to localStorage
    localStorage.setItem("dark-mode", body.classList.contains("dark-mode"));
  });
});
