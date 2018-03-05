(function() {
  "use strict";
  /*
    Display compact header functionality
  */
  const sectionProjects = document.querySelector("#projects");
  const mobileNavBtn = document.querySelector(".mobile-nav-btn");
  const header = document.querySelector(".header");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileCloseBtn = document.querySelector(".mobile-nav__close-btn");
  window.addEventListener("scroll", showCompactHeader);
  mobileNavBtn.addEventListener("click", showMobileNav);
  mobileCloseBtn.addEventListener("click", hideMobileNav);
  mobileNav.addEventListener("click", hideMobileNav);

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
  // Function to show mobile menu on click
  function showMobileNav(e) {
    mobileNav.classList.add("mobile-nav--active");
  }

  // Function to display relevant section and hide full screen mobile menu
  function hideMobileNav(e) {
    mobileNav.classList.remove("mobile-nav--active");
  }
})();