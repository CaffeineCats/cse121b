/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Luis Riquelme",
    photo: "images/lafoto.jpeg",
    favoriteFoods: [
        "Spaghetti",
        "Sandwich",
        "Cheese Empanada",
        "My Mom's Food",
        "Zero Soda",
        "Burgers"
    ],
    hobbies: [
        "Music Listening",
        "Insomnia",
        "Gym",
        "Movies",
        "Petting My Cat"
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Talcahuano, Octava Region",
        length: "13 years"
    },
    {
        place: "Antofagasta, Segunda Region",
        length: "10 years"
    },
    {
        place: "Rexburg, Idaho",
        length: "2 years"
    },
    {
        place: "Provo, Utah",
        length: "2 years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement("li");
    li.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement("dt");
    dt.textContent = placeLived.place;

    let dd = document.createElement("dd");
    dd.textContent = placeLived.length;

    document.querySelector("#places-lived").appendChild(dt).appendChild(dd);
});

