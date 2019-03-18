const baseURL = 'https://ghibliapi.herokuapp.com/films/';

const choice = document.getElementById('ddlViewBy');
const section = document.querySelector('section');
console.log(choice.value);


fetch(baseURL)
    .then(results => {
        return results.json()
    })
    .then(json => {
        displayPeople(json)
    })

function displayPeople(data) {
    let film = data;
    console.log(data);


    //for (film of data) {
    //console.log(film.title);
    // console.log(film.description);
    //}


    for (let i = 0; i < film.length; i++) {
        let header = document.createElement('h2');
        let para = document.createElement('p');

        let current = film[i];
        console.log("Current:", current);

        header.textContent = current.title;
        para.textContent = current.description;

        film.appendChild(header);
        film.appendChild(para);
        section.appendChild(film);
    }

}

