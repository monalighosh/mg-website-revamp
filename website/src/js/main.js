"use strict";
const galleryItems = [...document.querySelectorAll(".projects__gallery-img")];
const modal = document.querySelector(".projects__modal");
const modalContent = document.querySelector(".projects__modal-content");
const closeBtn = document.querySelector(".projects__modal-close-btn");

galleryItems.forEach((item) => item.addEventListener("click", showProjectDetails));
closeBtn.addEventListener("click", closeModalOnBtnClick);
window.addEventListener("click", closeModalOnOutsideClick);

// Function to show modal 
function showProjectDetails(e) {
  modal.style.cssText = "transform: translate3d(0, 0, 0); -webkit-transform: translate3d(0, 0, 0); width: 100%;";
  modalContent.style.cssText = "transform: translate3d(-50%, -50%, 0); -webkit-transform: translate3d(-50%, -50%, 0); opacity: 1";
}

// Function to close modal on close btn click
function closeModalOnBtnClick(e) {
  modal.style.cssText = "transform: translate3d(-100%, 0, 0); -webkit-transform: translate3d(-100%, 0, 0); width: 0; transition-delay: 600ms;";
  modalContent.style.cssText = "transform: translate3d(-55%, -50%, 0); -webkit-transform: translate3d(-55%, -50%, 0); opacity: 0; transition-delay: 0ms";
}

// Function to close modal on outside content click
function closeModalOnOutsideClick(e) {
  if(e.target === modal) {
    e.target.style.cssText = "transform: translate3d(-100%, 0, 0); -webkit-transform: translate3d(-100%, 0, 0); width: 0; transition-delay: 600ms;";
    modalContent.style.cssText = "transform: translate3d(-55%, -50%, 0); -webkit-transform: translate3d(-55%, -50%, 0); opacity: 0; transition-delay: 0ms";
  }
}