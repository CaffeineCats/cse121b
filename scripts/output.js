
export default function displayMovie (movie, elementId) {
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let li2 = document.createElement("li");

    li.innerHTML = movie.title;
    li2.innerHTML = movie.tag;

    ul.appendChild(li);
    ul.appendChild(li2);

    elementId.appendChild(ul);
}