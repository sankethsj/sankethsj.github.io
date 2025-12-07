document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => populateProjects(data))
        .catch(error => console.error('Error fetching data:', error));

    // Wake up the service
    fetch('https://filehookups.onrender.com/', { mode: 'no-cors' });
    fetch('https://chatbox-ec3s.onrender.com/', { mode: 'no-cors' });
});

function getTechNameAndLink(techIcons, tech) {
    tech = tech.toLowerCase();
    if (techIcons[tech]) {
        return {
            name: techIcons[tech].name,
            link: techIcons[tech].link
        };
    }
    return null;
}

function populateProjects(data) {
    const projects = data["projects"];
    const techIcons = data["devicons"];

    const projectsContainer = document.getElementById('projects-new');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        const projectTitle = document.createElement('div');
        projectTitle.className = "project-name";
        projectTitle.textContent = project.name;
        projectCard.appendChild(projectTitle);

        const projectCardBlocks = document.createElement('div');
        projectCardBlocks.className = 'project-card-blocks';

        const projectCardBlock1 = document.createElement('div');
        projectCardBlock1.className = 'project-card-block-1';

        const projectTech = document.createElement('div');
        projectTech.className = "project-tech";

        project.tech.forEach(tech => {
            const res = getTechNameAndLink(techIcons, tech);
            const techElement = document.createElement('div');
            techElement.className = "tech-item";
            if (res) {
                const techElementImg = document.createElement('img');
                techElementImg.className = "tech-item-img";
                techElementImg.width = 20;
                techElementImg.src = res.link;
                techElementImg.alt = res.name + ' icon';
                techElementImg.loading = 'lazy';
                techElement.appendChild(techElementImg);
            }
            const techElementName = document.createElement('div');
            techElementName.className = "tech-item-name";
            techElementName.textContent = res ? res.name : tech;
            techElement.appendChild(techElementName);
            projectTech.appendChild(techElement);
        });

        projectCardBlock1.appendChild(projectTech);

        const projectImageDiv = document.createElement('div');
        projectImageDiv.className = "project-img-div";

        const projectImage = document.createElement('img');
        projectImage.className = "project-img";
        projectImage.src = project.thumbnail;
        projectImage.alt = project.name || 'Project image';
        projectImage.loading = 'lazy';

        projectImageDiv.appendChild(projectImage)
        projectCardBlock1.appendChild(projectImageDiv);
        projectCardBlocks.appendChild(projectCardBlock1);

        const projectCardBlock2 = document.createElement('div');
        projectCardBlock2.className = 'project-card-block-2';

        const projectDescription = document.createElement('p');
        projectDescription.className = "project-description";
        projectDescription.innerHTML = project.description.replace(/\n/g, '<br>');;
        projectCardBlock2.appendChild(projectDescription);


        const githubImage = document.createElement("img");
        githubImage.src = "/projects/assets/github-original.svg";
        githubImage.width = 30;
        githubImage.className = "github-icon";
        githubImage.alt = "GitHub";
        githubImage.loading = 'lazy';

        const projectLinkSection = document.createElement('div');
        projectLinkSection.className = "project-link-section";

        const projectLink = document.createElement('a');
        projectLink.href = project.link;
        projectLink.textContent = 'View on Github';
        projectLink.className = 'view-button';
        projectLink.target = '_blank';
        projectLink.rel = 'noopener noreferrer';
        projectLink.appendChild(githubImage);
        projectLinkSection.appendChild(projectLink);

        if (project.hasOwnProperty("extra-link")) {
            const projectLink2 = document.createElement('a');
            projectLink2.href = project["extra-link"]["link-url"];
            projectLink2.textContent = project["extra-link"]["link-text"];
            projectLink2.className = 'view-button-2';
            projectLink2.target = '_blank';
            projectLink2.rel = 'noopener noreferrer';

            if (project["extra-link"]["link-img"]) {
                const extraImg = document.createElement("img");
                extraImg.src = project["extra-link"]["link-img"];
                extraImg.width = 30;
                extraImg.alt = project["extra-link"]["link-text"] || 'link image';
                extraImg.loading = 'lazy';
                projectLink2.appendChild(extraImg);
            }

            projectLinkSection.appendChild(projectLink2);
        }
        projectCardBlock2.appendChild(projectLinkSection);
        projectCardBlocks.appendChild(projectCardBlock2);
        projectCard.appendChild(projectCardBlocks);
        projectsContainer.appendChild(projectCard);
    });
}
