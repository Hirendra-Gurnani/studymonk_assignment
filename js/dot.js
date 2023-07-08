var dot = document.getElementById('trailing-dot');
var mouseX = 0;
var mouseY = 0;
var posX = 0;
var posY = 0;
var isClicked = false;

function updatePosition() {
  var easingFactor = 0.15;  // Adjust this value to control the looseness of the motion
  var dx = mouseX - posX;
  var dy = mouseY - posY;
  posX += dx * easingFactor;
  posY += dy * easingFactor;
  
  var dotSize = isClicked ? 20 : 10;  // Adjust the dot size based on click state
  dot.style.width = dotSize + 'px';
  dot.style.height = dotSize + 'px';
  
  dot.style.left = posX + 'px';
  dot.style.top = posY + 'px';
  requestAnimationFrame(updatePosition);
}

document.addEventListener('mousemove', function(event) {
  mouseX = event.pageX;
  mouseY = event.pageY;
});

document.addEventListener('mouseover', function(event) {
  var target = event.target;
  if (target.matches('button, a')) {
    dot.classList.add('hovered');
  }
});

document.addEventListener('mouseout', function(event) {
  var target = event.target;
  if (target.matches('button, a')) {
    dot.classList.remove('hovered');
  }
});

document.addEventListener('click', function(event) {
  var target = event.target;
  if (target.matches('button, a')) {
    isClicked = true;
    setTimeout(function() {
      isClicked = false;
    }, 100);
  }
});

updatePosition();