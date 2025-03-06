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
const year_element = document.getElementById("year")
year_element.textContent = getYear();

// get DOM last modified date
const lastmodified_element = document.getElementById("lastmodified")
lastmodified_element.textContent = "Last modification: " + getLastModified();
