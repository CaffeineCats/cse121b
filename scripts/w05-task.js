/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");

let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {

    temples.forEach(temple => {

    let article = document.createElement("article");

    let h3 = document.createElement("h3");
    h3.textContent = temple.templeName;

    let img = document.createElement("img");

    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.location);

    article.appendChild(h3);
    article.appendChild(img);

    templesElement.appendChild(article);
    });
};


/* async getTemples Function using fetch()*/

const getTemples = async () => {

    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    templeList = await response.json();

    displayTemples(templeList);
};


/* reset Function */
function reset() {
    templesElement.innerHTML = "";
};

/* sortBy Function */

function sortBy(temples) {

    reset();

    let filter = document.querySelector("#sortBy").value;

    switch(filter) {
        case "utah":
            let utahTemples = temples.filter(temple => temple.location.includes("Utah"));
            displayTemples(utahTemples);
            break;
        case "notutah":
            let nonUtahTemples = temples.filter(temple => (temple.location.includes("Utah") != true));
            displayTemples(nonUtahTemples);
            break;
        case "older":
            let beforeDateTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0 , 1));
            displayTemples(beforeDateTemples);
            break;
        case "all":
            displayTemples(temples);
            break;
    }
};  

getTemples();

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () =>  {sortBy(templeList) }   );
