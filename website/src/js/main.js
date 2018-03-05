(function(){
  "use strict";
  /* 
    Page smooth scroll functionality
  */
  const navList = document.querySelector(".header__nav-list");
  navList.addEventListener("click", scrollToSection);
  // navList.addEventListener("click", showActiveLink);
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
    if(yPos >= bodyHeight) {
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
    console.log(windowY, yPos, bodyHeight, sectionY);
  }



  // Function to add an active class to the link button
  // const lis = [...document.querySelectorAll(".header__nav-items")];
  // function showActiveLink(e) {
  //   let parent = e.target.parentElement;
  //   for(let li of lis) {
  //     if(li.children[0].classList.contains("active-link")) {
  //       li.children[0].classList.add("header__nav-links");
  //       li.children[0].classList.remove("active-link");
  //       parent.classList.add("active-link");
  //       parent.classList.remove("header__nav-links");
  //       break;
  //     }
  //   }
  // }
})();