let rotationSpeed = 0.6; // Initial rotation speed
let backgroundColors = ['#FF5733', '#FFBD33', '#FFEB33', '#C4FF33', '#33FF77', '#33FFEB', '#33B2FF', '#335BFF', '#6733FF', '#B033FF'];
let currentColorIndex = 0;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  
  // Call the changeBackgroundColor function every 5 seconds
  setInterval(changeBackgroundColor, 5000);
}

function draw() {
  // Set the background color
  background(backgroundColors[currentColorIndex]);

  translate(width / 2, height / 2);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();
  let mil = millis(); // Include milliseconds

  strokeWeight(8);
  noFill();

  // Calculate angles with milliseconds for smooth motion
  let secondAngle = map(sc + mil / 1000, 0, 60, 0, 360);
  let minuteAngle = map(mn + sc / 60 + mil / (60 * 1000), 0, 60, 0, 360);
  let hourAngle = map(hr % 12 + mn / 60 + sc / (60 * 60) + mil / (60 * 60 * 1000), 0, 12, 0, 360);

  // Draw clock hands
  push();
  rotate(secondAngle * rotationSpeed);
  stroke(255, 100, 150);
  line(0, 0, 100, 0);
  pop();


  // Draw center point
  stroke(255);
  point(0, 0);
}

// Adjust rotation speed based on mouse scrolling
function mouseWheel(event) {
  rotationSpeed += event.delta / 1000; // Adjust the divisor to control speed
  return false; // Prevent default behavior
}

// Function to change the background color
function changeBackgroundColor() {
  // Increment the current color index or reset it to 0 if it reaches the end of the array
  currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
}
