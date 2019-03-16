const baseURL = 'https://ghibliapi.herokuapp.com/films/';

let choice = document.getElementById('ddlViewBy')
console.log(choice.value)

fetch(baseURL)
    .then(results => {
        return results.json()
    })
    .then(json => {
        displayPeople(json)
    })

function displayPeople(data) {
    console.log(data);
    // for (film of data) {
    //     console.log(film.title);
    // }
    function displayDescription(data.description)

}

