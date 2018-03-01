"use strict";
/*
Display compact header functionality
*/

var sectionProjects = document.querySelector("#projects");
var header = document.querySelector(".header");
window.addEventListener("scroll", showCompactHeader);

function showCompactHeader() {
  var currentY = window.pageYOffset;
  var projectsY = sectionProjects.offsetTop - 20;
  // Checks if user has scrolled upto project section, if yes, modify the header styling
  currentY >= projectsY ? header.classList.add("compact-header") : header.classList.remove("compact-header");
}

/* 
Projects modal functionality 
*/
var galleryList = document.querySelector(".projects__gallery-list");
var modal = document.querySelector(".projects__modal");
var modalContent = document.querySelector(".projects__modal-wrapper");
var closeBtn = document.querySelector(".projects__modal-close-btn");
var projectData = [{
  id: 1,
  name: "APC Pharma",
  work: "Website",
  tools: "HTML, CSS, JavaScript",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  img: "projectview-apc.jpg",
  demoLink: "http://www.apcpharma.com",
  githubLink: "https://github.com/monalighosh/apcpharma-website-revamp"
}, {
  id: 2,
  name: "TickyBot",
  work: "Website (Hackathon Project)",
  tools: "HTML, CSS, JavaScript",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  img: "projectview-tickybot.jpg",
  demoLink: "https://chingu-voyage3.github.io/toucans-30",
  githubLink: "https://github.com/chingu-voyage3/toucans-30"
}, {
  id: 3,
  name: "Vanilla JavaScript Drum Kit",
  work: "JavaScript Project",
  tools: "HTML, CSS, JavaScript",
  description: "An HTML page displays a collection of div elements, each containing a letter that corresponds with a key on the keyboard, and the name of the soundclip to be played when that button is clicked. When a user presses a key that matches one of the letters displayed in the div elements, the page should play the corresponding soundclip and place a temporary 'highlight' (or border) around the div. Write the JavaScript code necessary to add this functionality.",
  img: "projectview-drumkit.jpg",
  demoLink: "https://codepen.io/monalighosh/full/NyRrNZ",
  githubLink: "https://github.com/monalighosh/JavaScript30/tree/master/Day01"
}, {
  id: 4,
  name: "Flexbox Pricing Table",
  work: "Flexbox Project",
  tools: "HTML, CSS",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  img: "projectview-pricing.jpg",
  demoLink: "https://monalighosh.github.io/flexbox-pricing-table",
  githubLink: "https://github.com/monalighosh/flexbox-pricing-table"
}, {
  id: 5,
  name: "Customer Manager App",
  work: "JavaScript Project",
  tools: "HTML, CSS, JavaScript",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  img: "projectview-customapp.jpg",
  demoLink: "https://monalighosh.github.io/indexedDB-app",
  githubLink: "https://github.com/monalighosh/indexedDB-app"
}, {
  id: 6,
  name: "Flexbox Image Gallery",
  work: "Flexbox Project",
  tools: "HTML, CSS, JavaScript",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  img: "projectview-gallery.jpg",
  demoLink: "https://monalighosh.github.io/flexbox-image-gallery/",
  githubLink: "https://github.com/monalighosh/flexbox-image-gallery"
}, {
  id: 7,
  name: "jQuery ToDo App",
  work: "jQuery Project",
  tools: "HTML, CSS, JavaScript",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  img: "projectview-todo.jpg",
  demoLink: "https://monalighosh.github.io/jquery-todo-app",
  githubLink: "https://github.com/monalighosh/jquery-todo-app"
}, {
  id: 8,
  name: "Hexagon Jigsaw Puzzle",
  work: "JavaScript Project",
  tools: "HTML, CSS, JavaScript",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  img: "projectview-hexagone.jpg",
  demoLink: "https://monalighosh.github.io/Hexagon-puzzle",
  githubLink: "https://github.com/monalighosh/Hexagon-puzzle"
}];
var modalTxDiv = document.querySelector(".projects__modal-text");
var modalImgDiv = document.querySelector(".projects__modal-img");
var output = void 0;

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
  if (e.target === modal) {
    e.target.className = "projects__modal projects--modal-inactive";
    modalContent.className = "projects__modal-wrapper projects--content-inactive";
    closeBtn.style.opacity = 0;
  }
}

/* 
Function to append project details into the modal
*/
function appendProjectDetails(event) {
  var currentProject = event.target;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = projectData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var project = _step.value;

      if (project.id === parseInt(currentProject.id)) {
        output = "<h1>" + project.name + "</h1>\n                <p>" + project.work + "</p>\n                <p>" + project.description + "</p>\n                <p>Tools used: " + project.tools + "</p>";
        modalTxDiv.innerHTML = output;
        modalImgDiv;
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}