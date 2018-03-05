"use strict";

(function () {
  "use strict";
  /*
    Display compact header functionality
  */

  var sectionProjects = document.querySelector("#projects");
  var mobileNavBtn = document.querySelector(".mobile-nav-btn");
  var header = document.querySelector(".header");
  window.addEventListener("scroll", showCompactHeader);

  function showCompactHeader() {
    var currentY = window.pageYOffset;
    var projectsY = sectionProjects.offsetTop - 40;
    // Checks if user has scrolled upto project section, if yes, modify the header styling
    if (currentY >= projectsY) {
      header.classList.add("compact-header");
      mobileNavBtn.style.top = "25px";
    } else {
      header.classList.remove("compact-header");
      mobileNavBtn.style.top = "25px";
    }
  }

  /* 
    Mobile nav functionality
  */
  var mobileNav = document.querySelector(".mobile-nav");
  var mobileCloseBtn = document.querySelector(".mobile-nav__close-btn");
  mobileNavBtn.addEventListener("click", toggleMobileNav);
  mobileCloseBtn.addEventListener("click", toggleMobileNav);

  function toggleMobileNav(e) {
    mobileNav.classList.toggle("mobile-nav--active");
  }
})();