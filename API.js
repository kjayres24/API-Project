const baseURL = 'https://ghibliapi.herokuapp.com/films/';

const choice = document.getElementById('ddlViewBy');
const section = document.querySelector('section');
console.log(choice.value);

const submitBtn = document.getElementById('btn');

submitBtn.addEventListener("click", fetchResults);






function displayPeople(data) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
        let film = data;
        console.log(data);
    }

    let header = document.createElement('h2');
    let para = document.createElement('p');

    header.textContent = data[choice.value].title;
    para.textContent = data[choice.value].description;

    section.appendChild(header);
    section.appendChild(para);
    //section.appendChild(film);


}



function fetchResults(e) {

    fetch(baseURL)
        .then(results => {
            return results.json();
        })
        .then(json => {
            displayPeople(json);
            console.log(json);
        })
}





