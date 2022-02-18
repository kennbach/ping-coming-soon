"use strict";

// Get the form
const form = document.forms["subscribe"];

// Add event listener to the form
form.addEventListener("submit", function (event) {
  // clean up input
  const email = this.email.value.trim().toLowerCase();
  // create a test regex pattern
  let pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

  // test email against regex pattern
  if (email.match(pattern)) {
    // clean up styles
    document.getElementById("email").classList.remove("invalid");
    document
      .getElementById("invalid-email-message")
      .setAttribute("style", "display: none");
  } else {
    // prevent the form from submitting
    event.preventDefault();
    // add the error styles
    document
      .getElementById("invalid-email-message")
      .setAttribute("style", "display: block");
    document.getElementById("email").classList.add("invalid");
  }
});
