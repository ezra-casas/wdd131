const temperature = parseFloat(
  document.getElementById("temperature").textContent
);
const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);
const unit = document
  .querySelector("#weather")
  .children[2].textContent.split(" ")[2]
  .split("")[1];

function calculateWindChill(t, s) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(s, 0.16) +
    0.3965 * t * Math.pow(s, 0.16)
  );
}

function displayWindChill() {
  let result = "N/A";
  switch (unit.toLowerCase()) {
    case "c":
      console.log("Pass");
      if (temperature <= 10 && windSpeed > 4.8) {
        result = Math.round(calculateWindChill(temperature, windSpeed));
      }
      document.getElementById("windChill").textContent = result;
      break;
    case "f":
      if (temperature <= 50 && windSpeed > 3) {
        result = Math.round(calculateWindChill(temperature, windSpeed));
      }
      document.getElementById("windChill").textContent = result;
    default:
      break;
  }
}
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

function updateFooter() {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastmodified").textContent = document.lastModified;
}

displayWindChill();
