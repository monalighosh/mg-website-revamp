"use strict";

(function () {
  "use strict";
  /* 
    Article read more functionality
  */

  var articleData = [{
    id: "a1",
    articleLink: "articles/article-tools-i-cant-work-without.html"
  }, {
    id: "a2",
    articleLink: "articles/article-javascript-hoisting.html"
  }, {
    id: "a3",
    articleLink: "articles/article-javascript-closures.html"
  }, {
    id: "a4",
    articleLink: "articles/article-aria-landmark-roles.html"
  }];
  var articleBtnsList = document.querySelector(".articles__list");
  articleBtnsList.addEventListener("click", showArticle);

  function showArticle(e) {
    var articleId = e.target.parentElement.parentElement.getAttribute("id") || e.target.parentElement.getAttribute("id");
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = articleData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var article = _step.value;

        if (article.id === articleId) {
          window.open("" + article.articleLink);
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
})();
"use strict";
// Register submit event on contact form

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var form = document.querySelector("#contact-form");
form.addEventListener("submit", submitFormData);

// Function to submit form data and display success or fail message
function submitFormData(e) {
  e.preventDefault();
  // Get form elements
  var formEles = [].concat(_toConsumableArray(e.target.elements));
  // New object to store user's data
  var formData = {};
  // Add form element's name attribute and value to newly created object
  formEles.forEach(function (ele) {
    if (ele.tagName !== "BUTTON") {
      var attr = ele.getAttribute("name");
      formData[attr] = ele.value;
    }
  });
  // Create FormData object to store user's data tobe used in AJAX request
  var formDataToSend = new FormData();
  for (var key in formData) {
    formDataToSend.append(key, formData[key]);
  }
  // Create new div element for the form to display success or failure message
  var messageDiv = document.querySelector(".form-submit-message");

  // Create AJAX request to load the success or fail message without reloading page
  var xhr = new XMLHttpRequest();
  xhr.open("POST", formAction);
  xhr.onload = function () {
    // If AJAX request status is success and response text from php form is "success" proceed further
    if (xhr.status === 200) {
      if (xhr.responseText == "success") {
        // Append new div element to form which displays thank you message
        messageDiv.style.opacity = "1";
        messageDiv.style.display = "block";
        messageDiv.innerHTML = "Thanks for being awesome " + formData.name + "! <br/>I will get back to you as soon as possible.";
        // Reset form
        e.target.reset();
      } else {
        // Append new div element to form which displays failure message
        messageDiv.style.opacity = "1";
        messageDiv.style.display = "block";
        messageDiv.innerHTML = "Sorry, form submission failed! Try again later!";
      }
    }
  };
  // If AJAX request fails, log error message to console
  xhr.onerror = function () {
    console.error("Request failed: " + xhr.responseText);
  };
  xhr.send(formDataToSend);
}
"use strict";

(function () {
  "use strict";
  /*
    Display compact header functionality
  */

  var sectionProjects = document.querySelector("#projects");
  var mobileNavBtn = document.querySelector(".mobile-nav-btn");
  var header = document.querySelector(".header");
  var mobileNav = document.querySelector(".mobile-nav");
  var mobileCloseBtn = document.querySelector(".mobile-nav__close-btn");
  window.addEventListener("scroll", showCompactHeader);
  mobileNavBtn.addEventListener("click", showMobileNav);
  mobileCloseBtn.addEventListener("click", hideMobileNav);
  mobileNav.addEventListener("click", hideMobileNav);

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
  // Function to show mobile menu on click
  function showMobileNav(e) {
    mobileNav.classList.add("mobile-nav--active");
  }

  // Function to display relevant section and hide full screen mobile menu
  function hideMobileNav(e) {
    mobileNav.classList.remove("mobile-nav--active");
  }
})();
"use strict";

(function () {
  "use strict";
  /* 
    Page smooth scroll functionality
  */

  var navList = document.querySelector(".header__nav-list");
  navList.addEventListener("click", scrollToSection);
  // navList.addEventListener("click", showActiveLink);
  var distance = 40;
  var speed = 15;
  var scrollY = 0;

  function scrollToSection(e) {
    e.preventDefault();
    // Returns the id attribute of the section
    var parent = e.target.parentElement;
    var parentId = parent.getAttribute("href");
    // Returns the pixel value the window has been scrolled
    var windowY = window.pageYOffset;
    // Returns the  pixel value of the section's position relative to the top
    var sectionY = document.querySelector(parentId).offsetTop;
    // Returns the pixel value of body element's total height
    var bodyHeight = document.body.offsetHeight;
    // To check if it is page bottom
    var yPos = windowY + window.innerHeight;
    // To scroll window smoothly at given speed
    var animator = setTimeout(function () {
      scrollToSection(e);
    }, speed);
    // Checks if 
    if (yPos >= bodyHeight) {
      clearTimeout(animator);
    } else {
      if (windowY < sectionY - distance) {
        scrollY = windowY + distance;
        window.scrollTo(0, scrollY);
      } else if (yPos >= bodyHeight) {
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

  // Console custom message
  console.log("%c\n(\uFF61\u25D5\u203F\u25D5\uFF61) \n    ", "color: #045afa");
  console.log("%c Hi there, fellow developer! Thanks for visiting.", "padding: 9px; background:#045afa; line-height:25px; color: #fff;");
  console.log("%c I'd love to hear what you think!", "padding: 9px; background:#05dc81; line-height:25px; color: #fff;");
})();
"use strict";

(function () {
  "use strict";
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
    stack: "HTML, CSS, JavaScript",
    tools: "Photoshop, Sublime Text, NPM, Gulp, SASS, Chrome Dev Tools, Github, Trello",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "pro-view-large-apc.jpg",
    srcset: "images/pro-view-small-apc.jpg 500w, images/pro-view-med-apc.jpg 800w, images/pro-view-large-apc.jpg 1094w",
    demoLink: "http://www.apcpharma.com",
    githubLink: "https://github.com/monalighosh/apcpharma-website-revamp"
  }, {
    id: 2,
    name: "TickyBot",
    work: "Website (Hackathon Project)",
    stack: "HTML, CSS, JavaScript",
    tools: "Photoshop, Sublime Text, Chrome Dev Tools, Github, Trello",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "pro-view-large-tickybot.jpg",
    srcset: "images/pro-view-small-tickybot.jpg 500w, images/pro-view-med-tickybot.jpg 800w, images/pro-view-large-tickybot.jpg 1094w",
    demoLink: "https://chingu-voyage3.github.io/toucans-30",
    githubLink: "https://github.com/chingu-voyage3/toucans-30"
  }, {
    id: 3,
    name: "Vanilla JavaScript Drum Kit",
    work: "JavaScript Project",
    stack: "HTML, CSS, JavaScript",
    tools: "Sublime Text, Chrome Dev Tools, Github, Codepen",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "pro-view-large-drum.jpg",
    srcset: "images/pro-view-small-drum.jpg 500w, images/pro-view-med-drum.jpg 800w, images/pro-view-large-drum.jpg 1094w",
    demoLink: "https://codepen.io/monalighosh/full/NyRrNZ",
    githubLink: "https://github.com/monalighosh/JavaScript30/tree/master/Day01"
  }, {
    id: 4,
    name: "Flexbox Pricing Table",
    work: "Flexbox Project",
    stack: "HTML, CSS",
    tools: "Sublime Text, Chrome Dev Tools, Github",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "pro-view-large-pricing-table.jpg",
    srcset: "images/pro-view-small-pricing-table.jpg 500w, images/pro-view-med-pricing-table.jpg 800w, images/pro-view-large-pricing-table.jpg 1094w",
    demoLink: "https://monalighosh.github.io/flexbox-pricing-table",
    githubLink: "https://github.com/monalighosh/flexbox-pricing-table"
  }, {
    id: 5,
    name: "Customer Manager App",
    work: "JavaScript Project",
    stack: "HTML, CSS, JavaScript",
    tools: "Sublime Text, Chrome Dev Tools, Github",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "pro-view-large-customer-app.jpg",
    srcset: "images/pro-view-small-customer-app.jpg 500w, images/pro-view-med-customer-app.jpg 800w, images/pro-view-large-customer-app.jpg 1094w",
    demoLink: "https://monalighosh.github.io/indexedDB-app",
    githubLink: "https://github.com/monalighosh/indexedDB-app"
  }, {
    id: 6,
    name: "Flexbox Image Gallery",
    work: "Flexbox Project",
    stack: "HTML, CSS",
    tools: "Sublime Text, Chrome Dev Tools, Github, Codepen",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "pro-view-large-image-gallery.jpg",
    srcset: "images/pro-view-small-image-gallery.jpg 500w, images/pro-view-med-image-gallery.jpg 800w, images/pro-view-large-image-gallery.jpg 1094w",
    demoLink: "https://monalighosh.github.io/flexbox-image-gallery/",
    githubLink: "https://github.com/monalighosh/flexbox-image-gallery"
  }, {
    id: 7,
    name: "jQuery ToDo App",
    work: "jQuery Project",
    stack: "HTML, CSS, JavaScript",
    tools: "Sublime Text, Chrome Dev Tools, Github",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "pro-view-large-todo.jpg",
    srcset: "images/pro-view-small-todo.jpg 500w, images/pro-view-med-todo.jpg 800w, images/pro-view-large-todo.jpg 1094w",
    demoLink: "https://monalighosh.github.io/jquery-todo-app",
    githubLink: "https://github.com/monalighosh/jquery-todo-app"
  }, {
    id: 8,
    name: "Hexagon Jigsaw Puzzle",
    work: "JavaScript Project",
    stack: "HTML, CSS, JavaScript",
    tools: "Photoshop, Sublime Text, SASS, Chrome Dev Tools, Github",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "pro-view-large-puzzle.jpg",
    srcset: "images/pro-view-small-puzzle.jpg 500w, images/pro-view-med-puzzle.jpg 800w, images/pro-view-large-puzzle.jpg 1094w",
    demoLink: "https://monalighosh.github.io/Hexagon-puzzle",
    githubLink: "https://github.com/monalighosh/Hexagon-puzzle"
  }, {
    id: 9,
    name: "Flex Panels Image Gallery",
    work: "Flexbox and JavaScript Project",
    stack: "HTML, CSS, JavaScript",
    tools: "Photoshop, Sublime Text, Chrome Dev Tools, Github, Codepen",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "pro-view-large-flexpanel.jpg",
    srcset: "images/pro-view-small-flexpanel.jpg 500w, images/pro-view-med-flexpanel.jpg 800w, images/pro-view-large-flexpanel.jpg 1094w",
    demoLink: "https://codepen.io/monalighosh/full/QQpzoy",
    githubLink: "https://github.com/monalighosh/JavaScript30/tree/master/Day05"
  }, {
    id: 10,
    name: "Innovative Image Gallery",
    work: "JavaScript Project",
    stack: "HTML, CSS, JavaScript",
    tools: "Photoshop, Sublime Text, SASS, Chrome Dev Tools, Github, Codepen",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "pro-view-large-innovative-gallery.jpg",
    srcset: "images/pro-view-small-innovative-gallery.jpg 500w, images/pro-view-med-innovative-gallery.jpg 800w, images/pro-view-large-innovative-gallery.jpg 1094w",
    demoLink: "https://monalighosh.github.io/innovative-image-gallery",
    githubLink: "https://github.com/monalighosh/innovative-image-gallery"
  }, {
    id: 11,
    name: "Update CSS Variables with JS",
    work: "CSS and JavaScript Project",
    stack: "HTML, CSS, JavaScript",
    tools: "Photoshop, Sublime Text, Chrome Dev Tools, Github, Codepen",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "pro-view-large-css-variables.jpg",
    srcset: "images/pro-view-small-css-variables.jpg 500w, images/pro-view-med-css-variables.jpg 800w, images/pro-view-large-css-variables.jpg 1094w",
    demoLink: "https://codepen.io/monalighosh/full/gvgaRz",
    githubLink: "https://github.com/monalighosh/JavaScript30/tree/master/Day03"
  }, {
    id: 12,
    name: "CSS + Vanilla JS Clock",
    work: "CSS and JavaScript Project",
    stack: "HTML, CSS, JavaScript",
    tools: "Photoshop, Sublime Text, Chrome Dev Tools, Github, Codepen",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "pro-view-large-clock.jpg",
    srcset: "images/pro-view-small-clock.jpg 500w, images/pro-view-med-clock.jpg 800w, images/pro-view-large-clock.jpg 1094w",
    demoLink: "https://codepen.io/monalighosh/full/ddOMOY",
    githubLink: "https://github.com/monalighosh/JavaScript30/tree/master/Day02"
  }];
  var modalTxDiv = document.querySelector(".projects__modal-text");
  var modalImgDiv = document.querySelector(".projects__modal-img");
  var textOutput = void 0;
  var imgOutput = void 0;

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
          textOutput = "<h1>" + project.name + "</h1>\n                  <p>" + project.work + "</p>\n                  <p>" + project.description + "</p>\n                  <p><span>Technology stack</span>: " + project.stack + "</p>\n                  <p><span>Tools used</span>: " + project.tools + "</p>\n                  <p><a href=\"" + project.demoLink + "\" title=\"Live Demo\" target=\"_blank\">Live Demo</a></p>\n                  <p><a href=\"" + project.githubLink + "\" title=\"View Github Repository\" target=\"_blank\">Github Repo</a></p>";
          imgOutput = "<img src=\"images/" + project.img + "\" srcset=\"" + project.srcset + "\" alt=\"" + project.name + " Large View\"/>";
          modalTxDiv.innerHTML = textOutput;
          modalImgDiv.innerHTML = imgOutput;
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
})();