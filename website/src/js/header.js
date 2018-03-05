(function() {
  "use strict";
  /*
    Display compact header functionality
  */
  const sectionProjects = document.querySelector("#projects");
  const mobileNavBtn = document.querySelector(".mobile-nav-btn");
  const header = document.querySelector(".header");
  window.addEventListener("scroll", showCompactHeader);

  function showCompactHeader() {
    let currentY = window.pageYOffset;
    let projectsY = sectionProjects.offsetTop - 40;
    // Checks if user has scrolled upto project section, if yes, modify the header styling
    if(currentY >= projectsY) {
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
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileCloseBtn = document.querySelector(".mobile-nav__close-btn");
  mobileNavBtn.addEventListener("click", toggleMobileNav);
  mobileCloseBtn.addEventListener("click", toggleMobileNav);

  function toggleMobileNav(e) {
    mobileNav.classList.toggle("mobile-nav--active");
  }

})();