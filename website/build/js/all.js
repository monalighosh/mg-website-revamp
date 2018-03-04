"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}var sectionProjects=document.querySelector("#projects"),mobileNavBtn=document.querySelector(".mobile-nav-btn"),header=document.querySelector(".header");function showCompactHeader(){window.pageYOffset>=sectionProjects.offsetTop-40?(header.classList.add("compact-header"),mobileNavBtn.style.top="20px"):(header.classList.remove("compact-header"),mobileNavBtn.style.top="38px")}window.addEventListener("scroll",showCompactHeader);var galleryList=document.querySelector(".projects__gallery-list"),modal=document.querySelector(".projects__modal"),modalContent=document.querySelector(".projects__modal-wrapper"),closeBtn=document.querySelector(".projects__modal-close-btn"),projectData=[{id:1,name:"APC Pharma",work:"Website",tools:"HTML, CSS, JavaScript",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",img:"projectview-apc.jpg",demoLink:"http://www.apcpharma.com",githubLink:"https://github.com/monalighosh/apcpharma-website-revamp"},{id:2,name:"TickyBot",work:"Website (Hackathon Project)",tools:"HTML, CSS, JavaScript",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",img:"projectview-tickybot.jpg",demoLink:"https://chingu-voyage3.github.io/toucans-30",githubLink:"https://github.com/chingu-voyage3/toucans-30"},{id:3,name:"Vanilla JavaScript Drum Kit",work:"JavaScript Project",tools:"HTML, CSS, JavaScript",description:"An HTML page displays a collection of div elements, each containing a letter that corresponds with a key on the keyboard, and the name of the soundclip to be played when that button is clicked. When a user presses a key that matches one of the letters displayed in the div elements, the page should play the corresponding soundclip and place a temporary 'highlight' (or border) around the div. Write the JavaScript code necessary to add this functionality.",img:"projectview-drumkit.jpg",demoLink:"https://codepen.io/monalighosh/full/NyRrNZ",githubLink:"https://github.com/monalighosh/JavaScript30/tree/master/Day01"},{id:4,name:"Flexbox Pricing Table",work:"Flexbox Project",tools:"HTML, CSS",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",img:"projectview-pricing.jpg",demoLink:"https://monalighosh.github.io/flexbox-pricing-table",githubLink:"https://github.com/monalighosh/flexbox-pricing-table"},{id:5,name:"Customer Manager App",work:"JavaScript Project",tools:"HTML, CSS, JavaScript",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",img:"projectview-customapp.jpg",demoLink:"https://monalighosh.github.io/indexedDB-app",githubLink:"https://github.com/monalighosh/indexedDB-app"},{id:6,name:"Flexbox Image Gallery",work:"Flexbox Project",tools:"HTML, CSS, JavaScript",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",img:"projectview-gallery.jpg",demoLink:"https://monalighosh.github.io/flexbox-image-gallery/",githubLink:"https://github.com/monalighosh/flexbox-image-gallery"},{id:7,name:"jQuery ToDo App",work:"jQuery Project",tools:"HTML, CSS, JavaScript",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",img:"projectview-todo.jpg",demoLink:"https://monalighosh.github.io/jquery-todo-app",githubLink:"https://github.com/monalighosh/jquery-todo-app"},{id:8,name:"Hexagon Jigsaw Puzzle",work:"JavaScript Project",tools:"HTML, CSS, JavaScript",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",img:"projectview-hexagone.jpg",demoLink:"https://monalighosh.github.io/Hexagon-puzzle",githubLink:"https://github.com/monalighosh/Hexagon-puzzle"},{id:9,name:"Flex Panels Image Gallery",work:"Flexbox and JavaScript Project",tools:"HTML, CSS, JavaScript",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",img:"projectview-flex-panel-gallery.jpg",demoLink:"https://codepen.io/monalighosh/full/QQpzoy",githubLink:"https://github.com/monalighosh/JavaScript30/tree/master/Day05"},{id:10,name:"Innovative Image Gallery",work:"JavaScript Project",tools:"HTML, CSS, JavaScript",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",img:"projectview-innovative-gallery.jpg",demoLink:"https://codepen.io/monalighosh/full/QQpzoy",githubLink:"https://github.com/monalighosh/JavaScript30/tree/master/Day05"},{id:11,name:"Update CSS Variables with JS",work:"CSS and JavaScript Project",tools:"HTML, CSS, JavaScript",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",img:"projectview-css-variables.jpg",demoLink:"https://codepen.io/monalighosh/full/gvgaRz",githubLink:"https://github.com/monalighosh/JavaScript30/tree/master/Day03"},{id:12,name:"CSS + Vanilla JS Clock",work:"CSS and JavaScript Project",tools:"HTML, CSS, JavaScript",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",img:"projectview-clock.jpg",demoLink:"https://codepen.io/monalighosh/full/ddOMOY",githubLink:"https://github.com/monalighosh/JavaScript30/tree/master/Day02"}],modalTxDiv=document.querySelector(".projects__modal-text"),modalImgDiv=document.querySelector(".projects__modal-img"),textOutput=void 0,imgOutput=void 0;function showProjectDetails(e){modal.className="projects__modal projects--modal-active",modalContent.className="projects__modal-wrapper projects--content-active",closeBtn.style.opacity=1,appendProjectDetails(e)}function closeModalOnBtnClick(e){modal.className="projects__modal projects--modal-inactive",modalContent.className="projects__modal-wrapper projects--content-inactive",closeBtn.style.opacity=0}function closeModalOnOutsideClick(e){e.target===modal&&(e.target.className="projects__modal projects--modal-inactive",modalContent.className="projects__modal-wrapper projects--content-inactive",closeBtn.style.opacity=0)}function appendProjectDetails(e){var t=e.target,o=!0,i=!1,a=void 0;try{for(var n,r=projectData[Symbol.iterator]();!(o=(n=r.next()).done);o=!0){var s=n.value;if(s.id===parseInt(t.id)){textOutput="<h1>"+s.name+"</h1>\n                <p>"+s.work+"</p>\n                <p>"+s.description+"</p>\n                <p>Tools used: "+s.tools+'</p>\n                <p><a href="'+s.demoLink+'" title="Live Demo" target="_blank">Live Demo</a></p>\n                <p><a href="'+s.githubLink+'" title="View Github Repository" target="_blank">Github Repo</a></p>',imgOutput='<img src="images/'+s.img+'" alt="'+s.name+' View"/>',modalTxDiv.innerHTML=textOutput,modalImgDiv.innerHTML=imgOutput;break}}}catch(e){i=!0,a=e}finally{try{!o&&r.return&&r.return()}finally{if(i)throw a}}}galleryList.addEventListener("click",showProjectDetails),closeBtn.addEventListener("click",closeModalOnBtnClick),window.addEventListener("click",closeModalOnOutsideClick);var articleData=[{id:"a1",articleLink:"articles/article-tools-i-cant-work-without.html"},{id:"a2",articleLink:"articles/article-javascript-hoisting.html"},{id:"a3",articleLink:"articles/article-javascript-closures.html"},{id:"a4",articleLink:"articles/article-aria-landmark-roles.html"}],articleBtnsList=document.querySelector(".articles__list");function showArticle(e){var t=e.target.parentElement.parentElement.getAttribute("id")||e.target.parentElement.getAttribute("id"),o=!0,i=!1,a=void 0;try{for(var n,r=articleData[Symbol.iterator]();!(o=(n=r.next()).done);o=!0){var s=n.value;s.id===t&&window.open(""+s.articleLink)}}catch(e){i=!0,a=e}finally{try{!o&&r.return&&r.return()}finally{if(i)throw a}}}articleBtnsList.addEventListener("click",showArticle);var navList=document.querySelector(".header__nav-list");navList.addEventListener("click",scrollToSection),navList.addEventListener("click",showActiveLink);var distance=40,speed=15,scrollY=0;function scrollToSection(e){e.preventDefault();var t=e.target.parentElement.getAttribute("href"),o=window.pageYOffset,i=document.querySelector(t).offsetTop,a=document.body.offsetHeight,n=o+window.innerHeight,r=setTimeout(function(){scrollToSection(e)},speed);n>a?clearTimeout(r):o<i-distance?(scrollY=o+distance,window.scrollTo(0,scrollY)):o>i?(scrollY=o-distance,window.scrollTo(0,scrollY)):clearTimeout(r)}var lis=[].concat(_toConsumableArray(document.querySelectorAll(".header__nav-items")));function showActiveLink(e){var t=e.target.parentElement,o=!0,i=!1,a=void 0;try{for(var n,r=lis[Symbol.iterator]();!(o=(n=r.next()).done);o=!0){var s=n.value;if(s.children[0].classList.contains("active-link")){s.children[0].classList.add("header__nav-links"),s.children[0].classList.remove("active-link"),t.classList.add("active-link"),t.classList.remove("header__nav-links");break}}}catch(e){i=!0,a=e}finally{try{!o&&r.return&&r.return()}finally{if(i)throw a}}}var mobileNav=document.querySelector(".mobile-nav"),mobileCloseBtn=document.querySelector(".mobile-nav__close-btn");function toggleMobileNav(e){mobileNav.classList.toggle("mobile-nav--active")}mobileNavBtn.addEventListener("click",toggleMobileNav),mobileCloseBtn.addEventListener("click",toggleMobileNav);