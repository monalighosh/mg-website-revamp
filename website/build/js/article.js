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