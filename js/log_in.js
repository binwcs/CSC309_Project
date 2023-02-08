window.onload = function() {
document.getElementById("forgot-password-btn").addEventListener("click", function(event) {
event.preventDefault();
document.getElementById("forgot-password-form").style.display = "block";
document.getElementById("sign-up-form").style.display = "none";
document.querySelector("form").style.display = "none";
});

document.getElementById("back-to-login-btn").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("forgot-password-form").style.display = "none";
  document.getElementById("sign-up-form").style.display = "none";
  document.querySelector("form").style.display = "block";
});

document.getElementById("sign-up-btn").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("sign-up-form").style.display = "block";
  document.getElementById("forgot-password-form").style.display = "none";
  document.querySelector("form").style.display = "none";
});

document.getElementById("back-to-login-btn-2").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("sign-up-form").style.display = "none";
  document.getElementById("forgot-password-form").style.display = "none";
  document.querySelector("form").style.display = "block";
});}