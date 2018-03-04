"use strict";
/*
Display compact header functionality
*/
const sectionProjects = document.querySelector("#projects");
const header = document.querySelector(".header");
window.addEventListener("scroll", showCompactHeader);

function showCompactHeader() {
  let currentY = window.pageYOffset;
  let projectsY = sectionProjects.offsetTop - 40;
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
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: "projectview-apc.jpg",
    demoLink: "http://www.apcpharma.com",
    githubLink: "https://github.com/monalighosh/apcpharma-website-revamp"
  },
  {
    id: 2,
    name: "TickyBot",
    work: "Website (Hackathon Project)",
    tools: "HTML, CSS, JavaScript",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: "projectview-tickybot.jpg",
    demoLink: "https://chingu-voyage3.github.io/toucans-30",
    githubLink: "https://github.com/chingu-voyage3/toucans-30"
  },
  {
    id: 3,
    name: "Vanilla JavaScript Drum Kit",
    work: "JavaScript Project",
    tools: "HTML, CSS, JavaScript",
    description: "An HTML page displays a collection of div elements, each containing a letter that corresponds with a key on the keyboard, and the name of the soundclip to be played when that button is clicked. When a user presses a key that matches one of the letters displayed in the div elements, the page should play the corresponding soundclip and place a temporary 'highlight' (or border) around the div. Write the JavaScript code necessary to add this functionality.",
    img: "projectview-drumkit.jpg",
    demoLink: "https://codepen.io/monalighosh/full/NyRrNZ",
    githubLink: "https://github.com/monalighosh/JavaScript30/tree/master/Day01"
  },
  {
    id: 4,
    name: "Flexbox Pricing Table",
    work: "Flexbox Project",
    tools: "HTML, CSS",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: "projectview-pricing.jpg",
    demoLink: "https://monalighosh.github.io/flexbox-pricing-table",
    githubLink: "https://github.com/monalighosh/flexbox-pricing-table"
  },
  {
    id: 5,
    name: "Customer Manager App",
    work: "JavaScript Project",
    tools: "HTML, CSS, JavaScript",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: "projectview-customapp.jpg",
    demoLink: "https://monalighosh.github.io/indexedDB-app",
    githubLink: "https://github.com/monalighosh/indexedDB-app"
  },
  {
    id: 6,
    name: "Flexbox Image Gallery",
    work: "Flexbox Project",
    tools: "HTML, CSS, JavaScript",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: "projectview-gallery.jpg",
    demoLink: "https://monalighosh.github.io/flexbox-image-gallery/",
    githubLink: "https://github.com/monalighosh/flexbox-image-gallery"
  },
  {
    id: 7,
    name: "jQuery ToDo App",
    work: "jQuery Project",
    tools: "HTML, CSS, JavaScript",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: "projectview-todo.jpg",
    demoLink: "https://monalighosh.github.io/jquery-todo-app",
    githubLink: "https://github.com/monalighosh/jquery-todo-app"
  },
  {
    id: 8,
    name: "Hexagon Jigsaw Puzzle",
    work: "JavaScript Project",
    tools: "HTML, CSS, JavaScript",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: "projectview-hexagone.jpg",
    demoLink: "https://monalighosh.github.io/Hexagon-puzzle",
    githubLink: "https://github.com/monalighosh/Hexagon-puzzle"
  }];
const modalTxDiv = document.querySelector(".projects__modal-text");
const modalImgDiv = document.querySelector(".projects__modal-img");
let textOutput;
let imgOutput;

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
      textOutput = `<h1>${project.name}</h1>
                <p>${project.work}</p>
                <p>${project.description}</p>
                <p>Tools used: ${project.tools}</p>
                <p><a href="${project.demoLink}" title="Live Demo" target="_blank">Live Demo</a></p>
                <p><a href="${project.githubLink}" title="View Github Repository" target="_blank">Github Repo</a></p>`;
      imgOutput = `<img src="images/${project.img}" alt="${project.name} View"/>`;          
      modalTxDiv.innerHTML = textOutput;
      modalImgDiv.innerHTML = imgOutput;
      break;
    }
  }
}

/* 
Article read more functionality
*/
let articleData = [
  {
    id: "a1",
    articleLink: "articles/article-how-i-write-css.html"
  },
  {
    id: "a2",
    articleLink: "articles/article-tools-i-cant-work-without.html"
  },
  {
    id: "a3",
    articleLink: "articles/article-javascript-hoisting.html"
  },
  {
    id: "a4",
    articleLink: "articles/article-javascript-closures.html"
  }];
const articleBtnsList = document.querySelector(".articles__list");
articleBtnsList.addEventListener("click", showArticle);

function showArticle(e) {
  let articleId = e.target.parentElement.parentElement.getAttribute("id") || e.target.parentElement.getAttribute("id");
  for(let article of articleData) {
    if(article.id === articleId) {
      window.open(`${article.articleLink}`);
    }
  }
}

/* 
Page smooth scroll functionality
*/
const navList = document.querySelector(".header__nav-list");
navList.addEventListener("click", scrollToSection);
navList.addEventListener("click", showActiveLink);
let distance = 40;
let speed = 15;
let scrollY = 0;

function scrollToSection(e) {
  e.preventDefault();
  // Returns the id attribute of the section
  let parent = e.target.parentElement;
  let parentId = parent.getAttribute("href");
  // Returns the pixel value the window has been scrolled
  let windowY = window.pageYOffset; 
  // Returns the  pixel value of the section's position relative to the top
  let sectionY = document.querySelector(parentId).offsetTop; 
  // Returns the pixel value of body element's total height
  let bodyHeight = document.body.offsetHeight;
  // To check if it is page bottom
  let yPos = windowY + window.innerHeight;
  // To scroll window smoothly at given speed
  let animator = setTimeout(() => {scrollToSection(e)}, speed);
  // Checks if 
  if(yPos > bodyHeight) {
    clearTimeout(animator);
  } else {
    if(windowY < sectionY - distance) {
      scrollY = windowY + distance;
      window.scrollTo(0, scrollY);
    } else if (windowY > sectionY) {
      scrollY = windowY - distance;
      window.scrollTo(0, scrollY);
    } else {
      clearTimeout(animator);
    }
  }
}

// Function to add\ active class to the link button
const lis = [...document.querySelectorAll(".header__nav-items")];
function showActiveLink(e) {
  let parent = e.target.parentElement;
  for(let li of lis) {
    if(li.children[0].classList.contains("active-link")) {
      li.children[0].classList.add("header__nav-links");
      li.children[0].classList.remove("active-link");
      parent.classList.add("active-link");
      parent.classList.remove("header__nav-links");
      break;
    }
  }
}


/* 
Mobile nav functionality
*/

const mobileNavBtn = document.querySelector(".mobile-nav-btn");
mobileNavBtn.addEventListener("click", showMobileNav);
const mobileNav = document.querySelector(".mobile-nav");

function showMobileNav(e) {
  mobileNav.classList.toggle("mobile-nav--active");
}




