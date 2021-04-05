"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}!function(){var l=[{id:"a1",articleLink:"articles/article-tools-i-cant-work-without.html"},{id:"a2",articleLink:"articles/article-javascript-hoisting.html"},{id:"a3",articleLink:"articles/article-javascript-closures.html"},{id:"a4",articleLink:"articles/article-aria-landmark-roles.html"}];document.querySelector(".articles__list").addEventListener("click",function(e){var t=e.target.parentElement.parentElement.getAttribute("id")||e.target.parentElement.getAttribute("id"),a=!0,o=!1,i=void 0;try{for(var r,n=l[Symbol.iterator]();!(a=(r=n.next()).done);a=!0){var s=r.value;s.id===t&&window.open(""+s.articleLink)}}catch(e){o=!0,i=e}finally{try{!a&&n.return&&n.return()}finally{if(o)throw i}}})}(),function(){var t=document.querySelector(".js-footer").querySelector(".js-footer-year");window.addEventListener("load",function(){var e=(new Date).getFullYear();t.textContent=e})}();var form=document.querySelector("#contact-form");function submitFormData(e){e.preventDefault();var t=[].concat(_toConsumableArray(e.target.elements)),a={};t.forEach(function(e){if("BUTTON"!==e.tagName){var t=e.getAttribute("name");a[t]=e.value}});var o=new FormData;for(var i in a)o.append(i,a[i]);var r=document.querySelector(".form-submit-message"),n=new XMLHttpRequest;n.open("POST","php/form.php"),n.onload=function(){200===n.status&&("Form submitted successfully!"==n.responseText?(r.style.opacity="1",r.style.display="block",r.innerHTML="Thanks for being awesome "+a.name+"! I will get back to you as soon as possible.",e.target.reset()):(r.style.opacity="1",r.style.display="block",r.innerHTML="Sorry, form submission failed! Try again later!"))},n.onerror=function(){console.error("Request failed: "+n.responseText)},n.send(o)}form.addEventListener("submit",submitFormData),function(){var a=document.querySelector("#projects"),o=document.querySelector(".mobile-nav-btn"),i=document.querySelector(".header"),t=document.querySelector(".mobile-nav"),e=document.querySelector(".mobile-nav__close-btn");function r(e){t.classList.remove("mobile-nav--active")}window.addEventListener("scroll",function(){var e=window.pageYOffset,t=a.offsetTop-40;t<=e?i.classList.add("compact-header"):i.classList.remove("compact-header"),o.style.top="20px"}),o.addEventListener("click",function(e){t.classList.add("mobile-nav--active")}),e.addEventListener("click",r),t.addEventListener("click",r)}(),console.log("%c\n(｡◕‿◕｡) \n    ","color: #045afa"),console.log("%c Hi there, fellow developer! Thanks for visiting.","padding: 9px; background:#045afa; line-height:25px; color: #fff;"),console.log("%c I'd love to hear what you think!","padding: 9px; background:#05dc81; line-height:25px; color: #fff;"),function(){var e=document.querySelector(".projects__gallery-list"),t=document.querySelector(".projects__modal"),a=document.querySelector(".projects__modal-wrapper"),o=document.querySelector(".projects__modal-close-btn"),l=[{id:1,name:"APC Pharma",work:"Website",stack:"HTML, CSS, JavaScript",tools:"Photoshop, Sublime Text, NPM, Gulp, SASS, Chrome Dev Tools, Github, Trello",description:"A refreshing new look to APC Pharma website.",img:"pro-view-large-apc.jpg",srcset:"images/pro-view-small-apc.jpg 500w, images/pro-view-med-apc.jpg 800w, images/pro-view-large-apc.jpg 1094w",demoLink:"http://www.apcpharma.com",githubLink:"https://github.com/monalighosh/apcpharma-website-revamp"},{id:2,name:"TickyBot",work:"Website (Hackathon Project)",stack:"HTML, CSS, JavaScript",tools:"Photoshop, Sublime Text, Chrome Dev Tools, Github, Trello",description:"TickyBot landing page which was built in the chingu cohort as part of Voyage 3.",img:"pro-view-large-tickybot.jpg",srcset:"images/pro-view-small-tickybot.jpg 500w, images/pro-view-med-tickybot.jpg 800w, images/pro-view-large-tickybot.jpg 1094w",demoLink:"https://chingu-voyage3.github.io/toucans-30",githubLink:"https://github.com/chingu-voyage3/toucans-30"},{id:3,name:"Vanilla JavaScript Drum Kit",work:"JavaScript Project",stack:"HTML, CSS, JavaScript",tools:"Sublime Text, Chrome Dev Tools, Github, Codepen",description:"Page displays a collection of letters that corresponds with a key on the keyboard, and the soundclip to be played when that button is clicked.",img:"pro-view-large-drum.jpg",srcset:"images/pro-view-small-drum.jpg 500w, images/pro-view-med-drum.jpg 800w, images/pro-view-large-drum.jpg 1094w",demoLink:"https://codepen.io/monalighosh/full/NyRrNZ",githubLink:"https://github.com/monalighosh/JavaScript30/tree/master/Day01"},{id:4,name:"Flexbox Pricing Table",work:"Flexbox Project",stack:"HTML, CSS",tools:"Sublime Text, Chrome Dev Tools, Github",description:"A responsive pricing table design build using flexbox.",img:"pro-view-large-pricing-table.jpg",srcset:"images/pro-view-small-pricing-table.jpg 500w, images/pro-view-med-pricing-table.jpg 800w, images/pro-view-large-pricing-table.jpg 1094w",demoLink:"https://monalighosh.github.io/flexbox-pricing-table",githubLink:"https://github.com/monalighosh/flexbox-pricing-table"},{id:5,name:"Customer Manager App",work:"JavaScript Project",stack:"HTML, CSS, JavaScript",tools:"Sublime Text, Chrome Dev Tools, Github",description:"Responsive customer manager app to maintain customer records that can be accessed online and offline.",img:"pro-view-large-customer-app.jpg",srcset:"images/pro-view-small-customer-app.jpg 500w, images/pro-view-med-customer-app.jpg 800w, images/pro-view-large-customer-app.jpg 1094w",demoLink:"https://monalighosh.github.io/indexedDB-app",githubLink:"https://github.com/monalighosh/indexedDB-app"},{id:6,name:"Flexbox Image Gallery",work:"Flexbox Project",stack:"HTML, CSS",tools:"Sublime Text, Chrome Dev Tools, Github, Codepen",description:"A responsive image gallery design build using flexbox.",img:"pro-view-large-image-gallery.jpg",srcset:"images/pro-view-small-image-gallery.jpg 500w, images/pro-view-med-image-gallery.jpg 800w, images/pro-view-large-image-gallery.jpg 1094w",demoLink:"https://monalighosh.github.io/flexbox-image-gallery/",githubLink:"https://github.com/monalighosh/flexbox-image-gallery"},{id:7,name:"jQuery ToDo App",work:"jQuery Project",stack:"HTML, CSS, JavaScript",tools:"Sublime Text, Chrome Dev Tools, Github",description:"Simple, easy to use responsive todo app for task management.",img:"pro-view-large-todo.jpg",srcset:"images/pro-view-small-todo.jpg 500w, images/pro-view-med-todo.jpg 800w, images/pro-view-large-todo.jpg 1094w",demoLink:"https://monalighosh.github.io/jquery-todo-app",githubLink:"https://github.com/monalighosh/jquery-todo-app"},{id:8,name:"Hexagon Jigsaw Puzzle",work:"JavaScript Project",stack:"HTML, CSS, JavaScript",tools:"Photoshop, Sublime Text, SASS, Chrome Dev Tools, Github",description:"Drag and drop fun game.",img:"pro-view-large-puzzle.jpg",srcset:"images/pro-view-small-puzzle.jpg 500w, images/pro-view-med-puzzle.jpg 800w, images/pro-view-large-puzzle.jpg 1094w",demoLink:"https://monalighosh.github.io/hexagon-puzzle-game",githubLink:"https://github.com/monalighosh/Hexagon-puzzle"},{id:9,name:"Flex Panels Image Gallery",work:"Flexbox and JavaScript Project",stack:"HTML, CSS, JavaScript",tools:"Photoshop, Sublime Text, Chrome Dev Tools, Github, Codepen",description:"A full page responsive image gallery design build using flexbox.",img:"pro-view-large-flexpanel.jpg",srcset:"images/pro-view-small-flexpanel.jpg 500w, images/pro-view-med-flexpanel.jpg 800w, images/pro-view-large-flexpanel.jpg 1094w",demoLink:"https://codepen.io/monalighosh/full/QQpzoy",githubLink:"https://github.com/monalighosh/JavaScript30/tree/master/Day05"},{id:10,name:"Innovative Image Gallery",work:"JavaScript Project",stack:"HTML, CSS, JavaScript",tools:"Photoshop, Sublime Text, SASS, Chrome Dev Tools, Github",description:"An innovative gallery component that can be used as an alternative to standard image gallery.",img:"pro-view-large-innovative-gallery.jpg",srcset:"images/pro-view-small-innovative-gallery.jpg 500w, images/pro-view-med-innovative-gallery.jpg 800w, images/pro-view-large-innovative-gallery.jpg 1094w",demoLink:"https://monalighosh.github.io/innovative-image-gallery",githubLink:"https://github.com/monalighosh/innovative-image-gallery"},{id:11,name:"CSS Variables with JS",work:"CSS and JavaScript Project",stack:"HTML, CSS, JavaScript",tools:"Photoshop, Sublime Text, Chrome Dev Tools, Github, Codepen",description:"Page displays an image &amp; 3 form inputs from which the user can manipulate the padding, blur &amp; background color of the image.",img:"pro-view-large-css-variables.jpg",srcset:"images/pro-view-small-css-variables.jpg 500w, images/pro-view-med-css-variables.jpg 800w, images/pro-view-large-css-variables.jpg 1094w",demoLink:"https://codepen.io/monalighosh/full/gvgaRz",githubLink:"https://github.com/monalighosh/JavaScript30/tree/master/Day03"},{id:12,name:"CSS + Vanilla JS Clock",work:"CSS and JavaScript Project",stack:"HTML, CSS, JavaScript",tools:"Photoshop, Sublime Text, Chrome Dev Tools, Github, Codepen",description:"An analog clock created with CSS, &amp; the JavaScript necessary to make the clock functional.",img:"pro-view-large-clock.jpg",srcset:"images/pro-view-small-clock.jpg 500w, images/pro-view-med-clock.jpg 800w, images/pro-view-large-clock.jpg 1094w",demoLink:"https://codepen.io/monalighosh/full/ddOMOY",githubLink:"https://github.com/monalighosh/JavaScript30/tree/master/Day02"}],p=document.querySelector(".projects__modal-text"),c=document.querySelector(".projects__modal-img"),m=void 0,g=void 0;e.addEventListener("click",function(e){t.className="projects__modal projects--modal-active",a.className="projects__modal-wrapper projects--content-active",o.style.opacity=1,function(e){var t=e.target,a=!0,o=!1,i=void 0;try{for(var r,n=l[Symbol.iterator]();!(a=(r=n.next()).done);a=!0){var s=r.value;if(s.id===parseInt(t.id)&&(1100<window.innerWidth||window.innerWidth<601)){m="<h1>"+s.name+'</h1>\n                  <p class="projects__modal-text-subhead">'+s.work+"</p>\n                  <p>"+s.description+"</p>\n                  <p><span>Technology stack</span>: "+s.stack+"</p>\n                  <p><span>Tools used</span>: "+s.tools+'</p>\n                  <p>\n                    <span><a href="'+s.demoLink+'" title="Live Demo" target="_blank">Launch Project</a></span>\n                    <span><a href="'+s.githubLink+'" title="View Github Repository" target="_blank">Github Repo</a></span>\n                  </p>',g='<img src="images/'+s.img+'" srcset="'+s.srcset+'" alt="'+s.name+' Large View"/>',p.innerHTML=m,c.innerHTML=g;break}if(s.id===parseInt(t.id)&&window.innerHeight<window.innerWidth){m="<h1>"+s.name+" <span>("+s.work+")</span></h1>\n                  <p>"+s.description+"</p>\n                  <p><span>Technology stack</span>: "+s.stack+"</p>\n                  <p><span>Tools used</span>: "+s.tools+'</p>\n                  <p>\n                    <span><a href="'+s.demoLink+'" title="Live Demo" target="_blank">Launch Project</a></span>\n                    <span><a href="'+s.githubLink+'" title="View Github Repository" target="_blank">Github Repo</a></span>\n                  </p>',g='<img src="images/'+s.img+'" srcset="'+s.srcset+'" alt="'+s.name+' Large View"/>',p.innerHTML=m,c.innerHTML=g;break}if(s.id===parseInt(t.id)&&window.innerWidth<=1100&&400<window.innerHeight){m="<h1>"+s.name+'</h1>\n                      <div>\n                        <p class="projects__modal-text-subhead">'+s.work+"</p>\n                        <p>"+s.description+"</p>\n                      </div>\n                      <div>\n                        <p><span>Technology stack</span>: "+s.stack+"</p>\n                        <p><span>Tools used</span>: "+s.tools+'</p>\n                        <p>\n                        <span><a href="'+s.demoLink+'" title="Live Demo" target="_blank">Launch Project</a></span>\n                        <span><a href="'+s.githubLink+'" title="View Github Repository" target="_blank">Github Repo</a></span>\n                        </p>\n                      </div>',g='<img src="images/'+s.img+'" srcset="'+s.srcset+'" alt="'+s.name+' Large View"/>',p.innerHTML=m,c.innerHTML=g;break}}}catch(e){o=!0,i=e}finally{try{!a&&n.return&&n.return()}finally{if(o)throw i}}}(e)}),o.addEventListener("click",function(e){t.className="projects__modal projects--modal-inactive",a.className="projects__modal-wrapper projects--content-inactive",o.style.opacity=0}),window.addEventListener("click",function(e){e.target===t&&(e.target.className="projects__modal projects--modal-inactive",a.className="projects__modal-wrapper projects--content-inactive",o.style.opacity=0)})}();