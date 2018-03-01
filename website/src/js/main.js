"use strict";
/*
Display compact header functionality
*/
const sectionProjects = document.querySelector("#projects");
const header = document.querySelector(".header");
window.addEventListener("scroll", showCompactHeader);

function showCompactHeader() {
  let currentY = window.pageYOffset;
  let projectsY = sectionProjects.offsetTop - 20;
  // Checks if user has scrolled upto project section, if yes, modify the header styling
  currentY >= projectsY ? header.classList.add("compact-header") : header.classList.remove("compact-header");
}

/* 
Projects modal functionality 
*/
const galleryList = document.querySelector(".projects__gallery-list");
const modal = document.querySelector(".projects__modal");
const modalContent = document.querySelector(".projects__modal-wrapper");
const closeBtn = document.querySelector(".projects__modal-close-btn");
let projectData = [
  {
    id: 1,
    name: "APC Pharma",
    work: "Website",
    tools: "HTML, CSS, JavaScript",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 2,
    name: "TickyBot",
    work: "Website (Hackathon Project)",
    tools: "HTML, CSS, JavaScript",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 3,
    name: "Vanilla JavaScript Drum Kit",
    work: "JavaScript Project",
    tools: "HTML, CSS, JavaScript",
    description: "An HTML page displays a collection of div elements, each containing a letter that corresponds with a key on the keyboard, and the name of the soundclip to be played when that button is clicked. When a user presses a key that matches one of the letters displayed in the div elements, the page should play the corresponding soundclip and place a temporary 'highlight' (or border) around the div. Write the JavaScript code necessary to add this functionality."
  },
  {
    id: 4,
    name: "Flexbox Pricing Table",
    work: "Flexbox Project",
    tools: "HTML, CSS",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 5,
    name: "Customer Manager App",
    work: "JavaScript Project",
    tools: "HTML, CSS, JavaScript",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 6,
    name: "Flexbox Image Gallery",
    work: "Flexbox Project",
    tools: "HTML, CSS, JavaScript",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 7,
    name: "jQuery ToDo App",
    work: "jQuery Project",
    tools: "HTML, CSS, JavaScript",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 8,
    name: "Hexagon Jigsaw Puzzle",
    work: "JavaScript Project",
    tools: "HTML, CSS, JavaScript",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },];
const modalTxDiv = document.querySelector(".projects__modal-text");
const modalImgDiv = document.querySelector(".projects__modal-img");
let output;

// Adds click event to gallery list (ul), modal close button and window object
galleryList.addEventListener("click", showProjectDetails);
closeBtn.addEventListener("click", closeModalOnBtnClick);
window.addEventListener("click", closeModalOnOutsideClick);

// Function to show modal 
function showProjectDetails(e) {
  modal.className = "projects__modal projects--modal-active";
  modalContent.className = "projects__modal-wrapper projects--content-active";
  closeBtn.style.opacity = 1;
  appendProjectDetails(e);
}

// Function to close modal when close btn is clicked
function closeModalOnBtnClick(e) {
  modal.className = "projects__modal projects--modal-inactive";
  modalContent.className = "projects__modal-wrapper projects--content-inactive";
  closeBtn.style.opacity = 0;
}

// Function to close modal when modal window is clicked
function closeModalOnOutsideClick(e) {
  if(e.target === modal) {
    e.target.className = "projects__modal projects--modal-inactive";
    modalContent.className = "projects__modal-wrapper projects--content-inactive";
    closeBtn.style.opacity = 0;
  }
}

/* 
Function to append project details into the modal
*/
function appendProjectDetails(event) {
  let currentProject = event.target;
  for(let project of projectData) {
    if(project.id === parseInt(currentProject.id)) {
      output = `<h1>${project.name}</h1>
                <p>${project.work}</p>
                <p>${project.description}</p>
                <p>Tools used: ${project.tools}</p>`;
      modalTxDiv.innerHTML = output;
      break;
    }
  }
}






