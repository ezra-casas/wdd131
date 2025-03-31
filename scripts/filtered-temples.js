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
  hamburger.classList.toggle("rotate");

  // animation
  setTimeout(() => {
    hamburger.innerHTML = nav.classList.contains("show") ? "✕" : "☰";
  }, time);
});

// get gallery div
const gallery = document.querySelector("#gallery");

// temples array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Tijuana",
    location: "Tijuana, Mexico",
    dedicated: "2012, August, 18",
    area: "33367",
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/tijuana-mexico-temple/tijuana-mexico-temple-14590-main.jpg",
  },
  {
    templeName: "Tokyo",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: "53997",
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg",
  },
  {
    templeName: "Kona Hawaii",
    location: "Kailua Kona, Hawaii",
    dedicated: "1999, March, 13",
    area: "12325",
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/kona-hawaii-temple/kona-hawaii-temple-40578-main.jpg",
  },
];

const oldTemples = document.querySelector("#old");
const newTemples = document.querySelector("#new");
const largeTemples = document.querySelector("#large");
const smallTemples = document.querySelector("#small");
const homeTemples = document.querySelector("#home");

homeTemples.addEventListener("click", () => {
  createCards(temples);
});

oldTemples.addEventListener("click", () => {
  let oldTemples = temples.filter(
    (temple) => temple.dedicated.split(",")[0].trim() <= 1900,
  );
  createCards(oldTemples);
});

newTemples.addEventListener("click", () => {
  let newTemples = temples.filter(
    (temple) => temple.dedicated.split(",")[0].trim() > 2000,
  );
  createCards(newTemples);
});

largeTemples.addEventListener("click", () => {
  let largeTemples = temples.filter((temple) => temple.area > 90000);
  createCards(largeTemples);
});

smallTemples.addEventListener("click", () => {
  let smallTemples = temples.filter((temple) => temple.area <= 10000);
  createCards(smallTemples);
});

// create gallery
function createCards(filteredTemples) {
  // start fresh on each call
  gallery.innerHTML = "";

  filteredTemples.forEach((temple) => {
    // create elements:
    const card = document.createElement("div");
    const childImg = document.createElement("img");
    const childCaption = document.createElement("figcaption");

    const childDiv = document.createElement("div");
    const childH3 = document.createElement("h3");
    const childLocation = document.createElement("p");
    const childDedicated = document.createElement("p");
    const childSize = document.createElement("p");
    const grandChildDiv = document.createElement("div");

    // add text to childCaption
    childCaption.ariaDescription = temple.templeName;

    // add elements to childDiv
    childH3.textContent = temple.templeName;
    childDiv.append(childH3);

    childLocation.textContent = "Location: " + temple.location;
    childDedicated.textContent = "Dedicated: " + temple.dedicated;
    childSize.textContent = "Size: " + temple.area + " sq ft";

    // append to grandChildDiv
    grandChildDiv.append(childLocation);
    grandChildDiv.append(childDedicated);
    grandChildDiv.append(childSize);

    // append to childDiv
    childDiv.append(grandChildDiv);

    // add image source to childImg
    childImg.src = temple.imageUrl;
    childImg.alt = temple.templeName;
    childImg.height = "250";
    childImg.width = "400";
    childImg.loading = "lazy";

    // append to card
    card.append(childDiv);
    card.append(childImg);
    card.append(childCaption);
    card.classList.add("card");

    // append to parent
    gallery.appendChild(card);
  });
}

createCards(temples);
