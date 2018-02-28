"use strict";
// Displa compact header pass home section
const sectionProjects = document.querySelector("#projects");
const header = document.querySelector(".header");
window.addEventListener("scroll", showCompactHeader);

function showCompactHeader() {
  let currentY = window.pageYOffset;
  let projectsY = sectionProjects.offsetTop - 20;
  // Checks if user has scrolled upto project section, if yes, modify the header styling
  currentY >= projectsY ? header.classList.add("compact-header") : header.classList.remove("compact-header");
}

// Projects modal functionality
const galleryItems = document.querySelectorAll(".projects__gallery-img");
const modal = document.querySelector(".projects__modal");
const modalContent = document.querySelector(".projects__modal-wrapper");
const closeBtn = document.querySelector(".projects__modal-close-btn");

// Adds click event to gallery thumbnails, modal close button and window object
for(let i = 0; i < galleryItems.length; i++) {
  galleryItems[i].addEventListener("click", showProjectDetails);
}
closeBtn.addEventListener("click", closeModalOnBtnClick);
window.addEventListener("click", closeModalOnOutsideClick);

// Function to show modal 
function showProjectDetails(e) {
  modal.className = "projects__modal projects--modal-active";
  modalContent.className = "projects__modal-wrapper projects--content-active";
  closeBtn.style.opacity = 1;
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

