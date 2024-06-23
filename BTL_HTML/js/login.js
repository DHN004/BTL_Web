// JavaScript Code
$(document).ready(function() {
    // Show/Hide Sign In and Sign Up forms
    function showSignIn() {
      $("#signInForm").show();
      $("#signUpForm").hide();
      $("#signInTab").addClass("active");
      $("#signUpTab").removeClass("active");
    }
  
    function showSignUp() {
      $("#signInForm").hide();
      $("#signUpForm").show();
      $("#signUpTab").addClass("active");
      $("#signInTab").removeClass("active");
    }
  
    // Initial state
    showSignIn();
  
    // Event listeners
    $("#signInTab").click(function(e) {
      e.preventDefault();
      showSignIn();
    });
  
    $("#signUpTab").click(function(e) {
      e.preventDefault();
      showSignUp();
    });
  });