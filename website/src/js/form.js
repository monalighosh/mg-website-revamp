"use strict";
// Register submit event on contact form
const form = document.querySelector("#contact-form");
form.addEventListener("submit", submitFormData);

// Function to submit form data and display success or fail message
function submitFormData(e) {
  e.preventDefault();
  // Get form elements
  let formEles = [...e.target.elements];
  // New object to store user's data
  let formData = {};
  // Add form element's name attribute and value to newly created object
  formEles.forEach((ele) => {
    if(ele.tagName !== "BUTTON") {
      let attr = ele.getAttribute("name");
      formData[attr] = ele.value;
    }
  });
  // Create FormData object to store user's data tobe used in AJAX request
  let formDataToSend = new FormData();
  for(let key in formData) {
    formDataToSend.append(key, formData[key]);
  }
  // Create new div element for the form to display success or failure message
  const messageDiv =  document.querySelector(".form-submit-message");

  // Create AJAX request to load the success or fail message without reloading page
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "php/form.php");
  xhr.onload = function() {
    // If AJAX request status is success and response text from php form is "success" proceed further
    if(xhr.status === 200) {
      if(xhr.responseText == "Form submitted successfully!") {
        // Append new div element to form which displays thank you message
        messageDiv.style.opacity = "1";
        messageDiv.style.display = "block";
        messageDiv.innerHTML = `Thanks for being awesome ${formData.name}! I will get back to you as soon as possible.`;
        // Reset form
        e.target.reset();
      } else {
        // Append new div element to form which displays failure message
        messageDiv.style.opacity = "1";
        messageDiv.style.display = "block";
        messageDiv.innerHTML = `Sorry, form submission failed! Try again later!`;
      }
    }
  };
  // If AJAX request fails, log error message to console
  xhr.onerror = function() {
    console.error(`Request failed: ${xhr.responseText}`);
  };
  xhr.send(formDataToSend);
}
