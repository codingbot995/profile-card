// Display current time in milliseconds
const timeElement = document.getElementById("currentTime");

function updateTime() {
  timeElement.textContent = Date.now();
}

updateTime(); // show immediately
setInterval(updateTime, 1000); // update every second
