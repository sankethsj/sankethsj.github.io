const requestURL = 'data/data.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = processData;

function processData() {
    const data = request.response;
    const projects = data.projects;
    populateProjectsCardGrid(projects);
}

function populateProjectsCardGrid(projects) {
    const projectCardGrid = document.querySelector('.project-cards-grid');

    if (projects.length > 0) {
        projects.forEach(project => {
            const projectDiv = createElement('div', projectCardGrid, "card");

            const posterDiv = createElement('img', projectDiv, "poster");
            posterDiv.src = project.url;

            const textBox = createElement('div', projectDiv, "textBox");
            
            const genre = createElement('h3', textBox, "lang");
            genre.textContent = "Genre: " + project.genre;
            genre.style.marginBottom = "-20px";

            const imdbDiv = createElement('h3', textBox, "imdb");
            imdbDiv.textContent = "IMdB: " + project.imdb;
            imdbDiv.style.marginBottom = "-20px";

            const titleH1 = createElement('h2', textBox, "title");
            titleH1.textContent = project.name;

            const linkDiv = createElement('a', textBox, "linkBtn");
            if (project.link == "#") {
                linkDiv.textContent = "Theatres only";
            } else {
                linkDiv.href = project.link;
                linkDiv.textContent = "Watch Now";
                linkDiv.target = "_blank";
            }

        });
    }
}

// createElement helper function
function createElement(type, parent, classList) {
    const element = document.createElement(type);
    if (classList !== undefined) {
        typeof classList === 'Array' && classList.length > 0 ?
            element.classList.add(...classList) :
            (element.className = classList);
    }
    parent.append(element);
    return element;
}

//darkmode



