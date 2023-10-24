/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Luis Riquelme";
let currentYear = "2023";
let profilePicture = "images/lafoto.jpeg";

/* Step 3 - Element Variables */
let nameElement = document.getElementById("name");
let foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
let imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile Image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = ["Spaghetti", "Sandwich", "Cheese Empanada", "My mom's food", "Zero Soda"];
foodElement.textContent = favoriteFoods.join(", ");

let favoriteFood = "Cheese Burger";
favoriteFoods.push(favoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`

