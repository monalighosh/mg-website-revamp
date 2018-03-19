(function() {
  "use strict";
  /* 
  Projects modal functionality 
  */
  const galleryList = document.querySelector(".projects__gallery-list");
  const modal = document.querySelector(".projects__modal");
  const modalContent = document.querySelector(".projects__modal-wrapper");
  const closeBtn = document.querySelector(".projects__modal-close-btn");
  const projectData = [
    {
      id: 1,
      name: "APC Pharma",
      work: "Website",
      stack: "HTML, CSS, JavaScript",
      tools: "Photoshop, Sublime Text, NPM, Gulp, SASS, Chrome Dev Tools, Github, Trello",
      description: "A refreshing new look to APC Pharma website.",
      img: "pro-view-large-apc.jpg",
      srcset: "images/pro-view-small-apc.jpg 500w, images/pro-view-med-apc.jpg 800w, images/pro-view-large-apc.jpg 1094w",
      demoLink: "http://www.apcpharma.com",
      githubLink: "https://github.com/monalighosh/apcpharma-website-revamp"
    },
    {
      id: 2,
      name: "TickyBot",
      work: "Website (Hackathon Project)",
      stack: "HTML, CSS, JavaScript",
      tools: "Photoshop, Sublime Text, Chrome Dev Tools, Github, Trello",
      description: "TickyBot landing page which was built in the chingu cohort as part of Voyage 3.",
      img: "pro-view-large-tickybot.jpg",
      srcset: "images/pro-view-small-tickybot.jpg 500w, images/pro-view-med-tickybot.jpg 800w, images/pro-view-large-tickybot.jpg 1094w",
      demoLink: "https://chingu-voyage3.github.io/toucans-30",
      githubLink: "https://github.com/chingu-voyage3/toucans-30"
    },
    {
      id: 3,
      name: "Vanilla JavaScript Drum Kit",
      work: "JavaScript Project",
      stack: "HTML, CSS, JavaScript",
      tools: "Sublime Text, Chrome Dev Tools, Github, Codepen",
      description: "Page displays a collection of letters that corresponds with a key on the keyboard, and the soundclip to be played when that button is clicked.",
      img: "pro-view-large-drum.jpg",
      srcset: "images/pro-view-small-drum.jpg 500w, images/pro-view-med-drum.jpg 800w, images/pro-view-large-drum.jpg 1094w",
      demoLink: "https://codepen.io/monalighosh/full/NyRrNZ",
      githubLink: "https://github.com/monalighosh/JavaScript30/tree/master/Day01"
    },
    {
      id: 4,
      name: "Flexbox Pricing Table",
      work: "Flexbox Project",
      stack: "HTML, CSS",
      tools: "Sublime Text, Chrome Dev Tools, Github",
      description: "A responsive pricing table design build using flexbox.",
      img: "pro-view-large-pricing-table.jpg",
      srcset: "images/pro-view-small-pricing-table.jpg 500w, images/pro-view-med-pricing-table.jpg 800w, images/pro-view-large-pricing-table.jpg 1094w",
      demoLink: "https://monalighosh.github.io/flexbox-pricing-table",
      githubLink: "https://github.com/monalighosh/flexbox-pricing-table"
    },
    {
      id: 5,
      name: "Customer Manager App",
      work: "JavaScript Project",
      stack: "HTML, CSS, JavaScript",
      tools: "Sublime Text, Chrome Dev Tools, Github",
      description: "Responsive customer manager app to maintain customer records that can be accessed online and offline.",
      img: "pro-view-large-customer-app.jpg",
      srcset: "images/pro-view-small-customer-app.jpg 500w, images/pro-view-med-customer-app.jpg 800w, images/pro-view-large-customer-app.jpg 1094w",
      demoLink: "https://monalighosh.github.io/indexedDB-app",
      githubLink: "https://github.com/monalighosh/indexedDB-app"
    },
    {
      id: 6,
      name: "Flexbox Image Gallery",
      work: "Flexbox Project",
      stack: "HTML, CSS",
      tools: "Sublime Text, Chrome Dev Tools, Github, Codepen",
      description: "A responsive image gallery design build using flexbox.",
      img: "pro-view-large-image-gallery.jpg",
      srcset: "images/pro-view-small-image-gallery.jpg 500w, images/pro-view-med-image-gallery.jpg 800w, images/pro-view-large-image-gallery.jpg 1094w",
      demoLink: "https://monalighosh.github.io/flexbox-image-gallery/",
      githubLink: "https://github.com/monalighosh/flexbox-image-gallery"
    },
    {
      id: 7,
      name: "jQuery ToDo App",
      work: "jQuery Project",
      stack: "HTML, CSS, JavaScript",
      tools: "Sublime Text, Chrome Dev Tools, Github",
      description: "Simple, easy to use responsive todo app for task management.",
      img: "pro-view-large-todo.jpg",
      srcset: "images/pro-view-small-todo.jpg 500w, images/pro-view-med-todo.jpg 800w, images/pro-view-large-todo.jpg 1094w",
      demoLink: "https://monalighosh.github.io/jquery-todo-app",
      githubLink: "https://github.com/monalighosh/jquery-todo-app"
    },
    {
      id: 8,
      name: "Hexagon Jigsaw Puzzle",
      work: "JavaScript Project",
      stack: "HTML, CSS, JavaScript",
      tools: "Photoshop, Sublime Text, SASS, Chrome Dev Tools, Github",
      description: "Drag and drop fun game.",
      img: "pro-view-large-puzzle.jpg",
      srcset: "images/pro-view-small-puzzle.jpg 500w, images/pro-view-med-puzzle.jpg 800w, images/pro-view-large-puzzle.jpg 1094w",
      demoLink: "https://monalighosh.github.io/hexagon-puzzle-game",
      githubLink: "https://github.com/monalighosh/Hexagon-puzzle"
    },
    {
      id: 9,
      name: "Flex Panels Image Gallery",
      work: "Flexbox and JavaScript Project",
      stack: "HTML, CSS, JavaScript",
      tools: "Photoshop, Sublime Text, Chrome Dev Tools, Github, Codepen",
      description: "A full page responsive image gallery design build using flexbox.",
      img: "pro-view-large-flexpanel.jpg",
      srcset: "images/pro-view-small-flexpanel.jpg 500w, images/pro-view-med-flexpanel.jpg 800w, images/pro-view-large-flexpanel.jpg 1094w",
      demoLink: "https://codepen.io/monalighosh/full/QQpzoy",
      githubLink: "https://github.com/monalighosh/JavaScript30/tree/master/Day05"
    },
    {
      id: 10,
      name: "Innovative Image Gallery",
      work: "JavaScript Project",
      stack: "HTML, CSS, JavaScript",
      tools: "Photoshop, Sublime Text, SASS, Chrome Dev Tools, Github",
      description: "An innovative gallery component that can be used as an alternative to standard image gallery.",
      img: "pro-view-large-innovative-gallery.jpg",
      srcset: "images/pro-view-small-innovative-gallery.jpg 500w, images/pro-view-med-innovative-gallery.jpg 800w, images/pro-view-large-innovative-gallery.jpg 1094w",
      demoLink: "https://monalighosh.github.io/innovative-image-gallery",
      githubLink: "https://github.com/monalighosh/innovative-image-gallery"
    },
    {
      id: 11,
      name: "CSS Variables with JS",
      work: "CSS and JavaScript Project",
      stack: "HTML, CSS, JavaScript",
      tools: "Photoshop, Sublime Text, Chrome Dev Tools, Github, Codepen",
      description: "Page displays an image &amp; 3 form inputs from which the user can manipulate the padding, blur &amp; background color of the image.",
      img: "pro-view-large-css-variables.jpg",
      srcset: "images/pro-view-small-css-variables.jpg 500w, images/pro-view-med-css-variables.jpg 800w, images/pro-view-large-css-variables.jpg 1094w",
      demoLink: "https://codepen.io/monalighosh/full/gvgaRz",
      githubLink: "https://github.com/monalighosh/JavaScript30/tree/master/Day03"
    },
    {
      id: 12,
      name: "CSS + Vanilla JS Clock",
      work: "CSS and JavaScript Project",
      stack: "HTML, CSS, JavaScript",
      tools: "Photoshop, Sublime Text, Chrome Dev Tools, Github, Codepen",
      description: "An analog clock created with CSS, &amp; the JavaScript necessary to make the clock functional.",
      img: "pro-view-large-clock.jpg",
      srcset: "images/pro-view-small-clock.jpg 500w, images/pro-view-med-clock.jpg 800w, images/pro-view-large-clock.jpg 1094w",
      demoLink: "https://codepen.io/monalighosh/full/ddOMOY",
      githubLink: "https://github.com/monalighosh/JavaScript30/tree/master/Day02"
    }
    ];
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
      if(project.id === parseInt(currentProject.id) && (window.innerWidth > 1100 || window.innerWidth < 601)) {
        textOutput = `<h1>${project.name}</h1>
                  <p class="projects__modal-text-subhead">${project.work}</p>
                  <p>${project.description}</p>
                  <p><span>Technology stack</span>: ${project.stack}</p>
                  <p><span>Tools used</span>: ${project.tools}</p>
                  <p>
                    <span><a href="${project.demoLink}" title="Live Demo" target="_blank">Launch Project</a></span>
                    <span><a href="${project.githubLink}" title="View Github Repository" target="_blank">Github Repo</a></span>
                  </p>`;
        imgOutput = `<img src="images/${project.img}" srcset="${project.srcset}" alt="${project.name} Large View"/>`;          
        modalTxDiv.innerHTML = textOutput;
        modalImgDiv.innerHTML = imgOutput;
        break;
      } else if (project.id === parseInt(currentProject.id) && (window.innerHeight <  window.innerWidth)) {
        textOutput = `<h1>${project.name} <span>(${project.work})</span></h1>
                  <p>${project.description}</p>
                  <p><span>Technology stack</span>: ${project.stack}</p>
                  <p><span>Tools used</span>: ${project.tools}</p>
                  <p>
                    <span><a href="${project.demoLink}" title="Live Demo" target="_blank">Launch Project</a></span>
                    <span><a href="${project.githubLink}" title="View Github Repository" target="_blank">Github Repo</a></span>
                  </p>`;
        imgOutput = `<img src="images/${project.img}" srcset="${project.srcset}" alt="${project.name} Large View"/>`;          
        modalTxDiv.innerHTML = textOutput;
        modalImgDiv.innerHTML = imgOutput;
        break;
      } else if(project.id === parseInt(currentProject.id) && window.innerWidth <= 1100 && window.innerHeight > 400) {
        textOutput = `<h1>${project.name}</h1>
                      <div>
                        <p class="projects__modal-text-subhead">${project.work}</p>
                        <p>${project.description}</p>
                      </div>
                      <div>
                        <p><span>Technology stack</span>: ${project.stack}</p>
                        <p><span>Tools used</span>: ${project.tools}</p>
                        <p>
                        <span><a href="${project.demoLink}" title="Live Demo" target="_blank">Launch Project</a></span>
                        <span><a href="${project.githubLink}" title="View Github Repository" target="_blank">Github Repo</a></span>
                        </p>
                      </div>`;
        imgOutput = `<img src="images/${project.img}" srcset="${project.srcset}" alt="${project.name} Large View"/>`;          
        modalTxDiv.innerHTML = textOutput;
        modalImgDiv.innerHTML = imgOutput;
        break;
      }
    }
  }
    
})();