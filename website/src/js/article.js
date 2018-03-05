(function() {
  "use strict";
  /* 
    Article read more functionality
  */
  let articleData = [
    {
      id: "a1",
      articleLink: "articles/article-tools-i-cant-work-without.html"
    },
    {
      id: "a2",
      articleLink: "articles/article-javascript-hoisting.html"
    },
    {
      id: "a3",
      articleLink: "articles/article-javascript-closures.html"
    },
    {
      id: "a4",
      articleLink: "articles/article-aria-landmark-roles.html"
    }
    ];
  const articleBtnsList = document.querySelector(".articles__list");
  articleBtnsList.addEventListener("click", showArticle);

  function showArticle(e) {
    let articleId = e.target.parentElement.parentElement.getAttribute("id") || e.target.parentElement.getAttribute("id");
    for(let article of articleData) {
      if(article.id === articleId) {
        window.open(`${article.articleLink}`);
      }
    }
  }

})();