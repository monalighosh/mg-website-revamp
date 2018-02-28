"use strict";
// Displa compact header pass home section

var sectionProjects = document.querySelector("#projects");
var header = document.querySelector(".header");
window.addEventListener("scroll", showCompactHeader);

function showCompactHeader() {
  var currentY = window.pageYOffset;
  var projectsY = sectionProjects.offsetTop - 20;
  // Checks if user has scrolled upto project section, if yes, modify the header styling
  currentY >= projectsY ? header.classList.add("compact-header") : header.classList.remove("compact-header");
}

// Projects modal functionality
var galleryItems = document.querySelectorAll(".projects__gallery-img");
var modal = document.querySelector(".projects__modal");
var modalContent = document.querySelector(".projects__modal-wrapper");
var closeBtn = document.querySelector(".projects__modal-close-btn");

// Adds click event to gallery thumbnails, modal close button and window object
for (var i = 0; i < galleryItems.length; i++) {
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
  if (e.target === modal) {
    e.target.className = "projects__modal projects--modal-inactive";
    modalContent.className = "projects__modal-wrapper projects--content-inactive";
    closeBtn.style.opacity = 0;
  }
}