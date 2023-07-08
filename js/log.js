document.getElementById("login-tab").addEventListener("click", function () {
  document.getElementById("register-form").classList.remove("show", "active");
  document.getElementById("register-tab").classList.remove("active");
  document.getElementById("login-form").classList.add("show", "active");
  document.getElementById("login-tab").classList.add("active");
});

document.getElementById("register-tab").addEventListener("click", function () {
  document.getElementById("login-form").classList.remove("show", "active");
  document.getElementById("login-tab").classList.remove("active");
  document.getElementById("register-form").classList.add("show", "active");
  document.getElementById("register-tab").classList.add("active");
});

const streamContainer = document.querySelector('.stream-container');
const streamElements = streamContainer.querySelectorAll('.stream-element');

const containerHeight = streamContainer.clientHeight;
let offsetY = 0;

streamElements.forEach((element, index) => {
  element.style.top = offsetY + 'px';
  offsetY += element.clientHeight;

  if (offsetY >= containerHeight) {
    offsetY = 0;
  }

  // Reset the animation delay for each element
  element.style.animationDelay = `${index * 2}s`; // Adjust the delay as needed
});
