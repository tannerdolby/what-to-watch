const shows = [...document.getElementsByClassName("show")];
const searchBar = document.getElementById("search-bar");
const log = document.getElementById("log");

/**
 * Returns the text entered into an input search bar and injects it into an HTML element.
 * @param {Event} e The `input` event to capturecharacters entered into input field.
 * @retun {String} The text content injected into whatever element you choose.
 */
function capture(e, element) {
    return element.textContent = e.target.value;
}

searchBar.addEventListener("input", (e) => {
    // Grab blog posts on document and convert HTMLCollection to an Array with the spread operator
    const shows = [...document.getElementsByClassName("show")];

    // inject user input to HTMLElement to add into search query
    capture(e, log);

    var searchQuery = [];
    searchQuery.push(log.innerHTML.toLowerCase());

    // posts with title that matches each character in search query
    const matchingShow = shows.filter((show) => {
        return show.dataset.showTitle.toLowerCase().includes(searchQuery);
    });

    // posts with title that does not match the search query
    const nonMatchingShow = posts.filter((post) => {
        return show.dataset.showTitle.toLowerCase().includes(searchQuery) === false;
    });
    
    // If there is a matching post then hide non-matching posts
    // else if a non matching (previously hidden) post still has sr-only, remove it
    if (matchingShow) {
        nonMatchingShow.forEach(show => show.classList.add("sr-only"));
    } else {
        nonMatchingShow.forEach(show => show.classList.remove("sr-only"));
    }

    // If the matching post is hidden from a previous query and matches search query, show it
    matchingShow.forEach(show => {
        if (show.classList.value.includes("sr-only")) {
            show.classList.remove("sr-only");
        }
    });
});