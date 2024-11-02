// Array of project objects with conditional links
const projects = [
    { title: "Weather App", description: "Android app developed using Java for backend,XML for frontend and using openweathermap API to fetch live data.", url: "https://github.com/SpandanDuari/APP-TESTING.git" },  // No link
    { title: "Netflix Clone", description: "A clone of the Netflix UI built with HTML,CSS and JavaScript.", url: "https://spandanduari.github.io/Netflix-clone/" },
    { title: "Project 3", description: "Description of project 3.", url: "" }  // No link
];

// Load projects dynamically
document.addEventListener("DOMContentLoaded", function () {
    const projectList = document.getElementById("project-list");

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";
        
        const projectTitle = document.createElement("h3");

        if (project.url) {
            // Create a clickable link for projects with URLs
            const projectLink = document.createElement("a");
            projectLink.href = project.url;
            projectLink.target = "_blank";
            projectLink.innerText = project.title;
            projectTitle.appendChild(projectLink);
        } else {
            // Display as plain text if no URL is provided
            projectTitle.innerText = project.title;
        }

        const projectDesc = document.createElement("p");
        projectDesc.innerText = project.description;

        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDesc);
        projectList.appendChild(projectDiv);
    });
});
