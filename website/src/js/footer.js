(function() {
  "use strict";
  /*
    Display footer copyright year functionality
  */
  const footer = document.querySelector(".js-footer");
  const footerYear = footer.querySelector(".js-footer-year");
  window.addEventListener('load', updateFooterCopyrightYear);

  function updateFooterCopyrightYear() {
    const currentYear = new Date().getFullYear();
    footerYear.textContent = currentYear;
  }
})();